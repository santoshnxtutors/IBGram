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

  // Sizing scales with the viewport so the same pill fits beside the hamburger
  // on a 360px phone and still reads as the primary CTA on desktop.
  return (
    <Link
      href="/join-as-tutor"
      className={
        className ??
        "group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3.5 py-2 text-[13px] font-semibold tracking-tight text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
      }
    >
      Join as Tutor
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5 sm:size-4" />
    </Link>
  );
}
