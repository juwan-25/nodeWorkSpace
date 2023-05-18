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


app.get('/', (req,res) => {
    dbconn.connect();
    dbconn.query('select * from todoTbl', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.render('list', { datalist: result});
        }
    }); 
    dbconn.end();
})


app.listen(3000, () => {
    console.log('http://localhost:3000/');
})

