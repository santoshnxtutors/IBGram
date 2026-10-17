"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Video, X, CalendarClock, BookOpen, CheckCircle2, Star, ExternalLink, Briefcase, MapPin, Monitor, Home, Shuffle } from "lucide-react";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import { createBooking, fetchMyDemoRequests, fetchTutors, type DemoRequest, type Tutor } from "@/lib/bookings/api";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";

const STATUS: Record<DemoRequest["status"], { label: string; cls: string }> = {
  new: { label: "Requested", cls: "bg-amber-400/15 text-amber-800 dark:text-amber-300" },
  contacted: { label: "In progress", cls: "bg-sky-400/15 text-sky-800 dark:text-sky-300" },
  scheduled: { label: "Scheduled", cls: "bg-emerald-400/15 text-emerald-800 dark:text-emerald-300" },
  completed: { label: "Completed", cls: "bg-violet-400/15 text-violet-800 dark:text-violet-300" },
  cancelled: { label: "Cancelled", cls: "bg-rose-400/15 text-rose-600 dark:text-rose-300" },
};

const MODE_ICON = { online: Monitor, home: Home, hybrid: Shuffle } as const;

const fmtWhen =(iso: string) => new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });

export default function FindTutorsPage() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Tutor | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // Settled independently: the tutor list must not disappear if demo requests fail to load.
  const load = useCallback(
    () =>
      Promise.allSettled([fetchTutors(), fetchMyDemoRequests()]).then(([t, r]) => {
        if (t.status === "fulfilled") setTutors(t.value.tutors);
        if (r.status === "fulfilled") setRequests(r.value.requests);
        setLoading(false);
      }),
    [],
  );

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tutors;
    return tutors.filter(
      (t) => t.name.toLowerCase().includes(q) || t.subjects.some((s) => s.toLowerCase().includes(q)) || (t.headline ?? "").toLowerCase().includes(q),
    );
  }, [tutors, query]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={
          <>
            <HeaderPill icon={Search}>Find a tutor</HeaderPill>
            {!loading && <HeaderPill tone="live">{tutors.length} verified tutors</HeaderPill>}
          </>
        }
        title="Browse IB &amp; IGCSE tutors"
        subtitle="Compare verified tutors by subject, board and city, then book a free demo class. No card needed."
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/60" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or subject"
            className="h-12 rounded-xl border-white/25 bg-white/10 pl-10 text-white placeholder:text-white/60 focus-visible:border-white/60"
          />
        </div>
      </PageHeader>

      {notice && (
        <div className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          <span className="flex-1">{notice}</span>
          <button onClick={() => setNotice(null)} aria-label="Dismiss" className="shrink-0"><X className="size-4" /></button>
        </div>
      )}

      {requests.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-muted-foreground">My demo requests</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {requests.map((r) => (
              <Card key={r.id} className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <PersonAvatar src={r.tutor.avatarUrl} name={r.tutor.displayName} className="size-11 text-sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-foreground">{r.subject}</p>
                      <p className="truncate text-sm text-muted-foreground">with {r.tutor.displayName}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider ${STATUS[r.status]?.cls ?? STATUS.new.cls}`}>
                      {STATUS[r.status]?.label ?? r.status}
                    </span>
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarClock className="size-3.5" /> Preferred: {fmtWhen(r.preferredAt)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.demoBookingId && (r.demoBookingStatus === "confirmed" || r.demoBookingStatus === "requested") && (
                      <Link href={`/demo/${r.demoBookingId}`}>
                        <Button size="sm" className="h-8 rounded-lg gap-1.5"><Video className="size-3.5" /> Join demo</Button>
                      </Link>
                    )}
                    <a href={`/tutor-profile/${r.tutor.slug}/`} target="_blank" rel="noreferrer" className="inline-flex h-8 items-center gap-1 rounded-lg border border-border px-3 text-xs font-semibold hover:border-primary/50 hover:text-primary">
                      Tutor profile <ExternalLink className="size-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-muted-foreground">
          Available tutors{!loading && tutors.length > 0 && ` (${filtered.length})`}
        </h2>
        {loading ? (
          <p className="text-muted-foreground">Loading tutors…</p>
        ) : filtered.length === 0 ? (
          <Card className="border-dashed border-border/60">
            <CardContent className="p-10 text-center text-muted-foreground">
              {tutors.length ? "No tutors match your search." : "No tutors are available yet."}
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((t) => (
              <Card key={t.id} className="group flex flex-col border-border/50 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-4">
                    <PersonAvatar src={t.avatarUrl} name={t.name} className="size-16 text-lg" />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold text-foreground">{t.name}</h3>
                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{t.headline || "IB & IGCSE Tutor"}</p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-foreground/80">
                        {t.rating ? (
                          <span className="inline-flex items-center gap-1"><Star className="size-3.5 fill-amber-400 text-amber-400" /> {t.rating.toFixed(1)}</span>
                        ) : null}
                        {t.experienceYears ? (
                          <span className="inline-flex items-center gap-1"><Briefcase className="size-3.5 text-muted-foreground" /> {t.experienceYears} yrs</span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {(t.city || t.modes.length > 0) && (
                    <div className="mt-4 space-y-2 text-xs font-medium text-muted-foreground">
                      {t.city && (
                        <p className="flex items-start gap-1.5">
                          <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          <span className="line-clamp-1">
                            <span className="font-semibold text-foreground">{t.city}</span>
                            {t.areas.length > 0 && ` · ${t.areas.slice(0, 2).join(", ")}${t.areas.length > 2 ? ` +${t.areas.length - 2}` : ""}`}
                          </span>
                        </p>
                      )}
                      {t.modes.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {t.modes.map((m) => {
                            const Icon = MODE_ICON[m];
                            return (
                              <span key={m} className="inline-flex items-center gap-1 rounded-md border border-border/70 px-2 py-0.5 font-semibold capitalize text-foreground/80">
                                <Icon className="size-3" /> {m}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {t.subjects.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.subjects.slice(0, 4).map((s) => (
                        <span key={s} className="rounded-full bg-primary/5 px-2.5 py-0.5 text-[12px] font-semibold text-primary/90">{s}</span>
                      ))}
                      {t.subjects.length > 4 && <span className="px-1 text-[12px] font-semibold text-muted-foreground">+{t.subjects.length - 4} more</span>}
                    </div>
                  )}

                  <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                    <a
                      href={`/tutor-profile/${t.slug}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-border text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      View profile <ExternalLink className="size-3.5" />
                    </a>
                    <Button onClick={() => setActive(t)} className="h-10 rounded-lg gap-2">
                      <BookOpen className="size-4" /> Book a Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {active && (
        <BookDemoModal
          tutor={active}
          onClose={() => setActive(null)}
          onBooked={() => {
            setNotice(`Demo request for ${active.name} sent. Our team will confirm the time with you by phone or email.`);
            setActive(null);
            load();
          }}
        />
      )}
    </div>
  );
}

