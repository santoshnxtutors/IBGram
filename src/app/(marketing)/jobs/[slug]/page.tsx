import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { getPublishedJobBySlug } from "@/lib/jobs";
import { APPLY_HREF, LOGIN_HREF } from "@/lib/jobs/apply-link";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug).catch(() => null);
  if (!job) return { title: "Role not found | IB Gram" };
  return {
    title: `${job.title} | Careers at IB Gram`,
    description: job.summary ?? `Apply for ${job.title} at IB Gram.`,
    alternates: { canonical: absoluteUrl(`/jobs/${slug}/`) },
  };
}

/**
 * JobPosting for a real, dated vacancy.
 *
 * The /ib-tutor-jobs/-style landing pages deliberately carry no JobPosting: they are
 * evergreen category pages, and Google's guidelines want a specific role with a posting
 * date. These /jobs/<slug>/ rows are that specific role, so the markup belongs here.
 *
 * Tutoring is paid per student at a fee the tutor sets, so there is no baseSalary to
 * state. Inventing a range to win a rich result would be a false claim, so the field is
 * left out rather than guessed.
 */
function buildJobPostingSchema(job: Awaited<ReturnType<typeof getPublishedJobBySlug>>) {
  if (!job) return null;
  const remote = /online|worldwide|remote/i.test(job.workMode ?? job.location);
  const countries = /india/i.test(job.location)
    ? ["IN"]
    : /uae|dubai|emirates/i.test(job.location)
      ? ["AE"]
      : null;

  const description = [
    job.roleOverview,
    job.jobDescription,
    job.responsibilities.length ? `Responsibilities: ${job.responsibilities.join(" ")}` : "",
    job.requirements.length ? `Requirements: ${job.requirements.join(" ")}` : "",
    job.benefits.length ? `Benefits: ${job.benefits.join(" ")}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": absoluteUrl(`/jobs/${job.slug}/#jobposting`),
    title: job.title,
    description,
    datePosted: (job.publishedAt ?? job.createdAt).toISOString(),
    validThrough: job.closesAt ? job.closesAt.toISOString() : undefined,
    employmentType: /full/i.test(job.employmentType)
      ? ["PART_TIME", "FULL_TIME", "CONTRACTOR"]
      : ["PART_TIME", "CONTRACTOR"],
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "IB Gram",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
    },
    directApply: true,
    url: absoluteUrl(`/jobs/${job.slug}/`),
    industry: "Education",
    occupationalCategory: "25-3041 Tutors",
    ...(remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: (countries ?? ["IN", "AE", "GB", "US", "SG", "AU", "CA"]).map((code) => ({
            "@type": "Country",
            name: code,
          })),
        }
      : {
          jobLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressCountry: countries?.[0] ?? "IN", addressLocality: job.location },
          },
        }),
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

  const jobPostingSchema = buildJobPostingSchema(job);

  return (
    <div className="min-h-screen bg-background pb-28 text-foreground">
      {jobPostingSchema && <JsonLd data={jobPostingSchema} />}
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
                Applying creates your tutor account and profile in one go: list your subjects, levels, fee and
                travel areas, upload your CV, and the IB Gram team reviews it from the admin panel.
              </p>
              {/* Every role applies through the tutor signup, not a per-role form: one profile is
                  matched against this role and every one that opens after it. */}
              <Link
                href={APPLY_HREF}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-black text-primary-foreground transition hover:bg-primary/90"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
              <p className="mt-3 text-xs font-semibold leading-5 text-muted-foreground">
                Already have an account?{" "}
                <Link href={LOGIN_HREF} className="font-black text-primary underline-offset-4 hover:underline">
                  Log in and apply
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
