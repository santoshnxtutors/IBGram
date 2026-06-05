"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const collaborationHighlights = [
  "Ivy League mentoring perspective through Cornell, USA experience.",
  "1:1 profile-building conversations for students planning global applications.",
  "Scholarship-aware planning across university, course and country choices.",
  "Career and university guidance for families comparing long-term pathways.",
];

const collaborationScope = [
  "Personalised profile building",
  "Tailored scholarship planning",
  "University and career guidance",
  "Application-readiness discussion",
];

const collaborationSignals = [
  "10+ years of mentoring experience",
  "Counselling built across 50+ high schools",
  "Student guidance across India, the Middle East and wider global pathways",
  "Admit exposure across NUS, NTU, Cornell, Stanford, UPenn, Columbia and more",
];

export function AdmissionsPartnership() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section className="border-b border-border/30 px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group mx-auto grid w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-border/50 bg-card text-left shadow-2xl shadow-black/10 transition-all hover:-translate-y-1 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:grid-cols-[240px_1fr] lg:grid-cols-[320px_1fr]"
        >
          <div className="flex h-[210px] items-center justify-center overflow-hidden bg-[#0d1118] min-[390px]:h-[230px] sm:h-[260px]">
            <Image
              src="/Admission/ethiosprofile.png"
              alt="Saurabh Taluja"
              width={1122}
              height={1402}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="h-full w-full object-cover object-[50%_22%]"
            />
          </div>

          <div className="flex min-h-full flex-col justify-center p-5 sm:p-7">
            <div className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              Partnership
            </div>
            <h3 className="mt-4 text-xl font-black tracking-tight text-foreground sm:text-3xl">
              Partnership with Ethos Education
            </h3>
            <p className="mt-2 hidden text-sm leading-7 text-muted-foreground sm:block sm:text-base">
              Open the collaboration profile for the Ethos 1:1 Ivy Mentor Session with Saurabh Taluja.
            </p>
            <div className="pt-5">
              <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 text-xs font-black uppercase tracking-[0.16em] text-primary transition-colors group-hover:bg-primary/10">
                View collaboration
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[210] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:px-4 sm:py-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ethos Education partnership profile"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden border border-border/70 bg-card shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-[1.75rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border/60 p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Partnership with Ethos Education</p>
                <h3 className="mt-1 text-2xl font-black tracking-tight text-foreground">Ethos 1:1 Ivy Mentor Session</h3>
              </div>
              <button
                type="button"
                aria-label="Close partnership profile"
                onClick={() => setOpen(false)}
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 gap-0 overflow-y-auto lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-[#0d1118] p-4 sm:p-5 lg:p-6">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-2xl bg-[#1f1f1f] shadow-2xl shadow-black/20 lg:max-w-none">
                <Image
                  src="/Admission/ethos.jpeg"
                  alt="Ethos Education collaboration"
                  width={1080}
                  height={1350}
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="h-full w-full object-cover object-center"
                />
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {collaborationHighlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-border/50 bg-background/40 px-4 py-4 text-sm leading-6 text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">How the collaboration helps</p>
                  <ul className="mt-4 grid gap-3">
                    {collaborationScope.map((item) => (
                      <li key={item} className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-border/50 bg-background/40 px-5 py-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Collaboration context</p>
                  <div className="mt-4 grid gap-3">
                    {collaborationSignals.map((item) => (
                      <p key={item} className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-6 text-muted-foreground">
                    Mentor availability, admissions outcomes and scholarship results depend on student profile, timelines, university requirements and application quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
