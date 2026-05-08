import type { GurgaonLocalPlace } from "./gurgaon.types";

const societyNames = [
  "The Aralias",
  "The Magnolias",
  "The Camellias",
  "DLF Crest",
  "DLF Park Place",
  "DLF The Belaire",
  "DLF The Pinnacle",
  "DLF The Icon",
  "DLF Westend Heights",
  "DLF Trinity Towers",
  "DLF Richmond Park",
  "DLF Regency Park",
  "DLF Hamilton Court",
  "DLF Beverly Park",
  "DLF Princeton Estate",
  "DLF Carlton Estate",
  "DLF Wellington Estate",
  "DLF Exclusive Floors",
  "Emaar Palm Springs",
  "Emaar Marbella",
  "Emaar Emerald Hills",
  "Emaar Palm Gardens",
  "Emaar MGF Palm Drive",
  "Emaar DigiHomes",
  "M3M Golf Estate",
  "M3M Merlin",
  "M3M Skycity",
  "M3M Latitude",
  "M3M Heights",
  "M3M Capital",
  "M3M Urbana",
  "Ireo Grand Arch",
  "Ireo Victory Valley",
  "Ireo Skyon",
  "Ireo Uptown",
  "Ireo The Corridors",
  "Tata Primanti",
  "Tata La Vida",
  "Central Park Resorts",
  "Central Park Flower Valley",
  "Unitech Uniworld Gardens",
  "Unitech Fresco",
  "Unitech Escape",
  "Unitech The Close",
  "Unitech Heritage City",
  "Bestech Park View Spa",
  "Bestech Park View City",
  "Bestech Park View Sanskruti",
  "Bestech Park View Ananda",
  "Vatika City",
  "Vatika India Next",
  "Vipul Belmonte",
  "Vipul Greens",
  "Orchid Petals",
  "Orchid Island",
  "Mapsko Casa Bella",
  "Godrej Summit",
  "Godrej Air",
  "Sobha City",
  "Raheja Atlantis",
  "ATS Triumph",
  "ATS Kocoon",
  "ATS Tourmaline",
  "Puri Diplomatic Greens",
  "Ambience Caitriona",
  "Heritage City",
  "Nirvana Country",
  "South Close",
  "Mayfield Garden",
  "Malibu Towne",
  "Suncity",
];

export const gurgaonSocietyPlaces: GurgaonLocalPlace[] = societyNames.map((name) => {
  const slug = slugify(name);
  const mapping = mapSociety(name, slug);

  return {
    pageType: "society",
    name,
    slug,
    parentAreaSlug: mapping.parentAreaSlug,
    parentSectorSlug: mapping.parentSectorSlug,
    locationCluster: mapping.cluster,
    localIntent: `Parents near ${name} comparing IB tutor availability without assuming society affiliation.`,
    nearbyAreas: mapping.nearbyAreas,
    nearbySectors: mapping.nearbySectors,
    nearbySocieties: mapping.nearbySocieties,
    schoolEcosystem: ["Lancers International School", "Scottish High International School", "Pathways World School", "GD Goenka World School"],
    indexFlag: "index",
    indexReason: "mapped-local-intent",
    duplicateRisk: "low",
  };
});

