"use client";

import { useState, type ReactNode } from "react";
import { QuickDemoModal } from "./QuickDemoModal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/**
 * Opens the short demo-booking form; submitting it hands the details to WhatsApp.
 * Thin client wrapper so server-rendered heroes can drop in the button without
 * becoming client components themselves.
 */
export function BookDemoButton({
  className,
  label = "Book a Demo",
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
          "inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-6 text-base font-bold text-[#25D366] transition-all hover:bg-[#25D366]/20 md:text-lg"
        }
      >
        <WhatsAppIcon className="size-5" />
        {label}
      </button>
      <QuickDemoModal open={open} onClose={() => setOpen(false)} defaultCurriculum={defaultCurriculum} />
    </>
  );
}
