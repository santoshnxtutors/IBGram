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
  Star,
  TrendingUp,
  Users,
  Award,
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

const outcomes = [
  { university: "Stanford", flag: "🇺🇸" },
  { university: "Oxford", flag: "🇬🇧" },
  { university: "Columbia", flag: "🇺🇸" },
  { university: "Cambridge", flag: "🇬🇧" },
  { university: "UPenn", flag: "🇺🇸" },
  { university: "NUS", flag: "🇸🇬" },
  { university: "Cornell", flag: "🇺🇸" },
  { university: "LSE", flag: "🇬🇧" },
  { university: "NYU", flag: "🇺🇸" },
  { university: "Imperial", flag: "🇬🇧" },
  { university: "Duke", flag: "🇺🇸" },
  { university: "UCL", flag: "🇬🇧" },
];

const studentResults = [
  { name: "Aryan S.", admit: "Cornell University", year: "Class of 2028", country: "🇮🇳" },
  { name: "Priya M.", admit: "LSE", year: "Class of 2027", country: "🇮🇳" },
  { name: "Rohan K.", admit: "UPenn", year: "Class of 2028", country: "🇮🇳" },
  { name: "Anika T.", admit: "NUS", year: "Class of 2027", country: "🇮🇳" },
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

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.15); }
          50% { box-shadow: 0 0 40px rgba(34,197,94,0.3); }
        }

        .ticker-track {
          animation: ticker 30s linear infinite;
        }

        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }

        .stat-card {
          animation: glowPulse 3s ease-in-out infinite;
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
        <div className="flex justify-center px-4 pt-1">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background p-1">
            <Link
              href="/admissions"
              className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full bg-card text-foreground transition-all sm:px-7 sm:text-xs"
            >
              Consulting
            </Link>
            <Link
              href="/admissions/test-prep"
              className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
            >
              Test Prep
            </Link>
            <Link
              href="/admissions/success-stories"
              className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
            >
              Success Stories
            </Link>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-background px-6 pb-10 pt-2 sm:pt-4">
          {/* Decorative grid */}


          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left */}
              <div className="space-y-8 fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  <Sparkles className="size-3" />
                  Admissions Consulting
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#f8f9fa] leading-[1.05]">
                    Thousands Apply.<br />
                    <span className="text-primary">Few Stand Out.</span>
                  </h1>
                  <p className="text-xl font-medium text-white/60 italic">We'll Make Sure You're One of Them.</p>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Strategic admissions support for students targeting the world's most competitive universities. Built for Indian families who want a clear roadmap, stronger positioning, and disciplined execution.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us">
                    <Button className="h-14 px-8 rounded-2xl font-black text-base bg-background text-foreground border border-border/50 hover:scale-105 active:scale-95 transition-all ">
                      Book A Free Consultation <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </Link>
                  <Link href="/tutors">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-base border-border/40 hover:bg-muted/10 transition-all">
                      Explore Mentors
                    </Button>
                  </Link>
                </div>

                {/* Quick trust signals */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {["5000+ Students Guided", "10+ Years Experience", "50+ Schools", "10+ Countries"].map((t) => (
                    <span key={t} className="text-xs font-bold text-white/50 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary inline-block" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — stats + video */}
              <div className="space-y-4">
                {/* Video */}
                <div className="relative rounded-[2rem] overflow-hidden border border-border/40 bg-background aspect-video">
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
                  {/* Overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 rounded-b-[1.75rem] bg-[#0b0f17]/95 px-4 py-3 shadow-none">
                    <p className="text-xs font-semibold text-white/60">Our students get into</p>
                    <p className="text-sm font-black text-white">Stanford · Oxford · Cornell · NUS · Columbia</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="stat-card rounded-2xl border border-border/50 bg-card px-5 py-5 card-hover">
                      <div className="text-2xl font-black tracking-tight text-primary">{stat.value}</div>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{stat.label}</p>
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
                <span key={i} className="flex items-center gap-2 text-sm font-bold text-white/40 shrink-0">
                  <span className="text-base">{o.flag}</span>
                  {o.university}
                  <span className="text-primary/30 font-black">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RESULTS / SOCIAL PROOF */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Student Outcomes</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#f8f9fa]">
                Real Students. Real Results.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our students have secured offers at the world's most competitive universities.
              </p>
            </div>

            {/* Big numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { value: "5,000+", label: "Students Placed" },
                { value: "98%", label: "Placed in Top 5 Choice" },
                { value: "50+", label: "Universities Globally" },
                { value: "10+", label: "Countries Served" },
              ].map((s) => (
                <div key={s.label} className="rounded-[1.5rem] border border-primary/20 bg-primary/5 px-6 py-8 text-center card-hover">
                  <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
                  <p className="mt-2 text-xs font-semibold text-white/50 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Student cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {studentResults.map((s) => (
                <div key={s.name} className="result-card rounded-[1.5rem] border border-border/40 px-5 py-6 card-hover">
                  <div className="text-2xl mb-3">{s.country}</div>
                  <div className="text-sm font-black text-foreground">{s.name}</div>
                  <div className="mt-1 text-xs font-bold text-primary">{s.admit}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{s.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="Our Services"
                title="Everything You Need To Get In"
                description="From strategy to submission — we handle every stage of the admissions process with precision."
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
                    <div className="text-xs font-black text-primary/50 mb-2">0{i+1}</div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <SectionHeading
                  eyebrow="Our Process"
                  title="A Clear Roadmap From Profile To Offer"
                  description="No guesswork. No ad-hoc consulting. A disciplined, repeatable process designed to maximise your chances."
                />
                <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/5 px-6 py-6">
                  <div className="flex items-center gap-2 text-sm font-black text-primary mb-3">
                    <TrendingUp className="size-4" />
                    98% Success Rate
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our structured SOP means every student follows the same proven framework — adapted to their profile.
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
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="Where We Place Students"
                title="Admissions Support Across Every Major System"
                description="Targeted, country-specific strategy — not generic advice."
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
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16 items-start">
              <div>
                <SectionHeading
                  eyebrow="Why IBGram"
                  title="The Difference That Moves The Needle"
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
                    Our Track Record
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
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-primary fill-primary" />)}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "IBGram's structured approach gave us clarity at every step. Our son got into his top-choice university."
                    </p>
                    <p className="mt-2 text-xs font-bold text-white/40">— Parent, Delhi</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <SectionHeading
                eyebrow="FAQs"
                title="Common Questions, Answered"
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-border/50 px-6 py-6 card-hover">
                  <h3 className="text-lg font-black tracking-tight text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:py-32 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <Users className="size-3" />
              Limited Spots Available
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#f8f9fa] italic">
              ready to unlock<br />your potential?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Book a free consultation with our admissions specialists. We'll assess your profile and map out a clear path to your dream university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-lg bg-background text-foreground border border-border/50 hover:bg-background transition-all  hover:scale-105">
                  Book A Free Consultation <ArrowRight className="ml-2 size-6" />
                </Button>
              </Link>
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
