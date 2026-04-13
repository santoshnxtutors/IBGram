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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = stories.length;

  return (
    <section className="pt-8 pb-24 md:pt-16 md:pb-32 relative overflow-hidden bg-background" aria-labelledby="success-heading">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-3"
          >
            <Sparkles className="size-3" /> Result Focused Mentorship
          </motion.div>
          <motion.h2
            id="success-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-4 leading-none"
          >
            Proof is in the <span className="text-secondary">Progress</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-xl font-medium leading-tight max-w-xl mx-auto"
          >
            Real results from students who redefined their academic potential.
          </motion.p>
        </div>

        {/* Improved Stack Layout - Highly Responsive */}
        <div className="relative h-[480px] sm:h-[540px] md:h-[450px] w-full max-w-5xl mx-auto">
          {stories.map((story, i) => {
            const diff = (i - activeIdx + total) % total;
            const isActive = diff === 0;

            // Responsive variables
            const zIndex = total - diff;
            const tilt = isActive ? 0 : diff * (isMobile ? 1 : 1.5);
            const xOffset = isMobile ? (diff * 6) : (diff * 25);
            const scale = isActive ? 1 : 1 - (diff * (isMobile ? 0.03 : 0.04));
            const opacity = isActive ? 1 : 1 - (diff * 0.4);

            return (
              <motion.div
                key={story.id}
                className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none"
                animate={{
                  x: xOffset,
                  rotate: tilt,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                <figure
                  onClick={() => setActiveIdx(i)}
                  className={`relative w-full max-w-[95vw] md:max-w-[850px] p-6 md:p-14 rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0E17]/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer pointer-events-auto ${!isActive && 'hover:border-primary/40'}`}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center mb-6 md:mb-10">

                      {/* Image & Header Container for Mobile */}
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-shrink-0">
                          <div className="size-16 md:size-32 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-xl relative">
                            <Image 
                              src={story.image} 
                              alt={story.name} 
                              fill 
                              sizes="(max-width: 768px) 64px, 128px" 
                              className="object-cover"
                              priority
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-secondary p-1.5 rounded-lg shadow-lg">
                            <Trophy className="size-3 md:size-5 text-secondary-foreground" />
                          </div>
                        </div>

                        {/* Visible only on Mobile inside the flex row */}
                        <div className="md:hidden flex-1 overflow-hidden">
                          <figcaption className="text-xl font-black text-foreground truncate">
                            {story.name}
                          </figcaption>
                          <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">
                            {story.subject}
                          </p>
                        </div>
                      </div>

                      {/* Info Panel */}
                      <div className="flex-1 w-full">
                        <div className="hidden md:flex items-center justify-between gap-4 mb-4">
                          <figcaption className="text-5xl font-black text-foreground tracking-tight">
                            {story.name}
                          </figcaption>
                          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                            {story.subject}
                          </span>
                        </div>

                        {/* Progress Pill Container */}
                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-center bg-black/40 border border-white/5 p-1 rounded-xl md:rounded-2xl">
                            <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/5 text-muted-foreground text-xs md:text-sm font-black line-through opacity-50">
                              Score: {story.prevScore}
                            </div>
                            <div className="px-2 md:px-3">
                              <TrendingUp className="size-3 md:size-4 text-secondary" />
                            </div>
                            <div className="px-4 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-secondary text-secondary-foreground text-xs md:text-lg font-black">
                              Score: {story.finalScore}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-black/40 border border-white/5 py-2 px-4 md:py-3 md:px-5 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-bold text-foreground/80">
                            <GraduationCap className="size-3 md:size-4 text-primary" />
                            {story.university}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative">
                      <Quote className="absolute -top-3 -left-3 md:-top-6 md:-left-6 size-6 md:size-12 text-primary opacity-20" />
                      <blockquote className="text-sm md:text-2xl font-medium text-foreground/90 italic leading-relaxed md:leading-relaxed border-l-2 md:border-l-4 border-primary/20 pl-4 md:pl-8">
                        "{story.quote}"
                      </blockquote>
                      <cite className="not-italic text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mt-4 md:mt-6 block text-right">
                        Verified IB Outcome
                      </cite>
                    </div>
                  </div>

                  {/* Progressive Darkening Overlay */}
                  {!isActive && (
                    <div
                      className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] z-20 pointer-events-none transition-opacity duration-300"
                      style={{ backgroundColor: `rgba(0,0,0, ${diff * 0.5})` }}
                    />
                  )}
                </figure>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination & Verification Link */}
        <div className="flex flex-col items-center mt-1">
          <div className="flex gap-3 mb-1">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-1 rounded-full transition-all duration-500 ${activeIdx === i ? "w-10 bg-secondary" : "w-2 bg-secondary/20 hover:bg-secondary/40"}`}
                aria-label={`Student story ${i + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center px-6"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
