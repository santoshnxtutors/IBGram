import { gurgaonSectorPlaces } from "@/lib/local-seo/gurgaon/gurgaon-sectors";
import { gurgaonSocietyPlaces } from "@/lib/local-seo/gurgaon/gurgaon-societies";
import { gurgaonAreaPlaces } from "@/lib/local-seo/gurgaon/gurgaon-areas";
console.log("sectors", gurgaonSectorPlaces.length, "societies", gurgaonSocietyPlaces.length, "areas", gurgaonAreaPlaces.length);
console.log(JSON.stringify(gurgaonSectorPlaces.find((p) => p.slug === "sector-56"), null, 1));
console.log(JSON.stringify(gurgaonSocietyPlaces[0], null, 1));
