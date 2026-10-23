import { getSitemapSection, renderUrlset } from "@/lib/seo/sitemap-index";

/**
 * https://www.ibgram.com/sitemap-teacher.xml - one child of the sitemap index.
 * Rows come from @/lib/seo/sitemap-index, which dedupes globally so this URL set does not
 * overlap any other child. See that file for the ordering rule.
 */
export const revalidate = 3600;
export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const entries = await getSitemapSection("teacher");
  return new Response(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
