# Chorme mementum 확장 프로그램을 간단한게 클론한 내용입니다.

## 타임포맷 변경

```jsx
if (isTwentyFour == true) {
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");
  seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
} else {
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  unit = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  clock.innerText = `${hours}:${minutes} ${unit}`;
}
```

## WebAPI - Local Storage

```jsx
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY, username);

const savedUsername = localStorage.getItem(USERNAME_KEY);
```
