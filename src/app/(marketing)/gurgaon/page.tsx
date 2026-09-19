import type { Metadata } from "next";
import { CountryLanding } from "@/components/country-seo/CountryLanding";
import { gurgaon, gurgaonIbIgcseSchools } from "@/lib/country-seo/countries/gurgaon";
import { getGurgaonHubKeywordDirectory } from "@/lib/gurgaon-keywords";
import { buildGurgaonHubMetadata, buildGurgaonHubSchema, getGurgaonSeoDirectory } from "@/lib/gurgaon-seo";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";

/** Tutor cards on /gurgaon/: tutors whose primary or available city is Gurugram (Gurgaon). */
const isGurgaonSlug = (slug: string) => /^(gurugram|gurgaon)$/i.test(slug.trim());

// /gurgaon/ - the IB and IGCSE homepage for Gurugram. Same layout as /usa, Gurgaon-specific
// metadata and JSON-LD, and a directory of every /gurgaon/<slug>/ page: subject pages first, then
// locality pages.
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildGurgaonHubMetadata(gurgaon);
}

export default async function GurgaonHubPage() {
  const [allTutors, homepageTutors, reviews] = await Promise.all([getPublicTutorsFromDb(), getVisibleTutorsForPage("/"), getPublicHomepageReviews()]);
  // Tutors located in Gurgaon; the homepage tutors only if none are, so the section never renders empty.
  const gurgaonTutors = (allTutors ?? []).filter((tutor) => [tutor.primaryCitySlug, ...tutor.availableCitySlugs].some(isGurgaonSlug)).slice(0, 6);
  const tutors = gurgaonTutors.length > 0 ? gurgaonTutors : homepageTutors;
  const groups = [...getGurgaonHubKeywordDirectory(), ...getGurgaonSeoDirectory()];

  return (
    <CountryLanding
      page={gurgaon}
      tutors={tutors ?? undefined}
      reviews={reviews ?? undefined}
      schema={buildGurgaonHubSchema(gurgaon)}
      schoolStrip={{ schools: gurgaonIbIgcseSchools, place: "Gurgaon" }}
      directory={
        groups.length > 0
          ? {
              eyebrow: "Every Gurgaon page",
              title: "IB and IGCSE tutors across Gurgaon, by subject and by area",
              lead: "Start with a subject: home tutors, private and one-to-one tuition, and tuition at home for IB and IGCSE anywhere in Gurgaon. Or pick your locality: each area page covers one subject in one part of Gurgaon, with nearby schools, home-session timing and a free trial class.",
              groups,
            }
          : undefined
      }
    />
  );
}
