/* eslint-disable @typescript-eslint/no-require-imports -- plain CommonJS maintenance script, run with bare node */
/* eslint-disable @typescript-eslint/no-unused-vars -- pass1/pass2 below are the applied history of earlier passes, kept so the next pass can see what was already tried */
// Retitles blog posts whose ranking queries ask for something their title did not
// promise, and keeps the md frontmatter and the live DB row in step. Each patch cites
// the GSC queries that justify it. Descriptions must keep the post's PLAN primary
// keyword. check.ts allows 30-62 / 130-165, but this script holds the tighter 30-51 /
// 130-155: src/lib/seo/page-title.ts appends " | IB Gram" whenever the title leaves room
// for it, so a 51-char metaTitle is what renders at Google's 60-char limit, and anything
// longer silently loses the brand instead of gaining keywords.
//
//   node scripts/blog-rewrite/ctr-meta-apply.cjs            dry run (reads the DB)
//   node scripts/blog-rewrite/ctr-meta-apply.cjs --md        patch md only, never opens the DB
//   node scripts/blog-rewrite/ctr-meta-apply.cjs --write     patch md + DB
const fs = require("node:fs");
const WRITE = process.argv.includes("--write");
// --md patches the md sources alone. DATABASE_URL points at production, so the md pass
// must be runnable without ever constructing a client.
const MD_ONLY = process.argv.includes("--md") && !WRITE;
const prisma = MD_ONLY ? null : new (require("@prisma/client").PrismaClient)();

