const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    console.log('/ get start login...');
    res.render('test01', {
        title :  'test01',
        grade : '3211',
        name : '이주완',
        count : 4
    });
});


app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});