import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const ALLOWED_MIME = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/avif",
  "application/pdf",
]);

const DEFAULT_MAX_BYTES = 5 * 1024 * 1024; // 5 MB

function getUploadDir(): string {
  const envDir = process.env.UPLOAD_DIR?.trim();
  if (envDir) {
    // turbopackIgnore: dynamic env-derived path
    return path.resolve(/* turbopackIgnore: true */ envDir);
  }
  return path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
}

function getMaxBytes(): number {
  const env = process.env.UPLOAD_MAX_BYTES?.trim();
  if (!env) return DEFAULT_MAX_BYTES;
  const parsed = Number(env);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_MAX_BYTES;
}

function safeFilename(input: string): string {
  const base = path.basename(input).replace(/[^a-zA-Z0-9._-]/g, "_");
  return base.length > 80 ? base.slice(0, 80) : base;
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return Response.json({ error: "Multipart form required" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return Response.json({ error: "Missing 'file' part" }, { status: 400 });
  }

  if (!ALLOWED_MIME.has(file.type)) {
    return Response.json({ error: `Unsupported file type: ${file.type}` }, { status: 415 });
  }

  const maxBytes = getMaxBytes();
  if (file.size <= 0 || file.size > maxBytes) {
    return Response.json({ error: `File exceeds ${Math.round(maxBytes / 1024)} KB limit` }, { status: 413 });
  }

  const altText = (formData.get("altText") as string | null)?.toString().trim() || null;
  const title = (formData.get("title") as string | null)?.toString().trim() || null;
  const folder = ((formData.get("folder") as string | null)?.toString().trim() || "general").replace(/[^a-z0-9-]/gi, "-").toLowerCase();

  const uploadDir = getUploadDir();
  const targetDir = path.join(uploadDir, folder);
  await fs.mkdir(targetDir, { recursive: true });

  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(4).toString("hex");
  const filename = `${stamp}-${rand}-${safeFilename(file.name)}`;
  const targetPath = path.join(targetDir, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(targetPath, buffer);

  const key = `${folder}/${filename}`;
  // Serve through the /api/media route handler — bypasses Turbopack's static
  // /public manifest which sometimes doesn't pick up runtime-written files.
  const publicUrl = `/api/media/${key}`;

  const userId = (session as { userId?: string })?.userId;
  const asset = await prisma.asset.create({
    data: {
      provider: "local",
      key,
      url: publicUrl,
      filename: file.name,
      mimeType: file.type,
      sizeBytes: file.size,
      altText,
      metadata: title ? { title } : undefined,
      createdById: userId ?? null,
    },
  });

  return Response.json({ asset });
}
