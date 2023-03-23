//for문
let arr = ['사과', '배', '포도', '딸기', '복숭아'];

// for in : arr 순서만 가져옴
for(let i in arr){
    console.log(`${i}번째 요소 : ${arr[i]}`);
}

console.log("----------------------");

//for of : arr내 요소를 item에 가져옴
for(let item of arr){
    console.log(`${item}`);
}

console.log("----------------------");

//기존 for문
for(let j = 0; j<arr.length; j++){
    console.log(`${j}번째 요소 : ${arr[j]}`);
}
