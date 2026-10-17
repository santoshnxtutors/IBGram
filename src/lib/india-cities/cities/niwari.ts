import type { CitySeoPage } from "../types";

/**
 * /niwari/ - IB and IGCSE tutoring page for Niwari, Madhya Pradesh (district headquarters since 2018,
 * in the Orchha and Betwa belt of Bundelkhand). No school in the district is confirmed to offer IB or
 * Cambridge/Edexcel IGCSE, so stripSchools is empty and the clusters point to Indore, Bhopal and Delhi NCR
 * boarding using school names already verified on neighbouring city pages. Online-only delivery: tutors do
 * not visit homes in Niwari, since in-person home tuition is offered only in Gurugram and parts of Delhi NCR.
 */
export const niwari: CitySeoPage = {
  slug: "niwari",
  countryName: "Niwari",
  countryNameLong: "Niwari, Madhya Pradesh",
  demonym: "Niwari",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Bundelkhand's May and June heat, the Ram Navami and Vivah Panchami weeks at Orchha, and the timetable of whichever school or boarding house your child attends",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.3667, longitude: 78.8 },
  alternateNames: ["Niwari MP", "Nivari", "Niwari Orchha", "Niwari district"],
  wikipedia: "https://en.wikipedia.org/wiki/Niwari_district",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Niwari | Online Home Tuition, MP",
  metaDescription:
    "Online one-to-one IB and IGCSE tutors for Niwari families near Orchha: DP, MYP, PYP, Cambridge and Edexcel, taught live from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Niwari",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FROM HOME FOR NIWARI STUDENTS",
  heroSubtitle:
    "Private tuition from home is what most Niwari parents are really searching for, and for IB and IGCSE that now means a live video lesson rather than a tutor at the door. A subject specialist teaches your child one to one from India, on Indian Standard Time, using the same past papers and mark schemes a student in a large city would use. Niwari became a district headquarters only in 2018 and has no IB or IGCSE campus yet, so the tutor, not the postcode, is what we match on.",
  primaryKeyword: "IB and IGCSE tutors in Niwari",
  imageAltText: "A Niwari student working through an IB Mathematics problem set with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Niwari",
    "IGCSE tutor Niwari",
    "IB home tuition Niwari",
    "IGCSE home tuition Niwari",
    "IB private tuition Niwari",
    "IB Maths tutor Niwari",
    "IGCSE Maths tutor Niwari",
    "IB Physics tutor Niwari",
    "IB Chemistry tutor Niwari",
    "IB Biology tutor Niwari",
    "IB DP tutor Niwari",
    "IB MYP tutor Niwari",
    "IB PYP tutor Niwari",
    "IGCSE online tuition Niwari",
    "IB tutor Orchha",
    "IGCSE tutor Prithvipur",
    "online IB tutor Niwari district",
    "IB tutor Niwari Madhya Pradesh",
    "Cambridge IGCSE tuition Niwari MP",
  ],

  heroTrustPoints: [
    "Tutors are chosen for the exact IB subject and level or IGCSE code and tier, not for living nearby",
    "Lessons run entirely online; tutors do not come to homes in Niwari",
    "A free trial lesson on real syllabus material before any commitment",
    "No link with the IB, Cambridge, Pearson or any school mentioned on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Plus the Career-related Programme" },
    { value: "2 IGCSE boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "Same clock as your tutor" },
    { value: "Free trial", label: "Watch a lesson first" },
  ],

  intro: {
    heading: "Looking for IB and IGCSE help from a district that is still new?",
    paragraphs: [
      "Niwari is among the youngest district headquarters in Madhya Pradesh, carved out of Tikamgarh in October 2018, and the smallest district in the state by area. It sits in the Betwa country of Bundelkhand, a few kilometres from the temples and palaces of Orchha. Schooling here is overwhelmingly MP Board and CBSE, with Hindi and Bundeli at home. A family that wants an International Baccalaureate or Cambridge or Edexcel IGCSE route for a child is, in practice, making an unusual choice.",
      "We have not found a school in the district that teaches the IB or an IGCSE syllabus, and we will not pretend otherwise. The nearest confirmed options are in Indore and Bhopal, with boarding schools in Delhi NCR beyond that. So the families who write to us tend to be of a few kinds: parents whose child already boards elsewhere and needs help in the holidays, officers and bank or railway staff who expect to be transferred and want the child on a portable curriculum, and households with a relative abroad who are preparing a student for an overseas degree.",
      "Private tuition at home is the phrase people use here, and we honour the intent of it. The lesson takes place at home, on a laptop, with a tutor who is live and focused on one child. What it is not is a tutor knocking at the door: IB Gram sends tutors to homes only in Gurugram and parts of Delhi NCR, so for Niwari every session is online, one to one, with a shared whiteboard and past papers on screen.",
      "The tutor teaches, explains and marks. They never write an Internal Assessment, an Extended Essay, a TOK essay or any coursework for a student, and IB Gram is independent of the IB Organization, Cambridge International and Pearson Edexcel.",
    ],
    bullets: [
      "PYP, MYP, DP and CP support from tutors who have taught each stage",
      "Cambridge and Pearson Edexcel IGCSE, matched by board, code and tier",
      "Live one-to-one video lessons on Indian Standard Time",
      "A free trial lesson, then a written plan and rate before you book",
      "No home visits in Niwari; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught inside Niwari district today, so a family meets them through a boarding place, a transfer to a larger city, or a deliberate decision to prepare a child for an external qualification. Each programme asks something different of a tutor, and each carries its own local twist for a Bundelkhand household.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around units of inquiry rather than a daily subject timetable, and the final year closes with a student-led Exhibition. Reading fluency in English and the habit of asking a good question matter more than any single worksheet.",
      countryNote:
        "A Niwari child on this path is usually a boarder in a PYP school in a larger city, and the most common request is English reading and writing stamina during the long summer break at home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks come from four criteria in each subject, not a single paper total, and the Personal Project in the last year asks a student to manage a long piece of independent work. Explaining reasoning in full sentences is the skill that moves grades.",
      countryNote:
        "Students arriving from an MP Board middle school often know the content but have not been asked to justify it in writing, so criterion language in Sciences and Individuals and Societies needs early practice.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, plus Theory of Knowledge, the Extended Essay and CAS. Written papers are sat in May or November, and each subject has an internal assessment that must be the student's own work.",
      countryNote:
        "For Niwari families the Diploma almost always means a school elsewhere, so tutoring concentrates on Mathematics, one science and English A, begun in the first weeks of Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway that pairs at least two Diploma courses with a career-related study, a reflective project and a short course in personal and professional skills. It is offered by very few Indian schools.",
      countryNote:
        "Demand from Niwari is close to nil, and where it appears we teach only the Diploma-level courses inside the student's programme.",
    },
  ],

  subjectsIntro:
    "A Niwari student says IB and could mean any of several hundred course and level combinations, so we begin with the subject, the level and the exam session. The tutor is then chosen for that exact course. Language B Hindi and Language A Hindi Literature are available, which suits a household that speaks Hindi or Bundeli at home.",
  subjects: [
    { name: "IB Mathematics: Analysis and Approaches", levels: "HL / SL", description: "Calculus, functions and proof-flavoured reasoning for students heading to engineering, physics or economics. Paper 3 at Higher Level rewards patience with unfamiliar problems, and the exploration needs an early start." },
    { name: "IB Mathematics: Applications and Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, taught with a graphic display calculator in hand. Suits business, social science and design pathways, and the exploration is where marks are most often lost." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves, fields, and at Higher Level the quantum and nuclear material. Worked numerical problems and a defensible experimental method matter more than recalled definitions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, kinetics and organic mechanisms, with a data booklet that students must learn to navigate quickly. The scientific investigation needs sound uncertainty handling." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, with a heavy reliance on precise terminology and the structure of extended answers. Data-based questions are practised on real stimulus material." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro, macro and the global economy, with diagrams that must be drawn accurately and applied to a real context. Useful for students aiming at commerce, finance or public policy degrees." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis and structured evaluation across finance, marketing, operations and people. A good fit for children of Niwari's trading and farming families who plan to join the family business." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures, networks and a programming internal assessment. Students should be able to trace code on paper without a machine." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Textual analysis of non-literary and literary material and the individual oral. Students from Hindi-medium backgrounds benefit from guided close reading." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Hindi literature study or language acquisition, depending on the student's background. A natural strength for families in Bundelkhand where Hindi is the first language of nearly everyone." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis, causation and essay structure across twentieth-century topics. Students practise paper 1 source questions against the clock." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "The exhibition and the 1,600-word essay, discussed as coaching: a tutor helps a student think through knowledge questions but never drafts the essay." },
    { name: "IB Psychology", levels: "HL / SL", description: "Biological, cognitive and sociocultural approaches, with the experimental study demanding a clean design and honest reporting." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE papers look similar on the surface and differ underneath, so board, subject code and tier are settled before the first lesson. We then work back from the sitting your child will actually take: Cambridge in May-June or October-November, Edexcel in January, May-June or November.",
  igcseSubjects: [
    { name: "Cambridge IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier demands fluent algebra, trigonometry and geometry reasoning with full working shown. Calculator use is permitted on Paper 4 but many marks reward method." },
    { name: "Cambridge IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus, logarithms and vectors, a useful bridge to IB Mathematics Analysis and Approaches for a student who may later join a DP school." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Two papers with a single tier decision up front. Edexcel phrases problems differently from Cambridge, so practice must use the right board's papers." },
    { name: "Cambridge IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity, waves and atomic physics, with the alternative-to-practical paper requiring its own preparation." },
    { name: "Cambridge IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, rates, organic chemistry and qualitative analysis, where the exact wording of observations earns the mark." },
    { name: "Cambridge IGCSE Biology 0610", levels: "Core / Extended", description: "Cell structure, genetics, human physiology and ecosystems, with structured responses that reward the examiner's keywords." },
    { name: "Cambridge IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply and demand, government policy and development, with diagrams and short evaluative paragraphs." },
    { name: "Cambridge IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Binary logic, networks and pseudocode, plus a programming paper that benefits from regular typed practice." },
    { name: "Cambridge IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking tasks in Hindi, a comfortable subject for a Niwari student and a reliable grade for a school profile." },
    { name: "Cambridge IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing and listening, suited to students moving from Hindi-medium schooling to an English-medium classroom." },
  ],

  regionsTitle: "Niwari and nearby towns our online tutors work with",
  regionsIntro:
    "These are the places students log in from. Because no tutor travels, the notes below are about context: which boards are common, how far the family is from a larger school city, and when the evening is quietest for a lesson.",
  regions: [
    { name: "Niwari town centre", note: "The district headquarters, with the collectorate offices, market and a mix of MP Board and CBSE schools; offices create a small group of transferable-service families." },
    { name: "Orchha", note: "The temple town on the Betwa a short drive from Niwari. Tourism and guesthouse families here value English strongly, and the Ram Navami and Vivah Panchami crowds reshape the evening." },
    { name: "Prithvipur", note: "The district's third tehsil and a trading town on the road toward Tikamgarh, with a long-established market and Hindi-medium schooling." },
    { name: "Tarichar Kalan", note: "A proposed tehsil headquarters with a largely agricultural population; broadband and power reliability matter for online lessons." },
    { name: "Railway station area", note: "Households connected with the North Central Railway and the station; transfer postings make a portable curriculum attractive." },
    { name: "Mohangarh and Barua Sagar side roads", note: "Villages and small towns toward the Jhansi border, where many families look to Jhansi for schools and coaching." },
    { name: "Jhansi-Niwari highway belt", note: "Farmhouses and new plots along the road toward Orchha and Jhansi; some families commute daily to Jhansi schools." },
    { name: "Garh Kundar side", note: "The fort country toward Tikamgarh, rural and quiet, where a steady mobile or fibre link decides whether an evening lesson is possible." },
  ],

  schoolDisclaimer:
    "The schools below are not in Niwari. They are listed only because families from small Madhya Pradesh towns do consider them, and the details come from other city pages we have checked. IB Gram is an independent tutoring service with no partnership with, or endorsement from, any of these schools, the International Baccalaureate Organization, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Niwari district itself",
      note: "We could not confirm any IB, Cambridge or Edexcel school inside the district. Local options are MP Board and CBSE, so IB or IGCSE learning here is by boarding elsewhere, a later move, or independent preparation.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "The state's best-developed cluster of international curricula, reached from Bundelkhand by rail or a long road journey, and used mainly by boarding families.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital, with a handful of schools that families from the Bundelkhand belt consider for Class 6 onward.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Delhi NCR boarding",
      note: "Some families send a child to a boarding school in the Delhi region, where the IB Diploma is taught at residential campuses.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Niwari families can pick from three rhythms, all of them live and one to one on video. What changes is the intensity, not the method. We do not send tutors to homes in Niwari; that service runs only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly one-to-one lessons",
      description:
        "A standing evening or weekend slot with the same tutor, a shared whiteboard and a short written note after each session.",
      bullets: [
        "Fits an MP Board or CBSE school day with a late-afternoon gap",
        "Works for DP, MYP and IGCSE subjects",
        "One tutor throughout, so progress builds",
        "Notes sent after every lesson",
      ],
    },
    {
      title: "Boarder holiday blocks",
      description:
        "A child who boards elsewhere comes home for Diwali, winter and summer breaks, and a tutor runs a condensed set of lessons during those weeks.",
      bullets: [
        "Three to five lessons a week during the break",
        "Targets topics the school has flagged",
        "Past papers marked against the real criteria",
        "Easy to pause when guests or travel arrive",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "A tight run in the weeks before May or November papers, with timed practice and fast feedback.",
      bullets: [
        "Two to four lessons a week",
        "Feedback within two days",
        "Book two to three weeks before the session starts",
        "Planned around power cuts and heat in May",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools are near Niwari, and who asks for tutors?",
      paragraphs: [
        "No school inside Niwari district is, to our knowledge, authorised to teach the IB Diploma or to prepare students for Cambridge or Edexcel IGCSE. The sensible way to read this page is as an honest map: the district has MP Board and CBSE schools, Jhansi across the border has a larger CBSE and UP Board market, and the schools that do run international curricula are several hours away.",
        "Who then asks us for an IB tutor in Niwari? A few groups come up again and again. Parents of boarders in Indore, Bhopal or the Delhi region want continuity in the long breaks. Government and railway employees expect another posting and prefer a qualification that travels. And some families plan an undergraduate degree abroad and see IB or IGCSE grades as a cleaner route than a state board percentage.",
        "A tutor cannot give a child a school timetable. What a tutor can do is hold the syllabus together: the sequence of topics, the style of exam questions, the criteria for internal assessment. For a student who is preparing independently, that structure is the missing part.",
        "Online delivery matters more here than in a metro. A good IB Physics HL teacher does not live in Niwari, and nor does anyone who has taught the current Chemistry guide. Reaching across India removes that limit.",
      ],
      table: {
        caption: "Where IB and IGCSE learning connected to Niwari families happens",
        columns: ["Place", "Distance from Niwari", "What is on offer"],
        rows: [
          ["Niwari and Orchha", "Local", "MP Board and CBSE schools; no confirmed IB or IGCSE school"],
          ["Jhansi", "Across the UP border, the nearest large city", "CBSE and UP Board schools and coaching; see our Jhansi page for online options"],
          ["Indore", "Several hours by rail or road", "Choithram International School, Daly College and Emerald Heights listed as IB or Cambridge options"],
          ["Bhopal", "A long day by road, shorter by train", "Shrewsbury International School India among the international options"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE campus in Niwari district",
        "Boarding families, transferable-service families and abroad-bound students make most requests",
        "Online tutors cover subject gaps that no local teacher can",
        "Grading and exam sessions are the same wherever the paper is written",
      ],
    },
    {
      heading: "MP Board, CBSE, IB or IGCSE: how do the options differ for a Niwari student?",
      paragraphs: [
        "MP Board and CBSE are the everyday choices in Niwari, and both lead naturally to Indian entrances such as JEE Main, NEET and CUET. IB and IGCSE are different animals: they test explanation, application and extended writing more than recall, and they are examined by international boards on international calendars.",
        "For a family weighing a switch, the question is not which is better in the abstract. It is which route a particular child will thrive on and what the child wants afterwards. A student who enjoys writing out reasoning and applying ideas to unfamiliar cases usually does well in IB; a student aiming at an Indian medical or engineering seat in a coaching-heavy cycle often stays with CBSE.",
        "IGCSE sits in the middle. It is a Class 9 and 10 qualification, so a student can take it and then move into an IB or A Level school, or return to CBSE for Class 11. Many boarding schools use it as the feeder to the Diploma.",
        "Whichever you choose, the tutor should match the board exactly. A Cambridge Extended Mathematics student and an Edexcel Higher student need different past papers.",
      ],
      table: {
        caption: "MP Board, CBSE, IGCSE and IB compared for a Niwari family",
        columns: ["Feature", "MP Board / CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Where available near Niwari", "Local schools", "Boarding elsewhere or independent entry", "Boarding elsewhere only"],
          ["Assessment style", "Mostly recall and application", "Structured papers plus coursework in some subjects", "Papers plus internal assessments, essay and TOK"],
          ["Language of study", "Hindi or English medium", "English", "English, with Hindi A or B available"],
          ["Entrance route in India", "JEE, NEET, CUET directly", "Through AIU equivalence at Class 12 stage", "AIU equivalence, CUET with eligibility checks"],
          ["Tutor need", "Common local tutors", "Online specialist by board and tier", "Online specialist by subject and level"],
        ],
      },
      bullets: [
        "CBSE and MP Board prepare most directly for Indian entrance tests",
        "IGCSE is a two-year qualification taken at Class 10",
        "IB Diploma is a two-year pre-university programme at Class 11-12",
        "Switching between systems is possible, but plan it a year ahead",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Niwari family?",
      paragraphs: [
        "Rates are agreed in writing before the trial lesson and we do not publish a fixed price list, because the cost depends on factors that vary from child to child. The honest answer to the question is a list of what moves the number.",
        "First, the level: an IB Higher Level science or Mathematics tutor with several years of exam experience costs more than a tutor for MYP or IGCSE Core. Second, the length and frequency of sessions: a weekly hour is not the same commitment as three hours a week before a paper. Third, how scarce the subject is, since Computer Science HL, Economics HL or Hindi A tutors are fewer than Maths tutors.",
        "Online delivery removes one cost entirely. There is no travel charge, no fuel and no time lost to a tutor reaching Niwari, which matters in a district where distances to larger towns are real.",
        "You are never asked to pay up front for a long block. The first lesson is free, the plan follows, and you may stop or change tutor without penalty.",
      ],
      table: {
        caption: "What drives the rate for IB and IGCSE tuition",
        columns: ["Factor", "Pushes the rate up", "Keeps it lower"],
        rows: [
          ["Level", "IB Higher Level, Extended or Higher tier", "MYP, PYP, IGCSE Core or Foundation"],
          ["Subject", "Scarce subjects such as Computer Science HL", "Widely taught subjects with many tutors"],
          ["Frequency", "Three or four sessions a week before exams", "A single weekly slot"],
          ["Experience", "Tutors with years of marking-aware teaching", "Newer tutors on the same syllabus"],
          ["Travel", "Not applicable, as nothing is in person", "No travel charge in Niwari"],
        ],
      },
    },
    {
      heading: "Online home tuition, local coaching, private home tutors or self-study: what works in Niwari?",
      paragraphs: [
        "A student in Niwari has four honest options. Local coaching in the district and in Jhansi is built around Indian board exams and entrance tests. A private home tutor from the town is fine for school subjects but is unlikely to have taught IB or IGCSE. Self-study with textbooks and videos is possible for a disciplined student. And live online one-to-one tuition puts a specialist in front of the child without anyone travelling.",
        "Where these differ most is in feedback. IB and IGCSE reward a particular way of writing an answer, and only someone who marks past papers against the board's criteria can show a student what an examiner wants. Videos cannot read your child's script.",
        "A common pattern is to combine them: school or coaching for the main curriculum, an online tutor for the international subject, and self-study in between. For the online part, a stable connection and a quiet corner are all that is required.",
        "When we say home tuition, we mean the lesson happens at home. We do not mean a visit: in-person lessons are offered only in Gurugram and parts of Delhi NCR.",
      ],
      table: {
        caption: "Choosing a study route from Niwari",
        columns: ["Route", "Strength", "Limitation"],
        rows: [
          ["Online one-to-one IB/IGCSE tutor", "Exact subject and level, marked practice", "Needs reliable internet and a quiet space"],
          ["Local or Jhansi coaching centre", "Peer group, routine, low fee", "Built for Indian board exams, rarely IB or IGCSE"],
          ["Private home tutor in town", "Flexible, familiar", "Seldom knows IB or IGCSE criteria"],
          ["Self-study with videos", "Cheap and flexible", "No marking or personal feedback"],
        ],
      },
    },
    {
      heading: "How do Bundelkhand's heat, festivals and the exam calendar shape a study year?",
      paragraphs: [
        "May and June in Bundelkhand are hard on both people and power supply. Daytime temperatures often climb well above forty degrees, and an IB May session or a Cambridge May-June series falls squarely in that stretch for a student at home. We therefore plan the last revision weeks for early mornings and late evenings and ask families to test their backup power before the first lesson.",
        "Orchha's Ram Navami and Vivah Panchami fairs fill the town and the roads around Niwari with pilgrims, and many households host relatives. Diwali, Holi and Raksha Bandhan are family weeks. A tutor can plan around them if told early.",
        "School calendars vary. A boarder's term dates follow the school in Indore or Delhi NCR, whereas a CBSE student in Niwari follows a March-to-April rhythm. We plan against whichever your child's real calendar is, never a generic one.",
        "The winter months, from late October to February, are the best stretch for sustained lessons: cool, quiet evenings and fewer interruptions.",
      ],
      table: {
        caption: "A year of study from Niwari",
        columns: ["Period", "What is happening", "Tutoring approach"],
        rows: [
          ["January to March", "IGCSE Edexcel January series, school mocks, MP Board and CBSE exams", "Past papers, error logs, calm weekly slots"],
          ["April to June", "IB May session, Cambridge May-June series, peak heat", "Early morning or late evening intensives, backup power"],
          ["July to September", "Monsoon, new term, IA planning", "Steady weekly lessons, IA topic choice"],
          ["October to December", "Diwali, Cambridge Oct-Nov series, IB November session for some schools", "Break-time blocks, mocks, revision"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Niwari study after school?",
      paragraphs: [
        "The Association of Indian Universities treats the IB Diploma and recognised IGCSE plus A Level combinations as equivalent to Class 12 for admission, so a Niwari student with these qualifications can apply to Indian universities, though each institution has its own conditions.",
        "For public universities that admit through CUET-UG, IB and IGCSE students should check subject eligibility and the registration process early. For JEE Main and NEET, eligibility rules about Class 12 subjects and equivalence apply, and a student must read the current brochure rather than rely on hearsay.",
        "Closer to home, the Madhya Pradesh options include ABV-IIITM Gwalior and the institutes of Bhopal, such as MANIT and AIIMS Bhopal, plus Bundelkhand University in Jhansi. Many IB students from small towns look further: Ashoka, Shiv Nadar, FLAME, Ahmedabad University or study abroad in the UK, US, Canada and Australia.",
        "A tutor helps with the academic side of those routes: predicted grades, subject combinations and SAT or IELTS-adjacent skills where needed. We do not handle admissions or guarantee any offer.",
      ],
      table: {
        caption: "Pathways from IB and IGCSE for a Niwari student",
        columns: ["Goal", "Qualification route", "What to check"],
        rows: [
          ["Indian public university via CUET-UG", "IB Diploma or IGCSE plus Class 12 equivalent", "Subject eligibility and AIU equivalence"],
          ["Engineering via JEE Main", "Class 12 with Physics, Chemistry and Mathematics", "Current NTA eligibility on IB and IGCSE"],
          ["Medicine via NEET-UG", "Biology, Physics, Chemistry at the right level", "NMC rules on equivalence and subject combinations"],
          ["Private Indian university", "IB Diploma directly", "Cut-offs and scholarship criteria"],
          ["Study abroad", "IB Diploma or A Level after IGCSE", "Predicted grades, subject prerequisites, language tests"],
        ],
      },
    },
    {
      heading: "How are IB Mathematics AA and AI, and the sciences, taught online to a Niwari student?",
      paragraphs: [
        "IB Mathematics offers two courses. Analysis and Approaches suits students who like algebra, calculus and proof and who may study engineering, science or economics. Applications and Interpretation suits students who prefer statistics, modelling and technology. The choice is made before Class 11 begins and is hard to reverse, so a short diagnostic lesson helps.",
        "Online lessons use a shared digital whiteboard where the tutor and student both write. A graphic display calculator, or its emulator, is demonstrated on screen. We scan and mark handwritten solutions and return them with comments tied to the mark scheme.",
        "The sciences follow the same method. Physics and Chemistry need worked calculations, Biology needs accurate language, and every science needs an investigation. The tutor guides the question, the method and the uncertainty analysis, and never does the student's write-up.",
        "A Niwari student without a school lab can still practise: simulations, home experiments and data from public sources can support the internal assessment, subject to what the student's school coordinator permits.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Niwari student choose?",
      paragraphs: [
        "Cambridge IGCSE offers a Core tier, capped at grade C, and an Extended tier, which reaches A* and gives access to higher-level study. Edexcel uses Foundation and Higher. Picking the tier is the first decision, and it should be made with a recent past paper in hand rather than a guess.",
        "A student who aims at an IB or A Level school should usually take the Extended or Higher tier in Mathematics and the sciences, since those schools ask for strong grades. Core suits a student who needs a sound foundation and some confidence.",
        "Subject choice also matters. Hindi as a Second Language is a natural strength for a Niwari household, English as a Second Language fits students moving from Hindi medium, and the sciences should follow the student's plans for Class 11.",
        "Because independent candidates need an authorised exam centre, a family in Niwari should contact British Council or another Cambridge or Pearson centre early, since not every city has one and registration deadlines are firm.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students joining from Niwari. Every lesson is live on video, so the match depends on the course and level, not on whether the tutor lives anywhere near Bundelkhand.",

  process: [
    { title: "Tell us the need", description: "Share the programme or board, subject, level, current grade and the evenings that suit your household." },
    { title: "Receive a shortlist", description: "We suggest tutors who have taught that exact syllabus recently, with a line on why each might suit your child." },
    { title: "Take the free trial", description: "Your child works on a real topic with the tutor online, with no cost and no obligation." },
    { title: "Approve a written plan", description: "Topics, weekly rhythm, fee and how you will hear about progress are set out for your approval." },
    { title: "Begin regular lessons", description: "A fixed slot, short notes after each class, and a change of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Syllabus first", description: "The exact IB course and level or IGCSE code and tier decide who teaches your child." },
    { title: "Made for places without a local IB school", description: "Matching reaches across India, so Niwari's district boundary is no limit." },
    { title: "See before you commit", description: "A free trial on real material lets you judge a tutor on the lesson itself." },
    { title: "The student's own work stays their own", description: "Tutors coach on IAs and essays and never write them." },
    { title: "Visible progress", description: "Notes after each session and a real review every few weeks." },
    { title: "No lock-in", description: "No contract, rates in writing before booking, and re-matching whenever needed." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Niwari?", answer: "Tell us the programme, subject, level and exam session, and we shortlist tutors who have taught that exact course. Because no IB school operates in Niwari district, matching is purely on syllabus fit and your evening availability. A free trial comes first, and if it does not feel right we introduce another tutor without any charge." },
    { question: "Do you offer IGCSE home tuition in Niwari?", answer: "Yes, as online home tuition: the lesson happens at your home on a laptop, one to one, with a tutor who teaches live. Tutors do not visit homes in Niwari, because in-person lessons run only in Gurugram and parts of Delhi NCR. We cover both Cambridge and Pearson Edexcel IGCSE by code and tier." },
    { question: "Do your tutors come to our house in Niwari?", answer: "No. IB Gram sends tutors to homes only in Gurugram and parts of Delhi NCR. For Niwari, Orchha and Prithvipur every lesson is online and one to one, with a shared whiteboard, past papers on screen and a short written note after each session so you can follow progress." },
    { question: "Is there any IB or IGCSE school in Niwari district?", answer: "We have not been able to confirm one. Schools in the district follow MP Board or CBSE. The nearest confirmed options are in Indore and Bhopal, with boarding schools in the Delhi region. If a school here has begun offering these programmes recently, write to us and we will update this page." },
    { question: "What does IB or IGCSE tuition cost for a Niwari family?", answer: "Rates depend on the level, the subject, the length and number of sessions, and the tutor's experience, and we quote the rate in writing before the trial. Higher Level and Extended courses usually cost more than MYP or Core. There is no travel charge, because nothing is in person." },
    { question: "Is the first lesson really free?", answer: "Yes. Your child works through a real topic from their own syllabus with the tutor, with no payment and no obligation. Afterwards the tutor sends a short plan, and you decide whether to continue, change the plan or try a different tutor." },
    { question: "Can a tutor help with my child's IB Internal Assessment?", answer: "A tutor can help a student pick a workable topic, understand the criteria, plan data collection and respond to feedback. A tutor cannot write or rewrite any assessed part, because that breaches IB academic integrity rules. The same line holds for the Extended Essay and TOK." },
    { question: "Which IB Diploma subjects can you cover for a student from Niwari?", answer: "Mathematics AA and AI at both levels, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Hindi A and B, History and Psychology, plus support with Theory of Knowledge and the Extended Essay process. If you need another subject, ask and we will tell you honestly whether we can match it." },
    { question: "Do you teach MYP and PYP students as well as Diploma students?", answer: "Yes. MYP students usually need help with criterion-based writing in Sciences and Individuals and Societies, and with the Personal Project. PYP students benefit from short, regular sessions on reading, writing and number sense, with support on the Exhibition research when the time comes." },
    { question: "Will online lessons work with Niwari's internet and power supply?", answer: "In most cases, yes. A phone hotspot as backup, a charged laptop and a quiet corner are enough. We schedule around known power cuts, ask for a test call before the first lesson and, if a session drops, reschedule it without charge." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge International and Pearson Edexcel. We match by board and subject code, such as Cambridge 0580 Mathematics or Edexcel 4MA1, and by tier, because the papers and mark schemes differ and a student must practise on the correct ones." },
    { question: "When should a student start tutoring?", answer: "As close to the beginning of the course as possible: Class 11 for the Diploma, Class 9 for IGCSE. That leaves time to close gaps before mocks, IA deadlines and predicted grades. Starting later still helps, with sessions focused on the highest-value topics." },
    { question: "My child studies in MP Board or CBSE in Niwari. Can they still use your tutors?", answer: "Yes, if the goal is IGCSE or IB-style preparation, a transfer to a boarding school, or strengthening reasoning skills. Be realistic that sitting external exams needs a recognised exam centre, so we help with the academic side and advise you to confirm registration with the board." },
    { question: "How are the tutors vetted?", answer: "We check qualifications, recent experience with the specific subject and level, and how they handle internal assessment guidance. The free trial lets you assess the teaching yourself, and a change of tutor is always available at no charge." },
    { question: "What happens if the tutor is not a good fit?", answer: "Tell us and we find someone else. We check in with families every few weeks so a poor match does not drift, and no contract holds you in place. You can pause or stop whenever you like." },
    { question: "Is IB Gram connected to any school or to the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no affiliation to, or endorsement from, any school named on this page, the International Baccalaureate Organization, Cambridge International or Pearson Edexcel. Schools appear only to show where nearby families study." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online matching works for cities and towns across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where IB Gram tutors visit homes." },
    { label: "The IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "The IB Diploma Programme", href: "/programmes/dp/", description: "HL, SL, TOK, the Extended Essay and CAS." },
    { label: "The IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Mathematics, AA or AI", href: "/courses/ib/mathematics/", description: "Which course suits your child." },
    { label: "Tutor profiles", href: "/tutors/", description: "Filter by subject, programme and experience." },
    { label: "Get in touch", href: "/contact-us/", description: "Send a brief and book a free trial lesson." },
    { label: "Jhansi IB and IGCSE tutors", href: "/jhansi/", description: "The nearest large city across the border in Uttar Pradesh." },
    { label: "Gwalior IB and IGCSE tutors", href: "/gwalior/", description: "Another Madhya Pradesh city with online-only options." },
    { label: "Bhopal IB and IGCSE tutors", href: "/bhopal/", description: "The state capital and its school landscape." },
  ],

  closingHeading: "Arrange a free trial lesson for your Niwari student",
  closingBody:
    "Send the programme or board, the subject and level, where your child stands today and a couple of evenings that usually work. We will reply with a tutor who fits, their background and a time for a free trial lesson before you decide anything. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
