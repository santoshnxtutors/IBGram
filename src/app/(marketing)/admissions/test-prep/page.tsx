"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Clock, Target, TrendingUp, Star, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTS = [
  { name: "SAT", desc: "College Admission", region: "🇺🇸" },
  { name: "GRE", desc: "Graduate School", region: "🇺🇸" },
  { name: "GMAT", desc: "Business School", region: "🌍" },
  { name: "IELTS", desc: "English Proficiency", region: "🇬🇧" },
  { name: "TOEFL IBT", desc: "English Proficiency", region: "🇺🇸" },
  { name: "ACT", desc: "College Admission", region: "🇺🇸" },
  { name: "AP", desc: "Advanced Placement", region: "🇺🇸" },
  { name: "DET", desc: "Duolingo English", region: "🌍" },
  { name: "ESAT", desc: "Engineering", region: "🇬🇧" },
  { name: "PTE", desc: "English Proficiency", region: "🌍" },
];

const FEATURES = [
  { title: "Expert Test Prep Tutors", desc: "Experienced tutors who know each test inside out — scoring strategies, timing, and traps.", icon: BookOpen },
  { title: "1:1 Focused Sessions", desc: "Personalised sessions that target your exact weak points, not generic lessons.", icon: Target },
  { title: "Drills & Full-Length Mocks", desc: "Extensive practice with real exam conditions to build speed and accuracy.", icon: Clock },
  { title: "Score Improvement Tracking", desc: "Data-driven progress monitoring with milestone targets and adjustment plans.", icon: TrendingUp },
];

const PROCESS = [
  { step: "01", title: "Diagnose", desc: "Take a diagnostic mock to identify your exact starting point and weak areas." },
  { step: "02", title: "Plan", desc: "Receive a personalised study plan built around your test date and target score." },
  { step: "03", title: "Practice", desc: "1:1 sessions and structured drills targeting your specific score gaps." },
  { step: "04", title: "Perform", desc: "Enter exam day confident, prepared, and ready to hit your target score." },
];

const RESULTS = [
  { name: "Arjun P.", test: "SAT", score: "1560", improvement: "+180", country: "🇮🇳" },
  { name: "Meera S.", test: "IELTS", score: "8.5", improvement: "+1.5", country: "🇮🇳" },
  { name: "Rahul K.", test: "GRE", score: "335", improvement: "+22", country: "🇮🇳" },
  { name: "Aisha T.", test: "TOEFL", score: "118", improvement: "+14", country: "🇮🇳" },
];

const STATS = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Meet Target Score" },
  { value: "+150", label: "Avg SAT Improvement" },
  { value: "10+", label: "Tests Covered" },
];

