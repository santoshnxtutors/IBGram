"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = dynamic(() => import("./Header").then((mod) => mod.Header), {
  ssr: false,
});

function scheduleHeader(callback: () => void) {
  let done = false;

  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    callback();
  };

  const timer = window.setTimeout(run, 5500);
  const idleId =
    "requestIdleCallback" in window
      ? window.requestIdleCallback(run, { timeout: 6000 })
      : undefined;

  const cleanup = () => {
    window.clearTimeout(timer);
    if (idleId !== undefined && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleId);
    }
    window.removeEventListener("pointerdown", run);
    window.removeEventListener("keydown", run);
    window.removeEventListener("scroll", run);
  };

  window.addEventListener("pointerdown", run, { passive: true, once: true });
  window.addEventListener("keydown", run, { once: true });
  window.addEventListener("scroll", run, { passive: true, once: true });

  return cleanup;
}

function StaticHeader() {
  const pathname = usePathname();
  const isIgcse = pathname?.startsWith("/igcse");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 md:bg-background/80 md:backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" prefetch={false} className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              IB<span className="text-primary">Gram</span>
            </span>
          </Link>
          <span className="hidden text-sm font-semibold text-foreground/80 md:inline">Select Location</span>
        </div>

        <nav aria-label="Main Navigation" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <span className="rounded-full bg-muted/20 px-3 py-1.5 font-bold text-foreground">{isIgcse ? "IGCSE" : "IB"}</span>
          <Link href="/programmes" prefetch={false} className="hover:text-primary">
            Programmes
          </Link>
          <Link href={`/courses/${isIgcse ? "igcse" : "ib"}/mathematics`} prefetch={false} className="hover:text-primary">
            Courses
          </Link>
          <Link href="/tutors" prefetch={false} className="hover:text-primary">
            Tutors
          </Link>
          <Link href="/admissions" prefetch={false} className="hover:text-primary">
            Admissions & Test Prep
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-bold text-foreground lg:inline-flex">
            Default
          </span>
          <span className="flex size-10 items-center justify-center rounded-full text-foreground lg:hidden" aria-hidden>
            <span className="block h-0.5 w-6 rounded bg-current shadow-[0_7px_0_currentColor,0_-7px_0_currentColor]" />
          </span>
        </div>
      </div>
    </header>
  );
}

export function DeferredHeader() {
  const [ready, setReady] = useState(false);

  useEffect(() => scheduleHeader(() => setReady(true)), []);

  return ready ? <Header /> : <StaticHeader />;
}
