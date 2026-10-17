"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { Sidebar } from "./Sidebar";

/** Responsive dashboard frame: static sidebar on desktop, slide-in drawer on mobile. */
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-[#0b1530]/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full shadow-2xl">
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur"
          >
            <X className="size-5" />
          </button>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 border-b border-border/60 bg-card px-4 py-3 lg:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-xl border border-border/60 text-foreground"
          >
            <Menu className="size-5" />
          </button>
          <span className="text-xl font-black tracking-tight text-primary">
            <span className="text-secondary">IB</span>Gram
          </span>
          <Link
            href="/"
            className="ml-auto inline-flex items-center gap-1.5 rounded-xl border border-border/60 px-3 py-2 text-xs font-bold text-muted-foreground"
          >
            <ExternalLink className="size-3.5" /> Site
          </Link>
        </div>

        {/* relative: visually hidden (sr-only, absolutely positioned) inputs inside forms must be
            contained by this scroll area, or they stretch the whole page and leave a blank strip. */}
        <main className="relative w-full flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1400px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
