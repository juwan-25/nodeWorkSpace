//Date, switch 조건문
let date = new Date();

//getMonth()의 index는 0부터 시작하므로 1 더해주어야 함
switch(date.getMonth()+1) {
    case 12: case 1: case 2:
        console.log("겨울입니다.");
        break;
    case 3: case 4: case 5:
        console.log("봄입니다.");
        break;
    case 6: case 7: case 8:
        console.log("여름입니다.");
        break;
    case 9: case 10: case 11:
        console.log("가을입니다.");
        break;
}