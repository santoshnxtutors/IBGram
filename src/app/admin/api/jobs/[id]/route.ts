import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { JOBS_CACHE_TAG, splitListText } from "@/lib/jobs";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  slug: z.string().min(1).max(200).optional(),
  title: z.string().min(1).max(300).optional(),
  department: z.string().min(1).max(160).optional(),
  location: z.string().min(1).max(180).optional(),
  employmentType: z.string().min(1).max(120).optional(),
  level: z.string().max(120).optional().nullable(),
  workMode: z.string().max(120).optional().nullable(),
  summary: z.string().max(1200).optional().nullable(),
  roleOverview: z.string().max(6000).optional().nullable(),
  jobDescription: z.string().min(1).optional(),
  responsibilities: z.union([z.string(), z.array(z.string())]).optional(),
  requirements: z.union([z.string(), z.array(z.string())]).optional(),
  niceToHave: z.union([z.string(), z.array(z.string())]).optional(),
  benefits: z.union([z.string(), z.array(z.string())]).optional(),
  applicationPrompt: z.string().max(1200).optional().nullable(),
  status: z.enum(["draft", "published", "closed", "archived"]).optional(),
  sortOrder: z.number().int().optional(),
  publishedAt: z.string().optional().nullable(),
  closesAt: z.string().optional().nullable(),
});

function normalizeDate(value: string | null | undefined) {
  if (value === undefined) return undefined;
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function revalidateJobsSurfaces(slugs: Array<string | null | undefined> = []) {
  revalidateTag(JOBS_CACHE_TAG, { expire: 0 });
  revalidatePath("/jobs/");
  for (const slug of slugs) {
    if (slug) {
      revalidatePath(`/jobs/${slug}/`);
      revalidatePath(`/jobs/${slug}/apply/`);
    }
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const existing = await prisma.job.findUnique({ where: { id }, select: { slug: true, publishedAt: true } });
  if (!existing) return jsonNoStore({ error: "Job not found" }, { status: 404 });

  const { responsibilities, requirements, niceToHave, benefits, publishedAt, closesAt, status, ...rest } = parsed.data;
  const updated = await prisma.job.update({
    where: { id },
    data: {
      ...rest,
      ...(responsibilities !== undefined ? { responsibilities: splitListText(responsibilities) } : {}),
      ...(requirements !== undefined ? { requirements: splitListText(requirements) } : {}),
      ...(niceToHave !== undefined ? { niceToHave: splitListText(niceToHave) } : {}),
      ...(benefits !== undefined ? { benefits: splitListText(benefits) } : {}),
      ...(status ? { status, publishedAt: status === "published" && !existing.publishedAt ? new Date() : undefined } : {}),
      ...(publishedAt !== undefined ? { publishedAt: normalizeDate(publishedAt) } : {}),
      ...(closesAt !== undefined ? { closesAt: normalizeDate(closesAt) } : {}),
    },
  });

  revalidateJobsSurfaces([existing.slug, updated.slug]);
  return jsonNoStore({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const existing = await prisma.job.findUnique({ where: { id }, select: { slug: true } });
  if (!existing) return jsonNoStore({ error: "Job not found" }, { status: 404 });

  await prisma.job.delete({ where: { id } });
  revalidateJobsSurfaces([existing.slug]);
  return jsonNoStore({ ok: true });
}
