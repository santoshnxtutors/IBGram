"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Calendar, CheckCircle, Clock, GraduationCap, MousePointer2, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/booking/BookDemoModal";
import type { Tutor } from "@/lib/tutor-data";
import { getCurrentInternalPath, getStoredReturnTo, rememberReturnTo } from "@/lib/return-to";

interface ComparisonViewProps {
  tutors: Tutor[];
}

type CompareRow = {
  label: string;
  icon: typeof CheckCircle;
  getValue: (tutor: Tutor) => string | number | undefined;
};

const rows: CompareRow[] = [
  { label: "Expertise", icon: CheckCircle, getValue: (tutor) => tutor.subject },
  { label: "Education", icon: GraduationCap, getValue: (tutor) => tutor.education },
  { label: "Experience", icon: Clock, getValue: (tutor) => tutor.experience },
  { label: "Parent feedback", icon: Star, getValue: (tutor) => `${formatRating(tutor.rating)} from ${tutor.reviews} reviews` },
  { label: "Success", icon: Trophy, getValue: (tutor) => tutor.successRate },
  { label: "Response", icon: MousePointer2, getValue: (tutor) => tutor.responseTime },
  { label: "Availability", icon: Calendar, getValue: (tutor) => tutor.availability },
  { label: "Hourly rate", icon: Clock, getValue: (tutor) => tutor.rate },
];

