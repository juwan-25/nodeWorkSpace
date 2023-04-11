const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>그림파일 제공하는 uri path는 image 입니다</h1>");
});

app.get('/student', (req, res)=>{
    res.send("<h1>학번 : 3211, 이름 : 이주완</h1>");
});

app.get('/image', (req, res)=>{
    fs.readFile('img.jpg', (err, data)=>{
        if(err){
            console.log("파일읽기 에러");
        } else {
            res.type('image/png');
            res.send(data);
        }
    });
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});
