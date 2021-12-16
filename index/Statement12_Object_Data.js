// 객체 - 데이터로서의 객체
// 객체 리터럴, 코드를 통해 하나의 객체를 정의함

const Box = {
    width : 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: "red"
};

// 함수를 통해 만드는 객체
// 구성정보를 가지고 있는 함수 하나를 통해 유지보수에 장점이 있다.
function makeBox(width, height, borderRadius, backgroundColor) {
    return { width, height, borderRadius, backgroundColor}
}

console.log(makeBox(100, 100, 0, "blue"));
// { width: 100, height: 100, borderRadius: 0, backgroundColor: 'blue' }

// 클래스를 통해 만드는 객체
class Shape {
    width = 200;
    height = 200;
    borderRadius = 5;
    backgroundColor = "red";

    constructor(width, height, borderRadius, backgroundColor) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(100, 100, 5, "Yellow");
console.log(boxShape);

// 인스턴스 객체의 활용
// 구조를 확인해야 하는 경우 사용할 수 있다.
if (boxShape instanceof Shape) {
    console.log("instance of Shape");
}

// Key 접근, value or computed property 
boxShape.width = 200; 
boxShape.border = "1px solid black" // 객체 동적 바인딩
console.log(boxShape);

// 객체의 변환, 병합
// 객체는 참조 타입
const boxShape2 = boxShape;
// 복사를 하고 싶을 때
const boxShape3 = Object.assign({}, boxShape);
// 전개연산자를 이용하여 새로운 객체르 만들기
const boxShape4 = {...boxShape, borderRadius: 10 };
console.log(boxShape4);
// 객체를 문자열로 변경해서 문자를 다시 객체로 만드는 방법
const boxShape5 = JSON.parse(JSON.stringify(boxShape));
