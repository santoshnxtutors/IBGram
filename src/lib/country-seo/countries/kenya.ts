import type { CountrySeoPage } from "../types";

/**
 * Kenya - https://www.ibgram.com/kenya/
 *
 * Hand-authored country landing page. Delivery to Kenyan families is ONLINE only;
 * nothing here may imply in-person tutoring inside Kenya.
 * Named schools appear as ecosystem context only - no affiliation is implied.
 */
export const kenya: CountrySeoPage = {
  slug: "kenya",
  countryName: "Kenya",
  countryNameLong: "the Republic of Kenya",
  demonym: "Kenyan",
  flagCode: "ke",
  countryCode: "KE",
  region: "East Africa",
  timezoneLabel: "East Africa Time (EAT, UTC+3)",
  schedulingNote: "Weekday evenings and weekend mornings in East Africa Time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Kenya | Online IB DP, MYP & IGCSE Tutoring",
  metaDescription: "Online IB and IGCSE tutors for students in Kenya. One-to-one IB DP, MYP and IGCSE tuition in East Africa Time, for families in Nairobi, Mombasa and beyond.",
  h1: "Online IB and IGCSE tutors for students studying in Kenya",
  heroEyebrow: "ONLINE TUTORING FOR KENYAN FAMILIES",
  heroSubtitle: "Kenya's own Competency-Based Curriculum is replacing 8-4-4 and KCSE, while a separate network of British-curriculum and IB schools runs alongside it in Nairobi, Mombasa and other towns. We match your child with a tutor who already teaches their exact syllabus - Cambridge IGCSE, Edexcel, IB DP or MYP - with lessons run online in East Africa Time around the school week.",
  primaryKeyword: "IB tutors in Kenya",
  imageAltText: "IB tutor and a Nairobi secondary student working through an IB Diploma chemistry problem in a one-to-one online lesson",
  secondaryKeywords: [
    "IGCSE tutors in Kenya",
    "online IB tutor Nairobi",
    "IB DP tutor Kenya",
    "Cambridge IGCSE tutor Nairobi",
    "A Level tutor online Kenya",
    "IB tutor Mombasa",
    "IB Maths tutor online Kenya",
    "IGCSE tutor Westlands Karen",
    "KCSE vs IGCSE tutor",
    "IB Economics tutor online",
    "Extended Essay tutor Kenya",
    "British curriculum tutor Nairobi",
  ],

  heroTrustPoints: [
    "Online lessons scheduled around Nairobi and Mombasa school timetables in East Africa Time.",
    "Tutors who understand that some Kenyan IB and Cambridge schools sit May exams, others November.",
    "Support for IB PYP, MYP, DP and CP alongside Cambridge and Edexcel IGCSE and A Level.",
    "Familiarity with KUCCPS and KNQA equivalence steps for students moving between systems.",
  ],
  heroStats: [
    { value: "19", label: "IB World Schools in Kenya" },
    { value: "12", label: "of those authorised for the Diploma Programme" },
    { value: "EAT", label: "East Africa Time, UTC+3 year-round" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in Kenya: CBC, IGCSE, IB and A Level students",
    paragraphs: [
      "Kenyan education is mid-transition. The old 8-4-4 system and its KCSE exam are being phased out in favour of the Competency-Based Curriculum, whose first cohort moved into Senior School - Grades 10 to 12 - at the start of 2026. Running alongside that public reform is a separate, long-established network of British-curriculum and IB schools, concentrated in Nairobi and Mombasa but present in several other towns, where children sit Cambridge or Edexcel IGCSE, A Level, or the IB Diploma instead. IB Gram works with families across both worlds. All tutoring is online, scheduled in East Africa Time; we do not place tutors inside Kenyan homes, since home visits are something we arrange only for families in India, where our tutors are based.",
      "Kenya currently has 19 schools holding IB World School status, and 12 of those are authorised to teach the Diploma Programme, a small but well-regarded group by regional standards. Most sit inside Nairobi's international-school belt - Westlands, Karen, Runda and the surrounding suburbs - with a further pocket around Mombasa on the coast. Far more schools teach Cambridge or Edexcel IGCSE than teach the IB, since IGCSE suits a broader range of school sizes and budgets, and many Kenyan families first encounter international qualifications through IGCSE before a smaller number move on to IB or A Level for the final two years.",
      "The requests that reach us tend to cluster around a few situations. A Year 10 or Year 11 student at a British-curriculum school needs steady past-paper practice for Cambridge IGCSE Mathematics or Combined Science that a busy class timetable doesn't leave room for. A DP1 student picks Higher Level Chemistry or Economics and finds the internal assessment expectations unlike anything KCSE-style continuous assessment prepared them for. A family relocating into Nairobi from another country needs a tutor who can bridge whatever curriculum their child is leaving. And CBC families weighing whether Senior School's STEM, Social Sciences or Arts and Sports Science pathway is the right fit sometimes want an outside view before locking in a choice.",
      "Every match starts with a short conversation about the actual syllabus, board and level, not a general appeal for exam help, and a trial lesson happens before anything is booked properly. Because sessions run over video, families outside Nairobi and Mombasa - in Nakuru, Kisumu, Eldoret or further afield - reach the same specialist tutors that families in the capital do. Lessons follow whatever your child's own school has set: the topic their teacher just taught, the paper handed back last week, the IA or coursework draft due next month, with a short note after each session so progress is visible even where nobody else in the house has studied that syllabus before.",
    ],
    bullets: [
      "Every session for Kenyan families runs online in East Africa Time; home tutoring is offered only in India.",
      "Coverage spans IB PYP, MYP, DP and CP, Cambridge and Edexcel IGCSE, and A Level context.",
      "Tutors work from your child's actual school materials, not a generic scheme of work.",
      "Trial lesson first, a written recap after every session, and a straightforward switch if the match is wrong.",
    ],
  },

  programmesIntro: "The IB reaches Kenyan students mainly through a small group of Nairobi and Mombasa schools that chose it deliberately, usually alongside Cambridge IGCSE lower down the school rather than instead of it. Below is how each programme lands for a Kenyan family and what tutoring at that stage typically covers.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Kenyan pre-primary through upper primary",
      description: "PYP runs through broad units of inquiry rather than separate subject lessons, so support at this stage is deliberately light: reading confidence, number sense, and the writing a class project needs. Older primary pupils get help shaping a research question ahead of the Grade 5 Exhibition.",
      countryNote: "PYP sits inside a handful of Nairobi and Mombasa international schools rather than the mainstream CBC primary system, so few classmates share the same curriculum vocabulary. Sessions run 30-45 minutes after school in East Africa Time, with parents welcome to sit in.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · roughly CBC Grades 7-9 and beyond",
      description: "MYP's five years and eight subject groups are marked against criteria on a scale that doesn't translate neatly to CBC or KCSE-style percentages. Tutoring covers criterion-based tasks, command-term accuracy and the extended writing MYP expects, building toward the Year 5 Personal Project.",
      countryNote: "A Kenyan MYP student often sits inside a school also preparing CBC or IGCSE peers for very different assessments, which makes benchmarking progress against classmates difficult for parents. Some schools blend MYP's final year with early IGCSE entry, so tutoring has to track both sets of expectations.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · final two years of secondary school",
      description: "Six subjects at Higher or Standard Level plus Theory of Knowledge, the Extended Essay and CAS make up the Diploma. Tutoring targets HL depth, internal assessment quality, past-paper timing, and dedicated Extended Essay sessions from research question to final draft.",
      countryNote: "Most Kenyan IB schools follow a British-style August-to-June academic year and sit the May session, though it's worth confirming with your own school rather than assuming, since a small number run a January-to-December year instead. KUCCPS and KNQA processes matter for DP graduates applying to Kenyan public universities.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · final two years of secondary school",
      description: "CP pairs at least two DP subjects with a career-related study and its own core - Personal and Professional Skills, Service Learning, further language work and the Reflective Project. DP subjects are taught to full Diploma standard, and the Reflective Project gets dedicated coaching from topic to final piece.",
      countryNote: "CP is offered by very few Kenyan schools, so a CP student here is often the only one in their year group on that pathway, with no classmate working the same Reflective Project brief. Online tutoring closes that isolation directly.",
    },
  ],

  subjectsIntro: "Requests from Kenyan families name a precise syllabus, not a subject in general - Cambridge IGCSE Mathematics (0580) sits differently from Edexcel International GCSE Mathematics A, and IB Mathematics Analysis and Approaches HL is a different course from Applications and Interpretation SL. Lessons run online in East Africa Time and follow whatever specification, coursework brief or IA deadline your child's own school has set.",
  subjects: [
    { name: "Mathematics AA", levels: "HL · SL · Cambridge IGCSE (0580) Extended", description: "HL work builds proof, calculus and algebraic technique well beyond what IGCSE alone covers; SL keeps enough of that depth to secure the grade without HL's full workload. IGCSE sessions target Extended-tier papers and the exploration for students moving toward DP." },
    { name: "Mathematics AI", levels: "HL · SL · IGCSE Core & Extended", description: "This route leans on modelling and statistics, an area some CBC and 8-4-4-background students haven't drilled as heavily. SL work stays close to interpreting real data; HL adds matrices, graph theory and complex numbers on top." },
    { name: "Physics", levels: "HL · SL · IGCSE Physics (0625)", description: "Mechanics, fields and thermodynamics get worked through problem sets rather than notes, alongside the practical scheme and the required investigation. IGCSE sessions cover structured questions and graph work against the Cambridge specification." },
    { name: "Chemistry", levels: "HL · SL · IGCSE Chemistry (0620)", description: "Calculation-heavy topics - moles, equilibrium, pH - get broken into clear steps alongside bonding and organic mechanisms, with HL students getting direct help scoping their investigation. IGCSE work covers qualitative analysis and practical technique." },
    { name: "Biology", levels: "HL · SL · IGCSE Biology (0610)", description: "The current DP syllabus runs by theme rather than a numbered list, so tutoring moves across units while drilling command-term precision. IGCSE preparation focuses on recall accuracy and building out extended-response answers." },
    { name: "Economics", levels: "HL · SL · IGCSE Economics (0455)", description: "Micro, macro, the global economy and the key concepts get covered with heavy focus on diagram accuracy and evaluative writing, plus the three IA commentaries built from live news. IGCSE work concentrates on data-response technique." },
    { name: "Business Management", levels: "HL · SL · IGCSE Business Studies (0450)", description: "The DP units get taught against real East African and international company examples, with particular attention on scoping the internal assessment. IGCSE sessions work through case studies and calculation-based questions." },
    { name: "English A: Language & Literature", levels: "HL · SL · IGCSE First Language English", description: "Work covers close reading of non-literary texts, the learner portfolio and the individual oral, a real shift for students used to a more exam-recall style of English teaching. IGCSE preparation targets directed writing and comprehension." },
    { name: "English B", levels: "HL · SL · IGCSE English as a Second Language", description: "Built for students whose earlier schooling was largely in Kiswahili or another language, sessions cover the five prescribed themes, listening papers and the individual oral, alongside controlled writing practice at IGCSE level." },
    { name: "Computer Science", levels: "HL · SL · IGCSE Computer Science (0478)", description: "Programming in Java or Python sits alongside the theory - data structures, systems, logic - that written papers test heavily, with guided support through the internal assessment's computational solution. IGCSE covers pseudocode and binary." },
    { name: "History", levels: "HL · SL · IGCSE History (0470)", description: "Prescribed subjects and world-history topics pair with an HL regional option, often Africa or the Americas for East African cohorts, with sessions focused on source evaluation and building the historical investigation." },
    { name: "Geography", levels: "HL · SL · IGCSE Geography (0460)", description: "Core units and optional themes lead to the HL extension on global interactions, with practice on case-study recall and the fieldwork write-up, which many Kenyan schools base on a local Rift Valley or coastal study trip." },
    { name: "French B / Kiswahili A / Kiswahili B", levels: "HL · SL · IGCSE Foreign or First Language", description: "Language B sessions build the five prescribed themes and spontaneous speaking practice; Kiswahili A or B support suits students at schools where English is the main medium but Kiswahili remains a graded subject." },
  ],

  regionsIntro: "IB Gram tutors work with families across Kenya inside one time zone, East Africa Time, which keeps scheduling simple compared with countries spread across several. Most households book weekday evenings after school or weekend mornings, and DP2 students approaching internal assessment deadlines or a May exam sitting often add a second weekly session.",
  regions: [
    { name: "Westlands & Kitusuru", note: "EAT. A dense pocket of British-curriculum and IB schools sits in and around Westlands, including well-known Edexcel and Cambridge providers. Weeknight sessions from 5pm suit students commuting home from school and after-school activities." },
    { name: "Karen & Langata", note: "EAT. Karen holds some of Nairobi's longest-established IB and British-curriculum campuses, drawing both Kenyan and expatriate families. Evening sessions after 4:30pm and weekend mornings are the norm here." },
    { name: "Runda & Gigiri", note: "EAT. Home to a cluster of international schools serving diplomatic and NGO families alongside Kenyan households, with strong demand for IB DP sciences and Extended Essay support. Sessions typically run in the early evening." },
    { name: "Mombasa & the Coast", note: "EAT. Mombasa's smaller but established international-school sector includes an IB World School and several IGCSE providers. Coastal families sometimes deal with less reliable connectivity, so tutors keep a recorded backup of each session available." },
    { name: "Nakuru", note: "EAT. Nakuru's Cambridge-accredited schools serve the town and the wider Rift Valley corridor toward Eldoret. Families here often start tutoring to fill gaps a smaller local teaching staff can't cover for every IGCSE subject." },
    { name: "Kisumu", note: "EAT. Kisumu has a growing IGCSE and A Level sector alongside CBC schools, with several institutions teaching both Kenyan and Cambridge curricula side by side. Evening sessions fit around a school day that runs later for boarders." },
    { name: "Eldoret", note: "EAT. Eldoret's British-curriculum schools have grown alongside the town's rising private-school demand, mostly at IGCSE and A Level rather than IB. Families here value the same evening East Africa Time slots as Nairobi households." },
    { name: "Diaspora & relocating families", note: "EAT, adjusted case by case. Kenyan families abroad who want their children to keep pace with a Nairobi or Mombasa school's syllabus before a planned return, and international families arriving mid-course, both get sessions scheduled around whichever clock the household is actually on." },
  ],
  regionsTitle: "Cities, school communities and time zones across Kenya",
  tutorsIntro: "Tutors work from India, roughly two and a half hours ahead of Kenya, a small enough gap that an East Africa Time after-school slot still falls in the tutor's normal working evening.",

  schoolDisclaimer: "The schools mentioned here simply map where IB, IGCSE and A Level provision exists across Kenya; IB Gram is an independent tutoring service with no partnership, endorsement or contract with any school named, nor with the IB Organisation, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nairobi (Westlands, Karen, Runda)",
      note: "Nairobi carries the country's densest concentration of IB and British-curriculum schools, so requests here span the full range from IGCSE past-paper drilling to DP Extended Essay supervision. Weeknight sessions in East Africa Time, roughly 5 to 8pm, are the norm.",
      schools: [
        "International School of Kenya (Karen)",
        "Aga Khan Academy, Nairobi",
        "The Nairobi Academy",
        "Braeburn Garden Estate School",
        "Millennium Global International School (Kitusuru)",
        "SABIS International School, Runda",
      ],
    },
    {
      city: "Mombasa",
      note: "Mombasa's international-school sector is smaller than Nairobi's but well established along the coast, mixing IB and Cambridge provision. Families here often ask about connectivity-resilient scheduling given occasional coastal power or internet interruptions.",
      schools: [
        "Aga Khan Academy, Mombasa",
        "Mombasa International School",
        "Oshwal Academy, Mombasa",
      ],
    },
    {
      city: "Nakuru & the Rift Valley",
      note: "Cambridge-accredited schools around Nakuru serve a wide catchment stretching toward Eldoret, so class sizes for less common IGCSE subjects can be small. Tutoring here often fills a specific subject gap rather than replacing classroom teaching wholesale.",
      schools: [
        "Mustard Seed International Schools (Nakuru)",
      ],
    },
    {
      city: "Kisumu",
      note: "Kisumu blends CBC and Cambridge provision within the same town, and some schools run both curricula for different students. Requests here often come from families deciding between an IGCSE and a CBC Senior School pathway for a Grade 9 leaver.",
      schools: [
        "Western International School of Kenya (Kisumu)",
        "Braeburn Kisumu International School",
        "White Oaks School",
      ],
    },
  ],

  modesIntro: "Everything runs over video for Kenyan households; sitting a tutor down at home is arranged only for families in India. Three formats cover most needs, and it's common to combine them - a steady weekly slot through term, then an intensive run once mocks or an IA deadline gets close.",
  modes: [
    {
      title: "One-to-one online IB and IGCSE tutoring",
      description: "A dedicated tutor works from whatever your child's actual school has set - an IA stuck on planning, a Cambridge IGCSE paper the class hasn't finished revising, a Higher Level topic that moved faster than the lesson kept up with. Sessions run 60 or 90 minutes at a fixed weekly time in East Africa Time.",
      bullets: [
        "A steady weekly slot that holds through the term without renegotiation.",
        "Built around the specification and feedback your child actually brings to the lesson.",
        "A short written note follows every session so progress stays visible.",
        "Well suited to IA and Extended Essay work, HL depth, and catching up after a school move.",
      ],
    },
    {
      title: "Small-group online sessions",
      description: "Two to four students at a similar level share a tutor and a screen, useful for a course several classmates are also taking - IGCSE Physics, DP Biology SL - since comparing a wrong answer with a classmate's often teaches faster than working alone. Groups form by subject, level and time zone, and the per-student rate drops.",
      bullets: [
        "Small groups of two to four, matched by subject, level and time zone.",
        "Good value where several students are preparing for the same paper.",
        "A lower cost per student for the same weekly slot and tutor.",
        "Easy to move a student to one-to-one later if the pace stops fitting.",
      ],
    },
    {
      title: "Intensive exam-block sessions",
      description: "A compressed run aimed at one date: a May or November exam sitting, school mocks, or a coursework deadline closing in. Instead of a weekly hour, three or four sessions across a week work timed past papers with feedback returned quickly, scheduled into school holidays as readily as term time.",
      bullets: [
        "Timed papers marked against the real IB or Cambridge scheme, with fast feedback.",
        "Built around your school's actual exam session, May or November, whichever applies.",
        "Fits school holidays and weekends, not only weekday evening slots.",
        "Best booked a few weeks ahead, since exam-season slots fill first.",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE inside Kenya's shift from 8-4-4 to CBC",
      paragraphs: [
        "Kenyan education is in the middle of its biggest structural change in decades. The old 8-4-4 system, built around KCSE at the end of Form 4, is being replaced by the Competency-Based Curriculum, whose first cohort reached Senior School - Grade 10 to 12 - in January 2026. KCSE continues for the remaining 8-4-4 students still working through it, but a new Senior Secondary Assessment will eventually take its place for CBC leavers seeking university placement. That reform sits almost entirely inside the public and mainstream private school system.",
        "Running in parallel, and mostly untouched by the CBC transition, is a network of schools teaching Cambridge or Edexcel IGCSE, A Level and the IB Diploma. These are concentrated in Nairobi's international-school suburbs and around Mombasa, with smaller pockets in Nakuru, Kisumu and Eldoret. Some serve mainly expatriate and diplomatic families; many others are Kenyan-owned schools that chose an international curriculum specifically because it travels well if a family later moves abroad, or because it offers external, board-set exams rather than a centrally graded national one.",
        "Kenya holds 19 IB World Schools, of which 12 are authorised for the Diploma Programme - a modest number set against the country's size, which means a family choosing the IB is usually choosing a specific, well-known school rather than picking from a long list. Far more schools run Cambridge or Edexcel IGCSE, since it needs less specialist staffing and infrastructure than a full IB continuum, and many students move from IGCSE into A Level or DP for their final two years rather than starting on IB from primary school.",
        "For outside academic support, the practical need is precision: a tutor who says they teach \"the IB\" without naming the exact subject and level is far less useful than one who has taught your child's specific paper. IB Gram works with Kenyan families entirely online, in East Africa Time, and does not send tutors into homes inside Kenya - that arrangement exists only for families in India, where our tutors themselves are based.",
      ],
      bullets: [
        "CBC is replacing 8-4-4 and KCSE, with the first Senior School cohort starting Grade 10 in January 2026.",
        "IB, Cambridge and Edexcel provision sits largely outside the CBC reform, in a separate school network.",
        "Kenya has 19 IB World Schools, 12 authorised for the Diploma Programme.",
        "Far more Kenyan schools teach IGCSE than the full IB continuum.",
        "All IB Gram tutoring for Kenyan families runs online, in East Africa Time.",
      ],
    },
    {
      heading: "CBC vs IGCSE vs the IB Diploma: how do they actually compare?",
      paragraphs: [
        "CBC assesses competencies rather than a fixed content list, moving learners through Grade 9's KJSEA into a Senior School pathway - STEM, Social Sciences, or Arts and Sports Science - graded through school-based assessment alongside national tests. It's a genuinely different design from IGCSE or the IB, both of which are set and marked by external boards outside Kenya, with published syllabuses that stay fixed for several years at a time.",
        "IGCSE, taken from Cambridge or Edexcel, is a subject-by-subject certificate rather than a fixed package: a student typically sits five to nine subjects, mostly by written exam, with grading on a 9-1 or A*-G scale depending on the syllabus. It sits well as a bridge for families uncertain whether they'll stay in Kenya through to university, since it's recognised on sight by schools and universities in dozens of countries.",
        "The IB Diploma is a two-year package rather than a set of individual subjects: six courses across defined groups, three or four at Higher Level, plus Theory of Knowledge, the Extended Essay and CAS, scored out of 45. Where CBC and IGCSE assess subject by subject, a DP student can't quietly skip the Extended Essay or CAS and still receive the full Diploma - both are compulsory components of the award.",
        "None of the three is simply \"harder\" than the others in every respect; they measure different things. CBC leans on competency and continuous assessment, IGCSE on exam-based subject mastery, and the IB on extended argument-building alongside subject content. A family moving a child between systems mid-course needs a tutor who understands where the gaps genuinely sit, not one assuming a CBC-taught student is behind or ahead by default.",
      ],
      bullets: [
        "CBC assesses competencies through school-based work plus national tests at key transition points.",
        "IGCSE is a subject-by-subject certificate, mostly external written exams, recognised in dozens of countries.",
        "The IB Diploma is a fixed two-year package: six subjects plus TOK, the Extended Essay and CAS.",
        "None of the three systems is uniformly harder; they test different skills in different ways.",
        "A student moving between systems needs a tutor who identifies the real gap, not an assumed one.",
      ],
      table: {
        caption: "CBC, IGCSE and the IB Diploma compared",
        columns: ["Qualification", "Typical stage", "Grading approach", "Assessment style"],
        rows: [
          ["CBC (Senior School)", "Grade 10-12", "Competency-based, school + national assessment", "Continuous assessment plus a national exam at Grade 12"],
          ["Cambridge / Edexcel IGCSE", "Roughly age 14-16", "9-1 or A*-G depending on syllabus", "Mostly external written exams, some subjects with coursework"],
          ["IB Diploma", "Final two years of secondary school", "1-7 per subject, 45 total", "External exams plus internal assessment in every subject, TOK and Extended Essay"],
        ],
      },
    },
    {
      heading: "Are IB and IGCSE results recognised for Kenyan university placement?",
      paragraphs: [
        "Yes, but through a specific process rather than automatically. The Kenya National Qualifications Authority runs an equation-of-certificates process that converts IGCSE and A Level, and by extension IB, results into a KCSE-equivalent grade, which is what most Kenyan public universities and KUCCPS - the Kenya Universities and Colleges Central Placement Service - actually work from when placing a student. Private Kenyan universities are generally more flexible and often accept original IGCSE, A Level or IB certificates directly, without requiring the KNQA step.",
        "Students applying through KUCCPS for a government-sponsored place with an international qualification typically need to complete this equivalency assessment first, since KUCCPS's placement system is built around KCSE grade bands. The KNEC QMIS portal handles related certificate verification and equation work for O Level, IGCSE, A Level, Cambridge, Edexcel, IB and SAT credentials, so it's worth starting that process well before a placement deadline rather than after results are already in hand.",
        "For students not applying through KUCCPS - most private university applicants, and many families sending a child abroad - the IB Diploma and IGCSE need no local conversion at all. The IB is recognised by universities across the world without an equivalency step, and IGCSE is read as background context by universities looking mainly at what came after it, such as A Level or DP results.",
        "The practical advice for Kenyan families is to decide early which route a child is likely to take - Kenyan public university via KUCCPS, a Kenyan private university, or study abroad - since that decision affects how much the KNQA equivalency process actually matters, and starting it late is one of the more avoidable causes of a delayed placement.",
      ],
      bullets: [
        "KNQA converts IGCSE, A Level and IB results into a KCSE-equivalent grade for public university placement.",
        "KUCCPS placement runs on KCSE grade bands, so international-qualification applicants generally need that KNQA step first.",
        "Private Kenyan universities are often more flexible and may accept original certificates without conversion.",
        "The KNEC QMIS portal handles verification and equation of foreign qualifications, including IB.",
        "Students headed abroad or to a flexible private university may need no local equivalency step at all.",
      ],
      table: {
        caption: "Getting an international qualification recognised for Kenyan placement",
        columns: ["Step", "What happens", "Who typically needs it"],
        rows: [
          ["Certificate verification", "Results are verified through the KNEC QMIS portal", "All students with a foreign or international certificate"],
          ["KNQA equation of certificates", "IGCSE/A Level/IB results are converted to a KCSE-equivalent grade", "Students applying through KUCCPS for public university placement"],
          ["Direct submission", "Original IGCSE, A Level or IB certificates submitted without conversion", "Most private university and overseas applicants"],
        ],
      },
    },
    {
      heading: "IB internal assessments, the Extended Essay and Kenya's exam calendar",
      paragraphs: [
        "Most Kenyan IB and British-curriculum schools run a British-style academic year from August or September to June, sitting the May IB and IGCSE session, since so many were founded on or modelled after British schooling practice. It isn't universal, though - a handful run a January-to-December year closer to Kenya's public-school calendar - so always confirm which session your own school actually sits rather than assuming May by default.",
        "Internal assessments sit inside the school and are moderated externally by the IB, carrying real weight in most subjects - around a fifth of the grade in several sciences and mathematics, more in languages and the arts. A physics student needs a variable they can genuinely control with the equipment their school has; a history student needs sources they can actually reach, which in Kenya sometimes means working with what a school or the British Council library holds rather than a large public archive. Tutoring here is diagnostic: reading the criteria alongside the student, naming exactly which strand is losing marks, and sending them back to revise with one specific instruction.",
        "The Extended Essay is a 4,000-word independent research paper supervised by a teacher; TOK carries an exhibition and a 1,600-word essay on a set title. Both reward an early, realistic research question - one a student can actually answer given the sources available to them locally or online - and a source list built well before the final term rather than assembled in a rush. Sessions typically focus on scoping the question, testing whether the evidence supports the argument, and preparing for supervisor meetings.",
        "The line on academic honesty is firm and worth stating plainly: every IA, Extended Essay and TOK submission is confirmed as the student's own work and checked through similarity detection. IB Gram tutors coach - explaining a misread criterion, modelling a comparable but different problem, checking referencing - and never write or edit a draft into something a student then submits under their own name.",
      ],
      bullets: [
        "Most Kenyan IB schools follow a British academic year and sit the May session, though not all do - confirm with your school.",
        "IA weighting runs roughly a fifth of the grade in several sciences and mathematics, more elsewhere.",
        "Extended Essay and TOK work starts with a question the student can genuinely answer from sources they can reach.",
        "Tutors coach against published criteria and never write or ghost-edit a submission.",
        "Kenyan schools with less reliable connectivity benefit from recorded sessions as a practical backup.",
      ],
    },
    {
      heading: "Why are Nairobi and Mombasa families choosing IGCSE and IB over KCSE or CBC?",
      paragraphs: [
        "The honest answer is rarely about one system being better in every sense - it's about fit. Families expecting to relocate, or already living an internationally mobile life for work, often prefer IGCSE and the IB because both travel: a certificate from Cambridge or the IB Organisation is recognised on sight by schools and universities almost anywhere, in a way a Kenyan-specific national qualification, however well designed, is not.",
        "The scale of the CBC transition itself is also a factor. With the first Senior School cohort only starting in 2026 and the Senior Secondary Assessment still new, some families with the means to choose prefer a curriculum with decades of track record and a stable, externally set syllabus, at least until the new system has a longer history to judge.",
        "For others the decision is more about assessment style than the system's newness. IGCSE and IB both rely heavily on externally set, externally marked papers with published mark schemes, which some parents find easier to judge from the outside than continuous, school-based assessment, even where that school-based approach is pedagogically well designed. Neither preference is objectively right; they're different bets on what gives a family clearer visibility into how their child is actually doing.",
        "Whatever the reason, the practical consequence is the same: fewer schools offer IGCSE and IB than offer CBC, so families choosing that route are usually choosing a specific school deliberately, sometimes at real distance from home, and outside tutoring becomes a way to add depth a smaller specialist teaching staff can't always provide across every subject at every level.",
      ],
      bullets: [
        "IGCSE and IB certificates are recognised internationally, which matters most to internationally mobile families.",
        "CBC's Senior Secondary Assessment is new; some families prefer a curriculum with a longer, more stable track record.",
        "IGCSE and IB rely on externally set and marked papers, which some parents find easier to judge from outside.",
        "Fewer Kenyan schools offer IGCSE or IB than CBC, so the choice is usually deliberate and school-specific.",
        "Smaller specialist teaching staff at some schools is exactly where outside tutoring adds the most value.",
      ],
    },
    {
      heading: "The CBC transition to Senior School, and where IGCSE and IB sit outside it",
      paragraphs: [
        "For families on the CBC track, Grade 9 ends with the Kenya Junior Secondary School Education Assessment, which combines with school-based assessment scores to place learners into Grade 10 and one of three Senior School pathways: STEM, Social Sciences, or Arts and Sports Science. That placement decision, made early in secondary schooling, shapes subject choice for the following three years in a way that has real parallels to choosing IGCSE options at 14 or an IB subject combination at 16.",
        "Families weighing CBC's Senior School against a move into IGCSE or an IB continuum school are, in effect, making a similar decision to the one British families make between Highers and A Level, or American families make between AP and IB: breadth versus a fixed structure, a national system versus an internationally portable one. Neither is a wrong choice, but they are genuinely different, and a student who has spent years on CBC's competency-based approach may need real orientation before an IGCSE or IB school's exam-heavy assessment style feels natural.",
        "A small number of Kenyan schools now run CBC and Cambridge IGCSE side by side for different students, which gives families a practical middle path: staying within a familiar school community while choosing an internationally examined qualification for the secondary years. Where that option exists, it's worth understanding exactly which subjects and assessment style apply to each track before assuming they're interchangeable.",
        "Whichever pathway a Kenyan family is on, the tutoring need is usually the same: closing a specific gap - CBC-to-IGCSE transition confidence, an IB subject moving faster than the timetable allows, an Extended Essay stuck at the planning stage - rather than replacing what the school itself already does well.",
      ],
      bullets: [
        "Grade 9's KJSEA plus school-based assessment places CBC learners into Grade 10 and one of three Senior School pathways.",
        "Choosing CBC's Senior School versus IGCSE or IB parallels other countries' national-vs-international curriculum choices.",
        "A few Kenyan schools run CBC and Cambridge IGCSE side by side for different student cohorts.",
        "Students moving from CBC into an exam-heavy IGCSE or IB system often need real transition support first.",
        "Tutoring works best aimed at a specific, named gap rather than as a general replacement for school teaching.",
      ],
      table: {
        caption: "CBC Senior School pathways alongside typical IGCSE and IB routes",
        columns: ["CBC Senior School pathway", "Core focus", "Closest IGCSE/IB parallel"],
        rows: [
          ["STEM", "Sciences, mathematics, engineering, computer science, agriculture", "IGCSE/IB Sciences, Mathematics AA/AI, Computer Science"],
          ["Social Sciences", "Languages, humanities, business studies, religious education", "IGCSE/IB History, Geography, Economics, Business Management"],
          ["Arts and Sports Science", "Music, theatre, visual arts, sports science", "IB Visual Arts, Theatre, Sports, Exercise and Health Science"],
        ],
      },
    },
    {
      heading: "How online IB and IGCSE tutoring works in East Africa Time",
      paragraphs: [
        "Every booking runs against East Africa Time, not the tutor's own clock in India, which sits roughly two and a half hours ahead of Kenya year-round since neither country observes daylight saving. That small, stable gap means a Kenyan after-school hour still falls squarely inside the tutor's normal working evening, without the very late slots a bigger time difference would force.",
        "A first lesson works as an assessment more than a teaching session: the tutor finds out what the class is currently covering, sets a problem or two, and listens for where the student's reasoning actually breaks down. Regular sessions then run 60 or 90 minutes depending on the subject and the work involved, over video with a shared digital whiteboard both sides can write on, with past papers and drafts marked up live and saved somewhere the family can find them again.",
        "Connectivity varies more across Kenya than it does across some countries, and coastal or rural households sometimes deal with an occasional power cut or slow connection that a Nairobi household in a well-served suburb wouldn't. Sessions can be recorded on request precisely for that reason, so a dropped call doesn't mean lost content, and lessons are generally kept text- and audio-light enough to run acceptably on a modest connection.",
        "Handing over the school's own paperwork - the IA rubric, the IGCSE mark scheme, the MYP task sheet - sharpens feedback considerably, since it lets a tutor phrase comments the way the student's own teacher would. A short note follows every lesson, a broader check-in happens every few weeks, and a trial session up front is the simplest way to judge whether a particular tutor's style actually suits your child before committing to anything ongoing.",
      ],
      bullets: [
        "East Africa Time sits roughly two and a half hours behind India, with no daylight saving on either side to track.",
        "A diagnostic first lesson identifies where reasoning breaks down, not just where an answer went wrong.",
        "Sessions can be recorded, which matters where connectivity is occasionally unreliable.",
        "Sending the school's own rubric or mark scheme lets feedback echo the actual teacher's marking language.",
        "A trial lesson comes before any ongoing commitment, so fit is judged with real evidence.",
      ],
    },
  ],

  process: [
    { title: "Tell us the curriculum, subject and school year", description: "A short message covering the curriculum - CBC, IGCSE, IB DP, MYP or CP - the exact subject, board and level, the school year, and East Africa Time availability is generally enough to get started; there's no lengthy form to complete first." },
    { title: "A specialist in that exact syllabus gets shortlisted", description: "Rather than someone broadly familiar with the IB, you get a tutor who has actually taught the specific paper in question, with their background shared with you before any lesson is booked." },
    { title: "A free trial lesson, timed for East Africa Time", description: "The trial runs over video with a shared whiteboard, set for an after-school slot on your clock. Your child works through a real problem, and you get a short written note afterward on where the gaps sit." },
    { title: "A plan built around your school's own calendar", description: "Once the fit looks right, the plan follows deadlines your own school has actually set - IA windows, mocks, the May or November session - with weekly frequency and pay-as-you-go pricing rather than a long contract." },
    { title: "Regular notes, and a switch if it isn't working", description: "Short notes follow every lesson, with a fuller check-in every few weeks on what's landed and what hasn't. If the pairing isn't right, say so and a different tutor takes over." },
  ],

  whyPoints: [
    { title: "Matched to the exact board, not just the subject", description: "Cambridge IGCSE Mathematics, Edexcel International GCSE Mathematics and IB Mathematics AA HL reward different working under one subject name. A tutor who has taught your child's specific paper is who gets put forward." },
    { title: "Built around East Africa Time", description: "Booking runs on your own clock, with no daylight-saving adjustment to track on either side. Most Kenyan families land on a weekday evening or a weekend morning, after school and activities finish." },
    { title: "Familiarity with both sides of Kenya's curriculum landscape", description: "Whether a family is on CBC, working through IGCSE, or inside an IB continuum school, tutors understand where each system's gaps and strengths actually sit, rather than assuming one system is simply behind another." },
    { title: "Coursework help that stays inside the rules", description: "Internal assessments, the Extended Essay and TOK all carry strict academic-integrity requirements. What a tutor provides is method - framing a question, handling data properly, sharpening an argument - never a finished answer your child didn't write." },
    { title: "A tutor your child actually meets first", description: "Every tutor's qualifications and teaching history are checked before they're put forward, and a trial lesson lets your child judge the fit directly rather than taking a profile on faith." },
    { title: "Aware of KUCCPS and KNQA realities", description: "For DP or IGCSE students planning to apply through Kenyan public university placement, tutoring is planned with an eye on which subjects and grades that route actually depends on, not just on the exam in isolation." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor in Kenya?",
      answer: "Start with the exact programme stage and subject rather than \"IB\" broadly - PYP, MYP, DP or CP, and the specific level within that subject. Get in touch on ibgram24@gmail.com or WhatsApp +91 7439 368 115 with the school situation, current grades and where things are actually going wrong, and we come back with a specific tutor to consider.",
    },
    {
      question: "Can my child have lessons in East Africa Time?",
      answer: "Yes. Every session is booked against East Africa Time, not the tutor's own clock in India, and since neither country observes daylight saving, the gap between them stays fixed year-round. Most Kenyan households choose weekday evenings after school or weekend mornings, held at the same time each week. Tell us what actually suits your family and a tutor whose hours genuinely match gets found.",
    },
    {
      question: "How much does IB or IGCSE tutoring cost in Kenya, and how do we pay?",
      answer: "Rates depend on the subject, the level, and how many hours a week are booked, with HL sciences and mathematics generally sitting above MYP-level support. A per-hour rate is quoted in writing before anything is booked. Email ibgram24@gmail.com with your child's year group, subject and level to get the current rate, and currency or payment questions are settled at the same time.",
    },
    {
      question: "Do you have in-person tutors in Kenya?",
      answer: "No, tutoring for Kenyan households runs entirely online; a tutor visiting the home is something we only arrange in India, where the tutors themselves are based. What Kenyan families get instead is a live one-to-one video lesson with a shared whiteboard, past papers marked up on screen, and a note kept afterward - genuinely useful given how few local specialists exist for a subject like IB Computer Science HL outside Nairobi's largest schools.",
    },
    {
      question: "Should my child do CBC's Senior School, IGCSE, A Level or the IB Diploma?",
      answer: "That depends heavily on where the family expects to be in five years more than on which system is objectively better. CBC suits families staying within the Kenyan public system through university; IGCSE and A Level suit families who value external, board-set exams and international portability; the IB Diploma suits students wanting breadth plus a structured research component, generally within a smaller pool of Kenyan schools. We tutor across all four and can help weigh the choice against your child's actual school options.",
    },
    {
      question: "Can you help my child get into a Kenyan public university with an IGCSE or IB qualification?",
      answer: "Yes, and understanding the KUCCPS and KNQA process matters as much as the subject content itself. IGCSE, A Level and IB results generally need to go through KNQA's equation-of-certificates process to convert into a KCSE-equivalent grade before KUCCPS can place a student. We can help plan subject choices with that pathway in mind, though the equivalency process itself is handled by KNQA and KUCCPS directly, not by us.",
    },
    {
      question: "Do your tutors teach both HL and SL subjects?",
      answer: "Yes, and the distinction matters. HL courses carry extra content and longer, more demanding papers, so HL tutoring spends more time on extension topics and exam technique under time pressure; SL support usually focuses on securing core understanding. Tell us the level for each subject when you book, since a tutor strong in HL Mathematics AA isn't automatically the right fit for SL Applications and Interpretation.",
    },
    {
      question: "Can a tutor help with my child's Extended Essay or internal assessment?",
      answer: "Yes, within the limits the IB sets firmly. A tutor can help narrow a research question, explain the assessment criteria, test whether an argument holds up against the evidence, and give feedback on a draft the student wrote themselves. A tutor cannot write, rewrite, or supply text a student then submits as their own work - everything handed in has to be genuinely theirs.",
    },
    {
      question: "How do you check your tutors before matching one with my child?",
      answer: "Every tutor is interviewed on both subject knowledge and the specific curriculum they'd be teaching, with qualifications and any prior IB, Cambridge or Edexcel teaching experience checked directly. That doesn't stop at matching - if the pace, personality or level isn't right once lessons begin, tell us and a different tutor is arranged.",
    },
    {
      question: "Is there a trial lesson before we commit to anything?",
      answer: "Yes. An introductory lesson lets your child and the proposed tutor work through real material together before any block of lessons is booked, so you can judge whether the explanations land, whether the tutor genuinely knows the syllabus your school follows, and whether the timing actually works for your household. A different tutor is straightforward to arrange if the fit isn't right.",
    },
    {
      question: "Which IB and IGCSE subjects do you actually cover?",
      answer: "The commonly taken DP subjects across groups 1 to 5: Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A and B, History, Geography, Computer Science and Theory of Knowledge, plus MYP and PYP support and the equivalent Cambridge or Edexcel IGCSE subjects. Less common languages depend on tutor availability, so send the exact subject and level from your child's timetable and we'll confirm.",
    },
    {
      question: "Do you offer intensive tutoring before exams?",
      answer: "Yes, whether your child's school sits the May or November session - confirm which applies, since Kenyan IB and IGCSE schools aren't uniform on this. Families typically move from one weekly session to two or three in the run-up, working timed past papers and mark-scheme analysis for the specific papers ahead. Mock results are a useful starting point for building that plan around the weakest areas.",
    },
    {
      question: "What if our internet connection isn't always reliable?",
      answer: "We plan for this rather than treating it as unusual. Sessions can be recorded so a dropped call doesn't mean lost material, lessons are kept workable on a modest connection, and a tutor will happily reschedule a badly affected session rather than push through a lesson neither side can properly follow. Let us know upfront if this is a regular concern in your area so a tutor plans accordingly.",
    },
    {
      question: "My child is moving from CBC or another school system - can you help with the transition?",
      answer: "Yes, this is one of the more common reasons Kenyan families reach out. Moving from CBC's competency-based approach into an exam-heavy IGCSE or IB system, or transferring between schools on different exam boards, both create specific gaps that a class teacher has limited time to address individually. A tutor identifies exactly what the new syllabus assumes that the previous one didn't cover, and works through that directly.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Reach out to ibgram24@gmail.com or WhatsApp +91 7439 368 115 with the school year and curriculum, the subject, board and level, roughly which East Africa Time hours suit the household, and what you actually want to change - a grade, exam confidence, an IA deadline. We come back with a tutor and their background and set up a first lesson; no payment is taken before you've watched that lesson and agreed a rate.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, ePortfolio and personal project support for the middle years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Mathematics AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in the UAE", href: "/uae/", description: "Online IB and IGCSE tutoring for families in the Gulf, another strong Cambridge market." },
    { label: "IB tutors in South Africa", href: "/south-africa/", description: "See how IB, Cambridge and IEB provision compares across another African market." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in East Africa Time",
  closingBody: "Send over the curriculum, subject, level and school year, and what comes back is a named tutor with their background attached, plus a trial time already set in an after-school East Africa Time slot - free, with nothing to continue after it unless you choose to. Not the right fit? Say so and another tutor gets lined up. Reach us at ibgram24@gmail.com or WhatsApp +91 7439 368 115, with your child's year group and current curriculum included.",
};