// ---------------------------------------------------------------------------
// Pass 3 (2026-11-10). The whole blog draws 7,338 impressions in 28 days (24% of the
// site) and converts 53 clicks, a 0.72% CTR against a 3%+ curve; the jobs pages take the
// same kind of traffic at 3.44%, so the snippet is the variable, not the ranking - except
// where noted per patch. These 42 are every blog URL whose impressions x curve-CTR gap is
// worth a rewrite, ranked by that gap. Pass 1 (2026-10-28) and pass 2 (2026-11-09) are
// already in the md files and the DB; their arrays below are history, not re-applied.
// Measured from tmp/gsc-pages.json (28 days) plus a per-page searchanalytics query pull.
// ---------------------------------------------------------------------------
const patches = [
  { slug: "how-to-score-7-ib-math-aa-hl",
    why: "590i p7.7 (rolled up across its anchor rows), 2 clicks (0.34%) against ~3.2%. The ranking query is 'how to get a 7 in math aa hl' 12i p7.3. Pass 2 already fixed the phrasing; this adds the grade boundary, the number the searcher is really after. No md file and no plan entry, so this stays a DB-only patch.",
    metaTitle: "How to Get a 7 in IB Math AA HL: The Boundary",
    metaDescription: "How to get a 7 in IB Math AA HL: the grade boundary you need, method marks, a three-phase study system, Paper 1, 2 and 3 strategy and an error log." },
  { slug: "the-gdc-advantage-in-ib-dp-mathematics-aa-hl",
    why: "1308i p5.6, 5 clicks (0.38%) against ~5.1% at that position: the single biggest CTR loss on the site. The query set is almost entirely definitional and non-IB: 'gdc math' 71i p5.5, 'gdc meaning math' 70i p5.2, 'what does gdc stand for math' 33i p3.8, 'what does gdc stand for in math' 23i p5, 'gdc in math' 22i p6.1, 'gdc maths' 15i, 'what is a gdc in math' 15i, 'gdc full form in maths' 11i. Pass 1's title asked the question; this one answers it in the title (the phrasing searchers type) and uses the description to promise what an answer box cannot: model choice and the Paper 2 marks.",
    metaTitle: "GDC Meaning in Maths: Full Form and Exam Use",
    metaDescription: "GDC stands for Graphic Display Calculator. What the GDC in IB Math AA HL actually does, which model to buy, and the Paper 2 traps that cost method marks." },
  { slug: "ib-myp-maths-criteria-a-b-c-d-explained-for-parents",
    why: "1888i p7.7, 19 clicks (1.01%) against ~3.2%. Queries: 'ib criterion a b c d' 33i p8.6, 'myp math criteria' 17i p8.7, 'ib myp math criteria' 13i p8.6, 'ib criteria a b c d' 12i p9.3, 'ib math criteria' 9i p9.7, 'myp criteria a b c d' 2i p5.5. Pass 1's title matched the query but promised nothing beyond 'Explained'; the 1-7 conversion is the thing parents actually came for, so it moves into the title.",
    metaTitle: "IB MYP Maths Criteria A, B, C, D to 1-7 Grades",
    metaDescription: "MYP maths criteria explained for parents: what each of A, B, C and D measures, the 8-point levels, and how those levels convert into the final 1-7 grade." },
  { slug: "ib-dp-core-planning-timeline",
    why: "589i p8.3, 3 clicks (0.51%). Queries: 'dp core' 41i p16.8, 'tok/ee/cas' 19i p9.6, 'tok ee cas' 11i p4.6, 'tok cas' 4i, 'tok ee matrix' 3i, 'tok and ee' 3i, 'what is dp core' 1i p2. Searchers want the three components named; 'Explained' was doing no work, so deadlines replace it.",
    metaTitle: "IB DP Core: TOK, EE and CAS Deadlines Explained",
    metaDescription: "An IB DP core timeline for TOK, EE and CAS: every deadline from DP1 term 1 to the final mocks, where the three collide, and how to clear them early." },
  { slug: "complete-guide-to-ib-internal-assessment-ia-with-examples",
    why: "525i p6.6, 11 clicks (2.10%) against ~3.9%, the best-converting blog post already. Queries are example-hunting: 'ib internal assessment guide' 2i p3, 'ia examples ib', 'ib chemistry hl ia examples', 'ib math ia examples', 'ibdp ia examples', 'sports science ia examples', 'ib ia format'. The old metaTitle spent 9 characters on a '| IB Gram' suffix the root layout appends anyway; those go to 'RQs' and the subject span.",
    metaTitle: "IB IA Examples: Weak vs Strong RQs by Subject",
    metaDescription: "IB IA examples across Maths, Sciences and Economics: weak and strong research questions side by side, the structure examiners reward, and the IA format." },
  { slug: "ib-maths-coaching-vs-private-tutor-myp-student",
    why: "204i p9.6, ZERO clicks. The dominant query cluster is not the comparison at all, it is 'MYP maths tutor' hiring intent: 'myp mathematics tutor' 40i p8.3, 'ib math private tutoring' 22i p9.2, 'myp math tutor' 18i p6.8, 'ibmyp tutoring' 15i p11.4, 'ib private tutor' 10i p16.2, 'ib myp tutor' 8i p7.3, 'myp maths tutor' 8i p5.3, 'myp tutoring' 8i p8.3. Pass 2's title led with 'IB Maths Private Tutor vs Coaching' and never used the words MYP or class; this one does, and the description keeps the plan keyword.",
    metaTitle: "MYP Maths Tutor or Coaching Class? How to Choose",
    metaDescription: "IB maths coaching vs private tutor for an MYP student: what a group class does well, where one-to-one MYP tutoring wins, and a free demo to test the fit." },
  { slug: "ib-maths-aa-vs-ai-which-one-should-you-choose",
    why: "435i, ZERO clicks, but the query positions say this is ranking-limited as much as snippet-limited: 'ib math aa vs ai' 61i p26.8, 'ib math aa or ai' 33i p36.2, 'ib math aa ai difference' 22i p30.7, 'ib math aa ai' 8i p42.6. Only the long-form phrasings sit on page 1 ('analysis and approaches vs applications and interpretations' 5i p9.4, 'ib math analysis and approaches vs application and interpretation' 6i p8.2). Adding 'which is harder' captures the 'is aa or ai math harder' cluster and the long form moves into the description.",
    metaTitle: "IB Maths AA vs AI: Difference and Which Is Harder",
    metaDescription: "IB Maths AA vs AI: the real difference between Analysis and Approaches and Applications and Interpretation, which is harder, and which degrees need AA HL." },
  { slug: "stem-subject-choice-ib-dp",
    why: "151i p7.0, 1 click (0.66%) against ~3.6%. Queries are anonymised except 'ib a level comparison stem subjects university admission' 1i p26, so the title stays on the page's own promise but trades the vague 'Physics, Chemistry' tail for the HL decision, which is the actual choice being made.",
    metaTitle: "IB DP STEM Subjects: Maths AA or AI, Which HL",
    metaDescription: "IB DP STEM subject choice by degree: engineering, medicine, computer science or research. Maths AA vs AI, which HL sciences, and the combinations to avoid." },
  { slug: "ib-myp-4-myp-5-mathematics-tutoring-gurgaon-pathways-heritage",
    why: "115i p6.7, 1 click (0.87%) against ~3.9%. Queries: 'myp maths tutor in gurgaon' 2i p12.5, 'myp tutor in gurgaon' 2i p1, 'myp 5' 1i p1. The old 47-char title repeated the H1 verbatim and carried no differentiator; standard vs extended is the decision these parents are searching around.",
    metaTitle: "MYP 4 and 5 Maths Tutor in Gurgaon: Extended",
    metaDescription: "MYP 4 and MYP 5 mathematics tutoring in Gurgaon for Pathways and Heritage students: standard vs extended, a topic map, and the DP AA or AI decision." },
  { slug: "ib-chemistry-why-students-struggle-how-to-fix-it",
    why: "92i p7.2, ZERO clicks. The one visible query is a long question, 'how can i improve my ib chemistry lab report scores?' 22i p10, so the lab report belongs in the description. The old metaTitle also wasted 9 characters on '| IB Gram'.",
    metaTitle: "IB Chemistry: Why Students Struggle, and the Fixes",
    metaDescription: "Why students struggle in IB Chemistry: the moles, energetics, equilibrium and lab report traps that cost marks, each with a worked example and a fix." },
  { slug: "ib-myp-mathematics-problem-solving-reasoning-skills",
    why: "115i p6.6, 2 clicks (1.74%) against ~4.0%. Queries are criterion-specific: 'criterion b math myp' 1i p8, 'criterion b myp math' 1i p9. Leading with the criterion instead of 'reasoning skills' matches how MYP students search it.",
    metaTitle: "MYP Criterion B: Patterns, Rules and Justifying",
    metaDescription: "IB MYP Mathematics reasoning skills for Criterion B: how to spot a pattern, write the general rule and justify it, with worked examples for each MYP year." },
  { slug: "igcse-revision-six-week-plan",
    why: "323i, 2 clicks. Query phrasing is 'study plan' and 'schedule', not 'revision plan': 'igcse study plan' 24i p43.5, 'igcse study schedule' 19i p47, 'igcse preparation' 13i p36.7, 'igcse revision' 11i p23.2, 'how to revise for igcse' 4i p10.5. Mostly ranking-limited (page 3-5), so this is a hygiene fix; the title now carries both phrasings plus the week count.",
    metaTitle: "IGCSE Study Plan: 6-Week Revision Schedule",
    metaDescription: "A six-week IGCSE revision plan and study schedule: triage your weakest subjects in week 1, rebuild topics, then switch to timed past papers and technique." },
  { slug: "best-ib-maths-tutor-in-gurgaon",
    why: "139i, ZERO clicks. Queries: 'ib maths tutor in gurgaon' 14i p11.9, 'ib myp maths home tutor' 8i p9.9, 'ib home tutor in gurgaon' 7i p20.4, 'ib tutor in gurgaon' 6i p58. Leading with the searched head term rather than 'Best', and the free demo gives the result a reason to be clicked.",
    metaTitle: "IB Maths Tutor in Gurgaon: How to Judge the Best",
    metaDescription: "How to pick the best IB maths tutor in Gurgaon for MYP extended, AA HL or AI: the evidence that separates strong tutors, plus a free demo lesson first." },
  { slug: "ib-exam-preparation-guide",
    why: "208i, ZERO clicks, and 36 of those impressions are the brand query 'ib gram' p1.2 whose clicks go to the home page. The real queries sit on page 3-5: 'ib exams' 30i p42.7, 'ib preparation' 16i p22.9, 'ib exam prep' 13i p45.1, 'ib exam preparation' 9i p12.8, 'ib exam prep platforms' 5i p7. Ranking-limited; the title now uses the exact 'IB exam preparation' phrasing rather than the abbreviated 'IB Exam Prep'.",
    metaTitle: "IB Exam Preparation: A Two-Year Plan to May",
    metaDescription: "An IB exam preparation plan for the May session: a two-year revision calendar, mock recovery, past-paper cadence and wellbeing, for all six subjects." },
  { slug: "how-to-write-a-perfect-ib-extended-essay-ee",
    why: "161i p11.3, 2 clicks (1.24%) against ~2.1%. Only 'how to write an ee study ib' 2i p46.5 is visible. The old metaTitle spent 9 characters on '| IB Gram'; the word count and the reflection sessions are what an EE searcher is scanning for.",
    metaTitle: "How to Write an IB Extended Essay: 4,000 Words",
    metaDescription: "How to write an IB Extended Essay step by step: pick a subject, shape a researchable question, run the three reflection sessions and finish on time." },
  { slug: "how-to-score-a-star-in-igcse-maths-0580",
    why: "33i p8.9, ZERO clicks against ~2.7%. Queries anonymised. Naming the papers is a sharper promise than 'Extended Strategy Guide'.",
    metaTitle: "A* in IGCSE Maths 0580: Paper 2 and 4 Strategy",
    metaDescription: "A* in IGCSE Maths 0580 Extended: how Papers 2 and 4 are marked, where top-grade marks are won and lost, accuracy habits and a final-term plan for Grade 10." },
  { slug: "ib-maths-private-tutor-fees-india-what-parents-should-expect",
    why: "30i p8.3, ZERO clicks against ~2.9%. Queries anonymised. The old metaTitle was the H1 plus '| IB Gram' and promised nothing; the five questions are the concrete takeaway.",
    metaTitle: "IB Maths Private Tutor Fees in India, Explained",
    metaDescription: "IB maths private tutor fees in India: why rates differ by city, mode and level, what an hour should include, and the five questions to ask before you pay." },
  { slug: "top-10-mistakes-in-igcse-maths",
    why: "18i p5.7, ZERO clicks against ~5.0%. Queries anonymised. 'That Cost the Most Marks' is a stronger promise than 'and How to Fix Them' and the worked examples move into the description.",
    metaTitle: "10 IGCSE Maths Mistakes That Cost the Most Marks",
    metaDescription: "The ten IGCSE maths mistakes that cost the most marks, each with a worked example, the wrong and the right version, and the habit that stops it returning." },
  { slug: "3-month-study-plan-for-igcse-maths-0580",
    why: "17i p5.8, ZERO clicks against ~4.8%. Queries anonymised. The existing title is already query-shaped, so this is a description-led fix plus one character of headroom.",
    metaTitle: "IGCSE Maths 0580 Study Plan: 12 Weeks to Exam",
    metaDescription: "A week-by-week IGCSE Maths 0580 study plan over 12 weeks: topic blocks, past-paper weeks, an error log and the final fortnight, for Core and Extended." },
  { slug: "why-ib-myp-maths-tutor-charges-5000-per-hour",
    why: "10i p5.2, ZERO clicks against ~5.7%. Queries anonymised. The old metaTitle carried '| IB Gram' on top of the layout suffix; dropping it leaves room for the full fee phrasing.",
    metaTitle: "Why an IB MYP Maths Tutor Asks ₹5,000 Per Hour",
    metaDescription: "What sits behind a ₹5,000 per hour IB MYP maths tutor fee: unseen prep, criterion feedback, when it pays off, and when a cheaper tutor is the better buy." },
  { slug: "how-to-prepare-for-jee-advanced-mathematics-ajay-vatsyayan",
    why: "12i p6.3, ZERO clicks against ~4.3%. Queries anonymised. 'Strategy' alone promised nothing; the repeating topic areas and the IB overlap are the differentiators.",
    metaTitle: "JEE Advanced Maths: The Preparation Strategy",
    metaDescription: "JEE Advanced mathematics preparation: the topic areas that repeat, multi-concept problem training, mock analysis, and the gaps IB students must close." },
  { slug: "how-can-an-ib-myp-maths-student-move-from-5-to-6-or-7",
    why: "11i p6.5, ZERO clicks against ~4.0%. Queries anonymised. 'Criterion Guide' was vague; naming the grade jump as students phrase it is clearer, and the criterion totals carry the specificity in the description.",
    metaTitle: "MYP Maths: How to Move From a 5 to a 6 or 7",
    metaDescription: "How to move from a 5 to a 7 in MYP maths: the criterion totals behind each grade boundary, which of A, B, C and D moves fastest, and a plan for each one." },
  { slug: "ib-myp-5-mathematics-eassessment-preparation-pathways-heritage-gurgaon",
    why: "14i p9.2, ZERO clicks against ~2.7%. Queries anonymised. The old title repeated the H1; format and the 12-week plan are the two things an eAssessment searcher wants.",
    metaTitle: "MYP 5 Maths eAssessment: Format and 12-Week Plan",
    metaDescription: "MYP 5 mathematics eAssessment preparation: what the on-screen format changes, the screen skills to drill, how criteria are applied, and a 12-week plan." },
  { slug: "igcse-maths-parent-guide-0580-0606",
    why: "12i p7.0, ZERO clicks against ~3.6%. Queries anonymised. The old metaTitle carried '| IB Gram'; the freed characters name the tier decision parents are actually searching.",
    metaTitle: "IGCSE Maths 0580 and 0606: Core or Extended?",
    metaDescription: "IGCSE Maths 0580 and 0606 for parents: Core vs Extended tiers, whether to add Additional Maths, the papers, exam series and how to help at home each week." },
  { slug: "ajay-vatsyayan-sir-ib-myp-mathematics-exam-confidence-gurgaon",
    why: "8i p7.3, ZERO clicks against ~3.4%. Queries anonymised apart from the brand term. 'A Practical Guide' is filler; the freezing symptom is what a worried parent or student types.",
    metaTitle: "MYP Maths Exam Confidence: Stop Freezing Up",
    metaDescription: "Build MYP maths exam confidence with an error log, graded timed practice, retrieval and a start-anywhere routine, plus the role parents should play." },
  { slug: "ib-myp-mathematics-problem-solving-ajay-vatsyayan-sir-gurgaon",
    why: "2i p2.0, ZERO clicks. Low volume, but the title is also the card text on sibling posts, so the criterion and the routine are worth naming over 'and Routines'.",
    metaTitle: "MYP Maths Problem Solving: Criterion D Routines",
    metaDescription: "MYP maths problem solving for Criterion D: how real-life tasks are marked, a routine for unfamiliar problems, and worked modelling examples." },
  { slug: "ib-home-tutor-vs-online-tutor-gurgaon",
    why: "7i p9.7, ZERO clicks. The old metaTitle spent 9 characters on '| IB Gram' and promised nothing; the scoring table is the page's actual differentiator.",
    metaTitle: "IB Home Tutor vs Online Tutor in Gurgaon: Score It",
    metaDescription: "IB home tutor vs online tutor in Gurgaon: a scoring table by subject, age and student profile, so you pick the mode that fits your child." },
  { slug: "ib-math-aa-hl-tutor-gurgaon-guide",
    why: "3i p4.7, ZERO clicks. Low volume. 'What to Check' is vague where Paper 3 is the thing that separates AA HL tutors, so it moves into the title.",
    metaTitle: "IB Math AA HL Tutor in Gurgaon: Test Paper 3",
    metaDescription: "How to choose an IB Math AA HL tutor in Gurgaon: the proof, complex numbers and calculus depth to test, Paper 3 experience and the IA limits." },
  { slug: "ib-myp-maths-vs-cbse-maths-teaching-approach",
    why: "8i p8.6, ZERO clicks against ~2.8%. 'Teaching Approach Compared' pushed the title to 54 characters, which suppresses the brand suffix and clips in a result; naming the switch is both shorter and the real search intent.",
    metaTitle: "IB MYP Maths vs CBSE Maths: What Changes",
    metaDescription: "IB MYP maths vs CBSE maths compared on teaching, assessment, depth and marking, with a worked example and a plan for switching either way." },
  { slug: "ib-myp-mathematics-success-more-than-marks-pathways-heritage-gurgaon",
    why: "33i p7.5, 1 click (3.03%), roughly at curve already, so this is a hygiene fix only: the old metaTitle carried '| IB Gram' on top of the layout suffix and named no outcome.",
    metaTitle: "MYP Maths Success: The Skills That Carry Into DP",
    metaDescription: "MYP mathematics success beyond marks: approaches to learning, communication, reflection and global contexts, and how each shows up later in the DP." },
  { slug: "how-to-choose-right-ib-myp-maths-tutor-parents-guide",
    why: "2i p5.0, ZERO clicks. Low volume. The old title was the bare keyword with no promise; the trial lesson and six-week review are the concrete steps.",
    metaTitle: "How to Choose an IB MYP Maths Tutor: Trial First",
    metaDescription: "How to choose the right IB MYP maths tutor, in any city or online: a parent's interview script, a trial lesson that reveals fit, and a six-week review." },
  { slug: "ib-exam-strategy-how-toppers-study-in-the-last-30-days",
    why: "2i p4.5, ZERO clicks. Low volume, but 'Day-by-Day Plan' duplicates wording used by two sibling posts; the triage rule is this post's own.",
    metaTitle: "Last 30 Days Before IB Exams: What to Drop",
    metaDescription: "A plan for the last 30 days before IB exams: what to drop, triage rules, paper rotation, sleep and logistics, for Diploma students sitting the May session." },
  { slug: "ib-igcse-tutors-south-delhi",
    why: "1i p4.0. Low volume. The old metaTitle used a pipe clause, which the title resolver treats as a shed candidate and can drop; naming the colonies is safer and more specific.",
    metaTitle: "IB and IGCSE Tutors in South Delhi, by Colony",
    metaDescription: "IB and IGCSE tutors in South Delhi: where home tuition works in Greater Kailash, Defence Colony, Saket, Hauz Khas and Vasant Vihar, and when online wins." },
  { slug: "ib-internal-assessment-guide",
    why: "3i p7.0, ZERO clicks. The old metaTitle carried '| IB Gram' and was 54 characters, which suppresses the brand suffix; the integrity line is what distinguishes this guide from the IA examples post.",
    metaTitle: "IB Internal Assessment: Criteria, Dates, Integrity",
    metaDescription: "An IB Internal Assessment guide: how the criteria work, a realistic timeline, academic integrity rules, and what a tutor may and may not do on your IA." },
  { slug: "ib-math-aa-hl-paper-preparation-gurgaon",
    why: "2i p8.5, ZERO clicks. The old metaTitle was 'Guide | IB Gram' on top of the layout suffix; naming the three papers is the differentiator against the AA HL tutor post.",
    metaTitle: "IB Math AA HL: Paper 1, 2 and 3 Preparation",
    metaDescription: "IB Math AA HL paper preparation, paper by paper: question styles, timing, drills and a weekly block for Paper 1, Paper 2 and Paper 3, for Gurgaon students." },
  { slug: "ib-tutors-sector-57-gurgaon",
    why: "1i p5.0. Low volume. 'IA and EE Support' is accurate but three sibling local posts use the same shape; the integrity line is this post's lane.",
    metaTitle: "IB Tutors in Sector 57 Gurgaon: IA and EE Season",
    metaDescription: "IB tutors in Sector 57 Gurgaon for coursework season: how IA drafts and Extended Essay milestones get support inside IB academic integrity rules." },
  { slug: "ib-tutors-sushant-lok-gurgaon",
    why: "40i p67.1, ZERO clicks. Position 67 means no title rewrite moves this; the change is hygiene only, dropping the '| IB Gram' suffix the layout already appends and naming the phases.",
    metaTitle: "IB Tutors in Sushant Lok Gurgaon: Phases 1, 2, 3",
    metaDescription: "IB tutors in Sushant Lok Phases 1, 2 and 3: how home tuition works in independent floors versus societies, study space, siblings and several DP subjects." },
  { slug: "igcse-computer-science-home-tuition-in-gurgaon",
    why: "1i p4.0. Low volume. The old title repeated the keyword with nothing after it; the syllabus codes are what a parent checks first.",
    metaTitle: "IGCSE Computer Science Tuition in Gurgaon: 0478",
    metaDescription: "IGCSE Computer Science home tuition in Gurgaon for 0478 and 4CP0: how the two papers work and how pseudocode and programming get taught." },
  { slug: "igcse-economics-home-tuition-in-gurgaon",
    why: "10i p17.1, ZERO clicks. Ranking-limited. The title keeps the 0455 code but trades 'Guide' for the diagram and data-response skills, which is what the page actually teaches.",
    metaTitle: "IGCSE Economics Tuition in Gurgaon: 0455 Diagrams",
    metaDescription: "IGCSE Economics home tuition in Gurgaon for Cambridge 0455 and Edexcel 4EC1: how the papers work, diagram habits and data response technique." },
  { slug: "igcse-english-home-tuition-in-gurgaon",
    why: "2i p5.5, ZERO clicks. 'Which Syllabus' was 53 characters, which suppresses the brand suffix; naming the three English routes is shorter and more specific.",
    metaTitle: "IGCSE English Tuition in Gurgaon: Which Paper?",
    metaDescription: "IGCSE English home tuition in Gurgaon starts with which English your child sits: First Language, Second Language or Literature, and the skills each needs." },
  { slug: "best-igcse-maths-tutor-near-me-in-gurgaon-sector-wise-guide",
    why: "4i p5.0, ZERO clicks. The title is already query-shaped, so only the description changes: the sector list was eating the whole budget with no reason to click.",
    metaTitle: "IGCSE Maths Tutor Near Me in Gurgaon, By Sector",
    metaDescription: "Looking for an IGCSE maths tutor near me in Gurgaon? Travel times sector by sector, from Golf Course Road to New Gurgaon, and when online wins." },
  { slug: "private-ib-tutor-cost-in-gurgaon-full-fee-breakdown",
    why: "12i p3.2 with 1 click. Converting roughly in line already, so the title is left alone in substance; only the description gains the two-year total framing that the page's own tables provide.",
    metaTitle: "Private IB Tutor Cost in Gurgaon: Two-Year Budget",
    metaDescription: "Private IB tutor cost in Gurgaon as a two-year budget, not a monthly fee: hours per subject term by term, and when the spending actually peaks." },
];

