import {ReadFile} from "../utils.ts";

export async function solvePartOne() {
  const file = await ReadFile(2);
  const lines = file.split("\n");

  let levels: string[] = [];
  let safeReports = 0;

  for (const line of lines) {
    levels = line.split(" ");
    if (isSafe(levels).result) safeReports++;
  }

  return safeReports;
}

export async function solvePartTwo() {
  const file = await ReadFile(2);
  const lines = file.split("\n");

  let levels: string[] = [];
  let safeReports = 0;

  for (const line of lines) {
    levels = line.split(" ");
    const { result, i: index } = isSafe(levels);

    if (result) {
      safeReports++;
    } else {
      for (let i = index - 1; i <= index + 1 && i < levels.length; i++) {
        if (isSafe(levels.toSpliced(i, 1)).result) {
          safeReports++;
          break;
        }
      }
    }
  }

  return safeReports;
}

function isSafe(levels: string[]) {
  const isDecreasing = +levels[0] > +levels[1];
  const isIncreasing = +levels[0] < +levels[1];
  let difference = 0;

  for (let i = 0; i < levels.length - 1; i++) {
    difference = Math.abs(+levels[i] - +levels[i + 1]);

    if (difference < 1 || difference > 3) {
      return { result: false, i };
    }
    if (isIncreasing && +levels[i] > +levels[i + 1]) {
      return { result: false, i };
    }
    if (isDecreasing && +levels[i] < +levels[i + 1]) {
      return { result: false, i };
    }
  }

  return { result: true, i: -1 };
}
