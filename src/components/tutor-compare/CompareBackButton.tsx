"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getStoredReturnTo, storeLegacyReturnToFromUrl } from "@/lib/return-to";

export function CompareBackButton() {
  const router = useRouter();

  useEffect(() => {
    storeLegacyReturnToFromUrl("tutor-compare", ["/tutor-compare"]);
  }, []);

  return (
    <button
      onClick={() => router.push(getStoredReturnTo("tutor-compare", ["/tutor-compare"]) ?? "/tutors")}
      className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      type="button"
    >
      <ArrowLeft className="size-4" /> Back
    </button>
  );
}
