async function solvePartOne() {
  const input = await Deno.readTextFile(`${Deno.cwd()}/input.txt`)
  const lines = input.split("\n")

  let left: number[] = [],
    right: number[] = []

  let l, r: string
  for (const line of lines) {
    ;[l, r] = line.split(/\s+/)
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

const partOne = await solvePartOne()
console.log(partOne)
