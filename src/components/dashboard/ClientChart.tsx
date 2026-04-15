"use client";

import { type ReactNode, useEffect, useState } from "react";

export function ClientChart({
  children,
  className = "h-[300px] w-full",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <div className={className}>{mounted ? children : null}</div>;
}
