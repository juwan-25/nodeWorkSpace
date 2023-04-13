const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan("combined"));

app.get('*', (req, res)=>{
    res.end("명령 프롬포트를 확인해주세요");
})

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});