# Gurgaon keyword pages: writer guide

You are writing one standalone landing page for IB Gram, an independent tutor-matching platform.
The URL is a search phrase a parent in Gurgaon types into Google, for example
`/ib-tutor-in-gurgaon/`. Your job is to write the single most useful page on the internet for
that exact search. Useful beats impressive. A parent should finish the page knowing what to do.

## Inputs and output

1. Read your brief: `tmp/gurgaon-keywords/briefs/<slug>.json`
2. Write your page to: `tmp/gurgaon-keywords/agent-out/<slug>.json`
3. Gate it: `npx tsx scripts/gurgaon-keywords/build.ts --check <slug>`
4. Fix every problem the gate prints by editing your file, then run the gate again. Repeat until
   it prints `PASS`.

Touch no other file. Do not run builds, tests or the dev server.

## Output shape (exactly these keys)

```json
{
  "heroTitle": "4-9 words. Shown as the H2 above the intro. Contains Gurgaon. Not identical to the H1.",
  "heroSubtitle": "35-60 words shown under the H1. Concrete, no slogans.",
  "introSummary": "110-150 words. The first sentence answers the search directly and contains the primary keyword.",
  "contentBlocks": [
    { "type": "matching_process", "heading": "H2", "body": "300-380 words", "items": ["4-6 points"] }
  ],
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
| 3 | `subjects` | Subject and syllabus depth for the keyword: papers, components, criteria. |
| 4 | `local_areas` | Gurgaon coverage: every corridor in `brief.corridors`, named precisely. |
| 5 | `schools` | The school calendar and expectations families here deal with (see Schools rules). |
| 6 | `tutoring_modes` | The home vs online vs hybrid comparison for this exact keyword. |
| 7 | `verification` | How tutors are checked, and what the parent should check themselves. |
| 8 | `intro` | The deepest section on the keyword's own intent (fees page: fee factors; retake page: re-mark vs retake). |
| 9 | `trust` | What progress should look like and when; honest limits. |
| 10 | `cta` | Getting started: what to prepare, what the first session covers. |

The tutor cards (real tutors) render directly under the intro, and a school logo strip renders
near the top. Do not describe or name individual tutors.

- `heading`: a real H2 a person would write. At least **3** of the 10 are phrased as the question
  a parent asks ("How much does an IB tutor in Gurgaon cost?"). The first 40-60 words of that
  block's body answer the question completely before adding context.
- `body`: 3-4 paragraphs separated by `\n\n`. This is where the length lives.
- `items`: 4-6 scannable specifics, 6-20 words each. Not slogans.
- One block contains a **numbered process**: either 3+ items starting `1.`, `2.`, `3.` or a
  `1.` / `2.` / `3.` list inside the body. It must make sense if quoted alone.

### faqs: 10-12

Questions a Gurgaon parent actually types or asks on a call, including the awkward ones (cost,
a tutor who is not working out, whether online really works, no progress after a month, travel
to their sector on weekday evenings). Every answer **opens with a one-sentence direct answer**,
then gives detail. At least four are specific to this keyword's intent, and at least two name a
Gurgaon place. No question may duplicate a sibling page's intent.

### Length

Body text (heroSubtitle + introSummary + block bodies + items + FAQ answers + finalCta; headings and
FAQ questions are not counted) must reach **4,000 words**. Aim for 4,300-4,800. Length must come
from new information: a named sector and what it means for timing, a paper or criterion with a
worked example, a calendar pressure point, a real trade-off, a scenario families here run into.
Never restate.

## Home tuition intent: every page

Parents searching these phrases in Gurgaon mostly want a tutor who comes to their home. IB Gram's
lead service on every one of these pages is **home tutoring**: a verified tutor teaching the student
at home, in the family's own sector or society. Whatever the page's keyword:

- The first 60 words of `introSummary` mention home tutoring or home tuition.
- At least **2 H2 headings** mention home tutoring, home tuition or home classes, for example "How
  IB home tuition works in DLF Phase 5".
- Use "home tutor", "home tuition" and "home classes" naturally at least **8 times** in body text
  ("an IGCSE Maths home tutor on Sohna Road", "home tuition for DP Physics"). Never stuff them.
- The `tutoring_modes` block leads with home tutoring, then presents online and hybrid as
  alternatives with honest trade-offs.
- At least **2 FAQs** are about home tuition logistics: the tutor travelling to the family's sector
  or society, weekday evening slots, a parent at home during lessons, study space and materials, or
  what happens when a home session is missed.
- Online-tutor pages keep their online intent, but present home tuition and hybrid as a real option
  alongside it.

The gate checks all of this.

## Search intent: stay in your lane

`brief.intent` says what this page answers. `brief.siblings` lists the other pages on the site
and what each owns. Write your page to own its intent completely. Touch a sibling's topic only in
a sentence or two, and never let it become a section. Pages that cover the same ground compete
with each other in Google and neither ranks.

Cover everything in `brief.mustCover`. It is the checklist of what a complete answer contains.

## SEO, AEO and GEO

- The primary keyword (`brief.keyword`) appears in the first sentence of `introSummary` and 4-12
  times across the page in natural grammar ("an IB tutor in Gurgaon", "IB tutors near me in
  Gurgaon"). Never in more than 3 H2 headings.
- Work at least 9 of the 12 `brief.secondary` phrases into headings or body, rewritten so they
  read as English.
- "Gurgaon" appears in at least 4 H2 headings and 10+ times overall. Write "Gurugram (Gurgaon),
  Haryana" once, and use Gurugram occasionally, since both names are searched.
- Spell entities out in full at first use, then abbreviate: International Baccalaureate (IB),
  Diploma Programme (DP), Middle Years Programme (MYP), Primary Years Programme (PYP), Higher Level
  (HL), Standard Level (SL), Internal Assessment (IA), Extended Essay (EE), Theory of Knowledge
  (TOK), Cambridge International Education, Pearson Edexcel.
- State checkable facts in extractable form: session months, paper and component names, grade
  scales, syllabus codes, word limits, criteria.
- Include one direct comparison of home, online and hybrid tutoring for this keyword, with the
  trade-off stated plainly, readable on its own.
- Write at least three passages that stand alone as a quotable answer: a definition, a comparison
  and a numbered process.

## Facts: accuracy is non-negotiable

Use `brief.facts` as your source of truth. Do not state any exam, syllabus, grading or date fact
that is not in `brief.facts`. If you are unsure, leave it out or tell the family to confirm with
the school's coordinator. Never invent statistics, pass rates, grade distributions, prices,
distances or travel times. Say "evening traffic between X and Y can stretch a short trip", never
"it takes 40 minutes".

## Gurgaon coverage

Name every corridor in `brief.corridors`, with its sectors, localities and societies, precisely
and more than once where natural. Say what each means in practice (evening slots, society gate
entry, whether home lessons are practical, when online is the better call). This is what makes the
page rank for searches from any part of Gurgaon, and what makes it different from every other
tutoring page.

## Schools

Names in `brief.schools` are local context only. Never say which curriculum, board or programme
any named school offers, never say where a school is, and never imply a relationship with a school.
Write about the calendar pressures and expectations families at international schools in Gurgaon
face in general. Every page must include one sentence, close to where schools or boards first
appear, containing the words **"not affiliated with"**, for example: "IB Gram is an independent
platform and is not affiliated with any school named here, the International Baccalaureate,
Cambridge International Education or Pearson Edexcel."

## Honesty (auto-rejected if broken)

- No tutor counts. No number of tutors, students, families or years in business.
- No guaranteed grades, 7s, A*s, scores or percentage improvements. "No tutor can guarantee a
  grade" is fine.
- No ratings, reviews, testimonials or success stories.
- No "number one", "top-rated", "the best tutors in Gurgaon" claims about IB Gram. On the "best"
  page, write about how to *judge* what is best.
- No rupee amounts or price ranges.
- Availability stays conditional: "subject to tutor availability", "depends on level and
  schedule".
- What IB Gram does (say only this): parents send a query or book a free consultation; IB Gram
  asks about board, syllabus, level, school calendar, location and schedule; it shortlists tutors
  whose profiles are verified and match those needs; a demo or trial session can be arranged before
  the family commits; lessons run at home, online or hybrid; the family can ask for a different
  match if the fit is wrong. Promise nothing beyond that.

## Voice: write like a person

Write like an experienced academic counsellor in Gurgaon who has sat with many families, is
impatient with marketing language, and respects the reader's time.

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
peace of mind
```

