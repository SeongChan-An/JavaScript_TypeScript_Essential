//// [1,2,3,4] => 2배

const arr = [];

for (const n of [1,2,3,4]){
    arr.push(n * 2);
}

console.log(arr);

const arr2 = [1,2,3,4]
    .map(n => n*2)
    .filter(n => n % 2 !== 0)
    .map(n => `<li>${n}</li>`)

console.log(arr2);

