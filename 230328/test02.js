//객체와 배열
let products = [
    {name: '사과', price: 1200},
    {name: '바나나', price: 2000},
    {name: '복숭아', price: 2500},
    {name: '포도', price: 1400},
    {name: '배', price: 2100},
    {name: '수박', price: 3000}
];
console.log(products,'\n');

//함수로 출력
function print(fruit){
    console.log(`${fruit.name}의 가격은 ${fruit.price}입니다`);
};
for(const fruit of products){
    print(fruit);
}
console.log('\n');

//for문으로 출력
products.forEach(element => {
    console.log(element.name,'\t',element.price);
});

for(let i=0; i<products.length; i++){
    const element = products[i];
    console.log(element);
}
console.log('\n');

for(const key in products){
    console.log(products[key].name,'\t',products[key].price);
}
console.log('\n');

for(const item of products){
    console.log(item.name,'\t',item.price);
}
console.log('\n');