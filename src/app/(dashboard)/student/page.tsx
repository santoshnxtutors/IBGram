"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookingsPanel } from "@/components/dashboard/BookingsPanel";
import { EmptyState, HeaderPill, PageHeader, SectionCard, StatTile, StatusPill } from "@/components/dashboard/ui";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import { fetchMyStudentProfile, type StudentProfileView } from "@/lib/student/profile";
import { fetchMyBookings, fetchMyDemoRequests, fetchTutors, type Booking, type DemoRequest, type Tutor } from "@/lib/bookings/api";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock,
  CreditCard,
  LifeBuoy,
  MessageSquare,
  Search,
  UserRound,
  Users,
  Video,
} from "lucide-react";

const QUICK_LINKS = [
  { href: "/student/tutors", icon: Search, title: "Find a tutor", copy: "Filter by subject, board and city, then book a free demo." },
  { href: "/student/schedule", icon: CalendarDays, title: "My classes", copy: "Every demo you booked, with its Meet link." },
  { href: "/student/messages", icon: MessageSquare, title: "Messages", copy: "Chat with your tutor once a demo is confirmed." },
  { href: "/student/profile", icon: UserRound, title: "My profile", copy: "Keep your subjects and goals up to date for better matches." },
  { href: "/payment", icon: CreditCard, title: "Pay for classes", copy: "Settle fees securely after you pick your tutor." },
  { href: "/contact-us", icon: LifeBuoy, title: "Help & support", copy: "Talk to the IB Gram team about anything." },
];

