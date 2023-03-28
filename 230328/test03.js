class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    print(){
        console.log(`${this.name}의 가격은 ${this.price}입니다`)
    }
}

let products = [
    new Product('사과', 1200),
    new Product('바나나', 2000),
    new Product('복숭아', 2500),
    new Product('포도', 1400),
    new Product('배', 2100),
    new Product('수박', 3000)
];

for(const product of products){
    product.print();
}