// 속성과 메소드

// 메소드는 3가지 방법이 있다.
// 아래의 선언된 메소드를 참고
const obj = {
    name: "Seong Chan",
    age : 30,
    getFamilyName: function() {
        return "An";
    },
    // arrow function
    getLastName: () => "An", 
    getBloodType() {
        return "B";
    },
};

// function 선언과 arrow fuction 표현은 
// context 관련 차이가 있다고 한다. 학습 후 기록예정

obj.name;
obj.ago;
obj.getFamilyName();
obj.getFamilyName();

// 문제가 있는 값을 세팅하는 것을 막고싶을 때
// 객체의 내부적으로는 실제 함수인데 객체 외부에서는 속성처럼 보이게 하는 방법으로
// setter와 getter 가 있다.

// 클래스를 만들고 그 클래스의 인스턴스 객체를 만드는 방법
class UserCreate{
    constructor(first, last) {
     this.firstName = first
     this.lastName = last    
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 = new UserCreate('Seongchan', 'An');
const user2 = new UserCreate('Alison', 'Park');


console.log(user1.getFullName());
console.log(user2.getFullName());

const myObj = {
    name: "kim",
};

// 객체의 원소를 삭제할 경우
delete myObj.name;

// Object.create 메소드
// 첫번째 인자는 부모 객체로써 작동되게 될 객체를 입력받음 (추후 상세하게 다룰 예정, prototype)
// 여기서는 null
const myObj = Object.create(null, {
    name: {
        value: "An Seongchan",
        writable: true,
        configurable: false,
    }
});

// 옵션이 wrtable ture 일 경우
myObj.name = 'anphaca';

// configurable false이기 때문에 삭제 불가능
delete myObj.name;

 