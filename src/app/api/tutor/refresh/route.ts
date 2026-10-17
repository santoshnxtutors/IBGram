import { prisma } from "@/lib/db";
import { getServerUser } from "@/lib/auth/server";
import { getAffectedPathsForTutor } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

/**
 * Called by the tutor profile form after a save, so a published tutor's edits
 * (and a changed profile link) show on /tutors, the profile page and the sitemap
 * at once instead of after the 5-minute cache.
 */
export async function POST() {
  const user = await getServerUser();
  if (!user || user.accountType !== "tutor") return jsonNoStore({ error: "Not allowed." }, { status: 403 });

  const tutor = await prisma.tutor.findUnique({ where: { userId: user.id }, select: { id: true, slug: true } });
  if (tutor) applyRevalidationTargets(getAffectedPathsForTutor({ id: tutor.id, slug: tutor.slug }));
  return jsonNoStore({ ok: true });
}
