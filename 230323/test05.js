//매개변수 여러 개인 함수
function multiply(x,y){
    return x*y;
}

//매개변수 입력 안하면 undefined
function print1(name, cnt){
    if(typeof(cnt)=="undefined") cnt = 1;
    console.log(`${name}가 ${cnt}개 있습니다.`);
}

print1("사과", 10);
print1("사과");

//매개변수 초기값 주기
function print1(name, cnt=1){
    console.log(`${name}가 ${cnt}개 있습니다.`);
}

print1("사과");