export default function TestPrepPage() {
  return (
    <>
      <style>{`
        body:has(main[data-page="test-prep"]) footer {
          display: none !important;
        }

        body:has(main[data-page="test-prep"]) main.flex-1 {
          flex: 0 0 auto !important;
        }

        body:has(main[data-page="test-prep"]) div.fixed:has(.ai-widget-ring) {
          display: none !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.12); }
          50% { box-shadow: 0 0 40px rgba(34,197,94,0.25); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
.card-hover {
          transition: all 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          border-color: rgba(34,197,94,0.4) !important;
        }

        .test-card:hover .test-badge {
          background: rgba(34,197,94,0.15);
          border-color: rgba(34,197,94,0.4);
        }

        .score-badge {
          background: linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%);
        }
      `}</style>

      <main data-page="test-prep" className="min-h-screen bg-background text-foreground">

        {/* Sub-Navigation */}
        <div className="flex justify-center px-4 pt-1">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-background p-1">
            <Link
              href="/admissions"
              className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
            >
              Consulting
            </Link>
            <Link
              href="/admissions/test-prep"
              className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full bg-card text-foreground transition-all sm:px-7 sm:text-xs"
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
        <section className="relative bg-background px-6 pb-10 pt-6 overflow-hidden md:pt-8 md:pb-12">


          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left */}
              <div className="space-y-8 fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  <Sparkles className="size-3" />
                  Test Preparation
                </div>

                <div className="space-y-3">
                  <p className="text-lg md:text-xl font-black italic text-white/40 lowercase tracking-tight">
                    start your test preparation journey
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#f8f9fa] leading-[1.05]">
                    Score Higher.<br />
                    <span className="text-primary">Get In Anywhere.</span>
                  </h1>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Expert 1:1 test prep for SAT, GRE, IELTS, GMAT, TOEFL and more. Our tutors know exactly what it takes to hit your target score — and they&apos;ll get you there.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us">
                    <Button className="h-14 px-8 rounded-2xl font-black text-base bg-background text-foreground border border-border/50 hover:scale-105 active:scale-95 transition-all ">
                      Get Started <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </Link>
                  <Link href="/tutors">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-base border-border/40 hover:bg-muted/10 transition-all">
                      Explore Tutors
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {["500+ Students Trained", "95% Hit Target Score", "10+ Tests Covered"].map((t) => (
                    <span key={t} className="text-xs font-bold text-white/50 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary inline-block" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — score cards */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="glow-pulse rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 text-center card-hover">
                    <div className="text-3xl font-black text-primary">{s.value}</div>
                    <p className="mt-2 text-xs font-semibold text-white/50 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTS GRID */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Tests We Cover</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#f8f9fa]">
                Standardised Test Mastery
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Expert tutors for every major standardised test — with targeted strategies for each.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {TESTS.map((test) => (
                <div
                  key={test.name}
                  className="test-card rounded-[1.5rem] border border-border/40 bg-card px-5 py-6 text-center card-hover cursor-default"
                >
                  <div className="text-2xl mb-2">{test.region}</div>
                  <div className="text-base font-black text-[#f8f9fa]">{test.name}</div>
                  <div className="mt-1 text-[11px] font-semibold text-muted-foreground">{test.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT SCORE RESULTS */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Score Improvements</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#f8f9fa]">
                Our Students Score Higher
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RESULTS.map((r) => (
                <div key={r.name} className="score-badge rounded-[1.5rem] border border-primary/20 px-6 py-7 card-hover text-center">
                  <div className="text-2xl mb-3">{r.country}</div>
                  <div className="text-2xl font-black text-primary">{r.score}</div>
                  <div className="text-xs font-bold text-muted-foreground mt-0.5">{r.test} Score</div>
                  <div className="mt-3 inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-black text-primary">
                    {r.improvement} improvement
                  </div>
                  <div className="mt-3 text-sm font-bold text-foreground">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary mb-4">How We Do It</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#f8f9fa]">
                The IBGram Test Prep Difference
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {FEATURES.map((f, i) => (
                <article key={f.title} className="rounded-[1.75rem] border border-border/50 bg-card px-6 py-7 card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary/5 -translate-y-12 translate-x-12 group-hover:bg-primary/10 transition-all" />
                  <div className="relative">
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <f.icon className="size-5 text-primary" />
                    </div>
                    <div className="text-xs font-black text-primary/50 mb-2">0{i+1}</div>
                    <h3 className="text-lg font-black tracking-tight text-foreground">{f.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div className="lg:sticky lg:top-24 space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Our Method</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#f8f9fa]">
                  From Diagnostic To Target Score — In 4 Steps
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every student starts with a diagnostic. Every session is purposeful. Every milestone is tracked.
                </p>

                {/* Vision box */}
                <div className="rounded-[1.5rem] border border-border/40 bg-card p-6 space-y-5">
                  <h3 className="text-lg font-black italic tracking-tight text-[#f8f9fa] lowercase">our vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As a student preparing for the next chapter, you need more than just a tutor. You need a navigator. Our vision is simple: we provide the expertise and the preparation to ensure your admissions success on a global scale.
                  </p>
                  <div className="space-y-3">
                    {["Expert Test Prep Tutors", "1:1 Admissions Counselling", "Profile Building Strategy", "Targeted Global Outcomes"].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 group">
                        <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                          <CheckCircle2 className="size-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {PROCESS.map((step) => (
                  <div key={step.step} className="rounded-[1.5rem] border border-border/50 px-6 py-6 card-hover group">
                    <div className="flex gap-5 items-start">
                      <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-black text-primary">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-6 py-20 md:py-28 border-b border-border/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14 space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">What Students Say</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#f8f9fa]">
                Trusted By Students Across India
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { quote: "My SAT score went from 1380 to 1540 in 8 weeks. The structured approach and targeted drills made all the difference.", name: "Rohan M.", test: "SAT 1540", location: "Delhi" },
                { quote: "IBGram's IELTS tutor knew exactly where I was losing marks. Went from 7.0 to 8.5 before my UK application deadline.", name: "Priya S.", test: "IELTS 8.5", location: "Gurugram" },
                { quote: "The GRE prep was methodical and data-driven. I could see my progress week by week. Scored 335 and got into my dream programme.", name: "Aryan K.", test: "GRE 335", location: "Mumbai" },
              ].map((t) => (
                <div key={t.name} className="rounded-[1.75rem] border border-border/50 bg-card px-6 py-7 card-hover">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-primary fill-primary" />)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.location}</div>
                    </div>
                    <div className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-black text-primary">
                      {t.test}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:py-32 mb-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <Zap className="size-3" />
              Start Preparing Today
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#f8f9fa] italic">
              ready to hit your<br />target score?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Book a session with our test prep experts today. We&apos;ll assess your starting point and build a plan to get you where you need to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-lg bg-background text-foreground border border-border/50 hover:bg-background transition-all  hover:scale-105">
                  Book A Consultation <ArrowRight className="ml-2 size-6" />
                </Button>
              </Link>
              <Link href="/tutors">
                <Button size="lg" variant="outline" className="h-16 px-12 rounded-2xl font-black text-lg border-border/40 hover:bg-muted/10 transition-all">
                  Browse Tutors
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
