//기본 함수 > 화살표 함수 바꾸기
let power = (x)=>{
    return x*x;
}

console.log(power(10));
console.log(power(20));

let multip = (min, max)=>{
    let output = 1;
    for(let i=min; i<=max; i++){
        output *= i;
    }
    return output;
}

console.log(multip(1,10));