export function ComparisonView({ tutors }: ComparisonViewProps) {
  const router = useRouter();
  const [trialTutor, setTrialTutor] = useState<Tutor | null>(null);
  const comparedTutors = tutors.slice(0, 2);

  const handleBack = () => {
    router.push(getStoredReturnTo("tutor-compare", ["/tutor-compare"]) ?? "/tutors");
  };

  const handleProfileOpen = (tutorId: Tutor["id"]) => {
    rememberReturnTo("tutor-profile", getCurrentInternalPath(), ["/tutor-profile"]);
    router.push(`/tutor-profile/${tutorId}`);
  };

  if (comparedTutors.length < 2) {
    return (
      <div className="mx-auto flex min-h-[52vh] max-w-lg flex-col items-center justify-center px-4 text-center">
        <div className="mb-5 grid size-16 place-items-center rounded-2xl border border-border bg-card">
          <CheckCircle className="size-7 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-black tracking-tight">Select two tutors</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
          Choose two tutor profiles to compare subject fit, availability and teaching style.
        </p>
        <Button onClick={handleBack} className="mt-7 h-11 rounded-xl px-6 font-bold">
          Back to tutors
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="rounded-3xl border border-border/70 bg-card/40 p-4 shadow-sm md:p-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 md:gap-6">
          <TutorSummary tutor={comparedTutors[0]} />
          <div className="flex items-center justify-center">
            <div className="grid size-9 place-items-center rounded-full border border-border bg-background text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              vs
            </div>
          </div>
          <TutorSummary tutor={comparedTutors[1]} />
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-border/70 bg-background/55">
        {rows.map((row) => (
          <CompareRowItem key={row.label} row={row} tutors={comparedTutors} />
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-border/70 bg-card/35 p-5 md:p-7">
        <div className="max-w-2xl">
          <h3 className="text-xl font-black tracking-tight md:text-2xl">Choose a trial</h3>
          <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
            Book a free trial with the tutor you want to test first. The request will include the selected tutor name.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {comparedTutors.map((tutor) => (
            <TrialCard
              key={tutor.id}
              tutor={tutor}
              onTrial={() => setTrialTutor(tutor)}
              onProfile={() => handleProfileOpen(tutor.id)}
            />
          ))}
        </div>
      </section>

      <BookDemoModal
        open={trialTutor !== null}
        onClose={() => setTrialTutor(null)}
        tutorName={trialTutor?.name}
        defaultSubject={trialTutor?.subject}
        defaultBoard={trialTutor ? getDefaultBoard(trialTutor) : undefined}
      />
    </div>
  );
}

function TutorSummary({ tutor }: { tutor: Tutor }) {
  return (
    <article className="flex min-w-0 flex-col items-center rounded-2xl border border-border/40 bg-background/55 px-3 py-5 text-center md:px-5 md:py-6">
      <TutorAvatar tutor={tutor} />
      <h2 className="mt-4 max-w-full text-balance text-lg font-black leading-tight tracking-tight text-foreground md:text-2xl">
        {tutor.name}
      </h2>
      <p className="mt-2 rounded-full border border-border bg-muted/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground">
        {tutor.grade || tutor.curriculum}
      </p>
      <p className="mt-3 line-clamp-2 text-xs font-semibold leading-5 text-muted-foreground md:text-sm">
        {tutor.subject}
      </p>
    </article>
  );
}

function TutorAvatar({ tutor }: { tutor: Tutor }) {
  const [failed, setFailed] = useState(false);
  const initial = tutor.name.trim().charAt(0).toUpperCase() || "T";

  return (
    <div className="relative size-20 overflow-hidden rounded-2xl border border-border bg-muted md:size-24">
      {tutor.image && !failed ? (
        <Image
          src={tutor.image}
          alt={tutor.name}
          fill
          sizes="96px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="grid h-full w-full place-items-center text-2xl font-black text-muted-foreground">
          {initial}
        </div>
      )}
    </div>
  );
}

function CompareRowItem({ row, tutors }: { row: CompareRow; tutors: Tutor[] }) {
  return (
    <div className="border-b border-border/50 p-4 last:border-b-0 md:grid md:grid-cols-[190px_1fr_1fr] md:gap-5 md:px-5 md:py-4">
      <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground md:mb-0">
        <row.icon className="size-3.5 shrink-0" />
        <span>{row.label}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:contents">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="min-w-0 rounded-2xl bg-card/35 p-3 text-sm font-bold leading-5 text-foreground md:rounded-none md:bg-transparent md:p-0">
            <span className="mb-1 block truncate text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground md:hidden">
              {shortName(tutor.name)}
            </span>
            {cleanValue(row.getValue(tutor))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrialCard({
  tutor,
  onTrial,
  onProfile,
}: {
  tutor: Tutor;
  onTrial: () => void;
  onProfile: () => void;
}) {
  return (
    <article className="rounded-2xl border border-border/70 bg-background/70 p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className="text-lg font-black leading-tight tracking-tight text-foreground">{tutor.name}</h4>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {tutor.subject} - {tutor.grade}
          </p>
        </div>
        {tutor.availability ? (
          <span className="hidden max-w-[180px] rounded-full border border-border bg-muted/30 px-3 py-1 text-xs font-bold leading-4 text-muted-foreground sm:block">
            {tutor.availability}
          </span>
        ) : null}
      </div>

      {tutor.methodology ? (
        <p className="mt-4 line-clamp-4 text-sm font-medium leading-6 text-muted-foreground">{tutor.methodology}</p>
      ) : null}

      <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto]">
        <Button onClick={onTrial} className="h-11 rounded-xl font-black">
          Book trial <ArrowRight className="ml-2 size-4" />
        </Button>
        <Button onClick={onProfile} variant="outline" className="h-11 rounded-xl px-5 font-black">
          View profile
        </Button>
      </div>
    </article>
  );
}

function cleanValue(value: string | number | undefined) {
  if (value === undefined || value === null || value === "") return "-";
  return value;
}

function shortName(name: string) {
  return name.trim().split(/\s+/)[0] || name;
}

function formatRating(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function getDefaultBoard(tutor: Tutor) {
  if (tutor.curriculum === "IB") {
    const grade = tutor.grade.toLowerCase();
    if (grade.includes("pyp")) return "IB (PYP)";
    if (grade.includes("myp")) return "IB (MYP)";
    if (grade.includes("cp")) return "IB (CP)";
    return "IB (DP)";
  }
  if (tutor.curriculum === "IGCSE") return "Cambridge IGCSE";
  return "";
}
