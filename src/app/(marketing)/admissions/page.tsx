import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  LineChart,
  Medal,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import collabPhoto from "./collab/photo.jpg";

export const metadata: Metadata = {
  title: "Admissions Consulting | IB Gram",
  description:
    "Strategic admissions guidance for students applying to leading universities worldwide. Build a stronger profile, sharper applications, and a clearer admissions plan with IB Gram.",
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
    title: "Admissions Consulting | IB Gram",
    description:
      "A performance-first admissions page built for students aiming at ambitious global outcomes.",
    url: "/admissions",
    type: "website",
  },
};

const trustStats = [
  {
    value: "1:1",
    label: "Strategic attention for every student",
  },
  {
    value: "Top 5",
    label: "Application planning built around best-fit choices",
  },
  {
    value: "SOP",
    label: "A structured admissions workflow from start to submit",
  },
  {
    value: "Global",
    label: "Support across US, UK, Europe, Singapore, UAE and beyond",
  },
];

const pillars = [
  {
    title: "Admissions Strategy",
    description:
      "We map university goals, timeline risk, profile gaps, and action priorities into a single plan that is easy to follow.",
    icon: Target,
  },
  {
    title: "Profile Building",
    description:
      "Academic positioning, activity selection, summer planning, and achievement storytelling designed to improve application strength.",
    icon: Medal,
  },
  {
    title: "Essays And Applications",
    description:
      "Focused support on personal statements, supplements, activity lists, recommendations, and submission readiness.",
    icon: FileText,
  },
  {
    title: "Interview Preparation",
    description:
      "Clear, practical interview practice that sharpens communication, confidence, and decision-making under pressure.",
    icon: MessageSquare,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Audit academic record, goals, intended major, extracurricular depth, and competitive positioning.",
  },
  {
    step: "02",
    title: "Prioritize",
    description:
      "Build a realistic application list across reach, target, and likely-fit options with timeline discipline.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Strengthen profile quality through projects, competitions, leadership, research, and stronger narrative alignment.",
  },
  {
    step: "04",
    title: "Submit",
    description:
      "Review applications end-to-end with quality control on essays, forms, deadlines, and final checks.",
  },
];

const destinations = [
  {
    region: "United States",
    items: ["Ivy League", "Top 20 universities", "Liberal arts colleges", "STEM-focused programmes"],
  },
  {
    region: "United Kingdom",
    items: ["Oxbridge", "Russell Group", "Medicine pathways", "Competitive personal statements"],
  },
  {
    region: "Europe And Asia",
    items: ["Selective English-taught programmes", "Scholarship-focused strategy", "Country-specific application guidance"],
  },
];

const differentiators = [
  "Mobile-first, structured planning that is easy for students and parents to follow.",
  "Clear admissions SOP instead of ad-hoc consulting.",
  "Profile and application support aligned with rigorous academic pathways like IB.",
  "Minimal friction, fast page performance, and accessible content architecture.",
];

const faqs = [
  {
    question: "Who is this admissions support for?",
    answer:
      "Students applying to ambitious undergraduate pathways who need stronger strategy, execution discipline, and application quality.",
  },
  {
    question: "Do you support only one country?",
    answer:
      "No. The process is designed for multi-country applications with tailored planning for each admissions system.",
  },
  {
    question: "Can this work alongside tutoring?",
    answer:
      "Yes. Admissions planning works best when academic mentoring and application strategy are aligned from the start.",
  },
];

