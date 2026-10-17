import type { CitySeoPage } from "../types";

/**
 * /pedana/ - IB and IGCSE tutoring page for Pedana, the Kalamkari weaving town in Krishna district, Andhra
 * Pradesh, about 8 km from Machilipatnam. Online-only: tutors do not visit homes in Pedana, since in-person home
 * tuition runs only in Gurugram and parts of Delhi NCR. No IB or Cambridge/Edexcel school in Pedana could be confirmed.
 */
export const pedana: CitySeoPage = {
  slug: "pedana",
  countryName: "Pedana",
  countryNameLong: "Pedana, Krishna district, Andhra Pradesh",
  demonym: "Pedana",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions fitted around Sankranti week, the October-November cyclone watch and the dates of your child's own mock papers",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.2667, longitude: 81.1667 },
  wikipedia: "https://en.wikipedia.org/wiki/Pedana",
  alternateNames: ["Pedana Krishna", "Pedana Machilipatnam"],
  stripSchools: [],

  title: "Pedana IB & IGCSE Tutors | Private Home Tuition Online",
  metaDescription:
    "Looking for IB or IGCSE home tuition in Pedana? Live one-to-one online lessons for DP, MYP and IGCSE from specialist tutors, with a free trial first.",
  h1: "IB and IGCSE Tutors and Private Tuition in Pedana, Online",
  heroEyebrow: "PEDANA, KRISHNA DISTRICT: IB AND IGCSE HOME TUITION ONLINE",
  heroSubtitle:
    "A student in Pedana who needs IB or IGCSE home tuition is unlikely to find a local specialist, because the town's classrooms follow the Andhra Pradesh state syllabus and the odd CBSE. What works is a private lesson on video: IB Gram sets up a one-to-one with a tutor who has already taught the subject, the first class costs nothing, and the sessions happen in your child's own room. We do not send people to Pedana doors; that service exists only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Pedana",
  imageAltText: "A Pedana student in the Krishna delta working through an IGCSE Chemistry question with an online tutor",
  secondaryKeywords: [
    "IB tutor Pedana",
    "IGCSE tutor Pedana",
    "IB home tuition Pedana",
    "IGCSE home tuition Pedana",
    "IB private tuition Pedana",
    "IB Maths tutor Pedana",
    "IGCSE Maths tutor Pedana",
    "IB Physics tutor Pedana",
    "IB Chemistry tutor Pedana",
    "IB Biology tutor Pedana",
    "IB DP tutor Pedana",
    "IB MYP tutor Pedana",
    "IB PYP tutor Pedana",
    "IGCSE online tuition Pedana",
    "IB tutor Machilipatnam",
    "IGCSE tutor Krishna district",
    "online IB tutor Vijayawada",
    "IB and IGCSE tutors in Pedana",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for the single IB subject, level or IGCSE paper your child has",
    "No tutor travels to Pedana; doorstep tuition is a Gurugram and parts of Delhi NCR arrangement only",
    "The first lesson is free and rates arrive in writing",
    "Parents get a brief written update after each class",
  ],
  heroStats: [
    { value: "Telugu or English", label: "Support for either home language" },
    { value: "IB + IGCSE", label: "Two international routes" },
    { value: "IST", label: "No time-zone issues" },
    { value: "Free trial", label: "Test one lesson first" },
  ],

  intro: {
    heading: "Online IB and IGCSE lessons for students in the Krishna delta",
    paragraphs: [
      "Pedana is a small municipality of about thirty thousand people in Krishna district, eight kilometres from Machilipatnam and known across the country for Kalamkari, the hand-block printing done with natural dyes. Schooling in the town is government, aided or private English- and Telugu-medium, all under the state system, and engineering and medical aspirations run through the Intermediate and EAPCET route.",
      "We could not confirm any school in Pedana, or in Machilipatnam, that teaches the IB or a Cambridge or Edexcel IGCSE. So the question here is rarely which local school to pick. It is how a family can get an international syllabus taught well when nobody in the neighbourhood teaches it.",
      "Our answer is one-to-one video lessons with tutors who have coached these exact papers. The student works on a shared digital board, the tutor sees each step as it is written, and a mistake is caught in the line where it begins. A written summary follows every class, in plain language that a parent can read in two minutes.",
      "IB Gram is independent of the IB, Cambridge, Pearson and any school. Tutors teach and give feedback, and they do not write Internal Assessments, Extended Essays, TOK essays or similar coursework for a student.",
    ],
    bullets: [
      "A one-to-one live class instead of a batch",
      "IB PYP, MYP, DP and CP, with Cambridge and Edexcel IGCSE",
      "Tutors found by syllabus, not by postcode",
      "Free first lesson, then a written plan",
      "Tutor visits to homes exist only in Gurugram and parts of Delhi NCR, so Pedana lessons are online",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is delivered in Pedana, which changes what tutoring is for: it is preparation for a school elsewhere, a catch-up for a student already in one, or a route to a qualification taken privately.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "A PYP classroom organises learning around big ideas and ends with an Exhibition the child plans alone or in a group. Because there are no formal exams, a tutor works on spoken English, daily reading, tidy writing and the confidence to ask good questions.",
      countryNote:
        "Pedana families who inquire about PYP usually expect a posting or a relocation to Hyderabad, Bengaluru or overseas, and want the child comfortable in English before the switch.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP replaces single marks with criteria and finishes with a Personal Project in the last year. The transition is hardest for children trained to reproduce textbook answers, since the programme expects them to plan, justify and reflect.",
      countryNote:
        "Students moving from Andhra Pradesh state schools often find Sciences and Language and Literature the toughest adjustment, mainly because of the amount of structured writing involved.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for six subjects, a 4,000-word Extended Essay, Theory of Knowledge and a record of CAS activity. External exams are held mainly in May, and internal assessments are marked by teachers and moderated.",
      countryNote:
        "A Diploma student with Pedana ties is usually studying away from home, so a weekly online session with a subject specialist fills the gaps that large classes leave.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes at least two Diploma courses with a career-related study and a personal project. Only a few schools in India run it, but the academic courses within still need careful teaching.",
      countryNote:
        "Coastal Andhra enquiries about CP are uncommon, and support normally goes to the Diploma subjects within the combination.",
    },
  ],

  subjectsIntro:
    "Tutor selection begins with one question: which exact course will the student be assessed in? The answer to that, and the level, decide the shortlist more than any other detail, including timing.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof-led reasoning for students leaning toward engineering or science, plus an exploration that is begun in good time." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability models and technology, better suited to commerce, economics and life-science plans." },
    { name: "IB Physics", levels: "HL / SL", description: "A steady route from mechanics through waves to fields, rehearsing unfamiliar data questions along the way." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics and organic chemistry, with the data booklet used from the first week." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecosystems, with answers written to the verb the question uses." },
    { name: "IB Economics", levels: "HL / SL", description: "Labelled diagrams explained in sentences and linked to a current example, as markers prefer." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case answers that name the firm, plus a research project built on a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis, comparative essays and a spoken commentary students rehearse aloud." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithmic thinking, networks and a working solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled precisely, evaluated, and turned into an argued answer." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case studies, graph skills and a fieldwork investigation the student can defend." },
    { name: "IB History", levels: "HL / SL", description: "Reading sources critically and shaping a sustained essay argument." },
    { name: "IB Telugu B", levels: "SL / HL", description: "Reading unseen passages, formal writing and spoken fluency for students whose first language is Telugu." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talking through knowledge questions and exhibition objects while the student writes the essay alone." },
  ],

  igcseSubjectsIntro:
    "Core versus Extended is settled before anything else, since one code can mean two different papers. After that the plan counts down from the entry series: Cambridge in February-March, May-June or October-November, and Edexcel in January, May-June or October.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, graphs and trigonometry for Extended, with working shown at every step because method marks depend on it." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logs and vectors one year ahead of the Indian norm, which helps later IB Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, thermal physics, waves and nuclear ideas, plus the written practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "The mole, rates, electrolysis and organic compounds, which carry most of the marks." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecology, with longer answers planned before they are written." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, firms, government and trade, with diagrams that are neat and explained." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Number systems, networks and pseudocode, practised until trace tables feel routine." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, control accounts and financial statements built through repeated worked sets." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "All four skills with extra time on formal writing and listening for Telugu-medium students." },
    { name: "IGCSE Telugu as a Foreign Language", levels: "Grade 9-10", description: "Language practice for students who want the home language on their transcript, subject to availability." },
  ],

  regionsTitle: "Pedana and the Machilipatnam belt our online tutoring reaches",
  regionsIntro:
    "Because lessons arrive by video, geography is context rather than commute. The places below show where Krishna-delta students actually study and which cities families look toward when they think of leaving.",
  regions: [
    { name: "Pedana town", note: "The mandal headquarters, a weaving town with state-syllabus schools and a dependable culture of home tuition." },
    { name: "Machilipatnam (Bandar)", note: "The district headquarters about 8 km away, with the colleges, the port heritage and most of the area's larger schools." },
    { name: "Manginapudi", note: "A beach settlement near Machilipatnam, where tourism and fishing shape household schedules." },
    { name: "Gudivada", note: "A larger town on the route toward Vijayawada, often used as a base by families working in trade and services." },
    { name: "Pamarru", note: "A neighbouring mandal town with agriculture-based households and school bus routes into Pedana." },
    { name: "Challapalli", note: "A delta town near the Krishna river mouth, quieter and more rural, where connectivity matters for online lessons." },
    { name: "Avanigadda", note: "A pilgrimage and trading town on the Krishna, with families who rely on Machilipatnam and Vijayawada for study options." },
    { name: "Vijayawada", note: "The big city roughly an hour or more away by road, where many Krishna-district families look for higher education and services." },
    { name: "Gannavaram", note: "A town with the Vijayawada airport, relevant to families who travel for work or plan to study abroad." },
    { name: "Nuzvid", note: "A town with a well-known engineering institute, one of the destinations students from the district aim for." },
  ],

  schoolDisclaimer:
    "Schools and institutions are named only to describe what is available and where students go next. IB Gram is independent and holds no partnership, referral arrangement or endorsement relationship with any school, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Pedana and Machilipatnam",
      note: "We could not confirm any school in Pedana or Machilipatnam that teaches the IB or a Cambridge or Edexcel IGCSE. Local schools follow the Andhra Pradesh syllabus, with some CBSE options, so international curricula usually mean a move.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad is the closest large city with several international-curriculum schools, and many coastal Andhra families have relatives there. Always confirm programmes and admissions with the school itself.",
      schools: ["Oakridge International School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru has one of India's largest clusters of IB schools and is a common destination for professionals from Andhra Pradesh.",
      schools: ["The International School Bangalore", "Stonehill International School"],
    },
  ],

  modesIntro:
    "Whichever plan a Pedana family chooses, the lesson is live and one-to-one over video with a tutor in India. The plans differ only in pace. A visit to a Pedana address is not available; home visits are offered only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Steady weekly lessons",
      description:
        "One or two classes a week on a fixed day, building through the syllabus in order and revisiting weak topics. The default for students with months before an exam.",
      bullets: [
        "A single tutor through the term",
        "Past-paper questions in each class",
        "Notes sent after every lesson",
        "Weeks off around Sankranti are easy to arrange",
      ],
    },
    {
      title: "Focused exam preparation",
      description:
        "A tighter run of lessons before a mock or an exam series, concentrating on the specific topics that are still losing marks.",
      bullets: [
        "Timed questions marked line by line",
        "Plan agreed before the first class",
        "Helpful for private candidates",
        "Ends when the exam ends",
      ],
    },
    {
      title: "Home tuition without the visit",
      description:
        "Parents often search for home tuition; in Pedana it means private lessons delivered to your child at home by video. Tutors do not come to the address, and in-person visits are restricted to Gurugram and parts of Delhi NCR.",
      bullets: [
        "Laptop, headphones and a quiet corner",
        "Parent can watch the trial class",
        "Tutor replaced if the fit is wrong",
        "Quote in writing before booking",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Pedana, and who looks for them?",
      paragraphs: [
        "Not that we could confirm. Pedana's schools, and those of Machilipatnam, follow the Andhra Pradesh state syllabus, and a few are CBSE. Anyone who wants the IB or an IGCSE must think of Hyderabad, Bengaluru, Chennai or a boarding school elsewhere, or study the syllabus privately.",
        "The families who write to us are often connected to something beyond the delta. A son or daughter works in Hyderabad's technology sector and wants the younger sibling to follow an international route. A weaving or aquaculture business has export links. A relative in the United States or Australia has suggested that an international curriculum would ease university applications.",
        "For such families, the tutor acts as a bridge. A Class 9 student can start IGCSE-style Maths and Science a year before a planned move. A student already in an IB school elsewhere but staying with grandparents in Pedana can keep a weekly class without losing continuity.",
        "Since the delta has no ecosystem around these syllabuses, tutors cannot be chosen locally. Matching therefore rests on syllabus experience and the trial lesson, which gives a Pedana student the same quality of teaching as a family in a metro.",
        "School programmes change, so always verify what a school offers on its own website.",
      ],
      table: {
        caption: "Why Krishna-district families consider IB or IGCSE",
        columns: ["Situation", "When it arises", "What tutoring does"],
        rows: [
          ["Relocation to Hyderabad or Bengaluru", "Months before the move", "Bridges state-syllabus habits to IB command terms"],
          ["Boarding for the Diploma", "Class 9 to 10", "Builds Maths and Science depth early"],
          ["Study abroad ambition", "From Class 9", "Works toward strong predicted grades"],
          ["Private IGCSE entry", "Whole course", "Covers the full specification and exam skills"],
        ],
      },
    },
    {
      heading: "How does the Andhra Pradesh syllabus compare with IB and IGCSE?",
      paragraphs: [
        "The state syllabus and its Intermediate stage lean on well-defined chapters and predictable question types, a system that rewards memory and speed. IB and IGCSE hold back on predictability: a graph appears in an unfamiliar context, a case study mixes two topics, and the examiner wants reasoning in sentences.",
        "That mismatch explains why a strong Pedana student can feel suddenly slow in a first IGCSE paper. The knowledge is not missing; the habit of explaining is, and that habit can be trained in a few months of targeted practice.",
        "Marking differs, too. State exams report marks and percentages, IGCSE reports grades A* to G, and the Diploma reports points out of 45. Universities in India and abroad convert these in their own ways.",
        "Neither system is gentler. The tutor's first task is to show what a full-mark answer looks like in the new format, so effort goes where it earns marks.",
      ],
      table: {
        caption: "State syllabus, CBSE, IGCSE and IB Diploma side by side",
        columns: ["Point", "AP state / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Stage", "Class 9-12", "Class 9-10", "Class 11-12"],
          ["Result", "Marks and percentage", "Grades A* to G", "Points out of 45"],
          ["Style", "Chapter-based recall", "Structured and applied", "Applied, with essay and investigation"],
          ["Near Pedana", "Widely available", "Not confirmed", "Not confirmed"],
          ["Entrance link", "EAPCET, JEE, NEET", "Leads to IB, A Level or CBSE", "CUET-UG, AIU equivalence, overseas"],
        ],
      },
    },
    {
      heading: "What shapes the price of IB and IGCSE tuition in Pedana?",
      paragraphs: [
        "We do not print a price list, because a figure without a subject and level would mislead. Rates are written down and sent before you book, so you can compare calmly.",
        "The biggest factor is what is being taught. Higher Level Diploma Chemistry draws on years of specialist experience, while a Class 6 MYP session needs a different kind of preparation. How often you meet, and for how long, comes next.",
        "Tutor background adds to it. Someone who has taught a syllabus for several years and understands how examiners award marks costs more than a recent graduate, and that is often worth it for a final paper.",
        "A Pedana family does not pay for the bus to Machilipatnam or a coaching-centre fee, so the quote is the whole amount. The free trial lets you judge value before paying anything.",
      ],
      bullets: [
        "Programme, level and subject",
        "Tutor's experience with the specification",
        "Number and length of sessions",
        "No travel cost for online lessons",
      ],
    },
    {
      heading: "Is an online tutor better than Vijayawada coaching or self-study for IB?",
      paragraphs: [
        "For IB and IGCSE, an online subject specialist generally gives a Pedana student more than the alternatives. Vijayawada and Machilipatnam have strong coaching for EAPCET, JEE and NEET, but nothing aimed at IB command terms or Cambridge mark schemes.",
        "Self-study is cheap but unreliable on marking. A student reading their own answer against the scheme tends to be generous, and repeated slips go unnoticed for months.",
        "A local tutor is easy to book, but very few have taught these syllabuses. Online removes the journey and widens the pool to the whole country.",
        "The price is reliability: a steady connection and power. In the cyclone season and during monsoon storms, delta towns can lose both, so a backup is wise.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Pedana",
        columns: ["Route", "What it offers", "Drawback"],
        rows: [
          ["Online one-to-one tutor", "Syllabus-specific live feedback", "Needs a stable connection"],
          ["Vijayawada or Machilipatnam coaching", "Routine and peers", "Built for entrance exams"],
          ["Local general tutor", "Convenience", "Seldom trained in IB or Cambridge"],
          ["Self-study", "Low cost", "No expert marking"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do the delta seasons affect study?",
      paragraphs: [
        "IB Diploma papers are mostly in May, with some schools sitting in November. Cambridge IGCSE has February-March, May-June and October-November series. Edexcel has January, May-June and October. A private candidate registers through an approved centre, likely in Vijayawada, Hyderabad or Chennai.",
        "Local weather matters. Summers in the Krishna delta are hot and humid, and the north-east monsoon plus cyclone season from October to December can bring heavy rain, flooding of low fields and power cuts. Study plans that depend on one late-year paper need a buffer.",
        "Festivals set the rest of the calendar. Sankranti in January is the biggest family occasion, followed by Ugadi, Vinayaka Chavithi, Dasara and Deepavali. A mock scheduled the week after Sankranti or Dasara loses time to travel.",
        "We suggest starting the heavy revision about ten weeks before each paper and keeping the last two weeks for timed practice.",
      ],
      table: {
        caption: "Exam calendar and the Pedana year",
        columns: ["Months", "Exam activity", "Local factor"],
        rows: [
          ["January-February", "Edexcel January papers, mocks", "Sankranti holidays early in the year"],
          ["March-April", "Cambridge results, IB preparation", "Ugadi, rising heat"],
          ["May-June", "IB May exams, Cambridge May-June", "Hot and humid, evening lessons"],
          ["July-September", "IB results, new session", "Southwest monsoon, Vinayaka Chavithi"],
          ["October-December", "Autumn series, IB November", "Cyclone watch, Dasara and Deepavali breaks"],
        ],
      },
    },
    {
      heading: "Where can a Pedana IB or IGCSE student study next?",
      paragraphs: [
        "In Andhra Pradesh the nearby options include Krishna University in Machilipatnam, Acharya Nagarjuna University near Guntur, IIIT Nuzvid, NIT Andhra Pradesh at Tadepalligudem and AIIMS Mangalagiri. Admission is mostly through national or state exams, and IB students should read the latest notices before choosing subjects.",
        "The Association of Indian Universities issues equivalence for the IB Diploma, which many institutions accept. Even so, each university sets its own subject requirements and cut-offs.",
        "Abroad, IB and IGCSE are well understood. The UK uses predicted grades, Canada and Australia have conversion tables, and US colleges consider the Diploma with test scores where required.",
        "Tutors raise grades in the subjects a course needs; they cannot promise admission. Planning is best done before Class 11, when higher-level subject choices are fixed.",
      ],
      bullets: [
        "Krishna University, IIIT Nuzvid, NIT Andhra Pradesh and AIIMS Mangalagiri via entrance exams",
        "AIU equivalence for the IB Diploma",
        "CUET-UG for central universities",
        "UK, Canada, Australia and US routes",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught over video?",
      paragraphs: [
        "A session begins with the problem the student could not finish. The tutor then works two similar questions on the shared board, and ends with one timed question marked immediately. The board is saved so the student can revise from it.",
        "Analysis and Approaches suits students who enjoy algebra and calculus and may head toward engineering. Applications and Interpretation fits those leaning to business, economics or the life sciences, with statistics and modelling at its core.",
        "For the sciences, the tutor mixes concept explanation with the skills the internal assessment rewards: controlling variables, handling uncertainty, plotting and concluding. Real data sets can be shared on screen, so no laboratory is needed.",
        "The method is simple: find the half-dozen topics that cost the most marks and spend the most time on them.",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects should a Pedana student choose?",
      paragraphs: [
        "Extended opens the full grade scale and suits a student who hopes to continue into IB Higher Level or A Level. Core suits a student who wants a secure pass. Schools usually decide, but a private candidate chooses at registration.",
        "Maths carries the decision. Extended Maths and Additional Maths prepare a student well for IB Analysis and Approaches. A student who finds Maths a struggle may do better to secure a strong Core result.",
        "Subject choices should follow the target. Engineering suggests Maths, Physics, Chemistry and Computer Science. Medicine suggests Biology, Chemistry and Maths. Commerce suggests Economics, Business Studies and Accounting.",
        "Both Cambridge and Pearson Edexcel are widely accepted. The tutor follows the specification printed on the student's entry.",
      ],
      table: {
        caption: "Choosing IGCSE tiers and subjects",
        columns: ["Goal", "Tier", "Subjects"],
        rows: [
          ["Engineering", "Extended", "Maths, Additional Maths, Physics, Chemistry"],
          ["Medicine", "Extended", "Biology, Chemistry, Maths"],
          ["Commerce", "Extended or Core", "Economics, Business, Accounting"],
          ["Secure pass", "Core", "Core papers in each subject"],
        ],
      },
    },
  ],

  tutorsIntro:
    "These are the kinds of tutors a Pedana family can be matched with, from PYP to Diploma and IGCSE, chosen for the exact course. All teach on video, which is the only format available in Pedana.",

  process: [
    { title: "Tell us the details", description: "The programme, subject, level, recent marks and the evening hours free at home in Pedana." },
    { title: "Receive a shortlist", description: "A few tutors who have taught the exact course, with a note on each." },
    { title: "Try a free lesson", description: "A real topic, taught live, with no cost or promise attached." },
    { title: "Fix a first month", description: "Topics, weekly slot and how updates reach you, put in writing." },
    { title: "Keep reviewing", description: "Check-ins every few weeks, and a swap of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the paper", description: "The shortlist starts from the exact course, level and tier." },
    { title: "Right for a delta town", description: "With no IB or IGCSE school nearby, a national pool of tutors is the practical choice." },
    { title: "Judge by a lesson", description: "The free class shows how the tutor explains, not just a CV." },
    { title: "A fixed boundary", description: "Tutors coach and give feedback but never write IAs, Extended Essays or TOK essays." },
    { title: "Short written updates", description: "A few lines after each class keep parents informed." },
    { title: "Easy to change", description: "Pause, swap tutor or stop whenever it suits you." },
  ],

  faqs: [
    { question: "Can I find an IB or IGCSE tutor in Pedana?", answer: "Not a local one that we could verify, so the sensible route is an online specialist. IB Gram pairs Pedana students with tutors who have taught the exact IB or IGCSE course, and the lessons run live over video in IST. Where the tutor lives hardly matters; what counts is that they know the specification and teach it clearly." },
    { question: "Do you offer IB or IGCSE home tuition in Pedana?", answer: "We offer private tuition at home, delivered online. Tutors do not travel to Pedana, because in-person home tuition is limited to Gurugram and parts of Delhi NCR. Your child sits at home with a laptop, sees the tutor on screen and shares a digital whiteboard for working." },
    { question: "How much does tuition cost?", answer: "The rate depends on the programme, the level, the subject and the tutor's experience, and it is quoted in writing before you book. A Diploma HL class and a younger MYP class are priced differently. Online lessons have no travel cost, and the first lesson is a free trial." },
    { question: "Is there an IB or IGCSE school in Pedana or Machilipatnam?", answer: "We could not confirm one. Schools in the area follow the Andhra Pradesh state syllabus, with a few CBSE schools. Families who want an international curriculum generally look at Hyderabad, Bengaluru or boarding schools, and use online tutoring to prepare for that move." },
    { question: "Can my child take IGCSE privately from Krishna district?", answer: "Yes, through an approved Cambridge or Pearson exam centre, which may be in Vijayawada, Hyderabad or Chennai. The course itself can be taught online. Registration closes months before each series, so confirm dates, fees and rules with the centre early." },
    { question: "Is the first lesson really free?", answer: "Yes. Each match starts with a free trial on a real topic, so you can judge the tutor's style and pace. If it does not suit your child, we suggest another. Regular tuition begins only after you are happy, with a written plan for the first month." },
    { question: "Will the tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors explain the criteria, help narrow a research question, check methods and comment on drafts written by the student. They never write or rewrite an Internal Assessment, Extended Essay, TOK essay or any graded work." },
    { question: "Can lessons be taught with Telugu support?", answer: "Lessons are in English because the exams are, but a tutor who speaks Telugu can sometimes be matched to explain a tricky idea in the home language. Tell us when you send the brief, and we will see whether it is possible for your subject and level." },
    { question: "What if the power or internet fails during a lesson?", answer: "Keep a charged laptop and a mobile hotspot ready. Delta storms and the cyclone season can interrupt both for a few hours. If a class is cut short, the tutor reschedules the lost time and sends notes on what was covered." },
    { question: "Can a state-syllabus student switch to IGCSE or IB?", answer: "Yes, and many do. The main hurdle is exam language and answer length, not content. A tutor begins with command terms and a few past-paper questions so that the student learns what examiners reward before the new course starts." },
    { question: "When is the right time to start?", answer: "Start when the course begins: Class 9 for IGCSE and Class 11 for the Diploma, so gaps are fixed early. A later start still helps. Even six to eight weeks before one paper can improve technique and confidence." },
    { question: "What times suit Pedana families?", answer: "Weekday evenings and weekend mornings suit most. In the hot months, sessions move earlier or later. Around Sankranti, Dasara and Deepavali, slots are agreed ahead so revision is not lost." },
    { question: "How will I know my child is improving?", answer: "A short note follows each session, listing the topic, strengths and tasks. A fuller review every few weeks compares progress with the target grade. Parents may also attend the trial class." },
    { question: "What if the tutor is not right for my child?", answer: "We arrange another tutor, without charge or awkwardness. Mismatches of pace or style are common and easy to fix. There is no minimum commitment, so you may pause or stop at any time." },
    { question: "Is IB Gram connected to any school or exam body?", answer: "No. IB Gram is independent of the IB, Cambridge, Pearson and every school, and nothing here is an endorsement. You can reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "A wider look at online IB and IGCSE help for Indian towns." },
    { label: "IB and IGCSE home tuition in Gurugram", href: "/gurgaon/", description: "The area where a tutor does visit the home." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the two Diploma years contain." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion marking and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "A Diploma mix with a career pathway." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Which Maths course fits which student." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write in with the details and ask for a slot." },
  ],

  closingHeading: "Ask for a free IB or IGCSE lesson in Pedana",
  closingBody:
    "Send the programme, subject, level, how marks look right now and which evenings are quiet at home in Pedana. A tutor suggestion, a short account of their teaching and trial times will come back. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
