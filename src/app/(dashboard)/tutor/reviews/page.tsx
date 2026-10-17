"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReviewShare } from "@/components/dashboard/ReviewShare";
import { EmptyState, HeaderPill, PageHeader, SectionCard, StatTile, Stars, StatusPill } from "@/components/dashboard/ui";
import { fetchTutorOverview, type TutorOverview } from "@/lib/tutor/overview";
import { Clock, Loader2, MessageSquareQuote, Star, UserRound } from "lucide-react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "pending", label: "Pending" },
] as const;

const NO_ITEMS: TutorOverview["reviews"]["items"] = [];

const day = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function TutorReviewsPage() {
  const [overview, setOverview] = useState<TutorOverview | null>(null);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  useEffect(() => {
    fetchTutorOverview().then(setOverview);
  }, []);

  const items = overview?.reviews.items ?? NO_ITEMS;
  const shown = useMemo(
    () =>
      items.filter((r) =>
        filter === "all" ? true : filter === "published" ? r.status === "published" : r.status === "review" || r.status === "draft",
      ),
    [items, filter],
  );

  const reviews = overview?.reviews;
  const tutor = overview?.tutor;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={
          <>
            <HeaderPill icon={Star}>Reviews</HeaderPill>
            {reviews?.rating ? <HeaderPill tone="live">{reviews.rating.toFixed(1)} average</HeaderPill> : null}
            {reviews?.pending ? <HeaderPill icon={Clock} tone="warn">{reviews.pending} pending</HeaderPill> : null}
          </>
        }
        title="Reviews from your students"
        subtitle="Published reviews show on your public profile and in the tutor directory. Our team checks each one before it goes live."
        actions={
          tutor ? (
            <Link href={`/tutor-profile/${tutor.id}/`} target="_blank">
              <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
                <UserRound className="size-4" /> See my profile
              </Button>
            </Link>
          ) : null
        }
      />

      {!overview ? (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Loading your reviews…
        </p>
      ) : !tutor ? (
        <EmptyState
          icon={UserRound}
          title="Create your tutor profile first"
          action={
            <Link href="/tutor/profile">
              <Button className="mt-1 h-11 rounded-xl font-bold">Start my profile</Button>
            </Link>
          }
        >
          Your review link is built from your profile, so set that up and this page comes alive.
        </EmptyState>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatTile
              label="Average rating"
              value={reviews?.rating ? reviews.rating.toFixed(1) : "—"}
              unit={reviews?.rating ? "/ 5" : undefined}
              icon={Star}
              tone="orange"
            />
            <StatTile label="Published" value={reviews?.published ?? 0} icon={MessageSquareQuote} tone="emerald" />
            <StatTile
              label="Pending review"
              value={reviews?.pending ?? 0}
              icon={Clock}
              tone="violet"
              hint={reviews?.pending ? "Our team is checking these" : "Nothing waiting"}
            />
            <StatTile label="Total collected" value={items.length} icon={Star} tone="primary" />
          </div>

          <ReviewShare slug={tutor.slug} displayName={tutor.displayName} />

          <SectionCard
            title="Everything collected"
            icon={MessageSquareQuote}
            action={
              <div className="flex gap-1 rounded-xl bg-muted p-1">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFilter(f.key)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                      filter === f.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            }
            bodyClassName="space-y-3"
          >
            {shown.length === 0 ? (
              <EmptyState icon={Star} title={filter === "all" ? "No reviews yet" : "Nothing in this filter"}>
                {filter === "all"
                  ? "Send your review link after a session that went well. Two lines from a happy student is all it takes."
                  : "Switch the filter above to see your other reviews."}
              </EmptyState>
            ) : (
              shown.map((r) => (
                <article key={r.id} className="rounded-2xl border border-border/60 p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate font-bold text-foreground">{r.authorName}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {[r.authorRole, r.location].filter(Boolean).join(" · ") || "Student"} · {day(r.createdAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stars rating={r.rating} />
                      <StatusPill status={r.status} label={r.status === "review" ? "pending" : r.status} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{r.quote}</p>
                </article>
              ))
            )}
          </SectionCard>
        </>
      )}
    </div>
  );
}