Also avoid: rule-of-three lists as a habit; three sentences in a row starting the same way;
rhetorical questions as paragraph openers; more than 8 em dashes on the whole page; summarising a
section at its end.

## Pages under /gurgaon/ (brief.hub is true)

These pages live at `brief.path` (for example `/gurgaon/ib-maths-home-tutor/`). Every rule
above applies, plus the following.

### Your lane is `brief.intent`

Many siblings share almost the same words ("home tutor", "tutor at home", "home tuition"). What
separates them is the question each one answers. Build every section around your intent, and keep a
sibling's topic to a sentence or two. `brief.siblings` includes root-level pages such as
`/ib-tutor-in-gurgaon/`: never echo their framing or examples.

### Required extra key: `comparison`

```json
"comparison": {
  "heading": "An H2 naming Gurgaon, ideally a question: How does IB Maths home tuition compare with a coaching centre in Gurgaon?",
  "intro": "40-100 words that read on their own: who each option suits and the one trade-off that decides it.",
  "columns": ["exactly brief.comparison, same order, same spelling"],
  "rows": [{ "label": "Attention per student", "cells": ["one cell per column, 3-30 words each"] }]
}
```

- 7-10 rows. Pick from: attention per student, syllabus fit (name this board's real structure:
  HL/SL, AA/AI, Core/Extended, syllabus codes), travel and time in Gurgaon, scheduling
  flexibility, coursework or IA help within academic integrity rules, feedback to parents, how the
  tutor or teacher is chosen and checked, trial before committing, cost structure (words only, never
  an amount), who it suits best.
- Be fair. Every other column must honestly win at least one row: a batch usually costs less per
  hour, a group gives peer discussion, a recorded course is always available.
- Never name a real business, never disparage, no statistics. The table is gated for claims like the
  rest of the page but does not count toward the 4,000 words.

### What ranks in Gurgaon today, and how to beat it

Competing pages are thin (roughly 500-4,000 words), reuse templates, make unverifiable claims ("No.1",
tutor counts, success rates, testimonials, fee figures), skip syllabus codes, list areas loosely,
never explain vetting or matching, and never lay out a structured comparison. Only one has a real FAQ.
Win on exact syllabus structure from `brief.facts`, corridor and sector detail, school-calendar
timing, a transparent step-by-step matching process, the comparison table, and 10-12 genuinely useful
FAQs. Never copy their claims.

FAQs parents ask in these searches (use only those that fit your intent): switching from CBSE or ICSE
mid-course; whether the tutor follows the school's pacing; how many sessions a week; what the free
demo covers; how soon a tutor can start; replacing a tutor who is not working out; revision before
mocks; progress updates to parents; a tutor travelling to their sector on weekday evenings.
