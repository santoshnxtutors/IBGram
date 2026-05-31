"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, GraduationCap, Sparkles, Target } from "lucide-react";
import Image from "next/image";

type Story = {
  id: number | string;
  name: string;
  subject: string;
  focus: string;
  outcome: string;
  nextStep: string;
  accent: string;
  image: string;
  imageAlt: string;
};

const fallbackStories: Story[] = [
  {
    id: 1,
    name: "IB Math AA HL success story",
    subject: "IB DP Mathematics",
    focus: "Student story",
    outcome: "A student moved from scattered revision to a weekly plan with timed practice, error logs and clearer topic priorities.",
    nextStep: "Revision structure, exam practice and progress check-ins",
    accent: "text-primary border-primary/20 bg-primary/10",
    image: "/student_sophia_usa_review_avatar.png",
    imageAlt: "Student success story for IB Mathematics",
  },
  {
    id: 2,
    name: "Physics IA success story",
    subject: "IB DP Physics",
    focus: "Student story",
    outcome: "A student refined the IA direction with a narrower research question, cleaner data planning and steadier feedback cycles.",
    nextStep: "IA planning, data checks and paper practice",
    accent: "text-secondary border-secondary/20 bg-secondary/10",
    image: "/student_malik_dubai_review_avatar.png",
    imageAlt: "Student success story for IB Physics",
  },
  {
    id: 3,
    name: "Economics writing success story",
    subject: "IB DP Economics",
    focus: "Student story",
    outcome: "A student improved response planning with stronger diagrams, real-world examples and clearer paragraph structure.",
    nextStep: "10-mark and 15-mark response practice",
    accent: "text-primary border-primary/20 bg-primary/10",
    image: "/student_sarah_london_review_avatar.png",
    imageAlt: "Student success story for IB Economics",
  },
  {
    id: 4,
    name: "IGCSE Chemistry success story",
    subject: "Cambridge IGCSE Chemistry",
    focus: "Student story",
    outcome: "A student built a calmer revision plan around stoichiometry, organic chemistry and data-based questions.",
    nextStep: "Topic practice and revision checklist",
    accent: "text-secondary border-secondary/20 bg-secondary/10",
    image: "/student_sophia_usa_review_avatar.png",
    imageAlt: "Student success story for IGCSE Chemistry",
  },
];

export function SuccessStories({ items }: { items?: Story[] }) {
  const stories = items && items.length > 0 ? items : fallbackStories;
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
            <Sparkles className="size-3" /> success stories
          </motion.div>
          <motion.h2
            id="success-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl font-black tracking-tight text-foreground mb-4 leading-tight"
          >
            Our Student <span className="text-secondary">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-medium max-w-2xl leading-relaxed"
          >
            Add real IB Gram student journeys here with approved photos, subject context and the kind of support that helped them build confidence, planning habits and stronger understanding.
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
                  <article className="h-full min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06] md:p-7 relative group pointer-events-none sm:pointer-events-auto">
                    <div className="absolute right-5 top-5 h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-muted/30 shadow-xl md:h-32 md:w-32">
                      {story.image ? (
                        <Image
                          src={story.image}
                          alt={story.imageAlt}
                          fill
                          sizes="(max-width: 768px) 112px, 128px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-primary">
                          <Target className="size-8" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
                    </div>

                    <div className="mb-7 flex items-center justify-between gap-4 pr-32 md:pr-36">
                      <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${story.accent}`}>
                        {story.focus}
                      </span>
                    </div>

                    <div className="max-w-[calc(100%-7rem)] md:max-w-[calc(100%-8rem)]">
                      <h3 className="text-xl font-bold text-foreground leading-tight">{story.name}</h3>
                      <p className="text-xs text-primary font-black uppercase tracking-widest mt-2">{story.subject}</p>
                    </div>

                    <p className="mt-7 text-sm font-medium text-muted-foreground leading-relaxed">
                      {story.outcome}
                    </p>

                    <div className="mt-7 flex items-start gap-2 text-xs font-bold text-foreground/75 pt-5 border-t border-border/20">
                      <BookOpenCheck className="size-4 text-secondary shrink-0 mt-0.5" />
                      <span>{story.nextStep}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <GraduationCap className="size-4 text-primary" />
                      <span>Published with consent; individual results may vary</span>
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
              aria-label={`Student success story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
