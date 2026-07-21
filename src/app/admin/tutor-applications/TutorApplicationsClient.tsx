"use client";

import { useCallback, useEffect, useState } from "react";

type Pending = {
  id: string;
  displayName: string;
  headline: string | null;
  bio: string | null;
  about: string | null;
  experienceYears: number | null;
  phone: string | null;
  email: string | null;
  subjects: string[];
  status: string;
  approved: boolean;
};

type Catalog = { id: string; displayName: string; slug: string; email: string | null; status: string; approved: boolean };

function badge(approved: boolean, status: string) {
  if (status === "archived") return "bg-rose-400/15 text-rose-200";
  if (approved) return "bg-emerald-400/15 text-emerald-300";
  return "bg-amber-400/15 text-amber-200";
}

export function TutorApplicationsClient() {
  const [pending, setPending] = useState<Pending[]>([]);
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/admin/api/tutor-applications/", { cache: "no-store" });
      const body = await res.json();
      setPending(body.pending ?? []);
      setCatalog(body.catalogWithoutLogin ?? []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const review = async (id: string, action: "approve" | "reject") => {
    setBusyId(id);
    try {
      const res = await fetch(`/admin/api/tutor-applications/${id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (res.ok) {
        setToast(action === "approve" ? "Tutor approved — now live." : "Tutor profile rejected.");
        await load();
      }
    } finally {
      setBusyId(null);
    }
  };

  if (loading) return <p className="text-sm text-slate-400">Loading…</p>;

  return (
    <div className="space-y-8">
      {toast && <div className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">{toast}</div>}

      <section>
        <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-300">Tutor profiles ({pending.length})</h3>
        {pending.length === 0 ? (
          <p className="text-sm text-slate-500">No tutor profiles submitted yet.</p>
        ) : (
          <ul className="space-y-3">
            {pending.map((t) => (
              <li key={t.id} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-black text-slate-100">{t.displayName}</h4>
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${badge(t.approved, t.status)}`}>
                        {t.status === "archived" ? "rejected" : t.approved ? "approved" : "pending"}
                      </span>
                    </div>
                    {t.headline && <p className="mt-1 text-sm font-bold text-slate-300">{t.headline}</p>}
                    <p className="mt-1 text-xs text-slate-400">{t.email}{t.phone ? ` · ${t.phone}` : ""}{t.experienceYears != null ? ` · ${t.experienceYears} yrs` : ""}</p>
                    {t.subjects.length > 0 && <p className="mt-1 text-xs text-slate-400">Subjects: {t.subjects.join(", ")}</p>}
                    {t.bio && <p className="mt-2 text-sm text-slate-300">{t.bio}</p>}
                    {t.about && <p className="mt-1 text-xs text-slate-400 whitespace-pre-wrap">{t.about}</p>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {!(t.approved && t.status === "active") && (
                      <button disabled={busyId === t.id} onClick={() => review(t.id, "approve")} className="h-9 rounded-md bg-emerald-500/90 px-3 text-xs font-bold text-white hover:bg-emerald-500">
                        Approve
                      </button>
                    )}
                    {t.status !== "archived" && (
                      <button disabled={busyId === t.id} onClick={() => review(t.id, "reject")} className="h-9 rounded-md border border-white/15 px-3 text-xs font-bold text-slate-200 hover:bg-white/10">
                        Reject
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-300">Existing tutors without a login ({catalog.length})</h3>
        <p className="mb-3 text-xs text-slate-500">Add an email + initial password to create a login. They can sign in and edit their profile; it goes live immediately.</p>
        {catalog.length === 0 ? (
          <p className="text-sm text-slate-500">All catalog tutors have logins.</p>
        ) : (
          <ul className="space-y-3">
            {catalog.map((t) => (
              <CatalogRow key={t.id} tutor={t} onCreated={(msg) => { setToast(msg); load(); }} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function CatalogRow({ tutor, onCreated }: { tutor: Catalog; onCreated: (msg: string) => void }) {
  const [email, setEmail] = useState(tutor.email ?? "");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async () => {
    setError(null);
    setBusy(true);
    try {
      const res = await fetch(`/admin/api/tutor-applications/${tutor.id}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Could not create login.");
      onCreated(`Login created for ${tutor.displayName} (${email}).`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not create login.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <li className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <span className="font-bold text-slate-100">{tutor.displayName}</span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tutor@email.com"
            className="h-9 rounded-md border border-white/15 bg-white/[0.04] px-3 text-sm text-slate-100 outline-none focus:border-emerald-400"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="initial password (10+)"
            className="h-9 rounded-md border border-white/15 bg-white/[0.04] px-3 text-sm text-slate-100 outline-none focus:border-emerald-400"
          />
          <button disabled={busy} onClick={create} className="h-9 rounded-md bg-emerald-500/90 px-3 text-xs font-bold text-white hover:bg-emerald-500">
            {busy ? "Creating…" : "Create login"}
          </button>
        </div>
      </div>
      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </li>
  );
}
