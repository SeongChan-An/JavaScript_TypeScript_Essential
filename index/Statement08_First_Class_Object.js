// 일급함수 일급객체라고 한다. (First Class Object)
// 프로그래밍 언어에서 함수라고 하는 코드의 묶음을
// 일반적인 값처럼 취급한다는 말을 말한다.
// 즉 일반적인 값처럼 변수에 값을 넣을 수 있다.

// 인자로 받는 값이 함수가 될 수도
// 리턴받는 값이 함수일 수도.. 

// 다양하게 사용될 수 있다.

// Case 1
// 인자로 함수가 들어옴

const square = function sqr(_num) { return _num * _num};

// 고차 함수 (Higher-Order Function)
function calculate(a,b){

    function addValue(){
        return a + b;
    }

    return addValue; // 함수를 리턴!
}

let add = calculate(4,5);
console.log(add()); // 9

function calculate2(val, func) { // 함수를 인자로 전달! call back function
    return func(5, val);
}

function addValue(a, b) {
    return a + b;
}

console.log(calculate2(7, addValue)); // 12

// case 2
// 반환 값으로의 함수

function salePrice(discountRate, price) {
    return price - (price * (discountRate * 0.01));
}

console.log("여름 세일 - " + salePrice(30, 567000));
console.log("겨울 세일 - " + salePrice(10, 567000));

// 커링
function discountPrice(discountRate) {
    return function (price) {
        return price - (price * (discountRate * 0.01));
    }
}

console.log("여름 세일 - " + discountPrice(30)(567000));
console.log("겨울 세일 - " + discountPrice(10)(567000));

// JavaScript 에선 함수도 값으로 취급된다.
// 함수를 즉시 호출하지 않고 변수에 담아서 활용한다.
// 변수의 명칭을 통해 의미를 부여하여 표현력을 통해 코드 가독성을 높일 수 있다.
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log("여름 세일 - " + summerPrice(567000));
console.log("겨울 세일 - " + winterPrice(567000));