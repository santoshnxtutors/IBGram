import type { CitySeoPage } from "../types";

/**
 * /nagda/ - IB and IGCSE tutoring page for Nagda, Ujjain district, Madhya Pradesh. Online only: in-person
 * visits exist only in Gurugram and parts of Delhi NCR. No IB or Cambridge/Edexcel campus could be
 * confirmed in Nagda, so stripSchools is empty and clusters point to Indore and Bhopal using school names
 * already verified on those cities' published pages. Industrial-township (Grasim, Birla) angle.
 */
export const nagda: CitySeoPage = {
  slug: "nagda",
  countryName: "Nagda",
  countryNameLong: "Nagda, Madhya Pradesh",
  demonym: "Nagda",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We plan around plant shift patterns at the township, the Malwa heat, Dhol Gyaras and Diwali weeks, and the MP Board exam season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.4548, longitude: 75.4172 },
  wikipedia: "https://en.wikipedia.org/wiki/Nagda",
  alternateNames: ["Nagda Junction", "Nagda Ujjain"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nagda | Online Home Tuition MP",
  metaDescription:
    "Nagda's online IB and IGCSE tutors: private home tuition by live video for MYP, DP and Cambridge students in the Grasim township and Malwa, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nagda",
  heroEyebrow: "NAGDA IB & IGCSE ONLINE PRIVATE TUITION",
  heroSubtitle:
    "When a Birla township or plant family transfers into Nagda with a child on the IB or IGCSE, private home tuition for that syllabus turns out to be nowhere within reach. IB and IGCSE tutors in Nagda are supplied over video: a teacher who has handled your child's exact course meets them at home, on screen, for a first lesson at no charge.",
  primaryKeyword: "IB and IGCSE tutors in Nagda",
  imageAltText: "Nagda student practising IB Chemistry calculations during a live online tutoring session",
  secondaryKeywords: [
    "IB tutor Nagda",
    "IGCSE tutor Nagda",
    "IB home tuition Nagda",
    "IGCSE home tuition Nagda",
    "IB private tuition Nagda",
    "IB Maths tutor Nagda",
    "IGCSE Maths tutor Nagda",
    "IB Physics tutor Nagda",
    "IB Chemistry tutor Nagda",
    "IB Biology tutor Nagda",
    "IB DP tutor Nagda",
    "IB MYP tutor Nagda",
    "IB PYP tutor Nagda",
    "IGCSE online tuition Nagda",
    "Cambridge IGCSE tutor Nagda",
    "IB tutor Birlagram",
    "IB tutor Khachrod",
    "online IGCSE tutor Ujjain district",
    "IB tutor Nagda Madhya Pradesh",
    "Edexcel IGCSE tutor Nagda",
  ],

  heroTrustPoints: [
    "Live, one-to-one lessons with a tutor picked for the syllabus and not for the address",
    "Nobody visits homes in Nagda; in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    "A free trial lesson is offered before any fee is agreed",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and any school mentioned here",
  ],
  heroStats: [
    { value: "Township to screen", label: "Lessons reach Birlagram and beyond" },
    { value: "PYP to DP", label: "The whole IB path" },
    { value: "IST", label: "Same time as your tutor" },
    { value: "Free trial", label: "No cost to start" },
  ],

  intro: {
    heading: "A Chambal-side industrial town and the international syllabus",
    paragraphs: [
      "Nagda sits on the Chambal in Ujjain district, a railway junction on the Delhi-Mumbai mainline and home to one of Asia's largest viscose staple fibre plants, run by Grasim. Around 100,000 people live here, many linked to the Birla township and its schools, chemical and power units and railway staff. Aditya Birla Public School and Fatima Convent are among the established names, and the boards are CBSE, ICSE and Madhya Pradesh Board. We could not confirm an IB or Cambridge or Edexcel IGCSE school in Nagda.",
      "Such a town sends and receives families. Managers and engineers arrive on transfer from Mumbai, Bengaluru or overseas, often with children who studied IB or IGCSE before. Others leave for postings abroad and want the child ready for an international school. Both groups look for private home tuition and find that nothing local matches.",
      "Tutors for these syllabuses are simply not resident in a town this size. IB and IGCSE tutors in Nagda are therefore found elsewhere in India and taught live, so a child in Birlagram or the old town can work with someone who taught the same course last term.",
      "Plainly, then: no tutor visits homes in Nagda. Lessons are private and take place at home, on a laptop. And none of them will write assessed work such as an IA, Extended Essay or TOK essay for a student.",
    ],
    bullets: [
      "Continuity for families transferred to or from Nagda",
      "Cambridge and Edexcel IGCSE by paper code",
      "IB support from PYP to the Diploma",
      "Slots that respect plant shifts and school hours",
      "Online only here: no in-person visits",
    ],
  },

  programmesIntro:
    "Nagda has no school we could verify for any IB stage. Families meet the programmes through a transfer, a boarding place in Indore, Bhopal or further away, or a decision to go international after the local Class 10. Each stage tends to look like this.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery through Class 5, ages 3-12",
      description:
        "Children learn through six themes and finish primary school with a self-directed Exhibition. With no outside exam, tutoring keeps reading, writing and number sense strong and encourages a child to investigate.",
      countryNote:
        "A Nagda PYP request usually comes from a transferred family whose child is mid-way through the programme and needs the new house and school settled.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 through 10, ages 11-16",
      description:
        "Subjects are graded on criteria such as knowing, investigating, communicating and reflecting, and a Personal Project completes the final year. Moving beyond textbook answers is usually the hardest step.",
      countryNote:
        "MYP tutoring tied to Nagda often supports a child at an Indore or out-of-state school who spends holidays at home in the township.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Students take six subjects and add Theory of Knowledge, an Extended Essay and CAS. Internal assessment counts towards each subject, and exams fall in May or November.",
      countryNote:
        "With no Diploma school in the town, local students study elsewhere, and online lessons cover holidays, weak topics and internal assessment deadlines.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Diploma courses are paired with a career-related qualification and a reflective project. Few Indian schools run it, so our help is directed at the Diploma subjects inside it.",
      countryNote:
        "Almost no CP interest comes from Nagda; where it does, tutoring is on the Diploma courses only.",
    },
  ],

  subjectsIntro:
    "A plant engineer's child revising IB Physics HL and a Class 6 pupil meeting MYP Design for the first time need very different hours. We start with subject, level and the next assessment, then look for the tutor who has taught exactly that.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, the usual choice for engineering-bound students; setting out reasoning is the skill most often missing." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, aimed at students who want business, economics, life science or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Fluency with the data booklet and clear explanations under time pressure lift more marks than extra content." },
    { name: "IB Chemistry", levels: "HL / SL", description: "A natural fit for chemical-industry households; organic mechanisms and the investigation report are where guidance pays off." },
    { name: "IB Biology", levels: "HL / SL", description: "A broad course won through retrieval practice and precise use of command terms." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design cycle, materials and a design project, with clear links to engineering and manufacturing careers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams linked to industry and trade examples, then policy evaluation at HL." },
    { name: "IB Business Management", levels: "HL / SL", description: "Strategy, finance and operations judged through case studies." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, systems and, at HL, a pre-released case study." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Close reading and comparative commentary developed through timed writing." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing and oral work for students who want Hindi assessed." },
    { name: "IB Geography", levels: "HL / SL", description: "River basins such as the Chambal, urban growth and industry provide handy case studies." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Pollution, resources and sustainability, with industrial river-basin examples available close to home." },
  ],

  igcseSubjectsIntro:
    "Nagda has no confirmed IGCSE school, so demand comes from transferred families, children at a school elsewhere and students adding Cambridge or Edexcel content to CBSE, ICSE or MP Board study. The paper code leads every plan.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended reaches beyond the Class 10 syllabus in algebra and trigonometry, and full working earns marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, calculus and vectors as a bridge to Diploma Maths or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling and the alternative to practical paper get their own drills." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, industrial processes and organic chemistry with exam-style practice." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecology and human physiology answered in the exact terms of the mark scheme." },
    { name: "IGCSE Design and Technology 0445", levels: "Grade 9-10", description: "A suitable pairing for engineering families, covering design projects and materials." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Core economic ideas with evaluation and Indian examples." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python, pseudocode, networks and data." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary practised on unseen passages." },
  ],

  regionsTitle: "Nagda and nearby places we teach online",
  regionsIntro:
    "Lessons run on video, so the places below give context on school catchments and evening routines, and on where the closest confirmed international campuses lie.",
  regions: [
    { name: "Birlagram", note: "The planned township tied to the Grasim plant, with company housing and long-established schools, and the home of many transferred families." },
    { name: "Nagda Junction", note: "The railway side of town, home to railway staff and traders whose children often attend CBSE or MP Board schools." },
    { name: "Old Nagda", note: "The older residential and market area near the Chamunda Mata temple, with settled local families." },
    { name: "Birla Mandir area", note: "A quieter residential belt where township families often gather, and where broadband is dependable." },
    { name: "Chambal riverside", note: "The riverside settlements on the Chambal, with a mixed population and a few industrial workers' colonies." },
    { name: "Khachrod", note: "A nearby town with a market and agricultural families who look to Ujjain or Indore for schooling." },
    { name: "Mahidpur", note: "A smaller town on the road towards Indore, where online options are attractive because local specialists are few." },
    { name: "Badnagar", note: "A town on the Ujjain side, with families mixing farm, trade and government jobs." },
    { name: "Ujjain", note: "The nearest large city, about an hour away, hosting the Simhastha Kumbh expected in 2028." },
    { name: "Indore", note: "The commercial capital of Madhya Pradesh, roughly 110 km away, where the nearest confirmed IB and IGCSE campuses stand." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Nagda, so the strip above is empty. The schools below are in other cities and appear only so families can see where physical campuses exist. IB Gram is independent and unconnected to any of them.",
  schoolClusters: [
    {
      city: "Nearby: Indore, central and south",
      note: "Indore is the closest large city with confirmed international schools, reached by road or rail from Nagda in roughly two hours.",
      schools: ["Choithram International School", "Daly College"],
    },
    {
      city: "Nearby: Indore, Rau and AB Road",
      note: "A second Indore corridor with a confirmed Cambridge school, favoured by families comparing day and boarding options.",
      schools: ["The Emerald Heights International School"],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital has a confirmed international school on its western edge, a further option for families considering a boarding move.",
      schools: ["Shrewsbury International School India"],
    },
  ],

  modesIntro:
    "Everything in Nagda happens on video with one tutor and one student. You decide how often, how hard and how much follow-up.",
  modes: [
    {
      title: "Standing weekly slot",
      description: "One fixed hour, sometimes two, set around school and the family's shift patterns.",
      bullets: [
        "Tutor selected for the course, not for the postcode",
        "IB, Cambridge and Edexcel covered",
        "Past papers marked live with the student",
        "One tutor for the whole term",
      ],
    },
    {
      title: "Weekly slot with a written record",
      description: "The same lessons, plus a summary after each and a review conversation every few weeks.",
      bullets: [
        "Notes list topics and homework",
        "Parents can follow without sitting in",
        "Good for younger MYP and PYP children",
        "Extra sessions before mocks are easy to add",
      ],
    },
    {
      title: "Break-time intensives",
      description: "Concentrated blocks during Diwali, winter or summer breaks, with sessions outside the hottest Malwa hours.",
      bullets: [
        "Timed papers, quick feedback",
        "Useful for boarders home for the vacation",
        "Best booked a few weeks ahead",
        "Works around Dhol Gyaras and festival days",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Nagda asks for IB and IGCSE support, and why?",
      paragraphs: [
        "The town's character explains the pattern. Nagda is an industrial township with families on transfer, unlike the agricultural market towns nearby. A Grasim engineer posted from Gujarat or Karnataka, a railway officer from another zone, a doctor at a company hospital: all arrive with children whose previous school may have followed a different board.",
        "Some families are outbound. A manager expecting a posting abroad wants a child comfortable with an international syllabus before an overseas school is chosen. Others are local business families who see the IB or IGCSE as a way to keep a child's options open.",
        "Without a school in town, none of these families can walk to a class. Indore offers confirmed international schools, but a daily commute of about 110 kilometres is out of the question, so boarding or online tuition are the realistic paths.",
        "Because the IB and Cambridge examine every candidate to one standard, a child taught from Bengaluru or Pune sits the same paper as one taught in a metro classroom.",
      ],
      table: {
        caption: "Family types and what they usually need in Nagda",
        columns: ["Family", "Typical situation", "How tutoring helps"],
        rows: [
          ["Transferred into Nagda", "Child mid-course in IB or IGCSE, new school with a different board", "Keeps the original syllabus going while the family settles"],
          ["Transferred out or abroad", "Child preparing for an international campus", "Builds the skills the new school will expect"],
          ["Local business families", "Interest in study abroad after Class 12", "IGCSE or Diploma-style preparation at home"],
          ["Boarders in Indore or elsewhere", "Home only in vacations", "Holiday intensives with timed papers"],
        ],
      },
    },
    {
      heading: "Is the switch from CBSE, ICSE or MP Board to IGCSE or IB hard?",
      paragraphs: [
        "It depends on the starting point. ICSE students, used to English and longer answers, usually find IGCSE the smoothest move. CBSE students face a moderate change, because NCERT already stresses concepts. MP Board students often have to build written scientific English at the same time as new content.",
        "The IB Diploma is a bigger step than IGCSE. Beyond six subjects, it demands an Extended Essay, Theory of Knowledge and CAS, plus internal assessments that are marked externally. Independence is the theme.",
        "Timing matters more than board. Most families find Grade 9 the right point to move to IGCSE, and Class 11 the right one for the Diploma, with a term of preparatory tutoring beforehand.",
        "The table summarises differences that matter to a Nagda family.",
      ],
      table: {
        caption: "MP Board, CBSE, ICSE, IGCSE and IB Diploma at a glance",
        columns: ["Feature", "MP Board", "CBSE", "ICSE", "IGCSE / IB"],
        rows: [
          ["Style", "Textbook recall and procedure", "Concept and application", "Broad, English-heavy", "Reasoning and extended writing"],
          ["Entrance link", "State exams, NEET, JEE", "JEE, NEET, CUET", "JEE, NEET, CUET", "A Level, IB, overseas, AIU equivalence"],
          ["Local schools", "Many", "Several, including township schools", "Convent schools", "None confirmed in Nagda"],
          ["Ease of switching", "Needs English writing practice", "Moderate", "Smoothest", "Best in Grade 9 or Class 11"],
        ],
      },
      bullets: [
        "ICSE students usually find IGCSE the easiest move",
        "The Diploma asks for independence and long-form writing",
        "Grade 9 and Class 11 are the natural switch points",
        "A diagnostic lesson helps decide",
      ],
    },
    {
      heading: "What does an hour with an IB or IGCSE tutor cost in Nagda?",
      paragraphs: [
        "There is no published price list. Rates depend on the subject, the level, how many hours a week you want and how experienced the tutor is, and you get the figure in writing before your child attends the free trial.",
        "Higher Level Diploma Maths, Physics and Chemistry sit above general support, because fewer tutors have taught them recently. Someone who has examined for the IB, or taught Cambridge Extended for years, charges more than a recent graduate.",
        "A Nagda family is usually comparing with one alternative, which is boarding in Indore or coaching in a bigger city. That brings hostel fees, travel and a child living away from home. Online lessons remove all three.",
        "If you want a quote, message the programme, subject, level and hours you have in mind.",
      ],
    },
    {
      heading: "Online tutor, coaching class, local teacher or self-study: which fits Nagda?",
      paragraphs: [
        "Nagda and the wider Ujjain district offer plenty of coaching for state boards, JEE and NEET. None we know of covers IB or Cambridge. A private teacher may be good at general Maths but unfamiliar with the IB guide or Cambridge specification.",
        "Self-study is possible for a disciplined student, but written answers need marking, and that is where marks are usually lost.",
        "An online one-to-one tutor combines specialist knowledge with a flexible slot. The requirement is a stable connection and a quiet room, which are worth checking before the first lesson.",
        "The table lays out the differences.",
      ],
      table: {
        caption: "Ways to prepare for an international syllabus from Nagda",
        columns: ["Route", "Syllabus knowledge", "Scheduling", "Limit"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact course", "Agreed with the family", "Needs stable internet"],
          ["Coaching class", "MP Board, JEE and NEET", "Fixed batches", "No IB or IGCSE teaching that we could confirm"],
          ["Local private teacher", "General subjects", "Flexible", "May not know the specification"],
          ["Self-study", "Depends on the student", "Any time", "Written answers go unmarked"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do Malwa's seasons fit?",
      paragraphs: [
        "IB Diploma exams run in May and November. Cambridge IGCSE has February-March, May-June and October-November series, and Pearson Edexcel International GCSE runs in January, May-June and October-November. Results follow within weeks or months. Private candidates should confirm centres and entry dates early.",
        "Malwa summers are hot and dry, so afternoons in April to June are poor for study, while the monsoon brings relief and a new school year from July. Winters are pleasant, which makes December and January good for longer sessions.",
        "The festival calendar has a local twist. Dhol Gyaras, with its processions of decorated mobile temples, fills the town's evenings, and Diwali brings the main break. The next Simhastha in Ujjain, expected in 2028, will draw very large crowds into the district and may disrupt travel and routines.",
        "The table is for planning only. Always confirm dates with your school or exam centre.",
      ],
      table: {
        caption: "A study calendar for Nagda",
        columns: ["Months", "What is happening", "Study advice"],
        rows: [
          ["December to February", "Pleasant weather; Edexcel January series; IGCSE February-March; MP Board and CBSE exams", "Good for longer sessions and mocks"],
          ["March to June", "Heat builds; IB May exams; Cambridge summer series", "Mornings and evenings; avoid afternoons"],
          ["July to September", "Monsoon; new school year; Dhol Gyaras period", "Set the weekly routine now"],
          ["October to November", "Diwali; IB and Cambridge November series", "Vacation intensives before and after the festival week"],
        ],
      },
    },
    {
      heading: "Where do Nagda students go after IB or IGCSE?",
      paragraphs: [
        "Most local graduates study in Indore, Bhopal, Ujjain or a metro, and some go abroad. IB Diploma holders apply to Indian universities through the Association of Indian Universities' equivalence process, and overseas on predicted and final grades.",
        "Cambridge or Edexcel IGCSE results normally lead into A Levels or the Diploma, and some Indian institutions accept them for Class 10 equivalence. Each publishes its own rules.",
        "For medicine and engineering, NEET and JEE follow the Indian syllabus, so IB or IGCSE students must prepare separately and check the subject rules. CUET-UG opens central universities, and students apply through it like anyone else. Vikram University at Ujjain serves the district for local degrees.",
        "Families linked to the chemical and fibre industry often steer children towards engineering, chemistry and management. IB Chemistry, Physics and Maths line up well with those paths.",
      ],
      bullets: [
        "Confirm AIU equivalence for each Indian university",
        "NEET and JEE need separate Indian-syllabus preparation",
        "CUET-UG serves central-university applicants",
        "Overseas applications use IB or A Level grades",
      ],
    },
    {
      heading: "IB Maths, Physics and Chemistry: which combination for an engineering household?",
      paragraphs: [
        "Analysis and Approaches at Higher Level, with Physics and Chemistry, is the standard combination for engineering and applied science. Applications and Interpretation suits students leaning towards management, economics or life sciences.",
        "Design Technology, unusual in Indian schools, is well worth asking about for a family in manufacturing. It links design cycles, materials and prototyping with the engineering mindset.",
        "In any of these subjects, the internal investigation should begin early. A tutor can help refine a question and check a method, but the data, analysis and write-up have to be the student's own.",
      ],
    },
    {
      heading: "IGCSE tiers and subject choices for Nagda students",
      paragraphs: [
        "Cambridge offers Core and Extended tiers in Maths and the sciences. Core is capped at grade C; Extended reaches A*. A student who wants A Level, the IB Diploma or a science career should take Extended.",
        "Most students sit six or seven subjects: English, Maths, two sciences, a language and one or two options such as Design and Technology, Economics or Computer Science.",
        "Cambridge and Pearson Edexcel papers differ, so a student sits one board's papers per subject, and tutoring follows that board.",
        "The free trial doubles as a diagnostic, and its result usually settles the tier.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors already teach IB PYP to Diploma courses and Cambridge or Edexcel IGCSE to Indian families online. Each match is built around the syllabus, level and exam series your child is working toward.",

  process: [
    { title: "Tell us what you need", description: "Board or programme, subject, current marks, and the hours that fit around school and shift work." },
    { title: "See who we suggest", description: "One or two tutors, each explained in a few lines so you can see why they fit the course." },
    { title: "Try a free lesson", description: "A live hour on a real topic; there is no obligation afterwards." },
    { title: "Approve a first month", description: "The tutor sets out topics and pace, you sign off or amend, and the fee is written down." },
    { title: "Carry on or change", description: "A regular slot, short reports after sessions and an easy swap of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Selected for the course", description: "Tutors are chosen because they have taught the exact IB subject or Cambridge code." },
    { title: "Made for towns without an IB school", description: "Nagda has none we could verify, so we search across India." },
    { title: "Judge before paying", description: "The free lesson tells you what the teaching is like." },
    { title: "The student's work stays theirs", description: "Tutors never write an IA, Extended Essay or TOK essay." },
    { title: "Reports you can follow", description: "A note after each session and a review every few weeks." },
    { title: "Free to leave", description: "Rates are written down in advance, and no contract holds you." },
  ],

  faqs: [
    { question: "How do I get an IB tutor in Nagda?", answer: "Write to us with the programme, subject, level and the exam you are aiming at. Nagda has no IB school we could verify, so we look nationwide for someone who taught that course lately. You receive a short list, a free trial and a written first-month plan. The lesson is live and one-to-one, at an hour fitted to your household." },
    { question: "Will the tutor visit our house in Nagda or Birlagram?", answer: "No. IB Gram tutors do not visit homes in Nagda, Birlagram or anywhere outside Gurugram and parts of Delhi NCR. In Nagda, private home tuition means lessons your child takes at home over video, alone with the tutor. It keeps the familiar setting of a home study without the wait for a specialist." },
    { question: "Are IGCSE tutors available in Nagda?", answer: "Yes, for Cambridge and Pearson Edexcel, online. We pick the tutor for the paper code and tier, for example 0625 Physics Extended or 0445 Design and Technology. Students may be at a school elsewhere, moving with a transfer, or sitting papers privately. The free first lesson is used as a diagnostic." },
    { question: "How much does IB or IGCSE tuition cost in Nagda?", answer: "It depends on the subject, level, session length, weekly hours and tutor experience, and you receive the rate in writing before the free trial. No price list is published. Higher Level Diploma courses generally cost more than junior support. Online lessons avoid hostel, travel and living costs that come with moving a child to Indore." },
    { question: "Is there an IB or IGCSE school in Nagda?", answer: "None that we could confirm. Nagda's schools work to CBSE, ICSE or the MP Board, including township schools such as Aditya Birla Public School and the convent schools. The nearest confirmed international campuses are in Indore. If a local school has recently been authorised, tell us and we will check the official listing." },
    { question: "My child is in a CBSE school. Can they add IGCSE-level Maths or Science?", answer: "Yes, and it is a reasonable step. NCERT-trained students already know many concepts, and the main change is in how answers are written: Cambridge rewards working and reasoning set out in full. A tutor starts with that habit, then extends content to Extended tier. A diagnostic hour shows the load." },
    { question: "Can we try a lesson first?", answer: "Yes. Each match begins with a free lesson on a real topic from your child's syllabus. Afterwards the tutor sends a plan for the first month and you decide. If your child does not click with the tutor, we suggest another. Rates are in writing beforehand, so nothing is left to guess." },
    { question: "Will the tutor write the Internal Assessment or Extended Essay?", answer: "No. Tutors never write an IA, Extended Essay, TOK essay or coursework. They explain the criteria, talk over whether a question is workable, help plan a method and give feedback on the student's own drafts. Authorship stays with the student, as the IB and Cambridge require." },
    { question: "Which Diploma subjects can you cover?", answer: "Maths in both courses at HL and SL, Physics, Chemistry, Biology, Design Technology, Economics, Business Management, Computer Science, Geography, Environmental Systems and Societies, English A and Hindi B. If your subject is not listed, ask, and we will tell you promptly whether a tutor is available." },
    { question: "Do you offer MYP and PYP tuition?", answer: "Yes. MYP tuition centres on criteria-marked tasks in the sciences, maths and languages and on the Personal Project journal. PYP tuition builds reading, writing and number sense and assists with unit work. Younger pupils do best with shorter sessions and a parent close by in the early weeks." },
    { question: "Can a screen replace a classroom for these subjects?", answer: "In Nagda it is the workable route, since no specialist lives locally. A shared whiteboard, past papers marked as the student watches and written reports give most of what a classroom offers. The real requirements are a reliable connection and a quiet corner of the house." },
    { question: "What happens when a power cut or plant shift disrupts a lesson?", answer: "Tell the tutor as early as possible and the lesson moves, usually within a day or two. A phone hotspot and a charged laptop are sensible backups. A fixed weekly slot, chosen around shift timings and school hours, makes rearranging simple." },
    { question: "How are tutors chosen?", answer: "We check degrees, the most recent classes taught in the exact subject and level, and how the tutor uses mark schemes and criteria. A sample lesson comes first. The trial with your child is the test that matters, and if it does not work we replace the tutor." },
    { question: "When should a Nagda student start?", answer: "The earlier in the course the better: Class 11 for the Diploma, Grade 9 for IGCSE, Year 4 for MYP. Early starts leave room to fix gaps before internal deadlines and mocks. If the exam is near, a compact block still helps; tell us the date in your first message." },
    { question: "Is Hindi supported for the IB and IGCSE?", answer: "Yes. IB Hindi B is offered at Standard and Higher Level, and Cambridge IGCSE Hindi as a second language is covered as well. Tell us the level and exam session and we will confirm the tutor before the trial. English writing support is also available for students who studied in Hindi medium." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no affiliation, endorsement or payment link with the IB, Cambridge, Pearson Edexcel or any school on this page, including the township and convent schools named. Names appear only to help families see where campuses are." },
    { question: "What is the first step?", answer: "Send the programme, subject, level, current grade and free hours to support@ibgram.com or WhatsApp +91 7439 368 115. You will need a laptop or tablet with camera and microphone and a steady connection. We usually reply within one working day with a shortlist and trial times." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works for cities without a local IB school." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where tutors do visit homes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Tiers, boards, subjects and sessions." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, TOK, Extended Essay and CAS." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Comparing the two IB Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your details and request a free lesson." },
    { label: "Tutoring in Ujjain", href: "/ujjain/", description: "The district's largest city, an hour from Nagda." },
    { label: "Tutoring in Indore", href: "/indore/", description: "The nearest confirmed IB and Cambridge campuses." },
    { label: "Tutoring in Ratlam", href: "/ratlam/", description: "The neighbouring railway city, also served online." },
  ],

  closingHeading: "Request a free lesson for your Nagda student",
  closingBody:
    "Send the board or programme, subject, level, current marks and the hours the household can offer. You will hear back with a tutor, a note on their background and trial times, all online and without a fee.",
};
