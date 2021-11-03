// 클래스?

// 리터럴? : [], {}. ""과 같이 규칙에 의해 값을 생성하는 것 
const chani = {
    firstName: 'Seongchan',
    lastName: 'An',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(chani.getFullName());

const yaysoul = {
    firstName: 'Alison',
    lastName: 'Park',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(yaysoul.getFullName());

// 프로토타입(prototype) 방식의 클래스 
// 명명규칙 생성자 함수는 암묵적으로 대문자로 시작한다고 한다.
function UserCreate(first, last) {
    this.firstName = first
    this.lastName = last    
}

// prototype 속성을 통해 이후에 getFullName 이 불려도
// 참조하여 사용됨
UserCreate.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// 생성자 함수 (new)
// user1이나 user2를 인스턴스라고 한다.
// 인스턴스란? 
// new 라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 할당된 그 결과를 말한다.
const user1 = new UserCreate('Seongchan', 'An');
const user2 = new UserCreate('Alison', 'Park');

console.log(user1.getFullName());
console.log(user2.getFullName());

