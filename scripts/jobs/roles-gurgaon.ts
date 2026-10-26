import type { RoleRow } from "./roles-types";

/**
 * The twenty Gurgaon vacancies behind /jobs/.
 *
 * Each row carries its own summary, overview, paragraphs and subject bar, so the
 * generator in seed-roles.ts only has to add what is genuinely identical across every
 * role (the payout arithmetic, the ID checks, the payout date). Two listings should
 * never read the same.
 */
export const GURGAON_ROLES: RoleRow[] = [
  {
    slug: "ib-dp-maths-aa-hl-home-tutor-golf-course-road-gurgaon",
    title: "IB DP Mathematics AA HL home tutor — Golf Course Road, Gurgaon",
    level: "IB DP Mathematics AA (HL and SL)",
    mode: "home",
    where: "Golf Course Road, Gurgaon",
    areas:
      "DLF Phase 5, Sectors 42 and 43, Nirvana Country and the Golf Course Road corridor up to Sector 54",
    summary:
      "Teach IB Diploma Mathematics Analysis and Approaches at Higher Level in person along Golf Course Road. Mostly DP1 and DP2 students carrying HL AA alongside two other Higher Level subjects.",
    overview:
      "Analysis and Approaches HL is the hardest line on most of these students' timetables, and it is usually the subject the school advises them to drop. The families on this route do not want it dropped. They want someone who can rebuild the algebra underneath the calculus fast enough that the student stays in HL and finishes the Internal Assessment on time.",
    notes: [
      "Students on this route are typically at schools like The Shri Ram School Aravali, Excelsior American School and Pathways, so you work to those schools' unit plans and mock dates rather than a syllabus order of your own.",
      "The work splits roughly in three: repairing pre-DP algebra and trigonometry, teaching the HL-only content such as proof by induction, complex numbers, vectors and the harder calculus, and then paper technique against past Paper 1 and Paper 3 questions.",
      "Expect two to three sessions a week per student, most often between 4pm and 9pm on weekdays, with longer weekend slots in the run-up to mocks.",
    ],
    skills: [
      "Fluency across the whole AA HL course including Paper 3, not just the part that overlaps with SL.",
      "A worked understanding of the Mathematics IA criteria and what separates a 14 from a 17.",
      "The judgement to tell a student honestly when HL is not survivable, rather than taking the fee anyway.",
    ],
    duties: [
      "Diagnose the pre-DP algebra gaps in the first two sessions and tell the family plainly what is missing.",
      "Supervise the Mathematics IA to the school's deadlines without writing any part of it.",
      "Work past Paper 1, 2 and 3 questions under timed conditions in the eight weeks before mocks.",
    ],
    nice: ["Current or past IB examiner or IA moderator experience in Mathematics."],
  },
  {
    slug: "ib-dp-physics-hl-home-tutor-dlf-phases-gurgaon",
    title: "IB DP Physics HL home tutor — DLF Phases 1 to 4, Gurgaon",
    level: "IB DP Physics (HL and SL)",
    mode: "home",
    where: "DLF Phases 1 to 4, Gurgaon",
    areas: "DLF Phases 1, 2, 3 and 4, Sectors 26 to 28, South City I and the MG Road belt",
    summary:
      "In-person IB Physics teaching across the older DLF phases: Higher Level students doing the full option and the Group 4 project, and Standard Level students who need the mechanics rebuilt.",
    overview:
      "Physics is where the gap between a student who can rearrange an equation and a student who understands the physics shows up hardest. These engagements are usually booked after a 3 or a 4 in the first DP1 report, and the family wants to see the grade move by the next one.",
    notes: [
      "Most of the teaching sits in mechanics, fields and the HL extensions, with a recurring need to fix the uncertainty and error-propagation work that quietly costs marks in Paper 3 and in the IA.",
      "Practical work matters here. You will be asked to talk students through their IA design and the data they have already collected, including when that data is not good enough and the investigation has to change.",
      "Students on this route are often doing Physics HL with Mathematics AA SL, which is a difficult pairing and needs the mathematics taught alongside the physics rather than assumed.",
    ],
    skills: [
      "The complete HL course plus at least one option taught to exam standard.",
      "Confident treatment of uncertainties, graph linearisation and Paper 3 data analysis.",
      "Enough mathematics to teach the calculus a Physics HL student needs before their maths class reaches it.",
    ],
    duties: [
      "Review the student's practical data and IA draft against the five assessment criteria.",
      "Teach the uncertainty and significant-figure conventions the IB marks against, not the ones picked up at school.",
      "Run Paper 1 multiple choice under time pressure, which is where careless marks are lost.",
    ],
    nice: ["Experience supervising Group 4 projects or Physics Extended Essays."],
  },
  {
    slug: "ib-myp-maths-science-home-tutor-sohna-road-gurgaon",
    title: "IB MYP Maths and Science home tutor — Sohna Road, Gurgaon",
    level: "IB MYP Years 3 to 5 (Grades 8 to 10)",
    mode: "home",
    where: "Sohna Road, Gurgaon",
    areas:
      "Sectors 47 to 49, Vatika City, Malibu Towne, Uniworld Garden and the Sohna Road stretch to Badshahpur",
    summary:
      "MYP mathematics and integrated science for Grades 8 to 10 along Sohna Road, including the criterion-based assessment that most parents here have never had explained to them.",
    overview:
      "MYP parents arrive confused. Reports come back as four criteria scored out of eight with no percentage anywhere, and nobody has told them what Criterion D actually asks for. Half of this role is teaching the subject and half is making the assessment legible to the family.",
    notes: [
      "The students are mostly at schools such as GD Goenka World School and Pathways, moving towards either MYP eAssessment or a switch into IGCSE in Year 10, and the right preparation differs depending on which.",
      "Criterion C and D tasks, which ask students to communicate and apply mathematics in real contexts, are where marks are lost rather than in the computation, so modelling and written justification take most of the teaching time.",
      "Science at MYP is integrated, so one student may need biology, chemistry and physics in the same month depending on where the unit plan has reached.",
    ],
    skills: [
      "Working knowledge of MYP criteria A to D in both Mathematics and Sciences, and what the command terms require.",
      "Comfort teaching biology, chemistry and physics at Years 3 to 5 level inside one engagement.",
      "The ability to explain a criterion-based report to a parent who is used to percentages.",
    ],
    duties: [
      "Teach to the school's current unit plan and statement of inquiry, not to a syllabus order of your own.",
      "Prepare students for criterion-based tasks including the written reflection, which schools rarely teach explicitly.",
      "Flag early, in writing, where a student is not ready for MYP eAssessment or for the IGCSE route the family has assumed.",
    ],
    nice: ["Experience preparing students for MYP eAssessment in Mathematics or Integrated Sciences."],
  },
  {
    slug: "igcse-maths-additional-maths-home-tutor-sector-56-57-gurgaon",
    title: "IGCSE Maths and Additional Maths home tutor — Sectors 56 and 57, Gurgaon",
    level: "IGCSE Mathematics 0580 and Additional Mathematics 0606",
    mode: "home",
    where: "Sectors 56 and 57, Gurgaon",
    areas: "Sectors 55, 56 and 57, Sushant Lok Phases 2 and 3, Rosewood City and Uppal Southend",
    summary:
      "Extended-tier IGCSE Mathematics and the Additional Mathematics 0606 paper, taught in person around the Sector 57 school belt.",
    overview:
      "Additional Mathematics decides whether a student can take Maths AA HL in the Diploma, and it is taught thinly almost everywhere because it sits outside the core timetable. Families book this role specifically for 0606, then often discover that the 0580 Extended foundations underneath are not solid either.",
    notes: [
      "Students here are largely at schools like Scottish High International School and Lancers International School, sitting Cambridge papers in the May/June series with mocks in January.",
      "0606 brings calculus, binomial expansion, logarithms and kinematics that 0580 never touches, so the teaching order has to run ahead of school rather than alongside it.",
      "A regular part of the work is the Core-to-Extended decision: telling a family honestly in Year 10 whether the student should change tier, while there is still time for it to matter.",
    ],
    skills: [
      "Both 0580 Extended and 0606 to full paper standard, including the calculus and kinematics in 0606.",
      "Knowledge of Cambridge mark scheme conventions, especially method marks and accuracy penalties.",
      "A clear view of what AA HL will demand next, so that Year 11 teaching points forward.",
    ],
    duties: [
      "Run a tier diagnostic in the first session and state plainly whether Core or Extended fits.",
      "Teach 0606 ahead of the school timetable so that revision is revision, not first exposure.",
      "Mark full past papers to Cambridge mark schemes and go through the method marks lost.",
    ],
    nice: ["Experience teaching the Cambridge IGCSE to Maths AA HL transition."],
  },
  {
    slug: "ib-dp-chemistry-hl-home-tutor-nirvana-country-south-city-gurgaon",
    title: "IB DP Chemistry HL home tutor — Nirvana Country and South City II, Gurgaon",
    level: "IB DP Chemistry (HL and SL)",
    mode: "home",
    where: "Nirvana Country and South City II, Gurgaon",
    areas:
      "Nirvana Country, South City II, Sectors 50 and 51, and the Vipul Belmonte to Park Place stretch",
    summary:
      "Higher Level IB Chemistry taught at home in the Sector 50 belt, covering organic mechanisms, energetics and the HL extensions most students meet too late to absorb.",
    overview:
      "Chemistry HL rewards a student who can see a mechanism and penalises one who memorised reactions. Most students on this route arrive having memorised reactions. The work is rebuilding the structure underneath so that the unseen question in Paper 2 becomes answerable.",
    notes: [
      "Organic chemistry and the HL mechanisms account for the largest share of lost marks, followed by energetics and the calculation-heavy parts of Paper 1.",
      "The Chemistry IA is where a grade is most easily recovered, because it is marked on method and evaluation rather than on being right, and most students treat it as a school lab report.",
      "These are mainly DP1 and DP2 students at schools such as Pathways and Suncity World School, so sessions follow those schools' assessment calendars.",
    ],
    skills: [
      "Full HL Chemistry including the organic mechanisms and at least one option.",
      "Confident mole, equilibrium and thermodynamics calculation at Paper 1 pace.",
      "A working grip on the Chemistry IA criteria, especially Evaluation, where most marks are left on the table.",
    ],
    duties: [
      "Teach mechanisms as reasoning about electron movement rather than as reactions to memorise.",
      "Review IA drafts against the criteria and say what is missing without writing it.",
      "Drill Paper 1 calculation under time, including the data booklet skills students neglect.",
    ],
    nice: ["Chemistry Extended Essay supervision or examining experience."],
  },
  {
    slug: "ib-dp-economics-tutor-sushant-lok-golf-course-extension-gurgaon",
    title: "IB DP Economics tutor — Sushant Lok and Golf Course Extension, Gurgaon",
    level: "IB DP Economics (HL and SL)",
    mode: "hybrid",
    where: "Sushant Lok and Golf Course Extension Road, Gurgaon",
    areas: "Sushant Lok Phase 1, Sectors 65 to 70 and the Golf Course Extension Road corridor",
    summary:
      "IB Economics taught at home, online or as a mix: diagram technique, the HL quantitative paper, and three commentaries that students almost always leave far too late.",
    overview:
      "Economics looks like the comfortable Group 3 choice and then turns on students in the Internal Assessment. Three commentaries, each 800 words, each needing a real news article and a diagram that earns its place. Families book this role in DP1 once the first commentary comes back at 7 out of 14.",
    notes: [
      "Diagram work is non-negotiable and takes much of the teaching time: drawn accurately, labelled fully, and explained in prose that refers to the diagram rather than describing it.",
      "HL students additionally need Paper 3, the quantitative paper, which is mechanical and very learnable but almost never gets enough class time.",
      "Commentary supervision runs across the whole engagement: article selection, the key-concept link, and the evaluation paragraph that separates a 10 from a 13.",
    ],
    skills: [
      "The full Economics course across all four units, with real command of the HL quantitative content.",
      "Diagram accuracy to examiner standard, including the ones students habitually draw wrong.",
      "Experience marking IA commentaries against the current criteria and the key concepts.",
    ],
    duties: [
      "Build a commentary schedule in the first month so all three are not written in the same fortnight.",
      "Teach the evaluation paragraph explicitly, because most students write description and expect evaluation marks.",
      "Cover Paper 3 calculation for HL students regardless of where the school timetable has reached.",
    ],
    nice: ["Experience as an Economics IA moderator or Paper 3 examiner."],
  },
  {
    slug: "igcse-physics-chemistry-home-tutor-new-gurgaon-sectors-82-95",
    title: "IGCSE Physics and Chemistry home tutor — New Gurgaon, Sectors 82 to 95",
    level: "IGCSE Physics 0625 and Chemistry 0620 (Extended)",
    mode: "home",
    where: "New Gurgaon, Sectors 82 to 95",
    areas:
      "Sectors 82 to 95, Vatika India Next, Sobha International City, Tulip Homes and the New Gurgaon edge of the Dwarka Expressway",
    summary:
      "Extended-tier Cambridge Physics and Chemistry for Years 10 and 11 in New Gurgaon, where the school commute is long and an evening home session after 6pm is the only workable slot.",
    overview:
      "New Gurgaon families send their children a long way to school, so the student is home late and tired, and a 90-minute evening session has to be genuinely well planned to be worth anything. This route suits tutors who already live on this side of the city and are not fighting the Golf Course Road commute twice a day.",
    notes: [
      "Both subjects are taught at Extended tier with the alternative-to-practical paper included, which is marked harshly and is rarely practised at school.",
      "Physics here is mostly electricity, forces and waves. Chemistry is moles, rates and the qualitative analysis tables students try to memorise instead of understand.",
      "Many of these students are heading into the IB Diploma locally, so Year 11 work should set up DP sciences rather than stop at the Cambridge paper.",
    ],
    skills: [
      "Both 0625 and 0620 at Extended tier, including Paper 6 alternative to practical.",
      "Comfort teaching two sciences to the same student inside one session block.",
      "A realistic view of travel inside New Gurgaon at 6pm, and the discipline to keep the slot anyway.",
    ],
    duties: [
      "Plan 90-minute evening sessions that a tired student can actually use.",
      "Practise alternative-to-practical questions throughout, not in the last month.",
      "Cover both subjects on an agreed split rather than letting the weaker one take every session.",
    ],
    nice: ["Experience bridging IGCSE sciences into IB DP Group 4 subjects."],
  },
  {
    slug: "ib-dp-english-a-lang-lit-online-tutor-gurgaon",
    title: "IB DP English A Language and Literature online tutor — Gurgaon",
    level: "IB DP English A Language and Literature (HL and SL)",
    mode: "online",
    where: "Gurgaon",
    summary:
      "Online teaching for Gurgaon Diploma students: the individual oral, Paper 1 unseen analysis, and the HL essay that falls due far earlier than anyone expects.",
    overview:
      "English A is the subject where a bright student plateaus at a 5 and cannot work out why. Almost always the cause is that they are summarising rather than analysing, and nobody has shown them the difference on their own writing. That is what this role fixes, line by line, on the student's own drafts.",
    notes: [
      "The individual oral works from a global issue and two extracts and has to be rehearsed properly rather than performed from a script, which examiners spot immediately.",
      "Paper 1 is unseen text analysis under time, and the highest-value skill is reading an unfamiliar text type quickly and finding something worth saying about how it is built.",
      "HL students carry the 1,500-word HL essay as well, which needs a line of argument agreed early rather than a topic chosen late.",
    ],
    skills: [
      "The current Language and Literature course, including the learner portfolio and the global issues framework.",
      "The ability to mark a student's own writing closely and show the gap between summary and analysis.",
      "Experience preparing individual orals to the assessment criteria rather than to a memorised script.",
    ],
    duties: [
      "Mark drafts on the student's own text with specific, criterion-referenced comments.",
      "Rehearse the individual oral with real questioning and recorded timings.",
      "Set unseen Paper 1 texts under timed conditions every fortnight once DP2 begins.",
    ],
    nice: ["English A examining experience, or supervision of Category 1 or 3 Extended Essays."],
  },
  {
    slug: "ib-pyp-home-tutor-palam-vihar-sector-23-gurgaon",
    title: "IB PYP home tutor — Palam Vihar and Sector 23, Gurgaon",
    level: "IB PYP (Grades 1 to 5)",
    mode: "home",
    where: "Palam Vihar and Sector 23, Gurgaon",
    areas:
      "Palam Vihar, Sectors 21, 22 and 23, Dwarka Expressway sectors 109 to 113 and the Bijwasan border",
    summary:
      "Primary Years Programme support at home for Grades 1 to 5: reading fluency, number sense, and the inquiry work primary parents find hardest to help with.",
    overview:
      "Primary tuition is not a smaller version of secondary tuition. A six-year-old who has stopped enjoying reading needs a different kind of session entirely, and parents here are often unsure whether tuition at this age is even appropriate. Being honest about when it is not is part of the job.",
    notes: [
      "The bulk of the work is reading fluency and comprehension, place value and number sense, and written expression, which are the three things that compound if they are left.",
      "PYP runs through units of inquiry rather than textbooks, so sessions connect to the school's current unit rather than following a separate curriculum.",
      "Sessions are shorter here, typically 45 to 60 minutes, and three short sessions a week beat one long one at this age.",
    ],
    skills: [
      "Experience teaching Grades 1 to 5, with genuine primary pedagogy rather than scaled-down secondary teaching.",
      "Reading intervention technique: phonics where it is still needed, fluency and comprehension strategies after that.",
      "Patience with parents who want faster progress than a seven-year-old can give.",
    ],
    duties: [
      "Keep sessions to 45 to 60 minutes and build them around the school's current unit of inquiry.",
      "Report progress in plain language, with what the parent can do between sessions.",
      "Say so if a child does not need tuition, or needs a specialist assessment instead.",
    ],
    nice: ["A primary teaching qualification, or experience with dyslexia-aware reading intervention."],
  },
  {
    slug: "ib-dp-biology-hl-tutor-sector-43-52-gurgaon",
    title: "IB DP Biology HL tutor — Sectors 43 and 52, Gurgaon",
    level: "IB DP Biology (HL and SL)",
    mode: "hybrid",
    where: "Sectors 43 and 52, Gurgaon",
    areas:
      "Sectors 43, 44, 45, 51 and 52, Sushant Lok Phase 1 and the Huda City Centre side of Sector 29",
    summary:
      "Biology at Higher and Standard Level around Sectors 43 and 52, taught in person or online, including the statistics and IA work Biology students are least prepared for.",
    overview:
      "Biology attracts students who expect to memorise, then meets them with a data-based Paper 2, a statistics requirement in the IA, and a syllabus too large to learn late. The job is to move them onto understanding and to start the IA while there is still time to collect data twice.",
    notes: [
      "Content volume is the real enemy, so the teaching has to build recall structures such as diagrams, pathways and comparison tables rather than re-explaining topics once each.",
      "The IA needs a biological system that can actually be sampled in Gurgaon, enough repeats to analyse, and a statistical test the student can justify. Most first drafts fail on the second of those.",
      "Data-based questions in Paper 2 are where HL students lose the most, because they are asked to interpret an unfamiliar experiment rather than recall a topic.",
    ],
    skills: [
      "The full HL Biology course plus one option, taught to exam standard.",
      "Statistics for the IA: standard deviation, t-test, chi-squared, and the judgement of which applies.",
      "Experience with data-based question technique, not just content delivery.",
    ],
    duties: [
      "Start IA planning in DP1 so there is time for a second round of data collection.",
      "Build recall tools with the student rather than for them.",
      "Set data-based questions from unfamiliar experiments every fortnight.",
    ],
    nice: ["Biology IA moderation or Extended Essay supervision experience."],
  },
  {
    slug: "igcse-business-studies-economics-tutor-mg-road-dlf-gurgaon",
    title: "IGCSE Business Studies and Economics tutor — MG Road and DLF, Gurgaon",
    level: "IGCSE Business Studies 0450 and Economics 0455",
    mode: "hybrid",
    where: "MG Road and DLF, Gurgaon",
    areas: "MG Road, DLF Phases 1 to 4, Sector 28, Qutab Plaza and the Sikanderpur to Sector 29 stretch",
    summary:
      "Cambridge Business Studies and Economics for Years 10 and 11, taught at home or online, with the case-study technique that decides the grade.",
    overview:
      "Both of these papers are passed or failed on application, not knowledge. A student who can define elasticity but cannot apply it to the case study business in front of them gets a 5. Teaching the applied answer structure is nearly the whole job.",
    notes: [
      "Business Studies Paper 2 is a case study, and the marks sit in applying theory to that specific business and reaching a justified recommendation at the end.",
      "Economics 0455 overlaps enough with Business that students confuse the two answer styles, so the distinction has to be taught deliberately.",
      "Students on this route often move into IB Business Management or Economics, so Year 11 should leave them with evaluation habits that transfer.",
    ],
    skills: [
      "Both 0450 and 0455 to full paper standard, including the Paper 2 case study format.",
      "The ability to teach applied and evaluative answer structures rather than content alone.",
      "Command of the Cambridge command terms and what each one is actually marked for.",
    ],
    duties: [
      "Teach answer structure explicitly: point, application to this business, evaluation, judgement.",
      "Work unseen case studies under timed conditions from the second month onwards.",
      "Keep the two subjects' answer styles separate in the student's head.",
    ],
    nice: ["Commercial experience you can draw real examples from."],
  },
  {
    slug: "ib-dp-computer-science-online-tutor-gurgaon",
    title: "IB DP Computer Science online tutor — Gurgaon",
    level: "IB DP Computer Science (HL and SL)",
    mode: "online",
    where: "Gurgaon",
    summary:
      "Online IB Computer Science for Gurgaon Diploma students: the examined pseudocode, HL abstract data structures, and a solution that has to be built, documented and defended.",
    overview:
      "Computer Science is picked by students who can code and then assessed on things coding does not teach: pseudocode in the IB's own dialect, trace tables, and a documented solution with a real client. Strong programmers routinely underperform here, which is exactly the problem this role solves.",
    notes: [
      "The IB's pseudocode conventions have to be taught as their own notation, because students who write real Java in Paper 1 lose marks for it.",
      "HL adds abstract data structures such as linked lists, trees and recursion, plus the case study, which changes annually and needs its own research plan.",
      "The Internal Assessment is a working product for a real client with planning, design, development and evaluation documents. Students almost always build first and document last, which is backwards.",
    ],
    skills: [
      "The full HL course including abstract data structures, object-oriented programming and the current case study.",
      "The IB pseudocode conventions and trace-table technique as examined.",
      "Experience supervising the IA product and its documentation against the criteria.",
    ],
    duties: [
      "Teach pseudocode and trace tables as examined, separately from real programming.",
      "Make the student fix a client and a success criteria list before any code is written.",
      "Run the annual case study as a structured research task rather than background reading.",
    ],
    nice: ["Professional software development experience alongside teaching."],
  },
  {
    slug: "ib-extended-essay-tok-mentor-online-gurgaon",
    title: "IB Extended Essay and TOK mentor (online) — Gurgaon",
    level: "IB DP Core: Extended Essay and Theory of Knowledge",
    mode: "online",
    where: "Gurgaon",
    summary:
      "Online mentoring on the Diploma core for Gurgaon students: research question design, the Extended Essay's 4,000 words, and the TOK essay and exhibition that together carry the bonus points.",
    overview:
      "The core is worth three points and is the part of the Diploma students treat as optional until DP2, when it becomes the reason they miss an offer. This role exists to get the research question right in DP1, which is the single decision that determines whether the essay is writable at all.",
    notes: [
      "Most failing Extended Essays fail on the research question: too broad, not answerable with available sources, or not actually a question. Fixing that early saves the entire essay.",
      "TOK essays are written against prescribed titles released by the IB and have to argue with knowledge claims rather than opinions, using examples the student can defend.",
      "The TOK exhibition needs three objects and a commentary tied to an IA prompt, and students usually pick objects they cannot say anything interesting about.",
      "This is mentoring that complements the school supervisor rather than replacing them. The school's supervision record and reflection sessions still stand.",
    ],
    skills: [
      "Experience supervising Extended Essays in at least two subject groups, against the current criteria.",
      "A clear grasp of the TOK essay and exhibition assessment instruments.",
      "Academic referencing and research ethics, including a working understanding of academic honesty rules.",
    ],
    duties: [
      "Interrogate and narrow the research question before any writing starts.",
      "Hold students to a written timeline with interim word-count targets.",
      "Teach argument and counter-argument in TOK with examples the student can actually defend.",
    ],
    nice: ["Experience as a school Extended Essay coordinator or TOK teacher."],
  },
  {
    slug: "igcse-english-first-language-home-tutor-dwarka-expressway-gurgaon",
    title: "IGCSE English First Language home tutor — Dwarka Expressway, Gurgaon",
    level: "IGCSE English First Language 0500 and Literature 0475",
    mode: "home",
    where: "Dwarka Expressway, Gurgaon",
    areas:
      "Sectors 102 to 113, Sobha City, Puri Emerald Bay, Vatika Seven Elements and the Bajghera Road corridor",
    summary:
      "Cambridge English First Language and Literature taught at home along the Dwarka Expressway sectors, focused on directed writing and the reading passages.",
    overview:
      "0500 looks like a subject you cannot tutor and is in fact highly trainable. The reading questions have a structure, the summary question has a technique, and directed writing has a form that can be taught. Students lose marks to habits, not to a lack of talent.",
    notes: [
      "The summary question is pure technique, selecting points and compressing them into continuous prose, and it improves faster than anything else on the paper.",
      "Directed writing has to hit an audience, a form and a purpose. Students write good essays that answer none of the three and cannot see why they lost marks.",
      "Where Literature 0475 is taken alongside, the texts are set by the school, so teaching has to work from their editions and their essay titles.",
    ],
    skills: [
      "0500 reading and writing papers to Cambridge standard, including summary question technique.",
      "Close marking of extended writing with specific, actionable comments.",
      "Literature essay structure where 0475 is taken alongside.",
    ],
    duties: [
      "Train the summary question deliberately until the technique is automatic.",
      "Mark directed writing against audience, form and purpose every single time.",
      "Keep a record of the student's recurring errors and revisit it monthly.",
    ],
    nice: ["Experience with the 0500 to IB English A transition."],
  },
  {
    slug: "ib-myp-individuals-societies-home-tutor-sector-57-gurgaon",
    title: "IB MYP Individuals and Societies home tutor — Sector 57, Gurgaon",
    level: "IB MYP Individuals and Societies, Years 3 to 5",
    mode: "home",
    where: "Sector 57, Gurgaon",
    areas: "Sectors 54 to 57, Sushant Lok Phases 2 and 3 and Rosewood City",
    summary:
      "MYP humanities at home around the Sector 57 school belt: history, geography and economics taught as inquiry, with the research and critical thinking criteria taken seriously.",
    overview:
      "Individuals and Societies asks MYP students to investigate, evaluate sources and write an argued piece, and most of them simply report what they found. Criterion B for investigating and Criterion D for thinking critically are the two that move, and both are teachable.",
    notes: [
      "Students here work in units that may cover history, geography or economics depending on the school's planner, so breadth across the three matters more than depth in one.",
      "Source evaluation is the recurring weakness: origin, purpose, value and limitation recited as a formula rather than used as an argument.",
      "Year 5 students heading for DP History or Geography need the essay structure started now, because the Diploma will assume it.",
    ],
    skills: [
      "MYP Individuals and Societies criteria A to D, with the command terms and the research process.",
      "Enough history, geography and economics to teach whichever unit the school is on.",
      "Source evaluation and argued writing at Years 3 to 5 level.",
    ],
    duties: [
      "Teach source evaluation as argument, not as a four-letter acronym.",
      "Build the investigation plan with the student before the research starts.",
      "Point Year 5 work towards DP essay structure where that is the student's route.",
    ],
    nice: ["Experience teaching MYP interdisciplinary units or the Personal Project."],
  },
  {
    slug: "ib-dp-maths-ai-tutor-sohna-road-sector-48-49-gurgaon",
    title: "IB DP Mathematics AI tutor — Sohna Road and Sectors 48 to 49, Gurgaon",
    level: "IB DP Mathematics AI (HL and SL)",
    mode: "hybrid",
    where: "Sohna Road and Sectors 48 to 49, Gurgaon",
    areas: "Sectors 47 to 50, Nirvana Country, Vatika City and the Sohna Road service lanes",
    summary:
      "Applications and Interpretation at Higher and Standard Level, taught at home or online, with the technology-heavy paper work and the modelling IA that AI students underestimate.",
    overview:
      "AI is chosen as the easier mathematics and then surprises students with statistics, modelling and a graphical display calculator nobody has taught them to drive. AI HL in particular is not easy, carrying matrices, graph theory and complex numbers, and students who chose it to avoid work are in trouble by DP2.",
    notes: [
      "Calculator technique is examinable here in a way it is not in AA: regression, distributions, numerical solutions, and the ability to get them right under time pressure.",
      "Statistics and probability carry the largest share of the course and of the lost marks, including hypothesis testing at HL.",
      "The IA is a modelling task with real data, and the mark depends on the mathematics being genuinely used rather than decorating a topic the student likes.",
    ],
    skills: [
      "The full AI course at both HL and SL, including matrices, graph theory and complex numbers at HL.",
      "Fluent GDC teaching on the calculator model the student's school uses.",
      "Experience supervising modelling-based Mathematics IAs with real datasets.",
    ],
    duties: [
      "Teach the calculator explicitly, as examined content rather than as a tool.",
      "Make statistics the backbone of the teaching plan, not an end-of-course topic.",
      "Hold the IA to genuine mathematical use of real data.",
    ],
    nice: ["Experience with both AA and AI, so you can advise on a mid-DP1 switch."],
  },
  {
    slug: "igcse-computer-science-0478-online-tutor-gurgaon",
    title: "IGCSE Computer Science 0478 online tutor — Gurgaon",
    level: "IGCSE Computer Science 0478",
    mode: "online",
    where: "Gurgaon",
    summary:
      "Online Cambridge Computer Science for Years 10 and 11 in Gurgaon: Paper 1 theory, pseudocode, and the Python work behind Paper 2.",
    overview:
      "0478 splits cleanly into a theory paper students find dull and a problem-solving paper they find hard. Most of them neglect the first and panic about the second. Teaching it well means making the theory concrete and the programming routine.",
    notes: [
      "Paper 1 covers data representation, networks, hardware and security, and is marked on precise terminology that students approximate and lose marks for.",
      "Paper 2 needs algorithm design in Cambridge pseudocode plus trace tables, and the ability to write and debug working Python under time.",
      "Online is the natural mode here: a shared editor and screen share teaches code better than sitting beside the student.",
    ],
    skills: [
      "0478 Papers 1 and 2 to full standard, including Cambridge pseudocode conventions.",
      "Python to the level the practical tasks need, with debugging taught as a method.",
      "Precision about terminology in the theory paper.",
    ],
    duties: [
      "Drill data representation and networking terminology to exam wording.",
      "Teach trace tables as a reliable procedure rather than guesswork.",
      "Set short programming tasks between sessions and review the code line by line.",
    ],
    nice: ["Experience taking students from 0478 into IB Computer Science or A Level."],
  },
  {
    slug: "ib-dp-french-b-spanish-ab-initio-tutor-gurgaon",
    title: "IB DP French B and Spanish ab initio tutor — Gurgaon",
    level: "IB DP Language B and ab initio (French, Spanish)",
    mode: "hybrid",
    where: "Gurgaon",
    areas:
      "Golf Course Road, DLF Phases 1 to 5, Sectors 42 to 57 and Sushant Lok, or online anywhere in Gurgaon",
    summary:
      "IB Group 2 teaching in Gurgaon, at home or online: French B at Standard or Higher Level and Spanish ab initio, with the individual oral and the five prescribed themes.",
    overview:
      "Group 2 is where otherwise strong Diploma students lose points, usually because speaking is practised only in the week before the oral. The assessment rewards sustained interaction across the prescribed themes, and that only comes from regular conversation with someone who corrects properly.",
    notes: [
      "The individual oral works from a visual stimulus linked to a theme and needs genuine unrehearsed conversation rather than a prepared monologue.",
      "Paper 1 is a written task in a specified text type such as a blog, a formal letter or a speech, and students lose marks for register and conventions rather than grammar.",
      "ab initio and B are different courses with different expectations, and a student in the wrong one should be moved early rather than carried.",
    ],
    skills: [
      "Near-native or native command of French or Spanish, with the IB Language B and ab initio assessment models.",
      "The five prescribed themes and the text types examined in Paper 1.",
      "The discipline to correct in the target language and keep the session mostly in it.",
    ],
    duties: [
      "Run every session substantially in the target language from the first month.",
      "Practise the individual oral with unseen stimuli, timed, with real follow-up questions.",
      "Teach text-type conventions and register explicitly for Paper 1.",
    ],
    nice: ["A second Group 2 language, or DELF or DELE examining experience."],
  },
  {
    slug: "igcse-biology-chemistry-weekend-home-tutor-manesar-gurgaon",
    title: "IGCSE Biology and Chemistry weekend home tutor — Manesar, Gurgaon",
    level: "IGCSE Biology 0610 and Chemistry 0620 (Extended)",
    mode: "home",
    where: "Manesar, Gurgaon",
    areas: "Manesar, IMT Manesar, Sectors 82 to 86 and the Pachgaon to Bilaspur stretch of NH-48",
    summary:
      "Weekend-only home tuition in Cambridge Biology and Chemistry for Years 10 and 11 around Manesar, where weekday evening travel is not realistic for most tutors.",
    overview:
      "Manesar families struggle to find in-person tutors at all, because nobody wants the weekday drive. This role is deliberately weekend-only: two longer sessions on Saturday or Sunday rather than four short weekday ones, which suits both the travel and the way these two subjects revise.",
    notes: [
      "Longer weekend blocks work well for these subjects, because content can be taught and then immediately tested on past-paper questions in the same session.",
      "Biology at Extended tier is largely terminology and systems while chemistry is calculation and the qualitative analysis tables, so the two sessions need different shapes.",
      "The alternative-to-practical papers for both subjects are included and should be practised from the start rather than left to the final month.",
    ],
    skills: [
      "0610 and 0620 at Extended tier, including both Paper 6 alternative-to-practical papers.",
      "The stamina to teach two-hour blocks that stay useful throughout.",
      "Realistic weekend access to Manesar and Sectors 82 to 86.",
    ],
    duties: [
      "Teach and then immediately test inside the same weekend block.",
      "Keep biology and chemistry on separate session plans rather than merging them.",
      "Hold the weekend slot reliably, because these families have very few alternatives.",
    ],
    nice: ["Experience teaching around IMT Manesar school timetables."],
  },
  {
    slug: "ib-dp-psychology-online-tutor-gurgaon",
    title: "IB DP Psychology online tutor — Gurgaon",
    level: "IB DP Psychology (HL and SL)",
    mode: "online",
    where: "Gurgaon",
    summary:
      "Online IB Psychology for Gurgaon students: the three approaches, the HL extensions, and the experimental study students have to replicate and report.",
    overview:
      "Psychology is chosen as a reading subject and assessed as an evidence subject. Every argued answer needs named studies used as evidence rather than recounted as stories, and the IA is a real experimental replication with statistics. Students who write essays without studies cap out at a 4.",
    notes: [
      "The core is the biological, cognitive and sociocultural approaches, and the marks come from using studies to support an argument rather than describing them in sequence.",
      "The IA is a replication of a simple published experiment written up with inferential statistics, and the design has to be approved and ethical before any data is gathered.",
      "HL extensions and one option add significant content, and the essay questions reward the command term being answered precisely.",
    ],
    skills: [
      "The current Psychology course including HL extensions and at least one option.",
      "Research methods and inferential statistics to IA standard, with the ethical guidelines.",
      "Essay technique built on named studies used as evidence.",
    ],
    duties: [
      "Build a study bank with the student, organised by argument rather than by topic.",
      "Check IA design and ethics before data collection, not after.",
      "Mark essays against the command term and the assessment criteria every time.",
    ],
    nice: ["Psychology IA moderation experience, or a research background."],
  },
];
