import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Globe2,
  Medal,
  MessageSquare,
  ShieldCheck,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdmissionsConsultationForm } from "./consultation-form";
import { AdmissionsHeroVideo } from "./admissions-hero-video";

const MentorsCarousel = dynamic(() => import("./mentors-carousel").then((mod) => mod.MentorsCarousel));
const AdmissionsPartnership = dynamic(() => import("./admissions-partnership").then((mod) => mod.AdmissionsPartnership));

export const metadata: Metadata = {
  title: "Admissions Consulting for Global Universities | IBGram",
  description:
    "Get structured admissions planning for university shortlisting, essays, SOPs, interviews and applications across US, UK, Canada, Europe and more.",
  keywords: [
    "admissions consulting",
    "university admissions",
    "college counseling",
    "IB admissions support",
    "application strategy",
    "essay support",
  ],
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Admissions Consulting for Global Universities | IBGram",
    description:
      "Structured admissions planning for university shortlisting, essays, SOPs, interviews and global applications.",
    url: "/admissions",
    type: "website",
  },
  twitter: {
    title: "Admissions Consulting for Global Universities | IBGram",
    description:
      "Plan applications with clearer shortlisting, timelines, essays, interviews and final review support.",
  },
};

const trustStats = [
  {
    value: "1:1",
    label: "Profile-led planning for each student",
  },
  {
    value: "Multi-country",
    label: "Shortlisting across different admissions systems",
  },
  {
    value: "Essays",
    label: "Planning, structure, review and refinement support",
  },
  {
    value: "Final review",
    label: "Checklist-led support before submission",
  },
];

const pillars = [
  {
    title: "University Shortlisting",
    description:
      "Build a balanced list around academic fit, country preferences, programme requirements, cost and timeline.",
    icon: Target,
  },
  {
    title: "Application Timeline",
    description:
      "Turn deadlines, documents, tests and recommendation steps into a clear weekly roadmap for the family.",
    icon: Medal,
  },
  {
    title: "Essays, SOPs And Supplements",
    description:
      "Help students plan, structure, review and refine their own writing while keeping their voice intact.",
    icon: FileText,
  },
  {
    title: "Interview And Final Review",
    description:
      "Practice clear responses and check application forms, uploads and submission details before deadlines.",
    icon: MessageSquare,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Review academic record, goals, intended major, extracurricular depth, tests, deadlines and constraints.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Build a realistic university list and application calendar across reach, target and likely-fit options.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Work on profile presentation, activity descriptions, essays, SOPs, recommendations and documentation.",
  },
  {
    step: "04",
    title: "Review",
    description:
      "Check forms, writing, uploads and deadline readiness so families can submit with fewer surprises.",
  },
];

const destinations = [
  {
    region: "United States",
    items: ["University list strategy", "Common App planning", "Supplement review", "Scholarship-aware timelines"],
  },
  {
    region: "United Kingdom",
    items: ["UCAS planning", "Personal statement review", "Course fit checks", "Interview preparation where relevant"],
  },
  {
    region: "Europe And Asia",
    items: ["Country-specific requirements", "English-taught programmes", "Documentation checklists", "Deadline tracking"],
  },
];

const differentiators = [
  "A structured roadmap that students and parents can follow without last-minute confusion.",
  "Shortlisting grounded in fit, requirements, timelines and the student profile.",
  "Essay and SOP guidance that supports student-owned writing instead of replacing it.",
  "Coordination between admissions planning, test prep and academic workload where needed.",
];

const faqs = [
  {
    question: "Who is this admissions support for?",
    answer:
      "Students and families who want a clearer application plan for undergraduate pathways across one or more countries.",
  },
  {
    question: "Can you help if we are applying to more than one country?",
    answer:
      "Yes. The plan can cover different admissions systems, deadlines, document requirements and test expectations.",
  },
  {
    question: "Do you write essays for students?",
    answer:
      "No. We help students plan, structure, review and refine their own work so the application stays authentic.",
  },
  {
    question: "Can this work alongside tutoring?",
    answer:
      "Yes. Admissions planning can be coordinated with IB, IGCSE or test prep support so timelines stay realistic.",
  },
  {
    question: "How early should we start?",
    answer:
      "Earlier is better, but the first consultation can still help families clarify priorities, deadlines and next steps.",
  },
  {
    question: "What should I prepare before the consultation?",
    answer:
      "Bring current grades, intended subjects, target countries, test plans, activity history and any urgent deadlines.",
  },
];

const collaborationPoints = [
  "Profile-led planning across academics, activities, essays, tests and deadlines.",
  "Country-specific guidance for families comparing different application systems.",
  "Parent-friendly communication that makes requirements, timelines and trade-offs easier to understand.",
  "Final review support focused on completeness, clarity and submission readiness.",
];

