// 복사의 개념
let a = 10;
let b = a;

b = 20;

// 참조의 개념
// 위치 값을 참조하기 때문에 객체의 값을 변경함.

let o = {
    isLoading: true,
};
let o2 = o;

o2.isLoading = false;

function foo(o) {
    o.isLoading = true;
}

// 참조 대입이 되기 때문에 객체를 넘길때는 주의
foo(o);

console.log('done');

