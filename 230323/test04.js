//기본 함수
function power(x){
    return x*x;
}

console.log(power(10));
console.log(power(20));


//return값 없는 함수
console.log(multiply(10, 35));
console.log(multiply(27, 29));

function print(message){
    console.log(`${message}(이)라고 작성했습니다.`);
}

print("런쥔짱");
print("런쥔화이팅");

//함수 예제
function sum(min, max){
    let output = 0;
    for(let i=min; i<=max; i++){
        output += i;
    }
    return output;
}

console.log(sum(1,100));

function multip(min, max){
    let output = 1;
    for(let i=min; i<=max; i++){
        output *= i;
    }
    return output;
}

console.log(multip(1,10));


