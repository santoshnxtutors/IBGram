"use client";

import { useState } from "react";
import { Clock, CheckCircle, GraduationCap, Trophy, Calendar, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/booking/BookDemoModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tutor } from "@/lib/tutor-data";
import { getCurrentInternalPath, getStoredReturnTo, rememberReturnTo } from "@/lib/return-to";

interface ComparisonViewProps {
  tutors: Tutor[];
}

export function ComparisonView({ tutors }: ComparisonViewProps) {
  const router = useRouter();
  const [trialTutor, setTrialTutor] = useState<Tutor | null>(null);

  const handleBack = () => {
    router.push(getStoredReturnTo("tutor-compare", ["/tutor-compare"]) ?? "/tutors");
  };

  const handleProfileOpen = (tutorId: Tutor["id"]) => {
    rememberReturnTo("tutor-profile", getCurrentInternalPath(), ["/tutor-profile"]);
    router.push(`/tutor-profile/${tutorId}`);
  };

  if (tutors.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <div className="size-20 rounded-full bg-muted flex items-center justify-center mb-6">
          <CheckCircle className="size-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Select Tutors to Compare</h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          Choose at least two tutors to review subject fit, availability and teaching approach side by side.
        </p>
        <Button onClick={handleBack} className="rounded-xl h-12 px-8 font-bold">
          Back to Tutors
        </Button>
      </div>
    );
  }

  const attributes = [
    { label: "Expertise", icon: CheckCircle, getValue: (t: Tutor) => t.subject },
    { label: "Education", icon: GraduationCap, getValue: (t: Tutor) => t.education },
    { label: "Experience", icon: Clock, getValue: (t: Tutor) => t.experience },
    { label: "Parent Feedback", icon: CheckCircle, getValue: (t: Tutor) => `${t.rating} from ${t.reviews} reviews` },
    { label: "Success Rate", icon: Trophy, getValue: (t: Tutor) => t.successRate },
    { label: "Response", icon: MousePointer2, getValue: (t: Tutor) => t.responseTime },
    { label: "Availability", icon: Calendar, getValue: (t: Tutor) => t.availability },
    { label: "Hourly Rate", icon: Clock, getValue: (t: Tutor) => t.rate },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Header with Profiles (Sticky) */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-12 py-10 items-center sticky top-0 z-10 bg-background mb-8 rounded-b-[3.5rem] shadow-2xl shadow-black/5 border-b border-border/5">
        {/* Tutor 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="size-24 md:size-32 rounded-[2.5rem] relative overflow-hidden mb-6 border-4 border-card shadow-2xl bg-muted">
            {tutors[0].image ? (
              <Image src={tutors[0].image} alt={tutors[0].name} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-3xl font-bold text-muted-foreground">{tutors[0].name.charAt(0)}</span>
              </div>
            )}
          </div>
          <h4 className="font-extrabold text-xl md:text-3xl tracking-tighter mb-2">{tutors[0].name}</h4>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-muted-foreground py-1.5 px-4 rounded-full bg-muted/50 border border-border/50">
            {tutors[0].grade}
          </span>
        </div>

        {/* VS Indicator */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
          <div className="size-10 rounded-full border border-border flex items-center justify-center text-[10px] font-black text-muted-foreground bg-background shadow-sm uppercase tracking-widest">
            VS
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
        </div>

        {/* Tutor 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="size-24 md:size-32 rounded-[2.5rem] relative overflow-hidden mb-6 border-4 border-card shadow-2xl bg-muted">
            {tutors[1].image ? (
              <Image src={tutors[1].image} alt={tutors[1].name} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-3xl font-bold text-muted-foreground">{tutors[1].name.charAt(0)}</span>
              </div>
            )}
          </div>
          <h4 className="font-extrabold text-xl md:text-3xl tracking-tighter mb-2">{tutors[1].name}</h4>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-muted-foreground py-1.5 px-4 rounded-full bg-muted/50 border border-border/50">
            {tutors[1].grade}
          </span>
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="divide-y divide-border/30">
        {attributes.map((attr) => (
          <div
            key={attr.label}
            className="grid grid-cols-[1.2fr_2fr_2fr] gap-4 py-5 px-6 hover:bg-muted/20 transition-colors rounded-2xl"
          >
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-[10px] uppercase tracking-widest">
              <attr.icon className="size-3.5 shrink-0" />
              <span>{attr.label}</span>
            </div>
            {tutors.slice(0, 2).map((tutor) => (
              <div key={tutor.id} className="text-sm font-semibold text-foreground">
                {attr.getValue(tutor)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card/20 p-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold tracking-tight">Choose the trial that fits your student</h3>
          <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-muted-foreground">
            Use the comparison above to shortlist a teacher, then book a free trial with the tutor you want to test first.
            The request sent to IBGram will include the selected teacher name.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tutors.slice(0, 2).map((tutor) => (
            <div key={tutor.id} className="rounded-2xl border border-border/70 bg-background/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-black tracking-tight text-foreground">{tutor.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {tutor.subject} - {tutor.grade}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {tutor.availability}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">{tutor.methodology}</p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => setTrialTutor(tutor)}
                  className="h-11 flex-1 rounded-xl bg-primary font-bold text-primary-foreground hover:bg-primary/90"
                >
                  Book free trial with {tutor.name.split(" ")[0]}
                </Button>
                <Button
                  onClick={() => handleProfileOpen(tutor.id)}
                  variant="outline"
                  className="h-11 rounded-xl border font-bold"
                >
                  View profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

