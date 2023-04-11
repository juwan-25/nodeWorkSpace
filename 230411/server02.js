//모듈 추출
const express = require('express');

//서버 생성
const app = express();

//이벤트 리스너
app.get('*', (req, res) => {
    res.status(404);
    res.set('methodA', 'ABCDE');
    res.send('내 마음대로 본문 입력!!');
});

//서버 실행
app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});
