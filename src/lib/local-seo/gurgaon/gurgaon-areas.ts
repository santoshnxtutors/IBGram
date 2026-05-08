import type { GurgaonLocalPlace } from "./gurgaon.types";

type GurgaonAreaRow = [string, string, string, string[], string[], string[]];

const gurgaonAreaRows: GurgaonAreaRow[] = [
  ["Golf Course Road", "golf-course-road", "Central premium corridor", ["Golf Course Extension Road", "DLF Phase 5", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53", "Sector 54", "Sector 56"], ["The Aralias", "The Magnolias", "The Camellias", "DLF Park Place"]],
  ["Golf Course Extension Road", "golf-course-extension-road", "Extension Road and new premium residential belt", ["Golf Course Road", "Sohna Road", "Sector Road / HUDA sectors cluster"], ["Sector 56", "Sector 57", "Sector 58", "Sector 59", "Sector 60", "Sector 61", "Sector 62", "Sector 63", "Sector 65"], ["M3M Golf Estate", "Ireo Grand Arch", "Emaar DigiHomes", "M3M Merlin"]],
  ["DLF Phase 1", "dlf-phase-1", "DLF city phases", ["DLF Phase 2", "MG Road", "Golf Course Road"], ["Sector 26", "Sector 27", "Sector 28", "Sector 42"], ["DLF Beverly Park", "DLF Exclusive Floors", "DLF Richmond Park"]],
  ["DLF Phase 2", "dlf-phase-2", "MG Road and DLF Cyber City side", ["DLF Phase 1", "DLF Phase 3", "MG Road"], ["Sector 24", "Sector 25", "Sector 28"], ["DLF Beverly Park", "DLF Heritage City", "Ambience Caitriona"]],
  ["DLF Phase 3", "dlf-phase-3", "Cyber City and Udyog Vihar access belt", ["DLF Phase 2", "Udyog Vihar", "MG Road"], ["Sector 24", "Sector 25", "Sector 26"], ["DLF Cyber City residences", "Ambience Caitriona", "Heritage City"]],
  ["DLF Phase 4", "dlf-phase-4", "Central DLF and Galleria side", ["DLF Phase 5", "Sushant Lok 1", "MG Road"], ["Sector 27", "Sector 28", "Sector 43"], ["DLF Hamilton Court", "DLF Regency Park", "DLF Ridgewood Estate"]],
  ["DLF Phase 5", "dlf-phase-5", "Golf Course Road premium residential pocket", ["Golf Course Road", "DLF Phase 4", "Sushant Lok 1"], ["Sector 42", "Sector 43", "Sector 53", "Sector 54"], ["DLF Crest", "DLF Park Place", "DLF The Belaire", "DLF The Pinnacle"]],
  ["Sushant Lok 1", "sushant-lok-1", "Central residential and school-access pocket", ["DLF Phase 4", "Golf Course Road", "South City 1"], ["Sector 27", "Sector 28", "Sector 43", "Sector 44"], ["Sushant Lok", "South City 1", "DLF Hamilton Court"]],
  ["Sushant Lok 2", "sushant-lok-2", "Near Golf Course Extension and Sector 55-57", ["Sushant Lok 1", "Sushant Lok 3", "Golf Course Extension Road"], ["Sector 55", "Sector 56", "Sector 57"], ["Ireo Skyon", "DLF Park Place", "M3M Merlin"]],
  ["Sushant Lok 3", "sushant-lok-3", "Sector 57 and Extension Road side", ["Sushant Lok 2", "Golf Course Extension Road", "Sector Road / HUDA sectors cluster"], ["Sector 56", "Sector 57", "Sector 62"], ["Ireo Skyon", "M3M Merlin", "Emaar DigiHomes"]],
  ["South City 1", "south-city-1", "Central Gurugram residential pocket", ["Sushant Lok 1", "MG Road", "South City 2"], ["Sector 30", "Sector 31", "Sector 40", "Sector 41"], ["South City 1", "Unitech Heritage City", "The Close"]],
  ["South City 2", "south-city-2", "Near Sohna Road and central sectors", ["South City 1", "Sohna Road", "Nirvana Country"], ["Sector 47", "Sector 49", "Sector 50"], ["Nirvana Country", "Unitech Fresco", "Orchid Petals"]],
  ["Sohna Road", "sohna-road", "Sohna Road school and residential belt", ["Golf Course Extension Road", "South City 2", "New Gurgaon"], ["Sector 47", "Sector 48", "Sector 49", "Sector 50", "Sector 65", "Sector 66", "Sector 67", "Sector 68"], ["Vatika City", "Tata Primanti", "Central Park Resorts", "Orchid Petals"]],
  ["MG Road", "mg-road", "Central metro and DLF city access corridor", ["DLF Phase 1", "DLF Phase 2", "South City 1"], ["Sector 25", "Sector 26", "Sector 27", "Sector 28", "Sector 29"], ["Heritage City", "DLF Beverly Park", "DLF Richmond Park"]],
  ["Udyog Vihar", "udyog-vihar", "Cyber hub and NH-48 work corridor", ["DLF Phase 3", "MG Road", "Dwarka Expressway"], ["Sector 18", "Sector 19", "Sector 21", "Sector 22"], ["Ambience Caitriona", "Heritage City", "DLF Phase 3 residences"]],
  ["Palam Vihar", "palam-vihar", "Old Gurugram and Dwarka-side residential belt", ["Dwarka Expressway", "Udyog Vihar", "New Gurgaon"], ["Sector 21", "Sector 22", "Sector 23", "Sector 110"], ["Palam Vihar residences", "Sobha City", "Puri Diplomatic Greens"]],
  ["New Gurgaon", "new-gurgaon", "New sectors and NH-48 residential corridor", ["Dwarka Expressway", "Sohna Road", "Sector Road / HUDA sectors cluster"], ["Sector 76", "Sector 77", "Sector 78", "Sector 79", "Sector 80", "Sector 81", "Sector 82", "Sector 83", "Sector 84", "Sector 85", "Sector 86", "Sector 89", "Sector 90", "Sector 92"], ["Godrej Air", "Godrej Summit", "Mapsko Casa Bella", "Vatika India Next"]],
  ["Dwarka Expressway", "dwarka-expressway", "Dwarka Expressway and northern Gurugram belt", ["Palam Vihar", "New Gurgaon", "Udyog Vihar"], ["Sector 99", "Sector 102", "Sector 103", "Sector 104", "Sector 106", "Sector 107", "Sector 108", "Sector 109", "Sector 110", "Sector 111", "Sector 112", "Sector 113"], ["Sobha City", "Puri Diplomatic Greens", "ATS Triumph", "Godrej Summit"]],
  ["Nirvana Country", "nirvana-country", "South City 2 and Sector 50 community belt", ["South City 2", "Sohna Road", "Golf Course Extension Road"], ["Sector 49", "Sector 50", "Sector 51", "Sector 52"], ["Nirvana Country", "South Close", "Unitech Fresco", "The Close"]],
  ["Sector Road / HUDA sectors cluster", "sector-road-huda-sectors-cluster", "Established HUDA sector network", ["South City 1", "Sohna Road", "Golf Course Extension Road"], ["Sector 14", "Sector 15", "Sector 30", "Sector 31", "Sector 40", "Sector 45", "Sector 46", "Sector 47"], ["Mayfield Garden", "Malibu Towne", "Suncity", "South City 1"]],
];

export const gurgaonAreaPlaces: GurgaonLocalPlace[] = gurgaonAreaRows.map(([name, slug, cluster, nearbyAreas, nearbySectors, nearbySocieties]) => ({
  pageType: "area",
  name,
  slug,
  locationCluster: cluster,
  localIntent: `Parents comparing IB tutor availability around ${name} with home, online and hybrid options.`,
  nearbyAreas,
  nearbySectors,
  nearbySocieties,
  schoolEcosystem: ["Lancers International School", "Scottish High International School", "Pathways World School", "GD Goenka World School"],
  indexFlag: "index",
  indexReason: "strong-local-depth",
  duplicateRisk: "low",
}));
