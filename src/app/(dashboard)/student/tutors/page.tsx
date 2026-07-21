"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Search, Video, X, CalendarClock, BookOpen } from "lucide-react";
import { createBooking, fetchMyBookings, fetchTutors, type Booking, type Tutor } from "@/lib/bookings/api";

function statusBadge(status: Booking["status"]) {
  const map: Record<Booking["status"], string> = {
    requested: "bg-amber-400/15 text-amber-600 dark:text-amber-300",
    confirmed: "bg-emerald-400/15 text-emerald-600 dark:text-emerald-300",
    completed: "bg-sky-400/15 text-sky-600 dark:text-sky-300",
    cancelled: "bg-rose-400/15 text-rose-600 dark:text-rose-300",
  };
  return map[status];
}

export default function FindTutorsPage() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Tutor | null>(null);

  const load = useCallback(async () => {
    try {
      const [t, b] = await Promise.all([fetchTutors(), fetchMyBookings()]);
      setTutors(t.tutors);
      setBookings(b.bookings.filter((x) => x.viewerRole === "student"));
    } catch {
      // surfaced inline below
    } finally {
      setLoading(false);
    }
  }, []);

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
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Find a Tutor</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">Browse verified IB &amp; IGCSE tutors and book a free demo class.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or subject"
            className="pl-9 h-11 rounded-xl"
          />
        </div>
      </div>

      {/* My demos */}
      {bookings.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-muted-foreground">My demo classes</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bookings.map((b) => (
              <Card key={b.id} className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-foreground truncate">{b.subject}</span>
                    <span className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${statusBadge(b.status)}`}>
                      {b.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">with {b.tutor.name}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarClock className="size-3.5" /> {new Date(b.scheduledAt).toLocaleString()}
                  </p>
                  {(b.status === "confirmed" || b.status === "requested") && (
                    <Link href={`/demo/${b.id}`} className="mt-3 inline-flex">
                      <Button size="sm" className="h-9 rounded-lg gap-2">
                        <Video className="size-4" /> Join demo
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Tutors */}
      <div>
        <h2 className="mb-3 text-sm font-black uppercase tracking-widest text-muted-foreground">Available tutors</h2>
        {loading ? (
          <p className="text-muted-foreground">Loading tutors…</p>
        ) : filtered.length === 0 ? (
          <Card className="border-dashed border-border/60">
            <CardContent className="p-10 text-center text-muted-foreground">
              No tutors found yet. Once tutors sign up, they will appear here.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <Card key={t.id} className="border-border/50 transition-all hover:border-primary/40">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="size-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                      {t.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={t.avatarUrl} alt={t.name} className="size-full object-cover" />
                      ) : (
                        <GraduationCap className="size-6" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground truncate">{t.name}</h3>
                      <p className="text-xs text-muted-foreground truncate">{t.headline || "IB & IGCSE Tutor"}</p>
                    </div>
                  </div>
                  {t.subjects.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.subjects.slice(0, 4).map((s) => (
                        <span key={s} className="rounded-full bg-muted/40 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button onClick={() => setActive(t)} className="mt-4 w-full h-10 rounded-lg gap-2">
                    <BookOpen className="size-4" /> Book a Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {active && (
        <BookDemoModal
          tutor={active}
          onClose={() => setActive(null)}
          onBooked={() => {
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
      <div
        className="w-full sm:max-w-md bg-background border border-border/60 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-black text-foreground">Book a demo</h2>
            <p className="text-sm text-muted-foreground">with {tutor.name}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 hover:bg-muted/40">
            <X className="size-5 text-muted-foreground" />
          </button>
        </div>

        {error && <p className="mb-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p>}

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-xs">Subject</Label>
            <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. IB Maths AA HL" className="h-11 rounded-xl" required />
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
              placeholder="Anything the tutor should know"
              className="min-h-[80px] w-full rounded-xl border border-border bg-background/50 p-3 text-sm outline-none focus:border-primary resize-none"
            />
          </div>
          <Button type="submit" disabled={busy} className="w-full h-12 rounded-xl font-bold">
            {busy ? "Booking…" : "Request demo class"}
          </Button>
        </form>
      </div>
    </div>
  );
}
