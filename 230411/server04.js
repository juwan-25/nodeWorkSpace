const express = require('express');
const request = require('request');
const app = express();

app.get("*",(request, res)=>{
    res.redirect('http://www.naver.com');
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});
