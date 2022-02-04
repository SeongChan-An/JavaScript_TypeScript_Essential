# 회원 가입 폼

## 구조

- src
  - types
    - address.ts
      : 주소 검색에서 사용할 값들을 정리해놓음
    - common.ts
      : 공통 적으로 사용되는 타입 정의
    - index.ts
      : 중개 역할을 하는 파일
    - user.ts
      : 회원가입폼 관련 정의
  - utils
    : nextTick 함수 정의
  - views
    : 입력 폼을 구성하는 template
    -
  - app.template.ts
    : handlebars template을 사용한 template
  - app.ts
    : RegisterForm 전체 프로젝트를 관리하는 파일
  - constant.ts
    : 정규식 관련 파일
  - index.ts

## Validate에 대한 패턴 이해

example

- textfield
  1. text-field.ts 의 attachEventHandler를 통해 this.onChange 연결
  2. onChage에서 입력된 값과 id를 가져오고
  - 이게 처음으로 수정이 된 것인지 아닌지 판단해주는 업데이트 변수 변경
  - 입력된 값을 받아서 업데이트 처리
    - 주의사항
      : 컴포넌트의 상위 요소에 이벤트를 등록해놓았기 때문에 임시로 div를 생성하여 업데이트 하도록 함

## Reference

- [KAKAO 우편번호 서비스](https://postcode.map.daum.net/guide)
- [초보자를 위한 정규 표현식 가이드 (자바스크립트 기준)](https://www.slideshare.net/ibare/ss-39274621)

- [정규표현식 테스트](https://regexr.com)
