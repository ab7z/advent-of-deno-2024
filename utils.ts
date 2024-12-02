export async function ReadFile(day: number) {
  return await Deno.readTextFile(
    `${Deno.cwd()}/data/${day.toString().padStart(2, "0")}.txt`,
  );
}
