# India keyword pages: writer guide

You are writing one standalone landing page for IB Gram, an independent tutor-matching platform.
The URL is a search phrase a parent in India types into Google, for example `/india/ib-tutors`.
Your job is to write the single most useful page on the internet for that exact search. Useful
beats impressive. A parent should finish the page knowing what to do next.

## Inputs and output

1. Read your brief: `tmp/india-keywords/briefs/<slug>.json`
2. Write your page to: `tmp/india-keywords/agent-out/<slug>.json`
3. Gate it: `npx tsx scripts/india-keywords/build.ts --check <slug>`
4. Fix every problem the gate prints by editing your file, then run the gate again. Repeat until
   it prints `PASS`.

Touch no other file. Do not run builds, tests or the dev server.

## Output shape (exactly these keys)

```json
{
  "heroTitle": "4-9 words. Shown as the H2 above the intro. Names India. Not identical to the H1.",
  "heroSubtitle": "35-60 words shown under the H1. Concrete, no slogans.",
  "introSummary": "110-150 words. The first sentence answers the search directly and contains the primary keyword.",
  "contentBlocks": [
    { "type": "matching_process", "heading": "H2", "body": "300-380 words", "items": ["4-6 points"] }
  ],
  "comparison": { "heading": "...", "intro": "...", "columns": ["..."], "rows": [{ "label": "...", "cells": ["..."] }] },
  "faqs": [{ "question": "...", "answer": "70-120 words" }],
  "finalCta": "45-75 words. Exactly what happens after the parent sends a query."
}
```

### contentBlocks: exactly 10, one of each type

The page renders the blocks in this fixed order, whatever order you write them in. Write each one
so the page reads as a single argument from top to bottom:

| Order | `type` | What the slot is for on *your* page |
|---|---|---|
| 1 | `matching_process` | How IB Gram turns this specific request into a shortlist. Contains the numbered process. |
| 2 | `programmes` | Programme, board, tier or level structure relevant to the keyword. |
| 3 | `subjects` | Subject and syllabus depth for the keyword: papers, components, criteria, syllabus codes. |
| 4 | `local_areas` | India coverage: every region in `brief.regions`, named precisely, with its cities. |
| 5 | `schools` | The school calendar and expectations families here deal with (see Schools rules). |
| 6 | `tutoring_modes` | The home vs online vs hybrid comparison for this exact keyword. |
| 7 | `verification` | How tutors are checked, and what the parent should check themselves. |
| 8 | `intro` | The deepest section on the keyword's own intent (agency page: how agencies work; near-me page: what near means). |
| 9 | `trust` | What progress should look like and when; honest limits. |
| 10 | `cta` | Getting started: what to prepare, what the first session covers. |

The tutor cards (real tutors) render directly under the intro, and a school logo strip renders
near the top. Do not describe or name individual tutors.

