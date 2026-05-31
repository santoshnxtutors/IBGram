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
};

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
