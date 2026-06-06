import { Briefcase } from "lucide-react";
import { getPublishedJobs } from "@/lib/jobs";
import { JobsClient, type PublicJob } from "./JobsClient";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  let jobs: PublicJob[] = [];
  let dbError: string | null = null;

  try {
    const rows = await getPublishedJobs();
    jobs = rows.map((job) => ({
      id: job.id,
      slug: job.slug,
      title: job.title,
      department: job.department,
      location: job.location,
      employmentType: job.employmentType,
      level: job.level,
      workMode: job.workMode,
      summary: job.summary,
      publishedAt: job.publishedAt?.toISOString() ?? job.createdAt.toISOString(),
    }));
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  return (
    <div className="min-h-screen bg-background pb-32 text-foreground">
      <div className="h-24 md:h-32" />
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-20 max-w-3xl px-2 text-center">
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Careers at <span className="text-gradient">IB Gram</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            Building thoughtful academic support for IB and IGCSE families. We&apos;re looking for thinkers,
            educators, and creators.
          </p>
        </div>

        {dbError ? (
          <div className="rounded-lg border border-border/60 bg-card p-8 text-center">
            <Briefcase className="mx-auto mb-4 size-10 text-muted-foreground/40" />
            <h2 className="text-xl font-black text-foreground">Jobs database is not reachable</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-6 text-muted-foreground">{dbError}</p>
          </div>
        ) : (
          <JobsClient jobs={jobs} />
        )}
      </div>
    </div>
  );
}
