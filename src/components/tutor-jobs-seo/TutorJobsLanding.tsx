import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Circle,
  Coins,
  GraduationCap,
  HelpCircle,
  Link2,
  ListChecks,
  Quote,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { buildTutorJobSeoSchema } from "@/lib/tutor-jobs-seo";
import type { JobSection, TutorJobSeoPage } from "@/lib/tutor-jobs-seo/types";
import type { JsonLdObject } from "@/lib/seo/schema";

/** A published vacancy from the Job table, narrowed to what this page renders. */
export type LandingVacancy = {
  slug: string;
  title: string;
  location: string;
  employmentType: string;
  workMode: string | null;
  summary: string | null;
};

/* ------------------------------------------------------------------ */
/* Shared shells                                                       */
/* ------------------------------------------------------------------ */

/**
 * Local copies of the Band/SectionHead shells from CountryLanding rather than an extraction.
 * Those two are module-private there, and that component renders ~1,250 live parent pages —
 * a cosmetic DRY refactor is not worth putting them through a shared-file change.
 */
function Band({
  children,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  tone?: "base" | "raised" | "sunken";
  id?: string;
}) {
  const toneClass = tone === "raised" ? "bg-card" : tone === "sunken" ? "bg-muted/60" : "";
  return (
    <section id={id} className={`relative border-t border-border ${toneClass}`}>
      <div className="container relative z-10 mx-auto px-4 py-12 md:px-6 md:py-16">{children}</div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  lead,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <header className="mb-8">
      <div className="mb-4 flex items-center gap-2.5">
        {Icon ? (
          <span className="flex size-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
        ) : null}
        <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</span>
        <span className="h-px max-w-24 flex-1 bg-primary/40" />
      </div>
      <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-foreground md:text-[2.6rem]">{title}</h2>
      {lead ? (
        <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{lead}</p>
      ) : null}
    </header>
  );
}

/** Prose + optional bullets + optional table. Used for intro, earnings and every body section. */
function SectionBody({ section }: { section: JobSection }) {
  return (
    <div className="space-y-5">
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 p-4 text-sm font-semibold leading-relaxed text-foreground/90"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.table ? <DataTable table={section.table} /> : null}
    </div>
  );
}

