"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Tutor } from "@/lib/tutor-data";
import { COUNTRIES, coversAllCountries, getCountryByCode } from "@/lib/countries";
import { TutorCard } from "@/components/tutors/TutorCard";
import { rememberReturnTo } from "@/lib/return-to";
import { buildTutorComparePath } from "@/lib/tutor-compare-url";
import { openTutorMessage } from "@/lib/tutor-message";

type AnyTutorId = string | number;
const sameId = (a: AnyTutorId | null | undefined, b: AnyTutorId | null | undefined) =>
  a !== null && a !== undefined && b !== null && b !== undefined && String(a) === String(b);

const INITIAL_VISIBLE_TUTORS = 8;

export default function TutorsClient({ tutors }: { tutors?: Tutor[] } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;
  // DB-first when the server page passed DB rows. An empty array is intentional:
  // it means the DB is reachable and no public tutors are currently published.
  const sourceTutors: Tutor[] = tutors ?? [];
  const [selectedId, setSelectedId] = useState<AnyTutorId | null>(null);
  const [queryText, setQueryText] = useState("");
  const [filteredTutors, setFilteredTutors] = useState<Tutor[]>(sourceTutors);
  const [compareIds, setCompareIds] = useState<AnyTutorId[]>([]);
  const [visibleTutorCount, setVisibleTutorCount] = useState(INITIAL_VISIBLE_TUTORS);

  /**
   * One lowercase haystack per tutor for the free-text box: name, subject, the places
   * they actually teach, and the countries they cover. Countries are stored as ISO
   * codes, so they are resolved to names here - nobody searches for "ae".
   *
   * Deliberately NOT indexed: `countryName`, which the DB mapper hardcodes to "India"
   * for every tutor (so searching India would return the London and Lagos ones too),
   * and `stateName`, which it hardcodes to "". Indexing either returns results that
   * are wrong rather than merely incomplete.
   */
  const searchIndex = useMemo(() => {
    const index = new Map<string, string>();
    for (const tutor of tutors ?? []) {
      const codes = tutor.countriesCovered ?? [];
      const countryNames = coversAllCountries(codes)
        ? COUNTRIES.map((country) => country.name)
        : codes.map((code) => getCountryByCode(code)?.name ?? code);
      index.set(
        String(tutor.id),
        [
          tutor.name,
          tutor.subject,
          tutor.grade,
          tutor.primaryCity,
          ...(tutor.availableCities ?? []),
          ...(tutor.availableAreas ?? []),
          ...countryNames,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase(),
      );
    }
    return index;
  }, [tutors]);

  const displayTutors = queryText.trim() ? filteredTutors : sourceTutors;
  const visibleTutors = displayTutors.slice(0, visibleTutorCount);

  const toggleCompare = (id: AnyTutorId) => {
    setCompareIds((prev) => {
      if (prev.some((item) => sameId(item, id))) return prev.filter((item) => !sameId(item, id));
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

  const handleSearch = (text = queryText) => {
    let result = sourceTutors;

    // Every word has to match somewhere, so "gurgaon physics" narrows instead of widening.
    const tokens = text.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length) {
      result = result.filter((tutor) => {
        const haystack = searchIndex.get(String(tutor.id)) ?? "";
        return tokens.every((token) => haystack.includes(token));
      });
    }

    setFilteredTutors(result);
    setVisibleTutorCount(INITIAL_VISIBLE_TUTORS);
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
    <div className="min-h-screen bg-background pt-8 pb-12 space-y-10">
      <section className="container mx-auto px-4 md:px-6">
        {/* The page-level <h1> lives in page.tsx; this is the search panel's own
            label, so the route keeps exactly one H1. */}
        <div className="mb-5 max-w-3xl">
          <h2 className="text-xl font-black tracking-tight text-foreground md:text-2xl">
            Search the tutor directory
          </h2>
          <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
            Search by tutor name, city, country or subject.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-20 flex w-full max-w-3xl flex-row items-center gap-2 rounded-full border border-border/40 bg-card/30 p-2 shadow-2xl backdrop-blur-3xl"
        >
          <div className="relative flex h-12 min-w-0 flex-1 items-center lg:h-14">
            <label className="flex h-full w-full items-center">
              <span className="sr-only">Search by tutor name, city, country or subject</span>
              <input
                type="search"
                value={queryText}
                onChange={(event) => {
                  setQueryText(event.target.value);
                  handleSearch(event.target.value);
                }}
                placeholder="Search by tutor name, city, country or subject"
                className="h-full w-full rounded-full border-none bg-transparent px-5 text-sm font-bold text-foreground outline-none placeholder:font-semibold placeholder:text-muted-foreground focus:ring-0 md:px-6 md:text-base"
              />
            </label>
          </div>

          <button
            onClick={() => handleSearch()}
            aria-label="Search tutors"
            className="group flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 lg:size-14"
          >
            <Search className="size-5 transition-transform group-hover:scale-110 lg:size-6" strokeWidth={2.5} />
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

        {displayTutors.length === 0 && (
          <div className="mb-10 rounded-2xl border border-border/50 bg-card/40 p-8 text-center">
            <p className="text-base font-bold text-foreground">No tutors match that search.</p>
            <p className="mx-auto mt-2 max-w-xl text-sm font-medium leading-6 text-muted-foreground">
              Online lessons run in any country, so try the country or a nearby city instead of an exact area,
              or clear the search to see every verified tutor.
            </p>
            <button
              type="button"
              onClick={() => {
                setQueryText("");
                handleSearch("");
              }}
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-6 text-sm font-black text-foreground transition hover:bg-muted"
            >
              Clear search
            </button>
          </div>
        )}

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
                  variant="directory"
                  selectedForCompare={compareIds.some((item) => sameId(item, tutor.id))}
                  onCompareToggle={toggleCompare}
                  onOpen={(tutor) => setSelectedId(tutor.id)}
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
      </section>

      <AnimatePresence>
        {compareIds.length > 0 && !selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="glassmorphism-heavy fixed bottom-6 left-1/2 z-[110] flex w-fit max-w-[90vw] -translate-x-1/2 items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-border p-2 pl-8 shadow-[0_12px_40px_rgba(19,37,74,0.16)]"
          >
            <div className="flex items-center gap-3 text-sm font-bold">
              <div className="flex -space-x-3">
                {compareIds.map((id, index) => {
                  const tutor = sourceTutors.find((item) => sameId(item.id, id));
                  return tutor ? (
                    <div
                      key={index}
                      className="relative flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted shadow-sm"
                    >
                      {tutor.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={tutor.image} alt={tutor.name} className="absolute inset-0 size-full object-cover" />
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
            {sourceTutors.filter((tutor) => sameId(tutor.id, selectedId)).map((tutor) => (
              <motion.div
                key="expanded"
                layoutId={`card-${tutor.id}`}
                className="glassmorphism-heavy relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden overflow-y-auto rounded-[2.5rem] border border-border bg-card shadow-3xl md:flex-row"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute right-6 top-6 z-20 flex size-10 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-md transition-colors hover:bg-muted"
                >
                  <X className="size-5" />
                </button>
                <div className="relative flex h-64 min-h-[300px] w-full items-center justify-center border-b border-border/50 bg-muted/20 md:h-auto md:w-1/2 md:border-b-0 md:border-r">
                  <motion.div layoutId={`avatar-${tutor.id}`} className="absolute inset-0 flex items-center justify-center bg-muted">
                    {tutor.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={tutor.image} alt={tutor.name} className="absolute inset-0 size-full object-cover object-top" />
                    ) : (
                      <span className="text-6xl font-bold text-muted-foreground">{tutor.name.charAt(0)}</span>
                    )}
                  </motion.div>
                </div>
                <div className="flex-1 p-8 md:p-10">
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
                      <div className="text-[11px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rating</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.experience}</div>
                      <div className="text-[11px] font-extrabold uppercase tracking-tighter text-muted-foreground">Exp</div>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <div className="text-2xl font-black">{tutor.rate}</div>
                      <div className="text-[11px] font-extrabold uppercase tracking-tighter text-muted-foreground">Rate</div>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Professional Biography
                      </h4>
                      <p className="text-base leading-relaxed text-card-foreground line-clamp-6">{tutor.bio}</p>
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
                          router.push(`/tutor-profile/${tutor.slug ?? tutor.id}`);
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
    </div>
  );
}
