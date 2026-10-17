import type { CitySeoPage } from "../types";

/**
 * /deesa/ - IB and IGCSE tutoring page for Deesa, Banaskantha, Gujarat. Online-only: tutors do not
 * visit homes in Deesa (in-person home tuition runs only in Gurugram and parts of Delhi NCR).
 * No IB or IGCSE school is confirmed in Deesa, so the clusters are nearby-city clusters.
 */
export const deesa: CitySeoPage = {
  slug: "deesa",
  countryName: "Deesa",
  countryNameLong: "Deesa, Banaskantha, Gujarat",
  demonym: "Deesa",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Set around Deesa's fierce May heat, the Diwali vacation, Navratri evenings, Uttarayan week and monsoon spells on the Banas",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.2585, longitude: 72.1907 },
  wikipedia: "https://en.wikipedia.org/wiki/Deesa",
  alternateNames: ["Disa", "Deesa Banaskantha"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Deesa | Online Home Tuition Gujarat",
  metaDescription:
    "IB and IGCSE tutors in Deesa, Gujarat: online one-to-one private tuition from home for DP, MYP, PYP and Cambridge subjects, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Deesa",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION IN DEESA, GUJARAT",
  heroSubtitle:
    "Parents in Deesa who type home tuition into a search box for IB or IGCSE deserve a straight answer: the private teacher reaches your house through a screen, not a scooter. Tutors do not visit homes in Deesa. They do sit with your child, live and one-to-one, over the exact IB course or Cambridge paper being studied, in slots that suit a Banaskantha household.",
  primaryKeyword: "IB and IGCSE tutors in Deesa",
  imageAltText: "A Deesa student in an online one-to-one IGCSE Chemistry class at home",
  secondaryKeywords: [
    "IB tutor Deesa",
    "IGCSE tutor Deesa",
    "IB home tuition Deesa",
    "IGCSE home tuition Deesa",
    "IB private tuition Deesa",
    "IB Maths tutor Deesa",
    "IGCSE Maths tutor Deesa",
    "IB Physics tutor Deesa",
    "IB Chemistry tutor Deesa",
    "IB Biology tutor Deesa",
    "IB DP tutor Deesa",
    "IB MYP tutor Deesa",
    "IB PYP tutor Deesa",
    "IGCSE online tuition Deesa",
    "IB tutor Deesa Gujarat",
    "IB tutor Banaskantha",
    "IGCSE tutor Bhildi",
    "online IB tutor near Palanpur",
    "Cambridge IGCSE tuition Deesa Palanpur",
    "IB tutor Disa",
  ],

  heroTrustPoints: [
    "The tutor is matched to the IB subject and level or IGCSE code and tier your child has",
    "Every lesson is online; tutors visiting a home is a Gurugram and Delhi NCR arrangement only",
    "The first lesson costs nothing and commits you to nothing",
    "Parents receive a short written recap after each session",
    "IB Gram has no tie to any school, exam board or institution named here",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "The whole IB continuum" },
    { value: "Cambridge + Edexcel", label: "Both IGCSE boards" },
    { value: "Indian time", label: "IST for every class" },
    { value: "Free first class", label: "See it before you pay" },
  ],

  intro: {
    heading: "Deesa, Banaskantha and the question of an international curriculum",
    paragraphs: [
      "Deesa is a town of around a hundred thousand people on the west Banas river, known across Gujarat for potatoes, a large cold-storage trade, a strong cluster of private hospitals and clinics, and one of the hottest summers in the state. Its schools follow the Gujarat board and CBSE. If you ask a Deesa parent where the nearest IB or IGCSE campus is, the reply is normally Ahmedabad, a few hours away by road, or one of the campuses on the Gandhinagar side. Nothing we could confirm exists in Deesa itself, so IB and IGCSE tutors in Deesa work with students online.",
      "The families who raise the subject tend to have a story. A doctor's child who will one day study medicine in the UK. A potato-trade or transport family with cousins in the United States or East Africa. A couple returning from the Gulf with a teenager midway through Cambridge. A student at a Deesa school who is quick at maths and is beginning to wonder whether a different syllabus would suit better. Each needs a teacher who has actually taught the syllabus, and there are very few of those in northern Gujarat.",
      "So the route is straightforward. You describe the course, we introduce a specialist based elsewhere in India, and the two of them meet by video. It costs no travel, and it does not depend on the highway to Palanpur or Ahmedabad.",
      "IB Gram is an independent tutoring service, and none of the institutions named on this page, nor the IB, Cambridge or Pearson, has any link with it. Home visits happen only in Gurugram and parts of Delhi NCR; a Deesa student learns at home, online.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP; Cambridge and Pearson Edexcel IGCSE",
      "Live and one-to-one, in Indian Standard Time",
      "Tutors coach the student; the student writes every assessed piece",
      "Free first lesson, written rates before booking",
      "A different tutor on request if the first is not right",
    ],
  },

  programmesIntro:
    "Since there is no confirmed IB school in Deesa, each stage below is described for a student who studies elsewhere, has moved to Deesa mid-course, or is preparing privately.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children explore themes across subjects and finish with a self-directed Exhibition. Since there are no external tests, tutoring aims at solid literacy, arithmetic and the habit of asking why.",
      countryNote:
        "Gujarati is the language of most Deesa homes, and English is often the third language a child meets, so a PYP tutor typically builds reading and spoken fluency first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four assessment criteria apply in every subject, and the Personal Project rounds off the programme. Students move from remembering facts to applying and explaining them.",
      countryNote:
        "A student coming from a Gujarati-medium classroom typically needs the most help with extended written answers in English in Sciences and Individuals and Societies.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. The final grade combines external papers with internal assessments that require sustained independent work.",
      countryNote:
        "Interest from Deesa families is strongest in Biology, Chemistry and Maths at Higher Level, reflecting the town's medical culture, and in Business Management and Economics for trading families.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are paired with a career-related study and a reflective project, giving a more applied route recognised internationally.",
      countryNote:
        "Almost no schools in the region run CP, so support for Deesa students focuses on the Diploma courses inside it, with the reflective project guided but never written.",
    },
  ],

  subjectsIntro:
    "The first job is to pin down the exact course. Analysis and Approaches versus Applications and Interpretation, and Higher versus Standard Level, lead to very different lessons.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with Paper 3 problem practice for Higher Level students and careful guidance on choosing an achievable exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability models and calculator technique, with an emphasis on interpreting results in words." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields and quantum topics, with practice in uncertainty and unit handling." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, equilibrium and organic chemistry; tutors focus on mechanism drawing and data analysis." },
    { name: "IB Biology", levels: "HL / SL", description: "A subject with heavy demand from medical families; lessons develop precise definitions, data reading and command-term answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and evaluation in micro, macro and international economics, with examples from agricultural trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, finance ratios and the internal report, a good fit for students from trading and processing families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Computational thinking, programming and systems, with regular structured-answer practice." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Text analysis, comparative commentary and oral preparation for students who think first in Gujarati." },
    { name: "IB English B", levels: "HL / SL", description: "A language acquisition course for students whose English is developing, with strong emphasis on writing tasks." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Written and spoken practice for students who choose Hindi as a second language." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research studies, approaches and evaluation writing, plus the experimental study." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Guidance on knowledge questions and the exhibition; discussion and structure, not drafting." },
  ],
  igcseSubjectsIntro:
    "IGCSE runs over Grades 9 and 10 with entry by syllabus code and tier. Find the code and tier on your child's entry form before choosing a tutor.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with more challenging functions and vectors for Extended candidates." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, motion, electricity, waves and atomic physics, with practical-paper skills." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reaction types, organic basics and experimental planning." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell biology, human body systems, ecology and genetics, with data questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms, programming and computer systems." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply, demand, market structures and government policy." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based answers, finance and marketing." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Ledgers, final accounts and ratios, a natural fit for trading families." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for students who use Gujarati at home." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and writing tasks." },
    { name: "IGCSE Gujarati", levels: "Grade 9-10", description: "Where a school offers it, tutors can support reading and composition; confirm availability with the school." },
  ],

  regionsTitle: "Deesa and Banaskantha localities where our online tutors teach",
  regionsIntro:
    "A video lesson needs only a connection, but the shape of a family's day depends on where they live. Here is how the areas around Deesa tend to differ.",
  regions: [
    { name: "Old Deesa", note: "The older core around the bazaar, where trading families keep long shop hours and lessons are often set for late evening." },
    { name: "Deesa Highway belt", note: "Newer housing and clinics along the highway through town, popular with medical and professional households." },
    { name: "Air Force Station side", note: "The area around the Indian Air Force station, where service families sometimes arrive with children already on a CBSE or international track." },
    { name: "Cold-storage and mandi area", note: "The potato-trade district, busy through the harvest and storage season from February to April." },
    { name: "Banas riverside", note: "Low-lying areas near the river, where heavy monsoon spells, as in the 2017 floods, can disrupt daily routines." },
    { name: "Bhildi", note: "A nearby town on the Deesa road, whose students face the same absence of local IB and IGCSE teachers." },
    { name: "Palanpur", note: "The district headquarters, a short drive away, with more school choice and a busy diamond and dairy economy." },
    { name: "Dhanera", note: "A town towards the Rajasthan side of the district, where distance to any international school is greater still." },
    { name: "Thara", note: "A Banaskantha town to the north-west, with a farming and trading population." },
    { name: "Kankrej side", note: "The agricultural belt across the river, where families often send children to Deesa or Palanpur for schooling." },
  ],

  schoolDisclaimer:
    "We have not confirmed an IB or Cambridge IGCSE school in Deesa, so none is presented as local. The campuses shown are in Ahmedabad, Kalol and Vadodara, cities that Banaskantha families weigh for boarding or a move. They appear only as geographic context. IB Gram is not affiliated with any of them, and their inclusion is no endorsement.",
  schoolClusters: [
    {
      city: "Nearby: Ahmedabad",
      note: "The largest concentration of IB and Cambridge campuses in Gujarat, a few hours south by road, and the usual first stop for Banaskantha families considering hostels or a move.",
      schools: ["Ahmedabad International School", "Calorx Olive International School"],
    },
    {
      city: "Nearby: Kalol, Gandhinagar district",
      note: "A Cambridge IGCSE campus on the Gandhinagar side, closer than central Ahmedabad for families driving down from the north.",
      schools: ["Swayam Cambridge International School, Kalol"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Further south, and the Gujarat campus we can confirm runs the full IB continuum alongside Cambridge.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],

  modesIntro:
    "The lesson itself is a live video class with a single tutor, in Deesa as everywhere outside Gurugram. Families then choose among three arrangements.",
  modes: [
    {
      title: "Regular evening lessons",
      description:
        "A set weekly time with one tutor, suited to a student who needs steady help in one or two subjects during the school year.",
      bullets: [
        "The same tutor all year, so learning accumulates",
        "Shared digital whiteboard and scanned written work",
        "Evening slots after Deesa school hours and other classes",
        "Brief summary after each lesson",
      ],
    },
    {
      title: "Transition support",
      description:
        "A concentrated block for a student who has joined an IB or IGCSE programme from a Gujarat board or CBSE school, or is preparing to.",
      bullets: [
        "First lesson used to find gaps",
        "Terminology and answer style taught explicitly",
        "A written list of topics to cover, in order",
        "Reviewed at the end of the block",
      ],
    },
    {
      title: "Focused exam preparation",
      description:
        "More frequent lessons before an exam series, centred on timed papers and correction, timed to avoid the Diwali holiday.",
      bullets: [
        "Papers marked to the board's mark scheme",
        "Feedback returned quickly",
        "Revision targeted at weak topics",
        "Start about three weeks before the first paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school in Deesa?",
      paragraphs: [
        "We could not confirm an IB or Cambridge IGCSE school in Deesa, and this page will not name one on a guess. Deesa's schools follow the Gujarat Secondary and Higher Secondary Education Board or CBSE, with a mix of long-established institutions and newer private schools. Anyone who tells you otherwise should be asked for the affiliation number.",
        "The nearest confirmed options are elsewhere in Gujarat. Ahmedabad has the widest range, Kalol has a Cambridge school on the Gandhinagar side and Vadodara has a campus that runs the full IB continuum. The distances are not trivial. A daily commute from Deesa to any of them is impractical, so the realistic choices are a hostel, a family member's home in the city, or relocation of the household.",
        "Some families choose none of these and keep the child in a Deesa school while preparing for IGCSE as a private candidate or reading ahead of a planned move. This can work if the student is organised and the syllabus is followed carefully. A tutor makes the difference by breaking the syllabus into weekly targets and marking practice papers.",
        "The table gives a quick view of what we can and cannot say about each place. Always ask the school directly about its current programmes before making any decision.",
      ],
      table: {
        caption: "Where Deesa families look for IB or IGCSE schooling",
        columns: ["Place", "What we can confirm", "Typical use"],
        rows: [
          ["Deesa", "No IB or IGCSE school confirmed", "Gujarat board and CBSE schooling; online tutoring for international syllabi"],
          ["Ahmedabad", "Ahmedabad International School and Calorx Olive International School", "Hostel or relocation; the widest choice in the state"],
          ["Kalol", "Swayam Cambridge International School", "A Cambridge option on the Gandhinagar side"],
          ["Vadodara", "Navrachana International School", "Full IB continuum with Cambridge; a longer move"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed inside Deesa",
        "Hostel, relocation or private preparation are the choices",
        "Ask any school for its current affiliation directly",
        "A tutor helps in every one of these routes",
      ],
    },
    {
      heading: "Who in Deesa asks about IB or IGCSE, and why?",
      paragraphs: [
        "It helps to know the typical enquirer. In Deesa the largest group is the medical and professional community. The town has a dense network of hospitals and clinics, and doctors' families often think about overseas medical or science education. IB Biology and Chemistry at Higher Level, or IGCSE sciences followed by A Levels, look attractive to these households.",
        "A second group is trading and agricultural families. Potato traders, cold-storage owners, transport operators and processors have Gujarati diaspora networks that stretch to the UK, the US, Kenya and Uganda. For their children, an internationally recognised qualification is a practical asset. Business Management, Economics and Accounting come up often.",
        "A third group is service and relocating families. The Indian Air Force station brings transferred officers and airmen, and some arrive with children who studied an international curriculum elsewhere. A fourth group returns from the Gulf or abroad and needs continuity for a teenager mid-syllabus.",
        "What unites them is a need for continuity and specialist knowledge, which the town's schools, focused on state board and CBSE, are not designed to give. Tutors from outside Deesa are the practical answer.",
      ],
      bullets: [
        "Doctors' families interested in sciences and study abroad",
        "Trading and processing families with overseas relatives",
        "Service and returning families needing continuity",
        "All need a specialist for a specific course",
      ],
    },
    {
      heading: "How do the Gujarat board, CBSE and ICSE differ from IGCSE and IB for a Deesa student?",
      paragraphs: [
        "Gujarat board students prepare for papers set by GSEB, which reward coverage of the textbook and accuracy on familiar question types. CBSE follows NCERT books with a mix of factual and applied questions and connects neatly to JEE and NEET. ICSE has heavier content and English expectations. Cambridge IGCSE and the IB ask students to apply ideas to new situations and explain reasoning.",
        "For a Deesa student the biggest shift is often language. Many have studied in Gujarati or in a mix, and IGCSE and IB demand precise English for long written answers, even in Sciences and Maths. Tutors therefore spend time on the vocabulary of command terms and on how to structure an explanation.",
        "The second shift is the type of question. A GSEB physics question might ask for a law or a derivation. An IGCSE question gives a scenario, and an IB question adds a judgement about limitations. Practising this kind of question is what changes results.",
        "The comparison below is deliberately simple. It should help you decide what to ask a school, a tutor or a university, not replace those conversations.",
      ],
      table: {
        caption: "How the boards compare for a Deesa student",
        columns: ["Board", "Emphasis", "Where it leads"],
        rows: [
          ["Gujarat board (GSEB)", "Textbook coverage and familiar question types", "Gujarat colleges and state entrance routes"],
          ["CBSE", "NCERT depth and mixed questions", "JEE, NEET and CUET"],
          ["ICSE and ISC", "Content depth and English writing", "Indian universities, humanities and sciences"],
          ["Cambridge and Edexcel IGCSE", "Applied questions by tier", "A Level, IB, and overseas school pathways"],
          ["IB Diploma", "Breadth, essays and internal assessments", "Universities in India and abroad"],
        ],
      },
      bullets: [
        "Language, not ability, is often the first hurdle",
        "Practise scenario-based questions early",
        "Check what each board leads to before switching",
        "Confirm requirements with the target university",
      ],
    },
    {
      heading: "What shapes the fee for IB and IGCSE tuition in Deesa?",
      paragraphs: [
        "There is no price list on this site, and that is deliberate. Your quote arrives in writing after the free first lesson, based on what your child needs, so it is never a number designed for someone else.",
        "Four things move it. The level of the course, since Higher Level IB or Extended IGCSE needs a more specialised tutor. The tutor's record on the exact syllabus, which counts for more than a general degree. How often you meet and for how long. And timing, because the weeks before an exam series are busy and availability is tighter.",
        "Put it alongside the alternatives. Local classes in Deesa, when they cover Gujarati and CBSE subjects, are priced for that market. Sending a child to Ahmedabad for lessons adds a long journey and costs. Online lessons remove the journey, and the price reflects a specialist's time.",
        "To manage cost sensibly, start with a short block aimed at one problem area, such as Paper 2 of Physics or the IA plan. You can lengthen it later if it works.",
      ],
      bullets: [
        "Written quote after the free lesson",
        "Level, tutor record, frequency and timing matter most",
        "Short blocks make a sensible trial",
        "No public price list to go out of date",
      ],
    },
    {
      heading: "Heat, Diwali vacation and festivals: how does the Deesa calendar fit exam seasons?",
      paragraphs: [
        "Deesa is often quoted as one of the hottest cities in Gujarat, and May afternoons can pass 45 degrees. That collides with IB May exams and the run-up to Cambridge June papers. Students revising in this window do best with early-morning lessons and a cool, quiet room for the afternoon.",
        "Gujarat schools traditionally take a long Diwali vacation, often close to three weeks, and many families travel or host relatives. The IB and Cambridge November sessions come soon after, so students who lose those weeks to festivities need a plan for revision before Diwali, not after.",
        "Navratri is the other big fixture. Late-night garba across Banaskantha eats sleep and study time for nine evenings, and Uttarayan in January brings a family holiday day for kite-flying. Then there is the monsoon, which can flood low areas along the Banas, as in 2017, and interrupt power and travel.",
        "Because online lessons are indifferent to weather on the road, a lesson can move to a cooler hour or a different evening. The table lays out the year with practical timings.",
      ],
      table: {
        caption: "The Deesa year and study planning",
        columns: ["Time of year", "What is happening", "Planning suggestion"],
        rows: [
          ["January", "Uttarayan, mock exams", "Use the weeks around it for past-paper practice"],
          ["February to April", "Potato harvest and cold-storage season", "Trading families are busy; keep lessons short and regular"],
          ["May to June", "Extreme heat, IB and IGCSE exams", "Early-morning slots; avoid the afternoon"],
          ["July to September", "Monsoon, possible river flooding, Navratri in autumn", "Good months for new content; keep a power backup"],
          ["October to November", "Diwali vacation, November exam series", "Revise before Diwali, then short daily practice"],
        ],
      },
      bullets: [
        "IB exams in May and November; IGCSE in June and November, sometimes March",
        "Plan revision before Diwali, not after",
        "Move lessons to cooler hours in summer",
        "Confirm exam dates with the school every year",
      ],
    },
    {
      heading: "What can a Deesa student do after IB or IGCSE?",
      paragraphs: [
        "The pathways are broad. Within India, the Association of Indian Universities treats the IB Diploma as equivalent to Class 12, CUET-UG opens central and many state universities to recognised-board students, and private universities in Gujarat, Rajasthan and elsewhere accept international qualifications. Always check the individual course's requirements.",
        "Medicine is the goal for many Deesa families. NEET-UG requires Physics, Chemistry, Biology or Biotechnology and English, so an IB student who plans to attempt it should keep those subjects and confirm the current eligibility rules. Overseas, the UK, Ireland, Australia, Canada and several European countries know IB and Cambridge results well.",
        "Engineering and commerce follow similar logic. JEE has its own eligibility rules, and chartered accountancy and other professional routes have their own entry points that differ from a degree. A trading family may prefer Business Management and Economics with Maths at a suitable level, which opens options both in India and abroad.",
        "The advice we give is to work backwards from the target course. Look at what it asks for, choose IB or IGCSE subjects to match, and treat the tutor as a way to reach the grade rather than as the decision-maker.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian routes",
        "NEET-UG needs specific science subjects",
        "Overseas destinations widely accept IB and Cambridge",
        "Work backwards from the target course",
      ],
    },
    {
      heading: "How are IB Biology, Chemistry and Maths taught to Deesa students?",
      paragraphs: [
        "Because of the town's medical culture, Biology and Chemistry are the two most requested IB subjects from Deesa. Tutors focus on definitions that are exact, on reading data tables and graphs, and on the command terms that tell a student how much to write. A student who knows the content but writes vaguely can lose a lot of marks without noticing.",
        "IB Chemistry sessions are built around topics such as structure and bonding, energetics, kinetics, equilibrium and organic mechanisms. At Higher Level, tutors add the extra units and the depth expected in Paper 1 and 2. The Scientific Investigation is discussed for method and analysis, though the design, data and writing stay with the student.",
        "In Maths, the first task is choosing between Analysis and Approaches and Applications and Interpretation, each with Higher and Standard Level. Approaches suits students who like algebra and calculus. Interpretation suits those who prefer statistics and modelling. Lessons work through examples, then timed questions, with Paper 3 practice at Higher Level.",
        "For all three subjects, the tutor's marking is the value. Feedback on where a mark was lost and why, week after week, produces improvement in a way that reading a textbook does not.",
      ],
      bullets: [
        "Exact definitions and command terms in Biology and Chemistry",
        "Choose Maths course and level before anything else",
        "Weekly marked papers drive progress",
        "Investigations and explorations stay the student's own",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Deesa family decide?",
      paragraphs: [
        "In most Cambridge subjects there are two tiers, Core and Extended. Core caps the top grade, and Extended gives access to every grade with harder papers. If your child may continue the subject at IB or A Level, Extended is usually the safer choice. If the aim is a solid pass for a subject that will not be continued, Core can be sensible.",
        "For students from Gujarati-medium or GSEB schools, the syllabus is not the only challenge. Extended papers ask for longer, more careful English, so language practice belongs in the plan. A tutor can supply that in lessons by getting the student to explain solutions aloud and then write them out.",
        "Subject combinations matter too. Maths, English, two sciences, and one commerce or computing subject is a common and sensible package. Trading families often add Accounting and Business Studies, which are practical and portable.",
        "Since every subject has a published code, a tutor can begin from the first lesson with the correct specification and specimen papers. That precision is one reason IGCSE suits private preparation well.",
      ],
      bullets: [
        "Extended if the subject continues; Core if it will not",
        "Language practice belongs in the plan",
        "Sensible packages exist for science and commerce routes",
        "Use the board's specimen papers from day one",
      ],
    },
    {
      heading: "Online tutor, local classes, visiting teacher or self-study: what works in Deesa?",
      paragraphs: [
        "For an international syllabus, an online one-to-one tutor gives access to subject expertise that Deesa does not have on its doorstep. Local classes are geared to Gujarat board and competitive exams, and the demand for IB Higher Level or IGCSE Extended is too small to sustain a group.",
        "A teacher who travels to your house is what many parents picture when they say home tuition. In Deesa it is hard to find a person with real IB or Cambridge experience, and bringing one from Palanpur or Ahmedabad turns a lesson into a day trip.",
        "Self-study helps disciplined students and costs the least. It is weaker on internal assessments and on subjects where a misunderstanding must be spotted by someone else.",
        "Online home tuition, as IB Gram offers it in Deesa, means the tutor does not visit; the student learns at home with a live teacher. Here is how the four approaches compare.",
      ],
      table: {
        caption: "Learning support options for IB or IGCSE in Deesa",
        columns: ["Option", "Strength", "Weakness"],
        rows: [
          ["Online one-to-one tutor", "Specialist in the exact course, no travel", "Needs a reliable connection and a quiet room"],
          ["Local coaching class", "Peers and routine", "Geared to Gujarat board and entrance exams"],
          ["Visiting private teacher", "Personal and familiar", "Hard to find with IB or Cambridge background nearby"],
          ["Self-study", "Cheap and flexible", "Weak on assessed work and hidden misunderstandings"],
        ],
      },
      bullets: [
        "Choose on subject depth first",
        "Keep coaching for entrance exams",
        "Use past papers under every option",
        "Review the choice after a month",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma courses and Cambridge or Pearson Edexcel IGCSE to Deesa families. The match is made by subject, level and board, and the first lesson is free.",

  process: [
    { title: "Share your child's course", description: "The programme or board, subject, level, current standing and a workable weekly time." },
    { title: "Get a matched tutor", description: "A specialist whose recent teaching fits the syllabus, with their background shared." },
    { title: "Take the free lesson", description: "A genuine topic, live, with no cost and no commitment." },
    { title: "Confirm the plan", description: "Topics, pace and rate in writing before anything is booked." },
    { title: "Keep reviewing", description: "Regular lessons, short notes and a check-in every few weeks, with a change of tutor available." },
  ],

  whyPoints: [
    { title: "Right tutor for the exact course", description: "Matched by IB course and level or IGCSE code and tier, not just by subject name." },
    { title: "Reaches beyond Deesa", description: "With no confirmed local IB or IGCSE school, a specialist has to come from outside town." },
    { title: "See it first", description: "A free first lesson lets you judge the teaching itself." },
    { title: "Integrity of the work", description: "Assessed pieces are always the student's own; tutors coach and give feedback." },
    { title: "Clear updates", description: "A brief written recap after each class." },
    { title: "Flexible terms", description: "No long contract, and a replacement tutor if the fit is wrong." },
  ],

  faqs: [
    { question: "Are there any IB or IGCSE schools in Deesa?", answer: "We could not confirm any IB or Cambridge IGCSE school in Deesa, so none is named. Local schools follow the Gujarat board or CBSE. Families usually look to Ahmedabad, Kalol or Vadodara for an international campus. Please confirm affiliation and current programmes directly with any school before deciding." },
    { question: "How do I find an IB tutor in Deesa?", answer: "Tell IB Gram the programme, subject, level and exam session. Because local specialists are scarce, we introduce a tutor from elsewhere in India who has taught that exact course, and your child meets them in a free trial over video. If the match is not right, we can find another before you book." },
    { question: "Do you provide IGCSE tutors in Deesa for Cambridge and Edexcel?", answer: "Yes. The tutor is matched to your child's syllabus code and tier and uses that board's past papers. For example, a Cambridge Physics 0625 Extended student gets someone who has taught that specific paper. Lessons are online and one-to-one." },
    { question: "Will a tutor visit our home in Deesa?", answer: "No. IB Gram tutors do not visit homes in Deesa. Home visits are available only in Gurugram and parts of Delhi NCR. In Deesa we offer online home tuition, meaning a live private lesson at your own desk, with a shared whiteboard and digital feedback on written work." },
    { question: "What is the fee for IB or IGCSE tuition in Deesa?", answer: "There is no published fee, because it depends on the case. Course level, the tutor's experience with that syllabus, how often you meet, lesson length and exam timing all affect it. You receive a written quote after the free trial, before you commit." },
    { question: "Do you offer a free trial lesson?", answer: "Yes, every family gets one. Your child works through a real topic with the tutor over video, a parent can join, and there is no obligation afterwards. If you would like a different tutor, we will introduce one before any booking." },
    { question: "Can a tutor help with an IB Internal Assessment?", answer: "A tutor can help your child think and improve without doing the work. That means explaining criteria, discussing topic choice, checking method and giving feedback on the student's own drafts. Nothing assessed is written by a tutor, whether it is an IA, the Extended Essay or a TOK piece, because the IB requires original student work." },
    { question: "Which IB Diploma subjects can you cover for Deesa students?", answer: "Maths in both courses, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English and Hindi, and Theory of Knowledge guidance. Biology and Chemistry are the most requested by Deesa families. If your subject is unusual, ask first and we will say whether we have a specialist." },
    { question: "Do you teach IB MYP and PYP students too?", answer: "Yes. PYP lessons are short and activity-based, building reading, writing and number sense. MYP lessons focus on criteria-based answers and planning for the Personal Project. Tutors adjust to the school's current unit of inquiry where possible." },
    { question: "Does online tutoring work in Deesa's heat and monsoon?", answer: "Yes, with some planning. Summer afternoons are best avoided, so lessons are set early or late. During heavy monsoon, when power or internet may fail, a lesson can be moved without penalty. A phone hotspot as a backup is a sensible precaution." },
    { question: "How are your tutors checked?", answer: "Before a family is introduced, we review the tutor's qualifications and recent teaching on the specific syllabus. Your own view from the free lesson is the second check, and a review a few weeks in is the third. A poor match is corrected quickly." },
    { question: "When should my child in Deesa start?", answer: "At the beginning of the course if possible, meaning Class 11 for the Diploma and Grade 9 for IGCSE. Many students start later after a poor term, before an internal assessment or with an exam ahead. A diagnostic lesson helps focus late-start time on the topics that need it." },
    { question: "My child is in a GSEB or CBSE school in Deesa. Can we switch to IGCSE or IB?", answer: "Often yes, especially at natural break points such as after Class 10. A tutor compares your child's current knowledge with the target syllabus, lists gaps and teaches them. Language and answer style usually need as much attention as content." },
    { question: "Can lessons avoid the Diwali vacation, Navratri and Uttarayan?", answer: "Yes. Lessons are scheduled around your family calendar, and can be moved or paused for festivals and travel. It is wise to schedule extra revision before Diwali if a November exam is coming. Share your school's key dates at the start." },
    { question: "What if my child and the tutor do not click?", answer: "Say so and we will arrange another tutor. Progress is reviewed after a few weeks so a weak match is noticed early. There is no lock-in and no penalty for a change." },
    { question: "Is IB Gram connected with any Deesa school, or with the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no partnership or endorsement arrangement with any school, board or awarding body. Institutions named on this page are mentioned only to give context." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works outside the metros." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "The IB tutoring overview by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, Higher and Standard Level, and the core." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP combines Diploma courses with a career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two IB Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds by subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your requirement and ask for a free trial lesson." },
    { label: "IB and IGCSE tutoring in Palanpur", href: "/palanpur/", description: "The district headquarters, a short drive from Deesa." },
    { label: "IB and IGCSE tutoring in Ahmedabad", href: "/ahmedabad/", description: "Gujarat's main hub of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Udaipur", href: "/udaipur/", description: "A Rajasthan city many north Gujarat families also look towards." },
  ],

  closingHeading: "Begin with a free lesson for your child in Deesa",
  closingBody:
    "Let us know the programme or board, the subject and level, how things stand and which evenings suit your family. A matched tutor replies with their background, and the first lesson is free. If you are looking for IB and IGCSE tutors in Deesa, email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
