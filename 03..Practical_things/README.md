# 프로그래밍에 필요한 기술이나 개념 정리

## 런타임 환경

- Heap
- Call stak
- Web APIs
- Task Queue
- Microtask Queue
  - Promise, then
  - mutation observer
- Render
  - [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
  - Render Tree, Layout, Paint..

### 프로세스와 쓰레드

: JS는 Single Threaded language ..

- [프로세스란 ?](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4)  
  : 운영체제 위에서 독립적으로 메모리에서 실행되고 있는 프로그램을 말한다.
  - 코드  
    : 작성된 코드
  - 스택  
    : 실행 순서와 관련된 정보
  - 힙
    : 객체, 변수 등을 생성할 때 데이터들이 저장되는 공간
  - 데이터
    : 전역 변수나 스태틱 변수들이 할당된다.
- [쓰레드란 ?](<https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C_(%EC%BB%B4%ED%93%A8%ED%8C%85)>)  
  : 한 프로세스 내에서 특정한 동작을 수행하는 것

  [참고 : 프로세스와 스레드의 차이](https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html)

### Task Queue

: 지정된 이벤트가 발생 시 (ex. setTimeout, callback)

### Microtask

: 프로미스에 등록된 콜백  
: [mutation(web api)](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

### Render

[참고](./00..Coordinates/README.md)

참고
[참고 코드](../01..Reference/Structure23_EventSystem.js)  
[이벤트 루프 관련 영상](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
