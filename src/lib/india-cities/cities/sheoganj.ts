import type { CitySeoPage } from "../types";

/**
 * /sheoganj/ - IB and IGCSE tutoring page for Sheoganj, Sirohi district, Rajasthan. Online-only:
 * tutors do not visit homes in Sheoganj (in-person home tuition is limited to Gurugram and parts of
 * Delhi NCR). No school inside Sheoganj could be confirmed as teaching the IB or Cambridge/Edexcel
 * IGCSE, so stripSchools is empty and the clusters use names already confirmed on neighbouring pages.
 */
export const sheoganj: CitySeoPage = {
  slug: "sheoganj",
  countryName: "Sheoganj",
  countryNameLong: "Sheoganj, Rajasthan",
  demonym: "Sheoganj",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times bend around the Sirohi district heat, wedding and Navratri weeks, and the exam series a child has actually entered",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.1417, longitude: 73.0670 },
  wikipedia: "https://en.wikipedia.org/wiki/Sheoganj",
  alternateNames: ["Shivganj", "Sheoganj Sirohi"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sheoganj | Private Tuition Online",
  metaDescription:
    "IB and IGCSE tutors for Sheoganj families in Sirohi district: DP, MYP, PYP and Cambridge or Edexcel IGCSE, live one to one online, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition in Sheoganj, Online",
  heroEyebrow: "SHEOGANJ IB AND IGCSE TUTORING, TAUGHT ONLINE",
  heroSubtitle:
    "Searching for home tuition in Sheoganj for an IB or IGCSE subject usually ends in a blank, because no teacher in town has sat the course. We fix that with private tuition from home, online: one student, one specialist, a live video lesson at your own table. Nobody from IB Gram knocks on a door in Sirohi district, since home visits exist only in Gurugram and parts of Delhi NCR, so the tutor is chosen for the exact syllabus, not for the postcode.",
  primaryKeyword: "IB and IGCSE tutors in Sheoganj",
  secondaryKeywords: [
    "IB tutor Sheoganj",
    "IGCSE tutor Sheoganj",
    "IB home tuition Sheoganj",
    "IGCSE home tuition Sheoganj",
    "IB private tuition Sheoganj",
    "IB Maths tutor Sheoganj",
    "IGCSE Maths tutor Sheoganj",
    "IB Physics tutor Sheoganj",
    "IB Chemistry tutor Sheoganj",
    "IB Biology tutor Sheoganj",
    "IB DP tutor Sheoganj",
    "IB MYP tutor Sheoganj",
    "IB PYP tutor Sheoganj",
    "IGCSE online tuition Sheoganj",
    "IB tutor Sirohi district",
    "online IB tuition Rajasthan",
    "Shivganj IB tutor",
  ],
  heroTrustPoints: [
    "Tutor shortlisted for your child's exact IB or IGCSE course",
    "Free trial lesson before any commitment",
    "Written note after every session, shared with parents",
    "Tutor change on request if the fit is wrong",
    "Rates quoted in writing before you book",
  ],
  heroStats: [
    { value: "Online", label: "one-to-one lessons at home" },
    { value: "PYP to DP", label: "plus Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "before you decide" },
    { value: "IST", label: "Indian-hours scheduling" },
  ],
  imageAltText: "A Sheoganj student in Sirohi district attending a live online IB and IGCSE tutoring session at home on a laptop",

  intro: {
    heading: "Why do Sheoganj families look for IB and IGCSE tutors in Sheoganj at all?",
    paragraphs: [
      "Sheoganj families look for IB and IGCSE tutors because some part of their child's schooling now follows an international syllabus, or soon will, while the town itself teaches almost nothing but the Rajasthan Board and CBSE. The tutor who knows Paper 2 of IB Maths Analysis, or the Extended tier of Cambridge IGCSE Chemistry, simply does not live here, so the search has to leave Sirohi district.",
      "Sheoganj sits on the Abu Road to Pali corridor, with the railway line and the national highway both passing close to the town. Business households, especially trading and Jain merchant families with offices in Ahmedabad, Mumbai or Bengaluru, are the ones who most often ask about the IB. Others are Marwari families whose children board at an international school in Udaipur, Ahmedabad or Jaipur and come home for Diwali, summer and the winter break.",
      "IB Gram exists for that gap. We are an independent tutoring service, with tutors based across India who teach on Indian Standard Time. For Sheoganj the delivery is online only. We do not send anyone to a house in Sirohi district; in-person home tuition is available just in Gurugram and parts of Delhi NCR. What a Sheoganj family receives is private tuition from home, live on a laptop, with a tutor who has taught the specific course before.",
      "The first step is a short message on WhatsApp or email giving the programme, subject, level and exam session. We reply with a shortlist, arrange a free trial lesson, and quote rates in writing before anything is booked. A written note follows every session, so a parent who is busy at the shop or on the road still sees what was covered.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-led primary learning built around units of inquiry rather than textbook chapters. Tutoring at this age is gentle and short: reading fluency, number sense, clear written explanations and the confidence to ask questions in English.",
      countryNote:
        "Sheoganj has no PYP school we could confirm, so PYP help here is usually for a child transferring from a Sheoganj school into an international one elsewhere, who must settle quickly into inquiry-style work.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of concept-driven subjects assessed against criteria, ending in the eAssessment or school-based results. Tutors work on command terms, criterion wording, structured answers and the habits that make DP easier later.",
      countryNote:
        "A boy or girl who moves from a Rajasthan Board classroom into MYP Year 3 or 4 faces a different style of marking. We help bridge criterion-based assessment before the first report arrives.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Higher and Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring focuses on subject content, paper technique and timed practice, never on writing the essay or internal assessments for the student.",
      countryNote:
        "Diploma students from Sheoganj's families are mostly boarders elsewhere or online candidates. Tutors keep to the exam calendar of the school or session the student is actually entered for.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller pathway pairing two or more DP courses with a career-related study, a reflective project and core components. Support stays on the academic subjects the student is actually sitting.",
      countryNote:
        "CP is rare in this part of Rajasthan. Where a family weighs it, we explain honestly how it differs from the full Diploma and which universities treat it differently.",
    },
  ],
  programmesIntro:
    "Whichever IB programme a Sheoganj student follows, the tutor is matched to that level and to the school or exam session behind it. Most local demand starts in the later years, but primary and middle-years help is available too.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, calculus, functions and proof-style reasoning for students aiming at engineering, economics or pure science degrees." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Modelling, statistics and technology-supported problem solving for students heading toward business, social science or design." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with a heavy emphasis on estimating, unit handling and multi-step derivations." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, organic pathways and equilibrium, plus data-based questions that reward careful reading." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, ecology and physiology, with precise terminology and well-structured extended answers." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and the global economy, with diagram discipline and real-world examples a Marwari trading family will recognise." },
    { name: "Business Management", levels: "SL and HL", description: "Organisations, finance, marketing and operations, with case-study technique for the paper based on a pre-released company." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures, networks and the case study, taught alongside regular programming practice." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis, comparative reading and written tasks, with attention to argument and register." },
    { name: "Hindi A / Hindi B", levels: "SL and HL", description: "Literature or language-acquisition work in Hindi, useful for a home where Marwari and Hindi are spoken daily." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to behaviour, research methods and applied studies, with essay structure drilled until it is routine." },
    { name: "Geography", levels: "SL and HL", description: "Population, resources, hazards and fieldwork logic, with data-response and extended-writing practice." },
    { name: "History", levels: "SL and HL", description: "Source analysis, paper structure and essay argument across prescribed topics and a regional study." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching for the exhibition and essay themes, with the student always writing their own submission." },
  ],
  subjectsIntro:
    "These are the IB courses Sheoganj students most often ask us about. Every subject is taught by someone who has handled that course, and the tutor is told the student's level, school pattern and target grade up front.",
  igcseSubjectsIntro:
    "IGCSE can be sat at school or as a private candidate through a Cambridge or Pearson Edexcel centre. We teach the following subjects at Core or Extended tier, with past-paper practice from the board the student is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry, trigonometry and statistics, with timed past papers and heavy attention to method marks." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus, functions and trigonometry at a pace that prepares a student for IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Forces, electricity, waves and thermal physics, plus alternative-to-practical questions that trip many candidates." },
    { name: "IGCSE Chemistry", levels: "Core and Extended", description: "Atomic structure, bonding, reactions and organic chemistry, plus qualitative analysis techniques." },
    { name: "IGCSE Biology", levels: "Core and Extended", description: "Cells, human biology, plants and ecology, with data handling and diagram labelling accuracy." },
    { name: "IGCSE English as a Second Language", levels: "Core and Extended", description: "Reading, writing and speaking tasks for students who think in Hindi or Marwari first." },
    { name: "IGCSE First Language English", levels: "Single tier", description: "Directed writing, narrative and argument, with close feedback on style and control." },
    { name: "IGCSE Hindi as a Second Language", levels: "Single tier", description: "A comfortable scoring subject for most Rajasthan households, still worth structured exam practice." },
    { name: "IGCSE Economics", levels: "Single tier", description: "Basic economic problem, markets, government and trade, with clear definitions and diagrams." },
    { name: "IGCSE Business Studies", levels: "Single tier", description: "Business activity, marketing, finance and operations, built around short-answer and case-study technique." },
    { name: "IGCSE Computer Science", levels: "Single tier", description: "Theory topics and pseudocode problem solving, with regular coding practice outside the lesson." },
  ],

  regionsTitle: "Sheoganj localities and the roads that shape study time",
  regionsIntro:
    "These are the parts of town and nearby places our Sheoganj families mention. Every lesson is online, so the notes below are about school context and when a household has a free hour, not about where a tutor can travel.",
  regions: [
    { name: "Station Road and the railway side", note: "Close to the line and the market. Homes here often double as shop upper floors, so evening lessons depend on when the family closes the shutter." },
    { name: "Bus stand and National Highway frontage", note: "Noisy in the afternoon with truck and bus traffic. A headset with a microphone makes a real difference to a lesson at this end of town." },
    { name: "Main Bazaar and the old town", note: "Jain and trading families with generations in the same house. Study space can be shared, so we suggest a fixed corner and a fixed slot." },
    { name: "Jawai Bandh road side", note: "Looks toward the Jawai dam area in neighbouring Pali district. Power cuts in summer storms are the main hazard to a lesson." },
    { name: "Pindwara road", note: "Leads toward Pindwara and Abu Road, where some students attend school. Late bus returns push lessons to after 7 pm." },
    { name: "Government school area", note: "The usual RBSE and CBSE school catchment. Students here add IB or IGCSE subjects as a private candidate or in preparation for a move." },
    { name: "New colonies on the outskirts", note: "Newer plots and bungalows where internet is generally steadier. A good option for students running two evenings a week." },
    { name: "Villages around Sheoganj", note: "Several students travel in from villages for school. Broadband is patchier, so a mobile hotspot as backup is sensible." },
    { name: "Abu Road, 30 to 40 minutes away", note: "Larger town with more schooling choice and Mount Abu's tourist economy. Some Sheoganj families commute or board there." },
    { name: "Sirohi town, district headquarters", note: "Where several Sheoganj families go for coaching and government work. Students in Sirohi tend to study on the same weekday evenings." },
  ],

  schoolClusters: [
    {
      city: "Sheoganj and Sirohi district",
      note: "We could not confirm any school in Sheoganj itself that teaches the IB or Cambridge or Edexcel IGCSE, and we name none. Local schooling is Rajasthan Board and CBSE, which is why online tutoring does most of the work here.",
      schools: [],
    },
    {
      city: "Nearby: Udaipur",
      note: "The closest large city with confirmed international schools. A handful of Sheoganj families look at boarding here. Listed from the Udaipur page on this site.",
      schools: ["Rockwoods International School", "Seedling The World School", "Crossroads International School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "Many Sheoganj trading families have relatives or offices in Ahmedabad, and its international schools are the next most reachable option by the Abu Road line.",
      schools: ["Calorx Olive International School", "Ahmedabad International School", "Eklavya School"],
    },
    {
      city: "Nearby: Jodhpur",
      note: "Reachable by road and rail through Pali. Only one school is confirmed on our Jodhpur page.",
      schools: ["Bodhi International School, Jodhpur"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to describe the wider region where international programmes exist. IB Gram is an independent tutoring service with no partnership with, endorsement from or affiliation to those schools, the IB, Cambridge or Pearson, and listing a school promises nothing about admission or a seat.",

  modesIntro:
    "Every Sheoganj lesson is live and online, because we do not send tutors to homes outside Gurugram and parts of Delhi NCR. The three modes below differ in rhythm, not in the way the lesson is delivered.",
  modes: [
    {
      title: "Weekly one-to-one subject lessons",
      description:
        "One hour at a fixed time each week with the same tutor, on video with a shared whiteboard and past papers on screen. The default for most Sheoganj students from MYP to DP.",
      bullets: [
        "Same tutor all term for continuity",
        "Written note after each class",
        "Time chosen around the family's shop or office routine",
        "Parents may sit in on the first session",
      ],
    },
    {
      title: "Exam-season intensive blocks",
      description:
        "Short, dense runs of sessions in the weeks before mocks, the May session or the October and November Cambridge and Edexcel series. Often timed for when a boarding student is back in Sheoganj on a break.",
      bullets: [
        "Daily or alternate-day sessions for a limited stretch",
        "Timed papers with line-by-line marking",
        "Topic list built from the last mock",
        "Ends when the exam window closes",
      ],
    },
    {
      title: "Bridging support for school moves",
      description:
        "For a child leaving a Rajasthan Board or CBSE class for an international school, we cover the gap in vocabulary, assessment style and subject content before term begins.",
      bullets: [
        "Gap check against the new school's syllabus",
        "Command terms and answer structure first",
        "English fluency practice built into each lesson",
        "Reduced after the first term settles",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families in and around Sheoganj use the IB or IGCSE?",
      paragraphs: [
        "Within Sheoganj, we could not confirm a single school that teaches the IB or Cambridge or Edexcel IGCSE, so no local school is named on this page. The schooling is Rajasthan Board and CBSE, with a few private English-medium schools, and that is the reality an honest tutoring page should state. Families who want an international syllabus usually look outside the district.",
        "Three kinds of family contact us. The first are trading and business households with offices in Ahmedabad, Mumbai or Surat, who consider the IB because their children may study abroad. The second are families with children already boarding at an international school in Udaipur, Ahmedabad, Jaipur or further afield, who want help during holidays. The third are private candidates, children who prepare for Cambridge IGCSE or Edexcel without a school teacher, entering through an exam centre.",
        "Relatives matter a great deal in this part of Rajasthan. A cousin in Pune or Bengaluru who followed the IB often prompts the question, and a family then asks whether the same route is open to a child living in Sheoganj. The honest answer is that tutoring can support it, but the school, the exam centre and the admission remain separate decisions that the family makes.",
        "IB Gram does not run schools and does not promise places. What we do is assess where a child stands against a particular syllabus, shortlist a tutor who has taught it, and hold a free trial lesson before any commitment. That keeps the decision about schooling with the family while taking away the difficulty of finding someone qualified.",
      ],
    },
    {
      heading: "How do the Rajasthan Board, CBSE, IB and IGCSE compare for a Sheoganj student?",
      paragraphs: [
        "A student in Sheoganj normally follows the Rajasthan Board of Secondary Education (RBSE) or CBSE, and the difference between those and the IB or IGCSE is more about assessment style than about difficulty. The IB and IGCSE ask for explanation, application and structured written answers, where board exams often reward recall of textbook definitions.",
        "The table sets out what changes. It is a summary for planning, not a ranking, and a family should still ask each school how it teaches and assesses. Language is the other change: IB and IGCSE papers are in English, and students who think in Marwari or Hindi need active vocabulary work, especially for sciences and humanities subjects.",
        "For students preparing a move into an international school, the first term is the hard part. Command words such as evaluate, justify and discuss carry specific expectations, and marks depend on showing method. Tutors spend early lessons on how an answer is built, since content gaps are usually smaller than technique gaps.",
        "IGCSE sits between the two systems. It is narrower than the IB Diploma, subject-by-subject, and a student can take it alone as a private candidate. For many Sheoganj families it is the realistic first step, with the IB Diploma or A Levels to follow in Class 11 if a place is found.",
      ],
      table: {
        caption: "Boards compared for a Sheoganj student",
        columns: ["Feature", "RBSE or CBSE", "Cambridge or Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Typical age", "Class 9-12 within the same board", "Class 9-10, ages 14-16", "Class 11-12, ages 16-19"],
          ["Medium", "Hindi or English", "English", "English, with a language option"],
          ["Assessment", "Mostly final board exams", "Final exams in May-June or October-November", "Final exams plus internal assessments and Core"],
          ["Subject choice", "Fixed streams", "Individual subjects chosen one by one", "Six subjects across groups plus three Core parts"],
          ["Available in Sheoganj", "Yes, widely", "Not at a school we could confirm; private candidates possible", "Not locally; nearest options are in other cities"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sheoganj, and what drives the rate?",
      paragraphs: [
        "Tuition rates for IB and IGCSE depend on the tutor and the subject, not on the town the student lives in, and we publish no prices. A rate for a Sheoganj family is quoted in writing before any booking, after we know the programme, level, frequency and the exam date involved.",
        "Four things set the number. The first is level: a Diploma Higher Level Mathematics tutor who has taught several cohorts costs more than someone helping with Class 7 MYP Science. The second is scarcity, as some combinations such as HL Physics with Paper 3 experience are rare. The third is frequency, since a weekly lesson and a daily exam-week block are priced differently. The fourth is whether the student needs a one-term bridge or sustained support through two years.",
        "There is a hidden saving in Sheoganj. Because every lesson is online, a family spends nothing on a drive to Abu Road, Sirohi or Pali, and no evening is lost to a highway commute. A local coaching centre that charges less per hour may deliver less, since a centre built around board exams rarely has anyone who has taught IB papers.",
        "Our protections are simple. The first lesson is free, so you see the tutor teach before paying. If the fit is wrong, we change the tutor on request. And each session ends with a written note, so you can judge the value from evidence rather than from a promise.",
      ],
    },
    {
      heading: "Is online tuition, a local centre, a private home tutor or self-study right for IB in Sheoganj?",
      paragraphs: [
        "For an IB or IGCSE subject in Sheoganj, a specialist online tutor is generally the only option that supplies someone who has actually taught the course. A local centre or a private teacher can be excellent for CBSE and RBSE, but few have handled IB command terms or Cambridge mark schemes, so the fit with an international syllabus is rarely there.",
        "Self-study is a real option for a motivated student, particularly for IGCSE, and we do not pretend otherwise. Past papers and mark schemes from the examining boards are freely available. The difficulty is feedback: a student cannot easily see why a response lost marks, and a few weeks of misunderstanding can harden into habit.",
        "The comparison below is deliberately plain. Choose by what your child needs this term. Some Sheoganj students combine options, keeping their school or a local teacher for the main curriculum and adding an online tutor for the one international subject that nobody nearby can teach.",
        "Another point is continuity. Local coaching in a small town sometimes closes or changes timings after a season. An online arrangement is portable: if the family moves to Ahmedabad or the student starts boarding in Udaipur, the same tutor continues from the same slot.",
      ],
      table: {
        caption: "Ways to study an IB or IGCSE subject from Sheoganj",
        columns: ["Option", "Specialist knowledge", "Flexibility", "Main limit"],
        rows: [
          ["Online one-to-one with IB Gram", "Tutor has taught the specific course", "Slots set around the family", "Needs steady internet and a quiet corner"],
          ["Local coaching centre", "Usually board-exam or JEE focused", "Fixed batch timings", "Rarely any IB or IGCSE experience"],
          ["Private home tutor from Sheoganj or Sirohi", "Strong for school subjects, thin on international papers", "Negotiable, but travel dependent", "May not know command terms or mark schemes"],
          ["Self-study with past papers", "Depends on the student", "Complete", "No feedback on why marks were lost"],
        ],
      },
    },
    {
      heading: "What does the exam calendar look like around Sheoganj's year?",
      paragraphs: [
        "IB Diploma exams run in two sessions, May and November, and IGCSE has a May-June series and an October-November series, with Edexcel adding a January window for some subjects. The calendar below is where those meet Sheoganj's year, so lessons are planned around real constraints, not an abstract timetable.",
        "Summer in Sirohi district is hot, and April to June can make an afternoon lesson uncomfortable and, in an outage, impossible. We schedule early mornings or after 6 pm, and we ask for a mobile hotspot as backup. Monsoon, roughly July to September, brings the opposite problem of storms that interrupt power, though it also brings a pleasantly cool run of study evenings.",
        "Festivals reshape the autumn. Navratri and Garba evenings, Dussehra and then Diwali break up October and November, which is exactly when Cambridge and Edexcel candidates sit papers. Families who travel to Ahmedabad for Diwali should tell us early, so that a student does not go two weeks without revision before a paper.",
        "Wedding season, which runs through the winter months, also takes whole evenings in a joint family. We prefer a smaller, regular slot to a long, often-cancelled one, and we plan intensive blocks for the gaps between functions.",
      ],
      table: {
        caption: "Exam sessions and Sheoganj calendar effects",
        columns: ["Period", "What is happening", "Local effect", "Tutoring focus"],
        rows: [
          ["January to March", "Mocks, IA deadlines at school, Edexcel January series", "Cool weather, steady study", "Past papers and IA question coaching"],
          ["April to June", "IB May session, IGCSE May-June series", "Peak heat and power cuts", "Early-morning slots, timing practice, hotspot backup"],
          ["July to September", "New academic year, new programme starts", "Monsoon storms", "Foundation building and bridging"],
          ["October to November", "IGCSE October-November series, IB November session", "Navratri, Dussehra, Diwali travel", "Plan around holidays, revise before leaving town"],
          ["December", "Mock preparation, wedding season", "Family functions", "Short, regular lessons"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Sheoganj go for university?",
      paragraphs: [
        "A student with an IB Diploma or IGCSE and A Level results from Sheoganj has several routes: Indian universities that recognise the qualification, CUET-UG for central universities, and applications abroad. The right route depends on the course, the subjects chosen in Class 11 and the family's budget.",
        "The Association of Indian Universities issues equivalence for the IB Diploma and for Cambridge qualifications, and most Indian universities accept it for admission. For engineering through JEE Main and medicine through NEET-UG, eligibility rules are set by the exam bodies, and an international-board student should read the current notice carefully, since subject requirements such as Physics, Chemistry and Mathematics or Biology must be met.",
        "CUET-UG, the central entrance test, is a common route to Delhi University, Banaras Hindu University and other central universities. State universities in Rajasthan, including Mohanlal Sukhadia University in Udaipur and the universities of Jodhpur and Jaipur, each publish their own rules for foreign-board candidates.",
        "Study abroad is the reason many families choose the IB at all. The United Kingdom, Canada, Australia, the United States and Singapore each treat predicted grades and final scores differently. We do not guarantee admission anywhere; our job is to help a student reach the marks that keep the options open.",
      ],
      bullets: [
        "AIU equivalence for Indian admission to most universities",
        "CUET-UG for Delhi University, BHU and other central universities",
        "JEE Main and NEET-UG eligibility checked against the current notice",
        "UK, Canada, Australia, US and Singapore applications based on predicted and final scores",
      ],
    },
    {
      heading: "How are IB Mathematics AA, Mathematics AI and the sciences taught online?",
      paragraphs: [
        "IB Mathematics: Analysis and Approaches is for students who enjoy algebra and calculus and may study engineering, physics or mathematics; Applications and Interpretation suits statistics, modelling and technology-supported work. The choice should be made on the university course and on the student's comfort, not on a belief that one is easier.",
        "Online, a tutor writes on a shared whiteboard while the student attempts the next step in their own hand, so the work remains the student's. Past-paper questions are used for timing, and a tutor marks against the official scheme, noting method, accuracy and answer marks separately. Many students lose marks on the graphing calculator or on communication, not on understanding.",
        "Physics, Chemistry and Biology follow a similar rhythm. In Physics we practise unit analysis, uncertainty and multi-step derivations. In Chemistry the focus is mole calculations, organic pathways and data questions. In Biology it is vocabulary precision and structured long answers. HL students also meet Paper 3 option content and Paper 1B data questions.",
        "Practical work is a school activity, and tutors do not write or edit Internal Assessments. They can explain what a good research question looks like, how uncertainty is treated and how a conclusion is evaluated. The writing remains the student's, as the IB requires.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which should a Sheoganj student choose?",
      paragraphs: [
        "IGCSE Core papers cap the available grade at C, whereas Extended papers cover grades from A* to G, so a student aiming at the IB Diploma, A Levels or competitive science courses should normally sit the Extended tier for Mathematics and the sciences. Core is a sensible choice only for a student who needs a solid pass and has no plan to continue in that subject.",
        "The decision is often made by a school, but a private candidate in Sheoganj decides alone. We run a short diagnostic in the first lesson, with a mix of Core and Extended questions, and advise on tier honestly. Moving up later is possible if the entry deadline for the session has not passed.",
        "Subject choice matters as much as tier. A typical Sheoganj student takes Mathematics, English as a Second Language, one or two sciences and Hindi or Business. Hindi as a Second Language is a scoring subject for a Marwari-speaking household, while Economics and Business Studies suit families whose children grow up in shops and offices.",
        "Entry for private candidates needs an authorised exam centre, and the nearest centres are in larger cities. Fees, dates and rules change, so a family should confirm them directly with Cambridge or Pearson and with the centre before enrolling. We help with planning but do not process entries.",
      ],
      table: {
        caption: "Core and Extended tiers compared",
        columns: ["Point", "Core", "Extended"],
        rows: [
          ["Highest grade available", "C", "A*"],
          ["Best for", "Students not continuing the subject", "Students heading to IB, A Level or a science degree"],
          ["Content", "Foundation topics", "Full syllabus with harder algebra, calculus-lite and proofs"],
          ["Papers", "Shorter, more structured", "Longer, with unfamiliar-context questions"],
        ],
      },
    },
  ],

  process: [
    { title: "Send the details", description: "Message us on WhatsApp or email with the programme, subject, level, school or board, and the next exam date." },
    { title: "Receive a shortlist", description: "We name one or two tutors who have taught that exact course and explain why each suits your child." },
    { title: "Take the free trial", description: "The first lesson is free, held live on video, so the student and parent can judge the teaching first." },
    { title: "Confirm rates in writing", description: "If the trial goes well, we send the rate and schedule in writing before anything is booked." },
    { title: "Learn and review", description: "A note follows each lesson, and the plan is reviewed every few weeks. The tutor can be changed if needed." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "We match to the IB subject or IGCSE code, not just to a general school subject." },
    { title: "Free trial first", description: "You see the lesson before paying, and you can say no." },
    { title: "Written session notes", description: "After each lesson parents get a short note, helpful for busy families with shops and travel." },
    { title: "Tutor change on request", description: "A mismatch is fixed quickly, without awkwardness." },
    { title: "Honest about limits", description: "We say plainly that tutors do not visit Sheoganj and that we do not write coursework." },
    { title: "Indian hours", description: "Tutors teach on IST, so evenings after school are normal teaching time." },
  ],

  faqs: [
    {
      question: "Can an IB tutor come to my home in Sheoganj?",
      answer:
        "No, IB Gram tutors do not visit homes in Sheoganj. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Sheoganj, home tuition means online: a live one-to-one lesson that your child attends from home on a laptop, with the same attention and a shared whiteboard. Many parents find it easier, since no tutor has to travel through Sirohi district traffic and no evening is lost.",
    },
    {
      question: "Is there any school in Sheoganj that teaches the IB or IGCSE?",
      answer:
        "We could not confirm one, so we name no school in Sheoganj. Local schooling is Rajasthan Board and CBSE. Families who want an international syllabus look to Udaipur, Ahmedabad, Jaipur or Jodhpur, or prepare a child as a private candidate. If you know of a school in your area that teaches either, tell us and we will tailor tuition to its syllabus and calendar.",
    },
    {
      question: "Can my child take IGCSE as a private candidate from Sheoganj?",
      answer:
        "Yes, in principle, through an authorised Cambridge or Pearson Edexcel exam centre in a larger city. A private candidate must find a centre, register in time and arrange practical assessment for science subjects. We can teach the whole syllabus online, but please confirm centre availability, fees and deadlines with the board directly, because they change each session.",
    },
    {
      question: "What does IB tuition cost for Sheoganj students?",
      answer:
        "We do not publish prices, because the rate depends on the tutor, subject, level and how often lessons run. We quote the rate in writing before you book, after the free trial. Higher Level Diploma subjects and scarce combinations cost more than Class 6 MYP help, while the online format saves travel costs that a family would otherwise bear in a district town.",
    },
    {
      question: "Which IB subjects are most in demand from Sheoganj?",
      answer:
        "Mathematics, Physics, Chemistry, Economics and Business Management are asked for most, which fits the trading and business backgrounds in many Sheoganj homes. English is a close second, since the IB and IGCSE are taught and examined in English. Hindi appears as a scoring subject. Tell us your child's six subjects and we match tutors one by one.",
    },
    {
      question: "How do I choose between IB Mathematics AA and AI?",
      answer:
        "Choose Analysis and Approaches if your child enjoys algebra, calculus and proof, and may study engineering, mathematics or physics. Choose Applications and Interpretation for statistics, modelling and technology-supported work, which suits business, social science or design courses. Check the entry requirements of the target university course before deciding, because some insist on AA. A tutor can run a short diagnostic to help the choice.",
    },
    {
      question: "Will the tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No. IB Gram tutors coach and never write Internal Assessments, Extended Essays, TOK essays or any coursework. They can explain what the criteria reward, discuss how to frame a research question and give feedback on method. The writing, analysis and conclusions must be the student's own, as the IB and examining boards require. We will decline any request to do otherwise.",
    },
    {
      question: "Does Sheoganj internet allow stable online lessons?",
      answer:
        "Usually yes, with some care. Broadband or a good mobile connection is enough for video and a shared whiteboard. Storms and summer power cuts are the main risks, so keep a charged laptop, a mobile hotspot as backup and a quiet corner. If a lesson is cut short by an outage, we reschedule it rather than charge for the lost time.",
    },
    {
      question: "What time are lessons held, given the Sirohi district heat?",
      answer:
        "Most lessons run between 6 pm and 9 pm, or early morning on holidays. In April to June we suggest early slots before the heat builds, or evenings after it eases. Tutors teach on Indian Standard Time, so there is no time-zone adjustment. We agree a fixed weekly slot and can move it around festivals, weddings and exam weeks.",
    },
    {
      question: "My child boards at a school in Udaipur or Ahmedabad. Can tuition continue during holidays?",
      answer:
        "Yes, and it works well. Holiday blocks while the student is home in Sheoganj can be daily and focused, while term-time lessons can run on weekends or in the boarding house's study hour if the school allows. The same tutor continues wherever the student is, with the school's syllabus and calendar as the guide.",
    },
    {
      question: "Which IGCSE boards do you teach, Cambridge or Edexcel?",
      answer:
        "Both. Cambridge IGCSE and Pearson Edexcel International GCSE differ in paper structure, mark scheme wording and some syllabus content, so we match the tutor to the board the student is entered for. Tell us the exact syllabus code, such as 0580 for Cambridge Mathematics, and we will use papers from that board only.",
    },
    {
      question: "Is IB or IGCSE accepted for Indian universities?",
      answer:
        "Generally yes. The Association of Indian Universities issues equivalence for the IB Diploma and for Cambridge qualifications, and most Indian universities accept them, though rules vary by course. For JEE Main, NEET-UG and CUET-UG, eligibility depends on the current notice, so check subject requirements before choosing Class 11 subjects. We advise on planning but cannot decide admission.",
    },
    {
      question: "Do you offer help for PYP and MYP students in Sheoganj?",
      answer:
        "Yes, though demand is smaller. PYP help is short and gentle, focusing on reading, number sense and clear written English. MYP help centres on subject understanding and criterion-based assessment. Most requests in Sheoganj come from children preparing to join an international school elsewhere, where the first term can feel steep without some bridging work.",
    },
    {
      question: "How soon can we start?",
      answer:
        "Usually within a few days of your first message. We reply with a tutor shortlist, arrange the free trial at a time that suits you, and start regular lessons once rates are agreed in writing. If an exam is close, tell us the date and we plan an intensive block so that the highest-value topics come first.",
    },
    {
      question: "Are you affiliated with the IB, Cambridge, Pearson or any school?",
      answer:
        "No. IB Gram is an independent tutoring service with no affiliation to the International Baccalaureate, Cambridge, Pearson or any named school. We teach to the published syllabuses and do not issue certificates, arrange admissions or promise results. School names on this page are only context for the wider region.",
    },
    {
      question: "How do I contact IB Gram from Sheoganj?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. Give the programme, subject, level, school or board and any exam date. We reply with a shortlist and offer a free trial lesson. There is no obligation, and rates are given in writing before you book anything.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page for families outside the big metros." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB tutoring by programme and subject." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects and tiers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How we support Diploma subjects without touching coursework." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criterion-based help for Years 1 to 5." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the teachers behind the matches." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your subject and level for a shortlist." },
    { label: "IB tutors in Sirohi", href: "/sirohi/", description: "The neighbouring district headquarters page." },
    { label: "IB tutors in Udaipur", href: "/udaipur/", description: "The nearest city with confirmed international schools." },
    { label: "IB tutors in Pali", href: "/pali/", description: "A nearby Rajasthan town served online." },
  ],

  tutorsIntro:
    "Every tutor below teaches from India on live video, so a Sheoganj student in Sirohi district gets the same one-to-one lesson as a family in any metro city. Ask for the programme, subject and exam session you need, and we will match a tutor who has already taught that course. Evening and weekend slots are easy to arrange around the Abu Road and Pindwara school runs.",

  closingHeading: "Start with one free lesson from a tutor who knows your syllabus",
  closingBody:
    "Send us the programme, subject and exam date from Sheoganj, and we will reply with a shortlist and a free trial lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp. Rates are given in writing before you book.",
};
