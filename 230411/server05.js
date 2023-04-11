//get 방식 활용
const express = require('express');
const app = express();

app.get("*", (req, res)=>{
    console.log(req.query);
    res.send(req.query);
})

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});