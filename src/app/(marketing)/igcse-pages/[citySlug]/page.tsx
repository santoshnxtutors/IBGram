import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  Home,
  MapPinned,
  Network,
  School,
  SearchCheck,
  ShieldCheck,
  Sigma,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { buildIgcseCityMetadata } from "@/lib/seo/metadata";
import { buildIgcseCityPageSchema } from "@/lib/seo/schema";
import { getIgcseCityPageBySlug, getLiveIgcseCityPages } from "@/lib/seo/igcse-city-pages";

type IgcseCityPageProps = {
  params: Promise<{ citySlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getLiveIgcseCityPages().map((page) => ({ citySlug: page.citySlug }));
}

export async function generateMetadata({ params }: IgcseCityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const page = getIgcseCityPageBySlug(citySlug);

  if (!page || page.status !== "live") {
    notFound();
  }

  return buildIgcseCityMetadata(page);
}

export default async function IgcseCityPage({ params }: IgcseCityPageProps) {
  const { citySlug } = await params;
  const page = getIgcseCityPageBySlug(citySlug);

  if (!page || page.status !== "live") {
    notFound();
  }

  const schema = buildIgcseCityPageSchema(page);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />

      <section className="relative overflow-hidden bg-background pt-10 pb-14 md:pt-14 md:pb-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-7 lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
                <span className="mr-2 flex size-2 rounded-full bg-primary" />
                City-wise IGCSE tutoring
              </div>

              <div className="space-y-5">
                <p className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <MapPinned className="size-4 text-secondary" />
                  {page.cityName}, {page.stateName}
                </p>
                <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  {page.h1}
                </h1>
                <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  {page.heroSubtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/contact-us/"
                  className="shimmer-btn inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Book an IGCSE Consultation
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/igcse/#subjects"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30"
                >
                  Browse IGCSE Subjects
                </Link>
              </div>

              <div className="grid gap-3 border-t border-border/50 pt-7 sm:grid-cols-2">
                {page.trustPoints.map((point) => (
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
                    <SearchCheck className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-foreground">IGCSE Match Brief</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      What IB Gram checks
                    </p>
                  </div>
                </div>

                <dl className="space-y-4">
                  {[
                    ["Boards", "Cambridge, Pearson Edexcel"],
                    ["Subjects", page.subjects.slice(0, 5).map((subject) => subject.name.replace("IGCSE ", "")).join(", ")],
                    ["Modes", "Home, online, hybrid"],
                    ["Exam focus", "Mocks and final papers"],
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

      <section className="border-y border-border/20 bg-background py-4">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6">
          {[
            ["Boards", "Cambridge and Edexcel"],
            ["Subjects", `${page.subjects.length} priority subjects`],
            ["Areas", `${page.areaNotes.length} city areas mapped`],
            ["Mode", "Home, online, hybrid"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20 text-primary">
                <GraduationCap className="size-4" />
              </div>
              <div>
                <div className="text-xl font-black leading-none text-foreground md:text-2xl">{label}</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
              <BookOpenCheck className="size-4" />
              Local academic context
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              IGCSE support for {page.cityName} families
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-7">
            {page.cityAcademicIntro.map((block) => (
              <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg" key={block}>
                {block}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <ClipboardCheck className="size-3.5" />
              Boards
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.boardSectionTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.boardSupport.map((item) => (
              <div className="rounded-2xl border border-border/50 bg-background/50 p-5" key={item}>
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <Sigma className="size-3.5" />
              Subject support
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.subjectSectionTitle}</h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Subject matching starts with the board, syllabus, paper route, current marks, weak topics and target exam session.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.subjects.map((subject) => (
              <article className="rounded-2xl border border-border/50 bg-muted/10 p-5" key={subject.name}>
                <h3 className="text-lg font-black text-foreground">{subject.name}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-primary">{subject.keyword}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{subject.description}</p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/90">{subject.cityNote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <SearchCheck className="size-3.5" />
              Tutor matching
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.matchingProcessTitle}</h2>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {page.matchingProcessSteps.map((step, index) => (
              <div className="rounded-2xl border border-border/50 bg-background/50 p-5" key={step}>
                <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-primary">Step {index + 1}</div>
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <MapPinned className="size-3.5" />
              Areas covered
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.areaSectionTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.areaNotes.map((area) => (
              <article className="rounded-2xl border border-border/50 bg-muted/10 p-5" key={area.name}>
                <h3 className="text-xl font-black text-foreground">{area.name}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{area.description}</p>
                {area.landmarks.length ? (
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    Near {area.landmarks.join(", ")}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border/50 bg-[#0B0F19]/50 p-5">
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-primary">Nearby areas parents ask about</h3>
            <div className="flex flex-wrap gap-2">
              {page.nearbyAreas.map((area) => (
                <span key={area} className="rounded-full border border-border/50 bg-background/60 px-3 py-1.5 text-xs font-bold text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <School className="size-3.5" />
              School ecosystem
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.schoolSectionTitle}</h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              School names and clusters are included only to explain parent search context and student needs. They are not affiliation claims.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.schoolEcosystem.map((school) => (
              <article className="rounded-2xl border border-border/50 bg-background/50 p-5" key={`${school.name}-${school.area}`}>
                <h3 className="text-lg font-black text-foreground">{school.name}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">{school.area}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{school.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {school.typicalNeeds.map((need) => (
                    <span key={need} className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary">
                      {need}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
            <p className="text-sm font-semibold leading-relaxed text-foreground/90">{page.schoolDisclaimer}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <Home className="size-3.5" />
              Modes
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.tutoringModeTitle}</h2>
            <div className="mt-8 grid gap-4">
              {page.tutoringModes.map((mode) => (
                <div className="rounded-2xl border border-border/50 bg-muted/10 p-5" key={mode}>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/90">{mode}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <ShieldCheck className="size-3.5" />
              Verification
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.verificationTitle}</h2>
            <div className="mt-8 grid gap-4">
              {page.tutorVerificationProcess.map((item) => (
                <div className="rounded-2xl border border-border/50 bg-[#0B0F19]/50 p-5" key={item}>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <Sparkles className="size-3.5" />
              Local proof
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.localProofTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {page.localProof.map((proof) => (
              <article className="rounded-2xl border border-border/50 bg-background/50 p-5" key={proof.title}>
                <h3 className="text-lg font-black text-foreground">{proof.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{proof.detail}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-primary">{proof.sourceLabel}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
              <Network className="size-3.5" />
              Explore next
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Useful IGCSE links for {page.cityName}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.internalLinks.map((link) => (
              <Link
                key={link.linkId}
                href={link.targetUrl}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-muted/10 p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="text-sm font-black leading-relaxed text-foreground group-hover:text-primary">{link.anchorText}</span>
                <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/45 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 space-y-4 text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">IGCSE FAQ for {page.cityName}</h2>
            <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
              Clear answers for parents comparing Cambridge IGCSE tutors, Pearson Edexcel tutors and local exam preparation.
            </p>
          </div>
          <div className="grid gap-4">
            {page.faqs.map((faq) => (
              <article className="rounded-2xl border border-border/50 bg-background/60 p-6" key={faq.question}>
                <h3 className="text-lg font-black tracking-tight text-foreground">{faq.question}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="glassmorphism space-y-7 rounded-[2.5rem] border-primary/20 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Plan IGCSE tutoring in {page.cityName}
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{page.finalCta}</p>
            <Link
              href="/contact-us/"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-8 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Contact IB Gram
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
