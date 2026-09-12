"use client";

import { useEffect, useState } from "react";

export function MobileHeroVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;

    // Start shortly after the page has loaded so the poster image stays the LCP element.
    let timeout = 0;
    const start = () => {
      timeout = window.setTimeout(() => setLoadVideo(true), 1500);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!loadVideo) return null;

  return (
    <video
      ref={startMuted}
      className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/Admission/home-poster.webp"
    >
      <source src="/Admission/home-optimized.mp4" type="video/mp4" />
    </video>
  );
}

// React sets `muted` only as a property on videos it creates in the browser, and mobile
// Chrome/Safari refuse autoplay without the attribute, leaving the poster frozen. Set both
// and start playback explicitly.
function startMuted(video: HTMLVideoElement | null) {
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.play().catch(() => {
    // Low-power and data-saver modes still block autoplay; the poster stays visible.
  });
}
