const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    console.log('/ get start login...');
    fs.readFile('test02.ejs','utf-8', (err, data)=>{
       if(err){
            console.log("파일 읽기 에러"+err);
       } else {
            res.send(ejs.render(data));
       }
        
    });
        
});

app.get('/login', (req, res)=>{
    console.log('/ get start login...');
    fs.readFile('login.ejs','utf-8', (err, data)=>{
       if(err){
            console.log("파일 읽기 에러"+err);
       } else {
            res.send(ejs.render(data));
       }
        
    });
        
});

app.post('/login', (req, res)=>{
    let id = req.body.id;
    let pass = req.body.password;
    console.log("입력한 값 ",id,pass);
    if(id=='admin'&&pass=='qwer1234'){
        console.log("로그인 성공!");
        res.redirect('/');
    } else {
        console.log("로그인 실패");
        res.redirect('/login');
    }
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});