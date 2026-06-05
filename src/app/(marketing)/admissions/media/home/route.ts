import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";
import { Readable } from "stream";

const videoPath = path.join(process.cwd(), "src", "app", "(marketing)", "admissions", "media", "home.mp4");
const contentType = "video/mp4";

function streamFile(start?: number, end?: number) {
  return Readable.toWeb(createReadStream(videoPath, start !== undefined && end !== undefined ? { start, end } : undefined));
}

export async function GET(request: Request) {
  const fileStat = await stat(videoPath);
  const fileSize = fileStat.size;
  const range = request.headers.get("range");

  if (range) {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    const start = match?.[1] ? Number(match[1]) : 0;
    const end = match?.[2] ? Number(match[2]) : fileSize - 1;
    const safeEnd = Math.min(end, fileSize - 1);
    const chunkSize = safeEnd - start + 1;

    if (start >= fileSize || safeEnd >= fileSize || chunkSize <= 0) {
      return new Response(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
          "Accept-Ranges": "bytes",
        },
      });
    }

    return new Response(streamFile(start, safeEnd) as ReadableStream, {
      status: 206,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(chunkSize),
        "Content-Range": `bytes ${start}-${safeEnd}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return new Response(streamFile() as ReadableStream, {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(fileSize),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export async function HEAD() {
  const fileStat = await stat(videoPath);

  return new Response(null, {
    headers: {
      "Content-Type": contentType,
      "Content-Length": String(fileStat.size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
