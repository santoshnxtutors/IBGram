/**
 * Turn a stored image path into one the browser can fetch.
 *
 * Kept free of "server-only" and of any Prisma import on purpose: both the
 * server-rendered CMS pages and the chat service use it, and the chat service
 * is pulled into tests that run outside a server bundle.
 */
export function normaliseImageUrl(value: string | null | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  // Rewrite legacy /uploads/<key> to /api/media/<key> — the route handler
  // reads files fresh from disk on every request.
  if (trimmed.startsWith("/uploads/")) return `/api/media/${trimmed.slice("/uploads/".length)}`;
  if (trimmed.startsWith("uploads/")) return `/api/media/${trimmed.slice("uploads/".length)}`;
  if (trimmed.startsWith("/")) return trimmed;
  return `/${trimmed}`;
}
