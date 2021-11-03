import getType from './getType.js';

console.log('Hello World!');

console.log('Hello World!');
console.log (typeof 'Hello World!');
console.log (typeof 123);
console.log (typeof true);
console.log (typeof undefined);
console.log (typeof null);
console.log (typeof {});   /*객체데이터*/
console.log (typeof []);    /*배열*/

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));