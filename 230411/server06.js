const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res)=>{
    res.send('정적 파일 활용');
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});