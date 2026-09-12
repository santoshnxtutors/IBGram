import { getGurgaonNearbySchools, GURGAON_SCHOOL_ECOSYSTEM } from "@/lib/local-seo/gurgaon/gurgaon-schools";
import { gurgaonAreaPlaces } from "@/lib/local-seo/gurgaon/gurgaon-areas";
import { gurgaonSectorPlaces } from "@/lib/local-seo/gurgaon/gurgaon-sectors";
import { gurgaonSocietyPlaces } from "@/lib/local-seo/gurgaon/gurgaon-societies";
import { getAllGurgaonSeoPages } from "@/lib/gurgaon-seo";

console.log("shared list:", GURGAON_SCHOOL_ECOSYSTEM.length, "->", GURGAON_SCHOOL_ECOSYSTEM.join(" | "));
const places = [...gurgaonAreaPlaces, ...gurgaonSectorPlaces, ...gurgaonSocietyPlaces];
const bad = places.filter((p) => getGurgaonNearbySchools(p.schoolEcosystem, 5).length !== 5);
console.log(`local-seo places: ${places.length}, places NOT showing 5 schools: ${bad.length}`);

const landing = getAllGurgaonSeoPages();
const badLanding = landing.filter((p) => getGurgaonNearbySchools(p.localContext.schools, 5).length !== 5);
console.log(`gurgaon landing pages: ${landing.length}, NOT showing 5 schools: ${badLanding.length}`);
console.log("sample strip:", getGurgaonNearbySchools(landing[0]?.localContext.schools ?? [], 5).join(" | "));
