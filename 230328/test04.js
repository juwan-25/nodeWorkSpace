class Student{
    constructor(학번, 이름, 전공, 연락처){
        this.학번 = 학번;
        this.이름 = 이름;
        this.연락처 = 연락처;
        this.전공 = 전공;
    }
    print(){
        console.log(`${this.학번}, ${this.이름}, ${this.연락처}, ${this.전공}`);
    }
}

let student = [
    new Student(1111, '봄', '소프트웨어과', '010-1111-1111'),
    new Student(2222, '여름', '웹솔루션과', '010-2222-2222'),
    new Student(3333, '가을', '소프트웨어과', '010-3333-3333'),
    new Student(4444, '겨울', '디자인과', '010-4444-4444'),
    new Student(5555, '계절', '웹솔루션과', '010-5555-5555'),
];


student.forEach(element => {
    element.print();
});
console.log('\n');

for(let i=0; i<student.length; i++){
    student[i].print();
}
console.log('\n');

for(const key in student){
    student[key].print();
}
console.log('\n');

for(const item of student){
    item.print();
}
console.log('\n');