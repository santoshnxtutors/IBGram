"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, GraduationCap, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const mentors = [
  {
    name: "Jyoti Singh",
    role: "Student Success & Mentorship Specialist",
    focus: "Student journey, parent communication and application coordination",
    regions: ["US", "UK", "Canada", "Europe"],
    image: "/Admission/jyotisingh.jpeg",
    short:
      "Supports students and families through the study-abroad journey with steady communication and clear next steps.",
    details:
      "Jyoti works closely with students, parents, mentors and internal teams to keep the admissions journey organised. Her support focuses on understanding student goals, resolving queries, tracking next steps and making the process easier for families to follow.",
    bullets: [
      "Student journey coordination",
      "Parent and student communication",
      "Milestone and query tracking",
      "Consultation follow-through",
    ],
    bestFit: "Families who want a clear admissions workflow and regular coordination.",
  },
  {
    name: "Aditi Sahoo",
    role: "Admissions Operations Expert",
    focus: "Documentation, submissions, offer tracking and university coordination",
    regions: ["UK", "USA", "Australia", "Hong Kong", "Europe"],
    image: "/Admission/aditi.jpeg",
    short:
      "Helps families keep documents, deadlines, university requirements and submission steps organised.",
    details:
      "Aditi brings operational depth across multiple admissions systems. Her work centres on document accuracy, application processing, timely submissions, offer tracking and practical coordination between students, families and universities.",
    bullets: [
      "Document checklist planning",
      "Application processing support",
      "Offer and query tracking",
      "Deadline-focused coordination",
    ],
    bestFit: "Students juggling multiple applications, documents and country-specific requirements.",
  },
  {
    name: "Akanksha Sridhara",
    role: "Senior Admissions Consultant",
    focus: "Research-led profile building and selective university strategy",
    regions: ["US", "UK", "Europe"],
    image: "/Admission/akanksha.jpeg",
    short:
      "Works on academic positioning, profile depth and application narratives for selective pathways.",
    details:
      "Akanksha focuses on research-driven profile building, intellectual identity and admissions strategy. She helps students understand how academic depth, exploration, writing and application choices can work together across selective pathways.",
    bullets: [
      "Research-led profile building",
      "Academic narrative development",
      "Selective pathway planning",
      "Scholarship-aware application strategy",
    ],
    bestFit: "Students who need deeper profile positioning and writing strategy.",
  },
  {
    name: "Manik Kubba",
    role: "Study Abroad And Career Counselling Leader",
    focus: "Shortlisting, scholarships, partnerships and long-term planning",
    regions: ["Global", "Canada", "Singapore", "UK"],
    image: "/Admission/manik.jpeg",
    short:
      "Brings broad study-abroad perspective across admissions planning, scholarships and career-linked decisions.",
    details:
      "Manik has worked across study-abroad counselling, admissions strategy, scholarships, partnerships, profile building, university shortlisting and career guidance. His perspective is useful for families comparing countries, costs, programme fit and long-term outcomes.",
    bullets: [
      "University shortlisting",
      "Scholarship and financial planning",
      "Country and programme comparison",
      "Career-linked admissions planning",
    ],
    bestFit: "Families comparing multiple countries, costs, scholarships and programme routes.",
  },
];

export function MentorsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeMentor, setActiveMentor] = useState<(typeof mentors)[number] | null>(null);

  useEffect(() => {
    if (!activeMentor) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMentor(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeMentor]);

  const scroll = (direction: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section id="admissions-mentors" className="border-b border-border/30 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Our Mentors</p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Advisors Built For Global Admissions
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Strategy, operations, profile building, documentation and final submission support from specialists who understand international admissions.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous mentor"
              onClick={() => scroll("left")}
              className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-primary/50"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next mentor"
              onClick={() => scroll("right")}
              className="flex size-11 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-colors hover:border-primary/50"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {mentors.map((mentor) => (
            <article
              key={mentor.name}
              className="flex min-w-0 flex-[0_0_calc(100vw-2rem)] snap-start flex-col overflow-hidden rounded-[1.5rem] border border-border/50 bg-card shadow-xl shadow-black/10 sm:flex-[0_0_360px]"
            >
              <div className="relative h-72 bg-muted sm:h-80">
                <Image src={mentor.image} alt={mentor.name} fill sizes="360px" className="object-cover object-[center_25%]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{mentor.role}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{mentor.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-5">
                <p className="text-sm font-semibold leading-6 text-white/80">{mentor.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.regions.slice(0, 4).map((region) => (
                    <span key={region} className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary">
                      {region}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{mentor.short}</p>
                <button
                  type="button"
                  onClick={() => setActiveMentor(mentor)}
                  className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <GraduationCap className="size-4" />
                  View profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeMentor && (
        <div
          className="fixed inset-0 z-[210] flex items-stretch justify-center bg-black/70 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-4 sm:py-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeMentor.name} mentor profile`}
        >
          <div className="flex h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-[1.75rem]">
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border/60 p-4 sm:gap-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase leading-4 tracking-[0.22em] text-primary sm:text-xs">{activeMentor.role}</p>
                <h3 className="mt-1 text-xl font-black tracking-tight text-foreground sm:text-2xl">{activeMentor.name}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{activeMentor.focus}</p>
              </div>
              <button
                type="button"
                aria-label="Close mentor profile"
                onClick={() => setActiveMentor(null)}
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:size-10"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="grid min-h-0 flex-1 gap-4 overflow-y-auto p-4 sm:gap-6 sm:p-5 md:grid-cols-[220px_1fr]">
              <div className="relative h-[min(62dvh,440px)] shrink-0 overflow-hidden rounded-2xl bg-muted sm:aspect-[4/5] sm:h-auto">
                <Image src={activeMentor.image} alt={activeMentor.name} fill sizes="(min-width: 768px) 220px, 100vw" className="object-cover object-top" />
              </div>
              <div>
                <p className="text-sm leading-7 text-muted-foreground">{activeMentor.details}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeMentor.regions.map((region) => (
                    <span key={region} className="inline-flex items-center gap-1.5 rounded-full border border-border/50 px-3 py-1.5 text-xs font-bold text-foreground/80">
                      <MapPin className="size-3 text-primary" />
                      {region}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-3">
                  {activeMentor.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold text-foreground">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-2xl border border-border/50 bg-background/40 px-4 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Best fit for</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{activeMentor.bestFit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
