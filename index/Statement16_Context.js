// context는 프로그램이 메모리에 올라갔을 때, 
// 실행되기 위해서 필수로 필요한 메모리영역, 레지스터의 값(CS, EIP 등등) 등의 리소스들을 총칭하는 것
// 어떤 루틴이 실행될 때 변수값들, 이전에 실행된 함수들의 내부상태 등을 말하는 것입니다. 동일한 루틴이 여러번 실행되더라도 컨텍스트에 따라 다른 결과가 나올 수 있는 것

// context
// execution 컨텍스트, lexical 컨텍스트 
// 실행 컨텍스트(기본)  

const person = {
    name: "Seongchan An",
    age: 30,
    getAge() {
        return this.age;
    }
};

person.age;
console.log(person.getAge());   // 30, 실행컨텍스트 실행하는 순간 결졍되어 this가 소유자(perseon)를 가리키게 된다.

const age = person.getAge;

console.log(age());  // undefined, 소유자가 누군지 모름.

// 위와 같은 상황을
// call, apply 메소드 호출을 통해 객체를 지정할 수 있다.
console.log(age.call(person));

// Class
console.log("Class")
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // getAge가 호출될 때 현재 this로 고정
        this.getAge = this.getAge.bind(this);   
    }

    getAge() {
        return this.age;
    }

    getName = () => this.name;
    
}

const p1 = new Person("Seongchan An", 30);
console.log(p1.getAge());

const myAge = p1.getAge;
console.log(myAge.call(p1));

// bind 를 이용 
// 클래스에 bind 추가
console.log("class bind ")
console.log(myAge())

// lexical context, 어휘적으로 고정.. 화살표 함수 이용
console.log("Lexical Context");
console.log(p1.getName());
const n1 = p1.getName;
console.log(n1());
