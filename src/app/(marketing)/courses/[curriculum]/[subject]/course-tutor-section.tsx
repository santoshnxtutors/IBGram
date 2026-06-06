"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { TutorCard } from "@/components/tutors/TutorCard";
import type { Tutor } from "@/lib/tutor-data";
import { rememberReturnTo } from "@/lib/return-to";
import { buildTutorComparePath } from "@/lib/tutor-compare-url";
import { openTutorMessage } from "@/lib/tutor-message";
import { formatCourseSubject, getCourseTutorProfiles } from "./course-tutor-data";

type AnyTutorId = string | number;
const sameId = (a: AnyTutorId | null | undefined, b: AnyTutorId | null | undefined) =>
  a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);

interface CourseTutorSectionProps {
  curriculum: string;
  subjectSlug: string;
  tutors?: Tutor[];
}

export function CourseTutorSection({ curriculum, subjectSlug, tutors }: CourseTutorSectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
  const subjectTitle = formatCourseSubject(subjectSlug);
  const courseTutors = tutors?.length ? tutors : getCourseTutorProfiles(curriculum, subjectSlug);
  const [selectedId, setSelectedId] = useState<AnyTutorId | null>(null);
  const [compareIds, setCompareIds] = useState<AnyTutorId[]>([]);

  const activeTutor = courseTutors.find((tutor) => sameId(tutor.id, selectedId)) ?? null;

  const toggleCompare = (id: AnyTutorId) => {
    setCompareIds((prev) => {
      if (prev.some((entry) => sameId(entry, id))) return prev.filter((entry) => !sameId(entry, id));
      if (prev.length < 2) return [...prev, id];
      return [prev[1], id];
    });
  };

  const handleCompareRedirect = () => {
    if (compareIds.length === 2) {
      rememberReturnTo("tutor-compare", currentPath);
      router.push(buildTutorComparePath(compareIds));
    }
  };

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
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedId]);

  if (courseTutors.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Subject-aware <span className="text-primary">{subjectTitle}</span> Tutors
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn with verified tutors matched for {curriculum.toUpperCase()} {subjectTitle}, with strong exam support,
              fast feedback, and structured preparation.
            </p>
          </div>
          <Link
            href="/tutors"
            className="group flex shrink-0 items-center text-sm font-bold text-primary transition-colors hover:text-primary/80"
          >
            View All Tutors <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseTutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              selectedForCompare={compareIds.some((id) => sameId(id, tutor.id))}
              onCompareToggle={toggleCompare}
              onOpen={setSelectedId}
              layoutNamespace={`${curriculum}-${subjectSlug}`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {compareIds.length > 0 && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="glassmorphism-heavy fixed bottom-6 left-1/2 z-50 flex w-fit max-w-[90vw] -translate-x-1/2 items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-white/10 p-2 pl-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 text-sm font-bold">
              <div className="flex -space-x-3">
                {compareIds.map((id, index) => {
                  const tutor = courseTutors.find((entry) => sameId(entry.id, id));
                  return tutor ? (
                    <div
                      key={`${id}-${index}`}
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
              className={`h-12 rounded-[1.5rem] px-6 font-bold transition-all ${
                compareIds.length === 2
                  ? "shimmer-btn bg-primary text-primary-foreground hover:scale-105 hover:shadow-primary/20"
                  : "border border-border bg-muted text-muted-foreground"
              }`}
            >
              Compare
            </Button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                setCompareIds([]);
              }}
              className="mr-2 p-2 text-muted-foreground transition-colors hover:text-foreground"
              type="button"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTutor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              key="expanded"
              layoutId={`card-${curriculum}-${subjectSlug}-${activeTutor.id}`}
              className="glassmorphism-heavy relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-[2.5rem] border border-border bg-card shadow-3xl md:flex-row"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-6 top-6 z-20 flex size-10 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-md transition-colors hover:bg-muted"
                type="button"
              >
                <X className="size-5" />
              </button>

              <div className="relative flex h-64 min-h-[300px] w-full items-center justify-center bg-muted/20 md:h-auto md:w-2/5">
                <motion.div
                  layoutId={`avatar-${curriculum}-${subjectSlug}-${activeTutor.id}`}
                  className="absolute inset-0 flex items-center justify-center bg-muted"
                >
                  {activeTutor.image ? (
                    <Image
                      src={activeTutor.image}
                      alt={activeTutor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-6xl font-bold text-muted-foreground">{activeTutor.name.charAt(0)}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                </motion.div>
              </div>

              <div className="z-10 flex-1 rounded-[2.5rem] bg-card p-8 md:p-12">
                <div className="mb-8">
                  <motion.h3
                    layoutId={`name-${curriculum}-${subjectSlug}-${activeTutor.id}`}
                    className="mb-1 flex items-center gap-2 text-3xl font-black tracking-tight text-foreground"
                  >
                    {activeTutor.name} <ShieldCheck className="size-6 text-primary" />
                  </motion.h3>
                  <motion.p
                    layoutId={`subject-${curriculum}-${subjectSlug}-${activeTutor.id}`}
                    className="text-xl font-bold text-primary"
                  >
                    {activeTutor.subject} ({activeTutor.grade})
                  </motion.p>
                </div>

                <motion.div
                  layoutId={`stats-${curriculum}-${subjectSlug}-${activeTutor.id}`}
                  className="mb-8 flex items-center gap-6"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black">{activeTutor.rating}</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rating</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-black">{activeTutor.reviews}</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Reviews</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-black">{activeTutor.rate}</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Price</div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                      About Me
                    </h4>
                    <p className="text-base leading-relaxed text-card-foreground">{activeTutor.bio}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeTutor.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-xl border border-current/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${activeTutor.accent}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => openTutorMessage(activeTutor)}
                      className="h-14 flex-1 rounded-2xl border-2 border-border text-lg font-black hover:bg-muted"
                    >
                      Message
                    </Button>
                    <button
                      onClick={() => {
                        document.body.style.overflow = "unset";
                        document.body.style.position = "";
                        document.body.style.width = "";
                        document.body.style.top = "";
                        rememberReturnTo("tutor-profile", currentPath);
                        router.push(`/tutor-profile/${activeTutor.id}`);
                      }}
                      className="group flex flex-1 items-center justify-end text-lg font-bold text-primary transition-colors hover:text-primary/80"
                      type="button"
                    >
                      Full Profile <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

