import { GraduationCap } from "lucide-react";

/**
 * A single horizontal row of the international schools families near a locality
 * actually attend. Local proof, placed high on the page, before the long prose.
 *
 * The affiliation line is not decoration. Naming schools next to a tutoring offer
 * implies a relationship unless it is explicitly denied, so it ships with the names
 * and is not optional.
 */
export function SchoolStrip({ schools, place }: { schools: readonly string[]; place: string }) {
  if (schools.length === 0) return null;

  return (
    <section className="border-b border-border/50 bg-background py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
          <GraduationCap className="size-4" />
          <span>International schools near {place}</span>
        </div>

        {/* One row drifting left to right: the site's reviews marquee, reversed. The list renders
            twice so the loop has no seam (margin, not gap, keeps the two halves exactly equal) and
            the copy is hidden from screen readers. Hover pauses it; reduced-motion users get a
            static row they can swipe. */}
        <div className="mt-3 overflow-hidden pb-1 mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] motion-reduce:overflow-x-auto motion-reduce:mask-none">
          <ul
            className="reviews-marquee flex w-max hover:paused motion-reduce:animate-none!"
            style={{ animationDuration: `${Math.max(schools.length * 5, 30)}s`, animationDirection: "reverse" }}
          >
            {[...schools, ...schools].map((name, index) => (
              <li
                key={`${name}-${index}`}
                aria-hidden={index >= schools.length || undefined}
                className="mr-2.5 shrink-0 whitespace-nowrap rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-sm font-semibold text-foreground/90"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-3 text-xs font-medium leading-relaxed text-muted-foreground">
          School names are shown for local academic context only. IB Gram is an independent
          tutoring platform and is not affiliated with, endorsed by, or representing any school
          listed here.
        </p>
      </div>
    </section>
  );
}
