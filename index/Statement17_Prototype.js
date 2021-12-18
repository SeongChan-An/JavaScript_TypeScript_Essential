const c1 = {
    name: "C1",
    color: "red",
};

const c2 = {
    name: "C2",
    width: 300,
};

const c3 = {
    name: "C3",
    height: 100,
};

// 모든 객체는 __proto__ 를 가지고 있음.
console.log(c1);
console.log(c2);
console.log(c1, c3);

// toString은 Obeject가 가지고 있는 메소드 
console.log(c1.toString());

c1.__proto__ = c2;
c2.__proto__ = c3;
console.log(c1.width);
console.log(c1.height);

// 함수의 프로토타입 매커니즘

function Foo(name) {
    this.name = name;
}

Foo.prototype.lastName = "An";

const f = new Foo("Seongchan");
console.log(f.name);
console.log(f.lastName);

// 내부 동작을 바탕으로 클래스가 동작하기 때문에 이해하고 
// 클래스를 학습해야한다.