"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2, Lock, ShieldCheck } from "lucide-react";

export function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/admin/api/auth/login/", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.get("username"),
          password: form.get("password"),
          remember: form.get("remember") === "on",
        }),
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(json.error || "Login failed.");
        setLoading(false);
        return;
      }
      window.location.href = json.redirectTo || "/admin/dashboard";
    } catch {
      setError("Could not reach the admin login service. Refresh and try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-white/10 bg-white/[0.055] p-6 text-left shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-lg bg-emerald-300 text-slate-950">
          <ShieldCheck className="size-6" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">IBGram secure admin</p>
          <h1 className="text-2xl font-black text-white">Sign in</h1>
        </div>
      </div>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-slate-300">Username</span>
        <input
          name="username"
          autoComplete="username"
          className="h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none ring-emerald-300/30 placeholder:text-slate-600 focus:ring-2"
          placeholder="Enter username"
          required
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-slate-300">Password</span>
        <span className="relative block">
          <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-9 pr-11 text-sm font-semibold text-white outline-none ring-emerald-300/30 placeholder:text-slate-600 focus:ring-2"
            placeholder="Enter password"
            required
          />
          <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-slate-400 hover:bg-white/10 hover:text-white">
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </button>
        </span>
      </label>

      <label className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-300">
        <input name="remember" type="checkbox" className="size-4 rounded border-white/20 bg-black/20 accent-emerald-300" />
        Remember this device for two weeks
      </label>

      {error && <div className="mb-4 rounded-lg border border-rose-300/30 bg-rose-300/10 p-3 text-sm font-bold text-rose-100">{error}</div>}

      <button type="submit" disabled={loading} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-300 px-4 text-sm font-black text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 disabled:opacity-60">
        {loading && <Loader2 className="size-4 animate-spin" />}
        Continue to dashboard
      </button>
    </form>
  );
}
