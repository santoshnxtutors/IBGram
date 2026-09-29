import type { CitySeoPage } from "../types";

/**
 * /tonk/ - IB and IGCSE online tuition for Tonk, Rajasthan. No IB or Cambridge/Edexcel school inside Tonk
 * could be confirmed, so stripSchools is empty and schoolClusters point to Jaipur, about 95 km north.
 * Home visits are not offered here (homeTuition: false in plan.ts).
 */
export const tonk: CitySeoPage = {
  slug: "tonk",
  countryName: "Tonk",
  countryNameLong: "Tonk, Rajasthan",
  demonym: "Tonk",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and evening slots that skip the harsh summer midday, plus Sunday mornings for revision",
  lastUpdated: "2026-09-21",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  geo: { latitude: 26.1663, longitude: 75.7885 },
  alternateNames: ["Tonk Rajasthan", "Tank", "Nawabi Nagari"],
  wikipedia: "https://en.wikipedia.org/wiki/Tonk,_Rajasthan",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tonk | Online Home Tuition, Free Trial",
  metaDescription:
    "IB and IGCSE tutors in Tonk, Rajasthan: one-to-one online home tuition for DP, MYP, PYP and Cambridge or Edexcel IGCSE, timed around Tonk summers. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Tonk",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR TONK, RAJASTHAN",
  heroSubtitle:
    "Private tuition from home is what most Tonk families search for, and for the IB and IGCSE it works best as live one-to-one video lessons taken on a laptop in your own room. Tonk sits about 95 km south of Jaipur on the Banas river, and its school life runs on the Rajasthan board and CBSE. When a child needs Diploma Physics, MYP Mathematics or Cambridge IGCSE Chemistry, IB Gram supplies a subject-matched tutor online, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Tonk",
  imageAltText: "Tonk student working through an IGCSE mathematics problem with a tutor on a live video lesson at home",
  secondaryKeywords: [
    "IB tutor in Tonk",
    "IGCSE tutor in Tonk",
    "IB home tuition Tonk",
    "IGCSE home tuition Tonk",
    "IB private tuition Tonk",
    "IB Maths tutor Tonk",
    "IGCSE Maths tutor Tonk",
    "IB Physics tutor Tonk",
    "IB Chemistry tutor Tonk",
    "IB Biology tutor Tonk",
    "IB DP tutor Tonk",
    "IB MYP tutor Tonk",
    "IB PYP tutor Tonk",
    "IGCSE online tuition Tonk",
    "IGCSE Physics tutor Tonk",
    "Cambridge IGCSE tutor Tonk Rajasthan",
    "Edexcel IGCSE tutor Tonk",
    "online home tuition Tonk",
    "IB tutor Civil Lines Tonk",
    "IGCSE tutor Jaipur Road Tonk",
    "IB tutor Ghantaghar Tonk",
  ],

  heroTrustPoints: [
    "Tutors are picked for your exact course and level, not for a vague IB label",
    "All lessons are live and online, because no in-person tutor network reaches Tonk",
    "The first lesson is a free trial with no strings attached",
    "IB Gram is independent of every school and examination board",
    "A written note follows each session so parents can see what was covered",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes taught" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for a Tonk family: what it actually looks like",
    paragraphs: [
      "Families in Tonk who want private tuition at home for an international syllabus usually discover a gap: local tutors know the Rajasthan board and CBSE well, but very few have taught the IB Diploma or Cambridge IGCSE. IB Gram fills that gap with online one-to-one lessons. Your child sits at home with a laptop, the tutor appears on screen with a shared whiteboard, and the lesson follows the specification the student is actually studying, from MYP criteria to Diploma internal deadlines.",
      "Tonk is a district headquarters of roughly 165,000 people, known as the Nawabi Nagari because it was the seat of a princely state until 1949. Sunehri Kothi, the Ghantaghar and the Jama Masjid shape the old city, while the Bisalpur Dam on the Banas supplies water to Jaipur as well. Many households here are in trade, government service, education or agriculture, and a growing number have relatives in Jaipur, Delhi or the Gulf who talk about international schooling.",
      "As far as we could confirm, Tonk has no IB World School and no Cambridge or Edexcel IGCSE school inside the city. Students who follow these curricula either travel to Jaipur, board at a school elsewhere, or study through an online school and lean on tuition for the teaching gaps. That is why this page is honest about the format: tutors do not visit homes in Tonk. Home visits run only in Gurugram and parts of Delhi NCR.",
      "IB Gram is an independent tutoring service, not connected to the IB, Cambridge, Pearson or any school named here. Tutors coach concepts, technique and exam writing. They never write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework for a student. Contact us on WhatsApp at +91 7439 368 115 or at ibgram24@gmail.com to arrange a trial lesson.",
    ],
  },

  programmesIntro:
    "Whatever stage your child has reached, the tutor is chosen for that stage. Here is how each IB programme maps to a Tonk student's school years, and where Tonk families tend to meet it.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Inquiry-led primary learning built around units of inquiry, with maths, language and science woven into themes. Our tutors support reading, number sense and the written reflection habits that the exhibition later needs.",
      countryNote:
        "Tonk has no PYP campus that we could confirm, so PYP tuition here usually helps a child preparing for entry to a Jaipur school or following an online primary programme.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of concept-driven subjects assessed against criteria rather than a single paper. Tutors coach the command terms, criterion wording and the personal project routine without doing any of the graded work.",
      countryNote:
        "A Tonk child moving into MYP from a Rajasthan board or CBSE classroom often needs the most help with open-ended criterion tasks, which recall-based schooling seldom trains.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Higher or Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring here is subject by subject, with past-paper technique and clear explanations for the topics students find slippery.",
      countryNote:
        "Diploma students linked to Tonk are typically at a boarding school or an online school, and use evening video lessons to keep a difficult subject on track around a heavy timetable.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway pairing two or three Diploma courses with a career-related study and a reflective project. We support the Diploma course components and the language and study-skills side.",
      countryNote:
        "CP is rare in this part of Rajasthan. Families asking about it usually want to compare it with the Diploma, and a trial call is a sensible place to do that.",
    },
  ],

  subjectsIntro:
    "IB Gram tutors teach the subjects below at Standard and Higher Level where the course allows. If your child studies something not listed, message us and we will say honestly whether we can staff it.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof-flavoured algebra for students heading to engineering, economics or pure science." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology-supported problem solving for students whose degree leans towards data, business or the life sciences." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through to fields and quantum topics, with the data-based questions that trip up students who only memorise formulae." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, organic pathways and equilibrium, taught with the calculation habits Paper 2 rewards." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology to ecology, including the long-answer structure and the practical reasoning that examiners look for." },
    { name: "Economics", levels: "SL and HL", description: "Microeconomics, macroeconomics and the global economy, with diagram accuracy and evaluation drilled until it is automatic." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study reading, formula recall and the structured argument needed for extended responses." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and Java-style thinking, plus the theory papers that reward precise definitions." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis, comparative writing and the oral, coached without writing assessed work for the student." },
    { name: "Hindi A and Hindi B", levels: "SL and HL", description: "Literary analysis or language acquisition in Hindi, helpful for students who are fluent speakers wanting exam precision." },
    { name: "History", levels: "SL and HL", description: "Source evaluation, essay structure and case-study depth for the twentieth-century world topics." },
    { name: "Psychology", levels: "SL and HL", description: "Studies, evaluation and the research-method reasoning that separates a middling answer from a strong one." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A cross-disciplinary course covering ecosystems, resources and human impact, popular with Diploma students balancing science and humanities." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE tuition covers Core and Extended tiers. The tutor confirms your child's board and syllabus code in the first session, since papers differ between the two.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with timed papers and marks-per-step practice." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "A stretch course in calculus and functions for students eyeing A Level or IB Mathematics HL." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity, waves and thermal physics, plus the alternative-to-practical questions." },
    { name: "IGCSE Chemistry", levels: "Core and Extended", description: "Bonding, reactions, the periodic table and organic basics, with calculation practice." },
    { name: "IGCSE Biology", levels: "Core and Extended", description: "Cells, transport, genetics and ecosystems, with clear diagrams and short-answer discipline." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Directed writing, narrative and descriptive composition, and summary skills." },
    { name: "IGCSE English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking support for students whose home language is Hindi or Urdu." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core and Extended", description: "Reading comprehension, composition and grammar in Hindi, taught by a native-speaking tutor." },
    { name: "IGCSE Urdu as a Second Language", levels: "Core and Extended", description: "Language practice for families in Tonk whose heritage language is Urdu, where a tutor is available." },
    { name: "IGCSE Economics", levels: "Extended", description: "Basic economic problems, markets and government policy, with data-response practice." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Business activity, marketing and finance, with case-study questions." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Programming logic, pseudocode and computer systems theory." },
  ],

  tutorsIntro:
    "These tutors teach Tonk students online, each with a stated subject, level and syllabus, so you can see who would teach your child before the free trial.",
  regionsTitle: "Tonk neighbourhoods we teach into, and how they shape lesson timing",
  regionsIntro:
    "Lessons happen on a screen, so the neighbourhood does not decide whether a tutor can reach you. It still matters for evening power cuts, internet quality and school end times, which is why these notes are included.",
  regions: [
    { name: "Ghantaghar and the old city", note: "Dense lanes around the clock tower where the internet can vary by lane. A wired router near the study table helps, and evenings are busiest with market noise, so we suggest a closed room." },
    { name: "Sunehri Kothi neighbourhood", note: "Historic area near the well-known gilded mansion. Families here often have older siblings in Jaipur colleges, which makes conversations about IB or IGCSE comparatively natural." },
    { name: "Civil Lines", note: "Government housing and district offices sit close by, and transferable officials' children sometimes move between Rajasthan towns mid-year. A tutor who follows the child through a move is useful." },
    { name: "Jaipur Road", note: "The northern approach towards Jaipur. Students from this side are the likeliest to be preparing for admission to a Jaipur international school." },
    { name: "Bisalpur Road", note: "The road towards the Bisalpur Dam. Residential expansion is recent here, so ask your broadband provider about fibre before choosing a lesson slot." },
    { name: "Banas riverside colonies", note: "Low-lying areas along the river. During heavy monsoon days road access is slow, but online lessons continue unless power fails." },
    { name: "Station Road", note: "A commercial and residential strip of shops and coaching classes. Traffic peaks at school closing, so we set lessons after children reach home." },
    { name: "Kotwali and Bara Bazaar", note: "Traditional trading quarter with joint families. A shared family laptop is common, so we agree a fixed lesson slot to avoid clashes." },
    { name: "Jama Masjid quarter", note: "A heritage area with a strong Urdu and Arabic tradition. Students here may want Urdu or Hindi alongside their IGCSE core subjects." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Jaipur, western and Sirsi Road side",
      note: "Tonk itself has no confirmed IB or IGCSE campus, so families look 95 km north to Jaipur. This school sits on the western edge of that city.",
      schools: ["Sanskar School, Sirsi Road"],
    },
    {
      city: "Nearby: Jaipur, Ajmer Road corridor",
      note: "The south-western corridor is the nearest to families driving in from Tonk on the Sanganer side. Both schools offer an international curriculum and are worth checking directly.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Jaipur, Mansarovar and Durgapura",
      note: "The southern colonies are the closest end of Jaipur to Tonk Road. Confirm each school's current curriculum and admission windows with the school itself.",
      schools: ["India International School, Mansarovar", "Seedling Modern International Academy, Durgapura"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and has no connection with the schools named above, the International Baccalaureate, Cambridge University Press and Assessment or Pearson. School names appear only as context for where Tonk families may look, and curricula and admissions change, so confirm details with each school directly.",

  modesIntro:
    "In Tonk the question is not whether a tutor comes to your house, because none does. The real choice is how you want the online lessons arranged around school, summers and exams.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description:
        "A regular slot each week with the same tutor, who keeps a running record of what your child knows and what still needs work.",
      bullets: [
        "Fixed day and time that suit your school routine",
        "Live whiteboard and shared past papers",
        "A short written note after every session",
        "Available for PYP, MYP, DP, CP and IGCSE",
      ],
    },
    {
      title: "Exam-season intensives",
      description:
        "A concentrated run of lessons before a specific IB or IGCSE session, aimed at timed papers, mark schemes and the topics costing the most marks.",
      bullets: [
        "Planned backwards from the exam date",
        "Weekly full-paper practice with feedback",
        "Can be added to weekly tuition",
        "Sensible before the May and November sessions",
      ],
    },
    {
      title: "Bridge tuition for a board switch",
      description:
        "A short programme for a child moving from the Rajasthan board or CBSE into an IB or IGCSE classroom, teaching how answers are written under the new system.",
      bullets: [
        "Command words and criterion language",
        "Bridging gaps from earlier chapters",
        "Guidance on how to prepare for entrance interviews at Jaipur schools",
        "Continues if the family relocates",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Tonk chooses IB or IGCSE, and why does online tuition suit them?",
      paragraphs: [
        "Online tuition suits Tonk families because the IB and IGCSE tutors who know a particular subject do not live in every district town. A video lesson brings a specialist to the study table without a two-hour road trip to Jaipur. That matters for a parent who works long hours in a shop or government office and cannot escort a child to another city every week.",
        "The families who look at these curricula in Tonk fall into a few groups. Some have a child who has joined, or hopes to join, an international school in Jaipur and wants a head start. Others are government or bank employees whose postings may take them anywhere, and who prefer a syllabus that travels between countries. A third group has relatives abroad and eventually wants a university outside India.",
        "Another strand is families whose older children have already left for hostels in Jaipur, Kota or Delhi. They have seen how heavy a single-syllabus route can be and want their younger child to have options. IGCSE, in particular, is seen as a gentler entry to international study than jumping directly into the Diploma.",
        "Whichever group you belong to, the practical checklist is short: identify the exact board and course code, ask the tutor about their own teaching history with that syllabus, and request a trial. The rest, including scheduling, materials and progress notes, is handled by IB Gram in writing so nothing depends on memory.",
      ],
      bullets: [
        "Specialist subject tutors without a journey to Jaipur",
        "Evening lessons that fit shop and office hours",
        "Continuity if a posting or transfer moves the family",
        "Written notes so both parents can follow progress",
      ],
    },
    {
      heading: "Rajasthan board, CBSE, IB and IGCSE in Tonk: what genuinely differs?",
      paragraphs: [
        "Most Tonk students study under the Rajasthan Board of Secondary Education or CBSE. Both reward accurate recall of a fixed textbook, and both are settled in their exam pattern. The IB and IGCSE ask a different question: can the student apply an idea to a fresh situation and explain their reasoning in writing? That difference is where tuition earns its keep.",
        "The table below compares the four routes on the points parents usually ask about. It is a summary, not a recommendation, and each school's own rules always come first.",
        "A student moving from Rajasthan board science to IGCSE Physics, for example, finds fewer definitions to learn but more data-handling and unfamiliar contexts. A student moving from CBSE maths to IB Maths AA finds that proof and justification carry marks, not only the final number.",
        "None of these routes is superior in every case. What matters is the fit with the child's strengths and the family's plans. Tonk parents who are unsure can ask for a free trial lesson, where a tutor will show what a typical IB or IGCSE question looks like and how the child copes with it.",
      ],
      table: {
        caption: "Board comparison for Tonk families",
        columns: ["Board", "Assessment style", "Typical route from Tonk", "University fit"],
        rows: [
          ["Rajasthan Board (RBSE)", "Textbook-centred written papers", "Local schools across the district", "State universities and national entrance tests"],
          ["CBSE", "Structured papers with some competency questions", "CBSE schools in Tonk and Jaipur", "CUET-UG, JEE Main, NEET"],
          ["IGCSE (Cambridge or Edexcel)", "Application questions, coursework in some subjects", "Jaipur schools, boarding, or online school", "Leads to A Level, IB Diploma or CBSE Class 11"],
          ["IB Diploma", "Six subjects plus TOK, Extended Essay and CAS", "Jaipur schools, boarding, or online school", "Indian and overseas universities with AIU equivalence"],
        ],
      },
    },
    {
      heading: "What decides the cost of IB or IGCSE tuition in Tonk?",
      paragraphs: [
        "IB Gram does not publish a price list, because the rate depends on details that change from student to student. We give a written quote before you book, so you can compare it calmly and decline without pressure. The free trial lesson comes first, so you see the teaching before any payment.",
        "The biggest factor is the level and subject. A Diploma Higher Level Physics tutor with years of examining experience is a scarcer resource than a tutor for IGCSE English. Programme also matters: PYP tutoring for a younger child carries a different rate from an intensive Diploma exam-preparation block.",
        "Frequency and duration come next. One weekly hour, two weekly hours, or a daily sprint before an exam produce very different totals. Some Tonk families start with one lesson a week and increase it as the exam session nears, which spreads the cost more sensibly than a heavy block at the end.",
        "Cost comparisons should also account for what is not included in a low quote: travel time to Jaipur, missed school, or a generalist who has never taught the specific syllabus. Ask any provider about materials, session notes and what happens if the fit is wrong. At IB Gram a tutor change is available if your child does not click with the first match.",
      ],
      bullets: [
        "Level: PYP, MYP, IGCSE or Diploma HL and SL",
        "Subject scarcity and tutor experience",
        "Number and length of weekly lessons",
        "Seasonal blocks before exam sessions",
      ],
    },
    {
      heading: "Online home tuition, coaching classes, private tutors or self-study: how do they compare in Tonk?",
      paragraphs: [
        "For an IB or IGCSE student in Tonk, the four common options differ mainly in subject expertise and flexibility. Local coaching centres are strong on JEE, NEET and board preparation, but they rarely teach the IB or IGCSE syllabus with its command terms and internal assessment structure.",
        "Private tutors in Tonk are usually excellent for Rajasthan board and CBSE subjects. A few may be willing to learn a new syllabus, but a child's exam window does not leave much time for a tutor to learn alongside them. Self-study using past papers works for disciplined students, but it leaves no one to correct a misunderstanding.",
        "Online one-to-one tuition, by contrast, lets IB Gram match a tutor who has already taught the exact course. The lesson happens on a screen at home, which is why we describe it as online home tuition. It removes travel, works around summer heat, and adds a written record.",
        "The table below sets these options side by side. Many students combine them, for instance keeping a JEE coaching batch while adding IB Gram lessons for the international subjects.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Tonk",
        columns: ["Option", "Strength", "Limitation", "Fit for IB or IGCSE"],
        rows: [
          ["Online one-to-one tuition (IB Gram)", "Tutor matched to the exact syllabus and level", "Needs a laptop and steady internet", "Strong"],
          ["Local coaching centre", "Group energy and exam-style discipline", "Seldom covers IB or IGCSE content", "Limited"],
          ["Private tutor at home in Tonk", "Familiar, flexible timing", "May not know the international syllabus", "Depends on the tutor"],
          ["Self-study with past papers", "Low cost and self-paced", "No one to fix misconceptions", "Works only with discipline"],
        ],
      },
    },
    {
      heading: "Tonk's school year, festivals and summers: when should IB or IGCSE lessons be planned?",
      paragraphs: [
        "Tonk has a hot semi-arid climate. May and June can be punishing, and daytime study in a room without cooling is difficult. We usually place lessons after four in the afternoon or in the evening, and keep Sunday mornings for revision when the house is quiet.",
        "The monsoon arrives around July and continues into September. It can interrupt power and mobile data for short stretches. We recommend a mobile hotspot as a backup, and tutors are used to a call dropping and reconnecting without losing the thread.",
        "Festival weeks affect study more than most parents expect. Diwali, Eid, Teej, Gangaur and Muharram each change household schedules. Building these into the plan avoids a bunch of missed sessions and last-minute cramming, and tutors can shift lessons earlier if a week is heavy.",
        "The table below shows the exam sessions most relevant to Tonk families. Boards publish their own timetables, so always check the current one on the official site before planning.",
      ],
      table: {
        caption: "Exam sessions and planning windows",
        columns: ["Session", "Typical timing", "What to do beforehand"],
        rows: [
          ["IB Diploma May session", "May, results in July", "Start intensive paper practice by January"],
          ["IB Diploma November session", "November, results in January", "Plan a summer revision block after the May holidays"],
          ["Cambridge IGCSE May-June series", "May to June", "Finish the syllabus by February, then papers"],
          ["Cambridge IGCSE October-November series", "October to November", "Use the summer break for a full syllabus pass"],
          ["Pearson Edexcel IGCSE", "January, May-June and October series", "Confirm the series your school enters"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE result take a student from Tonk?",
      paragraphs: [
        "An IB Diploma or IGCSE result opens several routes, and it is worth mapping them early. For students who want to study in India, the Association of Indian Universities issues equivalence for the IB Diploma. Universities set their own rules, so eligibility for a specific course should be checked with that institution.",
        "CUET-UG accepts IB students, and the exact subject combinations that count for a programme are set by each participating university. For engineering and medicine, JEE Main and NEET have their own eligibility conditions, and IB or IGCSE students must read the current information bulletin from the National Testing Agency each year.",
        "Many Tonk families also think of Jaipur's private universities as a next step, and a smaller group of students aims for the United Kingdom, Canada, the United States, Australia or Singapore. IB and A Level results are widely understood overseas, and predicted grades matter at application time.",
        "IGCSE is usually a two-year stepping stone. After Class 10 equivalent, students choose A Level, IB Diploma or move into CBSE Class 11. Subject choices at IGCSE, particularly Extended Mathematics and the separate sciences, keep those doors open, which is why tutors work from the target pathway backwards.",
      ],
    },
    {
      heading: "How should a Tonk student choose between IB Maths AA and AI, and prepare for the sciences?",
      paragraphs: [
        "IB Mathematics: Analysis and Approaches suits students who enjoy algebra, calculus and rigorous argument. It is the usual choice for engineering, physics and mathematics degrees. Applications and Interpretation is built around modelling and statistics, and is a natural fit for economics, business, psychology and many life science courses.",
        "The choice should be made with the target degree in mind, not just current comfort. A student from a CBSE or Rajasthan board background who is strong in algebra can handle AA, but should expect proof-style questions to feel new in the first term. A tutor can spot the gaps quickly in a trial session.",
        "In the sciences, IB Physics, Chemistry and Biology combine content with practical reasoning and an internal investigation. Students used to textbook chapters find the data-based questions demanding. Tutors work on graph interpretation, uncertainty and structured explanations, without writing any part of the internal assessment.",
        "Higher Level science asks for real time. If a student is taking two HL sciences, it makes sense to place lessons in the subject that is behind rather than spread evenly. Regular short quizzes shared through the whiteboard help keep learning steady between lessons.",
      ],
      bullets: [
        "AA for engineering, physics and maths-heavy degrees",
        "AI for economics, business, psychology and data-linked fields",
        "HL sciences need weekly attention, not seasonal cramming",
        "Tutors guide investigations but never write the assessed work",
      ],
    },
    {
      heading: "Is IGCSE Core or Extended the right tier for a Tonk student?",
      paragraphs: [
        "Core and Extended are two tiers of the same subject, and the tier decides the highest grade a student can earn. Core papers cap the available grades lower, while Extended papers open the full range. Schools usually decide the tier, but families can ask about it at the start of the course.",
        "For a student planning to continue into A Level or IB Diploma sciences and mathematics, Extended is the sensible choice. Core suits a student who wants a solid pass and a lighter workload, or who may switch back to CBSE for Class 11.",
        "Subject combinations matter too. Combined Science is a gentler load than three separate sciences, while separate Physics, Chemistry and Biology give a much better base for IB or A Level. Additional Mathematics is a bridge to higher study, best taken with Extended Mathematics.",
        "IB Gram tutors help a family think through these choices in the trial session. A student from Tonk who is currently in a Rajasthan board classroom can try a sample IGCSE question, and the tutor will explain what preparation would be needed to be comfortable at the Extended tier.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Write to us on WhatsApp or email with the student's class, board, subjects and any deadlines." },
    { title: "Get matched", description: "We shortlist a tutor with direct experience of that exact syllabus and share their background." },
    { title: "Take a free trial", description: "A live online lesson with the tutor, so the student and parent can judge the teaching first." },
    { title: "Receive a written quote", description: "The rate and lesson plan are sent in writing before anything is booked." },
    { title: "Start and review", description: "Weekly lessons begin, a note follows each session, and the tutor can be changed if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Specialists, not generalists", description: "Each tutor is chosen for one syllabus and level, so the teaching is precise from the first lesson." },
    { title: "Honest about format", description: "Lessons are online. We never suggest a tutor will turn up at a home in Tonk." },
    { title: "Free first lesson", description: "You see the teaching and the fit before spending anything." },
    { title: "Written notes each time", description: "Parents get a short record of what was covered and what to practise next." },
    { title: "Tutor change on request", description: "If the chemistry between student and tutor is off, we switch, no awkward conversation needed." },
    { title: "Independent guidance", description: "We are unconnected to any school or board, so advice follows the student's needs, not a school's interest." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors in Tonk?", answer: "Yes, online. IB Gram tutors teach IB and IGCSE students in Tonk through live one-to-one video lessons. They are based in India and teach in Indian Standard Time. No tutor visits homes in Tonk, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. Your child studies from home on a laptop, and the tutor is matched to the exact subject and level." },
    { question: "Is there IB home tuition in Tonk?", answer: "Online home tuition is available, in-person is not. Your child takes private, one-to-one IB lessons at home over video, which gives the convenience families expect from home tuition. Tutors do not travel to Tonk. If you need a face-to-face tutor, that is currently possible only in Gurugram and parts of Delhi NCR, so we would suggest the online route." },
    { question: "Is there an IB or IGCSE school in Tonk?", answer: "We could not confirm one. As far as we know, no IB World School or Cambridge or Edexcel IGCSE school operates inside Tonk. Families usually look at Jaipur, about 95 km north, or at boarding schools and online schools. Please check directly with any school, because offerings change, and treat our school list as context, not a recommendation." },
    { question: "How much does IB or IGCSE tuition cost in Tonk?", answer: "We do not publish fixed prices because the rate depends on the level, subject, tutor experience and lesson frequency. A written quote is shared before you book. The first lesson is a free trial, so you can judge the teaching first. Ask us for a quote on WhatsApp and we will reply with a clear breakdown." },
    { question: "Can my child take a free trial lesson?", answer: "Yes, every new student gets a free trial lesson. It is a real live session with a matched tutor, not a demo video. The tutor will look at a typical question from your child's course, and you can judge whether the teaching style works. There is no obligation to continue after the trial." },
    { question: "Which IGCSE boards do you cover?", answer: "We cover Cambridge IGCSE and Pearson Edexcel IGCSE. Tutors confirm your child's syllabus code in the first session, since papers and mark schemes differ between boards. Subjects include Mathematics, Additional Mathematics, the sciences, English, Hindi, Urdu, Economics, Business Studies and Computer Science, subject to tutor availability." },
    { question: "Do tutors help with IAs, the Extended Essay or coursework?", answer: "Tutors coach; they do not write. They can explain what a criterion asks for, review structure and give feedback on a draft the student wrote. They never write or rewrite Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. That protects the student's integrity and the value of the grade." },
    { question: "What are the lesson timings for Tonk students?", answer: "Lessons run on Indian Standard Time, usually late afternoon, evening or weekends. Tonk summers are hot, so many families avoid midday sessions from April to June. We fix a weekly slot around school hours and shift it around festivals, exams or travel when you tell us in advance." },
    { question: "My child is in a Rajasthan board or CBSE school. Can they still learn IB or IGCSE content?", answer: "Yes, and this is a common case. Students preparing to move to a Jaipur international school, or following an online IGCSE course, use bridge tuition to learn the new style of answering. A tutor begins with the gaps in earlier chapters and then builds towards the syllabus." },
    { question: "What equipment does an online lesson need?", answer: "A laptop or tablet, a stable internet connection and a quiet corner are enough. A pen and paper, or a tablet with a stylus, help the tutor see working. We suggest a mobile hotspot as a backup in Tonk during monsoon storms or power cuts, so a lesson can continue without a long break." },
    { question: "Can a tutor be changed if my child does not like the first match?", answer: "Yes. If the fit is not right, tell us and we will arrange a different tutor at no extra charge for the change. Teaching style matters a great deal for a teenager, and a mismatch is nobody's fault. Most families settle into a good match within the trial or the first couple of weeks." },
    { question: "Does IB Gram cover the Diploma Programme sciences?", answer: "Yes, Physics, Chemistry and Biology are taught at Standard and Higher Level by subject-matched tutors. Lessons cover content, calculation practice, data-based questions and exam technique. Tutors guide the student on investigations but do not write the internal assessment, which must be the student's own work." },
    { question: "Is the IB accepted by Indian universities?", answer: "Broadly yes. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG accepts IB students subject to each university's subject rules. For JEE Main and NEET, eligibility depends on the current NTA bulletin, so check the latest rules before choosing subjects." },
    { question: "Which subjects are most in demand from Tonk students?", answer: "Mathematics, Physics, Chemistry and English are the requests we expect most, in line with the engineering and medical interests common in Rajasthan. Economics and Business also draw interest from trading families. If a subject is uncommon, message us and we will tell you honestly whether we can staff it." },
    { question: "How do I get started with IB Gram in Tonk?", answer: "Message us on WhatsApp at +91 7439 368 115 or email ibgram24@gmail.com with your child's class, board, subjects and goals. We reply with a suggested tutor and a time for the free trial. After the trial you receive a written quote, and lessons begin only when you are ready." },
    { question: "Can a younger child in PYP or MYP get tuition too?", answer: "Yes, we teach PYP and MYP as well as the Diploma and IGCSE. For younger children, lessons are shorter, more visual and paced to attention span. Parents can sit in during early sessions. Tutors support reading, number work and the reflective habits these programmes value, without doing graded projects for the child." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Overview of IB and IGCSE tutoring across India and abroad." },
    { label: "Tutoring across India", href: "/india/", description: "See how online IB and IGCSE tuition works in other Indian cities." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The one place where in-person home visits are available, alongside online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse the IB subjects our tutors teach." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subject-by-subject IGCSE support for Cambridge and Edexcel." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Detail on the AA and AI courses." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles and backgrounds." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "Jaipur IB and IGCSE tuition", href: "/jaipur/", description: "The nearest large city with international schools, 95 km north of Tonk." },
    { label: "Ajmer IB and IGCSE tuition", href: "/ajmer/", description: "Another Rajasthan city served through online lessons." },
  ],

  closingHeading: "Ready to try an IB or IGCSE lesson from home in Tonk?",
  closingBody:
    "Send us your child's class, board and subjects on WhatsApp at +91 7439 368 115 or write to ibgram24@gmail.com. We will suggest a matched tutor, arrange a free trial lesson online and put the rate in writing before you decide anything.",
};
