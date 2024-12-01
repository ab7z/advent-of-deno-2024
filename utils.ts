import { TextLineStream } from "@std/streams/text-line-stream";

export async function readLines(path: string) {
  const file = await Deno.open(path);
  return file.readable.pipeThrough(new TextDecoderStream()).pipeThrough(
    new TextLineStream(),
  );
}
