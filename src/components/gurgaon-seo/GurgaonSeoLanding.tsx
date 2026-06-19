import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, MapPin, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { buildGurgaonSeoSchema } from "@/lib/gurgaon-seo";
import type { GurgaonSeoPage } from "@/lib/gurgaon-seo/types";

type RelatedLink = { label: string; href: string };

export function GurgaonSeoLanding({ page, related }: { page: GurgaonSeoPage; related: RelatedLink[] }) {
  const { content } = page;
  const hubLinks: RelatedLink[] = [
    { label: "IB Tutors in Gurugram", href: "/ib-tutors/gurugram/" },
    { label: "IGCSE Tutors in Gurugram", href: "/igcse-tutors/gurugram/" },
    { label: "Browse all tutors", href: "/tutors/" },
    { label: "Book a free consultation", href: "/contact-us/" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={buildGurgaonSeoSchema(page)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border/40 bg-background/80">
        <div className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-3 text-xs font-semibold text-muted-foreground md:px-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden>/</span>
          <Link href={page.parentPage} className="hover:text-primary">Gurugram</Link>
          <span aria-hidden>/</span>
          <span className="text-foreground/90">{page.locality}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-10 pb-14 md:pt-14 md:pb-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-7 lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
                <span className="mr-2 flex size-2 rounded-full bg-primary" />
                {page.board} tutoring · Gurugram
              </div>
              <div className="space-y-5">
                <p className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <MapPin className="size-4 text-secondary" />
                  {page.locality}, Gurugram (Gurgaon), Haryana
                </p>
                <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                  {page.h1}
                </h1>
                <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  {content.heroIntro}
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/contact-us/"
                  className="shimmer-btn inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Request a tutor match
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/tutors/"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30"
                >
                  View all tutors
                </Link>
              </div>
              <div className="grid gap-3 border-t border-border/50 pt-7 sm:grid-cols-2">
                {content.trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/90">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-[#0B0F19]/60 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <BookOpenCheck className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-foreground">Match Brief</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">What IB Gram checks</p>
                  </div>
                </div>
                <dl className="space-y-4">
                  {[
                    ["Board", page.board],
                    ["Subject focus", page.subject],
                    ["Locality", `${page.locality}, ${page.sector}`],
                    ["Modes", "Home · Online · Hybrid"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-border/50 bg-muted/10 p-4">
                      <dt className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">{label}</dt>
                      <dd className="text-sm font-semibold leading-relaxed text-foreground/90">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Body sections */}
      <article className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          {content.sections.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="mb-4 text-2xl font-black tracking-tight text-foreground md:text-3xl">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-base font-medium leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-muted/10 p-3 text-sm font-semibold text-foreground/90">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="bg-background py-14 md:py-20" id="faq">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
                <MessageCircleQuestion className="size-3.5" />
                FAQs
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground md:text-4xl">
                {page.locality} tutoring — questions parents ask
              </h2>
            </div>
            <div className="grid gap-4">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border/50 bg-[#0B0F19]/60 p-5 open:border-primary/30 open:bg-[#0f1422]">
                  <summary className="cursor-pointer list-none text-base font-black leading-relaxed text-foreground marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-xs text-primary group-open:bg-primary group-open:text-primary-foreground">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-border/40 pt-4 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal links */}
      <section className="border-t border-border/40 bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-xl font-black tracking-tight text-foreground md:text-2xl">Explore more IB &amp; IGCSE tutoring</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[...related, ...hubLinks].map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-muted/10 px-4 py-3 text-sm font-bold text-foreground/90 transition-all hover:border-primary/40 hover:text-primary"
              >
                <span>{link.label}</span>
                <ArrowRight className="size-4 shrink-0 text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-black tracking-tight text-foreground md:text-3xl">
              Find your {page.locality} tutor
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">{content.closingCta}</p>
            <Link
              href="/contact-us/"
              className="shimmer-btn inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-8 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Book a free academic consultation
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
