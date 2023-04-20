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
    res.render('test02', {
        dataArr : [
            {name : '마크', age : '25'},
            {name : '런쥔', age : '24'},
            {name : '제노', age : '24'},
            {name : '해찬', age : '24'},
            {name : '재민', age : '24'}
        ]
            
    });
});


app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});