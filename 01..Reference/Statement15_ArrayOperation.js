const books = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄량이 길들이기",
    "헨리 8세"
];

// 원소데이터, 인덱스, 배열 객체 자체
// forEach는 return 값이 없음
books.forEach((book, idx) => {
    console.log(book, idx);
});

// map
const bookObjects = books.map((book) => {
    return {
        title: book,
        author: undefined
    };
});

console.log(bookObjects);

// 메소드 체이닝
// map 함수의 중간과정의 배열이 필요없는 경우에 활용
const ShakespeareOneBooks = books
    .map((book) =>({
        title: book
    }))
    .map((book) => ({
        ...book,
        author : "William Shakespeare"
    }));

console.log(ShakespeareOneBooks);

// 위 메소드 체이닝의 활용~
const bookTitleToBookObject = (book) => ({ title: book });
// 커링 : 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태로 구성한 것.
const makeAuthor = (name) => (book) => ({
    ...book,
    author: name
});

const shakespeareTwoBooks = books
    .map(bookTitleToBookObject)
    .map(makeAuthor("William Shakespere"));

console.log(shakespeareTwoBooks);

const henry = shakespeareTwoBooks.filter((book) => book.title.includes("헨리"));

console.log(henry);

const someNumbers = [10, 5, 3, 14, 56];
const sumNumber = someNumbers.reduce((a, b) => a + b, 0);
console.log(sumNumber);

// reduce 함수의 활용
const someObjects = [
    { border: "none" },
    { fontSize: 24 },
    { className: "box sm-box" }
];

// reduce 함수를 통해 객체를 합칠 수 있다.
// 초기값으로 {} 빈 객체를 줌
const someObject = someObjects.reduce(
    (a, b) => ({ ...a, ...b}), {}
);

console.log(someObject);

// 유사 배열의 활용
// Array.from()
function sumNumbers() {
    return Array.from(arguments).reduce((a, b) => a + b, 0);
}
console.log(sumNumbers(10, 20, 30 ,40 ,50));

function sumNumbersNew(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumNumbersNew(10, 20, 30, 40, 50));