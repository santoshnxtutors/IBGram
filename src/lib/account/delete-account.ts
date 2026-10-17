import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import { prisma } from "@/lib/db";
import { getAffectedPathsForTutor } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets } from "@/lib/cache/revalidation";

/**
 * Permanently deletes a student or tutor account (never staff).
 *
 * Deleting the User cascades to sessions, roles, demo bookings, demo requests and
 * the student profile. A tutor's public Tutor row is only unlinked by that cascade
 * (owner: SetNull), so it is deleted explicitly, which in turn cascades to its
 * subjects, locations, profile, reviews and demo requests. Only the role, who
 * deleted it and the leaving reason are kept, in the audit log, with no personal details.
 */
export async function deleteUserAccount(
  userId: string,
  audit: { deletedBy: "self" | "admin"; reason?: string; feedback?: string },
): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { accountType: true, avatarUrl: true, roles: { select: { role: { select: { name: true } } } } },
  });
  if (!user) return { ok: false, status: 404, error: "Account not found." };
  // Public signups only carry the "viewer" role (older ones have no accountType at all);
  // any other role means a staff account, which must never be deleted from here.
  if (user.roles.some((r) => r.role.name !== "viewer")) {
    return { ok: false, status: 403, error: "Staff accounts cannot be deleted here." };
  }

  const tutor = await prisma.tutor.findUnique({ where: { userId }, select: { id: true, slug: true, avatarUrl: true } });

  await prisma.$transaction(async (tx) => {
    await tx.auditLog.create({
      data: {
        action: "account.deleted",
        entityType: "User",
        metadata: { accountType: user.accountType, hadTutorProfile: Boolean(tutor), ...audit },
      },
    });
    if (tutor) await tx.tutor.delete({ where: { id: tutor.id } });
    await tx.user.delete({ where: { id: userId } });
  });

  if (tutor) applyRevalidationTargets(getAffectedPathsForTutor({ id: tutor.id, slug: tutor.slug }));

  // Self-uploaded photos (see /api/profile/photo) go too — a student's as well as a
  // tutor's; best effort, the DB rows are already gone.
  const photos = [tutor?.avatarUrl, user.avatarUrl]
    .map((url) => url?.match(/^\/api\/media\/((?:student|tutor)-photos)\/([A-Za-z0-9._-]+)$/))
    .filter((m): m is RegExpMatchArray => Boolean(m));
  if (photos.length) {
    const uploadDir = process.env.UPLOAD_DIR?.trim()
      ? path.resolve(/* turbopackIgnore: true */ process.env.UPLOAD_DIR.trim())
      : path.join(/* turbopackIgnore: true */ process.cwd(), "public", "uploads");
    for (const [, folder, file] of photos) {
      await fs.unlink(path.join(/* turbopackIgnore: true */ uploadDir, folder, file)).catch(() => {});
    }
  }
  return { ok: true };
}