const outcomes = [
  { university: "US applications", flag: "US" },
  { university: "UK applications", flag: "UK" },
  { university: "Canada planning", flag: "CA" },
  { university: "Europe pathways", flag: "EU" },
  { university: "Singapore options", flag: "SG" },
  { university: "Australia options", flag: "AU" },
  { university: "Business programmes", flag: "BIZ" },
  { university: "STEM pathways", flag: "STEM" },
  { university: "Design portfolios", flag: "ART" },
  { university: "Medicine routes", flag: "MED" },
  { university: "Scholarship timelines", flag: "FIN" },
  { university: "Interview prep", flag: "INT" },
];

const planningCards = [
  { title: "Profile Review", description: "Grades, subjects, activities, intended major and application readiness." },
  { title: "Country Strategy", description: "Different requirements for US, UK, Canada, Europe, Singapore and beyond." },
  { title: "Writing Support", description: "Personal statement, SOP and supplement review with student-owned voice." },
  { title: "Submission Checks", description: "Document, deadline and form review before the family submits." },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl space-y-4 ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        body:has(main[data-page="admissions"]) footer {
          display: none !important;
        }

        body:has(main[data-page="admissions"]) main.flex-1 {
          flex: 0 0 auto !important;
        }

        body:has(main[data-page="admissions"]) {
          overflow-x: clip;
        }

        body:has(main[data-page="admissions"]) div.fixed:has(.ai-widget-ring) {
          display: none !important;
        }

        @media (max-width: 340px) {
          body:has(main[data-page="admissions"]) header .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          body:has(main[data-page="admissions"]) header button[aria-label$="color theme"] {
            gap: 0.35rem;
            padding-left: 0.65rem;
            padding-right: 0.65rem;
          }

          body:has(main[data-page="admissions"]) header button[aria-label$="color theme"] span {
            display: none;
          }
        }

        @media (max-width: 430px) and (max-height: 850px) {
          .admissions-hero-media {
            margin-top: 7rem;
          }
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ticker-track {
          animation: ticker 30s linear infinite;
        }

        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }

        .card-hover {
          transition: all 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          border-color: rgba(34,197,94,0.4) !important;
        }

        .result-card {
          background: linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(255,255,255,0.02) 100%);
        }

      `}</style>

      <main data-page="admissions" className="min-h-screen bg-background text-foreground">

        {/* Sub-Navigation */}
        <div className="overflow-x-auto px-3 pt-1 [scrollbar-width:none] sm:flex sm:justify-center sm:px-4 [&::-webkit-scrollbar]:hidden">
          <div className="inline-flex min-w-max items-center rounded-full border border-border/50 bg-background p-1">
            <Link
              href="/admissions"
              className="rounded-full bg-card px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-foreground transition-all min-[390px]:px-5 sm:px-7 sm:text-xs"
            >
              Consulting
            </Link>
            <Link
              href="/admissions/test-prep"
              className="rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground transition-all hover:text-foreground min-[390px]:px-5 sm:px-7 sm:text-xs"
            >
              Test Prep
            </Link>
            <Link
              href="/admissions/success-stories"
              className="rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground transition-all hover:text-foreground min-[390px]:px-5 sm:px-7 sm:text-xs"
            >
              Success Stories
            </Link>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-background px-4 pb-10 pt-2 sm:px-6 sm:pt-4">
          {/* Decorative grid */}


          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left */}
              <div className="space-y-7 fade-up sm:space-y-8">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-primary max-[380px]:tracking-[0.2em]">
                  Admissions Consulting
                </div>

                <div className="space-y-4">
                  <h1 className="text-[2.35rem] font-black leading-[1.05] tracking-tight text-[#f8f9fa] min-[390px]:text-4xl md:text-5xl lg:text-6xl">
                    <span className="block">Admissions planning</span>
                    <span className="block text-primary">with more clarity.</span>
                  </h1>
                  <p className="text-lg font-medium text-white/60 italic sm:text-xl">
                    A focused roadmap for students and parents.
                  </p>
                </div>

                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  From university shortlisting to essays, SOPs, interviews and final submission, IBGram helps families build a practical application plan across global admissions systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AdmissionsConsultationForm label="Book a consultation" service="Admissions Consulting" />
                  <Link href="#admissions-mentors" className="w-full sm:w-auto">
                    <Button variant="outline" className="h-14 w-full rounded-2xl border-border/40 px-6 text-base font-black transition-all hover:bg-muted/10 sm:w-auto sm:px-8">
                      Explore admissions mentors
                    </Button>
                  </Link>
                </div>

                {/* Quick trust signals */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Profile-led planning", "Multi-country applications", "Essay and SOP review", "Parent-friendly roadmap"].map((t) => (
                    <span key={t} className="text-xs font-bold text-white/50 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary inline-block" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - stats + video */}
              <div className="admissions-hero-media space-y-4">
                <AdmissionsHeroVideo />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 max-[380px]:gap-2">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="min-h-[112px] rounded-2xl border border-border/50 bg-card px-3 py-4 card-hover sm:px-5 sm:py-5">
                      <div className="text-lg font-black leading-tight tracking-tight text-primary sm:text-2xl">{stat.value}</div>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground max-[380px]:text-[11px] max-[380px]:leading-4">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIVERSITY TICKER */}
        <div className="border-y border-border/30 bg-muted/5 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="ticker-track flex gap-8 items-center">
              {[...outcomes, ...outcomes].map((o, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm font-bold text-white/60 shrink-0">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-black text-primary">
                    {o.flag}
                  </span>
                  {o.university}
                  <span className="text-primary/30 font-black">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* APPLICATION PLANNING */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Application Planning</p>
              <h2 className="text-2xl font-black tracking-tight text-[#f8f9fa] sm:text-3xl md:text-5xl">
                Clearer Decisions Before Deadlines
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Admissions support is most useful when every choice, document and deadline has a reason behind it.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {planningCards.map((card) => (
                <div key={card.title} className="result-card rounded-[1.5rem] border border-border/40 px-5 py-6 card-hover">
                  <div className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                    Support area
                  </div>
                  <div className="text-lg font-black text-foreground">{card.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-muted-foreground">
              Outcomes vary by student profile, academic record, deadlines, university requirements and application quality.
            </p>
          </div>
        </section>

        {/* MENTORS */}
        <MentorsCarousel />

        {/* WHAT WE DO */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="Our Services"
                title="Application support from planning to submission"
                description="Specific admissions help for families who want structure, honest trade-offs and careful execution."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar, i) => (
                <article key={pillar.title} className="rounded-[1.75rem] border border-border/50 bg-card px-6 py-7 card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 -translate-y-12 translate-x-12 group-hover:bg-primary/10 transition-all" />
                  <div className="relative">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <pillar.icon className="size-5 text-primary" />
                    </div>
                    <div className="text-xs font-black text-primary mb-2">0{i+1}</div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <SectionHeading
                  eyebrow="Our Process"
                  title="A clearer roadmap from profile to submission"
                  description="A disciplined workflow helps families understand what matters now, what can wait and what needs careful review."
                />
                <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/5 px-6 py-6">
                  <div className="flex items-center gap-2 text-sm font-black text-primary mb-3">
                    <TrendingUp className="size-4" />
                    Realistic planning
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The process adapts to each student&apos;s grades, goals, country mix, deadlines and writing readiness.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-[1.5rem] border border-border/50 px-6 py-6 card-hover group">
                    <div className="flex gap-5 items-start">
                      <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-black text-primary">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="Global Systems"
                title="Admissions support across major application routes"
                description="Country-specific planning helps families avoid treating every application system the same way."
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {destinations.map((destination) => (
                <article key={destination.region} className="rounded-[1.75rem] border border-border/50 bg-card px-6 py-7 card-hover">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary mb-5">
                    <Globe2 className="size-4" />
                    {destination.region}
                  </div>
                  <ul className="space-y-3">
                    {destination.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16 items-start">
              <div>
                <SectionHeading
                  eyebrow="Why IBGram"
                  title="Clearer planning, fewer last-minute surprises"
                />
                <ul className="mt-8 space-y-4">
                  {differentiators.map((item) => (
                    <li key={item} className="flex items-start gap-4 rounded-2xl border border-border/50 px-5 py-5 text-sm leading-7 text-muted-foreground card-hover group">
                      <div className="size-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="size-3.5 text-primary" />
                      </div>
                      <span className="group-hover:text-white/80 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-[2rem] border border-primary/20 bg-primary/5 p-7">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <Award className="size-4" />
                    How the team helps
                  </div>
                  <div className="space-y-4">
                    {collaborationPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-black/20 px-5 py-4">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Admissions support should make the process clearer, not louder. The focus is on better decisions, stronger organisation and student-owned applications.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="FAQs"
                title="Common Questions, Answered"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-border/50 px-6 py-6 card-hover">
                  <h3 className="text-lg font-black tracking-tight text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AdmissionsPartnership />

        {/* CTA */}
        <section className="mb-16 px-4 py-20 sm:px-6 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-primary">
              Admissions Consultation
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#f8f9fa] sm:text-4xl md:text-6xl">
              Ready to plan your<br />applications with more clarity?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Start with a focused conversation about your student profile, country options, timelines and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AdmissionsConsultationForm label="Discuss my application plan" service="Admissions Consulting" />
            </div>
          </div>
        </section>

        <div className="fixed bottom-4 right-4 z-[110] flex items-center gap-2 sm:bottom-5 sm:right-5">
          <AdmissionsConsultationForm label="Chat with us" service="Admissions Consulting" variant="floating" />
        </div>
      </main>
    </>
  );
}
