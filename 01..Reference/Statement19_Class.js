// 충분히 이해가 되지 않지만.. 계속해서 봐야 함
// 추후에 TypeScript를 통해 보다 견고하고 활용도 있게 변경가능하다고 한다.
class Shape {
    constructor(borderWidth = 0) {
        this.name = 'Shape';
        this._borderWidth = borderWidth;
    }
    set borderWidth(width) {
        if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
            this._borderWidth = width;
        }
        else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }
    get borderWidth() {
        return this._borderWidth;
    }
}

Shape.MIN_BORDER_WIDTH = 0;
Shape.MAX_BORDER_WIDTH = 30;

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = 'Circle';
        this.area = () => this._radius * this._radius * Math.PI;
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
}
class Rect extends Shape {
    constructor(width, height) {
        super();
        this.area = () => this._width * this._height;
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
const circle = new Circle(50);
const rect = new Rect(150, 200);
console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
    rect.borderWidth = 10;
}
catch (e) {
    console.error(e);
}

class MyContainer {
    constructor(tagName, className) {
        this.getTagName = () => this.tagName;
        this.getClassName = () => this.className;
        this.tagName = tagName;
        this.className = className;
    }
}
console.log('done');