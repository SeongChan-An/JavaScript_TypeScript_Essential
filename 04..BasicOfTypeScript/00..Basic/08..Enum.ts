/**
 * Enum
 */
// JavaScript
const MAX_NUM = 6;
const MAX_STUDENTS_PER_CLASS = 10;
const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
// JS에서는 Enum 이 따로 없고 아래와 같이
const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
const dayOfToday = DAYS_ENUM.MONDAY;

// TypeScript
type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
// 일반적인 다른 언어의 enum 과 같지만 값이 변경이 되기 때문에 type이 보장되지 않음.
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Days.Monday);
let day: Days = Days.Saturday;
day = Days.Tuesday;
// 단점.. type이 보장받지 못하기 때문에 enum을 사용하지 않는 것이 좋다.
// union을 쓰는 것이 권장됨.
day = 10;
console.log(day);

let dayOfweek: DaysOfWeek = "Monday";
dayOfweek = "Wednesday";
