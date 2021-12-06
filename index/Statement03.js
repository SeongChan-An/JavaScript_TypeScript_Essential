// 반복문
const arr = ['a','b', 'c', 'd'];

// 위치에 상관없이 순회하고 싶을 때
for (const item of arr) {
    console.log(item);
}

// 배열에서 값을 순차적으로 빼올 때 사용 
for (const item in arr) {
    console.log(item);
}

const obj = {
    color: 'red',
    width: 200,
    height: 200,
};

for (const key in obj) {
    console.log(key);
}