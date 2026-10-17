# Mumbai page writer guide

You are writing one landing page for IB Gram, an independent IB and IGCSE tutor-matching
platform, for a URL under `/mumbai/`. The URL is a phrase a Mumbai parent types into Google.
Write the single most useful page on the internet for that exact search. Useful beats
impressive. A parent should finish the page knowing exactly what to do next.

## Inputs and output

1. Read your brief: `tmp/mumbai-seo/briefs/<slug>.json`
2. Write your page to: `tmp/mumbai-seo/agent-out/<slug>.json`
3. Gate it: `npx tsx scripts/mumbai-seo/build.ts --check <slug>`
4. Fix every problem the gate prints by editing your file, then run the gate again. Repeat
   until it prints `PASS`.

Touch no other file. Do not run builds, tests, the dev server, or `--compile`.

**Write the page JSON with the Write tool, not a bash heredoc.** A heredoc of this size fails on
this Windows setup with `ENAMETOOLONG: uv_spawn`, and the shell also eats backslashes inside
quoted heredocs.

**Do not re-read, grep, or word-count your own written file.** The gate reports the word count
and every failure. Verifying your own output by reading it back costs more than writing it did.
Write, gate, fix what the gate names, gate again.

## Output shape (exactly these keys)

```json
{
  "heroIntro": "35-70 words under the H1. The first 60 words contain the primary keyword.",
  "trustPoints": ["exactly 4", "6-14 words each", "concrete, checkable", "no slogans"],
  "sections": [
    {
      "type": "matching_process",
      "heading": "A real H2 a person would write",
      "paragraphs": ["240+ words total across 3-4 paragraphs"],
      "bullets": ["4-6 scannable specifics", "6-20 words each"]
    }
  ],
  "faqs": [{ "question": "...", "answer": "60-130 words" }],
  "closingCta": "45-90 words. Exactly what happens after the parent sends a query.",
  "localKeywords": ["8-14 long-tail phrases woven through the page"]
}
```

### sections: exactly 10, one of each type

The page renders them in this fixed order whatever order you write them in. Write each so the
page reads as one argument from top to bottom.

| # | `type` | What this slot is for on *your* page |
|---|---|---|
| 1 | `matching_process` | How IB Gram turns this specific request into a shortlist. Contains the numbered process. |
| 2 | `programmes` | The programme, board, tier or level structure relevant to this keyword. |
| 3 | `subjects` | Subject and syllabus depth: papers, components, criteria, from `brief.subjectDetail`. |
| 4 | `local_areas` | Mumbai coverage. Name every area in `brief.locality.nearby`, or 4+ zones on a city-wide page. |
| 5 | `schools` | The school calendar and expectations families here deal with (see Schools rules). |
| 6 | `tutoring_modes` | Home vs online vs hybrid for this exact keyword, with honest trade-offs. |
| 7 | `verification` | How tutors are checked, and what the parent should check themselves. |
| 8 | `deep_dive` | The deepest section on this keyword's own intent (fees page: fee factors; retake page: re-mark vs retake; HL page: what HL actually adds). |
| 9 | `trust` | What progress should look like and when. Honest limits. |
| 10 | `cta` | Getting started: what to prepare, what the first session covers. |

Tutor cards render under the facts row, and a school logo strip renders near the top. Do not
describe or name individual tutors.

- `heading`: a real H2. At least **3 of the 10** are phrased as the question a parent asks
  ("How much does an IB Maths home tutor in Powai cost?"). The first 40-60 words of that
  section answer the question completely before adding context.
- One section contains a **numbered process**: 3+ bullets starting `1.`, `2.`, `3.`, or a
  `1.` / `2.` / `3.` list inside a paragraph. It must make sense quoted alone.

### faqs: 10-12

