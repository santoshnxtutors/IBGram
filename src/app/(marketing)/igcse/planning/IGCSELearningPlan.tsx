import { ArrowRight, CheckCircle2, ClipboardList, Target } from "lucide-react";
import Link from "next/link";
import { igcseLearningPlan, igcseStudyTracks } from "../content";

export function IGCSELearningPlan() {
  return (
    <section className="bg-background py-16 md:py-24" id="learning-plan">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <ClipboardList className="size-3.5" />
              realistic study planning
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              IGCSE support should start with the exact exam route
            </h2>
          </div>
          <p className="text-base font-medium leading-8 text-muted-foreground md:text-lg">
            Families usually need more than a list of subjects. A useful IGCSE plan checks the board, syllabus code, tier,
            mock timeline, weak topics and whether the student needs steady school support or fast revision before exams.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Target className="size-5" />
              </div>
              <h3 className="text-xl font-black text-foreground">Matching workflow</h3>
            </div>
            <div className="space-y-4">
              {igcseLearningPlan.map((item, index) => (
                <div key={item.step} className="grid grid-cols-[2.25rem_1fr] gap-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                    {index + 1}
                  </div>
                  <div className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-black text-foreground">{item.step}</h4>
                    <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {igcseStudyTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-primary/30 hover:bg-white/[0.06] md:p-6"
              >
                <h3 className="text-xl font-black text-foreground">{track.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">{track.body}</p>
                <div className="mt-5 space-y-2">
                  {track.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-bold text-foreground/85">
                      <CheckCircle2 className="size-3.5 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-primary/20 bg-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold leading-6 text-foreground">
            Share the board, subject, syllabus code and mock date to get a better IGCSE tutor shortlist.
          </p>
          <Link href="/contact-us" className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-primary hover:text-primary/80">
            Speak with an advisor <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

