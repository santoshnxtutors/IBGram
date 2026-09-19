/**
 * Some generated pages are national or global rather than local (/courses/*,
 * /programmes/*, /igcse/subject/*) and carry a placeholder in `cityName`.
 * Interpolating it produced headings like "tutoring FAQs for Global" and
 * "Ready to plan IGCSE support in Global?", so every consumer that puts
 * cityName into a sentence has to suppress these first.
 */
const NON_LOCAL_CITY_NAMES = new Set(["india", "global", "worldwide", "international"]);

export function localCityLabel(cityName: string | undefined): string {
  const value = (cityName ?? "").trim();
  return NON_LOCAL_CITY_NAMES.has(value.toLowerCase()) ? "" : value;
}
