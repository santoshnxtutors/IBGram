import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getAffectedPathsForAsset } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { safeFolder, saveToDisk, uploadToCloudinary } from "@/lib/uploads";
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

function getMaxBytes(): number {
  const env = process.env.UPLOAD_MAX_BYTES?.trim();
  if (!env) return DEFAULT_MAX_BYTES;
  const parsed = Number(env);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_MAX_BYTES;
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return jsonNoStore({ error: "Multipart form required" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return jsonNoStore({ error: "Missing 'file' part" }, { status: 400 });
  }

  if (!ALLOWED_MIME.has(file.type)) {
    return jsonNoStore({ error: `Unsupported file type: ${file.type}` }, { status: 415 });
  }

  const maxBytes = getMaxBytes();
  if (file.size <= 0 || file.size > maxBytes) {
    return jsonNoStore({ error: `File exceeds ${Math.round(maxBytes / 1024)} KB limit` }, { status: 413 });
  }

  const altText = (formData.get("altText") as string | null)?.toString().trim() || null;
  const title = (formData.get("title") as string | null)?.toString().trim() || null;
  const folder = safeFolder(formData.get("folder") as string | null);
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
    const revalidated = applyRevalidationTargets(getAffectedPathsForAsset());
    return jsonNoStore({ asset, revalidated });
  }

  let stored;
  try {
    stored = await saveToDisk(file, folder);
  } catch (error) {
    return jsonNoStore(
      {
        error:
          error instanceof Error
            ? `Local upload failed: ${error.message}`
            : "Local upload failed. Check UPLOAD_DIR permissions.",
      },
      { status: 500 },
    );
  }

  const asset = await prisma.asset.create({
    data: {
      provider: "local",
      key: stored.key,
      url: stored.url,
      filename: file.name,
      mimeType: file.type,
      sizeBytes: file.size,
      altText,
      metadata: title ? { title } : undefined,
      createdById: userId ?? null,
    },
  });

  const revalidated = applyRevalidationTargets(getAffectedPathsForAsset());
  return jsonNoStore({ asset, revalidated });
}
