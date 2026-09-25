import type { CountrySeoPage } from "@/lib/country-seo/types";

/**
 * An Indian city landing page (ibgram.com/<city-slug>/), rendered with the same CountryLanding
 * layout as /gurgaon/. The Country fields hold the city: countryName "Mumbai", demonym "Mumbai".
 */
export interface CitySeoPage extends CountrySeoPage {
  /** State or union territory, e.g. "Maharashtra". */
  state: string;
  /** ISO 3166-2 subdivision code, e.g. "IN-MH". */
  stateCode: string;
  geo: { latitude: number; longitude: number };
  /** Other names the city is searched by, e.g. ["Bombay"]. */
  alternateNames?: string[];
  /** Wikipedia URL for the city, used as schema sameAs. */
  wikipedia?: string;
  /** IB / IGCSE schools for the sliding strip. Only schools confirmed to offer IB or Cambridge/Edexcel. */
  stripSchools: string[];
}
