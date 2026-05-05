"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useReducedMotion } from "framer-motion";

const schoolsData = [
  {
    name: "Columbia",
    cards: [
      { name: "Pahuna G.", role: "Admitted for Bachelors in Economics" },
      { name: "Abhishek B.", role: "Admitted for Masters in Computer Science" },
    ]
  },
  {
    name: "Oxford",
    cards: [
      { name: "Alex C.", role: "Admitted for BA Computer Science" },
      { name: "Sanya J.", role: "Admitted for MSc Economics" },
    ]
  },
  {
    name: "Stanford",
    cards: [
      { name: "Sophia M.", role: "Admitted for BS Symbolic Systems" },
      { name: "Rehan B.", role: "Admitted for BS Computer Science" },
    ]
  },
  {
    name: "MIT",
    cards: [
      { name: "Liam J.", role: "Admitted for BSc Physics" },
      { name: "Divyanshu V.", role: "Admitted for BS Computer Science" },
    ]
  }
];

type SchoolData = (typeof schoolsData)[number];



function SchoolSection({ school, index, total, progress, reduceMotion }: { school: SchoolData; index: number; total: number; progress: MotionValue<number>; reduceMotion: boolean }) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const fadeInEnd = start + (1 / total) * 0.2;
  const fadeOutStart = end - (1 / total) * 0.2;
  
  const isFirst = index === 0;
  
  const rawOpacity = useTransform(
    progress, 
    [start, fadeInEnd, fadeOutStart, end], 
    [isFirst ? 1 : 0, 1, 1, 0]
  );
  // Guarantee valid CSS opacity so the browser doesn't ignore it and get "stuck"
  const opacity = useTransform(rawOpacity, (v) => Math.max(0, Math.min(1, v)));
  
  const textScale = useTransform(progress, [start, end], [1.05, 0.95]);

  const leftCardY = useTransform(progress, [start, end], [reduceMotion ? 0 : 20, reduceMotion ? 0 : -20]);
  const rightCardY = useTransform(progress, [start, end], [reduceMotion ? 0 : 20, reduceMotion ? 0 : -20]);

  return (
    <motion.div 
      style={{ opacity, pointerEvents: "none" }}
      className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
    >
       <motion.h1 
         style={{ scale: textScale }}
         className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] font-black text-white tracking-tighter drop-shadow-2xl leading-none text-center px-4 whitespace-nowrap z-0"
       >
         {school.name}
       </motion.h1>

       {/* Left Card - Positioned lower left */}
       <motion.div 
         style={{ y: leftCardY }}
         className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 bottom-[5vh] sm:bottom-[8vh] w-[140px] sm:w-[200px] md:w-[240px] h-[200px] sm:h-[280px] md:h-[320px] bg-neutral-800 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end p-4 sm:p-6 border border-white/10 pointer-events-auto z-20"
       >
         <div className="absolute inset-0 bg-neutral-700/80" /> 
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
         <div className="relative z-20">
           <h3 className="text-sm sm:text-xl font-bold text-white leading-tight">{school.cards[0].name}</h3>
           <p className="text-[10px] sm:text-sm text-neutral-300 mt-1 leading-snug">{school.cards[0].role}</p>
         </div>
       </motion.div>

       {/* Right Card - Positioned higher right */}
       <motion.div 
         style={{ y: rightCardY }}
         className="absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 top-[15vh] sm:top-[20vh] w-[140px] sm:w-[200px] md:w-[240px] h-[200px] sm:h-[280px] md:h-[320px] bg-neutral-800 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end p-4 sm:p-6 border border-white/10 pointer-events-auto z-20"
       >
         <div className="absolute inset-0 bg-neutral-700/80" /> 
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
         <div className="relative z-20">
           <h3 className="text-sm sm:text-xl font-bold text-white leading-tight">{school.cards[1].name}</h3>
           <p className="text-[10px] sm:text-sm text-neutral-300 mt-1 leading-snug">{school.cards[1].role}</p>
         </div>
       </motion.div>
    </motion.div>
  )
}

function CrimsonScrollSection({ reduceMotion }: { reduceMotion: boolean }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-background">
      <div className="sticky top-[10vh] flex h-[90vh] w-full flex-col items-center overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center pt-2 sm:pt-4 w-full px-4">
          <p className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-center">
            OUR ADMISSIONS SUCCESS STORIES
          </p>
          <p className="mt-4 text-xl sm:text-3xl font-semibold text-white text-center">
            Getting Students Into
          </p>
        </div>

        {/* Dynamic School Sections */}
        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto">
          {schoolsData.map((school, i) => (
            <SchoolSection 
              key={school.name} 
              school={school} 
              index={i} 
              total={schoolsData.length} 
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="relative z-20 pb-28 sm:pb-36 lg:pb-40">
          <Link href="/contact-us">
            <button className="bg-white hover:bg-neutral-200 text-[#c8102e] font-bold px-8 py-4 sm:px-10 sm:py-4 rounded transition-colors uppercase tracking-[0.15em] text-xs sm:text-sm shadow-2xl">
              BOOK A CONSULTATION
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function SuccessStoriesPage() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main data-page="admissions-success-stories" className="min-h-screen bg-background text-foreground">
      <style>{`
        body:has(main[data-page="admissions-success-stories"]) footer {
          display: none !important;
        }

        body:has(main[data-page="admissions-success-stories"]) main.flex-1 {
          flex: 0 0 auto !important;
        }

        body:has(main[data-page="admissions-success-stories"]) div.fixed:has(.ai-widget-ring) {
          display: none !important;
        }
      `}</style>

      {/* Sub-Navigation */}
      <div className="flex justify-center px-4 pt-1 pb-4 bg-background">
        <div className="inline-flex items-center rounded-full border border-border/50 bg-background p-1">
          <Link
            href="/admissions"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
          >
            Consulting
          </Link>
          <Link
            href="/admissions/test-prep"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
          >
            Test Prep
          </Link>
          <Link
            href="/admissions/success-stories"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full bg-card text-foreground transition-all sm:px-7 sm:text-xs"
          >
            Success Stories
          </Link>
        </div>
      </div>

      <CrimsonScrollSection reduceMotion={reduceMotion} />
    </main>
  );
}
