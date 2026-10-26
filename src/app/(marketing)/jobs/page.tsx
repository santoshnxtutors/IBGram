import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { getPublishedJobs } from "@/lib/jobs";
import { APPLY_HREF } from "@/lib/jobs/apply-link";
import { JobsClient, type PublicJob } from "./JobsClient";

export const dynamic = "force-dynamic";

// Without this the page inherited the homepage title and had no canonical.
export const metadata: Metadata = {
  title: { absolute: "Tutor Jobs & Careers at IB Gram | IB and IGCSE Teaching Roles" },
  description:
    "Open tutoring roles at IB Gram for IB and IGCSE tutors: home, online and hybrid teaching positions. See current openings and apply.",
  alternates: { canonical: "/jobs" },
};

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
      {/* Just clears the fixed nav - the old h-32 left a dead screenful above the H1. */}
      <div className="h-20 md:h-24" />
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl px-2 text-center md:mb-14">
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Careers at <span className="text-gradient">IB Gram</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            Building thoughtful academic support for IB and IGCSE families. We&apos;re looking for thinkers,
            educators, and creators.
          </p>
          {/* One route in for every role: sign up, fill in your own profile, get matched. */}
          <p className="mt-6 text-sm font-semibold text-muted-foreground">
            Every role below is applied for the same way:{" "}
            <Link href={APPLY_HREF} className="font-black text-primary underline-offset-4 hover:underline">
              sign up as a tutor and fill in your profile
            </Link>
            . One profile is matched against this list and every role opened after it.
          </p>
        </div>

        {dbError ? (
          <div className="rounded-lg border border-border/60 bg-card p-8 text-center">
            <Briefcase className="mx-auto mb-4 size-10 text-muted-foreground" />
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
