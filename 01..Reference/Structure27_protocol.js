// 규약
// HTTP 
// WebSocket (동기프로토콜)

// 방법론적인 프로토콜
// Webpack
// Plugin Architecture
// 위 규약을 따르면.. 
// Loader 

// iterable, iteration
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols

const myIterable = {};

// https://developer.mozilla.org/en-US/docs/Glossary/Symbol
// Symbol : 유니크한 값을 만들때,
myIterable[Symbol.iterator] = function* () {
    let i = 1;
    while(i<=100) {
        yield i++;
    }
};

// for of 가 iterator protocol을 준수하기 때문에
// next()가 없어도 generator 함수가 사용됨
for (const n of myIterable) {
    console.log(n);
}