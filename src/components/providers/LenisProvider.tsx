"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let frameId = 0;
    let isActive = true;

    function raf(time: number) {
      if (!isActive) {
        frameId = 0;
        return;
      }

      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        isActive = true;
        if (frameId === 0) {
          frameId = requestAnimationFrame(raf);
        }
        return;
      }

      isActive = false;
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    frameId = requestAnimationFrame(raf);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isActive = false;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
