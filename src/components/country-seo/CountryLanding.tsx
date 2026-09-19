import Link from "next/link";
import nextDynamic from "next/dynamic";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarClock,
  Clock3,
  Compass,
  GraduationCap,
  Layers,
  ListChecks,
  MapPin,
  MessageSquare,
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";
import { BookDemoButton } from "@/components/booking/BookDemoButton";
import { fallbackReviews } from "@/components/home/ReviewsSection";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { buildCountrySeoSchema } from "@/lib/country-seo";
import type { CountrySeoPage, CountrySection } from "@/lib/country-seo/types";
import type { Tutor } from "@/lib/tutor-data";
import type { PublicReview } from "@/lib/cms/public-reviews";
import type { JsonLdObject } from "@/lib/seo/schema";
import { SchoolStrip } from "@/components/shared/SchoolStrip";

/** Grouped internal-link directory rendered before the closing CTA (city hubs). */
export type LandingDirectory = {
  eyebrow: string;
  title: string;
  lead: string;
  groups: Array<{ name: string; links: Array<{ label: string; href: string }> }>;
};

const TutorDiscovery = nextDynamic(() =>
  import("@/components/home/TutorDiscovery").then((mod) => mod.TutorDiscovery),
);

/* ------------------------------------------------------------------ */
/* Shared shells                                                       */
/* ------------------------------------------------------------------ */

/**
 * Every band sits on the same dark canvas. `tone` only changes a translucent
 * white overlay (2-4%), so sections separate visually without ever introducing
 * a light background.
 */
