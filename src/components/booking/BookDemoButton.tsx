"use client";

import { useState, type ReactNode } from "react";
import { QuickDemoModal } from "./QuickDemoModal";
import { Send } from "lucide-react";

/**
 * Opens the short enquiry form; submitting it stores a lead for the admin dashboard.
 * Thin client wrapper so server-rendered heroes can drop in the button without
 * becoming client components themselves.
 */
export function BookDemoButton({
  className,
  label = "Send a Query",
  defaultCurriculum,
}: {
  className?: string;
  label?: ReactNode;
  defaultCurriculum?: "IB" | "IGCSE" | "Both";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:bg-muted/30 md:text-lg"
        }
      >
        <Send className="size-5" />
        {label}
      </button>
      <QuickDemoModal open={open} onClose={() => setOpen(false)} defaultCurriculum={defaultCurriculum} />
    </>
  );
}
