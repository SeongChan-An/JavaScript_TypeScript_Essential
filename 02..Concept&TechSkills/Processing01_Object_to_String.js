// 객체를 문자열로 변환

const cartItems = [
    {id: 1, item: "핸드밀", price: 40000, discount: 0, },
    {id: 2, item: "A4용지", price: 4000, discount: 0, },
    {id: 3, item: "수영복", price: 120000, discount: 0, },
    {id: 4, item: "색연필72색", price: 150000, discount: 0, },
]

const cartItemsArray = [];

for (const item of cartItems) {
    const row = [];

    // 객체안에서 키와 값을 하나씩 꺼내옴.
    // entries : ["id", 1]
    for (const [, value] of Object.entries(item)) {
        row.push(value);
    }

    cartItemsArray.push(row.join());
}
console.log(cartItemsArray.join("==="));

//////////////////////////////////////////
//////////////////////////////////////////

const extractValueInObject = obj => Object
    .entries(obj)
    .map(([, value]) => String(value));

    const cartItemsString = cartItems
        .map(extractValueInObject)
        .join("===");

console.log(cartItemsString);        