// Pass 2 (2026-11-09), superseded by pass 3 above for three of its four slugs.
const pass2 = [
  { slug: "how-to-score-7-ib-math-aa-hl",
    why: "432i p7.6, 2 clicks (0.46%) against ~3.9% expected at that position. The 72-char metaTitle was clipped by Google, and the ranking query is 'how to get a 7 in math aa hl' (p5.3), not 'how to score a 7'. Not in plan.ts and has no md file, so this is a DB-only patch.",
    metaTitle: "How to Get a 7 in IB Math AA HL: Full Study Plan",
    metaDescription: "How to get a 7 in IB Math AA HL: grade boundaries, method marks, a three-phase study system, Paper 1, 2 and 3 strategy, an error log and a weekly plan." },
  { slug: "ib-maths-aa-vs-ai-which-one-should-you-choose",
    why: "435i p16.2, ZERO clicks. The highest-volume query is 'ib math aa ai difference' 22i, plus 'aa vs ai math ib', 'ib aa vs ai' and 'analysis and approaches vs applications and interpretations' 5i at p9.4. The old title asked 'Which Should You Choose?' and never used the word searchers type: difference.",
    metaTitle: "IB Maths AA vs AI: The Difference, and How to Pick",
    metaDescription: "The difference between IB Maths AA vs AI: what each course tests, how HL and SL differ, which degrees expect which, and a profile test to decide before DP1." },
  { slug: "ib-maths-coaching-vs-private-tutor-myp-student",
    why: "204i p9.6, ZERO clicks. Queries are broad private-tuition intent, not MYP-specific: 'ib math private tutoring' 22i p9.2, 'ib private tutor' 10i, 'ib myp tutor' 8i, 'ib private tuition' 5i. 'for MYP Students' narrowed the title away from the search; the plan keyword stays in the post title so the gate still passes.",
    metaTitle: "IB Maths Private Tutor vs Coaching: Which Is Better?",
    metaDescription: "IB maths coaching vs private tutor, compared fairly: where a group class works, where private one-to-one tutoring wins, and how to decide using criteria A to D." },
  { slug: "ib-exam-preparation-guide",
    why: "208i p19.6, ZERO clicks. Queries are 'ib exams' 30i, 'ib exam prep' 13i, 'ib exam preparation' 9i p12.8, 'ib exam prep platforms' 5i p7. The old metaTitle also carried '| IB Gram' on top of the layout template, so the brand rendered twice and ate 9 characters.",
    metaTitle: "IB Exam Prep: A Two-Year Plan for the May Session",
    metaDescription: "A practical IB exam preparation guide for the May session: a two-year revision calendar, mock strategy, past-paper practice and wellbeing, subject by subject." },
];

