// 객체 기본
// 객체 선언 생성
let product = {
    제품명: '70 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 나트륨, 치자황색소',
    원산지: '필리핀'
};
console.log(product);

let student = {
    이름: '런쥔',
    학번: '2323',
    전공: '실용음악과',
    연락처: '010-0323-0323',
    print: function(){
        console.log(`${this.이름}의 전공은 ${this.전공}입니다:)`);
    }
};
// 객체 속성 출력
console.log(student.이름,'\t',student.전공);
//메소드 출력
student.print();
