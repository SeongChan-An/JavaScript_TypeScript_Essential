# JavaScript로 간단한 게임 만들기

: 처음에는 혼자서 구현해보려고 했을 때는 구조적으로 나누지 않고 구현하였으나
엘리님 강의를 보고 클래스를 이용하여 코드를 구조적으로 나누는 것으로 변경함

## 학습 내용들.

- [Class Private](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

  - 함수 호출 방식과 this 바인딩
    - 일반 함수 호출  
      : 일반적으로 window
    - 메서드 호출  
      : 메서드를 호출한 객체
    - 생성자 함수 호출  
      : 생성자 함수가 생성한 인스턴스를 가리킨다
    - Function.prototype.apply/call/bind 메서드에 의한 간접 호출  
      : 함수 내부의 인수에 의한

  ```jsx
  // 일반 함수
  function foo() {
    console.log(this);
  }
  foo(); // window

  // 메서드 (메서드를 호출한 객체)
  const obj = {
    value: 100,
    foo() {
      console.log(this.value);
    },
  };
  obj.foo(); // 100

  // 생성자 함수 호출
  // 미래에 생성자 함수가 생성할 인스턴스
  function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  const circle1 = new Circle(5);
  console.log(circle11.getDiameters()); // 10

  // 간접호출
  function getThisBinding() {
    return this;
  }
  // this로 사용할 개게
  const thisArg = { a: 1 };
  console.log(getThisBinding()); // window

  console.log(getThisBinding.apply(thisArg)); // { a: 1}
  console.log(getThisBinding.call(thisArg)); // { a: 1}
  ```

- ## [Builder 패턴](https://ko.wikipedia.org/wiki/%EB%B9%8C%EB%8D%94_%ED%8C%A8%ED%84%B4)
