import Link from "next/link";
import { ArrowRight, Star, ClipboardCheck, Target, CalendarCheck, MessageCircle, ShieldCheck, Laptop, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BookDemoButton } from "@/components/booking/BookDemoButton";
import { HeroFlagSlider } from "./HeroFlagSlider";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 lg:pt-6 lg:pb-12 bg-background">


      {/* Wider than the default container and padded asymmetrically so the headline
          sits further left instead of being centred with equal gutters. */}
      <div className="relative z-10 mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:pl-8 xl:pl-12 lg:pr-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            {/* Badge, headline and intro are grouped with explicit margins instead of the
                column's wider space-y rhythm, so each gap can be tuned on its own. */}
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <div
                  className="inline-flex items-center whitespace-nowrap rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm glassmorphism sm:px-3.5 sm:py-1.5 sm:text-xs md:text-sm"
                >
                  <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-1.5 sm:h-2 sm:w-2 sm:mr-2" />
                  Trusted IB and IGCSE tutor matching for families worldwide
                </div>
              </div>

              <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.06] max-w-5xl">
                Find IB and IGCSE tutors worldwide who know your syllabus and school.
              </h1>

              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-none lg:pr-4 leading-relaxed">
                IB Gram connects families across 15+ countries with IB and IGCSE tutors for PYP, MYP and DP, covering Math AA and AI, Physics, Chemistry, Biology, Economics and English at HL and SL. Online lessons run in your time zone, with home and hybrid options where tutors are local, plus IA, Extended Essay, TOK and past-paper revision before the May and November sessions.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Verified tutor profiles</span>
                <span className="flex items-center gap-2"><Laptop className="size-4 text-primary" /> Home · Online · Hybrid</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> Subject-first matching</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/tutors"
                prefetch={false}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "h-14 px-10 text-base md:text-lg rounded-xl bg-primary text-primary-foreground group hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all font-bold",
                })}
              >
                View all IB tutors
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <BookDemoButton className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg" />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 pt-8 border-t border-border/50">
              <HeroFlagSlider />
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>
                      <Star className="size-4 fill-current" />
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground mt-1 leading-snug">
                  Trusted by families preparing for <strong className="font-semibold text-foreground">IB and IGCSE assessments</strong> across Asia, the Middle East, Europe, North America and Oceania in <span className="font-bold text-primary">15+ countries</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Strategic Advantage / Why IB Gram */}
          <div
            className="lg:col-span-5 relative"
          >
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary/80 mb-2">Why IB Gram?</h2>
                <p className="text-2xl md:text-3xl font-black text-foreground leading-tight">Support built around how IB and IGCSE students study, wherever they are</p>
              </div>

              <div className="grid gap-4">
                {[
                  { title: "Subject-level tutor matching", icon: Target, desc: "Matched by programme, subject, level, weak areas and your school's calendar." },
                  { title: "Syllabus-aware tutoring", icon: ClipboardCheck, desc: "Math AA, Math AI, Physics, Chemistry, Economics, English and more, to the current syllabus." },
                  { title: "Lessons in your time zone", icon: CalendarCheck, desc: "Online worldwide around school hours, with home and hybrid options where tutors are local." },
                  { title: "Parent communication", icon: MessageCircle, desc: "Clear updates on what was covered, what needs practice and the next step." }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all flex gap-4"
                  >
                    <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary/10 transition-colors shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
