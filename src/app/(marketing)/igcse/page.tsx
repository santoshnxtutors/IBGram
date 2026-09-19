import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Compass,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookDemoButton } from "@/components/booking/BookDemoButton";
import { HeroFlagSlider } from "@/components/home/HeroFlagSlider";
import { IGCSETutors } from "./tutor";
import { IGCSESubjectExplorer } from "./subject-explorer";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { IGCSEBlogs } from "./blogs/IGCSEBlogs";
import { IGCSEFaqs } from "./faqs/IGCSEFaqs";
import { IGCSELearningPlan } from "./planning/IGCSELearningPlan";
import { IGCSEReviews } from "./reviews/IGCSEReviews";
import { IGCSETrustSignals } from "./trust/IGCSETrustSignals";
import { igcseFaqs } from "./content";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getIgcseSubjectGroups, igcseSubjectPath } from "@/lib/igcse-subjects";

export const dynamic = "force-static";
export const revalidate = 3600;

const CANONICAL = absoluteUrl("/igcse/");

export const metadata: Metadata = {
  title: "IGCSE Tutors in India — Cambridge & Edexcel Support",
  description:
    "Find verified Cambridge IGCSE and Pearson Edexcel International GCSE tutors across Gurugram, Delhi, Noida, Mumbai and online. Subject-first matching by syllabus code, tier, paper route and exam timeline.",
  keywords: [
    "IGCSE tutors",
    "Cambridge IGCSE tutor",
    "Pearson Edexcel International GCSE tutor",
    "IGCSE Math tutor",
    "IGCSE Physics tutor",
    "IGCSE Chemistry tutor",
    "IGCSE Biology tutor",
    "IGCSE Economics tutor",
    "IGCSE English tutor",
    "IGCSE Business Studies tutor",
    "IGCSE tutor Gurugram",
    "IGCSE tutor Gurgaon",
    "IGCSE tutor Delhi",
    "IGCSE tutor Noida",
    "IGCSE online tutor",
    "IGCSE home tutor",
    "IGCSE Grade 9 tutor",
    "IGCSE Grade 10 tutor",
    "IGCSE past papers",
    "IGCSE exam preparation",
  ],
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "IGCSE Tutors in India — Cambridge & Edexcel Support | IB Gram",
    description:
      "Verified Cambridge IGCSE and Pearson Edexcel International GCSE tutors for Maths, Sciences, English, Economics, Business and more. Home, online and hybrid lessons across India.",
    siteName: "IB Gram",
    images: [
      {
        url: absoluteUrl("/images/ib-gram-city-og.svg"),
        alt: "IB Gram IGCSE programme and subject support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGCSE Tutors in India — Cambridge & Edexcel Support | IB Gram",
    description:
      "Cambridge IGCSE and Pearson Edexcel International GCSE tutor matching by subject, board, level and lesson mode.",
    images: [absoluteUrl("/images/ib-gram-city-og.svg")],
  },
};

const MATCHING_STEPS = [
  {
    title: "Confirm the board and the subject",
    body: "We start with the exact board (Cambridge IGCSE or Pearson Edexcel International GCSE), syllabus code, tier or level, and current Grade 9 or Grade 10 stage. Different boards reward different answer structures, so this is settled before any tutor profile is shortlisted.",
  },
  {
    title: "Map the school calendar",
    body: "School internal assessments, mock dates and final-exam entry windows shape lesson cadence. A late-Grade-10 family heading into May mocks needs a different rhythm from a mid-Grade-9 family on the foundation slope.",
  },
  {
    title: "Shortlist verified subject specialists",
    body: "Tutor profiles are filtered by subject experience, examiner or marker history where documented, lesson methodology and lesson mode availability. We surface a small comparable shortlist rather than a long list of generic profiles.",
  },
  {
    title: "Confirm fit with a short discovery session",
    body: "A short consultation or trial session confirms subject fit, teaching style and weekly cadence before any longer commitment. Indicative fees are confirmed at this stage.",
  },
];

export default async function IGCSEPage() {
  const visibleTutors = await getVisibleTutorsForPage("/igcse/");
  const subjectGroups = getIgcseSubjectGroups();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: igcseFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "IGCSE", item: CANONICAL },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: absoluteUrl("/"),
    description:
      "Independent tutoring platform matching IGCSE and IB families with verified subject specialists across home, online and hybrid modes.",
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IGCSE tutoring",
    provider: {
      "@type": "EducationalOrganization",
      name: "IB Gram",
      url: absoluteUrl("/"),
    },
    areaServed: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore", "Hyderabad", "Online"],
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IGCSE subjects",
      itemListElement: [
        "Cambridge IGCSE Mathematics",
        "Cambridge IGCSE Physics",
        "Cambridge IGCSE Chemistry",
        "Cambridge IGCSE Biology",
        "Cambridge IGCSE Economics",
        "Cambridge IGCSE English",
        "Cambridge IGCSE Business Studies",
        "Pearson Edexcel International GCSE Mathematics",
        "Pearson Edexcel International GCSE Physics",
        "Pearson Edexcel International GCSE Chemistry",
      ].map((subject) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: subject },
      })),
    },
    url: CANONICAL,
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, breadcrumbSchema, faqSchema, serviceSchema],
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pt-4 pb-12 md:pt-6 md:pb-14 noise-overlay">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[80px]" />
        </div>

        {/* Same two-column shape as the IB hero on the homepage: left-aligned badge,
            headline, intro and CTAs, with a "Why IB Gram?" panel on the right. */}
        <div className="relative z-10 mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:pl-8 xl:pl-12 lg:pr-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

            {/* Left Column */}
            <div className="space-y-7 md:space-y-8 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary sm:px-4 sm:py-1.5 sm:text-xs md:text-sm">
                    <GraduationCap className="size-3.5 sm:size-4" />
                    <span>Cambridge IGCSE · Pearson Edexcel International GCSE</span>
                  </div>
                </div>

                <h1 className="mt-3 max-w-5xl text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  Verified IGCSE tutors matched by subject, board and lesson mode
                </h1>

                <p className="mt-4 max-w-none text-lg leading-relaxed text-muted-foreground lg:pr-4 md:text-xl">
                  Find IGCSE tutoring that fits your child&apos;s exam route: Cambridge or Pearson Edexcel, Core or Extended, Grade 9 foundations or Grade 10 finals. IB Gram is an independent platform helping families across 15+ countries compare verified subject specialists by paper style, syllabus code and examiner familiarity. Online lessons run in your time zone, with home and hybrid options where tutors are local.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Verified tutor profiles</span>
                  <span className="flex items-center gap-2"><Laptop className="size-4 text-primary" /> Home · Online · Hybrid</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Subject-first matching</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/tutors"
                  prefetch={false}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "h-14 px-10 text-base md:text-lg rounded-xl bg-primary text-primary-foreground group hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all font-bold",
                  })}
                >
                  View all IGCSE tutors
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <BookDemoButton
                  defaultCurriculum="IGCSE"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:gap-5">
                <HeroFlagSlider />
                <div>
                  <div className="flex items-center gap-1 text-secondary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>
                        <Star className="size-4 fill-current" />
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                    Trusted by families preparing for <strong className="font-semibold text-foreground">Cambridge and Edexcel IGCSE exams</strong> across Asia, the Middle East, Europe, North America and Oceania in <span className="font-bold text-primary">15+ countries</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Why IB Gram for IGCSE */}
            <div className="relative lg:col-span-5">
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-primary/80">Why IB Gram?</h2>
                  <p className="text-2xl font-black leading-tight text-foreground md:text-3xl">Support built around how IGCSE students are actually examined</p>
                </div>

                <div className="grid gap-4">
                  {[
                    { title: "Board and syllabus-aware matching", icon: Target, desc: "Cambridge or Edexcel, Core or Extended, matched to your school's registered syllabus code." },
                    { title: "Paper-level subject depth", icon: BookOpen, desc: "Maths 0580 and 0607, Physics 0625, Chemistry 0620, Biology 0610, English 0500, Economics 0455 and more." },
                    { title: "Lessons in your time zone", icon: CalendarClock, desc: "Online worldwide around school hours, with home and hybrid options where tutors are local." },
                    { title: "Parent communication", icon: Users, desc: "Clear updates on what was covered, what needs practice and the next step." }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-bold text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <IGCSETrustSignals />

      {/* ───── Cambridge vs Edexcel deep-dive ───── */}
      <section className="border-y border-border/50 bg-muted/5 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800">
              <Target className="size-4" />
              <span>Board comparison</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Cambridge IGCSE and Pearson Edexcel — explained for parents</h2>
            <p className="leading-relaxed text-muted-foreground">
              IGCSE support becomes genuinely useful only when it is tied to the exact exam path. Families using this page can compare board routes, syllabus codes, assessment style and the tutor matching that fits how your child currently learns.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-8">
              <div className="flex items-center gap-3 pb-4">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary font-black">C</div>
                <h3 className="text-xl font-bold">Cambridge IGCSE</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Widely used by international schools across India. Syllabus codes (Mathematics 0580 / 0607, Physics 0625, Chemistry 0620, Biology 0610, English 0500, Economics 0455 and so on) drive paper combinations, tier choices and assessment style. Cambridge runs both A*–G and 9–1 grade-scale syllabuses, and switching between scales after entry deadlines is not allowed — so confirming the school&apos;s registered syllabus early matters.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-xs font-bold">
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">A*–G & 9–1 scales</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Core / Extended tiers</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Zone restrictions</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Practical / ATP papers</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-8">
              <div className="flex items-center gap-3 pb-4">
                <div className="grid size-10 place-items-center rounded-xl bg-secondary/15 text-amber-800 font-black">P</div>
                <h3 className="text-xl font-bold">Pearson Edexcel International GCSE (9–1)</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The International GCSE (9–1) route from Pearson Edexcel. Specifications cover Mathematics A and B, Sciences (single and double), English Language A and B, Economics, Business, ICT, Computer Science and humanities. Many subjects offer a choice of linear or modular assessment, which can be useful for students who benefit from spaced paper windows. Sample assessment material and past papers are published per specification.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-xs font-bold">
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">9–1 grading scale</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Linear or modular paths</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Maths A &amp; B options</li>
                <li className="rounded-lg border border-border/50 bg-background/50 p-2.5">Sample assessment material</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm font-medium leading-relaxed text-foreground/85">
            <span className="font-black uppercase tracking-wider text-amber-800 text-[11px] block mb-1">Practical guidance</span>
            Tutors familiar with Cambridge are not always equally effective on Edexcel, especially in Mathematics, Sciences and Business. IB Gram confirms the board explicitly before a match so the right paper style and command-term coaching is applied from week one.
          </div>
        </div>
      </section>

      <IGCSELearningPlan />

      {/* ───── Subject directory ───── */}
      <section className="bg-background py-12 md:py-16" id="subjects">
        <div className="container mx-auto max-w-7xl px-4">
          <IGCSESubjectExplorer />
        </div>
      </section>

      {/* ───── Subject deep-dive prose ───── */}
      <section className="bg-muted/5 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <BookOpen className="size-4" />
              <span>Subject support tracks</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Subject-by-subject IGCSE tutoring focus</h2>
            <p className="leading-relaxed text-muted-foreground">
              Each IGCSE subject has its own examiner habits, paper structure and pitfalls. Open a subject below for its Cambridge and Pearson Edexcel routes, syllabus codes, what a tutor prioritises and the tutors currently matched to it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subjectGroups.map((group) => (
              <article
                key={group.key}
                className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold text-foreground">{group.label}</h3>
                  <span className="shrink-0 text-[12px] font-bold text-muted-foreground">
                    {group.entries.length} subject{group.entries.length === 1 ? "" : "s"}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.entries.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        href={igcseSubjectPath(entry.slug)}
                        className="block rounded-full border border-border/50 bg-background/60 px-3 py-1 text-[12px] font-bold text-foreground/80 transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                      >
                        {entry.shortLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Tutor matching process ───── */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800">
              <Compass className="size-4" />
              <span>How matching works</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">From a vague tutor search to a clear shortlist in four steps</h2>
            <p className="leading-relaxed text-muted-foreground">
              Most IGCSE families start with a general request — &ldquo;we need a Maths tutor&rdquo; — and want a short, comparable shortlist back, not a long list of generic profiles. This is how matching is reviewed at IB Gram.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2">
            {MATCHING_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-border/50 bg-card/30 p-6">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-base font-black text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Learning modes ───── */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800">
              <Laptop className="size-4" />
              <span>Lesson modes</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Home, online and hybrid IGCSE lessons</h2>
            <p className="leading-relaxed text-muted-foreground">
              Lessons run in three modes. The right answer for your child depends on subject specialist availability, not on where they happen to live. We explain that openly during matching.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Users className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Home tutoring</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The default for younger learners and for subjects where a specialist is realistically nearby. Common across central Gurugram (Golf Course Road, DLF Phase 5), South Delhi and central Noida.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Laptop className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Online tutoring</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Best when the strongest subject specialist is not local — particularly Pearson Edexcel International GCSE Sciences, niche option topics and exam-board-specific Maths support. Stable shared whiteboard, structured weekly cadence.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <CalendarClock className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Hybrid</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Home lessons during term time for content depth; online for weekend mock revision. Common in the four to six weeks before mocks and final exams when intensification is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IGCSETutors tutors={visibleTutors ?? undefined} />

      <IGCSEReviews />

      {/* ───── Assessment & grading ───── */}
      <section className="bg-muted/10 py-12 md:py-16" id="assessment">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-4" />
              <span>Assessment &amp; grading</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">Understanding IGCSE assessment without the jargon</h2>
            <p className="leading-relaxed text-muted-foreground">
              The most common parent question after &ldquo;which board&rdquo; is &ldquo;how is this graded&rdquo;. Here is a parent-friendly summary of the two systems and the practical implications for tutoring.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-primary" />
                <h3 className="text-lg font-bold">Cambridge IGCSE model</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Cambridge explains the relationship between the A*–G and 9–1 grade scales depending on the syllabus the school has entered, alongside zone restrictions and the rule that switching between grading-scale syllabuses after entry deadlines is not allowed.
                </p>
                <p>
                  In Mathematics, the Core / Extended tier decision affects which grades are accessible. In Sciences, the practical or alternative-to-practical paper choice depends on what the school&apos;s lab calendar supports.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-secondary" />
                <h3 className="text-lg font-bold">Pearson Edexcel model</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Pearson awards International GCSEs on the 9–1 scale and offers a choice between linear and modular assessment routes for many subjects. The Maths A vs Maths B distinction in particular changes content, paper structure and the kind of question style a tutor should prepare for.
                </p>
                <p>
                  Sample assessment material per specification is the cleanest reference point for command-term work and timing drills, alongside official mark schemes and examiner reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Why IB Gram for IGCSE ───── */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800">
              <ShieldCheck className="size-4" />
              <span>Why IB Gram</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">What makes IB Gram useful for IGCSE families</h2>
            <p className="leading-relaxed text-muted-foreground">
              IB Gram is an independent tutoring platform — not an exam-board partner and not a school franchise. We focus on the parts of the decision parents actually care about and we keep the rest honest.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Board confirmed first", body: "Cambridge or Edexcel, syllabus code, tier and paper combination are confirmed before any tutor profile is shortlisted." },
              { title: "Verified subject specialists", body: "Tutor profiles are reviewed for subject experience, qualifications, references and lesson methodology before matching. Where examiner or marker experience is documented, it is shown explicitly on the profile." },
              { title: "Lesson-mode honesty", body: "If the strongest specialist for a subject is online, we recommend online openly. We do not substitute a weaker local match just because it ticks the postcode box." },
              { title: "Indicative fees before booking", body: "Fees are confirmed during the discovery conversation. There is no fixed-length contract — engagements are reviewed every few weeks and most families adjust cadence around mocks and finals." },
              { title: "Independent of schools", body: "IB Gram is not affiliated with any IGCSE school unless specifically stated. School names are used only to describe nearby support context, not affiliation." },
              { title: "Realistic outcome language", body: "We do not guarantee grades. Final outcomes depend on the student&apos;s engagement, the school&apos;s coverage and the external examiner. We help with the parts a tutor can genuinely move." },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-border/50 bg-card/30 p-6">
                <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-5 text-sm font-medium leading-relaxed text-foreground/85">
            <span className="font-black uppercase tracking-wider text-amber-800 text-[11px] block mb-1">Important</span>
            IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.
          </p>
        </div>
      </section>

      <IGCSEBlogs />
      <IGCSEFaqs />

      {/* ───── Final CTA ───── */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="glassmorphism space-y-6 rounded-[2.5rem] border-primary/20 p-8 md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to build a clearer IGCSE plan?</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Share the board (Cambridge or Edexcel), the subject and level, the current Grade 9 or Grade 10 stage, and your preferred lesson mode. The shortlist comes back tighter when this is clear.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
              <Link href="/tutors">
                <Button size="lg" className="group h-14 rounded-full px-10 text-base font-bold">
                  View all IGCSE tutors <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button size="lg" variant="outline" className="glassmorphism h-14 rounded-full px-10 text-base">
                  Speak with an academic advisor
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Board-aware matching</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Exam-paper focused</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Verified specialists</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
