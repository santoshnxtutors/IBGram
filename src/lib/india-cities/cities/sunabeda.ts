import type { CitySeoPage } from "../types";

/**
 * /sunabeda/ - IB and IGCSE tutoring page for Sunabeda, Odisha. Online-only delivery: tutors do not
 * visit homes in Sunabeda, since in-person home tuition is offered only in Gurugram and parts of
 * Delhi NCR. No IB or Cambridge school is confirmed locally, so clusters are nearby-city, labelled.
 */
export const sunabeda: CitySeoPage = {
  slug: "sunabeda",
  countryName: "Sunabeda",
  countryNameLong: "Sunabeda, Odisha",
  demonym: "Sunabeda",
  state: "Odisha",
  stateCode: "IN-OR",
  flagCode: "in",
  countryCode: "IN",
  region: "Odisha, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are slotted around the township's working day, the heavy monsoon weeks in the hills and the Dussehra and Nuakhai breaks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.7333, longitude: 82.8333 },
  wikipedia: "https://en.wikipedia.org/wiki/Sunabeda",
  alternateNames: ["Sunabeda Koraput", "Sunabeda HAL Township"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sunabeda | Online Private Tuition",
  metaDescription:
    "Sunabeda's HAL township families can book IB and IGCSE tutors online: DP, MYP, PYP and Cambridge or Edexcel IGCSE, one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors in Sunabeda: Private Online Tuition at Home",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SUNABEDA AND THE HAL TOWNSHIP",
  heroSubtitle:
    "If your family has moved to Sunabeda with HAL, or has roots in the Koraput hills, private tuition at home for an IB or IGCSE course means a live call, since no such school is confirmed in the township. One tutor works with one student, teaching from another Indian city on IST. Nobody comes to the house; the lesson starts when your child opens a laptop.",
  primaryKeyword: "IB and IGCSE tutors in Sunabeda",
  imageAltText: "A student in Sunabeda township working through an IGCSE Mathematics paper with an online tutor on a shared whiteboard",
  secondaryKeywords: [
    "IB tutor Sunabeda",
    "IGCSE tutor Sunabeda",
    "IB home tuition Sunabeda",
    "IGCSE home tuition Sunabeda",
    "IB private tuition Sunabeda",
    "IB Maths tutor Sunabeda",
    "IGCSE Maths tutor Sunabeda",
    "IB Physics tutor Sunabeda",
    "IB Chemistry tutor Sunabeda",
    "IB Biology tutor Sunabeda",
    "IB DP tutor Sunabeda",
    "IB MYP tutor Sunabeda",
    "IB PYP tutor Sunabeda",
    "IGCSE online tuition Sunabeda",
    "IB tutor Koraput",
    "IGCSE tutor Jeypore",
    "online IB tutor Koraput district",
    "IB tutor Damanjodi",
    "IGCSE tutor Semiliguda",
    "IB tutor HAL Sunabeda",
  ],

  heroTrustPoints: [
    "A tutor who has taught the precise course and level, whichever school or distance provider your child uses",
    "All lessons are online; in-person home tuition is offered only in Gurugram and parts of Delhi NCR",
    "A full trial lesson comes before any payment or commitment",
    "Independent of the IB, Cambridge, Pearson and every school mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB continuum" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "One clock, tutor and student" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Who asks for IB and IGCSE tuition in a hill township like Sunabeda?",
    paragraphs: [
      "Sunabeda began around 1965 as a planned township for Hindustan Aeronautics Limited, whose Koraput division builds aero engines for the Sukhoi Su-30MKI. At roughly 1,000 metres above sea level, it is cooler than most of Odisha, and its households come from across India on transfer. Those families are the ones most likely to ask about IB and IGCSE: a child may have started a curriculum in one city and must continue it from another.",
      "We have not confirmed an IB World School or a Cambridge centre in Sunabeda or Koraput. The schools known to us locally are Sunabeda Public School, NAD Kendriya Vidyalaya and Vyomayana Samstha Vidyalaya, which follow CBSE or state-board patterns. That leaves private tutoring as the only practical way to keep an international syllabus going, and IB Gram runs it online.",
      "We do not send tutors to houses in Sunabeda. In-person home tuition exists only in Gurugram and parts of Delhi NCR, so your child learns at home on a screen. In a place where the nearest city of any size is a long way off, the tutor being the right specialist matters more than being the nearest one.",
      "IB Gram is independent of the IB, Cambridge International, Pearson Edexcel and every school named here. Tutors teach, question and mark; they do not write an Internal Assessment, Extended Essay, TOK essay or other assessed coursework.",
    ],
    bullets: [
      "IB PYP, MYP and DP help, plus TOK and the Extended Essay process",
      "Cambridge and Edexcel IGCSE at every tier",
      "Live private tuition at home over video, on IST",
      "A free trial lesson and a written note after each session",
      "No tutor visits in Sunabeda; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "In Sunabeda a child's board often changes with a parent's posting. One year is spent in a CBSE school, the next in an international one, and the third here. The programme notes below explain what each stage asks, so a tutor's time goes where the gap actually is.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, Nursery to Class 6",
      description:
        "Learning is organised around themes and inquiry rather than a rigid subject list, with learner profile traits and a final Exhibition. There are no external exams, so support centres on reading, spoken English and confidence.",
      countryNote:
        "For a Sunabeda child joining a PYP school after a posting, reading stamina and comfort asking questions in class usually matter more than new content.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6 to 10",
      description:
        "Subjects are graded on criteria and tied together by global contexts, with the Personal Project at the end. Students used to textbook-based answers must learn to explain, justify and reflect.",
      countryNote:
        "A student from a CBSE or Odisha Board school in the township typically needs help with investigation write-ups in Sciences and with planning a Personal Project over several months.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, plus TOK, an Extended Essay and CAS across two years. Internal Assessments are built up through the course.",
      countryNote:
        "With no Diploma school confirmed here, DP students are usually boarders, distance learners or children of transferred staff mid-course, and they tend to ask first for Mathematics and the sciences.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Diploma courses are combined with a career-related study, a reflective project and a skills course. It suits students with a clear direction.",
      countryNote:
        "Few Indian schools run CP, so requests here are rare; tutors help with the Diploma courses inside the pathway and with planning the reflective project.",
    },
  ],

  subjectsIntro:
    "Every match begins with the exact course code and level. In a township with many engineers, Mathematics and Physics are the most common requests, but Economics, English and the sciences all come up. Odia and Hindi B are available for families who want language support.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof. Students from engineering households often enjoy the content but underestimate the written justification Paper 3 demands." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling with heavy calculator use, plus a clear written conclusion for every answer." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal and fields. Children of engineers often arrive strong on calculation and need practice explaining concepts in words." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles and bonding go well; organic mechanisms and energetics need repeated drills and confident data-booklet use." },
    { name: "IB Biology", levels: "HL / SL", description: "Answers need to match the command term. The investigation needs a realistic, well-controlled design." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with examples, and HL calculations. Industrial and defence-sector examples give rich evaluation material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Theory applied to a named organisation, with an internal assessment that needs genuine data." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, comparative essay and oral. Students from Odia or Hindi-medium homes benefit from sustained writing practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and a documented solution." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, approaches and timed extended responses." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems reasoning and evaluation, a natural fit for students growing up among hills, forests and mining-related questions." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, a defensible fieldwork method and evaluative writing." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and sustained argument." },
    { name: "IB Hindi B and Odia", levels: "HL / SL", description: "Comprehension, text types and oral conversation, in whichever language the school offers." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion practice and feedback on how an exhibition commentary is argued." },
  ],

  igcseSubjectsIntro:
    "We teach both Cambridge (CAIE) and Pearson Edexcel IGCSE, and because their papers differ, board and tier are settled first. Then we plan backwards from the sitting: Cambridge in May-June or October-November, Edexcel in January or May-June.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended needs clean working and speed, with method marks awarded for each visible step." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry arrive early, valuable for IB HL or JEE-style algebra later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Overlaps with Cambridge but has its own question style, so board-specific papers are used." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equations, circuits and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole work, reactivity, and identification tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Precise vocabulary and data questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "Three sciences blended in one award." },
    { name: "IGCSE English as a Second Language", levels: "Grade 9-10", description: "Summary, directed writing and comprehension for students whose daily language is Odia, Hindi or another." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and data response." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-study answers using the business's own figures." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and reading unfamiliar code." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking for schools that offer it." },
  ],

  regionsTitle: "Sunabeda township, neighbouring towns and villages we serve online",
  tutorsIntro:
    "Every tutor here teaches from another Indian city and meets Sunabeda students over live video on Indian Standard Time. Compare the programmes, subjects and levels on each card, then ask for a free trial with the one who suits your child.",
  regionsIntro:
    "These places are named for context, not for visits. A student in any of them meets the same tutor on the same screen, and what matters is the household's working day, the season and the school calendar.",
  regions: [
    { name: "HAL Township", note: "The planned township built around the aeronautics factory, home to engineers, technicians and administrators posted from across India." },
    { name: "NAD area", note: "The part of the township linked to the Naval Armament Depot and its Kendriya Vidyalaya, where families are often on defence postings." },
    { name: "Chikapar", note: "A village associated with the township's early history, now on the town's edge, where families are more rooted in the district." },
    { name: "Semiliguda", note: "A town about 3 km away on the national highway, useful for shops and buses, and a common base for local families." },
    { name: "Damanjodi", note: "About 12 km away, a town associated with the bauxite and aluminium industry, with its own company-linked households." },
    { name: "Dumuriput", note: "The railway station about 6 km away, important for families who travel by train for holidays and postings." },
    { name: "Koraput town", note: "The district headquarters, about 20 km away, with the Central University of Odisha and a larger market." },
    { name: "Jeypore", note: "Roughly 43 km away, the largest commercial centre in the region, where some families go for shopping and additional coaching." },
    { name: "Highway-side villages", note: "Smaller settlements along the national highway, where online tuition saves a long trip after school." },
  ],

  schoolDisclaimer:
    "We have not confirmed any IB or Cambridge school in Sunabeda or Koraput. The clusters below are nearby-city options in Visakhapatnam and Bhubaneswar that families sometimes consider for boarding or relocation. They are listed for information only; IB Gram is independent of these schools and of the IB, Cambridge and Pearson. Please verify current offerings with each school.",
  schoolClusters: [
    {
      city: "Nearby: Visakhapatnam, Andhra Pradesh (about 188 km from Sunabeda)",
      note: "The nearest large coastal city with IB and Cambridge schools, and the usual gateway by air for the township.",
      schools: ["Oakridge International School, Visakhapatnam", "Oak Valley International School, Gajuwaka", "Silver Oaks International School, Rushikonda"],
    },
    {
      city: "Nearby: Bhubaneswar, Odisha",
      note: "The state capital, with several international-curriculum schools, though it is a long journey from the Koraput hills.",
      schools: ["KIIT International School", "SAI International School", "KT Global School"],
    },
    {
      city: "Sunabeda and Koraput: local schools, no IB or Cambridge confirmed",
      note: "Local schools follow CBSE or Odisha state patterns. Online tutoring can add an international syllabus beside a local school when a family plans a move.",
      schools: [],
    },
  ],

  modesIntro:
    "Sunabeda families use online tuition, and only online. Tutors do not visit homes here; in-person home tuition is offered only in Gurugram and parts of Delhi NCR. The differences below are about pace and purpose.",
  modes: [
    {
      title: "Regular online lessons at home",
      description:
        "One fixed hour a week over video, with a whiteboard, working from your child's own books and past papers at their own desk.",
      bullets: [
        "Private tuition at home, no long road trips to Jeypore or Visakhapatnam",
        "One tutor throughout, who comes to know your child's habits",
        "Live marking of past papers",
        "Timed around shift patterns and school hours",
      ],
    },
    {
      title: "Transfer bridge programme",
      description:
        "A short run of lessons for a child about to change school when a parent is posted elsewhere, so English and subject vocabulary are ready before the first day.",
      bullets: [
        "Focused on two or three subjects",
        "Helps with entrance tests",
        "Ends with a written handover for the new school",
        "Start date follows the posting order",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Two or three lessons a week in the six to ten weeks before May or November, mostly timed papers and corrections.",
      bullets: [
        "Weak-topic list written on day one",
        "Mark-scheme language rehearsed",
        "Error log reviewed each session",
        "Stops when the exam is sat",
      ],
    },
  ],

  sections: [
    {
      heading: "What schools are there around Sunabeda, and is IB or IGCSE on offer?",
      paragraphs: [
        "The schools we can name locally are Sunabeda Public School, founded in 1965, NAD Kendriya Vidyalaya and Vyomayana Samstha Vidyalaya, established in 1968. These serve the township and follow CBSE or state-board patterns, and we have no evidence that any offers IB or Cambridge IGCSE. The Central University of Odisha operates in the wider Koraput area, which adds a higher-education presence but no school-level international curriculum.",
        "For IB or IGCSE in a school, families have to look at Visakhapatnam or Bhubaneswar, both a long way from the Koraput hills. A child boarding there sees home only during breaks, and the Visakhapatnam airport is the closest major air link at about 188 km.",
        "That geography shapes the demand. Families may be here for a few years on posting and want a child to keep up with a syllabus that will be needed at the next station. Others have a child at a boarding school and want support during vacations. A third group wants to explore a change of board while staying in the township.",
        "Before you choose, ask any school which boards it is authorised for, what recent results look like, and how it handles mid-year joiners. Tutors can prepare for an entrance test, but the school makes the admission decision.",
        "We would rather say plainly that local options are limited than list schools we cannot vouch for. The clusters on this page are therefore labelled as nearby-city options.",
      ],
      bullets: [
        "Named local schools follow CBSE or state patterns",
        "No IB or Cambridge school is confirmed in Sunabeda or Koraput",
        "Visakhapatnam and Bhubaneswar hold the nearest international options",
        "Confirm authorisation, results and mid-year admission rules with each school",
      ],
    },
    {
      heading: "Odisha Board, CBSE, IGCSE and IB: which fits a posted family?",
      paragraphs: [
        "Families in the township tend to be CBSE by habit, since a Kendriya Vidyalaya gives continuity across postings. The Odisha Board matters for local families and for any student aiming at state-level institutions. IGCSE and IB sit outside both systems and are chosen for specific reasons rather than by default.",
        "The difference in method is larger than in topic names. CBSE and Odisha Board reward complete, well-organised answers from a prescribed text. IGCSE rewards exact definitions, worked calculations and data reading. IB asks for reasoning, reflection and independent projects. A student who does well in one system may need a term to learn the next.",
        "We do not claim one system is ahead. A child who will return to a CBSE school after a posting may be better served by staying on CBSE with extra enrichment. A child heading overseas, or to a school abroad on the next posting, may benefit from IGCSE or IB. The table is a starting point for that conversation.",
      ],
      table: {
        caption: "Boards compared for a Sunabeda family",
        columns: ["Board", "What it rewards", "Continuity across postings", "Adjustment from CBSE"],
        rows: [
          ["CBSE (Kendriya Vidyalaya)", "Complete answers and application questions", "Strong, through KV network nationwide", "Baseline for many township families"],
          ["Odisha Board", "Recall of the prescribed text", "Limited outside the state", "Language and format differences"],
          ["Cambridge or Edexcel IGCSE", "Exact definitions, working, data use", "Strong in international schools", "Science vocabulary and method marks"],
          ["IB MYP", "Criteria, reflection, Personal Project", "Strong in IB schools worldwide", "Independent project planning"],
          ["IB Diploma", "Analysis, orals, extended writing", "Recognised globally", "Two years of sustained independent work"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sunabeda?",
      paragraphs: [
        "We do not publish a price list. Instead, the rate is given in writing before you book, and it depends on the tutor's experience with the exact course, the level, how many lessons a week you want and how long the arrangement lasts.",
        "Scarcity and preparation drive most of it. A tutor who has recently taught IB Physics HL has done more specialised work than a general science tutor. A Higher Level Diploma lesson takes more preparation than revision for a Class 8 test. An intensive exam block is priced differently from a steady weekly hour.",
        "Township families often compare this with company-sponsored or group classes. A group class costs less per seat, but individual correction is limited. Online one-to-one costs more per hour and gives a student a full hour of a tutor's attention, which is useful when a child is catching up or aiming high.",
        "There is no travel cost, since nobody travels. A free trial lesson comes first, so you can judge the tutor before agreeing to anything, and another tutor can be arranged if the match is poor.",
      ],
      bullets: [
        "Rates are written down before booking",
        "Course, level, scarcity and frequency shape the price",
        "A free trial comes first",
        "No travel cost, because lessons are online",
      ],
    },
    {
      heading: "How does online tuition compare with group classes, local tutors and self-study here?",
      paragraphs: [
        "A township has fewer tutoring options than a city, and the options differ in what they can offer for an international syllabus. The comparison below is about fit, and for some students a mix is sensible.",
        "Group classes and local tutors in Koraput and Jeypore mostly prepare for CBSE and state boards and for competitive exams. They can be good at that. Few have worked with IGCSE mark schemes or IB internal assessments, which is where a specialist tutor adds value.",
        "Self-study is realistic for a motivated student with past papers and a clear plan, especially in Mathematics. It is harder in subjects with orals, coursework or practical components, because nobody outside the student sees the gaps.",
      ],
      table: {
        caption: "Learning routes from Sunabeda",
        columns: ["Route", "IB and IGCSE fit", "Travel", "Attention", "Limit"],
        rows: [
          ["Online one-to-one tuition", "Matched to exact board, tier and level", "None", "Full hour on one student", "Needs steady power and connection"],
          ["Group class in Koraput or Jeypore", "Mostly CBSE and state board", "Bus or car trip", "Shared across a batch", "Little IGCSE or IB depth"],
          ["Local private tutor", "Depends on experience", "Short or none", "High for one student", "Few know IB or IGCSE marking"],
          ["Self-study", "Works for disciplined students", "None", "Self-directed", "No feedback on coursework or orals"],
        ],
      },
    },
    {
      heading: "How do the hills, monsoon and festivals affect the study year?",
      paragraphs: [
        "IB Diploma exams are held in May and November, with May the main session in India. Cambridge IGCSE is sat in May-June and October-November, and Edexcel in January and May-June. The school's entry list decides which applies, and the tutor works back from the date.",
        "Sunabeda's altitude gives it a milder climate than the Odisha coast. Summers are warm rather than extreme, and winters can be cool enough for heavy clothing in the early morning. The monsoon is the real disruptor: heavy rain and landslide-prone stretches of road can cut off travel, and power can fail. Bay of Bengal depressions in October and November sometimes bring spells of rain.",
        "The festival calendar adds gaps. Dussehra, Nuakhai, Diwali and local tribal festivals in the district can take families out of town for a week or more. Online lessons help because a child can rejoin a call from wherever the family is, as long as the connection holds.",
      ],
      table: {
        caption: "Planning the study year in Sunabeda",
        columns: ["Period", "Exam or school event", "Local factor", "Advice"],
        rows: [
          ["December to February", "Mock exams and Edexcel January series", "Cool, dry weather", "Best stretch for long revision blocks"],
          ["March to April", "Term end and internal assessments", "Warming days, Chaitra festivals", "Finish drafts before festival travel"],
          ["May to June", "IB May session, Cambridge and Edexcel summer papers", "Warm days, pre-monsoon storms", "Check backup power before timed papers"],
          ["July to September", "New academic year begins", "Heavy monsoon, Nuakhai", "Begin long projects while workload is light"],
          ["October to November", "Cambridge Oct-Nov series and IB November session", "Dussehra, Diwali, cyclone-linked rain", "Plan around festival dates and have a catch-up slot"],
        ],
      },
    },
    {
      heading: "Where can a Sunabeda student study after IB or IGCSE?",
      paragraphs: [
        "Pathways depend on the destination. For Indian universities, the Association of Indian Universities issues equivalence for IB Diploma and IGCSE-based qualifications, and CUET-UG is the main entrance exam for central universities. Students should check subject-mapping and registration rules a year before applying.",
        "Engineering aspirants often consider NIT Rourkela, IIT Bhubaneswar, IIIT Bhubaneswar and the national JEE route. Medical aspirants consider NEET and institutions such as AIIMS Bhubaneswar. IB and IGCSE students can apply where their subjects meet eligibility, but the rules change and the current notices should be checked.",
        "Closer to home, the Central University of Odisha at Koraput, Utkal University and Ravenshaw offer options, and many families with a HAL background look at institutions in Bengaluru, Nashik or other HAL locations where relatives live. Some plan for study abroad. UK, Canada and Australian universities read IB and IGCSE results differently, and a tutor can help a student understand which subjects matter most, though the decision is always the university's.",
        "Whichever path, students do best when subjects are chosen a year ahead, rather than after results. A solid Extended Essay topic and a thoughtful CAS record help for overseas applications.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG rules should be checked a year ahead",
        "JEE and NEET eligibility depends on subject combination",
        "Regional options include NIT Rourkela, IIT Bhubaneswar and the Central University of Odisha",
        "Overseas universities assess IB and IGCSE results individually",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught over a screen?",
      paragraphs: [
        "In Mathematics, the first task is to confirm the route, AA or AI, and the level. The tutor then listens as the student solves several problems aloud, which shows whether trouble lies in algebra, in reading the question or in checking the result. A shared whiteboard lets both see the working.",
        "In Physics, Chemistry and Biology the same method applies with a practical layer. A tutor cannot run a lab on video but can coach planning, uncertainty handling and write-up, which decide most internal assessment marks. Data questions from past papers can be rehearsed without equipment, which matters for students at schools with limited lab time.",
        "Short and frequent beats long and rare. Twenty minutes of timed questions after each lesson usually helps more than a three-hour paper once a month. The tutor builds that into the weekly plan and reviews the error log together with the student.",
        "The student designs the investigation, writes the exploration and drafts the essay. The tutor comments and questions. That line is firm.",
      ],
    },
    {
      heading: "How do Core and Extended IGCSE papers work, and what should a student choose?",
      paragraphs: [
        "Most IGCSE subjects have two tiers. Core papers limit the top grade, while Extended papers reach A*. The school usually decides the tier, but parents can ask why, because it affects later options, especially for a student heading to IB Mathematics AA HL.",
        "Subject choice follows the goal. Engineering or medicine suggests Mathematics, the three sciences and possibly Additional Mathematics. Commerce or law suggests Economics, Business Studies and English. A family likely to return to a CBSE school should check how it treats IGCSE grades at Class 11 admission.",
        "Cambridge and Edexcel differ in calendar and style, so past papers from the right board are used. Language deserves attention too, because a student from an Odia or Hindi-speaking home may need steady practice in directed writing and summary.",
      ],
      table: {
        caption: "IGCSE choices by goal",
        columns: ["Goal", "Suggested subjects", "Tier", "Note"],
        rows: [
          ["IB Diploma with Mathematics HL", "Mathematics, Additional Mathematics, sciences", "Extended", "Additional Mathematics helps with calculus"],
          ["Engineering or medicine in India", "Mathematics and the three sciences", "Extended", "Check Class 11 admission rules"],
          ["Commerce or law", "Economics, Business Studies, English", "Extended if possible", "English strength helps every paper"],
          ["Study abroad via A Levels", "Subjects aligned to A Level plans", "Extended", "Choose A Levels before finalising IGCSE"],
        ],
      },
    },
  ],

  process: [
    {
      title: "Write to us",
      description: "Send the board, programme, subject, level and exam series, and tell us where your child studies and where the gaps are.",
    },
    {
      title: "See your shortlisted tutor",
      description: "A tutor who has taught your exact course is proposed, with background and open slots.",
    },
    {
      title: "Sit a free trial lesson",
      description: "A real lesson on a real topic, no payment needed, no pressure afterwards.",
    },
    {
      title: "Agree terms on paper",
      description: "Rate, weekly slot and plan length are confirmed in writing before any payment.",
    },
    {
      title: "Keep track and adjust",
      description: "A note after each lesson, a review every few weeks, and a new tutor if the fit is wrong.",
    },
  ],

  whyPoints: [
    {
      title: "Built for posted families",
      description: "Transfers change boards mid-year, and tutoring can bridge the gap so a child does not lose a term.",
    },
    {
      title: "Exact-course matching",
      description: "A tutor is chosen for the course code and level your child sits, not a general label.",
    },
    {
      title: "Online, stated plainly",
      description: "Nobody comes to the house in Sunabeda; home visits run only in Gurugram and parts of Delhi NCR.",
    },
    {
      title: "Timetable that copes with hill weather",
      description: "Monsoon weeks, festival travel and shift patterns are built into the schedule.",
    },
    {
      title: "Coaching, not ghost-writing",
      description: "Tutors explain and mark, but never write an IA, Extended Essay, TOK essay or coursework.",
    },
    {
      title: "Written notes and a fair exit",
      description: "Parents see what was covered in writing, and a tutor change is arranged if the fit is wrong.",
    },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Sunabeda?",
      answer: "Yes, reached through a screen rather than a doorbell. IB Gram pairs Sunabeda students with IB and IGCSE specialists for live video lessons on Indian Standard Time, one student per tutor. Nobody travels to the township, because in-person teaching at a student's house is confined to Gurugram and parts of Delhi NCR. Your first session is a free trial, and the tutor is picked for your child's exact board and level.",
    },
    {
      question: "Can I get IB or IGCSE home tuition in Sunabeda?",
      answer: "Only in its online form. Lessons happen in your own living room or study, on a laptop, with a teacher who sits in some other Indian city. Nobody walks into homes in Sunabeda to teach, since house calls are available only in Gurugram and parts of Delhi NCR. In return, a township family is not limited to whoever lives within a drive, and can choose a real subject specialist.",
    },
    {
      question: "Is there an IB or Cambridge school in Sunabeda or Koraput?",
      answer: "None that we could confirm. The local schools we can name, including Sunabeda Public School and the Kendriya Vidyalaya at NAD, follow CBSE or state-board patterns. For an IB or Cambridge campus you would be looking at Visakhapatnam or Bhubaneswar. Always check a school's current authorisation yourself before applying. Tutoring travels with a child whichever school they join, or with a distance provider if that is the plan.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Sunabeda?",
      answer: "We quote privately rather than publishing a rate card. What you pay reflects how specialised the tutor is for your child's course, whether the level is Higher or Standard, how many sessions fit each week and how many weeks the plan runs. You receive that quote in writing before booking, and the trial lesson comes without charge. Nobody travels, so there is no transport element in it at all.",
    },
    {
      question: "My child is joining an IB school after a HAL posting. Can you help?",
      answer: "Yes, and this is one of the commonest reasons township families write to us. A short bridge course ahead of the move can cover spoken English, Mathematics and science vocabulary, plus any entrance assessment the new school sets. If you want, the tutor leaves a written handover for the receiving teachers. The school alone decides admission, and we have no arrangement with any school.",
    },
    {
      question: "Which IGCSE boards do your tutors teach?",
      answer: "We cover both awarding bodies, Cambridge International and Pearson Edexcel, and treat them as separate jobs because the question styles and tiers are not identical. Cambridge entries fall in May-June or October-November, Edexcel entries in January or May-June. Your school knows which series your child is entered for, and the lessons are planned from that date backwards.",
    },
    {
      question: "Do tutors help with the IB Internal Assessment or Extended Essay?",
      answer: "They guide, but the writing stays with the student. A tutor may unpack a marking criterion, test whether a research question is workable, or react to a draft the student produced. What they never do is write, rewrite or extensively edit an Internal Assessment, Extended Essay, TOK essay or other assessed piece. That boundary protects the student, who has to declare the work as their own.",
    },
    {
      question: "How do monsoon rains affect online lessons in the hills?",
      answer: "Heavy rain around Sunabeda can knock out power or weaken the mobile signal for hours, so keep a charged laptop and a phone hotspot ready. A lesson can be shifted with notice, and a missed one is normally made up, not forfeited. In the wettest weeks, shorter and more frequent sessions on Mathematics problem-solving work well because they need very little data.",
    },
    {
      question: "What equipment does my child need for an online lesson?",
      answer: "Any laptop or tablet with a camera and microphone, plus a connection that holds a video call. The shared whiteboard barely uses data, and the camera can go off if the line struggles. We suggest running through the setup during the free trial, using a headset if the house is noisy, and keeping a printed copy of the paper for a student who thinks best with a pen.",
    },
    {
      question: "Can a Kendriya Vidyalaya student take IGCSE-style tuition alongside school?",
      answer: "Yes, as enrichment, provided it does not overload the child. Some township families add IGCSE or IB-style practice to sharpen Mathematics and science, or to prepare for a possible move abroad. The school syllabus must stay first. A tutor will say candidly if an extra load looks unwise, and can scale back to one hour a week while exams for the school board are close.",
    },
    {
      question: "Can you prepare a student for an IB or IGCSE school entrance test?",
      answer: "To a point, yes. Schools commonly assess English and Mathematics, sometimes reasoning and an interview, for entry in Class 6, 9 or 11. A tutor can rehearse those papers and help with spoken confidence. Whether a seat is offered is entirely the school's call, and IB Gram has no partnership or influence with any institution, so please treat our help as preparation only.",
    },
    {
      question: "Can IB or IGCSE students still appear for JEE or NEET?",
      answer: "Frequently they can, but eligibility notices are revised, so read the current ones from the exam authority. The usual conditions are the right subject combination and a recognised Class 12 equivalence. An IB student with Mathematics, Physics and Chemistry or Biology is commonly in a good position. We help with the science preparation; certificates and forms are for the family and school to sort out.",
    },
    {
      question: "Are the lessons in English, Hindi or Odia?",
      answer: "English leads, since the syllabi and the papers are in English. If a student freezes on a concept, a tutor can unpack it in Hindi for a moment and then return to English terms. Hindi can be taught as a subject and Odia support can be discussed. Whatever the classroom language, answers in the exam hall have to be written in English, so that is practised steadily.",
    },
    {
      question: "How do I start from Sunabeda?",
      answer: "Message us the board, subject, level and exam date. A shortlisted tutor and open trial times come back to you, and the trial costs nothing. Rates follow in writing, after you have seen the tutor teach. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115, and mention the township so we can consider shift timings when proposing a weekly slot.",
    },
    {
      question: "Will I see how my child is progressing?",
      answer: "You will. A short written note follows every session, listing what was covered, where marks were dropped and what to practise before the next one. Every few weeks there is a wider check on whether the plan is working. If progress is slower than it should be, we alter the approach or swap the tutor, and explain the reasons on paper rather than leaving parents to guess.",
    },
    {
      question: "Is IB Gram connected to the IB, Cambridge, Pearson or HAL?",
      answer: "No connection at all. IB Gram is a stand-alone tutoring service, not part of the International Baccalaureate, Cambridge University Press and Assessment, Pearson Edexcel, Hindustan Aeronautics Limited or any school mentioned here. Our tutors are experienced teachers in India who work from the published specifications and mark schemes, and nothing more privileged than that.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition works in cities across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only city where our tutors also teach in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Guides to IB subjects and levels." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The Diploma, its Core and its assessments." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and what parents should know." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How the career-related pathway is built." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by programme and subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and arrange a free trial." },
    { label: "IB and IGCSE tutoring in Visakhapatnam", href: "/visakhapatnam/", description: "The nearest large coastal city with IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Bhubaneswar", href: "/bhubaneswar/", description: "Odisha's capital and its international-curriculum schools." },
    { label: "IB and IGCSE tutoring in Rayagada", href: "/rayagada/", description: "A neighbouring south Odisha town served online." },
    { label: "IB and IGCSE tutoring in Brahmapur", href: "/brahmapur/", description: "Another Odisha city with online IB and IGCSE support." },
  ],

  closingHeading: "A free trial for your Sunabeda student",
  closingBody:
    "Tell us your child's board, subject, level and how the township's working day shapes your evenings. We reply with a matched tutor and trial times, and the first lesson costs nothing. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp when you are ready to begin.",
};
