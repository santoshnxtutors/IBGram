"use client";

import { useState } from "react";

/** Round photo that falls back to the person's initials when there is no photo or it fails to load. */
export function PersonAvatar({ src, name, className = "size-14 text-lg" }: { src?: string | null; name: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={name} referrerPolicy="no-referrer" onError={() => setFailed(true)} className={`${className} shrink-0 rounded-full object-cover ring-2 ring-background shadow-sm`} />
    );
  }
  return (
    <span className={`${className} grid shrink-0 place-items-center rounded-full bg-linear-to-br from-primary to-sky-500 font-extrabold text-white shadow-sm`} aria-hidden="true">
      {initials || "?"}
    </span>
  );
}
