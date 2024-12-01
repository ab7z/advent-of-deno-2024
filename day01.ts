async function solvePartOne() {
  const input = await Deno.readTextFile(`${Deno.cwd()}/input.txt`)
  const lines = input.split("\n")

  let left: number[] = [],
    right: number[] = []

  for (const line of lines) {
    const [l, r] = line.split(/\s+/)
    left.push(+l)
    right.push(+r)
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
  const input = await Deno.readTextFile(`${Deno.cwd()}/input.txt`)
  const lines = input.split("\n")

  const left: number[] = [],
    right: number[] = []
  for (const line of lines) {
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
