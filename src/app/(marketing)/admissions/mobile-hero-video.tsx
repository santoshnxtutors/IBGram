"use client";

import { useEffect, useState } from "react";

export function MobileHeroVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;

    const timeout = window.setTimeout(() => setLoadVideo(true), 6500);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!loadVideo) return null;

  return (
    <video
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
