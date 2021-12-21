const p = new Promise((resolve, reject) => {
    // resolve('OK');
    setTimeout(() =>{
        resolve('OK');
        // reject('실패');
    },2000)
});

// p.then(function(ok){
//     console.log(ok);
// }).catch(function(error){
//     console.log(error)
// })
p.then(function(ok){
    console.log('첫번째 성공')
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('두번째 성공');
        },3000)
    })
})
.then(function(ok){
    console.log(ok)
})

.catch(function(error){
    console.log(error)
})

function double(x){
    return x*2;
}

function calcValue(a, b, cb){
    setTimeout(() => {
        cb(a + b);
    }, 100)
}

const x = double(100);
const y = x;

const r = calcValue(10,20, (result) => {
    console.log(result);
});
const z = r;

