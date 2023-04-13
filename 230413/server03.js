//post방식으로 값 받아오기
const express = require('express');
const app = express();

//public 내 파일 사용 가능
app.use(express.static('public'));
//json 객체 만들어줌
app.use(express.json());
app.use(express.urlencoded({extend:false}));

//아무 입력 없으면 실행
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/student.html')
    
});

//학생 정보 들어오면 실행
app.post('/student', (req, res)=>{
    console.log(req.body);
    console.log(req.body.grade);
    console.log(req.body.name);
    
    res.send(req.body);
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});