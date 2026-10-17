import type { CitySeoPage } from "../types";

/**
 * Mavoor, Kozhikode district, Kerala, on the Chaliyar. No IB or Cambridge school was confirmed in
 * Mavoor or Kozhikode, so stripSchools is empty; clusters use Kochi and Thiruvananthapuram names
 * already checked on the Kochi, Kottayam and Thiruvananthapuram pages.
 */
export const mavoor: CitySeoPage = {
  slug: "mavoor",
  countryName: "Mavoor",
  countryNameLong: "Mavoor, Kozhikode district, Kerala",
  demonym: "Mavoor",
  flagCode: "in",
  countryCode: "IN",
  region: "Kerala, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after madrasa or tuition hours, kept clear of prayer times in Ramadan, with Sunday afternoons for long papers",
  lastUpdated: "2026-09-21",
  state: "Kerala",
  stateCode: "IN-KL",
  geo: { latitude: 11.2433, longitude: 75.9367 },
  wikipedia: "https://en.wikipedia.org/wiki/Mavoor",
  alternateNames: ["Mavoor Kozhikode", "Mavoor Calicut", "Mavoor Chaliyar", "Mavur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mavoor | Online Tuition from Home",
  metaDescription:
    "Mavoor students near Kozhikode can book IB and IGCSE tuition live and one-to-one online, taught from home by board-matched tutors, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mavoor",
  heroEyebrow: "IB & IGCSE TUITION AT HOME FOR MAVOOR STUDENTS",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Mavoor, given as live one-to-one video classes while the child studies at the family table by the Chaliyar. So many Malabar households have a parent or sibling in the Gulf that international syllabuses are no longer exotic, yet the nearest IB or Cambridge classroom is far from Kozhikode district. A matched tutor and a free trial lesson bridge that distance.",
  primaryKeyword: "IB and IGCSE tutors in Mavoor",
  imageAltText: "Mavoor student near Kozhikode in a live online IB Chemistry lesson at home in Kerala",
  secondaryKeywords: [
    "IB tutor in Mavoor",
    "IGCSE tutor in Mavoor",
    "IB home tuition Mavoor",
    "IGCSE home tuition Mavoor",
    "IB private tuition Mavoor",
    "IB Maths tutor Mavoor",
    "IGCSE Maths tutor Mavoor",
    "IB Physics tutor Mavoor",
    "IB Chemistry tutor Mavoor",
    "IB Biology tutor Mavoor",
    "IB DP tutor Kozhikode district",
    "IB MYP tutor Mavoor",
    "IB PYP tutor Mavoor",
    "IGCSE online tuition Mavoor",
    "IB tutor Calicut",
    "IGCSE tutor Kozhikode",
    "IB tuition Kunnamangalam",
    "online home tuition Mavoor Kerala",
  ],

  heroTrustPoints: [
    "Live private classes, not recorded courses or large batches",
    "Teachers with experience across IB DP, MYP, PYP and both IGCSE boards",
    "Schedules that respect Ramadan evenings, monsoon outages and Onam holidays",
    "A free trial lesson and a short note after each class",
    "A free tutor change if the first match is not right",
  ],
  heroStats: [
    { value: "IST", label: "Classes on Indian time, one hour and a half ahead of the Gulf" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "Online", label: "Home tuition by live video" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for Mavoor, in the Chaliyar valley near Kozhikode",
    paragraphs: [
      "Mavoor lies on the Chaliyar river some distance east of Kozhikode, close to the NIT Calicut campus at Kattangal and the IIM at Kunnamangalam. For decades the town was associated with a large rayon-pulp factory, and today it is a settlement of shops, schools, mosques and temples, small businesses, teachers and Gulf-returned families. Malayalam is the language of home, English the language of the classroom, and nearly every household has someone working abroad.",
      "That Gulf link explains why IB and IGCSE come up at all. A child who spent early years at an Indian curriculum school in Doha, Abu Dhabi, Muscat or Riyadh may arrive in Mavoor mid-way through a programme. Another family may plan for a future in Dubai and want a qualification recognised there. In either case, the nearest school that teaches the same papers is across the state, and the nearest tutor who has taught them may be a city away.",
      "The teaching is done on video, live and one-to-one, by tutors based in different Indian cities. Read on for the schools that exist near Mavoor, the contrast between Kerala syllabuses and the international ones, the reasons fees differ, the way the monsoon, Onam and Ramadan cross exam dates, the options after school, and the way subjects are taught. IB Gram is independent of the IB, Cambridge, Pearson and any school, and tutors do not write a student's assessed work.",
    ],
  },

  programmesIntro:
    "For Mavoor families the IB and IGCSE often arrive as a continuation from the Gulf, so tutoring usually begins by checking what has already been covered.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry units and a final Exhibition. Tutors give short, cheerful sessions on reading, number work and explaining ideas aloud, in English and in simple Malayalam where helpful.",
      countryNote:
        "A returning Gulf child may be halfway through PYP. A weekly lesson keeps the approach alive while the family decides where to settle.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed by criteria, ending with a Personal Project. Tutors teach students to decode a task and structure their answer.",
      countryNote:
        "Students switching from the Kerala State syllabus often hold strong content and need practice with criterion-based, concept-led questions.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, an Extended Essay and CAS. Tutoring covers the examined content, paper technique and internal assessment criteria.",
      countryNote:
        "Diploma students from Kerala who study in the Gulf or in Kochi return for summers and festivals, when intensive online blocks fill gaps.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses taken alongside a career-related study and a reflective project, meant for hands-on pathways.",
      countryNote:
        "CP is rare in Kerala. If your child follows it, we pair tutors with the DP courses in the package.",
    },
  ],

  subjectsIntro:
    "Each tutor is picked for the specific course and level, and for ease with students who switch between Malayalam and English, or between Gulf and Kerala classrooms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, algebra and proof-based reasoning, with timed Paper 1 and 2 sets." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, probability and modelling, with calculator methods that examiners accept." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and modern physics, with units and uncertainty handled carefully." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole calculations, bonding, energetics and organic pathways." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, physiology and ecology, with command-term practice." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "River, coastal and forest systems that connect naturally to the Chaliyar and the Western Ghats." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development, using remittance and Gulf-migration examples for essays." },
    { name: "Business Management", levels: "SL / HL", description: "Case analysis and finance tools, suited to students from trading families." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam-style pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, theories and evaluation, shaped into essay answers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Unseen text analysis and comparative essay writing." },
    { name: "Malayalam and Arabic support", levels: "School-based", description: "Help with Malayalam or Arabic where a school offers a language option, common among Gulf-returned students." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on knowledge questions; the essay and exhibition remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE share subject names but not paper codes, so tutors are matched by board and syllabus first.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics, rehearsed under time." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, energy, waves, electricity and atomic physics." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atoms, reactions, electrolysis and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human biology, inheritance and ecosystems." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools offering the double-award science route." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, summary, directed writing and speaking." },
    { name: "Arabic as a Foreign Language", levels: "Single tier", description: "Reading, writing and oral practice, common among students with Gulf schooling." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data and networks." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing with small-business examples." },
    { name: "Economics", levels: "Single tier", description: "Core concepts and data-response questions." },
  ],

  regionsTitle: "Mavoor and the Chaliyar corridor around Kozhikode",
  regionsIntro:
    "Students are spread through the town, along the road into Kozhikode and across the river valley. Each area has its own rhythm, summarised below.",
  regions: [
    { name: "Mavoor town and bus stand", note: "The commercial centre on the Chaliyar bank, busy through the day; evening lessons begin once the shop shutters start coming down." },
    { name: "Mavoor Road toward Kozhikode", note: "The corridor linking the town to the city, with heavy bus traffic at school closing time and many parents commuting into Kozhikode." },
    { name: "Kattangal and NIT Calicut side", note: "Residential pockets near the national institute, home to faculty, students and families who value academic routines." },
    { name: "Kunnamangalam and IIM side", note: "A busy town with colleges and an institute of management close by, popular with salaried and professional families." },
    { name: "Chaliyar riverbank colonies", note: "Settlements beside the river, where heavy monsoon rain can bring floodwater and power cuts to low-lying lanes." },
    { name: "Perumanna and Pantheerankavu direction", note: "Suburbs on the way to Kozhikode with a mix of households and a steady flow of Gulf-returned families." },
    { name: "Koduvally and Thamarassery side", note: "Towns to the north-east on the road to Wayanad, whose students also search for online tutors." },
    { name: "Feroke and Beypore direction", note: "The coastal belt downstream, with port and tile-industry families and strong school networks." },
    { name: "Gulf-returned households", note: "Families who moved back from the Gulf and often wish to continue a child's IB or IGCSE course, so they need a tutor who knows the same papers." },
  ],

  schoolClusters: [
    {
      city: "Mavoor and Kozhikode district",
      note: "We found no school in Mavoor or in Kozhikode district listed in the IB World School directory or among Cambridge and Edexcel centres. Schools in the area teach the Kerala State syllabus, CBSE or ICSE, so no local classroom exists for IB or IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Kochi",
      note: "Kochi, roughly 190 kilometres south, is where Kerala's confirmed IB and Cambridge schools are concentrated. Most Malabar families treat it as a boarding decision, not a commute.",
      schools: ["TIPS Kochi", "The Choice School, Ambalamugal", "Global Public School, Thiruvankulam", "Cochin International School"],
    },
    {
      city: "Nearby: Thiruvananthapuram",
      note: "The state capital has a confirmed international school, but it is far from Kozhikode and relevant mainly to families planning a longer move.",
      schools: ["Trivandrum International School"],
    },
  ],
  schoolDisclaimer:
    "These schools appear only to show where IB and Cambridge classrooms exist for Mavoor families. IB Gram is an independent tutoring service with no tie to any school, the IB, Cambridge or Pearson, and every school makes its own admission decisions.",

  modesIntro:
    "Our tutors do not visit homes in Mavoor, so the three formats below are online. Each is live and private, and each can be moved around outages, Ramadan and festivals.",
  modes: [
    {
      title: "Weekly live class at home",
      description: "A recurring one-to-one slot with a tutor who has taught your child's board, subject and level.",
      bullets: ["Shared whiteboard and past papers", "Short note for parents", "Moves easily around outages"],
    },
    {
      title: "Gulf-return bridge course",
      description: "A short run of lessons for a child moving from a Gulf school mid-programme.",
      bullets: ["Syllabus gap check in the first class", "Alternate-day sessions for a month", "Plan for the next exam sitting"],
    },
    {
      title: "Exam-season sprint",
      description: "Focused practice before mocks and the May or November sittings.",
      bullets: ["Timed papers, marked line by line", "Command-term drilling", "Spare slots for monsoon outages"],
    },
  ],

  tutorsIntro:
    "Tutors teach from several Indian cities on Indian Standard Time. For Mavoor, the steadiest window is the evening after school and madrasa or tuition hours.",

  sections: [
    {
      heading: "Can a Mavoor student sit in an IB or Cambridge classroom anywhere nearby?",
      paragraphs: [
        "Within Kozhikode district, we could not verify one. The city and its surrounding towns have well-regarded State syllabus, CBSE and ICSE schools, as well as colleges that draw students from across Malabar, but none of them is on the IB World School list or the Cambridge and Edexcel centre lists when we checked. A bare claim without a source would not help a parent, so we leave the schools out.",
        "The nearest confirmed classrooms are in Kochi, with a few in the capital, and a large cluster of Indian-curriculum and international schools in the Gulf countries where so many Mavoor families have worked. A child may spend years in one of those and then come home in the middle of an IB programme or an IGCSE course. A parent in Dubai or Doha may also want the child based with grandparents in Mavoor.",
        "Kochi is a boarding decision for most Malabar families, since the road journey is long and the monsoon can stretch it further. Because of that, many choose to keep the child at home, keep the existing syllabus alive through online tuition, and decide on a move only when the Diploma years approach.",
        "Should a school here be authorised for the IB or approved as a Cambridge centre in future, send us the subject list and the sitting and the teaching can follow that syllabus at once.",
      ],
    },
    {
      heading: "Kerala State syllabus, CBSE, ICSE, IGCSE and IB: how do they differ for a Mavoor child?",
      paragraphs: [
        "Kerala's State syllabus runs through SSLC in Class 10 and Higher Secondary in Classes 11 and 12, with public exams in March and entrance tests such as KEAM and NEET deciding the next step. It is textbook-based, well supported by tuition, and rewards careful, complete answers. CBSE and ICSE schools in Kerala follow national calendars alongside.",
        "On the surface IGCSE looks familiar, because the maths and science content is similar. What changes is the questioning: tiered papers, published objectives and tasks that demand an explanation. The IB Diploma adds coursework assessments, a 4,000-word essay, a knowledge course and service, and gives credit for how an answer is argued, not only for where it ends.",
        "A short comparison helps a parent who has to decide at Class 8 or Class 10.",
      ],
      table: {
        caption: "School systems seen from Mavoor",
        columns: ["System", "Main assessment", "Language", "Next step", "Specialist help nearby"],
        rows: [
          ["Kerala State syllabus", "SSLC and Higher Secondary public exams in March", "Malayalam or English", "KEAM, NEET, state colleges, CUET-UG", "Abundant"],
          ["CBSE", "National board exams on NCERT content", "English", "JEE, NEET, CUET-UG", "Good coaching in Kozhikode"],
          ["ICSE and ISC", "Wider syllabus with heavy English", "English", "Indian universities, CUET-UG", "A few tutors in the city"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers in three windows a year", "English", "IB, A Level or Indian Class 11", "Very few"],
          ["IB Diploma", "Exams, essay, coursework assessments, service", "English", "Indian and overseas universities", "None locally"],
        ],
      },
    },
    {
      heading: "What goes into the fee for IB or IGCSE tuition in Mavoor?",
      paragraphs: [
        "We prefer a quotation to a rate card. Once the board, subject and level are known, a proposal goes to the parent in writing, stating the hourly rate, the weekly lessons and the expected length, before any trial is fixed.",
        "Four things shape the figure. The first is level, since a Higher Level Diploma Chemistry tutor with examiner-style marking skill is priced differently from a tutor for IGCSE Business Studies. The second is scarcity: Computer Science HL, Design Technology and Further Mathematics have few qualified teachers. The third is how many lessons a week, and the fourth is the length of the plan.",
        "A Mavoor family can set that proposal beside the costs of other options: a boarding place in Kochi, rent for a parent and child in the city, bus or train fares, and the time lost in travel. Where a student mainly needs two or three subjects strengthened, targeted online tuition at home often comes out cheaper.",
        "Ask what is included, and hold off on long commitments until the trial class has gone well.",
      ],
      bullets: [
        "Course level and tier",
        "Number of qualified tutors in the subject",
        "Classes per week",
        "Short sprint or year-long plan",
      ],
    },
    {
      heading: "Online tutor, Kochi boarding, Kozhikode coaching or self-study: what suits Mavoor?",
      paragraphs: [
        "Mavoor families weigh four routes, and many combine two. The right pairing depends on what is weak: content, technique or consistency.",
        "A Kochi boarding place offers a complete school at the price of separation. Kozhikode coaching is excellent for KEAM, NEET and CBSE yet rarely touches international papers. Past-paper self-study pays off only for the most disciplined. An online tutor delivers board-level know-how to the kitchen table.",
      ],
      table: {
        caption: "Routes to IB or IGCSE help from Mavoor",
        columns: ["Route", "Syllabus depth", "Family impact", "Timing", "Suits"],
        rows: [
          ["Live online tutor", "High, matched to board and subject", "Minimal", "Evenings, Sundays, holidays", "Most IB and IGCSE learners"],
          ["Boarding in Kochi", "Whole-school teaching", "Child away from home", "Fixed by school", "Families ready to relocate"],
          ["Kozhikode coaching centres", "Strong on State, CBSE and entrance exams", "Daily travel", "Fixed batches", "Shared basics in maths and science"],
          ["Self-study with past papers", "Depends on the learner", "None", "Total freedom", "Self-directed students"],
        ],
      },
    },
    {
      heading: "How do the monsoon, Onam and Ramadan shape the exam year in Mavoor?",
      paragraphs: [
        "Kerala's south-west monsoon, which arrives in early June, brings days of heavy rain; the Chaliyar swells, low-lying lanes flood and power and mobile networks falter. The north-east monsoon adds more rain in October and November. Evenings are usually the most dependable window for a live lesson, and a back-up connection is sensible.",
        "Exam dates come from the school. A Diploma student writes in May or November and gets results in July or January, while Cambridge IGCSE and Pearson International GCSE each open three windows a year. Once the entry is known, the tutor plans backwards from the paper.",
        "Community life sets its own rhythm. Onam in August or September closes schools for days, Vishu falls in April, Eid and Christmas fall in different seasons, and Ramadan moves earlier each year and changes the hours at which families can study. We plan lessons around prayer and iftar times without fuss.",
      ],
      table: {
        caption: "A year in Mavoor as a study calendar",
        columns: ["Period", "On the ground", "Effect on study", "Lesson plan"],
        rows: [
          ["Jan to Feb", "Dry season, model exams", "Good weather for long revision", "Mock papers and error logs"],
          ["Mar to Apr", "SSLC and Plus Two exams, IGCSE series, Vishu", "Exam stress, holiday gaps", "Timed practice, rest days"],
          ["May to Jun", "IB May session, monsoon onset, school reopening", "Outages, new term", "Evening slots, back-up connection"],
          ["Jul to Sep", "Heavy rain, IB results, Onam", "Floods, long holidays", "Flexible times, foundation lessons"],
          ["Oct to Dec", "North-east monsoon, November sittings, Christmas", "Rain and exam pressure", "Compressed revision with reschedule room"],
        ],
      },
    },
    {
      heading: "What lies beyond school for IB and IGCSE students from Mavoor?",
      paragraphs: [
        "In India, Diploma graduates attach an equivalence certificate from the Association of Indian Universities. They apply to central universities through CUET-UG, or to private universities in Kerala, Bengaluru, Chennai and Delhi NCR that accept Diploma scores. For students who wish to stay close, NIT Calicut and IIM Kozhikode sit near Mavoor, though their own entrance routes apply, and the University of Calicut and the medical college at Kozhikode are other regional names.",
        "For engineering and medicine, the subject list decides. Mathematics, Physics and Chemistry or Biology inside a Diploma can line up with JEE or NEET rules, though the newest National Testing Agency notice and the Kerala counselling rules must be checked before Class 11 choices are final.",
        "Plenty of Mavoor students aim overseas: the Gulf, the UK, Canada, Australia, Ireland. Employers and universities in the Gulf know IB and IGCSE well, a quiet plus for families coming home. After IGCSE the road leads to Class 11 in an Indian board, to A Level or to the IB.",
        "Tutors can describe how subject choices narrow or widen options, but a counsellor or the university has the last word.",
      ],
    },
    {
      heading: "How is IB Mathematics, Physics, Chemistry and Biology taught live to a Mavoor student?",
      paragraphs: [
        "Those who enjoy algebra, calculus and proof, and perhaps see engineering or pure science ahead, usually take Analysis and Approaches. Applications and Interpretation is built around data, modelling and technology, a better fit for business, social science or design. Kerala students often calculate beautifully on paper, and the tutor builds on that habit.",
        "Each class opens with quick questions on the last topic. A model solution then appears on the shared board, after which the student attempts a past-paper question solo. The review goes line by line, showing where method credit came in and where a dropped unit or unexplained step lost marks.",
        "In Physics the focus is graphs and units; in Chemistry, the mole and balancing; in Biology, definitions and orderly explanation. One skill runs through all: reading each command term for exactly what it requests.",
        "The internal assessment is the student's own investigation; a tutor may clarify the criteria but never writes or revises it.",
      ],
    },
    {
      heading: "Core or Extended, Foundation or Higher: IGCSE tier and board choices for Mavoor families",
      paragraphs: [
        "Cambridge offers many papers in Core and Extended versions, and Pearson Edexcel offers Foundation and Higher. Picking the lower tier places a ceiling on the grade, which matters for students heading toward science, engineering or IB Higher Level.",
        "Evidence helps here: last term's marks, the class teacher's view and a trial paper from the tutor. A meticulous but slow student can flourish on the lower tier; a quick but erratic one may climb to the higher after drilling.",
        "Most sensible IGCSE selections hold a language, maths, the sciences and one humanities or business option. Gulf-schooled returnees usually know their board already. Pupils from the Kerala State syllabus tend to find long English answers and scientific explanation hardest, and both improve with weekly practice over two or three terms.",
        "Practicals, syllabus codes and grade boundaries differ by board, which is why the board is settled first.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Share the class, board, subject, level and the sitting your child will take." },
    { title: "See a tutor profile", description: "We propose a teacher who has handled the same course, with a brief biography." },
    { title: "Try one free class", description: "A genuine live class, free, so that your child can test the teaching style." },
    { title: "Read the terms", description: "Rate and schedule come in writing. Nothing begins without your approval." },
    { title: "Build a routine", description: "Weekly live classes, a note after each, and a tutor change on request." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "Diploma Physics is taught by a person who has taught that paper before." },
    { title: "Suits Malabar life", description: "Monsoon outages, Onam, Ramadan and prayer times are planned in from the start." },
    { title: "Straight on local options", description: "If no IB or Cambridge classroom is confirmed nearby, we say so, then plan around it." },
    { title: "Reports you can use", description: "Every class closes with a brief note: what was covered, what went wrong, what follows." },
    { title: "Teaching only", description: "Tutors teach and comment; assessed work is never theirs to write." },
    { title: "Low risk to begin", description: "The first class is free, the rate is written down, swapping tutor costs nothing." },
  ],

  faqs: [
    { question: "Is there an IB or Cambridge school in Mavoor?", answer: "No school in Mavoor or Kozhikode district showed up on the IB World School list or among Cambridge and Edexcel centres in our checks. Local classrooms teach the Kerala State syllabus, CBSE or ICSE. Parents who want an international classroom look to Kochi; others keep the child at home and use an online tutor." },
    { question: "Do tutors visit homes in Mavoor?", answer: "No. Teaching at the family's own home exists only in Gurugram and parts of Delhi NCR. In Mavoor the service is online home tuition: the child studies at home with a laptop and the tutor teaches live on video. The lesson is private and interactive, and nobody has to travel through monsoon traffic." },
    { question: "How do I find an IB Chemistry or IGCSE Maths tutor for Mavoor?", answer: "Message us with the board, subject, level and exam sitting. A tutor who has taught that exact paper is shortlisted, a short profile is shared and a free trial class is booked. If the first pairing does not feel right, another tutor is offered at no charge." },
    { question: "How much does IB tuition cost for Mavoor students?", answer: "It varies with the course level, the scarcity of tutors in the subject and the number of classes per week, so we publish no fixed price list. A written proposal reaches you before the trial is confirmed, which lets you compare options and ask questions before agreeing to anything." },
    { question: "We are returning from the Gulf in the middle of the year. Can you help?", answer: "Yes, this is a common case. Tell us the programme, the subjects, the year and the last unit completed. The first class maps what is missing against the syllabus, and a short bridging run of lessons helps the child reach the same exam sitting without losing a year." },
    { question: "Is online tuition as effective as coaching in Kozhikode?", answer: "The two do different jobs. Kozhikode coaching is strong for KEAM, NEET and board syllabuses but seldom covers international papers. Online IB and IGCSE tuition is one-to-one, tied to a board and needs no travel. Several families use both, giving the international subjects to the online tutor." },
    { question: "Can a Kerala State syllabus student move to IGCSE?", answer: "They can. Much of the maths and science carries across, although questions are phrased and marked another way. Beginning in Class 8 or 9 leaves room to adjust, and a couple of terms of weekly classes usually gets a student ready for the first IGCSE papers. A Diploma move generally happens in Class 10 or 11." },
    { question: "Will a tutor write the Extended Essay or internal assessment?", answer: "Never, and that rule has no exceptions. What a tutor can do is walk the student through the marking criteria, ask questions that sharpen the student's own plan and comment on drafts the student has produced alone. Writing or reworking the essay, the internal assessment, the TOK essay or any coursework stays with the student." },
    { question: "What happens in the free trial?", answer: "One live class on a real topic from the syllabus, taught by the tutor we put forward. No money changes hands and no promise is needed. You get a short note afterwards; if you want to carry on, the plan and rate follow in writing for you to approve." },
    { question: "Which exam sittings do you prepare for?", answer: "IB candidates sit in May or November, and we cover both. For IGCSE we follow the window chosen by the school, whether Cambridge or Edexcel. Because the entry is fixed by the school or centre, each lesson plan starts from the paper date and counts backwards. Results for the IB come in July and January." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes, and the choice of tutor depends on it. Cambridge and Pearson number their papers differently, divide tiers differently and treat practical skills in their own ways. Tell us which board your child's school uses together with the paper codes, and we will confirm that the tutor has taught precisely that specification." },
    { question: "What happens if monsoon rain cuts the power or the signal?", answer: "The lost time is rebooked, not charged. From June to September, Mavoor households tend to keep a hotspot on a phone and a charged power bank beside the laptop. A class that ends early is repeated later in the same week if the tutor's diary has space, and exam-season families hold a couple of spare slots." },
    { question: "How do you handle Ramadan?", answer: "We move classes to hours that suit the household, often after iftar or in the early morning, and ease the load where needed. Tell us the pattern that works for the family and we will fit the tutor's diary around it." },
    { question: "Does the IB Diploma count for Indian university admission?", answer: "For the most part, yes. A Diploma holder usually needs the equivalence certificate issued by the Association of Indian Universities, and CUET-UG is the way into central universities. Engineering, medical and state-quota routes add their own subject conditions, so read the current notices before settling Class 11 subjects." },
    { question: "Can students from Kunnamangalam, Feroke or Koduvally join?", answer: "They can. Since the class happens on video, an address anywhere in the Kozhikode region works when the connection is stable. We choose a weekly time that sits well with school and home routine, then keep it constant so the lesson becomes a habit." },
    { question: "How do we begin?", answer: "Send an email to support@ibgram.com or a WhatsApp message to +91 7439 368 115. Include the class, board, subject and the sitting your child will take. A suggested tutor and a trial time normally come back inside a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "See where else the online model is available." },
    { label: "IB tutoring overview", href: "/ib-tutors/", description: "How our IB teaching is organised by programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with board-matched tutors." },
    { label: "Middle Years Programme help", href: "/programmes/myp/", description: "Criterion-based assessment support for Classes 6 to 10." },
    { label: "Diploma Programme help", href: "/programmes/dp/", description: "Subject tutoring for the last two school years." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at Standard and Higher Level." },
    { label: "Tutor profiles", href: "/tutors/", description: "The people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the trial." },
    { label: "IB and IGCSE tutors in Kozhikode", href: "/kozhikode/", description: "Our page for the city next door." },
    { label: "IB and IGCSE tutors in Malappuram", href: "/malappuram/", description: "The neighbouring Malabar district." },
    { label: "IB and IGCSE tutors in Koyilandy", href: "/koyilandy/", description: "A coastal town north of Kozhikode, served online." },
  ],

  closingHeading: "Book a free first class at home in Mavoor",
  closingBody:
    "Pass on the board, the subject and the sitting. A tutor, a free trial class and a rate on paper will follow before any decision falls to you. The address is support@ibgram.com, and WhatsApp is +91 7439 368 115.",
};
