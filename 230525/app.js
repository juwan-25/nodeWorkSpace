const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mysql = require('mysql');
const app = express();

const dbconn = mysql.createConnection( {
    user:'root',
    password:'mirim',
    database:'mirimDB'
});

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({ extended: false }));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰 폴더
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    console.log('login get');
    res.render('login'); 
});

app.post('/', (req, res) => {
    var id = req.body.id;
    var password = req.body.password;
    if (id && password) {
        dbconn.query('select * from userTbl where id = ? and password = ?', 
            [id, password], 
            (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    res.send('<script type="text/javascript">alert("로그인 성공!"); document.location.href="/list";</script>');
                } else {              
                    res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/";</script>');    
                }            
        });
    } else {        
        res.send('<script type="text/javascript">alert("id와 password를 입력하세요!"); document.location.href="/";</script>');    
    }
});

app.get('/list', (req, res) => {
    console.log('/ get');
    dbconn.query('select * from userTbl', (err, results) => {
        if(err) {
            console.log('db select error' + err);
        } else {
            console.log(results);
            res.render('list', {datalist: results});
        }
    });
});


app.get('/logout', (req, res) => {
    req.session.loggedin = false;
    req.send('<script type="text/javascript">alert("성공적으로 로그아웃 되었습니다."); document.location.href="/";</script>');    
});

app.get('/insert', (req, res) => {
    console.log('insert get');
    res.render('insert'); 
})

app.post('/insert', (req, res) => {
    console.log('insert post');
    dbconn.query('insert into userTbl(id, password, name, tel, email) values (?, ?, ?, ?, ?)', 
        [req.body.id, req.body.password, req.body.name, req.body.tel, req.body.email], 
        (err, results) => {
        if(err) {
            console.log('db insert error' + err);
        } else {
            console.log(`insert ok`);
        }
        res.redirect('/result');
    })
})

app.get('/result', (req, res) => {
    console.log('insert success');
    res.render('result'); 
})

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})