function Band({
  children,
  tone = "base",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "base" | "raised" | "sunken";
  className?: string;
}) {
  const toneClass =
    tone === "raised"
      ? "bg-card"
      : tone === "sunken"
        ? "bg-muted/60"
        : "";

  return (
    <section className={`relative border-t border-border ${toneClass} ${className}`}>
      <div className="container relative z-10 mx-auto px-4 py-12 md:px-6 md:py-16">{children}</div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  lead,
  icon: Icon,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  icon?: React.ComponentType<{ className?: string }>;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <header className={`mb-8 ${centered ? "mx-auto max-w-3xl text-center" : ""}`}>
      <div className={`mb-4 flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}>
        {Icon ? (
          <span className="flex size-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
        ) : null}
        <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</span>
        <span className="h-px flex-1 max-w-24 bg-primary/40" />
      </div>

      {/* Stacked and full-bleed: both start at the left edge and run the whole
          container width, so there is no empty column on either side. */}
      <h2
        className={`text-3xl font-black leading-[1.12] tracking-tight text-foreground md:text-[2.6rem] ${
          centered ? "" : "max-w-none"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-base leading-relaxed text-muted-foreground md:text-lg ${
            centered ? "" : "max-w-none"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/** Long-form prose block: heading + paragraphs + optional bullet rail. */
function ProseSection({ section, index }: { section: CountrySection; index: number }) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10 text-sm font-black text-amber-800">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl">
            {section.heading}
          </h3>
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-6 space-y-3 border-l border-border pl-5">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-foreground/75">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="space-y-5 lg:col-span-8">
        {section.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-[1.85] text-foreground/80 md:text-[1.0625rem]">
            {paragraph}
          </p>
        ))}
        {section.table ? (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="border-b border-border px-5 py-3 text-left text-[11px] font-black uppercase tracking-[0.18em] text-primary">
                {section.table.caption}
              </caption>
              <thead>
                <tr>
                  {section.table.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-border bg-muted/60 px-5 py-3 font-black text-foreground">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, r) => (
                  <tr key={r} className="border-b border-border align-top last:border-0">
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-5 py-3 font-bold text-foreground">
                          {cell}
                        </th>
                      ) : (
                        <td key={c} className="px-5 py-3 leading-relaxed text-foreground/75">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function CountryLanding({
  page,
  tutors,
  reviews,
  schema,
  directory,
  schoolStrip,
}: {
  page: CountrySeoPage;
  tutors?: Tutor[];
  reviews?: PublicReview[];
  /** Replaces the country JSON-LD graph (city hubs supply their own). */
  schema?: JsonLdObject;
  directory?: LandingDirectory;
  /** Sliding school-name strip under the stats, the same one the Gurgaon locality pages use. */
  schoolStrip?: { schools: readonly string[]; place: string };
}) {
  const flagSrc = `/images/Countryflag/${page.flagCode}.svg`;
  // CMS reviews when available, otherwise the same seed the homepage falls back to.
  const reviewItems = reviews && reviews.length > 0 ? reviews : fallbackReviews;

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <JsonLd data={schema ?? buildCountrySeoSchema(page)} />

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
            <ol className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground/70">IB &amp; IGCSE Tutors in {page.countryName}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-6 md:space-y-7 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={flagSrc}
                    alt={`Flag of ${page.countryName}`}
                    width={28}
                    height={28}
                    className="size-7 rounded-full object-cover ring-1 ring-white/20"
                  />
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-foreground/85">
                    {page.countryName}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary">
                  <span className="flex size-1.5 rounded-full bg-primary" />
                  {page.heroEyebrow}
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-[4rem]">
                {page.h1}
              </h1>

              <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/tutors"
                  prefetch={false}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "group h-14 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 md:text-lg",
                  })}
                >
                  View all tutors
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <BookDemoButton className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg" />
              </div>

              <ul className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                {page.heroTrustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-foreground/85">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mirrors the homepage "Why IB Gram?" rail: eyebrow, one statement,
                then standalone icon cards — no outer container card. */}
            <aside className="relative lg:col-span-5">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-primary/80">
                    Why IB Gram?
                  </h2>
                  <p className="text-2xl font-black leading-tight text-foreground md:text-3xl">
                    {`Support built around how IB and IGCSE students in ${page.countryName} actually study`}
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: Clock3,
                      title: "Lessons in your time zone",
                      desc: `${page.timezoneLabel}. ${page.schedulingNote}.`,
                    },
                    {
                      icon: Layers,
                      title: "Every IB stage, plus IGCSE",
                      desc: `${page.programmes.map((programme) => programme.code).join(", ")} and Cambridge or Edexcel IGCSE, matched to your child's current year.`,
                    },
                    {
                      icon: Compass,
                      title: "Subject-level tutor matching",
                      desc: "Matched by programme, subject, HL or SL level, weak areas and your school's assessment calendar.",
                    },
                    {
                      icon: CalendarClock,
                      title: "Deadline-aware planning",
                      desc: "Internal assessments, Extended Essay drafts and past-paper revision planned around the exam session your school sits.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                          {title}
                        </h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
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

      {schoolStrip ? <SchoolStrip schools={schoolStrip.schools} place={schoolStrip.place} /> : null}

      {/* ---------------- Intro ---------------- */}
      <Band>
        <SectionHead
          eyebrow={`IB & IGCSE in ${page.countryName}`}
          title={page.intro.heading}
          icon={BookOpen}
        />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-8">
            {page.intro.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.85] text-foreground/80 md:text-[1.0625rem]">
                {paragraph}
              </p>
            ))}
          </div>
          {page.intro.bullets && page.intro.bullets.length > 0 ? (
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                  At a glance
                </p>
                <ul className="space-y-4">
                  {page.intro.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-foreground/80">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </Band>

      {/* ---------------- Programmes ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="IB programmes"
          title={`Every IB programme stage, mapped to ${page.demonym} school years`}
          lead={page.programmesIntro}
          icon={GraduationCap}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {page.programmes.map((programme) => (
            <article
              key={programme.code}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-lg border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-primary">
                  {programme.code}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {programme.ageRange}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-black tracking-tight text-foreground">{programme.name}</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/75">{programme.description}</p>
              <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                {programme.countryNote}
              </p>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- Subjects ---------------- */}
      <Band>
        <SectionHead
          eyebrow="Subject coverage"
          title={page.igcseSubjects ? "IB subjects we tutor" : "IB and IGCSE subjects we tutor"}
          lead={page.subjectsIntro}
          icon={ListChecks}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.subjects.map((subject) => (
            <article
              key={subject.name}
              className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-secondary/30 hover:bg-primary/5"
            >
              <h3 className="mb-1.5 text-base font-black tracking-tight text-foreground">{subject.name}</h3>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-amber-800">{subject.levels}</p>
              <p className="text-sm leading-relaxed text-foreground/70">{subject.description}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- IGCSE subjects (hubs that split IB and IGCSE) ---------------- */}
      {page.igcseSubjects ? (
        <Band tone="sunken">
          <SectionHead eyebrow="IGCSE coverage" title="IGCSE subjects we tutor" lead={page.igcseSubjectsIntro} icon={BookOpen} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.igcseSubjects.map((subject) => (
              <article
                key={subject.name}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-secondary/30 hover:bg-primary/5"
              >
                <h3 className="mb-1.5 text-base font-black tracking-tight text-foreground">{subject.name}</h3>
                <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-amber-800">{subject.levels}</p>
                <p className="text-sm leading-relaxed text-foreground/70">{subject.description}</p>
              </article>
            ))}
          </div>
        </Band>
      ) : null}

      {/* ---------------- Formats ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="How sessions run"
          title={`Tutoring formats built around ${page.demonym} school timetables`}
          lead={page.modesIntro}
          icon={Clock3}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {page.modes.map((mode) => (
            <article
              key={mode.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <h3 className="mb-3 text-lg font-black tracking-tight text-foreground">{mode.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-foreground/75">{mode.description}</p>
              <ul className="mt-auto space-y-2.5 border-t border-border pt-5">
                {mode.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-foreground/75">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- Tutors ---------------- */}
      {tutors && tutors.length > 0 ? (
        <div className="relative border-t border-border bg-card">
          <div className="container mx-auto px-4 pt-16 md:px-6 md:pt-24">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <GraduationCap className="size-4" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">
                Verified tutors
              </span>
              <span className="h-px w-8 bg-primary/40" />
            </div>
          </div>
          <TutorDiscovery
            tutors={tutors}
            heading={`IB and IGCSE tutors available to students in ${page.countryName}`}
            intro={page.tutorsIntro ?? `A sample of verified tutors covering IB PYP, MYP, DP and IGCSE subjects. Matching weighs syllabus fit, HL or SL level, exam session, and the ${page.timezoneLabel.split(",")[0].trim()} to ${page.timezoneLabel.split("and").pop()?.trim() ?? ""} scheduling window your family needs.`}
          />
        </div>
      ) : null}

      {/* ---------------- Long-form body ---------------- */}
      <Band tone="sunken">
        <SectionHead
          eyebrow="The full picture"
          title={`What IB and IGCSE study actually looks like in ${page.countryName}`}
          icon={BookOpen}
        />
        <div className="space-y-12 md:space-y-16">
          {page.sections.map((section, index) => (
            <ProseSection key={section.heading} section={section} index={index} />
          ))}
        </div>
      </Band>

      {/* ---------------- Regions ---------------- */}
      <Band>
        <SectionHead
          eyebrow="Where we tutor"
          title={page.regionsTitle ?? `States, metros and time zones across ${page.countryName}`}
          lead={page.regionsIntro}
          icon={MapPin}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.regions.map((region) => (
            <article
              key={region.name}
              className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <h3 className="mb-2 flex items-center gap-2 text-base font-black tracking-tight text-foreground">
                <MapPin className="size-4 shrink-0 text-primary" />
                {region.name}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">{region.note}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- Schools ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="School ecosystem"
          title={`IB and Cambridge school communities we support in ${page.countryName}`}
          icon={Building2}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {page.schoolClusters.map((cluster) => (
            <article key={cluster.city} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="mb-3 text-lg font-black tracking-tight text-foreground">{cluster.city}</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/75">{cluster.note}</p>
              <ul className="flex flex-wrap gap-2">
                {cluster.schools.map((school) => (
                  <li
                    key={school}
                    className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-xs font-semibold text-foreground/70"
                  >
                    {school}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-border bg-muted/60 p-5 text-xs leading-relaxed text-muted-foreground">
          {page.schoolDisclaimer}
        </p>
      </Band>

      {/* ---------------- Process ---------------- */}
      <Band>
        <SectionHead
          eyebrow="How matching works"
          title="From first enquiry to a tutor who fits"
          icon={ListChecks}
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {page.process.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-sm font-black text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2.5 text-base font-black tracking-tight text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* ---------------- Why ---------------- */}
      <Band tone="raised">
        <SectionHead
          eyebrow="Why families choose us"
          title={`What ${page.demonym} parents tell us matters most`}
          icon={ShieldCheck}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {page.whyPoints.map((point) => (
            <article key={point.title} className="rounded-2xl border border-border bg-card p-6">
              <ShieldCheck className="mb-4 size-6 text-primary" />
              <h3 className="mb-2.5 text-base font-black tracking-tight text-foreground">{point.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{point.description}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* ---------------- Reviews ---------------- */}
      {/* Real reviews from the CMS (same source as the homepage), scrolling
          horizontally. Never country-specific testimonials written to fill the slot. */}
      <Band tone="sunken" className="overflow-hidden">
        <SectionHead
          eyebrow="Student and parent reviews"
          title="What students and parents say about working with IB Gram"
          lead={`Practical feedback on tutor fit, revision structure and communication from IB and IGCSE families, including those studying in ${page.countryName}.`}
          icon={MessageSquare}
        />
      </Band>
      <div className="relative -mt-4 overflow-hidden pb-12 md:pb-16">
        <div
          className="flex w-max gap-5 pl-4 reviews-marquee hover:[animation-play-state:paused] md:pl-6"
          style={{ animationDuration: `${Math.max(reviewItems.length * 9, 45)}s` }}
        >
          {[...reviewItems, ...reviewItems].map((review, index) => (
            <article
              key={`${review.id}-${index}`}
              aria-hidden={index >= reviewItems.length}
              className="flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[22rem] md:w-[24rem]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Quote className="size-4" />
                </span>
                <span className="flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: Math.round(review.rating) }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current text-secondary" aria-hidden />
                  ))}
                </span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/85">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-black text-foreground">{review.name}</p>
                {review.location ? (
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <MapPin className="size-3" />
                    {review.location}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ---------------- FAQ ---------------- */}
      <Band>
        <SectionHead
          eyebrow="Questions parents ask"
          title={`IB and IGCSE tutoring in ${page.countryName}: your questions answered`}
          icon={MessageSquare}
        />
        <div className="grid gap-3 lg:grid-cols-2">
          {page.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-card transition-colors open:border-primary/25 open:bg-primary/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-bold leading-snug text-foreground marker:content-none">
                <span>{faq.question}</span>
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border text-primary transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-border px-5 py-5 text-sm leading-relaxed text-foreground/75">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Band>

      {/* ---------------- Final CTA ---------------- */}
      {directory ? (
        <Band tone="raised">
          <SectionHead eyebrow={directory.eyebrow} icon={MapPin} title={directory.title} lead={directory.lead} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {directory.groups.map((group) => (
              <div key={group.name} className="rounded-2xl border border-border bg-background/40 p-5">
                <h3 className="mb-3 text-base font-black text-foreground">{group.name}</h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium leading-snug text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Band>
      ) : null}

      <section className="relative border-t border-border bg-muted/60">
        <div className="container mx-auto px-4 py-10 sm:py-14 md:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-center sm:rounded-[2rem] sm:p-10 md:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flagSrc}
                alt={`Flag of ${page.countryName}`}
                width={56}
                height={56}
                className="mx-auto mb-4 size-10 rounded-full object-cover ring-2 ring-white/15 sm:mb-6 sm:size-14"
              />
              <h2 className="text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl">
                {page.closingHeading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
                {page.closingBody}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <BookDemoButton className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 md:text-lg" />
                <Link
                  href="/tutors"
                  prefetch={false}
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/50 px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg"
                >
                  Browse verified tutors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