const hhmm = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { weekday: "long", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

/** Which parts of the student profile are still blank, so the nudge is specific. */
function profileChecklist(view: StudentProfileView | null) {
  const p = view?.profile ?? null;
  return [
    { label: "Contact number", done: Boolean(p?.phone) },
    { label: "Curriculum & grade", done: Boolean(p?.curriculum && p?.grade) },
    { label: "Subjects you need help with", done: Boolean(p?.subjects?.length) },
    { label: "City & learning mode", done: Boolean(p?.city && p?.learningModes?.length) },
    { label: "Your goals", done: Boolean(p?.goals) },
  ];
}

type StudentStats = { upcoming: Booking[]; next: Booking | null; completed: number; tutors: number };

const NO_STATS: StudentStats = { upcoming: [], next: null, completed: 0, tutors: 0 };

function studentStats(bookings: Booking[], now: number): StudentStats {
  const upcoming = bookings
    .filter((b) => (b.status === "confirmed" || b.status === "requested") && +new Date(b.scheduledAt) > now)
    .sort((a, b) => +new Date(a.scheduledAt) - +new Date(b.scheduledAt));
  return {
    upcoming,
    next: upcoming.find((b) => b.status === "confirmed") ?? upcoming[0] ?? null,
    completed: bookings.filter((b) => b.status === "completed").length,
    tutors: new Set(bookings.map((b) => b.tutor.id)).size,
  };
}

export default function StudentDashboard() {
  const router = useRouter();
  const { user } = useCurrentUser();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [profile, setProfile] = useState<StudentProfileView | null>(null);
  const [unread, setUnread] = useState(0);
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [stats, setStats] = useState<StudentStats>(NO_STATS);

  // Tutors who land here are routed to their own dashboard.
  useEffect(() => {
    if (user?.accountType === "tutor") router.replace("/tutor");
  }, [user, router]);

  useEffect(() => {
    fetchMyBookings()
      .then(({ bookings: rows }) => {
        const mine = rows.filter((b) => b.viewerRole === "student");
        setBookings(mine);
        setStats(studentStats(mine, Date.now()));
      })
      .catch(() => {});
    fetchMyDemoRequests()
      .then(({ requests: rows }) => setRequests(rows))
      .catch(() => {});
    fetchMyStudentProfile()
      .then(setProfile)
      .catch(() => {});
    fetchTutors()
      .then(({ tutors: rows }) => setTutors(rows))
      .catch(() => {});
    fetch("/api/chat/conversations/", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        const rows = (body?.conversations ?? []) as Array<{ unread?: number }>;
        setUnread(rows.reduce((sum, c) => sum + (c.unread ?? 0), 0));
      })
      .catch(() => {});
  }, []);

  const suggested = useMemo(() => {
    const mine = (profile?.profile?.subjects ?? []).map((s) => s.toLowerCase());
    const booked = new Set(bookings.map((b) => b.tutor.id));
    const score = (t: Tutor) =>
      t.subjects.filter((s) => mine.some((m) => s.toLowerCase().includes(m) || m.includes(s.toLowerCase()))).length;
    return [...tutors]
      .filter((t) => !booked.has(t.id))
      .sort((a, b) => score(b) - score(a) || (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 3);
  }, [tutors, profile, bookings]);

  const checklist = profileChecklist(profile);
  const doneCount = checklist.filter((c) => c.done).length;
  const completeness = Math.round((doneCount / checklist.length) * 100);
  const teamRequests = requests.filter((r) => !r.demoBookingId && r.status !== "cancelled");

  // No name yet (still loading, or a Google sign-up without one).
  const firstName = user?.firstName || "";

  return (
    <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
      <PageHeader
        eyebrow={
          <>
            <HeaderPill>Student dashboard</HeaderPill>
            {stats.next && <HeaderPill icon={Clock} tone="live">Next class {hhmm(stats.next.scheduledAt)}</HeaderPill>}
            {completeness === 100 && <HeaderPill icon={BadgeCheck} tone="live">Profile complete</HeaderPill>}
          </>
        }
        avatar={
          <PersonAvatar
            src={user?.avatarUrl}
            name={[user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.email || "Student"}
            className="size-24 text-3xl sm:size-28 sm:text-4xl"
          />
        }
        title={firstName ? `Welcome back, ${firstName}` : "Welcome back"}
        subtitle="Everything about your IB and IGCSE tutoring in one place — your tutors, your demo classes, your messages."
        actions={
          <>
            <Link href="/student/tutors">
              <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
                <Search className="size-4" /> Find a tutor
              </Button>
            </Link>
            <Link href="/student/messages">
              <Button variant="outline" className="h-11 gap-2 rounded-xl border-white/30 bg-white/10 font-bold text-white hover:bg-white/20 hover:text-white">
                <MessageSquare className="size-4" /> Messages{unread > 0 ? ` (${unread})` : ""}
              </Button>
            </Link>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile
          label="Upcoming classes"
          value={stats.upcoming.length}
          icon={CalendarDays}
          tone="primary"
          href="/student/schedule"
          hint={stats.upcoming.length ? "Tap to see the full list" : "Book a free demo to get started"}
        />
        <StatTile
          label="Classes completed"
          value={stats.completed}
          icon={CalendarCheck}
          tone="emerald"
          hint={stats.completed ? "Nice consistency — keep going" : "Your finished demos show up here"}
        />
        <StatTile
          label="Tutors connected"
          value={stats.tutors}
          icon={Users}
          tone="orange"
          href="/student/tutors"
          hint="Tutors you have booked at least once"
        />
        <StatTile
          label="Unread messages"
          value={unread}
          icon={MessageSquare}
          tone="violet"
          href="/student/messages"
          hint={unread ? "Your tutor is waiting on a reply" : "No new messages"}
        />
      </div>

      {/* The one thing that matters right now. */}
      {stats.next && (
        <section className="overflow-hidden rounded-2xl border border-primary/25 bg-[linear-gradient(120deg,rgba(28,71,168,0.07),rgba(43,111,216,0.03))] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Video className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-black uppercase tracking-wider text-primary">Your next class</p>
                  <StatusPill status={stats.next.status} />
                </div>
                <p className="mt-1 truncate text-lg font-black tracking-tight text-foreground">{stats.next.subject}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  with <span className="font-semibold text-foreground">{stats.next.tutor.name}</span> · {hhmm(stats.next.scheduledAt)}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {stats.next.meetLink ? (
                <a href={stats.next.meetLink} target="_blank" rel="noopener noreferrer">
                  <Button className="h-11 gap-2 rounded-xl bg-emerald-600 font-bold hover:bg-emerald-600/90">
                    <Video className="size-4" /> Join Google Meet
                  </Button>
                </a>
              ) : (
                <span className="self-center rounded-xl bg-amber-400/15 px-3.5 py-2.5 text-xs font-bold text-amber-800">
                  Waiting for your tutor to confirm
                </span>
              )}
              <Link href="/student/schedule">
                <Button variant="outline" className="h-11 gap-2 rounded-xl font-semibold">
                  All classes <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <BookingsPanel role="student" limit={3} />

          {suggested.length > 0 && (
            <SectionCard
              title="Tutors for you"
              description="Matched to the subjects on your profile. Book a free demo to try one out."
              icon={Users}
              action={
                <Link href="/student/tutors">
                  <Button size="sm" variant="outline" className="h-9 rounded-xl font-semibold">
                    See all
                  </Button>
                </Link>
              }
              bodyClassName="grid gap-3 sm:grid-cols-3"
            >
              {suggested.map((t) => (
                <Link
                  key={t.id}
                  href="/student/tutors"
                  className="group flex flex-col gap-2 rounded-2xl border border-border/60 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30"
                >
                  <PersonAvatar src={t.avatarUrl} name={t.name} className="size-12 text-base" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">{t.name}</p>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{t.headline ?? t.subjects.slice(0, 3).join(", ")}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-[11px] font-bold text-muted-foreground">
                    {t.rating ? <span className="text-[#9a4f04]">{t.rating.toFixed(1)} ★</span> : null}
                    {t.experienceYears ? <span>{t.experienceYears}+ yrs</span> : null}
                    {t.city ? <span className="truncate">{t.city}</span> : null}
                  </div>
                </Link>
              ))}
            </SectionCard>
          )}

          {teamRequests.length > 0 && (
            <SectionCard
              title="Requests with the IB Gram team"
              description="These tutors are matched by our team. We call you to fix the slot, then it appears above."
              icon={LifeBuoy}
              bodyClassName="space-y-3"
            >
              {teamRequests.map((r) => (
                <div key={r.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 p-4">
                  <div className="min-w-0">
                    <p className="truncate font-bold text-foreground">{r.subject}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {r.tutor.displayName} ·{" "}
                      {new Date(r.preferredAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                  </div>
                  <StatusPill status={r.status === "new" ? "requested" : r.status === "completed" ? "completed" : "review"} label={r.status} />
                </div>
              ))}
            </SectionCard>
          )}
        </div>

        <div className="space-y-6">
          <SectionCard
            title="Profile strength"
            description="A complete profile gets you matched with the right tutor faster."
            icon={UserRound}
            action={
              <Link href="/student/profile">
                <Button size="sm" variant="outline" className="h-9 rounded-xl font-semibold">
                  Edit
                </Button>
              </Link>
            }
          >
            <div className="mb-4 flex items-end justify-between">
              <span className="text-3xl font-black leading-none tracking-tight text-foreground">{completeness}%</span>
              <span className="text-xs font-semibold text-muted-foreground">
                {doneCount} of {checklist.length} done
              </span>
            </div>
            <Progress value={completeness} className="mb-4 h-2" />
            <ul className="space-y-2">
              {checklist.map((c) => (
                <li key={c.label} className="flex items-center gap-2 text-sm">
                  {c.done ? (
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                  ) : (
                    <Circle className="size-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <span className={c.done ? "text-muted-foreground line-through" : "font-semibold text-foreground"}>{c.label}</span>
                </li>
              ))}
            </ul>
            {completeness < 100 && (
              <Link href="/student/profile">
                <Button className="mt-4 h-11 w-full gap-2 rounded-xl font-bold">
                  Complete my profile <ArrowRight className="size-4" />
                </Button>
              </Link>
            )}
          </SectionCard>

          <SectionCard title="Quick actions" icon={ArrowRight} bodyClassName="grid gap-2">
            {QUICK_LINKS.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-border hover:bg-muted/50"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <q.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{q.title}</span>
                  <span className="block text-xs leading-snug text-muted-foreground">{q.copy}</span>
                </span>
              </Link>
            ))}
          </SectionCard>
        </div>
      </div>

      {bookings.length === 0 && requests.length === 0 && (
        <EmptyState
          icon={Search}
          title="Let's get you a tutor"
          action={
            <Link href="/student/tutors">
              <Button className="mt-1 h-11 gap-2 rounded-xl font-bold">
                Browse IB & IGCSE tutors <ArrowRight className="size-4" />
              </Button>
            </Link>
          }
        >
          Pick a subject, compare verified IB and IGCSE tutors, and book a free demo class. No card needed.
        </EmptyState>
      )}
    </div>
  );
}
