import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { getPublishedJobBySlug } from "@/lib/jobs";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug).catch(() => null);
  if (!job) return { title: "Role not found | IB Gram" };
  return {
    title: `${job.title} | Careers at IB Gram`,
    description: job.summary ?? `Apply for ${job.title} at IB Gram.`,
  };
}

function TextBlock({ title, body }: { title: string; body?: string | null }) {
  if (!body) return null;
  return (
    <section className="border-t border-border/50 pt-8">
      <h2 className="mb-4 text-2xl font-black tracking-tight text-foreground">{title}</h2>
      <div className="space-y-4 text-base font-medium leading-8 text-muted-foreground">
        {body.split(/\n{2,}/).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-border/50 pt-8">
      <h2 className="mb-4 text-2xl font-black tracking-tight text-foreground">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base font-medium leading-7 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function JobDetailPage({ params }: Params) {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug);
  if (!job) notFound();

  return (
    <div className="min-h-screen bg-background pb-28 text-foreground">
      <div className="h-24 md:h-28" />
      <main className="container mx-auto max-w-6xl px-4 md:px-6">
        <Link
          href="/jobs"
          className="mb-10 inline-flex items-center gap-2 text-sm font-black text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to jobs
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0 space-y-10">
            <header>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{job.department}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground md:text-6xl">
                {job.title}
              </h1>
              {job.summary && (
                <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-muted-foreground">{job.summary}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-bold text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4" /> {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="size-4" /> {job.employmentType}
                </span>
                {job.level && (
                  <span className="flex items-center gap-2">
                    <Building2 className="size-4" /> {job.level}
                  </span>
                )}
                {job.closesAt && (
                  <span className="flex items-center gap-2">
                    <CalendarDays className="size-4" /> Closes {job.closesAt.toLocaleDateString()}
                  </span>
                )}
              </div>
            </header>

            <TextBlock title="Role Overview" body={job.roleOverview} />
            <TextBlock title="Job Description" body={job.jobDescription} />
            <BulletSection title="Responsibilities" items={job.responsibilities} />
            <BulletSection title="Requirements" items={job.requirements} />
            <BulletSection title="Nice To Have" items={job.niceToHave} />
            <BulletSection title="Benefits" items={job.benefits} />
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border/60 bg-card p-5">
              <h2 className="text-lg font-black text-foreground">Apply for this role</h2>
              <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                Share your resume and a few details. The IB Gram team will review your application from the admin
                panel.
              </p>
              <Link
                href={`/jobs/${job.slug}/apply`}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-black text-primary-foreground transition hover:bg-primary/90"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
