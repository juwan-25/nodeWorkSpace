// epxress 서버 열어보기
const express = require('express');
const app = express();

app.get(`/page/:id`,(req, res)=>{
    const id = req.params.id;
    res.send(`<h1>${id} Page</h1>`);
});

app.listen(1122, ()=>{
    console.log("1122 포트에서 웹 서버 대기 중...");
});
