import {ReadFile} from "../utils.ts";

export async function solvePartOne() {
  const file = await ReadFile(1);
  const lines = file.split("\n");

  const left: number[] = [],
    right: number[] = [];

  let l = [];
  for (const line of lines) {
    l = line.split(/\s+/);
    left.push(+l[0]);
    right.push(+l[1]);
  }

  left.sort();
  right.sort();

  let distances = 0;
  for (let i = 0; i < left.length; i++) {
    distances += Math.abs(right[i] - left[i]);
  }

  return distances;
}

export async function solvePartTwo() {
  const file = await ReadFile(1);
  const lines = file.split("\n");

  const left: number[] = [],
    right: number[] = [];

  let l = [];
  for (const line of lines) {
    l = line.split(/\s+/);
    left.push(+l[0]);
    right.push(+l[1]);
  }

  const rightFrequency = new Map();
  for (const value of right) {
    rightFrequency.set(value, (rightFrequency.get(value) ?? 0) + 1);
  }

  let similarities = 0;
  for (const value of left) {
    if (rightFrequency.has(value)) {
      similarities += value * rightFrequency.get(value);
    }
  }

  return similarities;
}
