//post방식으로 값 받아오기
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extend:false}));

app.get('*', (req, res)=>{
    let output = '';
    output += '<form method="post">';
    output += '<input type="text" name="id"/>';
    output += '<input type="text" name="passwd"/>';
    output += '<input type="submit"/>';
    output += '</form>';
    res.send(output);
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});