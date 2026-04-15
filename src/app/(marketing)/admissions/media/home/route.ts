import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const videoPath = path.join(process.cwd(), "src", "app", "(marketing)", "admissions", "media", "home.mp4");
  const file = await readFile(videoPath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}