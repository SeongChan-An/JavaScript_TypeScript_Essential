/**
 * Type Assertions π©
 * νΌνλ κ²μ΄ μ’κΈ° λλ¬Έμ μ¬μ©ν  λ μΆ©λΆν κ³ λ―Ό νμ μ¬μ©νλ κ²μ΄ μ’λ€.
 *
 */
function jsStrFunc(): any {
  return 2;
}
const result = jsStrFunc();
console.log((result as string).length);
console.log((<string>result).length);

const wrong: any = 5;
console.log((wrong as Array<number>).push(1)); // π± error

function findNumbers(): number[] | undefined {
  return undefined;
}
const numbers = findNumbers()!;
numbers.push(2); // π±
// numbers!.push(2);

// ! : ? κ³Όλ λ°λλ‘ λ¬΄μ‘°κ±΄ κ°μ΄ μλ κ²½μ°, μ μ¬μ©νμ§ μλλ€
const button = document.querySelector("class")!;
