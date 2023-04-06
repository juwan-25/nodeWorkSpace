// epxress 서버 열어보기
const http = require('http');
const { text } = require('stream/consumers');
const server = http.createServer();
const port = 3000;
server.listen(port, ()=>{
    console.log("%d 포트에서 웹 서버 대기 중...", port);
});

server.on('connection', (socket)=>{
    let addr = socket.address();
    console.log("클라이언트가 접속했습니다 %s, %d",addr.address, addr.port);
});

server.on('request', (req, res)=>{
    console.log("클라이언트 요청이 들어왔습니다");
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write(" <title>응답페이지</title> ");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>http 서버 열기</h1>");
    res.write("</body>");
    res.write("</html>");
});