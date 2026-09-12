import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * "Join as tutor" CTA. Links to the standalone /join-as-tutor page rather than
 * opening a modal — the form is long enough (contact, address, academic
 * background, subject expertise, uploads) that a dialog had to scroll inside a
 * scrolling page and ran off the top of the viewport on laptop screens.
 *
 * A plain Link, so it needs no client bundle and prefetches like any other nav.
 */
export function JoinAsTutorButton({
  variant = "solid",
  className,
}: {
  /** "solid" for the header pill, "link" for the footer nav column. */
  variant?: "solid" | "link";
  className?: string;
}) {
  if (variant === "link") {
    return (
      <Link href="/join-as-tutor" className={className ?? "transition-colors hover:text-primary"}>
        Join as Tutor
      </Link>
    );
  }

  return (
    <Link
      href="/join-as-tutor"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-sm ring-1 ring-black/5 transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      }
    >
      Join as Tutor
      <ArrowRight className="size-4" />
    </Link>
  );
}
