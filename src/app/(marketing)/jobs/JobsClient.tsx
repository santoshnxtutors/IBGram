"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, MapPin, Search } from "lucide-react";

export type PublicJob = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  level: string | null;
  workMode: string | null;
  summary: string | null;
  publishedAt: string;
};

function formatPosted(dateIso: string) {
  const posted = new Date(dateIso);
  const diffDays = Math.max(0, Math.floor((Date.now() - posted.getTime()) / 86_400_000));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  return posted.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function JobsClient({ jobs }: { jobs: PublicJob[] }) {
  const departments = useMemo(
    () => ["All Departments", ...Array.from(new Set(jobs.map((job) => job.department))).sort()],
    [jobs],
  );
  const [activeDept, setActiveDept] = useState("All Departments");
  const [query, setQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = activeDept === "All Departments" || job.department === activeDept;
    const text = `${job.title} ${job.department} ${job.location} ${job.employmentType} ${job.level ?? ""} ${
      job.summary ?? ""
    }`.toLowerCase();
    return matchesDept && text.includes(query.trim().toLowerCase());
  });

  return (
    <>
      <div className="mb-16 flex flex-col items-center justify-between gap-6 border-b border-border/50 pb-12 lg:flex-row">
        <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-2 lg:w-auto lg:pb-0">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setActiveDept(dept)}
              className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-bold transition-all ${
                activeDept === dept
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <label className="group relative w-full lg:w-80">
          <span className="sr-only">Search roles</span>
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles..."
            className="h-12 w-full rounded-xl border border-border bg-card pl-12 pr-6 text-sm font-semibold text-foreground outline-none transition-all focus:border-primary focus:ring-0"
          />
        </label>
      </div>

      <div className="flex flex-col">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group flex flex-col justify-between gap-8 border-b border-border/40 py-10 transition-all hover:px-4 md:flex-row md:items-center"
            >
              <div className="flex min-w-0 flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {job.department}
                  </span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    {formatPosted(job.publishedAt)}
                  </span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {job.title}
                </h2>
                {job.summary && (
                  <p className="max-w-3xl text-sm font-semibold leading-6 text-muted-foreground">{job.summary}</p>
                )}
                <div className="flex flex-wrap items-center gap-5 text-sm font-bold text-muted-foreground md:text-base">
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="size-4" /> {job.employmentType}
                  </span>
                  {(job.level || job.workMode) && (
                    <span className="flex items-center gap-2">
                      <Building2 className="size-4" /> {[job.level, job.workMode].filter(Boolean).join(" / ")}
                    </span>
                  )}
                </div>
              </div>

              <Link
                href={`/jobs/${job.slug}`}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-background px-8 text-sm font-black text-foreground transition-all hover:bg-muted"
              >
                View Role <ArrowRight className="size-4" />
              </Link>
            </motion.article>
          ))
        ) : (
          <div className="py-20 text-center">
            <Briefcase className="mx-auto mb-4 size-12 text-muted-foreground/20" />
            <h3 className="text-xl font-bold text-foreground">No roles matching your criteria</h3>
            <p className="mt-1 font-medium text-muted-foreground">Try another category or search term.</p>
          </div>
        )}
      </div>
    </>
  );
}
