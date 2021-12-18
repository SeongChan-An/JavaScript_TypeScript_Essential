// https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0

// 
// 아래에서는 saveNumber에 접근이 가능해서 값을 임의로 접근하여 변경할 수 있는 문제가 있다.
let saveNumber = 1;
function increment() {
    return saveNumber++;
}

console.log(increment());
console.log(increment());
saveNumber = 200;
console.log(increment());

// 만약 함수안에 변수를 넣는다면

function incrementClosure() {
    let saveNumberClosure = 1;
    return function() {
        return saveNumberClosure++
    }
}

const inc = incrementClosure();

console.log(inc());
console.log(inc());
console.log(inc());

// 클로저는 함수 안쪽에서 함수가 만들어질 때 
// 함수 안쪽에 있는 코드중에 바깥 함수에 있는 변수에 접근을 하게 되면,
// 접근한 변수를 클로저라고 하는 특별한 공간에 저장을 해둔다.
// 디버깅을 통해 Closure 공간을 확인해보자.

// 어떤 상황에 쓰일까? 
// 클로저 공간은 코드상에서 함수 밖에서 접근할 수 없다. 보호가능
// 타입스크립트에서는 class 를 만들 때 private으로 보호할 수 있다.


