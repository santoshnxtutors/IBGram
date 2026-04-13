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

const PROGRAMS = [
  {
    id: "pyp",
    title: "Primary Years Programme (PYP)",
    age: "Ages 3–12",
    description: "Nurturing active, caring participants in their own learning through transdisciplinary themes.",
  },
  {
    id: "myp",
    title: "Middle Years Programme (MYP)",
    age: "Ages 11–16",
    description: "Encouraging students to make practical connections between their studies and the real world.",
  },
  {
    id: "dp",
    title: "Diploma Programme (DP)",
    age: "Ages 16–19",
    description: "A rigorous pre-university course where students study six subjects and a 'DP Core'.",
  },
  {
    id: "cp",
    title: "Career-related Programme (CP)",
    age: "Ages 16–19",
    description: "Combining academic DP courses with career-related studies to prepare for professional pathways.",
  }
];

const CATEGORIES = [
  {
    id: "mathematics",
    title: "IB Mathematics",
    icon: Variable,
    courses: [
      { name: "Math Analysis & Approaches (AA)", levels: ["SL", "HL"] },
      { name: "Math Applications & Interpretation (AI)", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "sciences",
    title: "IB Sciences",
    icon: FlaskConical,
    courses: [
      { name: "Biology", levels: ["SL", "HL"] },
      { name: "Chemistry", levels: ["SL", "HL"] },
      { name: "Physics", levels: ["SL", "HL"] },
      { name: "Computer Science", levels: ["SL", "HL"] },
      { name: "Design Technology", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "individuals",
    title: "IB Individuals & Societies",
    icon: Briefcase,
    courses: [
      { name: "Business Management", levels: ["SL", "HL"] },
      { name: "Economics", levels: ["SL", "HL"] },
      { name: "Psychology", levels: ["SL", "HL"] },
      { name: "History", levels: ["SL", "HL"] },
      { name: "Philosophy", levels: ["SL", "HL"] },
      { name: "Geography", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "english",
    title: "IB English",
    icon: BookOpen,
    courses: [
      { name: "English A: Language & Literature", levels: ["SL", "HL"] },
      { name: "English A: Literature", levels: ["SL", "HL"] },
    ]
  },
  {
    id: "language",
    title: "IB Language",
    icon: Languages,
    courses: [
      { name: "French B / ab initio", levels: ["SL", "HL"] },
      { name: "Spanish B / ab initio", levels: ["SL", "HL"] },
      { name: "German B / ab initio", levels: ["SL", "HL"] },
      { name: "Hindi B", levels: ["SL", "HL"] },
    ]
  }
];

export function CourseExplorer() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(CATEGORIES[0].id);
  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === selectedCourseId) || CATEGORIES[0]
  , [selectedCourseId]);

  return (
    <section className="pt-16 pb-6 px-4 bg-background overflow-hidden" id="curriculum">
      <div className="container mx-auto max-w-7xl px-0 sm:px-4">
        <div className="mb-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4"
          >
            Curriculum Navigator
          </motion.div>
          <h2 className="text-2xl md:text-6xl font-black text-foreground mb-4 tracking-tight leading-none">
            Explore IB <span className="text-primary italic">Global Standards</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl text-base md:text-lg leading-relaxed">
            A comprehensive guide to the world's most rigorous academic pathways. 
            Select a program or course to discover focused subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Core IB Programs */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              Core IB Programmes
            </h3>
            <div className="grid gap-3">
              {PROGRAMS.map((program) => (
                <div 
                  key={program.id}
                  className="p-4 rounded-xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-1">
                    <h4 className="text-sm font-black text-foreground group-hover:text-primary transition-colors break-words">
                      {program.title}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {program.age}
                    </span>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Core IB Courses (Interactive) */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              Core IB Courses
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Category Selector */}
              <div className="w-full md:w-56 space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCourseId(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all font-bold text-sm ${
                      selectedCourseId === cat.id 
                        ? "bg-primary text-black" 
                        : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent"
                    }`}
                  >
                    <cat.icon className="size-4 shrink-0" />
                    <span className="truncate">{cat.title}</span>
                  </button>
                ))}
              </div>

              {/* Subject Detail View */}
              <div className="flex-1 p-4 rounded-xl bg-card border border-border/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCourseId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="pb-4 border-b border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h4 className="text-base md:text-lg font-black text-foreground flex items-center gap-2 break-words">
                        <activeCategory.icon className="size-4 md:size-5 text-primary" strokeWidth={2} />
                        {activeCategory.title} Subjects
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCategory.courses.map((course, i) => (
                        <div key={i} className="p-4 rounded-xl bg-muted/20 border border-border/20 group hover:border-primary/40 transition-colors">
                          <p className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {course.name}
                          </p>
                          <div className="flex gap-2">
                            {course.levels.map(level => (
                              <span key={level} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 mt-4">
                      <button className="w-full py-2.5 rounded-lg bg-secondary text-secondary-foreground font-bold text-sm hover:opacity-90 transition-opacity">
                        View Detailed Curriculum
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
