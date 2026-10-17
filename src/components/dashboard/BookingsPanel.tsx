"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState, SectionCard, StatusPill } from "@/components/dashboard/ui";
import {
  CalendarClock,
  CalendarDays,
  Check,
  GraduationCap,
  Loader2,
  MessageSquare,
  Users,
  Video,
  X,
} from "lucide-react";
import { fetchMyBookings, updateBooking, type Booking } from "@/lib/bookings/api";

const when = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

const isPast = (b: Booking) =>
  b.status === "completed" || b.status === "cancelled" || new Date(b.scheduledAt) < new Date();

/**
 * Both sides of a demo class, from the same rows. The student gets join/cancel,
 * the tutor gets accept/decline/mark-done. Used on the overviews (limited) and
 * on the schedule pages (everything).
 */
export function BookingsPanel({
  role,
  limit,
  showPast = false,
  title,
  description,
}: {
  role: "student" | "tutor";
  limit?: number;
  showPast?: boolean;
  title?: string;
  description?: string;
}) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const { bookings: rows } = await fetchMyBookings();
      setBookings(rows.filter((b) => b.viewerRole === role));
    } catch {
      // Signed out or offline: the panel shows its empty state instead of an error wall.
    } finally {
      setLoading(false);
    }
  }, [role]);

  useEffect(() => {
    load();
  }, [load]);

  const act = async (id: string, status: Booking["status"]) => {
    setBusyId(id);
    setError(null);
    try {
      await updateBooking(id, status);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update that booking.");
    } finally {
      setBusyId(null);
    }
  };

  const { upcoming, past } = useMemo(() => {
    const sorted = [...bookings].sort((a, b) => +new Date(a.scheduledAt) - +new Date(b.scheduledAt));
    return { upcoming: sorted.filter((b) => !isPast(b)), past: sorted.filter(isPast).reverse() };
  }, [bookings]);

  const visible = limit ? upcoming.slice(0, limit) : upcoming;
  const messagesHref = role === "tutor" ? "/tutor/messages" : "/student/messages";

  const heading = title ?? (role === "tutor" ? "Demo requests & classes" : "My demo classes");
  const sub =
    description ??
    (role === "tutor"
      ? "Accept a request to generate the Google Meet link and open the chat with the student."
      : "Your booked demos. The Meet link appears as soon as your tutor accepts.");

  return (
    <SectionCard
      title={heading}
      description={sub}
      icon={CalendarClock}
      action={
        limit && upcoming.length > limit ? (
          <Link href={role === "tutor" ? "/tutor/schedule" : "/student/schedule"}>
            <Button variant="outline" size="sm" className="h-9 rounded-xl font-semibold">
              View all {upcoming.length}
            </Button>
          </Link>
        ) : null
      }
      bodyClassName="space-y-3"
    >
      {error && (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">{error}</p>
      )}

      {loading ? (
        <p className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Loading your classes…
        </p>
      ) : visible.length === 0 ? (
        <EmptyState
          icon={CalendarDays}
          title={role === "tutor" ? "No demo requests yet" : "No demos booked yet"}
          action={
            role === "student" ? (
              <Link href="/student/tutors">
                <Button size="sm" className="mt-1 h-10 rounded-xl font-bold">
                  <Users className="mr-2 size-4" /> Find a tutor
                </Button>
              </Link>
            ) : null
          }
        >
          {role === "tutor"
            ? "Students who book a demo with you land here. Keep your profile live and share it to get more requests."
            : "Pick a tutor and book a free demo class — it takes under a minute."}
        </EmptyState>
      ) : (
        <ul className="space-y-3">
          {visible.map((b) => {
            const other = role === "tutor" ? b.student : b.tutor;
            const busy = busyId === b.id;
            return (
              <li
                key={b.id}
                className="rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-primary/25"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate font-bold text-foreground">{b.subject}</p>
                        <StatusPill status={b.status} />
                      </div>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        {role === "tutor" ? "Student" : "Tutor"}:{" "}
                        <span className="font-semibold text-foreground">{other.name}</span>
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <CalendarClock className="size-3.5" /> {when(b.scheduledAt)}
                      </p>
                      {b.notes && (
                        <p className="mt-1.5 text-xs italic leading-relaxed text-muted-foreground">&ldquo;{b.notes}&rdquo;</p>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    {role === "tutor" && b.status === "requested" && (
                      <Button
                        size="sm"
                        disabled={busy}
                        onClick={() => act(b.id, "confirmed")}
                        className="h-9 gap-1.5 rounded-xl font-bold"
                      >
                        <Check className="size-4" /> Accept
                      </Button>
                    )}
                    {b.status === "confirmed" && b.meetLink && (
                      <a href={b.meetLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="h-9 gap-1.5 rounded-xl bg-emerald-600 font-bold hover:bg-emerald-600/90">
                          <Video className="size-4" /> Join Meet
                        </Button>
                      </a>
                    )}
                    {role === "tutor" && b.status === "confirmed" && !b.meetLink && (
                      <Link href={`/demo/${b.id}`}>
                        <Button size="sm" variant="outline" className="h-9 gap-1.5 rounded-xl font-semibold">
                          <Video className="size-4" /> Start
                        </Button>
                      </Link>
                    )}
                    {b.status === "confirmed" && (
                      <Link href={messagesHref}>
                        <Button size="sm" variant="outline" className="h-9 gap-1.5 rounded-xl font-semibold">
                          <MessageSquare className="size-4" /> Chat
                        </Button>
                      </Link>
                    )}
                    {role === "tutor" && b.status === "confirmed" && (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={busy}
                        onClick={() => act(b.id, "completed")}
                        className="h-9 rounded-xl font-semibold"
                      >
                        Mark done
                      </Button>
                    )}
                    {(b.status === "requested" || b.status === "confirmed") && (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={busy}
                        onClick={() => act(b.id, "cancelled")}
                        className="h-9 gap-1.5 rounded-xl font-semibold text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X className="size-4" /> {role === "tutor" ? "Decline" : "Cancel"}
                      </Button>
                    )}
                    {role === "student" && b.status === "requested" && (
                      <span className="self-center text-xs text-muted-foreground">Waiting for the tutor</span>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {showPast && past.length > 0 && (
        <div className="pt-2">
          <p className="mb-2 text-xs font-black uppercase tracking-wider text-muted-foreground">Past &amp; cancelled</p>
          <ul className="divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/60">
            {past.map((b) => (
              <li key={b.id} className="flex flex-wrap items-center justify-between gap-2 bg-background/40 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{b.subject}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {role === "tutor" ? b.student.name : b.tutor.name} · {when(b.scheduledAt)}
                  </p>
                </div>
                <StatusPill status={b.status} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionCard>
  );
}
