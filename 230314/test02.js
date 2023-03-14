let result = 0;

console.time("합계 구하는시간");
for(let i=1; i<=1000; i++){
    result += i;
}
console.timeEnd("합계 구하는시간");

console.log("1부터 1000까지 더한 결과 : %d", result);
