// epxress 서버 열어보기
const express = require('express');
const app = express();

app.use((req, res)=>{
    res.send('<h1>Hello Express</h1>');
})

app.listen(1122, ()=>{
    console.log("http://localhost:1122/");
});