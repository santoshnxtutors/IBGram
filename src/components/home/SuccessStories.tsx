"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, GraduationCap, Sparkles, Target } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Math AA HL revision",
    subject: "IB DP Mathematics",
    focus: "Exam practice",
    outcome: "A clearer weekly revision routine and more confident handling of unfamiliar questions.",
    nextStep: "Timed practice, error log and topic review",
    accent: "text-primary border-primary/20 bg-primary/10",
  },
  {
    id: 2,
    name: "Physics IA direction",
    subject: "IB DP Physics",
    focus: "IA support",
    outcome: "A narrower research question, better data planning and more structured teacher feedback cycles.",
    nextStep: "IA planning, data checks and paper practice",
    accent: "text-secondary border-secondary/20 bg-secondary/10",
  },
  {
    id: 3,
    name: "Economics writing",
    subject: "IB DP Economics",
    focus: "Essay structure",
    outcome: "Stronger use of diagrams, real-world examples and paragraph structure under timed conditions.",
    nextStep: "10-mark and 15-mark response practice",
    accent: "text-primary border-primary/20 bg-primary/10",
  },
  {
    id: 4,
    name: "IGCSE Chemistry confidence",
    subject: "Cambridge IGCSE Chemistry",
    focus: "Weak-area practice",
    outcome: "A calmer revision plan around stoichiometry, organic chemistry and data-based questions.",
    nextStep: "Topic practice and revision checklist",
    accent: "text-secondary border-secondary/20 bg-secondary/10",
  },
];

export function SuccessStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const total = stories.length;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");

    const syncItemsToShow = () => {
      if (mobileQuery.matches) {
        setItemsToShow(1);
        return;
      }

      if (tabletQuery.matches) {
        setItemsToShow(2);
        return;
      }

      setItemsToShow(3);
    };

    syncItemsToShow();
    mobileQuery.addEventListener("change", syncItemsToShow);
    tabletQuery.addEventListener("change", syncItemsToShow);

    return () => {
      mobileQuery.removeEventListener("change", syncItemsToShow);
      tabletQuery.removeEventListener("change", syncItemsToShow);
    };
  }, []);

  const maxIdx = total - itemsToShow;
  const safeActiveIdx = Math.min(activeIdx, maxIdx >= 0 ? maxIdx : 0);

  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-background" aria-labelledby="success-heading">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-left mb-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="size-3" /> Student progress examples
          </motion.div>
          <motion.h2
            id="success-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl font-black tracking-tight text-foreground mb-4 leading-tight"
          >
            Progress often starts with <span className="text-secondary">better structure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-medium max-w-2xl leading-relaxed"
          >
            These examples describe the kind of support families commonly ask for. They avoid grade promises and focus on confidence, planning and subject understanding.
          </motion.p>
        </div>

        <div className="relative max-w-full group/carousel">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex gap-4 md:gap-6"
              drag="x"
              dragConstraints={{ right: 0, left: -((total - itemsToShow) * (100 / itemsToShow)) * (total / itemsToShow) }}
              onDragEnd={(_, { offset }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold && safeActiveIdx < total - itemsToShow) {
                  setActiveIdx((prev) => prev + 1);
                } else if (offset.x > swipeThreshold && safeActiveIdx > 0) {
                  setActiveIdx((prev) => prev - 1);
                }
              }}
              animate={{ x: `-${safeActiveIdx * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {stories.map((story) => (
                <motion.div
                  key={story.id}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 select-none"
                >
                  <article className="h-full p-6 md:p-7 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 relative group pointer-events-none sm:pointer-events-auto">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${story.accent}`}>
                        {story.focus}
                      </span>
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Target className="size-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground leading-tight">{story.name}</h3>
                    <p className="text-xs text-primary font-black uppercase tracking-widest mt-2">{story.subject}</p>

                    <p className="mt-5 text-sm font-medium text-muted-foreground leading-relaxed">
                      {story.outcome}
                    </p>

                    <div className="mt-7 flex items-start gap-2 text-xs font-bold text-foreground/75 pt-5 border-t border-border/20">
                      <BookOpenCheck className="size-4 text-secondary shrink-0 mt-0.5" />
                      <span>{story.nextStep}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <GraduationCap className="size-4 text-primary" />
                      <span>No guaranteed outcome claim</span>
                    </div>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-start gap-2 mt-8">
          {Array.from({ length: total - itemsToShow + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-1 rounded-full transition-all duration-500 ${safeActiveIdx === i ? "w-8 bg-secondary" : "w-1.5 bg-border hover:bg-secondary/40"}`}
              aria-label={`Student progress example ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
