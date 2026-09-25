import type { CitySeoPage } from "../types";

/**
 * Bengaluru IB and IGCSE schools confirmed to offer the IB continuum or Cambridge IGCSE,
 * used for the sliding strip. Verified against school Wikipedia pages, doris.school and
 * tutopiya listings in September 2026.
 */
export const bengaluruIbIgcseSchools = [
  "Stonehill International School",
  "Canadian International School, Bengaluru",
  "Trio World Academy",
  "The International School Bangalore",
  "Inventure Academy",
  "Indus International School, Bengaluru",
  "Greenwood High International School",
  "Candor International School",
] as const;

export const bengaluru: CitySeoPage = {
  slug: "bengaluru",
  countryName: "Bengaluru",
  countryNameLong: "Bengaluru, Karnataka",
  demonym: "Bengaluru",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and weekend mornings, timed around Bengaluru school hours and Outer Ring Road traffic",
  lastUpdated: "2026-09-21",
  state: "Karnataka",
  stateCode: "IN-KA",
  geo: { latitude: 12.9716, longitude: 77.5946 },
  wikipedia: "https://en.wikipedia.org/wiki/Bengaluru",
  alternateNames: ["Bangalore"],
  stripSchools: [...bengaluruIbIgcseSchools],

  title: "IB and IGCSE Tutors in Bengaluru | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Bengaluru families: Diploma, MYP and Cambridge or Edexcel IGCSE subjects, one to one, with a free trial class before you commit.",
  h1: "IB and IGCSE Tutors and Online Tuition in Bengaluru",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR BENGALURU FAMILIES",
  heroSubtitle:
    "Your child follows the IB or Cambridge and Edexcel IGCSE syllabus at a Bengaluru school, and needs a tutor who has actually taught that exact course, at the right level, live online from home. Tell us the programme, the subject and where your child is stuck, whether that is HL Physics before mocks or an IGCSE Additional Maths topic that never quite landed, and we shortlist tutors who teach it week after week.",
  primaryKeyword: "IB and IGCSE tutors in Bengaluru",
  imageAltText: "IB tutor guiding a Bengaluru student through an online Diploma Programme physics lesson",
  secondaryKeywords: [
    "IB tutor in Bengaluru",
    "IGCSE tutor in Bengaluru",
    "IB home tuition Bengaluru",
    "IGCSE home tuition Bengaluru",
    "IB private tuition Bengaluru",
    "IB tutor Bangalore",
    "IGCSE tutor Bangalore",
    "IB Maths tutor Bengaluru",
    "IGCSE Maths tutor Bengaluru",
    "IB Physics tutor Bengaluru",
    "IB Chemistry tutor Bengaluru",
    "IB Biology tutor Bengaluru",
    "IB DP tutor Bengaluru",
    "IB MYP tutor Bengaluru",
    "IB PYP tutor Bengaluru",
    "IGCSE online tuition Bengaluru",
    "online IB tutor Bengaluru",
    "IB tutor Whitefield",
    "IGCSE tutor Sarjapur Road",
    "IB tutor HSR Layout",
    "Cambridge IGCSE tutor Bengaluru",
    "Edexcel IGCSE tutor Bengaluru",
    "IB Economics tutor Bengaluru",
    "IB Computer Science tutor Bengaluru",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB or IGCSE syllabus, board and level",
    "Live one-to-one online lessons; tutors do not visit homes in Bengaluru",
    "Free trial class before any commitment",
    "Independent platform, not tied to any school, curriculum body or exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP · CP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online, live 1:1", label: "How lessons run in Bengaluru" },
    { value: "Free trial class", label: "Before you commit" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for Bengaluru families, explained plainly",
    paragraphs: [
      "IB and IGCSE tutors in Bengaluru work with your child over live video, one to one, on the exact syllabus their school follows rather than a generic revision pack. For a Diploma Programme student that means a named subject at Higher or Standard Level; for an IGCSE student it means the right board, the right syllabus code and the right tier. The tutor plans sessions around the school's internal deadlines and the actual exam series, not a fixed worksheet calendar.",
      "Bengaluru's international-curriculum schools sit mostly along two belts: the Whitefield to Sarjapur Road stretch that grew up around the tech parks, and a smaller cluster near the old airport road and the northern suburbs. Families move here for work, often mid-year, and a child dropped into IGCSE Grade 10 or DP Grade 12 partway through the year needs a tutor who can close a specific gap fast, not a general homework helper.",
      "We are upfront about one thing before anything else: IB Gram tutors teach Bengaluru students online. In-person home visits are not something we offer here; that service currently runs only in Gurugram and parts of Delhi NCR. What Bengaluru families get instead is a wider pool of subject specialists, because the tutor does not need to live nearby or fight the Outer Ring Road at 6 pm to keep the session on time.",
      "IB Gram is an independent tutoring platform. We are not affiliated with, endorsed by or representing any school named on this page, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Tutors explain, question and review a student's work; they never write an Internal Assessment, an Extended Essay, a Personal Project or IGCSE coursework on a student's behalf.",
    ],
    bullets: [
      "Live online lessons matched to programme, subject and level",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "No home visits in Bengaluru; that service is Gurugram and Delhi NCR only",
      "Free trial class and a written plan after it",
    ],
  },

  programmesIntro:
    "A Bengaluru school year rarely stays on one board. Families arrive from a CBSE school elsewhere in India and land in IGCSE Grade 9, or move between the state board and an international curriculum school when a parent's posting changes. Each IB programme below asks for a different kind of tutoring, and the notes reflect what Bengaluru tutors are actually asked to help with.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "An inquiry-driven programme with transdisciplinary units and, in the last year, the PYP Exhibition. There is no external exam, so tutoring focuses on literacy, number sense and the research skills the Exhibition demands.",
      countryNote:
        "Bengaluru PYP parents most often ask for reading fluency support and help structuring the Exhibition inquiry, in short after-school sessions that fit around after-school activities common in this city.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Every subject is marked against criteria A-D, the Personal Project runs in MYP 5, and some schools finish with MYP eAssessment. Students who write good descriptive answers still stall at the criterion-level analysis examiners want.",
      countryNote:
        "MYP requests from Bengaluru families tend to centre on criterion C and D in the sciences and on keeping the Personal Project process journal current rather than rebuilt the week before it is due.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. Final examinations sit in May, with a smaller November retake session.",
      countryNote:
        "In Bengaluru, DP tutoring requests cluster around Maths AA and AI, Physics, Chemistry, Economics and English A, usually starting in Class 11 once tech-sector families realise how quickly the pace picks up.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more DP courses combined with a career-related study, a reflective project and personal and professional skills, aimed at students planning a specific vocational or professional direction after school.",
      countryNote:
        "Very few Bengaluru schools run the CP, but where a student is enrolled, the tutoring need is identical to the DP subjects inside it, plus structuring the reflective project on time.",
    },
  ],

  subjectsIntro:
    "Bengaluru's IB tutoring requests are specific down to the syllabus code, not just the programme. A tutor who teaches Maths Analysis and Approaches well is not automatically the right fit for Applications and Interpretation, and a Physics HL specialist and an SL specialist prepare a student differently. We match on the exact subject and level first.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, with the Paper 3 investigative questions that trip up even confident HL students, plus the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-driven problem solving, built around the GDC and a data-based exploration topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through nuclear physics, data-handling in the practical scheme and a defensible Scientific Investigation write-up." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, organic pathways and data-booklet fluency, alongside the Scientific Investigation report." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology through ecology, extended-response command terms, and IA statistics that hold up under moderation." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro and macro theory, correctly labelled diagrams and the Paper 3 quantitative questions at HL." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying unit theory to unseen case studies and building a Business Research Project around a real company." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Object-oriented programming, abstract data structures and networks, tuned for Bengaluru students who often already code." },
    { name: "IB English A Language and Literature", levels: "HL / SL", description: "Unseen text analysis, comparative essays and the Individual Oral, built around genuine textual argument." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, precise study citation, and clear ERQ structure." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Systems diagrams, evaluative thinking and case studies drawn from real environmental issues, not textbook summaries." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth, fieldwork methodology for the IA and the evaluative writing that separates a strong grade from an average one." },
    { name: "Theory of Knowledge", levels: "DP Core", description: "Building the exhibition commentary and a prescribed-title essay the student can argue honestly from more than one angle." },
    { name: "Extended Essay", levels: "DP Core", description: "Narrowing a workable research question early and keeping reflection sessions on schedule; guidance only, the writing stays the student's own." },
    { name: "IB Hindi and Kannada B", levels: "HL / SL", description: "Text-type conventions, receptive-skills practice and spontaneous speaking preparation for the individual oral." },
    { name: "IB MYP Sciences and Mathematics", levels: "MYP 1-5", description: "Criteria A-D investigation design, and the foundation needed before Physics, Chemistry or Maths at DP level." },
    { name: "IB MYP Language and Literature", levels: "MYP 1-5", description: "Criterion A analytical writing and a Personal Project process journal kept up through the year, not rewritten at the end." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutoring in Bengaluru starts with the board and the syllabus code, because Cambridge 0580 Extended, 0606 Additional Mathematics and Edexcel 4MA1 Higher call for different preparation. We match on board, code, tier and the actual exam series a school's students sit, and we factor in whether a child is heading into the IB Diploma next.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier technique, non-calculator accuracy and the command words that quietly cost method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus basics, trigonometric identities and functions that bridge directly into IB Maths AA HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher-tier problem solving in the Edexcel style, which differs in phrasing from Cambridge papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement, circuits and waves, plus the alternative-to-practical paper technique." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, periodicity, organic chemistry and the practical alternative paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, extended-response structure and data-interpretation questions that reward precise wording." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, trace tables and Python for the problem-solving paper, a natural fit for Bengaluru's tech families." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy and the evaluative writing that carries most of the marks in the longer questions." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the case-study business rather than writing generic textbook answers." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and close reading of unseen passages under timed conditions." },
  ],

  regionsTitle: "Bengaluru localities our online IB and IGCSE tutors work with",
  regionsIntro:
    "Bengaluru's international-school families are spread across a handful of well-known belts. Since every lesson runs online, your child's tutor is chosen for syllabus fit rather than which flyover they can reach, but understanding your area still helps us plan around your school's timing and evening traffic patterns.",
  regions: [
    { name: "Whitefield and ITPL Road", note: "Home to several IB and IGCSE campuses and a large share of relocated tech families; school pickup and evening tech-park traffic shape when sessions actually work." },
    { name: "Sarjapur Road", note: "A fast-growing school corridor with mixed CBSE, IGCSE and IB options; families here often move a child between boards more than once before Class 9." },
    { name: "HSR Layout and Bellandur", note: "Dense with young tech-professional households; monsoon waterlogging around the Bellandur stretch can disrupt evening school pickup in July and August." },
    { name: "Marathahalli and Old Airport Road", note: "Close to schools offering Cambridge IGCSE for Grades 9-10, with steady weekday evening traffic on Old Airport Road." },
    { name: "Indiranagar and Koramangala", note: "Established central neighbourhoods with a mix of state board, CBSE and a smaller number of IGCSE-track families." },
    { name: "Electronic City and Hosur Road", note: "A tech corridor in its own right, with families choosing IGCSE or IB for children of engineers posted here for a few years at a time." },
    { name: "Hebbal and Yelahanka", note: "North Bengaluru's growing residential belt, home to families balancing an IB school commute with the airport corridor's traffic." },
    { name: "JP Nagar and Bannerghatta Road", note: "South Bengaluru households where CBSE-to-IGCSE switches are common ahead of Grade 9." },
    { name: "Jayanagar and Basavanagudi", note: "Older, established south Bengaluru neighbourhoods with a smaller but steady base of IGCSE and IB families." },
    { name: "Devanahalli and the airport corridor", note: "Newer developments near Kempegowda International Airport, popular with families who relocate for aviation and logistics roles." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe the school landscape Bengaluru families study within. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Whitefield and ITPL belt",
      note: "Families along Whitefield and the ITPL corridor study across a cluster of IB and IGCSE campuses that grew alongside the tech parks.",
      schools: ["Stonehill International School", "Greenwood High International School"],
    },
    {
      city: "Sarjapur Road",
      note: "A second major belt of international-curriculum schools, popular with families relocating for tech and consulting roles.",
      schools: ["Inventure Academy", "Indus International School, Bengaluru"],
    },
    {
      city: "Old Airport Road and HAL corridor",
      note: "Close to central Bengaluru, drawing families who want an easier commute from Indiranagar and Koramangala.",
      schools: ["Canadian International School, Bengaluru"],
    },
    {
      city: "North Bengaluru (Sahakara Nagar and Yelahanka)",
      note: "A growing base for families near the airport corridor, alongside Electronic City households who send children south for Cambridge IGCSE and the IB Diploma.",
      schools: ["Trio World Academy", "Candor International School", "The International School Bangalore"],
    },
  ],

  modesIntro:
    "Every Bengaluru family we work with ends up on one of two tracks: fully online, or online with a self-study routine built around it. Bengaluru is not a city where IB Gram offers home visits, so the question is less which format and more how to make online tuition as effective as possible for your child's subject and stage.",
  modes: [
    {
      title: "Live online one-to-one tuition",
      description:
        "A tutor teaches your child over video with a shared whiteboard, screen-sharing for past papers and saved session notes. This is the format IB Gram offers in Bengaluru; tutors do not visit homes here, only in Gurugram and parts of Delhi NCR.",
      bullets: [
        "Widest choice of subject and level specialists across India",
        "Works for PYP foundations through DP HL subjects",
        "Screen-shared GDC use and past-paper walkthroughs",
        "No cancellations for Outer Ring Road traffic or monsoon flooding",
      ],
    },
    {
      title: "Online tuition with a fixed weekly rhythm",
      description:
        "The same tutor, same slot, every week, planned around your child's school timetable and internal assessment calendar rather than squeezed in whenever there is a gap.",
      bullets: [
        "Predictable slots that survive a busy school term",
        "Progress notes after every session",
        "Easy to add a second slot before mocks or a tier decision",
        "Works well alongside after-school activities common in Bengaluru",
      ],
    },
    {
      title: "Exam-season intensive online sessions",
      description:
        "Extra sessions in the run-up to internal exams, IB mocks or the IGCSE tier decision, still fully online, focused on past papers and the specific gaps a student has left.",
      bullets: [
        "Targeted revision instead of re-teaching whole units",
        "Past papers from the correct board and syllabus code",
        "Short-notice slots around the May and October-November exam series",
        "Reviewed and adjusted every few weeks with you",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Bengaluru",
      paragraphs: [
        "Bengaluru's international-curriculum schools grew up alongside its tech parks, which is why the biggest clusters sit along Whitefield, ITPL Road and Sarjapur Road rather than in the older parts of the city. A steady stream of relocating tech and consulting families, plus NRI households returning to India, keeps demand for the IB and Cambridge or Edexcel IGCSE growing well beyond the traditional Bengaluru international-school crowd.",
        "Many of these families are on two- or three-year postings, which means a child can join an IGCSE Grade 10 class or a DP Grade 12 cohort partway through the syllabus. That kind of mid-year entry is common enough in Bengaluru that tutors here are used to running a quick diagnostic in the first session rather than assuming the student has covered everything the rest of the class has.",
        "A second group choosing IB or IGCSE in Bengaluru is business families and senior professionals who want an internationally portable qualification for children likely to study or work abroad later. For them, the IB's broader assessment style and the IGCSE's globally recognised syllabus matter more than proximity to a single university path.",
        "Whatever the reason a family is on this page, the practical need is usually the same: a tutor who has taught the exact subject at the exact level recently, understands the assessment criteria the school is using this year, and can explain a concept three different ways until one of them lands.",
      ],
      bullets: [
        "Whitefield to Sarjapur Road is Bengaluru's densest IB and IGCSE belt",
        "Mid-year school changes are common among relocating families",
        "NRI and business families value the IB and IGCSE's global portability",
        "Tutors run a diagnostic first, not a fixed syllabus assumption",
      ],
    },
    {
      heading: "State board, CBSE, ICSE or IB and IGCSE: which is right for your child in Bengaluru?",
      paragraphs: [
        "The right board depends on where your family is headed next, not which one is considered harder. Karnataka's state board and CBSE emphasise a fixed syllabus and board exams at Class 10 and 12, ICSE leans towards broader coursework and English proficiency, while IB and IGCSE assess through a mix of coursework, criteria and structured written exams that examiners mark against published rubrics.",
        "Families who plan to stay in the Indian university system for engineering or medicine entrance often keep a child on CBSE, because JEE and NEET preparation aligns closely with that syllabus and Bengaluru has a large coaching ecosystem built around it. Families expecting more international moves, or who value the IB's emphasis on extended writing and independent research, tend to move towards IB or IGCSE despite the smaller local coaching support.",
        "A move from CBSE or the state board into IGCSE, usually at Grade 9, is the most common switch we see among Bengaluru families. The subject content overlaps more than parents expect; what changes is the demand for explanation and application rather than recall, and IGCSE's structured Core and Extended tiering, which the state and CBSE systems do not use.",
        "There is no universally correct answer here, and a tutor's job in this situation is not to pick a board for you. It is to make sure that whichever board your child sits, the tutoring targets exactly what that board's exam actually rewards.",
      ],
      table: {
        caption: "How the boards commonly available to Bengaluru families differ",
        columns: ["Board", "Assessment style", "Common next step"],
        rows: [
          ["Karnataka State Board", "Class 10 and Class 12 board exams, fixed syllabus", "COMED-K, state engineering and medical entrance"],
          ["CBSE", "Class 10 and Class 12 board exams, MCQ-heavy competitive alignment", "JEE, NEET and most Indian universities"],
          ["ICSE / ISC", "Broader coursework, strong English and humanities weighting", "Indian universities, some international applications"],
          ["IB Diploma", "Criteria and exam mix, Extended Essay, TOK, internal assessments", "Global universities, CUET-UG for Indian entry"],
          ["IGCSE (Cambridge / Edexcel)", "Two-year syllabus, Core or Extended tiering, external papers", "A Levels, IB Diploma, or CUET-UG in India"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition in Bengaluru?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor in Bengaluru depends mainly on the subject, the level and how experienced the tutor is with that exact syllabus. A Diploma Programme HL subject specialist who regularly prepares students for Paper 3-style questions costs more than a general MYP or IGCSE Core tutor, simply because that depth of experience is scarcer. We do not publish a price list; instead we quote the fee for your specific match before you commit to anything.",
        "Session length and frequency change the total more than most families expect. A single weekly hour rarely moves a struggling HL subject before mocks; two shorter sessions a week, one on new content and one on past papers, usually costs more per month but delivers a better result per rupee spent.",
        "Because every session in Bengaluru runs online, families are not paying for a tutor's travel time or fuel, which keeps online tuition here generally more efficient than the equivalent home-visit arrangement would be in a city where that is offered. That efficiency is one reason Bengaluru families get access to niche subject specialists who would otherwise be too far away to consider.",
        "We keep engagements flexible rather than locking families into long contracts. You can pause over a school holiday, add an extra session before an IA deadline, or stop altogether if the plan is not working, and fees are confirmed again whenever the arrangement changes.",
      ],
      bullets: [
        "Fee depends on subject, level and tutor experience, not a fixed rate card",
        "No published prices; your quote comes before you commit",
        "Two shorter weekly sessions often beat one long one before mocks",
        "No long contracts; pause or adjust the plan anytime",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors or self-study: which works best in Bengaluru?",
      paragraphs: [
        "Bengaluru has no shortage of options for IB and IGCSE support, and each one solves a different problem. Large coaching centres are built around competitive exams like JEE and NEET and rarely have staff who teach to IB or IGCSE assessment criteria; a Physics HL student sitting in a NEET-focused batch is being taught to a different exam entirely, even when the topic name matches.",
        "Group tuition centres that do advertise IB or IGCSE support usually teach to the average student in the room, which is a poor fit for a child who is either well ahead or badly behind their class. One-to-one online tuition solves that by adjusting pace and depth to the individual, which matters more in the IB's criteria-based marking than in a fixed-answer exam.",
        "Self-study works for strong, self-directed students revising familiar material, but it struggles with genuinely new content, with the IA and Extended Essay process, and with the kind of targeted feedback that turns a decent draft into a strong one. Most Bengaluru families we work with use a mix: independent study for revision, with a tutor for new content, IA guidance and the topics that keep resurfacing on practice papers.",
        "Private online tutoring, matched to the exact subject and level, tends to close gaps faster than any of the alternatives because the session time is spent entirely on what one specific student needs, not on pacing a room.",
      ],
      table: {
        caption: "Comparing IB and IGCSE support options available in Bengaluru",
        columns: ["Option", "Best for", "Limitation"],
        rows: [
          ["Competitive-exam coaching centres", "JEE, NEET and COMED-K preparation", "Not built around IB or IGCSE assessment criteria"],
          ["Group IB or IGCSE tuition", "Broad revision at an average pace", "Cannot adapt to a much stronger or weaker student"],
          ["Self-study", "Revising familiar, already-taught content", "Struggles with new topics, IAs and the Extended Essay"],
          ["One-to-one online tutoring", "New content, exam technique and IA or coursework guidance", "Requires a tutor genuinely experienced in that syllabus"],
        ],
      },
    },
    {
      heading: "Bengaluru's school year: exam sessions, monsoon and festival calendar",
      paragraphs: [
        "Most Bengaluru international schools run an academic year from around April or June through to March, but the external exam calendars follow the boards rather than the school term. IB Diploma exams sit in May, with a smaller November session for retakes. Cambridge IGCSE sits in May-June and October-November, and Edexcel IGCSE sits in January and May-June, so a Grade 10 student's exact session depends entirely on which board their school follows.",
        "Bengaluru's monsoon, roughly June to September, brings sudden heavy downpours that can flood low-lying stretches near Bellandur and parts of the Outer Ring Road, occasionally disrupting school days and evening commutes even for families who are only picking a child up. Because IB Gram sessions run online, weather rarely cancels a lesson, though we do plan around school-announced closures.",
        "Festival timing matters for scheduling more than families often plan for. Ganesh Chaturthi, Dasara and Ayudha Puja in September and October fall close to many schools' first internal exams or DP mocks, and a tutor who knows this builds in a lighter week around the festival rather than trying to hold a normal pace through it.",
        "The lowest-pressure windows in Bengaluru's calendar are the short breaks around Dasara and the longer summer break from April into early June. A handful of focused sessions in either window, before the term's pace picks up again, tends to do more for a shaky subject than the same number of sessions squeezed into exam season.",
      ],
      table: {
        caption: "Exam sessions and calendar pressure points for Bengaluru students",
        columns: ["Stage", "Timing", "What it means for tutoring"],
        rows: [
          ["IB Diploma exams", "May, with November retakes", "Grade 11 start gives the most room before mocks"],
          ["Cambridge IGCSE", "May-June and October-November", "Tier decision usually locked in during Grade 10"],
          ["Edexcel IGCSE", "January and May-June", "January entries need a shorter, sharper revision run"],
          ["Monsoon season", "June to September", "Online sessions avoid weather-related cancellations"],
        ],
      },
    },
    {
      heading: "IB and IGCSE to university: CUET-UG, JEE, NEET and study abroad from Bengaluru",
      paragraphs: [
        "Bengaluru IB and IGCSE students head in several directions after school, and each path reads their results differently. Universities abroad, particularly in the UK, US, Canada and Singapore, are used to the IB's grading and often quote required Diploma point totals with specific Higher Level subject minimums, while IGCSE grades feed into A Level or IB Diploma entry rather than being read on their own for university admission.",
        "For students staying in India, CUET-UG has become the standard entry route into most central and many state universities, and IB and IGCSE students take it alongside CBSE and state board peers. Association of Indian Universities equivalence certificates convert IB Diploma results into a recognised Indian qualification, which most Bengaluru-based DP graduates applying to Indian universities will need to arrange in advance.",
        "JEE and NEET eligibility is a genuine consideration for Bengaluru IB and IGCSE families, since the city's engineering and medical coaching culture is strong and some students want both an IB Diploma and a shot at these entrance exams. Eligibility rules focus on specific subject combinations and minimum marks rather than the board itself, so a student wanting this route needs their subject choices checked early, ideally by Grade 10.",
        "Predicted grades matter enormously for the international route, because most overseas applications go in during Grade 12 before final IB or A Level results exist. That makes the internal assessments and mock exams in the second half of Grade 11 and the start of Grade 12 the real target for tutoring focus, not only the final May exam session.",
      ],
      bullets: [
        "UK, US, Canadian and Singaporean universities read IB Diploma points directly",
        "CUET-UG is the main Indian entry route for IB and IGCSE students",
        "AIU equivalence certificates convert IB results for Indian universities",
        "JEE and NEET eligibility depends on subject choices, checked early",
      ],
    },
    {
      heading: "IB Maths AA, AI and the sciences: what Bengaluru students need most",
      paragraphs: [
        "Maths Analysis and Approaches and Applications and Interpretation are the two subjects that generate the most tutoring requests from Bengaluru DP families, and the choice between them is often made too casually. AA suits students planning engineering, physical sciences or economics who are comfortable with proof and abstract algebra; AI suits students who think more naturally in terms of models, data and technology, including many who are aiming at business, social science or design courses.",
        "At Higher Level, both courses add a Paper 3, which rewards structured, unfamiliar problem solving rather than memorised methods, and this is where most Bengaluru students lose the most avoidable marks. Tutoring here works best as regular, timed problem-solving practice rather than more explanation of content the student already understands.",
        "Physics and Chemistry HL are the two sciences Bengaluru families most often bring in a tutor for, usually because the mathematical demands of Physics or the volume of organic chemistry content in Chemistry outpaces what a school's group pace can cover for every student. Biology tends to need less mathematical support and more precision in extended-response writing, where command terms decide how many marks an otherwise correct answer earns.",
        "Across all three sciences, the internally assessed Scientific Investigation is where a tutor's guidance has the clearest payoff: choosing a genuinely testable question, planning a method that will survive scrutiny, and reading a draft critically before it is submitted, all without writing any part of it for the student.",
      ],
      bullets: [
        "AA suits proof and abstract algebra; AI suits modelling and data",
        "HL Paper 3 rewards timed, unfamiliar problem solving practice",
        "Physics and Chemistry HL are Bengaluru's most requested sciences",
        "Scientific Investigation guidance never extends to writing the report",
      ],
    },
    {
      heading: "Core or Extended: choosing the right IGCSE tier in Bengaluru",
      paragraphs: [
        "The Core versus Extended decision, made in most Bengaluru schools during Grade 9 or early Grade 10, is one of the highest-stakes choices in the IGCSE years, because Core tiers cap the top achievable grade in Cambridge subjects. A student capable of a strong grade who is entered for Core by default, rather than by a deliberate decision, closes off options for A Levels or the IB Diploma afterwards without realising it.",
        "Edexcel's Foundation and Higher tiers work on a similar principle, though the grading and the point at which schools make the call can differ slightly from Cambridge. Either way, the decision should be based on how a student is actually performing on topic tests through Grade 9, not on how confident they feel in September of that year.",
        "Subject choice matters alongside tier choice. Students who plan to take Maths AA HL or Physics and Chemistry HL at Diploma level benefit substantially from Extended-tier sciences and, where offered, IGCSE Additional Mathematics, because both give a head start on the pace DP subjects assume from day one.",
        "A tutor's most useful role during the tier decision is usually diagnostic: identifying, through structured practice questions rather than a single test score, whether a student's gaps are content gaps that more teaching will fix, or exam-technique gaps that need a different kind of practice entirely.",
      ],
      bullets: [
        "Core tiers cap the highest achievable grade in most Cambridge subjects",
        "Tier decisions should follow topic-test performance, not September confidence",
        "Extended sciences and Additional Maths prepare students for DP HL subjects",
        "A tutor's diagnostic work separates content gaps from technique gaps",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to Bengaluru students online. Every match is weighed on the exact syllabus, board and level first, then on the tutor's recent experience with students at your child's stage.",

  process: [
    { title: "Tell us the syllabus", description: "Share the programme or board, subject and level, current grade or predicted grade, and the specific topic or gap worrying you." },
    { title: "Get a shortlisted tutor", description: "We match on the exact subject and level, and explain why that tutor suits your child's stage and school." },
    { title: "Take a free trial class", description: "Your child works through a real topic online with the tutor, at no charge and with no obligation to continue." },
    { title: "Agree a first-month plan", description: "The tutor sets out what will be covered, how often, and how progress will be reported; you approve it or ask for changes." },
    { title: "Review and adjust", description: "We check in every few weeks, adjust the plan before mocks or tier decisions, and re-match if the fit is not right." },
  ],

  whyPoints: [
    { title: "Matched on syllabus, not just 'IB'", description: "Tutors are matched to the exact subject and HL or SL level, or the exact IGCSE board, code and tier." },
    { title: "Built for online, not an afterthought", description: "Bengaluru sessions are designed for video from the start, with shared whiteboards and saved notes, not a home-tuition format squeezed onto a screen." },
    { title: "Free trial before you commit", description: "You and your child judge the tutor on a real lesson, not a profile description." },
    { title: "Academic integrity is non-negotiable", description: "Tutors guide IAs, coursework, the EE and TOK but never write any part of them." },
    { title: "Clear, regular updates", description: "A short note after every session and a review every few weeks, so you always know where things stand." },
    { title: "No long contracts", description: "Pause over a school break, add sessions before an exam, or stop entirely; the arrangement adjusts with your family's need." },
  ],

  faqs: [
    {
      question: "Do IB Gram tutors visit homes in Bengaluru?",
      answer:
        "No, tutors do not visit homes in Bengaluru; every lesson runs live online, one to one. In-person home visits currently run only in Gurugram and parts of Delhi NCR. What Bengaluru families get instead is access to subject specialists across the country who would otherwise be too far away, taught over video with a shared whiteboard and saved session notes.",
    },
    {
      question: "How do I find an IB tutor in Bengaluru?",
      answer:
        "Share your child's IB programme, subject, level and current grade with IB Gram, and we shortlist tutors who teach that exact course online. Matching is based on recent experience with the subject and level first, not general availability. You then take a free trial class before deciding, and if the fit is not right we suggest another tutor rather than asking your child to persist.",
    },
    {
      question: "Do you provide IGCSE tutors in Bengaluru for both Cambridge and Edexcel?",
      answer:
        "Yes, we match IGCSE tutors for Cambridge and Pearson Edexcel students in Bengaluru. Cambridge students are matched by syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620, and Edexcel students by specification and Foundation or Higher tier. Tutors use the correct board's past papers, since question styles and exam series genuinely differ between the two.",
    },
    {
      question: "What does an IB or IGCSE tutor in Bengaluru cost?",
      answer:
        "The fee depends on the subject, level, session length and the tutor's experience, and we do not publish a price list. We quote the fee for your specific match before the trial, so there are no surprises. IB Diploma HL subjects generally cost more than MYP or IGCSE Core support, and there are no long contracts.",
    },
    {
      question: "Which parts of Bengaluru do you cover?",
      answer:
        "Since every session runs online, we work with families across Bengaluru, including Whitefield, Sarjapur Road, HSR Layout, Marathahalli, Indiranagar, Koramangala, Electronic City, Hebbal, Yelahanka and the airport corridor near Devanahalli. Location affects scheduling around your child's school day, not which tutor we can offer, because there is no travel involved.",
    },
    {
      question: "Is there a free trial class before I commit?",
      answer:
        "Yes, every match starts with a free trial class online, at no charge and with no obligation to continue. Your child works through a real topic from their syllabus with the tutor, and afterwards the tutor shares a short first-month plan. You then decide whether to proceed, ask for a different approach, or try another tutor.",
    },
    {
      question: "Can a tutor help with the IB Extended Essay or Internal Assessments?",
      answer:
        "Yes, tutors guide the process but never write any part of an Internal Assessment, the Extended Essay, TOK or a Personal Project. Legitimate help includes narrowing a research question, explaining assessment criteria, planning a method and giving critical feedback on drafts. Writing assessed work for a student breaches IB academic integrity rules and can cost the Diploma, so our tutors decline those requests.",
    },
    {
      question: "Which IB Diploma subjects can you help with in Bengaluru?",
      answer:
        "We match tutors across the major DP subject groups requested in Bengaluru, most often Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A and Psychology. We also support Environmental Systems and Societies, Geography, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "Do you tutor IB MYP and PYP students in Bengaluru, not just the Diploma?",
      answer:
        "Yes, we work across the full IB continuum. MYP support focuses on criteria A-D in sciences, maths and Language and Literature, and on the Personal Project journal. PYP support covers reading, writing, number sense and the research skills that units of inquiry and the Exhibition require, usually in short, regular sessions.",
    },
    {
      question: "Is online tutoring effective for IB and IGCSE students, or is in-person always better?",
      answer:
        "Online tutoring works well for most IB and IGCSE students, especially for Diploma HL subjects, exam-technique work and syllabus-specific revision, because it gives access to a much wider pool of specialists than any single neighbourhood could offer. It suits Bengaluru particularly well, since it removes travel and Outer Ring Road traffic from the equation entirely for both tutor and student.",
    },
    {
      question: "How are IB Gram tutors verified before they teach my child?",
      answer:
        "Tutors are checked on qualifications, teaching background and recent experience with the exact subject, board and level before they are introduced to any family. We look specifically at which IB subjects and levels, or which IGCSE boards and tiers, a tutor has taught in the last two years. The free trial class then lets you judge explanation style and fit directly before committing.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Bengaluru?",
      answer:
        "The best time is close to the start of the course, Class 11 for the IB Diploma and Grade 9 for IGCSE, which leaves room to fix foundations before internal exams, IA deadlines and the tier decision. Students who start later in the course can still improve meaningfully, but the tutoring then focuses on the highest-value topics and timed past papers rather than a full syllabus rebuild.",
    },
    {
      question: "My child is switching from CBSE or the state board to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, board switches are common among Bengaluru families, whether moving into IGCSE at Grade 9 or the IB Diploma at Grade 11. The content gap is usually smaller than expected; the real gap is in how IB and IGCSE questions reward explanation and application over recall. A tutor experienced with switchers builds those habits deliberately, ideally starting the summer before the move.",
    },
    {
      question: "Can sessions happen on weekends or after school hours?",
      answer:
        "Yes, most Bengaluru families book weekday evening slots after school and weekend mornings or afternoons. Because sessions are online, timing is flexible around school activities, tuition centres a student may already attend, and family schedules, without the added constraint of a tutor's travel time across the city.",
    },
    {
      question: "What happens if the tutor is not the right fit for my child?",
      answer:
        "Tell us and we will find another tutor. We review progress with families every few weeks and re-match whenever the fit is not working, rather than asking a student to persist with a tutor who is not helping. There are no long contracts, so you can also pause or stop sessions at any point without penalty.",
    },
    {
      question: "Is IB Gram affiliated with any Bengaluru school or with the IB or Cambridge?",
      answer:
        "No, IB Gram is an independent tutoring platform, not affiliated with, endorsed by or representing any Bengaluru school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Schools named on this page describe the school landscape Bengaluru families study within; tutors work to each school's own calendar and the relevant board's published syllabus.",
    },
    {
      question: "Do you help with the choice between Cambridge and Edexcel IGCSE if my child hasn't started yet?",
      answer:
        "We can explain how the two boards differ in tiering, exam series and question style, but the choice of board itself is usually set by the school your child attends rather than something a family selects independently. Once you know the board, we match a tutor to that specific syllabus code and tier from the very first session.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Bangalore", href: "/ib-tutors/bangalore/", description: "Programme and subject pages for IB tutoring across Bengaluru." },
    { label: "IGCSE tutors in Bangalore", href: "/igcse-tutors/bangalore/", description: "Cambridge and Edexcel IGCSE tutor matching for Bengaluru students." },
    { label: "IGCSE in Bangalore", href: "/igcse-pages/bangalore/", description: "How IGCSE tutoring works for Bengaluru families." },
    { label: "India IB and IGCSE tutoring", href: "/india/", description: "IB and IGCSE tutoring across Indian cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units of inquiry and the Exhibition." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Maths AA and AI tutoring by level." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial class." },
    { label: "IB and IGCSE tutoring in Hubli-Dharwad", href: "/hubli-dharwad/", description: "Online IB and IGCSE tuition for another Karnataka city." },
    { label: "IB and IGCSE tutoring in Chennai", href: "/chennai/", description: "Online IB and IGCSE tuition for Chennai families." },
    { label: "IB and IGCSE tutoring in Hyderabad", href: "/hyderabad/", description: "Online IB and IGCSE tuition for Hyderabad families." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor for your Bengaluru student",
  closingBody:
    "Tell us the programme or board, the subject and level, and your child's current grade. You'll get back a shortlisted tutor, their recent teaching background and trial slots that fit around your school week, online and with no charge or commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
