const e = 4;
const b = 6;
const c = ("5" as unknown) as number;
const d = "cat";

const multiply = (num1: number, num2: number) => {
  console.log(`${num1} * ${num2} =`, num1 * num2);
}

const add = (num1, num2) => {
  console.log(`${num1} + ${num2} =`, num1 + num2);
}

multiply(e,b);
multiply(e,c);
//multiply(e,d);

add(e,b);
add(e,c);
add(e,d);