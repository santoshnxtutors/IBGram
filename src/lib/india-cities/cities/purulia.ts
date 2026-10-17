import type { CitySeoPage } from "../types";

/**
 * /purulia/ - IB and IGCSE tutoring page for Purulia, West Bengal. No school in Purulia is
 * confirmed to run the IB or a Cambridge/Edexcel IGCSE, so delivery is online one-to-one and the
 * school clusters point honestly to Kolkata and Delhi NCR. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const purulia: CitySeoPage = {
  slug: "purulia",
  countryName: "Purulia",
  countryNameLong: "Purulia, West Bengal",
  demonym: "Purulia",
  state: "West Bengal",
  stateCode: "IN-WB",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around Durga Puja, Tusu at Makar Sankranti, the dry-season heat and whatever your child's own school schedule looks like",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.3321, longitude: 86.3616 },
  wikipedia: "https://en.wikipedia.org/wiki/Purulia",
  alternateNames: ["Puruliya", "Manbhum"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Purulia | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Purulia students: private online tuition from home, one to one, timed around Durga Puja and Tusu, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Tuition in Purulia",
  heroEyebrow: "PURULIA STUDENTS, IB & IGCSE TUITION DELIVERED ONLINE",
  heroSubtitle:
    "Private tuition at home in Purulia for the IB or IGCSE, taught one to one on live video. No tutor will arrive at your gate, since visits exist only in Gurugram and parts of Delhi NCR; instead your child learns from an India-based specialist at their own desk, with a short written summary after each lesson.",
  primaryKeyword: "IB and IGCSE tutors in Purulia",
  imageAltText: "A Purulia student at home with a laptop, discussing an IB Biology data question with an online tutor",
  secondaryKeywords: [
    "IB tutor Purulia",
    "IGCSE tutor Purulia",
    "IB home tuition Purulia",
    "IGCSE home tuition Purulia",
    "IB private tuition Purulia",
    "IB Maths tutor Purulia",
    "IGCSE Maths tutor Purulia",
    "IB Physics tutor Purulia",
    "IB Chemistry tutor Purulia",
    "IB Biology tutor Purulia",
    "IB DP tutor Purulia",
    "IB MYP tutor Purulia",
    "IB PYP tutor Purulia",
    "IGCSE online tuition Purulia",
    "IB tutor Puruliya",
    "IB tutor Hutmura Purulia",
    "IGCSE tutor Adra",
    "online IB classes West Bengal Purulia",
    "international board tuition Manbhum",
  ],

  heroTrustPoints: [
    "Tutors based in India and working in IST, with no overseas time-zone gymnastics",
    "A free trial class before anything is agreed, then prices in writing",
    "A written note after each class so parents can see the progress",
    "A different tutor on request if the match feels wrong",
    "Coaching for the student's own work, never ghost-written IAs, EEs or TOK essays",
  ],
  heroStats: [
    { value: "IST", label: "No time-zone juggling" },
    { value: "PYP to DP", label: "IB stages and IGCSE covered" },
    { value: "Free trial", label: "Judge a real lesson first" },
    { value: "May & Nov", label: "The papers we work back from" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Purulia, for a district that sends its children far afield",
    paragraphs: [
      "Purulia is the western edge of West Bengal, a plateau of red laterite soil, palash trees and low hills, closer in feel to Jharkhand than to Kolkata. It is also a district with a striking record of children who leave for school elsewhere. Sainik School Purulia draws boys from across the country, and many Purulia families think early about where their own child will study next. When that thinking turns to international boards, they start looking for IB and IGCSE tutors in Purulia, and find very little on the ground.",
      "The local school map is West Bengal board, CBSE and ICSE. No school in the district is confirmed to teach the IB or Cambridge or Edexcel IGCSE, so students who want those syllabuses have usually been headed for Kolkata, Delhi NCR or a boarding school farther off, or are studying privately. IB Gram fills the classroom part of that plan. Tutors are in India, teach on Indian Standard Time and give a single student their full attention on a live video call, at home, with a shared writing pad and real past papers.",
      "Purulia families often ask a fair question first: can a screen really teach an IB Chemistry student? The best answer is a trial lesson. It costs nothing, it is an actual lesson, and after it you receive a summary of what the tutor noticed. Rates follow in writing only afterwards, because they depend on the subject, level and tutor involved.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary framework where children explore units of inquiry, ask their own questions and build reading and number skills through real topics.",
      countryNote:
        "In Purulia, interest in PYP tends to come from parents planning a Kolkata move who want their child ready for open classroom discussion in English.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A middle-school programme that connects subjects through global contexts and is assessed against set criteria rather than one exam.",
      countryNote:
        "Bengali-medium students moving into MYP need patient help turning knowledge they hold in Bengali into clear written English explanations.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year pre-university course made up of six subjects plus the Extended Essay, Theory of Knowledge and CAS.",
      countryNote:
        "Most Purulia DP students study in a larger city and use home tutoring during Puja and winter breaks to strengthen the subjects that hold them back.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A flexible route that pairs a few DP courses with career-related study and a reflective project.",
      countryNote:
        "Uncommon here, but relevant for students attracted to technical or service-sector pathways.",
    },
  ],
  programmesIntro:
    "Before any content, a tutor explains how the chosen programme is marked, so that a parent in Purulia and a child at home both know what earns marks and what does not.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "The route for future engineers and mathematicians, with calculus, functions and rigorous written justification." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "A statistics and modelling course that suits students heading to life sciences, economics and the social sciences." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and modern physics, with the graph analysis and experimental design examiners reward." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, reactivity and organic chemistry, with regular practice on how marks are split across a multi-step answer." },
    { name: "Biology", levels: "SL / HL", description: "A course heavy on experiments, data tables and evaluation, useful for future doctors and researchers." },
    { name: "Geography", levels: "SL / HL", description: "Resource use, population and hazards, with case studies that students from a mining and forest district can genuinely relate to." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary science and humanities course well suited to students who care about land, water and forests." },
    { name: "Economics", levels: "SL / HL", description: "Markets, macro policy and development, assessed through diagrams, definitions and extended responses." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming, algorithms and computer systems, built around past-paper tracing." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Analysis and comparison of texts, with support for students who studied in Bengali medium." },
    { name: "Bengali A / Bengali B", levels: "SL / HL", description: "Literature or language study in a subject where Purulia students often start with a real advantage." },
    { name: "Hindi B", levels: "SL / HL", description: "A language acquisition course useful near the Jharkhand border, where Hindi is widely heard." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guidance on thinking about how we know what we know; the student writes the essay and prepares the exhibition." },
  ],
  subjectsIntro:
    "Subject plans begin from what your child's school or intended boarding school actually offers and from the degree or career in view.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Algebra, geometry, trigonometry and data at two tiers, with attention to setting out working clearly." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Early calculus and functions for students heading towards A Level Mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Motion, energy, waves and circuits, with plenty of unfamiliar context questions." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Bonding, reactions, the mole and analysis, plus practical-skills questions." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Living organisms, genetics and ecosystems with data interpretation." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking for students shifting from Bengali-medium teaching." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Programming logic, networks and data representation." },
    { name: "Geography", levels: "Cambridge 0460", description: "Physical and human geography with fieldwork-style questions." },
    { name: "Economics", levels: "Cambridge 0455", description: "Basic economic problems, markets and government policies." },
    { name: "Bengali as a Second Language", levels: "School dependent", description: "Available only where a school or board offers it; tutors confirm this before planning." },
  ],
  igcseSubjectsIntro:
    "Tutors work from the exact specification, Cambridge or Pearson Edexcel, so that each hour of revision aims at the right question style.",

  regionsTitle: "Purulia town and nearby places our online students study from",
  regionsIntro:
    "Lessons happen at home wherever you live in the district. These are notes on how each area's daily routine tends to influence the best time to log on.",
  regions: [
    { name: "Hutmura", note: "A central residential area in Purulia town, well served by schools and coaching centres; evening slots after tuition batches end are popular." },
    { name: "Station Road", note: "The commercial spine near Purulia Junction with busy traffic; a headset helps cut street and train noise." },
    { name: "Zilla School area", note: "An older part of town near government schools, with families who have long kept children on the West Bengal board." },
    { name: "Sainik School side", note: "Neighbourhoods near the campus, where families from the defence and service community have wider awareness of national and international boards." },
    { name: "Adra", note: "A railway town in the district with a large service-family population and regular trains towards Kolkata and Ranchi." },
    { name: "Raghunathpur", note: "A growing industrial and residential town on the eastern side of the district, with families who commute towards Durgapur and Asansol." },
    { name: "Jhalda and the Jharkhand border", note: "Border-side households who have close links with Ranchi and Hindi-speaking neighbours." },
    { name: "Baghmundi and the Ajodhya Hills foothills", note: "Rural and forest-edge villages where a stable mobile connection matters more than any other preparation." },
  ],

  schoolClusters: [
    {
      city: "Purulia district",
      note: "We could not confirm a school in the district teaching the IB or a Cambridge or Edexcel IGCSE programme. Local schools follow the West Bengal board, CBSE or ICSE, so international-curriculum work is done alongside them through tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Reached by the Purulia Express and Rupasi Bangla services in around seven or eight hours, Kolkata is where most Purulia families turn for a full IB or IGCSE classroom.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A smaller number of families look at boarding in Delhi NCR, where a wider range of IB and IGCSE schools exists.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "Schools are listed only because Purulia families sometimes consider them, and all of them are in other cities. IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any named school, and mentioning a school is not an endorsement.",

  modesIntro:
    "In-person visits are offered only in Gurugram and parts of Delhi NCR, so in Purulia the online format is the route. Here is how families tend to use it.",
  modes: [
    {
      title: "A steady weekly private class",
      description: "One subject, one tutor, one regular time, with work marked live and the next steps agreed at the end of each lesson.",
      bullets: ["Same slot every week", "Work marked on screen", "Summary note for parents"],
    },
    {
      title: "Mock-to-exam push",
      description: "A short, intensive period before mocks and the May or November papers, built around timed past questions.",
      bullets: ["Timed papers", "Mistake tracker", "Focus on topics carrying most marks"],
    },
    {
      title: "Pre-boarding preparation",
      description: "For children about to join a school elsewhere, a few months to prepare in English, mathematics and science before day one.",
      bullets: ["Diagnostic lesson first", "Subject vocabulary", "Study routine and note-taking"],
    },
  ],

  sections: [
    {
      heading: "Is it realistic to follow an international syllabus from Purulia?",
      paragraphs: [
        "It is, provided the plan is honest. A student in Purulia cannot attend an IB classroom locally, but a student can build subject strength at home, and that strength carries into a later school move, a private-candidate route or an application. What matters is a tutor who knows the syllabus, a reliable internet connection and a weekly routine that survives exams and festivals.",
        "The realistic path depends on the child's stage. A Class 6 to 8 student has time to build English fluency and mathematical habits before choosing a board. A Class 9 or 10 student may already be committed to a West Bengal board or CBSE and needs targeted help to prepare for an IGCSE transfer or a Class 11 entry into IB. A Class 11 student considering IB must move schools, and tutoring fills the gaps before and after.",
        "We tell families in each case what tutoring can and cannot do. It can raise subject understanding, exam technique and confidence. It cannot supply an official exam centre, run practicals or replace a school's role in internal assessment, and we explain what to arrange separately.",
      ],
    },
    {
      heading: "West Bengal board, CBSE or ICSE against IB and IGCSE: what changes for a Purulia student?",
      paragraphs: [
        "Bengal board classes, which most local students attend, teach in Bengali or English, and rely heavily on textbook chapters. CBSE and ICSE are similar in their emphasis on a final exam, though ICSE places more weight on English and written answers. The IB and IGCSE differ in kind rather than degree: they reward structured reasoning, unfamiliar data and clear communication.",
        "The clearest difference shows up in a Science paper. A board exam might ask a student to define osmosis, whereas an IGCSE or IB paper might show an experiment on potato slices and ask why the mass changed, what the error bars imply and how the method could be improved.",
        "The table lays these differences out for Purulia families comparing boards. It describes general features and does not rate any board above another.",
        "Students frequently carry strong memory and diligence from the Bengal board into the IB, which is a good base. What they must add is willingness to explain a step in their own words and to guess sensibly when a problem looks new.",
      ],
      table: {
        caption: "What changes when a Purulia student meets an international board",
        columns: ["Aspect", "West Bengal board", "CBSE / ICSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Teaching language", "Bengali or English", "English or Hindi (CBSE), English (ICSE)", "English", "English plus second language"],
          ["Assessment shape", "Board exams, textbook centred", "Board exams with application questions", "Series exams at end of course", "Exams plus internal assessments and Extended Essay"],
          ["Typical science question", "Define, describe, derive", "Explain and apply", "Interpret unfamiliar data", "Evaluate methods and data"],
          ["Local availability", "Everywhere in the district", "A few schools", "None confirmed", "None confirmed"],
          ["Where it leads", "Class 11-12 and WBJEE or NEET", "CUET, JEE, NEET", "A Level, IB or senior secondary", "Global universities and CUET-UG"],
        ],
      },
    },
    {
      heading: "What determines the price of IB and IGCSE tutoring for a family in Purulia?",
      paragraphs: [
        "There are no published prices on this page because they would not mean much. The rate for a tutor teaching Class 7 MYP Mathematics and the rate for a tutor teaching IB Physics HL are not the same, and neither is the rate for one lesson a week and four. Instead, every family receives a written quote after a free trial.",
        "Tutor experience is the largest factor: someone who has taught a specification for several years and knows its mark schemes well will usually charge more than a newer tutor. The subject also matters, since higher-level sciences and mathematics need more specialised teachers.",
        "Session length and frequency come next. Many students in Purulia do best with one hour twice a week; others start with one hour and add sessions before exams. Ask the tutor to propose a plan and adjust it if the budget is tight.",
        "Purulia families save on something else: travel. Tuition that once meant a trip to Ranchi, Durgapur or Kolkata now happens at home, so the hours go into study and the household routine remains intact.",
      ],
    },
    {
      heading: "How does an online tutor compare with a local batch, a private tutor or self-study?",
      paragraphs: [
        "Purulia has coaching centres and good private teachers, especially for the Bengal board and entrance exams such as WBJEE and NEET. For those exams they are often the right choice. For IB and IGCSE they are usually the wrong syllabus, so a batch class can leave a student polishing skills that will not be marked.",
        "A local private teacher can help with mathematics fundamentals and English, and many do this very well. The gap arises when the student needs someone who has marked IB internal assessments or knows how examiners split marks in an IGCSE Physics paper.",
        "Self-study works for strong, self-directed students, especially with access to past papers. It fails when errors go unnoticed, which is why an outside reader of the student's work matters.",
        "An online tutor combines syllabus knowledge with one-to-one attention, delivered at home. The table compares the options on the points families most often raise.",
      ],
      table: {
        caption: "Study options for an international syllabus from Purulia",
        columns: ["Option", "Knows IB or IGCSE marking", "Attention", "Practical point"],
        rows: [
          ["Online one-to-one tutor", "Yes, a specialist", "Individual", "Needs laptop and a stable connection"],
          ["Local coaching batch", "Rarely", "Shared with a class", "Travel and fixed timings"],
          ["Local private teacher", "Seldom", "Individual", "Good for basics, limited syllabus knowledge"],
          ["Self-study", "Only through past papers", "None", "Depends on discipline and feedback"],
        ],
      },
    },
    {
      heading: "How do Durga Puja, Tusu and the dry season shape a study calendar in Purulia?",
      paragraphs: [
        "Durga Puja is the emotional centre of the year across Bengal, and in Purulia the celebrations pull whole families out of routine for a week or more. A tutor who knows this does not plan a new topic across those days. Lessons before Puja go into consolidation, and the week after Puja is used for a gentle restart.",
        "Tusu, the harvest festival celebrated around Makar Sankranti in January, is a Purulia signature. Village fairs and songs interrupt the second term, and mocks for many schools fall just after. Sessions around it stay light.",
        "The dry season runs from March to June. Temperatures on the Purulia plateau climb steeply, and afternoon study is not effective. Early morning or evening slots make more sense, and students preparing for May papers benefit from them.",
        "Monsoon arrives from late June, refreshing the landscape but occasionally disrupting connectivity in outlying blocks. A mobile hotspot is a cheap and effective safeguard, and the table shows how a year can be organised.",
      ],
      table: {
        caption: "A Purulia study year set against local events and exams",
        columns: ["Season", "What is happening locally", "Exam or school context", "Tutoring focus"],
        rows: [
          ["June to August", "Monsoon arrives, new school session", "Syllabus start and first tests", "Foundation building, English support"],
          ["September to October", "Durga Puja and the festival break", "Half-yearly exams in many schools", "Consolidation before, gentle restart after"],
          ["November to January", "Cool season, then Tusu fairs", "November papers, IA and mock preparation", "Timed papers and internal assessment method"],
          ["February to April", "Warming, palash in bloom, dry season begins", "Final push before May sessions", "Weak-topic triage and past papers"],
          ["May", "Peak heat on the plateau", "IB and IGCSE May sessions", "Short early or late lessons"],
        ],
      },
    },
    {
      heading: "What is IB Mathematics like for a student used to Bengal board maths?",
      paragraphs: [
        "Bengal board mathematics gives students strong calculation habits, and the IB can build on that. The difference is what earns marks. IB questions are usually set in context, ask for a justification, and expect the student to use a graphing calculator for some parts. A right answer without method scores poorly.",
        "Analysis and Approaches suits students aiming for engineering, physics or pure mathematics, since it develops algebra, calculus and proof. Applications and Interpretation suits future biologists, economists and psychologists because it emphasises statistics, modelling and technology.",
        "Tutors help with the first stumbling block, which is usually notation and command words. Words like 'show that', 'hence' and 'justify' have exact meanings, and marking depends on them.",
        "The second block is calculator use. IB students are expected to use graphing functions efficiently, and a Purulia student who has only used a basic scientific calculator needs early practice to avoid losing time in Paper 2.",
        "For IGCSE Mathematics, the Core and Extended tiers mirror the same issue in gentler form. Extended students meet algebraic proof, transformations of functions and more demanding trigonometry.",
      ],
    },
    {
      heading: "Which science and humanities subjects are most useful to students from Purulia?",
      paragraphs: [
        "Physics, Chemistry and Biology are the most requested, as in most Indian districts, and the local link to medicine and engineering is strong. Students often arrive with good theoretical knowledge but little experience of designing an experiment, so tutors train that skill directly.",
        "Environmental Systems and Societies and Geography are worth considering in Purulia, where land use, water scarcity and forest ecosystems are lived experience rather than textbook material. Examiners reward applied examples, and students can draw on what they see around them.",
        "Economics and Business Management suit students whose families run shops, transport or small industry. The case-study style questions reward common-sense reasoning, once a student learns the terminology.",
        "Languages matter too. A Purulia student who reads and writes Bengali well can take Bengali A, which often provides a reliable high score, while English A or English B needs steady practice with essay structure.",
      ],
    },
    {
      heading: "How do university and career routes open up from Purulia after IB or IGCSE?",
      paragraphs: [
        "A student who completes the IB Diploma can apply to Indian universities through equivalence recognised by the Association of Indian Universities, take CUET-UG for central universities, or apply abroad. In West Bengal, Kolkata's universities and IIT Kharagpur, less than three hours away for some families, are natural reference points, though admission rules for IB students differ and must be checked each year.",
        "For medicine, NEET-UG requires specific subjects and English at the senior stage, and the National Medical Commission and the testing agency publish conditions that can change. For engineering, JEE Main has its own rules about qualifying examinations. A family should check both before choosing IB subjects.",
        "Sidho-Kanho-Birsha University in Purulia offers local options, and some students combine an IB or A Level route with later local study. Overseas, IB scores are read directly by universities in the UK, USA, Canada, Australia and Europe.",
        "Tutors do not manage applications, but they will explain honestly which subject combinations keep doors open. For example, IB Mathematics AA and Physics together help engineering aspirants, while Biology and Chemistry matter for medicine.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Message on WhatsApp or email with the child's class, board and subject of concern." },
    { title: "Confirm the details", description: "We check the exam board, tier and session, and whether the student is in a school or a private candidate." },
    { title: "Attend a free trial", description: "A matched tutor teaches a real trial class at a time that suits your family's evening." },
    { title: "See the written rates", description: "After the trial you get a written quote and a proposed weekly plan, with nothing booked in advance." },
    { title: "Continue with feedback", description: "Classes begin, a short note follows each one, and a change of tutor is possible at any time." },
  ],

  whyPoints: [
    { title: "Syllabus specialists", description: "Tutors teach from IB guides and Cambridge or Edexcel specifications, marking against published criteria." },
    { title: "Honest about the format", description: "No tutor visits Purulia, and we say so at the start. Lessons are live." },
    { title: "Fits an Indian evening", description: "Tutors work in IST, so lessons after school or after coaching are easy to schedule." },
    { title: "Prices in writing", description: "You see a quote after the trial and before committing, with no surprises later." },
    { title: "Support without shortcuts", description: "Tutors guide the student's own IA, essay and coursework and never write them." },
    { title: "Planned around Puja and Tusu", description: "The Purulia calendar is part of the plan, not an afterthought." },
  ],

  tutorsIntro:
    "All tutors teach live from India and are chosen for the syllabus they know best. A trial lesson lets you see the fit before you decide anything.",

  faqs: [
    { question: "Will a tutor come to my house in Purulia?", answer: "No, tutors do not visit homes in Purulia. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. Purulia students learn online at home: a laptop, a live video call and a shared writing screen give the tutor a clear view of the work, and the lesson stays fully one to one." },
    { question: "Is any Purulia school an IB or IGCSE school?", answer: "We could not confirm a school in Purulia that teaches the IB or a Cambridge or Edexcel IGCSE programme. Local schools follow the West Bengal board, CBSE or ICSE. Students who want an international classroom usually look at Kolkata or Delhi NCR, and online tutoring supports either that move or a private route." },
    { question: "How much does IB or IGCSE tuition cost?", answer: "Rates depend on subject, level, tutor experience and the number of sessions, so we do not publish one price. After a free trial you receive a written quote before booking. If your budget is limited, say so, and the tutor can choose the highest-value topics before recommending a plan." },
    { question: "Can my Bengali-medium child cope with IB or IGCSE English?", answer: "Yes, with support. A tutor builds subject vocabulary, practises explaining answers in full English sentences and teaches how to read command words. Most students improve visibly over a few months, and mathematics often becomes the confidence booster while written English catches up." },
    { question: "Which subjects are most popular with Purulia students?", answer: "Mathematics, Physics, Chemistry and Biology come first, followed by English, Economics and Geography. Some students also ask for Bengali A support, because a strong mother-tongue result can lift the overall score. Environmental Systems and Societies attracts students interested in land, water and forests." },
    { question: "What if the internet drops during a lesson?", answer: "Reconnect through a mobile hotspot, or move to a phone call for the last minutes, and the tutor will pick up from the last shared step. Genuine outages are rescheduled without penalty. Families in outlying blocks are encouraged to test the connection during the trial lesson." },
    { question: "Does the tutor write internal assessments or essays?", answer: "No. Tutors coach but never write IAs, Extended Essays, TOK essays or coursework. They explain criteria, help choose a manageable question, review a plan and comment on a draft, but the student produces every word. That is both what the IB requires and what builds real ability." },
    { question: "Is an IB Diploma accepted in India?", answer: "Generally yes. The Association of Indian Universities recognises it as equivalent to Class 12 for admissions, and CUET-UG is the main route to central universities. Some courses ask for particular subjects, so check the rules of each university and professional programme before choosing your IB subjects." },
    { question: "Can IB or IGCSE students take NEET or JEE?", answer: "Possibly, if subjects and marks satisfy the conditions set by the exam authorities. NEET expects Physics, Chemistry, Biology and English at the senior stage, and JEE has its own qualifying rules. IGCSE alone is a Class 10 level, so a senior-stage qualification is also needed. Check current notices before deciding." },
    { question: "When should we start?", answer: "As early as your child needs it. Younger learners can start with reading and number confidence in the primary years. MYP and IGCSE support commonly begins around Class 7 to 9, and DP support in Class 11, with a summer bridge in Class 10 often making the first term far easier." },
    { question: "How does the free trial work?", answer: "You send your child's class, board and subject, we propose a tutor, and the trial is an actual lesson at a time you choose. There is no obligation. Afterwards you get a written note on what was covered and what the tutor would do next, and rates in writing if you wish to continue." },
    { question: "Can we change the tutor?", answer: "Yes. Teaching depends on pace and personality as well as knowledge, and a poor fit is nobody's fault. Tell us what did not work and we will match a different tutor. Most families who switch find the second match noticeably better because expectations are clearer." },
    { question: "How do Durga Puja and Tusu affect lessons?", answer: "They are built into the plan. Lessons before Durga Puja go towards consolidation, the week after is a gentle restart, and Tusu around Makar Sankranti is treated as a light-revision period. Nobody schedules a hard new topic during a major family festival." },
    { question: "Which IGCSE boards do tutors handle?", answer: "Cambridge International IGCSE and Pearson Edexcel International GCSE, with A Level and AS Level as context. We confirm the exact board, subject code and tier first, because past papers differ. Practising from the wrong board's papers is one of the most common causes of wasted revision time." },
    { question: "How do I begin?", answer: "Send a WhatsApp message to +91 7439 368 115 or write to support@ibgram.com with your child's class, board and the subject that needs help. We will suggest a tutor and organise a free trial, and nothing is confirmed until you are happy with the lesson and the written rates." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The complete IB and IGCSE tutoring service." },
    { label: "India city pages", href: "/india/", description: "Cities across India served online." },
    { label: "Gurugram", href: "/gurgaon/", description: "Where in-person home tuition is available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutors by IB subject." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutoring." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Middle Years Programme explained." },
    { label: "IB DP", href: "/programmes/dp/", description: "Diploma Programme structure." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "Kolkata", href: "/kolkata/", description: "The main IB and IGCSE hub for Bengal families." },
    { label: "Asansol", href: "/asansol/", description: "A nearby Bengal city on the Kolkata line." },
    { label: "Ranchi", href: "/ranchi/", description: "The Jharkhand capital across the border." },
    { label: "Jamshedpur", href: "/jamshedpur/", description: "A steel city within reach of Purulia." },
  ],

  closingHeading: "Begin with a single free lesson from your home in Purulia",
  closingBody:
    "If IB and IGCSE tutors in Purulia are what you have been looking for, send us a short message with your child's class, board and subject. A tutor will be suggested, a trial lesson arranged and written rates shared afterwards. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
