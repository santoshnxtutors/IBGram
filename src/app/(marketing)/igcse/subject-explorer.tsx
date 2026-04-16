"use client";

import { useMemo, useState } from "react";
import { BookOpen, ChevronRight, Hash, Search, X } from "lucide-react";
import { igcseSubjectGroups } from "./subject-directory";

function splitIntoColumns<T>(items: T[], columnCount: number) {
  return Array.from({ length: columnCount }, (_, columnIndex) =>
    items.filter((_, itemIndex) => itemIndex % columnCount === columnIndex)
  );
}

export function IGCSESubjectExplorer() {
  const [activeTitle, setActiveTitle] = useState(igcseSubjectGroups[0]?.title ?? "");
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredSubjects = useMemo(() => {
    if (!normalizedQuery) {
      return igcseSubjectGroups;
    }

    return igcseSubjectGroups.filter((subject) =>
      [subject.title, ...subject.entries].some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery]);

  const activeSubject = filteredSubjects.find((subject) => subject.title === activeTitle) ?? filteredSubjects[0] ?? null;
  const subjectColumns = splitIntoColumns(filteredSubjects, 3);

  return (
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(260px,0.58fr)_minmax(0,1.25fr)_minmax(320px,0.78fr)] 2xl:grid-cols-[280px_minmax(0,1.35fr)_360px]">
      <div className="rounded-[2rem] border border-border/50 bg-card/30 p-6 backdrop-blur-sm lg:p-7 xl:sticky xl:top-24 xl:self-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          <BookOpen className="size-3.5" />
          Cambridge IGCSE
        </div>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground">Subject Directories</h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Choose an IGCSE subject to view its available Cambridge syllabus codes in a simpler, easier-to-scan format.
        </p>

        <div className="mt-8 space-y-3">
          <div className="rounded-[1.4rem] border border-primary/15 bg-primary/10 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Current index</p>
            <p className="mt-2 text-2xl font-bold text-foreground">{filteredSubjects.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              visible subject{filteredSubjects.length !== 1 ? "s" : ""} in this Cambridge list.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-border/50 bg-background/35 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Quick use</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Search by subject title or syllabus code, then pick a row to inspect all related entries on the right.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border/50 bg-card/30 p-4 backdrop-blur-sm md:p-5">
        <div className="mb-5 border-b border-border/40 pb-4">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search subject or code"
              className="h-11 w-full rounded-2xl border border-border/60 bg-background/70 pl-11 pr-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/30"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </div>
        </div>

        <div className="max-h-[42rem] overflow-y-auto pr-1">
          {filteredSubjects.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
              {subjectColumns.map((column, columnIndex) => (
                <div key={`subject-column-${columnIndex}`} className="space-y-3">
                  {column.map((subject) => {
                    const isActive = subject.title === activeSubject?.title;

                    return (
                      <button
                        key={subject.title}
                        type="button"
                        onClick={() => setActiveTitle(subject.title)}
                        className={`w-full rounded-[1.35rem] border px-4 py-3 text-left transition-all ${
                          isActive
                            ? "border-primary/40 bg-primary text-primary-foreground shadow-[0_12px_35px_rgba(34,197,94,0.16)]"
                            : "border-border/50 bg-background/45 text-foreground hover:border-primary/20 hover:bg-background/70"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${isActive ? "bg-black/10" : "bg-primary/10 text-primary"}`}>
                            <BookOpen className="size-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 text-sm font-semibold leading-5">{subject.title}</p>
                            <p className={`mt-1 text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                              {subject.entries.length} code{subject.entries.length > 1 ? "s" : ""}
                            </p>
                          </div>
                          <ChevronRight className={`size-4 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-border/60 bg-background/30 px-5 py-12 text-center">
              <p className="text-base font-semibold text-foreground">No subjects found</p>
              <p className="mt-2 text-sm text-muted-foreground">Try searching by subject name or syllabus code.</p>
            </div>
          )}
        </div>
      </div>

      <div className="self-start rounded-[2rem] border border-border/50 bg-card/30 p-6 backdrop-blur-sm xl:sticky xl:top-24 xl:flex xl:max-h-[42rem] xl:flex-col xl:overflow-hidden">
        {activeSubject ? (
          <>
            <div className="shrink-0 border-b border-border/40 pb-5">
              <p className="text-2xl font-bold text-foreground">{activeSubject.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Selected Cambridge IGCSE syllabus entries for this subject area.
              </p>
            </div>

            <div className="mt-4 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Hash className="size-4" />
              {activeSubject.entries.length} available code{activeSubject.entries.length > 1 ? "s" : ""}
            </div>

            <div className="mt-6 space-y-2.5 xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-1">
              {activeSubject.entries.map((entry) => (
                <div
                  key={entry}
                  className="rounded-2xl border border-border/50 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/20 hover:bg-background/75"
                >
                  {entry}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-border/60 bg-background/30 px-5 py-12 text-center">
            <p className="text-base font-semibold text-foreground">Search to view subject details</p>
            <p className="mt-2 text-sm text-muted-foreground">Pick a matching subject from the filtered list to see its syllabus codes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

