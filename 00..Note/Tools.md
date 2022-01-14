# 도구

## [Webpack](https://webpack.js.org/)

### Core Concept

- Entry  
  : 어떤 파일을 입력 파일로 시작할 것인가
- Output  
  : 어떻게 결과물을 만들것인지, 어디에 결과물을 생성할 것인지.. 등
- Loader  
  : 트랜스파일(TS=> JS), 이미지 최적화, CSS 파일 변환(SASS => CSS) 등의 작업을 처리하는 과정과 관련된 속성 (ex. babel)
- Plugins  
  : 최종 출력 결과 관련
- Mode
- Browser Compatibility

참고

- [네이버 D2](https://d2.naver.com/helloworld/0239818)
- Webpack boiler plate 참고..
- 다른 번들러에 대한 학습 필요 ex) rollup

## [Babel.js](https://babeljs.io/)

: 폴리필 개념..  
: 하위 브라우저에서 최신 문법이 동작할 수 있도록 코드 변환 (참고 [Try it out](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.9&externalPlugins=&assumptions=%7B%7D))

## NPM vs Yarn

- [NPM](https://www.npmjs.com/)  
  : node package manager  
  : [NPM CLI](https://docs.npmjs.com/cli/v8/commands)

- [Yarn](https://yarnpkg.com/)  
  : 페이스북에 의해 개발된 의존성 관리 js 패키지 매니저  
  : 속도가 매우 빠르다는 장점이 있다.

## [Handlebars](https://handlebarsjs.com/)

: Mustache template 엔진을 확장해서 편리한 기능을 추가적으로 제공하는 템플릿 엔진

## Restful (Representational state transfer)

: GET, POST, PUT, DELETE 등의 메소드를 이용하여 무언가 동작을 하는 프로토콜

참조

- [MDN HTTP 개요](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)  
  : HTTP 상태를 가지고 있지 않고 세션은 가지고 있다.. 비동기 프로토콜
- [Clean URL](https://en.wikipedia.org/wiki/Clean_URL)

## REPL (Read-eval-print loop)

: JavaSript REPL extention

## [Deno](https://deno.land/)

A modern runtime for JavaScript and TypeScript.

- Node.js 창시자가 새롭게 만든 새로운 nodejs
- TypeScript를 바로 실행가능한 특징이 있음.

## Chorome Extension
