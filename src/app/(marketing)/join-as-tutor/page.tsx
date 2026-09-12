import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { TutorApplicationForm } from "@/components/tutors/TutorApplicationForm";
import { absoluteUrl } from "@/lib/seo/slug-utils";

export const metadata: Metadata = {
  title: "Join as a Tutor — Teach IB and IGCSE Students",
  description:
    "Apply to tutor IB and IGCSE students with IB Gram. Share your subjects, curricula and teaching experience, upload your CV, and our academic team will review your profile.",
  alternates: { canonical: "/join-as-tutor/" },
  // An application form has nothing to rank for and should not compete with the
  // tutor-facing marketing pages, but it must stay crawlable so it can be linked.
  robots: { index: false, follow: true },
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
                Tell us what you teach, where you are and how you prefer to work. The form takes a few
                minutes, and you can attach a CV if you have one to hand.
              </p>
              <ul className="space-y-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium leading-relaxed text-muted-foreground/70">
                IB Gram is an independent tutoring platform and is not affiliated with the IB Organization,
                Cambridge International or Pearson Edexcel. Applying does not guarantee placement.
              </p>
            </div>

            <div className="lg:order-1 lg:col-span-7">
              <TutorApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
