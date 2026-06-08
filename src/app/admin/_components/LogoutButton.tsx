"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    await fetch("/admin/api/auth/logout/", { method: "POST", cache: "no-store", credentials: "same-origin" });
    window.location.href = "/admin/login";
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={loading}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-300/40 disabled:opacity-60"
    >
      <LogOut className="size-4 text-amber-300" />
      Logout
    </button>
  );
}
