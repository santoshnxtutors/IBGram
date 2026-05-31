"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle, Clock, Home, MapPin, Monitor, Star } from "lucide-react";
export type TutorCardProfile = {
  id: number | string;
  slug?: string;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  image: string;
  tags: string[];
  accent: string;
  curriculum?: "IB" | "IGCSE" | "Both";
  curriculums?: Array<"IB" | "IGCSE">;
  subjectLevels?: string[];
  primaryCity?: string;
  availableAreas?: string[];
  homeTutoringAvailable?: boolean;
  onlineTutoringAvailable?: boolean;
  hybridTutoringAvailable?: boolean;
};

type TutorCardProps = {
  tutor: TutorCardProfile;
  selectedForCompare: boolean;
  onCompareToggle: (id: number | string) => void;
  onOpen: (id: number | string) => void;
  layoutNamespace?: string;
  ctaLabel?: string;
  className?: string;
};

function formatRating(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function getCurriculumLine(tutor: TutorCardProfile) {
  const curriculum = tutor.curriculums?.length ? tutor.curriculums.join(" + ") : tutor.curriculum;
  const levels = tutor.subjectLevels?.slice(0, 2).join(", ");
  return [curriculum, levels].filter(Boolean).join(" | ");
}

function getModeLine(tutor: TutorCardProfile) {
  const modes = [
    tutor.homeTutoringAvailable ? "Home" : null,
    tutor.onlineTutoringAvailable ? "Online" : null,
    tutor.hybridTutoringAvailable ? "Hybrid" : null,
  ].filter(Boolean);
  return modes.length ? `${modes.join(" / ")} availability reviewed` : "Online availability reviewed";
}

function getLocationLine(tutor: TutorCardProfile) {
  if (!tutor.primaryCity) return "Availability reviewed by location";
  return `${tutor.primaryCity}${tutor.availableAreas?.length ? `, ${tutor.availableAreas[0]}` : ""}`;
}

export function TutorCard({
  tutor,
  selectedForCompare,
  onCompareToggle,
  onOpen,
  layoutNamespace,
  ctaLabel = "Check availability",
  className = "",
}: TutorCardProps) {
  const scopedId = layoutNamespace ? `${layoutNamespace}-${tutor.id}` : `${tutor.id}`;
  const curriculumLine = getCurriculumLine(tutor);

  return (
    <motion.div
      layoutId={`card-${scopedId}`}
      onClick={() => onOpen(tutor.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(tutor.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View profile for ${tutor.name}`}
      className={`group h-full cursor-pointer rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${className}`}
    >
      <article className="relative flex min-h-[330px] h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111820]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-[#121b24] hover:shadow-2xl hover:shadow-primary/10">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute right-6 top-7 z-20 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onCompareToggle(tutor.id);
            }}
            aria-pressed={selectedForCompare}
            aria-label={`Compare ${tutor.name}`}
            title="Compare Tutor"
            className={`flex size-9 items-center justify-center rounded-full border-2 transition-colors ${
              selectedForCompare
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-white/15 bg-[#0d131b] text-transparent hover:border-primary/60 hover:text-primary"
            }`}
          >
            <Check className="size-4" strokeWidth={3} />
          </button>
          <span className={`select-none text-xs font-bold ${selectedForCompare ? "text-primary" : "text-white/85"}`}>Compare</span>
        </div>

        <div className="flex-1 p-7">
          <div className="mb-7 flex items-start gap-4 pr-24">
            <motion.div
              layoutId={`avatar-${scopedId}`}
              className="relative flex size-[74px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-muted shadow-lg"
            >
              {tutor.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={tutor.image} alt={tutor.name} className="absolute inset-0 size-full object-cover" />
              ) : (
                <span className="text-2xl font-black text-muted-foreground">{tutor.name.charAt(0)}</span>
              )}
              <span className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-[#111820] bg-primary" />
            </motion.div>

            <div className="min-w-0 pt-1">
              <motion.h3
                layoutId={`name-${scopedId}`}
                className="flex min-w-0 items-center gap-1.5 text-xl font-black leading-tight tracking-tight text-primary"
              >
                <span className="truncate">{tutor.name}</span>
                <CheckCircle className="size-4 shrink-0 fill-current text-primary" />
              </motion.h3>
              <motion.p layoutId={`subject-${scopedId}`} className="mt-1 truncate text-sm font-semibold text-white/80">
                {tutor.subject}
              </motion.p>
              {curriculumLine ? <p className="mt-1 truncate text-xs font-semibold text-white/55">{curriculumLine}</p> : null}
            </div>
          </div>

          <motion.div layoutId={`stats-${scopedId}`} className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-2.5 py-1 text-white/90">
              <Star className="size-4 fill-current text-secondary" />
              {formatRating(tutor.rating)} <span className="font-medium text-white/70">profile reviews</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-white/90">
              <Clock className="size-4 text-primary" />
              {tutor.experience}
            </span>
          </motion.div>

          <div className="mb-6 grid gap-2.5 text-sm font-semibold text-white/70">
            <span className="flex min-w-0 items-center gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span className="truncate">{getLocationLine(tutor)}</span>
            </span>
            <span className="flex min-w-0 items-center gap-2">
              {tutor.homeTutoringAvailable ? <Home className="size-4 shrink-0 text-secondary" /> : <Monitor className="size-4 shrink-0 text-secondary" />}
              <span className="truncate">{getModeLine(tutor)}</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tutor.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-current/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest ${tutor.accent}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-auto flex justify-end">
          <div className="flex items-center rounded-tl-[1.6rem] border-l border-t border-white/10 bg-[#151d26] px-6 py-4 text-sm font-black text-primary transition-colors group-hover:bg-primary/10">
            {ctaLabel}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </motion.div>
  );
}
