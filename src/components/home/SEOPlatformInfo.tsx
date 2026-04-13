"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, BrainCircuit, Target, ShieldCheck } from "lucide-react";

export interface SEOPlatformProps {
  location?: {
    country: string;
    cities?: string;
  };
}

export function SEOPlatformInfo({ location = { country: "India" } }: SEOPlatformProps) {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-background min-h-[85vh] flex flex-col justify-center scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10"
        >
            {/* Left Column - Platform Overview */}
            <div className="flex-1 w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <BrainCircuit className="size-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                  AI-Based Tutor Matching Across {location.country}
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-normal">
                <p>
                  IB Gram is an AI-powered tutor and education matching platform connecting parents and students with verified educators across {location.country}. We provide home tutors, online tutors, institute mentors and hybrid academic support for Classes 6–12 across CBSE, ICSE, IB, ISC and IGCSE boards.
                </p>
                <p>
                  Instead of browsing random tutor listings, our structured AI recommendation system evaluates academic compatibility and delivers a shortlist of 2–3 high-fit tutors based on subject expertise, board alignment, availability, budget and reliability signals.
                </p>
                <p>
                  We also support competitive exam preparation including JEE and NEET through specialised mentors and structured learning plans. Parents can book a demo class to evaluate teaching clarity and decide confidently.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  `Verified tutors for home, online and hybrid learning across ${location.country}.`,
                  "Support for CBSE, ICSE, IB, ISC, IGCSE + JEE & NEET.",
                  "AI-based shortlisting: get 2–3 best matches instead of long lists."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <ShieldCheck className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium text-xs md:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Line for Mobile */}
            <div className="w-full h-px bg-white/5 lg:hidden" />

            {/* Right Column - How it Works */}
            <div className="flex-1 w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                  <Target className="size-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                  How Our AI Tutor Matching System Works
                </h2>
              </div>
              
              <p className="text-muted-foreground text-sm leading-normal mb-6">
                Our AI engine processes structured compatibility parameters to recommend educators who fit your child's academic goals — whether it's school support, foundation building or competitive exam preparation.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Subject expertise relevance & teaching experience match",
                  "Board alignment (CBSE, ICSE, IB, ISC, IGCSE)",
                  "Class & exam specialization (JEE, NEET)",
                  "Location feasibility for home tutoring & online readiness",
                  "Availability overlap with preferred time slots",
                  "Teaching clarity, feedback signals & outcome patterns",
                  "Reliability, consistency & profile verification",
                  "Budget/pricing alignment and communication quality"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 font-medium text-xs md:text-sm leading-tight">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Sparkles className="size-5 text-primary shrink-0 animate-pulse mt-0.5" />
                <p className="text-foreground/90 font-medium text-xs md:text-sm leading-snug">
                  This system helps parents avoid confusion and saves time by delivering 2–3 precise tutor recommendations with high match confidence. You can book a demo to confirm the fit before continuing.
                </p>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
