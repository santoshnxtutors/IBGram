"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Clock,
  CheckCircle,
  X,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { allTutors } from "@/lib/tutor-data";

const IB_SUBJECTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "English",
  "Psychology",
  "History",
  "Business Management",
  "Theory of Knowledge",
];
const IB_GRADES = ["IB DP (Year 12-13)", "IB MYP (Year 7-11)", "IB PYP (Year 1-6)"];

const IGCSE_SUBJECTS = [
  "Mathematics (0580/4MA1)",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "English (First/Second)",
  "Business Studies",
  "Computer Science",
  "History",
  "Geography",
  "ICT",
];
const IGCSE_GRADES = ["IGCSE Grade 10 (Final)", "IGCSE Grade 9 (Foundation)"];
const INITIAL_VISIBLE_TUTORS = 8;

export default function TutorsPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [curriculumFilter, setCurriculumFilter] = useState<string>("Curriculum");
  const [subjectFilter, setSubjectFilter] = useState<string>("Subject");
  const [gradeFilter, setGradeFilter] = useState<string>("Grade");
  const [filteredTutors, setFilteredTutors] = useState(allTutors);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [visibleTutorCount, setVisibleTutorCount] = useState(INITIAL_VISIBLE_TUTORS);

  const displayTutors =
    curriculumFilter === "Curriculum" && subjectFilter === "Subject" && gradeFilter === "Grade"
      ? allTutors
      : filteredTutors;
  const visibleTutors = displayTutors.slice(0, visibleTutorCount);

  const toggleCompare = (id: number) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length < 2) return [...prev, id];
      return [prev[1], id];
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
      result = result.filter((tutor) => tutor.curriculum === curriculumFilter || tutor.curriculum === "Both");
    }

    if (subjectFilter !== "Subject") {
      result = result.filter((tutor) => tutor.subject.includes(subjectFilter) || subjectFilter.includes(tutor.subject));
    }

    if (gradeFilter !== "Grade") {
      result = result.filter((tutor) => tutor.grade.includes(gradeFilter) || gradeFilter.includes(tutor.grade));
    }

    setFilteredTutors(result);
    setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
  };

  useEffect(() => {
    setSubjectFilter("Subject");
    setGradeFilter("Grade");
    setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
    handleSearch();
  }, [curriculumFilter]);

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
      if (scrollY) window.scrollTo(0, parseInt(scrollY, 10) * -1);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 space-y-12">
      <section className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-black tracking-tight text-foreground md:text-6xl"
          >
            Find Your <span className="bg-300% text-gradient animate-gradient text-primary">Perfect Tutor</span>
          </motion.h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Search through the world&apos;s most elite IB &amp; IGCSE educators, vetted for excellence and academic results.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-20 mx-auto flex max-w-5xl items-center gap-2 rounded-2xl border border-border/40 bg-card/30 p-1.5 shadow-2xl backdrop-blur-3xl"
        >
          <div className="flex h-10 w-full flex-1 items-stretch sm:h-14">
            <div className="relative flex h-full flex-1 items-center justify-center border-r border-border/20">
              <Select value={curriculumFilter} onValueChange={(value) => value && setCurriculumFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-center rounded-none border-none bg-transparent px-1 text-[10px] font-black text-primary outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent sm:px-6 sm:text-base">
                  <SelectValue placeholder="Curriculum" />
                </SelectTrigger>
                <SelectContent className="min-w-[160px] rounded-2xl border-border bg-card/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <SelectItem value="Curriculum" className="rounded-xl text-center font-bold focus:bg-primary/10">
                    Curriculum
                  </SelectItem>
                  <SelectItem value="IB" className="rounded-xl text-center font-bold focus:bg-primary/10">
                    IB
                  </SelectItem>
                  <SelectItem value="IGCSE" className="rounded-xl text-center font-bold focus:bg-primary/10">
                    IGCSE
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex h-full flex-1 items-center justify-center border-r border-border/20">
              <Select value={subjectFilter} onValueChange={(value) => value && setSubjectFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-center rounded-none border-none bg-transparent px-1 text-center text-[10px] font-black text-foreground outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent sm:px-6 sm:text-base">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent className="min-w-[200px] rounded-2xl border-border bg-card/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <SelectItem value="Subject" className="rounded-xl font-bold focus:bg-primary/10">
                    Subject
                  </SelectItem>
                  {(curriculumFilter === "Curriculum"
                    ? Array.from(new Set([...IB_SUBJECTS, ...IGCSE_SUBJECTS]))
                    : curriculumFilter === "IB"
                      ? IB_SUBJECTS
                      : IGCSE_SUBJECTS
                  ).map((subject) => (
                    <SelectItem key={subject} value={subject} className="rounded-xl font-bold focus:bg-primary/10">
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex h-full flex-1 items-center justify-center">
              <Select value={gradeFilter} onValueChange={(value) => value && setGradeFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-center rounded-none border-none bg-transparent px-1 text-center text-[10px] font-black text-foreground outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent sm:px-6 sm:text-base">
                  <SelectValue placeholder="Grade" />
                </SelectTrigger>
                <SelectContent className="min-w-[200px] rounded-2xl border-border bg-card/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <SelectItem value="Grade" className="rounded-xl font-bold focus:bg-primary/10">
                    Grade
                  </SelectItem>
                  {(curriculumFilter === "Curriculum"
                    ? Array.from(new Set([...IB_GRADES, ...IGCSE_GRADES]))
                    : curriculumFilter === "IB"
                      ? IB_GRADES
                      : IGCSE_GRADES
                  ).map((grade) => (
                    <SelectItem key={grade} value={grade} className="rounded-xl font-bold focus:bg-primary/10">
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="hidden h-8 w-px self-center bg-border/20 sm:block" />
          <button
            onClick={handleSearch}
            className="group flex h-10 w-10 shrink-0 items-center justify-center bg-transparent text-primary transition-all sm:h-14 sm:w-14"
          >
            <Search className="size-4 transition-transform group-hover:scale-110 sm:size-6" strokeWidth={2.5} />
          </button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex items-center justify-between border-b border-border/50 pb-4">
          <h2 className="flex items-center gap-3 text-2xl font-black text-foreground">
            <SlidersHorizontal className="size-6 text-primary" />
            {displayTutors.length} Elite Educators Found
          </h2>
        </div>

        <motion.div layout className="flex flex-wrap gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleTutors.map((tutor) => (
              <motion.div
                layoutId={`card-${tutor.id}`}
                key={tutor.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={() => setSelectedId(tutor.id)}
                className="group w-full cursor-pointer sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-22px)] xl:w-[calc(25%-24px)]"
              >
                <Card className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/40 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
                    <span
                      className={`select-none text-[12px] font-extrabold tracking-wide transition-colors ${
                        compareIds.includes(tutor.id) ? "text-primary" : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      Compare
                    </span>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleCompare(tutor.id);
                      }}
                      className={`flex size-8 items-center justify-center rounded-full border-2 transition-colors ${
                        compareIds.includes(tutor.id)
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "border-border bg-background/80 text-transparent backdrop-blur-sm hover:border-primary/50 hover:text-primary/50"
                      }`}
                      title="Compare Tutor"
                    >
                      <Check className={`size-4 ${compareIds.includes(tutor.id) ? "text-current" : ""}`} strokeWidth={3} />
                    </button>
                  </div>

                  <CardContent className="flex-1 p-5 md:p-8">
                    <div className="mb-4 flex items-start justify-between md:mb-6">
                      <div className="flex items-center gap-3 md:gap-4">
                        <motion.div
                          layoutId={`avatar-${tutor.id}`}
                          className="relative size-14 shrink-0 overflow-hidden rounded-2xl bg-muted/80 shadow-lg ring-4 ring-background md:size-16"
                        >
                          {tutor.image ? (
                            <Image src={tutor.image} alt={tutor.name} fill sizes="64px" className="object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <span className="text-xl font-bold text-muted-foreground">{tutor.name.charAt(0)}</span>
                            </div>
                          )}
                          <div className="absolute bottom-0 right-0 z-10 size-3 rounded-full border-2 border-background bg-green-500 animate-pulse md:size-4" />
                        </motion.div>
                        <div>
                          <motion.h3
                            layoutId={`name-${tutor.id}`}
                            className="flex items-center gap-1 text-lg font-bold tracking-tight text-primary md:text-xl"
                          >
                            {tutor.name} <CheckCircle className="size-3.5 text-primary md:size-4" fill="currentColor" />
                          </motion.h3>
                          <motion.p layoutId={`subject-${tutor.id}`} className="text-xs font-semibold text-muted-foreground md:text-sm">
                            {tutor.subject}
                          </motion.p>
                        </div>
                      </div>
                    </div>

                    <motion.div layoutId={`stats-${tutor.id}`} className="mb-4 flex items-center gap-2 text-xs font-bold md:mb-6 md:gap-4 md:text-sm">
                      <span className="flex items-center gap-1 rounded-lg bg-secondary/10 px-2 py-0.5 text-foreground">
                        <Star className="size-3.5 fill-current text-secondary md:size-4" /> {tutor.rating}
                        <span className="text-[10px] font-medium text-muted-foreground md:text-xs">({tutor.reviews})</span>
                      </span>
                      <span className="text-muted-foreground/40">&middot;</span>
                      <span className="flex items-center gap-1 rounded-lg bg-primary/10 px-2 py-0.5 text-foreground">
                        <Clock className="size-3.5 text-primary md:size-4" /> {tutor.experience}
                      </span>
                    </motion.div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      <span className="rounded-lg border border-current/20 bg-primary/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-primary md:px-3 md:text-[10px]">
                        {tutor.curriculum}
                      </span>
                      {tutor.tags.slice(0, 1).map((tag: string) => (
                        <span
                          key={tag}
                          className={`rounded-lg border border-current/20 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider md:px-3 md:text-[10px] ${tutor.accent}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <div className="mt-auto flex justify-end">
                    <div className="flex items-center rounded-tl-[1.5rem] border-l border-t border-border/50 bg-muted/50 px-5 py-3 text-xs font-bold text-primary transition-colors group-hover:bg-primary/10 md:text-sm">
                      View Profile <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1 md:size-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {displayTutors.length > visibleTutorCount && (
          <div className="mt-2 flex justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVisibleTutorCount((previous) => Math.min(previous + INITIAL_VISIBLE_TUTORS, displayTutors.length));
              }}
              className="group flex items-center rounded-tl-[1.2rem] border-l border-t border-border/50 bg-muted/50 px-6 py-3 text-xs font-black text-primary transition-all hover:bg-primary/10 md:text-sm"
            >
              View More Tutors <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {displayTutors.length === 0 && (
          <div className="glassmorphism-heavy rounded-[3rem] border-2 border-dashed border-border/50 py-24 text-center">
            <h3 className="mb-4 text-3xl font-black text-muted-foreground">No tutors represent this search.</h3>
            <p className="mx-auto mb-8 max-w-md font-medium text-muted-foreground/60">
              Try broadening your subject choice or curriculum grade to find more elite educators.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setSubjectFilter("Subject");
                setGradeFilter("Grade");
                setFilteredTutors(allTutors);
                setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
              }}
              className="h-14 rounded-2xl border-2 px-8 font-bold"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      <AnimatePresence>
        {compareIds.length > 0 && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="glassmorphism-heavy fixed bottom-6 left-1/2 z-[110] flex w-fit max-w-[90vw] -translate-x-1/2 items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-white/10 p-2 pl-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 text-sm font-bold">
              <div className="flex -space-x-3">
                {compareIds.map((id, index) => {
                  const tutor = allTutors.find((item) => item.id === id);
                  return tutor ? (
                    <div
                      key={index}
                      className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted shadow-sm"
                    >
                      {tutor.image ? (
                        <Image src={tutor.image} alt={tutor.name} fill sizes="32px" className="object-cover" />
                      ) : (
                        <span className="text-xs font-bold text-muted-foreground">{tutor.name.charAt(0)}</span>
                      )}
                    </div>
                  ) : null;
                })}
              </div>

              {compareIds.length === 1 ? (
                <span className="hidden text-muted-foreground sm:block">Select 1 more to compare</span>
              ) : (
                <span className="text-foreground">2 Tutors Selected</span>
              )}
            </div>

            <Button
              disabled={compareIds.length < 2}
              onClick={(event) => {
                event.stopPropagation();
                handleCompareRedirect();
              }}
              className={`h-12 rounded-[1.5rem] px-6 font-bold shadow-lg transition-all ${
                compareIds.length === 2
                  ? "shimmer-btn bg-primary text-primary-foreground hover:scale-105 hover:shadow-primary/20"
                  : "border border-border bg-muted text-muted-foreground"
              }`}
            >
              <Sparkles className="mr-2 size-4" /> Compare
            </Button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                setCompareIds([]);
              }}
              className="mr-2 p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
            {allTutors.filter((tutor) => tutor.id === selectedId).map((tutor) => (
              <motion.div
                key="expanded"
                layoutId={`card-${tutor.id}`}
                className="glassmorphism-heavy relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden overflow-y-auto rounded-[2.5rem] border border-border bg-card shadow-3xl md:flex-row"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute right-6 top-6 z-20 flex size-10 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-md transition-colors hover:bg-muted"
                >
                  <X className="size-5" />
                </button>
                <div className="relative flex h-64 min-h-[300px] w-full items-center justify-center border-b border-border/50 bg-muted/20 md:h-auto md:w-2/5 md:border-b-0 md:border-r">
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
                  <motion.h3
                    layoutId={`name-${tutor.id}`}
                    className="mb-1 flex items-center gap-2 text-3xl font-black tracking-tight text-foreground"
                  >
                    {tutor.name} <ShieldCheck className="size-6 text-primary" />
                  </motion.h3>
                  <motion.p layoutId={`subject-${tutor.id}`} className="mb-8 text-xl font-bold text-primary">
                    {tutor.subject} ({tutor.grade})
                  </motion.p>

                  <motion.div layoutId={`stats-${tutor.id}`} className="mb-8 flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rating}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rating</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.experience}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Exp</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rate}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rate</div>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Professional Biography
                      </h4>
                      <p className="text-base leading-relaxed text-card-foreground">{tutor.bio}</p>
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                      <Button variant="outline" className="h-14 flex-1 rounded-2xl border-2 border-border text-lg font-black hover:bg-muted">
                        Message
                      </Button>
                      <button
                        onClick={() => router.push(`/tutor-profile/${tutor.id}`)}
                        className="group flex flex-1 items-center justify-end text-lg font-bold text-primary transition-colors hover:text-primary/80"
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
