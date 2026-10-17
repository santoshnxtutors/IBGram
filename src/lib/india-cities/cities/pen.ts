import type { CitySeoPage } from "../types";

/**
 * /pen/ - IB and IGCSE tutoring page for Pen, Raigad district, Maharashtra (the Konkan idol-making town,
 * not the stationery item). No IB or Cambridge/Edexcel school is confirmed in Pen, so stripSchools is
 * empty and the clusters point honestly to Panvel / Navi Mumbai and Mumbai using names verified on
 * panvel.ts and mumbai.ts. Online only: in-person home tuition runs just in Gurugram and parts of Delhi NCR.
 */
export const pen: CitySeoPage = {
  slug: "pen",
  countryName: "Pen",
  countryNameLong: "Pen, Raigad, Maharashtra",
  demonym: "Pen",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timed around the heavy Konkan monsoon, the weeks before Ganesh Chaturthi when the idol workshops run flat out, and Diwali",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.7372, longitude: 73.0944 },
  wikipedia: "https://en.wikipedia.org/wiki/Pen,_Raigad",
  alternateNames: ["Pen Raigad", "Pen Maharashtra", "Pen Konkan"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pen, Raigad | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Pen, Raigad: DP, MYP, Cambridge and Edexcel lessons one to one at home, built around monsoon and Ganeshotsav, free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition Online in Pen, Raigad",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN PEN, RAIGAD",
  heroSubtitle:
    "Pen is best known for the Ganesh idols that leave its workshops for homes across India and abroad, and for the Mumbai-Goa highway that passes close by. For a student here following the IB or IGCSE, private tuition at home means a laptop lesson with a tutor who has taught that exact syllabus. Nobody comes to your door in Pen; visiting lessons run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Pen",
  imageAltText: "A student in Pen, Raigad, working on an IB Biology paper with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Pen",
    "IGCSE tutor Pen",
    "IB home tuition Pen",
    "IGCSE home tuition Pen",
    "IB private tuition Pen",
    "IB Maths tutor Pen",
    "IGCSE Maths tutor Pen",
    "IB Physics tutor Pen",
    "IB Chemistry tutor Pen",
    "IB Biology tutor Pen",
    "IB DP tutor Pen",
    "IB MYP tutor Pen",
    "IB PYP tutor Pen",
    "IGCSE online tuition Pen",
    "IB tutor Pen Raigad",
    "IGCSE tutor Raigad district",
    "online IB tuition Konkan Maharashtra",
    "IB tutor near Panvel Pen",
  ],

  heroTrustPoints: [
    "Tutors picked for the IB subject and level, or the IGCSE board, code and tier, your child is actually taking",
    "Lessons are online only; no tutor travels to Pen, and in-person home tuition is confined to Gurugram and parts of Delhi NCR",
    "A free first lesson, with the rate set out in writing afterwards",
    "A service independent of the IB, Cambridge, Pearson and every school named below",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All IB stages" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as Raigad" },
    { value: "Free trial", label: "Pay nothing first" },
  ],

  intro: {
    heading: "Home tuition in Pen for IB and IGCSE, in a Konkan town that makes its name from clay and highway traffic",
    paragraphs: [
      "Pen, in Raigad district, is a municipal town on the Panvel to Roha rail line and close to the Mumbai-Goa highway, with a Marathi-speaking population, a thriving co-operative banking tradition and the idol workshops of Hamrapur and Kalve on its fringe. Its schools follow the Maharashtra State Board or CBSE. Nothing we have found shows a Pen school offering the IB or Cambridge or Edexcel IGCSE.",
      "That leaves a small group of Pen households who need what the town cannot supply. Some commute to Mumbai or Navi Mumbai for work and have a child enrolled in an international school there. Others work in the industrial belt around Dolvi and Khopoli and expect to be posted onward. Others simply want a global qualification ready for a university abroad. In each case the problem is the same: there is nobody in Pen who has taught IB Physics HL or IGCSE Extended Mathematics.",
      "Online lessons solve it. Your child sits at a desk at home while a tutor elsewhere in India teaches live, one to one, on a shared board, using the board's own past papers. Marked work and a short written summary follow each class.",
      "Tutors coach and mark. They do not write, edit or complete an Internal Assessment, Extended Essay or coursework on a student's behalf.",
    ],
    bullets: [
      "Lessons for IB PYP, MYP, DP and CP subjects",
      "Cambridge and Pearson Edexcel IGCSE, all tiers",
      "Private live lessons online, in Indian Standard Time",
      "A free first lesson followed by a written plan",
      "No home visits in Pen; they exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since Pen has no IB school, a child's programme is usually tied to a campus in Mumbai, Navi Mumbai or Pune, or to a planned move. The notes below describe the real situations we hear from Raigad families, so lessons fit the actual starting point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Learning is organised into units of inquiry rather than separate subjects, and the final year brings a pupil-led Exhibition. With no exam at the end, a tutor's job is fluency in English reading, comfort with numbers and a habit of asking why.",
      countryNote:
        "A Pen child on the PYP is generally a transfer, or a younger sibling of an older child who attends an international school in Navi Mumbai or Mumbai.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria grade each subject, and a Personal Project closes the programme. Students who move from a state board often need to see how an explanation, not just a fact, earns the higher bands.",
      countryNote:
        "Raigad families ask about MYP support when a child changes to an international school on the Navi Mumbai side and needs time to adapt.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects sit alongside Theory of Knowledge, an Extended Essay and CAS. The big written papers arrive in May, though some schools run a November series.",
      countryNote:
        "From Pen, Diploma requests mostly cover Mathematics, the sciences and English A, often for a student who completed SSC or CBSE Class 10 locally and then joined an IB school.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combine with a career-related qualification and a small core. Only a handful of Indian schools run it.",
      countryNote:
        "Requests are rare from Pen; any that arrive are mainly for the Diploma courses within the pathway.",
    },
  ],

  subjectsIntro:
    "A Higher Level Chemistry candidate and a Standard Level Economics candidate are best served by very different tutors, so we match on subject and level first, then target sitting, and finally on which evenings the tutor has free.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof for future engineers, and a Paper 3 at HL that tests unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling with calculator fluency; the Exploration needs an early topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, plus an investigation judged on method and evaluation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics and organic chemistry, with the data booklet used without hesitation." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks, and the investigation needs light statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams linked to current events, plus HL data-response practice." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to a given case; a good fit for families from co-operative banking and trading backgrounds in Pen." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, comparative essays and the Individual Oral, taught separately." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object thinking and a solution whose code and documentation agree." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled accurately and used in structured longer answers." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems reasoning that suits a coastal district with heavy rainfall and creek ecosystems." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study depth, fieldwork design and evaluative writing." },
    { name: "IB Marathi B", levels: "HL / SL", description: "A natural strength for Raigad students, covering text types and a fluent oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "No syllabus to memorise; the work is arguing a knowledge question from two sides." },
  ],

  igcseSubjectsIntro:
    "IGCSE covers two boards with different papers. Cambridge 0580 Extended and Edexcel 4MA1 Higher are not interchangeable, so plans start from board, code and tier. We also check whether the sitting is Cambridge February-March, May-June or October-November, or Edexcel January or summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Quick algebra and fully shown working for Extended candidates." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus and trigonometry early, a head start for IB Mathematics HL." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Different wording from Cambridge; practise on Pearson papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations, reading graphs and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic pathways, with experiments planned on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecology and human biology in mark-scheme language." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams, then the evaluative questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Tracing algorithms by hand and writing pseudocode." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and descriptive tasks under time." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading and writing in correct register for Marathi-speaking students." },
  ],

  regionsTitle: "Pen and Raigad neighbourhoods our online tutors reach",
  regionsIntro:
    "Lessons happen on screen, so these places tell us about daily rhythm rather than travel: how long school and the commute take, how the monsoon and the Ganeshotsav rush bend the evening, and where a family also has ties.",
  regions: [
    { name: "Pen town centre and bazaar", note: "The commercial heart, close to the municipal offices and bus stand, with most families in Marathi or English medium state board schools." },
    { name: "Hamrapur", note: "The idol-making village on the edge of Pen, where workshops run through the year and peak before Ganesh Chaturthi." },
    { name: "Kalve", note: "A neighbouring workshop settlement, linked with Hamrapur by the same craft families." },
    { name: "Pen railway station area", note: "The stretch served by trains towards Panvel and Roha, used by commuting working families." },
    { name: "Wadkhal and the highway junction", note: "Where the Pen road meets the Mumbai-Goa highway, a point of reference for travellers and trucking families." },
    { name: "Dolvi and the steel belt (nearby)", note: "The industrial area on the Amba river side, home to plant staff and contractors, some relocating from other states." },
    { name: "Khopoli and Rasayani (nearby)", note: "Industrial towns to the north with engineering colleges and families who may know international schools." },
    { name: "Alibag road (nearby)", note: "The route to the district headquarters, with its own school choices and coastal weekend traffic." },
    { name: "Panvel and Kharghar (nearby)", note: "The Navi Mumbai edge, where several international campuses sit and many Pen professionals work." },
  ],

  schoolDisclaimer:
    "No school in Pen is confirmed to teach the IB or a Cambridge or Edexcel IGCSE programme. The campuses listed below are in Navi Mumbai and Mumbai and appear for orientation only. IB Gram works independently of them, and of the International Baccalaureate, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Panvel and Kharghar",
      note: "The closest cluster of international schools, reachable from Pen by the Panvel rail line or the highway. Some Pen families commute, and others move closer.",
      schools: ["Dr Pillai Global Academy, New Panvel", "Ryan Global School, Kharghar", "Saviors Global School, Kharghar"],
    },
    {
      city: "Nearby: Mumbai",
      note: "The wider range of IB and IGCSE schools in the metropolitan region, about two to three hours by road depending on traffic. A tutor lets a student keep a Mumbai-linked plan without moving house.",
      schools: ["Dhirubhai Ambani International School", "Oberoi International School", "JBCN International School"],
    },
    {
      city: "Pen and Raigad: Maharashtra State Board and CBSE schools",
      note: "Local schools follow the state board or CBSE. Families who want IB or IGCSE content add tuition around the school day or enter Cambridge exams as private candidates.",
      schools: [],
    },
  ],

  modesIntro:
    "A Pen family gets the same thing whichever plan it picks: a tutor and a student, live, on screen. The options differ in tempo. No tutor visits houses in Pen.",
  modes: [
    {
      title: "One standing evening a week",
      description:
        "The same tutor, the same slot, a shared whiteboard and past papers on screen. A good choice for a student whose school already teaches the course and who needs a second pair of explanations.",
      bullets: [
        "Specialists from across India",
        "MYP, DP and every IGCSE subject",
        "Papers shared live",
        "One tutor all year",
      ],
    },
    {
      title: "A planned term, with check-ins",
      description:
        "Several months of lessons, a brief written note after each, and a fuller review of marks every few weeks. Useful during a transfer to a Navi Mumbai school or a private-candidate entry.",
      bullets: [
        "Note after each lesson",
        "Marks reviewed against schemes",
        "Helps new IB arrivals",
        "Extra lessons before mocks",
      ],
    },
    {
      title: "A short exam sprint",
      description:
        "Two or three lessons a week for a few weeks, almost all timed papers with quick correction, planned to dodge the Ganeshotsav fortnight and the heaviest monsoon days.",
      bullets: [
        "Real time limits",
        "Fast feedback",
        "Avoids Ganeshotsav rush",
        "Book three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Pen and Raigad looks for IB or IGCSE tutors?",
      paragraphs: [
        "Pen sits on the Konkan side of Maharashtra, a town where the idol trade, banking co-operatives, shops and the nearby chemical and steel plants support a mixed economy. Its schools use the Maharashtra State Board or CBSE, mostly in Marathi or English medium. Because no school here is confirmed to teach the IB or an IGCSE syllabus, those who ask are a small set with a clear reason.",
        "One group works across the Panvel and Navi Mumbai belt and sends a child to an international school there, but wants extra help at home in the evenings. A second group moved to the Dolvi, Khopoli or Roha industrial areas on a posting and brought a child already in the IB or IGCSE. A third has a daughter or son aiming at universities in the UK, Canada or Australia and plans the qualification early.",
        "There are also private candidates, who study at an ordinary school and sit one or two Cambridge IGCSE papers through an approved centre.",
        "None of these households finds a tutor in Pen who has taught the course. A search for one ends at Mumbai or Pune, which is where online lessons begin.",
      ],
      table: {
        caption: "Why Pen families ask about IB or IGCSE",
        columns: ["Situation", "Where the child studies", "What tuition covers"],
        rows: [
          ["Child in a Navi Mumbai international school", "Panvel or Kharghar campus", "Evening support at home in weak subjects"],
          ["Industrial posting to Dolvi or Khopoli", "Continues IB or IGCSE remotely or nearby", "Continuity of the syllabus after a move"],
          ["Overseas university plan", "State board or CBSE school in Pen", "English-medium Maths and sciences, exam technique"],
          ["Private IGCSE candidate", "Local school plus exam centre", "Full course teaching and paper practice"],
        ],
      },
      bullets: [
        "No IB or IGCSE school is confirmed in Pen",
        "Demand is small and purposeful",
        "Online matching finds specialists beyond Raigad",
        "Content and marking match any other city",
      ],
    },
    {
      heading: "How does the Maharashtra State Board compare with CBSE, IB and IGCSE?",
      paragraphs: [
        "The Maharashtra State Board, whose SSC and HSC examinations govern most Pen classrooms, rewards accurate recall of a prescribed textbook, while IB and IGCSE reward application and explained reasoning. A student who writes the textbook definition correctly in SSC Science may still lose marks on an IGCSE question that shifts the setting.",
        "CBSE sits between the two in many subjects, with more application than the state board, though still within a fixed syllabus. IB and IGCSE add large practical or internal components marked on published criteria, so planning and revising a piece of work becomes a skill in its own right.",
        "Medium of instruction also matters. A Marathi-medium student must meet the English subject vocabulary of physics or economics from scratch, and the command words that guide an answer. Tutors spend early lessons on this, using Marathi to explain ideas and English for the final wording.",
        "The shift is neither impossible nor unfair. Mark schemes are public, and once a student knows what they reward, the system is easier to prepare for than it looks.",
      ],
      table: {
        caption: "Maharashtra State Board and CBSE against IB and IGCSE",
        columns: ["Feature", "State Board (SSC/HSC)", "CBSE", "IB / IGCSE"],
        rows: [
          ["Medium", "Marathi or English", "English or Hindi", "English"],
          ["What earns marks", "Recall of the textbook", "Recall plus some application", "Application and evaluation"],
          ["Internal work", "Limited", "Moderate", "Substantial, criteria-marked"],
          ["Availability in Pen", "Widespread", "A few schools", "None confirmed"],
        ],
      },
      bullets: [
        "English subject vocabulary needs early building",
        "Coursework demands planning skills",
        "Mark schemes are public",
        "Switching is realistic with support",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost in Pen?",
      paragraphs: [
        "We give no list prices, because a fair figure depends on what is being taught. The course and level, the tutor's experience and the weekly number of lessons are the factors, and a written quote follows the free trial lesson, before any commitment.",
        "Higher Level Mathematics and science courses cost more than Standard Level humanities for a simple reason: fewer tutors can teach them to that depth. Someone with years of teaching or examining in the board charges more than a recent graduate. Two lessons a week cost more than one, though spaced practice often brings faster progress.",
        "Because lessons are online, the bill has no travel element. A Pen family looking at Panvel or Mumbai tuition would otherwise lose hours on the highway or the local train for a single class, which is a real cost even if fares are modest.",
        "If funds are tight, say so early. A short plan on one weak chapter, or a fortnightly lesson alongside self-study, can be arranged.",
      ],
      bullets: [
        "Quotes arrive in writing before booking",
        "Course, level, experience and frequency set the figure",
        "No travel cost online",
        "Short plans can be built for tight budgets",
      ],
    },
    {
      heading: "Is online tuition better than Panvel or Mumbai coaching, a local tutor or self-study?",
      paragraphs: [
        "For IB and IGCSE, online one-to-one lessons are the most dependable way to reach a tutor who has taught the syllabus. Coaching in Pen or Panvel focuses on SSC, HSC, JEE and NEET, and its teachers seldom have IB or Cambridge exposure.",
        "A local private tutor may be excellent for Marathi, general Mathematics or science, yet never have seen an IB Paper 3 or an Edexcel Higher paper. Self-study works when a student is organised, but without marking the same slip repeats for months.",
        "Travel is the hidden factor. Commuting to Navi Mumbai for an evening class can swallow two or three hours, especially in the monsoon when trains and the highway slow. An online lesson uses the hour only for learning, with one tutor all year.",
        "Many families blend choices: school for the core, online tuition for the hardest subject and self-study for revision.",
      ],
      table: {
        caption: "Study options for a Pen student",
        columns: ["Option", "IB or IGCSE knowledge", "Travel", "Feedback"],
        rows: [
          ["Online one-to-one tuition", "Matched to the exact course", "None", "Marked to scheme with a written note"],
          ["Coaching in Panvel or Navi Mumbai", "Mostly SSC, HSC, JEE, NEET", "Long commute", "Group level"],
          ["Local private tutor in Pen", "Varies, seldom IB trained", "Short or none", "Depends on the tutor"],
          ["Self-study", "Whatever books you gather", "None", "Little without a marker"],
        ],
      },
      bullets: [
        "Choose by syllabus experience",
        "Coaching rarely covers IB or Cambridge",
        "Self-study needs marking",
        "A blend is common",
      ],
    },
    {
      heading: "How do the Konkan monsoon and Ganeshotsav shape the study year?",
      paragraphs: [
        "The IB Diploma has May and November sessions, Cambridge IGCSE runs in February-March, May-June and October-November, and Edexcel in January and May-June. Mocks usually fall in December and January, so the first half of the academic year is for teaching new content.",
        "Raigad is one of the wettest districts in Maharashtra. From mid-June to September rain is heavy, rail and road services can be delayed and power cuts are possible. Online study at home is an advantage then, but a lesson plan should leave spare slots and the family should keep a charged laptop and a phone hotspot.",
        "In Pen, Ganesh Chaturthi in August or September is not just a holiday; the workshops of Hamrapur and Kalve work at full pace for weeks beforehand, and many households are involved in the trade. Diwali follows in October or November, and the summer from April to May is hot and humid.",
        "A November-session student should treat the monsoon as an intensive window; a May-session student should use October to February.",
      ],
      table: {
        caption: "Exam sessions and local calendar",
        columns: ["Period", "Exam or school event", "Local effect in Pen"],
        rows: [
          ["December-January", "IB mocks, Edexcel January series", "Cool, dry weeks that suit revision"],
          ["February-March", "Cambridge Feb-March series, SSC and HSC boards", "Warming; school calendar tight"],
          ["April-May", "IB May exams begin, hot and humid", "Evening or early lessons"],
          ["June-September", "Monsoon, Ganesh Chaturthi, IB November preparation", "Heavy rain; workshop rush before the festival"],
          ["October-November", "Cambridge Oct-Nov series, Diwali", "Festival breaks; steady weather returns"],
        ],
      },
      bullets: [
        "IB sits in May and November",
        "Keep spare slots for monsoon outages",
        "Ganeshotsav fortnight is a busy break",
        "Start intensives two to three months ahead",
      ],
    },
    {
      heading: "What can a Pen student do after IB or IGCSE?",
      paragraphs: [
        "In India, the Association of Indian Universities gives IB Diploma holders an equivalence certificate, which most colleges accept, and central universities admit through CUET-UG. In Maharashtra, MHT-CET and NEET govern state engineering and medical seats, so confirm each year how they treat IB and IGCSE candidates.",
        "Within reach of Pen are the University of Mumbai and its colleges, ICT and VJTI in Mumbai, IIT Bombay, and in Pune the University of Pune and COEP. For JEE Main, Mathematics, Physics and Chemistry are required. Medicine through NEET asks for Biology, Chemistry, Physics and English.",
        "Abroad, the IB Diploma is read by universities in the UK, US, Canada, Australia and Europe, and IGCSE grades count when followed by A Levels or the IB. Tutors can help choose subjects that keep Indian and foreign options open together.",
        "Raigad families often take a long view, since Navi Mumbai's new airport and port projects are drawing global employers to the region.",
      ],
      table: {
        caption: "Pathways from IB or IGCSE for a Pen student",
        columns: ["Goal", "What is needed", "How a tutor helps"],
        rows: [
          ["Indian universities", "AIU equivalence and CUET-UG where required", "Exam performance and CUET preparation"],
          ["Engineering via JEE Main or MHT-CET", "Mathematics, Physics, Chemistry", "HL Maths and Physics, overlap planning"],
          ["Medicine via NEET", "Biology, Chemistry, Physics, English", "Depth in HL Biology and Chemistry"],
          ["Study abroad", "Predicted IB points or IGCSE then A Level grades", "Targeted preparation for threshold grades"],
        ],
      },
      bullets: [
        "AIU equivalence is the standard route",
        "Check MHT-CET, JEE and NEET rules yearly",
        "Overseas universities read IB points",
        "Plan subjects early",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online to a Pen student?",
      paragraphs: [
        "IB Mathematics is offered as Analysis and Approaches or as Applications and Interpretation, each at Higher or Standard Level. The first is for students who like algebra and proof; the second for those who prefer statistics and modelling. We ask about the intended degree before lesson one.",
        "In the sciences the tutor and student go through papers in turn. Paper 1 is multiple choice, Paper 2 is structured, and the internal investigation is independent. The tutor marks each practice script against the scheme and explains each lost mark.",
        "On the investigation, advice covers choosing a measurable question, a repeatable method and uncertainty. The report and the data are the student's own.",
        "IGCSE sciences follow similar logic, with extra attention on the alternative-to-practical paper, which suits students with little lab time at home.",
      ],
      bullets: [
        "Pick the maths course after discussing career plans",
        "Practice scripts marked line by line",
        "Investigation advice only",
        "Alternative-to-practical drilled for IGCSE",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the programme, subject, level, board and class on WhatsApp to +91 7439 368 115 or by email to support@ibgram.com." },
    { title: "Review the shortlist", description: "We propose tutors who have taught that course and give their free evenings." },
    { title: "Attend a free lesson", description: "Your child tries a genuine session online, with no payment and no pressure." },
    { title: "Read the plan and rate", description: "A schedule and a quote arrive in writing before you book anything." },
    { title: "Check progress", description: "Short notes follow each class, and a replacement tutor is available if needed." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Chosen for the course your child sits." },
    { title: "Honest about format", description: "Online only in Pen; no visit is implied." },
    { title: "Monsoon-ready planning", description: "Spare slots and a backup connection plan are built in." },
    { title: "Notes after every class", description: "A running record of topics and homework." },
    { title: "Easy tutor change", description: "A poor fit is fixed without fuss." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write a student's coursework." },
  ],

  faqs: [
    {
      question: "Is there an IB or IGCSE tutor in Pen?",
      answer:
        "Not that we know of in Pen itself, so lessons are online. A specialist elsewhere in India teaches your child live, matched by subject, level and board, and the first lesson is free. Nobody visits homes in Pen.",
    },
    {
      question: "Can I get home tuition in Pen for the IB or IGCSE?",
      answer:
        "Your child studies at home, but the tutor is on a screen. Visiting tutors are offered only in Gurugram and parts of Delhi NCR, not in Pen. A laptop, a headset and a steady connection are all that is needed for a private one-to-one lesson.",
    },
    {
      question: "Does any school in Pen teach IB or IGCSE?",
      answer:
        "We cannot confirm one. Local schools follow the Maharashtra State Board or CBSE. The nearest international campuses we know of are in Panvel, Kharghar and Mumbai. Please check any school directly before depending on its programme.",
    },
    {
      question: "Can a Pen student sit Cambridge IGCSE as a private candidate?",
      answer:
        "Yes. An approved Cambridge exam centre can enter private candidates, usually in a larger city such as Navi Mumbai or Mumbai. The family arranges the entry and the centre; a tutor prepares the student. Deadlines are fixed and availability varies year by year.",
    },
    {
      question: "How are fees decided?",
      answer:
        "Prices are not listed on the site. The quote reflects the course, the level, the tutor's experience and the lessons per week. It is given in writing after the free trial. Online delivery means no travel charge, and a focused short plan may cost less than a general course.",
    },
    {
      question: "Which subjects do Raigad students ask for?",
      answer:
        "Mathematics, Physics, Chemistry and Biology lead, followed by Economics, Business and English A. That fits engineering, medical and commerce interests common in the region. Marathi B also appears for students who want to use a home language.",
    },
    {
      question: "Will a tutor complete my child's IA or Extended Essay?",
      answer:
        "No. A tutor explains criteria, helps choose a feasible topic and reviews drafts against the rubric. Writing, rewriting or supplying content for an IA, Extended Essay, TOK essay or coursework is not part of the service, because the work must be the student's own.",
    },
    {
      question: "My child studied in Marathi medium. Will English-language exams be hard?",
      answer:
        "It takes a term of focused work. Tutors build a subject glossary, practise command words and show how to write complete answers in English. Marathi can be used to check understanding, with English as the target for exams.",
    },
    {
      question: "Which is easier to take locally, Cambridge or Edexcel IGCSE?",
      answer:
        "The exam centre usually decides, since a candidate follows the board they are entered with. Cambridge offers more centres and an October-November series, while Edexcel offers a January series. Practice is tailored to the board.",
    },
    {
      question: "When is the right time to start?",
      answer:
        "For the Diploma, the beginning of Class 11, or a year earlier for Mathematics if Class 10 is shaky. MYP students can join at any point. Exam-year students can take a short intensive, though early support is gentler.",
    },
    {
      question: "How long are lessons?",
      answer:
        "About an hour to ninety minutes, once or twice weekly. A third session is common before exams. Students should add a few hours of independent practice per subject each week, which we help schedule around school and other classes.",
    },
    {
      question: "What happens during monsoon power or network cuts?",
      answer:
        "We move the lesson or switch to audio with a shared document. Keep a charged laptop and a phone hotspot in the rains. A few Mbps is enough for video and a board, and we plan spare slots for heavy days.",
    },
    {
      question: "Can IB subjects be combined with MHT-CET, JEE or NEET preparation?",
      answer:
        "It is possible, though demanding. IB Mathematics HL and Physics HL overlap with JEE topics, and Biology HL with NEET. Eligibility rules change, so check them with the exam body. A tutor can map which topics count for both goals.",
    },
    {
      question: "How do we begin?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the programme, subject, level, board and class. A shortlist and trial slot follow, and you decide after the free lesson.",
    },
    {
      question: "Can we change tutors?",
      answer:
        "Yes, whenever you wish. Tell us after the trial or any class and we will suggest another tutor with a similar profile, passing on earlier notes so your child does not start over.",
    },
    {
      question: "Is IB Gram part of the IB, Cambridge or Pearson?",
      answer:
        "No. IB Gram is an independent tutoring service with no tie to the International Baccalaureate, Cambridge, Pearson or any school named here. School names appear for orientation only.",
    },
  ],

  tutorsIntro:
    "These tutors live elsewhere in India and teach live online, on Indian Standard Time, the same clock as school in Pen. Matches are made on the course rather than the postcode, and no tutor travels to homes in the town.",

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How online lessons work in other towns and cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find a Diploma, MYP or PYP specialist." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and exam sessions." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria assessment and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry learning for younger children." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse profiles and subject strengths." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The one area where tutors also teach in person." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book your free trial." },
    { label: "Tutors in Panvel", href: "/panvel/", description: "The Navi Mumbai edge, closest to Pen." },
    { label: "Tutors in Thane", href: "/thane/", description: "Another Mumbai-region page with local school context." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson for your child in Pen",
  closingBody:
    "Give us the course, the level and the class, and we will find a tutor who has taught it and an evening that survives the monsoon and the Ganeshotsav rush. The first lesson is free, the plan comes in writing, and all teaching happens online from home. Write to support@ibgram.com or message +91 7439 368 115.",
};
