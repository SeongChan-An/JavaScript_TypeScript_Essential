import App from './App.js';
import { getItem } from './util/storage.js';

const $target = document.querySelector('.App');

new App({
  $target,
  initialState: getItem('todo', [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]),
});
