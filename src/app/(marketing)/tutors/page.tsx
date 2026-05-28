"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { allTutors } from "@/lib/tutor-data";
import { TutorCard } from "@/components/tutors/TutorCard";

const IB_SUBJECTS = [
  "IB Mathematics",
  "IB Physics",
  "IB Chemistry",
  "IB Biology",
  "IB Economics",
  "IB English",
  "IB Psychology",
  "IB History",
  "IB Business Management",
  "IB Theory of Knowledge",
];
const IB_GRADES = ["IB DP (Year 12-13)", "IB MYP (Year 7-11)", "IB PYP (Year 1-6)"];

const IGCSE_SUBJECTS = [
  "IGCSE Mathematics",
  "IGCSE Physics",
  "IGCSE Chemistry",
  "IGCSE Biology",
  "IGCSE Economics",
  "IGCSE English",
  "IGCSE Business Studies",
  "IGCSE Computer Science",
  "IGCSE History",
  "IGCSE Geography",
  "IGCSE ICT",
];
const IGCSE_GRADES = ["IGCSE Grade 10 (Final)", "IGCSE Grade 9 (Foundation)"];
const INITIAL_VISIBLE_TUTORS = 8;

export default function TutorsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
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
      router.push(`/tutor-compare?ids=${compareIds.join(",")}&returnTo=${encodeURIComponent(currentPath)}`);
    }
  };

  const handleSearch = (curr = curriculumFilter, subj = subjectFilter, grd = gradeFilter) => {
    let result = allTutors;

    if (curr !== "Curriculum") {
      result = result.filter((tutor) => tutor.curriculum === curr || tutor.curriculum === "Both");
    }

    if (subj !== "Subject") {
      const baseFilter = subj.replace("IB ", "").replace("IGCSE ", "").split(" (")[0];
      result = result.filter((tutor) => tutor.subject.includes(baseFilter) || baseFilter.includes(tutor.subject));
    }

    if (grd !== "Grade") {
      result = result.filter((tutor) => tutor.grade.includes(grd) || grd.includes(tutor.grade));
    }

    setFilteredTutors(result);
    setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
  };

  useEffect(() => {
    setSubjectFilter("Subject");
    setGradeFilter("Grade");
    setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
    handleSearch(curriculumFilter, "Subject", "Grade");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            Search IB and IGCSE tutors by subject, curriculum, level and preferred learning mode.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-20 mx-auto flex w-full max-w-5xl flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-2 rounded-[2rem] lg:rounded-full border border-border/40 bg-card/30 p-3 lg:p-2 shadow-2xl backdrop-blur-3xl"
        >
          <div className="flex w-full flex-col md:flex-row flex-1 items-stretch gap-3 md:gap-0 lg:h-14">
            <div className="relative flex h-12 lg:h-full flex-1 items-center justify-center rounded-2xl md:rounded-none bg-background/50 md:bg-transparent md:border-r border-border/20">
              <Select value={curriculumFilter} onValueChange={(value) => value && setCurriculumFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-between md:justify-center rounded-2xl md:rounded-none border-none bg-transparent px-5 text-sm font-black text-primary outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent md:px-6 md:text-base">
                  <SelectValue placeholder="Curriculum" />
                </SelectTrigger>
                <SelectContent className="min-w-[160px] rounded-2xl border-border bg-card/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <SelectItem value="Curriculum" className="rounded-xl text-center md:text-left font-bold focus:bg-primary/10">
                    Curriculum
                  </SelectItem>
                  <SelectItem value="IB" className="rounded-xl text-center md:text-left font-bold focus:bg-primary/10">
                    IB
                  </SelectItem>
                  <SelectItem value="IGCSE" className="rounded-xl text-center md:text-left font-bold focus:bg-primary/10">
                    IGCSE
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex h-12 lg:h-full flex-1 items-center justify-center rounded-2xl md:rounded-none bg-background/50 md:bg-transparent md:border-r border-border/20">
              <Select value={subjectFilter} onValueChange={(value) => value && setSubjectFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-between md:justify-center rounded-2xl md:rounded-none border-none bg-transparent px-5 text-sm font-black text-foreground outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent md:px-6 md:text-base">
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

            <div className="relative flex h-12 lg:h-full flex-1 items-center justify-center rounded-2xl md:rounded-none bg-background/50 md:bg-transparent">
              <Select value={gradeFilter} onValueChange={(value) => value && setGradeFilter(value)}>
                <SelectTrigger className="flex h-full w-full items-center justify-between md:justify-center rounded-2xl md:rounded-none border-none bg-transparent px-5 text-sm font-black text-foreground outline-none focus:ring-0 focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent md:px-6 md:text-base">
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

          <div className="hidden h-8 w-px self-center bg-border/20 lg:block" />
          <button
            onClick={() => handleSearch()}
            className="group flex h-12 w-full lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-2xl lg:rounded-full bg-primary/10 lg:bg-transparent text-primary transition-all hover:bg-primary/20 lg:hover:bg-transparent"
          >
            <Search className="size-5 transition-transform group-hover:scale-110 lg:size-6" strokeWidth={2.5} />
            <span className="ml-2 font-bold text-sm lg:hidden">Search</span>
          </button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex items-center justify-between border-b border-border/50 pb-4">
          <h2 className="flex items-center gap-3 text-2xl font-black text-foreground">
            <SlidersHorizontal className="size-6 text-primary" />
            {displayTutors.length} Tutor Options Found
          </h2>
        </div>

        <motion.div layout className="flex flex-wrap gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleTutors.map((tutor) => (
              <motion.div
                key={tutor.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-22px)] xl:w-[calc(25%-24px)]"
              >
                <TutorCard
                  tutor={tutor}
                  selectedForCompare={compareIds.includes(tutor.id)}
                  onCompareToggle={toggleCompare}
                  onOpen={setSelectedId}
                />
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
              Try broadening your subject choice or curriculum grade to find more suitable tutor options.
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
                        onClick={() => router.push(`/tutor-profile/${tutor.id}?returnTo=${encodeURIComponent(currentPath)}`)}
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
