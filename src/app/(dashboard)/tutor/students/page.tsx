"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState, HeaderPill, PageHeader, SectionCard, StatTile } from "@/components/dashboard/ui";
import { fetchMyBookings, type Booking } from "@/lib/bookings/api";
import { CalendarCheck, CalendarClock, Loader2, MessageSquare, Star, UserRound, Users } from "lucide-react";

type Row = {
  id: string;
  name: string;
  subjects: string[];
  total: number;
  completed: number;
  upcoming: number;
  last: string | null;
  next: string | null;
};

const day = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/** Every student who has ever booked you, rolled up from the booking rows. */
function rollUp(bookings: Booking[]): Row[] {
  const now = Date.now();
  const byStudent = new Map<string, Row>();

  for (const b of bookings) {
    const row =
      byStudent.get(b.student.id) ??
      { id: b.student.id, name: b.student.name, subjects: [], total: 0, completed: 0, upcoming: 0, last: null, next: null };

    row.total += 1;
    if (b.status === "completed") row.completed += 1;
    if (!row.subjects.includes(b.subject)) row.subjects.push(b.subject);

    const at = +new Date(b.scheduledAt);
    if (at > now && (b.status === "confirmed" || b.status === "requested")) {
      row.upcoming += 1;
      if (!row.next || at < +new Date(row.next)) row.next = b.scheduledAt;
    } else if (!row.last || at > +new Date(row.last)) {
      row.last = b.scheduledAt;
    }

    byStudent.set(b.student.id, row);
  }

  return [...byStudent.values()].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

export default function TutorStudentsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyBookings()
      .then(({ bookings: rows }) => setBookings(rows.filter((b) => b.viewerRole === "tutor" && b.status !== "cancelled")))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const rows = useMemo(() => rollUp(bookings), [bookings]);
  const totalClasses = bookings.filter((b) => b.status === "completed").length;
  const active = rows.filter((r) => r.upcoming > 0).length;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={Users}>My students</HeaderPill>}
        title="Your students"
        subtitle="Built from your real bookings — who you teach, what you teach them and when you next meet."
        actions={
          <Link href="/tutor/messages">
            <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
              <MessageSquare className="size-4" /> Open messages
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatTile label="Students taught" value={rows.length} icon={Users} tone="primary" />
        <StatTile label="Active right now" value={active} icon={CalendarClock} tone="emerald" hint="Students with an upcoming class" />
        <StatTile label="Classes completed" value={totalClasses} icon={CalendarCheck} tone="violet" />
      </div>

      <SectionCard title="Student list" icon={UserRound} bodyClassName="space-y-3">
        {loading ? (
          <p className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Loading your students…
          </p>
        ) : rows.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No students yet"
            action={
              <Link href="/tutor/reviews">
                <Button className="mt-1 h-11 gap-2 rounded-xl font-bold">
                  <Star className="size-4" /> Share your profile
                </Button>
              </Link>
            }
          >
            Once a student books a demo with you they appear here, with their subjects and class history.
          </EmptyState>
        ) : (
          rows.map((r) => (
            <div key={r.id} className="flex flex-col gap-3 rounded-2xl border border-border/60 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-black text-primary">
                  {r.name.slice(0, 1).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold text-foreground">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.subjects.join(" · ")}</p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {r.completed} completed · {r.total} booked
                    {r.next ? ` · next ${day(r.next)}` : r.last ? ` · last ${day(r.last)}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                {r.upcoming > 0 && (
                  <span className="self-center rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                    {r.upcoming} upcoming
                  </span>
                )}
                <Link href="/tutor/messages">
                  <Button size="sm" variant="outline" className="h-9 gap-1.5 rounded-xl font-semibold">
                    <MessageSquare className="size-4" /> Chat
                  </Button>
                </Link>
              </div>
            </div>
          ))
        )}
      </SectionCard>
    </div>
  );
}
