"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, CheckCircle, X, ShieldCheck, Search, SlidersHorizontal, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { allTutors } from "@/lib/tutor-data";

const IB_SUBJECTS = ["Mathematics", "Physics", "Chemistry", "Biology", "Economics", "English", "Psychology", "History", "Business Management", "Theory of Knowledge"];
const IB_GRADES = ["IB DP (Year 12-13)", "IB MYP (Year 7-11)", "IB PYP (Year 1-6)"];

const IGCSE_SUBJECTS = ["Mathematics (0580/4MA1)", "Physics", "Chemistry", "Biology", "Economics", "English (First/Second)", "Business Studies", "Computer Science", "History", "Geography", "ICT"];
const IGCSE_GRADES = ["IGCSE Grade 10 (Final)", "IGCSE Grade 9 (Foundation)"];

export default function TutorsPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [curriculumFilter, setCurriculumFilter] = useState<string>("Curriculum");
  const [subjectFilter, setSubjectFilter] = useState<string>("Subject");
  const [gradeFilter, setGradeFilter] = useState<string>("Grade");
  const [filteredTutors, setFilteredTutors] = useState(allTutors);
  const [compareIds, setCompareIds] = useState<number[]>([]);

  const toggleCompare = (id: number) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length < 2) return [...prev, id];
      return [prev[1], id]; // replace oldest
    });
  };

  const handleCompareRedirect = () => {
    if (compareIds.length === 2) {
      router.push(`/tutor-compare?ids=${compareIds.join(",")}`);
    }
  };

  const handleSearch = () => {
    let result = allTutors;
    
    if (curriculumFilter !== "Curriculum") {
      result = result.filter(t => t.curriculum === curriculumFilter || t.curriculum === "Both");
    }
    
    if (subjectFilter !== "Subject") {
      result = result.filter(t => t.subject.includes(subjectFilter) || subjectFilter.includes(t.subject));
    }
    if (gradeFilter !== "Grade") {
      result = result.filter(t => t.grade.includes(gradeFilter) || gradeFilter.includes(t.grade));
    }
    setFilteredTutors(result);
  };

  // Reset filters when curriculum changes
  useEffect(() => {
    setSubjectFilter("Subject");
    setGradeFilter("Grade");
    handleSearch();
  }, [curriculumFilter]);



  // Prevent scrolling when expanded view is open
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedId]);

  return (
    <div className="min-h-screen pt-24 pb-32 bg-background space-y-24">
      {/* Search Header Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6"
          >
            Find Your <span className="text-primary text-gradient bg-300% animate-gradient">Perfect Tutor</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Search through the world's most elite IB & IGCSE educators, vetted for excellence and academic results.
          </p>
        </div>

        {/* Ultra-Premium Responsive Search Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto relative z-20 flex sm:flex-row items-center gap-2 p-1.5 bg-card/30 border border-border/40 rounded-2xl shadow-2xl backdrop-blur-3xl"
        >
          {/* Symmetrical Grid Filters */}
          <div className="flex-1 grid grid-cols-3 h-10 sm:h-14 items-stretch w-full">
            {/* Curriculum Select */}
            <div className="relative h-full flex items-center justify-center border-r border-border/20">
              <Select value={curriculumFilter} onValueChange={(val) => { if (val) setCurriculumFilter(val as any); }}>
                <SelectTrigger className="w-full h-full bg-transparent border-none rounded-none text-primary text-[10px] sm:text-base font-black px-1 sm:px-6 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none outline-none flex items-center justify-center">
                  <SelectValue placeholder="Curriculum" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-border bg-card/95 backdrop-blur-2xl shadow-2xl p-2 min-w-[160px]">
                  <SelectItem value="Curriculum" className="rounded-xl focus:bg-primary/10 font-bold text-center">Curriculum</SelectItem>
                  <SelectItem value="IB" className="rounded-xl focus:bg-primary/10 font-bold text-center">IB</SelectItem>
                  <SelectItem value="IGCSE" className="rounded-xl focus:bg-primary/10 font-bold text-center">IGCSE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Subject Select */}
            <div className="relative h-full flex items-center justify-center border-r border-border/20">
              <Select value={subjectFilter} onValueChange={(val) => { if (val) setSubjectFilter(val); }}>
                <SelectTrigger className="w-full h-full bg-transparent border-none rounded-none text-foreground text-[10px] sm:text-base font-black px-1 sm:px-6 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none outline-none flex items-center justify-center text-center">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-border bg-card/95 backdrop-blur-2xl shadow-2xl p-2 min-w-[200px]">
                  <SelectItem value="Subject" className="rounded-xl focus:bg-primary/10 font-bold">Subject</SelectItem>
                  {(curriculumFilter === "Curriculum" 
                    ? Array.from(new Set([...IB_SUBJECTS, ...IGCSE_SUBJECTS])) 
                    : (curriculumFilter === "IB" ? IB_SUBJECTS : IGCSE_SUBJECTS)
                  ).map(sub => (
                    <SelectItem key={sub} value={sub} className="rounded-xl focus:bg-primary/10 font-bold">{sub}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Grade Select */}
            <div className="relative h-full flex items-center justify-center">
              <Select value={gradeFilter} onValueChange={(val) => { if (val) setGradeFilter(val); }}>
                <SelectTrigger className="w-full h-full bg-transparent border-none rounded-none text-foreground text-[10px] sm:text-base font-black px-1 sm:px-6 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-none outline-none flex items-center justify-center text-center">
                  <SelectValue placeholder="Grade" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-border bg-card/95 backdrop-blur-2xl shadow-2xl p-2 min-w-[200px]">
                  <SelectItem value="Grade" className="rounded-xl focus:bg-primary/10 font-bold">Grade</SelectItem>
                  {(curriculumFilter === "Curriculum"
                    ? Array.from(new Set([...IB_GRADES, ...IGCSE_GRADES]))
                    : (curriculumFilter === "IB" ? IB_GRADES : IGCSE_GRADES)
                  ).map(grade => (
                    <SelectItem key={grade} value={grade} className="rounded-xl focus:bg-primary/10 font-bold">{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Symmetrical Search Action */}
          <div className="h-8 w-[1px] bg-border/20 self-center hidden sm:block" />
          <button
            onClick={handleSearch}
            className="h-10 w-10 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center bg-transparent text-primary transition-all group"
          >
            <Search className="size-4 sm:size-6 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
          </button>
        </motion.div>
      </section>

      {/* Results Component */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-border/50">
          <h2 className="text-2xl font-black text-foreground flex items-center gap-3">
            <SlidersHorizontal className="size-6 text-primary" />
            {filteredTutors.length} Elite Educators Found
          </h2>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTutors.map((tutor) => (
              <motion.div
                layoutId={`card-${tutor.id}`}
                key={tutor.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={() => setSelectedId(tutor.id)}
                className="cursor-pointer group"
              >
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-border/50 bg-background/40 backdrop-blur-md rounded-3xl overflow-hidden h-full flex flex-col hover:-translate-y-2 relative">
                  {/* Compare Toggle */}
                  <div className="absolute top-6 right-6 z-20 flex flex-col items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompare(tutor.id);
                      }}
                      className={`size-8 rounded-full flex items-center justify-center border-2 transition-colors ${compareIds.includes(tutor.id) ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 bg-opacity-100' : 'bg-background/80 border-border hover:border-primary/50 text-transparent hover:text-primary/50 backdrop-blur-sm'}`}
                      title="Compare Tutor"
                    >
                      <Check className={`size-4 ${compareIds.includes(tutor.id) ? 'text-current' : ''}`} strokeWidth={3} />
                    </button>
                    <span className={`text-[12px] font-extrabold tracking-wide transition-colors select-none ${compareIds.includes(tutor.id) ? 'text-primary' : 'text-white/90 group-hover:text-white'}`}>
                      Compare
                    </span>
                  </div>

                  <CardContent className="p-5 md:p-8 flex-1">
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="flex gap-3 md:gap-4 items-center">
                        <motion.div
                          layoutId={`avatar-${tutor.id}`}
                          className="size-14 md:size-16 rounded-2xl bg-muted/80 flex items-center justify-center relative overflow-hidden ring-4 ring-background shadow-lg shrink-0"
                        >
                          {tutor.image ? (
                            <Image src={tutor.image} alt={tutor.name} fill sizes="64px" className="object-cover" />
                          ) : (
                            <span className="text-xl font-bold text-muted-foreground">{tutor.name.charAt(0)}</span>
                          )}
                          <div className="absolute bottom-0 right-0 size-3 md:size-4 bg-green-500 border-2 border-background rounded-full animate-pulse z-10" />
                        </motion.div>
                        <div>
                          <motion.h3 layoutId={`name-${tutor.id}`} className="font-bold text-lg md:text-xl flex items-center gap-1 text-primary transition-colors tracking-tight">
                            {tutor.name} <CheckCircle className="size-3.5 md:size-4 text-primary" fill="currentColor" />
                          </motion.h3>
                          <motion.p layoutId={`subject-${tutor.id}`} className="text-xs md:text-sm font-semibold text-muted-foreground">{tutor.subject}</motion.p>
                        </div>
                      </div>
                    </div>

                    <motion.div layoutId={`stats-${tutor.id}`} className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-bold mb-4 md:mb-6">
                      <span className="flex items-center gap-1 text-foreground bg-secondary/10 px-2 py-0.5 rounded-lg">
                        <Star className="size-3.5 md:size-4 text-secondary fill-current" /> {tutor.rating} <span className="text-muted-foreground font-medium text-[10px] md:text-xs">({tutor.reviews})</span>
                      </span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="flex items-center gap-1 text-foreground bg-primary/10 px-2 py-0.5 rounded-lg">
                        <Clock className="size-3.5 md:size-4 text-primary" /> {tutor.experience}
                      </span>
                    </motion.div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      <span className={`text-[9px] md:text-[10px] uppercase tracking-wider font-extrabold px-2.5 md:px-3 py-1 rounded-lg border border-current/20 bg-primary/10 text-primary`}>
                        {tutor.curriculum}
                      </span>
                      {tutor.tags.slice(0, 1).map((tag: string) => (
                        <span key={tag} className={`text-[9px] md:text-[10px] uppercase tracking-wider font-extrabold px-2.5 md:px-3 py-1 rounded-lg border border-current/20 ${tutor.accent}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div className="mt-auto flex justify-end">
                    <div className="bg-muted/50 border-t border-l border-border/50 px-5 py-3 rounded-tl-[1.5rem] flex items-center text-xs md:text-sm font-bold text-primary transition-colors group-hover:bg-primary/10">
                      View Profile <ArrowRight className="ml-1.5 size-3.5 md:size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-24 glassmorphism-heavy rounded-[3rem] border-2 border-dashed border-border/50">
            <h3 className="text-3xl font-black text-muted-foreground mb-4">No tutors represent this search.</h3>
            <p className="text-muted-foreground/60 mb-8 max-w-md mx-auto font-medium">Try broadening your subject choice or curriculum grade to find more elite educators.</p>
            <Button variant="outline" size="lg" onClick={() => { setSubjectFilter("all"); setGradeFilter("all"); }} className="h-14 rounded-2xl border-2 font-bold px-8">
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      {/* Floating Compare Action Bar */}
      <AnimatePresence>
        {compareIds.length > 0 && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] rounded-[2rem] glassmorphism-heavy border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-2 pl-8 flex items-center justify-between gap-6 overflow-hidden max-w-[90vw] w-fit"
          >
            <div className="text-sm font-bold flex items-center gap-3">
              <div className="flex -space-x-3">
                {compareIds.map((id, i) => {
                  const t = allTutors.find(t => t.id === id);
                  return t ? (
                    <div key={i} className="size-8 rounded-full border-2 border-background bg-muted overflow-hidden relative flex items-center justify-center shadow-sm">
                      {t.image ? (
                        <Image src={t.image} alt={t.name} fill sizes="32px" className="object-cover" />
                      ) : (
                        <span className="text-xs font-bold text-muted-foreground">{t.name.charAt(0)}</span>
                      )}
                    </div>
                  ) : null;
                })}
              </div>

              {compareIds.length === 1 ? (
                <span className="text-muted-foreground hidden sm:block">Select 1 more to compare</span>
              ) : (
                <span className="text-foreground">2 Tutors Selected</span>
              )}
            </div>

            <Button
              disabled={compareIds.length < 2}
              onClick={(e) => { e.stopPropagation(); handleCompareRedirect(); }}
              className={`rounded-[1.5rem] px-6 h-12 shadow-lg transition-all font-bold ${compareIds.length === 2 ? 'bg-primary text-primary-foreground shimmer-btn hover:scale-105 hover:shadow-primary/20' : 'bg-muted text-muted-foreground border border-border'}`}
            >
              <Sparkles className="size-4 mr-2" /> Compare
            </Button>

            <button
              onClick={(e) => { e.stopPropagation(); setCompareIds([]); }}
              className="mr-2 text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Shared Element View */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
            />
            {allTutors.filter(t => t.id === selectedId).map(tutor => (
              <motion.div
                key="expanded"
                layoutId={`card-${tutor.id}`}
                className="relative w-full max-w-3xl bg-card border border-border rounded-[2.5rem] shadow-3xl overflow-hidden glassmorphism-heavy flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              >
                <button onClick={() => setSelectedId(null)} className="absolute top-6 right-6 z-20 size-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-border hover:bg-muted transition-colors">
                  <X className="size-5" />
                </button>
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px] flex items-center justify-center bg-muted/20 border-b md:border-b-0 md:border-r border-border/50">
                  <motion.div layoutId={`avatar-${tutor.id}`} className="absolute inset-0 flex items-center justify-center bg-muted">
                    {tutor.image ? (
                        <Image src={tutor.image} alt={tutor.name} fill sizes="400px" className="object-cover" />
                    ) : (
                      <span className="text-6xl font-bold text-muted-foreground">{tutor.name.charAt(0)}</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                  </motion.div>
                </div>
                <div className="flex-1 p-8 md:p-12">
                  <motion.h3 layoutId={`name-${tutor.id}`} className="text-3xl font-black text-foreground mb-1 flex items-center gap-2 tracking-tight">
                    {tutor.name} <ShieldCheck className="size-6 text-primary" />
                  </motion.h3>
                  <motion.p layoutId={`subject-${tutor.id}`} className="text-xl font-bold text-primary mb-8">{tutor.subject} ({tutor.grade})</motion.p>

                  <motion.div layoutId={`stats-${tutor.id}`} className="flex items-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rating}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Rating</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.experience}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Exp</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rate}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Rate</div>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">Professional Biography</h4>
                      <p className="text-base text-card-foreground leading-relaxed">{tutor.bio}</p>
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                      <Button variant="outline" className="h-14 flex-1 rounded-2xl font-black border-2 border-border text-lg hover:bg-muted">Message</Button>
                      <button
                        onClick={() => router.push(`/tutor-profile/${tutor.id}`)}
                        className="flex-1 flex justify-end items-center font-bold text-primary hover:text-primary/80 transition-colors group text-lg"
                      >
                        Full Profile <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