function BookDemoModal({ tutor, onClose, onBooked }: { tutor: Tutor; onClose: () => void; onBooked: () => void }) {
  const [subject, setSubject] = useState(tutor.subjects[0] ?? "");
  const [when, setWhen] = useState("");
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!subject.trim() || !when) {
      setError("Please choose a subject and a date/time.");
      return;
    }
    if (new Date(when).getTime() < Date.now()) {
      setError("Please pick a time in the future.");
      return;
    }
    setBusy(true);
    try {
      await createBooking({ tutorId: tutor.id, subject: subject.trim(), scheduledAt: new Date(when).toISOString(), notes });
      onBooked();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not book the demo.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4" onClick={onClose}>
      <div className="w-full sm:max-w-md bg-background border border-border/60 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <PersonAvatar src={tutor.avatarUrl} name={tutor.name} className="size-12 text-base" />
            <div>
              <h2 className="text-xl font-black text-foreground">Book a free demo</h2>
              <p className="text-sm text-muted-foreground">with {tutor.name}</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 hover:bg-muted/40">
            <X className="size-5 text-muted-foreground" />
          </button>
        </div>

        {error && <p className="mb-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p>}

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-xs">Subject</Label>
            <Input id="subject" list="tutor-subjects" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. IB Maths AA HL" className="h-11 rounded-xl" required />
            <datalist id="tutor-subjects">
              {tutor.subjects.map((s) => <option key={s} value={s} />)}
            </datalist>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="when" className="text-xs">Preferred date &amp; time</Label>
            <Input id="when" type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} className="h-11 rounded-xl" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="notes" className="text-xs">Notes (optional)</Label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Your grade, topics you're stuck on, anything the tutor should know"
              className="min-h-[80px] w-full rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary resize-none"
            />
          </div>
          <Button type="submit" disabled={busy} className="w-full h-12 rounded-xl font-bold">
            {busy ? "Sending…" : "Request demo class"}
          </Button>
        </form>
      </div>
    </div>
  );
}
