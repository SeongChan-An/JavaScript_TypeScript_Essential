// 산술 연산자(arithmetic operator)
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자 (assignment operator)
const a1 = 2;
let a2 = 2;

a2 += 1;
console.log(a2);

// 비교 연산자 (comparison operator) 
// ===, !==, <, >,
const c1 = 1;
const c2 = 3;

console.log (c1 === c2);

function isEqual(x, y) {
    return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));
// 


// 논리 연산자 (logical operator) 
const l1 = 1 === 1;
const l2 = 'AB' === 'AB';
const l3 = false;

console.log(l1);
console.log(l2);
console.log(l3);

console.log('&& : ', l1 && l2 && l3);
console.log('|| : ', l1 || l2 || l3);
console.log('! : ', !l1);

// 삼항 연산자 (ternary operator)
const t1 = 1 < 2;
console.log (t1 ? '참' : '거짓');