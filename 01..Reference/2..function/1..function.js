// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulElement = document.querySelector('ul');

for (let i = 0; i< 3; i+= 1) {
    const li = document.createElement('li');
    li.textContent = `list-${i + 1}`;
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function () {
            console.log(li.textContent)
        })
    }
    ulElement.appendChild(li);
}

// 형 변환 (Type conversion) 
const num = 1;
const char = '1';

// 자바스크립트는 == 사용하면 형변환되면서 의도치 않게 값을 같다고 판단함

// Truthy (참 같은 값)
// ture, {}, [], 1, 2, 'false', -12, '3.14' ---

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// 함수
// 함수 선언 방식 (익명함수, 기명함수)

// 기명함수
function sum(x, y) {
    console.log(arguments);
    return x + y;
}

// 함수를 반복해서 사용하게 될 경우
const f1 = sum(1, 4);
const f2 = sum(1, 3);

console.log(f1 + f2);

// 익명함수
const csum = function  (x, y) {
    return x + y;
}

// 화살표 함수 (표현)

// () => {} vs fucntion () {}
const double = function (x) {
    return x * 2;
}
console.log('double: ', double(7));

/*
const doubleArrow = (x) => {
    return x * 2;
}
*/
// 화살표 함수는 일부 내용을 축약해서 표현할 수 있음
const doubleArrow = x => x * 2;
console.log ('doubleArrow', doubleArrow(7));

// 화살표 함수는 {} return을 사용해야함
// 객체를 반환하고 싶을 경우는 아래와 같이 () 를 이용해야 한다
const objectArrow = x =>({ name : "chan"});

// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression
// ()로 묶고 뒤에 () 추가 

const if1 = 7;
function iff2double () {
    console.log(if1 * 2);
}
// JS가 IFFE가 실행되는 부분과 double함수가 실행되는 부분을 
// 구별하지 못해서 에러가 발생되기 때문에 ; 꼭 추가해야 함
iff2double;

// case 1
(function () {
    console.log(a * 2)
})();

//case2
(function () {
    console.log(a * 2)
}());



