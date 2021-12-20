// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const hf1 = 7;

// testErrorDouble is not function error 
// 함수 표현 방식으로 선언 후 위에 작성하였기 때문에
// testErrorDouble();   

const testErrorDouble = function () {
    console.log(hf1 * 2);
}

hoistingFunction();

function hoistingFunction() {
    console.log (hf1 * 2);
}