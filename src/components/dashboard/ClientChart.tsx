"use client";

import { type ReactNode, useSyncExternalStore } from "react";

export function ClientChart({
  children,
  className = "h-[300px] w-full",
}: {
  children: ReactNode;
  className?: string;
}) {
  const mounted = useSyncExternalStore(subscribeToHydration, getClientSnapshot, getServerSnapshot);

  return <div className={className}>{mounted ? children : null}</div>;
}

function subscribeToHydration() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}