const collaborationPoints = [
  "10+ years of mentoring experience across global admissions pathways.",
  "Guided 5000+ students into top universities with scholarships and tailored planning.",
  "Counselling presence across 50+ top schools and students from 10+ countries.",
  "Admits across NUS, NTU, Cornell, Stanford, UPenn, Columbia and more.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
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

        body:has(main[data-page="admissions"]) div.fixed:has(.ai-widget-ring) {
          display: none !important;
        }
      `}</style>

      <main data-page="admissions" className="bg-background pb-4 text-foreground sm:pb-4">
        <div className="h-6 sm:h-8" />
        
        {/* Minimal Sub-Navigation Switcher */}
        <div className="flex justify-center mb-8 px-4">
          <div className="inline-flex items-center p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            <Link 
              href="/admissions" 
              className="px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
            >
              Consulting
            </Link>
            <Link 
              href="/admissions/test-prep" 
              className="px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full text-white/50 hover:text-white transition-all"
            >
              Test Prep
            </Link>
          </div>
        </div>

        <section className="border-b border-border/50">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary">
                <Sparkles className="size-3.5" />
                Admissions Consulting
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                  Strategic Admissions Support For Students Targeting Strong Global Outcomes
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Built for families who want a clear application roadmap, stronger positioning, and disciplined execution across every part of the admissions process.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact-us">
                  <Button size="lg" className="h-12 rounded-full px-6 text-sm font-black sm:h-14 sm:px-8 sm:text-base">
                    Book A Consultation
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/tutors">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-border/60 px-6 text-sm font-black hover:bg-muted/20 sm:h-14 sm:px-8 sm:text-base"
                  >
                    Explore Mentors
                  </Button>
                </Link>
              </div>

              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  University list building and positioning
                </li>
                <li className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Essays, activities, and application review
                </li>
                <li className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Interview preparation and submission discipline
                </li>
                <li className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Structured guidance for students and parents
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border border-border/60 bg-card p-4 sm:p-5 lg:p-6">
              <div className="space-y-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border/60 bg-muted/10">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="/admissions/media/home" type="video/mp4" />
                  </video>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/50 px-4 py-4">
                      <div className="text-xl font-black tracking-tight text-foreground sm:text-2xl">{stat.value}</div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="What We Build"
              title="A focused admissions page with clear hierarchy and strong conversion flow"
              description="The structure takes inspiration from high-performing admissions pages while staying aligned with your current visual language: darker palette, strong typography, restrained accents, and minimal decoration."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[1.75rem] border border-border/50 bg-card px-5 py-6 sm:px-6">
                  <pillar.icon className="size-5 text-primary" />
                  <h3 className="mt-5 text-xl font-black tracking-tight text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <SectionHeading
                eyebrow="Admissions SOP"
                title="A simple, repeatable process designed for speed, clarity, and lower application risk"
                description="This section is intentionally structured for readability on mobile first, then scales cleanly to larger screens."
              />

              <div className="grid gap-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-[1.5rem] border border-border/50 px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                      <div className="text-sm font-black uppercase tracking-[0.28em] text-primary">{step.step}</div>
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Destinations"
              title="Built for ambitious applications across major admissions systems"
              description="You mentioned admissions as the long-term direction of the brand. This structure supports that positioning without overloading the page with heavy visuals or marketing noise."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {destinations.map((destination) => (
                <article key={destination.region} className="rounded-[1.75rem] border border-border/50 bg-card px-5 py-6 sm:px-6">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <Globe2 className="size-4" />
                    {destination.region}
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    {destination.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Why This Works"
                  title="Performance-first design choices built into the page from the start"
                />
                <ul className="mt-8 space-y-4">
                  {differentiators.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 px-4 py-4 text-sm leading-7 text-muted-foreground sm:text-base">
                      <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-[2rem] border border-border/50 bg-card p-6 sm:p-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <LineChart className="size-4" />
                    Page Principles
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                    <p>
                      Server-rendered page with minimal client-side logic for faster first load and better reliability.
                    </p>
                    <p>
                      Semantic heading order, descriptive metadata, and readable copy blocks to support SEO and accessibility.
                    </p>
                    <p>
                      Lightweight visual system using borders, spacing, and typography instead of shadows, glows, or heavy assets.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/50 px-4 py-4 text-sm leading-7 text-muted-foreground">
                    Media placeholders are intentionally blank for now so your team can add final images, partner proof, and outcome details later without reworking the layout.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="FAQs"
              title="Important questions answered early"
              description="A compact FAQ block helps with trust, comprehension, and search relevance without adding unnecessary interaction cost."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-border/50 px-5 py-5 sm:px-6">
                  <h3 className="text-lg font-black tracking-tight text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>



        <Link
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-4 right-4 z-[110] flex items-center gap-2 sm:bottom-5 sm:right-5"
        >
          <span className="hidden rounded-full border border-white/10 bg-[#111823] px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-[#16202d] sm:block">
            Chat with us
          </span>
          <span className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white sm:size-12">
            <MessageCircle className="size-5 stroke-[2.2] sm:size-5" />
          </span>
        </Link>
      </main>
    </>
  );
}