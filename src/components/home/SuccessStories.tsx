"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, TrendingUp, GraduationCap, Quote, ArrowRight, Star, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Alex Cheng",
    subject: "Math AA HL",
    prevScore: 4,
    finalScore: 7,
    university: "Stanford",
    quote: "IB Gram's predictive questions were verbatim on my finals. The transition from struggling to mastering concepts was seamless.",
    image: "/student_malik_dubai_review_avatar.png",
    accent: "rgb(59, 130, 246)", // Blue
  },
  {
    id: 2,
    name: "Emma Wilson",
    subject: "Biology HL",
    prevScore: 5,
    finalScore: 7,
    university: "Oxford",
    quote: "The visual learning modules simplified complex biological pathways. I felt over-prepared for my external assessments.",
    image: "/student_sarah_london_review_avatar.png",
    accent: "rgb(16, 185, 129)", // Emerald
  },
  {
    id: 3,
    name: "David Kim",
    subject: "Economics HL",
    prevScore: 4,
    finalScore: 7,
    university: "LSE",
    quote: "My tutor broke down real-world policies perfectly. I went into exams with immense confidence thanks to the rigorous practice.",
    image: "/student_sophia_usa_review_avatar.png",
    accent: "rgb(245, 158, 11)", // Amber
  },
  {
    id: 4,
    name: "Priya Patel",
    subject: "Physics HL",
    prevScore: 5,
    finalScore: 7,
    university: "MIT",
    quote: "The AI tools for IA topic selection and structure were a lifesaver. It helped me score top marks in my internal assessments.",
    image: "/student_malik_dubai_review_avatar.png", // reusing for demo
    accent: "rgb(236, 72, 153)", // Pink
  }
];

export function SuccessStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const total = stories.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle dot navigation bounds
  const maxIdx = total - itemsToShow;
  const safeActiveIdx = Math.min(activeIdx, maxIdx >= 0 ? maxIdx : 0);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background" aria-labelledby="success-heading">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-left mb-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="size-3" /> Result Focused Mentorship
          </motion.div>
          <motion.h2
            id="success-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl font-black tracking-tight text-foreground mb-4 leading-none"
          >
            Proof is in the <span className="text-secondary">Progress</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-medium max-w-xl"
          >
            Real results from students who redefined their academic potential.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-full group/carousel">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div 
              className="flex gap-4 md:gap-6"
              drag="x"
              dragConstraints={{ right: 0, left: -((total - itemsToShow) * (100 / itemsToShow)) * (total / itemsToShow) }} // approximate
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold && activeIdx < total - itemsToShow) {
                  setActiveIdx(prev => prev + 1);
                } else if (offset.x > swipeThreshold && activeIdx > 0) {
                  setActiveIdx(prev => prev - 1);
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
                  <div className="h-full p-8 rounded-[2rem] bg-card/40 border border-border/40 hover:border-primary/30 transition-all duration-300 relative group pointer-events-none sm:pointer-events-auto">
                    {/* Minimal Score Progress Pill */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center bg-muted/20 border border-border/50 p-1.5 rounded-xl">
                        <div className="px-2.5 py-1 rounded-lg bg-white/5 text-muted-foreground text-[10px] font-bold line-through opacity-40">
                          {story.prevScore}
                        </div>
                        <div className="px-2">
                          <TrendingUp className="size-3.5 text-secondary" />
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[10px] font-black">
                          {story.finalScore}
                        </div>
                      </div>
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Trophy className="size-5" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="size-16 rounded-2xl overflow-hidden border border-border/30 relative shrink-0">
                        <Image src={story.image} alt={story.name} fill className="object-cover pointer-events-none" sizes="64px" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground leading-tight">{story.name}</h3>
                        <p className="text-xs text-primary font-black uppercase tracking-widest mt-1">{story.subject}</p>
                      </div>
                    </div>

                    <blockquote className="text-sm font-medium text-muted-foreground italic leading-relaxed mb-6">
                      "{story.quote}"
                    </blockquote>

                    <div className="flex items-center gap-2 text-xs font-bold text-foreground/70 pt-5 border-t border-border/20">
                      <GraduationCap className="size-4 text-primary" />
                      <span className="tracking-tight">{story.university}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots - Left Aligned */}
        <div className="flex justify-start gap-2 mt-8">
          {Array.from({ length: total - itemsToShow + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-1 rounded-full transition-all duration-500 ${safeActiveIdx === i ? "w-8 bg-secondary" : "w-1.5 bg-border hover:bg-secondary/40"}`}
              aria-label={`Student story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
