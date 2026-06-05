"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TutorMatchResult, TutorPageContext } from "@/lib/tutors/tutor-location-matching";
import { TutorCard } from "@/components/tutors/TutorCard";
import { rememberReturnTo } from "@/lib/return-to";
import { buildTutorComparePath } from "@/lib/tutor-compare-url";
import { openTutorMessage } from "@/lib/tutor-message";

type AnyTutorId = string | number;
const sameId = (a: AnyTutorId | null | undefined, b: AnyTutorId | null | undefined) =>
  a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);

type TutorAvailabilitySectionProps = {
  title: string;
  description: string;
  result: TutorMatchResult;
  context: TutorPageContext;
  emptyTitle?: string;
  tinted?: boolean;
};

export function TutorAvailabilitySection({
  title,
  description,
  result,
  emptyTitle = "No exact home-tutor match is currently shown for this locality.",
  tinted = false,
}: TutorAvailabilitySectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
  const tutors = result.tutors.slice(0, 3);
  const [selectedId, setSelectedId] = useState<AnyTutorId | null>(null);
  const [compareIds, setCompareIds] = useState<AnyTutorId[]>([]);

  const toggleCompare = (id: AnyTutorId) => {
    setCompareIds((previous) => {
      if (previous.some((item) => sameId(item, id))) return previous.filter((item) => !sameId(item, id));
      if (previous.length < 2) return [...previous, id];
      return [previous[1], id];
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
    <section className={`${tinted ? "bg-[#0B0F19]/35" : "bg-background"} relative overflow-hidden py-16`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          <Link href="/tutors" className="group flex shrink-0 items-center text-sm font-bold text-primary transition-colors hover:text-primary/80">
            View All Tutors <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {tutors.length ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                tutor={tutor}
                selectedForCompare={compareIds.some((id) => sameId(id, tutor.id))}
                onCompareToggle={toggleCompare}
                onOpen={setSelectedId}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-border/70 bg-background/60 p-8">
            <h3 className="text-2xl font-black tracking-tight text-foreground">{emptyTitle}</h3>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-muted-foreground">
              Share your requirement and IB Gram can check availability for home, online or hybrid support. Availability depends on subject, schedule, location and tutor confirmation.
            </p>
            <Link href="/contact-us/" className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground">
              Request a tutor match
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        )}
      </div>

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
                {compareIds.map((id) => {
                  const tutor = tutors.find((item) => sameId(item.id, id));
                  return tutor ? (
                    <div key={id} className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted shadow-sm">
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
              Compare
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

            {tutors.filter((tutor) => sameId(tutor.id, selectedId)).map((tutor) => (
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
                  <motion.h3 layoutId={`name-${tutor.id}`} className="mb-1 flex items-center gap-2 text-3xl font-black tracking-tight text-foreground">
                    {tutor.name} <ShieldCheck className="size-6 text-primary" />
                  </motion.h3>
                  <motion.p layoutId={`subject-${tutor.id}`} className="mb-8 text-xl font-bold text-primary">
                    {tutor.subject} ({tutor.grade})
                  </motion.p>

                  <div className="mb-8 flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rating}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rating</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.reviews}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Reviews</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rate}</div>
                      <div className="text-[10px] font-extrabold uppercase tracking-tighter text-muted-foreground">Price</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        About Me
                      </h4>
                      <p className="text-base leading-relaxed text-card-foreground">{tutor.bio}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tutor.tags.map((tag) => (
                        <span key={tag} className={`rounded-xl border border-current/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${tutor.accent}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => openTutorMessage(tutor)}
                        className="h-14 flex-1 rounded-2xl border-2 border-border text-lg font-black hover:bg-muted"
                      >
                        Message
                      </Button>
                      <button
                        onClick={() => {
                          rememberReturnTo("tutor-profile", currentPath);
                          router.push(`/tutor-profile/${tutor.id}`);
                        }}
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
    </section>
  );
}
