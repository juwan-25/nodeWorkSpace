const express = require('express')
    , path= require('path');

const expressSession = require('express-session');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

let MongoClient = require('mongodb').MongoClient;

var database;
function connectDB() {
    var databaseUrl = 'mongodb://127.0.0.1:27017/local';

    MongoClient.connect(databaseUrl, (err, db) => {
        if(err) throw err;

        console.log('connected!');
        database = db.db('local');
    })
}

app.get('/', (req,res) => {
    console.log('index 호출');
    res.render('index');
});

app.post("/login", (req, res) => {
    console.log('index 호출');
     
    let paramId = req.body.id || req.query.id;
    let paramPass = req.body.password || req.query.password;

    if(database) {
        authUser(database, paramId, paramPass, (err, docs) => {
            if(err) throw err;
            if(docs) {
                console.dir(docs);

                var username = docs[0].name;
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>로그인 성공</h1>');
                res.write('<div><p>사용자 아이디 : '+paramId+'</p></div>');
                res.write('<div><p>사용자 이름 : '+username+'</p></div>');
                res.write('<br><br><a href="/">다시 로그인하기</a>');
                res.end();
            } else {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h1>로그인 실패</h1>');
                res.write('<div><p>올바른 아이디와 패스워드를 입력하세요!</p></div>');
                res.write('<br><br><a href="/">다시 로그인하기</a>');
                res.end();
            }
        });
    } else {
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h1>데이터베이스 연결 실패</h1>');
        res.end();
    }

});

let authUser = (database, id, password, callback) => {
    console.log('authUser 호출');

    let users = database.collection('users');

    users.find({"id":id, "pass":password}).toArray((err, docs) => {
        if(err) {
            callback(err, null); 
            return;
        }
        
        if(docs.length > 0) {
            callback(docs, null); 
        } else {
            callback(null, null); 
        }
    });
}

app.listen(3000, ()=>{
    connectDB();
});