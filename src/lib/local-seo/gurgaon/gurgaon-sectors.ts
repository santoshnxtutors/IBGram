import type { GurgaonLocalPlace } from "./gurgaon.types";

const sectorNumbers = [
  14, 15, 21, 22, 23, 27, 28, 29, 30, 31, 32, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
  90, 91, 92, 93, 95, 99, 102, 103, 104, 106, 107, 108, 109, 110, 111, 112, 113,
];

export const gurgaonSectorPlaces: GurgaonLocalPlace[] = sectorNumbers.map((sectorNumber) => {
  const mapping = getSectorMapping(sectorNumber);
  const name = `Sector ${sectorNumber}`;
  const slug = `sector-${sectorNumber}`;

  return {
    pageType: "sector",
    name,
    slug,
    parentAreaSlug: mapping.parentAreaSlug,
    locationCluster: mapping.cluster,
    localIntent: `Parents searching for IB tutors in ${name} Gurugram with locality-first tutor matching.`,
    nearbyAreas: mapping.nearbyAreas,
    nearbySectors: nearbySectorNames(sectorNumber),
    nearbySocieties: mapping.nearbySocieties,
    schoolEcosystem: ["Scottish High International School", "Lancers International School", "Pathways World School", "GD Goenka World School"],
    indexFlag: "index",
    indexReason: "mapped-local-intent",
    duplicateRisk: "low",
  };
});

function getSectorMapping(sectorNumber: number) {
  if (sectorNumber <= 23) {
    return {
      parentAreaSlug: sectorNumber <= 15 ? "sector-road-huda-sectors-cluster" : "palam-vihar",
      cluster: "Old Gurugram, Palam Vihar and established HUDA sectors",
      nearbyAreas: ["Palam Vihar", "Udyog Vihar", "Sector Road / HUDA sectors cluster"],
      nearbySocieties: ["Palam Vihar residences", "Sobha City", "Puri Diplomatic Greens"],
    };
  }
  if (sectorNumber <= 32) {
    return {
      parentAreaSlug: sectorNumber <= 28 ? "mg-road" : "south-city-1",
      cluster: "MG Road, South City and central Gurugram",
      nearbyAreas: ["MG Road", "DLF Phase 1", "South City 1", "Sushant Lok 1"],
      nearbySocieties: ["Heritage City", "DLF Richmond Park", "Unitech Heritage City"],
    };
  }
  if (sectorNumber <= 46) {
    return {
      parentAreaSlug: sectorNumber <= 43 ? "golf-course-road" : "sector-road-huda-sectors-cluster",
      cluster: "Central sectors near Golf Course Road and South City",
      nearbyAreas: ["Golf Course Road", "Sushant Lok 1", "South City 1"],
      nearbySocieties: ["The Aralias", "The Magnolias", "Suncity", "Mayfield Garden"],
    };
  }
  if (sectorNumber <= 52) {
    return {
      parentAreaSlug: sectorNumber <= 50 ? "sohna-road" : "nirvana-country",
      cluster: "Sohna Road, South City 2 and Nirvana Country belt",
      nearbyAreas: ["Sohna Road", "South City 2", "Nirvana Country"],
      nearbySocieties: ["Nirvana Country", "Orchid Petals", "Vatika City", "Unitech Fresco"],
    };
  }
  if (sectorNumber <= 63) {
    return {
      parentAreaSlug: sectorNumber <= 55 ? "golf-course-road" : "golf-course-extension-road",
      cluster: "Golf Course Road and Golf Course Extension Road",
      nearbyAreas: ["Golf Course Road", "Golf Course Extension Road", "Sushant Lok 2", "Sushant Lok 3"],
      nearbySocieties: ["DLF Park Place", "DLF Crest", "M3M Golf Estate", "Ireo Skyon"],
    };
  }
  if (sectorNumber <= 75) {
    return {
      parentAreaSlug: sectorNumber <= 68 ? "sohna-road" : "new-gurgaon",
      cluster: "Sohna Road extension and new sector corridor",
      nearbyAreas: ["Sohna Road", "Golf Course Extension Road", "New Gurgaon"],
      nearbySocieties: ["M3M Golf Estate", "Tata Primanti", "Emaar Emerald Hills", "Central Park Resorts"],
    };
  }
  if (sectorNumber <= 95) {
    return {
      parentAreaSlug: "new-gurgaon",
      cluster: "New Gurgaon residential sectors",
      nearbyAreas: ["New Gurgaon", "Dwarka Expressway", "Sohna Road"],
      nearbySocieties: ["Godrej Air", "Godrej Summit", "Mapsko Casa Bella", "Vatika India Next"],
    };
  }

  return {
    parentAreaSlug: "dwarka-expressway",
    cluster: "Dwarka Expressway and northern Gurugram sectors",
    nearbyAreas: ["Dwarka Expressway", "Palam Vihar", "New Gurgaon"],
    nearbySocieties: ["Sobha City", "Puri Diplomatic Greens", "ATS Triumph", "ATS Kocoon"],
  };
}

function nearbySectorNames(sectorNumber: number): string[] {
  return [sectorNumber - 1, sectorNumber + 1, sectorNumber - 2, sectorNumber + 2]
    .filter((candidate) => sectorNumbers.includes(candidate))
    .slice(0, 4)
    .map((candidate) => `Sector ${candidate}`);
}
