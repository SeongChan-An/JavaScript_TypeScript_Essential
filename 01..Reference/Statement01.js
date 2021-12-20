// 구조 분해 할당
const colors = ['red', 'yellow', 'black'];
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white'
}

// 오른쪽에 있는 요소를 하나하나 분해해서 변수에 하나씩 할당
// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [red, yellow, black] = colors;

// 객체인 경우에는 속성의 이름이 있기 때문에 위치 일치하지 않아도 된다.
//const [, yellow] = colors;
const { white, green} = Colors;

yellow;

Object.keys(Colors).forEach(prop => console.log(`${prop}: ${Colors[prop]}`));

// == 동등비교
// === 일치 연산자


