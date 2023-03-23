let inputA = "23";
let inputB = "3.23";
let inputC = "323.323";

console.log(parseInt(inputA));

console.log(parseFloat(inputB));
console.log(parseFloat(inputC));

//소수점 있는데 parseInt로 변환시 사라짐, 정수로만 나옴
console.log(parseInt(inputC));