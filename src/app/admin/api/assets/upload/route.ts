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

function localUploadsAllowed(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.ALLOW_LOCAL_PRODUCTION_UPLOADS === "true";
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
  const userId = (session as { userId?: string })?.userId;
  const cloudinary = await uploadToCloudinary(file, folder).catch((error) => ({
    error: error instanceof Error ? error.message : String(error),
  }));

  if ("url" in cloudinary) {
    const asset = await prisma.asset.create({
      data: {
        provider: "cloudinary",
        key: cloudinary.publicId,
        url: cloudinary.url,
        filename: file.name,
        mimeType: file.type,
        sizeBytes: file.size,
        width: cloudinary.width,
        height: cloudinary.height,
        altText,
        metadata: title ? { title } : undefined,
        createdById: userId ?? null,
      },
    });
    return Response.json({ asset });
  }

  if (!localUploadsAllowed()) {
    return Response.json(
      {
        error:
          "Production media uploads require Cloudinary env vars CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET, or explicit ALLOW_LOCAL_PRODUCTION_UPLOADS=true on persistent storage.",
      },
      { status: 503 },
    );
  }

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

async function uploadToCloudinary(file: File, folder: string): Promise<{ url: string; publicId: string; width?: number; height?: number }> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET?.trim();
  if (!cloudName || !uploadPreset) throw new Error("Cloudinary is not configured.");

  const form = new FormData();
  form.set("file", file);
  form.set("upload_preset", uploadPreset);
  form.set("folder", `ibgram/${folder}`);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
    method: "POST",
    body: form,
    cache: "no-store",
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload?.secure_url || !payload?.public_id) {
    throw new Error(payload?.error?.message ?? `Cloudinary upload failed (${response.status})`);
  }
  return {
    url: String(payload.secure_url),
    publicId: String(payload.public_id),
    width: typeof payload.width === "number" ? payload.width : undefined,
    height: typeof payload.height === "number" ? payload.height : undefined,
  };
}
