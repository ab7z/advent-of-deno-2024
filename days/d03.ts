import {ReadFile} from "../utils.ts";

export async function solvePartOne() {
  const file = await ReadFile(3);
  let sum = 0;

  const regex = /mul\((\d+),(\d+)\)/g;

  let match;
  while ((match = regex.exec(file)) !== null) {
    sum += +match[1] * +match[2];
  }

  return sum;
}

export async function solvePartTwo() {
  const file = await ReadFile(3);
  let mulEnabled = true;
  let sum = 0;

  const regex = /do\(\)|don't\(\)|mul\((\d+),(\d+)\)/g;

  let match;
  while ((match = regex.exec(file)) !== null) {
    const [fullMatch, num1, num2] = match;

    switch (true) {
      case /^do\(\)$/.test(fullMatch):
        mulEnabled = true;
        break;

      case /^don't\(\)$/.test(fullMatch):
        mulEnabled = false;
        break;

      case /^mul\(/.test(fullMatch):
        if (mulEnabled) {
          const operand1 = parseInt(num1, 10);
          const operand2 = parseInt(num2, 10);
          const product = operand1 * operand2;
          sum += product;
        }
        break;

      default:
        break;
    }
  }

  return sum;
}
