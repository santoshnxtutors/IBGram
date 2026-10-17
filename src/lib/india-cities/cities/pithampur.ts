import type { CitySeoPage } from "../types";

/**
 * Pithampur, Dhar district, Madhya Pradesh: the industrial belt south-west of Indore. No IB or Cambridge
 * school is confirmed in Pithampur itself, so stripSchools is empty and the clusters point to Indore,
 * reusing school names already verified on the published Indore page. Online only.
 */
export const pithampur: CitySeoPage = {
  slug: "pithampur",
  countryName: "Pithampur",
  countryNameLong: "Pithampur, Madhya Pradesh",
  demonym: "Pithampur",
  flagCode: "in",
  countryCode: "IN",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and evening slots fitted to factory shift changes, plus Saturday and Sunday mornings",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.6031, longitude: 75.6933 },
  wikipedia: "https://en.wikipedia.org/wiki/Pithampur",
  alternateNames: ["Pithampura", "Detroit of India", "Pithampur Industrial Area"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pithampur | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE home tuition for Pithampur families near Indore: DP, MYP, PYP, Cambridge and Edexcel, matched one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pithampur",
  heroEyebrow: "IB & IGCSE HOME TUITION, ONLINE, FOR PITHAMPUR",
  heroSubtitle:
    "Families in Pithampur who want private tuition from home for an international syllabus usually have a parent on a plant rota and a school choice that sits in Indore, forty-odd kilometres away. Our answer is a one-to-one tutor on video, matched to the exact IB course or IGCSE paper, teaching at the hour your household is actually free rather than the hour a shift allows.",
  primaryKeyword: "IB and IGCSE tutors in Pithampur",
  imageAltText: "Engineer's child attending an online IB Physics lesson from home in Pithampur",
  secondaryKeywords: [
    "IB tutor Pithampur",
    "IGCSE tutor Pithampur",
    "IB home tuition Pithampur",
    "IGCSE home tuition Pithampur",
    "IB private tuition Pithampur",
    "IB Maths tutor Pithampur",
    "IGCSE Maths tutor Pithampur",
    "IB Physics tutor Pithampur",
    "IB Chemistry tutor Pithampur",
    "IB Biology tutor Pithampur",
    "IB DP tutor Pithampur",
    "IB MYP tutor Pithampur",
    "IB PYP tutor Pithampur",
    "IGCSE online tuition Pithampur",
    "online IB tutor Dhar district",
    "IB tutor Sagdod",
    "IB tutor Indore industrial belt",
    "Cambridge IGCSE private candidate Madhya Pradesh",
    "Edexcel IGCSE tutor Pithampur",
    "IB tutor Pithampur Sector 1",
  ],

  heroTrustPoints: [
    "Lessons timed around plant shifts, not the other way round",
    "A specialist for the exact syllabus, teaching live from any India-based location",
    "A free trial class, written notes and a painless tutor swap",
    "Independent of every school, board and awarding body",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB programmes covered" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Online", label: "Not offered in person here" },
    { value: "Free trial", label: "No commitment first" },
  ],

  intro: {
    heading: "IB and IGCSE help for a household in Pithampur",
    paragraphs: [
      "Pithampur is a planned industrial town in Dhar district, often called the Detroit of India because of its concentration of automobile and engineering plants. It has a workforce that arrives from all over the country: production engineers, plant managers, finance staff, suppliers and contractors, many of whom have lived in Pune, Chennai, Gurugram or abroad. That mix means a good number of families already know what the IB or an IGCSE syllabus is. What they cannot find in town is a school teaching it, since we could not confirm an IB World School or a Cambridge or Edexcel centre in Pithampur.",
      "The international schools that families mention are in Indore, about forty-five kilometres away, along a road that fills with trucks and shift buses. Living in Pithampur and studying there daily is not practical for most children. So the typical enquiry comes from one of four households: a child enrolled in Indore who boards or lives there in term, a family preparing for a move, a transferred family whose child left an international school elsewhere, or a parent exploring private-candidate entry.",
      "We teach online for Pithampur. A tutor does not call at a house in the town; in-person visits are a Gurugram and Delhi NCR service only. Instead, a private one-to-one video lesson happens at a desk at home, with an India-based tutor working on Indian Standard Time and a short written note after each session.",
      "IB Gram runs independently of the IB, Cambridge, Pearson and every school named here. Tutors explain and review; internal assessments, essays and coursework are always written by the student alone.",
    ],
    bullets: [
      "Continuity for students moved mid-course by a parent's transfer",
      "Private-candidate teaching for Cambridge and Edexcel",
      "Scheduling that respects shift patterns and long commutes",
      "A free trial lesson before anything is agreed",
    ],
  },

  programmesIntro:
    "Transferred families tend to arrive mid-programme, so the most useful description of each IB stage is what a child needs to keep going when the school or city changes.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning runs through six themes such as how the world works or sharing the planet, with questions driving each unit and a final Exhibition led by the pupils. No external tests exist, so a tutor's role is reading stamina, number confidence and curiosity.",
      countryNote:
        "A Pithampur child whose parent was moved from a PYP school elsewhere usually needs gentle upkeep of the same inquiry habits, in short sessions.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each subject against defined criteria, so explanation and reflection count as much as the right answer. In the last year a self-managed Personal Project ties the stage together.",
      countryNote:
        "Children joining from a Hindi-medium or CBSE school in the Indore area often need help with academic English and with showing their reasoning in science.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student studies six subjects, combines them with Theory of Knowledge and an Extended Essay, and sits final papers in May. Coursework deadlines fall well before, and they shape how the two years feel.",
      countryNote:
        "Diploma enquiries here come from a few directions: Indore-based students who want a second voice in a hard subject, and transferred students trying not to lose a year.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP pairs academic courses with a vocational pathway, which can suit engineering-minded students. The academic part is taught just as in the Diploma.",
      countryNote:
        "An engineering household sometimes asks about CP; the tutoring then concentrates on the maths or science course inside it.",
    },
  ],

  subjectsIntro:
    "A plant engineer's child is often strong in maths and physics and thin on extended writing. We therefore ask for the course, the level and the weakest skill first, and only then look for a tutor whose experience lines up.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences and proof dominate; HL students benefit from practising long multi-part questions under a clock." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics with a graphing calculator; manufacturing quality data makes a practical source for an exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermodynamics and fields, the topics engineers' children often enjoy, with a written investigation that needs care." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Industrial processes provide real context for equilibrium and energetics, but exam answers still need precise terminology." },
    { name: "IB Biology", levels: "HL / SL", description: "Questions ask for application to new cases, and experimental design must be plainly stated and controlled." },
    { name: "IB Design Technology", levels: "HL / SL", description: "A natural fit for a manufacturing town, combining design thinking with a documented project." },
    { name: "IB Economics", levels: "HL / SL", description: "Industrial clusters, trade and employment give vivid real-world examples for macro and development questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations and supply chains are familiar ground for many students here, though case-study answers must still reason beyond textbook theory." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Problem-solving and a documented software project, taught online with code shared on screen." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysis of literary and non-literary texts, with speaking practice for the individual oral." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "A comfortable option in Madhya Pradesh, with formal tasks that follow IB rather than board conventions." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Industrial pollution, water use and the Malwa plateau supply case studies that must be evaluated, not just described." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Analysing claims about knowledge through real-life situations, marked through an exhibition and an essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A self-directed paper of up to 4,000 words; tutors help scope the question and structure the argument while the writing stays with the student." },
  ],

  igcseSubjectsIntro:
    "Families moved from an international school often arrive with one IGCSE board in mind. We check whether that board was Cambridge or Edexcel and which tier the child was on, because continuing on the wrong papers costs months. Cambridge sits in May-June and October-November; Edexcel adds a January series.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students need fluent algebra and geometry reasoning, with marks won by clear working on every line." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Calculus and trigonometry ahead of the Diploma, well suited to children who plan to study engineering." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The same broad content as Cambridge with differently worded questions, so the chosen board's papers should be used exclusively." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, motion and electricity, plus experiment-planning questions in which clear reading earns marks." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, reactions and organic basics, with mole calculations practised little and often." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human biology, genetics and ecology, where data analysis is usually the weak point." },
    { name: "IGCSE Design and Technology 0445", levels: "Class 9-10", description: "A project-heavy subject that fits a town built around manufacturing." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Operations, finance and marketing through short cases, practical for families in industry." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Programming logic and data representation, taught online with shared code." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Writing for different audiences and summarising, a skill that maths-strong students often need to build." },
  ],

  regionsTitle: "Pithampur sectors and nearby places our online tutors already teach",
  regionsIntro:
    "Since lessons are online, location matters for rhythm: the shift a parent works, the bus or drive a child has, and how far a family sits from Indore.",
  regions: [
    { name: "Pithampur Sector 1", note: "The original industrial sector with established plants, whose staff families often rent nearby and compare Indore schools." },
    { name: "Pithampur Sector 2", note: "A mixed area of factories and housing, where evening lessons work once shifts change over." },
    { name: "Pithampur Sector 3", note: "Newer industrial land with recent hiring, bringing families who moved from other states." },
    { name: "Pithampur town and market", note: "The local commercial core, where trading families typically study under the state board or CBSE." },
    { name: "Dhar", note: "The district headquarters to the west, historically significant, with its own schools and a different feel from the industrial belt." },
    { name: "Sagdod", note: "A neighbouring village on the industrial fringe where online tuition avoids a long bus ride." },
    { name: "Tihi", note: "A village area near the plants with many workers' families and few international-curriculum options." },
    { name: "Rau", note: "On the Indore side, closer to city schools, popular with staff who want a shorter drive to campuses." },
    { name: "Mhow", note: "A cantonment town with army households used to postings, and an existing interest in transferable curricula." },
    { name: "Indore outskirts and the Super Corridor", note: "Residential areas outside the city where some Pithampur employees buy homes, reducing the gap to Indore's international schools." },
  ],

  schoolDisclaimer:
    "No IB World School or Cambridge or Edexcel centre is confirmed to us inside Pithampur. The schools named below are in Indore and are listed only as regional context. IB Gram is an independent tutoring service, not affiliated with, recommended by or paid by any school; check each school's current authorisation and admissions directly.",
  schoolClusters: [
    {
      city: "Nearby: Indore",
      note: "Around forty-five kilometres away, Indore holds the region's main cluster of schools that teach international curricula. Daily travel from Pithampur is tiring, so some families move to Indore or use a residential option.",
      schools: ["Choithram International School", "The Emerald Heights International School", "Daly College"],
    },
    {
      city: "Pithampur and the industrial belt",
      note: "Local schools here follow the Madhya Pradesh Board or CBSE. Many families keep a child in such a school and add an international subject through online tuition.",
      schools: [],
    },
    {
      city: "Private-candidate route",
      note: "Cambridge and Edexcel allow entry through an approved centre without enrolment at a school that teaches the course, which suits families who cannot shift to Indore.",
      schools: [],
    },
  ],

  modesIntro:
    "Industrial families plan around shifts, so the flexibility of the format matters more than its name. These are the three set-ups we use most.",
  modes: [
    {
      title: "A repeating weekly slot",
      description: "One fixed hour each week, placed in the window after a parent's shift and before the child's homework.",
      bullets: [
        "Same tutor throughout",
        "Questions gathered between classes",
        "A brief note sent afterwards",
      ],
    },
    {
      title: "A compressed pre-exam block",
      description: "Several sessions a week in the final two months before mocks or a May or November exam, using timed papers.",
      bullets: [
        "Targeted papers and error logs",
        "Mark schemes discussed line by line",
        "Reduced load once the exam window opens",
      ],
    },
    {
      title: "A full course for a private candidate",
      description: "The tutor delivers the syllabus start to finish where no school class is doing it.",
      bullets: [
        "A term-by-term plan in writing",
        "Regular short tests",
        "Help with understanding entry deadlines",
      ],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE in Pithampur, and why is the schooling so far away?",
      paragraphs: [
        "The town was built for industry, and its schools grew with the workforce, not with a wish for international curricula. That is why, although many households here have seen IB or IGCSE before, the classrooms teaching them are in Indore.",
        "The families asking about them fall into recognisable groups. Transferred managers and engineers, for whom a portable qualification avoids disruption. Families with children in Indore schools who need extra help at home. Business owners who plan for study overseas. And parents unsure whether the international route suits a child raised on state board or CBSE.",
        "What they have in common is distance. The road to Indore is busy, shift timings rarely match school timings, and a child who studies in Indore but lives in Pithampur loses hours each week. Online tutoring puts a specialist at the home desk instead.",
        "We begin each enquiry by asking which group applies, because the right tutor differs. Someone who can rebuild a course for a transferred child is not always the person to teach a private candidate from scratch.",
      ],
    },
    {
      heading: "MP Board, CBSE, IB or IGCSE: how do the boards compare for a Pithampur student?",
      paragraphs: [
        "Madhya Pradesh Board and CBSE dominate local schools. Both use fixed syllabi and annual board exams and connect neatly to entrance tests. IB and IGCSE assess reasoning, written explanation and, in IB, sustained independent work.",
        "For a student from an engineering household, the practical difference shows in writing. Answers in an international paper need sentences that explain why, not only calculations that arrive at a number.",
        "Hindi is the language of daily life here, with Malwi spoken widely in the surrounding villages. English academic writing is therefore the skill that most needs deliberate attention, regardless of the board chosen.",
        "The table puts the five routes side by side.",
      ],
      table: {
        caption: "Board routes for a Pithampur family",
        columns: ["Board", "Assessment", "Presence around Pithampur", "Fits a family that"],
        rows: [
          ["MP Board", "Annual state exams on a fixed syllabus", "Common in local and government schools", "Expects to stay in the state system"],
          ["CBSE", "Board exams plus internal marks", "Widely offered in private schools", "May be transferred between cities"],
          ["ICSE / ISC", "English-heavy with internal assessment", "Few schools", "Values language depth"],
          ["IB (PYP, MYP, DP)", "Criteria marking and coursework", "Not confirmed in Pithampur; Indore is nearest", "Plans study abroad or inquiry learning"],
          ["IGCSE (Cambridge / Edexcel)", "Two-year tiered external exams", "Private entry or school in Indore", "Wants a portable Class 10 qualification"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Pithampur, and what shapes the rate?",
      paragraphs: [
        "IB Gram does not publish prices. The rate is given to you in writing before you book, because one number would be wrong for most students.",
        "Course and level lead the list. Higher Level Physics needs a different tutor profile from Core IGCSE Mathematics. After that come lessons per week, the preparation a tutor does between classes, and whether the tutor supports a class or teaches a whole syllabus.",
        "Timing is the last influence: lessons in the weeks before examinations are in greatest demand.",
        "Online delivery saves something families in Pithampur value highly, which is time. The forty-five-kilometre drive to Indore for a class would take an evening. Here the lesson begins when the laptop opens, and the free trial shows you the teaching before any rate is discussed.",
      ],
      bullets: [
        "Course, level and board",
        "Number of weekly lessons",
        "Tutor preparation and role",
        "Closeness to the examination",
      ],
    },
    {
      heading: "Online tuition, Indore institutes, local tutors or a move to Indore: which fits Pithampur?",
      paragraphs: [
        "Indore has institutes and independent tutors who know IB and IGCSE, but reaching them means a drive that competes with shift timings and school runs. Some families make it work; many do not.",
        "An online tutor removes that journey and lets a family choose on expertise. Local Pithampur tutors teach state board and CBSE well but rarely have international papers behind them.",
        "Moving to Indore solves the schooling question and creates others: housing cost, a parent's commute to the plant in the other direction, and disruption for siblings. Online tuition lets a family defer that decision.",
        "We use home tuition in its honest sense here: the student learns at home, on a laptop. Tutors do not visit homes in Pithampur.",
      ],
      table: {
        caption: "Options compared for Pithampur students",
        columns: ["Option", "Works for", "Main benefit", "Limit from Pithampur"],
        rows: [
          ["Online one-to-one tutor", "Any IB or IGCSE subject", "Specialist match without travel", "Needs stable internet"],
          ["Indore tuition institute", "Group classes in core subjects", "Peer group and structure", "Forty-five kilometres each way"],
          ["Local private tutor", "MP Board and CBSE subjects", "Nearby and affordable", "Seldom trained on international papers"],
          ["Moving to Indore", "Full-time international schooling", "Daily teaching and laboratories", "Housing cost and parent's commute"],
          ["Self-study", "Motivated IGCSE students", "Flexible and low cost", "No feedback on writing or coursework"],
        ],
      },
    },
    {
      heading: "Pithampur's calendar: shifts, Malwa weather, festivals and exam series",
      paragraphs: [
        "Madhya Pradesh schools usually open in June or July, and their terms run to March. The Malwa plateau has three clear seasons: a hot April to June, a monsoon from late June to September, and a mild, dry winter. Evenings are pleasant for much of the year and mornings can be cold from December to January.",
        "Festivals shape the calendar: Gangaur and Rang Panchami in spring, Ganesh Chaturthi, Navratri and Dussehra, then Diwali, which is the longest break. Many plant families also travel home during Diwali, so lessons move or pause, and the tutor sets a lighter catch-up plan.",
        "Shift patterns matter as much as festivals. A parent on a rotating shift may only be free at odd hours, so a flexible weekly slot and a reschedule rule are part of the agreement.",
        "Exam series are fixed: IB Diploma in May, with November at some schools, Cambridge in May-June and October-November, and Edexcel with a January series in addition.",
      ],
      table: {
        caption: "A year in Pithampur for an IB or IGCSE student",
        columns: ["Window", "School and exams", "Local context", "Tutoring focus"],
        rows: [
          ["January to March", "Edexcel January series; school annual exams", "Cold mornings, Holi approaching", "Timed papers and revision"],
          ["April to June", "IB May exams; Cambridge May-June; Gangaur", "Hot spell, plant maintenance shutdowns for some", "Final revision, then rest"],
          ["July to September", "Coursework and investigations begin", "Monsoon, Ganesh Chaturthi", "Rebuilding foundations"],
          ["October to December", "Autumn series, retakes", "Navratri, Dussehra, Diwali", "Mock papers and gap-closing"],
        ],
      },
    },
    {
      heading: "What are the university pathways for a Pithampur student after IB or IGCSE?",
      paragraphs: [
        "Indore is a major education centre, with IIT Indore, IIM Indore, Devi Ahilya Vishwavidyalaya and numerous colleges, and Pithampur students are close enough to consider them. Indian universities typically ask for an equivalence certificate from the Association of Indian Universities for IB and IGCSE-based profiles, so families should apply early.",
        "CUET-UG offers a route into many central and participating universities, and IB Diploma students are eligible; subject conditions vary, so check each university's rules. JEE and NEET have their own requirements for IB and IGCSE students, which should influence Higher Level choices.",
        "For study abroad, IB and IGCSE are read without translation by universities in the UK, Canada, Australia and Singapore. Families in engineering industries often have contacts abroad, and students benefit from matching subjects to the intended degree.",
        "A student who returns to the Indian system after IGCSE can still join Class 11 in a CBSE or state board school, so the path stays flexible.",
      ],
      bullets: [
        "AIU equivalence requested early",
        "CUET-UG rules checked per university",
        "JEE and NEET subject conditions planned before DP choices",
        "Overseas applications built on predicted and final results",
      ],
    },
    {
      heading: "How are IB Maths, Physics and Chemistry taught online for a Pithampur student?",
      paragraphs: [
        "Maths lessons use a shared whiteboard: the student writes, the tutor watches and corrects, and then the pair compare the method with the mark scheme. Analysis and Approaches sessions focus on calculus and proof; Applications and Interpretation sessions on statistics and technology.",
        "In Physics and Chemistry, each class mixes a concept, a worked example and a past-paper question. Internal investigations can borrow from the surroundings: energy use, material testing or water quality, provided the work is safe and the student designs it.",
        "Because many students here are quick with calculations, we spend time on writing. Command words such as state, explain and evaluate signal different answers, and marks are lost by stopping early.",
        "After each class the tutor sends a short note on topics covered and homework set, and a review after the first month gives parents a clear picture.",
      ],
    },
    {
      heading: "How do IGCSE tiers and subject choices work for a student in Pithampur?",
      paragraphs: [
        "Most IGCSE subjects have a lower tier with a capped top grade and an upper tier that opens every grade. A student aiming at IB Higher Level Maths or Physics, or at engineering, should prepare for the upper tier.",
        "A sensible combination for a Pithampur student is Mathematics, two or three sciences, English and either Hindi or Computer Science, with Design and Technology or Business Studies as options. Additional Mathematics is a strong extra for future engineers.",
        "Choosing between Cambridge and Edexcel should be done early. The papers differ in layout and wording, and a tutor can compare specifications before a family commits.",
        "Private candidates enter through an approved centre, and practical components can be prepared effectively online through alternative-to-practical papers in the sciences.",
      ],
    },
  ],

  process: [
    { title: "Tell us the facts", description: "The syllabus, level, exam series and whether your child has a school class alongside." },
    { title: "Review a shortlist", description: "Tutors who have taught that course, with a line on why each is suggested." },
    { title: "Attend a trial class", description: "A real topic taught live, free of charge and without obligation." },
    { title: "Confirm plan and rate", description: "A written first-month plan and quoted rate before you commit." },
    { title: "Keep the loop open", description: "A note after each class, reviews at intervals, and a free change of tutor if it is not working." },
  ],

  whyPoints: [
    { title: "Syllabus before tutor", description: "We fix course, level and board first, then look for the match." },
    { title: "Built around industrial schedules", description: "Flexible slots that adapt to shift changes and festival travel." },
    { title: "See the teaching first", description: "The trial lesson lets you judge for yourself." },
    { title: "Honest limits", description: "Feedback and explanation, never writing assessed work." },
    { title: "Parents kept informed", description: "Notes and reviews that show progress plainly." },
    { title: "Free to change", description: "No ties to any school or board, and an easy tutor switch." },
  ],

  tutorsIntro:
    "Each tutor profile names the boards, levels and subjects actually taught. For Pithampur we lean toward tutors who are comfortable with transferred students, with flexible slots and with clear written explanation of technical subjects.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Pithampur?",
      answer:
        "We have not been able to confirm one. No IB World School or Cambridge or Edexcel centre inside Pithampur is known to us, and the main cluster is in Indore, roughly forty-five kilometres away. Check any school's current status with the school itself; online tutoring covers the gap for families who stay.",
    },
    {
      question: "Do tutors come to my home in Pithampur?",
      answer:
        "No. In-person visits are limited to Gurugram and parts of Delhi NCR. For Pithampur, home tuition means a private online lesson at your own desk, taught one to one by a tutor elsewhere in India on Indian Standard Time.",
    },
    {
      question: "How is the fee decided for a Pithampur student?",
      answer:
        "It follows the course, the level, the number of weekly lessons and the preparation the tutor must put in. No price list is published; you receive the rate in writing before booking. The trial lesson is free, and you save the drive to Indore.",
    },
    {
      question: "My child studies in Indore but lives here. Can you help?",
      answer:
        "Yes. Many enquiries come from this situation. We work from your child's school syllabus and pace, at an hour that suits the household, and the tutor sends a note after each class so parents can see what was covered without needing to sit in.",
    },
    {
      question: "We were transferred here from another city mid-course. What happens next?",
      answer:
        "We first find out exactly where your child stopped: board, subject, level and the last topic covered. A tutor who has taught that specification then rebuilds continuity and fills gaps, so the child can rejoin a school later or carry on as a private candidate without losing the year.",
    },
    {
      question: "Can a student in Pithampur enter IGCSE papers privately?",
      answer:
        "Usually yes, through an approved exam centre, typically in a larger city, with registration months ahead. IB Gram does not run exams or register candidates, but a tutor can teach the course and explain what you need to do and when.",
    },
    {
      question: "Would a tutor write the Internal Assessment or Extended Essay?",
      answer:
        "No. Our tutors never write Internal Assessments, Extended Essays, TOK essays or coursework. They teach, question and respond to the student's own drafts, which can include choosing a workable topic and reading the criteria, but every submitted word belongs to the student.",
    },
    {
      question: "Can lessons fit with rotating shifts and Diwali travel?",
      answer:
        "Yes. We agree a flexible slot and a simple reschedule rule at the start. Around Diwali, when many plant families travel, lessons pause or move online from wherever you are, and a lighter catch-up plan restarts afterwards.",
    },
    {
      question: "Are lessons in Hindi or English?",
      answer:
        "Mainly English because papers are set in English, though a tutor can clarify a difficult idea in Hindi. Hindi language subjects are taught in Hindi. The language mix is confirmed in the trial class.",
    },
    {
      question: "What separates Cambridge IGCSE from Edexcel IGCSE?",
      answer:
        "They are separate two-year courses with different codes, paper layouts and command wording. Cambridge offers May-June and October-November; Edexcel adds January. Choose one early and practise on its papers only. A tutor can compare both before you decide.",
    },
    {
      question: "Which IB subjects can be taught?",
      answer:
        "Most Diploma subjects, including both Maths courses, the three sciences, Design Technology, Economics, Business Management, Computer Science, Psychology, English and Hindi, plus TOK and Extended Essay coaching. Give us the course and level and we will say whether we can match it.",
    },
    {
      question: "How early should a private candidate begin?",
      answer:
        "About two terms before papers, and earlier for a subject learned from scratch. Registration deadlines arrive early too. A July start for a May session is a comfortable plan and leaves the hot months for lighter consolidation.",
    },
    {
      question: "Can one tutor cover both IB and IGCSE?",
      answer:
        "Occasionally, mostly in Maths and sciences where topics overlap, though specialists per syllabus usually teach better. A student who is on IGCSE now and heading into the Diploma can keep one tutor for continuity if the match exists.",
    },
    {
      question: "Do you teach primary-age children on PYP?",
      answer:
        "Yes, in light weekly sessions on reading, number sense and spoken English. With no external exam, the goal is confidence and curiosity. Children of transferred staff who left a PYP school elsewhere often need only gentle upkeep.",
    },
    {
      question: "What if the tutor turns out to be a poor match?",
      answer:
        "We replace them at no charge. A short note on what felt wrong, whether pace, manner or subject depth, lets us suggest someone else. It matters most when a private candidate relies on one person for the whole course.",
    },
    {
      question: "Does IB Gram belong to any school or board?",
      answer:
        "No, it is independent. There is no affiliation with the International Baccalaureate, Cambridge, Pearson or any school named here, and school names are given only as regional context near Pithampur.",
    },
    {
      question: "How do I start?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the board, subject, level and exam session. You get a shortlist, then a free trial at a time that works around your shift pattern in Pithampur.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Every city where IB Gram teaches online." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The single region with in-person visits." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How matching works for IB subjects." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Boards, tiers and subject choices." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, the core and examinations." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria marking and the project year." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units for younger learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "DP subjects with a vocational strand." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Comparing the two Maths routes." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles filtered by subject and board." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Start with a trial class." },
    { label: "IB and IGCSE tutoring in Indore", href: "/indore/", description: "The nearest city with international schools." },
    { label: "IB and IGCSE tutoring in Ujjain", href: "/ujjain/", description: "Another Malwa city covered online." },
    { label: "IB and IGCSE tutoring in Ratlam", href: "/ratlam/", description: "A western Madhya Pradesh city served the same way." },
  ],

  closingHeading: "Plan a free trial lesson for your Pithampur student",
  closingBody:
    "Share the syllabus, the level and the exam session, and tell us about the shift pattern or commute we need to work around. We will look for a tutor with real experience of that course, hold a no-cost first lesson at a sensible hour, and say frankly whether online tuition is enough for your child. Nothing is charged and nothing needs signing before then.",
};
