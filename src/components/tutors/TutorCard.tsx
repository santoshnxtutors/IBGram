"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle, Clock, Globe, Home, MapPin, Monitor, Star } from "lucide-react";
import { ALL_COUNTRIES, countryFlagSrc, coversAllCountries, getCountryByCode } from "@/lib/countries";
import Image from "next/image";
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
  displayModes?: string[];
  /** ISO alpha-2 codes, or ["all"]. */
  countriesCovered?: string[];
};

type TutorCardProps = {
  tutor: TutorCardProfile;
  selectedForCompare: boolean;
  onCompareToggle: (id: number | string) => void;
  onOpen: (tutor: TutorCardProfile) => void;
  layoutNamespace?: string;
  ctaLabel?: string;
  className?: string;
  /**
   * "directory" is the /tutors/ listing treatment: squarer corners, nothing
   * truncated, and a full-width footer CTA. Everywhere else keeps "default".
   */
  variant?: "default" | "directory";
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
  // Show exactly what the admin saved when present; otherwise fall back to the
  // home/online/hybrid availability flags.
  if (tutor.displayModes?.length) return tutor.displayModes.join(" / ");
  return [
    tutor.homeTutoringAvailable ? "Home" : null,
    tutor.onlineTutoringAvailable ? "Online" : null,
    tutor.hybridTutoringAvailable ? "Hybrid" : null,
  ]
    .filter(Boolean)
    .join(" / ");
}

function getLocationLine(tutor: TutorCardProfile) {
  return [tutor.primaryCity, tutor.availableAreas?.[0]].filter(Boolean).join(", ");
}

/**
 * Country coverage for the card: at most two named countries plus a "+N" chip,
 * or a single "All countries" chip when the tutor covers everywhere.
 */
function getCountryChips(tutor: TutorCardProfile): { code: string; label: string }[] {
  const codes = tutor.countriesCovered ?? [];
  if (codes.length === 0) return [];
  if (coversAllCountries(codes)) return [{ code: ALL_COUNTRIES, label: "All countries" }];

  const named = codes
    .map((code) => getCountryByCode(code))
    .filter((country): country is NonNullable<typeof country> => Boolean(country));
  const shown = named.slice(0, 2).map((country) => ({ code: country.code, label: country.name }));
  if (named.length > shown.length) {
    shown.push({ code: "", label: `+${named.length - shown.length} more` });
  }
  return shown;
}

