// No "server-only" guard here: the chat service imports this module, and that
// service is pulled into tests that run outside a server bundle. The node:fs
// import below is what actually keeps it off the client.
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * One place that puts an uploaded File somewhere it can be served from.
 *
 * Cloudinary when it is configured, the local upload dir otherwise — the local
 * copy is served back through /api/media/<key> (see that route for why it does
 * not go through /public directly). Used by the admin media library and by chat
 * attachments.
 */
export type StoredUpload = {
  provider: "cloudinary" | "local";
  key: string;
  url: string;
  width?: number;
  height?: number;
};

export function getUploadDir(): string {
  const envDir = process.env.UPLOAD_DIR?.trim();
  if (envDir) {
    // turbopackIgnore: dynamic env-derived path
    return path.resolve(/* turbopackIgnore: true */ envDir);
  }
  return path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
}

export function safeFilename(input: string): string {
  const base = path.basename(input).replace(/[^a-zA-Z0-9._-]/g, "_");
  return base.length > 80 ? base.slice(0, 80) : base;
}

export function safeFolder(input: string | null | undefined, fallback = "general"): string {
  return (input?.toString().trim() || fallback).replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

export async function uploadToCloudinary(
  file: File,
  folder: string,
): Promise<{ url: string; publicId: string; width?: number; height?: number }> {
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

/** Writes the file to disk under <uploadDir>/<folder>/ and returns its /api/media URL. */
export async function saveToDisk(file: File, folder: string): Promise<StoredUpload> {
  const targetDir = path.join(getUploadDir(), folder);
  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(4).toString("hex");
  const filename = `${stamp}-${rand}-${safeFilename(file.name || "upload")}`;

  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, filename), Buffer.from(await file.arrayBuffer()));

  const key = `${folder}/${filename}`;
  return { provider: "local", key, url: `/api/media/${key}` };
}

/** Cloudinary first, local disk as the fallback. Throws only if both fail. */
export async function storeUpload(file: File, folder: string): Promise<StoredUpload> {
  try {
    const cloud = await uploadToCloudinary(file, folder);
    return { provider: "cloudinary", key: cloud.publicId, url: cloud.url, width: cloud.width, height: cloud.height };
  } catch {
    return saveToDisk(file, folder);
  }
}