- `heading`: the gate rejects an H2 **identical to one on any sibling page**, and generic process
  headings collide constantly across near-synonym clusters ("What happens between your query and
  the first session in India?" is the sort of heading three writers independently reach for).
  Anchor every H2 to something only your page covers: your programme, your syllabus code, your
  stage, your decision. Not the shared IB Gram process.
- `heading`: a real H2 a person would write. At least **3** of the 10 are phrased as the question
  a parent asks ("How much does an IB tutor in India cost?"). The first 40-60 words of that
  block's body answer the question completely before adding context.
- `body`: 3-4 paragraphs separated by `\n\n`. This is where the length lives. Minimum 240 words,
  aim for 300-380.
- `items`: 4-6 scannable specifics, 6-20 words each. Not slogans.
- One block contains a **numbered process**: either 3+ items starting `1.`, `2.`, `3.` or a
  `1.` / `2.` / `3.` list inside the body. It must make sense if quoted alone.

### comparison: required on every page

```json
"comparison": {
  "heading": "An H2 naming India, ideally a question: How does IB home tuition compare with a coaching centre in India?",
  "intro": "40-100 words that read on their own: who each option suits and the one trade-off that decides it.",
  "columns": ["exactly brief.comparison, same order, same spelling"],
  "rows": [{ "label": "Attention per student", "cells": ["one cell per column, 3-30 words each"] }]
}
```

- 7-10 rows. Pick from: attention per student, syllabus fit (name the real structure: HL/SL, AA/AI,
  Core/Extended, syllabus codes), travel and time in Indian cities, scheduling flexibility,
  coursework or IA help within academic integrity rules, feedback to parents, how the tutor is
  chosen and checked, trial before committing, continuity across a school year, cost structure
  (words only, never an amount), who it suits best.
- Be fair. Every other column must honestly win at least one row: a batch usually costs less per
  hour, a group gives peer discussion, a recorded course is always available.
- Never name a real business, never disparage, no statistics. The table is gated for claims like
  the rest of the page but does not count toward the 4,000 words.

### faqs: 10-12

Questions an Indian parent actually types or asks on a call, including the awkward ones (cost, a
tutor who is not working out, whether online really works, no progress after a month, travelling
to their part of the city on weekday evenings). Every answer **opens with a one-sentence direct
answer**, then gives detail. At least four are specific to this keyword's intent, and at least two
name an Indian city or region. No question may duplicate a sibling page's intent.

### Length

Body text (heroSubtitle + introSummary + block bodies + items + FAQ answers + finalCta; headings
and FAQ questions are not counted) must reach **4,000 words**. Aim for 4,300-4,800. Length must
come from new information: a named city and what it means for timing, a paper or criterion with a
worked example, a calendar pressure point, a real trade-off, a scenario families here run into.
Never restate.

## Home tuition intent

Parents searching these phrases mostly want a tutor who comes to their home. IB Gram's lead service
on every page except the explicitly online ones is **home tutoring**: a verified tutor teaching the
student at home, in the family's own locality. Unless your slug contains "online":

- The first 60 words of `introSummary` mention home tutoring or home tuition.
- At least **2 H2 headings** mention home tutoring, home tuition or home classes.
- Use "home tutor", "home tuition" and "home classes" naturally at least **8 times** in body text.
  Never stuff them. The gate counts only the compound forms `home tutor(s)`, `home tutoring`,
  `home tuition(s)`, `home teacher(s)`, `home classes`, `home lessons`, `home sessions`,
  `home visit(s)`. Phrasings like "at home", "in the home" or "teaching at the student's house"
  read fine but count zero, so a page can feel full of home tuition and still fail this check.
- At least **2 FAQs** are about home tuition logistics: the tutor travelling to the family's
  locality, weekday evening slots, a parent at home during lessons, study space, or a missed session.
  The gate looks for the word "home" in the FAQ **question** itself, not the answer, so an answer
  full of home tuition under a question that never says "home" scores zero.

Pages whose slug contains "online" keep their online intent and need only 4 such mentions, but must
still present home and hybrid tuition as real options with honest trade-offs.

Every page, including the online ones, must name **online** and **hybrid** tutoring as options. The
`tutoring_modes` block carries the comparison.

## Search intent: stay in your lane

`brief.intent` says what this page answers. `brief.siblings` lists all 99 other pages and what each
owns. Many siblings share almost the same words ("ib tuition", "ib tutoring", "ib coaching"). What
separates them is the question each one answers. Build every section around your intent, and keep a
sibling's topic to a sentence or two. Pages that cover the same ground compete with each other in
Google and neither ranks. The gate rejects a page that is more than 30% similar to a sibling.

Cover everything in `brief.mustCover`. It is the checklist of what a complete answer contains.

## India coverage: this is a national page

**Region matching is literal.** The gate credits a region only when you write its exact name or
one of the localities in its own `areas` list. "Mumbai" alone does **not** satisfy "Mumbai
Metropolitan Region" — write Bandra, Powai, Andheri, or the full region name. "Kolkata and eastern
India" has no "Kolkata" in its area list, so Salt Lake, Ballygunge or Bhubaneswar are what count.
Open your brief's `regions[].areas` and name those strings. If none of your regions is a metro
cluster, you must still name four metros somewhere in prose to clear the metro check.

Name every region in `brief.regions`, with its cities and localities, precisely and more than once
where natural. At least four of the six metro clusters (Delhi NCR, Mumbai Metropolitan Region,
Bengaluru, Hyderabad, Chennai, Pune) must appear, so the page never reads as though it were written
for one city.

Say what each place means in practice: evening traffic on a weekday, society and apartment gate
entry, distance between a suburb and the nearest international school, whether home lessons are
practical there, when online is the better call. Name real localities from the brief (Whitefield,
Gachibowli, Powai, Koregaon Park, Salt Lake, Bodakdev). This is what makes the page rank for
searches from any part of the country, and what makes it different from every other tutoring page.

Never invent a distance or a travel time. Say "evening traffic between X and Y can stretch a short
trip", never "it takes 40 minutes".

## Schools

Names in `brief.schools` are local context only. Never say which curriculum, board or programme any
named school offers, never say where a school is, and never imply a relationship with a school.
Write about the calendar pressures and expectations families at international schools in India face
in general. Every page must include one sentence, close to where schools or boards first appear,
containing the words **"not affiliated with"**, for example: "IB Gram is an independent platform and
is not affiliated with any school named here, the International Baccalaureate, Cambridge
International Education or Pearson Edexcel."

## SEO, AEO and GEO

- The primary keyword (`brief.keyword`) appears in the first sentence of `introSummary` and 4-14
  times across body text. Never in more than 3 H2 headings.

  **The gate matches the keyword's token sequence literally, including the word "in".** For
  `ib home tutors in india` it counts "IB home tutor in India" and "IB home tutors in India", but
  **not** "IB home tutors across India", "IB home tutors nationwide", or the city-qualified
  variants. Writing the page naturally and hoping the count lands will fail with
  `primary keyword appears 1 times in body text, needs 4+`. Deliberately seed 4-6 literal
  "<keyword> in India" phrases into block bodies in your first draft; that saves a round-trip.
  Keep it under 14 so it does not read as stuffing.
- "India" appears in at least 4 H2 headings and 10+ times overall.
- Work at least 9 of the 12 `brief.secondary` phrases into headings or body, rewritten so they read
  as English. Several are city-qualified ("IB home tutor in Mumbai") and belong in the
  `local_areas` block.
- Spell entities out in full at first use, then abbreviate: International Baccalaureate (IB),
  Diploma Programme (DP), Middle Years Programme (MYP), Primary Years Programme (PYP), Higher Level
  (HL), Standard Level (SL), Internal Assessment (IA), Extended Essay (EE), Theory of Knowledge
  (TOK), Cambridge International Education, Pearson Edexcel.
- State checkable facts in extractable form: session months, paper and component names, grade
  scales, syllabus codes, word limits, criteria.
- Include one direct comparison of home, online and hybrid tutoring for this keyword, with the
  trade-off stated plainly, readable on its own.
- Write at least three passages that stand alone as a quotable answer: a definition, a comparison
  and a numbered process. These are what AI Overviews and assistants lift.

## Facts: accuracy is non-negotiable

Use `brief.facts` as your source of truth. Do not state any exam, syllabus, grading or date fact
that is not in `brief.facts`. If you are unsure, leave it out or tell the family to confirm with
the school's coordinator. Never invent statistics, pass rates, grade distributions, prices,
distances or travel times.

## Honesty (auto-rejected if broken)

- No tutor counts. No number of tutors, students, families or years in business.
- No guaranteed grades, 7s, A*s, scores or percentage improvements. "No tutor can guarantee a
  grade" is fine.
- No ratings, reviews, testimonials or success stories.
- No "number one", "top-rated", "India's leading", "the best tutors in India" claims about IB Gram.
  On a "best" framing, write about how to *judge* what is best.
- No rupee amounts or price ranges.
- Availability stays conditional: "subject to tutor availability", "depends on level and schedule".
- What IB Gram does (say only this): parents send a query or book a free consultation; IB Gram asks
  about board, syllabus, level, school calendar, location and schedule; it shortlists tutors whose
  profiles are verified and match those needs; a demo or trial session can be arranged before the
  family commits; lessons run at home, online or hybrid; the family can ask for a different match
  if the fit is wrong. Promise nothing beyond that.

## Voice: write like a person

Write like an experienced academic counsellor who has sat with many families across Indian cities,
is impatient with marketing language, and respects the reader's time.

- Vary sentence length hard. Short sentence. Then a longer one that carries a qualification the
  reader needs before acting.
- Admit trade-offs and limits. Say when home tutoring is worse than online, when starting late
  narrows what is possible, when a family does not need a tutor at all.
- Indian English register, naturally: Class 10, fees, sessions, revision, doubt-solving, school
  timings, traffic, board exams. British spelling: programme, practise (verb), organise, colour.
  Keep official IB names exactly as given in the facts ("How we organize ourselves").
- Rotate person: speak to the parent as "you", describe the student in third person, tell a short
  scenario.
- Occasionally begin a sentence with And, But or So. Occasionally use a one-line paragraph.
- Perfect grammar and punctuation. Read every sentence once for agreement, tense and article use.
- Maximum 8 em dashes on the whole page.

Never use any of these (auto-rejected):

```
in today's fast-paced / delve into / unlock / navigate the complexities / it is important to note /
it's worth noting / in conclusion / in summary, / moreover, / furthermore, / additionally, / firstly, /
the landscape of / educational landscape / tapestry / a testament to / elevate your / seamless /
robust solution / leverage the / game-changer / when it comes to / look no further / rest assured /
dive into / embark on / at the end of the day / cutting-edge / state-of-the-art / world-class /
unparalleled / plethora / myriad of / harness the power / revolutionize / paradigm shift /
holistic approach to learning / in the realm of / boasts a / nestled in / vibrant city of /
bustling city / ecosystem of / in essence / crucially, / notably, / that said, / first and foremost /
the key takeaway / one thing is clear / when it comes down to / in the heart of / stands as a /
plays a vital role / whether you're / academic journey / learning journey / empower /
tailored to your / we understand that / top-notch / second to none / one-stop / hassle-free /
peace of mind / incredible india / land of diversity / nook and corner / needless to say
```

Also avoid: rule-of-three lists as a habit; three sentences in a row starting the same way;
rhetorical questions as paragraph openers; summarising a section at its end.

## What ranks in India today, and how to beat it

Competing pages are thin (roughly 500-2,000 words), reuse templates across every city, make
unverifiable claims ("No.1", tutor counts, success rates, testimonials, fee figures), skip syllabus
codes, list cities loosely with no local detail, never explain vetting or matching, and never lay
out a structured comparison. Most have no real FAQ.

Win on: exact syllabus structure from `brief.facts`, real locality detail across several metros,
school-calendar timing, a transparent step-by-step matching process, the comparison table, and
10-12 genuinely useful FAQs. Never copy their claims.
