"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stars } from "@/components/dashboard/ui";
import { BadgeCheck, CheckCircle2, Loader2, Star } from "lucide-react";

type Tutor = {
  id: string;
  slug: string;
  displayName: string;
  headline: string | null;
  avatarUrl: string | null;
  verified: boolean;
};

type Curriculum = "IB" | "IGCSE" | "BOTH";
const field = "h-12 rounded-xl";

/** Public review form reached from a tutor's shared link or QR code. */
export function ReviewFormClient({ tutor, rating, count }: { tutor: Tutor; rating: number | null; count: number }) {
  const [stars, setStars] = useState(5);
  const [authorName, setAuthorName] = useState("");
  const [authorRole, setAuthorRole] = useState("");
  const [location, setLocation] = useState("");
  const [curriculum, setCurriculum] = useState<Curriculum | "">("");
  const [quote, setQuote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch(`/api/reviews/${encodeURIComponent(tutor.slug)}/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          authorName,
          authorRole,
          location,
          curriculum: curriculum || null,
          rating: stars,
          quote,
        }),
      });
      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) throw new Error(body?.error ?? "Could not send your review. Please try again.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your review.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-muted/30 px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-xl">
        {/* Who you are reviewing */}
        <div className="mb-6 flex items-center gap-4 rounded-3xl border border-border/60 bg-card p-5 shadow-[0_1px_2px_rgba(11,21,48,0.04)]">
          <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-primary/10 text-xl font-black text-primary">
            {tutor.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tutor.avatarUrl} alt="" className="size-full object-cover" />
            ) : (
              tutor.displayName.slice(0, 1).toUpperCase()
            )}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-xl font-black tracking-tight text-foreground">{tutor.displayName}</h1>
              {tutor.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                  <BadgeCheck className="size-3" /> Verified
                </span>
              )}
            </div>
            {tutor.headline && <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">{tutor.headline}</p>}
            {rating !== null && count > 0 && (
              <div className="mt-1.5 flex items-center gap-2">
                <Stars rating={rating} />
                <span className="text-xs font-bold text-muted-foreground">
                  {rating.toFixed(1)} · {count} review{count === 1 ? "" : "s"}
                </span>
              </div>
            )}
          </div>
        </div>

        {done ? (
          <div className="rounded-3xl border border-emerald-500/30 bg-card p-8 text-center shadow-[0_1px_2px_rgba(11,21,48,0.04)]">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-500/12 text-emerald-700">
              <CheckCircle2 className="size-7" />
            </span>
            <h2 className="mt-4 text-xl font-black tracking-tight text-foreground">Thank you!</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your review has been sent to the IB Gram team. Once it is checked it appears on {tutor.displayName}&rsquo;s profile.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Link href={`/tutor-profile/${tutor.id}/`}>
                <Button className="h-11 rounded-xl font-bold">See the profile</Button>
              </Link>
              <Link href="/tutors/">
                <Button variant="outline" className="h-11 rounded-xl font-semibold">
                  Browse tutors
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="space-y-5 rounded-3xl border border-border/60 bg-card p-5 shadow-[0_1px_2px_rgba(11,21,48,0.04)] sm:p-7"
          >
            <div>
              <h2 className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground">
                <Star className="size-5 text-[#e8780c]" /> Write a review
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                A couple of honest sentences helps other IB and IGCSE families enormously. Takes a minute.
              </p>
            </div>

            <div>
              <Label className="text-xs">Your rating *</Label>
              <div className="mt-2 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setStars(n)}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    aria-pressed={stars === n}
                    className="rounded-lg p-1 transition-transform hover:scale-110"
                  >
                    <Star className={`size-8 ${n <= stars ? "fill-[#e8780c] text-[#e8780c]" : "fill-border text-border"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="authorName" className="text-xs">Your name *</Label>
                <Input
                  id="authorName"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className={field}
                  placeholder="Ananya S."
                  maxLength={120}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="authorRole" className="text-xs">You are a…</Label>
                <select
                  id="authorRole"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="h-12 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                >
                  <option value="">Choose one…</option>
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="location" className="text-xs">City (optional)</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={field}
                  placeholder="Gurugram"
                  maxLength={120}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="curriculum" className="text-xs">Curriculum (optional)</Label>
                <select
                  id="curriculum"
                  value={curriculum}
                  onChange={(e) => setCurriculum(e.target.value as Curriculum | "")}
                  className="h-12 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
                >
                  <option value="">Choose one…</option>
                  <option value="IB">IB</option>
                  <option value="IGCSE">IGCSE</option>
                  <option value="BOTH">Both</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="quote" className="text-xs">Your review *</Label>
              <textarea
                id="quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                minLength={20}
                maxLength={2000}
                required
                placeholder="What did they help you with, and what changed? Grades, confidence, exam technique…"
                className="min-h-32 w-full resize-y rounded-xl border border-border bg-background p-3.5 text-sm leading-relaxed outline-none focus:border-primary"
              />
              <p className="text-right text-[11px] text-muted-foreground">{quote.length} / 2000</p>
            </div>

            {error && (
              <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" disabled={busy} className="h-12 w-full gap-2 rounded-xl text-base font-bold">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Star className="size-4" />}
              {busy ? "Sending…" : "Send my review"}
            </Button>
            <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
              Reviews are checked by the IB Gram team before publishing. Only your name, role and city are shown — never your contact details.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
