import { getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { getIgcseCityPageBySlug, getLiveIgcseCityPages } from "@/lib/seo/igcse-city-pages";

export function getIgcseTutorCityPage(citySlug: string) {
  return getIgcseCityPageBySlug(citySlug);
}

export function getIgcseTutorCityStaticParams() {
  return getLiveIgcseCityPages().map((page) => ({ citySlug: page.citySlug }));
}

export function getIgcseTutorAreaStaticParams() {
  return getLiveCitySeoPages().flatMap((page) =>
    page.premiumAreas
      .filter((area) => area.pageEnabled)
      .map((area) => ({
        citySlug: page.citySlug,
        areaSlug: area.slug,
      })),
  );
}

export function getIgcsePlaceName(citySlug: string, slug: string, type: "area" | "sector" | "society" | "school" | "subject"): string {
  const cityPage = getCitySeoPageBySlug(citySlug);
  const normalizedSlug = normalizeSlug(slug);

  if (type === "area") {
    return cityPage?.premiumAreas.find((area) => area.slug === normalizedSlug)?.name ?? titleFromSlug(slug);
  }

  if (type === "school") {
    return cityPage?.ibSchoolsCity.find((school) => school.slug === normalizedSlug)?.name ?? titleFromSlug(slug);
  }

  return titleFromSlug(slug);
}

export function buildIgcseTutorMetadataTitle(cityName: string, placeName?: string): string {
  return placeName ? `IGCSE tutors near ${placeName}, ${cityName}` : `IGCSE tutors in ${cityName}`;
}

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => (part.length <= 3 ? part.toUpperCase() : `${part.charAt(0).toUpperCase()}${part.slice(1)}`))
    .join(" ");
}

function normalizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
