"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WhatsAppFloatingWidget = dynamic(
  () => import("./WhatsAppFloatingWidget").then((mod) => mod.WhatsAppFloatingWidget),
  {
    ssr: false,
  },
);

function scheduleIdle(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  let done = false;
  const run = () => {
    if (done) {
      return;
    }

    done = true;
    cleanup();
    callback();
  };

  const timer = window.setTimeout(run, 6000);
  const idleId =
    "requestIdleCallback" in window
      ? window.requestIdleCallback(run, { timeout: 6500 })
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

export function MarketingDeferredWidgets() {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => scheduleIdle(() => setShowWidgets(true)), []);

  return showWidgets ? <WhatsAppFloatingWidget /> : null;
}
