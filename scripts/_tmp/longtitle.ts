import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { normalizePath } from "@/lib/seo/canonical";
for (const p of new Set(getFullPublicSitemapEntries().map((e) => normalizePath(e.url)))) {
  const g = getGeneratedPageByPath(p);
  if (g && g.metaTitle.length > 63) console.log(`${g.metaTitle.length}  ${p}\n   ${g.metaTitle}`);
}
