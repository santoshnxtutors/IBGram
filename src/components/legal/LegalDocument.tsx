import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export type LegalSection = {
  id: string;
  heading: string;
  /** Paragraphs, rendered in order. Bullet lists are passed as string arrays. */
  body: Array<string | string[]>;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
  footerNote: string;
};

export function LegalDocument({
  eyebrow,
  title,
  intro,
  effectiveDate,
  lastUpdated,
  sections,
  footerNote,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-14 pb-20">
        {/* Header */}
        <header className="mb-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-4">
            <ShieldCheck className="size-3" /> {eyebrow}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-base md:text-lg/relaxed text-muted-foreground font-medium">{intro}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold text-muted-foreground">
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Effective</dt>
              <dd>{effectiveDate}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Last updated</dt>
              <dd>{lastUpdated}</dd>
            </div>
          </dl>
        </header>

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          {/* Contents */}
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:self-start rounded-2xl border border-border bg-card p-5"
          >
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
              On this page
            </h2>
            <ol className="space-y-2 text-sm font-medium">
              {sections.map((section, i) => (
                <li key={section.id} className="flex gap-2">
                  <span className="text-primary tabular-nums">{i + 1}.</span>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Body */}
          <article className="max-w-3xl space-y-10">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">
                  <span className="text-primary mr-2 tabular-nums">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((block, j) =>
                    Array.isArray(block) ? (
                      <ul key={j} className="space-y-2 pl-1">
                        {block.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px]/relaxed text-muted-foreground font-medium">
                            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="text-[15px]/relaxed text-muted-foreground font-medium">
                        {block}
                      </p>
                    ),
                  )}
                </div>
              </section>
            ))}

            <p className="rounded-2xl border border-border bg-card p-5 text-sm/relaxed text-muted-foreground font-medium">
              {footerNote}
            </p>

            <p className="text-sm font-semibold text-muted-foreground">
              See also:{" "}
              <Link href="/privacy-policy/" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {" · "}
              <Link href="/terms-and-conditions/" className="text-primary hover:underline">
                Terms &amp; Conditions
              </Link>
              {" · "}
              <Link href="/contact-us/" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
