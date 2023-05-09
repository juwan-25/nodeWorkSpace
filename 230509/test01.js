// 배열
let arr = ["포도1", "포도2", "포도3", "포도4"];

for(let i in arr)
{
    console.log(`${i}번째 요소 : ${arr[i]}`);
}

for(let item of arr)
{
    console.log(item);
}