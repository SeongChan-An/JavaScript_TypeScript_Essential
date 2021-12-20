// 생성기 함수 (Generator Function)
// 함수란 ? 
// 계산이나 처리를 위한 코드의 묶음
// 인자를 받을 수 있음
// 그렇다면 생성기함수는 ? 
// 다른 모든 함수는 값을 반환하면 함수가 종료가 되지만 제너레이터는 값을 반환 후 종료가 되지 않도록 할 수 있다.

function makeInfiniteEnergyGenerator() {
    let energy = 0;
    return function (booster = 0) {
        if (booster) {
            energy += booster;
        } else {
            energy++;
        }

        return energy;
    }
}
               
const energy = makeInfiniteEnergyGenerator();
console.log(energy);

// for (let i = 0; i < 5; i++) {
//     console.log(energy());
// }

console.log(energy(5));
//////////////////////////////////////////////////////////////////////////////////////////////////////

function* infiniteEnergyGenerator() {
    let energy = 1;
    while (true) {
        // yield : 제너레이터 함수를 정지시킨다.
        // 뒤에 쓰인 값을 호출자에게 반환해준다.
        const booster = yield energy;

        if (booster) {
            energy += booster;
        } else {
            energy++;
        }
    }

    return;
}

// 제너레이터 함수는 선언시에 함수가 실행되지 않고
// 실행시키는데 필요한 도구를 객체에 담아서 전달
// ex) next : 제너레이터 함수 실행을 재개시킨다
const energyGenerator = infiniteEnergyGenerator();
console.log(energyGenerator);

for (let i = 0; i < 5; i++) {
    console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5));