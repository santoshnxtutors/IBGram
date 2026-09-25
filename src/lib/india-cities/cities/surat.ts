import type { CitySeoPage } from "../types";

/**
 * Surat IB and Cambridge/Edexcel IGCSE schools confirmed by direct search of school and IBO
 * listings. Surat's international-curriculum base is small next to its GSEB and CBSE school
 * count, so only three names are used here rather than padding the list.
 */
export const suratIbIgcseSchools = ["Fountainhead School", "P. P. Savani Cambridge International School", "Aarth Universal School"] as const;

export const surat: CitySeoPage = {
  slug: "surat",
  countryName: "Surat",
  countryNameLong: "Surat, Gujarat",
  demonym: "Surat",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after school and weekend online slots, planned around Surat school hours and the Navratri and Diwali break",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Surat | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Surat students: online one-to-one lessons in DP, MYP, PYP and Cambridge IGCSE Maths, Physics and Chemistry, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Tuition in Surat",
  heroEyebrow: "IB & IGCSE ONLINE TUITION IN SURAT",
  heroSubtitle:
    "If your child sits GSEB or CBSE by day and needs IB or IGCSE support at home in the evening, or studies the full IB or Cambridge syllabus at a Surat school, we match them with a tutor who teaches that exact course, online, one to one. Tell us the programme, subject, level and your child's school, and we shortlist a tutor who has taught it before, with a free trial before anything is booked.",
  primaryKeyword: "IB and IGCSE tutors in Surat",
  imageAltText: "IB tutor guiding a Surat student through an IGCSE Additional Mathematics problem over an online lesson",
  secondaryKeywords: [
    "IB tutor in Surat",
    "IGCSE tutor in Surat",
    "IB home tuition Surat",
    "IGCSE home tuition Surat",
    "IB online tuition Surat",
    "IGCSE online tuition Surat",
    "IB DP tutor Surat",
    "IB MYP tutor Surat",
    "IB PYP tutor Surat",
    "IB Maths AA tutor Surat",
    "IB Maths AI tutor Surat",
    "IB Physics tutor Surat",
    "IB Chemistry tutor Surat",
    "IB Biology tutor Surat",
    "IB Economics tutor Surat",
    "IGCSE Maths tutor Surat",
    "IGCSE Additional Maths tutor Surat",
    "IGCSE Physics tutor Surat",
    "IGCSE Chemistry tutor Surat",
    "Cambridge IGCSE tutor Surat",
    "Edexcel IGCSE tutor Surat",
    "IB tutor Vesu",
    "IB tutor Adajan",
    "IGCSE tutor Piplod",
    "IB IA and Extended Essay help Surat",
    "GSEB to IB tutor Surat",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB or IGCSE syllabus, board and level",
    "Live one-to-one online lessons, not recorded batches",
    "Free trial class before you commit to anything",
    "Independent platform, not tied to any Surat school or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "100% online in Surat", label: "One-to-one live lessons" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for Surat families, explained honestly",
    paragraphs: [
      "IB and IGCSE tutors in Surat work with two very different groups of students. One set attends a GSEB or CBSE school by day and studies IGCSE or A Level content separately, often to prepare for an overseas move or a business-family plan to send a child abroad for university. The other set is already enrolled in a full IB or Cambridge school and needs a subject specialist to keep pace with Diploma Programme deadlines or an IGCSE syllabus code the school does not have spare teaching hours for.",
      "Surat does not yet have the international-school density of Mumbai or Bengaluru. There are a handful of schools running the IB continuum or Cambridge IGCSE, and most sit on the city's outskirts rather than in the central residential belts where families actually live. That gap between where families live and where the curriculum is taught is exactly what a good online tutor closes.",
      "We are upfront about one thing before anything else. IB Gram does not send tutors to visit a student's home in Surat. In-person home visits run only in Gurugram and parts of Delhi NCR; everywhere else, including Surat, gets live one-to-one online tuition on a laptop, with the same tutor every session, a shared screen for working through problems, and a written note after class.",
      "IB Gram is an independent tutoring platform. We are not affiliated with, endorsed by or representing the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school named on this page. Tutors coach, explain and check work; they never write Internal Assessments, Extended Essays, TOK essays or coursework for a student.",
    ],
    bullets: [
      "IB DP, MYP and PYP tutors across every major subject group",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Online private tuition at home in Surat, no travel either side",
      "Free trial class and a written plan after it",
      "No prices published; your fee is confirmed before you book",
    ],
  },

  programmesIntro:
    "Surat families move between boards for different reasons than a metro like Mumbai. Many stay on GSEB or CBSE right through school and add IGCSE subjects privately for a planned move abroad; others enrol directly in one of the city's IB or Cambridge schools from an early grade. Here is how each IB programme works and what a Surat tutor should actually be doing at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12 (Nursery to Class 5)",
      description:
        "The PYP has no external exams. Units of inquiry, transdisciplinary themes and the closing PYP Exhibition run instead, so support focuses on reading fluency, number sense and research habits.",
      countryNote:
        "Surat's PYP intake is small and mostly comes from business families planning a move abroad or from Fountainhead's junior years; sessions run entirely online at a short, regular pace.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16 (Class 6 to 10)",
      description:
        "Every MYP subject is graded against criteria A-D, and the Personal Project lands in MYP 5. Students who are used to GSEB or CBSE mark schemes often lose marks on criterion wording alone.",
      countryNote:
        "Surat MYP requests are usually for criterion-level science and maths support and for structuring the Personal Project process journal well before the school deadline, since local exemplars are scarce.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, alongside Theory of Knowledge, the Extended Essay and Internal Assessments that carry roughly 20-30% of most subject grades. The May session is the main exam window.",
      countryNote:
        "Most Surat DP families ask for Maths AA or AI, Physics, Chemistry and Economics, since Fountainhead is the only school locally offering the full Diploma and outside tutoring fills the gap in exam years.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses plus a career-related study, a reflective project and personal and professional skills, aimed at students who want an applied route alongside academic rigour.",
      countryNote:
        "Very few Surat students currently take the CP; where they do, tutoring covers the DP subjects inside it in the same way as full Diploma support.",
    },
  ],

  subjectsIntro:
    "IB tutoring in Surat has to be exact about the course and level, because the city's tutor pool is thinner than a metro's and a mismatch wastes a term. We match on the precise IB subject, Higher or Standard Level, the Internal Assessment stage, and your child's exam session, all delivered as live online one-to-one lessons since Surat is outside our in-person home-visit area.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof and vector work, plus the Paper 3 investigation questions that catch HL students who learned methods without the reasoning behind them." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial and modelling questions and GDC technique, built around the data-based exploration many AI students start too close to the deadline." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through to nuclear physics, uncertainty handling in data questions, and a Scientific Investigation with a method a Surat student can actually run at home." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, organic mechanisms and equilibrium, data-booklet fluency and a defensible Scientific Investigation write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology through to ecology, extended-response command terms and the statistics an IA needs to pass moderation." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro and macro diagrams drawn correctly under time pressure, Paper 3 quantitative questions for HL, and the three real-world commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to an unfamiliar case study, Paper 2 quantitative tools, and a Business Research Project built on a real organisation, not a textbook example." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis for Paper 1, comparative essays for Paper 2, and the Individual Oral delivered with confidence rather than a memorised script." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, abstract data structures and networks, with IA product-and-documentation planning that starts early enough to finish properly." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, correctly cited studies, and ERQ structure that answers the actual command term." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems diagrams, evaluative writing over description, and case studies that go beyond what a textbook summary gives." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, the fieldwork write-up, and the evaluation language that separates a mid-range answer from a strong one." },
    { name: "IB History", levels: "HL / SL", description: "Source-based Paper 1 technique and Paper 2 essay argument, plus guidance on shaping the historical investigation." },
    { name: "IB Language B: Hindi, French or Spanish", levels: "HL / SL", description: "Text-type conventions, receptive-skills practice and spontaneous speaking drills for the individual oral." },
    { name: "IB Language A: Literature (self-taught Gujarati or Hindi)", levels: "SL", description: "For students who want to study their mother tongue as a school-supported self-taught course, with a tutor working alongside the school-appointed mentor." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The exhibition commentary and a prescribed-title essay the student can argue from genuinely more than one angle, not just restate." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question the student can actually finish, subject-specific criteria, and the reflection sessions. Guidance only; the essay stays the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Criteria B and C investigation design and the shift from descriptive answers to analysis that MYP examiners expect." },
  ],

  igcseSubjectsIntro:
    "Cambridge is the board almost every Surat IGCSE family deals with, since Fountainhead and P. P. Savani Cambridge International School both run it; Edexcel comes up mainly for students preparing privately for a UK-pattern route. We match by syllabus code, tier and exam series, Cambridge's May-June and October-November sessions or Edexcel's January and May-June, and every lesson runs live online.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper-specific technique for Extended, non-calculator accuracy, and the command words that cost method marks even when the working is right." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometric identities and vectors, the strongest local bridge into IB Maths AA HL for students switching later." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement, electricity and waves, and the alternative-to-practical paper worked through with real apparatus questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, electrochemistry and organic chemistry, with the alternative-to-practical technique many Surat students never see demonstrated live." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, inheritance and extended-response structure, plus reading and interpreting unfamiliar data sets." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Three sciences kept on one revision timetable without one of them quietly falling behind the other two." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and the longer evaluation questions that reward a reasoned judgement over a one-line answer." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the specific case-study business given in the paper instead of a generic textbook answer." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Double-entry bookkeeping, final accounts layout and ratio analysis, where presentation carries real marks." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary technique and close reading of unseen passages under exam timing." },
  ],

  regionsTitle: "Surat neighbourhoods our online IB and IGCSE tutors work with",
  regionsIntro:
    "Because every lesson is online, distance inside Surat never decides which tutor your child gets; what matters is which school your child attends and its calendar. Here is how families across the city's main residential areas typically approach IB and IGCSE tutoring, and what tends to matter locally.",
  regions: [
    { name: "Vesu", note: "Surat's affluent south-west belt near VNSGU; many CBSE and GSEB families here add IGCSE subjects privately ahead of an overseas university plan." },
    { name: "Adajan", note: "West-bank Tapi locality where Aarth Universal School runs its preschool and junior campus; families weigh continuing into the IB continuum against boarding elsewhere for the Diploma." },
    { name: "Piplod", note: "Central residential pocket close to VNSGU and several established CBSE schools; IGCSE interest here is mostly Additional Mathematics and Physics for a planned board switch." },
    { name: "City Light", note: "A commercial and residential hub popular with diamond and textile business families, many of whom plan a Class 11 move to IB or IGCSE ahead of study abroad." },
    { name: "Athwalines and Ghod Dod Road", note: "Older, established Surat neighbourhoods with a strong coaching-class culture for JEE and NEET alongside school studies." },
    { name: "Rander and the Rander-Dandi Road corridor", note: "Northern Surat, closest to Fountainhead School's main campus; day-boarding and full-boarding families here manage online sessions around hostel timings." },
    { name: "Katargam", note: "North Surat, a mixed residential and diamond-trade area where GSEB is the default board and IGCSE interest usually starts around Class 9." },
    { name: "Pal and VIP Road", note: "Newer high-rise residential clusters with a growing NRI-return and relocating-professional population that drives most of the direct IB Diploma enquiries we see from Surat." },
    { name: "Dumas Road", note: "A quieter coastal-facing stretch popular with established business families; tutoring requests here tend to be steady, long-term Diploma or IGCSE support rather than last-minute exam cramming." },
    { name: "Kamrej and the eastern industrial belt", note: "Home to P. P. Savani Cambridge International School; families in Surat's textile-park side send children here mainly as boarders for Cambridge IGCSE." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe where Surat's IB and IGCSE-curriculum families actually study. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Adajan and City Light",
      note: "Surat's most IB-and-IGCSE-curious residential belt, though local supply is thin; Aarth Universal School runs its junior campus here and most families either continue with it as it grows toward the Diploma or plan a move to a boarding school elsewhere.",
      schools: ["Aarth Universal School"],
    },
    {
      city: "Rander-Dandi Road and northern Surat",
      note: "Fountainhead School's main campus sits on this outskirt corridor, running the full IB continuum alongside Cambridge IGCSE and BTEC; day-boarding and boarding students make up most of its intake.",
      schools: ["Fountainhead School"],
    },
    {
      city: "Kamrej and eastern Surat",
      note: "P. P. Savani Cambridge International School sits on the Kamrej highway well outside the city centre, so families choosing it are almost always opting for boarding rather than a daily commute.",
      schools: ["P. P. Savani Cambridge International School"],
    },
  ],

  modesIntro:
    "Surat is outside IB Gram's in-person home-visit area, so every lesson here runs as live one-to-one tuition online, on a laptop with a shared screen. What changes between families is the rhythm: a steady weekly slot, a heavier schedule around exams, or a short bridging block for a student new to the syllabus. You can move between these as the term changes.",
  modes: [
    {
      title: "Regular one-to-one online tuition",
      description:
        "A fixed weekly slot with the same tutor for a full term, used for ongoing IB or IGCSE subject support rather than a one-off fix before an exam.",
      bullets: [
        "Same tutor every session, matched to the exact subject and level",
        "Shared-screen working through problems and past papers",
        "Written note after every lesson so progress is visible",
      ],
    },
    {
      title: "Exam-term intensive online sessions",
      description:
        "A second weekly slot added in the run-up to mocks, the May or October-November IGCSE series, or IB internal exams, focused on past papers and the topics that are still shaky.",
      bullets: [
        "Timed past-paper practice under real exam conditions",
        "Priority given to the highest-value weak topics",
        "Planned around the Surat school calendar, not against it",
      ],
    },
    {
      title: "Bridging sessions for a new board or programme",
      description:
        "Short, focused sessions for a student moving from GSEB or CBSE into IGCSE or the IB Diploma, aimed at command words, assessment style and the study habits the new board expects.",
      bullets: [
        "Targeted at the question-style gap, not general revision",
        "Useful before the switch or in the first term after it",
        "Can run alongside a subject tutor once the student is settled",
      ],
    },
  ],

  sections: [
    {
      heading: "Why some Surat families choose IB or IGCSE over GSEB and CBSE",
      paragraphs: [
        "Surat's economy runs on diamond polishing and textile manufacturing, both businesses with international buyers and, for many owning families, a second home or long stays overseas. That global exposure is the single biggest reason families here consider IB or IGCSE: a curriculum that a UK, US, Canadian or Singaporean university recognises without translation, and one that keeps a child's options open if the family relocates mid-school-year, which happens more often in Surat's business community than in a typical Indian city.",
        "A second group is relocating professionals and NRI families returning to Surat for work, who want their children to continue on a curriculum close to what they left rather than restart on GSEB from scratch. For them, IGCSE or the IB Diploma is continuity, not aspiration.",
        "Because Surat has only a small number of schools actually teaching IB or Cambridge IGCSE, most families in this position end up in one of two situations: enrolled in one of those schools and needing subject-level support the school cannot always provide, or staying on GSEB or CBSE and adding IGCSE subjects privately as groundwork for a planned switch or an overseas application later.",
        "Either way, the tutoring need is the same: a specialist who has actually taught the exact IB or IGCSE course, not a general school tutor repurposed for an unfamiliar syllabus.",
      ],
      bullets: [
        "Diamond and textile trade ties drive overseas-university planning",
        "Returning NRI and relocating-professional families want curriculum continuity",
        "Local school supply is thin, so private tutoring fills real gaps",
        "Subject-exact matching matters more here than board loyalty",
      ],
    },
    {
      heading: "GSEB, CBSE or IGCSE: what actually changes for a Surat student?",
      paragraphs: [
        "The biggest change is how answers are marked, not how much content is covered. GSEB and CBSE reward accurate recall and standard method; Cambridge and Edexcel IGCSE reward applying that same method to an unfamiliar context and explaining the reasoning in the answer, not just stating it.",
        "GSEB is taught in Gujarati or English medium depending on the school and is the default board for most Surat government-recognised schools; CBSE is the common choice for private schools serving a mobile, pan-India workforce; IGCSE and the IB sit apart from both, with their own syllabus codes, tiers and international exam sessions rather than a single state or national board calendar.",
        "For a family weighing the move, the honest answer is that GSEB and CBSE are perfectly good boards for a student staying in the Indian university system, while IGCSE and IB suit a student whose plan includes study abroad, an international curriculum school move, or simply wants coursework and internal-assessment style examination years before college.",
        "The table below sets out the practical differences a Surat parent actually needs before deciding.",
      ],
      table: {
        caption: "GSEB, CBSE and IGCSE/IB compared for Surat families",
        columns: ["Aspect", "GSEB", "CBSE", "IGCSE / IB"],
        rows: [
          ["Marking style", "Recall and standard method", "Recall with some application", "Application, analysis and explanation"],
          ["Exam pattern", "Single state-board year-end paper", "Single national-board year-end paper", "Syllabus-specific papers plus IA or coursework"],
          ["Best fit", "Staying in Gujarat/India for higher study", "Staying in India, some abroad flexibility", "Overseas study plans, international schools"],
          ["Local availability in Surat", "Wide, almost every school", "Wide, most private schools", "Limited to a few schools plus private tutoring"],
        ],
      },
    },
    {
      heading: "What drives the cost of an IB or IGCSE tutor in Surat?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor in Surat depends mainly on the subject and level, the session length and how experienced the tutor is with that exact syllabus. IB Diploma Higher Level subjects and Cambridge Additional Mathematics typically need a more specialised tutor than IGCSE Core-tier support, which shows in the rate. We do not publish a price list; instead, we confirm the fee for your specific match before you commit to anything.",
        "What actually drives value is narrower than the headline rate. An hour with a tutor who has taught the Cambridge 0620 alternative-to-practical paper or IB Maths AA HL Paper 3 style questions covers more ground than two hours with a general tutor working through the textbook from the front, because the specialist already knows where marks are typically lost.",
        "Since every Surat lesson runs online, there is no travel cost built into the fee, which tends to make online IB and IGCSE tuition here more economical than home visits would be even where they were offered. Sessions are billed by the term rather than locked into a long contract.",
        "Ask what a session will cover before booking, how progress gets reported, and whether the tutor has actually taught your child's specific board and tier. Those answers tell you more about value than the hourly number on its own.",
      ],
      bullets: [
        "Fee depends on programme, level, subject and session length",
        "No published price list; your fee is confirmed before booking",
        "Online tuition removes travel cost from the price entirely",
        "Billed by term, not locked into a long contract",
      ],
    },
    {
      heading: "Online tuition, coaching classes or a private tutor: what works in Surat?",
      paragraphs: [
        "Surat has a strong local coaching-class culture built around JEE and NEET preparation, and some of those centres have started offering IGCSE or IB batch classes as an add-on. Batch classes work reasonably well for content coverage but rarely match the pace or attention a specific IB Diploma subject or IGCSE tier actually needs, because the group is teaching to an average, not to your child's gaps.",
        "A private online tutor solves that by teaching one student at a time, at the exact syllabus, board and level, with lesson pace set by what your child needs that week rather than a fixed class schedule. It is also the only realistic option in Surat if the family wants home-style attention, since IB Gram does not send tutors to visit homes here.",
        "Self-study works for strong, self-directed students revising familiar material, but IB Internal Assessments, the Extended Essay and IGCSE coursework components genuinely benefit from a second pair of eyes checking against the mark scheme, something self-study cannot replicate.",
        "The table below compares the four routes Surat families typically weigh against each other.",
      ],
      table: {
        caption: "Tuition formats available to Surat IB and IGCSE students",
        columns: ["Format", "Best for", "Limitation"],
        rows: [
          ["Online one-to-one tuition", "Exact subject and level match, IA and coursework guidance", "Needs a stable internet connection and a quiet study spot"],
          ["Local coaching centre batch class", "General content coverage at a lower cost", "Fixed pace, little individual feedback"],
          ["Private home tutor", "In-person attention for younger students", "Not offered by IB Gram outside Gurugram and Delhi NCR"],
          ["Self-study", "Strong, self-directed students revising known material", "No external check on IA, EE or coursework quality"],
        ],
      },
    },
    {
      heading: "Exam sessions and the Surat school calendar, from Navratri to monsoon",
      paragraphs: [
        "Surat runs on a June-to-April school year like most of Gujarat, but the external boards keep their own calendars regardless. IB Diploma exams sit in May, with results in early July and a November retake session; Cambridge IGCSE sits in May-June and October-November; Pearson Edexcel IGCSE sits in January and May-June. Tutoring plans work best when set against these dates, not the school's own term dates.",
        "Two local factors genuinely affect scheduling in Surat. Navratri is one of the biggest events on the city's calendar, with many families attending garba most evenings for nine nights in September or October, and most households pause or lighten tutoring for that stretch rather than pretend it will not happen. The monsoon, from June through September, brings occasional waterlogging that disrupts school days more than it disrupts online lessons, which is one practical advantage of tutoring that does not depend on anyone travelling.",
        "For IB Diploma students, the pressure points are the first internal exams in Class 11, Internal Assessment deadlines through Class 12, and mock exams before the May session. Starting tutoring soon after the academic year opens in June gives the most room to fix gaps before any of these land.",
        "For IGCSE students, the tier decision and school mocks in Class 10 are the moments that matter most; families beginning in January for a May-June sitting can still make real progress, focused on past papers and the weakest topics rather than a full re-teach.",
      ],
      table: {
        caption: "Surat's academic year and the exam calendar",
        columns: ["Period", "Local context", "Exam relevance"],
        rows: [
          ["June-July", "New academic year begins after summer break", "Best time to start IB or IGCSE tutoring for the year ahead"],
          ["September-October", "Navratri, often nine evenings of garba", "Lighter tutoring load is realistic and expected"],
          ["November-December", "Cooler, low-disruption stretch", "Good window for IGCSE October-November and IB internal exam revision"],
          ["April-May", "Summer heat builds; IB and Cambridge May-June sessions run", "Highest-intensity revision period of the year"],
        ],
      },
    },
    {
      heading: "How does an IB or IGCSE record from Surat translate for Indian and global universities?",
      paragraphs: [
        "An IB Diploma or IGCSE record from a Surat school is recognised the same way it is anywhere else in India: through the Association of Indian Universities' equivalence certification, which most Indian institutions accept for admission eligibility. Families should apply for AIU equivalence in good time rather than at the last moment, since processing takes weeks, not days.",
        "For students targeting Indian universities through CUET-UG, IB and IGCSE students sit the same common entrance test as CBSE and GSEB students; subject preparation for Physics, Chemistry, Maths and Economics carries across reasonably well, though the CUET question style differs from both IB and IGCSE papers, so a short bridging block before the test helps.",
        "For JEE and NEET, eligibility rules require specific minimum marks and subject combinations at the qualifying examination, and IB and Cambridge IGCSE students need to check their board's equivalence and subject mapping carefully, since Higher Level or Extended-tier Physics, Chemistry and Maths are usually the safest combination to keep the door open.",
        "For study abroad, an IB Diploma score or a strong set of IGCSE and A Level results remains the most direct route into UK, US, Canadian, Australian and Singaporean universities, and is precisely why many Surat business families choose this path over GSEB or CBSE from the outset.",
      ],
      bullets: [
        "AIU equivalence needed for most Indian university admissions",
        "CUET-UG is common ground with CBSE and GSEB students",
        "JEE/NEET eligibility depends on subject combination and marks",
        "IB and IGCSE remain the most direct route abroad",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Surat students",
      paragraphs: [
        "Maths Analysis and Approaches suits a Surat student heading toward engineering, especially those aiming at SVNIT or another NIT through JEE alongside the Diploma, since it builds the calculus and proof technique those entrance exams also test. Maths Applications and Interpretation suits students heading into business, economics or the social sciences, with its heavier statistics and modelling focus and GDC-based technique.",
        "Physics and Chemistry at Higher Level are the two subjects that most often need outside tutoring in Surat, mainly because Fountainhead is the only local school teaching the full Diploma and cannot offer unlimited one-to-one time to every student in exam years. Common trouble spots are Paper 3 unfamiliar-context questions in Physics and organic reaction mechanisms in Chemistry, both of which respond well to focused, repeated practice with a subject specialist.",
        "Biology tends to be the science families underestimate, since its extended-response questions reward precise command-term answers rather than the descriptive style GSEB and CBSE Biology often accepts. Students moving into IB Biology from either board typically need a term of adjustment before their written answers match what IB moderators expect.",
        "Across all three sciences, the Scientific Investigation is where a tutor's guidance matters most: choosing a method the student can actually run without a full school laboratory, and writing it up in a way that survives moderation.",
      ],
      bullets: [
        "Maths AA suits engineering-bound, JEE-parallel students",
        "Maths AI suits business, economics and social-science routes",
        "Physics and Chemistry HL are Surat's most-requested tutoring subjects",
        "Biology needs a term of adjustment from GSEB or CBSE style",
      ],
    },
    {
      heading: "IGCSE Core or Extended: choosing the right tier in Surat",
      paragraphs: [
        "Cambridge IGCSE splits most subjects into Core and Extended tiers, and the choice matters more than families often realise when they first make it in Class 9. Core caps the top available grade lower than Extended, so a student with any ambition toward IB Diploma sciences and maths afterwards should be placed in Extended wherever the school and the student's ability genuinely support it.",
        "In practice, the decision should be made subject by subject rather than as a blanket policy. A student who is strong in Maths but finds Chemistry harder can reasonably sit Extended Maths and Core Chemistry; forcing Extended everywhere just to look ambitious on paper usually produces a weaker overall result than a tier choice matched to the student.",
        "Additional Mathematics 0606 is worth flagging separately: it is not compulsory, but it is the single strongest local preparation for IB Maths Analysis and Approaches HL, and Surat students who plan to attempt the Diploma afterwards benefit noticeably from taking it in Class 10 rather than meeting calculus and trigonometric identities for the first time in Class 11.",
        "Edexcel families face a similar Foundation-versus-Higher decision with the same underlying logic, though the syllabus codes, question wording and exam series differ enough from Cambridge that a tutor should be matched to the specific board, not just 'IGCSE' in general.",
      ],
      bullets: [
        "Core caps the grade ceiling below Extended",
        "Decide tier by subject, not as a blanket choice",
        "Additional Mathematics 0606 bridges directly into IB Maths AA HL",
        "Match tutors to Cambridge or Edexcel specifically, not IGCSE in general",
      ],
    },
    {
      heading: "How IB Gram matches an online tutor to a Surat family",
      paragraphs: [
        "We start with a short brief: board and programme, subject and level, current or predicted grade, the school's exam session, and the specific worry, whether that is a weak topic, an upcoming IA deadline, mocks, or a planned move from GSEB or CBSE into IGCSE or the IB Diploma. That brief decides the shortlist far more than any tutor's general profile does.",
        "Because Surat's own IB and IGCSE teacher pool is small, we draw from a wider tutor base than the city itself, but every tutor is checked on whether they have actually taught your child's exact syllabus and board recently, not merely a related subject. A tutor strong in CBSE Physics is not automatically the right fit for IB Physics HL or IGCSE Physics 0625.",
        "The free trial class is where the match gets tested properly: your child works through a real topic online with the tutor, at no charge and with no obligation, and you judge the explanation style and fit directly rather than from a written profile.",
        "After the trial, the tutor sets out a short first-month plan covering the topics, session rhythm and how progress will be reported. If the fit turns out wrong at any point, we find another tutor rather than asking your child to adjust to someone who is not working for them.",
      ],
      bullets: [
        "Brief covers board, subject, level, session and the specific worry",
        "Tutors checked against the exact syllabus, not a related one",
        "Free trial class before any commitment",
        "Written first-month plan, with re-matching if the fit is wrong",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to Surat students online. Every match weighs the exact syllabus and level, the exam session, and your child's current school and board before a trial is offered.",

  process: [
    { title: "Share your brief", description: "Tell us the board or programme, subject and level, current or predicted grade, your child's school and the times that work." },
    { title: "Get a shortlist", description: "We match tutors on the exact syllabus and level first, and explain why each one suits your child's situation." },
    { title: "Take a free trial class", description: "Your child works through a real topic online with the tutor, at no charge and with no obligation to continue." },
    { title: "Agree the first-month plan", description: "The tutor sets out topics, session rhythm and how progress will be reported; you approve or adjust it." },
    { title: "Start regular online sessions", description: "Fixed weekly slots planned around your child's school hours, exam dates and the Navratri break." },
  ],

  whyPoints: [
    { title: "Syllabus-exact matching", description: "Tutors are matched to the specific IB subject and HL or SL level, or IGCSE board, code and tier, not a general 'IB tutor' label." },
    { title: "Honest about home visits", description: "We say plainly that tutors do not visit homes in Surat and explain what online one-to-one tuition actually involves before you book." },
    { title: "Free trial before commitment", description: "Your child meets the tutor on a real topic first, so you decide on evidence rather than a profile." },
    { title: "Academic integrity built in", description: "Tutors guide IAs, coursework, the EE and TOK but never write assessed work, protecting the Diploma and the school's trust." },
    { title: "Clear progress updates", description: "A short note after every session and a review every few weeks, so you always know what was covered and what is next." },
    { title: "Independent and flexible", description: "No school or exam-board ties, no published price list, no long contracts, and re-matching whenever the fit is wrong." },
  ],

  faqs: [
    {
      question: "Do IB Gram tutors visit homes in Surat?",
      answer:
        "No. IB Gram does not send tutors to visit a student's home in Surat; in-person home visits run only in Gurugram and parts of Delhi NCR. Surat students get live one-to-one online tuition instead, with the same tutor every session, a shared screen for working through problems, and a written note after class. Many families find this works just as well, since it removes travel time and widens the choice of subject specialists well beyond who happens to live nearby.",
    },
    {
      question: "How do I find a good IB or IGCSE tutor in Surat?",
      answer:
        "Share your child's exact board or programme, subject, level and current school with IB Gram, and we shortlist tutors who have taught that precise syllabus recently. Because Surat's own supply of IB and Cambridge teachers is limited, we match from a wider tutor base while still checking the tutor's experience against your child's specific course. You then take a free online trial class before deciding anything, and if the fit is wrong we suggest another tutor.",
    },
    {
      question: "What does an IB or IGCSE tutor in Surat cost?",
      answer:
        "The fee depends on the programme and level, the subject, session length and the tutor's experience with your exact syllabus, and we confirm it for your specific match before the trial. There is no published price list. Online tuition tends to be more economical than home visits would be, since there is no travel cost built into the fee, and sessions are billed by the term rather than a long contract.",
    },
    {
      question: "Which schools in Surat teach the IB or Cambridge IGCSE?",
      answer:
        "Fountainhead School, on the Rander-Dandi Road corridor, runs the full IB continuum alongside Cambridge IGCSE. P. P. Savani Cambridge International School, near Kamrej, offers Cambridge IGCSE and CBSE. Aarth Universal School in Adajan runs the IB Primary and Middle Years Programmes and is working toward the Diploma. Surat's international-curriculum school base is small compared with a metro, which is exactly why private tutoring plays a bigger role here.",
    },
    {
      question: "Is GSEB, CBSE or IGCSE the better choice for a Surat family?",
      answer:
        "There is no single right answer; it depends on the family's plans. GSEB and CBSE suit a student staying within the Indian university system and are far more widely available in Surat. IGCSE and the IB suit families planning study abroad, an international-school move, or who value the application-based marking style and internal-assessment work those curricula use. Many Surat families keep a child on GSEB or CBSE and add IGCSE subjects privately as groundwork for a later switch.",
    },
    {
      question: "Do you cover Cambridge and Edexcel IGCSE in Surat?",
      answer:
        "Yes. Cambridge is the more common board locally, since both Fountainhead and P. P. Savani Cambridge International School teach it, so most requests are for Cambridge syllabus codes like Mathematics 0580 or Chemistry 0620. Edexcel comes up mainly from families preparing privately for a UK-pattern route, and we match those students to a tutor familiar with Edexcel's specification and question style rather than treating IGCSE as one syllabus.",
    },
    {
      question: "Can a tutor help with the IB Extended Essay or Internal Assessments?",
      answer:
        "Yes, but only with guidance, never by writing any part of it. A tutor can help a Surat student choose a workable research question, understand what each assessment criterion actually rewards, plan data collection, and give critical feedback on drafts. Writing or rewriting assessed work breaches the IB's academic integrity policy and can put the Diploma at risk, so IB Gram tutors decline requests to do it.",
    },
    {
      question: "Which IB Diploma subjects do you tutor for Surat students?",
      answer:
        "We cover all major IB Diploma subject groups, with Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science and Psychology among the most requested by Surat families. We also support Environmental Systems and Societies, Geography, History, Language B options, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "My child studies GSEB. Can a tutor prepare them for IGCSE separately?",
      answer:
        "Yes, this is one of the most common requests we get from Surat. The tutor works alongside your child's GSEB schooling to build the specific IGCSE syllabus content and, more importantly, the application-based answer style Cambridge and Edexcel expect, which differs from GSEB's recall-focused marking. Additional Mathematics is often added first, since it is not usually part of a GSEB curriculum but is expected knowledge for IGCSE Extended Maths and later IB study.",
    },
    {
      question: "Is a free trial class available before I commit?",
      answer:
        "Yes, every match starts with a free online trial class. Your child works through a real topic from their syllabus with the tutor, at no charge and with no obligation to continue. Afterwards, the tutor shares a short first-month plan, and you decide whether to proceed, ask for changes, or try a different tutor.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Surat?",
      answer:
        "The best time is at the start of the course: Class 9 for IGCSE and Class 11 for the IB Diploma, giving room to fix foundations before Internal Assessment deadlines, mocks and predicted grades. Families starting in the final year can still make real progress, though the focus shifts to the highest-value topics and past papers before the May or October-November session rather than a full re-teach.",
    },
    {
      question: "Does the Navratri break affect tutoring schedules in Surat?",
      answer:
        "Many Surat families do lighten or pause tutoring for the nine evenings of Navratri, since garba plans genuinely clash with study time in a way few other festivals do locally. We build this into scheduling rather than pretending it will not happen, and sessions resume at the normal weekly rhythm straight after. Diwali and the shorter winter break have a similar, smaller effect on scheduling.",
    },
    {
      question: "How does IB or IGCSE from Surat affect university applications in India?",
      answer:
        "Most Indian universities require Association of Indian Universities equivalence certification for an IB Diploma or IGCSE record before admission, so applying for it well ahead of deadlines matters. For entrance exams, IB and IGCSE students sit CUET-UG alongside CBSE and GSEB students, and JEE or NEET eligibility depends on the specific subject combination and marks at the qualifying exam, which is worth checking early rather than in Class 12.",
    },
    {
      question: "What happens if the tutor is not the right fit for my child?",
      answer:
        "Tell us and we will find another tutor. We review progress with families every few weeks and re-match whenever the fit is not working, rather than asking your child to persist with a tutor who is not helping. There are no long contracts, so you can also pause or stop sessions at any point without penalty.",
    },
    {
      question: "Is IB Gram affiliated with any Surat school or exam board?",
      answer:
        "No. IB Gram is an independent tutoring platform and is not affiliated with, endorsed by or representing Fountainhead School, P. P. Savani Cambridge International School, Aarth Universal School, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names on this page describe the curriculum landscape Surat families study within, nothing more.",
    },
    {
      question: "Can one tutor cover both a GSEB or CBSE school subject and an IGCSE subject?",
      answer:
        "Sometimes, but we match on the specific syllabus rather than assuming crossover. A tutor strong in CBSE Mathematics may also teach IGCSE Mathematics 0580 well, but IB Diploma Higher Level maths and sciences usually need a Diploma specialist with recent teaching experience at that level. For students juggling two boards at once, we often assign one tutor per syllabus so each gets properly matched support.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Surat", href: "/ib-tutors/surat/", description: "Programme and subject pages for IB tutoring in Surat." },
    { label: "IGCSE tutors in Surat", href: "/igcse-tutors/surat/", description: "Cambridge and Edexcel IGCSE tutor matching for Surat students." },
    { label: "IGCSE in Surat", href: "/igcse-pages/surat/", description: "How IGCSE tutoring works for Surat families." },
    { label: "India city pages", href: "/india/", description: "IB and IGCSE tutoring across other Indian cities." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Maths AA and AI course pages by level." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutors in Vadodara", href: "/vadodara/", description: "Online IB and IGCSE tuition for Vadodara families." },
    { label: "IB and IGCSE tutors in Rajkot", href: "/rajkot/", description: "Online IB and IGCSE tuition for Rajkot families." },
    { label: "IB and IGCSE tutors in Ahmedabad", href: "/ahmedabad/", description: "Online and home IB and IGCSE tuition for Ahmedabad families." },
  ],

  closingHeading: "Book a free trial with an online IB or IGCSE tutor in Surat",
  closingBody:
    "Tell us the board or programme, subject and level, your child's current or predicted grade and their school. You will get back a shortlisted tutor, their teaching background and trial slots that fit your evenings, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 21.1702, longitude: 72.8311 },
  alternateNames: ["Suryapur", "Soorat"],
  wikipedia: "https://en.wikipedia.org/wiki/Surat",
  state: "Gujarat",
  stateCode: "IN-GJ",
  stripSchools: ["Fountainhead School", "P. P. Savani Cambridge International School", "Aarth Universal School"],
};
