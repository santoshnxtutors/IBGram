import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const [pending, catalogWithoutLogin] = await Promise.all([
    // Self-service tutor profiles awaiting (or past) review.
    prisma.tutor.findMany({
      where: { deletedAt: null, userId: { not: null } },
      orderBy: [{ approved: "asc" }, { updatedAt: "desc" }],
      take: 300,
      select: {
        id: true,
        displayName: true,
        slug: true,
        headline: true,
        bio: true,
        about: true,
        experienceYears: true,
        phone: true,
        email: true,
        status: true,
        approved: true,
        updatedAt: true,
        owner: { select: { id: true, email: true, subjects: true } },
      },
    }),
    // Legacy catalog tutors that have no login yet (admin provisions email).
    prisma.tutor.findMany({
      where: { deletedAt: null, userId: null },
      orderBy: [{ displayName: "asc" }],
      take: 500,
      select: { id: true, displayName: true, slug: true, email: true, status: true, approved: true },
    }),
  ]);

  return jsonNoStore({
    pending: pending.map((t) => ({
      id: t.id,
      displayName: t.displayName,
      slug: t.slug,
      headline: t.headline,
      bio: t.bio,
      about: t.about,
      experienceYears: t.experienceYears,
      phone: t.phone,
      email: t.email ?? t.owner?.email ?? null,
      subjects: t.owner?.subjects ?? [],
      status: t.status,
      approved: t.approved,
      updatedAt: t.updatedAt,
    })),
    catalogWithoutLogin,
  });
}
