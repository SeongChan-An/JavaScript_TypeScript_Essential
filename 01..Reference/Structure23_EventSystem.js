// React나 Vue 에서는 
// 직접적으로 DOM에 접근하지 못하는 형태이다.

// 일정 수준이상 크기의 어플리케이션을 개발할 때는 
// DOM 을 통해 직접 조작하는 것이 좋지 않을 수 있다.

// 이벤트시스템
// DOM을 통해 코드로 특정하지 못하는 상태를 특정하고 활용하는 것

// Bubbling
// 안쪽에 있는 요소에서 이벤트가 발생했을 때 밖으로 확산되어 나가는 것
// 이벤트가 발생한곳에서 이벤트 리스너가 있는 곳으로 상위계층으로 찾아가는 이벤트 버블링
// Capturing
// 이벤트가 발생했을 경우, 이벤트가 발생한 곳으로 하위계층으로 찾아 들어가는 이벤트 캡처링
// https://ko.javascript.info/event-delegation
// 이벤트 위임

function main() {
    console.log("Run ")
    const BUBBLING_PHASE = false;
    const CAPTURING_PHASE = false;
    const PHASE_NAME = ["NONE", "CAPTURING", "TARGET", "BUBBLING"];

    function eventLogger({ target, currentTarget, eventPhase }) {
        console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
    }

    let divs = document.querySelectorAll("div");
    // 이벤트리스너 인자
    // 이벤트, 이벤트핸들러, 이벤트가 중첩되었을 때 어떻게 전파하는지에 대한 옵션
    divs.forEach(div => div.addEventListener("click", eventLogger, BUBBLING_PHASE));
}

document.addEventListener("DOMContentLoaded", main);



// 이벤트 루프
// https://www.youtube.com/watch?v=8aGhZQkoFbQ