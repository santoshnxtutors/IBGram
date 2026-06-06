import type { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { JOBS_CACHE_TAG, slugifyJobTitle, splitListText } from "@/lib/jobs";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const jobSchema = z.object({
  slug: z.string().max(200).optional().nullable(),
  title: z.string().min(1).max(300),
  department: z.string().min(1).max(160),
  location: z.string().min(1).max(180),
  employmentType: z.string().min(1).max(120),
  level: z.string().max(120).optional().nullable(),
  workMode: z.string().max(120).optional().nullable(),
  summary: z.string().max(1200).optional().nullable(),
  roleOverview: z.string().max(6000).optional().nullable(),
  jobDescription: z.string().min(1),
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

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const items = await prisma.job.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: 250,
    include: { _count: { select: { applications: true } } },
  });
  return Response.json({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const parsed = jobSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const data = parsed.data;
  const status = data.status ?? "draft";
  const created = await prisma.job.create({
    data: {
      slug: data.slug?.trim() || slugifyJobTitle(data.title),
      title: data.title,
      department: data.department,
      location: data.location,
      employmentType: data.employmentType,
      level: data.level,
      workMode: data.workMode,
      summary: data.summary,
      roleOverview: data.roleOverview,
      jobDescription: data.jobDescription,
      responsibilities: splitListText(data.responsibilities),
      requirements: splitListText(data.requirements),
      niceToHave: splitListText(data.niceToHave),
      benefits: splitListText(data.benefits),
      applicationPrompt: data.applicationPrompt,
      status,
      sortOrder: data.sortOrder ?? 0,
      publishedAt: normalizeDate(data.publishedAt) ?? (status === "published" ? new Date() : null),
      closesAt: normalizeDate(data.closesAt),
    },
  });

  revalidateJobsSurfaces([created.slug]);
  return Response.json({ item: created });
}
