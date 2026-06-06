import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, MapPin } from "lucide-react";
import { getPublishedJobBySlug } from "@/lib/jobs";
import { JobApplicationForm } from "./JobApplicationForm";

export const dynamic = "force-dynamic";

export default async function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug);
  if (!job) notFound();

  return (
    <div className="min-h-screen bg-background pb-28 text-foreground">
      <div className="h-24 md:h-28" />
      <main className="container mx-auto max-w-5xl px-4 md:px-6">
        <Link
          href={`/jobs/${job.slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to role
        </Link>

        <header className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Job Application</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            {job.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="size-4" /> {job.employmentType}
            </span>
          </div>
          {job.applicationPrompt && (
            <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-muted-foreground">
              {job.applicationPrompt}
            </p>
          )}
        </header>

        <JobApplicationForm
          job={{
            slug: job.slug,
            title: job.title,
            department: job.department,
            location: job.location,
            employmentType: job.employmentType,
          }}
        />
      </main>
    </div>
  );
}
