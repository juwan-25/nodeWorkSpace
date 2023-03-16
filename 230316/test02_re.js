//모듈 호출 : exports가 불러들인 객체
let calc = require('./test02_calc');
console.log('모듈로 분리 후 - calc.add 함수 호출 결과 : %d', calc.add(10,10))