/**
 * Pins bannedRe against the real build.ts export, not a copy.
 *
 * The gate used to anchor banned phrases as plain literals, so "unlocks their potential" sailed
 * past the "unlock the" ban purely by being in a different tense. Inflections are now caught.
 * The spare list is the other half of the job: the earlier fix for "the leverage they had" being
 * read as "leverage the" must not regress now that the matcher is looser.
 *
 *   npx tsx scripts/mumbai-seo/banned.check.ts
 */
import { strict as assert } from "node:assert";
import { bannedRe } from "./build";

/** Inflected slop that must be rejected. */
const CATCH: Array<[phrase: string, text: string]> = [
  ["unlock the", "unlocks the potential every student has"],
  ["unlock the", "unlocking the student's confidence"],
  ["delve into", "we delved into the markscheme"],
  ["dive into", "she dives into the past paper"],
  ["seamless", "the handover was seamlessly done"],
  ["tapestry", "a tapestry of schools"],
  ["tapestry", "the tapestries of the city"],
  ["leverage the", "leveraging the subject guide"],
  ["embark on", "students embarking on the DP"],
  ["revolutionize", "it revolutionized her revision"],
  ["moreover,", "Moreover, the slot moved."],
  ["that said,", "That said, nothing is certain."],
  ["in conclusion", "In conclusion, hire early."],
];

/** Honest prose that merely contains the letters. These must all survive. */
const SPARE: Array<[phrase: string, text: string]> = [
  ["leverage the", "the leverage they had was small"],
  ["unlock the", "the lock on the door stuck"],
  ["dive into", "a diver into the bay"],
  ["seamless", "the seam less visible after pressing"],
  ["in conclusion", "the inconclusive result annoyed her"],
  ["moreover,", "moreover the point stands without a comma"],
  ["tapestry", "a tape strip held it shut"],
  ["embark on", "the bark on the tree was wet"],
  ["delve into", "Delhi into which they flew"],
  ["boasts a", "the coast as far as Worli"],
];

let bad = 0;
for (const [phrase, text] of CATCH) {
  if (!bannedRe(phrase).test(text)) {
    console.log(`MISSED          "${phrase}"  in: ${text}`);
    bad++;
  }
}
for (const [phrase, text] of SPARE) {
  if (bannedRe(phrase).test(text)) {
    console.log(`FALSE POSITIVE  "${phrase}"  in: ${text}`);
    bad++;
  }
}
assert.equal(bad, 0, `${bad} banned-phrase failures`);
console.log(
  `banned-phrase check ok: ${CATCH.length} inflections caught, ${SPARE.length} innocents spared`,
);
