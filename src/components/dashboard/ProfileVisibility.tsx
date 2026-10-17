"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/dashboard/ui";
import { Eye, EyeOff, Globe, Loader2 } from "lucide-react";
import { fetchTutorOverview, setTutorHidden, type TutorPublicState } from "@/lib/tutor/overview";

/**
 * "Hide my profile" — the tutor's own switch. Hiding pauses the public listing
 * (directory, profile page, sitemap, new bookings) and keeps everything else.
 */
export function ProfileVisibility() {
  const [state, setState] = useState<TutorPublicState | null>(null);
  const [slug, setSlug] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTutorOverview().then(({ tutor }) => {
      setState(tutor?.publicState ?? "offline");
      setSlug(tutor?.slug ?? "");
    });
  }, []);

  if (state === null) {
    return (
      <SectionCard title="Profile visibility" icon={Globe}>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Checking your profile…
        </p>
      </SectionCard>
    );
  }

  const hidden = state === "hidden";
  const canToggle = state === "live" || state === "hidden";

  const toggle = async () => {
    setBusy(true);
    setError(null);
    try {
      await setTutorHidden(!hidden);
      setState(hidden ? "live" : "hidden");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update your visibility.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <SectionCard
      title="Profile visibility"
      description="You decide when your profile is listed on IB Gram. Hiding it keeps everything saved — your bookings, chats and reviews stay untouched."
      icon={Globe}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span
            className={`grid size-11 shrink-0 place-items-center rounded-2xl ${
              hidden || !canToggle ? "bg-muted text-muted-foreground" : "bg-emerald-500/12 text-emerald-700"
            }`}
          >
            {hidden || !canToggle ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
          </span>
          <div>
            <p className="font-bold text-foreground">
              {state === "pending"
                ? "Waiting for approval"
                : state === "offline"
                  ? "Not listed yet"
                  : hidden
                    ? "Hidden from the site"
                    : "Live on IB Gram"}
            </p>
            <p className="mt-0.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {state === "pending"
                ? "Our team reviews every new tutor profile. You go live as soon as it is approved."
                : state === "offline"
                  ? "Finish your tutor profile and our team will review it for listing."
                  : hidden
                    ? "Students cannot find you in the directory or open your profile page, and new demo bookings are closed."
                    : "Students can find you in the directory and book a demo class with you."}
            </p>
            {canToggle && slug && (
              <Link
                href={`/tutor-profile/${slug}/`}
                target="_blank"
                className="mt-1.5 inline-block text-xs font-bold text-primary underline underline-offset-4"
              >
                /tutor-profile/{slug}/
              </Link>
            )}
          </div>
        </div>

        {canToggle && (
          <Button
            onClick={toggle}
            disabled={busy}
            variant={hidden ? "default" : "outline"}
            className="h-11 shrink-0 gap-2 rounded-xl font-bold"
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : hidden ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
            {busy ? "Saving…" : hidden ? "Show my profile" : "Hide my profile"}
          </Button>
        )}
        {state === "offline" && (
          <Link href="/tutor/profile" className="shrink-0">
            <Button className="h-11 rounded-xl font-bold">Finish my profile</Button>
          </Link>
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">{error}</p>
      )}
    </SectionCard>
  );
}
