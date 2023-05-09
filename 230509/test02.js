//객체 배열
let products = [
    {name: "포도알1", price: 7},
    {name: "포도알2", price: 77},
    {name: "포도알3", price: 777},
    {name: "포도알4", price: 7777},
    {name: "포도알5", price: 77777},
    {name: "포도알6", price: 777777},
    {name: "포도알7", price: 7777777}
]

function printProduct(product){
    console.log(`${product.name} : ${product.price}원`);
}

for(let product of products){
    printProduct(product);
}