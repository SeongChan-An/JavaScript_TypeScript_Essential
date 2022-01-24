# [Hacker News PWA](https://hnpwa.com/)

[Git](https://github.com/tastejs/hacker-news-pwas)
[API Doc](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

## 기본세팅

- npm init y
- npm install -g parcel-bundler --save
- npm install typescript --save-dev

## 사용한 개념

### PWA ?

[Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introductions)

> HTML, CSS, 자바스크립트(JavaScript)와 같은 웹 기술로 만드는 앱

### [XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)

### [Web API - Location](https://developer.mozilla.org/ko/docs/Web/API/Location)

## 코드 개선을 위해 고려해볼 점

- 코드상으로 HTML 구조를 보여줄 수 있도록 해보자 (DOM 사용 자제)
- 중복 코드 제거
- 구조를 구축
- 함수 분리

## 참고사이트

- [CDN JS](https://cdnjs.com/)

## JS & TS 관련 문법

- [JS 문법 참고](../../01..Reference)
- 추가
  - [Type Alias](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
  - [Type Alias](https://poiemaweb.com/typescript-alias)
  - [제너릭 Generic](https://www.typescriptlang.org/ko/docs/handbook/2/generics.html)
  ```tsx
  function identity<Type>(arg: Type): Type {
    return arg;
  }
  ```
