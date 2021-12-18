// 클래스의 생성

function CartV1() {
    this.cart = [];
    this.currentId = 0;
}

// prototype 속성을 
// CarV1의 __prototype__ 에 할당한다 (프로토타입 체인)
CartV1.prototype.getNewId = function() {
    this.currentId++;
    return this.currentId;
};

CartV1.createItem = function(name, price) {
    return {
        name, price
    };
};

CartV1.prototype.addItem = function(item) {
    this.cart.push({
        ...item,
        id: this.getNewId(),
    });
};

CartV1.prototype.cearCart = function(item) {
    this.cart = [];
    this.currentId = 0;
};

// 인스턴스 객체를 만들면
// 빈 객체 하나를 만들고 CartV1 함수를 호출하면서 빈 객체를 전달하고
// this 를 통해 인스턴스 객체를 지시할 수 있게 해줌
// 함수를 new 연산자로 호출하고 함수가 종료하면 자동으로 this 객체를 리턴한다.
const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem("수박", 8000));
shoppingCartV1.addItem(CartV1.createItem("사과", 12000));
shoppingCartV1.addItem(CartV1.createItem("두부", 2000));

console.log(shoppingCartV1.cart);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

class CartV2 {
    // 정적메소드, 인스턴스 객체에는 드러나지 않고 
    // 클래스 자체에 붙어 있는 속성 혹은 메소드
    static createItem = (name, price) => ({
        name, price
    });

    cart;
    currentId;

    constructor() {
        this.currentId = 0;
        this.cart = [];
    }

    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }

    addItem = item => {
        this.cart.push({
            ...item,
            id: this.getNewId(),
        });
    }

    clearCart = () =>{
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem('수박', 8000));
shoppingCartV2.addItem(CartV2.createItem('사과', 12000));
shoppingCartV2.addItem(CartV2.createItem('두부', 2000));

console.log(shoppingCartV2.cart);