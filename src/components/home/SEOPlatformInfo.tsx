import { CheckCircle2, BrainCircuit, Target, ShieldCheck } from "lucide-react";

export function SEOPlatformInfo() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 relative overflow-hidden bg-background scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10"
        >
            {/* Left Column - Platform Overview */}
            <div className="flex-1 w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <BrainCircuit className="size-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                  Tutor matching worldwide
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-base/relaxed font-medium">
                <p>
                  IB Gram helps parents and students review tutor options worldwide. Families connect with us from international schools across Asia, the Middle East, Europe, Africa, the Americas and Oceania. The focus stays practical: curriculum fit, subject level, preferred tutoring mode, schedule and the kind of academic support the student actually needs.
                </p>
                <p>
                  Instead of browsing long tutor lists, families share a requirement and receive a smaller shortlist to consider. Matching looks at subject expertise, board alignment, time zone overlap, availability, budget and reliability signals.
                </p>
                <p>
                  For IB and IGCSE families, this can include PYP, MYP, DP, Math AA, Math AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English and other subject needs, alongside Extended Essay, Internal Assessment, TOK and CAS guidance. We also support A Level, AP, American and British curriculum students preparing for school assessments and university applications.
                </p>
                <p>
                  Online tutoring makes distance irrelevant: a DP student in Dubai, Singapore, London, Toronto or Nairobi can work with a specialist teacher based anywhere, in a slot that fits the family&apos;s local evening. Where a family prefers in-person support, we look at home tutoring feasibility in their own city. Parents can use the first session to check teaching clarity, pace and comfort before committing further.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Tutor options for home, online and hybrid learning in any country, where available.",
                  "Support for IB, IGCSE, A Level, AP, PYP, MYP, DP and subject-specific revision.",
                  "Sessions scheduled around the student's own time zone and school calendar.",
                  "English-medium teaching by default, with other languages available on request.",
                  "Shortlisting based on subject, level, schedule, mode and family requirements."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <ShieldCheck className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium text-xs md:text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Line for Mobile */}
            <div className="w-full h-px bg-border lg:hidden" />

            {/* Right Column - How it Works */}
            <div className="flex-1 w-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-secondary/10 text-amber-800 border border-secondary/20">
                  <Target className="size-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">
                  How tutor matching works
                </h2>
              </div>

              <p className="text-muted-foreground text-base/relaxed font-medium mb-6">
                Matching works best when the requirement is specific. Share the curriculum, subject, level, school and its country, exam session, deadlines, weak areas, preferred schedule, your city and time zone, and whether you need home, online or hybrid tutoring.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Subject expertise and teaching experience",
                  "Curriculum alignment for IB, IGCSE, A Level, AP and other school systems",
                  "Programme and level fit, including PYP, MYP, DP, HL and SL",
                  "Exam board and session fit, including May and November DP sessions",
                  "Time zone overlap and workable weekly slots for online tutoring",
                  "Location feasibility for home tutoring and online readiness",
                  "Coursework support for Internal Assessments, Extended Essay and TOK",
                  "Teaching clarity, communication style and parent feedback",
                  "Reliability, consistency and profile verification",
                  "Budget alignment, local currency and first-session comfort"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 font-medium text-xs md:text-sm leading-tight">{point}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
