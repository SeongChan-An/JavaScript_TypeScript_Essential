/**
 * Type Inference 타입 추론
 * 명시적으로 구체적으로 작성하는 것이 좋음., 너무 많은 생략을 좋지 않기 때문에
 * 컨벤션이나 가독성을 따져서 작성
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");
// print(1); // error

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
