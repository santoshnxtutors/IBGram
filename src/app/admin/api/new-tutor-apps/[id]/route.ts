import { promises as fs } from "node:fs";
import path from "node:path";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { TUTOR_APPLICATION_TITLE } from "@/lib/tutor-applications";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

/**
 * Deletes one tutor application and its uploaded files.
 *
 * The where-clause pins jobId null + the tutor title so this endpoint can never
 * be used to delete an application to a real job posting, whatever id is passed.
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const application = await prisma.jobApplication.findFirst({
    where: { id, jobId: null, jobTitleSnapshot: TUTOR_APPLICATION_TITLE },
    select: { id: true, resumeUrl: true, photoUrl: true },
  });
  if (!application) return jsonNoStore({ error: "Not found" }, { status: 404 });

  // Uploads live under public/, and the stored value is the public path.
  for (const url of [application.resumeUrl, application.photoUrl]) {
    if (!url?.startsWith("/uploads/")) continue;
    await fs.unlink(path.join(process.cwd(), "public", url.replace(/^\//, ""))).catch(() => {
      // ignore — file may already be gone
    });
  }

  await prisma.jobApplication.delete({ where: { id: application.id } });
  return jsonNoStore({ ok: true });
}
