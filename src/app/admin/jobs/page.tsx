import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminPageHeader } from "../_components/AdminPrimitives";
import { JobsAdminClient } from "./JobsAdminClient";

export const dynamic = "force-dynamic";

type JobWithCount = Awaited<ReturnType<typeof prisma.job.findMany>>[number] & {
  _count?: { applications: number };
};

export default async function AdminJobsPage() {
  let items: JobWithCount[] = [];
  let dbError: string | null = null;

  try {
    items = await prisma.job.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      take: 250,
      include: { _count: { select: { applications: true } } },
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    department: item.department,
    location: item.location,
    employmentType: item.employmentType,
    level: item.level,
    workMode: item.workMode,
    summary: item.summary,
    roleOverview: item.roleOverview,
    jobDescription: item.jobDescription,
    responsibilities: item.responsibilities,
    requirements: item.requirements,
    niceToHave: item.niceToHave,
    benefits: item.benefits,
    applicationPrompt: item.applicationPrompt,
    status: item.status,
    sortOrder: item.sortOrder,
    publishedAt: item.publishedAt?.toISOString() ?? null,
    closesAt: item.closesAt?.toISOString() ?? null,
    updatedAt: item.updatedAt.toISOString(),
    applicationCount: item._count?.applications ?? 0,
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Careers"
        title="Jobs"
        description="Create and publish job roles. Published jobs appear on /jobs with full role details and an apply flow."
      />
      <AdminCard>{dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <JobsAdminClient items={serialised} />}</AdminCard>
    </AdminShell>
  );
}