export function TutorCard({
  tutor,
  selectedForCompare,
  onCompareToggle,
  onOpen,
  layoutNamespace,
  ctaLabel = "Check availability",
  className = "",
  variant = "default",
}: TutorCardProps) {
  const isDirectory = variant === "directory";
  const [imageFailed, setImageFailed] = useState(false);
  const scopedId = layoutNamespace ? `${layoutNamespace}-${tutor.id}` : `${tutor.id}`;
  const curriculumLine = getCurriculumLine(tutor);
  const countryChips = getCountryChips(tutor);

  return (
    <motion.div
      layoutId={`card-${scopedId}`}
      onClick={() => onOpen(tutor)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(tutor);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group h-full min-w-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
        isDirectory ? "rounded-xl" : "rounded-[1.5rem] sm:rounded-[1.75rem]"
      } ${className}`}
    >
      <article
        className={`relative flex h-full min-w-0 flex-col overflow-hidden border border-border bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-2xl hover:shadow-primary/10 ${
          isDirectory ? "rounded-xl" : "min-h-[310px] rounded-[1.5rem] sm:min-h-[330px] sm:rounded-[1.75rem]"
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute right-4 top-5 z-20 flex flex-col items-center gap-1.5 sm:right-6 sm:top-7 sm:gap-2">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onCompareToggle(tutor.id);
            }}
            aria-pressed={selectedForCompare}
            aria-label={`Compare ${tutor.name}`}
            title="Compare Tutor"
            className={`flex size-8 items-center justify-center rounded-full border-2 transition-colors sm:size-9 ${
              selectedForCompare
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border bg-card text-transparent hover:border-primary/60 hover:text-primary"
            }`}
          >
            <Check className="size-4" strokeWidth={3} />
          </button>
          <span className={`hidden select-none text-xs font-bold sm:block ${selectedForCompare ? "text-primary" : "text-foreground"}`}>Compare</span>
        </div>

        <div className="flex-1 p-5 sm:p-7">
          <div
            className={`mb-6 flex min-w-0 items-start gap-3 sm:mb-7 sm:gap-4 ${
              isDirectory ? "pr-11 sm:pr-12" : "pr-12 sm:pr-24"
            }`}
          >
            <motion.div
              layoutId={`avatar-${scopedId}`}
              className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted shadow-lg sm:size-[74px]"
            >
              {tutor.image && !imageFailed ? (
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  fill
                  sizes="(max-width: 640px) 64px, 74px"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageFailed(true)}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <span className="text-2xl font-black text-muted-foreground">{tutor.name.charAt(0)}</span>
              )}
              <span className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-card bg-primary" />
            </motion.div>

            <div className="min-w-0 pt-0.5 sm:pt-1">
              <motion.h3
                layoutId={`name-${scopedId}`}
                className="flex min-w-0 items-start gap-1.5 text-lg font-black leading-tight tracking-tight text-primary sm:text-xl"
              >
                <span className={isDirectory ? "min-w-0 break-words" : "truncate"}>{tutor.name}</span>
                <CheckCircle className="mt-0.5 size-4 shrink-0 fill-current text-primary" />
              </motion.h3>
              <motion.p
                layoutId={`subject-${scopedId}`}
                className={`mt-1 text-sm font-semibold text-foreground/80 ${isDirectory ? "break-words" : "truncate"}`}
              >
                {tutor.subject}
              </motion.p>
              {curriculumLine ? (
                <p className={`mt-1 text-xs font-semibold text-muted-foreground ${isDirectory ? "break-words" : "truncate"}`}>
                  {curriculumLine}
                </p>
              ) : null}
            </div>
          </div>

          <motion.div layoutId={`stats-${scopedId}`} className="mb-6 flex flex-wrap items-center gap-2.5 text-sm font-bold sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-2.5 py-1 text-foreground">
              {formatRating(tutor.rating)}
              <Star className="size-4 fill-current text-secondary" />
              <span className="font-medium text-foreground/80">rating</span>
            </span>
            {tutor.experience ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-foreground">
                <Clock className="size-4 text-primary" />
                {tutor.experience}
              </span>
            ) : null}
          </motion.div>

          <div className="mb-6 grid gap-2.5 text-sm font-semibold text-foreground/80">
            <span className="flex min-w-0 items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className={isDirectory ? "min-w-0 break-words" : "truncate"}>{getLocationLine(tutor)}</span>
            </span>
            <span className="flex min-w-0 items-start gap-2">
              {tutor.homeTutoringAvailable ? <Home className="mt-0.5 size-4 shrink-0 text-secondary" /> : <Monitor className="mt-0.5 size-4 shrink-0 text-secondary" />}
              <span className={isDirectory ? "min-w-0 break-words" : "truncate"}>{getModeLine(tutor)}</span>
            </span>
            {countryChips.length > 0 ? (
              <span className="flex min-w-0 items-start gap-2">
                <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="flex flex-wrap gap-1.5">
                  {countryChips.map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs font-bold text-foreground"
                    >
                      {chip.code && chip.code !== ALL_COUNTRIES ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={countryFlagSrc(chip.code)}
                          alt=""
                          width={14}
                          height={14}
                          className="size-3.5 rounded-full object-cover"
                        />
                      ) : null}
                      {chip.label}
                    </span>
                  ))}
                </span>
              </span>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {(isDirectory ? tutor.tags.slice(0, 3) : tutor.tags.slice(0, 2)).map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-current/20 px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tutor.accent}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className={
            isDirectory
              ? "relative mt-auto border-t border-border"
              : "relative mt-auto border-t border-border p-4 sm:flex sm:justify-end sm:border-t-0 sm:p-0"
          }
        >
          <div
            className={
              isDirectory
                ? "flex w-full min-w-0 items-center justify-center gap-1 bg-muted px-5 py-3.5 text-sm font-black text-primary transition-colors group-hover:bg-primary/10"
                : "flex w-full min-w-0 items-center justify-center rounded-xl border border-border bg-muted px-4 py-3 text-center text-sm font-black text-primary transition-colors group-hover:bg-primary/10 sm:w-auto sm:justify-start sm:rounded-b-none sm:rounded-tl-[1.6rem] sm:border-b-0 sm:border-r-0 sm:px-6 sm:py-4"
            }
          >
            {ctaLabel}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </motion.div>
  );
}
