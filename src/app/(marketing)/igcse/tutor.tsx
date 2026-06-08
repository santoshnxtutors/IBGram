"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { allTutors, type Tutor } from "@/lib/tutor-data";
import { TutorCard } from "@/components/tutors/TutorCard";
import { rememberReturnTo } from "@/lib/return-to";
import { buildTutorComparePath } from "@/lib/tutor-compare-url";
import { openTutorMessage } from "@/lib/tutor-message";

type AnyTutorId = string | number;
const sameId = (a: AnyTutorId | null | undefined, b: AnyTutorId | null | undefined) =>
  a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);

type IGCSETutorsProps = {
  tutors?: Tutor[];
};

export function IGCSETutors({ tutors }: IGCSETutorsProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [compareIds, setCompareIds] = useState<AnyTutorId[]>([]);
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const sourceTutors = tutors ?? allTutors;
  const igcseTutors = tutors ? tutors : sourceTutors.filter(t => t.curriculum === "IGCSE" || t.curriculum === "Both");

  const toggleCompare = (id: AnyTutorId) => {
    setCompareIds(prev => {
      if (prev.some((item) => sameId(item, id))) return prev.filter((item) => !sameId(item, id));
      if (prev.length < 2) return [...prev, id];
      return [prev[1], id]; // replace oldest
    });
  };

  const handleCompareRedirect = () => {
    if (compareIds.length === 2) {
      rememberReturnTo("tutor-compare", currentPath);
      router.push(buildTutorComparePath(compareIds));
    }
  };

  // Prevent scrolling when expanded view is open
  useEffect(() => {
    if (selectedTutor !== null) {
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
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedTutor]);

  if (igcseTutors.length === 0) return null;

  return (
    <section className="py-16 relative overflow-hidden bg-background border-t border-border/50" id="igcse-tutors">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Subject-aware <span className="text-primary">IGCSE</span> Tutors
            </h2>
            <p className="text-lg text-muted-foreground">
              Master the Cambridge and Pearson Edexcel syllabuses with tutors who have achieved exceptional results.
            </p>
          </div>
          <Link
            href="/tutors"
            className="shrink-0 flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
          >
            View All Tutors <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {igcseTutors.slice(0, 3).map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              selectedForCompare={compareIds.some((id) => sameId(id, tutor.id))}
              onCompareToggle={toggleCompare}
              onOpen={(tutor) => setSelectedTutor(tutor as Tutor)}
            />
          ))}
        </div>
      </div>
      {/* Floating Compare Action Bar */}
      <AnimatePresence>
        {compareIds.length > 0 && !selectedTutor && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-[2rem] glassmorphism-heavy border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-2 pl-8 flex items-center justify-between gap-6 overflow-hidden max-w-[90vw] w-fit"
          >
            <div className="text-sm font-bold flex items-center gap-3">
              <div className="flex -space-x-3">
                {compareIds.map((id, i) => {
                  const t = sourceTutors.find(t => sameId(t.id, id));
                  return t ? (
                    <div key={i} className="size-8 rounded-full border-2 border-background overflow-hidden relative shadow-sm flex items-center justify-center bg-muted">
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
              Compare
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

      {/* Expanded View */}
      {portalTarget
        ? createPortal(
            <AnimatePresence>
              {selectedTutor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTutor(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            {[selectedTutor].map(tutor => (
              <motion.div
                key="expanded"
                layoutId={`card-${tutor.id}`}
                className="relative w-full max-w-3xl bg-card border border-border rounded-[2.5rem] shadow-3xl overflow-hidden glassmorphism-heavy flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedTutor(null)}
                  className="absolute top-6 right-6 z-20 size-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-border hover:bg-muted transition-colors"
                >
                  <X className="size-5" />
                </button>

                {/* Profile Pic Side */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px] flex items-center justify-center bg-muted/20">
                  <motion.div layoutId={`avatar-${tutor.id}`} className="absolute inset-0 flex items-center justify-center bg-muted">
                    {tutor.image ? (
                        <Image
                          src={tutor.image}
                          alt={tutor.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover"
                        />
                    ) : (
                      <span className="text-6xl font-bold text-muted-foreground">
                        {tutor.name.charAt(0)}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 z-10 bg-card rounded-[2.5rem]">
                  <div className="mb-8">
                    <motion.h3 layoutId={`name-${tutor.id}`} className="text-3xl font-black text-foreground mb-1 flex items-center gap-2 tracking-tight">
                      {tutor.name} <ShieldCheck className="size-6 text-primary" />
                    </motion.h3>
                    <motion.p layoutId={`subject-${tutor.id}`} className="text-xl font-bold text-primary">
                      {tutor.subject} ({tutor.grade})
                    </motion.p>
                  </div>

                  <motion.div layoutId={`stats-${tutor.id}`} className="flex items-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rating}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Rating</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.reviews}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Reviews</div>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rate}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-muted-foreground font-extrabold">Price</div>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                        About Me
                      </h4>
                      <p className="text-base text-card-foreground leading-relaxed">
                        {tutor.bio}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tutor.tags.map(tag => (
                        <span key={tag} className={`text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-xl border border-current/20 ${tutor.accent}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => openTutorMessage(tutor)}
                        className="h-14 flex-1 rounded-2xl font-black border-2 border-border text-lg hover:bg-muted"
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
                          router.push(`/tutor-profile/${tutor.slug ?? tutor.id}`);
                        }}
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
            </AnimatePresence>,
            portalTarget,
          )
        : null}
    </section>
  );
}
