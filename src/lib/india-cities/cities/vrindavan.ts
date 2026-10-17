import type { CitySeoPage } from "../types";

/**
 * /vrindavan/ - IB and IGCSE tutoring page for Vrindavan, Mathura district, Uttar Pradesh.
 * Online-only delivery. No IB or Cambridge school was confirmed in Vrindavan or Mathura, so stripSchools
 * is empty and the clusters are honestly labelled nearby cities already named on sibling pages.
 */
export const vrindavan: CitySeoPage = {
  slug: "vrindavan",
  countryName: "Vrindavan",
  countryNameLong: "Vrindavan, Uttar Pradesh",
  demonym: "Vrindavan",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times bend around the pilgrim crowds of Holi, Janmashtami and Kartik, the Yamuna-side monsoon and the winter fog of Braj, and a child's own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.5806, longitude: 77.6996 },
  wikipedia: "https://en.wikipedia.org/wiki/Vrindavan",
  alternateNames: ["Vrindaban", "Brindavan", "Vrindavana", "Brindaban", "Vrindavan Mathura"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Vrindavan | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Vrindavan students: live one-to-one online home tuition that works around pilgrim seasons, with a free trial lesson to begin.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Vrindavan",
  heroEyebrow: "IB & IGCSE HOME TUITION ONLINE FOR VRINDAVAN STUDENTS",
  heroSubtitle:
    "Home tuition for an IB or IGCSE student in Vrindavan means a live lesson on your own laptop, with a tutor who joins from elsewhere in India. The town sits on the Yamuna, a short drive from Mathura, and its households are unusually varied: long-settled temple families, ashram residents, teachers, traders, and families from abroad who have made Braj their base. Whatever brought a child to an international syllabus, a private online tutor is the quickest route to a specialist.",
  primaryKeyword: "IB and IGCSE tutors in Vrindavan",
  imageAltText: "A Vrindavan student at a desk near a courtyard window preparing for IB Biology with an online tutor",
  secondaryKeywords: [
    "IB tutor Vrindavan",
    "IGCSE tutor Vrindavan",
    "IB home tuition Vrindavan",
    "IGCSE home tuition Vrindavan",
    "IB private tuition Vrindavan",
    "IB Maths tutor Vrindavan",
    "IGCSE Maths tutor Vrindavan",
    "IB Physics tutor Vrindavan",
    "IB Chemistry tutor Vrindavan",
    "IB Biology tutor Vrindavan",
    "IB DP tutor Vrindavan",
    "IB MYP tutor Vrindavan",
    "IB PYP tutor Vrindavan",
    "IGCSE online tuition Vrindavan",
    "IB tutor Mathura",
    "IGCSE tutor Mathura",
    "IB tutor Brindavan",
    "online IB tutor Braj",
    "IB tutor Chhatikara Road",
  ],

  heroTrustPoints: [
    "Tutors are chosen for your child's exact IB course or IGCSE syllabus code",
    "Lessons happen online; in-person home visits run only in Gurugram and parts of Delhi NCR",
    "One complete trial lesson is free and carries no obligation",
    "No affiliation with the IB, Cambridge, Pearson Edexcel, ISKCON institutions or any school mentioned",
  ],
  heroStats: [
    { value: "Online", label: "Private lessons at home on a laptop" },
    { value: "PYP to DP", label: "IB from primary to Diploma" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "Private IB and IGCSE lessons for families in a pilgrimage town",
    paragraphs: [
      "Vrindavan is known worldwide for its temples and its Krishna devotion, yet the people who live here are more varied than the pilgrim image suggests. Some families have been in Braj for generations, some work in the temple and hospitality economy, some teach or run small businesses in Mathura, and a number are international households who came for spiritual reasons and stayed to raise children. An international curriculum tutor is a practical need for several of these households, and this page is written for them.",
      "Nothing in the usual school landscape here prepares a child for IB or IGCSE. Local schools follow the Uttar Pradesh board or CBSE, and we could not confirm a school in Vrindavan or neighbouring Mathura that offers either international curriculum. That shapes how tutoring is used: to bridge a child into a new school, to keep an IB or IGCSE course going after a family relocates here, or to support a boarder during holidays.",
      "Tutors do not come to your home in Vrindavan. In-person home tuition runs only in Gurugram and parts of Delhi NCR, about two and a half hours away by the Yamuna Expressway. A Vrindavan family gets online home tuition instead, which means one tutor and one student, live, with the child seated at home and a whiteboard shared on screen.",
      "IB Gram is independent. It has no link with the IB, Cambridge, Pearson Edexcel or any school or ashram named on this page, and its tutors coach without ever writing an Internal Assessment, Extended Essay, TOK essay or coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and DP, plus Cambridge and Edexcel IGCSE, taught one to one",
      "English-medium lessons with explanations in Hindi when they help",
      "Sessions planned around festival weeks and pilgrim traffic",
      "Free first lesson, then rates agreed in writing",
    ],
  },

  programmesIntro:
    "The four IB stages matter to Vrindavan families in different ways. A child may have completed PYP abroad, be mid-way through MYP at a boarding school, or be preparing for Diploma subject choices. Here is how each stage tends to appear for a household based in Braj.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "Learning is organised around big themes and the learner's own questions, not daily textbook chapters. A tutor strengthens reading, writing and number work while keeping the inquiry style, so that curiosity is not lost when a child changes school.",
      countryNote:
        "PYP learners in Vrindavan are often children of international or returning families whose earlier school ran the programme, so sessions frequently begin by matching English reading level and number fluency.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, four assessment criteria per subject, interdisciplinary units and a Personal Project at the end. The hardest shift for many students is from learning facts to writing a reasoned response that is marked against a rubric.",
      countryNote:
        "MYP support from Vrindavan commonly serves a boarding student home for the long winter or summer break, or a child whose family moved to Braj halfway through the programme.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, with the Extended Essay, Theory of Knowledge and CAS as the core. Most exams fall in May; internal assessments are completed across the two years.",
      countryNote:
        "No Diploma school is confirmed in Vrindavan, so tutoring tracks the calendar of the school a student attends elsewhere, often in Delhi NCR or another boarding city.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take Diploma courses alongside a career-related study, with reflective work and service learning. It suits learners who prefer a practical direction, such as hospitality, design or business.",
      countryNote:
        "CP is uncommon in north India, so a Vrindavan enquiry is usually about a specific Diploma course inside the student's CP mix, such as Business Management or English.",
    },
  ],

  subjectsIntro:
    "Every tutor match starts from the course, the level and the exam session. Below are the IB subjects most often asked about by Braj families, with the parts of each course that usually need help.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, sequences and algebraic proof for students heading to engineering or science courses." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistical modelling, financial mathematics and technology-supported problem solving for students in commerce and life sciences." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with derivations practised slowly before timed questions." },
    { name: "Chemistry", levels: "SL / HL", description: "Quantitative chemistry, equilibrium and organic reactions, taught with worked examples and structured answers." },
    { name: "Biology", levels: "SL / HL", description: "Molecular biology, genetics and ecology, with data-response questions and extended writing." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems thinking and case studies, a natural fit for students living on the Yamuna floodplain." },
    { name: "Economics", levels: "SL / HL", description: "Micro and macroeconomic models with evaluation, using current examples from Indian and global markets." },
    { name: "Business Management", levels: "SL / HL", description: "Organisational structure, marketing and finance, with case analysis written in the examination style." },
    { name: "History", levels: "SL / HL", description: "Source analysis and essay planning across the twentieth-century topics the IB commonly offers." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparative essays and the individual oral, with attention to argument and voice." },
    { name: "Hindi B", levels: "SL / HL", description: "Comprehension, writing tasks and spoken fluency, useful for international students learning Hindi in Braj." },
    { name: "Sanskrit and classical languages", levels: "Self-taught", description: "School-supported self-taught language pathways are discussed at the trial stage, since they depend on the student's own school." },
    { name: "Visual Arts", levels: "SL / HL", description: "Process journal guidance and critical discussion of the comparative study, with feedback but no production of the student's work." },
    { name: "Theory of Knowledge", levels: "Core", description: "Knowledge questions, real-life situations and exhibition planning, coached without writing the student's essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE students in Vrindavan are usually preparing for entry to an international school or keeping up a Cambridge or Edexcel course begun elsewhere. Tutors work from the syllabus code and the exam series the student will sit.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with clear working shown so method marks are secured." },
    { name: "IGCSE Additional Mathematics", levels: "Class 10", description: "A step towards calculus and vectors for students aiming for IB Analysis and Approaches or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity and waves, with extra time on rearranging equations and reading graphs." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atomic structure, reactions and organic chemistry, with practical-skills questions included from the start." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecosystems, with practice at writing precise extended answers." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "A single science award covering all three subjects, often chosen by students who will not specialise." },
    { name: "IGCSE English First Language", levels: "Class 9-10", description: "Writers' effects, summary and directed writing, for students who have studied in English throughout." },
    { name: "IGCSE English as a Second Language", levels: "Class 9-10", description: "Reading, writing, listening and speaking, suited to students from Hindi-medium homes or international backgrounds." },
    { name: "IGCSE Hindi as a Second Language", levels: "Class 9-10", description: "Comprehension and composition, well suited to students who use Hindi daily in Braj." },
    { name: "IGCSE Business Studies", levels: "Class 9-10", description: "Business activity, marketing and finance, with case-based answers to the scenario in the paper." },
  ],

  regionsTitle: "Vrindavan and the Braj neighbourhoods we support",
  regionsIntro:
    "A private online tutor reaches any address with a steady connection. These are the Vrindavan and Mathura-side areas families mention most, with notes on daily life that affect lesson timing. None is claimed here to hold an IB or Cambridge school.",
  regions: [
    { name: "Parikrama Marg", note: "The circular pilgrim route around the town. Crowds on festival days make travel slow, which is a reason families prefer online lessons in those weeks." },
    { name: "Raman Reti", note: "An area near the Yamuna with a large ashram and international presence. Sessions are often booked around family and temple routines." },
    { name: "Loi Bazaar and the old town", note: "Dense lanes with temples and small businesses. Sound from processions can interrupt, so a quiet room and headphones help." },
    { name: "Chhatikara Road", note: "The main road between Vrindavan and Agra-Delhi traffic, with newer residential colonies. Commutes to Mathura or Agra schools are a daily reality here." },
    { name: "Chaitanya Vihar", note: "A residential colony popular with families who settled in the last few decades, and one of the areas where tuition is commonly requested." },
    { name: "Akrur and the Vrindavan-Mathura stretch", note: "Families here are between two towns and often choose a school in Mathura. A tutor helps when the school change is to a CBSE or international board." },
    { name: "Mathura Refinery township", note: "A petroleum-sector township near Mathura whose households are used to transfers and to children switching boards when a job moves." },
    { name: "Krishna Nagar and Govind Nagar, Mathura", note: "Mathura colonies where parents with professional jobs often ask about international curricula for their children." },
  ],

  schoolClusters: [
    {
      city: "Vrindavan and Mathura",
      note: "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school in Vrindavan or Mathura. Local options are limited to state board and CBSE schools, so check any school's current curriculum directly.",
      schools: [],
    },
    {
      city: "Nearby: Agra",
      note: "Around ninety kilometres away, Agra is the closest city with a school we have seen referenced for international options on our sibling pages.",
      schools: ["Sharda World School"],
    },
    {
      city: "Nearby: Noida and Greater Noida",
      note: "Reachable by the Yamuna Expressway, this belt has IB schools that Braj families consider for day or boarding places.",
      schools: ["Genesis Global School, Noida"],
    },
    {
      city: "Nearby: Gurugram, Delhi NCR",
      note: "Gurugram has the densest concentration of IB and Cambridge schools within a day's travel of Vrindavan, and it is also where in-person home tuition is offered.",
      schools: ["Pathways World School", "GD Goenka World School", "Lancers International School"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to show where international curricula can be found near Vrindavan. IB Gram is not affiliated with, endorsed by or paid by any school, so admission rules and curriculum offers should be checked with the school itself.",

  tutorsIntro:
    "Tutors teach from different cities in India, all on Indian Standard Time, so there is no offset to manage. Each profile states programme, subject, level and teaching experience, and the first lesson is free.",

  modesIntro:
    "Every format is a live lesson with one tutor and one student. The choice is about how much structure a family wants. Because visits to homes in Vrindavan are not offered, all three run online, and in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A steady weekly lesson at a fixed hour, taken at home on a laptop. It suits students who need regular support through the school year and who like a predictable routine.",
      bullets: [
        "Same tutor for the whole term",
        "Shared whiteboard for worked solutions",
        "Short written summary after each lesson",
      ],
    },
    {
      title: "Festival-aware flexible plan",
      description:
        "Lessons are moved around Holi, Janmashtami and the Kartik month, when the town is crowded and families travel. Sessions are shifted rather than cancelled so momentum is kept.",
      bullets: [
        "Catch-up slots booked before busy weeks",
        "Shorter sessions on pilgrim days if needed",
        "Plan reviewed every few weeks",
      ],
    },
    {
      title: "Holiday block for boarders",
      description:
        "Intensive lessons during winter and summer breaks for students who study away and return to Braj. The tutor sets the topics in advance using the school's syllabus.",
      bullets: [
        "Daily or alternate-day blocks",
        "Focus on topics the boarder found hardest",
        "Hand-over notes for the next term",
      ],
    },
  ],

  sections: [
    {
      heading: "What does a Vrindavan school year look like beside the IB and Cambridge calendars?",
      paragraphs: [
        "Vrindavan's year is unlike most Indian cities because the religious calendar rearranges daily life. Holi in Braj runs for days, Janmashtami fills the streets, and the month of Kartik draws pilgrims in large numbers. Schools close for some of these, and even when they do not, movement around the town becomes slow.",
        "IB Diploma papers are held in May, with results in early July, and some schools also run a November session. Cambridge IGCSE has a May to June and an October to November series. A tutor plans backwards from the session, so a Vrindavan student studying in another city does not lose a week to a festival that shuts the roads.",
        "Weather adds its own pattern. Summer from April to June is very hot, winter brings fog that delays travel and sometimes affects electricity, and monsoon raises the Yamuna. Online lessons remove the commute from each of these.",
        "The table below sets the year against these pressures, so a family can see where to place catch-up work and where to protect rest.",
      ],
      table: {
        caption: "Planning an IB or IGCSE year from Vrindavan",
        columns: ["Time of year", "Local pattern", "Academic focus"],
        rows: [
          ["July to September", "Monsoon and Janmashtami, with Radhashtami following", "New term foundations and steady weekly lessons"],
          ["October to November", "Kartik month, Diwali and Govardhan Puja", "Cambridge October series and mock preparation"],
          ["December to January", "Fog, cold and school holidays", "Holiday block for boarders, internal assessment drafts"],
          ["February to March", "Holi in Braj, often a week of festivities", "Protect revision time; book lessons before or after"],
          ["April to June", "Heat, then May exams", "Final papers, morning or evening lessons only"],
        ],
      },
    },
    {
      heading: "Why do international families and returning households in Braj look for IB and IGCSE tutors?",
      paragraphs: [
        "A number of Vrindavan households have lived or studied abroad, through family ties, ashram communities or work. Their children have often studied an international syllabus, and moving to Braj can mean switching to a school that offers something very different. A tutor provides continuity, because the subject and the method stay the same even when the classroom changes.",
        "Another group consists of Indian families who plan to send a child to an IB or IGCSE school in Delhi NCR or further afield. The child may be strong at Hindi-medium mathematics yet unfamiliar with English-language science papers. Tutoring closes that gap before an entrance test or the first term.",
        "Some families are simply curious about an international education, particularly parents who run businesses or work in professional roles in Mathura. They want to know whether the IB or IGCSE suits their child before they commit to moving or boarding, and a few trial lessons give them an answer.",
        "In every case the first conversation is about the child's current level and the target syllabus. That tells us whether a short bridge course or a long weekly plan is the better starting point.",
      ],
    },
    {
      heading: "Which international schools are near Vrindavan?",
      paragraphs: [
        "Vrindavan and Mathura themselves have few or no schools we could confirm for the IB or Cambridge and Edexcel IGCSE. The town has many educational institutions linked to religious study and a range of CBSE and state board schools, but that is a different matter. This page does not name any Vrindavan school as offering an international curriculum.",
        "For IB and IGCSE, families look to Agra, the Noida and Greater Noida belt, and Gurugram. Agra is the closest at roughly ninety kilometres. The Yamuna Expressway makes Noida and Greater Noida reachable in about two hours, and Gurugram a little longer.",
        "Boarding is the usual answer for Diploma years. A family may choose a school in Delhi NCR, in the Doon valley or elsewhere, and the student returns to Braj in holidays. Online tutoring then runs continuously, changing only the student's location.",
        "Before any move, ask the school about its authorisation, the year groups it takes and the entry test. A tutor can prepare your child for the test, whether it is English and Mathematics or subject-based.",
      ],
    },
    {
      heading: "UP board, CBSE, IB or IGCSE: how do they compare for a Vrindavan child?",
      paragraphs: [
        "The UP board and CBSE are the main local options, and both prepare children well for Indian entrance tests. IB and IGCSE are different in how they test and what they value. The table lays out the contrasts that matter most to a family deciding whether to add tutoring or switch boards.",
        "A child who is comfortable with recall and procedure will need to practise explanation, evaluation and application to do well in IB or IGCSE. Mathematics usually transfers well, while English and sciences need the most adjustment.",
        "Hindi speakers have an advantage in second-language papers, but they should not underestimate the amount of English reading needed for humanities and science subjects.",
      ],
      table: {
        caption: "UP board, CBSE, IB and IGCSE side by side",
        columns: ["Aspect", "UP board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Main exam style", "Written board papers", "Written board papers with competency questions", "Final exams plus internal assessments", "Subject papers, some with coursework"],
          ["Medium", "Hindi or English", "English or Hindi", "English mainly", "English mainly"],
          ["Entrance exam link", "Direct to state and national tests", "Direct to JEE, NEET and CUET", "Through equivalence and university applications", "Through A Level, IB or Class 11"],
          ["Who it suits", "Families staying in UP", "Families who may move across India", "Students with global plans", "Students planning A Level or IB next"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost in Vrindavan?",
      paragraphs: [
        "There is no published price list, and every rate is given in writing before a booking is confirmed. The more useful answer is to explain what raises or lowers the figure, so a family can plan a budget.",
        "The first factor is the course. A Higher Level Physics tutor who has taught the Diploma for years commands a different rate from a tutor helping with MYP Mathematics or IGCSE English. The second is frequency, since one lesson a week costs less per month than three a week near exams.",
        "Lesson length matters too. Many students do best with sixty minutes, but younger learners sometimes do better with forty-five. A family can also ask for a trial month and review it.",
        "Online lessons remove the travel cost and time that a Vrindavan household would face in going to Agra or Delhi NCR. The free first lesson allows a family to judge quality before any money changes hands.",
      ],
    },
    {
      heading: "Online tuition, local coaching, private tutors or self-study: which suits a Braj household?",
      paragraphs: [
        "Mathura and Vrindavan have coaching centres and home tutors for the state board and CBSE, and they serve local needs well. For IB and IGCSE, the options narrow quickly, since few local teachers have handled these syllabi.",
        "Online one-to-one lessons fill that gap, and they also avoid the problem of pilgrim traffic and the long road to Agra or Noida. The table below compares four routes.",
        "Self-study works well for revision once a student has a solid grasp of a topic. The problem is that mistakes in method go uncorrected, and IB and IGCSE mark schemes reward method heavily.",
      ],
      table: {
        caption: "Four study routes for an IB or IGCSE student in Vrindavan",
        columns: ["Route", "Strength", "Weak point", "Best for"],
        rows: [
          ["Online one-to-one tutoring", "Subject specialist, flexible timing, written notes", "Needs a reliable connection", "Students who need exact syllabus help"],
          ["Mathura or Vrindavan coaching centre", "Structured classes, nearby", "Focus on state board and CBSE, not IB or IGCSE", "Indian board preparation"],
          ["Local private tutor at home", "Face to face, familiar", "Few with international syllabus experience", "Younger students needing basic support"],
          ["Self-study with past papers", "Low cost, flexible", "No feedback on mistakes", "Revision after a topic is understood"],
        ],
      },
    },
    {
      heading: "What do universities expect from a Vrindavan IB or IGCSE student?",
      paragraphs: [
        "Indian universities treat the IB Diploma as equivalent to Class 12 through the Association of Indian Universities, and students can apply through CUET-UG or the university's own process. JEE and NEET have eligibility rules that should be read each year, especially for subject combinations.",
        "Many students from Braj households have connections abroad, and they look at universities in the UK, the US, Canada and Australia. IB Diploma scores and Higher Level subjects matter there, as do personal statements and references. A tutor helps the student reach the subject standard, while the application belongs to the student and the school counsellor.",
        "IGCSE students usually progress to A Level, the IB Diploma or Class 11 at an Indian board. The choice is made at the end of Class 10 and depends on the student's strengths and on the school available.",
        "Check eligibility and deadlines with each university directly, since rules change every year.",
      ],
    },
    {
      heading: "IB Mathematics and sciences for a student from Braj",
      paragraphs: [
        "IB Mathematics offers two courses, Analysis and Approaches and Applications and Interpretation, each at Standard or Higher Level. The first is algebra-heavy and suits future engineers and scientists. The second is data-driven and suits students in commerce, economics and life sciences.",
        "The sciences reward understanding over memorisation, and a student who can explain a mechanism in a sentence usually scores well. Tutors practise short, exact explanations, then build towards full problems and data analysis.",
        "Internal assessment in science is an investigation designed by the student. A tutor can guide the method, discuss error analysis and review the structure of a report, but the experiment, the data and the write-up must be the student's own.",
        "Students coming from Hindi-medium schools often need extra time with English scientific vocabulary, and a tutor keeps a glossary that builds week by week.",
      ],
    },
    {
      heading: "IGCSE Core and Extended tiers and subject combinations",
      paragraphs: [
        "IGCSE subjects such as Mathematics and the sciences come in Core and Extended tiers. Core is for students who need a steady route to grades C to G, while Extended opens the full A* to G range and is usually required for A Level Mathematics or sciences.",
        "Most students take five to eight subjects, often including Mathematics, English, a language, two sciences and one or two humanities or business subjects. A student who wants to keep engineering or medicine open should include Physics and Chemistry.",
        "Cambridge and Edexcel papers differ in style even when topics are similar, so a tutor works from the specific syllabus code the school uses. Tell us the board at the very start.",
        "Students moving from a Hindi-medium school into IGCSE usually spend the first term on English and Mathematics, which underpin every other subject.",
      ],
    },
  ],

  process: [
    { title: "Tell us about your child", description: "Share the programme or board, subject, level, current marks and the hours that suit your Vrindavan household." },
    { title: "See the tutor options", description: "We shortlist tutors by syllabus and level, then explain why each one fits." },
    { title: "Try a free lesson", description: "A real topic taught live online, free and with no commitment." },
    { title: "Confirm the plan", description: "The tutor outlines topics and session timing, and rates are agreed in writing before you book." },
    { title: "Continue with regular sessions", description: "Weekly lessons with written notes, periodic reviews and a change of tutor if the match is not right." },
  ],

  whyPoints: [
    { title: "Matched to the exact course", description: "We start from the IB subject and level, or the IGCSE code, and choose the tutor from there." },
    { title: "Clear about home visits", description: "Lessons are online; we do not claim tutors visit Vrindavan." },
    { title: "Fits festival weeks", description: "Sessions move around Holi, Janmashtami and Kartik rather than vanishing." },
    { title: "Written follow-up", description: "Parents receive a short note after each lesson." },
    { title: "Coaching that stays honest", description: "Tutors never write assessed work for a student." },
    { title: "A trial before any commitment", description: "The first lesson is free so you can judge the tutor." },
  ],

  faqs: [
    { question: "Can I find IB and IGCSE tutors in Vrindavan?", answer: "Yes, online. Tutors teach live one to one from elsewhere in India, so a Vrindavan student can study with a subject specialist without leaving home. The first lesson is free, which lets you test the tutor and the topic before deciding anything." },
    { question: "Do IB Gram tutors visit homes in Vrindavan?", answer: "No. In-person home tuition runs only in Gurugram and parts of Delhi NCR. A Vrindavan family gets online home tuition, meaning a private lesson taken at home on a laptop, with the same one-to-one attention and a short written note after every session." },
    { question: "Is there an IB or IGCSE school in Vrindavan or Mathura?", answer: "We could not confirm one. Local schools mainly follow the UP board or CBSE. Families who want an international school usually look at Agra, the Noida belt or Gurugram, and should confirm a school's current authorisation directly." },
    { question: "My child studied IB abroad and we now live in Vrindavan. Can you help?", answer: "Yes. A tutor can keep the same course going, using the syllabus and level the previous school set. We begin with a diagnostic lesson to see where your child is, then plan weekly sessions that match the school calendar you are following." },
    { question: "How does tuition work when Holi or Janmashtami fills the town?", answer: "Sessions are moved rather than skipped. We plan catch-up lessons before or after the busy week and can shorten sessions on crowded days. Online lessons also avoid the slow roads that festival crowds create around Vrindavan." },
    { question: "What does tuition cost?", answer: "Rates are quoted in writing before booking, and there is no published list. The figure depends on the programme and level, the tutor's experience, lesson length and sessions per week. Online delivery saves the travel cost to a bigger city." },
    { question: "Can you prepare a child for an international school entrance test?", answer: "Yes. We ask which school and which year, then prepare the student for that test, usually English, Mathematics and sometimes science or reasoning. Preparation can start a term or two before the test date." },
    { question: "Is Hindi available as an IB or IGCSE subject?", answer: "Yes. Hindi B is offered in the IB Diploma, and IGCSE has Hindi as a Second Language. Tutors can support reading, writing and oral practice, which suits students who already speak Hindi at home in Braj." },
    { question: "Which IB Mathematics course should my child take?", answer: "Analysis and Approaches suits students aiming for engineering or science, while Applications and Interpretation suits economics, commerce and life sciences. The school advises on subject choice, and a tutor can show what each course demands week to week." },
    { question: "Can tutors write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach method, structure and feedback, but they never write or rewrite an Internal Assessment, Extended Essay, TOK essay or coursework. The IB and Cambridge require that the work be the student's own." },
    { question: "What are the exam sessions?", answer: "IB Diploma exams are held in May, with results in early July, and some schools offer a November session. Cambridge IGCSE runs in May to June and October to November. A tutor plans the preparation from the session your child will sit." },
    { question: "Which IGCSE boards do you teach?", answer: "Cambridge IGCSE and Pearson Edexcel IGCSE. Topics overlap, but papers and mark schemes differ, so please tell us the board and subject code at the start and the tutor will work from that specification." },
    { question: "How does the free trial lesson work?", answer: "Send a topic or a past-paper question and a tutor teaches it live for about a lesson's length at no cost. Afterwards you can continue, ask for a different tutor, or stop with no obligation." },
    { question: "What if our internet drops during a lesson?", answer: "We agree a backup plan at the start, such as a mobile hotspot or a quick reschedule. The shared whiteboard keeps notes, so the lesson can resume without losing the work done." },
    { question: "Can lessons be in Hindi?", answer: "Lessons are mainly in English because IB and IGCSE papers are in English, but tutors can explain hard ideas in Hindi when it helps. Mention the preference in your first message and we will try to match it." },
    { question: "What if my child does not get on with the tutor?", answer: "Tell us by email or WhatsApp and we arrange a new tutor, usually passing on the lesson notes. Fit matters more than loyalty to the first match." },
    { question: "How do I start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and preferred hours. We reply with a tutor shortlist and free trial slots." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works in Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home tuition is offered." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Programmes, subjects and how tutors are matched." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "Diploma courses with a career-related study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Agra", href: "/agra/", description: "The nearest big city to Vrindavan." },
    { label: "IB and IGCSE tutoring in Aligarh", href: "/aligarh/", description: "A neighbouring Uttar Pradesh city served online." },
    { label: "IB and IGCSE tutoring in Noida", href: "/noida/", description: "The NCR city with a cluster of IB schools." },
  ],

  closingHeading: "Book a free IB or IGCSE trial from Vrindavan",
  closingBody:
    "Send the programme or board, the subject and level, and the hours that work around temple days and school. You will receive tutor options and open trial slots, all online and one to one, free and with no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
