import { BrainCircuit, BookOpenCheck, ArrowRight, Rocket } from "lucide-react";

function LaunchingSoonNote({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-secondary/30 bg-background/95 px-4 py-3 ${className}`}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
        <Rocket className="size-4" />
      </span>
      <span className="text-sm font-bold leading-snug text-foreground">
        Launching soon — we&apos;re putting the finishing touches on this tool.
      </span>
    </div>
  );
}

export function AIToolsShowcase() {
  // These tools ship in a later phase. The "Launching soon" note is always shown
  // (no click): inline under each button on mobile, and as a centered banner below
  // the cards on larger screens.
  return (
    <section className="py-20 md:py-24 bg-background relative border-y border-white/5 shadow-2xl">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
            Study support between sessions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Tools that help students practise <br />
            <span className="text-gradient">smarter between tutor sessions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical planning and practice tools can help students see weak areas, prepare questions for the tutor and keep revision moving at a realistic pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* AI Test Generator Card */}
          <div
            className="group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 p-7 md:p-8 transition-colors hover:border-primary/50 hover:bg-white/[0.06] cursor-pointer"
          >
            <div className="relative z-10">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <BrainCircuit className="size-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Practice paper builder</h3>
              <p className="text-muted-foreground mb-6 text-base/relaxed md:pr-8">
                Create focused IB and IGCSE practice sets by subject, topic and time limit so sessions can start with clearer evidence of what needs work.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {["Topic practice", "Timed sets", "Revision checklist"].map((item) => (
                  <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item}
                  </span>
                ))}
              </div>

              <button type="button" className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-primary px-4 font-medium text-primary-foreground hover:bg-primary/90">
                Build a practice set <ArrowRight className="ml-2 size-4" />
              </button>

              {/* Inline note — mobile only */}
              <LaunchingSoonNote className="mt-4 sm:hidden" />
            </div>
          </div>

           {/* Smart Study Planner Card */}
           <div
            className="group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 p-7 md:p-8 transition-colors hover:border-secondary/50 hover:bg-white/[0.06] cursor-pointer"
          >
            <div className="relative z-10">
              <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <BookOpenCheck className="size-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Study planner and weak-area tracker</h3>
              <p className="text-muted-foreground mb-6 text-base/relaxed md:pr-8">
                Map exam dates, IA deadlines and school assessments into a simple weekly plan that students and parents can review with the tutor.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {["Exam dates", "IA deadlines", "Weak areas"].map((item) => (
                  <span key={item} className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                    {item}
                  </span>
                ))}
              </div>

              <button type="button" className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-secondary px-4 font-bold text-background hover:bg-secondary/90">
                Create a study plan <ArrowRight className="ml-2 size-4" />
              </button>

              {/* Inline note — mobile only */}
              <LaunchingSoonNote className="mt-4 sm:hidden" />
            </div>
          </div>

        </div>

        {/* Launching soon banner — larger screens (mobile uses the inline notes) */}
        <div className="mt-10 hidden justify-center sm:flex">
          <LaunchingSoonNote className="px-5" />
        </div>
      </div>
    </section>
  );
}
