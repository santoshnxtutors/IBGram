/**
 * Where a blog post lives, in one place.
 *
 * Deliberately NOT in blog.ts: that module is `server-only`, and the blog list
 * and home/IGCSE carousels are client components that need the same URL. One
 * definition keeps links, canonicals, the sitemap, cache invalidation and
 * generateStaticParams from ever disagreeing about a post's address.
 */

/** No country -> /blog/<slug>/, exactly as the posts predating country support. */
export function blogPath(post: { slug: string; country?: string | null }): string {
  const country = post.country?.trim().toLowerCase();
  return country ? `/blog/${country}/${post.slug}/` : `/blog/${post.slug}/`;
}

/** Split catch-all segments back into country + slug; null if the shape is wrong. */
export function parseBlogPath(segments: string[]): { country: string | null; slug: string } | null {
  if (segments.length === 1) return { country: null, slug: segments[0] };
  if (segments.length === 2) return { country: segments[0].toLowerCase(), slug: segments[1] };
  return null;
}
