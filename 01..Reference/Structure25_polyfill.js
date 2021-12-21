// 폴리필은 웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드를 뜻한다. 
// ex) Babel 브라우저가 지원하지 않는 언어, 기존에 자바스크립트 코드로 
// 상위 버전의 자바스크립트 언어를 구현하는 개념

// ex) Map 함수
Array.prototype.Mymap = function (cb) {
    let arr = [];

    for(let i=0; i<this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
}

// 위와 같은 개념으로 
// ES6 이후의 문법들이 이렇게 폴리필 처리하여
// 하위 브라우저에서 잘 동작하게 만드는 개념

// 이와 관련하여 core-js 라이브러리가 있다.
// 이 라이브러리가 Babel에 탑재되어 이용됌
// https://github.com/zloirock/core-js