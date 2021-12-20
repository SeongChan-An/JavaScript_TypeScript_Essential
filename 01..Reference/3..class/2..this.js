// this
// 일반 (Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const chani = {
    name: 'Seongchan', 
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

// 일반함수는 Seongchan을 가리키고
chani.normal();
// 화살표함수는 undefined
chani.arrow();

const yaysoul = {
    name: 'Alison',
    normal: chani.normal,
    arrow: chani.arrow
}

yaysoul.normal();
yaysoul.arrow();

function User(name) {
    this.name = name
}

User.prototype.userNormal = function () {
    console.log(this.name)
}

User.prototype.userArrow = function () {
    console.log(this.name)
}

const newPerson = new User('XXX');

newPerson.userNormal();
newPerson.userArrow();

const timer = {
    name: 'Naming',
    timeout: function () {
        // timer 객체의 name 부분을 지칭하고 싶기 때문에 화살표 함수 사용 
        setTimeout(() => {
            console.log(this.name)
        }, 2000);
    }
}

timer.timeout()