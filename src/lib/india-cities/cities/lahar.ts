import type { CitySeoPage } from "../types";

/**
 * Lahar (Bhind district, Madhya Pradesh). Wikipedia: Nagar Palika and tehsil town of about 35,700 people near the
 * Chambal; Government Higher Secondary School, Saraswati Vidya Mandir, Lahar College of Arts and Science. No IB or
 * Cambridge school found, so stripSchools is empty. Clusters point to Gwalior (no confirmed school), Bhopal and
 * Indore, reusing names from existing pages. Online only.
 */
export const lahar: CitySeoPage = {
  slug: "lahar",
  countryName: "Lahar",
  countryNameLong: "Lahar, Madhya Pradesh",
  demonym: "Lahar",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening and Sunday-morning slots, with a lighter load in harvest weeks and on loo-heavy afternoons",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 26.1167, longitude: 78.5667 },
  alternateNames: ["Lahar Bhind", "Lahar Tehsil"],
  wikipedia: "https://en.wikipedia.org/wiki/Lahar,_Madhya_Pradesh",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lahar | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Lahar, Bhind district: live one-to-one online lessons for MP Board and CBSE students going international. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition in Lahar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR LAHAR, ONLINE",
  heroSubtitle:
    "Private tuition at home in Lahar for IB or IGCSE means one-to-one lessons over video, since no tutor of ours knocks on doors in Bhind district. The town sits on Chambal-side farmland between Bhind and Gwalior, and its schools follow the MP Board and CBSE. A student who wants an international syllabus gets it from a specialist on screen, in the evening hours that follow school.",
  primaryKeyword: "IB and IGCSE tutors in Lahar",
  imageAltText: "Lahar student with notebooks and a laptop in a family home during a live IB Mathematics tuition session",
  secondaryKeywords: [
    "IB tutor Lahar",
    "IGCSE tutor Lahar",
    "IB home tuition Lahar",
    "IGCSE home tuition Lahar",
    "IB private tuition Lahar",
    "IB Maths tutor Lahar",
    "IGCSE Maths tutor Lahar",
    "IB Physics tutor Lahar",
    "IB Chemistry tutor Lahar",
    "IB Biology tutor Lahar",
    "IB DP tutor Lahar",
    "IB MYP tutor Lahar",
    "IB PYP tutor Lahar",
    "IGCSE online tuition Lahar",
    "IB tutor Bhind",
    "online IB tutor Bhind district",
    "IGCSE tutor Bhind Madhya Pradesh",
    "Cambridge IGCSE tutor Lahar",
    "Edexcel IGCSE tutor Lahar",
  ],

  heroTrustPoints: [
    "Online only in Lahar: tutors do not visit homes anywhere outside Gurugram and parts of Delhi NCR",
    "A tutor chosen for the specific IB course or IGCSE specification, never a generic subject match",
    "Free first lesson, followed by a rate sent in writing before any booking",
    "No connection to the IB, Cambridge, Pearson or any school in Bhind or Gwalior",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "IB stages" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Evenings", label: "After the MP Board school day" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "An international syllabus from a Chambal-side town",
    paragraphs: [
      "Lahar is a tehsil town in Bhind district with a population of roughly thirty-five thousand at the 2011 census. Its education landscape is simple: a Government Higher Secondary School, a Saraswati Vidya Mandir, a handful of private English-medium schools and Lahar College of Arts and Science. None of the sources we checked describes an IB or Cambridge school in the town, and we do not claim one.",
      "People who search for an IB or IGCSE tutor from here tend to be a specific kind of family. A parent in the armed forces or police with a transfer coming up, a child already enrolled in an international school in a metro, a household with relatives abroad, or a student who plans to leave the Chambal region for university and wants a qualification that other countries recognise.",
      "It helps to be exact about what home tuition means. IB Gram tutors do not come to houses in Lahar or anywhere in Madhya Pradesh. In-person lessons run only in Gurugram and parts of Delhi NCR. In Lahar the lesson is online, and the home is the classroom: a laptop on a table, a tutor on screen, and a shared whiteboard for working.",
      "We are independent. There is no affiliation with the IB, Cambridge, Pearson or any school named on this page, and tutors never write Internal Assessments, Extended Essays, Theory of Knowledge essays or other coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Lessons that do not depend on a road to Bhind or Gwalior",
      "A written note after each class that a parent can read at leisure",
      "Free trial, then a written rate and timetable",
      "A fresh tutor on request if the first match is not right",
    ],
  },

  programmesIntro:
    "Online teaching lets a Lahar student follow any IB stage. The support looks different at each stage, from play-based language work in the primary years to subject depth at Diploma level.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Children explore units built around central ideas, using inquiry rather than textbook chapters. A final-year Exhibition lets them present a topic they chose.",
      countryNote:
        "Where a Lahar child is raised in Hindi and hears English mostly at school, brief sessions on spoken English and reading give the PYP its strongest footing.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged on four criteria, and global contexts link classwork to real issues. The Personal Project in the last year is a sustained piece of independent work.",
      countryNote:
        "Students coming from MP Board or CBSE classrooms often write correct answers that skip the reasoning MYP criteria want, and a tutor trains that habit gradually.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Candidates pick six subjects, add Theory of Knowledge, an Extended Essay and CAS, and sit external papers in May or November. Internal assessments contribute to the final grade.",
      countryNote:
        "No Diploma school exists in Lahar, so a candidate registers elsewhere or studies away. A weekly specialist lesson stands in for the subject teacher who is not available locally.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take at least two DP courses alongside a vocational study, a reflective project and a language course. It is built for practical, career-led routes.",
      countryNote:
        "We found no CP school near Lahar. We can still teach the DP courses and language element for a student registered elsewhere, and will say if another route fits better.",
    },
  ],

  subjectsIntro:
    "These IB Diploma subjects come up most in enquiries from Lahar and the Bhind belt. We confirm syllabus year and level with the student's registering school during the free first lesson.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and proof for future engineers and scientists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology for business, social science and design applicants." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through to fields and atomic physics, with practice on data analysis." },
    { name: "Chemistry", levels: "SL and HL", description: "Energetics, kinetics, acids and bases, and organic pathways in clear steps." },
    { name: "Biology", levels: "SL and HL", description: "Genetics, ecology, physiology and the vocabulary of the command terms." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Soil, water and farming systems, linked to the agriculture of the Chambal plain." },
    { name: "Economics", levels: "SL and HL", description: "Markets, trade and development, with farm-economy examples a Bhind student can see." },
    { name: "Business Management", levels: "SL and HL", description: "Strategy, finance and operations through case studies." },
    { name: "History", levels: "SL and HL", description: "Twentieth-century world history topics and source analysis." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis and the individual oral." },
    { name: "Hindi A or Hindi B", levels: "SL and HL", description: "Literature or language practice in the home language." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming and system design basics." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and the biological, cognitive and sociocultural approaches." },
    { name: "Theory of Knowledge", levels: "Core", description: "Knowledge questions and exhibition planning; students write their own essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers are sat in the May-June and October-November series, with January available for Edexcel in some subjects. These courses reach us most from the Lahar area.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics with paper-specific technique." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Further algebra and calculus for students moving to IB Maths AA." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, energy, waves, electricity and atomic physics." },
    { name: "Chemistry", levels: "Core and Extended", description: "Bonding, reactions, quantitative chemistry and organic basics." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, nutrition, inheritance and ecology." },
    { name: "Environmental Management", levels: "Single tier", description: "Land use, water and ecosystems, with relevance to a farming region." },
    { name: "Geography", levels: "Single tier", description: "River systems, settlement and fieldwork-based questions." },
    { name: "Economics", levels: "Single tier", description: "Basic economic problems, trade and the role of government." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, listening, speaking and writing practice." },
    { name: "English as a First Language", levels: "Single tier", description: "Argument, descriptive and narrative writing." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Where the board and series allow, with the specification code confirmed first." },
    { name: "Computer Science", levels: "Single tier", description: "Pseudocode and programming problems." },
  ],

  regionsTitle: "Lahar areas and routes we teach online",
  tutorsIntro:
    "Lahar students are taught by India-based tutors over live video. Each tutor card names the IB programme or IGCSE specification they have taught, and the first lesson is free.",
  regionsIntro:
    "Families in Lahar often describe their address by landmark rather than by locality name, so these are the areas and corridors that come up, with a note on how each affects study time.",
  regions: [
    { name: "Main market and bus stand", note: "The busiest part of town, loud and crowded in the evening. Students here do better with a late slot when the bazaar quietens." },
    { name: "Government school and college road", note: "Close to the Government Higher Secondary School and Lahar College, where board-exam students already have long classroom hours." },
    { name: "Tehsil and sub-division offices", note: "A zone of government employees, whose children may face frequent transfers and so need a curriculum that travels." },
    { name: "Indira Gandhi stadium area", note: "Near the local cricket ground, where a young sportsperson may have training at dusk and a lesson fitted after it." },
    { name: "Saraswati Vidya Mandir neighbourhood", note: "A residential belt around a well-known private school, with families who already look for extra support." },
    { name: "Bhind road side", note: "Colonies along the road to Bhind, about sixty kilometres away, home to households with ties to the district town." },
    { name: "Gwalior road side", note: "The route towards Gwalior and Jhansi, roughly a hundred and ten kilometres each, followed by families whose work or relatives lie that way." },
    { name: "Town-edge farmhouses", note: "Homes beside fields of wheat and mustard, where signal strength and farm timings are the practical concerns." },
    { name: "New residential colonies", note: "Recently built plots on the outskirts, popular with professionals who want space and a quiet study room." },
  ],
  schoolClusters: [
    {
      city: "Lahar and Bhind district: no confirmed IB or Cambridge school",
      note: "Lahar's schools follow the MP Board or CBSE. We could confirm no IB or IGCSE school in town and name none.",
      schools: [],
    },
    {
      city: "Nearby: Bhopal",
      note: "Madhya Pradesh's capital is the nearest big city with confirmed international schooling for many families, though a long journey from Lahar.",
      schools: ["Eastern Public School, Gandhi Nagar", "The Sanskaar Valley School, Chandanpura"],
    },
    {
      city: "Nearby: Gwalior and Agra, labelled as options only",
      note: "Gwalior has no school we can verify for IB or IGCSE, and Agra is the next large city across the border. Both are listed so a family knows these were checked.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where the closest verified options lie. IB Gram works independently of the IB, Cambridge, Pearson and every school mentioned, and a listing is neither an endorsement nor a partnership.",

  modesIntro:
    "All Lahar lessons are online. The question for a family is the rhythm, and three patterns cover almost every case we plan.",
  modes: [
    {
      title: "Standing weekly lesson",
      description: "One tutor, one student and one slot each week, with new material, corrected practice and a small task before the next class.",
      bullets: ["Same tutor every week", "Whiteboard working kept in a shared file", "Questions chosen by exam board", "Short parent note after each lesson"],
    },
    {
      title: "Bridge from MP Board or CBSE",
      description: "For a student moving to an international syllabus, the first weeks map the gaps in vocabulary, paper style and expected depth.",
      bullets: ["Gap map after two sessions", "Focus on written explanation", "Gradual introduction of command terms", "Checks for parents on progress"],
    },
    {
      title: "Pre-exam push",
      description: "A tighter schedule in the weeks before mocks and the live series, based on timed practice and detailed marking.",
      bullets: ["Papers under real time limits", "Marking explained line by line", "Revision plan by topic weight", "Lighter load during festivals"],
    },
  ],

  sections: [
    {
      heading: "Who looks for IB and IGCSE tuition in Lahar?",
      paragraphs: [
        "The people behind these searches are not numerous, but they know what they want. In the Chambal region, many households have a son or daughter planning a career away from the district, in the armed forces, in civil services, in a metro city or abroad.",
        "Some are families of serving personnel and officials, who move every few years and want a child whose curriculum is the same in Pune, Chennai or Delhi. Others have relatives overseas and expect the child to study there one day. A third group simply wants more flexibility than a state board gives.",
        "Lahar's own institutions do their job for the board exams. What they do not offer is the combination of international syllabus, specialist subject teaching and English-medium exam practice that IB and IGCSE require, which is why tuition has to come from outside the town.",
        "An online tutor can supply that without a family leaving Lahar. The student studies at home, in a familiar room, while the subject comes from someone who has taught it.",
      ],
    },
    {
      heading: "MP Board, CBSE, IGCSE or IB: how do they differ for a Lahar student?",
      paragraphs: [
        "The MP Board and CBSE are the two systems Lahar students know, with CBSE being the more common among private English-medium schools. Both rely heavily on a prescribed textbook and a final board examination.",
        "IGCSE shifts the weight towards application. Questions ask a student to explain, evaluate or work through unfamiliar data, and marks reward the reasoning shown. The IB goes further, adding internal assessments, an extended essay and a reflective core.",
        "A student who has been trained to recall will find the first few months of either international system uncomfortable. The same student, with practice, often discovers that the understanding built is more useful for later study.",
      ],
      table: {
        caption: "MP Board, CBSE, IGCSE and IB at a glance",
        columns: ["Feature", "MP Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main assessment", "Annual board papers", "Annual board papers", "Subject papers at end of Class 10", "Subject papers plus internal assessment"],
          ["Style of question", "Textbook recall", "Mix of recall and application", "Application and explanation", "Analysis, evaluation and extended writing"],
          ["Medium", "Hindi or English", "English or Hindi", "English", "English plus a second language"],
          ["Availability in Lahar", "Widely taught", "In some private schools", "Not confirmed locally", "Not confirmed locally"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition in Lahar?",
      paragraphs: [
        "A Lahar family will not find a price list from us, because rates are agreed per tutor and course rather than per town. They are quoted in writing after the free first lesson.",
        "Subject and level account for most of the difference. Higher Level sciences and mathematics ask for deeper knowledge from the tutor, whereas IGCSE Core or MYP lessons draw from a wider pool.",
        "Session length and frequency also count. A weekly hour is typical, and intensive weeks before exams cost more simply because there are more lessons.",
        "Since all teaching is online, nothing is charged for travel. The costs a family should plan for are broadband, a stable laptop and, in summer, a power backup for the hours when the grid fails.",
        "Before agreeing, read the written quote for five things: the tutor and the exact course and level, the length of each lesson, the weekly pattern, the rate per session, and what the arrangement says about missed lessons and about changing tutor. A quote that leaves any of these out is worth questioning, and the free first lesson is the moment to ask.",
      ],
    },
    {
      heading: "Online tutor, local tuition centre or self-study for IB and IGCSE?",
      paragraphs: [
        "Lahar has neighbourhood coaching for the board subjects, much of it directed at Class 10 and 12 exams and at competitive-entry preparation. These centres do their work well for the MP Board and CBSE syllabuses.",
        "They rarely teach IB or IGCSE content, because there are few students and few teachers with the training. A parent looking for such help soon finds that the nearest equivalent is a call away.",
        "The table sets out the routes a Lahar family can take and the trade-offs of each.",
      ],
      table: {
        caption: "Study routes for IB and IGCSE from Lahar",
        columns: ["Route", "What it offers", "What it lacks", "Fits best"],
        rows: [
          ["Online one-to-one", "A specialist in the exact syllabus and flexible timing", "Needs a steady connection and power", "Students at any stage of the IB or IGCSE"],
          ["Local coaching centre", "Nearby, familiar and affordable", "No IB or IGCSE focus", "MP Board and CBSE revision"],
          ["Self-study", "Free resources and own pace", "No expert marking or correction", "Revision of topics already understood"],
          ["Moving to a metro school", "Full classroom and peers", "Cost and family separation", "Families committed to the Diploma"],
        ],
      },
    },
    {
      heading: "How do heat, harvest and festivals shape the study year in Lahar?",
      paragraphs: [
        "Summers in the area reach forty-five degrees, and the loo makes afternoon study difficult. Evening lessons are therefore the practical choice, with the first hour after sunset often the best.",
        "Rabi harvest in March and April, when wheat and mustard are cut, pulls many families into field work. A student who helps at home benefits from a reduced schedule in those weeks, with lessons concentrated at weekends.",
        "Holi, Diwali and the long wedding season in winter all pull on time. The IB November session and the IGCSE October-November series fall close to Diwali, so revision should be planned before the festival, not after.",
        "Winter nights in Bhind district bring fog and cold, and a lesson at a kitchen table beats a ride on a dark road.",
      ],
      table: {
        caption: "A year of study in Lahar",
        columns: ["Months", "Local conditions", "Exam link", "Lesson plan"],
        rows: [
          ["April to June", "Harvest then peak heat", "IB May and IGCSE summer papers", "Evening and weekend slots, short sessions"],
          ["July to September", "Monsoon and school restart", "Foundation for the new term", "Regular weekly lessons"],
          ["October to November", "Diwali and cooler weather", "IB and IGCSE November series", "Early revision, then rest around Diwali"],
          ["December to February", "Cold, fog, wedding season", "Mocks and January Edexcel entries", "Lessons in the warm part of the evening"],
        ],
      },
    },
    {
      heading: "What are the university pathways from Lahar after IB or IGCSE?",
      paragraphs: [
        "Within India, IB and IGCSE qualifications can be recognised through equivalence from the Association of Indian Universities, which lets a student apply to most universities. CUET-UG is the route into central universities, and subject choices should match the programme sought.",
        "Students dreaming of engineering or medicine through JEE Main and NEET should check current eligibility, because the rules concern subject combinations and recognition. Physics, Chemistry and Mathematics or Biology need to be in the student's package.",
        "Abroad, the IB Diploma is widely read by universities in the UK, Canada, Australia, Singapore and the United States. IGCSE results support A Level or IB entry and appear on later applications.",
        "A Lahar student who stays within Madhya Pradesh and takes the IB or IGCSE route still has options in Gwalior, Bhopal and Indore, and can switch to the board exams if plans change.",
      ],
    },
    {
      heading: "How hard are IB Maths and Science for a student from Lahar?",
      paragraphs: [
        "The step from board-style problems to IB questions involves more writing and more modelling. In Maths Analysis and Approaches, a student needs fluent algebra and the discipline of justifying every step.",
        "Applications and Interpretation expects use of a graphing calculator and a short conclusion in context. Many students underrate the second part.",
        "Physics, Chemistry and Biology bring data tasks, experimental design and long-answer writing. For students used to short factual answers, practice in structuring a paragraph is as important as content.",
        "A tutor builds each skill with graded questions, then moves to full past-paper sections once confidence has grown.",
      ],
      bullets: [
        "Maths AA: justify each step and connect topics",
        "Maths AI: calculator skill and contextual conclusion",
        "Physics: derivations and uncertainty",
        "Chemistry: calculation layout and organic routes",
        "Biology: vocabulary and experimental design",
      ],
    },
    {
      heading: "Which IGCSE tier should a Lahar student attempt?",
      paragraphs: [
        "In Mathematics and several sciences, Core tier results cap at a grade C, while Extended opens grades up to A* or 9. A student planning IB Maths or further science should aim for Extended.",
        "Choosing subjects depends on the planned route. Science-minded students take Mathematics, Physics, Chemistry and Biology, perhaps with Additional Mathematics. Commerce-minded students may prefer Economics, Business Studies and Accounting.",
        "Cambridge and Pearson Edexcel are separate boards with separate specifications. The tutor must know which one the school or exam centre uses, so we verify the code first.",
      ],
    },
    {
      heading:
        "How can a Hindi-medium student from Lahar build the English that IB and IGCSE papers demand?",
      paragraphs: [
        "By treating English as an exam skill to be trained, not only a language to be known. Learn the command terms that examiners use, write short structured paragraphs every day, and read subject text with a pencil in hand. Hindi stays valuable, because Hindi A and Hindi B are IB subjects in their own right, but the mathematics, science and humanities papers are written in English, and marks go to answers that are clear, ordered and exact.",
        "Start with command terms. Define, describe, explain, outline, discuss, evaluate and justify each ask for a different depth, and the IB, Cambridge and Pearson all publish what they mean. A student who knows that outline wants a brief account while discuss wants a balanced argument supported by evidence stops losing marks to a misread verb. In the first weeks the tutor takes one term per session and sets a question from the student's own subject that uses it, so the vocabulary arrives attached to real content rather than as a list to memorise.",
        "Next comes paragraph structure. Students raised on board papers that reward recalled passages often write one long block, with the point buried in the middle. The repair is mechanical: a claim, the evidence or working that supports it, then the consequence. Two such paragraphs a day on a syllabus topic build more fluency than one weekly essay. The tutor reads what the student wrote, marks it against the subject's own criteria and records the main correction in the note sent to parents. This is practice material, not assessed work, so any coursework remains entirely the student's own.",
        "Reading and listening carry the rest. For the sciences, the worked examples in a textbook and the published mark schemes for past papers show exactly how good answers are worded. For history, economics and business, an editorial from an English newspaper is a useful model of argument. Ten minutes of spoken English a day, from a lecture video or a news bulletin, helps a student keep pace with a live lesson and prepares for the oral components of the IB language subjects. For a younger child on the PYP or MYP route, fifteen minutes of reading aloud each evening does more than one long weekend session.",
        "A bilingual glossary helps without changing the language of teaching. The student keeps a notebook that pairs each English technical term with its Hindi meaning and a one-line example. Lessons themselves run in English, as the papers do, but a student who first grasps what a catalyst or a subsidy is in Hindi finds it easier to use the English word correctly. The aim is for the English term to be the one that comes to mind first.",
      ],
      bullets: [
        "One command term a day, answered with a question from the student's own subject",
        "Two structured paragraphs a day on a syllabus topic",
        "Worked examples read aloud, then explained back in English",
        "A Hindi-English glossary of technical terms, added to after every lesson",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the board, subject, level, school and exam session by email or WhatsApp." },
    { title: "Receive a tutor suggestion", description: "We propose a tutor who has taught the exact course and fits your evening." },
    { title: "Take the free first lesson", description: "Meet the tutor and test the connection before anything is decided." },
    { title: "Confirm terms in writing", description: "A rate and schedule arrive in writing; nothing starts until you agree." },
    { title: "Continue with weekly notes", description: "Regular lessons, a note after each, and a change of tutor on request." },
  ],
  whyPoints: [
    { title: "Course-level matching", description: "Tutors are chosen for the precise syllabus, not a loose subject label." },
    { title: "Fits a small-town routine", description: "Slots avoid harvest weeks, afternoon heat and festival days." },
    { title: "Parent-friendly notes", description: "A plain written summary after each class." },
    { title: "Straight about format", description: "No home visits in Lahar; everything is online." },
    { title: "Coaching with integrity", description: "No ghost-writing of any assessed work." },
    { title: "Easy to change", description: "A different tutor is arranged on request." },
  ],

  faqs: [
    { question: "Is there an IB tutor in Lahar?", answer: "IB Gram offers IB tutors who teach Lahar students online. Tutors are based elsewhere in India and work with your child by live video, one to one, matched to the exact subject and level. Support runs across the PYP, MYP, DP and CP, so a Class 4 child and a Class 12 candidate are both covered, and every match starts from the course the student is actually taking rather than a loose subject label. The first lesson is free, and a different tutor is arranged if the fit is wrong." },
    { question: "Does a tutor come to my house in Lahar?", answer: "No. Tutors do not visit homes in Lahar or anywhere in Madhya Pradesh, because in-person lessons run only in Gurugram and parts of Delhi NCR. What we offer is online home tuition, taken at your own desk on a laptop." },
    { question: "Is there an IB or IGCSE school in Lahar?", answer: "None that we could confirm. Local schools follow the MP Board or CBSE. We name no school as offering the IB or IGCSE unless we have verified it." },
    { question: "Can my child follow IB while studying in Lahar?", answer: "Only through a registering school, which is not in Lahar. Some students board elsewhere, and others use an online arrangement. The IB Diploma is sat through an authorised IB World School, so a family should confirm registration, subject availability and fees with that school before lessons begin. We teach subjects but do not enrol students, so check any school's terms first. From Lahar, what we add is steady subject support in the exact courses the student is taking." },
    { question: "How much does IGCSE tuition cost for Lahar students?", answer: "It depends on the tutor, subject and level, not on the town. We publish no prices; a written rate follows the free first lesson, so you see the exact figure before deciding." },
    { question: "Will lessons work in a power cut?", answer: "Power cuts are a real risk in summer, so we recommend a backup for the laptop and a mobile data option. A small UPS keeps the router alive through short outages, and a phone hotspot covers the rest. Test both during the free first lesson, when a dropped connection costs nothing. If a lesson is lost, we reschedule it rather than count it." },
    { question: "Are lessons in Hindi?", answer: "Lessons are in English because IB and IGCSE papers are in English. A tutor can slow down and explain terms in plain words, but we do not offer Hindi-medium teaching of these syllabuses." },
    { question: "What is the difference between IGCSE and the IB Diploma?", answer: "IGCSE is a subject-by-subject qualification usually taken around Class 10. The IB Diploma is a two-year programme in Classes 11 and 12 that combines six subjects with a core of essay, reflection and a knowledge course." },
    { question: "Can you write my child's Internal Assessment?", answer: "No. Tutors coach and give feedback but never write an IA, Extended Essay, TOK essay or coursework. We can explain the criteria, help plan a question and comment on drafts the student wrote." },
    { question: "How often should lessons happen?", answer: "One hour a week is common, with extra sessions before exams. Subjects heavy on practice, such as Mathematics and Physics, often justify a second weekly session, while language and humanities subjects usually manage with one. Young PYP learners do better in shorter blocks. The schedule is agreed after the free first lesson and can be changed as the exam series comes closer." },
    { question: "When are the exams?", answer: "The IB Diploma runs in May and November. Cambridge IGCSE sits in May-June and October-November, and Pearson Edexcel in January, May-June and October-November in many subjects. The registering school confirms which applies." },
    { question: "What if the tutor does not suit my child?", answer: "Tell us, and we arrange another. Fit matters, especially for a student who is quiet or anxious, and a change carries no penalty. Mention what felt wrong, whether the pace, the way of explaining or the timing, so that the next suggestion is better aimed." },
    { question: "Can IB or IGCSE students still sit JEE or NEET?", answer: "Often yes, but eligibility depends on subjects and equivalence rules that change. Check the latest notice from the testing agency and the admission page of the institution, and keep Physics, Chemistry and Mathematics or Biology at a strong level. Our admissions test-prep page covers entrance preparation, and a tutor can strengthen the content that overlaps." },
    { question: "Is it too late to switch from CBSE in Class 10?", answer: "No, but most students join the Diploma at Class 11 through a school. Preparing in Class 10 with English writing and mathematics fundamentals makes the move much easier." },
    { question: "How do I begin?", answer: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the board, subject, level and school. We reply with a tutor suggestion and a time for the free first lesson." },
    { question: "Do you teach MYP students from Class 6 to 10?", answer: "Yes. MYP tutors help with subject content, criteria-based answers and planning for the Personal Project. They guide the thinking, but the project stays the student's own." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How online tuition works in towns across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB subject tutors and programme guidance." },
    { label: "IGCSE tuition", href: "/igcse/", description: "Cambridge and Edexcel subject help." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure of the Diploma and its core." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based learning for younger children." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutor profiles." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics at SL and HL." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Arrange a free trial lesson." },
    { label: "Gwalior tutors", href: "/gwalior/", description: "The nearest large city and its online tuition page." },
    { label: "Morena tutors", href: "/morena/", description: "A neighbouring Chambal-region district." },
    { label: "Bhopal tutors", href: "/bhopal/", description: "Madhya Pradesh capital with confirmed international schools." },
  ],
  closingHeading: "Book a free first lesson from your Lahar home",
  closingBody:
    "Send the board, subject and level and tell us which evenings are free around school and field work. We reply with a tutor who has taught the course, and the first lesson is on us. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