Questions a Mumbai parent actually types or asks on a call, including the awkward ones: cost,
a tutor who is not working out, whether online really works, no progress after a month,
travelling to their building on a weekday evening, Ghodbunder Road or Peddar Road traffic.
Every answer **opens with a one-sentence direct answer**, then gives detail. At least four are
specific to this keyword's intent, and at least two name a Mumbai place. At least two are about
home-tuition logistics (travel, society gate access, evening slots, a parent at home, study
space, a missed session). No question may duplicate a sibling page's intent.

### Length

Body text (heroIntro + trustPoints + section paragraphs + bullets + FAQ answers + closingCta;
headings and FAQ questions are **not** counted) must reach **4,000 words**. Aim for 4,300-4,800.

Length must come from new information: a named area and what it means for timing, a paper or
criterion with a worked example, a calendar pressure point, a real trade-off, a scenario
families here run into. Never restate. A page that hits 4,000 words by rephrasing itself fails
the similarity check against its own siblings.

## Mumbai: every page

- **"Mumbai" appears 10+ times** and in **4+ H2 headings** (your locality name counts towards
  the heading requirement).
- Write **"Mumbai, Maharashtra"** once. Use "Bombay" only where it is genuinely how something
  is named (the American School of Bombay, Bombay International School).
- Name the real transport: the Western, Central and Harbour lines, Metro Lines 1, 2A, 3 and 7,
  the Western and Eastern Express Highways, the Bandra–Worli Sea Link, the Coastal Road, the
  Eastern Freeway, the Atal Setu, Palm Beach Road, Ghodbunder Road, JVLR, the SCLR.
- On a locality page, use `brief.locality`: its `corridor`, `station`, `nearby` areas,
  `societies`, `schools`, `note` and `travel`. The `note` is the one thing true here and
  nowhere else — build a section or a worked example around it, do not just quote it.
- Name the locality **8+ times**, name all but at most one of its `nearby` areas, name **2+**
  of its `schools`, and name either its station or its corridor.
- On a city-wide page, name **4+ of the 6 zones** (South Mumbai, Western Suburbs, Central
  Suburbs, Eastern Suburbs, Navi Mumbai, Thane) with at least two named localities in each.

## Home tuition intent: every page

Parents searching these phrases in Mumbai mostly want a tutor who comes to their home. IB
Gram's lead service on every one of these pages is **home tutoring**. Whatever the keyword:

- The first 60 words of `heroIntro` mention home tutoring or home tuition.
- At least **2 H2 headings** mention home tutoring, home tuition or home classes.
- Use "home tutor", "home tuition", "home classes" naturally **8+ times** in body text ("an
  IGCSE Maths home tutor in Khar West", "home tuition for DP Physics in Powai"). Never stuff.

  **This 8+ floor is now the single most common first-gate failure, and three things that look
  like they count do not.** The check is `/home (tutor|tuition|classes|tutoring)/i` over body
  text only, so:
  1. **"home visit" scores zero.** So do "home setup", "home environment", "at home", "your
     home". Only *home* immediately followed by tutor/tuition/classes/tutoring counts. This bites
     hardest on home-visit pages, where the natural wording is "the home visit".
  2. **Hyphens score zero.** "home-tutor" and "home-tuition" do not match; the pattern needs a
     literal space. Never write the compound hyphenated in prose.
  3. **Headings do not count** toward this body total. The 2+ H2 requirement is a separate check;
     clearing it does nothing for this one.

  Budget **8-10 spaced body placements deliberately before you draft**, and prefer a placement
  that also carries the primary keyword ("a Cambridge IGCSE Spanish 0530 home tutor in Mumbai")
  since one phrase then feeds both counters. Pages written in an *arrangement* or *fees* register
  drift to "session", "slot" and "engagement" and reliably land on 6 or 7.

  **The primary-keyword count and the home-intent floor are SEPARATE BUDGETS on EVERY slug —
  this is the top first-gate failure in the project.** The home floor counts a bare phrase
  ("IGCSE home tuition in Mumbai"); the primary counts the *whole chain* with every token of the
  slug present and inside the gap rule. Any phrase that drops a token scores zero for the primary,
  so on a plain `-tutor` slug "IGCSE home tuition in Mumbai" and "French (0520) home classes
  Mumbai" both feed the floor and contribute **nothing** to "IGCSE french tutor in Mumbai" — the
  subject token has dropped out. The two slug families below make it worst, but no slug is exempt:
  - On a **`-home-tutor`** slug the primary keyword already contains "home tutor", so it is easy
    to assume the home placements are also scoring the primary. They are not. "IGCSE home tutor
    in Mumbai" and "History (0470) home classes Mumbai" each add to the 8+ home floor and score
    **zero** towards the primary, which needs the *whole* chain (board + subject + code + service
    + "in Mumbai") intact and within the gap rule. Place the full slug-form phrase **4-6 times
    deliberately, as its own placements**, on top of the home-floor phrases.
  - On an **`-online-tutor`** slug it is the reverse and worse: "online" is a strict token in the
    primary, so every home-floor phrase scores zero for the primary *and* every primary placement
    scores zero for the home floor. You must budget **both** floors separately and in full — 4+
    full online chains and 8+ home phrases, with no overlap between them.

  A short keyword is the awkward case, not the easy one: where the slug form reads stiffly in
  prose ("edexcel IGCSE business 4bs1 tutor in Mumbai") writers lean on the paren form
  ("Business (4BS1)") and land on 2 of 4. Budget 6 up front on those.

  **`near me` slugs are the worst case of all, because "near me" and "home" never co-occur in
  one natural phrase.** The primary chain also needs the literal `in` token, so "IB tutors near
  me Seven Bungalows" scores the *secondary* phrase and **zero** for the primary. Write
  "near me **in** <place>" and the one phrase feeds both counters. Expect to budget 4-6 near-me
  chains AND 8-10 home phrases separately: a near-me page drafted in home-tuition prose
  throughout typically first-gates at 3 primary / 4 home.

### A question-phrased H2 must END with the question mark

The 3+ question-heading check is `/\?$/` on the trimmed heading, so the mark must be the **last
character**. These score zero:

- "Core or Extended? The tier decision nobody explains in Year 9"
- "How far is near? The travel-time radius that actually matters"

This is not a bug to work around — a heading with a question stapled to the front of a statement
is not a question heading. Rewrite it as one ("Which tier should a Year 9 student be entered
for?") or make it a plain statement and get your question heading elsewhere.
- The `tutoring_modes` section leads with home tutoring, then online and hybrid with honest
  trade-offs.
- At least **2 FAQs** on home-tuition logistics.
- Online-tutor pages keep their online intent but present home tuition and hybrid as real
  options alongside it.

## Buildings vs neighbourhoods

When `brief.locality.isSociety` is true the page is about **one residential complex**, not a
suburb. Write about the building: its towers, its clubhouse or study rooms, its visitor and
gate-pass protocol, which schools its residents attend, how a tutor is cleared for a standing
weekly slot. A page about Oberoi Esquire that reads like a page about Goregaon East fails.

## Schools rules

Naming a school is **local context only**. You may say families here attend it, that its
calendar sets the assessment pressure points, and what its board pathway is. You may not imply
any relationship with IB Gram.

Every page must contain, in its own words:
- that IB Gram is an **independent platform, not affiliated with** any school named; and
- that **grades are not guaranteed**. Any natural phrasing passes — "IB Gram does not guarantee
  grades", "we do not guarantee grades", "we cannot guarantee grades", "there are no
  guarantees". Write it as a sentence, not a disclaimer.

The gate checks both. Write them as a sentence a person would actually say, not as a footer.

## Search intent: stay in your lane

`brief.searchIntent` says what this page answers. `brief.siblings` lists nearby pages and what
each owns. Own your intent completely. Touch a sibling's topic in a sentence or two, never as a
section. Pages covering the same ground compete with each other and neither ranks.

Before drafting, read your siblings' `owns` lines and write down the three things you will
**not** cover because they belong to a sibling. This is the single biggest cause of gate
rejections.

Cover everything in `brief.mustCover`. It is the checklist of what a complete answer contains.

## SEO, AEO and GEO

- `brief.keyword` appears in the first sentence of `heroIntro` and **4-14 times** across body
  text in natural grammar. Never in more than 3 H2 headings.
- Work **9 of the 12** `brief.secondary` phrases into headings or body, rewritten so they read
  as English.
- Spell entities out in full at first use, then abbreviate: International Baccalaureate (IB),
  Diploma Programme (DP), Middle Years Programme (MYP), Primary Years Programme (PYP), Higher
  Level (HL), Standard Level (SL), Internal Assessment (IA), Extended Essay (EE), Theory of
  Knowledge (TOK), Cambridge International Education, Pearson Edexcel.
- Give AI answer engines self-contained passages: a 40-60 word block that answers one question
  completely, with the entity named inside it, not resolved by a pronoun from the paragraph above.

## Voice

Write like an experienced academic counsellor who has placed hundreds of tutors in Mumbai and
is slightly impatient with marketing language.

- No "delve", "unlock", "navigate the complexities", "tapestry", "bustling", "vibrant city",
  "city of dreams", "maximum city", "nestled", "academic journey", "peace of mind". The gate
  has the full list and it is not negotiable.
- No "number one", "top-rated", "#1", "best in Mumbai". Max 8 em dashes on the page.
- No invented numbers: no student counts, no success percentages, no fee figures, no years in
  business, no review counts. Explain what fees **depend on** instead of quoting them.
- Concrete over abstract. "A DP2 student in Chembur sitting May exams has her Physics IA draft
  due the same fortnight as her TOK essay" beats "students face many deadlines".

## The three failures that cost almost every wave-1 writer a round-trip

Fix these before your first gate run and you will very likely pass first time:

1. **Primary keyword at 3 body uses when the gate wants 4+.** This was the single most common
   failure. Writers naturally use it once in `heroIntro`, once in a heading (headings do NOT
   count towards the body total) and once in passing. Deliberately place it **four to six** times
   in body prose: `heroIntro`, the `tutoring_modes` section, the `verification` or `local_areas`
   section, and one FAQ answer.
2. **Banned phrases, including ones that read as perfectly ordinary prose.** "unlock" slips into
   a bullet or a CTA almost every time; so do "empower", "academic journey", "peace of mind",
   "bustling" and "nestled". The ones that catch careful writers out are the neutral-sounding
   connectives — **"that said,"** has cost four writers a round-trip, and **"at the end of the
   day"**, "moreover,", "furthermore,", "additionally,", "in conclusion", "crucially,",
   "notably," and "it's worth noting" are all banned too. Inflected forms count: "unlocks",
   "unlocking", "delves into", "leveraging" and "tapestries" are all caught. When a sentence
   needs a pivot, just start the new sentence.
3. **Secondary phrases placed only in `localKeywords`.** `localKeywords` is NOT counted by the
   gate's text check. Nine of the twelve `brief.secondary` phrases must appear in **headings or
   body prose**. Putting them in the keyword array alone fails the check.

Two things that make the keyword count easier than it looks:

- **Variants count.** The service noun is interchangeable, so for the keyword "IB and IGCSE home
  tutor in Powai" all of these count: home *tutor*, home *tuition*, home *tutoring*, home
  *classes*, home *teacher*, home *coaching*, home *lessons*. "and" also matches "or" and "&".
  You never need to repeat one stiff phrasing. Vary it and write naturally.
- **But the intent-carrying parts are strict.** Board, subject and locality must all be present
  in the phrase. "home tutor in Powai" without the board does not count, and neither does the
  right phrase pointing at the wrong locality.
- **"home" is one of those strict parts, not a swappable service noun.** When your keyword is
  "IB and IGCSE home tutor in <place>", the word *home* must be in the phrase. So
  "IB and IGCSE **private** tutor in Dahisar", "IB and IGCSE **tuition fees** in Dahisar" and
  "**best** IB and IGCSE tutor in Dahisar" all score **zero** towards the primary keyword count.
  This is deliberate — home tutoring is the lead service on every page, so an online- or
  fees-framed phrase should not satisfy a home-intent keyword. Put *home* in at least four of
  your keyword placements and this check never bites.

**The 24-character gap rule — this is now the single most common cause of a failed first gate
run.** The matcher allows at most 24 characters of filler between consecutive keyword tokens. So
for the phrase "all IB and IGCSE subjects tutor in Airoli":

- counts: "all IB and IGCSE subjects a **tutor in Airoli** covers" (short, clean gap)
- does NOT count: "all IB and IGCSE subjects are covered by at least one tutor in Airoli"
  (a 29-character gap between "subjects" and "tutor" breaks the chain)
- does NOT count: "all IB and IGCSE subjects, every tutor in Airoli"
  (**the comma breaks it** — see the punctuation rule below)

**Only spaces, letters, digits, hyphens and underscores are allowed in the gap.** Any comma,
full stop, colon, semicolon, dash, bracket or slash between two keyword words breaks the chain
no matter how short the gap is. This is the same mechanic as the school-name full stop below. If
you need a comma, put it outside the phrase, not inside it.

**The two home-logistics FAQs are matched on the QUESTION only, by keyword.** The check reads
each FAQ's question text and looks for one of exactly these words:

> home, travel, society, building, evening, gate, parking, commut(e/ing)

The answer is never read. So an FAQ that is entirely about a tutor reaching your flat scores zero
if its question happens to avoid all eight words, which has cost several writers a round-trip on
pages whose subject matter is not itself domestic. Write the trigger into the question: "Can a
tutor travel to Kharghar for an evening slot?" counts; "How far will someone come for a 7pm
session?" does not.

**The brief is not a source of fact.** Some briefs carry assessment details — a component
weighting such as "worth 20%", a paper duration, a mark total, a number of teaching hours. Do not
reproduce any of them. The IB and the examination boards revise subject guides on their own
cycles, so a figure that was right when the brief was generated may be wrong for the year your
reader's child actually sits. Name the papers and the skills, and send the reader to the current
subject guide or their school's coordinator for structure. The same applies to anything in a
brief that looks like a count, a rate or a date.

**The guarantee check is sentence-scoped, and the negator list is exact.** A claim like
"a guaranteed grade" is only forgiven when a negator appears **in the same sentence, within about
120 characters before it**. A full stop ends the protection. The list is literally:

> no, not, never, neither, nor, nobody, no one, without, cannot, can't, don't, does not, doesn't,
> isn't, is not, aren't, are not, rather than, instead of, whether, cautious of, wary of, beware,
> promises about, different from

Words that merely *read* as warnings are **not** on it. "Decline a tutor who offers a guaranteed
grade", "Avoid …", "Walk away from …" and "Refuse …" all FAIL, which has cost several writers a
round-trip. "Be wary of a tutor who offers a guaranteed grade" passes, because *wary of* is on the
list. So does "No honest tutor offers a guaranteed grade."

The simplest fix is usually to stop using the word: "a tutor who promises a specific grade" says
the same thing and trips nothing. And an FAQ *question* such as "Can you guarantee a better
grade?" has no negator at all, so it will always trip — put the guarantee wording in the answer,
after a negator, not in the question.

**The primary keyword and the secondary phrases treat punctuation OPPOSITELY — this costs a
round-trip on nearly every subject whose name contains a colon.** The primary keyword is built
from the slug, so it has no punctuation; the secondary phrases come from the subject's real name,
so they keep theirs. On one `ib-dp-english-a-literature-home-tuition` page the brief holds both:

| field | literal form | how to write it |
| --- | --- | --- |
| primary | `IB DP english a literature home tuition in Mumbai` | **no colon** |
| secondary | `English A: Literature tutor in Mumbai` | **colon required** |

Writing the subject name naturally as "English A: Literature home tuition in Mumbai" scores the
secondary phrase and **zero** for the primary, which is why these pages keep failing on
"primary keyword appears 2 times, needs 4+" while everything else passes. Place the colon-free
primary form six times in body prose, and the colon-bearing secondary form separately. The same
applies to `Mathematics: Analysis and Approaches`, `Mathematics: Applications and Interpretation`,
`English A: Language and Literature` and `Hindi A`.

**Punctuation INSIDE a secondary phrase is a required literal, not a chain-breaker.** This
corrects earlier guidance that was wrong and cost several writers placements. The matcher splits
the phrase on whitespace and escapes each token exactly, so the colon in `Mathematics:` and the
brackets in `(HL)` must appear verbatim in your prose:

- `Mathematics: Analysis and Approaches tutor in Mumbai` — **matches** with the colon written in,
  and scores **zero** if you tidy it away to "Mathematics Analysis and Approaches".
- `Chemistry IB DP Higher Level (HL) tutor Mumbai` — **matches** only with the literal `(HL)`.
- `all IB and IGCSE subjects IB and IGCSE, Years 1-12 tutor Mumbai` — **matches** when written out
  in full, comma included.

So reproduce the phrase exactly as the brief gives it. The punctuation rule above still holds for
punctuation *you* add in a gap between tokens. In practice almost every secondary phrase is
placeable; reach for the 9-of-12 floor only when a phrase genuinely cannot be written as English.

**A phrase placed only in `localKeywords` scores zero.** The gate reads your body prose, headings
and FAQs. The keyword arrays are metadata; they are not a placement. Every secondary phrase you
want counted has to appear in real sentences.

When you place a secondary phrase, keep its words close together. Burying a long clause in the
middle of the phrase means the gate scores it as absent, which is what produces the
"7 of 12 secondary phrases used, needs 9+" failure.

### School pages: three extra gate mechanics

These cost the first school writers a round-trip each. They apply to any
`ib-igcse-tutor-for-<school>-students` page:

1. **A full stop inside the school name breaks the keyword chain.** The gap pattern allows only
   spaces, word characters and hyphens, so `D.Y. Patil` and `Smt.` never match. Spell keyword
   placements `DY Patil` and `Smt Sulochanadevi` with the words contiguous; keep the formal
   `D.Y. Patil International School` for the ordinary prose and the non-affiliation sentences.
2. **`locality` is null on school pages**, so the "4+ H2s naming Mumbai or the place" check only
   accepts a literal `Mumbai` in the heading. **The school's name in an H2 scores zero.** Put
   "Mumbai" (or "Navi Mumbai") in at least four H2s.
3. The primary keyword still needs its **4+ body placements** and `home` is still a strict token
   there, exactly as on locality pages.

Also note: punctuation breaks the loose keyword chain. A semicolon or comma between the keyword's
tokens ("subjects; tutor") stops it matching, because the gap pattern only allows spaces, word
characters and hyphens. Keep the phrase's words contiguous.

## The gate quirks that cost writers a round-trip

- The keyword check is a **loose token chain**: "IB maths tutor in Worli" matches "IB Maths home
  tutor in Worli". You do not need the exact literal string.
- Nearby areas, schools, stations and corridors are matched as **literal strings** from the
  brief. Spell "Santacruz West", "Ghatkopar East", "Hiranandani Gardens" exactly as the brief does.
- The claim checker skips a match preceded by a negator, so "we do **not** guarantee grades" and
  "**not** affiliated with" are the required copy and will not trip it.
- Similarity is measured on body text against **every page already written**, not just your
  listed siblings. Different section order, different worked examples, different scenarios.
- `\bmumbai\b` does not match "Mumbai's" plural forms oddly, but it does match "Mumbai's" —
  the apostrophe ends the word. Possessives count.
