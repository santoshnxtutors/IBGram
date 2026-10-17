import { randomBytes } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getServerUser } from "@/lib/auth/server";
import { getAffectedPathsForTutor } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

const MAX_BYTES = 5 * 1024 * 1024;

/** Detect the image type from its first bytes; the browser-supplied MIME type is not trusted. */
function sniffImage(bytes: Uint8Array): "jpg" | "png" | "webp" | null {
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpg";
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return "png";
  const ascii = (from: number, to: number) => String.fromCharCode(...bytes.slice(from, to));
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "webp";
  return null;
}

/**
 * A student or tutor uploads their own profile photo. Stored under
 * <UPLOAD_DIR>/<role>-photos and served by /api/media. The photo always lands on
 * the User row (sidebar, dashboard header); for a tutor it is also applied to the
 * public tutor profile, and the profile form resends the URL on its next save.
 *
 * Tutor photos must stay in "tutor-photos": the tutor-profile validator only
 * accepts avatar URLs from that folder.
 */
export async function POST(request: NextRequest) {
  const user = await getServerUser();
  if (!user) return jsonNoStore({ error: "Please sign in again." }, { status: 401 });
  const isTutor = user.accountType === "tutor";
  if (!isTutor && user.accountType !== "student") {
    return jsonNoStore({ error: "Only student and tutor accounts have a profile photo." }, { status: 403 });
  }

  const file = (await request.formData().catch(() => null))?.get("photo");
  if (!(file instanceof File) || file.size === 0) return jsonNoStore({ error: "Choose a photo to upload." }, { status: 400 });
  if (file.size > MAX_BYTES) return jsonNoStore({ error: "Photo must be 5 MB or smaller." }, { status: 400 });

  const bytes = new Uint8Array(await file.arrayBuffer());
  const ext = sniffImage(bytes);
  if (!ext) return jsonNoStore({ error: "Use a JPG, PNG or WebP image." }, { status: 400 });

  const uploadDir = process.env.UPLOAD_DIR?.trim()
    ? path.resolve(/* turbopackIgnore: true */ process.env.UPLOAD_DIR.trim())
    : path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
  const folder = isTutor ? "tutor-photos" : "student-photos";
  const dir = path.join(/* turbopackIgnore: true */ uploadDir, folder);
  const filename = `${user.id.slice(-8)}-${randomBytes(6).toString("hex")}.${ext}`;
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(/* turbopackIgnore: true */ dir, filename), bytes);

  const url = `/api/media/${folder}/${filename}`;
  await prisma.user.update({ where: { id: user.id }, data: { avatarUrl: url } });

  if (isTutor) {
    const tutor = await prisma.tutor.findUnique({ where: { userId: user.id }, select: { id: true, slug: true } });
    if (tutor) {
      await prisma.tutor.update({ where: { id: tutor.id }, data: { avatarUrl: url } });
      applyRevalidationTargets(getAffectedPathsForTutor({ id: tutor.id, slug: tutor.slug }));
    }
  }
  return jsonNoStore({ url });
}

/** Remove the self-uploaded photo: clears the account avatar and deletes the file. */
export async function DELETE() {
  const user = await getServerUser();
  if (!user) return jsonNoStore({ error: "Please sign in again." }, { status: 401 });

  const row = await prisma.user.findUnique({ where: { id: user.id }, select: { avatarUrl: true } });
  await prisma.user.update({ where: { id: user.id }, data: { avatarUrl: null } });

  if (user.accountType === "tutor") {
    const tutor = await prisma.tutor.findUnique({ where: { userId: user.id }, select: { id: true, slug: true } });
    if (tutor) {
      await prisma.tutor.update({ where: { id: tutor.id }, data: { avatarUrl: null } });
      applyRevalidationTargets(getAffectedPathsForTutor({ id: tutor.id, slug: tutor.slug }));
    }
  }

  // Only ever unlink a file this route wrote — a Google picture URL is left alone.
  const own = row?.avatarUrl?.match(/^\/api\/media\/((?:student|tutor)-photos)\/([A-Za-z0-9._-]+)$/);
  if (own) {
    const uploadDir = process.env.UPLOAD_DIR?.trim()
      ? path.resolve(/* turbopackIgnore: true */ process.env.UPLOAD_DIR.trim())
      : path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
    await fs.unlink(path.join(/* turbopackIgnore: true */ uploadDir, own[1], own[2])).catch(() => {});
  }

  return jsonNoStore({ ok: true });
}
