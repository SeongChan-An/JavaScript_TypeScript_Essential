// Array
const fruits: string[] = ["🍅", "🍌"];
const scroes: Array<number> = [1, 3, 4];
function printArray(fruits: readonly string[]) {
  return 0;
}

// Tuple -> interface, type alias, class
const student: [string, number] = ["name", 123];
student[0]; // name
student[1]; // 123
const [name, age] = student;

console.log(name, age);
