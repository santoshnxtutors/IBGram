import { z } from "zod";
import { prisma } from "@/lib/db";
import { getServerUser } from "@/lib/auth/server";
import { getAffectedPathsForTutor } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

const schema = z.object({ hidden: z.boolean() });

/**
 * Tutor-controlled visibility. Every public surface (the directory, the profile
 * page, booking creation, the sitemap) filters on status "active" + approved, so
 * flipping to "paused" removes the tutor from the site without touching approval.
 */
export async function POST(request: Request) {
  const user = await getServerUser();
  if (!user || user.accountType !== "tutor") return jsonNoStore({ error: "Not allowed." }, { status: 403 });

  const parsed = schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: "Send { hidden: true | false }." }, { status: 400 });

  const tutor = await prisma.tutor.findFirst({
    where: { userId: user.id, deletedAt: null },
    select: { id: true, slug: true, status: true, approved: true },
  });
  if (!tutor) return jsonNoStore({ error: "Create your tutor profile first." }, { status: 404 });
  if (!tutor.approved) {
    return jsonNoStore({ error: "Your profile is still waiting for approval, so it is not public yet." }, { status: 409 });
  }
  // An archived (rejected) profile is not the tutor's to unhide.
  if (tutor.status === "archived") {
    return jsonNoStore({ error: "This profile is archived. Contact the IB Gram team." }, { status: 409 });
  }

  await prisma.tutor.update({ where: { id: tutor.id }, data: { status: parsed.data.hidden ? "paused" : "active" } });
  applyRevalidationTargets(getAffectedPathsForTutor({ id: tutor.id, slug: tutor.slug }));

  return jsonNoStore({ hidden: parsed.data.hidden });
}
