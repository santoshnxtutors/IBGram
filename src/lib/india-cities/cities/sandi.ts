import type { CitySeoPage } from "../types";

/**
 * /sandi/ - IB and IGCSE tutoring page for Sandi, Hardoi district, Uttar Pradesh (Bilgram tehsil,
 * Lucknow division; not Sandi in Raebareli). No local school confirmed for IB or Cambridge/Edexcel
 * IGCSE. Nearby cluster is Lucknow, using schools already verified for /lucknow/. Online-only delivery:
 * in-person home tuition is limited to Gurugram and parts of Delhi NCR.
 */
export const sandi: CitySeoPage = {
  slug: "sandi",
  countryName: "Sandi",
  countryNameLong: "Sandi, Hardoi district, Uttar Pradesh",
  demonym: "Sandi",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings are arranged around winter fog, the wheat and potato harvest weeks, Diwali and Holi, and your child's UP Board or school timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.3, longitude: 79.95 },
  wikipedia: "https://en.wikipedia.org/wiki/Sandi,_Uttar_Pradesh",
  alternateNames: ["Sandi Hardoi", "Sandi Uttar Pradesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sandi, Hardoi | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sandi in Hardoi district: DP, MYP, Cambridge and Edexcel subjects taught live and one-to-one online at home, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sandi",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SANDI, HARDOI DISTRICT",
  heroSubtitle:
    "IB or IGCSE home tuition in Sandi means this: a specialist meets your child on a live video call, privately, while the child sits at the family's own table. Nobody drives from a city to a Sandi house, as in-person visits belong to Gurugram and parts of Delhi NCR alone. The sections below explain matching, timing and the free first class for Hardoi district families.",
  primaryKeyword: "IB and IGCSE tutors in Sandi",
  imageAltText: "A Sandi student in Hardoi district talking through an IB Economics diagram with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Sandi",
    "IGCSE tutor Sandi",
    "IB home tuition Sandi",
    "IGCSE home tuition Sandi",
    "IB private tuition Sandi",
    "IB Maths tutor Sandi",
    "IGCSE Maths tutor Sandi",
    "IB Physics tutor Sandi",
    "IB Chemistry tutor Sandi",
    "IB Biology tutor Sandi",
    "IB DP tutor Sandi",
    "IB MYP tutor Sandi",
    "IB PYP tutor Sandi",
    "IGCSE online tuition Sandi",
    "IB tutor Hardoi",
    "IGCSE tutor Hardoi",
    "IB tutor Sandi Hardoi Uttar Pradesh",
    "online IB classes Hardoi district",
  ],

  heroTrustPoints: [
    "Tutors picked for the precise IB paper or IGCSE syllabus code, not for a vague subject label",
    "Teaching in Sandi is entirely on screen; in-person tutoring is offered only in Gurugram and parts of Delhi NCR",
    "A complimentary trial class lets you see the teaching before agreeing to anything",
    "After each class a note in everyday language reaches the parents",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The full IB ladder" },
    { value: "CAIE and Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Indian-hours teaching" },
    { value: "Free trial", label: "Nothing to pay up front" },
  ],

  intro: {
    heading: "IB and IGCSE tutors for Sandi, a Garra-river town with no international school",
    paragraphs: [
      "Sandi is a town and nagar palika in Bilgram tehsil of Hardoi district, on the left bank of the Garra river and on the road from Hardoi to Fatehgarh. It is named for the fort of Raja Santan Singh whose ruins lie just south of the modern town, and it is best known beyond the district for the Sandi Bird Sanctuary and its lake, Dahar Jheel, some 19 km away. Its working economy has long rested on oilseeds, grain and potatoes, with mustard and groundnut oil among its manufactures.",
      "Local schooling is the Uttar Pradesh Board or CBSE, taught in Hindi and English. No school in Sandi is known to offer the IB or a Cambridge or Edexcel IGCSE, and the closest railway station is Hardoi. An enquiry about an international curriculum usually looks beyond the district: a likely move to Lucknow, a relative abroad, or a strong student aiming at a foreign degree.",
      "A tutor who has actually marked IB Chemistry or IGCSE Physics papers is the missing ingredient, and that person is rarely found in a district town. By teaching over video, IB Gram brings in a specialist from elsewhere in India, with a shared board for working. So the answer to who offers IB and IGCSE tutors in Sandi is simple: the best match we can make, wherever the tutor lives.",
      "IB Gram operates independently of the IB, Cambridge, Pearson and any school on this page. Tutors teach, set tasks and mark, but never write or reword an Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP and MYP help, and Diploma subjects at Higher and Standard Level",
      "Cambridge and Pearson Edexcel IGCSE at each tier",
      "Live one-to-one classes on Indian Standard Time",
      "A free first class and a written rate before any booking",
      "Sandi has no tutor visits; face-to-face tuition is for Gurugram and parts of Delhi NCR only",
    ],
  },

  programmesIntro:
    "None of these four programmes is taught at a Sandi school that we could verify. Each one tends to reach a Hardoi district family through a specific event, such as a planned move to Lucknow, a relative's advice or an overseas ambition, and the notes below follow those paths.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Children explore six themes through inquiry, finishing with an Exhibition in Grade 5. There is no public exam, so the practical work is steady reading, early numeracy and learning to ask good questions.",
      countryNote:
        "In Sandi the PYP is mentioned when a parent expects a move to a bigger city and wants a small child prepared.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Each subject is marked against criteria and the programme ends with a Personal Project. The usual coaching task is lifting an answer from correct to explained and evaluated.",
      countryNote:
        "A student leaving a Hindi-medium Class 7 or 8 for an MYP classroom usually needs academic English more than anything else.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Over two years a student takes six subjects alongside the Extended Essay, TOK and CAS. Most written papers come in May, and each subject's final grade also draws on its internal assessment.",
      countryNote:
        "Students from Hardoi district who take the Diploma generally study in Lucknow or farther away and look for a specialist in the holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs DP courses with career-related study and a reflective project. Hardly any Indian schools run it, so tutoring is almost always about the DP courses within it.",
      countryNote:
        "Questions about the CP are almost unheard of in Sandi; if one comes, the real task is DP subject teaching.",
    },
  ],

  subjectsIntro:
    "Learners in UP Board and CBSE classes cope with long syllabuses and fast recall. The IB and IGCSE ask for that same knowledge to be put to work in an argument, so matching starts with course and level and then checks written English. Name the paper and we look for tutors who have taught it.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus, vectors and proof, for students heading towards engineering or pure science, with HL Paper 3 testing stamina on unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data handling, probability and modelling with technology, where explaining a result earns as many marks as finding it." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to nuclear physics plus a self-designed investigation. Students used to numerical drills must add clear conceptual explanation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, kinetics, equilibrium and organic reactions, with quick data-booklet use and exact definitions." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology to ecology, assessed through command terms that reward precise wording. River and wetland ecology around the Garra offers fieldwork ideas." },
    { name: "IB Economics", levels: "HL / SL", description: "How markets work, what policy does and what development means, illustrated with nearby cases like oilseed prices, potato cold storage and farm trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to a case, which suits families in oil milling, grain trading and small manufacturing." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparison and an oral. Hindi speakers sharpen their formal written English." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "Because Hindi is spoken at home, students start from a strong base; lessons then cover text types, literary analysis and the individual oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, algorithms and databases, plus a solution project that needs steady weekly work." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, hazards and change. River flooding and wetland conservation give real case studies." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking about water, soil and biodiversity, with the Sandi Bird Sanctuary as a close example." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research-led study of behaviour through biological, cognitive and sociocultural lenses, written up as extended responses." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essays across prescribed topics." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions about how we come to know things, shaping the exhibition and essay." },
  ],

  igcseSubjectsIntro:
    "In India IGCSEs come from two boards, Cambridge (CAIE) and Pearson Edexcel, with separate codes and papers. We settle board and window first: Cambridge sits in March, May-June and October-November, Edexcel in January, May-June and October.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with Extended aimed at further maths and the sciences." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Extra calculus and algebra that prepares a student for Analysis and Approaches in the IB." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Phrased and laid out differently from Cambridge, so Edexcel past papers are used." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Mechanics, heat, waves, circuits and the nucleus, with the practical-skills paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding, reaction rates and organic reactions, plus planning an experiment on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cell biology, genetics, ecology and human physiology, answered in the structure examiners expect." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Core ideas, then data response and evaluation." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Computational thinking and short programs." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "An English qualification that colleges recognise, useful for a Hindi-medium student heading into A Level or the IB." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business ideas applied to case material." },
  ],

  regionsTitle: "Sandi neighbourhoods and nearby places we teach online",
  regionsIntro:
    "Lessons happen on screen, so these places describe daily rhythm: where the grain markets pull attention, how far the road to Hardoi is, and which families work in trade or on the land. Sandi is compact, which means many households share the same few patterns.",
  regions: [
    { name: "Sandi town centre", note: "The market and nagar palika core, where most schools, tuition batches and shops are close together." },
    { name: "Near the old fort ruins", note: "The area south of town around the remains of Raja Santan Singh's fort, with long-settled families." },
    { name: "Garra riverbank side", note: "Households on the left bank of the Garra, where the monsoon raises water levels and data backup matters." },
    { name: "Hardoi road corridor", note: "Families along the Hardoi to Fatehgarh road, many commuting to Hardoi for work or classes." },
    { name: "Grain and oil-mill area", note: "Trader and mill-owning households whose seasons follow the harvest and market days." },
    { name: "Dahar Jheel and Sandi Bird Sanctuary side", note: "The wetland edge about 19 km out, a winter draw for visitors and a rural catchment for students." },
    { name: "Bilgram", note: "The tehsil town nearby, with older institutions and its own tuition market." },
    { name: "Hardoi", note: "The district headquarters about 19 km away, with the nearest railway station and larger coaching centres." },
    { name: "Fatehgarh direction", note: "Families to the west who may combine Sandi schooling with Fatehgarh or Farrukhabad links." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB, Cambridge or Edexcel IGCSE school in Sandi, which is why the strip is empty. Names listed below are campuses in Lucknow, the nearest we were able to verify. IB Gram is unconnected to them, and equally to the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Lucknow",
      note: "Sandi lies in the Lucknow division, and the state capital is where Hardoi families usually look for an international campus, either by moving or by boarding.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Sandi: staying with the home school",
      note: "Most students stay in their UP Board or CBSE school and add online IB or IGCSE subject classes, frequently as preparation for a move.",
      schools: [],
    },
    {
      city: "Hardoi district: limited local choice",
      note: "Neither Sandi, Bilgram nor Hardoi has a confirmed international campus, so none is named.",
      schools: [],
    },
  ],

  modesIntro:
    "Sandi gets a single format: a live video class with one tutor, offered in three speeds. No one comes to the house, as home visits are restricted to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One set hour each week",
      description:
        "Same tutor, same slot, every week, using a shared digital board and past-paper pages on screen.",
      bullets: [
        "One tutor throughout",
        "Any IB subject or IGCSE code",
        "Evening or Sunday slots",
        "A short recap after every class",
      ],
    },
    {
      title: "Term plan with check-ins",
      description:
        "Two classes a week, written notes and a monthly review, for parents who want to see steady movement.",
      bullets: [
        "Monthly summary of strengths and gaps",
        "Suits MYP and early DP students",
        "Fits around harvest-season family work",
        "Extra classes before mocks",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Intensive practice on timed papers, marked fast, in the run-up to an IB, Cambridge or Edexcel sitting.",
      bullets: [
        "Timed past papers",
        "Corrections against the mark scheme",
        "Planned around Diwali and Holi",
        "Begin two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Sandi families ask about the IB and IGCSE?",
      paragraphs: [
        "Sandi is a small trading town in which oil mills, grain merchants and farming families set the pace, with government service and teaching as the other respected careers. Hindi, often with an Awadhi or Kannauji tinge in nearby villages, is the language of the home, and international curricula rarely come up in conversation.",
        "Still, a handful of families start asking. A parent may have a brother in Dubai or Canada. A bright student may have heard about foreign scholarships. A business family expanding to Lucknow may plan to settle the children there. Each of them needs to know how the IB or IGCSE works and whether a start can be made from home.",
        "Because no school in the town teaches either programme, the options are to relocate, to board, or to study privately. Private study means following an IGCSE syllabus with a tutor and sitting exams as a private candidate, or preparing subjects for a planned IB move.",
        "The limit is real. The IB Diploma needs a registered school, and a tutor cannot replace that school's labs or internal assessment oversight. What a tutor can build is subject strength, exam technique and confidence in English.",
      ],
      bullets: [
        "Business families planning a move to Lucknow",
        "Parents with relatives abroad",
        "Students aiming for overseas scholarships",
        "Children wanting stronger English-medium study",
      ],
    },
    {
      heading: "How do UP Board, CBSE, IGCSE and IB compare for a Hardoi district student?",
      paragraphs: [
        "UP Board high school and intermediate papers come in February and March, drawing on NCERT books for many subjects. CBSE offers a national pattern. IGCSE and IB are set by international bodies that value written reasoning, practical work and wider subject choice.",
        "IGCSE spans Classes 9 and 10 and is sat paper by paper with tiers. The IB Diploma is a two-year pre-university course in six subjects plus the Extended Essay and TOK. Plenty of students do IGCSE first, then the IB, A Level or Class 11.",
        "Where the child goes next decides the matter. If the plan is to stay in Uttar Pradesh, the board and CBSE give the most direct route to state and national entrance exams. If it is to leave the state or the country, an international qualification starts to pay off.",
        "A tutor lets the child sample an international subject without changing school, which gives the family evidence before a large decision.",
      ],
      table: {
        caption: "Routes for a Sandi family to weigh",
        columns: ["Route", "Medium", "Main exam", "Typical next step"],
        rows: [
          ["UP Board", "Hindi or English", "High school and intermediate, Feb-Mar", "State colleges, JEE, NEET"],
          ["CBSE", "English or Hindi", "Class 10 and 12 boards", "JEE, NEET, CUET-UG"],
          ["IGCSE", "English", "Subject papers, several series", "A Level, IB, Class 11"],
          ["IB Diploma", "English mainly", "Six subjects with EE and TOK", "Indian and overseas universities"],
        ],
      },
    },
    {
      heading: "What goes into the price of IB or IGCSE tuition in Sandi?",
      paragraphs: [
        "There is no rate card. A written quote comes after the trial, tailored to your child, so you weigh a genuine figure.",
        "Rates depend on subject and level, hours per week, how well the tutor knows the precise syllabus and how long remains before the exam. Expect a Higher Level science taught by a seasoned tutor to cost more than IGCSE Business at Core.",
        "Online delivery removes the costs a Sandi family would meet travelling to Hardoi or Lucknow: bus or train fares, a lost afternoon and sometimes a night away. It also lets you pick from across the country.",
        "Use the trial to judge: does the tutor find the real gaps, explain clearly and set work that makes sense? If not, we suggest another tutor.",
      ],
      bullets: [
        "Subject and level",
        "Hours each week",
        "Tutor experience with the syllabus",
        "Time left before the exam",
      ],
    },
    {
      heading: "Is online tuition a better choice than a Hardoi coaching class?",
      paragraphs: [
        "Hardoi and Lucknow have coaching centres, mostly aimed at board exams, JEE, NEET and government jobs. None we know of teaches IB or IGCSE marking, so a class there delivers content but not the examiners' way of awarding marks.",
        "A neighbourhood tutor might teach school subjects superbly and still be unsure of IB method marks or IGCSE Extended wording.",
        "Online lessons with a syllabus-experienced tutor cut out the road. The price is reliance on power and broadband, which fog and storms can disturb, so a hotspot and flexible rescheduling are built in.",
        "Many families mix the options: school and coaching for the UP Board, one weekly online lesson for the international subject, and past papers in between.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Sandi",
        columns: ["Option", "Syllabus knowledge", "Travel", "Paper feedback"],
        rows: [
          ["Online one-to-one", "Matched to the exact course", "None", "Against real mark schemes"],
          ["Hardoi coaching class", "Board and entrance focus", "19 km each way", "General"],
          ["Local private tutor", "Varies", "Short trip", "Depends on tutor"],
          ["Self-study", "Own reading", "None", "None without review"],
        ],
      },
    },
    {
      heading: "When do the exams fall, and what do fog and harvest do to the plan?",
      paragraphs: [
        "Most Diploma papers are written in May, and results appear in July. Indian Cambridge IGCSE series run in March, May-June and October-November, with Edexcel in January, May-June and October. The school or exam centre settles which series your child enters.",
        "Hardoi district has a plain climate. December and January bring thick fog and cold, with trains late and mornings dark. April to June is very hot, and the monsoon raises the Garra and other streams. Wheat is harvested in April and potatoes dug earlier in the year, so rural families are busy.",
        "Festivals matter too. Diwali, Holi and Dussehra take whole weeks of attention, and wedding season in winter fills calendars. We avoid scheduling hard revision on those days.",
        "Our method starts at the exam date and moves backwards: an opening diagnostic, then teaching, then papers under time, then a closing review. Anything weather steals is rescheduled.",
      ],
      table: {
        caption: "Study calendar for a Sandi student",
        columns: ["Months", "Local pattern", "Study planning"],
        rows: [
          ["Dec-Jan", "Fog and cold; Edexcel January", "Short evenings, warm indoor slots"],
          ["Feb-Mar", "UP Board exams; Cambridge March series", "Light lessons only"],
          ["Apr-Jun", "Wheat harvest, heat; IB May exams", "Early or late slots"],
          ["Jul-Sep", "Monsoon, river rise", "Content building with data backup"],
          ["Oct-Nov", "Dussehra and Diwali; Cambridge October-November", "Plan around holidays"],
        ],
      },
    },
    {
      heading: "Where can a Sandi IB or IGCSE student go afterwards?",
      paragraphs: [
        "For an Indian degree, an IB Diploma normally has to be paired with AIU equivalence, and plenty of universities admit through CUET-UG, so the subjects taken must fit the course. Rules for JEE Main and counselling are revised, so read the latest brochure.",
        "For a medical seat via NEET-UG, a candidate needs Physics, Chemistry, Biology and English at the senior-secondary stage. Uttar Pradesh seats may hinge on domicile, and IB or A Level holders must additionally submit equivalence certificates.",
        "Nearer by, students think of Lucknow, Kanpur, Varanasi and Delhi. Farther out are the UK, the USA, Canada, Australia, Singapore and the Gulf.",
        "Following IGCSE, a student heads for A Level, the IB Diploma or Class 11, and the subjects retained in Class 10 shape those next steps. Tutors lay out the connections; a place is never something they can promise.",
      ],
    },
    {
      heading: "IB Maths and the sciences: what strong preparation means",
      paragraphs: [
        "IB Maths offers Analysis and Approaches, heavy on algebra and proof, and Applications and Interpretation, built on data and modelling, each at HL or SL. A diagnostic class shows which fits.",
        "Students from the UP Board tend to be quick and tidy. The IB wants them to justify and explain as well, so classes include written reasoning and a timed paper every two weeks.",
        "The science Internal Assessment is a student-run investigation. Our tutors help choose and refine the question, organise the data and judge the evaluation, but the report itself is never drafted by them. If there is no lab, simulations and open data fill the gap, and error analysis gets proper time.",
        "In Chemistry and Biology the right word earns the mark, so tutors rehearse the phrasing mark schemes expect until it feels natural.",
      ],
    },
    {
      heading: "Picking Core or Extended, and choosing subjects, for Sandi IGCSE candidates",
      paragraphs: [
        "Cambridge splits a good number of subjects into Core and Extended, and Edexcel calls its equivalents Foundation and Higher. Pick the lower tier and top grades are out of reach; pick the upper tier and they are available, and the work lines up with what A Level or IB HL later demands.",
        "An early diagnostic lesson settles the tier. Extended Mathematics paired with Core English is a perfectly sensible combination for many students.",
        "Subject choice follows the destination. Future engineers combine Mathematics, Physics and Chemistry, often with Additional Mathematics; those drawn to commerce take Economics and Business Studies; Computer Science leads to technical careers.",
        "Private candidates sit through an approved exam centre, generally in Lucknow or Delhi; choose the centre and series early and let the lesson plan follow the entry date.",
      ],
      bullets: [
        "Diagnose before choosing a tier",
        "Match subjects to the later stream",
        "Confirm the exam centre early",
        "Plan tutoring around the series",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the class, board, subject, level and exam date on WhatsApp or by email." },
    { title: "Meet a proposed tutor", description: "One or two tutors with experience of the syllabus are put forward, each with a brief profile." },
    { title: "Take the trial class", description: "A live class on a genuine topic, free of charge." },
    { title: "See the rate", description: "A written rate and plan reach you before anything continues." },
    { title: "Study with notes", description: "Lessons start and each ends with a short note. Switching tutor is possible whenever the fit feels wrong." },
  ],

  whyPoints: [
    { title: "Syllabus-matched tutors", description: "Every tutor shown has taught the course in question." },
    { title: "Plain about format", description: "All teaching in Sandi is online. Home visits are confined to Gurugram and parts of Delhi NCR." },
    { title: "Indian time zone", description: "Tutors work on IST, so evenings after school or after the shop closes are easy to arrange." },
    { title: "Readable notes", description: "After every class a short note lists the topics covered and the practice set." },
    { title: "Swap if needed", description: "A wrong fit means a new tutor, with no fuss." },
    { title: "Coaching, not ghostwriting", description: "IAs, Extended Essays, TOK essays and coursework stay the student's own work." },
  ],

  faqs: [
    { question: "Is there anyone offering IB or IGCSE tuition in Sandi, Hardoi?", answer: "No local provider is known to us, so the classes are online. Schools around Sandi follow UP Board and CBSE courses, and no IB or IGCSE campus exists in town or in Hardoi. A specialist from elsewhere in India who has taught the syllabus is matched to your child, and the lesson runs on video from your home." },
    { question: "Does a tutor come to the house in Sandi?", answer: "No visitor will ring your bell in Sandi. Lessons in person happen only in Gurugram and parts of Delhi NCR, so here the service is online home tuition: a desk at home, a camera, the tutor's face on the screen and a shared whiteboard for working. All you need is a laptop and a connection that holds. In exchange, your pick of teachers spans India and no one has to make the road trip to Hardoi." },
    { question: "What will IB tuition cost for a Sandi student?", answer: "We send a written rate after the free trial and publish no price list. The amount reflects subject and level, hours per week, the tutor's depth with the exact syllabus and the time left before the exam. Online delivery means no travel cost. Weigh the quote against your budget and decide after the trial class." },
    { question: "Is this Sandi in Hardoi or Sandi in Raebareli?", answer: "This page covers Sandi, the town in Hardoi district, in Bilgram tehsil. There is also a village called Sandi in Raebareli district. Since all our teaching is online, a family in either place can use the service, but the local context here, the Garra river and Hardoi road, belongs to the Hardoi town." },
    { question: "Will IGCSE count for admission in Uttar Pradesh?", answer: "IGCSE is a Class 10 level award. Students normally continue to Class 11, A Level or the IB before applying for a degree, while each university sets its own admission and equivalence terms. A tutor can show how subjects keep doors open but promises no seat." },
    { question: "Can an IB student appear for JEE or NEET?", answer: "It depends on the subjects taken and on rules that are rewritten each year. NEET-UG insists on Physics, Chemistry, Biology and English, JEE has its own subject conditions, and UP quotas may hinge on domicile. Ask the exam body in writing, well before registration, whether your child's IB subject combination qualifies." },
    { question: "Does winter fog affect online classes?", answer: "Fog itself seldom stops a connection, though a storm or a flooded monsoon week can. A charged laptop, a hotspot and one open slot per week cover most trouble. Missed classes are moved to another day, and the tutor messages practice questions so the thread is not lost." },
    { question: "Can tutors help with Internal Assessments and the Extended Essay?", answer: "Think of the tutor as a coach, not a ghostwriter. Support includes decoding assessment criteria, narrowing a research question and responding to what the student has already written. Producing, polishing or rewording any part of an IA, Extended Essay, TOK essay or coursework is something the tutor refuses, because authorship rules forbid it." },
    { question: "Cambridge or Edexcel IGCSE, which one?", answer: "Neither is simply better. The boards cover similar topics but differ in papers, tiers and series, and the school or centre usually decides. If you are free to choose, a tutor can compare sample papers and suggest the board that suits your child's style." },
    { question: "Can a Sandi student sit IGCSE as a private candidate?", answer: "Quite often, yes. Approved Cambridge and Edexcel centres admit external candidates, and from Sandi the closest are usually in Lucknow or Delhi. Subjects differ on practical and coursework rules, so read the syllabus beforehand. We handle online teaching for the written and alternative-to-practical papers, while registration rests with the family." },
    { question: "How long before the exam should lessons start?", answer: "For IB Higher Level subjects, about a year is ideal, and IGCSE Mathematics and sciences also benefit from a year. A six to eight week sprint can work if the content is already known. Within a month of the exam the aim is usually targeted fixes, not new learning." },
    { question: "Do you teach PYP and MYP from Sandi?", answer: "Yes. PYP help covers reading, number sense and research habits for the Exhibition, and MYP help covers writing against criteria, mathematical reasoning and the Personal Project. No Sandi school runs these programmes, so most requests come from families preparing for a move or following an online path." },
    { question: "Can you teach Hindi as an IB subject?", answer: "Yes, provided the school or a private route permits it. Hindi appears in the IB both as literature (A) and as a second language (B). Daily use of Hindi helps, and our lessons supply the exam skills: unseen passages, text-type vocabulary, comparing works and staying calm in the oral." },
    { question: "What equipment is needed?", answer: "A laptop or tablet, stable broadband or strong mobile data, headphones and a quiet table. A phone alone makes a shared whiteboard awkward. Maths and science students need a scientific calculator, and some IB courses require an approved graphic calculator, which the tutor will specify." },
    { question: "How do I get started?", answer: "Contact us through WhatsApp on +91 7439 368 115 or support@ibgram.com, stating class, board, subject, level and exam date. A tutor is suggested in reply, and the free trial is fixed for an evening hour that works for you." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "National page for online IB and IGCSE tuition." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-wise IB tutoring." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure and assessment of the Diploma." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units and the Exhibition." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at HL and SL." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles of IB and IGCSE tutors." },
    { label: "Contact", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Lucknow", href: "/lucknow/", description: "IB and IGCSE schools and tutoring in Lucknow." },
    { label: "Kanpur", href: "/kanpur/", description: "Online IB and IGCSE tuition for Kanpur." },
    { label: "Varanasi", href: "/varanasi/", description: "Online IB and IGCSE tuition for Varanasi." },
  ],

  closingHeading: "Book a free first class from home in Sandi",
  closingBody:
    "Let us know the subject, level and exam date, and a tutor who has taught the syllabus will be lined up. WhatsApp +91 7439 368 115 or email support@ibgram.com, then sit the trial class before deciding anything.",
  tutorsIntro:
    "These tutors teach Sandi students live over video. Each has taught IB or IGCSE courses, and the tutor we suggest is picked for your child's subject, level and exam board rather than for living nearby.",
};
