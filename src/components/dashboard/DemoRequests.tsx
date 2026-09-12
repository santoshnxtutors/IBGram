"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Check, Video, X, GraduationCap } from "lucide-react";
import { fetchMyBookings, updateBooking, type Booking } from "@/lib/bookings/api";

function statusBadge(status: Booking["status"]) {
  const map: Record<Booking["status"], string> = {
    requested: "bg-amber-400/15 text-amber-800 dark:text-amber-300",
    confirmed: "bg-emerald-400/15 text-emerald-800 dark:text-emerald-300",
    completed: "bg-sky-400/15 text-sky-800 dark:text-sky-300",
    cancelled: "bg-rose-400/15 text-rose-600 dark:text-rose-300",
  };
  return map[status];
}

export function DemoRequests() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const b = await fetchMyBookings();
      setBookings(b.bookings.filter((x) => x.viewerRole === "tutor"));
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const act = async (id: string, status: Booking["status"]) => {
    setBusyId(id);
    try {
      await updateBooking(id, status);
      await load();
    } catch {
      // ignore
    } finally {
      setBusyId(null);
    }
  };

  return (
    <Card className="bg-background/60 backdrop-blur-md shadow-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Demo Requests</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : bookings.length === 0 ? (
          <p className="text-sm text-muted-foreground">No demo requests yet. Students who book you will appear here.</p>
        ) : (
          <ul className="space-y-3">
            {bookings.map((b) => (
              <li key={b.id} className="rounded-xl border border-border/50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="size-9 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <GraduationCap className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-foreground truncate">{b.student.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{b.subject}</p>
                      </div>
                      <span className={`ml-1 shrink-0 rounded px-2 py-0.5 text-[11px] font-black uppercase tracking-wider ${statusBadge(b.status)}`}>
                        {b.status}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarClock className="size-3.5" /> {new Date(b.scheduledAt).toLocaleString()}
                    </p>
                    {b.notes && <p className="mt-1 text-xs text-muted-foreground italic">“{b.notes}”</p>}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {b.status === "requested" && (
                      <Button size="sm" disabled={busyId === b.id} onClick={() => act(b.id, "confirmed")} className="h-9 rounded-lg gap-1.5">
                        <Check className="size-4" /> Accept
                      </Button>
                    )}
                    {(b.status === "confirmed" || b.status === "requested") && (
                      <Link href={`/demo/${b.id}`}>
                        <Button size="sm" variant="outline" className="h-9 rounded-lg gap-1.5">
                          <Video className="size-4" /> Start
                        </Button>
                      </Link>
                    )}
                    {b.status === "confirmed" && (
                      <Button size="sm" variant="outline" disabled={busyId === b.id} onClick={() => act(b.id, "completed")} className="h-9 rounded-lg">
                        Mark done
                      </Button>
                    )}
                    {(b.status === "requested" || b.status === "confirmed") && (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={busyId === b.id}
                        onClick={() => act(b.id, "cancelled")}
                        className="h-9 rounded-lg gap-1.5 text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-4" /> Decline
                      </Button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
