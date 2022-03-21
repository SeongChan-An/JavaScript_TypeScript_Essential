# [고양이 사진 검색 사이트](https://programmers.co.kr/skill_check_assignments/4)

## 과제 설명과 요구 사항

[요구사항](./REQUIREMENTS.md)

### 요구사항에 따른 주요 코드

- 현재 HTML 코드가 전체적으로 <div> 로만 이루어져 있습니다. 이 마크업을 시맨틱한 방법으로 변경해야 합니다.

  - 의미있는 태그들로 변경 필요
    - main : 주 컨텐츠 내용들이 담기는 곳

- 유저 디바이스에 따른 미디어 쿼리 적용

```css
/* 992px 이하 3개*/
@media (max-width: 992px) {
  결과 {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
}
/* 768px 이하 적용 2개 */
@media (max-width: 768px) {
  결과 {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}
/* 576px 이하 적용 1개 */
@media (max-width: 576px) {
  결과 {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
}
```

- 다크모드

```css
@media (prefers-color-scheme: dark) {
  body {
    color: #ffffff;
    background: #000000;
  }
}
```
