"use client";

import { motion } from "framer-motion";
import { Star, Clock, CheckCircle, X, Sparkles, GraduationCap, Trophy, Zap, Calendar, MousePointer2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tutor } from "@/lib/tutor-data";

interface ComparisonViewProps {
  tutors: Tutor[];
  onClose?: () => void;
}

export function ComparisonView({ tutors, onClose }: ComparisonViewProps) {
  const router = useRouter();

  if (tutors.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <div className="size-20 rounded-full bg-muted flex items-center justify-center mb-6">
          <Sparkles className="size-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Select Tutors to Compare</h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          Choose at least two tutors from our elite roster to see a side-by-side diagnostic comparison.
        </p>
        <Button onClick={() => router.push("/tutors")} className="rounded-xl h-12 px-8 font-bold">
          Browse Tutors
        </Button>
      </div>
    );
  }

  const attributes = [
    { label: "Expertise", icon: CheckCircle, getValue: (t: Tutor) => t.subject },
    { label: "Education", icon: GraduationCap, getValue: (t: Tutor) => t.education },
    { label: "Experience", icon: Clock, getValue: (t: Tutor) => t.experience },
    { label: "Rating", icon: Star, getValue: (t: Tutor) => `${t.rating} (${t.reviews} reviews)` },
    { label: "Success Rate", icon: Trophy, getValue: (t: Tutor) => t.successRate },
    { label: "Response", icon: MousePointer2, getValue: (t: Tutor) => t.responseTime },
    { label: "Availability", icon: Calendar, getValue: (t: Tutor) => t.availability },
    { label: "Hourly Rate", icon: Sparkles, getValue: (t: Tutor) => t.rate },
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
        {attributes.map((attr, idx) => (
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

      {/* AI Comparison Summary Section */}
      <div className="mt-12 p-8 rounded-2xl border border-border bg-card/20">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="size-5 text-primary" />
          <h3 className="text-lg font-bold tracking-tight">AI Diagnostic Verdict</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-primary">Methodology Match</h5>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              <span className="text-foreground font-bold">{tutors[0].name}</span> utilizes a {tutors[0].methodology.toLowerCase()} <br/><br/>
              While <span className="text-foreground font-bold">{tutors[1].name}</span> focuses on a {tutors[1].methodology.toLowerCase()}
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-secondary">Optimal Selection</h5>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
              For students requiring <span className="text-foreground font-bold">intensive exam drilling</span>, {tutors[0].name} is the superior choice. If the priority is <span className="text-foreground font-bold">intuitive understanding</span>, {tutors[1].name} offers a more creative pedagogical path.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between">
           <div className="flex gap-3">
              <Button 
                onClick={() => router.push(`/tutor-profile/${tutors[0].id}`)}
                variant="outline" 
                className="rounded-xl border font-bold h-10 px-4 text-xs"
              >
                Profile: {tutors[0].name.split(" ")[0]}
              </Button>
              <Button 
                onClick={() => router.push(`/tutor-profile/${tutors[1].id}`)}
                variant="outline" 
                className="rounded-xl border font-bold h-10 px-4 text-xs"
              >
                Profile: {tutors[1].name.split(" ")[0]}
              </Button>
           </div>
           <Button className="rounded-xl h-12 px-8 font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
             Book Free Trial with Both
           </Button>
        </div>
      </div>
    </div>
  );
}

