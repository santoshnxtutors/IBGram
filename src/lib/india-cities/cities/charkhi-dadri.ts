import type { CitySeoPage } from "../types";

/**
 * /charkhi-dadri/ - IB and IGCSE tutoring page for Charkhi Dadri, Haryana. No IB or IGCSE school could
 * be confirmed in the town, so stripSchools is empty and the school clusters are honestly labelled
 * nearby-city groups (Gurugram, Delhi). Delivery is online one-to-one. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const charkhiDadri: CitySeoPage = {
  slug: "charkhi-dadri",
  countryName: "Charkhi Dadri",
  countryNameLong: "Charkhi Dadri, Haryana",
  demonym: "Charkhi Dadri",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons step around the wheat harvest weeks, Diwali, dense winter fog and the loo-season afternoons, and follow your child's own school term",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.5921, longitude: 76.2653 },
  wikipedia: "https://en.wikipedia.org/wiki/Charkhi_Dadri",
  alternateNames: ["Dadri", "Charkhi Dadri town", "Charkhi Dadri Haryana"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Charkhi Dadri | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Charkhi Dadri, Haryana: private lessons from home, plans that respect harvest and fog, free trial lesson first.",
  h1: "IB and IGCSE Tutors and Home Tuition in Charkhi Dadri",
  heroEyebrow: "CHARKHI DADRI: IB & IGCSE TUITION FOR HARYANA FAMILIES",
  heroSubtitle:
    "Looking for home tuition in Charkhi Dadri for an IB or IGCSE student? Lessons here are online, one to one, taught live from India to your child at the family desk. Nobody arrives at the gate, because in-person visits run only in Gurugram and parts of Delhi NCR, about a hundred kilometres east.",
  primaryKeyword: "IB and IGCSE tutors in Charkhi Dadri",
  imageAltText: "A Charkhi Dadri student working through an IB Mathematics problem set on a laptop during an online one-to-one lesson",
  secondaryKeywords: [
    "IB tutor Charkhi Dadri",
    "IGCSE tutor Charkhi Dadri",
    "IB home tuition Charkhi Dadri",
    "IGCSE home tuition Charkhi Dadri",
    "IB private tuition Charkhi Dadri",
    "IB Maths tutor Charkhi Dadri",
    "IGCSE Maths tutor Charkhi Dadri",
    "IB Physics tutor Charkhi Dadri",
    "IB Chemistry tutor Charkhi Dadri",
    "IB Biology tutor Charkhi Dadri",
    "IB DP tutor Charkhi Dadri",
    "IB MYP tutor Charkhi Dadri",
    "IB PYP tutor Charkhi Dadri",
    "IGCSE online tuition Charkhi Dadri",
    "IB tutor Dadri Haryana",
    "IB tutor Badhra",
    "IB tutor Jhojhu Kalan",
    "online IB tuition Haryana Charkhi Dadri",
    "Cambridge IGCSE tuition Charkhi Dadri",
  ],

  heroTrustPoints: [
    "Tutors in India teaching on IST, so no time-zone juggling for a Haryana household",
    "A free trial lesson first, then rates in writing before you book anything",
    "A short written note after every lesson for the parents",
    "A change of tutor on request if the fit is not right",
    "Coaching only: never a written IA, Extended Essay or TOK essay",
  ],
  heroStats: [
    { value: "IST", label: "Tutor and family on one clock" },
    { value: "PYP to DP", label: "IB stages plus IGCSE" },
    { value: "Free trial", label: "Watch a real lesson first" },
    { value: "Online", label: "One to one, at your own desk" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Charkhi Dadri, for a district that looks outward",
    paragraphs: [
      "Charkhi Dadri became a district of its own in 2016, carved out of Bhiwani, and the town still feels like a place where the ambitions of a family run well past the boundary. Sons and daughters of farming households, army families, government employees and small traders look towards Delhi, Gurugram and abroad. A parent who types home tuition Charkhi Dadri into a phone is usually trying to reach a teacher that no local centre supplies: someone who knows the IB Diploma or Cambridge IGCSE mark scheme line by line.",
      "The plain local picture is this. We could not confirm any school in Charkhi Dadri that teaches the IB or a Cambridge or Edexcel IGCSE course. Schools here follow the Haryana board (HBSE) or CBSE, and that is the ground most children stand on. A family that wants an international syllabus usually has a reason: a parent posted abroad, a move to a Gurugram school, a plan for a UK or Canadian degree, or an older sibling already in an IB classroom somewhere else.",
      "IB Gram works through online one-to-one lessons taught by tutors based in India, on Indian Standard Time. Because in-person home tuition is offered only in Gurugram and parts of Delhi NCR, every Charkhi Dadri lesson is live on video, with a shared whiteboard, the child's own past papers and a written note afterwards. The first lesson is free, so you judge the teaching before any rate is discussed.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary course organised around units of inquiry, where reading, number work and curiosity grow out of a shared question rather than a textbook chapter.",
      countryNote:
        "For a Charkhi Dadri child who has joined a PYP school elsewhere, online lessons keep spoken English, reading stamina and number fluency steady when the school itself is a long distance away.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of concept-led teaching assessed against published criteria, ending in a personal project. Students learn to explain their thinking in writing, not just reach an answer.",
      countryNote:
        "Families moving a child from an HBSE or CBSE class into MYP mid-way often need help with criterion-style writing and command terms; a tutor can build that bridge online in a few months.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year pre-university course of six subjects plus the core: Theory of Knowledge, the Extended Essay and CAS. Higher Level subjects demand proof, data and long-form answers.",
      countryNote:
        "For Charkhi Dadri students aiming at Delhi University through CUET-UG or at a foreign degree, the DP route is workable only with a clear plan for equivalence, subjects and the tutor support behind them.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A shorter diploma that pairs two or more DP courses with a career-related study, a reflective project and language development.",
      countryNote:
        "Rarely heard of in Haryana, the CP suits a student with a practical or vocational direction who still wants an internationally recognised credential; tutors coach the DP course components within it.",
    },
  ],
  programmesIntro:
    "Whichever stage a Charkhi Dadri student is at, the work begins by locating what the child already knows against what the syllabus expects.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, functions, calculus and proof, for students who lean towards engineering, pure science or economics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-based work, a steadier path for future commerce, medical and social-science students." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with practical design questions and data handling." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energetics, kinetics and organic chemistry, along with how marks are split across a long response." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics and ecology, with heavy use of graphs, tables and experimental evaluation." },
    { name: "Economics", levels: "SL / HL", description: "Markets, trade and development; a natural match for children from trading and agricultural households who see commodity prices up close." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis, a good fit for a family business heir." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and networks, learned through trace tables and timed written practice." },
    { name: "Psychology", levels: "SL / HL", description: "Research studies, methodology and the internal assessment procedure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close analysis of non-fiction and fiction, and comparative written commentary." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literature or language acquisition; a home language for almost every student here and often a high-scoring option." },
    { name: "Theory of Knowledge", levels: "Core", description: "Help with framing knowledge questions and planning an exhibition; the essay and the exhibition remain the student's own." },
  ],
  subjectsIntro:
    "Subjects are picked from the degree the student has in mind, the marks already on the school report and the tutors available, not from whichever is easiest to teach.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Number, algebra, geometry and statistics at two tiers, with emphasis on multi-step reasoning." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Functions, differentiation and trigonometry, a helpful bridge for a student who may pursue IB HL or A Level Mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, electricity, waves and atomic physics with calculation and practical-skills papers." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Particle theory, reactions, the periodic table and organic basics." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Organisms, genes and ecology, with data-response practice." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking, suitable for students who speak Haryanvi or Hindi at home." },
    { name: "English First Language", levels: "Cambridge 0500", description: "Composition and directed writing for students already fluent in English." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Pseudocode, logic and data representation." },
    { name: "Economics", levels: "Cambridge 0455", description: "Demand and supply, the labour market and government policy." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "Language skills for a student who wants an easy scoring subject beside heavier sciences." },
  ],
  igcseSubjectsIntro:
    "IGCSE is usually taken by students aged fourteen to sixteen. Extended papers are for those aiming at A Level or IB science and mathematics; Core suits a steadier start.",

  regionsTitle: "Charkhi Dadri areas and villages our online students study from",
  regionsIntro:
    "Lessons happen on a laptop wherever the family lives in the district. These notes show how each part of the area tends to shape a child's week.",
  regions: [
    { name: "Charkhi Dadri town centre", note: "The old market core and the colonies around the bus stand, where schools, coaching classes and shops sit close together and evening lessons fit easily after school." },
    { name: "Bhiwani Road side", note: "Newer housing along the approach from Bhiwani, popular with government employees; a steady 6 pm to 8 pm slot usually works." },
    { name: "Mahendragarh Road side", note: "The south-facing edge of town towards Mahendragarh and Rewari, where some families also look to Gurugram for schooling." },
    { name: "Badhra", note: "A town to the west with its own market and schools, where farming calendars affect when students are free." },
    { name: "Jhojhu Kalan", note: "A large village settlement where households mix agriculture with salaried jobs; children often travel to town for school, so afternoon lessons work less well than evenings." },
    { name: "Bond Kalan", note: "A rural area with a strong dairy and farming base, where electricity cuts and summer heat matter for online lesson planning." },
    { name: "Balali", note: "The village known across India for its wrestling tradition and the Phogat family, and a reminder of how much sport shapes a young Dadri student's day." },
    { name: "Loharu and the Bhiwani side", note: "Neighbouring towns across the old district boundary, whose families often share tuition habits and school choices with Charkhi Dadri." },
  ],

  schoolClusters: [
    {
      city: "Charkhi Dadri town",
      note: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Charkhi Dadri. Local schools follow HBSE or CBSE, which is why international-syllabus tuition here is almost always online.",
      schools: [],
    },
    {
      city: "Nearby: Gurugram",
      note: "Roughly 100 kilometres east, Gurugram has a wide set of IB and IGCSE schools, and some Charkhi Dadri families consider moving or boarding there for the senior years.",
      schools: ["Amity International School, Sector 46", "GD Goenka World School, Sohna", "Strawberry Fields High School, Sector 26"],
    },
    {
      city: "Nearby: Delhi",
      note: "Delhi lies about the same distance, with older schools that have run international curricula for decades, though daily commuting from Charkhi Dadri is unrealistic.",
      schools: ["DPS RK Puram", "Vasant Valley School, Delhi", "Sanskriti School, Delhi"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only because families in the Charkhi Dadri area sometimes consider them. IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any school listed, and a mention is not an endorsement. Check each school's current curriculum and admission rules with the school.",

  modesIntro:
    "No tutor comes to a Charkhi Dadri house, since in-person visits exist only in Gurugram and some Delhi NCR areas. Families choose one of three online patterns.",
  modes: [
    {
      title: "Weekly online private lessons",
      description: "One tutor, one subject, one fixed weekly slot. The tutor marks the student's own work live and sets a task before the next lesson.",
      bullets: ["Same day and hour each week", "Live marking on a shared board", "Short note to parents"],
    },
    {
      title: "Bridging from HBSE or CBSE",
      description: "For a student shifting syllabus, a steady plan that closes the gap in command terms, written explanations and practical skills.",
      bullets: ["Gap check in lesson one", "Command-term practice", "Gradual increase in difficulty"],
    },
    {
      title: "Focused exam block",
      description: "A compact run of timed papers and error review before the May or November session, or the IGCSE series.",
      bullets: ["Timed past papers", "Personal error log", "Topic priorities by mark weight"],
    },
  ],

  sections: [
    {
      heading: "Who chooses IB or IGCSE in Charkhi Dadri, and why?",
      paragraphs: [
        "The families who ask about an international syllabus from Charkhi Dadri are few, and each has a clear reason. Some have a parent working abroad, and a child who will eventually join that parent. Some have an elder sibling already studying for the Diploma in Gurugram or Delhi. Others are planning for a degree in the UK, Canada, Australia or the United States and want a credential that overseas admissions offices read without explanation.",
        "A second group are students in HBSE or CBSE classes who find the rote habits of exam preparation limiting. They like the idea of extended answers, practicals and assessed projects, and they ask whether an IGCSE or IB year could suit them better. A tutor's first job for such a child is to look at real work and say honestly what the change would involve.",
        "A third group is easy to overlook: defence and paramilitary families. Haryana sends many young people into the armed forces, and postings move households from one state to another. An IB or IGCSE school near the next posting may be the only way to keep a child on a continuous programme, and online tutoring bridges the months in between.",
        "Whatever the reason, a family should decide on syllabus before subjects, and on subjects before tutors. That order keeps effort from being wasted on a course that does not fit the degree or the child.",
      ],
    },
    {
      heading: "How do HBSE, CBSE, IGCSE and the IB Diploma compare for a Haryana student?",
      paragraphs: [
        "The Haryana board sets textbooks through its own state syllabus, with Hindi or English as the medium, and it ends in a Class 10 and Class 12 board examination conducted from Bhiwani. CBSE follows NCERT books, in English or Hindi, and is the national default. Both reward accurate recall and steady application, and both lead straight to state entrance tests, JEE Main, NEET and CUET-UG.",
        "IGCSE is a two-year course for ages fourteen to sixteen, examined in separate papers for each subject. The questions are structured, often ending in a part that asks the student to explain or evaluate. The IB Diploma stretches across six subjects and a core, and demands more extended writing and independent investigation than either Indian board.",
        "None of these is simply harder than another. The difference is what the examiner wants to see. A student who is very strong at HBSE mathematics may lose marks in IGCSE by skipping working, or in the IB by not interpreting a graph in words. That is exactly the gap that individual tutoring narrows.",
        "The table puts the four side by side for a parent comparing paths.",
      ],
      table: {
        caption: "Four routes a Charkhi Dadri family may compare",
        columns: ["Feature", "HBSE", "CBSE", "Cambridge / Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Medium in class", "Hindi or English", "English or Hindi", "English", "English plus a second language"],
          ["Final exam", "Board exam, Class 10 and 12", "Board exam, Class 10 and 12", "Series exams, usually at 16", "May or November exams at 18"],
          ["Answer style", "Textbook-linked", "Recall and application", "Structured, explanation-heavy", "Extended, data and argument driven"],
          ["Available in Charkhi Dadri", "Yes", "Yes", "None confirmed", "None confirmed"],
          ["Entry to Indian degrees", "Direct", "Direct", "Needs a Class 12 pathway", "AIU equivalence, then CUET-UG where needed"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Charkhi Dadri?",
      paragraphs: [
        "IB Gram does not print a price list, because the request from a Haryana parent can be anything from one IGCSE Chemistry lesson a week to three Diploma subjects at Higher Level. The rate is quoted in writing after the free trial, and nothing is billed before you have seen a lesson.",
        "Four things move the figure. First, the subject and level: Higher Level Physics and Mathematics need a tutor with depth that Core IGCSE English might not. Second, tutor experience with that specific syllabus and its mark scheme. Third, how many lessons a week you want and how long each runs. Fourth, whether you need extra help in the weeks before an exam session.",
        "What a family does not pay for in Charkhi Dadri is a long commute. There is no fuel to Gurugram, no parking and no hour lost on the Jhajjar or Rohtak highway each way. For many households that changes the real cost of a good tutor more than the hourly rate does.",
        "When you ask for a quote, say how many students will share the plan, which session you are aiming for and whether you want weekend slots. That lets the tutor propose something realistic.",
      ],
    },
    {
      heading: "Is online tuition a better choice than a Gurugram centre, a local coaching class or self-study?",
      paragraphs: [
        "Yes for most Charkhi Dadri students, because the alternatives each have a built-in problem. Gurugram coaching means a daily journey of close to a hundred kilometres each way, which no school-going child can sustain. Local coaching is effective for JEE, NEET and board preparation but does not work from IB or Cambridge mark schemes.",
        "Self-study has real strength for a disciplined teenager, especially with past papers and examiner reports available free online. Its weakness is the absence of a second reader. A student cannot see the pattern in their own errors, such as always dropping the unit or never stating the assumption the question was probing.",
        "An online private tutor sits between these. The student stays home and keeps the school routine. The tutor reads the actual page of working and corrects it while the student watches. A missed lesson can be moved without a journey wasted.",
        "The comparison below sets the options out clearly, including where each one is weak.",
      ],
      table: {
        caption: "Ways a Charkhi Dadri student can prepare for IB or IGCSE",
        columns: ["Option", "Knows IB or IGCSE marking", "Individual attention", "Practical burden"],
        rows: [
          ["Online one-to-one tutor", "Yes, by subject and level", "Full lesson on one child", "A laptop, internet and a quiet desk"],
          ["Coaching centre in Gurugram", "Sometimes, varies by centre", "Shared with a batch", "Long daily travel or a move"],
          ["Local HBSE or CBSE class", "No, aimed at board exams", "Shared with a large class", "Low, but syllabus mismatch"],
          ["Private home teacher in town", "Rarely", "Good, if one exists", "Hard to find for international syllabus"],
          ["Self-study with papers", "Only what the student reads", "None", "Needs strong discipline"],
        ],
      },
    },
    {
      heading: "How do harvest, fog and festivals shape an IB or IGCSE study calendar in Charkhi Dadri?",
      paragraphs: [
        "The Haryana year runs on crop rhythms even for families who no longer farm. Wheat is cut in April, just when IGCSE and IB students should be revising, and in a household where everyone helps, lesson time can vanish for a fortnight. A sensible plan front-loads revision in February and March, then keeps April light.",
        "The hot dry months bring loo winds in May and June, and afternoon power cuts in rural belts. Online lessons should sit in the early morning or after dusk, and a student preparing for a May exam should have a fallback connection, such as a phone hotspot, tested in advance.",
        "Winter carries dense fog from December into January. Traffic slows, schools delay, and sometimes the internet falters. It is also the season after the IB November session, when results wait until early January, and the IGCSE Oct-Nov series closes. Holidays such as Diwali, Teej and Holi each take a few days, and tutors arrange make-up slots in advance.",
        "The table summarises the year month by month, so a parent can place tuition around known disruptions.",
      ],
      table: {
        caption: "A study year in Charkhi Dadri",
        columns: ["Period", "What is happening", "How tuition adapts"],
        rows: [
          ["January to March", "IGCSE February and March series, IB mocks, cold mornings and fog", "Mock papers, timetable kept steady, later sessions avoided"],
          ["April", "Wheat harvest and school-year start", "Lighter week, shorter lessons, revision notes"],
          ["May to June", "IB May exams, IGCSE summer series, extreme heat", "Early morning or night slots, connection backup"],
          ["July to September", "New academic year, Teej, monsoon spells", "Fresh topics, steady weekly rhythm"],
          ["October to December", "Diwali, IGCSE Oct-Nov series, IB November exams, fog", "Timed papers before the series, flexible dates in fog"],
        ],
      },
    },
    {
      heading: "Which universities can a Charkhi Dadri IB or IGCSE student aim for?",
      paragraphs: [
        "An IB Diploma earns an equivalence from the Association of Indian Universities, and with that the student can apply through CUET-UG for Delhi University, Jawaharlal Nehru University and other central universities. A student must check each university's subject requirements, because course eligibility can differ even when equivalence is granted.",
        "Engineering and medicine need a closer look. JEE Main and NEET-UG both ask for Physics, Chemistry and Mathematics or Biology at senior level, and the IB or an A Level route can meet those conditions if subject choices are made deliberately. The decision has to be made at the start of Class 11, not in Class 12.",
        "For students aiming abroad, the IB Diploma and A Levels are the standard qualifications that UK, Canadian and Australian universities recognise, and US colleges read IB alongside SAT or ACT results. The IGCSE alone is not a university entry qualification; it is the stepping stone towards those.",
        "Ashoka University in Sonipat, and a growing number of private universities near Delhi, admit on IB results, so a Charkhi Dadri student need not leave Haryana to use the credential. Rather than promise outcomes, a tutor helps the student prepare the subjects that admissions offices will actually read.",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences ask of a student from Charkhi Dadri?",
      paragraphs: [
        "IB Mathematics is offered in two forms. Analysis and Approaches suits students who enjoy algebra, calculus and proof, and is the usual choice for engineering aspirants. Applications and Interpretation gives a stronger role to statistics and calculator use, and is often chosen by students heading for business, social science or medicine.",
        "Students from HBSE or CBSE are usually confident with procedures but less used to explaining a method in words. IB papers mark method and reasoning separately from the final answer, and a tutor's first effort goes into writing lines that earn the method mark even when arithmetic slips.",
        "In Physics, Chemistry and Biology the practical component matters. Each IB science has an internal assessment, and IGCSE has either a practical paper or an alternative-to-practical paper. Students who have seen few laboratory experiments can still do well, but they need someone to walk through variables, uncertainties and evaluation statements with them.",
        "Tutors teach how to read a question, plan an answer and check it. They do not write the IA; they comment on drafts the student has written and point to what a marker looks for.",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended tiers work, and which subjects should a student choose?",
      paragraphs: [
        "Most IGCSE subjects offer a Core tier and an Extended tier. Core papers cap the highest grade available, while Extended papers open the full scale. A student who wants to take IB Mathematics HL or any science at Higher Level is normally better off on Extended, with the extra difficulty in place.",
        "Choosing subjects at fourteen is a practical exercise. A sensible spread includes English, Mathematics, one or two sciences, a humanity or business subject and a language. Hindi is a natural addition for students from Haryana, since it gives a confident result without consuming the time that sciences need.",
        "Students sometimes ask whether Cambridge or Edexcel is easier. Neither is, but the styles differ. Cambridge tends to use structured questions with multi-part steps, while Edexcel papers often look more like a traditional school paper. The right board is the one the school or exam centre has entered the student for.",
        "A private candidate from Charkhi Dadri needs an approved exam centre, often in Delhi or Gurugram. Start that search well before the registration deadline and confirm costs and timings in writing.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Write on WhatsApp or email with the class, the school board your child follows now and the subject causing concern." },
    { title: "Share the syllabus", description: "We confirm the board, tier and session, and whether your child is enrolled at a school or sitting exams as a private candidate." },
    { title: "Take the free trial", description: "A tutor matched on subject and level teaches a genuine lesson at a time that suits your household." },
    { title: "Receive rates in writing", description: "After the trial you get a quote and a weekly plan. Nothing is booked or charged before then." },
    { title: "Continue with written notes", description: "Lessons run weekly, a note follows each one, and you can ask for a different tutor whenever you wish." },
  ],

  whyPoints: [
    { title: "Mark scheme literacy", description: "Tutors teach from IB subject guides and the published Cambridge and Edexcel specifications." },
    { title: "Honest about delivery", description: "No tutor visits Charkhi Dadri homes. Lessons are online, private and live." },
    { title: "Bridging experience", description: "We know how to move a child from HBSE or CBSE habits to IB and IGCSE expectations." },
    { title: "Rates before commitment", description: "You see a written quote only after the trial lesson." },
    { title: "Coaching, not ghost-writing", description: "IAs, Extended Essays and TOK essays stay the student's own work." },
    { title: "Plans that fit Haryana life", description: "Harvest weeks, fog and festival dates are built into the timetable." },
  ],

  tutorsIntro:
    "Every tutor teaches live from India, matched to the subject, level and exam board. Use the free lesson to judge whether the style suits your child.",

  faqs: [
    { question: "Do tutors visit homes in Charkhi Dadri?", answer: "No tutor visits homes in Charkhi Dadri. In-person tuition runs only in Gurugram and parts of Delhi NCR. Here every lesson is online: live video, a shared whiteboard and the student's own notebook held up to the camera. Many families find this works well, because the child stays at the usual desk, the tutor can be chosen from across India for the exact subject, and there is no travel time to lose in a long afternoon." },
    { question: "Is there an IB or IGCSE school in Charkhi Dadri?", answer: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in the town. Local schools follow HBSE or CBSE. Nearby options are in Gurugram and Delhi, about a hundred kilometres away. Before considering any move, ask the school directly for its current curriculum, admission rules and seat availability, since these change, and IB Gram cannot vouch for admissions at any school." },
    { question: "What does IB or IGCSE tuition cost in Charkhi Dadri?", answer: "There is no fixed rate, because it moves with subject, level, tutor experience and weekly hours. After the free trial you receive a quote in writing, and only then decide. Higher Level sciences and mathematics usually cost more than Core IGCSE English. Note that online lessons remove travel costs completely, which matters for a family 100 kilometres from the nearest international school." },
    { question: "Can my child switch from HBSE or CBSE to IGCSE or IB?", answer: "Yes, though the timing matters. The smoothest entry points are the start of Class 9 for IGCSE and the start of Class 11 for the Diploma. Switching later is possible but needs a catch-up plan. A tutor checks past work in the first lesson and lists the gaps, such as command terms, practical skills or the level of written explanation expected." },
    { question: "Can a Charkhi Dadri student sit IGCSE as a private candidate?", answer: "Often yes, but you need an approved exam centre that accepts private entries. The centres are usually in Delhi or Gurugram, and each has its own deadlines and fees. Ask early, preferably six months ahead of the series. A tutor can prepare the student for the papers and mock exams, while the family handles the registration with the centre." },
    { question: "How do harvest and fog affect online lessons?", answer: "We plan around them. During the April wheat harvest, lessons are shorter or paused if the child helps at home, and revision moves earlier. In December and January fog, we avoid late sessions and keep a flexible make-up slot. If power cuts interrupt lessons in the heat of May and June, a mobile hotspot helps, and the tutor can reschedule the same week." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No, and that protects your child. IAs, Extended Essays, TOK essays and coursework must be the student's own. A tutor explains the assessment criteria, comments on a draft the student has written, asks questions that sharpen the argument and reviews presentation, but never drafts or rewrites content. A school could penalise a student who submits outside writing." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "Generally yes. The Association of Indian Universities recognises the Diploma as equivalent to Class 12, and CUET-UG is the usual path into central universities. Each course can ask for specific subjects, so check the requirement before choosing Diploma options. Medical and engineering entrance exams need Physics, Chemistry and Biology or Mathematics, and these must be chosen deliberately at the start of Class 11." },
    { question: "Can IB or IGCSE students take NEET or JEE?", answer: "Sometimes, depending on the subjects studied and the marks obtained. NEET asks for Physics, Chemistry, Biology and English at senior level, and JEE Main asks for Physics and Mathematics with Chemistry. IB Higher or Standard Level choices can meet these, but confirm the conditions with the relevant authority for the current year before finalising subjects." },
    { question: "Which exam boards do your tutors cover?", answer: "Cambridge International and Pearson Edexcel at IGCSE, with AS and A Level as background, and the IB at PYP, MYP and DP levels. Before any teaching begins, the tutor asks for the specification code and the session your child is entered for. Two students doing Mathematics can follow very different papers, so the tutor checks first instead of assuming." },
    { question: "What age should tuition begin?", answer: "There is no single age. A primary child can begin with reading confidence and number sense, an MYP student when the first criterion-based tasks feel unfamiliar, and an IGCSE or Diploma student typically at the start of the course. Starting six months before exams is usually too late for a student who has not practised the paper style." },
    { question: "How does the free trial work?", answer: "Tell us your child's class, current board and the subject you want help with. We name a tutor and fix a real lesson at a time that suits you, often after school or on a weekend. Your child works on a live problem, and you watch how the tutor explains it. You then get rates in writing and choose whether to continue." },
    { question: "Can we change tutors if the fit is wrong?", answer: "Yes, at any time and without awkwardness. A teacher who works for one child can be a poor match for another, because of pace, tone or timetable. Tell us what felt off, and we propose another tutor, usually within a few days. The written notes after each lesson help the new tutor continue from where the last one stopped." },
    { question: "Do you support Hindi, English and other languages?", answer: "Yes. Hindi A and B at IB, Hindi as a second language at IGCSE and English at either level are all available. Haryanvi is a home language for many students, but written work is in standard Hindi and English. A tutor helps a student practise essays, analysis of set texts and oral presentation in whichever language the exam requires." },
    { question: "How do I start with IB Gram from Charkhi Dadri?", answer: "Write on WhatsApp to +91 7439 368 115 or email support@ibgram.com with the class, current board and the subject worrying you. A short reply follows, along with a proposed tutor and a trial slot. There is no form to fill and no payment before the trial lesson, so the first step costs nothing." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Tutors, subjects and programmes in a single place." },
    { label: "All Indian cities", href: "/india/", description: "Every city where we teach online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The only area with in-person home visits, plus parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutors by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects explained." },
    { label: "IB DP", href: "/programmes/dp/", description: "How the two-year Diploma is built." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses in detail." },
    { label: "Tutors", href: "/tutors/", description: "Meet the teachers." },
    { label: "Contact us", href: "/contact-us/", description: "Write to us or book the free trial." },
    { label: "Bhiwani", href: "/bhiwani/", description: "The neighbouring city across the old district line." },
    { label: "Rohtak", href: "/rohtak/", description: "Haryana's education hub to the north-east." },
    { label: "Rewari", href: "/rewari/", description: "The town to the south-east, closer to Gurugram." },
  ],

  closingHeading: "Start with a free lesson at your own desk in Charkhi Dadri",
  closingBody:
    "If you have been looking for a teacher who understands how an IB or Cambridge paper is marked, a message is enough to begin. Tell us the class, the board your child follows today and the subject that needs work, and we come back with a tutor and a trial slot. The lesson is online, the notes are written and the rates arrive only after you have seen the teaching.",
};
