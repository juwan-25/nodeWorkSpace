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
    console.log('/ get');
    //dbconn.connect();
    dbconn.query('select * from todotbl', (err, results) => {
        if(err) {
            console.log('db select error' + err);
        } else {
            console.log(results);
            res.render('list', {datalist: results});
        }
    });
    //dbconn.end();
});

// insert url get 방식
app.get('/insert', (req, res) => {
    console.log('insert get');
    res.render('insert'); //insert.ejs
})

// insert url post 방식
app.post('/insert', (req, res) => {
    console.log('insert post');
    dbconn.query('insert into todotbl(id, contents, yesno) values (null, ?, ?)', [req.body.contents, req.body.yesno], (err, results) => {
        if(err) {
            console.log('db insert error' + err);
        } else {
            console.log(`insert ok ${req.body.contents} ${req.body.yesno}`);
        }
        res.redirect('/');
    })
})

// delete url get 방식
app.get('/delete/:id', (req, res) => {
    dbconn.query('delete from todoTbl where id = ?', [req.params.id], (err, results) => {
        if(err) {
            console.log('db delete error' + err);
        } else {
            console.log(`delete ok ${req.params.id}`);
        }
        res.redirect('/');
    })
})

// edit url get 방식
app.get('/edit/:id', (req, res) => {
    console.log('edit get');
    dbconn.query('select * from todotbl where id = ?', 
        [req.params.id],
        (err, results) => {
            if(err) {
                console.log('db edit error' + err);
            } else {
                console.log(results);
                res.render('edit', {data:results[0]});
            }
    });

})

// edit url post 방식
app.post('/edit/:id', (req, res) => {
    console.log('edit post');
    dbconn.query('update todotbl set contents  = ?, yesno = ? where id = ?', 
        [req.body.contents, req.body.yesno, req.params.id], 
        (err, results) => {
        if(err) {
            console.log('db edit error' + err);
        } else {
            console.log(`edit ok ${req.body.contents} ${req.body.yesno}`);
            res.redirect('/');
        }

    })
})


app.listen(3000, () => {
    console.log('http://localhost:3000/');
})

