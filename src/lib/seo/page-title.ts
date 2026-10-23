const BRAND = "IB Gram";
// Titles in the content data end with either "| IB Gram" or the unspaced "| IBGram".
const ENDS_WITH_BRAND = /\|\s*IB\s?Gram\s*$/i;
// ...and some carry the brand mid-sentence ("| Personalized Learning with IB Gram").
const MENTIONS_BRAND = /\bIB\s?Gram\b/i;
/** Google renders roughly 60 characters of a title in a desktop result. */
const RENDER_LIMIT = 60;
/** Past this, truncation costs more than the shortest safe rewrite. */
const HARD_LIMIT = 72;
const SUFFIX = ` | ${BRAND}`;

/**
 * Sheds only redundant tokens, cheapest first, and stops the moment the title
 * fits. Each entry must preserve the search intent: a title that no longer
 * carries its keyword ranks for nothing, which is worse than one Google cuts.
 */
const SHEDS: Array<[RegExp, string]> = [
  // A trailing brand clause ("| Personalized Learning with IB Gram") is pure filler.
  [/\s*[|\u2013\u2014-]\s*[^|]*\bIB\s?Gram\b[^|]*$/i, ""],
  // "in DLF The Crest Sector 54 Gurgaon" — the society already pins the sector.
  [/\b(Sector\s+\d+[A-Za-z]?|DLF\s+Phase\s+\d)\s+(?=Gurgaon\b)/i, ""],
  // Verbose service wording with a shorter form parents search just as often.
  [/\bBoard Exam Preparation\b/i, "Board Exam"],
  [/\bResult Improvement\b/i, "Result Boost"],
  [/\bPast Paper Practice\b/i, "Past Papers"],
  // Qualifiers that carry no query volume of their own.
  [/^Experienced\s+/i, ""],
  [/\bHome Tutor\b/i, "Tutor"],
  [/\bOnline Tutor\b/i, "Tutor"],
  [/\bCambridge IGCSE\b/, "IGCSE"],
];

const tidy = (s: string) =>
  s
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,;:])/g, "$1")
    .replace(/[\s,;:|\u2013\u2014-]+$/, "")
    .trim();

/** Trim to the last whole word that fits; never cuts mid-word, never adds an ellipsis. */
function clipToWord(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max + 1);
  const at = cut.lastIndexOf(" ");
  return tidy(at > 20 ? cut.slice(0, at) : s.slice(0, max));
}

function shorten(title: string): string {
  let out = tidy(title);
  if (out.length <= RENDER_LIMIT) return out;
  for (const [re, to] of SHEDS) {
    if (!re.test(out)) continue;
    const next = tidy(out.replace(re, to));
    // A shed that empties the title, or gains nothing, is not worth taking.
    if (next.length >= 15 && next.length < out.length) out = next;
    if (out.length <= RENDER_LIMIT) return out;
  }
  // Multi-clause titles ("Name | Subjects | More subjects") drop whole trailing clauses.
  if (out.length > HARD_LIMIT && out.includes("|")) {
    const parts = out.split("|").map((p) => p.trim()).filter(Boolean);
    let joined = parts[0];
    for (const p of parts.slice(1)) {
      if (`${joined} | ${p}`.length > RENDER_LIMIT) break;
      joined = `${joined} | ${p}`;
    }
    if (joined.length >= 15) out = tidy(joined);
  }
  return out.length > HARD_LIMIT ? clipToWord(out, RENDER_LIMIT) : out;
}

/**
 * The root layout sets `title.template = "%s | IB Gram"`, so Next appends the brand to
 * every page title. But many titles already carry it — 494 of the generated store pages,
 * every /courses/ entry in subject-content.ts, and several static pages — which shipped
 * 2,028 live titles reading "... | IB Gram | IB Gram" and pushed 755 of them past the
 * length Google will render in a result.
 *
 * Returning an absolute title suppresses the template in the two cases where appending
 * does harm: the brand is already in the title, or there is no room left to render it.
 * A duplicated or cut-off brand buys nothing, whereas the keyword it pushes out of the
 * rendered title is the part the result is competing on.
 *
 * Shortening happens here rather than in the page data so it also reaches titles that
 * come from the database at request time, and so a regenerated data set cannot quietly
 * reintroduce the problem.
 */
export function resolvePageTitle(title: string): string | { absolute: string } {
  const trimmed = shorten(title.trim().replace(ENDS_WITH_BRAND, ""));
  if (MENTIONS_BRAND.test(trimmed)) return { absolute: trimmed };
  if (trimmed.length + SUFFIX.length > RENDER_LIMIT) return { absolute: trimmed };
  return trimmed;
}
