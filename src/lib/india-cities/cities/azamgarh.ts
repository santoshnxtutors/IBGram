import type { CitySeoPage } from "../types";

/**
 * No school in Azamgarh is confirmed for IB or Cambridge/Edexcel IGCSE, so stripSchools is empty.
 * The nearby-city cluster reuses the Lucknow schools verified for the Lucknow page.
 */
export const azamgarh: CitySeoPage = {
  slug: "azamgarh",
  countryName: "Azamgarh",
  countryNameLong: "Azamgarh, Uttar Pradesh",
  demonym: "Azamgarh",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots, adjusted around Ramzan fasting hours, Chhath and the monsoon flood weeks in eastern Uttar Pradesh",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Azamgarh | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE home tuition for Azamgarh students: one-to-one DP, MYP, PYP and Cambridge lessons on video, timed around Ramzan and Chhath, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Azamgarh",
  heroEyebrow: "IB & IGCSE HOME TUITION, TAUGHT ONLINE, FOR AZAMGARH",
  heroSubtitle:
    "In Azamgarh, the IB or Cambridge IGCSE usually reaches a family through a child who studies elsewhere, or through parents who have worked in the Gulf, Mumbai or abroad and want to keep an international syllabus going. IB Gram offers private tuition from home by live one-to-one video lessons with a tutor who knows your child's precise subject, level and exam board, so the search does not stop at the district boundary.",
  primaryKeyword: "IB and IGCSE tutors in Azamgarh",
  imageAltText: "Azamgarh student practising IB Physics questions with an online tutor during a video lesson",
  secondaryKeywords: [
    "IB tutor in Azamgarh",
    "IGCSE tutor in Azamgarh",
    "IB home tuition Azamgarh",
    "IGCSE home tuition Azamgarh",
    "IB private tuition Azamgarh",
    "IB Maths tutor Azamgarh",
    "IGCSE Maths tutor Azamgarh",
    "IB Physics tutor Azamgarh",
    "IB Chemistry tutor Azamgarh",
    "IB Biology tutor Azamgarh",
    "IB DP tutor Azamgarh",
    "IB MYP tutor Azamgarh",
    "IB PYP tutor Azamgarh",
    "IGCSE online tuition Azamgarh",
    "online IB tutor Azamgarh Uttar Pradesh",
    "Cambridge IGCSE tutor Azamgarh",
    "IB tutor Civil Lines Azamgarh",
    "IGCSE tutor Mubarakpur",
    "online tuition for Poorvanchal IB students",
  ],

  heroTrustPoints: [
    "Tutors picked for your child's actual IB course or IGCSE syllabus code",
    "Live lessons on video, taken by the student at home in Azamgarh",
    "Trial lesson first, so nothing is paid up front",
    "Independent of schools, boards and examining bodies",
  ],
  heroStats: [
    { value: "MYP and DP", label: "Most requested IB stages" },
    { value: "Cambridge", label: "Main IGCSE board asked for" },
    { value: "Online", label: "Every lesson, every family" },
    { value: "Free trial", label: "Before any decision" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like for a family in Azamgarh",
    paragraphs: [
      "Azamgarh is known for many things, from the Darul Musannifin and Shibli National College to the poet Kaifi Azmi, the scholar Rahul Sankrityayan and the black pottery of Nizamabad, but a thriving IB or Cambridge school scene is not one of them. If you have searched for IB and IGCSE tutors in Azamgarh and found only general maths teachers, that is why. The demand exists, but it is scattered and often invisible in local listings.",
      "IB Gram works around the shortage by moving the lesson onto a screen. A tutor who has taught the course joins a live one-to-one video call, and the student learns from home with a laptop or tablet and a shared whiteboard. That is the sense in which we offer home tuition in Azamgarh: private and personal, from home, but online. Tutors do not come to Azamgarh, and in-person visits are restricted to Gurugram and parts of Delhi NCR.",
      "Who uses it? Some are families with a member working in the Gulf, or a parent returning after years abroad, whose children studied IGCSE or IB in another country and must not lose the thread. Others are parents in Azamgarh who want their child prepared for study overseas. A few are children at boarding schools in Lucknow, Dehradun or Pune who come home for the holidays and want continuity.",
      "We are independent of the International Baccalaureate, Cambridge, Pearson Edexcel and every school. Tutors coach and explain; they do not write coursework or assessments for students. The first lesson is free, each session ends with a written note, and you can ask for a different tutor without explanation.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Edexcel IGCSE",
      "Video lessons only; nobody travels to Azamgarh",
      "Timing planned around Ramzan, Chhath and flood weeks",
      "A free first lesson and written notes throughout",
    ],
  },

  programmesIntro:
    "Anyone assessing IB programmes from Azamgarh should know that all four stages can be studied with a tutor's help, but only through a school that is authorised to teach them. The descriptions below cover what each stage expects and how tutoring fits, given how few international schools exist in eastern Uttar Pradesh.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning in the PYP is organised around themes rather than subjects, and pupils complete a final Exhibition that they research themselves. Extra tuition should stay gentle, focused on reading, writing and basic arithmetic.",
      countryNote:
        "A PYP child returning to Azamgarh after years abroad may speak fluent English but read little Hindi or Urdu, so tutors can balance languages and keep number work steady while the family settles.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP subjects are marked on set criteria that reward reasoning and clear communication. Students complete a Personal Project in the final year, planned and reflected on over several months.",
      countryNote:
        "MYP students associated with Azamgarh are frequently boarders elsewhere in Uttar Pradesh, so tutoring often aims at strengthening writing in Sciences and Language and Literature between school terms.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma has six subject groups, TOK, an Extended Essay and CAS. Internal assessments sit alongside written papers, and predicted grades from school drive university offers.",
      countryNote:
        "Diploma students linked to Azamgarh mostly ask for Mathematics, Chemistry, Biology and English, often with medicine, engineering or overseas study in mind.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes at least two DP subjects with a career-related course, a reflective project and skills for work. Only a few schools in India run it.",
      countryNote:
        "We know of no CP school in Azamgarh, so tutoring applies only to the DP courses of a student who is enrolled somewhere else.",
    },
  ],

  subjectsIntro:
    "Rather than offering a general IB tutor, we look for someone who has taught your child's course at your child's level. That matters most in Mathematics and the sciences, where an HL paper and an SL paper differ sharply in depth and in the kind of question asked.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Building algebra, calculus and proof skills, and practising the unfamiliar, multi-step questions that the longer papers use." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability models and technology use, along with choosing a sensible exploration topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal ideas, waves and electricity, then fields and quantum physics for HL, with careful error analysis." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Reaction energetics, equilibrium, acids and organic pathways, and fast use of the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Molecular biology through to ecology, and writing concise, accurate answers to data and essay questions." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, key definitions and real-world commentary, using examples students can actually discuss." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, quantitative tools and the structure of longer evaluative answers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Analysing unseen texts, comparing works and preparing for the individual oral." },
    { name: "IB Urdu and Hindi A or B", levels: "HL / SL", description: "Literature analysis or language acquisition in Urdu or Hindi, which suits many students from Uttar Pradesh homes." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures and systems, plus planning the internal solution in a documented way." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, structured essays and a focused historical investigation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Learning key studies well enough to use them as evidence, and shaping essay responses." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Exploring how knowledge is claimed and tested, and preparing an exhibition and essay the student owns." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Refining a question and a plan for a 4,000-word essay. Advice and feedback only." },
    { name: "IB MYP Sciences and Mathematics", levels: "MYP 1-5", description: "Investigation skills and reasoned conclusions, building the base needed for DP courses." },
    { name: "IB MYP Language and Literature", levels: "MYP 1-5", description: "Writing that meets the criteria, and progress on the Personal Project journal." },
  ],

  igcseSubjectsIntro:
    "Most students who ask us about IGCSE from Azamgarh follow Cambridge, sometimes as private candidates or through a school in another city. We start from the code and tier on the entry paperwork so lessons use the right papers from day one.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and data handling, with worked solutions that show method clearly." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Differentiation, trigonometry and functions, giving a head start for IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, electric circuits, waves and atomic physics, with practical-paper technique." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, bonding, reactivity, and organic chemistry, along with the qualitative analysis tables." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, plant and human systems, genetics and ecology, plus interpreting experimental data." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "Grade 9-10", description: "Balancing three sciences within one qualification and revising them in a workable order." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Programming, algorithms and computer systems, with steady coding practice." },
    { name: "IGCSE Accounting and Business Studies", levels: "Grade 9-10", description: "Bookkeeping layouts, business terms and applying ideas to a supplied case." },
    { name: "IGCSE English as a Second Language", levels: "Grade 9-10", description: "Reading, writing, listening and speaking, each practised as a separate skill." },
    { name: "IGCSE Urdu and Hindi as a Second Language", levels: "Grade 9-10", description: "Language tasks in Urdu or Hindi where the student's home language can be a real advantage." },
  ],

  regionsTitle: "Azamgarh localities and towns we support online",
  regionsIntro:
    "Since lessons are online, someone in Civil Lines and someone in Mubarakpur see the same list of tutors. The differences that count are practical: how the family's day is arranged, which school the child attends, and what the evening power supply and internet are like. Each note below explains what we take into account.",
  regions: [
    { name: "Civil Lines", note: "The administrative heart of the city, where government-service families and senior professionals live and often plan schooling well ahead." },
    { name: "Pandey Bazaar", note: "A busy trading area near the centre, where evenings are shaped by shop hours and parents ask for fixed weekday slots." },
    { name: "Sipah", note: "A residential locality on the city's edge, with households whose relatives work overseas and who may already know international boards." },
    { name: "Nizamabad", note: "Known for its black pottery, this town has craft and trading families for whom an international education is a long-term ambition." },
    { name: "Mubarakpur", note: "A weaving town with strong educational traditions, where interest in the Gulf and overseas study is common." },
    { name: "Lalganj", note: "A tehsil headquarters on the road towards Varanasi, where the nearest larger schools are a distance away and online lessons remove the gap." },
    { name: "Sagri", note: "A rural tehsil where fast, reliable broadband is not guaranteed, so we test the connection before the trial lesson." },
    { name: "Bilariaganj", note: "A market town in the west of the district, with families who look towards Lucknow or Varanasi for higher schooling." },
    { name: "Atrauliya", note: "A town in the south of the district, on a corridor used by families who travel to Varanasi and Gorakhpur for work and study." },
  ],

  schoolDisclaimer:
    "Any school named here is mentioned solely to explain where students from this region may study. IB Gram is independent, has no ties to the schools, the IB, Cambridge or Pearson Edexcel, and has not been recommended by any of them. We cannot confirm an IB or IGCSE school inside Azamgarh and do not claim one.",
  schoolClusters: [
    {
      city: "Azamgarh district",
      note: "We do not know of a school here that offers the IB or Cambridge or Edexcel IGCSE, and we would prefer to leave the list empty than guess. Local schooling is UP Board, CBSE and ICSE, with madrasa and Sanskrit traditions alongside.",
      schools: [],
    },
    {
      city: "Nearby: Lucknow, the state capital",
      note: "Lucknow is the closest large city with confirmed international-curriculum schools, roughly 300 km away, so families who use it tend to board a child or relocate rather than commute.",
      schools: [
        "Modern School, Lucknow",
        "City Montessori School, Cambridge Campus",
        "GD Goenka Public School, Lucknow",
        "DPS Gomti Nagar Jr",
      ],
    },
    {
      city: "Nearby: Varanasi and Gorakhpur",
      note: "These are the nearest big cities for Azamgarh families, but we have not confirmed an IB or IGCSE school in either, so students who need one look further afield, mostly to Lucknow, Dehradun or a metro.",
      schools: [],
    },
  ],

  modesIntro:
    "Whatever the family's plan, lessons run live on a screen. What differs is how many hours are wanted and how they are spread around the school term.",
  modes: [
    {
      title: "Regular one-to-one video lessons",
      description:
        "One student, one tutor, one weekly hour on a topic from the current unit. This is where nearly every Azamgarh family starts, and it works for MYP, DP and IGCSE.",
      bullets: [
        "The same tutor each week",
        "Shared board for equations and diagrams",
        "Written summary after every hour",
        "Simple to move around Ramzan or wedding season",
      ],
    },
    {
      title: "Vacation catch-up for boarders",
      description:
        "For students who study in Lucknow, Dehradun or elsewhere and return to Azamgarh in the break, tutors run intensive blocks that go over the term's weak points and prepare the next unit.",
      bullets: [
        "Review of the last term's test papers",
        "Pre-teaching for the term ahead",
        "Extra hours during Diwali and summer breaks",
        "Return to a lighter plan once school resumes",
      ],
    },
    {
      title: "Exam-season revision support",
      description:
        "Before mocks, internal assessment deadlines and the May or November series, extra sessions focus on past questions, mark-scheme reading and time management.",
      bullets: [
        "Topic-by-topic paper practice",
        "Errors logged and revisited",
        "Sessions limited to the weeks that matter",
        "Calm, planned finish before each paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE from Azamgarh, and where?",
      paragraphs: [
        "Azamgarh sits in Purvanchal, the eastern part of Uttar Pradesh, and its mainstream schooling follows the UP Board, CBSE and ICSE, with a well-known tradition of Islamic and Sanskrit learning alongside. There is no IB school or Cambridge school in the district that we can verify, and we would rather say that than dress up a nearby city as local.",
        "Even so, the district produces a steady trickle of IB and IGCSE students, most through migration. Azamgarh has strong ties with the Gulf countries, Mumbai and the wider world, and families with members working abroad often send children to international schools in the Gulf or in India. When they return, or when a child moves between cities, the international syllabus has to carry on without a break.",
        "Another group is made up of parents who deliberately choose an international curriculum for a child, often in the years before Class 9 or 11, and pay for boarding at a school in Lucknow, Dehradun or another city. Lucknow's confirmed options include Modern School in Aliganj, which runs the IB Primary Years Programme, and several Cambridge IGCSE schools such as City Montessori School's Cambridge Campus.",
        "For both groups, a specialist online tutor makes home life less disrupted. A child can study with a teacher who knows the course during holidays and at the weekend, without leaving Azamgarh, and can return to school with less to catch up. That is the modest but real value of tutoring in a district with no local international school.",
      ],
      bullets: [
        "UP Board, CBSE and ICSE lead local schooling",
        "No IB or IGCSE school confirmed inside Azamgarh",
        "Gulf-linked and boarding families ask most often",
        "Lucknow holds the nearest confirmed schools",
      ],
    },
    {
      heading: "How different are the UP Board, CBSE and ICSE from IB and IGCSE?",
      paragraphs: [
        "The UP Board relies on a state textbook, an annual exam in Classes 9 to 12 and board papers in Classes 10 and 12. CBSE is more standardised and applies competency questions, and ICSE is wider in content and stronger in English. IB and IGCSE go a step further in asking for explanation, comparison and evidence from a student's own reasoning.",
        "The result is a different kind of preparation. A student who prepared for a UP Board paper by learning textbook answers will find that IB and IGCSE papers change their wording every series and cannot be tackled by pattern. Success comes from understanding, from practising command words such as justify or evaluate, and from writing structured answers.",
        "Language matters here too. Many Azamgarh students study through Hindi or Urdu at home, and the IB requires a second language at Diploma level. That can be an advantage, since Hindi and Urdu courses are available and often feel like an asset, but scientific vocabulary in English must be built deliberately over time.",
        "The table below places the four systems next to each other on the features a Uttar Pradesh family tends to ask about.",
      ],
      table: {
        caption: "UP Board, CBSE, ICSE and IB or IGCSE, as a family in Azamgarh would compare them",
        columns: ["Feature", "UP Board", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Teaching language", "Hindi or English", "English, with Hindi and Urdu as subjects", "English, plus a second language"],
          ["Assessment focus", "Textbook knowledge", "Knowledge with some application", "Reasoning, evidence, evaluation"],
          ["Independent work", "Minimal", "Projects in some subjects", "IA, EE, TOK and coursework"],
          ["Local availability", "Everywhere in the district", "Several city schools", "No confirmed school in Azamgarh"],
        ],
      },
    },
    {
      heading: "What determines the price of IB or IGCSE tuition for Azamgarh students?",
      paragraphs: [
        "Prices reflect the level taught, the subject, the hour, the number of lessons a week and the tutor's experience of that syllabus. A Higher Level Chemistry tutor who has taught the course for several years will cost more than a tutor who supports a Class 7 student in MYP Mathematics.",
        "Online delivery lowers costs that families sometimes forget. Nobody pays for petrol, for a driver or for a tutor's time on the road, and the search does not need to stop at people who happen to live in Azamgarh. The pool becomes national, which raises the chance of a good match.",
        "We do not display rates because they depend on the course and hours. Once we hear your brief, we send a quote in writing before the free trial. If the trial is unsatisfactory, nothing is owed, and families can reduce hours or stop later without a penalty.",
        "Many families in Azamgarh run a tight household budget while paying for an ambitious education, so we suggest an efficient plan: one hour a week aimed at the real weakness, a short review after a month, and extra sessions only near mocks and exams.",
      ],
      bullets: [
        "Level, subject, hour length and weekly frequency shape the rate",
        "No cost for travel, since tutors do not travel",
        "Quote in writing before the trial",
        "Reduce or end lessons whenever needed",
      ],
    },
    {
      heading: "Online tutor, local coaching or self-study: what suits an IB student in Azamgarh?",
      paragraphs: [
        "Azamgarh has coaching for board exams, for engineering and medical entrance, and for government service tests, and there are plenty of individual teachers who tutor at home. Very few of them have taught IB or Cambridge courses, so a student who joins a local batch gets teaching for another exam.",
        "A specialist online tutor solves that problem. The tutor knows the specification, understands how the mark scheme rewards answers, and uses past papers from the exact board. A shared whiteboard gives the student the same visual working that a classroom provides, and the written note after each lesson gives parents a record.",
        "Self-study has a place, particularly for revision, but it struggles with anything that needs outside feedback. Essays, lab reports, oral practice and IA methodology all improve when someone reads the work and comments, so a tutor is most valuable at those points.",
        "The comparison below shows the practical trade-offs for Azamgarh households.",
      ],
      table: {
        caption: "Ways to prepare for IB or IGCSE from Azamgarh",
        columns: ["Choice", "Knows the syllabus", "Individual feedback", "Note"],
        rows: [
          ["Online specialist tutor", "Yes, for the named course", "Every lesson", "Available whatever the local supply"],
          ["Local coaching class", "Rarely, for IB or Cambridge", "Limited, in a batch", "Best for UP Board, CBSE or entrance tests"],
          ["Local home teacher", "Sometimes, for the subject only", "Personal", "Depends on who is nearby"],
          ["Self-study", "Depends on the student", "None without review", "Useful for revision only"],
        ],
      },
    },
    {
      heading: "How do Ramzan, Chhath, floods and heat shape study in Azamgarh?",
      paragraphs: [
        "Azamgarh's calendar carries both Hindu and Muslim festivals, and both affect study. During Ramzan, fasting families often prefer lessons after iftar or early in the evening, and the days around Eid are best left free. Chhath in October or November brings the whole region to the riverbank, with schools closed and many people travelling home.",
        "Diwali, Holi, Dussehra and Muharram also change weekly routines, and eastern Uttar Pradesh sees long school breaks in the summer. Tutors plan around them, and where a break is long, a short intensive block can be more useful than dropping lessons entirely. Wedding season, from late autumn to early summer, brings interruptions too.",
        "Monsoon floods in the Ghaghra and Tons rivers can affect roads and power in parts of the district, and the summer heat from April to June is intense. Lessons are moved when needed, and recorded board work and notes are sent so nothing is lost. Flexible scheduling is a feature of the arrangement, not an exception.",
        "The table lays out how these local patterns meet the international exam calendar.",
      ],
      table: {
        caption: "Azamgarh's festival and weather calendar against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["March to April", "Possible Ramzan, wheat harvest, rising heat", "Final preparation for May exams"],
          ["May to June", "Intense heat, summer vacation", "IB May exams and Cambridge May-June series"],
          ["July to September", "Monsoon and flood risk", "New term begins; IB results in July"],
          ["October to November", "Dussehra, Diwali and Chhath", "Cambridge and Edexcel autumn series; IB November session"],
        ],
      },
    },
    {
      heading: "What options do Azamgarh students have for university after IB or IGCSE?",
      paragraphs: [
        "Graduates of the IB Diploma or of IGCSE followed by A Levels choose among study abroad, Indian universities that accept international qualifications, and professional courses. Many Azamgarh families keep a strong interest in medicine, engineering and civil services, which shapes subject choice from an early stage.",
        "For Indian universities, the Association of Indian Universities issues equivalence certificates for IB and Cambridge results, which many institutions ask for. CUET-UG accepts students from international boards, provided the subjects taken match the course applied for. Requirements shift from year to year, so families should check each university's latest admissions notice.",
        "Regional options include Maharaja Suheldev University in Azamgarh itself, and in nearby cities Banaras Hindu University, IIT (BHU) Varanasi, Aligarh Muslim University, and universities in Lucknow. Some of these have their own recognition rules for international boards, so early enquiries help. Study abroad in the UK, Canada, the Gulf, Australia and the United States is also common for Azamgarh families with overseas links.",
        "NEET and JEE have published eligibility conditions for students from international boards, and these should be confirmed with the official notices rather than assumed. A tutor can teach the science content, but decisions about equivalence and eligibility need the official position.",
      ],
      bullets: [
        "AIU equivalence certificates are often required",
        "CUET-UG accepts international students with matching subjects",
        "Regional choices include Varanasi, Aligarh and Lucknow",
        "Confirm NEET and JEE rules in official notices",
      ],
    },
    {
      heading: "How are IB Maths, Chemistry, Biology and Physics tackled with Azamgarh students?",
      paragraphs: [
        "For IB Mathematics, the tutor first clarifies which course the student takes. Analysis and Approaches is algebra- and calculus-heavy and is the usual choice for engineering aspirants, while Applications and Interpretation stresses data, modelling and technology, and suits medicine, business and social sciences. Both have HL and SL, and the gap between them is large.",
        "In Chemistry and Biology, which many Azamgarh students take because of medical ambitions, the difficulty often lies in precise language and in data questions. A student may understand respiration or reaction rates but lose marks by describing them loosely. Tutors rehearse short, exact statements and structured longer answers, using mark schemes as the guide.",
        "Physics rewards a habit of setting out reasoning step by step, with units and uncertainties. Higher Level adds fields and quantum topics. The internal assessment in each of the sciences is an individual investigation, and the tutor's role is to question the plan and comment on drafts, and never to write any of it.",
        "Because Azamgarh's IB cohort is small, students can feel alone on difficult topics, and a tutor with recent classroom experience of the course fills that gap. Starting at the beginning of Grade 11 leaves Grade 12 for consolidation and past papers rather than first-time learning.",
      ],
    },
    {
      heading: "Should an Azamgarh student take IGCSE Core or Extended, and which subjects?",
      paragraphs: [
        "Core papers limit the top grade, while Extended papers open the whole range up to A*. A student who may later take IB, A Level or a competitive Indian degree should aim for Extended in Mathematics and the sciences, with the school's teacher confirming the choice after seeing classwork.",
        "Subject combinations are flexible. A typical package includes English, a second language, Mathematics, one to three sciences and one or two options such as Computer Science or Business Studies. Additional Mathematics is a sensible extra for anyone planning IB Mathematics Analysis and Approaches or A Level Mathematics.",
        "Language deserves attention. Students from Hindi or Urdu-speaking homes can be very fluent in speech but need practice in formal written English, and IGCSE English papers test both. A tutor helps the student choose between First Language and Second Language, and builds a routine of reading, drafting and correcting.",
        "Cambridge and Pearson Edexcel share subject names but not exact papers, so we work from the board named on the entry form. Sending the syllabus code and a recent paper lets the first lesson be spent on real material instead of on working out which course applies.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB from PYP to the Diploma and both Cambridge and Edexcel IGCSE, over live video. We select on course and level first, and families in Azamgarh can ask for someone with experience of students who switch boards or study while boarding elsewhere.",

  process: [
    { title: "Send your brief", description: "Share the programme or board, subject, class and recent marks, and tell us which evenings are practical in Azamgarh." },
    { title: "Meet a suggested tutor", description: "We explain what the tutor has taught, so you can see why they suit your child's syllabus." },
    { title: "Try the free lesson", description: "Your child works on a real topic on video, and the family decides after seeing the teaching." },
    { title: "Fix the plan and rate", description: "The tutor lays out the early weeks, and the rate is confirmed in writing." },
    { title: "Continue each week", description: "Regular lessons follow, moved around festivals, floods and school events whenever needed." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "A tutor is picked for the exact subject, level and board rather than a general IB label." },
    { title: "Honest about delivery", description: "We tell you before booking that lessons are online and nobody visits Azamgarh." },
    { title: "First lesson free", description: "The trial costs nothing, so the decision rests on real teaching." },
    { title: "Assessment integrity", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework; they guide and give feedback." },
    { title: "Records for parents", description: "A written note follows each lesson and shows what was covered and what comes next." },
    { title: "Calendar-friendly", description: "Ramzan, Chhath, weddings and floods are treated as normal parts of the year, not problems." },
  ],

  faqs: [
    {
      question: "Do IB tutors visit homes in Azamgarh?",
      answer:
        "No, IB Gram tutors do not visit homes in Azamgarh. In-person lessons are limited to Gurugram and parts of Delhi NCR. What we offer is one-to-one online home tuition, where your child studies at home on a laptop and a specialist teaches live. Most families find that the quality of the match matters far more than the tutor's location.",
    },
    {
      question: "Which schools in or near Azamgarh teach IB or IGCSE?",
      answer:
        "We cannot confirm any school inside Azamgarh that teaches the IB or Cambridge or Edexcel IGCSE. The nearest confirmed schools are in Lucknow, such as Modern School, which runs IB PYP, and City Montessori School's Cambridge Campus. Please check current details with any school directly, as offerings change, and note that IB Gram has no connection with them.",
    },
    {
      question: "How can I find an IGCSE tutor for my child in Azamgarh?",
      answer:
        "Send IB Gram your child's board, syllabus code, tier and recent marks, and we will suggest a tutor who has taught that paper. You can write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. A free first lesson follows, so your child can meet the tutor and both of you can decide before any commitment.",
    },
    {
      question: "How much does tuition cost?",
      answer:
        "The rate depends on the programme, level, subject, hour length, weekly frequency and the tutor's experience with your syllabus, and we quote it in writing before your free trial. Because lessons are online, there is no travel cost. We do not publish a price list, since a Class 8 MYP lesson and a Diploma HL Chemistry lesson are different services.",
    },
    {
      question: "Is the first lesson really free?",
      answer:
        "Yes, there is no charge for the first lesson and no obligation to continue. Your child works on a real topic from their own course with the tutor, and you receive a short note afterwards. You can then agree a plan, ask for a different tutor or stop, and you will not be asked for payment for the trial.",
    },
    {
      question: "Can lessons be timed around Ramzan?",
      answer:
        "Yes, and we do this often. During Ramzan, many families prefer lessons after iftar or a lighter schedule, and the days around Eid are kept free. Tutors can shorten sessions, shift them later in the evening, or pause for a week without penalty. Just tell us the pattern that suits the household, and we will fit the tutor's availability to it.",
    },
    {
      question: "My child studies in Lucknow or Dehradun and comes home for holidays. Can you help?",
      answer:
        "Yes, holiday lessons are one of the most common arrangements for Azamgarh families. The tutor reviews the term's weak areas, prepares the next unit and runs extra hours in the long breaks, then reduces the load once school begins. We can also plan for weekends during term if the boarding school allows study time on a laptop.",
    },
    {
      question: "Can tutors write my child's IA or Extended Essay?",
      answer:
        "No, tutors never write, rewrite or edit assessed work for a student. They can explain the criteria, help choose a manageable topic, suggest how to gather data and comment on drafts the student has written. This protects the student, since IB and Cambridge treat malpractice seriously, and it also builds the student's own ability to finish the work.",
    },
    {
      question: "Which subjects do Azamgarh families ask for most?",
      answer:
        "Mathematics, Chemistry and Biology lead the requests, since medical and engineering ambitions are strong, followed by Physics, Economics and English. Many families also ask for TOK and Extended Essay guidance in Grade 12. If you need a language such as Urdu or Hindi at IB or IGCSE level, we can check tutor availability for it.",
    },
    {
      question: "Is Urdu or Hindi available as an IB or IGCSE subject with a tutor?",
      answer:
        "Yes, in most cases. The IB offers Hindi and Urdu at different levels, and Cambridge offers second-language Hindi and Urdu at IGCSE. Tutors help with reading, writing and speaking practice, and many Azamgarh students find these among their strongest subjects. Availability depends on the exact course, so mention it in your brief, and we will check.",
    },
    {
      question: "What if the internet drops during a lesson?",
      answer:
        "If the connection breaks, the tutor can switch to audio and continue on the shared whiteboard, or reschedule with no charge. We ask about your evening speed before the trial, and families in outlying areas such as Sagri may prefer earlier evening slots. Recorded board work and written notes mean a disrupted hour does not lose the lesson.",
    },
    {
      question: "Can my child take NEET or JEE after IB or IGCSE?",
      answer:
        "It is possible, but the eligibility rules are set by the exam authorities and must be checked in their official notices. Both exams require particular subjects, and students from international boards may need to show equivalence. Plan subject choices early, and use our admissions test-prep page for general guidance. Tutors support the science content, though they do not decide eligibility.",
    },
    {
      question: "When are the exams for IB and IGCSE students?",
      answer:
        "IB Diploma exams take place mostly in May, with results in July, and some schools use November. Cambridge IGCSE runs in May-June and October-November, and Pearson Edexcel has January, May-June and November windows. Your school registers you and sets deadlines. Our tutors plan lessons backwards from the actual month your child is sitting papers.",
    },
    {
      question: "Can you help with IB Maths AA and AI?",
      answer:
        "Yes, we teach both courses at HL and SL. Analysis and Approaches covers algebra, calculus and proof, while Applications and Interpretation covers statistics, modelling and technology. Tutors also guide the exploration, from choosing a topic to structuring the write-up, without writing it. Tell us which course and level your child takes, and we shortlist accordingly.",
    },
    {
      question: "How quickly can lessons begin?",
      answer:
        "Many Azamgarh families reach a free trial within a few days of sending their brief. Common subjects and flexible timings are quickest, while a rare subject or a fixed evening can take longer. Including the syllabus code, a recent test paper and your preferred times in your first message saves a round of questions and gets the trial started sooner.",
    },
    {
      question: "Is IB Gram part of any school or examining body?",
      answer:
        "No, IB Gram is an independent tutoring service and is not affiliated with the IB, Cambridge, Pearson Edexcel or any school. We refer to them only to describe syllabuses and the region's schools. Tutors coach students to understand the course and perform in the assessments as they stand, in line with the academic integrity rules.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Lucknow", href: "/lucknow/", description: "The state capital, with the nearest confirmed IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Varanasi", href: "/varanasi/", description: "Online tutoring for the nearest large city to Azamgarh." },
    { label: "Prayagraj tutoring page", href: "/prayagraj/", description: "Tutor matching for families in the Prayagraj region." },
    { label: "Kanpur tutoring page", href: "/kanpur/", description: "How online IB and IGCSE tuition works for Kanpur students." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "What our IB tutors cover from PYP to the Diploma." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects for IGCSE families." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma works, from HL and SL to TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Guidance on entrance exams alongside international boards." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and request a free trial lesson." },
  ],

  closingHeading: "Book a free trial lesson for your Azamgarh student",
  closingBody:
    "Tell us the programme or board, the subject, your child's class and the evenings that suit your household, festivals included. You will hear back with a suggested tutor, a written quote and a trial slot. The lesson comes to your child by screen, with no travel for anyone, and the first session costs nothing.",

  geo: { latitude: 26.0685, longitude: 83.1859 },
  alternateNames: ["Azamgarh city", "Azamgarh UP"],
  wikipedia: "https://en.wikipedia.org/wiki/Azamgarh",
  stripSchools: [],
};
