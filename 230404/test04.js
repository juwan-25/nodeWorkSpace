//외부 모듈 fs
const fs = require('fs');

fs.writeFile("Output.txt", "안녕하세용!!", (err)=>{
    console.log("파일 쓰기 완료..");
});