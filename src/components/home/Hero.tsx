import Link from "next/link";
import { ArrowRight, Star, ClipboardCheck, Target, CalendarCheck, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-20 bg-background">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <div
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold text-primary shadow-sm glassmorphism"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                IB and IGCSE tutor matching for families in India and overseas
              </div>

            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.06] max-w-5xl">
              Find <span className="text-primary text-gradient bg-300% animate-gradient">IB and IGCSE tutors</span> who understand your syllabus, school and goals.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[680px] leading-relaxed">
              IB Gram helps families connect with tutors for PYP, MYP, DP and IGCSE subjects, with support for home, online and hybrid learning.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="/tutors"
                prefetch={false}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "h-14 px-8 text-base md:text-lg rounded-xl bg-primary text-primary-foreground group hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all font-bold",
                })}
              >
                Find a tutor for my child
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#curriculum"
                prefetch={false}
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "h-14 px-8 text-base md:text-lg rounded-xl glassmorphism-heavy group hover:border-secondary hover:bg-white/5 transition-all font-bold",
                })}
              >
                Explore IB subjects
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-10 border-t border-border/50">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden cursor-pointer"
                  >
                    <UserAvatarFallback />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>
                      <Star className="size-4 fill-current" />
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground mt-1">
                  Trusted by families preparing for IB and IGCSE assessments across India and overseas.
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
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary/80 mb-2">Why IBGram?</h2>
                <p className="text-2xl md:text-3xl font-black text-foreground leading-tight">Support built around how <span className="text-primary italic">IB and IGCSE</span> students actually study</p>
              </div>

              <div className="grid gap-4">
                {[
                  { title: "Subject-level tutor matching", icon: Target, desc: "Match by programme, subject, level, weak areas and school timeline." },
                  { title: "Syllabus-aware tutoring", icon: ClipboardCheck, desc: "Support for Math AA, Math AI, Physics, Chemistry, Economics, English and more." },
                  { title: "Flexible learning modes", icon: CalendarCheck, desc: "Home, online and hybrid options are reviewed by availability and location." },
                  { title: "Parent communication", icon: MessageCircle, desc: "Clear updates on what was covered, what needs practice and the next step." }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/30 hover:bg-white/[0.06] transition-all flex gap-4"
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

// Simple fallback component to mimic the user images without needing actual image assets loaded
function UserAvatarFallback() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
