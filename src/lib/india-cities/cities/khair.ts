import type { CitySeoPage } from "../types";

/**
 * /khair/ - IB and IGCSE tutoring page for Khair, Aligarh district, Uttar Pradesh.
 * Online-only delivery: tutors do not visit homes in Khair, since in-person home tuition is offered
 * only in Gurugram and parts of Delhi NCR. No IB or Cambridge school inside Khair is confirmed, so
 * stripSchools is empty; nearby clusters (Noida, Delhi NCR) are labelled honestly.
 */
export const khair: CitySeoPage = {
  slug: "khair",
  countryName: "Khair",
  countryNameLong: "Khair, Uttar Pradesh",
  demonym: "Khair",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times are planned around the wheat harvest, winter fog and the June loo on the Aligarh plain",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.9400, longitude: 77.8400 },
  wikipedia: "https://en.wikipedia.org/wiki/Khair,_Uttar_Pradesh",
  alternateNames: ["Khair Aligarh", "Khair tehsil"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Khair | Live Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutoring for Khair, Aligarh students: private live lessons online from home, Cambridge and Edexcel covered, matched by subject, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Khair",
  heroEyebrow: "IB AND IGCSE TUITION, ONLINE, FOR KHAIR AND ALIGARH DISTRICT",
  heroSubtitle:
    "For a Khair family, private tuition at home usually means a teacher who lives within a few lanes, and for the IB or IGCSE that teacher does not exist here. IB Gram offers the same private, one-to-one arrangement online: a subject specialist teaches your child live over video, at your own table, in Indian Standard Time. Nobody has to make the drive to Aligarh or Noida to find one.",
  primaryKeyword: "IB and IGCSE tutors in Khair",
  imageAltText: "Khair student working on IGCSE Physics questions with a tutor on a video call at home",
  secondaryKeywords: [
    "IB tutor Khair",
    "IGCSE tutor Khair",
    "IB home tuition Khair",
    "IGCSE home tuition Khair",
    "IB private tuition Khair",
    "IB Maths tutor Khair",
    "IGCSE Maths tutor Khair",
    "IB Physics tutor Khair",
    "IB Chemistry tutor Khair",
    "IB Biology tutor Khair",
    "IB DP tutor Khair",
    "IB MYP tutor Khair",
    "IB PYP tutor Khair",
    "IGCSE online tuition Khair",
    "IB tutor Khair Aligarh",
    "IGCSE tutor Tappal",
    "online IB tutor Jewar road",
    "IB tutor Aligarh district",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact course and level, not for closeness to Khair",
    "All lessons are online, because tutors do not visit homes in Khair and in-person visits run only in Gurugram and parts of Delhi NCR",
    "A short written summary follows every lesson",
    "IB Gram is independent of all schools, boards and exam bodies mentioned",
  ],
  heroStats: [
    { value: "IST", label: "Same time as your tutor" },
    { value: "PYP to DP", label: "Every IB programme" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "Before any decision" },
  ],

  intro: {
    heading: "Tuition for IB and IGCSE where the nearest classroom is two districts away",
    paragraphs: [
      "Khair is a tehsil town on the road between Aligarh and Bulandshahr, in wheat, potato and mustard country, with Aligarh about thirty kilometres to the south-east. If you are searching for IB and IGCSE tutors in Khair, you have probably noticed that everything here is built around UP Board and CBSE schools, and the tutoring market follows suit. We could not confirm an IB school or a Cambridge or Edexcel centre in Khair itself.",
      "Yet demand exists, and it tends to arrive through a relative or an employer. A brother in Canada who wants a nephew ready for a Canadian university. A father in the army or a public-sector job whose posting may move the family. A family with a child at a boarding school in Dehradun, home in the vacation. A parent who sees the airport and industrial development around Jewar and expects the next generation to work in an international setting.",
      "IB Gram answers with live one-to-one lessons over video. The tutor has taught your child's exact course recently, uses a shared whiteboard and marks real past papers, and works on Indian time. The student sits where they always study, in a Khair house, with a phone hotspot in case the broadband misbehaves.",
      "We are not tied to any school, to the IB, Cambridge or Pearson. Tutors coach, explain and mark practice work, and they do not write an Internal Assessment, Extended Essay, TOK essay or coursework that a student submits.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Tutors matched to the exact course, level and exam session",
      "A free trial lesson and a written note after every session",
      "Online only in Khair; visits to the home run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no school in Khair runs any of these programmes to our knowledge, they reach the town through boarding schools, online schools and postings elsewhere. Each note describes what the stage means for a student whose home is in this corner of Aligarh district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Young children investigate big questions across subjects and finish with a self-directed Exhibition. No external exams occur, so tuition concentrates on reading fluently, handling numbers and talking through an idea in full sentences.",
      countryNote:
        "PYP interest in Khair comes mostly from families with a member abroad or in a transferable job, who want a child to be comfortable with inquiry-style classes before a move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria-marked subjects and a Personal Project that the student plans and reports on. The key adjustment is writing to show reasoning, not just to state the answer.",
      countryNote:
        "An MYP student connected to Khair is generally a boarder elsewhere, and the holiday weeks at home are used to strengthen criterion writing in science and humanities.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, along with TOK, the Extended Essay and CAS. Internal assessments count toward grades, and papers are written in May for most schools.",
      countryNote:
        "Khair Diploma students are enrolled in a school elsewhere or in an online school, and most often ask for HL Mathematics, sciences and help structuring the Extended Essay.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A route pairing Diploma courses with career-related study and a reflective project. Uncommon in India, but its academic courses need the same standard of teaching.",
      countryNote:
        "CP is rare for Khair families, and we handle any enquiry by looking at which Diploma courses the student takes.",
    },
  ],

  subjectsIntro:
    "Parents in Khair usually tell us a subject and a class. We need a little more: the level, how far the student has got, whether the internal assessment has begun and which exam session applies. With those four facts a good match is quick.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof, with the unfamiliar problems of Paper 3 at HL and an exploration that needs to be started well before it is due." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, a good fit for students moving toward commerce, economics or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "A broad syllabus from mechanics to fields, tested by papers where timing decides many marks." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work, energetics and equilibrium, then organic chemistry, with a practical investigation that needs an honest look at error." },
    { name: "IB Biology", levels: "HL / SL", description: "Large content and answers judged against command terms, valuable practice for students with medicine in mind." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, real examples and evaluation, with agricultural markets and rural development offering plenty of familiar case material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Cases that require theory to fit the firm described, useful for students from business and trading families." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative essays and an oral that rewards a genuine argument." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Logic, data structures and a documented solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies arranged into an argument that answers the exact question." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soil and land-use questions that fit an agricultural district." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data handling and a fieldwork investigation planned early." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literature and language skills for students who speak Hindi or Braj at home and want structured practice." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Preparation for the exhibition and essay, through discussion of how knowledge claims are justified." },
  ],

  igcseSubjectsIntro:
    "An IGCSE student in Khair must first confirm the board, the code and the tier. Cambridge runs in May-June and October-November, and Edexcel in January and May-June. Those dates decide the whole plan, so we settle them in the first conversation.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with speed and clear working for Extended candidates." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus, functions and trigonometry, the strongest bridge to IB Mathematics AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Different in style to Cambridge, so practice must use Edexcel papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, energy, electricity and waves, with practice on practical-based questions." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, bonding, reactivity and organic chemistry, with practical skills alongside." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance and ecology, with extended answers taught as a skill." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets and government policy, with evaluation practice as early as possible." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Theory and Python-style programming, with trace tables for exams." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for different audiences, summary and unseen comprehension." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking tasks aligned to the board's expectations." },
  ],

  regionsTitle: "Khair and Aligarh district areas we teach online",
  regionsIntro:
    "Distance means nothing to a video lesson, so this list is context. It notes the type of household and the kind of daily rhythm around each place, which is what we plan lesson times against.",
  regions: [
    { name: "Khair town centre", note: "The tehsil headquarters and main market, where shopkeepers, teachers and government staff live and evening study follows the shop's closing time." },
    { name: "Khair bypass and highway side", note: "Newer homes along the Aligarh-Bulandshahr road, with families who commute to Aligarh or Delhi and value tuition that needs no travel." },
    { name: "Tappal", note: "A town on the Yamuna Expressway side, with a mixed farming and industrial economy and rising interest in study beyond the district." },
    { name: "Jewar side", note: "The stretch towards Jewar, now shaped by the airport and industrial development around it, where families expect their children to work in a more international environment." },
    { name: "Gabhana", note: "A small town on the Aligarh side, where school choice is limited and online tutoring can add subject specialists." },
    { name: "Chandaus", note: "A rural-town belt in the district, where timing depends on farm work and power supply." },
    { name: "Iglas", note: "A town to the east with agricultural and trading families, whose children often plan to study in Aligarh or Delhi." },
    { name: "Atrauli and Akrabad", note: "Towns to the south of Aligarh, often linked to Khair by road and family ties." },
    { name: "Aligarh city and AMU", note: "The district's university city, thirty kilometres away, whose schools and teachers many Khair families already know." },
  ],

  schoolDisclaimer:
    "Schools are named only to state which curriculum they run. IB Gram has no partnership with any of them, none has approved this page, and IB Gram is separate from the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Khair and Aligarh district",
      note: "We could not confirm an IB school or a Cambridge or Edexcel centre in Khair or elsewhere in the district that we can vouch for, so we name none. Local schools follow the UP Board and CBSE, and Aligarh has long-established institutions of its own.",
      schools: [],
    },
    {
      city: "Nearby: Noida and Greater Noida",
      note: "The nearest cluster of IB and Cambridge schools lies to the north-west, a few hours by road, and is where a family that decides on school-based international learning most often looks first.",
      schools: ["Pathways School Noida", "Genesis Global School", "Shiv Nadar School, Noida"],
    },
    {
      city: "Nearby: Gurugram",
      note: "A longer journey, but Gurugram has one of the country's largest concentrations of IB and IGCSE schools, and some families board or relocate there.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "In every format the arrangement is the same: a tutor elsewhere in India, a live video lesson, one student. The choices below differ in how many lessons and how much reporting, and none involves a tutor coming to the house, since in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Regular weekly lesson",
      description:
        "One lesson a week at a fixed hour with the same tutor. It keeps the syllabus moving and gives a student something dependable to plan around.",
      bullets: [
        "Same tutor, same slot",
        "Follows the school or online course",
        "Fits IB, Cambridge and Edexcel",
        "A second lesson can be added later",
      ],
    },
    {
      title: "Weekly lesson with written reports",
      description:
        "A written note after each lesson and a review every few weeks. Parents who work away from home, or relatives abroad who follow the child's progress, often prefer this.",
      bullets: [
        "Summary after every lesson",
        "Reviews at fixed intervals",
        "Easy to share with family abroad",
        "Suits younger students in MYP or PYP",
      ],
    },
    {
      title: "Pre-exam push",
      description:
        "Two to four lessons a week for a few weeks, spent on timed papers and correction. Families often book it after the wheat harvest, when the household is free, and before the May or November papers.",
      bullets: [
        "Papers marked against the official scheme",
        "Fast return of corrected work",
        "Avoids harvest and festival weeks",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Khair asks for IB or IGCSE tuition, and why?",
      paragraphs: [
        "It is worth being direct: Khair is not a place where IB or IGCSE is common. The people who ask tend to come from a small set of situations, each of which we have met before. Knowing them helps us plan.",
        "The first is the family with a relative abroad. Aligarh district has strong ties to Canada, the Gulf and the United Kingdom, and a child whose uncle lives in Toronto may be expected to apply to a Canadian university. IB and IGCSE grades are understood there, and predicted grades in the autumn of the final year matter.",
        "The second is the transferable-job family. Army, police, railways and public-sector employees may move at short notice, and a child who has begun an IB course needs continuity. Online tuition follows the family, and the same tutor can teach from wherever the new posting is.",
        "The third is the boarder. Khair is within reach of Dehradun and Mussoorie by road and rail, and some families send children there. During the long summer break, and again in winter, the child returns to Khair and needs a specialist.",
        "The fourth is the forward-planner. A parent who has seen the industrial and airport development at Jewar, or who works in Noida or Delhi, may want a child ready for a wider job market. IGCSE Mathematics and English are common starting points.",
      ],
      table: {
        caption: "Reasons Khair families ask for IB or IGCSE support",
        columns: ["Situation", "What the student needs", "How tuition helps"],
        rows: [
          ["Relative abroad", "Grades and subjects a foreign university understands", "Subject depth and predicted-grade lift"],
          ["Transferable job", "Continuity across postings", "A tutor who follows the family"],
          ["Boarder home for breaks", "Catch-up and criteria practice", "Concentrated lessons in the holidays"],
          ["Forward planning", "A strong start in mathematics and English", "IGCSE-style preparation before Class 11"],
        ],
      },
      bullets: [
        "Foreign relatives, transfers, boarding and planning ahead drive most requests",
        "Continuity across postings is a strong reason for online tuition",
        "Boarders use the holidays for concentrated lessons",
        "Early IGCSE mathematics and English suit forward-planners",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost in Khair?",
      paragraphs: [
        "We do not publish a rate card, and the reason is practical. What a family pays depends on the programme, the subject, the level, the length of the session and the number of lessons per week. It also depends on how many tutors have recently taught that particular course. IB Physics HL is harder to staff than IGCSE Core Mathematics.",
        "Every quotation is in writing and comes before the free trial. There are no hidden extras, registration fees or long commitments.",
        "For a town like Khair, one practical saving deserves mention. A tutor who lives in Aligarh or Delhi would ask for travel money to come here, and the trip would eat into the lesson. Online, that cost and that time vanish, and the family spends only on teaching.",
        "Our advice is to judge value by what a session achieves. Ask the tutor how an average lesson runs, what you will be told after it, and how progress is measured. A tutor who can answer plainly is usually worth the fee.",
      ],
      bullets: [
        "Rate depends on programme, subject, level, session length and frequency",
        "Quoted in writing before the free trial",
        "No travel charge and no registration fee",
        "You can pause or stop without penalty",
      ],
    },
    {
      heading: "Are there IB or Cambridge schools near Khair?",
      paragraphs: [
        "None that we can confirm in Khair or, to our knowledge, elsewhere in Aligarh district. Schools here follow the UP Board and CBSE, and a few private schools carry 'international' or 'global' in their names without being IB or Cambridge schools. We would rather tell you that than name a school we cannot vouch for.",
        "The closest confirmed cluster is in Noida and Greater Noida, a few hours away by road, where Pathways School Noida, Genesis Global School and Shiv Nadar School are among the schools with international curricula. Gurugram has an even larger concentration.",
        "Families who want a school setting for the Diploma years therefore consider three options: relocating to Noida or Delhi, boarding, or enrolling in an online school while staying in Khair. Each has costs, and a family should compare them in the Class 9 or 10 year, not in a rush during Class 11.",
        "In all three, tutoring plays the same role: it fills the gap between what the school provides and what a particular student needs. For a student who moves, it also provides continuity.",
      ],
      table: {
        caption: "Paths to an international curriculum from Khair",
        columns: ["Path", "What it involves", "What tutoring adds"],
        rows: [
          ["Relocate to Noida or Delhi", "A family move, a new school, new routines", "Bridging lessons before and after the move"],
          ["Boarding in Noida, Gurugram or the hills", "Term time away, holidays at home", "Holiday lessons and criteria practice"],
          ["Online school from Khair", "Live or recorded classes at home", "A live human tutor beside the course"],
          ["Stay in a local school and add IGCSE-style tuition", "State or CBSE timetable continues", "Early preparation and private-candidate readiness"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed in Khair or the district",
        "Noida and Greater Noida hold the closest verified cluster",
        "Compare relocation, boarding and online school in the Class 9-10 years",
        "Tutoring fills gaps and gives continuity in every path",
      ],
    },
    {
      heading: "How does the UP Board or CBSE compare with IB and IGCSE?",
      paragraphs: [
        "A Khair student who scores well in UP Board mathematics has a good base, but IB and IGCSE assess differently. A typical board question asks for a standard method to be applied to a familiar setting. An IB question may hide the method in a context, ask the student to choose it and to justify the choice.",
        "Assessment structure also differs. UP Board and CBSE weigh the final exam heavily. IB subjects add internal assessments over months, and IGCSE has coursework or practical papers in some subjects. Students used to a one-exam system need to learn to sustain independent work.",
        "The way marks are awarded is a further difference. IB and Cambridge publish mark schemes that reward specific statements, with 'method marks' for reasoning even if the final answer is wrong. Reading and using these mark schemes is one of the most effective study habits a student can acquire.",
        "For Khair families, we recommend choosing the qualification by destination. For JEE, NEET or a UP government route, CBSE or the UP Board remains direct. For a foreign degree, IB or IGCSE is worth serious consideration.",
      ],
      table: {
        caption: "UP Board and CBSE beside IB and IGCSE",
        columns: ["Point", "UP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Weight of the final exam", "Very high", "High, alongside internal assessment or coursework"],
          ["Question style", "Standard method in a familiar setting", "Method chosen and justified in a new context"],
          ["Mark schemes", "Limited public detail", "Published and reward stated reasoning"],
          ["Route to Indian entrances", "Direct", "Needs equivalence and subject planning"],
        ],
      },
      bullets: [
        "Board mathematics is a good base, but the question style differs",
        "Sustained independent work is a new skill for many students",
        "Published mark schemes are a powerful study tool",
        "Choose by destination, not by fashion",
      ],
    },
    {
      heading: "What are the options besides online tuition in Khair?",
      paragraphs: [
        "There are coaching centres in Khair and many more in Aligarh, and they do a good job at UP Board, CBSE, JEE and NEET preparation. To our knowledge none teaches IB or Cambridge syllabuses, and the numbers of interested students are too small to change that soon.",
        "Private teachers in Khair are a real strength, especially for routine and confidence. What is missing is current knowledge of IB and Cambridge marking, and that knowledge changes in small ways every year.",
        "Self-study can suit a disciplined IGCSE student, particularly in mathematics. It lacks a second reader, though, and internal assessments and long answers benefit greatly from someone who reads them critically.",
        "Online one-to-one tuition fills those gaps. It also lets a family choose a tutor from anywhere in India, matching the syllabus and the student's style.",
      ],
      table: {
        caption: "Support options for IB and IGCSE in and around Khair",
        columns: ["Option", "Where it helps", "Where it falls short"],
        rows: [
          ["Aligarh coaching centre", "Strong entrance-exam culture", "No known IB or IGCSE batches, thirty kilometres away"],
          ["Local private teacher", "Routine, trust and confidence", "Limited knowledge of current international mark schemes"],
          ["Self-study", "Independent and flexible", "No feedback on coursework or long answers"],
          ["Online IB Gram tutor", "Matched syllabus and attention", "Needs a stable connection"],
        ],
      },
      bullets: [
        "Aligarh centres serve entrance exams, not IB or IGCSE",
        "Local teachers seldom follow current international mark schemes",
        "Self-study needs a second reader",
        "Online tuition widens the choice to the whole country",
      ],
    },
    {
      heading: "How do harvest, fog and heat shape the Khair study year?",
      paragraphs: [
        "In this part of western Uttar Pradesh, the agricultural calendar sets the household's rhythm. The wheat harvest in April can occupy the whole family for days, and children are often needed in the fields or the market. It falls just before the May IB and Cambridge sessions, so planning revision earlier is sensible.",
        "Winter brings dense fog from December to January, and school hours and transport are disrupted. Evening lessons are more dependable than early morning ones, and a mock exam is best not scheduled on a fog-prone morning.",
        "Summer brings the loo, the hot dry wind of May and June, with temperatures that make afternoons unproductive. Early morning and late evening sessions work better, and power cuts are a fact of life in some weeks, so a charged laptop and a mobile hotspot are a sensible backup.",
        "Festivals such as Holi, Raksha Bandhan and Diwali also claim time, and the Kanwar Yatra in Sawan affects roads across western Uttar Pradesh. The exam boards will not move for any of them, so the plan works backwards from the true exam dates.",
      ],
      table: {
        caption: "The Khair calendar and the exam calendar",
        columns: ["Period", "Local factor", "Exam factor", "Planning advice"],
        rows: [
          ["December-January", "Dense fog", "Edexcel January series", "Evening lessons, no mocks on foggy mornings"],
          ["March-April", "Wheat harvest", "Revision for May exams", "Start timed papers before harvest"],
          ["May-June", "Loo and heat", "IB May and Cambridge summer series", "Early or late lessons and a backup connection"],
          ["July-August", "Sawan and Kanwar traffic", "Results and IA drafting", "Flexible lesson days"],
          ["October-November", "Festival season", "Cambridge November series", "Front-load revision before Diwali"],
        ],
      },
      bullets: [
        "Harvest time can absorb the whole family; plan revision around it",
        "Fog favours evening lessons",
        "The loo makes afternoon study unproductive",
        "Boards never move for local events",
      ],
    },
    {
      heading: "What can a Khair student do after IB or IGCSE?",
      paragraphs: [
        "Aligarh Muslim University is thirty kilometres away and a natural reference point, and Aligarh has other colleges and a strong engineering and medical tradition. Students should check which programmes accept IB and IGCSE qualifications and how equivalence is treated, since each university sets its own rules.",
        "For national routes, the Association of Indian Universities issues equivalence for the IB Diploma, and CUET-UG is the channel for many central universities. JEE Main and NEET-UG eligibility for students with international qualifications depend on the subjects taken and the rules in force, so please use official notices in the year of application.",
        "For study abroad, the pattern is clear. UK offers state IB points and subject minimums, US and Canadian universities weigh predicted grades within a file, and other countries have their own rules. Families with relatives abroad often understand the process better than most.",
        "IB Gram teaches the subject. We do not run admissions consulting, and we do not write personal statements or applications.",
      ],
      table: {
        caption: "Routes from Khair after IB or IGCSE",
        columns: ["Route", "What matters", "Tutoring focus"],
        rows: [
          ["Aligarh and Delhi universities", "Programme rules and equivalence", "Subject depth and English"],
          ["JEE Main or NEET-UG", "Eligibility for international qualifications", "HL Mathematics and sciences"],
          ["CUET-UG", "Equivalence and domain subjects", "Subject grades"],
          ["Study abroad", "Predicted grades and prerequisites", "Lifting HL grades before autumn of Class 12"],
        ],
      },
      bullets: [
        "Check each university's rules on IB and IGCSE",
        "AIU equivalence and current entrance rules change over time",
        "Predicted grades drive many overseas offers",
        "Tutors teach the subject only",
      ],
    },
    {
      heading: "How should a Khair student approach IB Mathematics and the sciences?",
      paragraphs: [
        "The first choice is between Analysis and Approaches and Applications and Interpretation. A student who enjoys algebra and calculus, and might read engineering or pure science, should look at AA. One who prefers data and applications, heading to commerce or life science, may prefer AI.",
        "Physics, Chemistry and Biology reward understanding over memorisation. A student who knows a formula but not where it comes from will struggle with unfamiliar contexts. We spend time on why a result holds, then on how to state it in the way examiners expect.",
        "Students from UP Board schools frequently have excellent numerical stamina. The gap tends to be in written explanation, where a two-line answer would do in a board paper and a paragraph with named principles is expected here.",
        "The internal assessments deserve early planning. A workable investigation needs a question and materials the student can reach from home, and we help find ideas that fit.",
      ],
      bullets: [
        "AA for algebra and calculus, AI for data and applications",
        "Understanding why a result holds beats memorising it",
        "Written explanation is the usual gap for board students",
        "Plan the investigation around materials within reach",
      ],
    },
    {
      heading: "IGCSE choices for a Khair student",
      paragraphs: [
        "In most subjects IGCSE students choose Core or Extended. Extended keeps higher grades available and prepares better for HL courses later. Core suits subjects taken for breadth.",
        "The board is often fixed by the school or online provider. If it is not, check the nearest exam centre and the series dates first, since practical papers and exam days need a physical centre.",
        "Keep to the past papers of the board being sat. Mixing Cambridge and Edexcel papers blurs question styles and can cost weeks.",
      ],
      bullets: [
        "Extended for subjects that lead to HL",
        "Core for breadth subjects",
        "Confirm an exam centre before committing",
        "Practise only on the chosen board's papers",
      ],
    },
    {
      heading: "How do we match a tutor for a Khair family?",
      paragraphs: [
        "It begins with a short chat on WhatsApp or by email: board or programme, subject, level, exam session and what worries you. If a relative abroad is involved, tell us the target country, since it affects subject choices.",
        "We reply with tutor profiles, each showing recent courses taught. We check credentials and teaching history before a profile is shared.",
        "The free lesson is the decision point. Sit in if you like. Afterwards tell us whether the explanations were clear and whether your child felt at ease.",
        "If it works, the tutor sets a first-month plan. If it does not, we change tutors, no questions asked.",
      ],
      bullets: [
        "A short intake, including any target country",
        "Profiles based on recent teaching of the exact course",
        "Free lesson with parent welcome",
        "Simple tutor change",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB continuum and both major IGCSE boards to students connected to Khair, whether they board elsewhere, study online or follow a course through tuition. Each match weighs syllabus, level and exam date, and every lesson is online.",

  process: [
    { title: "Send the details", description: "Board or programme, subject, level, exam session and the hours that suit your Khair household." },
    { title: "Read the profiles", description: "Tutors who have taught that course recently, each with a reason for the choice." },
    { title: "Join a free lesson", description: "A live session with no cost and no obligation, and parents may sit in." },
    { title: "Fix the first month", description: "A written plan of topics and reporting, agreed with you." },
    { title: "Continue or switch", description: "Regular lessons with reviews, and a simple change if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Course before place", description: "The syllabus and level choose the tutor, so a specialist elsewhere is as close as a neighbour." },
    { title: "Honest about the local gap", description: "No IB or Cambridge school is confirmed in Khair, and we do not pretend otherwise." },
    { title: "Follows the family", description: "If a posting or a move takes you away, the same tutor and notes go with you." },
    { title: "Free first lesson", description: "See the teaching before discussing anything further." },
    { title: "Coaching, not writing", description: "Feedback and structure for coursework, never a tutor writing the submitted work." },
    { title: "Easy exit", description: "No lock-in, and changing tutor is a simple request." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Khair?", answer: "Write to us with the programme, subject, level and target exam session, and we come back with a few tutors whose recent teaching matches. There is no IB school in Khair to search around, so syllabus experience is the only thing we can go on. The first lesson costs nothing, and if it is not a good fit, a different tutor is offered." },
    { question: "Do you provide IGCSE home tuition in Khair for Cambridge and Edexcel?", answer: "Yes, in the form of online home tuition: your child studies in your own house and the teacher joins by video. The two boards are never blended. A Cambridge 0625 Physics candidate is taught from that board's papers, an Edexcel 4PH1 candidate from Edexcel's, and the tier is fixed before the first session." },
    { question: "Will a tutor come to our house in Khair?", answer: "No, and we prefer to say so clearly. Tutors do not visit homes in Khair. Face-to-face lessons exist only in Gurugram and parts of Delhi NCR. What you get in Khair is a scheduled one-to-one video lesson, needing a laptop, a decent connection and a quiet corner in the house." },
    { question: "Is there an IB or Cambridge school in Khair?", answer: "Not one we are able to confirm, which is why no Khair school is named on this page. Schools here run the UP Board or CBSE. Noida and Greater Noida hold the closest verified IB and Cambridge cluster, and Gurugram a bigger one. Should a nearby school recently have gained authorisation, let us know and we will look into it." },
    { question: "What does IB or IGCSE tutoring cost in Khair?", answer: "There is no fixed figure, since it turns on programme, subject, level, lesson length and how many lessons a week. Rarer HL courses tend to cost more than Core IGCSE topics. You get the number in writing before the free trial, pay nothing for travel because there is none, and sign no contract." },
    { question: "Can my child take the IB Diploma while living in Khair?", answer: "The Diploma has to be taken through an IB-authorised school, which can be an online one. After that is settled, IB Gram covers the teaching side at home. Enrolment, fees and exam registration are matters between you and that school, so sort them out before choosing subjects, ideally during Class 10." },
    { question: "Is the trial lesson really free?", answer: "It is. The trial is a proper lesson on syllabus content, and we do not ask for card or bank details. When it ends you choose whether to go on. If you do, the tutor sketches a short plan; if the chemistry between tutor and student is missing, we look for someone else." },
    { question: "Can a tutor help with the Internal Assessment or Extended Essay?", answer: "Within the rules, yes. A tutor may help a student narrow a research question, decode a criterion, sanity-check a method and comment frankly on a draft. Writing, rewriting or completing the assessed piece is off the table, since IB requires that Internal Assessments, the Extended Essay and TOK essay are the student's own work." },
    { question: "Which IB subjects can you cover for Khair students?", answer: "Nearly every group. The commonest requests are Mathematics in both routes, the three sciences, Economics, Business Management, English A, Computer Science and Hindi, along with TOK and Extended Essay guidance. A subject that is not listed here is still worth asking about, as tutors come from across India." },
    { question: "Do you teach MYP and PYP students from Khair?", answer: "We do. In MYP the work usually means writing to criteria A to D and shaping the Personal Project. In PYP it means shorter, more frequent sessions on reading, numbers and asking good questions. Both suit a child who boards elsewhere or attends an online school while the family stays in Khair." },
    { question: "Is online tutoring as good as a tutor in the room?", answer: "In a town like Khair the honest comparison is online against no specialist at all, since none lives nearby. A shared whiteboard, papers shown on screen and recorded worked solutions do almost everything a tutor at the table would. What you gain is the freedom to pick a teacher from any city." },
    { question: "How do you check your tutors?", answer: "Before a family sees a profile we ask what the tutor has taught, at which level, how recently and how they think about mark schemes. The free lesson then tests the person, not just the paperwork. A tutor who explains poorly is replaced, however good the credentials look." },
    { question: "When should a Khair student start tutoring?", answer: "Earliest is best: Grade 9 for IGCSE, Class 11 for the Diploma. A long runway means gaps are mended before mocks, internal deadlines and predicted grades collide. Joining later still works, because the plan then concentrates on the topics and papers that carry the most marks." },
    { question: "My child is switching from the UP Board or CBSE. What should we expect?", answer: "Familiar content, unfamiliar questions. Words like evaluate and justify, coursework that runs for months, and marking by published schemes are what catch students out. A few marked practice papers before the switch, ideally over the summer, take much of the shock out of the first term." },
    { question: "Can lessons work around the harvest and winter fog?", answer: "Yes. Busy harvest days can be skipped, fog season pushes lessons to the evening, and a lesson lost to a power cut is simply rebooked. Mention the constraint to the tutor as early as you can and the timetable bends without any penalty." },
    { question: "What if we are unhappy with the tutor?", answer: "Tell us, and a replacement is arranged. We check in every few weeks so problems surface early, and your child is never bound to a tutor who is not helping. Taking a break or stopping altogether carries no charge and needs no explanation." },
    { question: "Is IB Gram linked to any school near Khair or to the IB, Cambridge or Pearson?", answer: "No link of any kind. We are an independent service, not partnered with or approved by a school, the International Baccalaureate Organization, Cambridge or Pearson Edexcel. A school shows up on this page purely so that families can see which curriculum it runs." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See how online tuition works in cities and towns nationwide." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only area where tutors also visit in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects and tutoring formats." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and exam sessions explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, the core and internal assessments." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Career-related study with Diploma courses." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Search tutor profiles by subject and level." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Entrance preparation beside subject tutoring." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free lesson." },
    { label: "IB and IGCSE tutoring in Aligarh", href: "/aligarh/", description: "The district city, thirty kilometres away." },
    { label: "IB and IGCSE tutoring in Noida", href: "/noida/", description: "The nearest large cluster of IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Hapur", href: "/hapur/", description: "Another western Uttar Pradesh town served online." },
    { label: "IB and IGCSE tutoring in Firozabad", href: "/firozabad/", description: "A neighbouring Braj-belt city served online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson for your Khair student",
  closingBody:
    "Khair families can start with a message: the board or programme, the subject and level, and the evenings that are free at home. A tutor profile and trial times come back within a working day or so, and nothing needs signing or paying. Our address is support@ibgram.com and our WhatsApp number is +91 7439 368 115.",
};
