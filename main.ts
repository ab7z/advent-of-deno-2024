const day = (new Date()).getDate();

// Advent is until 25th
if (day <= 0 || day > 25) {
  Deno.exit(1);
}

const file = await import(`./days/d${day.toString().padStart(2, "0")}.ts`);
console.log(await file.solvePartOne());
console.log(await file.solvePartTwo());
