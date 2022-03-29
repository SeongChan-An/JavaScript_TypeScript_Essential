/**
 * Type Assertions 💩
 * 피하는 것이 좋기 때문에 사용할 때 충분히 고민 후에 사용하는 것이 좋다.
 *
 */
function jsStrFunc(): any {
  return 2;
}
const result = jsStrFunc();
console.log((result as string).length);
console.log((<string>result).length);

const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // 😱 error

function findNumbers(): number[] | undefined {
  return undefined;
}
const numbers = findNumbers()!;
numbers.push(2); // 😱
// numbers!.push(2);

// ! : ? 과는 반대로 무조건 값이 있는 경우, 잘 사용하지 않는다
const button = document.querySelector("class")!;
