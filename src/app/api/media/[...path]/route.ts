import { promises as fs } from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const MIME_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".pdf": "application/pdf",
  // Chat attachments: voice notes, clips and the usual study files.
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".oga": "audio/ogg",
  ".ogg": "audio/ogg",
  ".wav": "audio/wav",
  ".weba": "audio/webm",
  ".webm": "video/webm",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".txt": "text/plain; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".zip": "application/zip",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"]);

function getUploadDir(): string {
  const envDir = process.env.UPLOAD_DIR?.trim();
  if (envDir) {
    return path.resolve(/* turbopackIgnore: true */ envDir);
  }
  return path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
}

/**
 * Stream uploaded media files from disk.
 *
 * Next.js dev mode + Turbopack sometimes fails to serve files written to
 * /public AFTER the dev server has started (the static manifest is computed
 * once at boot). Routing uploaded assets through this handler bypasses the
 * static manifest entirely — the file is read fresh from disk on every request.
 *
 * Path safety: the resolved file path is required to live inside the upload
 * directory. Any traversal attempt (../) is rejected with 400.
 */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params;
  if (!segments || segments.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  const uploadDir = getUploadDir();
  const requestedPath = path.join(/* turbopackIgnore: true */ uploadDir, ...segments);
  const normalisedUploadDir = path.resolve(/* turbopackIgnore: true */ uploadDir);
  const normalisedRequested = path.resolve(/* turbopackIgnore: true */ requestedPath);

  // Path-traversal guard
  if (!normalisedRequested.startsWith(normalisedUploadDir + path.sep) && normalisedRequested !== normalisedUploadDir) {
    return new Response("Invalid path", { status: 400 });
  }

  let file: Buffer;
  try {
    file = await fs.readFile(normalisedRequested);
  } catch {
    const ext = path.extname(normalisedRequested).toLowerCase();
    // Uploads live on the production server; in local dev show the live copy instead of a blank.
    if (process.env.NODE_ENV !== "production" && IMAGE_EXTENSIONS.has(ext)) {
      return Response.redirect(`https://www.ibgram.com/api/media/${segments.map(encodeURIComponent).join("/")}`, 302);
    }
    if (IMAGE_EXTENSIONS.has(ext)) {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect width="1" height="1" fill="transparent"/></svg>',
        {
          status: 200,
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "no-store",
          },
        },
      );
    }
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(normalisedRequested).toLowerCase();
  const mimeType = MIME_BY_EXT[ext] ?? "application/octet-stream";

  return new Response(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": mimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