function DataTable({ table }: { table: NonNullable<JobSection["table"]> }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="border-b border-border bg-muted/60 px-5 py-3 text-left text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
            {table.caption}
          </caption>
          <thead>
            <tr className="border-b border-border">
              {table.columns.map((column) => (
                <th key={column} scope="col" className="px-5 py-3 text-xs font-black uppercase tracking-wider text-primary">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-b border-border/60 last:border-0">
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={cell} scope="row" className="px-5 py-3.5 align-top font-bold text-foreground">
                      {cell}
                    </th>
                  ) : (
                    <td key={`${row[0]}-${index}`} className="px-5 py-3.5 align-top text-muted-foreground">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

const APPLY_CTA = buttonVariants({
  size: "lg",
  className:
    "group h-14 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 md:text-lg",
});

const APPLY_CTA_SECONDARY =
  "inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function TutorJobsLanding({
  page,
  vacancies,
  schema,
}: {
  page: TutorJobSeoPage;
  /** Live rows from the Job table. Empty renders the talent-pool state, never a fake opening. */
  vacancies?: LandingVacancy[];
  schema?: JsonLdObject;
}) {
  const openRoles = vacancies ?? [];

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <JsonLd data={schema ?? buildTutorJobSeoSchema(page)} />

      {/* Continuous ambient wash behind every band — keeps the page one dark surface. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-[160px]" />
        <div className="absolute top-[45%] -right-32 h-[32rem] w-[32rem] rounded-full bg-secondary/[0.07] blur-[150px]" />
        <div className="absolute bottom-0 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/[0.06] blur-[150px]" />
      </div>

      {/* ---------------- Hero ---------------- */}
      <section className="relative pt-6 pb-10 lg:pt-8 lg:pb-14">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/join-as-tutor/" className="transition-colors hover:text-primary">
                  Teach with IB Gram
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground/70">{page.scopeLabel}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 space-y-6 md:space-y-7 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary">
                  <span className="flex size-1.5 rounded-full bg-primary" />
                  {page.heroEyebrow}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground/80">
                  <Briefcase className="size-3.5" />
                  Tutor applications open
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-[4rem]">
                {page.h1}
              </h1>

              <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/join-as-tutor/" className={APPLY_CTA}>
                  Apply to teach
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/tutor-policy/" className={APPLY_CTA_SECONDARY}>
                  Read the tutor policy
                </Link>
              </div>

              <ul className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                {page.heroTrustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-foreground/85"
                  >
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct answer rail: the head query answered in one lift-able paragraph, then
                the pay summary, which is the first thing an applying tutor looks for. */}
            <aside className="relative min-w-0 lg:col-span-5">
              <div className="space-y-5">
                <div className="rounded-2xl border border-primary/20 bg-card p-6">
                  <h2 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                    <Sparkles className="size-3.5" />
                    In short
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-foreground/90">{page.directAnswer}</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                    <Coins className="size-3.5" />
                    What you keep
                  </h2>
                  <dl className="space-y-4">
                    {[
                      { term: "Home tuition", detail: "First month split 50-50. From month 2, 100% of the fee is yours." },
                      { term: "Online classes", detail: "70% to you, 30% platform fee, unchanged for as long as you teach." },
                      { term: "Payouts", detail: "Monthly, on the 1st. September's fees are deposited on 1 October." },
                    ].map(({ term, detail }) => (
                      <div key={term} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                        <dt className="text-sm font-bold text-foreground">{term}</dt>
                        <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href="/tutor-policy/"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                  >
                    Full commission and payout terms
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Stat strip ---------------- */}
      <section className="relative border-y border-border bg-muted/60">
        <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden px-4 md:px-6 lg:grid-cols-4">
          {page.heroStats.map((stat) => (
            <div key={stat.label} className="px-2 py-5 text-center sm:py-6 md:py-8">
              <p className="text-3xl font-black tracking-tight text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Intro ---------------- */}
      <Band>
        <SectionHead eyebrow={`${page.scopeLabel} tutoring`} title={page.intro.heading} icon={BookOpen} />
        <SectionBody section={page.intro} />
      </Band>

      {/* ---------------- Live vacancies ---------------- */}
      <Band tone="sunken" id="open-roles">
        <SectionHead
          eyebrow="Current openings"
          title={openRoles.length > 0 ? "Roles open right now" : "No listed roles open today"}
          lead={
            openRoles.length > 0
              ? "Listed roles are salaried or contract positions at IB Gram. Tutoring applications are always open and do not depend on a listing below."
              : "We are not advertising a salaried role this week. Tutoring applications are always open and reviewed year-round — a listing is not needed to apply as a tutor."
          }
          icon={Briefcase}
        />
        {openRoles.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {openRoles.map((role) => (
              <li key={role.slug} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <span>{role.location}</span>
                  <span className="text-muted-foreground">{role.employmentType}</span>
                  {role.workMode ? <span className="text-muted-foreground">{role.workMode}</span> : null}
                </p>
                {role.summary ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
                ) : null}
                <Link
                  href={`/jobs/${role.slug}/`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                >
                  View role and apply
                  <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Send your profile anyway. Tutor matching does not run on job listings — we review applications as they
              arrive and contact you when a student in your subject and level comes in.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/join-as-tutor/" className={APPLY_CTA}>
                Apply to teach
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/jobs/" className={APPLY_CTA_SECONDARY}>
                See all listed roles
              </Link>
            </div>
          </div>
        )}
      </Band>

      {/* ---------------- Earnings ---------------- */}
      <Band>
        <SectionHead eyebrow="Pay and commission" title={page.earnings.heading} icon={Coins} />
        <SectionBody section={page.earnings} />
      </Band>

      {/* ---------------- Requirements ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="Eligibility"
          title="What we look for in an IB or IGCSE tutor"
          lead={page.requirementsIntro}
          icon={ListChecks}
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {page.requirements.map((requirement) => (
            <li key={requirement.label} className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 p-5">
              {requirement.required ? (
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              ) : (
                <Circle className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" />
              )}
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  {requirement.label}
                  {requirement.required ? null : (
                    <span className="ml-2 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                      Helps, not required
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{requirement.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Band>

      {/* ---------------- Process (HowTo) ---------------- */}
      <Band>
        <SectionHead
          eyebrow="How to start"
          title="From application to your first paid class"
          lead={page.processIntro}
          icon={CalendarClock}
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {page.process.map((step, index) => (
            <li
              key={step.title}
              id={`step-${index + 1}`}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 scroll-mt-24"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-sm font-black text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* ---------------- Long-form body ---------------- */}
      {page.sections.map((section, index) => (
        <Band key={section.heading} tone={index % 2 === 0 ? "sunken" : "base"}>
          <SectionHead
            eyebrow={index % 2 === 0 ? "Teaching detail" : "What to expect"}
            title={section.heading}
            icon={index % 2 === 0 ? GraduationCap : BookOpen}
          />
          <SectionBody section={section} />
        </Band>
      ))}

      {/* ---------------- Policies ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="Tutor policy"
          title="The terms you are agreeing to"
          lead={page.policiesIntro}
          icon={ScrollText}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {page.policies.map((policy) => (
            <article key={policy.heading} className="rounded-2xl border border-border bg-background/40 p-5">
              <h3 className="text-sm font-bold text-foreground">{policy.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{policy.summary}</p>
              <Link
                href={`/tutor-policy/#${policy.anchor}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                Read the full clause
                <ArrowRight className="size-3" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs font-medium leading-relaxed text-muted-foreground/70">
          Summaries only. The binding text is the{" "}
          <Link href="/tutor-policy/" className="font-bold text-primary hover:underline">
            IB Gram tutor policy
          </Link>
          , read alongside our{" "}
          <Link href="/terms-and-conditions/" className="font-bold text-primary hover:underline">
            terms and conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy/" className="font-bold text-primary hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </Band>

      {/* ---------------- Why IB Gram ---------------- */}
      <Band>
        <SectionHead eyebrow="Why tutors stay" title="What working with IB Gram actually gives you" icon={Quote} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {page.whyPoints.map((point) => (
            <article
              key={point.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- FAQs ---------------- */}
      <Band tone="sunken">
        <SectionHead eyebrow="Tutor questions" title="Questions from applying tutors" icon={HelpCircle} />
        <div className="grid gap-4 lg:grid-cols-2">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-border bg-card p-5 open:border-primary/30">
              <summary className="cursor-pointer list-none text-base font-bold text-foreground marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Band>

      {/* ---------------- Internal links ---------------- */}
      <Band>
        <SectionHead eyebrow="Related" title="Other ways to tutor with IB Gram" icon={Link2} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {page.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <h3 className="flex items-center justify-between gap-3 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                {link.label}
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>
      </Band>

      {/* ---------------- Closing CTA ---------------- */}
      <Band tone="raised">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-foreground md:text-[2.6rem]">
            {page.closingHeading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{page.closingBody}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/join-as-tutor/" className={APPLY_CTA}>
              Apply to teach
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/tutor-policy/" className={APPLY_CTA_SECONDARY}>
              Read the tutor policy
            </Link>
          </div>
          <p className="mt-6 text-xs font-medium leading-relaxed text-muted-foreground/70">
            IB Gram is an independent tutoring platform and is not affiliated with the International Baccalaureate
            Organization, Cambridge International or Pearson Edexcel. Applying does not guarantee placement. Last
            updated {page.lastUpdated}.
          </p>
        </div>
      </Band>
    </div>
  );
}
