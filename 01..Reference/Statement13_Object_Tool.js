// 객체 - 프로그래밍 도구로서의 객체
// 어떤 대상을 객체화하여 그 대상을 표현하는 경우

// 행위나 동작요소 
// create, make, drive, run ... 

function calculateCircleArea(radius) {
    return radius**2 * Math.PI;
}
function calculateRectArea(width, height) {
    return width * height;
}
class Circle {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
    // Private 필드 선언, Private 필드는 사용전에 선언되어야 합니다.
    // 일반적인 프로퍼티와는 다르게 private 필드는 값을 할당하면서 만들어질 수 없습니다.
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

// 인자가 많아지면 많아질 수록 개발 시에 고민할 거리가 많아질 수 있다.
// 예전에 내비게이션에서 자차위치와 헤딩 값 방향 값을 이용해서 거리를 계산하는 함수.. 손이 많이 갔음.. 
console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

// 객체를 이용해서 메소드를 가지고 있는 경우 
// 개발시에 작업이 간편해짐
console.log(circle.area());
console.log(rect.area());