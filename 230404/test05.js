//외부 모듈 fs
const fs = require('fs');

fs.readFile("input.txt", (err, data)=>{
    if(err) {
        console.log("error 발생..");
        console.log(err);
    } else {
        //버퍼로 출력
        console.log(data);
        //버퍼에서 String으로 변경하여 파일 내용 출력 
        console.log(data.toString());
    }
});