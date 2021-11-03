// 예외

function doException() {
    // 예러를 받지 않으면 종료
    throw new Error('Error~!');
}

function noException() {
    return true;
}

function callException (type) {
    if (type === 'do') {
        doException();
    } else {
        noException();
    }
}

function main () {
    try {
        doException();        
    } catch(e) {
        console.log(e);
    } finally {
        console.log('Done');
    }
}

main();