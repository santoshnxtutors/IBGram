import type { CitySeoPage } from "../types";

/**
 * /seohara/ - IB and IGCSE tutoring page for Seohara, Bijnor district, Uttar Pradesh. Online only.
 * No IB or Cambridge/Edexcel school is confirmed in Seohara, so stripSchools is empty and the clusters
 * reuse Noida, Dehradun and Meerut options from existing pages, clearly labelled as nearby.
 */
export const seohara: CitySeoPage = {
  slug: "seohara",
  countryName: "Seohara",
  countryNameLong: "Seohara, Bijnor, Uttar Pradesh",
  demonym: "Seohara",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions kept away from Eid and Ramadan late nights, Holi, Diwali, the Sawan Kanwar rush and the dense December fog mornings",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.2167, longitude: 78.5833 },
  wikipedia: "https://en.wikipedia.org/wiki/Seohara",
  alternateNames: ["Sehora", "Seohara Bijnor", "Sihora Bijnor"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Seohara | Online Home Tuition",
  metaDescription:
    "Seohara, Bijnor: live online IB and IGCSE tutors for one-to-one home tuition in Maths, Science and English, planned around fog and festivals. Free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Seohara",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR SEOHARA AND BIJNOR, ONLINE",
  heroSubtitle:
    "Looking for IB or IGCSE home tuition in Seohara? Nobody from our side will come to your door, because in-person visits run only in Gurugram and parts of Delhi NCR. What a Seohara family gets is a live, private online lesson at home: the student opens a laptop, a tutor who has taught that exact syllabus appears, and the hour is spent on the child's own questions and past papers.",
  primaryKeyword: "IB and IGCSE tutors in Seohara",
  imageAltText: "A Seohara student in Bijnor district practising IB Chemistry calculations at home while a tutor guides the lesson online",
  secondaryKeywords: [
    "IB tutor Seohara",
    "IGCSE tutor Seohara",
    "IB home tuition Seohara",
    "IGCSE home tuition Seohara",
    "IB private tuition Seohara",
    "IB Maths tutor Seohara",
    "IGCSE Maths tutor Seohara",
    "IB Physics tutor Seohara",
    "IB Chemistry tutor Seohara",
    "IB Biology tutor Seohara",
    "IB DP tutor Seohara",
    "IB MYP tutor Seohara",
    "IB PYP tutor Seohara",
    "IGCSE online tuition Seohara",
    "IB tutor Bijnor district",
    "IGCSE tutor Dhampur Najibabad",
    "online IB tuition Sehora",
    "Cambridge IGCSE tutor western Uttar Pradesh",
  ],

  heroTrustPoints: [
    "Tutors matched to the IB subject and level, or the IGCSE board and syllabus code, of your child",
    "One-to-one video lessons that fit around UP Board or CBSE school hours",
    "A free first lesson and a written rate before any booking",
    "Independent of the IB, Cambridge, Pearson and every school",
  ],
  heroStats: [
    { value: "IST", label: "Seohara keeps the same time" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "Sugarcane country with ambitious students and almost no international-syllabus teachers within reach",
    paragraphs: [
      "Seohara is a tehsil town in Bijnor district, in the sugarcane belt of western Uttar Pradesh, with Moradabad to the west and the Uttarakhand foothills close to the north. Its economy runs on cane, wheat, small trade and the salaries of teachers, bankers and government staff. Schools are mainly Hindi and English medium under the UP Board and CBSE, plus a number of madrasa and Urdu-medium institutions. Families here are hard-working and education-minded, and some have begun to ask about IB or Cambridge IGCSE, usually because a relative works abroad or a child is headed to a boarding school.",
      "We say it early so there is no confusion: tutors do not visit homes in Seohara, and in-person home tuition is limited to Gurugram and parts of Delhi NCR. The local form of the same service is online home tuition. The student studies at home, the tutor teaches from another Indian city, and the lesson is private and live. Good IB Chemistry or IGCSE Mathematics teachers are simply not found within Bijnor district, and a long road journey to Delhi or Dehradun for each class would not be realistic.",
      "The students who use us fall into a few groups: children in Class 7 to 10 planning a move to an international boarding school in Dehradun or a day school in Noida, students already in such schools who are home for holidays, and children of families who expect to settle abroad.",
      "Tutors explain, set practice and give feedback. They never write assessed work, and IB Gram works independently of every school and board.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Online only; no tutor visits homes in Seohara",
      "Students from Hindi-medium and Urdu-medium schools are welcome",
      "Free first lesson and a short written note after each class",
    ],
  },

  programmesIntro:
    "Parents in Seohara usually know the UP Board or CBSE well and the IB hardly at all. The summaries below describe each IB stage and the practical help a home tutor can give.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Pupils work on units of inquiry that cut across subjects, presenting what they find in projects and in a final-year Exhibition. The emphasis is on asking, researching and explaining.",
      countryNote:
        "For a primary child in Seohara, where Hindi is the home language, regular English conversation and storytelling sessions ease a later move into a PYP class in another city.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of concept-based teaching across eight subject groups, assessed against criteria, and ending in a Personal Project that the student plans and reflects on.",
      countryNote:
        "Students from Hindi-medium schools tend to know the facts, but the MYP asks them to explain and apply in English, which is a skill that can be taught with practice.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects over two years, three at Higher Level and three at Standard, with the Extended Essay, Theory of Knowledge and CAS. School predictions and final scores feed university applications.",
      countryNote:
        "A Diploma student linked to Seohara is almost always studying in a boarding school or a city day school, and holiday weeks at home are when a tutor closes gaps.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A selection of Diploma courses combined with a career-related study, a personal and professional skills course, language development and a reflective project.",
      countryNote:
        "We know of no CP school in Seohara or Bijnor district. Help would cover the academic courses of a student enrolled elsewhere.",
    },
  ],

  subjectsIntro:
    "Western Uttar Pradesh sends many students into medicine, engineering and government service, so Mathematics and the sciences get the most attention here. We also give English support to students whose school days have been in Hindi or Urdu.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, with marks-aware presentation of each step." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with technology, and a well-chosen exploration topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics through modern physics, practised on unfamiliar contexts and data." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, organic pathways and accurate use of the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecular biology, genetics, physiology and ecology, with crisp definitions." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Systems, land use and water, with cane farming and river issues as near examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Supply and demand diagrams, development and evaluation of policy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and numerical techniques for families who run businesses." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and structured essays, using South Asian and world topics." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and essays for students who grew up reading in Hindi or Urdu." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition built on a strength many Seohara students already have." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, systems and a programming project." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation about knowledge claims, leading to an exhibition and an essay the student writes alone." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Question, outline and argument structure, with feedback but no drafting." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Criteria-based investigations and written reasoning before Diploma years." },
  ],

  igcseSubjectsIntro:
    "Most boarding and day schools that Seohara families consider for Class 9 and 10 run Cambridge IGCSE, with a few using Pearson Edexcel. We confirm the board, tier and specification code before the first lesson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and data handling, with tier advice." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions that prepare for IB or A Level." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, thermal physics, electricity and waves, plus the practical paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atoms, reactions, electrolysis and organic basics with correct equations." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cell biology, human systems, inheritance and ecology." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences within one qualification." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, data representation and networks." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Core ideas with examples from Indian agriculture and trade." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension, summary and composition at the pace of a developing English speaker." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and oral work in a subject where students often excel." },
    { name: "IGCSE Urdu as a Second Language", levels: "Grade 9-10", description: "Script, reading and written response, where the school offers it." },
  ],

  regionsTitle: "Seohara and the small towns of Bijnor district we teach online",
  regionsIntro:
    "A live lesson does not depend on which mohalla or village the student lives in. These notes set out the local detail we plan around: school hours, roads, fog and power.",
  regions: [
    { name: "Seohara town centre and main bazaar", note: "Shop-owning families near the market, with busy evenings and a habit of tuition after school." },
    { name: "Seohara railway station area", note: "Railway staff and travelling professionals, with children who sometimes study in other towns." },
    { name: "Sugar mill colony", note: "Mill employees and cane-linked households whose seasonal work pattern shapes the family's timetable." },
    { name: "Civil lines and tehsil offices", note: "Government staff and teachers, often transferable, who value a tutor who can stay with the child." },
    { name: "Dhampur road", note: "The main link to Dhampur, a sugar and trading town, used by commuting students." },
    { name: "Najibabad side", note: "Families to the north who look to Najibabad and Kotdwara for schooling and to Dehradun for boarding." },
    { name: "Nagina and Kiratpur", note: "Neighbouring towns known for trade and crafts, where parents ask about online options." },
    { name: "Bijnor city", note: "The district headquarters, about an hour away, with the largest choice of CBSE schools locally." },
    { name: "Villages along the Moradabad road", note: "Farming households where good broadband matters more than distance and lessons follow the harvest." },
  ],

  schoolClusters: [
    {
      city: "Seohara and Bijnor district",
      note: "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Seohara, Dhampur or Bijnor. Local schools follow the UP Board or CBSE, and international syllabus options are in other cities.",
      schools: [],
    },
    {
      city: "Nearby: Noida",
      note: "The nearest large cluster of IB and Cambridge day schools for families willing to relocate, several hours away by road.",
      schools: ["Pathways School Noida", "Genesis Global School", "Prometheus School"],
    },
    {
      city: "Nearby: Dehradun",
      note: "Western Uttar Pradesh has a long tradition of sending children to boarding schools in the Doon valley, including some that run international courses.",
      schools: ["SelaQui International School", "Unison World School"],
    },
    {
      city: "Nearby: Meerut",
      note: "A closer option within western Uttar Pradesh, with one school we have confirmed on our Meerut page.",
      schools: ["Vidya Global School"],
    },
  ],
  schoolDisclaimer:
    "The Noida, Dehradun and Meerut schools are listed only because western Uttar Pradesh families sometimes consider them. IB Gram is an independent tutoring business, not affiliated with any school, the IB, Cambridge or Pearson, and we have not confirmed an IB or IGCSE school in Seohara. Please verify programmes, fees and admissions with the school.",

  modesIntro:
    "All lessons for Seohara are online. These three formats fit a tehsil town where school runs on the UP Board calendar and where fog, harvest and festivals each claim part of the year.",
  modes: [
    {
      title: "Online home tuition, every week",
      description:
        "A regular evening hour with a tutor who has taught your course, taken on a laptop at home. It works for students already in an international school and for those preparing to move.",
      bullets: [
        "One tutor per subject and level",
        "Live working on a shared whiteboard",
        "Past papers from the right board",
        "No tutor visits homes in Seohara",
      ],
    },
    {
      title: "English-for-study bridge",
      description:
        "Students from Hindi-medium or Urdu-medium schools join a course that combines subject content with reading, vocabulary and answer writing in English.",
      bullets: [
        "Weekly vocabulary lists by topic",
        "Reading of short technical passages",
        "Answers planned aloud, then written",
        "Progress note to parents each month",
      ],
    },
    {
      title: "Holiday and exam-window blocks",
      description:
        "When a boarder is home for Diwali, winter or summer break, sessions become denser and more frequent, then ease off once school restarts.",
      bullets: [
        "Daily or alternate-day sessions",
        "Targets agreed with the school's teachers",
        "Timed papers and mark-scheme review",
        "Plan left with the family for term time",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Seohara, and where do Bijnor families look?",
      paragraphs: [
        "No IB or Cambridge / Edexcel IGCSE school is confirmed in Seohara, and we name none. The town and its neighbours rely on UP Board, CBSE and some Urdu-medium institutions. Families who want an international syllabus turn to Noida for day schooling, to Dehradun for boarding, or to Meerut, which has one school confirmed on our page for that city.",
        "Geography makes this a serious decision. Noida is a long road journey from Bijnor district, and Dehradun, though close on the map, means a child living away from home from about Class 6 or 8. Parents often want evidence that the child will cope with an English-medium classroom and its style before committing.",
        "Online lessons answer that need. Over a few months at home, a tutor can introduce the IB way of asking questions, build written English and show how a full-mark answer is built. If the child then joins a school, the lessons continue on holidays, and if the family decides against it, the child has still gained in language and reasoning.",
        "A third group is families already abroad or heading there who want an internationally recognised syllabus kept alive. Whatever your reason, tutoring supports the school arrangement and does not replace it.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Seohara or Bijnor district",
        "Noida, Dehradun and Meerut are the usual alternatives",
        "Trial online lessons help test readiness before a move",
        "Tutoring supports the school and never replaces it",
      ],
    },
    {
      heading: "How do IB and IGCSE compare with the UP Board and CBSE for a student in Seohara?",
      paragraphs: [
        "Most Seohara students study for the UP Board's High School and Intermediate examinations, largely in Hindi, or follow CBSE in an English-medium school. The UP syllabus is broad, the exams reward correct facts and neat presentation, and the pathway towards Aligarh Muslim University, Delhi University, IIT Roorkee or a state medical college is well understood.",
        "IB and IGCSE alter what earns marks. Instead of asking a student to reproduce a derivation, an examiner may give an unfamiliar situation and ask for a reasoned prediction with units and a justification. A student who knows the chapter can still lose half the marks for an unsupported statement.",
        "Language makes a further difference. A child who reads Hindi fluently may be slow on an English question with three clauses, and misreading a command word is an avoidable loss. A big part of tutoring is training the eye to catch the command term and the data before writing anything.",
        "The table puts the three systems side by side.",
      ],
      table: {
        caption: "UP Board, CBSE and IB or IGCSE, from a Seohara household's viewpoint",
        columns: ["Aspect", "UP Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Main language of teaching", "Hindi, with English as a subject", "English or Hindi", "English, with Hindi or Urdu as language subjects"],
          ["What the paper rewards", "Correct facts and complete answers", "Facts and application", "Reasoning, evidence and evaluation"],
          ["Availability near Seohara", "Very widespread", "Several schools in Bijnor and Dhampur", "None confirmed; nearest in Meerut, Noida and Dehradun"],
          ["Entry to Indian universities", "Direct, with state routes", "Direct", "Needs AIU equivalence and exam-specific eligibility checks"],
          ["Standing overseas", "Judged case by case", "Judged case by case", "Widely understood by admissions offices"],
        ],
      },
    },
    {
      heading: "What goes into the cost of IB and IGCSE tuition for a family in Seohara?",
      paragraphs: [
        "Every quote is built from the level and subject, the duration of each lesson, how many lessons run each week, and the experience of the tutor with your board. Diploma Chemistry HL, taught by someone who has taken students through it several times, is priced differently from MYP Mathematics for a Class 7 child. We do not publish a price list, because any published number would be wrong for many families.",
        "It helps to count what online tuition saves. A specialist in a big city means petrol or train fares, a day out and often a night away. Online, the lesson costs only the lesson. Parents in small towns also avoid paying for a crowded batch where much of the time covers what their child already knows.",
        "The steps are simple. Write to us with class, board and subject, receive a tutor profile and a written rate, and only then book the free trial. If it does not suit, you pay nothing. Later you can reduce hours, pause for Eid, Diwali or a wedding, or change tutor without a fee.",
        "A sensible start is one weekly lesson in the weakest subject and a review after four weeks.",
      ],
      bullets: [
        "Level, subject, duration, frequency and tutor experience set the rate",
        "No fuel, train fares or overnight stays",
        "Written rate before the free trial",
        "Pause, reduce or change tutor without charge",
      ],
    },
    {
      heading: "Does online tuition beat a coaching centre or village teacher in Bijnor district?",
      paragraphs: [
        "It depends what you want. For UP Board examinations, JEE and NEET, Seohara, Dhampur and Bijnor have capable coaching centres and private teachers, and many families use them gladly. For IB or IGCSE, the issue is familiarity. Few local teachers have prepared a student for an IGCSE Physics practical paper or an IB Mathematics exploration, and they would say so themselves.",
        "An IB Gram tutor is chosen for having taught the very course your child follows. They use the right past papers, explain the mark scheme line by line and leave a short note after every lesson. For a child who is shy in English, the one-to-one setting is also kinder than a batch, because no classmate is waiting.",
        "Self-study with videos helps revision but does not mark anything. A video will not see that a student always forgets units, or that an essay ends before it reaches a conclusion.",
        "The table compares the four common routes.",
      ],
      table: {
        caption: "Four study routes for an IB or IGCSE student in Seohara",
        columns: ["Route", "Knows the course", "Individual feedback", "Fit for Seohara"],
        rows: [
          ["Online one-to-one tutor", "Yes, for the named board and level", "After every lesson", "Needs a steady home connection; no travel"],
          ["Local private teacher", "Usually UP Board or CBSE", "Individual", "Easy to reach, limited for international papers"],
          ["Coaching centre in Bijnor or Moradabad", "JEE, NEET or board-focused", "Shared in a batch", "Daily travel and fixed timings"],
          ["Self-study from videos", "Varies by source", "None without review", "Flexible but unsupervised"],
        ],
      },
    },
    {
      heading: "How do fog, festivals and harvest shape the study year in Seohara?",
      paragraphs: [
        "Winter in western Uttar Pradesh means fog, sometimes thick enough to delay trains and keep schools shut for days in late December and January. For online lessons that is an advantage, because the classroom is a laptop, and we use those weeks for long revision blocks. The catch is cold rooms and early darkness, so we suggest afternoon slots on the foggiest days.",
        "The festival calendar is full. Holi in March, Eid and Ramadan in shifting months, Dussehra, Diwali and Chhath in autumn, and Sawan with its Kanwar pilgrim traffic in July and August all change when a household can sit down to study. During Ramadan, families often prefer post-iftar or pre-dawn slots, and we accommodate that.",
        "Agriculture sets a quieter rhythm. The cane crushing season runs through winter, bringing tractors and trucks onto every road, and wheat harvest in April brings extra work at home for many households. Summers are hot, with power cuts at peak afternoon hours, while the monsoon brings humidity and storms.",
        "The table sets the local year beside the exam calendar.",
      ],
      table: {
        caption: "Seohara's seasons and festivals against IB and IGCSE dates",
        columns: ["Months", "Local conditions", "Academic point"],
        rows: [
          ["December to February", "Dense fog, cold, cane crushing, Republic Day", "Mocks and pre-board tests; Cambridge February-March series"],
          ["March to May", "Holi, wheat harvest, rising heat, Eid in some years", "IB May session; Cambridge and Edexcel May-June exams"],
          ["June to September", "Heat then monsoon, Sawan and Kanwar traffic, Raksha Bandhan", "IB results in July; Class 9 and 11 terms start"],
          ["October to November", "Dussehra, Diwali, Chhath, mild weather", "IB November exams; Cambridge October-November and Edexcel November papers"],
        ],
      },
    },
    {
      heading: "Which universities and careers can follow IB or IGCSE for a Seohara student?",
      paragraphs: [
        "Students from Bijnor district who complete the IB Diploma or IGCSE with A Levels can go in three directions. In India, admission to a central university usually depends on Association of Indian Universities equivalence and CUET-UG. Medical and engineering aspirants work through NEET or JEE, which publish their own rules on international boards. And a growing number think about study abroad.",
        "Aligarh Muslim University and Jamia Millia Islamia attract many students from this part of Uttar Pradesh, along with Delhi University colleges and IIT Roorkee, which is among the closest IITs. Each has its own conditions for international-board applicants, and notices change from year to year, so check the current one before choosing subjects in Class 11.",
        "For study overseas, the United Kingdom, Canada, the United States, Australia and the Gulf are the usual choices. IB Diploma scores and strong IGCSE and A Level results are well understood by admissions offices. Families with Gulf connections often see this route as natural.",
        "Tutors help with subject mastery and exam technique. Selecting courses, writing personal statements and submitting applications are the student's and family's work.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for central universities",
        "AMU, Jamia, Delhi University and IIT Roorkee are familiar targets",
        "NEET and JEE rules for international boards need yearly checking",
        "Study abroad, including the Gulf, is a common second route",
      ],
    },
    {
      heading: "How do IB Mathematics and the sciences work, and where do Seohara students lose marks?",
      paragraphs: [
        "IB Mathematics has Analysis and Approaches for students heading to engineering, physics or economics, and Applications and Interpretation for those going into social science, business or design. Seohara students usually arrive with good arithmetic and algebra, because Indian schooling drills them well. What they lack is practice with the graphic display calculator and the habit of writing one line of reason beside each step.",
        "Physics, Chemistry and Biology share a pattern: a syllabus core, options, and an Internal Assessment investigation. Physics gives unfamiliar scenarios, Chemistry demands exact terminology and calculation layout, and Biology wants accurate vocabulary. Students who learnt a concept in Hindi sometimes hold the idea but miss the English term that scores the mark.",
        "We answer with a glossary built lesson by lesson, model answers that show what full marks look like, and regular practice of command terms such as state, outline, explain and evaluate. Timed questions build pace.",
        "For Internal Assessments, a tutor can talk through research questions, variables and data analysis and comment on clarity. The student carries out the investigation and writes the report.",
      ],
      bullets: [
        "Choose Mathematics AA or AI to match degree plans",
        "Build an English-Hindi glossary for each topic",
        "Practise command terms under timed conditions",
        "Get feedback on Internal Assessments without ghost-writing",
      ],
    },
    {
      heading: "How should a family in Seohara choose IGCSE tiers and subjects?",
      paragraphs: [
        "Cambridge IGCSE offers most subjects at Core and Extended tiers. Core covers the basic content and limits the top grade, while Extended covers the complete syllabus and allows A*. A student planning IB Mathematics, A Level sciences or engineering should normally enter Extended, and a diagnostic lesson helps confirm this.",
        "A typical package has English, Mathematics, two or three sciences, a language and one or two electives. Hindi is the natural language choice for most Seohara students, and Urdu as a Second Language is available at some schools for those who read the script. Computer Science, Economics and Business Studies are common electives depending on the school.",
        "English holds the rest together. A student who reads widely and writes clearly gains in every paper, so we recommend brief daily reading and a weekly paragraph of writing even when exams are far off.",
        "Pearson Edexcel papers differ slightly from Cambridge in layout and command words, so we check the board before we begin.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send class, board, subject and any Noida or Dehradun school on your shortlist by WhatsApp." },
    { title: "Receive tutor details", description: "We propose a tutor who has taught your syllabus and give the rate in writing." },
    { title: "Take a free lesson", description: "Test the teaching and the home internet together with nothing to pay." },
    { title: "Fix a slot", description: "Pick a weekly time that avoids school, tuition, fog-delayed mornings and festival nights." },
    { title: "Check progress monthly", description: "Read the notes, adjust hours and switch tutors if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right tutor for the course", description: "We match on board, level and syllabus code, not just the subject name." },
    { title: "English made approachable", description: "Reading, vocabulary and written reasoning are built up gently for Hindi and Urdu speakers." },
    { title: "No long road trips", description: "The lesson arrives on a laptop, so evenings are spent studying and not travelling." },
    { title: "Clear written notes", description: "Each session ends with a short note that parents can read in a minute." },
    { title: "Plans around local life", description: "Fog, Ramadan, Kanwar traffic and harvest are built into the timetable." },
    { title: "Honest boundaries", description: "We coach and explain; we do not write assessed work or promise grades." },
  ],

  tutorsIntro:
    "IB Gram tutors teach from several Indian cities and work in Indian Standard Time, the clock Seohara already keeps. We choose each one for the exact courses they have taught.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Seohara?",
      answer:
        "We could not confirm one. Schools in Seohara, Dhampur and Bijnor follow the UP Board or CBSE, and we found no authorised IB or Cambridge school in the district. The nearest international options are in Meerut, Noida and the Dehradun boarding belt. Online tutoring helps a student prepare for such a move or keep an international course going at home. Please verify each school's status directly.",
    },
    {
      question: "Will a tutor come to our home in Seohara?",
      answer:
        "No. Tutors do not visit homes in Seohara, and in-person home tuition exists only in Gurugram and parts of Delhi NCR. What we offer is online home tuition: a live private lesson at your own desk with a tutor based elsewhere in India. You keep the privacy and routine of tuition at home and reach a specialist who does not live in Bijnor.",
    },
    {
      question: "Can my child from a Hindi-medium school prepare for IB or IGCSE?",
      answer:
        "Yes, as preparation. Official IB enrolment needs an authorised school, but online lessons can build English reading, written reasoning and subject vocabulary over several months. Many families start in Class 7 or 8, so that a move to an English-medium international school at Class 9 or 11 is easier on the child.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Seohara?",
      answer:
        "Rates are quoted individually and not published. They depend on the programme and level, the subject, the lesson length, how often lessons happen and the tutor's experience. There is no travel charge because lessons are online. You receive a written rate before the free trial and can reduce, pause or change tutor later without any penalty.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No, they coach. A tutor can help a student choose a research question, plan the method, think about data and improve structure and clarity. Every sentence of the assessed work must be the student's own. IB Gram does not write coursework, and any such request would end the arrangement.",
    },
    {
      question: "Can a tutor explain in Hindi or Urdu?",
      answer:
        "Sometimes. IB and IGCSE papers are in English, so most teaching is in English, but a tutor who speaks Hindi can unpack a difficult idea in Hindi and then build the English terms beside it. IGCSE Hindi and Urdu as second languages, and IB Hindi B, are available as subjects if the school offers them.",
    },
    {
      question: "When are the IB and IGCSE exams, and when should we start revising?",
      answer:
        "IB Diploma exams are held in May and November. Cambridge IGCSE runs in February-March, May-June and October-November, and Pearson Edexcel has January, May-June and November sessions. Begin revision at least six months early and move to timed papers in the last eight weeks. The school or exam centre confirms the dates for your child.",
    },
    {
      question: "Does winter fog or a power cut affect online lessons?",
      answer:
        "Fog itself does not, since the lesson is on a laptop, but cold and dark evenings can tire students, so afternoon slots help. Power cuts in summer and storms in the monsoon can interrupt a session. Keep a charged laptop and a phone hotspot ready. Any missed lesson is rebooked within the week.",
    },
    {
      question: "Can lessons be arranged around Ramadan?",
      answer:
        "Yes. Many families prefer a slot after iftar or before dawn during Ramadan, and we plan lighter weeks and adjust the load to suit fasting hours. Tell us in the first message and the tutor will build the timetable around your household. Eid days are kept free and missed lessons are rebooked without charge.",
    },
    {
      question: "Should my child take Core or Extended IGCSE?",
      answer:
        "Most students who want to keep options open should take Extended. Core limits the top grade and covers fewer topics, while Extended covers the full syllabus and allows A*. A diagnostic lesson shows where your child stands, and the tutor then recommends a tier with the intended IB, A Level or degree path in mind.",
    },
    {
      question: "Can lessons continue if we move to Noida, Meerut or Dehradun?",
      answer:
        "Yes. The tutor, the weekly slot and the notes stay with your child because the lessons are online. If the new school follows a different board, the tutor adapts the plan within a session or two. You may request a fresh match at any time if the fit changes.",
    },
    {
      question: "Do you teach IB Mathematics AA and AI?",
      answer:
        "Yes, at Higher and Standard Level. Analysis and Approaches suits students aiming at engineering, physics or pure mathematics, while Applications and Interpretation suits business, design and social science. The school decides which courses are offered. A trial lesson on a typical problem shows which style your child prefers.",
    },
    {
      question: "My child is weak in Chemistry calculations. Can you help?",
      answer:
        "Usually yes. We find the first topic where understanding broke, often moles or equations, and rebuild with short graded problems and worked examples. Two or three lessons a week for a few weeks steadies most students, after which a weekly session keeps pace. Starting early in the school year leaves the most room.",
    },
    {
      question: "How do we start, and is the first lesson free?",
      answer:
        "The first lesson is free. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the class, board and subject. We reply with a tutor profile and a written rate, then arrange a trial at a convenient time. If the tutor is not right for your child, we will suggest another.",
    },
    {
      question: "Is IB Gram connected to any school or board?",
      answer:
        "No. IB Gram is an independent tutoring service and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. School names appear only to show where families from western Uttar Pradesh sometimes look. Always confirm fees, curriculum and admissions with the school.",
    },
    {
      question: "Do you teach students in Dhampur, Najibabad, Nagina and Bijnor too?",
      answer:
        "Yes. Because lessons are online, the same tutors teach students across Bijnor district. What differs is the local detail such as school hours, travel and power. Mention your town in the first message and we fit the timetable to it. Every family begins with the same free trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from the Primary Years to the Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "Managing six subjects and the core." },
    { label: "IB Primary Years Programme tuition", href: "/programmes/pyp/", description: "Early support for PYP children." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles and syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book your free trial lesson." },
    { label: "IB and IGCSE tutors in Moradabad", href: "/moradabad/", description: "The large city to the west, also taught online." },
    { label: "IB and IGCSE tutors in Najibabad", href: "/najibabad/", description: "A Bijnor district neighbour with a similar school picture." },
    { label: "IB and IGCSE tutors in Nagina", href: "/nagina/", description: "Another town of the district, served online." },
    { label: "IB and IGCSE tutors in Dehradun", href: "/dehradun/", description: "The boarding-school belt many families consider." },
  ],

  closingHeading: "Book a free online lesson at home in Seohara",
  closingBody:
    "Send the class, the board and the subject that worries you most. We will suggest a tutor who has taught that exact course, state the rate in writing and arrange a trial for a time that suits your household. Reach us on WhatsApp at +91 7439 368 115 or email support@ibgram.com.",
};
