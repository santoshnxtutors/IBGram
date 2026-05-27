"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ComparisonView } from "@/components/tutor-compare/ComparisonView";
import { allTutors } from "@/lib/tutor-data";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Suspense } from "react";

function ComparisonContent() {
  const searchParams = useSearchParams();
  const idsParam = searchParams.get("ids");
  const returnTo = getSafeReturnTo(searchParams.get("returnTo"));
  
  const tutorIds = idsParam ? idsParam.split(",").map(Number) : [];
  const selectedTutors = allTutors.filter(t => tutorIds.includes(t.id));

  return (
    <div className="container mx-auto px-4 md:px-6">
      <ComparisonView tutors={selectedTutors} returnTo={returnTo} />
    </div>
  );
}

function CompareHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = getSafeReturnTo(searchParams.get("returnTo"));

  const handleBack = () => {
    if (returnTo) {
      router.push(returnTo);
      return;
    }

    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/tutors");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <button onClick={handleBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="size-4" /> Back
        </button>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 flex items-center gap-4">
          Tutor <span className="text-primary">Comparison</span> <Sparkles className="size-8 text-primary" />
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Compare tutor fit by subject, level, teaching style, availability and the support your student needs most.
        </p>
      </motion.div>
    </div>
  );
}

export default function TutorComparePage() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-background mesh-gradient relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <Suspense fallback={null}>
        <CompareHeader />
      </Suspense>

      <Suspense fallback={<div className="container mx-auto p-12 text-center text-muted-foreground font-bold">Analysing Tutor Pedagogy...</div>}>
        <ComparisonContent />
      </Suspense>
    </div>
  );
}

function getSafeReturnTo(value: string | null): string | undefined {
  if (!value) return undefined;
  if (!value.startsWith("/") || value.startsWith("//")) return undefined;
  if (value.startsWith("/tutor-compare")) return undefined;
  return value;
}
