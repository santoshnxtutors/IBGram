import { getGeneratedPageForRoute } from "../src/lib/generated-pages/routes";
const tests: [string, any[]][] = [
  ["/ib-tutors/delhi/areas/vasant-vihar/", ["area"]],
  ["/ib-tutors/gurugram/societies/ambience-caitriona/", ["society"]],
  ["/ib-tutors/pune/", ["city"]],
  ["/ib-tutors/ahmedabad/chemistry/", ["subject","programme"]],
];
for (const [path, types] of tests) {
  const p = getGeneratedPageForRoute(path, types as any);
  console.log(p ? `RESOLVED ${path} -> ${p.pageId} (${p.pageType}, ${p.indexFlag}, h1="${p.h1.slice(0,40)}...", blocks=${p.contentBlocks.length}, faqs=${p.faqs.length}, links=${p.internalLinks.length})` : `MISS ${path}`);
}
