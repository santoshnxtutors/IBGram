import m from "../tmp/batch1/manifest.json";
import { writeFileSync } from "node:fs";
const arr = m as any[];
const ids = ["IBG_DELHI_AREA_VASANT_VIHAR_IB_TUTORS","IBG_GURGAON_SOCIETY_AMBIENCE_CAITRIONA","IBG_PUNE_CITY_CITY_IB_TUTORS","IBG_AHMEDABAD_SUBJECT_CHEMISTRY_CHEMISTRY"];
const picked = ids.map(id => arr.find(e => e.pageId === id)).filter(Boolean);
writeFileSync("tmp/batch1/pilot-args.json", JSON.stringify(picked));
console.log("pilot entries:", picked.length, picked.map((p:any)=>p.pageId));
console.log("bytes:", JSON.stringify(picked).length);
