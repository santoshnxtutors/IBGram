"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, CheckCircle, X, ShieldCheck, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { allTutors } from "@/lib/tutor-data";

export function TutorDiscovery() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);
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
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedId]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Learn from the <span className="text-primary">Top 1%</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Rigorous vetting. Proven results. Connect with tutors who have mastered the exact syllabus your school follows.
            </p>
          </div>
          <Button
            onClick={() => router.push("/tutors")}
            variant="outline"
            size="lg"
            className="shrink-0 h-12 px-6 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            View All Tutors
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTutors.slice(0, 3).map((tutor) => (
            <motion.div
              layoutId={`card-${tutor.id}`}
              key={tutor.id}
              onClick={() => setSelectedId(tutor.id)}
              className="cursor-pointer h-full"
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
                        className="size-14 md:size-16 rounded-2xl bg-muted flex items-center justify-center relative overflow-hidden ring-4 ring-background shadow-lg"
                      >
                        <Image
                          src={tutor.image}
                          alt={tutor.name}
                          fill
                          sizes="(max-width: 768px) 56px, 64px"
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 right-0 size-3 md:size-4 bg-green-500 border-2 border-background rounded-full animate-pulse z-10" />
                      </motion.div>
                      <div>
                        <motion.h3 layoutId={`name-${tutor.id}`} className="font-bold text-lg md:text-xl flex items-center gap-1 group-hover:text-primary transition-colors tracking-tight">
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
                    {tutor.tags.slice(0, 2).map(tag => (
                      <motion.span
                        key={tag}
                        className={`text-[9px] md:text-[10px] uppercase tracking-wider font-extrabold px-2.5 md:px-3 py-1 rounded-lg border border-current/20 ${tutor.accent}`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-5 md:p-8 pt-0 mt-auto">
                  <Button className="w-full rounded-2xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all h-12 md:h-14 font-black shadow-xl shimmer-btn pointer-events-none tracking-tight">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Compare Action Bar */}
      <AnimatePresence>
        {compareIds.length > 0 && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-[2rem] glassmorphism-heavy border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-2 pl-8 flex items-center justify-between gap-6 overflow-hidden max-w-[90vw] w-fit"
          >
            <div className="text-sm font-bold flex items-center gap-3">
              <div className="flex -space-x-3">
                {compareIds.map((id, i) => {
                  const t = allTutors.find(t => t.id === id);
                  return t ? (
                    <div key={i} className="size-8 rounded-full border-2 border-background overflow-hidden relative shadow-sm">
                      <Image src={t.image} alt={t.name} fill sizes="32px" className="object-cover" />
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

      {/* Expanded View */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            {allTutors.filter(t => t.id === selectedId).map(tutor => (
              <motion.div
                key="expanded"
                layoutId={`card-${tutor.id}`}
                className="relative w-full max-w-3xl bg-card border border-border rounded-[2.5rem] shadow-3xl overflow-hidden glassmorphism-heavy flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-20 size-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-border hover:bg-muted transition-colors"
                >
                  <X className="size-5" />
                </button>

                {/* Profile Pic Side */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px]">
                  <motion.div layoutId={`avatar-${tutor.id}`} className="absolute inset-0">
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12">
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

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <Button
                        onClick={() => router.push(`/tutor-profile/${tutor.id}`)}
                        className="h-14 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-xl shadow-primary/20 shimmer-btn"
                      >
                        Full Profile
                      </Button>
                      <Button variant="outline" className="h-14 rounded-2xl font-black border-2 border-border text-lg hover:bg-muted">
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

