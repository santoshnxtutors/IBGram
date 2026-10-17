import type { CitySeoPage } from "../types";

/**
 * /rajampet/ - IB and IGCSE tutoring page for Rajampet, Annamayya district, Andhra Pradesh. No IB or
 * Cambridge/Edexcel IGCSE school in Rajampet could be confirmed, so stripSchools is empty and the
 * clusters use schools already verified on the Tirupati, Kadapa and Chennai pages. Rendered with the
 * shared CountryLanding layout used by /gurgaon/.
 */
export const rajampet: CitySeoPage = {
  slug: "rajampet",
  countryName: "Rajampet",
  countryNameLong: "Rajampet, Andhra Pradesh",
  demonym: "Rajampet",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Arranged around Rajampet's school hours, the Rayalaseema summer heat and the Sankranti, Ugadi and Dasara holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.1935, longitude: 79.1590 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajampet",
  alternateNames: ["Rajampeta", "Rajampet Annamayya"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajampet | Online One-to-One",
  metaDescription:
    "Rajampet IB and IGCSE tutors online: Diploma, MYP, PYP, Cambridge and Edexcel subjects taught one to one from home, with a free trial before you decide.",
  h1: "IB and IGCSE Tutors and Online Tuition at Home in Rajampet",
  heroEyebrow: "ONLINE IB & IGCSE TUTORING IN RAJAMPET",
  heroSubtitle:
    "Rajampet sits between Kadapa and Tirupati, and an IB or IGCSE student here usually studies with a tutor who is neither. Online one-to-one home tuition puts a teacher who knows the exact syllabus in front of your child on a laptop, on Indian time, without the drive to a bigger city.",
  primaryKeyword: "IB and IGCSE tutors in Rajampet",
  imageAltText: "A Rajampet student in a live online IB Biology lesson with a tutor, notes and laptop on the desk",
  secondaryKeywords: [
    "IB tutor Rajampet",
    "IGCSE tutor Rajampet",
    "IB home tuition Rajampet",
    "IGCSE home tuition Rajampet",
    "IB private tuition Rajampet",
    "IB Maths tutor Rajampet",
    "IGCSE Maths tutor Rajampet",
    "IB Physics tutor Rajampet",
    "IB Chemistry tutor Rajampet",
    "IB Biology tutor Rajampet",
    "IB DP tutor Rajampet",
    "IB MYP tutor Rajampet",
    "IB PYP tutor Rajampet",
    "IGCSE online tuition Rajampet",
    "IB tutor Rajampeta",
    "IB tutor Annamayya district",
    "IGCSE tutor Boyanapalli Rajampet",
    "online IB tutor Rajampet Andhra Pradesh",
  ],

  heroTrustPoints: [
    "Subject specialists chosen for your child's course rather than the nearest available teacher",
    "Online delivery, since tutors do not travel to Rajampet homes",
    "First lesson free, with rates confirmed in writing afterwards",
    "No connection to any school, board or university named on this page",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB coverage" },
    { value: "Two boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time zone gap" },
    { value: "No-cost trial", label: "One full lesson" },
  ],

  intro: {
    heading: "Studying an international syllabus from Rajampet",
    paragraphs: [
      "Rajampet is a town people know through its neighbours. It lies on the Kadapa side of the Tirupati corridor, in Annamayya district, close to Thallapaka, the birthplace of the poet-saint Annamacharya, and to Vontimitta, where the Kodandarama temple hosts a major Rama Navami festival. For education, Annamacharya Institute of Technology and Sciences anchors the town. The schools are state board and CBSE. We could not confirm a school teaching the IB or Cambridge or Edexcel IGCSE here.",
      "A family from Rajampet who wants their child on one of those tracks therefore has two choices: move, or study at home with a tutor who is online. Tutors do not visit homes in Rajampet, since home visits exist only in Gurugram and parts of Delhi NCR. The online route asks for a laptop, a decent connection and a quiet corner, and in return offers a much wider selection of teachers than any single Rayalaseema town could hold.",
      "The families who ask tend to fall into a few groups: those with a parent working in Bengaluru, Chennai or the Gulf who plan to relocate; households connected to the engineering institute or to nearby government offices who have moved in from elsewhere; and farming and trading families who want a Cambridge or IB result for a child headed to Canada, Australia or the UK.",
      "IB Gram is independent of the IB, Cambridge, Pearson and any school named on this page. Tutors coach, and never write assessed work such as internal assessments, Extended Essays or coursework.",
    ],
    bullets: [
      "IB PYP, MYP and DP, plus Cambridge and Edexcel IGCSE",
      "Online only in Rajampet; in-home teaching is limited to Gurugram and parts of Delhi NCR",
      "A written note after every session",
      "Tutor swap available if the first match is wrong",
      "Fees quoted in writing before you book",
    ],
  },

  programmesIntro:
    "For a Rajampet student, the four IB programmes are less a menu than a map of where the child currently stands. Below is how we approach each, and what families here usually ask for.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class LKG-5, ages 3-12",
      description:
        "Inquiry units built on themes like how the world works replace a fixed list of subjects, ending in the Exhibition in the final primary year. A tutor supports reading, number sense and curiosity together.",
      countryNote:
        "Rajampet requests usually come from a child who started PYP in Chennai, Bengaluru or overseas and now lives with grandparents or on a family posting nearby.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade against four criteria per subject, and Year 5 includes a Personal Project the student manages on their own. The skill to build is explaining reasoning clearly.",
      countryNote:
        "With no MYP classroom in town, a Rajampet student needs someone to unpack the criteria and model what a strong answer looks like.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level are combined with TOK, the Extended Essay and CAS. Marks come from external exams and internal assessments together.",
      countryNote:
        "Most Diploma requests from the Rajampet area are for Mathematics and the sciences, reflecting the region's strong engineering and medical aspirations.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are combined with career-related study and a reflective project. It suits students planning applied, vocational or technical routes.",
      countryNote:
        "We know of no CP school within reach of Rajampet, so tutoring supports the Diploma-level courses inside the pathway.",
    },
  ],

  subjectsIntro:
    "Give us the subject, level and, for IGCSE, the syllabus code, and we look for a tutor who teaches that exact combination. Analysis and Approaches at HL is a different job from Applications and Interpretation at SL.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof sit at the centre; for HL students, Paper 3 problem solving and the exploration are planned months ahead." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology skills are emphasised, with practice in explaining results in clear sentences." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, electricity and modern physics are handled through graded problems, and students learn to plan an investigation sensibly." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics and organic synthesis routes get repeated practice, with the data booklet used from the first lesson." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell processes, genetics and ecology are reviewed with careful wording, since one imprecise term can cost a mark." },
    { name: "IB Economics", levels: "HL / SL", description: "Students practise accurate diagrams and relate theory to agriculture, trade and public policy examples from Andhra Pradesh and India." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study analysis, financial tools and strategy frameworks are practised on unseen scenarios." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Paper 1 textual analysis, Paper 2 comparative writing and the oral are practised separately and then brought together." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, databases and networks are covered alongside the exam's pseudocode rules." },
    { name: "IB Psychology", levels: "HL / SL", description: "Students learn studies in detail and build essays that combine evidence with balanced evaluation." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data skills and fieldwork are taught with examples that include water management and agriculture." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water scarcity, land use and energy are natural topics for a dry Rayalaseema setting and are treated as evidence-based debates." },
    { name: "IB Hindi B", levels: "HL / SL", description: "For Telugu-speaking students, Hindi B builds on a second language already heard in school, with focus on structure and speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors discuss knowledge questions with the student, and the essay and exhibition are written and built by the student alone." },
  ],

  igcseSubjectsIntro:
    "IGCSE from Rajampet is generally taken privately, next to a state board or CBSE school or as preparation before a move. The board and tier decisions come first, followed by subjects.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended students get frequent practice in algebra, geometry and handling data, aiming for tidy, complete working." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and coordinate geometry are introduced early, which helps later IB or A Level study." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Practice papers follow the Edexcel format, and students learn how method marks are awarded." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Students work through motion, energy, circuits and waves with graded numerical practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrolysis and organic families are reviewed with attention to accurate equations." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Plant and human biology, inheritance and ecology are revised using diagrams the student learns to draw from memory." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply, demand and development are explored using farm prices, wages and local trade as examples." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Students learn to apply concepts to the case in front of them, not to recite textbook definitions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, binary and simple programs are practised until students work confidently under time pressure." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for different audiences and summarising are practised with detailed comments on every draft." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading and writing tasks are drilled for students who want a straightforward language credit." },
  ],

  regionsTitle: "Rajampet and Annamayya district areas we support online",
  regionsIntro:
    "Every lesson is online, so location here means context. The list describes each area's typical school links and how they influence the best lesson time.",
  regions: [
    { name: "Rajampet town centre", note: "The market and bus-stand area, where many families combine school and tuition, and evening slots are the norm." },
    { name: "Boyanapalli", note: "A residential locality of Rajampet with a mix of government and private employees; online lessons avoid the evening rush towards the main road." },
    { name: "Annamacharya Institute area", note: "The neighbourhood around the engineering college, home to faculty and staff families with strong academic interest." },
    { name: "Thallapaka", note: "The village associated with Annamacharya; families here look to Rajampet for schooling and to Tirupati or Kadapa for higher options." },
    { name: "Vontimitta", note: "Known for the Kodandarama temple and its Rama Navami celebrations, which fill the local calendar each spring." },
    { name: "Nandalur", note: "A temple town with an ancient Saumyanatha shrine; students here rely on private study for specialised subjects." },
    { name: "Siddavatam", note: "A town on the Kadapa road with easy links to Rajampet; online tutoring saves travel time." },
    { name: "Kodur", note: "A railway town south of Rajampet; families often send students onwards to Tirupati for higher studies." },
    { name: "Chitvel", note: "A town in the district known for its farming economy, where online tutoring helps families avoid long bus rides." },
    { name: "Penagalur", note: "A small town with a mostly agricultural community, where private study is common for specialised subjects." },
  ],

  schoolDisclaimer:
    "No school in Rajampet is named as an IB or Cambridge/Edexcel IGCSE school because none could be confirmed. Schools listed below are in other cities, appear only as context, and have no relationship with IB Gram.",
  schoolClusters: [
    {
      city: "Rajampet itself",
      note: "Schooling is state board or CBSE. We could not confirm an IB or IGCSE campus here, so the honest picture is that international-syllabus students study privately and online.",
      schools: [],
    },
    {
      city: "Nearby: Tirupati",
      note: "Tirupati is roughly two hours away and has the closest confirmed international-curriculum options for families willing to move or board.",
      schools: ["Sree Vidyanikethan International School", "Edify School"],
    },
    {
      city: "Nearby: Kadapa and Kurnool",
      note: "Kadapa is closer than Tirupati but we could not confirm a local IB or IGCSE school; Kurnool is much farther and is listed for completeness.",
      schools: ["Monte International School, Kallur, Kurnool"],
    },
    {
      city: "Nearby: Chennai",
      note: "Chennai is a long journey by train but has established international schools, which some Rayalaseema families consider for the senior years.",
      schools: ["Hiranandani Upscale School", "Gateway International School"],
    },
  ],

  modesIntro:
    "Rajampet families typically choose one of three formats. They are all live, one-to-one and online, but they suit different situations.",
  modes: [
    {
      title: "A weekly one-hour lesson",
      description:
        "A regular slot with one tutor, working steadily through the specification with homework in between.",
      bullets: [
        "Works for IB and IGCSE subjects",
        "Live digital whiteboard used every session",
        "Handwritten work photographed for marking",
        "Continuity across the school year",
      ],
    },
    {
      title: "Evening lessons beside a state board or CBSE school",
      description:
        "For children who attend a local school by day and add an international syllabus in the evening or at weekends.",
      bullets: [
        "Content follows the international course",
        "Slots avoid school exam weeks",
        "Monthly summary for parents",
        "Supports a later school move",
      ],
    },
    {
      title: "Concentrated exam preparation",
      description:
        "Several lessons per week over a few weeks, centred on timed papers and correction.",
      bullets: [
        "Official mark schemes used",
        "Frequent errors tracked",
        "Ideally begins four to six weeks earlier",
        "Planned around festivals and heat",
      ],
    },
  ],

  sections: [
    {
      heading: "Can a Rajampet student really study IB or IGCSE without leaving town?",
      paragraphs: [
        "Yes, with limits. A Rajampet student can study an IB or IGCSE course at home through online tuition, but cannot attend an IB or IGCSE school here because we could not confirm one. Exams must be taken at an authorised centre, often in a larger city, and that logistics point is worth checking early.",
        "For IGCSE, private candidates are accepted by many centres, though not all, and entry deadlines are months before each exam series. For the IB Diploma, a candidate normally needs to be registered through an authorised IB World School, so a student without one nearby usually joins a school elsewhere or studies a different route.",
        "Online tuition covers the teaching part. A tutor can work through the syllabus, mark past papers and coach exam technique. It cannot register a student for exams, provide predicted grades or run internal assessment moderation, which belong to schools and exam boards.",
        "Families should therefore treat tutoring as one piece of a plan, along with the school, centre and board. We are happy to explain what the tutoring can and cannot do before you begin.",
      ],
      bullets: [
        "Online tutoring covers teaching and practice",
        "Exams need an approved centre or school",
        "IB Diploma registration normally goes through an IB World School",
        "Check deadlines and fees with the board or centre",
      ],
    },
    {
      heading: "Andhra Pradesh state board, CBSE, IB or IGCSE: how should Rajampet parents compare them?",
      paragraphs: [
        "Most Rajampet children follow the Andhra Pradesh state board or CBSE, and both lead directly into the state and national entrance routes that dominate the region. EAPCET, NEET and JEE preparation is deeply embedded in local schools and coaching.",
        "IB and IGCSE take a different approach. They reward wider reading, explanation and the ability to apply ideas to new situations. That suits some students very well and frustrates others, particularly those who like a fixed syllabus and a set of model answers.",
        "The comparison below is a simplified view. Individual schools and boards vary, and a family should always confirm details with the school or exam body before making a decision.",
        "In practice, we suggest that parents who are unsure start with a trial lesson in one IGCSE subject, watch how their child responds and only then plan bigger changes.",
      ],
      table: {
        caption: "Four routes from a Rajampet household's point of view",
        columns: ["Route", "How it is assessed", "Where it leads easily", "Availability near Rajampet"],
        rows: [
          ["AP state board", "Board exams on textbooks", "State and national entrance exams", "Everywhere"],
          ["CBSE", "Board exams with application questions", "JEE, NEET, CUET", "Several schools"],
          ["IB Diploma", "Exams plus IAs, EE, TOK", "Universities in India and abroad", "No school confirmed"],
          ["IGCSE", "Subject exams by tier", "Class 11 in any board, A Level, IB", "No school confirmed"],
        ],
      },
    },
    {
      heading: "What sets the price of IB and IGCSE tutoring for a Rajampet student?",
      paragraphs: [
        "A price depends on who teaches and what is taught, so we do not print one. What a family receives is a written quotation, after we know the subject, level and how often the student wants lessons.",
        "The single biggest factor is the subject and level. HL Physics, HL Mathematics or Cambridge Additional Mathematics require experienced specialists and reflect that in the rate. Humanities, languages and primary-level support are usually more accessible in price, because more tutors qualify.",
        "How the lessons are spread matters as well. A steady weekly pace across the year and a burst of intensive lessons before exams cost different amounts per week, and one may fit the family's finances better.",
        "Because lessons are online, families in Rajampet avoid the cost of travel to Tirupati or Kadapa, which some had previously considered for tuition. The trial class is free, and a change of tutor is available at no charge.",
      ],
      bullets: [
        "Subject and level set the range",
        "Frequency and length of the block change the cost",
        "Quotation in writing before you book",
        "No travel to another town needed",
      ],
    },
    {
      heading: "Online tutor, coaching institute, local teacher or self-study: how do they compare in Rajampet?",
      paragraphs: [
        "The Rayalaseema coaching culture is strong and well organised, and for the state exams it works well. What it does not typically offer is IB or Cambridge instruction, because the demand in a town this size is too small to sustain a batch.",
        "A local teacher can be an excellent guide for foundation Mathematics or Science but may not know how HL papers differ from SL or how Cambridge mark schemes are worded. Self-study with past papers is workable for disciplined students, but mistakes can persist without a marker.",
        "The table gives a side-by-side comparison of these four options, focusing on what matters to an IB or IGCSE student.",
      ],
      table: {
        caption: "Four ways to study an international course in Rajampet",
        columns: ["Option", "Knows the specification", "Marks to the right scheme", "Main limitation"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched by course", "Yes", "Needs reliable internet"],
          ["Coaching institute", "Focus on state and national exams", "Not for IB or IGCSE", "Fixed batch and travel"],
          ["Local private teacher", "Depends on their background", "Rarely", "Small pool of options"],
          ["Self-study", "From the published specification", "No", "Mistakes go uncorrected"],
        ],
      },
    },
    {
      heading: "How do exam dates, monsoon and festivals shape a Rajampet school year?",
      paragraphs: [
        "IB Diploma exams run in May and November, and IGCSE exams run in February to March, May to June and October to November. Most Indian IB candidates sit in May, which means the final revision falls in the hottest weeks of a Rayalaseema summer.",
        "The northeast monsoon between October and December brings much of the region's rain, occasionally disrupting power and roads. The southwest monsoon is lighter here than on the coast. Festivals also shape teaching: Sankranti in January, Ugadi in March or April and Sri Rama Navami at Vontimitta all reduce study time, while Dasara brings a longer break.",
        "Sensible planning means teaching most new content before the heat, using festival weeks for light review, and rehearsing timed papers before summer. A phone hotspot as backup helps during storms or outages.",
        "We build a calendar with each family and adjust it whenever school dates change.",
      ],
      table: {
        caption: "Sample planning calendar for a Rajampet student sitting in May",
        columns: ["Period", "Priority", "Local factor"],
        rows: [
          ["June to September", "Begin content, set routines", "Hot start, southwest monsoon showers"],
          ["October to December", "Finish core topics, first mocks", "Northeast monsoon; Dasara break"],
          ["January to February", "Full mocks, IA drafts", "Sankranti holidays; pleasant weather"],
          ["March to April", "Timed papers, weak-topic repair", "Ugadi and Sri Rama Navami; rising heat"],
          ["May to June", "Sit exams", "Peak heat, plan backup power"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE graduates from Rajampet go next?",
      paragraphs: [
        "The next step depends on the certificate and the plan. Three options recur: Indian universities, professional entrance exams and study abroad. Each has published rules that change, so check the latest notices.",
        "For Indian universities, IB Diploma holders normally need an equivalence certificate from the Association of Indian Universities for public institutions, while many private universities admit on IB scores directly. CUET-UG also has provisions for foreign-board students. IGCSE students commonly move to Class 11 in CBSE, ICSE, IB or A Level.",
        "Andhra Pradesh's engineering and medical entrances, along with NEET-UG and JEE Main, have their own eligibility conditions. Students from international boards must satisfy subject combinations and may need equivalence, so Physics, Chemistry and either Biology or Mathematics should be planned into the Diploma choice.",
        "Abroad, UCAS covers the UK, the Common Application covers many American universities, and Canada and Australia have direct application routes. Predicted IB grades and IGCSE results have different weight in each. Tutors focus on the subject learning that produces those results.",
      ],
      bullets: [
        "AIU equivalence for many Indian public universities",
        "AP EAPCET, NEET-UG and JEE Main have subject rules",
        "UCAS, Common App and direct applications abroad",
        "Confirm current rules before finalising subject choices",
      ],
    },
    {
      heading: "How is IB Mathematics and Science tutoring delivered online in Rajampet?",
      paragraphs: [
        "Sessions run live on video with a shared whiteboard. The tutor introduces or revisits an idea, sets a problem and watches the student solve it on paper, then comments on the working. Because everything is written by hand and photographed afterwards, there is a permanent record of what was done.",
        "In IB Mathematics, the choice between Analysis and Approaches and Applications and Interpretation shapes the whole course. The first suits students aiming at engineering, economics or physical sciences, the second suits business, social science and design. We advise on the choice at the start.",
        "Science courses share a pattern: concepts to understand, facts and equations to recall, and an internal investigation to design and write. Tutors help with the first two directly and coach the third through questions.",
        "A typical hour includes a review of last week's homework, new teaching and a short task to complete before the next session.",
      ],
    },
    {
      heading: "IGCSE Core and Extended: which tier should a Rajampet student sit?",
      paragraphs: [
        "Core and Extended are different papers with different ceilings. Core reaches grade C at most, and Extended goes up to A star, so tier choice shapes the options that follow.",
        "Students aiming at the IB Diploma, A Level or a competitive Indian stream should generally sit Extended in Mathematics and the sciences. Core suits students who find a subject difficult or who take it for breadth. A good tutor helps the family decide after a term of lessons and a set of practice papers.",
        "For subjects, most students take English, Mathematics and two or three sciences, plus one of Economics, Business or Computer Science. Hindi as a second language is a popular option for Telugu-speaking students, because it adds a strong grade without heavy new content.",
        "Cambridge and Edexcel differ in style and tier names, with Edexcel using Foundation and Higher. Tell us which board applies and we match a tutor familiar with it.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Share the programme, subject, level and exam session by WhatsApp or email." },
    { title: "Review a match", description: "We propose a tutor already teaching that syllabus." },
    { title: "Try a lesson", description: "Attend a complete first class at no cost." },
    { title: "Confirm the terms", description: "Rate, timetable and plan arrive in writing." },
    { title: "Learn with feedback", description: "Lessons, written notes and a tutor change if needed." },
  ],

  whyPoints: [
    { title: "A tutor for your course", description: "HL Chemistry students get a tutor who teaches HL Chemistry." },
    { title: "Works around Rajampet", description: "No trips to Kadapa or Tirupati are needed for tuition." },
    { title: "Straight about local schools", description: "We do not claim an IB or IGCSE school in Rajampet." },
    { title: "Feedback you can read", description: "A short note follows each lesson." },
    { title: "Free trial lesson", description: "See the tutor at work before paying anything." },
    { title: "Honest coaching", description: "Tutors never write assessed work for a student." },
  ],

  tutorsIntro:
    "All tutors teach from India on IST, so a Rajampet student never faces time-zone problems. We match by syllabus, level and teaching style, and share a profile before the trial lesson.",

  faqs: [
    { question: "Do tutors visit homes in Rajampet?", answer: "No, tutors do not visit homes in Rajampet. Home visits run only in Gurugram and parts of Delhi NCR. Rajampet students learn in live online one-to-one lessons at home, which gives access to specialists from across India instead of only those who happen to live near Kadapa or Tirupati." },
    { question: "Is there an IB school in Rajampet?", answer: "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Rajampet. Local schools follow the Andhra Pradesh state board or CBSE. The nearest confirmed options we know of are around Tirupati. Check the official IB and Cambridge directories, since authorisations change." },
    { question: "How do I get an IB tutor in Rajampet?", answer: "Send your child's programme, subjects, level and exam session to support@ibgram.com or message +91 7439 368 115 on WhatsApp. We shortlist a tutor who teaches the same syllabus, arrange a free trial lesson and confirm rates in writing. The tutor does not need to live in Rajampet." },
    { question: "What does IGCSE online tuition cost in Rajampet?", answer: "Fees depend on the tutor's experience, subject, level and lesson frequency, so we quote in writing before you book. The trial lesson is free. Extended Mathematics and sciences tend to cost more than early-level support. Families also save the cost of travelling to another town for tuition." },
    { question: "Can my child sit IGCSE exams from Rajampet?", answer: "Yes, through an approved centre that accepts private candidates. Such centres are usually in larger cities like Tirupati, Chennai or Hyderabad. Cambridge and Pearson Edexcel publish centre lists and deadlines. Ask about practical papers and fees. Tutors prepare the student, but you handle registration." },
    { question: "Which IB subjects do Rajampet students want most?", answer: "Mathematics, Physics, Chemistry and Biology lead, in line with regional interest in engineering and medicine. Economics, Business Management and English follow. Some families also ask about Theory of Knowledge, though tutors only discuss ideas and structure and never write essays." },
    { question: "Can IB students apply to NEET or JEE?", answer: "It depends on subject combinations and on the current rules set by the exam agencies and universities, which change. In general, students need the right science subjects and, for many institutions, an equivalence certificate. Plan Diploma subjects early and confirm the latest notification in writing." },
    { question: "Will lessons be affected by power cuts or heat?", answer: "Sometimes. Summer heat and storms can cause outages, so we suggest a charged laptop and a phone hotspot as backup. Any lesson time lost to an outage is rescheduled without extra charge, and the written note records what was covered before the interruption." },
    { question: "Do tutors help with IAs, EE and TOK?", answer: "Tutors coach and never write. They explain criteria, question plans and comment on drafts in general terms, but every word must be the student's own. That protects the student from academic misconduct penalties." },
    { question: "Can a Class 8 student start IGCSE preparation?", answer: "Yes. Starting early gives time to move from memorised answers to explained reasoning, with less exam pressure. Tutors keep the first term light and add past papers later. A trial lesson shows how your child responds." },
    { question: "Is Telugu-medium schooling a barrier?", answer: "It can be a challenge but not a barrier. Lessons and exams are in English, and tutors clarify difficult ideas in simple language, including Hindi where useful. English support can be added alongside the main subjects, and confidence usually grows within a term." },
    { question: "What internet speed is needed?", answer: "Around 5 Mbps of stable connection is enough for video and a shared whiteboard. Broadband or strong Wi-Fi is better than mobile data. Keep a phone hotspot ready in case of a drop." },
    { question: "How many lessons a week should we book?", answer: "One weekly lesson plus homework suits a steady course. Before exams, two to four lessons a week for about a month is common. Tutors review progress through past papers and advise on changes, and you can adjust with written notice." },
    { question: "Which IGCSE boards do you cover?", answer: "Both Cambridge International and Pearson Edexcel IGCSE, with A Level and AS as context. Tell us which board your child is entered with, and we choose a tutor familiar with it." },
    { question: "How do I book the free trial?", answer: "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with your child's class, board, subject and a suitable time. We arrange a trial lesson within a few days, with no obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All Indian cities we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Overview of IB tutoring." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subjects and core components." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and Personal Project support." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led support for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a trial." },
    { label: "IB and IGCSE tutors in Kadapa", href: "/kadapa/", description: "Our page for the nearby district city." },
    { label: "IB and IGCSE tutors in Tirupati", href: "/tirupati/", description: "Our page for the closest larger city." },
    { label: "IB and IGCSE tutors in Chittoor", href: "/chittoor/", description: "Our page for another Rayalaseema city." },
  ],

  closingHeading: "Start with a free lesson from Rajampet",
  closingBody:
    "Tell us the programme, subject and exam session, and we will introduce a tutor who teaches that course. Message +91 7439 368 115 on WhatsApp or email support@ibgram.com, and take the first lesson free.",
};
