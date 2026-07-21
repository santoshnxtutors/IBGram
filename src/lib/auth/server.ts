import "server-only";

import { cookies } from "next/headers";
import type { CurrentUser } from "./types";

function backendUrl(): string {
  return (process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || "4000"}`).replace(/\/$/, "");
}

/**
 * Server-side current user, for gating server components / route layouts.
 * Forwards the incoming session cookie to the backend /api/auth/me. Returns
 * null when signed out or the backend is unreachable.
 */
export async function getServerUser(): Promise<CurrentUser | null> {
  const cookieHeader = (await cookies()).toString();
  if (!cookieHeader) return null;

  try {
    const res = await fetch(`${backendUrl()}/api/auth/me`, {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const body = await res.json().catch(() => null);
    const user = body?.data?.user;
    return user && user.id ? (user as CurrentUser) : null;
  } catch {
    return null;
  }
}
