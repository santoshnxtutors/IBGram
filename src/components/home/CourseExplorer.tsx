"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X,
  FlaskConical,
  Dna,
  Atom,
  Briefcase,
  TrendingUp,
  Leaf,
  Brain,
  History,
  BookOpen,
  BookText,
  Languages,
  Variable,
  Sigma,
  Sparkles
} from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";

const CATEGORIES = [
  {
    id: "mathematics",
    title: "Mathematics",
    color: "from-blue-500 to-cyan-500",
    icon: Variable,
    courses: [
      { name: "Analysis & Approaches", levels: ["SL", "HL"] },
      { name: "Applications & Interpretation", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "sciences",
    title: "Sciences",
    color: "from-indigo-500 to-purple-600",
    icon: FlaskConical,
    courses: [
      { name: "Biology", levels: ["SL", "HL"] },
      { name: "Chemistry", levels: ["SL", "HL"] },
      { name: "Physics", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "individuals",
    title: "Individuals",
    color: "from-rose-500 to-orange-600",
    icon: Briefcase,
    courses: [
      { name: "Business Management", levels: ["SL", "HL"] },
      { name: "Economics", levels: ["SL", "HL"] },
      { name: "ESS", levels: ["SL", "HL"] },
      { name: "Psychology", levels: ["SL 26/27", "HL 26/27"] },
      { name: "History", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "english",
    title: "English",
    color: "from-fuchsia-500 to-pink-600",
    icon: BookOpen,
    courses: [
      { name: "Lang & Lit", levels: ["SL", "HL"] },
      { name: "Literature", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "language-b",
    title: "Language B",
    color: "from-amber-500 to-yellow-600",
    icon: Languages,
    courses: [
      { name: "French B", levels: ["SL", "HL"] },
      { name: "Spanish B", levels: ["SL", "HL"] },
    ]
  }
];

export function CourseExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Close bloom on outside click
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="pt-8 pb-24 px-4 max-w-7xl mx-auto scroll-mt-24 relative" id="courses" ref={containerRef}>
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
          Curriculum <span className="text-primary italic">Navigator</span>
        </h2>
        <p className="text-muted-foreground font-medium max-w-xl mx-auto text-lg leading-relaxed">
           Elite subject exploration. Click a category to bloom the available paths.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
        {CATEGORIES.map((category) => {
          const isActive = activeId === category.id;
          
          return (
            <div key={category.id} className="relative">
              <motion.div
                whileHover={!activeId ? { scale: 1.02, y: -5 } : {}}
                onClick={() => setActiveId(isActive ? null : category.id)}
                className={`relative z-20 cursor-pointer p-4 md:p-8 rounded-2xl md:rounded-[2rem] bg-background/40 border border-border/50 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center text-center h-28 md:h-52 hover:border-primary/30 group ${
                  isActive ? "ring-2 ring-primary border-primary" : ""
                }`}
              >
                {/* Refined Minimal Icon */}
                <div className={`size-10 md:size-14 rounded-full border border-white/10 flex items-center justify-center mb-2 md:mb-4 transition-all duration-500 group-hover:scale-110 ${
                    isActive ? `bg-gradient-to-br ${category.color} border-none shadow-lg shadow-black/20` : "bg-white/5"
                }`}>
                  <category.icon className={`size-5 md:size-6 ${isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"}`} strokeWidth={1.5} />
                </div>
                <h3 className={`text-sm md:text-xl font-bold tracking-widest uppercase transition-colors ${isActive ? "text-white" : "text-foreground"}`}>
                  {category.title}
                </h3>
                {!activeId && (
                  <div className="mt-2 md:mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[8px] font-black tracking-[0.2em] text-primary">
                    <Sparkles className="size-2.5" /> EXPLORE
                  </div>
                )}
              </motion.div>

              <AnimatePresence>
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    {category.courses.map((course, idx) => {
                      const total = category.courses.length;
                      const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
                      
                      // Dynamic localized radius scaling for mobile vs desktop 
                      // Ensures petals do not overflow horizontal screen bounds on small devices
                      let radius;
                      if (isMobile) {
                        radius = total > 4 ? 120 : (total > 3 ? 100 : 85);
                      } else {
                        radius = total > 4 ? 240 : (total > 3 ? 210 : 180);
                      }

                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            x, 
                            y, 
                            opacity: 1,
                            transition: { 
                              delay: 0.1 + idx * 0.05, 
                              type: "spring", 
                              stiffness: 150, 
                              damping: 15 
                            } 
                          }}
                          exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                          className="absolute w-36 md:w-56 p-3 md:p-5 bg-background/95 backdrop-blur-3xl border border-white/10 rounded-xl md:rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto z-40"
                        >
                          <h4 className="text-[10px] md:text-sm font-extrabold text-white uppercase tracking-wider mb-2 md:mb-3 leading-tight drop-shadow-md text-center">
                            {course.name}
                          </h4>
                          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                            {course.levels.map((level) => (
                              <button
                                key={level}
                                className={`px-2 md:px-4 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-bold transition-all border ${
                                    idx % 2 === 0 
                                    ? "bg-primary/20 border-primary/30 text-primary hover:bg-primary hover:text-black" 
                                    : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-black"
                                } shadow-lg shadow-black/20`}
                              >
                                {level}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Dim Overlay (Only for Focus, not Modal) */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            className="fixed inset-0 z-0 bg-background/40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
