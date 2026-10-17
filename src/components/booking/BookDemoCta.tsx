"use client";

import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";

const FIND_A_TUTOR = "/student/tutors/";

/**
 * Hero CTA. Booking needs a student account, so a guest is sent to sign up and
 * returned to Find a Tutor; a signed-in user goes straight there.
 */
export function BookDemoCta({ className, label = "Book a Demo" }: { className?: string; label?: string }) {
  const router = useRouter();
  const { user, loading } = useCurrentUser();

  const go = () => {
    if (user) {
      router.push(FIND_A_TUTOR);
      return;
    }
    router.push(`/signup/?role=student&returnTo=${encodeURIComponent(FIND_A_TUTOR)}`);
  };

  return (
    <button
      type="button"
      onClick={go}
      disabled={loading}
      className={
        className ??
        "inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg"
      }
    >
      <BookOpen className="size-5" />
      {label}
    </button>
  );
}
