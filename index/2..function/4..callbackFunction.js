// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callbackParameter) {
    setTimeout(() => {
        console.log('SetTimeout');
        callbackParameter();
    }, 3000)
};

timeout(() => {
    console.log('Done !');
})

