// Array
const fruits: string[] = ["🍅", "🍌"];
const scroes: Array<number> = [1, 3, 4];
function printArray(fruits: readonly string[]) {
  // readonly로 인해 fruits.push 불가
  return 0;
}

// Tuple -> interface, type alias, class로 대체해서 사용할 수 있다.
const student: [string, number] = ["name", 123];
student[0]; // name
student[1]; // 123
const [name, age] = student; // react의 의 useState가 Tuple로 되어있다.

console.log(name, age);
