//더하기 함수가 메인 자바스크립트에 같이 있는 경우

let calc = {};
calc.add = function(a,b) {
    return a+b;
};

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));
