import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpen, Clock3, FileText, Target, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Admissions Test Prep | IB Gram",
  description:
    "Structured admissions test preparation for students targeting competitive university entry exams and interview readiness.",
  alternates: {
    canonical: "/admissions/test-prep",
  },
};

const pillars = [
  {
    title: "Diagnostic Planning",
    description: "Identify starting point, target score, and the exact content gaps that need attention.",
    icon: Target,
  },
  {
    title: "Timed Practice",
    description: "Build speed, accuracy, and confidence through focused drills and full-length mock practice.",
    icon: Clock3,
  },
  {
    title: "Strategy And Review",
    description: "Turn every practice round into a clear improvement loop with review notes and score tracking.",
    icon: FileText,
  },
  {
    title: "Interview Readiness",
    description: "Prepare for oral interviews, confidence under pressure, and structured self-presentation.",
    icon: Video,
  },
];

const focusAreas = [
  "University entrance test strategy",
  "Time management and question pacing",
  "Verbal reasoning and written response support",
  "Interview practice and confidence-building",
  "Parent-friendly progress updates",
  "Goal-based weekly study structure",
];

export default function AdmissionsTestPrepPage() {
  return (
    <>
      <style>{`\
        body:has(main[data-page="admissions-test-prep"]) footer { display: none !important; }\
        body:has(main[data-page="admissions-test-prep"]) main.flex-1 { flex: 0 0 auto !important; }\
        body:has(main[data-page="admissions-test-prep"]) div.fixed:has(.ai-widget-ring) { display: none !important; }\
      `}</style>

      <main data-page="admissions-test-prep" className="bg-background pb-8 text-foreground">
        <div className="h-2 sm:h-3" />

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Admissions Test Prep</p>
              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                Clear, structured test preparation for ambitious university applicants
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                A clean, performance-first page for admissions tests, interview readiness, and score improvement. The layout stays minimal while giving students a clear path from assessment to results.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us">
                <Button size="lg" className="h-12 rounded-full px-6 text-sm font-black sm:h-14 sm:px-8 sm:text-base">
                  Start Test Prep
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/admissions">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-border/60 px-6 text-sm font-black hover:bg-muted/20 sm:h-14 sm:px-8 sm:text-base"
                >
                  Back To Admissions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[1.75rem] border border-border/50 bg-background px-5 py-6 sm:px-6">
                  <pillar.icon className="size-5 text-primary" />
                  <h2 className="mt-5 text-xl font-black tracking-tight text-foreground">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-20">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Focus Areas</p>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Everything is organised around measurable progress</h2>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                The page stays visually consistent with the admissions page, but the content here is focused on test performance, timelines, and repeatable preparation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  <BadgeCheck className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="rounded-[1.75rem] border border-border/50 bg-background p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">How We Work</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">Assessment first, then precision practice</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    Students begin with a clear baseline, then move through targeted drills, review, and interview preparation as needed. The flow stays simple and easy to follow on mobile.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-border/50 px-4 py-4">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-primary">01</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">Diagnostic review and target setting</p>
                  </div>
                  <div className="rounded-2xl border border-border/50 px-4 py-4">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-primary">02</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">Weekly practice schedule and score tracking</p>
                  </div>
                  <div className="rounded-2xl border border-border/50 px-4 py-4">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-primary">03</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">Final mock rounds and confidence checks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