const pass1 = [
  { slug: "the-gdc-advantage-in-ib-dp-mathematics-aa-hl",
    why: "341i p7.2, 4 clicks. Queries are definitional: 'gdc meaning math' 15i, 'what is gdc math' 15i, 'gdc math' 12i, 'what does gdc stand for math' 18i. Old title sold 'GDC Skills ... | Gurgaon Tutor' to a global audience asking what GDC means.",
    metaTitle: "What Is a GDC in Maths? IB Calculator Guide",
    metaDescription: "GDC stands for Graphic Display Calculator. What the GDC in IB Math AA HL actually does, which model to choose, and the Paper 2 marks it wins or loses." },
  { slug: "ib-myp-maths-criteria-a-b-c-d-explained-for-parents",
    why: "1997i p7.3, 19 clicks. 88i come from generic 'ib criterion/criteria a b c d'. 'for Parents' narrowed a title students also search; 'Maths' stays because the content is maths-specific.",
    metaTitle: "IB MYP Maths Criteria A, B, C and D Explained",
    metaDescription: "MYP maths criteria explained for parents: what each criterion measures, how levels become a 1-7 grade, and why strong students still score middling." },
  { slug: "ib-dp-core-planning-timeline",
    why: "1830i p8.1, 10 clicks. Top query is 'dp core' 107i at p4, plus 39i across 'tok ee cas' variants: definitional intent. Old title led with a planning timeline instead of what the Core is.",
    metaTitle: "What Is the IB DP Core? TOK, EE and CAS Explained",
    metaDescription: "An IB DP core timeline for TOK, the Extended Essay and CAS: what each one demands, where they collide, and how to plan from DP1 to the final mocks." },
  { slug: "igcse-revision-six-week-plan",
    why: "1120i, 4 clicks. Highest-volume phrasing is 'igcse study plan' 61i and 'igcse study schedule' 15i, not 'revision plan'. Same content, matched to how people search.",
    metaTitle: "IGCSE Study Plan: A 6-Week Revision Schedule",
    metaDescription: "A six-week IGCSE revision plan and study schedule: triage your weakest subjects in week 1, rebuild topics, then move to timed past papers and technique." },
  { slug: "stem-subject-choice-ib-dp",
    why: "602i p8.3, 1 click (0.17%). Old title was 71 chars so Google clipped it. Ranking query is STEM subjects for university admission, which the page's four pathway sections cover.",
    metaTitle: "IB DP STEM Subjects: Maths AA or AI, Physics, Chemistry",
    metaDescription: "IB DP STEM subject choice by university pathway: engineering, medicine, computer science or research. Maths AA vs AI, HL picks and combinations to avoid." },
];

