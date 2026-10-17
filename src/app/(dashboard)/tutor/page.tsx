"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookingsPanel } from "@/components/dashboard/BookingsPanel";
import { ProfileVisibility } from "@/components/dashboard/ProfileVisibility";
import { ReviewShare } from "@/components/dashboard/ReviewShare";
import { EmptyState, HeaderPill, PageHeader, SectionCard, StatTile, Stars, StatusPill } from "@/components/dashboard/ui";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import { fetchMyBookings, type Booking } from "@/lib/bookings/api";
import { fetchTutorOverview, money, type TutorOverview } from "@/lib/tutor/overview";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CalendarDays,
  Clock,
  Eye,
  EyeOff,
  ExternalLink,
  LifeBuoy,
  MessageSquare,
  ScrollText,
  Star,
  UserRound,
  Users,
  Video,
  Wallet,
} from "lucide-react";

const hhmm = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { weekday: "long", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const QUICK_LINKS = [
  { href: "/tutor/profile", icon: UserRound, title: "Edit my profile", copy: "Subjects, rate, locations, qualifications and FAQs." },
  { href: "/tutor/students", icon: Users, title: "My students", copy: "Everyone you have taught, with a direct chat link." },
  { href: "/tutor/reviews", icon: Star, title: "Reviews & QR", copy: "Share your review link and track what comes in." },
  { href: "/tutor/earnings", icon: Wallet, title: "Earnings", copy: "Payments students made for your classes." },
  { href: "/tutor/policy", icon: ScrollText, title: "Tutor policy", copy: "How payouts, conduct and cancellations work." },
  { href: "/contact-us", icon: LifeBuoy, title: "Help & support", copy: "Reach the IB Gram team." },
];

type TutorStats = {
  pending: number;
  upcoming: Booking[];
  next: Booking | null;
  completed: number;
  students: number;
};

const NO_STATS: TutorStats = { pending: 0, upcoming: [], next: null, completed: 0, students: 0 };

function tutorStats(bookings: Booking[], now: number): TutorStats {
  const upcoming = bookings
    .filter((b) => (b.status === "confirmed" || b.status === "requested") && +new Date(b.scheduledAt) > now)
    .sort((a, b) => +new Date(a.scheduledAt) - +new Date(b.scheduledAt));
  return {
    pending: bookings.filter((b) => b.status === "requested").length,
    upcoming,
    next: upcoming.find((b) => b.status === "confirmed") ?? null,
    completed: bookings.filter((b) => b.status === "completed").length,
    students: new Set(bookings.filter((b) => b.status !== "cancelled").map((b) => b.student.id)).size,
  };
}

export default function TutorDashboard() {
  const router = useRouter();
  const { user } = useCurrentUser();

  const [overview, setOverview] = useState<TutorOverview | null>(null);
  const [unread, setUnread] = useState(0);
  const [stats, setStats] = useState<TutorStats>(NO_STATS);

  // Students who land here are routed to their own dashboard.
  useEffect(() => {
    if (user?.accountType === "student") router.replace("/student");
  }, [user, router]);

  useEffect(() => {
    fetchMyBookings()
      .then(({ bookings: rows }) => {
        setStats(tutorStats(rows.filter((b) => b.viewerRole === "tutor"), Date.now()));
      })
      .catch(() => {});
    fetchTutorOverview().then(setOverview);
    fetch("/api/chat/conversations/", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        const rows = (body?.conversations ?? []) as Array<{ unread?: number }>;
        setUnread(rows.reduce((sum, c) => sum + (c.unread ?? 0), 0));
      })
      .catch(() => {});
  }, []);

  const tutor = overview?.tutor ?? null;
  const reviews = overview?.reviews;
  const earnings = overview?.earnings;
  // No name yet (still loading, or a profile without one): greet without a blank "there".
  const firstName = user?.firstName || tutor?.displayName?.split(" ")[0] || "";

  return (
    <div className="space-y-6 duration-500 animate-in fade-in slide-in-from-bottom-4">
      <PageHeader
        eyebrow={
          <>
            <HeaderPill icon={Users}>Tutor dashboard</HeaderPill>
            {tutor?.publicState === "live" && <HeaderPill icon={Eye} tone="live">Live on IB Gram</HeaderPill>}
            {tutor?.publicState === "hidden" && <HeaderPill icon={EyeOff} tone="muted">Profile hidden</HeaderPill>}
            {tutor?.publicState === "pending" && <HeaderPill icon={Clock} tone="warn">Waiting for approval</HeaderPill>}
            {tutor?.verified && <HeaderPill icon={BadgeCheck} tone="live">Verified</HeaderPill>}
            {stats.pending > 0 && (
              <HeaderPill icon={AlertCircle} tone="warn">
                {stats.pending} new demo request{stats.pending > 1 ? "s" : ""}
              </HeaderPill>
            )}
          </>
        }
        avatar={
          <PersonAvatar
            src={tutor?.avatarUrl ?? user?.avatarUrl}
            name={tutor?.displayName || firstName || "Tutor"}
            className="size-24 text-3xl sm:size-28 sm:text-4xl"
          />
        }
        title={firstName ? `Welcome back, ${firstName}` : "Welcome back"}
        subtitle="Accept demo requests, keep your profile sharp and collect reviews — all from here."
        actions={
          <>
            {tutor && (
              <Link href={`/tutor-profile/${tutor.id}/`} target="_blank">
                <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
                  <ExternalLink className="size-4" /> View public profile
                </Button>
              </Link>
            )}
            <Link href="/tutor/profile">
              <Button variant="outline" className="h-11 gap-2 rounded-xl border-white/30 bg-white/10 font-bold text-white hover:bg-white/20 hover:text-white">
                <UserRound className="size-4" /> Edit profile
              </Button>
            </Link>
          </>
        }
      />

      {!tutor && overview && (
        <EmptyState
          icon={UserRound}
          title="Create your tutor profile"
          action={
            <Link href="/tutor/profile">
              <Button className="mt-1 h-11 gap-2 rounded-xl font-bold">
                Start my profile <ArrowRight className="size-4" />
              </Button>
            </Link>
          }
        >
          Add your subjects, experience and city. Once our team approves it, students can find you and book demo classes.
        </EmptyState>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatTile
          label="New demo requests"
          value={stats.pending}
          icon={AlertCircle}
          tone={stats.pending > 0 ? "orange" : "primary"}
          href="/tutor/schedule"
          hint={stats.pending > 0 ? "Accept to send the Meet link" : "Nothing waiting on you"}
        />
        <StatTile
          label="Upcoming classes"
          value={stats.upcoming.length}
          icon={CalendarDays}
          tone="primary"
          href="/tutor/schedule"
          hint={stats.next ? hhmm(stats.next.scheduledAt) : "No confirmed class yet"}
        />
        <StatTile
          label="Students"
          value={stats.students}
          icon={Users}
          tone="violet"
          href="/tutor/students"
          hint={`${stats.completed} class${stats.completed === 1 ? "" : "es"} completed`}
        />
        <StatTile
          label="Rating"
          value={reviews?.rating ? reviews.rating.toFixed(1) : "—"}
          unit={reviews?.rating ? "/ 5" : undefined}
          icon={Star}
          tone="orange"
          href="/tutor/reviews"
          hint={reviews?.count ? `${reviews.count} published review${reviews.count === 1 ? "" : "s"}` : "Share your link to get your first"}
        />
        <StatTile
          label="Earned this month"
          value={earnings ? money(earnings.thisMonth, earnings.currency) : "—"}
          icon={Wallet}
          tone="emerald"
          href="/tutor/earnings"
          hint={earnings?.total ? `${money(earnings.total, earnings.currency)} all time` : "Payments appear here once received"}
        />
      </div>

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
                  with <span className="font-semibold text-foreground">{stats.next.student.name}</span> · {hhmm(stats.next.scheduledAt)}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {stats.next.meetLink ? (
                <a href={stats.next.meetLink} target="_blank" rel="noopener noreferrer">
                  <Button className="h-11 gap-2 rounded-xl bg-emerald-600 font-bold hover:bg-emerald-600/90">
                    <Video className="size-4" /> Start the class
                  </Button>
                </a>
              ) : (
                <Link href={`/demo/${stats.next.id}`}>
                  <Button className="h-11 gap-2 rounded-xl font-bold">
                    <Video className="size-4" /> Open the room
                  </Button>
                </Link>
              )}
              <Link href="/tutor/messages">
                <Button variant="outline" className="h-11 gap-2 rounded-xl font-semibold">
                  <MessageSquare className="size-4" /> Chat{unread > 0 ? ` (${unread})` : ""}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <BookingsPanel role="tutor" limit={3} />
          {tutor && <ReviewShare slug={tutor.slug} displayName={tutor.displayName} />}
        </div>

        <div className="space-y-6">
          {tutor && <ProfileVisibility />}

          <SectionCard
            title="Latest reviews"
            description={reviews?.pending ? `${reviews.pending} waiting for our team to publish.` : undefined}
            icon={Star}
            action={
              <Link href="/tutor/reviews">
                <Button size="sm" variant="outline" className="h-9 rounded-xl font-semibold">
                  All
                </Button>
              </Link>
            }
            bodyClassName="space-y-3"
          >
            {!reviews?.items.length ? (
              <EmptyState icon={Star} title="No reviews yet">
                Share your review link or QR after a good session — reviews are the single biggest reason students pick a tutor.
              </EmptyState>
            ) : (
              reviews.items.slice(0, 3).map((r) => (
                <div key={r.id} className="rounded-2xl border border-border/60 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="truncate text-sm font-bold text-foreground">{r.authorName}</p>
                    <StatusPill status={r.status} label={r.status === "review" ? "pending" : r.status} />
                  </div>
                  <Stars rating={r.rating} className="mt-1.5" />
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{r.quote}</p>
                </div>
              ))
            )}
          </SectionCard>

          <SectionCard title="Quick actions" icon={CalendarCheck} bodyClassName="grid gap-2">
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
    </div>
  );
}
