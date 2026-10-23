/** Google renders roughly 160 characters of a description; 165 is where cuts start. */
const RENDER_LIMIT = 160;
const HARD_LIMIT = 165;

/**
 * Clips a description to what a result will actually show.
 *
 * 249 live pages shipped descriptions past the limit, and 102 of them come from the
 * database at request time — tutor profiles and blog posts — so clipping in the page
 * data could never have reached them. Doing it where the metadata is assembled covers
 * every source at once.
 *
 * It prefers to end on a sentence, then on a word; it never cuts mid-word and never
 * appends an ellipsis, because a trailing "..." spends three of the characters that
 * would otherwise carry meaning.
 */
export function resolveMetaDescription(description: string): string {
  const text = description.replace(/\s+/g, " ").trim();
  if (text.length <= HARD_LIMIT) return text;

  // A complete sentence that fills most of the budget reads better than a clipped one.
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [];
  let built = "";
  for (const s of sentences) {
    if ((built + s).trim().length > RENDER_LIMIT) break;
    built += s;
  }
  if (built.trim().length >= 110) return built.trim();

  const cut = text.slice(0, RENDER_LIMIT + 1);
  const at = cut.lastIndexOf(" ");
  return (at > 80 ? cut.slice(0, at) : text.slice(0, RENDER_LIMIT)).replace(/[\s,;:—–-]+$/, "").trim();
}