(async () => {
  const rollback = [];
  let bad = 0;
  for (const p of patches) {
    const f = `scripts/blog-rewrite/posts/${p.slug}.md`;
    const row = prisma
      ? await prisma.blogPost.findUnique({ where: { slug: p.slug }, select: { metaTitle: true, metaDescription: true } })
      : { metaTitle: null, metaDescription: null };
    if (!row) { console.log(`!! missing row: ${p.slug}`); bad++; continue; }
    // Posts that predate the blog-rewrite project have a DB row but no md file in
    // ./posts, and are absent from plan.ts, so check.ts never gates them. Patch the
    // row alone rather than skipping the page: the row is what the site renders.
    const hasMd = fs.existsSync(f);
    // check.ts limits, enforced here so a bad patch never reaches the gate or the DB
    if (p.metaTitle.length < 30 || p.metaTitle.length > 51) { console.log(`!! ${p.slug}: metaTitle ${p.metaTitle.length} chars, needs 30-51 so " | IB Gram" still fits inside 60`); bad++; continue; }
    if (/\|\s*IB ?Gram/i.test(p.metaTitle)) { console.log(`!! ${p.slug}: metaTitle carries its own brand suffix; the root layout appends one`); bad++; continue; }
    if (p.metaDescription.length < 130 || p.metaDescription.length > 155) { console.log(`!! ${p.slug}: metaDescription ${p.metaDescription.length} chars, needs 130-155`); bad++; continue; }

    const raw = hasMd ? fs.readFileSync(f, "utf8") : null;
    const fm = hasMd ? JSON.parse(raw.split(/^---$/m)[1]) : {};
    let out = raw;
    if (hasMd) {
      let placed = true;
      for (const k of ["metaTitle", "metaDescription"]) {
        const oldLit = JSON.stringify(fm[k]);
        if (!out.includes(oldLit)) { console.log(`!! could not place ${k} in ${p.slug}`); placed = false; break; }
        out = out.replace(oldLit, JSON.stringify(p[k]));
      }
      if (!placed) { bad++; continue; }
      const check = JSON.parse(out.split(/^---$/m)[1]);   // prove frontmatter is still valid JSON
      if (check.metaTitle !== p.metaTitle || check.metaDescription !== p.metaDescription) { console.log(`!! verify failed ${p.slug}`); bad++; continue; }
    }

    rollback.push({ slug: p.slug, metaTitle: row.metaTitle, metaDescription: row.metaDescription, mdMetaTitle: fm.metaTitle, mdMetaDescription: fm.metaDescription });
    console.log(`--- ${p.slug}`);
    console.log(`  why : ${p.why}`);
    console.log(`  title ${(row.metaTitle ?? "").length} -> ${p.metaTitle.length} : ${p.metaTitle}`);
    console.log(`  desc  ${(row.metaDescription ?? "").length} -> ${p.metaDescription.length}`);
    if (WRITE || MD_ONLY) {
      if (hasMd) fs.writeFileSync(f, out, { encoding: "utf8" });
      if (WRITE) await prisma.blogPost.update({ where: { slug: p.slug }, data: { metaTitle: p.metaTitle, metaDescription: p.metaDescription } });
      console.log(MD_ONLY ? (hasMd ? "  -> md written (DB untouched)" : "  -> no md file: --md cannot patch this one, use --write") : hasMd ? "  -> md + DB written" : "  -> DB written (no md for this post)");
    }
  }
  // No rollback file is written on purpose: re-running this script would record the
  // already-patched values as the "previous" state and silently become useless.
  // Git is the rollback. To revert these five posts:
  //   git checkout HEAD -- scripts/blog-rewrite/posts/<slug>.md
  //   npx tsx --env-file=.env scripts/blog-rewrite/write-db.ts --write
  // To revert the whole blog deploy instead: write-db.ts --undo (from backup.json).
  if (WRITE && rollback.length) console.log(`\nprevious values printed above; revert with git checkout HEAD -- scripts/blog-rewrite/posts/<slug>.md then write-db.ts --write`);
  console.log(`\n${patches.length - bad}/${patches.length} ok${WRITE || MD_ONLY ? "" : "  (DRY RUN, re-run with --md or --write)"}`);
  if (prisma) await prisma.$disconnect();
})();
