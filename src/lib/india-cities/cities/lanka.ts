import type { CitySeoPage } from "../types";

/**
 * /lanka/ - IB and IGCSE tutoring page for Lanka, the railway and highway town in Hojai district,
 * Assam (not Sri Lanka). No IB or Cambridge/Edexcel school is confirmed in or around the town, so
 * stripSchools is empty and school clusters point honestly to Guwahati and Kolkata, reusing names
 * from the neighbouring city pages. Online-only delivery: tutors do not visit homes in Lanka.
 */
export const lanka: CitySeoPage = {
  slug: "lanka",
  countryName: "Lanka",
  countryNameLong: "Lanka, Hojai district, Assam",
  demonym: "Lanka",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fixed around Bohag and Magh Bihu weeks, the monsoon months when river water spreads over the lowlands, and the evening hours when the town's power supply is steadiest",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.9167, longitude: 92.95 },
  wikipedia: "https://en.wikipedia.org/wiki/Lanka,_Assam",
  alternateNames: ["Lanka Assam", "Lanka Hojai", "Lanka Nagaon"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lanka, Assam | Online Home Tuition",
  metaDescription: "Online IB and IGCSE tutors for Lanka, Hojai district, Assam: live one-to-one lessons from home, tutors matched by subject and exam board, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Lanka, Assam",
  heroEyebrow: "IB & IGCSE TUTORING FOR LANKA FAMILIES IN HOJAI DISTRICT",
  heroSubtitle:
    "Private tuition from home is what most Lanka families are really after, and for IB and IGCSE that has to mean online home tuition: a tutor who teaches your exact syllabus, on a live video call, while your child sits at the family desk in Lanka. This is the town on the Guwahati to Lumding railway line in Hojai district, Assam, and has nothing to do with Sri Lanka. Nobody travels to your door here. The tutor is chosen for the course, and distance stops mattering.",
  primaryKeyword: "IB and IGCSE tutors in Lanka",
  imageAltText: "A Lanka student in Hojai district, Assam, working through an IB Mathematics problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Lanka",
    "IGCSE tutor Lanka",
    "IB home tuition Lanka",
    "IGCSE home tuition Lanka",
    "IB private tuition Lanka",
    "IB Maths tutor Lanka",
    "IGCSE Maths tutor Lanka",
    "IB Physics tutor Lanka",
    "IB Chemistry tutor Lanka",
    "IB Biology tutor Lanka",
    "IB DP tutor Lanka",
    "IB MYP tutor Lanka",
    "IB PYP tutor Lanka",
    "IGCSE online tuition Lanka",
    "online IB tutor Lanka Assam",
    "IB tutor Hojai district",
    "IGCSE tutor Hojai Assam",
    "IB tutor Lanka Nagaon",
    "Cambridge IGCSE tutor Assam",
  ],

  heroTrustPoints: [
    "Lanka here means the town in Hojai district, Assam, and every lesson is delivered online",
    "The tutor is picked for the exact course your child sits, not for living nearby",
    "A full trial lesson comes first, so you judge the teaching before agreeing anything",
    "No tie-up with any school, the IB Organization, Cambridge or Pearson Edexcel",
  ],
  heroStats: [
    { value: "Online only", label: "No tutor visits in Lanka" },
    { value: "PYP to DP", label: "All IB stages covered" },
    { value: "May & Nov", label: "Both exam series planned" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Online IB and IGCSE tutoring for families in and around Lanka",
    paragraphs: [
      "Lanka is a small railway and highway town in Hojai district, Assam, and a quick clarification helps search engines and readers alike: it is not the island nation to the south. The town sits on National Highway 27, roughly eleven kilometres from the district headquarters at Sankardev Nagar, and the Guwahati to Lumding line passes through it. Families here are mostly connected to trade, transport, farming, government service and the railways, and their children mostly study under the Assam state boards or CBSE.",
      "International curricula are rare in this part of the Brahmaputra valley. Nobody has told us of an IB World School or a Cambridge or Edexcel IGCSE centre inside Lanka, which means a family interested in either pathway is usually planning ahead: perhaps a child heading to a boarding school in Guwahati or Kolkata, a parent posted elsewhere who will bring the family back, or a household that wants a globally portable qualification for study overseas. Tutoring is how that preparation gets done from home.",
      "So the arrangement is simple and honest. Lessons take place on live video, one tutor with one student, in Indian Standard Time. Tutors do not visit homes in Lanka; the home visits we run are limited to Gurugram and parts of Delhi NCR. What a Lanka family gets instead is a choice of teachers who have taught the same IB or IGCSE course recently, wherever in India those teachers live.",
      "Tutors coach, explain, set practice and mark it. They do not write or ghost-write an Internal Assessment, an Extended Essay, a Theory of Knowledge essay or any coursework, because those pieces must remain the student's own work. IB Gram is an independent service with no affiliation to any school, to the International Baccalaureate, to Cambridge or to Pearson.",
    ],
    bullets: [
      "IB tutoring from PYP and MYP through the Diploma and Career-related Programme",
      "Cambridge and Pearson Edexcel IGCSE, matched to the specific syllabus code",
      "Live one-to-one lessons, with a written note after every session",
      "A free trial lesson and a tutor change if the fit is wrong",
      "No home visits in Lanka; in-person tuition exists only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught inside Lanka itself, so a family reaching us is nearly always supporting a child who studies the programme elsewhere, plans to join it later, or follows it through home study. The notes below describe each stage the way it plays out for a household in Hojai district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around transdisciplinary themes rather than separate subjects, and the final-year Exhibition asks a child to investigate a question of their own choosing. Tutoring at this stage is light and conversational: reading aloud, number sense, curiosity habits and the vocabulary a child will need to explain what they found.",
      countryNote: "A Lanka family looking at PYP is usually preparing a young child for a move to an IB school in Guwahati or beyond, and wants the transition to feel familiar rather than abrupt.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed against published criteria, and every student completes a Personal Project at the end of the programme. The common stumbling block is the shift from remembering facts to explaining reasoning, which is exactly what criterion-based marking rewards.",
      countryNote: "Students in Hojai district who move from an SEBA or CBSE classroom into MYP often need a few months of bridging in command terms and structured writing before the new style feels natural.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects at Higher Level and three at Standard Level are joined by Theory of Knowledge, the Extended Essay and a creativity, activity and service requirement. Internal assessments carry a meaningful slice of each subject grade, and final papers are written in the May or November session.",
      countryNote: "A Diploma student linked to Lanka typically boards or lives away during the two years, or studies the subjects privately; tutoring from home keeps a steady weekly rhythm during holidays and home visits.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller group of Diploma courses sits beside a career-related qualification, a reflective project and language development. Few Indian schools run it, so most requests concern the Diploma courses inside the pathway, which are taught to the same standard as the full Diploma.",
      countryNote: "Enquiries from Lanka about CP are rare; where they arise, the actual tutoring need is almost always one or two Diploma-level subjects.",
    },
  ],

  subjectsIntro:
    "Whichever subject a Lanka student needs, the starting question is the same: which course, which level, and which exam session. A tutor is then chosen who has taught that exact combination this academic year. Below are the IB subjects families in Assam ask for most often.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Built for students who enjoy algebra, calculus and proof-style reasoning; sessions rehearse unfamiliar problems so that Paper 3 style questions stop feeling like a surprise." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use dominate here, so a good part of each lesson is spent on graphic calculator fluency and on reading a data set correctly." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics are taken in turn, with timed past-paper sections and a close look at how an investigation method will be judged." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, equilibrium and organic reaction pathways receive steady drilling, and the practical investigation is planned so the write-up satisfies the criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology are revisited through structured questions, with attention to the command words examiners use in long answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy first, then real-world examples and evaluation, since Higher Level papers reward argument far more than recall." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading is the core skill; sessions practise pulling evidence out of an unseen business scenario instead of reciting definitions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary on unseen text, comparative essays and the Individual Oral are rehearsed separately, then joined into one steady routine." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases and networks are paired with working code, because the internal project must show real, documented programming." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and short essay structure are the three recurring needs; practice essays are marked against the published rubric." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking, sustainability and case studies, with emphasis on weighing trade-offs rather than listing facts." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study recall tied to specific places, plus data-response skills and a sound fieldwork method." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and sustained argument for Paper 2 are trained as two different skills before they are combined." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A practical choice for students from Assam who study Hindi as an additional language, with focus on the oral and written formats set in the paper." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led coaching on knowledge questions and the exhibition, with no ghost-writing of the essay itself." },
  ],

  igcseSubjectsIntro:
    "IGCSE is where many Lanka families begin, because the Class 9 and 10 stage is a natural point to try an international qualification. Cambridge and Pearson Edexcel papers differ in wording and tier structure, so we match the tutor to the syllabus code the student will actually sit.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended-tier students are trained to show method clearly, handle the non-calculator paper and finish on time." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A bridge to IB Maths or A Level, introducing calculus and trigonometric identities in a manageable way." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement, graph reading and the alternative-to-practical paper get separate attention." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and organic basics, with qualitative analysis rehearsed on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human physiology, inheritance and ecosystems, with practice in writing precise, mark-scheme style explanations." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand and supply diagrams, government policy and trade, with short structured answers drilled for speed." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice alongside binary, networks and logic, so the paper-based trace tables make sense." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary tasks are practised under timed conditions with detailed feedback." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-study answers anchored to the scenario given, using the vocabulary the mark scheme expects." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A practical language option for students whose home language is Assamese, Bengali or Bodo and who want a steady Hindi grade." },
  ],

  regionsTitle: "Where Lanka and nearby families study from",
  regionsIntro:
    "Every lesson is online, so the areas below are context, not logistics: they show the kind of household, school catchment and daily rhythm we plan around when setting a weekly slot.",
  regions: [
    { name: "Lanka town centre", note: "The market and highway stretch, with CBSE and Assam board schools close by and good evening mobile connectivity for most households." },
    { name: "Lanka railway station area", note: "Railway families live here, and several parents work staggered shifts, so lesson times are often set around the parent's roster." },
    { name: "NH-27 corridor", note: "The highway frontage has trading families whose children travel by road to schools in Hojai and Nagaon; late afternoon is a common lesson slot." },
    { name: "Sankardev Nagar (Hojai)", note: "The district headquarters about eleven kilometres away, with the widest range of schools and coaching in the area." },
    { name: "Dabaka", note: "Roughly twenty-five kilometres along the highway, a place whose students sometimes join Lanka-based study groups." },
    { name: "Kampur", note: "A nearby town on the highway towards Nagaon, mostly state-board and CBSE schooling." },
    { name: "Jamunamukh", note: "A small town on the line towards Guwahati, with students who travel for senior secondary classes." },
    { name: "Doboka and Lumding side", note: "Households on the Lumding end of the line, many connected with the railway division, which shapes transfers and school moves." },
    { name: "Rural belt around Lanka", note: "Farming villages where internet quality varies, so we agree a fallback plan for lessons before the first session." },
  ],

  schoolDisclaimer:
    "The schools named below are nearby options mentioned for context only. We have not confirmed any IB or Cambridge IGCSE school inside Lanka itself and we say so plainly. IB Gram is independent of every school, of the International Baccalaureate, of Cambridge Assessment International Education and of Pearson Edexcel, and none of the names implies a partnership.",
  schoolClusters: [
    {
      city: "Lanka and Hojai district",
      note: "We could not confirm any IB or IGCSE school in Lanka, Hojai or the surrounding villages. Local schools follow SEBA, AHSEC or CBSE, so this cluster is honest context rather than a choice.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "About 185 kilometres by road and 150 by rail, Guwahati is the city most Lanka families look to for international schooling or boarding.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A longer journey by train, but Kolkata has long-established international schools that some Assam families consider for boarding.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
  ],

  tutorsIntro:
    "These are tutors from our wider pool who teach IB and IGCSE online across India. Because lessons run on video, a Lanka student is matched on subject, level and exam board, never on distance. Ask for a trial lesson with any profile that fits.",

  modesIntro:
    "Every arrangement in Lanka is built from the same unit: one tutor, one student, live video, Indian time. What differs is the pace. Some families want one steady weekly slot, others a concentrated push before an exam session, and a few prefer a hybrid of both. In-person visits are not part of the offer here.",
  modes: [
    {
      title: "Weekly online home tuition",
      description: "One fixed slot each week, the student at home in Lanka and the tutor on screen. It is the simplest way to build momentum in a subject without travelling anywhere.",
      bullets: [
        "A single tutor stays with the student through the term",
        "Works for IB, IGCSE and bridging from SEBA or CBSE",
        "Recent past papers are reviewed together as the term goes on",
        "A short written note follows every session",
      ],
    },
    {
      title: "Exam-season intensive",
      description: "Two or three sessions a week in the run-up to a May or November series, built on timed papers, error logs and examiner-style feedback.",
      bullets: [
        "Targets the topics that lose the most marks",
        "Timed practice at the exam's own pace",
        "Planned around Bihu and festival weeks",
        "Pauses once the exams begin, resumes if resits are needed",
      ],
    },
    {
      title: "Bridging and transition support",
      description: "Short, focused blocks for a student moving from an Assam board or CBSE classroom into an IB or IGCSE school, or preparing in advance for admission.",
      bullets: [
        "Command terms and exam style explained from the start",
        "Gap-filling in Maths and Science before the new term",
        "Reading and writing routines for English-medium study",
        "Parents receive a plain summary of progress",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Lanka, Assam?",
      paragraphs: [
        "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Lanka or in the villages around it. The schools you will find are government and private institutions following the Assam state boards (SEBA for Class 10, AHSEC for Class 12) or CBSE. If you have seen a school claiming an international curriculum nearby, ask it for its IB authorisation number or its Cambridge centre number before relying on the claim.",
        "That is why most requests from this part of Hojai district are about preparation rather than catching up. A family may be weighing a move of the child to Guwahati for Class 9, or considering a boarding school further away, and wants the child to arrive able to cope with the pace. Another may simply want an internationally recognised qualification taken privately, which is possible for IGCSE but harder for IB, where a school is normally involved.",
        "Distance to the nearest international options is real. Guwahati is around 185 kilometres by road along National Highway 27, which is a full day trip rather than a daily commute, and many families treat any move as a boarding decision. A tutor at home does not replace such a school, but it narrows the gap while the decision is being made.",
        "The town has an unusual position for a place of its size, on both a national highway and the main broad-gauge line between Guwahati and Lumding. Railway employees and traders move in and out, and their children occasionally return from other regions with an IB or IGCSE history. Those are the students for whom continuity matters most, and for whom a weekly online lesson on the same course is often the easiest bridge.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Lanka itself",
        "Local schooling follows SEBA, AHSEC or CBSE",
        "Guwahati is the closest realistic hub for international schools",
        "Private study is practical for IGCSE, much harder for IB",
      ],
    },
    {
      heading: "SEBA, CBSE, IB or IGCSE: which board suits a Lanka student?",
      paragraphs: [
        "The board that suits a child depends on where they plan to study next. For Assam's own colleges and state-level admissions, SEBA and AHSEC remain the direct route. CBSE suits families who expect transfers across India and want JEE and NEET alignment. IB and IGCSE make sense when the plan involves study abroad, an international school, or a family that moves often.",
        "Many Lanka parents ask whether switching boards midway is wise. The honest answer is that the earlier the switch, the easier it is. Moving into IGCSE at Class 9 gives two years to adapt, while moving into the IB Diploma at Class 11 asks a student to absorb a new style of assessment, a language requirement and the Extended Essay at once.",
        "Language is a quiet factor. Many students in Hojai district speak Assamese, Bengali or Hindi at home and study in English, and the written depth that IB and IGCSE expect can feel heavy at first. The tutor's work then is partly subject teaching and partly patient training in extended English answers.",
        "Because the boards recognise different things, none of them is simply better. The table gives a plain side-by-side for a Lanka family comparing them.",
      ],
      table: {
        caption: "Boards compared for a student in Lanka, Assam",
        columns: ["Board", "Typical assessment style", "Natural next step"],
        rows: [
          ["SEBA / AHSEC (Assam)", "Syllabus-based written exams at Class 10 and Class 12", "Assam colleges, state-level admissions, Gauhati University"],
          ["CBSE", "National board exams, strong NCERT focus", "JEE, NEET and CUET-UG across India"],
          ["Cambridge or Edexcel IGCSE", "Subject papers with Core and Extended tiers, practicals and coursework in some subjects", "IB Diploma, A Level, CBSE or state Class 11"],
          ["IB Diploma", "Six subjects with internal assessments, Extended Essay and TOK", "Universities in India and abroad, AIU equivalence for Indian admissions"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a family in Lanka?",
      paragraphs: [
        "We do not publish a fixed price list, because the rate depends on the tutor and the course, not on the town you live in. What a family in Lanka pays is quoted in writing before any booking, and the free trial lesson comes first, so you see the teaching before the cost matters.",
        "Several things move the figure. An IB Diploma Higher Level science from a teacher with many years of marking experience costs more than an IGCSE Core subject taught by a newer tutor. Frequency matters, since two sessions a week add up differently from one. Lesson length, the number of subjects, and whether the tutor is also asked to prepare mock papers all play a part.",
        "Local factors cut costs, not add them. Because no travel is involved, you do not pay for a tutor's commute, and because you are not choosing among a handful of nearby people, you can pick on subject fit rather than convenience. For a family in a smaller town that is a real advantage over searching for a private tutor who may not exist locally.",
        "A sensible way to plan is to decide the exam session first, count backwards, and ask for a quote for that stretch rather than an open-ended commitment. We would rather a family start with a short block, see the progress notes, and then extend.",
      ],
      bullets: [
        "Rates are quoted in writing before booking",
        "Higher Level and examiner-experienced tutors usually cost more",
        "Two sessions a week cost more than one but compress preparation",
        "No travel charges, since lessons are online",
      ],
    },
    {
      heading: "Online home tuition, coaching centres or self-study: how do they compare?",
      paragraphs: [
        "A family in Lanka has four realistic choices for IB or IGCSE support: online one-to-one tuition, a coaching centre in Hojai or Nagaon, a private tutor who happens to live nearby, or self-study with books and videos. Each solves a different problem.",
        "Local coaching in the district is built around the Assam boards, CBSE, and entrance exams. It is a good fit for those and a poor fit for IB Internal Assessment criteria or Cambridge Paper 4 style questions, because few teachers there have taught these courses. A nearby private tutor may be excellent in general but unfamiliar with the specific syllabus code.",
        "Self-study works for disciplined students in the senior years, especially for IGCSE, but it lacks the feedback loop that makes the difference in extended answers. Online one-to-one tuition solves the matching problem: the teacher is picked for the exact course, and the student gets marked work and a note after every session.",
        "The table sets out the comparison honestly, including where the online route has limits such as internet reliability.",
      ],
      table: {
        caption: "Support options compared for a Lanka student",
        columns: ["Option", "Strength", "Limit"],
        rows: [
          ["Online one-to-one tuition", "Tutor matched to the exact IB or IGCSE course, marked feedback, flexible timing", "Needs a stable internet connection and a quiet spot at home"],
          ["Local coaching centre", "Peer group, fixed routine, strong for state board and entrance exams", "Few teachers with IB or Cambridge experience in the district"],
          ["Nearby private tutor", "Easy to arrange, face-to-face in the neighbourhood", "Hard to find one who knows the specific international syllabus"],
          ["Self-study", "Low cost, flexible pace", "No marked feedback, easy to drift, weak for IA and extended writing"],
        ],
      },
    },
    {
      heading: "How does the Assam calendar shape IB and IGCSE preparation?",
      paragraphs: [
        "A Lanka student's year is not only the exam timetable. Bohag Bihu in mid-April, Kati Bihu in October and Magh Bihu in January each pull the household into festival routines, while Durga Puja and Diwali bring visitors and travel. We plan the lesson calendar around them, not against them.",
        "The monsoon matters in the Brahmaputra valley. Heavy rain between June and September can disrupt roads, rail services and power, and flooding in the wider region sometimes shuts schools. A weekly online slot is easier to reschedule than a trip across town, and tutors keep a short list of alternative times for exactly these weeks.",
        "IB Diploma exams take place in May and November, and IGCSE has the main May and June series with smaller sessions in October and November and in January for some boards. Mock papers are sensibly placed two or three months before each series so that there is time to act on what they reveal.",
        "The table lays out the year as it tends to look for a Lanka family.",
      ],
      table: {
        caption: "A study year for Lanka students",
        columns: ["Period", "What happens", "How we plan"],
        rows: [
          ["January to February", "Magh Bihu, IGCSE mocks, IB Diploma internal deadlines", "Lighter weeks around Magh Bihu, then mock-paper review"],
          ["March to May", "IB May and IGCSE main series, Bohag Bihu in April", "Intensive blocks, a pause around Bohag Bihu"],
          ["June to September", "Monsoon, new academic year, flood-related disruption", "Flexible timing, early topic building, make-up slots"],
          ["October to December", "Kati Bihu, Durga Puja, IB November and IGCSE autumn series", "Short revision blocks, festival-aware scheduling"],
        ],
      },
    },
    {
      heading: "Which universities can a Lanka student reach with IB or IGCSE?",
      paragraphs: [
        "An IB Diploma or an IGCSE-then-A-Level route opens several doors from Hojai district. For study within India, the Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and Indian universities that use CUET-UG accept eligible international qualifications subject to their own rules. Always check the current requirements of the specific university and course.",
        "For engineering and medicine, IB and IGCSE students should read the eligibility rules carefully. JEE Main and NEET have specific subject and eligibility conditions that international-board students must meet, such as the required science combination. A student aiming at IIT Guwahati, for example, needs to look at the JEE route and not assume the IB score alone is enough.",
        "Abroad, IB and IGCSE are widely understood. UK, Canadian, Australian and many European universities read IB points directly, and US universities treat them as strong signals alongside SAT or ACT where required. A Lanka student with this goal should build the subject choice backwards from the target course.",
        "Closer to home, Gauhati University, Cotton University and Tezpur University are familiar destinations for Assam students, and a student coming through an international board can usually apply with an equivalence certificate. Whatever the destination, a tutor can help prepare for entrance tests, but admissions decisions remain with the institutions.",
      ],
      bullets: [
        "AIU equivalence is the standard route for Indian university entry",
        "CUET-UG and JEE or NEET have their own eligibility conditions",
        "IB points and IGCSE grades are read directly by many overseas universities",
        "Check each course's current requirements before choosing subjects",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online?",
      paragraphs: [
        "Mathematics comes in two IB flavours, Analysis and Approaches and Applications and Interpretation, each at Higher or Standard Level. A student who enjoys algebra and calculus and may study engineering or pure sciences should lean to Analysis and Approaches, whereas one more comfortable with data and modelling may do well in Applications and Interpretation.",
        "Lessons use a shared digital whiteboard, so the tutor writes each step as the student watches, and the student writes back. Graphic calculator skills are taught through screen sharing, and recorded lessons can be provided on request so a student can revisit a derivation later.",
        "In the sciences, Physics, Chemistry and Biology all share a pattern: content mastery, data handling, and the internal assessment. The online format suits the first two well, since graphs, diagrams and worked numerical problems display clearly. For the internal assessment, the tutor coaches the student on how a method will be judged but does not design or write the investigation.",
        "Practical work is the part families worry about most. Students still perform their experiments at school or wherever their practical facilities are, and the tutor helps them understand the method, anticipate the questions and present the data clearly afterwards.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to choose?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended tiers in many subjects. Core caps the grade at C, Extended reaches A* to E. A student who plans to take A Level or the IB Diploma in the sciences or mathematics will normally need Extended, so we nearly always recommend it for that group.",
        "Choosing subjects is a balance of interest, ability and future plans. Mathematics, at least two sciences and English form a strong spine for students heading to science or engineering. Those eyeing commerce or economics at university should add Economics and Business Studies. A language such as Hindi adds balance and is usually comfortable for a student from Assam.",
        "Edexcel IGCSE is the other main board, with its own syllabus codes and paper structures. Some schools, particularly outside metros, enrol private candidates only for one board, so check availability before committing. The tutor then works from that board's specification and past papers.",
        "A final practical point: private candidates need an exam centre that accepts them, and centre availability for the practical papers is the usual limiting factor in smaller towns. Plan this well ahead, and talk to us if you want help understanding the process.",
      ],
      bullets: [
        "Extended tier is usually needed for A Level or IB Diploma sciences and Maths",
        "Maths, two sciences and English make a solid core set",
        "Check exam-centre availability for private candidates early",
        "Board choice (Cambridge or Edexcel) shapes the paper style",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Share the board, programme, subject, level and exam session, and anything the child finds hard." },
    { title: "We shortlist tutors", description: "You receive tutors who teach that exact course, with experience noted and rates stated in writing." },
    { title: "Free trial lesson", description: "A live video lesson shows you the teaching style before you commit to anything." },
    { title: "Weekly sessions begin", description: "A fixed slot suited to the family, with a written note after every session." },
    { title: "Review and adjust", description: "Progress is reviewed on a set cycle, and the tutor is changed if the fit is not right." },
  ],

  whyPoints: [
    { title: "Matched to the exact course", description: "Tutors are chosen for the syllabus code and level, which a small town rarely offers locally." },
    { title: "Honest about delivery", description: "Everything in Lanka is online, and we say so plainly instead of implying a visit." },
    { title: "Written note after each lesson", description: "Parents see what was covered and what comes next without chasing for updates." },
    { title: "Own work stays your own", description: "Tutors explain and give feedback but never write an IA, EE or coursework." },
    { title: "Tutor change on request", description: "If the fit is wrong, you can switch without awkwardness or extra charge for the change." },
    { title: "Rates in writing first", description: "You see the cost before booking, and the trial lesson comes at no charge." },
  ],

  faqs: [
    { question: "Is Lanka here the town in Assam or the country Sri Lanka?", answer: "Lanka here is the town in Hojai district, Assam, not Sri Lanka. We serve Lanka families through online lessons in Indian Standard Time. If you are searching from Sri Lanka itself, this page is not the right one, though our online tutors can work with students anywhere that suits an IST schedule." },
    { question: "Do IB Gram tutors visit homes in Lanka?", answer: "No, tutors do not visit homes in Lanka. Our in-person home visits run only in Gurugram and parts of Delhi NCR. In Lanka the equivalent is online home tuition: a live, private lesson that the student takes at home on a laptop, with a tutor chosen for the exact IB or IGCSE course." },
    { question: "Is there an IB or IGCSE school in Lanka?", answer: "We have not confirmed one. Schools in and around Lanka follow the Assam state boards or CBSE. Families usually look at Guwahati for international schooling or boarding. Before trusting any claim of an international curriculum, ask the school for its IB authorisation or Cambridge centre details." },
    { question: "Can a student in Lanka take IGCSE as a private candidate?", answer: "Often yes, but it depends on finding an exam centre that accepts private candidates, especially for practical papers. Centres are scarcer outside big cities. Start the enquiry at least several months before the series, and speak to us if you need help understanding how the registration works." },
    { question: "How much does an IB or IGCSE tutor cost in Lanka?", answer: "We quote the rate in writing before booking and publish no fixed list. The price depends on the subject, level, tutor experience and number of weekly sessions, not on being in Lanka. Because lessons are online there are no travel costs, and the trial lesson is free." },
    { question: "What internet speed do we need for online lessons?", answer: "A steady broadband or 4G connection that can hold a video call is enough, and a laptop or tablet works better than a phone. If your area has patchy signal, tell us beforehand, and we will agree a backup slot and a plan for dropped sessions." },
    { question: "Can you help my child move from an SEBA or CBSE school into IGCSE?", answer: "Yes. A short bridging block usually covers command terms, extended answers and exam style, plus any gaps in Maths and Science. Starting a few months before the new term makes the transition noticeably smoother, particularly for students used to short-answer papers." },
    { question: "Which IB Maths course should a Lanka student choose?", answer: "Analysis and Approaches suits students who like algebra, calculus and proof and may study engineering or pure sciences. Applications and Interpretation suits those more comfortable with statistics and modelling. Your school or target university will usually help decide; a trial lesson shows which course feels natural." },
    { question: "Do tutors write the Internal Assessment or Extended Essay?", answer: "No. Tutors coach, explain the criteria, review plans and give feedback on drafts the student has written. The writing, the research and the final submission must be the student's own work, and we will not provide ghost-written coursework of any kind." },
    { question: "When are the IB and IGCSE exams for a student in Assam?", answer: "IB Diploma exams run in the May and November sessions. Cambridge IGCSE has a main May and June series and smaller October and November and January sessions in some cases. We plan mock papers two to three months ahead and work around Bihu and Puja weeks." },
    { question: "Can IB or IGCSE students from Lanka apply to Indian universities?", answer: "Yes, usually with an equivalence certificate from the Association of Indian Universities. For CUET-UG, JEE and NEET routes each exam sets its own eligibility conditions for international-board candidates, so check the current rules for the particular course before you choose subjects." },
    { question: "What happens if floods or power cuts interrupt a lesson?", answer: "We reschedule it. Tutors keep alternative slots for the monsoon months, and a missed session because of a genuine outage is moved, not lost. For households with frequent outages, a laptop with good battery and a mobile hotspot are worth arranging in advance." },
    { question: "Can my child switch tutors if the fit is not right?", answer: "Yes. If a tutor's style does not suit the student, tell us and we will arrange another from the pool. There is no fault attached to a change, and the written notes from earlier sessions help the new tutor pick up quickly." },
    { question: "Do you teach younger children in PYP or MYP?", answer: "Yes. PYP support is light and conversational, focusing on reading, numbers and curiosity habits, while MYP tutoring concentrates on criterion-based writing, reasoning and the Personal Project. Younger students usually do best with shorter, more frequent sessions rather than one long block." },
    { question: "Is the trial lesson really free?", answer: "Yes. The trial is a complete live lesson with a tutor suited to your child's course, and there is no charge or obligation. After it you decide whether to continue, and any rates are given to you in writing beforehand." },
    { question: "How do I get started from Lanka?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the board, subject, level and exam session. We reply with tutor options, a proposed trial time and written rates, usually within a working day." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works for families in other Indian towns and cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors do visit homes, in Gurugram and parts of Delhi NCR." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects, levels and how matching works." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam sessions for Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, the internal assessments, TOK and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP prepares for the Diploma." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "See tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "Context on the nearest large city for international schools in Assam." },
    { label: "IB and IGCSE tutoring in Nagaon", href: "/nagaon/", description: "A neighbouring district town in the same part of the Assam plains." },
  ],

  closingHeading: "Start with a free trial lesson from home in Lanka",
  closingBody:
    "Tell us the programme, subject and exam session, and we will propose a tutor and a trial time. The lesson happens online, in Indian time, with no travel on anyone's part. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
