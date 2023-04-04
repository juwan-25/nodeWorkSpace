//process 이벤트
const { error } = require("console");

process.on('exit', ()=>{
    console.log("이벤트, 프로세스가 종료되었습니다!");
});

process.on("uncaughtException", ()=>{
    console.log("이벤트 발생 예외가 발생하였습니다:(");
});

//강제 에러 발생
error.error.error();
