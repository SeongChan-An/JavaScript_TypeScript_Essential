/**
 * Type Aliases
 */
type Text = string;
const name: Text = "seongchan";
const address: Text = "korea";
type Num = number;
type Student = {
  name: string;
  age: number;
};
const student: Student = {
  name: "seongchan",
  age: 12,
};

/**
 * String Literal Types
 */
type Name = "name";
let seongchanName: Name;
seongchanName = "name";
type JSON = "json"; // 이미 JSON이 lib에 내장되어 interface로 선언되어 있는지 확인하기,
const json: JSON = "json";

type Boal = true;
