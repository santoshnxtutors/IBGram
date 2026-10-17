import type { CitySeoPage } from "../types";

/**
 * /shahade/ - IB and IGCSE tutoring page for Shahada (Shahade), Nandurbar district, Maharashtra. No IB
 * or Cambridge/Edexcel IGCSE school could be confirmed in the taluka, so stripSchools is empty and the
 * clusters are labelled nearby-city groups reused from the neighbouring Nandurbar page. Online only.
 */
export const shahade: CitySeoPage = {
  slug: "shahade",
  countryName: "Shahade",
  countryNameLong: "Shahade, Maharashtra",
  demonym: "Shahade",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set around the fierce April and May heat of the Tapi plain, the cotton and banana season that keeps farm families busy, and the school vacations that Maharashtra's state board calendar dictates",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.5444, longitude: 74.4725 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahada,_Maharashtra",
  alternateNames: ["Shahada", "Shahada Nandurbar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shahade | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Shahade, Nandurbar district: DP, MYP, PYP, Cambridge and Edexcel IGCSE, live one-to-one from home, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Home Tuition in Shahade",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SHAHADE STUDENTS",
  heroSubtitle:
    "If you want private home tuition in Shahade for an IB or IGCSE student, the honest version is online one-to-one lessons taken at home on a laptop, since tutors do not travel to Nandurbar district. On the Tapi plain, where the nearest international-curriculum campus lies hours away, a tutor chosen for the exact syllabus is often the only specialist a family can reach.",
  primaryKeyword: "IB and IGCSE tutors in Shahade",
  imageAltText: "A Shahade student solving an IB Mathematics problem with a tutor during a live online lesson at home",
  secondaryKeywords: [
    "IB tutor Shahade",
    "IGCSE tutor Shahade",
    "IB home tuition Shahade",
    "IGCSE home tuition Shahade",
    "IB private tuition Shahade",
    "IB Maths tutor Shahade",
    "IGCSE Maths tutor Shahade",
    "IB Physics tutor Shahade",
    "IB Chemistry tutor Shahade",
    "IB Biology tutor Shahade",
    "IB DP tutor Shahade",
    "IB MYP tutor Shahade",
    "IB PYP tutor Shahade",
    "IGCSE online tuition Shahade",
    "IB tutor Shahada Nandurbar",
    "online IB tutor Nandurbar district",
    "IGCSE tutor Prakasha",
    "IB tutor Taloda",
    "Cambridge IGCSE tutor Khandesh",
  ],

  heroTrustPoints: [
    "Matched by exact subject, level and exam series, not by a loose IB or IGCSE label",
    "Only online: tutors never call at a Shahade home, as visits run in Gurugram and parts of Delhi NCR alone",
    "Watch a free live trial lesson before any fee is discussed",
    "Rates quoted in writing first, with a written note after every lesson",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One clock for tutor and student" },
    { value: "Free trial", label: "Decide after you watch" },
  ],

  intro: {
    heading: "Why Shahade families look beyond the local tuition market",
    paragraphs: [
      "Shahade, often written Shahada, is a taluka town on the Tapi river in Nandurbar district, in the northwest corner of Maharashtra where the Khandesh plain meets the Satpura foothills. Cotton, bananas and pulses fill the fields around it. Schools are state-board and CBSE, with ashram schools serving the wider district, and nobody teaches the IB or a Cambridge or Edexcel IGCSE syllabus that we could confirm.",
      "Private tuition in Shahade therefore means something specific for an international-curriculum student: a live online lesson, one to one, taken at home on a laptop. Tutors do not come to Shahade. Home visits are offered only in Gurugram and parts of Delhi NCR, and it would be misleading to suggest otherwise. What a Shahade family gains instead is reach, because the tutor can live in any Indian city.",
      "The households asking tend to be a mixed group. Some are doctors, traders or landowning families who want a child prepared for overseas study. Some are transferred government or bank staff with a child already halfway through IGCSE elsewhere. Others are Maharashtra state-board parents who noticed that English-medium application-based assessment opens more university doors and want a gradual switch.",
      "IB Gram is an independent tutoring service. It has no affiliation with any school in Shahade or Nandurbar, the International Baccalaureate Organization, Cambridge or Pearson. Tutors teach and mark, but never write an Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "Live one-to-one online lessons for IB and IGCSE students in Shahade",
      "Tutors chosen for subject code, level and exam series",
      "Timed to IST and to the rhythm of a farming and trading town",
      "Free trial lesson, then a written note after each session",
      "No home visits in Shahade; in-person tuition is limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught at a school in Shahade, so a student meets them through a move, a boarding place or an online school. Here is how tutoring adapts at each stage for someone studying on the Tapi plain.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning in the PYP is organised around big questions a class investigates together, finishing with the Exhibition. There are no board exams, so a tutor concentrates on comfortable reading, early number sense and helping a child put a reason into words.",
      countryNote:
        "A Shahade PYP enquiry usually comes from a family returning from a metro city where the child began an international primary school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP marks each subject against criteria rather than a single test score, and Year 5 brings the Personal Project. The hard part for new students is seeing exactly what a criterion expects, which is why sessions rework real tasks rather than revise content alone.",
      countryNote:
        "Students in Shahade often switch from Marathi-medium or semi-English schooling, so English academic writing needs steady practice from the start.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, sit beside Theory of Knowledge, the Extended Essay and CAS. The two-year course ends with written papers in May or November, and pacing the internal assessments matters as much as the final papers.",
      countryNote:
        "A Shahade Diploma student almost always studies at a school in another city or online, so tutoring follows that school's own calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs Diploma courses with a career-related study, a reflective project and a language strand. Very few Indian schools run it, so tutoring centres on the Diploma courses within the pathway.",
      countryNote:
        "Enquiries from Shahade for the CP are rare and are handled like any Diploma subject request.",
    },
  ],

  subjectsIntro:
    "Student and tutor need to agree on the course code and level before a first lesson, because the same subject name hides large differences. Only after that does the conversation turn to the exam series and the evenings a Shahade household can keep free.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suited to future engineers and scientists, with calculus and proof that reward early practice on problems the student has not seen before." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-heavy questions, with an exploration that works best on real local data such as crop yields or rainfall." },
    { name: "IB Physics", levels: "HL / SL", description: "Broad coverage means no topic can be skipped, and the investigation must show honest handling of uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic chemistry, energetics and equilibrium carry much of the paper, so these receive repeated timed practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Answers are graded against command terms, and the investigation is judged on whether the statistics support the conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and current examples earn marks; an agricultural district offers strong material on prices, subsidies and market failure." },
    { name: "IB Business Management", levels: "HL / SL", description: "A model applied to the named firm beats one recited from memory, and the research project depends on a firm willing to answer questions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text commentary, the comparative essay and the spoken component each need their own rehearsal." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Coding hours sit next to theory revision, as the internal task is judged on a program that runs and is properly documented." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "A natural fit for students who live on a river plain with real questions about water, soil and climate." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies known in depth and fieldwork with a repeatable method score better than broad, thin revision." },
    { name: "IB Marathi A", levels: "HL / SL", description: "Students usually speak the language fluently, so tutoring adds structure in literary analysis and written comparison." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Fluency at home does not turn into marks by itself, so time goes on formal text types and on how the oral is structured." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Lessons are spent arguing a position, answering a counterclaim and tying knowledge questions to situations a student has lived." },
  ],

  igcseSubjectsIntro:
    "Shahade has no Cambridge or Edexcel school we can confirm, so a candidate sits papers via a distance school or privately at an exam centre that is often in another city. Pick the board, syllabus code and tier first, since everything else follows. Cambridge papers fall in two windows each year and Edexcel adds a winter one.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students are taught to show complete working, since method marks vanish when steps are skipped." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A strong bridge to IB Maths AA, introducing calculus and vectors well before most Indian boards do." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Similar content to Cambridge with different phrasing, so practice uses Edexcel papers only." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement and units cause more lost marks than concepts, so both are drilled, along with the alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and organic topics are built alongside salt and gas tests for the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport and inheritance need longer written answers, practised under timed conditions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Students learn to move from definition to application and then evaluation in one answer." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case questions reward linking concepts to the firm described, a good fit for children from trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and trace tables are reinforced by running real Python programs." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "River, climate and agriculture topics connect to the student's own surroundings, which helps case-study recall." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed unseen-passage practice improves summary and directed writing more quickly than vocabulary lists." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Helpful for Marathi-medium students who need confidence in formal writing and speaking." },
  ],

  regionsTitle: "Shahade and Khandesh localities our online IB and IGCSE tutors work with",
  regionsIntro:
    "Lessons are online, so a locality shapes timing and context, not travel. These notes describe how the school day, local work patterns and family background in each place influence when a student can sit down to study.",
  regions: [
    { name: "Shahade town", note: "The taluka headquarters on the Tapi, with a busy market where many families trade in cotton, bananas and farm supplies, so study often starts after the evening rush." },
    { name: "Prakasha", note: "A riverside pilgrimage village known for its temples at the Tapi confluence, where festival weeks reshape the timetable." },
    { name: "Toranmal", note: "A Satpura hill area in the taluka with a cooler climate and sparse connectivity, where a wired or hotspot backup is worth keeping ready." },
    { name: "Taloda", note: "A neighbouring taluka town with a mixed farming and tribal-district population and several ashram schools." },
    { name: "Nandurbar", note: "The district headquarters, where most coaching, hospital and government services for Shahade families are found." },
    { name: "Shirpur", note: "A larger trading and education town across the district line in Dhule, with engineering and pharmacy colleges that draw Shahade students." },
    { name: "Dondaicha", note: "A market and education town in Dhule district, known for its long-standing junior colleges and a route for state-board students." },
    { name: "Dhule", note: "A bigger city to the southeast and a typical place for Shahade families to compare coaching options." },
    { name: "Navapur", note: "A border town near Gujarat, useful to note for families with ties to Surat and the textile belt." },
    { name: "Sendhwa", note: "A town across the state line in Madhya Pradesh, relevant to families who cross the border for work or relatives." },
  ],

  schoolDisclaimer:
    "Schools and places named here describe the real education map around Shahade and nothing more. IB Gram has no arrangement with any school mentioned and is not connected to the IB, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Shahade and Nandurbar district",
      note: "We could not verify any school here that teaches the IB or a Cambridge or Edexcel IGCSE. Local schooling runs on the Maharashtra State Board, CBSE and ashram school systems, so international-curriculum options are very limited.",
      schools: [],
    },
    {
      city: "Nearby: Surat",
      note: "The largest nearby city across the Gujarat border, several hours away by road, with confirmed IB and Cambridge schools for families ready to board or relocate.",
      schools: ["Fountainhead School", "P. P. Savani Cambridge International School", "Aarth Universal School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Another Gujarat city on the western rail line with a small set of confirmed IB and Cambridge campuses.",
      schools: ["Navrachana International School"],
    },
    {
      city: "Nearby: Pune",
      note: "Maharashtra's largest market for international curricula and the familiar destination for families who stay within the state, though the journey from Shahade is long.",
      schools: ["Symbiosis International School", "Mercedes-Benz International School"],
    },
  ],

  modesIntro:
    "Every plan for a Shahade student rests on one format, a live video call with a shared screen. Only the weekly load and the amount of written reporting change. Nobody attends a Shahade house, because in-person tuition is confined to Gurugram and part of Delhi NCR.",
  modes: [
    {
      title: "A steady weekly online lesson",
      description:
        "A fixed hour every week, the same face on screen, the student at their own desk. This is where most Shahade households start since teachers come from all over India.",
      bullets: [
        "Tutor can be in any Indian city",
        "For DP, MYP, PYP and IGCSE alike",
        "Papers are marked live on screen",
        "One tutor carries the student through the term",
      ],
    },
    {
      title: "Weekly lessons with a written record",
      description:
        "Alongside the weekly hour comes a brief summary after each class and a fuller check-in now and then, handy for parents tied up on farms, in clinics or behind a counter.",
      bullets: [
        "A note after every lesson",
        "A review every few weeks",
        "Works well for younger students",
        "Extra slots before mocks are easy to add",
      ],
    },
    {
      title: "A focused block before exams",
      description:
        "A denser timetable of several classes a week before the summer or autumn papers, with timed questions and fast marking, planned around Diwali and the hottest weeks.",
      bullets: [
        "Marked against the current mark scheme",
        "Feedback returns within a few days",
        "Best arranged a few weeks before the window",
        "Fitted around vacations and family events",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families around Shahade",
      paragraphs: [
        "Shahade's schooling has grown steadily around the Maharashtra State Board, with CBSE options in a few private schools and ashram schools across Nandurbar district. A search for IB World Schools or Cambridge centres in the taluka returns nothing we can confirm, so we name none. Families asking about these curricula are usually thinking about a future outside the district.",
        "Three kinds of household keep reaching out. Doctors, pharmacists and traders with a strong local base often plan overseas education for a child. Transferred officers, bank managers and police families may arrive with a student who is already partway through IGCSE. And state-board parents sometimes switch because the style of assessment, based on application and explanation, suits their child better.",
        "Distance defines the decision. Surat, Vadodara and Pune each have confirmed IB or Cambridge schools, but they are hours away, which makes boarding a serious step for a Class 9 student. Many families therefore compare boarding with an online school plus tutor, and some choose the tutor route first to test the fit before any move.",
        "What a tutor cannot do is replace a school's accreditation. Exams still need an approved centre, and registration runs through the school or centre. What tutoring does give is a weekly specialist who has actually taught the course, which is scarce anywhere in Nandurbar district.",
      ],
      table: {
        caption: "Ways a Shahade student can study IB or IGCSE",
        columns: ["Option", "Where", "What it involves"],
        rows: [
          ["Local schools", "Shahade, Taloda, Nandurbar", "Maharashtra State Board, CBSE and ashram schools; no confirmed IB or IGCSE"],
          ["Surat campuses", "Several hours by road", "Confirmed IB and Cambridge schools, usually a boarding decision"],
          ["Pune campuses", "A long journey", "The widest choice in Maharashtra, relocation or boarding"],
          ["Online school or private candidate", "From home", "Exam entry through an approved centre, tutoring added online"],
        ],
      },
      bullets: [
        "No IB or IGCSE school in Shahade could be confirmed",
        "Professional and transferred families drive most interest",
        "Tutors teach online, so location does not limit the choice",
        "Marking standards match any other Indian city",
        "Written plan in month one and a tutor change if needed",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Shahade family?",
      paragraphs: [
        "IB Gram does not publish prices. The fee for a Shahade student depends on the programme and level, the subject, the length of each session, how often lessons happen and how many years a tutor has taught the exact syllabus. The rate is given in writing after the trial lesson and before booking.",
        "Higher Level Diploma work requires more preparation time and scarcer expertise than IGCSE Core, so it usually costs more per hour. A Class 8 MYP student working on criteria-based writing sits in another band again. Online delivery means no travel charge is added for the tutor.",
        "Online tuition also saves a cost that affects Shahade families in particular: the trip. Travelling to Dhule, Nandurbar or Surat for specialist coaching takes a day and a meal or overnight stay, which quickly outweighs a lesson fee. An hour online needs nothing more than a laptop and a connection.",
        "To keep spending sensible, most families begin with one or two subjects, usually Mathematics and a science, and use the written notes after each lesson to judge whether the hours are working. If the match is wrong, the tutor is changed and the family is not charged for switching.",
      ],
      bullets: [
        "Rate depends on syllabus, level, frequency and tutor experience",
        "Quoted in writing before any booking",
        "No travel cost or lost day for the family",
        "Free trial lesson first",
      ],
    },
    {
      heading: "How do the Maharashtra State Board and CBSE compare with IB and IGCSE?",
      paragraphs: [
        "The Maharashtra State Board and CBSE are built around a prescribed textbook and a written paper that rewards accurate recall, while IGCSE and the IB ask students to apply ideas, show working and write extended answers. A student with strong HSC or Class 10 results can still find an IGCSE paper unfamiliar in its wording.",
        "Internal assessment is a second difference. State-board subjects carry limited practical or project marks, whereas IB subjects include an internal assessment worth a substantial share of the final grade, and IGCSE sciences include practical or alternative-to-practical papers. Planning a long piece of independent work is a skill many students meet for the first time.",
        "For university choices, the board matters too. The Association of Indian Universities treats IB and IGCSE-based qualifications as equivalent for Indian admission, so a student keeps access to Indian routes while gaining recognition overseas. MHT-CET and NEET have their own eligibility rules, which families should check early.",
        "Language is the quiet factor. A Shahade child who has learned science in Marathi or Hindi meets English scientific vocabulary for the first time in an IGCSE paper. Tutors deal with this by pairing each topic with its key terms and writing short answers early, well before the first mock.",
      ],
      table: {
        caption: "Maharashtra State Board, CBSE, IGCSE and IB compared for Shahade students",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Availability near Shahade", "Most local schools", "A few private schools", "No confirmed local school", "No confirmed local school"],
          ["Assessment style", "Textbook-based written papers", "Structured with some application", "Application and extended response", "Criteria-based essays and internal assessments"],
          ["Coursework", "Limited", "Projects and practicals", "Practical papers in sciences", "Internal assessment in every subject"],
          ["Entrance tests", "MHT-CET, NEET, JEE routes", "JEE, NEET, CUET", "CUET and overseas admissions", "CUET and overseas admissions"],
        ],
      },
      bullets: [
        "Application and explanation replace recall as the main skill",
        "Independent project planning is the largest adjustment",
        "English scientific vocabulary is taught alongside each topic",
        "AIU equivalence keeps Indian university options open",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors and self-study in Shahade: how do they compare?",
      paragraphs: [
        "Families in Shahade usually weigh four routes. Coaching centres in Nandurbar, Shirpur and Dhule teach group batches for the state board, MHT-CET, JEE and NEET. They are valuable for those exams, but they do not teach IB or Cambridge papers and cannot mark an IA against its criteria.",
        "Private tutors in the taluka are a second option. A good one can do a great deal for a state-board student, but very few have taught a recent IGCSE or IB syllabus, and their time is stretched across many classes and boards.",
        "Self-study is the third route and suits disciplined students who have a full set of past papers. Where it falls short is feedback: no one marks an extended answer or challenges a weak research question unless a person who knows the syllabus does.",
        "A matched online tutor combines the individual attention of a private tutor with expertise from anywhere in India. Sessions are live, past papers are marked on screen, and a written note follows each lesson. Many students keep their school and coaching timetable and add a single online lesson in the subject where precision matters most.",
      ],
      table: {
        caption: "Routes to IB and IGCSE support for Shahade students",
        columns: ["Route", "Fit to IB or IGCSE", "Attention", "Limit in Shahade"],
        rows: [
          ["Coaching centres", "Built for state board, MHT-CET, JEE and NEET", "Group batches", "No IB or Cambridge batch"],
          ["Local private tutors", "Depends on the tutor", "One to one", "Few have taught the current syllabus"],
          ["Self-study", "Whatever the student finds", "None", "No marking or feedback"],
          ["Matched online tutor", "Chosen for the exact code and level", "One to one, live", "Needs a reliable connection"],
        ],
      },
      bullets: [
        "Coaching is strong for entrance tests, weak for IB papers",
        "Feedback on long answers is what self-study lacks",
        "The tutor pool covers all of India",
        "Many students add one online lesson to a busy school week",
      ],
    },
    {
      heading: "What does a Shahade student's exam calendar and year look like?",
      paragraphs: [
        "Maharashtra's school year starts in June and ends in March or April, with a Diwali break and shorter holidays around Ganeshotsav and Holi. The IB and Cambridge calendars sit across it: IB Diploma exams in May and November, Cambridge IGCSE in May-June and October-November, and Pearson Edexcel with an extra January window.",
        "Heat is the defining feature of the Tapi plain. April and May are extremely hot, afternoons are difficult, and many families shift study to early mornings or late evenings. Power interruptions can also occur in summer, so students keep a charged laptop and a hotspot ready, and tutors are happy to rebook a class at short notice.",
        "The farming calendar matters in a cotton and banana district. Sowing before the monsoon and harvest in autumn and winter can absorb a household's attention, and older students sometimes help on the land. Scheduling around these periods keeps study regular rather than forcing missed weeks.",
        "Festivals add their own rhythm. Ganeshotsav, Diwali and Holi, which is especially important in the tribal belt of the Satpura foothills, often include travel to relatives and village gatherings. Weeks like these are planned as light sessions so that momentum is not lost before exam series.",
      ],
      table: {
        caption: "A study year for a Shahade student",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["June to September", "Monsoon, new school year, Ganeshotsav", "A good window to build foundations; expect some festival weeks"],
          ["October to November", "Diwali break and the second exam series", "Lighter weeks around Diwali, then resit preparation"],
          ["December to February", "Mild weather, harvest and mocks", "The best stretch for regular, longer lessons"],
          ["March to June", "Heat, board exams and the May-June series", "Early morning and late evening slots; heaviest revision"],
        ],
      },
      bullets: [
        "IB exams in May and November; IGCSE in May-June and October-November",
        "Heat shapes the best time of day to study",
        "Farm season and festivals are scheduled around",
        "Keep a backup connection during storms and summer cuts",
      ],
    },
    {
      heading: "Which universities can a Shahade student reach after IB or IGCSE?",
      paragraphs: [
        "A Shahade student with IB or IGCSE results can apply to Indian and overseas universities. Indian routes include central and state universities through CUET-UG, private universities that accept IB and IGCSE-based qualifications, and, for some courses, institutions that require the usual Class 12 subject combination.",
        "Closer to home, Kavayitri Bahinabai Chaudhari North Maharashtra University in Jalgaon serves the region, and the colleges at Shirpur, Dhule and Nandurbar cover engineering, pharmacy and medicine. Pune and Mumbai offer a far wider range, and Surat and Vadodara are common choices because of family and business ties.",
        "For engineering and medicine, the rules differ by examination. JEE and NEET have specific eligibility conditions for IB and international students, and Maharashtra's state counselling has its own requirements, so families should confirm the current notices with the exam bodies before finalising subjects.",
        "Abroad, students use IB or IGCSE and A Level results for UK, Canadian, US, Australian and European applications. A tutor cannot advise on admissions, but can shape subject depth and revision planning so that predicted grades and final results support the course the student wants to apply for.",
      ],
      bullets: [
        "AIU equivalence supports Indian admission with IB and IGCSE",
        "CUET-UG is open to students with relevant subjects",
        "Check JEE, NEET and MHT-CET eligibility before choosing subjects",
        "Overseas options work well with IB and A Level results",
      ],
    },
    {
      heading: "IB Maths AA and AI and the sciences for Shahade students",
      paragraphs: [
        "IB Mathematics Analysis and Approaches suits students headed for engineering, physics or economics with a mathematical core. Applications and Interpretation suits those who like statistics and modelling, such as future doctors, business students or geographers. The right choice follows the degree, not a guess about which course is easier.",
        "Paper 3 at Higher Level asks for multi-step reasoning on an unfamiliar problem. Tutors therefore introduce unseen problems early and review how a student thinks when stuck. The exploration, the internal assessment, needs a question that the student finds interesting, such as a local data set or a real measurement.",
        "The IB sciences have a core and, at HL, additional material, plus an internally assessed investigation. Students from state-board schools are often strong on memory but less practised at reading graphs, handling uncertainty and evaluating a method, so tutors work from sample data and mark-scheme language.",
        "For medicine, many students choose Chemistry and Biology at HL with Mathematics at SL. For engineering, Physics and Mathematics AA at HL with Chemistry are typical. Tutors help a family compare combinations, but the choice of subjects and the writing of any assessed work stay with the student.",
      ],
      bullets: [
        "Pick AA or AI from the intended degree",
        "Unseen problem practice starts early for HL Mathematics",
        "Investigations are coached but never written for the student",
        "Subject mixes are compared against future plans",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Shahade student take?",
      paragraphs: [
        "Mathematics and the sciences can be taken at Core or Extended tier in Cambridge IGCSE. Core caps the top grade and gives a more gradual path for students who need to gain confidence. Extended offers the full grade range and is the usual route toward IB Maths AA, A Level Mathematics or a science degree.",
        "A typical IGCSE programme includes English, Mathematics, two or three sciences, a humanities or business subject and a second language. Shahade students often add Hindi or a first-language option to a broader mix, which keeps the home language on record and brings extra confidence.",
        "Pearson Edexcel offers similar subjects under different specification codes and allows a January sitting. The board should be decided before the course starts, since past papers, mark schemes and command words differ, and switching midway wastes preparation time.",
        "Because there is no local centre for either board, candidates typically register through an approved centre in a nearby city. A tutor can confirm the codes and tier, suggest a realistic timeline and help plan practical components, while the actual registration remains the family's arrangement.",
      ],
      bullets: [
        "Extended is the usual path toward science and IB Maths AA",
        "Fix the board and code before the course starts",
        "Home-language subjects can strengthen a profile",
        "Entry runs through an approved centre",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Shahade family?",
      paragraphs: [
        "The process starts with a short brief: programme or board, subject, level, current grade and the hours a Shahade household can keep. We then look for tutors who have taught that exact course, preferring someone with recent experience of the syllabus over a generalist with an earlier availability.",
        "The free trial lesson is taught live on a real topic, and parents can sit in. It shows how the tutor explains a hard idea, whether the student speaks up and whether the pace is right. If it does not suit, nothing is owed and a different tutor is suggested.",
        "Once the family decides to go ahead, the tutor sets out a month-one plan with topics, frequency and how updates will arrive. A note follows each session, and a review every few weeks tests whether marks on practice papers are moving in the right direction.",
        "Rates are confirmed in writing, there is no long-term contract, and a tutor can be changed at any point. Tutors coach and explain but never write an IA, Extended Essay, TOK essay or coursework, so the assessed work stays the student's.",
      ],
      bullets: [
        "Shortlist by syllabus and level",
        "Free live trial, parents welcome",
        "Written first-month plan",
        "Tutor change without penalty",
      ],
    },
  ],

  tutorsIntro:
    "Teachers here cover the IB from PYP to the Diploma and both Cambridge and Edexcel IGCSE. A Shahade student is paired by syllabus and exam session, and every class is held online because nobody travels to the district.",

  process: [
    { title: "Send your brief", description: "Write or WhatsApp the board or programme, the subject, how your child is scoring at present and which hours work in a Shahade home." },
    { title: "See a shortlist", description: "A few tutors come back, each having taught that very syllabus, with a line explaining why they were picked." },
    { title: "Sit a free trial", description: "One real topic is taught over video, costs nothing and leaves you free to walk away." },
    { title: "Approve month one", description: "You receive a written outline of topics, weekly hours and progress notes, with the fee stated in black and white." },
    { title: "Settle into a rhythm", description: "Lessons continue weekly over video, are checked against results periodically, and the tutor is swapped if things are not working." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "A tutor is picked for the precise IB course and level, or the Cambridge or Edexcel specification, a child is sitting." },
    { title: "Built for a district with no local option", description: "Since nothing we could verify in Shahade teaches IB or IGCSE, matching looks across the whole country." },
    { title: "See before you commit", description: "One live trial class lets parents and child judge the teaching first-hand before deciding." },
    { title: "Work stays the student's", description: "Guidance stops short of authorship, so each IA, essay and coursework piece is the student's own words." },
    { title: "Clear written reporting", description: "Each class ends with a short written summary, and progress is discussed properly every few weeks." },
    { title: "No lock-in", description: "Fees are stated up front, nothing ties a family in for months, and changing tutor is easy." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Shahade?", answer: "Send IB Gram the programme, subject, level and exam session. We shortlist tutors who have taught that course, and because no Shahade school teaches the IB, syllabus fit matters more than location. A free trial lesson is held online before any commitment, and another tutor is suggested if the first does not suit." },
    { question: "Do IB Gram tutors come to my home in Shahade?", answer: "No, tutors do not visit homes in Shahade. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Shahade students have live one-to-one lessons online at home with a laptop and shared whiteboard, which keeps the individual attention of private tuition without anyone travelling." },
    { question: "Is there an IB or IGCSE school in Shahade?", answer: "We could not confirm one. Schools in Shahade and across Nandurbar district follow the Maharashtra State Board, CBSE or ashram school systems. The nearest confirmed IB and Cambridge schools are in Surat, Vadodara and Pune, hours away. Please verify any school directly, since offerings change." },
    { question: "How much does IB or IGCSE tuition cost in Shahade?", answer: "The rate depends on the programme and level, the subject, session length and the tutor's experience with that syllabus. IB Gram does not publish prices and quotes the rate in writing after the trial lesson. Online lessons save travel costs, and there is no long contract." },
    { question: "Can a Shahade student take IGCSE without attending a Cambridge school?", answer: "Yes. Students can join an online school that prepares for Cambridge or Edexcel, or register as private candidates through an approved exam centre, often in another city. A tutor can teach the syllabus weekly online, while exam entry is arranged separately with the school or centre." },
    { question: "Our child studies in Marathi medium. Can IGCSE still work?", answer: "It can, with a planned bridge. The first step is English scientific and mathematical vocabulary, practised through short written answers and read-aloud explanations. Tutors pair each topic with its key terms and build up to full papers gradually, which usually takes a term or two of patient work." },
    { question: "Is online tutoring enough in a place with heat and power cuts?", answer: "For most students it is, with simple preparation. Keep a charged laptop, a mobile hotspot and an early morning or late evening slot in the hot months. Sessions can be rebooked at short notice, and notes after each lesson mean nothing is lost if a class is interrupted." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every family gets a free trial lesson taught live online on a real topic from the student's syllabus, with no obligation to continue. After the trial the tutor offers a plan for the first month, and the family can carry on, adjust it or ask for a different tutor." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No. Tutors do not write IAs, Extended Essays, TOK essays or coursework. They help a student choose a workable question, read the criteria, plan data collection and respond honestly to drafts. The assessed work remains the student's own, as the IB requires." },
    { question: "Which IB Diploma subjects do you cover for Shahade students?", answer: "Both Mathematics routes at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, Environmental Systems and Societies, Geography, Marathi and Hindi, plus TOK and Extended Essay guidance. If a subject is missing, send the request and we will say honestly whether a tutor is available." },
    { question: "Do you teach MYP and PYP students too?", answer: "Yes. MYP sessions centre on criteria-based writing in Sciences, Mathematics and Language and on keeping a Personal Project on schedule. PYP sessions build reading, writing and number confidence, and support the research habits that the Exhibition needs. Both are live, one to one and online." },
    { question: "When is the best time to start tutoring?", answer: "Early in the course works well, Class 9 for IGCSE or Class 11 for the Diploma, so foundations are firm before internal exams and IA deadlines crowd the calendar. A later start can still help if lessons focus on high-value topics and timed past papers." },
    { question: "Can lessons run in the evening, early morning or at weekends?", answer: "Yes. Families in Shahade often choose early mornings in the hot months, evenings after the market rush and weekend mornings. Since lessons are online, a slot can move around a festival or farm season, and an extra session can be added before mocks with no travel." },
    { question: "We are moving from the Maharashtra State Board to IGCSE. What changes?", answer: "Mostly exam technique, not content. Command words such as explain, evaluate and justify need direct teaching, answers must show working, and coursework needs planning habits that state-board study rarely demands. A holiday spent on this before the switch makes the first term easier." },
    { question: "What if the tutor is not a good fit?", answer: "Tell us, and a different tutor is arranged. Reviews every few weeks are meant to catch a mismatch early. There is no long-term contract, so changing or stopping carries no penalty, and the rate for a new tutor is confirmed in writing first." },
    { question: "Is IB Gram connected to any school in Shahade or to the IB or Cambridge?", answer: "No. IB Gram is an independent service with no agreement with any school named on this page and no affiliation with the International Baccalaureate Organization, Cambridge or Pearson Edexcel. School names appear only to describe the education map around Shahade." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "A look at IB and IGCSE tutoring city by city across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only area where a tutor can visit the house in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "What the Diploma, MYP and PYP tutors at IB Gram teach." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tier choices and exam windows." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core, internal assessments and how grading works." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria and the Personal Project are marked." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units, transdisciplinary themes and the final Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two IB Mathematics routes." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and arrange a free trial class." },
    { label: "IB and IGCSE tutoring in Nandurbar", href: "/nandurbar/", description: "The district headquarters, in the same district as Shahade." },
    { label: "IB and IGCSE tutoring in Dhule", href: "/dhule/", description: "The larger city to the southeast." },
    { label: "IB and IGCSE tutoring in Nashik", href: "/nashik/", description: "A bigger Maharashtra city with a private-candidate route." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Shahade",
  closingBody:
    "Share which programme or board your child follows, the subjects that worry you and the evenings your Shahade household has free. Someone who has taught that syllabus will reply with trial slots, all held over video and free of charge. Email support@ibgram.com or WhatsApp +91 7439 368 115.",
};
