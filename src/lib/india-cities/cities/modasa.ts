import type { CitySeoPage } from "../types";

/**
 * /modasa/ - IB and IGCSE tutoring page for Modasa, Aravalli district, Gujarat. No IB or Cambridge school
 * inside Modasa could be confirmed, so stripSchools is empty and clusters are labelled nearby cities
 * (Ahmedabad, Kalol, Vadodara) reusing names from mahesana.ts. Online-only delivery.
 */
export const modasa: CitySeoPage = {
  slug: "modasa",
  countryName: "Modasa",
  countryNameLong: "Modasa, Gujarat",
  demonym: "Modasa",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons step around Navratri evenings, the Uttarayan kite holiday, Diwali and the Shamlaji fair, the April to June heat, and your child's school or tuition hours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.4667, longitude: 73.3 },
  wikipedia: "https://en.wikipedia.org/wiki/Modasa",
  alternateNames: ["Modasa Aravalli", "Modassa"],
  stripSchools: [],

  title: "Modasa IB & IGCSE Tutors | Online Private Tuition at Home",
  metaDescription:
    "IB and IGCSE tutors for Modasa, Aravalli: private tuition from home over live video, one to one, DP, MYP, PYP and Cambridge subjects. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Modasa",
  heroEyebrow: "MODASA, ARAVALLI: IB & IGCSE TUITION AT HOME, ONLINE",
  heroSubtitle:
    "Private tuition from home for an IB or IGCSE student in Modasa comes down to a laptop, a quiet room and a teacher on video who already knows the course. No tutor turns up at the door, since home visits are limited to Gurugram and parts of Delhi NCR, yet the lesson is one to one, fitted to your evenings, and followed by a written note for parents.",
  primaryKeyword: "IB and IGCSE tutors in Modasa",
  imageAltText: "A Modasa student at home in north Gujarat taking an online IB Economics lesson with a private tutor",
  secondaryKeywords: [
    "IB tutor Modasa",
    "IGCSE tutor Modasa",
    "IB home tuition Modasa",
    "IGCSE home tuition Modasa",
    "IB private tuition Modasa",
    "IB Maths tutor Modasa",
    "IGCSE Maths tutor Modasa",
    "IB Physics tutor Modasa",
    "IB Chemistry tutor Modasa",
    "IB Biology tutor Modasa",
    "IB DP tutor Modasa",
    "IB MYP tutor Modasa",
    "IB PYP tutor Modasa",
    "IGCSE online tuition Modasa",
    "IB tutor Aravalli district",
    "IGCSE tutor Himatnagar",
    "online IB tuition Bhiloda",
    "IB tutor Modasa Gujarat",
    "Modasa international curriculum tuition",
  ],

  heroTrustPoints: [
    "Every lesson is live on video; nobody visits a home in Modasa, as in-person teaching exists only in Gurugram and parts of Delhi NCR",
    "No IB or Cambridge school is confirmed in Modasa, so tutors are chosen for the syllabus and level, not for their address",
    "The first lesson is free and commits you to nothing",
    "IB Gram stands apart from all schools, boards and exam bodies named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge, Edexcel", label: "IGCSE choice" },
    { value: "IST", label: "No time gap" },
    { value: "Free first lesson", label: "Try before paying" },
  ],

  intro: {
    heading: "What international-curriculum help means in Modasa",
    paragraphs: [
      "Modasa has been the headquarters of Aravalli district since August 2013, and it is a town of roughly 68,000 people at the 2011 census. It is a trading and agricultural centre with a cluster of colleges in law, science, pharmacy and commerce. Its schools follow the Gujarat board, CBSE or a few private patterns, and we could not confirm any that teaches the IB or a Cambridge or Edexcel IGCSE course.",
      "North Gujarat has close ties with the UK, the US, Canada and East Africa, and many Modasa households have relatives abroad. That explains most enquiries about IB and IGCSE: a child may be preparing to join family overseas, to enter an international school in Ahmedabad, or to move on at Class 11 to a campus with a Diploma programme.",
      "The nearest wide choice of international schools is in Ahmedabad, a couple of hours away by road, and the gap between that and a Modasa kitchen table is exactly where online tutoring sits. A tutor who has taught HL Mathematics or Cambridge Chemistry appears on the screen, takes the student through the topic and leaves a note behind.",
      "IB Gram is an independent service. It is not connected to the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school named on this page. Tutors explain, set work and mark it, and never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework.",
    ],
    bullets: [
      "IB tutoring for PYP, MYP, Diploma and CP students",
      "Cambridge and Edexcel IGCSE, Core, Extended, Foundation and Higher",
      "Live one-to-one lessons on Indian Standard Time",
      "A free first lesson and a written note after each class",
      "No house visits in Modasa; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Modasa the IB arrives from outside: through a school in Ahmedabad or Vadodara, a family's move overseas, or a decision taken before Class 11. Here is each stage in plain terms, followed by what north Gujarat households tend to ask for.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Young pupils study big themes such as how the world works or how we organise ourselves, and the classroom blends language, number and science inside each unit. A self-planned Exhibition rounds off the last year. Tutors here mostly build steady reading and a feel for numbers.",
      countryNote:
        "From Modasa, PYP calls are rare. They come from parents lining up a place at an Ahmedabad primary school who want the first term to feel familiar.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four published criteria decide the grade in each subject, then a Personal Project closes the programme. A pupil raised on GSEB papers usually knows enough content; what changes is showing the working, choosing command terms carefully and justifying each claim.",
      countryNote:
        "Modasa MYP help gathers around Sciences, Mathematics and English, with a calm plan for the Personal Project across Years 4 and 5.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three taken at Higher Level and three at Standard, are joined by Theory of Knowledge, a 4,000-word Extended Essay and Creativity, Activity, Service. Coursework called Internal Assessment adds to each subject grade, and the main papers come in May.",
      countryNote:
        "A Diploma student linked to Modasa is enrolled somewhere else, so lessons run by video in term and pick up speed in the summer break.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Picture a slimmer Diploma: two or three academic courses alongside practical career study, a skills course and a reflective project. Indian schools rarely run it. Whatever Diploma courses sit inside are marked to the normal DP standard.",
      countryNote:
        "CP questions from Modasa almost never arise, and when they do a particular overseas school is behind them.",
    },
  ],

  subjectsIntro:
    "Matching begins with code and level. A student on Analysis and Approaches faces different papers from one on Applications and Interpretation, and Higher Level runs faster than Standard. After that the tutor and parents fix the exam session, see where the Internal Assessment stands, and choose a weekly slot that sits beside school, tuition classes and any family shop hours.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof get worked out loud; HL candidates meet Paper 3's long, unfamiliar problems months before the exam rather than in the last fortnight." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, regression and modelling lean on calculator technique, and the exploration grows best from a data set the student actually finds interesting." },
    { name: "IB Physics", levels: "HL / SL", description: "Learners practise finding formulas in the data booklet fast, carry units through every line, and plan an investigation that a moderator could repeat from the write-up alone." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations come first because equilibrium, organic reactions and energetics all rest on them in the second year of the course." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks follow the command term in the question rather than the amount remembered, and the farmland around Modasa gives live examples for genetics and ecology." },
    { name: "IB Economics", levels: "HL / SL", description: "Tidy diagrams, recent examples and a conclusion that takes a side carry the marks, and the agricultural trade of the district is a handy case to reason about." },
    { name: "IB Business Management", levels: "HL / SL", description: "Trading houses, agri-processing units and family firms offer a genuine organisation to analyse, and answers win marks when a named tool is tied to the case in hand." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commenting on an unseen text, writing a comparison and speaking in the oral each call for a different skill, and each is practised against its own rubric." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Searching, sorting, abstract data types and object-oriented design are taught through live coding, feeding the working-program project that is assessed internally." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be quoted accurately and weighed, and the long answers earn credit for the line of argument as much as for remembered detail." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Falling groundwater, dryland farming and reservoir management in the Aravalli foothills supply strong real material for systems diagrams." },
    { name: "IB Geography", levels: "HL / SL", description: "A handful of cases known in depth outscore a long shallow list, and the Mazum river basin nearby is an obvious fieldwork topic." },
    { name: "IB Gujarati B", levels: "SL / HL", description: "An acquisition-language course for fluent Gujarati speakers, working on written accuracy, response to texts and the individual oral." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Structured writing tasks and oral rehearsal for students who studied Hindi at school and want a strong language grade." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions feel like a debate about a prescribed title: the student defends a claim, hears the strongest objection and revises." },
  ],

  igcseSubjectsIntro:
    "No centre in Modasa handles IGCSE entries, so the family settles board, code and tier early and works out where the papers will be sat. Cambridge 0580 and Edexcel 4MA1 look alike but read differently, which is why practice must come from the matching board.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended Paper 1 forbids a calculator, so quick arithmetic and fully shown steps both count, since method marks survive a slip." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Differentiation, functions and identities show up early here and smooth the jump into Diploma mathematics or A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Wording and question order differ from the Cambridge paper, so revision needs this board's own past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Circuits, waves and energy take the largest share of marks, and the alternative-to-practical paper is coached as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole questions cost marks everywhere in the paper, so they are repeated until they feel automatic." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Inheritance, enzymes and transport are heavily examined, and longer answers gain credit for a clear order of ideas." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams secure the early marks, while the closing evaluation question separates the top grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python are practised on problems the student has never seen." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "The summary and the directed-writing task reward drilled technique more than general reading." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Examiners want theory applied to the case in front of the candidate, not a recited definition." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "A sensible way to secure a language grade in a tongue already used at home, with help on writing and listening." },
  ],

  regionsTitle: "Modasa and nearby areas where our online IB and IGCSE tutors reach students",
  regionsIntro:
    "Lessons are online, so these places describe schooling and daily timing, not travel distance. Modasa lies inland in the Aravalli foothills, with roads running out to Himatnagar, Malpur, Dhansura and Shamlaji.",
  regions: [
    { name: "Modasa town centre", note: "The market and bus station area, with long-established Gujarati-medium and CBSE schools and a strong habit of evening tuition." },
    { name: "College and education belt", note: "The part of town around the law, science and pharmacy colleges, home to teaching staff and students from surrounding villages." },
    { name: "Highway and bypass side", note: "Newer housing along the main road, popular with families who commute to Himatnagar or Ahmedabad." },
    { name: "Mazum reservoir side", note: "A quieter edge of town near the water supply, with a mix of older families and new builds." },
    { name: "Malpur road", note: "The corridor towards Malpur, used by trading and farming households with shops and land on both sides." },
    { name: "Dhansura road", note: "The route to Dhansura, where families combine school runs with work in the agricultural trade." },
    { name: "Shamlaji road", note: "The road towards the Shamlaji temple, busy during the Kartik fair, when study plans shift." },
    { name: "Bhiloda", note: "A taluka town in Aravalli district, where online lessons spare students a long bus ride after school." },
    { name: "Meghraj", note: "A smaller town in the district, where families travel to Modasa for wider school and college choice." },
    { name: "Himatnagar", note: "The nearby Sabarkantha headquarters, often the next stop for families wanting a larger range of schools and coaching." },
  ],

  schoolDisclaimer:
    "We have not been able to confirm any school in Modasa as an IB World School or a Cambridge or Edexcel centre, and the page makes no such claim. Schools listed under nearby cities show only where regional families tend to look. IB Gram is an independent tutoring service and has no tie to them or to any examination body.",
  schoolClusters: [
    {
      city: "Modasa and Aravalli district",
      note: "Schools across the town and district follow the Gujarat board, CBSE or a small private pattern; none is confirmed for the IB or Cambridge IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Ahmedabad, roughly two hours by road, has the nearest wide choice of IB and Cambridge schools, and is usually a boarding or relocation decision for Modasa families.",
      schools: ["Mahatma Gandhi International School, Ahmedabad", "Ahmedabad International School"],
    },
    {
      city: "Nearby: Kalol and Gandhinagar",
      note: "The Gandhinagar belt is closer than Vadodara and has at least one Cambridge campus confirmed on neighbouring pages.",
      schools: ["Swayam Cambridge International School, Kalol"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Vadodara is the other major Gujarat option, popular with families who already travel there for work.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],

  modesIntro:
    "Parents in Modasa usually decide by asking what the child needs this term: a weekly anchor, help bridging a school change, or a short push before an exam. Each option is live, private and on video.",
  modes: [
    {
      title: "One child, one tutor, on video at home",
      description:
        "Your child sits at their own desk while a teacher appears on screen with a shared whiteboard for a fixed hour each week. The attention is that of a private tutor and the room is your own, yet nobody has to cross Modasa to get there.",
      bullets: [
        "Teacher selected for your exact course, from any Indian city",
        "Covers IB DP, MYP and Cambridge or Edexcel IGCSE",
        "Past papers and model answers open on screen throughout",
        "You keep the same teacher unless you decide otherwise",
      ],
    },
    {
      title: "Term-long rhythm with a note for parents",
      description:
        "One or two classes every week, a few lines in writing sent after each, and a sit-down review every few weeks to reset the targets.",
      bullets: [
        "Written summary after each class",
        "Regular goal reviews with the tutor",
        "Comfortable pace for MYP, PYP and Year 1 of the Diploma",
        "A second weekly slot is easy to add ahead of mocks",
      ],
    },
    {
      title: "Short revision sprints",
      description:
        "A compact burst of sessions before mocks or the exam series, built on timed papers and prompt marking, fitted around Diwali and the summer holiday.",
      bullets: [
        "Timed papers marked against current criteria",
        "Comments returned within days",
        "Planned around festival weeks and mock dates",
        "Works best when begun two to three weeks before exams",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Modasa families ask about IB and IGCSE tutoring?",
      paragraphs: [
        "No school in Modasa teaches an international syllabus, as far as we can confirm, so every family asking has a concrete reason. North Gujarat's ties abroad are the strongest. Relatives in the UK, the US, Canada or East Africa are common, and parents want a child to hold a certificate that universities there read without translation.",
        "Another group is aiming at an international day or boarding school in Ahmedabad, Gandhinagar or Vadodara. The request there is for entrance-test practice and a bridge year in mathematics, science and English, and a tutor can begin months before admission.",
        "Teachers and professionals at the town's law, science and pharmacy colleges make up a third group. Some arrive from other states with children who already followed an international course, and keeping that course alive during a posting is a practical need.",
        "A smaller fourth set is trading and farming families whose businesses are growing. They would like the next generation to have choices beyond Gujarat, so they ask about IGCSE first and the Diploma afterwards.",
      ],
      table: {
        caption: "Why Modasa families ask about IB and IGCSE tutoring",
        columns: ["Family type", "Typical background", "What they usually need"],
        rows: [
          ["Families with relatives abroad", "Plans for UK, US, Canadian or East African study", "A qualification recognised overseas, strong maths and English"],
          ["School-move aspirants", "Targeting an international school in Ahmedabad or Vadodara", "Entrance-test and first-year readiness"],
          ["College faculty and professionals", "Child already on, or joining, an international course", "Continuity through a posting"],
          ["Business families", "Want options outside Gujarat for the next generation", "IGCSE foundations and later Diploma preparation"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed in Modasa",
        "Family links abroad drive many enquiries",
        "Entrance tests for Ahmedabad schools are a common goal",
        "College households need continuity across postings",
      ],
    },
    {
      heading: "Is there an IB or Cambridge school in Modasa?",
      paragraphs: [
        "We found none. Directories and official lists for Aravalli district show Gujarat board and CBSE schools, yet nothing listed as an authorised IB World School or a Cambridge International centre. Should that change, the page will be corrected.",
        "The closest confirmed options sit around Ahmedabad and Gandhinagar, among them a school that was one of Gujarat's earliest IB World Schools, and further off in Vadodara. None is a daily commute from Modasa, so choosing one means boarding or relocating.",
        "Some tutoring pages hint at a local IB community. Families are better served by the plain position. If your child has not yet started an IB or IGCSE course, pick the school or the private route first, then arrange tutoring for that particular course.",
        "A Modasa student already on the course studies precisely what a student elsewhere studies. Syllabus, marking and papers do not shift with the postcode, and the tutor need not be in the same town.",
      ],
      table: {
        caption: "International-curriculum options reachable from Modasa",
        columns: ["Place", "IB presence", "Cambridge IGCSE presence", "Typical arrangement"],
        rows: [
          ["Modasa", "None confirmed", "None confirmed", "Online tutoring or private candidacy"],
          ["Ahmedabad", "Several schools", "Several schools", "Boarding or relocation"],
          ["Gandhinagar and Kalol", "Limited", "At least one school", "Boarding or relocation"],
          ["Vadodara", "At least one school", "Several schools", "Boarding or relocation"],
        ],
      },
      bullets: [
        "No IB World School is confirmed in Modasa",
        "Ahmedabad is the nearest wide choice",
        "All options require boarding or relocation",
        "The syllabus is identical wherever it is studied",
      ],
    },
    {
      heading: "How does the Gujarat board compare with IB, IGCSE and CBSE?",
      paragraphs: [
        "A GSEB or CBSE paper rewards neat, accurate answers to questions a student has seen in some form. IB and IGCSE papers present a fresh situation and ask for reasoning, justification and judgement. Modasa pupils with excellent board scores sometimes find a first IGCSE paper strange, less for harder content than for a different expectation.",
        "The structural contrast is coursework. Gujarat board pupils do practicals and projects with small weight, whereas the IB adds Internal Assessments and an Extended Essay marked on published criteria, and several IGCSE subjects carry coursework or a practical paper.",
        "Level matters as well. IGCSE Core is near Class 10, IGCSE Extended stretches further, and IB Higher Level mathematics and sciences reach past Class 12 on some topics. A switch at Class 11 means closing named gaps, not restarting from scratch.",
        "Gujarati remains part of daily life, and both programmes let a language subject count, so a student can keep Gujarati or Hindi as a graded strength.",
      ],
      table: {
        caption: "Gujarat board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "Gujarat board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Marks reward", "Accurate recall", "Recall and some application", "Application and justification"],
          ["Internal work", "Modest", "Modest", "IAs, EE and coursework on published criteria"],
          ["Recognition abroad", "Needs equivalence", "Wider", "Widely recognised"],
          ["Teaching in Modasa", "Universal", "Available", "None confirmed; online tutoring fills the gap"],
        ],
      },
      bullets: [
        "IB and IGCSE reward application and explanation",
        "Coursework is marked on published criteria",
        "HL goes beyond Class 12 in some topics",
        "Gujarati and Hindi can stay graded languages",
      ],
    },
    {
      heading: "What makes one IB or IGCSE tutor cost more than another in Modasa?",
      paragraphs: [
        "Start with what is being taught. Class 7 MYP Mathematics asks less of a tutor than HL Diploma Chemistry, and some subjects have few experienced teachers nationwide, so a scarce subject naturally costs more.",
        "Then consider how lessons are arranged. A single weekly hour, two shorter meetings or a dense block before an exam add up to different monthly sums, and the sensible arrangement depends on the child's age and the exam date more than on anything else.",
        "A third influence is the tutor's recent hands-on work with the exact specification. A person who taught this year's course and marked its papers spares the student hours of guessing, which is generally better value than a cheaper hour spent on trial and error.",
        "Travel never enters the sum in an online lesson, so a flat in Modasa town and a farmhouse near Bhiloda pay alike. A quote in writing reaches you before you book, and the first lesson is free.",
      ],
      bullets: [
        "Subject, level and lesson arrangement set the rate",
        "Recent syllabus experience is worth paying for",
        "No travel cost for online lessons",
        "A written quote arrives before booking",
      ],
    },
    {
      heading: "Tuition classes, private tutors or online: what suits an IB student in Modasa?",
      paragraphs: [
        "Modasa's tuition classes are designed around GSEB, CBSE, GUJCET, JEE and NEET. Batches are large and follow one syllabus, which is right for those exams, but none is pitched at IB Physics HL or IGCSE Additional Mathematics.",
        "Individual tutors are plentiful and often excellent at steadying a nervous child. Few have taught the present IB or Cambridge specification, so command terms, criteria-based writing and tier decisions are new ground for most of them.",
        "Teaching yourself works for a disciplined student where past papers abound. It breaks down where another reader is needed, because nobody can grade their own reasoning fairly, which is why Internal Assessment drafts and long answers need a second pair of eyes.",
        "An online specialist pairs private attention with someone who has taught the exact course. The student never leaves home, and because the tutor may be in Bengaluru or Pune the talent pool is the whole country.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Modasa",
        columns: ["Option", "Syllabus fit", "Attention", "Limitation in Modasa"],
        rows: [
          ["Tuition classes", "GSEB, CBSE, GUJCET, JEE, NEET", "Large batch", "No IB or IGCSE batch"],
          ["Local private tutors", "Varies", "One to one", "Few know the current specification"],
          ["Self-study", "Depends on the student", "None", "No marked feedback on IAs"],
          ["Online IB and IGCSE tutor", "Matched to the exact course", "One to one", "Needs dependable internet during power cuts"],
        ],
      },
      bullets: [
        "Tuition classes serve board and entrance exams",
        "Local tutors seldom know the IB or IGCSE course",
        "Self-study lacks marked feedback",
        "Online tutors are chosen for the course, not the postcode",
      ],
    },
    {
      heading: "Navratri, Uttarayan and summer heat: how does Modasa's year shape study?",
      paragraphs: [
        "North Gujarat summers are fierce, with April to June readings often past 40 degrees Celsius, and the monsoon between late June and September is moderate. May afternoons defeat concentration, so early mornings and evenings work, and a cooler room helps.",
        "Navratri brings nine nights of garba in autumn and many families stay out late, so lessons on those evenings are rare. Diwali, also the Gujarati new year, closes schools for a week or more, and Uttarayan in January takes a day or two for kites.",
        "The Shamlaji fair in the month of Kartik draws pilgrims to a temple not far from Modasa, and roads and households are busy. Planning revision blocks in the quiet weeks around festivals works better than fighting them.",
        "For Diploma students the May papers land in the hottest weeks, so February and March mocks matter. Cambridge IGCSE runs in May and June and in October and November, and Edexcel adds January. Beginning two or three months ahead of each gives a steadier run.",
      ],
      table: {
        caption: "Modasa study calendar for IB and IGCSE students",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["January-March", "Uttarayan, Edexcel January series, mock season", "A good window for focused revision"],
          ["April-June", "Peak heat, IB May session, Cambridge May-June series", "Early morning or late evening slots"],
          ["June-September", "Moderate monsoon", "A steady weekly rhythm"],
          ["October-November", "Navratri, Diwali, Shamlaji fair, Cambridge second series", "Plan around festival weeks"],
        ],
      },
      bullets: [
        "Avoid lessons in the hottest afternoon hours",
        "Navratri evenings are best left free",
        "Diwali and Uttarayan need planned buffers",
        "Mocks in February and March prepare for May",
      ],
    },
    {
      heading: "Where can a Modasa student go after IB or IGCSE?",
      paragraphs: [
        "At home, the town's colleges teach law, science, pharmacy and commerce, while Ahmedabad and Gandhinagar hold IIM Ahmedabad, IIT Gandhinagar, Nirma University, Ahmedabad University, CEPT and Pandit Deendayal Energy University. Indian universities need Association of Indian Universities equivalence for an IB or IGCSE certificate.",
        "Engineering and medicine run through JEE Main, GUJCET and NEET, each with subject rules, typically Physics, Chemistry and Mathematics or Biology. An IB student should bear that in mind when choosing Class 11 subjects. Many central and private universities also take CUET-UG.",
        "Abroad, Gujarati families look mostly at the UK, Canada, the US and Australia. Offers hinge on predicted grades issued in the autumn of the final year, so lifting a predicted grade early counts for more than a last-minute scramble.",
        "A tutor's job is narrow: teach the subject, raise the predicted grade and sharpen exam technique. Applications and admissions stay with the family, though tutors will say candidly what a particular course expects.",
      ],
      bullets: [
        "Ahmedabad and Gandhinagar are the nearest major higher-education hubs",
        "AIU equivalence and subject combinations matter for JEE, GUJCET and NEET",
        "CUET-UG opens central university routes",
        "Predicted grades drive overseas applications",
      ],
    },
    {
      heading: "Choosing between IB Maths AA and AI, and the sciences, in Modasa",
      paragraphs: [
        "A student leaning toward engineering, physics or economics is usually happiest with Analysis and Approaches, a calculus-and-proof course whose HL Paper 3 poses long unfamiliar problems. Applications and Interpretation fits future business, biology or social-science students, with heavier statistics and technology.",
        "Physics HL turns on quick, accurate data-booklet use and an investigation that holds water. Chemistry HL shifts from quantitative topics to organic chemistry and energetics in year two, and gaps left in the early units surface there.",
        "Biology marks slip more often from misreading a command term than from forgotten facts, and investigations need enough statistics to back the conclusion. Board-trained students bring strong recall and mostly need help with evaluation.",
        "No school in Modasa offers these at Higher Level, so a tutor chosen for level and specification, wherever in India they teach, closes gaps quicker than a generalist.",
      ],
      bullets: [
        "AA suits calculus and proof, AI suits modelling",
        "HL sciences need a strong investigation",
        "Biology rewards exact command-term answers",
        "Board students usually need help with evaluation",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: IGCSE choices from Modasa",
      paragraphs: [
        "Families here often make the Core-or-Extended decision without guidance. Core limits the top grade, and Extended is the usual path into IB Higher Level or A Level sciences and mathematics, so the decision shapes later doors.",
        "Extended Mathematics 0580 taken with Additional Mathematics 0606 prepares a student well for IB Maths AA HL, and Extended sciences do the same for IB Physics and Chemistry. Core suits someone who wants a secure pass across a wider subject list.",
        "Edexcel offers Foundation and Higher tiers and arranges questions unlike Cambridge, so a tutor who knows its papers is worth seeking. Settle the board before buying books or past papers.",
        "Private candidates need an approved exam centre and must enter months ahead. A tutor can help plan the timetable, but the family has to confirm the entry early.",
      ],
      bullets: [
        "Core limits the top grade compared with Extended",
        "0606 is a strong bridge to IB Maths AA HL",
        "Edexcel and Cambridge need board-specific practice",
        "Confirm an exam centre early as a private candidate",
      ],
    },
  ],

  tutorsIntro:
    "Browse IB and IGCSE tutors for Modasa pupils across PYP, MYP and Diploma subjects, as well as Cambridge and Edexcel IGCSE. With no local school to measure against, every match rests on syllabus code, level and exam series.",

  process: [
    { title: "Tell us about the student", description: "Board or programme, subject, level, latest grade and the hours your Modasa household can offer." },
    { title: "Look over a shortlist", description: "Each suggested tutor comes with a short reason for the match." },
    { title: "Sit a free lesson", description: "A real topic is taught live, with no fee and no strings." },
    { title: "Settle the plan", description: "The tutor proposes topics and a weekly pattern, which you may adjust." },
    { title: "Check progress regularly", description: "Weekly lessons, a review every few weeks and a simple swap if the tutor is not the right one." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "The exact code, subject and level drive the match, never a vague IB tutor label." },
    { title: "Made for towns without IB schools", description: "Teachers from all over India reach pupils whose own city has no specialist." },
    { title: "Proof before payment", description: "A free lesson on real syllabus material comes before any commitment." },
    { title: "Work stays the student's", description: "Advice on coursework never drifts into writing it for them." },
    { title: "Parents are kept in the loop", description: "A written note follows every class, with regular reviews." },
    { title: "Change is painless", description: "No long contract, no school tie and a straightforward tutor swap." },
  ],

  faqs: [
    { question: "Does any school in Modasa teach the IB or IGCSE?", answer: "None that we could confirm. Modasa and Aravalli district schools follow the Gujarat board, CBSE or a small private pattern, and none is listed as an IB World School or Cambridge centre. Ahmedabad and Gandhinagar hold the closest options. Should a local school launch either programme, we will update this page." },
    { question: "Will a tutor turn up at our house in Modasa?", answer: "No, and we would rather say so plainly. Teachers visit homes only in Gurugram and parts of Delhi NCR. Modasa lessons are online, one child with one tutor, using video and a shared whiteboard. Your child stays at their own desk at home, which preserves the calm of private tuition." },
    { question: "How do we get started?", answer: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the board or programme, subject, level, recent grade and convenient hours. Shortlisted tutors come back, each with a reason, and one of them teaches your child a trial lesson at no charge." },
    { question: "Why do fees differ between tutors?", answer: "Subject scarcity, level, class length and how recently the tutor taught your exact specification all play a part. No price list is published, but a written quote comes before booking, distance adds nothing because teaching is online, and the trial lesson costs nothing." },
    { question: "Is the first lesson genuinely free?", answer: "It is. Every match opens with a complete trial lesson built on real syllabus content, and a short note follows. If the style does not suit your child, we suggest another tutor or stop there, and no bill arrives for the trial." },
    { question: "Can a tutor finish my child's IA or Extended Essay?", answer: "No tutor writes or rewrites an Internal Assessment, Extended Essay, TOK essay or piece of coursework. What they can do is decode the criteria, help sharpen a research question, react to an outline and mark practice answers. The submitted text belongs to the student alone." },
    { question: "Which Diploma subjects are available in Modasa?", answer: "Demand is steadiest for both Maths courses, the three sciences, Economics, Business Management, English A, Computer Science and Psychology, with Gujarati B and Hindi B as language options. For anything rarer, ask first and we confirm that a suitable tutor exists before you commit." },
    { question: "Can you prepare a child for an Ahmedabad international school?", answer: "Yes. Tutors prepare students for entrance tests in mathematics, English and science, then support the first year so the change of curriculum feels less abrupt. A start a few months ahead of admission leaves time for habits to settle." },
    { question: "We have relatives abroad and may move. Where do we begin?", answer: "Begin with the destination's curriculum if you know it: a UK move often points to IGCSE, while many international schools use the IB. Subjects that travel well, such as Mathematics, sciences and English, can be strengthened even before a school is chosen." },
    { question: "Can you teach younger children too?", answer: "Yes, and with equal care. MYP help mostly means writing to criteria and keeping the Personal Project on schedule, while PYP help builds reading, number sense and curiosity. Younger learners generally prefer short, frequent sessions over one long hour." },
    { question: "Is a move from the Gujarat board or CBSE to IGCSE realistic?", answer: "It is, provided technique gets early attention. The content is often familiar, but IGCSE marks showing method, using command words and reasoning through unfamiliar questions. Early sessions concentrate on those habits and on tier choice, so the change feels like new style rather than new subject." },
    { question: "What happens if a power cut interrupts a lesson?", answer: "We rearrange it. A tutor can carry on by voice if video drops, and a lost session moves to another slot. A charged laptop, a phone hotspot as backup and a quiet corner matter more than a fast connection, and exam-season lessons can have a spare slot." },
    { question: "How are the tutors checked?", answer: "Qualifications come first, then recent teaching of the precise subject and level, then a short live explanation of a real topic so we can judge clarity. You can read each tutor's background before choosing, and the free lesson shows the teaching style in action." },
    { question: "When is the right time to begin?", answer: "Near the start of the course, meaning Grade 9 for IGCSE and Class 11 for the Diploma, which leaves months to build habits. Joining two or three months before a mock still helps, and a late start beats none. Targets are set to fit the time that remains." },
    { question: "Can lessons avoid Navratri evenings and peak summer heat?", answer: "Yes. Slots are placed around Navratri, Diwali, Uttarayan and the Shamlaji fair, and from April to June they move to mornings or late evenings. A lost lesson is rescheduled, and a few spare weeks before exams are sensible." },
    { question: "Does IB Gram have any link to a school or exam board?", answer: "None at all. IB Gram works independently of the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel and every school named here. Schools in other cities appear only so Modasa families can see the regional picture accurately." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How IB Gram matches tutors for families across Indian cities." },
    { label: "Gurgaon home tuition", href: "/gurgaon/", description: "The only place with in-person home visits, alongside online lessons." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, TOK, the Extended Essay and internal assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "The criteria, Personal Project and what MYP asks of a student." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects for Cambridge and Edexcel." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start the brief-and-shortlist process directly." },
    { label: "IB and IGCSE tutoring in Ahmedabad", href: "/ahmedabad/", description: "The nearest big city with a wide choice of international schools." },
    { label: "IB and IGCSE tutoring in Mahesana", href: "/mahesana/", description: "Online tutoring for the neighbouring north Gujarat district town." },
    { label: "IB and IGCSE tutoring in Palanpur", href: "/palanpur/", description: "Online IB and IGCSE tutoring for families in Banaskantha." },
  ],

  closingHeading: "Start with a free lesson for your Modasa student",
  closingBody:
    "Share the board or programme, the subject and level, your child's latest grade and the hours that work at home in Modasa. A tutor and a free trial slot come back for you to judge in a live lesson. Email support@ibgram.com or WhatsApp +91 7439 368 115 to begin.",
};
