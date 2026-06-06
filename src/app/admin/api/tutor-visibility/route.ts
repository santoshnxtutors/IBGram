import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import {
  normalizeTutorVisibilityPath,
  parseTutorVisibilityPlacements,
  setTutorVisibilityPlacement,
  TUTOR_VISIBILITY_CACHE_TAG,
  tutorVisibilityPageOptions,
} from "@/lib/cms/tutor-visibility";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const saveSchema = z.object({
  pagePath: z.string().trim().min(1, "Page path is required."),
  pageLabel: z.string().trim().max(160).optional().nullable(),
  assignments: z
    .array(
      z.object({
        tutorId: z.string().trim().min(1),
        sortOrder: z.number().int().min(1).max(99),
        isActive: z.boolean().optional(),
      }),
    )
    .max(3, "Only the top 3 tutors can be shown on a page."),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  try {
    const tutors = await prisma.tutor.findMany({
      where: { deletedAt: null },
      include: { profile: true },
      orderBy: { displayName: "asc" },
    });
    const placements = tutors.flatMap((tutor) =>
      parseTutorVisibilityPlacements(tutor.profile?.metadata).map((placement) => ({
        tutorId: tutor.id,
        tutorName: tutor.displayName,
        tutorStatus: tutor.status,
        tutorApproved: tutor.approved,
        ...placement,
      })),
    );

    return Response.json({
      pageOptions: tutorVisibilityPageOptions,
      tutors: tutors.map((tutor) => ({
        id: tutor.id,
        name: tutor.displayName,
        slug: tutor.slug,
        status: tutor.status,
        approved: tutor.approved,
        image: tutor.avatarUrl,
      })),
      placements,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return Response.json({ error: `Could not load tutor visibility: ${message.slice(0, 500)}` }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = saveSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid visibility payload.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const pagePath = normalizeTutorVisibilityPath(parsed.data.pagePath);
  const pageLabel = parsed.data.pageLabel?.trim() || tutorVisibilityPageOptions.find((option) => option.path === pagePath)?.label || pagePath;
  const assignments = parsed.data.assignments
    .filter((assignment) => assignment.isActive !== false)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, 3);
  const assignmentMap = new Map(assignments.map((assignment, index) => [assignment.tutorId, { ...assignment, sortOrder: index + 1 }]));

  try {
    await prisma.$transaction(async (tx) => {
      const tutors = await tx.tutor.findMany({
        where: { deletedAt: null },
        include: { profile: true },
      });

      for (const tutor of tutors) {
        const assignment = assignmentMap.get(tutor.id);
        const metadata = setTutorVisibilityPlacement(
          tutor.profile?.metadata,
          pagePath,
          assignment
            ? {
                pagePath,
                pageLabel,
                sortOrder: assignment.sortOrder,
                isActive: true,
              }
            : null,
        );

        const metadataJson = metadata as Prisma.InputJsonValue;

        if (tutor.profile) {
          await tx.tutorProfile.update({ where: { tutorId: tutor.id }, data: { metadata: metadataJson } });
        } else if (assignment) {
          await tx.tutorProfile.create({ data: { tutorId: tutor.id, metadata: metadataJson } });
        }
      }
    });

    revalidateTag(TUTOR_VISIBILITY_CACHE_TAG, { expire: 0 });
    revalidateTag("cms:tutors", { expire: 0 });
    revalidatePath(pagePath);

    return Response.json({ ok: true, pagePath, saved: assignments.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return Response.json({ error: `Could not save tutor visibility: ${message.slice(0, 500)}` }, { status: 500 });
  }
}
