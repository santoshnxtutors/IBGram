import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { JobApplicationsClient } from "./JobApplicationsClient";

export const dynamic = "force-dynamic";

type ApplicationWithJob = Awaited<ReturnType<typeof prisma.jobApplication.findMany>>[number] & {
  job?: { slug: string; title: string; department: string } | null;
};

export default async function AdminJobApplicationsPage() {
  let items: ApplicationWithJob[] = [];
  let dbError: string | null = null;

  try {
    items = await prisma.jobApplication.findMany({
      orderBy: [{ createdAt: "desc" }],
      take: 300,
      include: { job: { select: { slug: true, title: true, department: true } } },
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    jobId: item.jobId,
    jobTitleSnapshot: item.jobTitleSnapshot,
    status: item.status,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    phone: item.phone,
    currentLocation: item.currentLocation,
    currentRole: item.currentRole,
    experienceYears: item.experienceYears,
    noticePeriod: item.noticePeriod,
    expectedCompensation: item.expectedCompensation,
    linkedInUrl: item.linkedInUrl,
    portfolioUrl: item.portfolioUrl,
    resumeUrl: item.resumeUrl,
    resumeFilename: item.resumeFilename,
    photoUrl: item.photoUrl,
    photoFilename: item.photoFilename,
    coverLetter: item.coverLetter,
    answersJson: item.answersJson,
    adminNotes: item.adminNotes,
    createdAt: item.createdAt.toISOString(),
    job: item.job ?? null,
  }));

  const received = serialised.filter((item) => item.status === "received").length;
  const reviewing = serialised.filter((item) => item.status === "reviewing").length;
  const shortlisted = serialised.filter((item) => item.status === "shortlisted").length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Careers"
        title="Job Applications"
        description="Review applications submitted from public job pages. Update statuses, inspect resumes, and keep internal notes."
      />
      <div className="mb-5 grid gap-4 md:grid-cols-3">
        <AdminMetricCard label="Received" value={received} tone="amber" />
        <AdminMetricCard label="Reviewing" value={reviewing} tone="sky" />
        <AdminMetricCard label="Shortlisted" value={shortlisted} tone="emerald" />
      </div>
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Database not reachable" detail={dbError} />
        ) : (
          <JobApplicationsClient items={serialised} />
        )}
      </AdminCard>
    </AdminShell>
  );
}
