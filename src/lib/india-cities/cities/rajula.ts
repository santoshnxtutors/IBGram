import type { CitySeoPage } from "../types";

/**
 * /rajula/ - IB and IGCSE tutoring page for Rajula, Amreli district, Gujarat (plan rank 862). No IB or
 * Cambridge/Edexcel school could be confirmed in Rajula or Amreli district, so stripSchools is empty;
 * clusters reuse the Rajkot, Ahmedabad and Vadodara school names already verified on neighbouring city
 * pages. Online one-to-one only (homeTuition false). Local facts (Pipavav port, Kovaya cement, Dhatarwadi
 * river, Kumbhnath fairs, GMB Polytechnic, local schools) come from the town's Wikipedia article.
 */
export const rajula: CitySeoPage = {
  slug: "rajula",
  countryName: "Rajula",
  countryNameLong: "Rajula, Amreli district, Gujarat",
  demonym: "Rajula",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are placed around the Saurashtra monsoon, the long Diwali vacation, Uttarayan week and the hours your child spends in class",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.0500, longitude: 71.4333 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajula",
  alternateNames: ["Rajula Amreli", "Rajula Gujarat", "Rajula Saurashtra", "Rajula Pipavav"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajula | Online Home Tuition",
  metaDescription:
    "Rajula, Amreli: live one-to-one online IB and IGCSE tutors for DP, MYP, PYP and Cambridge or Edexcel, taught from home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rajula",
  heroEyebrow: "IB & IGCSE TUITION FOR RAJULA FAMILIES",
  heroSubtitle:
    "Private tuition from home for Rajula students on an international syllabus. Port-town and Saurashtra families who want IB or IGCSE support meet a tutor on a live video call, one student at a time, and see a full trial lesson before deciding anything.",
  primaryKeyword: "IB and IGCSE tutors in Rajula",
  imageAltText: "A Rajula student working through an IB Maths problem with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Rajula",
    "IGCSE tutor Rajula",
    "IB home tuition Rajula",
    "IGCSE home tuition Rajula",
    "IB private tuition Rajula",
    "IB Maths tutor Rajula",
    "IGCSE Maths tutor Rajula",
    "IB Physics tutor Rajula",
    "IB Chemistry tutor Rajula",
    "IB Biology tutor Rajula",
    "IB DP tutor Rajula",
    "IB MYP tutor Rajula",
    "IB PYP tutor Rajula",
    "IGCSE online tuition Rajula",
    "Cambridge IGCSE tutor Rajula",
    "online IB tutor Rajula Gujarat",
    "IB tutor Pipavav",
    "IGCSE tutor Amreli district",
    "IB tutor Saurashtra coast",
  ],

  heroTrustPoints: [
    "Lessons run live on a laptop while your child stays at home in Rajula or at the family's Pipavav-side address",
    "A tutor who has taught your child's exact IB or Cambridge syllabus this year, not a generalist",
    "A complete trial lesson, free, with a short written note afterwards",
    "No tie to the IB, Cambridge, Pearson Edexcel or any school named on this page",
  ],
  heroStats: [
    { value: "Online only", label: "Tutors do not visit homes in Rajula" },
    { value: "PYP to DP", label: "All four IB stages" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "May & Nov", label: "Both exam series planned for" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition means for a family in Rajula",
    paragraphs: [
      "Private tuition from home is the phrase most Rajula parents type when they begin looking, and it needs an honest answer straight away. Our tutors teach live over video. They do not come to a house in Rajula, and home visits are limited to Gurugram and parts of Delhi NCR. What a Rajula family gets instead is one-to-one lessons at the kitchen table or study desk, with a tutor chosen for the exact IB or IGCSE course rather than whoever lives nearest.",
      "The town sits on the Dhatarwadi river in Amreli district, a short run from the Arabian Sea, and its working life is quarrying, groundnut and cotton farming, cement at nearby Kovaya and the cargo traffic of Pipavav port. Families linked to the port, the cement plants and the shipping trade sometimes carry international schooling in their plans because of postings, relatives abroad or a child who may study overseas. Most school options within the district follow the Gujarat board or CBSE, so international study is usually a deliberate choice made at home.",
      "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre inside Rajula or Amreli district. That is why this page speaks plainly about Rajkot, Ahmedabad and Vadodara, the cities where Saurashtra and Gujarat families actually find those schools, and why most of the work here is an online tutor beside a child who is studying a syllabus that nobody in town teaches.",
      "IB Gram is an independent tutoring service. It has no commercial link with the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here. Tutors coach and explain; they never write an Internal Assessment, Extended Essay, TOK essay or piece of coursework for a student.",
    ],
    bullets: [
      "IB support from PYP to the Diploma, including HL and SL subjects",
      "Cambridge and Pearson Edexcel IGCSE matched to the syllabus code",
      "Live video lessons on Indian Standard Time, no travel",
      "A written note after each session so parents see progress",
      "Home visits are not offered in Rajula; they run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "With no IB school in Amreli district that we can confirm, a Rajula family reaches the four IB programmes by one of three routes: a child enrolled at a school in Rajkot or Ahmedabad, a child following the course through an overseas or online school, or a family preparing for a move. The tutoring changes shape with each, so we ask which one applies before suggesting a plan.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised around units of inquiry, with a final Exhibition where the student investigates a question of their own. There is no external exam, so a tutor spends the time on reading aloud, number fluency and helping a young learner put a thought into a full sentence in English.",
      countryNote: "In Rajula this stage mostly interests parents who expect a transfer abroad, or who want an English-reading habit built early in a Gujarati-speaking household.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is assessed against published criteria in every subject, and Year 5 ends with a Personal Project that the student runs largely alone. Many pupils stumble when marks stop depending on recall and begin depending on explaining why, which is exactly where a patient tutor helps.",
      countryNote: "A Rajula MYP student is typically enrolled at a school in another city, or following the syllabus on a screen from home, and needs a tutor who can read the criteria the way the teacher does.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose three Higher Level and three Standard Level subjects, add Theory of Knowledge and write a 4,000-word Extended Essay. Internal assessments carry a meaningful share of each grade, so steady work through the two years matters more than a last-term sprint.",
      countryNote: "Anyone in Rajula taking the Diploma is far from a school that teaches it, which makes weekly one-to-one lessons the main academic support rather than a top-up.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses is combined with a career-related study, a reflective project and a personal development component. Few schools in India run it, so most CP tutoring is simply Diploma-level subject help.",
      countryNote: "CP questions from Rajula are rare; when they appear they come from families who found the route through an overseas school.",
    },
  ],

  subjectsIntro:
    "Subject tutoring starts with the exact course and level the student sits, whether that is IB Maths AA HL or Cambridge IGCSE Physics, and with the next assessment date. Rajula families tell us they want an explainer who works from the actual specification, so each tutor is shortlisted on that basis.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus and functions carry this course, and the marks are lost in unfamiliar setups rather than in algebra. Sessions keep a bank of fresh questions so the student meets problems they have not memorised." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and graphing-calculator fluency decide results here. We drill reading a regression output and justifying a model in a sentence, and help pick a manageable exploration topic early." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics and waves feel clear on paper and slip under a clock. Timed practice with command terms, plus a clean experimental design for the internal assessment, is where most of the hours go." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic reaction pathways and equilibrium calculations need repetition more than inspiration. A tutor builds a map of reactions the student can redraw from memory and checks lab write-ups against the criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "A great deal of vocabulary hides a few big ideas. Sessions link topics such as enzymes, inheritance and ecology so long-answer questions read as one argument instead of a list of facts." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy earns quick marks, and real-world examples earn the rest. A student with a port or cement industry on their doorstep has ready material for trade, externalities and market structure questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers reward applying a model to the company on the page. Rajula's family firms and export-linked trade give useful comparison points for discussing growth, finance and operations." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 commentary and the Individual Oral reward close reading practice. For a Gujarati-medium student this often means building comfortable written English before polishing analysis." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming practice runs alongside theory topics such as networks and databases, and the solution project needs documentation that matches what the code truly does." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be recalled accurately and then used to build an argument. We practise short evaluative paragraphs until the structure becomes automatic." },
    { name: "IB Geography", levels: "HL / SL", description: "Coastal processes, natural hazards and resource use all have Saurashtra case material nearby, from erosion along the shoreline to the cyclone that crossed this coast in 2021." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1 and a sustained argument for Paper 2 are taught as separate skills first, then combined. Gujarat's own princely-state history can supply illustrations." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A natural choice for students from a Gujarati-speaking home, with oral practice and the written text types the paper expects." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking, energy and pollution questions fit a coastal industrial region. Students learn to weigh evidence rather than only describe it." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions work as structured conversation: testing an exhibition commentary, challenging the knowledge question, and rehearsing how to defend a claim. The student writes their own essay." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE courses are available as tuition for Rajula students, whether the child is at a school elsewhere in Gujarat or studying as a private candidate through an approved centre. The choice of board comes first, because the paper structure and the mark scheme language differ between them.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended-tier students need speed without a calculator for some papers and exact working for all of them. We drill the topics that tip a grade, such as algebraic manipulation and trigonometry." },
    { name: "IGCSE Physical Sciences and Physics", levels: "Core / Extended", description: "Formula rearranging, units and describing an experiment in order are the recurring weak points. Practice follows past papers from the matching board." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, bonding and the reactivity series reappear on every paper, so the first weeks build calculation confidence before moving to the descriptive topics." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Students learn to answer exactly what the question asks, with the right amount of detail for the marks on offer." },
    { name: "IGCSE English as a First Language", levels: "Extended", description: "Writing for effect and summary skills improve through drafting and feedback. A Gujarati-medium learner gets pronunciation-free, text-based practice." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading comprehension, directed writing and the speaking endorsement are covered in a graded sequence that suits students who use English mainly at school." },
    { name: "IGCSE Economics", levels: "Extended", description: "Definitions, diagrams and a short evaluation make up most marks. Local trade and industry give examples that stick." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Case-based questions on a firm's choices; a tutor teaches the family-business student to bring in terms like profit, cash flow and marketing mix with precision." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Algorithms and pseudocode are practised on paper because the exam is written, alongside enough programming to make the logic feel real." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core", description: "A comfortable subject for most Rajula students, with emphasis on formal letter writing and structured oral answers." },
  ],

  regionsTitle: "Rajula and the Pipavav coast: neighbourhoods and timing",
  regionsIntro:
    "Online lessons do not depend on where a student lives, but the school day, the power supply and the festival calendar do. These are the parts of Rajula and its neighbourhood our families most often mention, with the practical points that shape lesson times.",
  regions: [
    { name: "Rajula town centre and bus stand", note: "The busiest stretch of the town and where many families have shops. Evening lessons after 7 pm avoid the market rush and suit students who help at a family business after school." },
    { name: "Chhatadiya side", note: "A short distance from the bus stand, popular with households of schoolteachers and local traders. Many students here walk to a nearby Gujarati-medium or CBSE school and begin lessons by 5 pm." },
    { name: "Along the Dhatarwadi riverbank", note: "Quieter residential lanes near the river and the Kumbhnath area. During the Kumbhnath fairs at Raksha Bandhan and Janmashtami, lessons shift to later slots because traffic and visitors fill the roads." },
    { name: "Kovaya and the cement belt", note: "Home to families tied to the cement plants. Shift work for parents often means the student studies with a grandparent nearby, so weekend morning slots are common." },
    { name: "Pipavav port and shipyard side", note: "Port staff and contractors live along this stretch. Transfers and contract changes are why some children here need a tutor who can follow a syllabus across a change of school." },
    { name: "Along the highway towards Mahuva and Bhavnagar", note: "Villages and roadside settlements within Rajula taluka. Mobile data holds up better in the evening, so we plan a test call before the first session and keep a phone hotspot as a fallback." },
    { name: "Towards Savarkundla and Amreli", note: "Families on this inland side of the district sometimes look to Amreli town and Rajkot for school choices, and use evenings and Sundays for tutoring." },
    { name: "Dungar, Chanch and nearby villages", note: "Some of the 72 villages of the taluka send children to Rajula for school. A tutor can work with a single weekly slot when travel time eats the weekday." },
    { name: "Jafrabad and the coast road", note: "The shoreline settlements. Summer humidity and the occasional cyclone warning can disrupt evenings, so lessons are rescheduled without charge when the weather or power fails." },
  ],

  schoolClusters: [
    {
      city: "Rajula and Amreli district",
      note: "Local schools include Saraswati group schools, Shree Swaminarayan Gurukul and St. Thomas High School, which follow state or national boards. We could not confirm any school in Rajula or elsewhere in Amreli district that teaches the IB or Cambridge or Edexcel IGCSE, so those syllabuses are followed through a tutor.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "Roughly 190 kilometres inland, Rajkot is the nearest big city with a confirmed IGCSE school, and a number of Saurashtra families weigh a move or boarding there.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "The main Gujarat hub for IB and Cambridge schooling, several hours away by road. Families usually visit for admissions and use tutoring to prepare the child before a transfer.",
      schools: ["Ahmedabad International School", "Calorx Olive International School", "Udgam School for Children"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Another established option for Gujarat families who plan a relocation, with an IB-affiliated school that welcomes students from across the state.",
      schools: ["Navrachana International School"],
    },
  ],
  schoolDisclaimer:
    "School names are listed only to show where families from Saurashtra look for international schooling. IB Gram is independent of every school mentioned, none has endorsed this page, and you should check current curriculum offerings with each school directly.",

  modesIntro:
    "Every Rajula family gets the same core service, a live tutor on a screen, and chooses how often and how long. We do not send anyone to the house; the formats below describe how online lessons are arranged.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "The standard format. The student sits at home with a laptop, headphones and a notebook, and a tutor teaches them alone for an hour.",
      bullets: ["Shared whiteboard and past-paper marking", "Written note after every lesson", "Recorded on request for revision"],
    },
    {
      title: "Online small group",
      description: "Two or three students from the same year share a tutor, useful for siblings or classmates who share a syllabus and an exam date.",
      bullets: ["Lower cost per child", "Matched by subject and level", "Falls back to one-to-one if pace differs"],
    },
    {
      title: "Intensive exam blocks",
      description: "A run of sessions in the weeks before the May or November series, or before a mock exam, focused on timed papers and mark-scheme practice.",
      bullets: ["Weekend and holiday scheduling", "Past papers marked line by line", "Plans built around Diwali and Uttarayan breaks"],
    },
  ],

  sections: [
    {
      heading: "Which schools and families in Rajula look at IB or IGCSE?",
      paragraphs: [
        "Within Rajula itself, the schools families name are the Saraswati group of schools, Shree Swaminarayan Gurukul and St. Thomas High School, alongside a women's arts and commerce college and the GMB Polytechnic that opened in 2016. None of these has been confirmed as an IB World School or a Cambridge or Edexcel IGCSE centre, and we have found nothing for the wider Amreli district either.",
        "That does not make international syllabuses irrelevant to the town. Families linked to Pipavav port, shipping agencies, the cement plants at Kovaya and the quarry trade meet people who work in the Gulf, East Africa and the United Kingdom, and some ask whether a child should follow a syllabus that travels well. Others are returning to Saurashtra after years abroad with children who were taught on the IB or Cambridge pathway and who do not want to lose continuity.",
        "A third group is simply ambitious. A Class 8 student who wants to study engineering, design or medicine overseas may begin IGCSE Maths and Sciences privately, take the exams through an approved centre, and later move to an A Level or IB Diploma school in another city.",
        "Whichever route applies, a tutor works from the course specification, not from the school name. We ask for the board, the subject code, the exam series and the latest school report before the trial lesson so the first hour is spent teaching and not guessing.",
      ],
      bullets: [
        "Port, shipping and cement-industry households with postings or overseas ties",
        "Families returning to Saurashtra with a child already on an international syllabus",
        "Students preparing for IGCSE as private candidates before a move to Rajkot or Ahmedabad",
        "Parents who want a second, stronger track beside the Gujarat board",
      ],
    },
    {
      heading: "How do Gujarat board, CBSE, IB and IGCSE compare for a Rajula student?",
      paragraphs: [
        "Most Rajula students follow the Gujarat Secondary and Higher Secondary Education Board, taught largely in Gujarati, or CBSE in English. Both are exam-centred, with a Class 10 board paper and a Class 12 stream choice leading to GUJCET, JEE Main or NEET. They reward accuracy against a fixed textbook and a predictable paper.",
        "The IB Diploma and IGCSE ask for something different. Questions are written to test understanding in unfamiliar settings, a share of the grade comes from internal work done through the year, and answers are marked against command terms such as justify, evaluate and discuss. A student coming from a textbook-led classroom often needs several weeks to adapt, which is the period where a tutor adds most.",
        "Language matters too. A child who has learned science in Gujarati must now write explanations in English, so the first lessons often rebuild vocabulary before touching difficult content. This is a normal step and it passes faster than parents expect when the practice is regular.",
        "The table below gives a plain side-by-side view. It is a guide for a conversation with a school or counsellor, not a recommendation to switch.",
      ],
      table: {
        caption: "How the main school qualifications differ for a Rajula family",
        columns: ["Feature", "Gujarat Board", "CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Medium of instruction", "Gujarati or English", "English or Hindi", "English", "English"],
          ["Assessment style", "Final board papers", "Final board papers plus internals", "Exams plus internal assessments and Extended Essay", "Exam papers, some coursework by subject"],
          ["Typical age band", "Class 9-12", "Class 9-12", "Class 11-12", "Class 9-10"],
          ["Indian entrance links", "GUJCET, JEE Main, NEET", "JEE Main, NEET, CUET", "CUET, NEET and JEE after AIU equivalence", "Leads to A Level, IB or Class 11 in India"],
          ["Local availability", "Throughout Amreli district", "Several schools in the district", "Not confirmed locally; Rajkot, Ahmedabad, Vadodara", "Not confirmed locally; Rajkot, Ahmedabad"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Rajula family?",
      paragraphs: [
        "Because rates depend on the tutor and the course, we do not publish a price list; we quote in writing after a short conversation and before the trial lesson is booked. The cost question is still easy to answer in principle, because only a handful of things move the figure.",
        "The first is the level. Preparing a Class 8 child for IGCSE Maths asks less of a tutor than guiding an IB Physics HL student through the internal assessment. The second is the tutor's depth in that exact syllabus, for instance a former examiner or a long-serving teacher in a Diploma school. The third is frequency, since two sessions a week through a term cost more than a fortnightly check-in, though they also change results more.",
        "Group sessions lower the per-student cost where two or three children share a syllabus. Short exam blocks cost less overall than a year-round plan but cannot replace steady study.",
        "Rajula families should compare the quote against what they currently spend on coaching, travel and uncertainty. Online lessons remove petrol, fares and the time spent going to a larger town, which is often the biggest hidden cost for a family on the coast road. Ask for the trial lesson first, and judge value by what the child can do afterwards.",
      ],
      bullets: [
        "Level of the course and tutor experience",
        "Number of sessions each week",
        "One-to-one or small group",
        "Exam-season blocks versus a year-round plan",
      ],
    },
    {
      heading: "Online home tuition, local coaching or self-study: what works in Rajula?",
      paragraphs: [
        "Rajula has coaching classes for the Gujarat board, JEE and NEET, and a few teachers who give home tuition for CBSE. What the town lacks is a person who has taught the IB Maths AA syllabus or the Cambridge Chemistry paper this year. That gap is the reason online tuition has become the realistic route for international syllabuses.",
        "Self-study is possible for a disciplined older student with good textbooks and past papers, but it breaks down at two points: knowing whether a written answer would earn the marks, and finding someone to talk through a difficult idea. A tutor addresses both, and an hour a week can unblock a month of confusion.",
        "A local coaching class built for a different syllabus tends to teach to a different test. An online tutor starts from the mark scheme the examiner will use.",
        "The comparison below shows the main trade-offs. Home visits by IB Gram tutors are not offered in Rajula, so the real choice is between online lessons, a local teacher with the wrong syllabus and working alone.",
      ],
      table: {
        caption: "Ways a Rajula student can get IB or IGCSE help",
        columns: ["Option", "Syllabus match", "Feedback on written answers", "Travel needed", "Flexibility"],
        rows: [
          ["Online one-to-one with IB Gram", "Exact IB or IGCSE course", "Marked against the real scheme", "None", "Evenings, weekends, holidays"],
          ["Local coaching class", "Usually Gujarat board, JEE or NEET", "Limited to that syllabus", "Daily to the class", "Fixed batch timings"],
          ["Private teacher at home", "Whatever the teacher knows", "Depends on the individual", "None", "Moderate"],
          ["Self-study with past papers", "Exact if the student chooses well", "Rarely, unless someone marks it", "None", "Total, but needs discipline"],
        ],
      },
    },
    {
      heading: "How do the Saurashtra year and festivals shape an IB or IGCSE study plan?",
      paragraphs: [
        "A Rajula calendar is shaped by the Gujarat school year, the monsoon and a handful of festivals. Many local schools take a long vacation around Diwali, and January brings Uttarayan, when families spend the day on rooftops and the roads are busy. We schedule heavier revision into the quiet weeks and keep the festival days free.",
        "The IB examination sessions are in May and November, and IGCSE has May/June and October/November series, with a smaller March series for some Indian centres. A student on the Diploma track should treat the Diploma calendar as fixed: internal assessments are due months before the exam, and the Extended Essay deadline falls in the first half of the final year.",
        "Weather matters on this coast. The monsoon from June to September brings heavy rain and occasional power cuts, and cyclone Tauktae in May 2021 showed how disruptive a storm can be along this stretch. We recommend a charged laptop, a phone hotspot and a rescheduling plan.",
        "The table maps the year to study priorities. It is a template; the actual plan comes from the student's own school dates.",
      ],
      table: {
        caption: "A Rajula study calendar",
        columns: ["Period", "What happens locally", "Study focus"],
        rows: [
          ["June to September", "Monsoon, school reopens, power cuts possible", "Build syllabus coverage, begin internal assessment drafts"],
          ["October to November", "Navratri, Diwali vacation, November IB exams", "Mocks, revision blocks and rest around festival weeks"],
          ["December to January", "Cooler weather, Uttarayan on 14 January", "Past papers, IA finalisation, TOK exhibition"],
          ["February to March", "Gujarat board exam season, quieter roads", "Timed papers, March IGCSE series for private candidates"],
          ["April to May", "Summer heat, May IB and IGCSE exams", "Final revision in early morning or evening slots"],
        ],
      },
    },
    {
      heading: "Where do Rajula IB and IGCSE students go after school?",
      paragraphs: [
        "Within Gujarat, students from the region look at Saurashtra University in Rajkot, Bhavnagar's university, PDEU in Gandhinagar and the colleges of Ahmedabad. Those who want engineering, design or law at a national level look at IIT Gandhinagar, NIRMA, Ahmedabad University and, further afield, Mumbai, Pune and Delhi.",
        "An IB Diploma student can use the Association of Indian Universities equivalence certificate to apply to Indian universities, and CUET-UG scores are accepted by many central and state universities. For JEE Main and NEET, eligibility rules for IB and IGCSE-based candidates depend on the subjects studied and the year of the notification, so a family should read the current brochure and not rely on memory.",
        "Overseas study is the aim for a sizeable group. The UK, Canada, the United States and Australia all recognise IB and Cambridge qualifications, and Gujarati families often have a relative already in one of those countries who can advise on campus life.",
        "A tutor cannot choose a university for the student, but can explain how predicted grades, subject combinations and the Extended Essay feed an application, and can help prepare for the maths or science entrance tests that follow. We also help a student keep a Plan B alive, such as a Gujarat university route, so no door closes early.",
      ],
      bullets: [
        "AIU equivalence for Indian university applications",
        "CUET-UG for central and many state universities",
        "JEE Main and NEET eligibility checked against the current brochure",
        "UK, Canada, USA, Australia and Gulf universities",
      ],
    },
    {
      heading: "How is IB Maths and Science taught to a Rajula student?",
      paragraphs: [
        "IB Maths comes in two forms. Analysis and Approaches suits students who enjoy algebra, calculus and proof, and Applications and Interpretation suits those who prefer statistics, modelling and technology. The choice should be made after talking to the school and the student, because switching later is difficult. In both courses the internal exploration is a piece of writing that the student must own.",
        "In Physics, Chemistry and Biology, results depend on three things: clean concepts, practice with command words and a well-designed practical for the internal assessment. We build each in turn, starting with the concept the student finds hardest and returning to it a week later to test recall.",
        "For a student who has studied the Gujarat board syllabus, the usual shift is from memorising a derivation to using it in a new context. A tutor writes short problems that gradually move away from the textbook example until the student can adapt without help.",
        "Every science tutor on the platform is asked to explain why a method works. A student who understands will survive an unusual question; a student who has memorised will not.",
      ],
    },
    {
      heading: "Should a Rajula student choose IGCSE Core or Extended?",
      paragraphs: [
        "IGCSE Maths, the sciences and some other subjects are offered at two tiers. Core caps the grade at a C, and Extended opens grades up to A* and is the route for a student who plans to take A Level Maths, IB Maths or a science degree. Core suits a student who is still building confidence and wants a steady pass.",
        "The decision is usually made by the school, but a private candidate chooses alone. We suggest a diagnostic paper in the trial lesson: if a student scores comfortably on Extended-level questions, the tier is clear; if not, a few weeks of foundation work may move the answer.",
        "Board choice matters as well. Cambridge and Pearson Edexcel IGCSEs have different paper structures, and the same topic can be tested differently. A tutor who has taught your board is worth more than one with a longer CV.",
        "Subject choice should reflect later plans. A student who may study medicine should keep Chemistry and Biology; a student aiming at engineering should keep Maths and Physics at Extended level. English and a second language round out the profile.",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the child's class, board, subjects, exam series and a recent report by WhatsApp or email." },
    { title: "We shortlist tutors", description: "You receive one or two tutor profiles matched to the exact syllabus and the student's weak points." },
    { title: "Free trial lesson", description: "The student attends a full live lesson, so you judge the fit before paying anything." },
    { title: "Plan and quote in writing", description: "A weekly schedule and the rate are set out in writing before the first paid session." },
    { title: "Lessons and notes", description: "After every session you receive a short note on what was covered, and you may change tutor if the fit is wrong." },
  ],
  whyPoints: [
    { title: "Syllabus-specific tutors", description: "Tutors are chosen for the exact IB subject and level or the IGCSE code, not for a general degree." },
    { title: "No travel in a spread-out district", description: "Distance between villages and Rajula town stops mattering when the lesson is on a screen." },
    { title: "Honest about format", description: "We say clearly that lessons are online here, and that home visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Visible progress", description: "A written note after each lesson tells parents what was taught and what comes next." },
    { title: "Tutor change on request", description: "If the chemistry between student and tutor is not right, we replace the tutor without fuss." },
    { title: "Coaching, not ghost-writing", description: "Tutors guide thinking and give feedback, and do not write coursework or essays for students." },
  ],

  tutorsIntro:
    "Tutors teach from different parts of India on Indian Standard Time, so a Rajula evening slot is a normal working hour for them. Each profile shows subjects, programmes and years of experience.",

  faqs: [
    {
      question: "Are there IB or IGCSE tutors in Rajula?",
      answer:
        "Yes, through online lessons. IB Gram tutors teach live over video to students in Rajula, but they do not live in the town. We found no local IB or IGCSE specialist and no confirmed IB or Cambridge school in Amreli district, so the matching is done from a pool of tutors across India who have taught your child's exact syllabus.",
    },
    {
      question: "Do tutors come to our home in Rajula?",
      answer:
        "No. Home visits run only in Gurugram and parts of Delhi NCR. In Rajula the lesson is online: the student sits at home with a laptop and a quiet corner, and the tutor teaches live. Many parents find this gives them the benefits of private tuition from home without paying for a tutor's travel.",
    },
    {
      question: "Which IB subjects can a Rajula student study with you?",
      answer:
        "Most Diploma subjects are covered, including Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, Psychology, Geography, History, Hindi and TOK. Language B in Gujarati is rarer; ask us and we will check. Tutors are matched at HL or SL level.",
    },
    {
      question: "Can my child take IGCSE without a school offering it in Rajula?",
      answer:
        "Yes, as a private candidate through an approved examination centre, usually in a larger city. You need to register months before the exam series, and some subjects with coursework or practicals are harder to do privately. A tutor can prepare the content; the centre handles registration and the exam itself.",
    },
    {
      question: "How much does IB tuition cost in Rajula?",
      answer:
        "We quote after a short chat, in writing, before any lesson is booked. The rate depends on the level, the tutor's depth in that syllabus, how many sessions a week you want and whether it is one-to-one or a small group. We publish no list price because two students in the same class can need very different support.",
    },
    {
      question: "Is there a free trial lesson?",
      answer:
        "Yes. The first lesson is a full session with the proposed tutor, free of charge, and you see how your child responds. A short note afterwards sets out what was covered and what we suggest next. There is no obligation to continue.",
    },
    {
      question: "What internet speed do online lessons need?",
      answer:
        "A steady broadband or 4G connection is enough for video and a shared whiteboard. We run a short test call before the first lesson, and if the line drops often we use audio with a shared digital page. Keep a charged phone as a hotspot, since monsoon power cuts occur on this coast.",
    },
    {
      question: "Can the tutor write my child's Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors coach, explain and give feedback, and they do not write or rewrite any assessed work. The IB treats unauthorised help as academic misconduct, and our tutors follow that rule. They can help a student choose a topic, plan the structure and understand the criteria.",
    },
    {
      question: "My child studies in Gujarati medium. Can IB or IGCSE still work?",
      answer:
        "It can, with an early focus on English. Subjects are taught and examined in English, so the first weeks often rebuild subject vocabulary and writing habits. Students who put in regular reading and writing practice usually adapt within a term or two, helped by a patient tutor.",
    },
    {
      question: "How do online lessons fit around school hours in Rajula?",
      answer:
        "Most students take lessons between 5 pm and 8 pm on weekdays, with longer weekend slots. We avoid local school hours and the days around Diwali, Navratri and Uttarayan. Exam blocks may use early mornings. You choose the weekly pattern, and we set it in writing.",
    },
    {
      question: "Can you help with the move to a Rajkot or Ahmedabad school?",
      answer:
        "Yes. A tutor can prepare the child for the entrance test or the syllabus gap before a transfer, and keep working after the move. Rajkot, Ahmedabad and Vadodara have schools we have seen mentioned for IB or Cambridge programmes, but we recommend you contact each school directly to confirm what it offers now.",
    },
    {
      question: "Which exam boards do you cover for IGCSE?",
      answer:
        "Cambridge International and Pearson Edexcel. The two have different paper structures, so we ask for the syllabus code at the start. A tutor who knows the Cambridge Chemistry paper may be less comfortable with the Edexcel one, and we match accordingly.",
    },
    {
      question: "Are IB and IGCSE accepted by Indian universities?",
      answer:
        "Yes, with the right paperwork. The Association of Indian Universities issues an equivalence for IB and for IGCSE-based pathways, and CUET-UG is the common route into central universities. Rules for JEE and NEET have conditions; read the current brochure and ask the university directly before relying on a rumour.",
    },
    {
      question: "What happens if the tutor is not a good fit?",
      answer:
        "We replace the tutor. Tell us what felt wrong, whether pace, style or subject depth, and we shortlist another profile. You keep the written notes from earlier sessions, and the new tutor begins from them rather than from zero.",
    },
    {
      question: "How do I contact IB Gram from Rajula?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with your child's class, board, subjects and exam date. We reply with a tutor suggestion and a time for the free trial. You can also use the contact page on this website.",
    },
    {
      question: "Do you offer PYP or MYP tuition, or only the Diploma?",
      answer:
        "All four IB stages. PYP lessons focus on reading, number fluency and written English; MYP lessons focus on criteria-based work and the Personal Project; Diploma lessons focus on subject depth, internal assessments and exam technique. Younger students usually take shorter sessions.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How online IB and IGCSE tuition works for families in other Indian cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only region where tutors visit homes, for contrast with online lessons." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse the IB subjects and levels our tutors teach." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and the exam calendar for IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL, SL, internal assessments, TOK and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP prepares for the Diploma." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition for younger learners." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Filter profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and arrange a free trial lesson." },
    { label: "Tuition in Amreli", href: "/amreli/", description: "The district town, with the same online approach and nearby school context." },
    { label: "Tuition in Bhavnagar", href: "/bhavnagar/", description: "The larger city up the coast, and how families there approach international syllabuses." },
    { label: "Tuition in Rajkot", href: "/rajkot/", description: "The Saurashtra city with a confirmed IGCSE school." },
  ],

  closingHeading: "Book a free trial lesson for your Rajula student",
  closingBody:
    "Tell us the class, the board and the subject that worries you most. We will propose a tutor, set a time that works around school and Saurashtra's festival weeks, and run the first lesson free. If it feels right, we agree a weekly plan in writing; if not, nothing is owed. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
