import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPinned, ShieldAlert } from "lucide-react";
import { getAreaPageBySlug, getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { getNoindexSubpageDecision } from "@/lib/seo/indexing";
import { buildNoindexMetadata } from "@/lib/seo/metadata";
import { buildCityPath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

type AreaPageProps = {
  params: Promise<{ citySlug: string; areaSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    ...getLiveCitySeoPages().flatMap((page) =>
    page.premiumAreas
      .filter((area) => area.pageEnabled)
      .map((area) => ({
        citySlug: page.citySlug,
        areaSlug: area.slug,
      })),
    ),
    ...getGeneratedStaticParamsForTypes(["area"]).map(({ citySlug, areaSlug }) => ({ citySlug, areaSlug })),
  ];
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { citySlug, areaSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (generatedPage) return buildGeneratedMetadata(generatedPage);

  const page = getCitySeoPageBySlug(citySlug);
  const area = getAreaPageBySlug(citySlug, areaSlug);

  if (!page || page.status !== "live" || !area) {
    notFound();
  }

  const decision = getNoindexSubpageDecision(page.canonicalUrl, "Area page is available for users but held noindex until it has deeper unique local content.");

  return buildNoindexMetadata({
    title: `IB tutors near ${area.name}, ${page.cityName}`,
    description: `${area.description} This area page is canonicalized to the main ${page.cityName} IB tutors page until expanded.`,
    canonicalUrl: decision.canonicalUrl,
    ogImage: page.ogImage,
  });
}

export default async function CityAreaPage({ params }: AreaPageProps) {
  const { citySlug, areaSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (generatedPage) return <GeneratedPageRenderer page={generatedPage} />;

  const page = getCitySeoPageBySlug(citySlug);
  const area = getAreaPageBySlug(citySlug, areaSlug);

  if (!page || page.status !== "live" || !area) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link href={buildCityPath(page.citySlug)} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80">
          <ArrowLeft className="size-4" />
          Back to IB tutors in {page.cityName}
        </Link>

        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <MapPinned className="size-3.5" />
              Area page
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground md:text-6xl">
              IB tutors near {area.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground">{area.description}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <ShieldAlert className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Noindex-safe route</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                This area route exists for future local expansion. It is noindex and canonicalized to the main {page.cityName}
                page until it has enough unique area-specific content.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Service mode</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">{page.teachingModeNotes}</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Subjects</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              {page.subjectsWithStrongInventory.join(", ")} are common starting points, with other subjects reviewed by availability.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Next step</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">{page.localCtaText}</p>
          </div>
        </section>

        <Link
          href={buildCityPath(page.citySlug)}
          className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground"
        >
          View the full {page.cityName} IB tutor page
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
    </div>
  );
}
