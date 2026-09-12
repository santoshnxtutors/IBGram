"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// `loading` keeps the 64px header reserved while the real Header chunk loads.
// Without it, the dynamic(ssr:false) import renders null for a frame, collapsing
// the header to 0px and shifting all content (a ~0.18 CLS on mobile).
const Header = dynamic(() => import("./Header").then((mod) => mod.Header), {
  ssr: false,
  loading: () => <StaticHeader />,
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
            <span className="text-2xl font-bold tracking-tight text-primary">
              <span className="text-secondary">IB</span>Gram
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

        <div className="flex items-center gap-2 lg:gap-4">
          {/* Placeholders match Header.tsx (Join as tutor button, then the account icon) so
              the pre-hydration header is the same width and swapping it in does not shift the layout. */}
          <span className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground lg:inline-flex">
            Join as tutor
          </span>
          <span className="hidden size-9 items-center justify-center lg:inline-flex" aria-hidden>
            <span className="size-7 rounded-full border-2 border-foreground" />
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
