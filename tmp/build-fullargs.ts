import ids from "../tmp/batch1/pageids.json";
import { writeFileSync } from "node:fs";
const done = new Set(["IBG_DELHI_AREA_VASANT_VIHAR_IB_TUTORS","IBG_GURGAON_SOCIETY_AMBIENCE_CAITRIONA","IBG_PUNE_CITY_CITY_IB_TUTORS","IBG_AHMEDABAD_SUBJECT_CHEMISTRY_CHEMISTRY"]);
const remaining = (ids as any[]).filter(e => !done.has(e.pageId));
writeFileSync("tmp/batch1/remaining-args.json", JSON.stringify(remaining));
console.log("remaining:", remaining.length, "bytes:", JSON.stringify(remaining).length);
