// JS 함수는 명시적으로 인자를 작성하더라도 값을 받지 않을 수도 받을 수도 있다.
function sum(a, b) {
    return a + b;
}

// sum 함수의 형태(시그니처)의 인자값은 2개이지만 3개를 인자를 보내도 에러는 나지 않는다.
const result = sum(10, 20, 30);

// 경우에 따라 가변인자에 대한 처리가 필요하다
function sum2() {
    let s =0;
    for(let i = 0; i < arguments.length; i++) {  
        s += arguments[i];
    }
    return s;
}

// 전개 파라미터 (rest parameter)
function sum3(...args) {
    let s =0;
    for(let i = 0; i < args.length; i++) {  
        s += args[i];
    }
    return s;
}

// 만약 인자 값의 명시를 통해 함수에 대한 정보를 주고 싶을 경우
function sum4(a, b, ...args) {
    let s =0;
    for(let i = 0; i < args.length; i++) {  
        s += args[i];
    }
    return s;
}

// JS의 함수 호출 방식에는 3가지가 있다.

// CASE 1
sum4();

// CASE2
// 만약 인자 값이 변하게 될 경우 call을 쓰는 곳은 전부 검토가 필요한 상황이 올 수 있다.
sum4.call(null, 10, 20, 30);

// CASE3
// 배열의 형태로 보내기 때문에 관리가 편한 장점이 있다. 유지보수 측면으로 말하는 부분인거 같다. 
sum4.apply(null, [10, 20, 30]);

// 
const arr = [10, 20, 30, 40, 50];
sum4.apply(null, arr);


// 생성기 함수 (generator)
// 일반적인 함수는 호출하면 그 함수로 진입했다가 계산이 끝나면 결과를 반환하고 함수를 종료한다.
// generator 함수는 최초에 호출하면 함수가 실행되지 않고 실행 준비 상태로 만든다.
// 이후 객체를 반환하고 해당 객체 안에 함수를 실행할 도구를 담아 반환한다.
function* gen() {
    yield 10;
    yield 20;
    return 30;
}

const g = gen();

g.next();
g.next();
g.next();

// 비동기 함수
// promise, callback 일급함수 등의 지식도 필요
async function myTask() {

}

