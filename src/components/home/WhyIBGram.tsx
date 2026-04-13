"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Target, Brain, Trophy, Globe } from "lucide-react";

export function WhyIBGram() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent) => {
    setClickPos({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const reasons = [
    {
      icon: <Trophy className="size-6 text-primary" />,
      title: "The Top 1% Elite Educators",
      desc: "Our tutors aren't just teachers; they are curriculum architects, examiners, and high-achievers who meticulously deconstruct the IB and IGCSE rubrics to guarantee your success."
    },
    {
      icon: <Brain className="size-6 text-primary" />,
      title: "AI-Driven Diagnostics",
      desc: "We completely eliminate guesswork. Our proprietary AI tools analyze your learning patterns, identify precise knowledge gaps, and dynamically adjust your study roadmap for maximum efficiency."
    },
    {
      icon: <Target className="size-6 text-primary" />,
      title: "Strategic Curriculum Mastery",
      desc: "We focus on rigorous past-paper analysis, marking scheme mastery, and strategic exam techniques rather than passive reading, allowing our students to conquer exams with absolute confidence."
    },
    {
      icon: <Globe className="size-6 text-primary" />,
      title: "Global Success Record",
      desc: "Trusted by thousands of students worldwide, IB Gram has a verified track record of transforming predicted grades into perfect scores, securing admissions into the world's Ivy League and Russell Group universities."
    }
  ];

  return (
    <>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 transition-all z-20 cursor-pointer"
        aria-label="Why Choose IB Gram"
      >
        <Sparkles className="size-5 md:size-6 text-primary group-hover:animate-pulse drop-shadow-md" />
        <span className="font-extrabold text-sm md:text-base text-foreground/80 group-hover:text-foreground tracking-wider transition-colors drop-shadow-md">
          Why IBGram?
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden overscroll-contain"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Sunflower radial reveal container - purely visual */}
            <motion.div
              className="absolute inset-0 z-0 bg-primary/10 pointer-events-none"
              initial={{ clipPath: `circle(0px at ${clickPos.x}px ${clickPos.y}px)` }}
              animate={{ clipPath: `circle(3000px at ${clickPos.x}px ${clickPos.y}px)` }}
              exit={{ clipPath: `circle(0px at ${clickPos.x}px ${clickPos.y}px)` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Content Box (Rich SEO Semantic HTML) */}
            <motion.article
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] p-4 md:p-6 hide-scrollbar mt-12 md:mt-16"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-20"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>

              <div className="max-w-xl mx-auto space-y-4 md:space-y-6">
                <header className="text-center space-y-2 pt-2 relative">
                  <h2 className="text-xl md:text-3xl font-black tracking-tight flex items-center justify-center gap-2">
                    <Sparkles className="size-5 text-primary" />
                    Why Choose <span className="text-primary text-gradient bg-300% animate-gradient">IB Gram?</span>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto">
                    We don't just teach. We engineer your success with data-driven methodology, elite tutoring, and uncompromising academic standards.
                  </p>
                </header>

                <div className="flex flex-col space-y-4 md:space-y-5 relative py-2 md:py-4">
                  {/* Decorative background blur inside modal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 bg-primary/20 blur-[80px] rounded-full -z-10" />

                  {reasons.map((reason, idx) => (
                    <motion.section
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="group flex gap-4 items-start transition-all"
                    >
                      <div className="size-10 md:size-12 rounded-[1rem] bg-muted/60 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors border border-border/50 group-hover:border-primary/30">
                        <div className="scale-75 text-primary">
                          {reason.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-extrabold text-foreground mb-1 tracking-wide group-hover:text-primary transition-colors">{reason.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                          {reason.desc}
                        </p>
                      </div>
                    </motion.section>
                  ))}
                </div>

                <div className="text-center pt-3 border-t border-border/50">
                  <p className="text-[10px] md:text-xs text-muted-foreground/60 font-semibold uppercase tracking-[0.2em]">Dominate the Curriculum. Join the top 1% today.</p>
                </div>
              </div>
            </motion.article>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
