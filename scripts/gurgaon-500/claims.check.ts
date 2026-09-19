/**
 * Pins the claim detector in compile.ts. Every "honest" line below is real copy that an
 * earlier version of the gate wrongly rejected; every "dishonest" line must still be caught.
 *
 * Run: npx tsx scripts/gurgaon-500/claims.check.ts
 */
import assert from "node:assert/strict";
import { findBanned, findClaims } from "./compile";

const honest = [
  "Families comparing a 1:1 tutor with a small group should ask how much speaking time each student actually gets.",
  "Nobody can guarantee a 7 in IB Maths, and any service promising one is selling certainty it does not have.",
  "No tutor, however experienced with Cambridge 0620 past papers and the alternative to practical paper, can guarantee a grade.",
  "Tutors affiliated with IB Gram understand this clearly, and families should expect tutors to decline requests.",
  "For Cambridge 0580, tutors will establish whether the student is on core or extended.",
  "Particularly those whose children attend schools affiliated with the Cambridge International or Edexcel assessment systems.",
  "Humanities support includes essay structure and assessment objectives\nGroup 1 tutors address oral commentary and comparative essay formats",
  "Parents sometimes ask whether tutors can guarantee grade improvements. The honest answer is that no ethical tutor can guarantee specific results.",
  "Parents in Pioneer Park should be cautious of any tutoring service that offers to 'write the IA' or 'guarantee a 7' because such claims are dishonest.",
  "How Cambridge 0606 Tutoring Is Structured at Home",
  "Other families prefer a dedicated IGCSE Maths 0580 tutor for two sessions per week.",
  "If a tutor is making large, fast promises about guaranteed grades, that is worth scrutinising.",
  "For families in Sector 43, DLF Phase 5, or Sushant Lok 1, tutors who can reach the Golf Course Road corridor will be highlighted.",
  "Parents sometimes ask whether tutors can 'predict' exam topics or guarantee grade improvements. IB Gram does not make such claims.",
  "That shapes how much a Year 5 or 6 tutor needs to do from scratch.",
  "DLF Phase 1 pocket, near MG Road and Sector 28\nTutor pool reaches Sector 26, 27 and 28",
  "A guaranteed grade jump within four weeks isn't something a responsible tutor would promise.",
  "Is IB Gram affiliated with the IB Organization or any Gurugram school?",
  "Parents ask for a session count that guarantees a grade improvement, and we are direct that no tutor, however experienced, can promise that.",
  "IB Gram is an independent platform and is not affiliated with the IB, Cambridge or Pearson Edexcel.",
  "Neither mode guarantees a grade outcome on its own.",
  "Fee levels do not track guaranteed outcomes, and any framing that suggests a higher rate buys a guaranteed grade should be treated with real scepticism.",
  "Any tutor promising a guaranteed grade improvement in that window should be treated with caution.",
  "A Sushant Lok 3 tutor working through varied mechanism and energetics questions helps more than recall.",
  "A South City 2 tutor can usually reach Sohna Road families on a school night.",
  "Tutors who mark against real assessment criteria, which is a meaningfully different promise from a guaranteed result.",
  "Any promise of a guaranteed 9 or a guaranteed grade jump should be treated as a warning sign rather than reassurance.",
  "Sector 26-28 tutors see multiple schools' pacing of the same topics.",
  "No tutor should describe themselves as an authorised centre, official partner or accredited provider for the IGCSE French syllabus, and any such claim should be questioned directly.",
  "No tutor should describe themselves as an authorised centre, official partner or accredited provider, and a Vatika Chowk family should question any such claim directly.",
];

const dishonest = [
  "IB Gram has 500+ verified tutors in Gurugram.",
  "Choose from 1,200 tutors across the city.",
  "We guarantee a 7 in Physics.",
  "IB Gram is partnered with the IB Organization.",
  "IB Gram is an official partner of Cambridge.",
  "Fees start at Rs 1500 per hour.",
  "92% of our students improved by two grades.",
];

for (const line of honest) assert.deepEqual(findClaims(line), [], `false positive on honest copy: ${line}`);
for (const line of dishonest) assert.notDeepEqual(findClaims(line), [], `missed a real claim: ${line}`);

// Banned phrases match whole phrases only.
assert.deepEqual(findBanned("A student who writes a strong introduction and a thin conclusion loses marks."), [], "banned phrase matched inside a word");
assert.deepEqual(findBanned("In conclusion, practise past papers."), ["in conclusion"], "missed a banned phrase");

console.log(`claims check ok: ${honest.length} honest lines pass, ${dishonest.length} dishonest lines caught`);
