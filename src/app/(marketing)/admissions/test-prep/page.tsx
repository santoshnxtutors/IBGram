"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTS = [
  "GRE", "ACT", "AP", "DET", "ESAT", "GMAT", "IELTS", "PTE", "SAT", "TOEFL IBT"
];

const FEATURES = [
  "Expert Test Prep Tutors",
  "1:1 Admissions Counselling",
  "Profile Building Strategy",
  "Targeted Global Outcomes"
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
      `}</style>

      <main data-page="test-prep" className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Minimal Sub-Navigation Switcher */}
      <div className="flex justify-center pt-8 px-4">
        <div className="inline-flex items-center p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          <Link 
            href="/admissions" 
            className="px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full text-white/50 hover:text-white transition-all"
          >
            Consulting
          </Link>
          <Link 
            href="/admissions/test-prep" 
            className="px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
          >
            Test Prep
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Stylish Title Inspired by User Request */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <Sparkles className="size-3" />
              Admissions Consulting
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black italic tracking-tighter text-[#f8f9fa] leading-[1.2] lowercase whitespace-nowrap">
              start your test preparation journey
            </h1>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground/90 max-w-3xl leading-[1.1]">
              Strategic Admissions Support For Students Targeting Strong Global Outcomes
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Built for families who want a clear application roadmap, stronger positioning, and disciplined execution across every part of the admissions process. We prepare you to win.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <Button className="h-14 px-8 rounded-2xl font-black text-base bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all">
                  Get Started <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link href="/tutors">
                <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-base border-border/40 hover:bg-muted/10 transition-all">
                  Explore Tutors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section className="px-6 py-16 border-y border-border/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center md:text-left">
            Standardised Test Mastery
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            {TESTS.map((test) => (
              <div 
                key={test}
                className="px-6 py-3 rounded-xl border border-border/40 bg-muted/5 text-sm font-black tracking-tight text-[#f8f9fa] hover:border-primary/50 transition-colors"
              >
                {test}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Vision Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-black italic tracking-tighter text-[#f8f9fa] lowercase">
                our vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As a student preparing for the next chapter, you need more than just a tutor. You need a navigator. Our vision is simple: we provide the expertise, the preparation, and the strategic counselling to ensure your admissions success on a global scale.
              </p>
              <div className="space-y-4 pt-4">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 group">
                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="size-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[2rem] border border-border/40 bg-muted/5 p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="text-sm font-black text-primary">01</div>
                  <h4 className="text-xl font-black text-foreground">Prepare</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Master the SAT, GRE, or IELTS with tutors who understand the nuance of each test.</p>
                </div>
                <div className="space-y-2 border-t border-border/20 pt-8">
                  <div className="text-sm font-black text-primary">02</div>
                  <h4 className="text-xl font-black text-foreground">Apply</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Strategic counselling to build a profile that universities can&apos;t ignore.</p>
                </div>
                <div className="space-y-2 border-t border-border/20 pt-8">
                  <div className="text-sm font-black text-primary">03</div>
                  <h4 className="text-xl font-black text-foreground">Succeed</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Secure your place in the world&apos;s most prestigious institutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 border-t border-border/20 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#f8f9fa] italic">
            ready to unlock your potential?
          </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Book a session with our admissions specialists and test prep experts today.
            </p>
          <div className="flex justify-center">
            <Link href="/contact-us">
              <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                Book A Consultation <ArrowRight className="ml-2 size-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
