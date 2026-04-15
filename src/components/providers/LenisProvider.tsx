"use client";

import { ReactNode, useEffect } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || coarsePointer.matches) {
      return;
    }

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let frameId = 0;
    let isActive = true;
    let isDestroyed = false;

    const stop = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const raf = (time: number) => {
      if (!isActive || !lenis) {
        frameId = 0;
        return;
      }

      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    const start = () => {
      if (!isActive || !lenis || frameId !== 0) {
        return;
      }

      frameId = requestAnimationFrame(raf);
    };

    const handleVisibilityChange = () => {
      isActive = document.visibilityState === "visible";

      if (isActive) {
        start();
        return;
      }

      stop();
    };

    const handlePageHide = () => {
      stop();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    void import("@studio-freight/lenis").then(({ default: Lenis }) => {
      if (isDestroyed || prefersReducedMotion.matches || coarsePointer.matches) {
        return;
      }

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      start();
    });

    return () => {
      isDestroyed = true;
      isActive = false;
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
