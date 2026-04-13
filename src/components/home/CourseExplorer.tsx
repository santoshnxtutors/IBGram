"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  Sparkles,
  ArrowRight
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
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
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
                  className="p-5 rounded-2xl bg-muted/10 border border-border/60 hover:bg-muted/20 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-1">
                    <h4 className="text-sm md:text-base font-black text-foreground group-hover:text-primary transition-colors break-words">
                      {program.title}
                    </h4>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/40 whitespace-nowrap">
                      {program.age}
                    </span>
                  </div>
                  <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed font-medium">
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
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-left transition-all font-black text-sm border-2 ${selectedCourseId === cat.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/10 text-muted-foreground hover:bg-muted/20 hover:text-foreground border-transparent"
                      }`}
                  >
                    <cat.icon className="size-4 shrink-0" />
                    <span className="truncate">{cat.title}</span>
                  </button>
                ))}
              </div>

              {/* Subject Detail View */}
              <div className="flex-1 p-5 md:p-6 rounded-3xl bg-muted/5 border border-border/50 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCourseId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="pb-4 border-b border-border/40 flex items-center justify-between gap-4">
                      <h4 className="text-lg md:text-xl font-black text-foreground break-words tracking-tight">
                        {activeCategory.title} Subjects
                      </h4>
                      <Link 
                        href={`/courses/ib/${activeCategory.id}`}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-bold text-primary hover:bg-primary/20 transition-all group/link whitespace-nowrap shrink-0"
                      >
                        Full curriculum
                        <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeCategory.courses.map((course, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-muted/30 border border-border/50 group hover:bg-muted/50 hover:border-primary/40 transition-all duration-300">
                          <p className="text-sm md:text-base font-black text-foreground mb-1 group-hover:text-primary transition-colors">
                            {course.name}
                          </p>
                          <div className="flex gap-2">
                            {course.levels.map(level => (
                              <span key={level} className="text-[10px] font-black px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground border border-border/40 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all">
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
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
