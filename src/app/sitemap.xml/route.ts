import {
  SITEMAP_FILES,
  getSitemapSections,
  newestLastmod,
  renderSitemapIndex,
  sitemapFileUrl,
} from "@/lib/seo/sitemap-index";

/**
 * https://www.ibgram.com/sitemap.xml - the one sitemap submitted to Search Console.
 *
 * It is a <sitemapindex>, not a <urlset>: it lists the nine child sitemaps and nothing else.
 * Google follows the children automatically, and reports indexed-vs-discovered for each of
 * them separately, which is the whole point of the split.
 *
 * A child with no rows is left out of the index rather than listed empty - an empty sitemap is
 * reported as an error in Search Console.
 */
export const revalidate = 3600;
export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const sections = await getSitemapSections();

  const children = SITEMAP_FILES.filter((file) => sections[file].length > 0).map((file) => ({
    url: sitemapFileUrl(file),
    lastModified: newestLastmod(sections[file]),
  }));

  return new Response(renderSitemapIndex(children), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
