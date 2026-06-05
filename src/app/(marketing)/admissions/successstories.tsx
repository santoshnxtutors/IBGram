import Link from "next/link";
import Image from "next/image";
import { AdmissionsConsultationForm } from "./consultation-form";

// 30 success-story graphics live in /public/Admission/sucess story/1.png … 30.png.
// Each image already contains the student photo, name, course and university, so the
// card just frames the full image (object-contain) on a clean white surface.
const STORY_COUNT = 30;
const STORY_DIR = "/Admission/success-stories";
const stories = Array.from({ length: STORY_COUNT }, (_, i) => i + 1);

export default function SuccessStoriesPage() {
  return (
    <main data-page="admissions-success-stories" className="min-h-screen bg-background text-foreground">
      {/* Sub-Navigation */}
      <div className="flex justify-center px-4 pt-1 pb-4 bg-background">
        <div className="inline-flex items-center rounded-full border border-border/50 bg-background p-1">
          <Link
            href="/admissions"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
          >
            Consulting
          </Link>
          <Link
            href="/admissions/test-prep"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full text-muted-foreground transition-all hover:text-foreground sm:px-7 sm:text-xs"
          >
            Test Prep
          </Link>
          <Link
            href="/admissions/success-stories"
            className="px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] rounded-full bg-card text-foreground transition-all sm:px-7 sm:text-xs"
          >
            Success Stories
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 pt-6 pb-10 text-center md:px-6 md:pt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary sm:text-xs">
          Admissions success stories through the IBGram × Ethos Education collaboration.
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Where our students <span className="text-gradient">got in</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          A snapshot of students supported through our collaboration with Ethos Education — showcasing their admissions journeys, programmes, and the universities they joined.
        </p>
      </section>

      {/* Cards grid */}
      <section className="container mx-auto px-4 pb-16 md:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stories.map((n) => (
            <article
              key={n}
              className="group overflow-hidden rounded-3xl border border-border/40 bg-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${STORY_DIR}/${n}.png`}
                  alt={`IB Gram admissions success story ${n}`}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-contain p-3"
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Planning your own university applications? Talk to our admissions team about building a realistic,
            well-supported plan.
          </p>
          <AdmissionsConsultationForm label="Book a consultation" service="Admissions Consulting" />
        </div>
      </section>
    </main>
  );
}
