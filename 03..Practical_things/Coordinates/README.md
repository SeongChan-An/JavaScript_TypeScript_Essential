# Basic Concept

## Browser Rendering (Critical rendering path)

1. HTML 마크업을 처리하고 DOM 트리를 빌드한다. ("무엇을" 그릴지 결정한다.)
2. CSS 마크업을 처리하고 CSSOM 트리를 빌드한다. ("어떻게" 그릴지 결정한다.)
3. DOM 및 CSSOM 을 결합하여 렌더링 트리를 형성한다. ("화면에 그려질 것만" 결정)
4. 렌더링 트리에서 레이아웃을 실행하여 각 노드의 기하학적 형태를 계산한다. ("Box-Model" 을 생성한다.)
5. 개별 노드를 화면에 페인트한다.(or 래스터화)

출처

- [Git Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner)
- [라우저는 웹페이지를 어떻게 그리나요? - Critical Rendering Path](https://m.post.naver.com/viewer/postView.nhn?volumeNo=8431285&memberNo=34176766)
- [네이버 D2 - 브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)
- [네이버 D2 - 최신 브라우저의 내부 살펴보기 3 - 렌더러 프로세스의 내부 동작](https://d2.naver.com/helloworld/5237120)

### DOM

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- [DOM API MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)

### DOM Node, Event Target

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)

- [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

### CSSOM

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

### Critical rendering path

> Browser에서 URL 입력을 통해 사이트를 접속할 때는 아래와 같은 순서로 진행이 된다.

- requests/response -> loading -> scripting -> rendering -> layout -> painting
  - painting 단계에서는 layer를 나누어서 그릴 준비를 하고서 그린다.
  - will-change 속성을 통해 레이어를 준비시킬 수 있느나 성능을 고려해야 한다.

> 아래 사이트를 통해 각 요소에 따른 동작을 고려하여 성능에 대해 확인  
> [css triggers](https://csstriggers.com/)
