"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

/** Responsive dashboard frame: static sidebar on desktop, hamburger drawer on mobile. */
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-muted/20">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full shadow-2xl">
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 border-b border-border/50 bg-background/80 px-4 py-3 lg:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-lg p-1.5 hover:bg-muted/40">
            <Menu className="size-6 text-foreground" />
          </button>
          <span className="text-lg font-bold tracking-tight text-foreground">
            IB<span className="text-primary">Gram</span>
          </span>
        </div>

        <main className="flex-1 overflow-y-auto w-full p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
