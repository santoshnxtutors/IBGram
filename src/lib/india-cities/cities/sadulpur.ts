import type { CitySeoPage } from "../types";

/**
 * /sadulpur/ - IB and IGCSE tutoring page for Sadulpur (Rajgarh), Churu district, Rajasthan. No school
 * here is confirmed for IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters use Jaipur
 * and Sikar-district names already verified on the Jaipur and Sikar pages. All lessons online.
 */
export const sadulpur: CitySeoPage = {
  slug: "sadulpur",
  countryName: "Sadulpur",
  countryNameLong: "Sadulpur (Rajgarh), Rajasthan",
  demonym: "Sadulpur",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons avoid the loo-heavy afternoons of May and June, RBSE exam weeks and the Teej, Gangaur and Diwali stretches when the whole household is on the move",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.64, longitude: 75.38 },
  wikipedia: "https://en.wikipedia.org/wiki/Sadulpur",
  alternateNames: ["Rajgarh Churu", "Rajgarh Rajasthan", "Sadulpur Rajgarh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sadulpur (Rajgarh) | Online Tuition",
  metaDescription:
    "Sadulpur (Rajgarh) families can book live one-to-one IB and IGCSE tuition online, timed around desert heat and RBSE exams, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Sadulpur (Rajgarh)",
  heroEyebrow: "IB & IGCSE TUITION FOR SADULPUR AND RAJGARH",
  heroSubtitle:
    "Sadulpur, also called Rajgarh in Churu district, is a railway-junction town on the edge of Shekhawati, and it has no school we can confirm for the IB or IGCSE. Families who want private tuition from home get it as a live online lesson, one student with one specialist, without a drive to Jaipur or Sikar.",
  primaryKeyword: "IB and IGCSE tutors in Sadulpur",
  imageAltText: "A student in Sadulpur, Rajasthan, following a live IB Economics lesson from home on a laptop",
  secondaryKeywords: [
    "IB tutor Sadulpur",
    "IGCSE tutor Sadulpur",
    "IB home tuition Sadulpur",
    "IGCSE home tuition Sadulpur",
    "IB private tuition Sadulpur",
    "IB Maths tutor Sadulpur",
    "IGCSE Maths tutor Sadulpur",
    "IB Physics tutor Sadulpur",
    "IB Chemistry tutor Sadulpur",
    "IB Biology tutor Sadulpur",
    "IB DP tutor Sadulpur",
    "IB MYP tutor Sadulpur",
    "IB PYP tutor Sadulpur",
    "IGCSE online tuition Sadulpur",
    "IB tutor Rajgarh Churu",
    "IGCSE tutor Rajgarh Rajasthan",
    "IB tutor Churu district",
    "online IB tutor Sadulpur Rajasthan",
    "Cambridge IGCSE tuition Rajgarh",
  ],

  heroTrustPoints: [
    "Tutors come with prior teaching of the exact subject, level and board",
    "Only online lessons run in Sadulpur; door visits exist in Gurugram and parts of Delhi NCR only",
    "Fees are given in writing after a free trial, never before",
    "Change the tutor whenever the fit is not right",
  ],
  heroStats: [
    { value: "IB + IGCSE", label: "Both international routes" },
    { value: "Class 1 to 12", label: "Age range covered" },
    { value: "IST", label: "Same clock as the tutor" },
    { value: "Trial first", label: "A lesson before a decision" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring means in Sadulpur and Rajgarh",
    paragraphs: [
      "People here use two names for the same town. Sadulpur is the railway name; Rajgarh is the tehsil name, and searches often use both. Whichever you type, the position is the same: there is a strong tradition of schooling and a strong tradition of business, but we cannot confirm any school in town that teaches the International Baccalaureate or a Cambridge or Pearson Edexcel IGCSE.",
      "Tutoring is therefore not a top-up to a school programme but a way to keep a child on track for one. The families who ask are typically business households with relatives in Jaipur, Delhi, Kolkata or abroad, employees of the railways or banks who expect a transfer, or parents who want their child ready for a boarding school elsewhere in Rajasthan.",
      "The lesson itself is live and private. A tutor teaches over video, writes on a shared board, marks work as it is done and sends a short note afterwards. Because the tutor can be anywhere in India, we can look for the person who has taught IB Physics HL or IGCSE Business Studies, instead of settling for whoever lives near the station.",
      "IB Gram is independent of the IB, Cambridge, Pearson and every school named on this page. Tutors coach and give feedback but never write Internal Assessments, Extended Essays or coursework on a student's behalf.",
    ],
    bullets: [
      "Live one-to-one lessons in English, Hindi-supported for younger learners",
      "IB PYP, MYP and DP, CP on request, and Cambridge and Edexcel IGCSE",
      "Free trial lesson, then a written rate",
      "No tutor visits in Sadulpur; in-person tuition is only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no school in Sadulpur delivers an international programme, each of these is approached as preparation. A family may be planning a transfer to Jaipur, testing whether IGCSE suits their child before committing, or supporting a child who already studies elsewhere and returns home for the holidays.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "Children learn through inquiry projects rather than by textbook chapters, and the programme ends with a self-directed Exhibition. There is no external exam. A tutor's work is supportive: encouraging reading in English, building comfort with numbers and helping a child put an idea into a short paragraph.",
      countryNote:
        "PYP support in Sadulpur mostly serves children who will move to a PYP school or who are returning from one, so lessons are short, playful and consistent.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is marked against subject criteria, and the same task might be judged on knowledge, investigation, communication and reflection. A student who is fluent in recall but unused to explaining reasoning often needs help. The final year includes a Personal Project, in which the student manages a self-chosen goal from start to finish.",
      countryNote:
        "A Sadulpur student moving from an RBSE or CBSE school to an MYP classroom usually needs help with written English and with the criterion style of science reports.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, three at Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. The scored maximum is 45 points, exams take place in May or November, and internal assessment carries a set share of each subject grade. Steady weekly work beats a last-minute sprint.",
      countryNote:
        "DP students from Rajgarh generally study in a boarding or day school in Jaipur or elsewhere, and use online tutoring on weekends and during vacation.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP combines two or more Diploma courses with a career-related study and a core of personal skills and a reflective project. Few schools in India run it, but the Diploma subjects inside are taught to full depth.",
      countryNote:
        "We rarely receive CP requests from Sadulpur; when they arrive, the Diploma courses are handled as for any DP student.",
    },
  ],

  subjectsIntro:
    "The more exact the request, the better the match. 'IB Maths' could mean Analysis and Approaches at Higher Level or Applications and Interpretation at Standard Level, and each needs a different tutor. Business-minded Sadulpur families tend to ask for the following.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for the mathematically inclined; tutors build fluency, then teach students to write reasoning clearly for the longer papers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling with technology, a natural choice for students heading to business or social science." },
    { name: "IB Economics", levels: "HL / SL", description: "A popular pick in a trading town. Students learn to draw exact diagrams and to link theory to examples such as agricultural markets, small-town trade and rail freight." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers, finance tools and a research project on a real firm, which suits students who grew up around family enterprises." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields with clear reasoning, plus support for the internal investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, bonding, energetics and organic reactions, backed by data-booklet practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with attention to how command terms shape answers." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Logic, algorithms and a structured internal solution." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of texts and comparative essays for students whose home language is Hindi or Rajasthani." },
    { name: "IB Hindi A: Literature", levels: "SL / HL", description: "For students who want to keep Hindi as a first language and study set texts in depth." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies and fieldwork; arid regions and water use offer natural material." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking and sustainability, using desert ecosystems and water scarcity as anchors." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and structured essays." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research studies and long-answer writing." },
  ],

  igcseSubjectsIntro:
    "Decide the board first. Cambridge and Pearson Edexcel share subject names but not paper layouts, and a tutor must know which one the student will sit. Common requests from this part of Rajasthan are listed below.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge Maths in two tiers. Extended students practise algebra, trigonometry and shape work with full method shown." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus and vectors early, valuable for students aimed at IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's two-paper Maths, with method marks and familiar question types across the years." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Motion, electricity, waves and thermal physics." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, organisms, inheritance and ecosystems." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, finance and marketing; a natural fit for a business-family student." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand and supply, government and trade, with data questions." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, statements and ratios, practised through worked examples." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for students who use Hindi or Rajasthani at home." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Language skills to add to a strong subject profile." },
  ],

  regionsTitle: "Sadulpur and Rajgarh neighbourhoods our tutors support online",
  regionsIntro:
    "The location of a home does not change who can teach your child. It does matter for timing, power supply and household routine, so we note how each part of town and its neighbouring villages typically organises study time.",
  regions: [
    { name: "Station Road and the railway junction area", note: "Sadulpur is a junction town, and families near the station often include railway employees; postings can change, so continuity of tutoring across cities is valued." },
    { name: "Rajgarh old town and bazaar", note: "Traditional trading families live here; many keep shop hours until late, so lessons often follow the family's evening meal." },
    { name: "Hisar Road side", note: "A growing stretch towards Haryana; students often have relatives in Hisar and Bhiwani and think about study routes through Delhi." },
    { name: "Churu Road side", note: "Homes here look north-west towards Churu city, where many households have relatives and school links." },
    { name: "Ward colonies around the Nagar Palika", note: "Mixed residential areas with government-school families; a stable evening lesson slot fits their working week." },
    { name: "Taranagar and surrounding tehsil", note: "A neighbouring town and Rajasthan block where online tutoring saves a long trip, and where mobile data is the main connection." },
    { name: "Sridungargarh and Sujangarh belt", note: "Towns some families cover for work or schooling; online lessons work identically from any of them." },
    { name: "Village belts around Sadulpur", note: "Rural households in the Bagar region who travel to town for school; compact lessons and downloadable notes suit these homes." },
  ],

  schoolDisclaimer:
    "The schools mentioned here are given only so a family in Sadulpur can see where IB and IGCSE classrooms exist in Rajasthan. IB Gram has no tie to any of them, nor to the IB, Cambridge or Pearson. Admissions, programmes and fees should be confirmed directly with each school.",
  schoolClusters: [
    {
      city: "Local: Sadulpur and Rajgarh",
      note: "We have not confirmed any school in Sadulpur or Rajgarh that runs IB or IGCSE, and we do not list one on a guess. The local choice is RBSE, CBSE and a few ICSE schools.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur",
      note: "Rajasthan's capital is the closest large city with confirmed IB and IGCSE schools. It is several hours away by road or rail, so it works as a boarding or relocation choice.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur", "Sanskar School, Sirsi Road"],
    },
    {
      city: "Nearby: Shekhawati (Laxmangarh, Sikar district)",
      note: "A residential school in the Shekhawati belt that appears on our Sikar page, closer to Sadulpur than Jaipur is.",
      schools: ["Mody School, Laxmangarh"],
    },
  ],

  modesIntro:
    "The format is the same for every Sadulpur student, live and one-to-one on a screen. What changes is the pace. Some families choose one weekly lesson all year, some choose a term plan with written notes, and some book a run of intensive lessons before an exam.",
  modes: [
    {
      title: "One lesson a week, all year",
      description:
        "A fixed slot with the same tutor. The child works through the syllabus, brings homework for marking and asks questions while they are fresh.",
      bullets: [
        "A tutor matched to subject, level and board",
        "Sessions of about an hour",
        "Working done on a shared board",
        "Works for DP, MYP and IGCSE",
      ],
    },
    {
      title: "Term plan and notes for parents",
      description:
        "Each term has a topic list, and after each lesson a short written note tells you what was done and what is next.",
      bullets: [
        "Notes readable without a subject background",
        "Reviewed with you every few weeks",
        "Good alongside school or coaching",
        "Extra sessions added before tests",
      ],
    },
    {
      title: "Intensive lessons before an exam",
      description:
        "In the weeks before mocks or the May and November papers, lessons become more frequent and are mostly timed papers with careful marking.",
      bullets: [
        "Papers marked to the official style",
        "Two to four lessons a week are possible",
        "Set outside RBSE weeks and major festivals",
        "Start about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Sadulpur or Rajgarh?",
      paragraphs: [
        "We could not confirm one. Sadulpur and Rajgarh have schools affiliated to RBSE and CBSE and a few that follow ICSE, but none that we can verify as offering the IB or Cambridge or Edexcel IGCSE. If a school here tells you it does, ask for its authorisation and the current list of subjects.",
        "The nearest confirmed options are in Jaipur, several hours away, and at a residential school in Laxmangarh in the Shekhawati belt. For most families, a boarding or relocation decision is what turns interest in these boards into a plan.",
        "Until then, or if the family stays, tutoring keeps the child's subject knowledge and English writing moving in the right direction. It is not a substitute for an enrolled school programme, especially for the IB Diploma, which requires a school authorised by the IB.",
        "It is worth saying plainly, because a search for 'IB tuition near me' can suggest more than exists. What we offer is online teaching by experienced tutors, not a physical class in Sadulpur.",
      ],
    },
    {
      heading: "RBSE, CBSE, ICSE, IGCSE or IB: which board suits a Sadulpur family?",
      paragraphs: [
        "The Rajasthan Board (RBSE) is the default for most local schools, with Class 10 and 12 exams in March. CBSE covers a number of private schools and offers a national syllabus that lines up with JEE and NEET. ICSE is less common here. IGCSE and IB are the international routes, reached mainly through Jaipur or a move elsewhere.",
        "The choice should follow the child's destination. A student who intends to sit JEE and study engineering in India will usually be best served by CBSE with focused coaching. One who plans a business degree in Europe or the UK, or a liberal arts programme in North America, has good reasons to consider IB or IGCSE.",
        "Equivalence matters for Indian admissions. The Association of Indian Universities issues equivalence certificates for IB and IGCSE-based results, and central universities admit IB Diploma holders through CUET-UG. State and private universities set their own rules, so check the current ones for each target.",
        "For business families, there is a practical point: IB Economics and Business Management give a strong start for a management degree, and IGCSE Business Studies and Accounting are the natural entry.",
      ],
      table: {
        caption: "Boards a Sadulpur family may compare",
        columns: ["Board", "Character", "Main exam months", "Route from Sadulpur"],
        rows: [
          ["RBSE", "State syllabus, Hindi or English medium", "Mar", "Local schools"],
          ["CBSE", "National syllabus, entrance-exam aligned", "Feb-Mar", "Private schools in town or Churu"],
          ["ICSE / ISC", "English-heavy, wide syllabus", "Feb-Mar", "Few schools nearby"],
          ["IGCSE", "Subject-focused, applied, Cambridge or Edexcel", "May-Jun, Oct-Nov", "Jaipur or online preparation"],
          ["IB Diploma", "Six subjects plus core", "May, November", "Jaipur or relocation"],
        ],
      },
    },
    {
      heading: "How is the price of IB and IGCSE tuition decided in Sadulpur?",
      paragraphs: [
        "The price is given to you in writing after the free trial. It depends on four things: the level, since IB Higher Level demands a more specialised tutor than IGCSE Core; the subject; the tutor's experience with that exact syllabus; and the number and length of lessons each week.",
        "For business families used to comparing quotations, that is a familiar approach. Two students may both take 'Maths', but one on Edexcel Foundation and the other on IB Analysis HL are buying different levels of expertise, and the rate reflects it.",
        "The costs you avoid are also part of the comparison: no travel to Jaipur for weekend classes, no rented room in a coaching hub, no hours lost on the road. Some families begin with one subject and add others once they have seen how the lessons run.",
        "Ask for the trial lesson first, and read the written rate before agreeing. There is no lock-in, and you may stop or change tutor whenever you need to.",
      ],
      bullets: [
        "IB HL or SL versus IGCSE Core, Extended, Foundation or Higher",
        "Subject and exact syllabus knowledge of the tutor",
        "Lesson length and weekly frequency",
        "Steady plan versus exam-season intensive",
      ],
    },
    {
      heading: "Online tutor, Sikar-style coaching, local teacher or self-study?",
      paragraphs: [
        "Rajasthan's coaching culture is famous, with Kota and Sikar drawing students from across India. That system is built around JEE and NEET, and a student in Sadulpur who wants that route has good options within reach. It does not extend to IB or IGCSE batches.",
        "Local teachers in Sadulpur are often excellent at RBSE and CBSE content, and for a child on that track they are the right choice. Very few, though, have taught IB internal assessments or Cambridge extended papers, so their guidance on those specifics is limited.",
        "Self-study can work for disciplined students, particularly in IGCSE Maths and sciences with plenty of past papers. It works less well for IB extended writing, because a student cannot easily see what an examiner would want.",
        "Online one-to-one tutoring is the route that brings a syllabus specialist to Sadulpur. Its requirements are a steady connection and, for younger children, a parent on hand at the start.",
      ],
      table: {
        caption: "Choosing support for IB or IGCSE in Sadulpur",
        columns: ["Route", "Strength", "Limit"],
        rows: [
          ["Online one-to-one", "Specialist in the exact syllabus", "Needs stable internet"],
          ["Sikar or Kota-style coaching", "JEE and NEET preparation", "No IB or IGCSE batches"],
          ["Local tutor", "RBSE and CBSE strength", "Few with IB or IGCSE experience"],
          ["Self-study", "Free, flexible", "No feedback on essays"],
        ],
      },
    },
    {
      heading: "The Sadulpur year: desert heat, cold winters, festivals and exams",
      paragraphs: [
        "Sadulpur lies in the semi-arid north of Rajasthan, where summers are fierce and winters can be surprisingly cold. From April to June temperatures climb, the loo winds blow in the afternoon and outdoor movement thins. Evening lessons are far more productive than anything attempted between noon and four.",
        "December and January are chilly, and dense fog can delay trains and unsettle travel plans, which affects families who send children away to school. Study-wise, though, the cold months are good for concentrated work, and many students use them to build ahead.",
        "The festival calendar is full. Holi, Gangaur and Teej fall in spring and monsoon, Diwali in autumn, and weddings fill much of the winter. A wedding season can eat several evenings a week, so a good plan schedules the heavy topics for quieter weeks.",
        "RBSE exams in March take priority for students who also attend an RBSE school, and mock exams for IGCSE or IB students at school elsewhere fall at different points in the year. The tutor's job is to coordinate, not to add stress.",
      ],
      table: {
        caption: "Seasonal planning for a Sadulpur student",
        columns: ["Months", "Conditions and events", "Study approach"],
        rows: [
          ["Dec-Jan", "Cold, fog, wedding season", "Concentrated lessons; adjust for travel delays"],
          ["Feb-Mar", "RBSE and CBSE exams, IGCSE mocks", "Light lessons around board papers"],
          ["Apr-Jun", "Extreme heat, IB May session, IGCSE May-June", "Early-evening slots; timed papers"],
          ["Jul-Sep", "Monsoon, Teej, internal assessments", "Steady work; IA coaching"],
          ["Oct-Nov", "Diwali, IGCSE and IB November sessions", "Revise before festivals"],
        ],
      },
    },
    {
      heading: "What after IB or IGCSE for a student from Sadulpur?",
      paragraphs: [
        "Within India, Delhi, Jaipur and Bengaluru are the main destinations, along with private universities such as Ashoka, Shiv Nadar and Krea, and Birla Institute of Technology and Science in nearby Pilani. Admission to many depends on the board's equivalence and on the university's own test, so read the current prospectus early.",
        "For engineering and medicine, eligibility follows subjects: JEE Main needs Physics, Chemistry and Maths, and NEET needs Biology with Physics and Chemistry. IB and IGCSE students should check the counselling rules for equivalence before choosing their subject package.",
        "Business studies is a natural direction here. IB Economics and Business Management, or IGCSE Business Studies and Accounting, help with degrees in commerce, management or finance in India or abroad.",
        "Abroad, the IB Diploma and IGCSE are read fluently by admissions officers in the UK, Canada, Australia and Europe. US colleges also look at essays and tests. Tutors help with subject strength, not application writing.",
      ],
    },
    {
      heading: "How do we teach IB Maths and sciences to a Sadulpur student?",
      paragraphs: [
        "Maths lessons start from a diagnostic: which topics the student handles quickly, and which they avoid. From there the tutor builds a sequence, mixing new material with mixed-topic practice so the student learns to recognise what a question is asking without a chapter heading.",
        "For Physics, Chemistry and Biology, the tutor concentrates on explanation. In each subject the student must justify, compare or evaluate, and a correct calculation with no reasoning earns less than it did in the state board.",
        "Internal assessment is coached but not written. A tutor can help a student pick a question that is answerable with the equipment and time available, comment on the method and highlight weak points in a draft. The student does the experiment, analysis and writing.",
        "Sadulpur students sometimes have limited access to laboratories, so tutors use simulations, sample data and video demonstrations to fill the gap, and advise on safe home-based investigations only where they are genuinely suitable.",
      ],
    },
    {
      heading: "How should a Sadulpur student choose IGCSE tiers and subjects?",
      paragraphs: [
        "Cambridge offers Core and Extended; Edexcel offers Foundation and Higher. The lower tier caps the top grade. If the student intends to take IB or A Level Maths or sciences later, aim for the upper tier from the start.",
        "The school usually assigns the tier. Where a family is preparing privately or choosing a school, a diagnostic paper in the first lesson is a good guide. It is better to be secure in the lower tier than shaky in the upper tier, but capable students should not be held back.",
        "Subject selection depends on the destination. Students headed for business benefit from Economics, Business Studies and Accounting alongside Maths and English. Those aiming for engineering or medicine should choose Maths, Physics, Chemistry and either Biology or Computer Science.",
        "Finally, choose the board and the exam session before the first lesson. The syllabus code, tier and exam date shape the plan.",
      ],
    },
  ],

  tutorsIntro:
    "Tutors for Sadulpur are chosen for the programme, subject, level or board of the individual student. Each teaches from India in IST and is introduced with a brief account of why they fit.",

  process: [
    { title: "Share the details", description: "Tell us the programme or board, subject, level, school and which evenings work in Sadulpur." },
    { title: "Meet the suggested tutor", description: "We name a tutor and explain what they have taught that makes them suitable." },
    { title: "Have a free trial lesson", description: "A real topic taught online, with no payment or commitment." },
    { title: "Agree the plan in writing", description: "Lessons per week, the rate and first-month topics are written down." },
    { title: "Continue with reviews", description: "Weekly lessons, a note after each and a change of tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Matched on the syllabus", description: "We look for prior teaching of the exact subject, level and board." },
    { title: "Plain about local schools", description: "We tell you that no school in Sadulpur is confirmed for these boards, so decisions rest on fact." },
    { title: "Trial first", description: "One lesson lets you judge before any commitment." },
    { title: "No ghost-writing", description: "Tutors coach; they do not write assessed work." },
    { title: "Visible progress", description: "Written notes and regular reviews show where things stand." },
    { title: "No lock-in", description: "You can switch tutor or stop without penalty." },
  ],

  faqs: [
    { question: "Is Sadulpur the same place as Rajgarh in Churu?", answer: "Yes. Sadulpur is the railway junction name and Rajgarh the tehsil name, and both refer to the same town in Churu district, Rajasthan. We use both in this page so that families searching under either name find the same information about IB and IGCSE tuition and the online lessons we offer." },
    { question: "Is there an IB or IGCSE school in Sadulpur?", answer: "We could not confirm one. Sadulpur has RBSE and CBSE schools, and a few ICSE ones nearby. The nearest confirmed IB and IGCSE schools are in Jaipur, with a residential school at Laxmangarh in the Shekhawati belt. Please confirm any claim with the school and the relevant board." },
    { question: "Can I get IB home tuition in Sadulpur?", answer: "You can get online home tuition: a private lesson your child attends at home, taught live by a specialist elsewhere in India. The tutor does not travel to Sadulpur. In-person tuition is limited to Gurugram and parts of Delhi NCR, and we would rather say so than let a search result suggest otherwise." },
    { question: "Which IGCSE boards do your tutors cover for Sadulpur students?", answer: "Both Cambridge and Pearson Edexcel. We match on syllabus code, like Cambridge 0580 or Edexcel 4MA1, and on tier. All lessons are online and in IST. Please tell us which board and session your child will sit, since preparation differs between them." },
    { question: "Do tutors ever come to our house in Sadulpur?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR. In Sadulpur, all lessons are online, live and private. You need a laptop or tablet, headphones, stable internet and a quiet table, and the tutor sees the child's working through a shared board." },
    { question: "What does IB or IGCSE tuition cost in Sadulpur?", answer: "The rate depends on level, subject, tutor experience and how many lessons a week you want, so we do not publish one figure. After the free trial you get a written quote and can compare it with the cost of travel, coaching or boarding. There is no obligation to continue." },
    { question: "Which schools near Sadulpur offer IB or IGCSE?", answer: "None in Sadulpur that we can confirm. Jayshree Periwal International School, Mayoor School Jaipur and Sanskar School in Jaipur appear on our Jaipur page, and Mody School in Laxmangarh appears on our Sikar page. Please check admissions and programmes with each school directly." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child has one real lesson with the proposed tutor, online, at no cost and with no obligation. You then choose whether to continue, ask for a different tutor or stop. Rates are shared in writing before any booking." },
    { question: "Can tutors help with the IB Internal Assessment?", answer: "They can guide but not write. A tutor can explain the criteria, help a student narrow a topic, review a plan and comment on a draft. The research, data and text must be the student's own, and we decline requests to write assessed work." },
    { question: "Which IB Diploma subjects can you support here?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, ESS, History and Hindi are common. Both Higher and Standard Level are covered. If your combination is unusual, ask, and we will tell you honestly whether we can staff it." },
    { question: "Do you teach IB MYP and PYP students too?", answer: "Yes. PYP lessons are short and activity-based; MYP lessons focus on criterion-based writing, science reports and the Personal Project. Each lesson ends with a short note to parents, and tutors adjust the pace to the child's age and stamina." },
    { question: "Is online tutoring as good as an in-person class in Sadulpur?", answer: "For most subjects, yes, with a stable connection. The tutor and student share a whiteboard, and the tutor watches working in real time. Since no local school teaches these boards, the real comparison is with a tutor who has not taught them." },
    { question: "How are tutors selected for Sadulpur students?", answer: "We check qualifications, recent teaching of the specific syllabus and how they explain, then match to the student's level and goals. We suggest a tutor only after we understand your requirements, and the trial lesson tests the match." },
    { question: "When should a Sadulpur student start IB or IGCSE tutoring?", answer: "Early: Grade 9 for IGCSE and Class 11 for the Diploma. Beginning early leaves time for weak areas, IA planning and mocks. A student who plans to join a Jaipur school may start a term before admission." },
    { question: "My child studies RBSE. Can tutoring help us switch to IGCSE or IB?", answer: "Tutoring can prepare a child, but a switch needs a school seat. Before a move, a tutor can help with English writing, the applied style of questions and any content gaps so that the first term is less of a shock." },
    { question: "Can lessons fit around the heat and wedding season?", answer: "Yes. Most Sadulpur families choose evenings after the day's heat has eased or weekend mornings. We plan around RBSE exams, wedding season and festivals, and shorter lessons work better than long ones in May and June." },
    { question: "What if we don't like the tutor?", answer: "Tell us and we will arrange another. Early check-ins catch problems and the written plan avoids awkward negotiation." },
    { question: "Is IB Gram affiliated with a school or exam board?", answer: "No. IB Gram is an independent tutoring service and has no tie to the IB, Cambridge, Pearson or any Sadulpur or Rajasthan school. Schools named here are for context only." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The same online model in other cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person visits are possible." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "IB programmes and subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, grading and core components." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger students." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Get in touch to begin." },
    { label: "IB and IGCSE tutoring in Sikar", href: "/sikar/", description: "A nearby Shekhawati city." },
    { label: "IB and IGCSE tutoring in Bikaner", href: "/bikaner/", description: "A larger Rajasthan city to the west." },
    { label: "IB and IGCSE tutoring in Jaipur", href: "/jaipur/", description: "The nearest city with confirmed IB and IGCSE schools." },
  ],

  closingHeading: "Book a free trial lesson for your Sadulpur student",
  closingBody:
    "Send the programme or board, subject and level, plus the evenings that suit your household in Sadulpur or Rajgarh. We will propose a tutor, explain the reasoning and arrange a free trial online. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
