import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { JoinOptions } from "@/components/tutors/JoinOptions";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { getTutorJobDirectoryLinks } from "@/lib/tutor-jobs-seo";

export const metadata: Metadata = {
  title: "Join as a Tutor — Teach IB and IGCSE Students",
  description:
    "Apply to tutor IB and IGCSE students with IB Gram. Share your subjects, curricula and teaching experience, upload your CV, and our academic team will review your profile.",
  alternates: { canonical: "/join-as-tutor/" },
  // An application form has nothing to rank for and should not compete with the
  // tutor-facing marketing pages, but it must stay crawlable so it can be linked.
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: absoluteUrl("/join-as-tutor/"),
    title: "Join as a Tutor — Teach IB and IGCSE Students",
    description: "Apply to tutor IB and IGCSE students with IB Gram.",
    siteName: "IB Gram",
  },
};

const POINTS = [
  "Work with IB DP, MYP, PYP and IGCSE students across Cambridge and Pearson Edexcel",
  "Choose online, home or hybrid teaching and set the hours you can genuinely commit to",
  "Get matched by subject and level, not by postcode alone",
  "Every profile is reviewed by our academic team before it goes live",
];

export default function JoinAsTutorPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border/50 bg-muted/60 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:order-2 lg:col-span-5">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary">
                Tutor applications
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl">
                Teach IB and IGCSE students with IB Gram
              </h1>
              <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                Sign up and build your own tutor profile, or fill in the form and let our team build it for
                you. Either way takes a few minutes.
              </p>
              <ul className="space-y-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-primary/20 bg-card p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">How you get paid</p>
                <ul className="mt-3 space-y-2 text-sm font-medium text-foreground/90">
                  <li><span className="font-bold">Home tuition:</span> first month split 50-50, then 100% of the fee is yours.</li>
                  <li><span className="font-bold">Online classes:</span> 70% to you, 30% platform fee.</li>
                  <li><span className="font-bold">Payouts:</span> monthly on the 1st. September&apos;s fees are deposited on 1 October.</li>
                </ul>
                <Link href="/tutor-policy/" className="mt-3 inline-block text-sm font-bold text-primary hover:underline">
                  Read the full tutor policy
                </Link>
              </div>
              <p className="text-xs font-medium leading-relaxed text-muted-foreground/70">
                IB Gram is an independent tutoring platform and is not affiliated with the IB Organization,
                Cambridge International or Pearson Edexcel. Applying does not guarantee placement.
              </p>
            </div>

            <div className="lg:order-1 lg:col-span-7">
              <JoinOptions />
            </div>
          </div>
        </div>
      </section>

      {/* The tutor-recruitment pages' only entry point from the rest of the site. Without it
          they are orphans with zero internal links, which is what kept earlier page sets out
          of the index even with clean sitemaps. */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Tutoring work by board, subject and location
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
            Longer guides to what each kind of tutoring involves — the curriculum detail, what you earn and the
            terms you are agreeing to.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {getTutorJobDirectoryLinks().map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
