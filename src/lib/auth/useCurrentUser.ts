"use client";

import { useCallback, useEffect, useState } from "react";
import type { CurrentUser } from "./types";

/**
 * Client hook for the logged-in user. Calls GET /api/auth/me (which proxies to
 * the backend with the session cookie). Returns null when signed out.
 */
export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/me/", { credentials: "include", cache: "no-store" })
      .then((res) => (res.ok ? res.json().catch(() => null) : null))
      .then((body) => {
        if (!active) return;
        const u = body?.data?.user;
        setUser(u && u.id ? (u as CurrentUser) : null);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [reloadKey]);

  const refresh = useCallback(() => setReloadKey((key) => key + 1), []);

  return { user, loading, refresh };
}

/** POST /api/auth/logout, then the caller should hard-navigate to reset state. */
export async function logoutCurrentUser(): Promise<void> {
  try {
    await fetch("/api/auth/logout/", { method: "POST", credentials: "include" });
  } catch {
    // ignore network errors — still send the user to a signed-out view
  }
}
