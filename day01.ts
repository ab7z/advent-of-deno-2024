import { readLines } from "./utils.ts"

async function solvePartOne() {
  let left: number[] = [],
    right: number[] = []

  const lines = await readLines(`${Deno.cwd()}/input.txt`)

  let l = []
  for await (const line of lines) {
    l = line.split(/\s+/)
    left.push(+l[0])
    right.push(+l[1])
  }

  left = left.toSorted()
  right = right.toSorted()

  let distances = 0
  for (let i = 0; i < left.length; i++) {
    distances += Math.abs(right[i] - left[i])
  }

  return distances
}

async function solvePartTwo() {
  const left: number[] = [],
    right: number[] = []

  const lines = await readLines(`${Deno.cwd()}/input.txt`)
  for await (const line of lines) {
    const [l, r] = line.split(/\s+/)
    left.push(+l)
    right.push(+r)
  }

  let similarities = 0,
    tmp = 0

  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      if (left[i] === right[j]) {
        tmp++
      }
    }
    similarities += left[i] * tmp
    tmp = 0
  }

  return similarities
}