function mapSociety(name: string, slug: string) {
  if (slug.includes("aralias") || slug.includes("magnolias") || slug.includes("camellias")) {
    return cluster("golf-course-road", "sector-42", "Golf Course Road luxury residential corridor", ["Golf Course Road", "DLF Phase 5"], ["Sector 42", "Sector 43"], ["DLF Crest", "DLF Park Place", "DLF The Belaire"]);
  }
  if (slug.startsWith("dlf-")) {
    return cluster("dlf-phase-5", "sector-54", "DLF phases and Golf Course Road", ["DLF Phase 5", "Golf Course Road", "DLF Phase 4"], ["Sector 42", "Sector 43", "Sector 54"], ["DLF Crest", "DLF Park Place", "DLF The Pinnacle"]);
  }
  if (slug.startsWith("emaar-")) {
    return cluster("golf-course-extension-road", "sector-65", "Emaar communities around Extension Road and Sohna Road", ["Golf Course Extension Road", "Sohna Road"], ["Sector 61", "Sector 62", "Sector 65", "Sector 66"], ["Emaar Palm Springs", "Emaar Emerald Hills", "M3M Golf Estate"]);
  }
  if (slug.startsWith("m3m-")) {
    return cluster("golf-course-extension-road", "sector-65", "M3M communities around Extension Road, Sector 65 and new corridors", ["Golf Course Extension Road", "Sohna Road"], ["Sector 65", "Sector 67", "Sector 68", "Sector 113"], ["M3M Golf Estate", "M3M Merlin", "M3M Skycity"]);
  }
  if (slug.startsWith("ireo-")) {
    return cluster("golf-course-extension-road", "sector-58", "Ireo communities near Extension Road", ["Golf Course Extension Road", "Sushant Lok 3"], ["Sector 58", "Sector 59", "Sector 60"], ["Ireo Grand Arch", "Ireo Victory Valley", "Ireo Skyon"]);
  }
  if (slug.startsWith("tata-") || slug.startsWith("central-park")) {
    return cluster("sohna-road", "sector-48", "Sohna Road and Southern Peripheral Road communities", ["Sohna Road", "Golf Course Extension Road"], ["Sector 48", "Sector 49", "Sector 66"], ["Tata Primanti", "Central Park Resorts", "Orchid Petals"]);
  }
  if (slug.startsWith("unitech-") || slug === "nirvana-country" || slug === "south-close") {
    return cluster("nirvana-country", "sector-50", "Nirvana Country and South City 2 communities", ["Nirvana Country", "South City 2", "Sohna Road"], ["Sector 49", "Sector 50", "Sector 51"], ["Nirvana Country", "Unitech Fresco", "Unitech The Close"]);
  }
  if (slug.startsWith("bestech-") || slug.startsWith("vipul-") || slug.startsWith("orchid-")) {
    return cluster("sohna-road", "sector-49", "Sohna Road and Sector 48-50 residential belt", ["Sohna Road", "South City 2"], ["Sector 48", "Sector 49", "Sector 50"], ["Bestech Park View Spa", "Vipul Greens", "Orchid Petals"]);
  }
  if (slug.startsWith("vatika-") || slug.startsWith("mapsko-") || slug.startsWith("godrej-")) {
    return cluster("new-gurgaon", "sector-83", "New Gurgaon and NH-48 residential sectors", ["New Gurgaon", "Dwarka Expressway"], ["Sector 82", "Sector 83", "Sector 84", "Sector 85", "Sector 90"], ["Vatika India Next", "Mapsko Casa Bella", "Godrej Air"]);
  }
  if (slug.startsWith("ats-") || slug.startsWith("puri-") || slug === "sobha-city") {
    return cluster("dwarka-expressway", "sector-108", "Dwarka Expressway premium residential belt", ["Dwarka Expressway", "Palam Vihar"], ["Sector 99", "Sector 102", "Sector 104", "Sector 108", "Sector 109"], ["Sobha City", "Puri Diplomatic Greens", "ATS Triumph"]);
  }
  if (slug === "ambience-caitriona" || slug === "heritage-city") {
    return cluster("mg-road", "sector-24", "MG Road, Ambience and DLF Cyber City side", ["MG Road", "DLF Phase 2", "DLF Phase 3"], ["Sector 24", "Sector 25", "Sector 28"], ["Ambience Caitriona", "Heritage City", "DLF Beverly Park"]);
  }

  return cluster("sector-road-huda-sectors-cluster", "sector-47", `${name} and nearby Gurugram residential pockets`, ["Sector Road / HUDA sectors cluster", "Sohna Road"], ["Sector 45", "Sector 46", "Sector 47"], ["Mayfield Garden", "Malibu Towne", "Suncity"]);
}

function cluster(
  parentAreaSlug: string,
  parentSectorSlug: string,
  clusterName: string,
  nearbyAreas: string[],
  nearbySectors: string[],
  nearbySocieties: string[],
) {
  return { parentAreaSlug, parentSectorSlug, cluster: clusterName, nearbyAreas, nearbySectors, nearbySocieties };
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
