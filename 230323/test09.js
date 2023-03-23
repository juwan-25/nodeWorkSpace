//익명함수와 화살표함수
// (function() {
//     console.log(this);
// })(); > 오류남

(()=> {
    console.log(this);
})();