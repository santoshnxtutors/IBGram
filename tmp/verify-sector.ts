import { getGeneratedPageForRoute } from "../src/lib/generated-pages/routes";
import { getGeneratedPageByPath } from "../src/lib/generated-pages/store";
const r = getGeneratedPageForRoute("/ib-tutors/gurugram/sectors/sector-56/", ["sector"] as any);
console.log("sector-56 via route (published-only):", r ? `${r.pageId} status=${r.status} index=${r.indexFlag}` : "undefined -> would 404");
const any = getGeneratedPageByPath("/ib-tutors/gurugram/sectors/sector-56/");
console.log("sector-56 raw store match:", any ? `${any.pageId} status=${any.status} index=${any.indexFlag}` : "none");
