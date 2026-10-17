import type { CitySeoPage } from "../types";

/**
 * /parasi/ - IB and IGCSE tutoring page for Parasi, a census town in Sonbhadra district, Uttar Pradesh
 * (Singrauli-Sonbhadra power and coal belt). Online only. No IB or Cambridge/Edexcel campus confirmed
 * locally, so stripSchools is empty; clusters use Lucknow, Kolkata and Delhi NCR schools already named
 * on published city pages. Angle: PSU and shift-working families, heat and coal dust, Kaimur hills.
 */
export const parasi: CitySeoPage = {
  slug: "parasi",
  countryName: "Parasi",
  countryNameLong: "Parasi, Sonbhadra district, Uttar Pradesh",
  demonym: "Parasi",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are fitted around shift rosters at the power and mining units, the loo in May and June and the Dussehra to Chhath weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.1908, longitude: 82.7817 },
  wikipedia: "https://en.wikipedia.org/wiki/Parasi,_India",
  alternateNames: ["Parasi Sonbhadra", "Parasi Uttar Pradesh", "Parsi Sonbhadra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Parasi | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE private tuition for Parasi, Sonbhadra families on shift work and transfers: one-to-one Cambridge, Edexcel and IB lessons, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Parasi",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR PARASI AND SONBHADRA",
  heroSubtitle:
    "Families around Parasi who want private tuition at home for an IB or Cambridge student soon find that no teacher in the district has taught those courses. The lesson has to come by video. Our IB and IGCSE tutors in Parasi teach one student at a time, live, from a specialist elsewhere in India, with a note afterwards and a trial lesson that costs nothing.",
  primaryKeyword: "IB and IGCSE tutors in Parasi",
  imageAltText: "A Parasi student in Sonbhadra at home during an evening online IB Physics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Parasi",
    "IGCSE tutor Parasi",
    "IB home tuition Parasi",
    "IGCSE home tuition Parasi",
    "IB private tuition Parasi",
    "IB Maths tutor Parasi",
    "IGCSE Maths tutor Parasi",
    "IB Physics tutor Parasi",
    "IB Chemistry tutor Parasi",
    "IB Biology tutor Parasi",
    "IB DP tutor Parasi",
    "IB MYP tutor Parasi",
    "IB PYP tutor Parasi",
    "IGCSE online tuition Parasi",
    "IB tutor Sonbhadra",
    "IGCSE tutor Sonbhadra",
    "IB tutor Anpara",
    "online IB tutor Shaktinagar",
    "IGCSE tutor Renukoot",
    "Cambridge IGCSE tutor Parasi Uttar Pradesh",
  ],

  heroTrustPoints: [
    "A tutor who has taught the exact IB course or Cambridge paper, live and one-to-one, for your child alone",
    "Nobody will travel to Parasi: home visits by tutors happen only in Gurugram and parts of Delhi NCR",
    "You attend a free trial before deciding, and fees are given in writing before you book",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel, and every school or employer named here",
  ],
  heroStats: [
    { value: "Power belt", label: "Plans that follow shift and transfer cycles" },
    { value: "PYP to DP", label: "The IB from primary to Diploma" },
    { value: "May & Nov", label: "IB sessions we work towards" },
    { value: "Free trial", label: "Try a real lesson first" },
  ],

  intro: {
    heading: "Coal, power and a child who may be transferred next year",
    paragraphs: [
      "Parasi is a census town in Sonbhadra, the south-eastern tip of Uttar Pradesh, where the state meets Madhya Pradesh, Chhattisgarh and Jharkhand. This corner is often described as the country's energy belt. Coal mines, thermal power stations and the Rihand reservoir shape the economy, and the nearby district seat is Robertsganj, with Renukoot and Obra as other well-known towns.",
      "Many households here belong to public-sector and industrial employers, with fathers and mothers working in shifts at plants or mines and living in colony housing or rented homes. Schooling mostly follows the UP Board and CBSE, with a number of company-supported and private schools. We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Parasi or in the neighbouring parts of Sonbhadra, and we will not suggest one.",
      "What makes this area different from a typical small town is mobility. An engineer posted at a power station may be moved to another state within a few years, and the child must follow. A syllabus that does not change when the address does has real value, which is why curiosity about IB and IGCSE appears even where no school teaches them.",
      "For that reason, IB and IGCSE tutors in Parasi work online. Your child sits at home with a laptop, the tutor appears on screen, and the lesson follows the actual course. We also want to be clear about home tuition: tutors do not visit homes in Parasi, as visits exist only in Gurugram and parts of Delhi NCR.",
    ],
    bullets: [
      "Private tuition at home, taught online, for Parasi, Anpara, Shaktinagar, Obra and Renukoot families",
      "IB PYP, MYP, DP and CP, with Cambridge and Pearson Edexcel IGCSE",
      "A tutor who stays with the child even when the family is transferred",
      "Tutors coach only; IAs, Extended Essays and TOK essays remain the student's own work",
      "Online delivery only here, never in-person visits",
    ],
  },

  programmesIntro:
    "With no local campus we could verify, each IB stage reaches a Parasi family through a transfer, a hostel place or an advance plan for study abroad. Here is what each looks like from Sonbhadra.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children work through six shared themes and end with a self-chosen Exhibition. Tutoring keeps the basics sound: fluent reading, readable handwriting and number facts that stay put.",
      countryNote:
        "A Parasi PYP learner is usually a child who has just arrived on a transfer from a metro and needs the old school's rhythm to continue.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject areas are marked against published descriptors, and the course closes with the Personal Project. The step up is writing reasons and evidence rather than reproducing a textbook answer.",
      countryNote:
        "In this district, MYP help usually comes from a child sent to a hostel in Varanasi, Lucknow or further away, who wants tutoring to continue at home in the holidays.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with three or four at Higher Level, along with TOK, the Extended Essay and CAS. The final grade combines internal work with papers sat in May or November.",
      countryNote:
        "Diploma places are outside Sonbhadra, so a Parasi student normally studies elsewhere and uses home tutoring on weeknights or in long holiday breaks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller block of Diploma courses is joined to a career-related study. Few Indian schools offer it, and requests we meet usually concern one academic course within it.",
      countryNote:
        "We rarely hear about CP from Sonbhadra. If your child is enrolled elsewhere, we handle the academic courses and the school supports the career component.",
    },
  ],

  subjectsIntro:
    "A boarder revising IB Chemistry after Chhath and a Class 9 child adding Cambridge Physics to a CBSE routine need different help, so the first question is always subject, level and the date of the next exam.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof for engineering aspirants. Students from Hindi-medium schooling compute well but need guided practice in writing a full argument." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, a good match for business, economics and applied science." },
    { name: "IB Physics", levels: "HL / SL", description: "Electricity, thermal physics and fields are rich ground in a district full of power stations, and tutoring turns that familiarity into exam answers." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, redox and equilibrium, with the industrial processes of smelting and power generation as handy case material." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, ecology and human physiology. The Kaimur forests and the Rihand reservoir give investigation topics." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Air quality, coal ash, mine reclamation and reservoir ecology provide unusually local case studies." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design cycles, materials and sustainability, a natural choice for the children of engineers." },
    { name: "IB Economics", levels: "HL / SL", description: "Energy markets, resource extraction and employment, linked to what students see around them." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations, finance and strategy, taught through case-study practice." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and the HL case study, trained by regular hands-on coding." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Analysis of non-literary and literary texts, built through timed writing and careful feedback." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, formal writing and speaking tasks for students who want Hindi as an assessed language." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource management and extraction, plus fieldwork-style investigation using the district's land use." },
  ],

  igcseSubjectsIntro:
    "No Parasi school is confirmed for Cambridge or Edexcel IGCSE, so students here are mostly hostel residents, transferred children or private candidates who want a respected qualification beside CBSE or the UP Board. Everything starts from the paper code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry and statistics at Extended depth, with marks for clear method." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry for those heading to Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Circuits, motion and thermal energy, practising the alternative-to-practical paper each week." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Reactivity, moles and organic chemistry, plus the standard qualitative tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human systems, plants and ecology, using forest and reservoir examples." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Energy, pollution and resource use in a mining and power district." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets, labour and development with data-based questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python, algorithms and data representation." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for effect and summary skills, practised under time limits." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for students who need a second language beside English." },
  ],

  regionsTitle: "Parasi and nearby places we teach online",
  regionsIntro:
    "Every lesson is held online, so these places are only context. They show which school catchment a family sits in, what the evening connection is like and how far the nearest city with a true international campus lies.",
  regions: [
    { name: "Parasi", note: "The census town itself, with a mixture of local families, employees of nearby units and small traders, served mainly by UP Board and CBSE schools." },
    { name: "Anpara", note: "A power-station township on the Rihand reservoir side, home to many families who work in shifts and move on transfer." },
    { name: "Shaktinagar", note: "An NTPC and coal-linked township close to the Madhya Pradesh border, with company housing and its own schools." },
    { name: "Obra", note: "A power and hydro town in the district, known for its thermal station and for strong ties to the industrial workforce." },
    { name: "Renukoot", note: "The aluminium town with the Hindalco complex, where many households have a long link to one employer." },
    { name: "Robertsganj", note: "The district headquarters, with the main courts, colleges and a wider choice of tuition." },
    { name: "Dudhi", note: "A forest-edge tehsil town in the south of the district, where connectivity and schooling choices are thinner." },
    { name: "Singrauli", note: "Just across the state line in Madhya Pradesh, a coalfield and power hub whose families often cross over for schools and shopping." },
    { name: "Rihand Nagar", note: "The reservoir township near the Rihand dam, associated with the hydro project and the lakeside schools." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre in Parasi or the wider Sonbhadra district, so the school strip is empty. The campuses below sit in other cities and appear only to show where physical options are. IB Gram is independent of every one of them and of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Lucknow",
      note: "The state capital, a long rail or road journey from Sonbhadra, with the nearest confirmed Cambridge and IB-linked campuses in Uttar Pradesh. Local options around Parasi are limited.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "GD Goenka Public School, Lucknow"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Well connected by long-distance trains from this part of the country, and a traditional destination for eastern families looking for a full international school.",
      schools: ["Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The usual choice for a Diploma-aged student when a family decides on a residential campus.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "A lesson in Parasi is always live video between one tutor and one student. What varies is how the sessions are paced against shift timetables and transfers.",
  modes: [
    {
      title: "Fixed weekly evening slot",
      description: "A regular evening class each week, with a second if needed, after school and before the household's own shift pattern takes over.",
      bullets: [
        "The tutor is picked for the course, not the postcode",
        "Works from PYP right through the Diploma and IGCSE",
        "Papers are marked live with the student",
        "The same person teaches all term",
      ],
    },
    {
      title: "Lessons that travel with the family",
      description: "Teaching continues with the same tutor even if a transfer moves the household to another state mid-year.",
      bullets: [
        "No change of teacher across a posting",
        "The tutor keeps the running notes and the paper log",
        "Lesson times are adjusted to the new city's school hours",
        "Helpful for children who have moved schools before",
      ],
    },
    {
      title: "Dussehra to Chhath revision weeks",
      description: "Daily sessions for hostel students and private candidates during the autumn break, ahead of the November series.",
      bullets: [
        "Timed papers and fast feedback",
        "Short morning and evening sessions around family rituals",
        "Book a few weeks in advance",
        "Plans bend around trains, relatives and festival days",
      ],
    },
  ],

  sections: [
    {
      heading: "Why does a power-and-coal town ask about IB and IGCSE tutors?",
      paragraphs: [
        "At first it seems an odd pairing, but it follows from who lives here. Public-sector and industrial employment draws engineers, chemists, accountants and managers from across India, and these families have usually seen other education systems. Some have lived in Delhi, Mumbai or the Gulf before being posted to Sonbhadra.",
        "A second reason is job mobility. The next posting may be a metro or a different state, and the child must adapt to a new school each time. An international syllabus reduces the shock, because the content and exam style stay the same while the building changes.",
        "A third reason is aspiration. Some Parasi families, even without being transferred, want their children to study engineering or science abroad, and see IGCSE or IB results as a sturdy route there.",
        "We try to keep the conversation practical. If your child is happy and doing well on CBSE, an IB switch is rarely necessary. Where a move or a hostel is already planned, or the family is looking abroad, then a tutor for the target syllabus can start early.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE in the Parasi area",
        columns: ["Household type", "Typical aim", "How tutoring helps"],
        rows: [
          ["Plant and mine employees on rotation", "A syllabus that survives transfers", "One tutor who continues across cities"],
          ["Families with a metro or Gulf past", "Return to a familiar syllabus", "Bridge lessons while a school is chosen"],
          ["Hostel students home for breaks", "Carry on learning at home", "Holiday blocks with timed papers"],
          ["UP Board or CBSE families aiming abroad", "A recognised qualification for overseas study", "IGCSE or IB preparation in chosen subjects"],
        ],
      },
    },
    {
      heading: "Is it harder to shift from UP Board or CBSE into IGCSE or the IB Diploma?",
      paragraphs: [
        "Most students find IGCSE, entered in Class 9, the gentler of the two. The UP Board stresses learning chapters and reproducing them, and CBSE leans on NCERT concepts and application; IGCSE maintains a clear syllabus but pays marks for working out and explanation. The Diploma goes further, because it asks for independent research, long essays and a language alongside the sciences.",
        "Written English is where most Hindi-medium students need time. They often understand science well but have written little of it in English, and exam words such as outline, compare and justify have precise meanings that must be learned. Expect two or three terms of regular written practice.",
        "Students from this belt also bring useful strengths. Arithmetic accuracy is often high, and they are used to long hours of study. A tutor builds on this instead of replacing it.",
        "The table shows how the four routes differ.",
      ],
      table: {
        caption: "UP Board, CBSE, IGCSE and IB Diploma for a Parasi student",
        columns: ["Feature", "UP Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Main skill tested", "Recall of chapters", "Concepts and application", "Content with structured explanation", "Research, reasoning and reflection"],
          ["Usual medium", "Hindi or English", "English or Hindi", "English", "English"],
          ["Entrance tests in India", "JEE, NEET, CUET directly", "JEE, NEET, CUET directly", "Via AIU equivalence and separate preparation", "Via AIU equivalence and separate preparation"],
          ["Assessment", "Annual board papers", "Board papers", "Final papers and some coursework", "Papers, IA, Extended Essay, TOK"],
        ],
      },
    },
    {
      heading: "What goes into the price of IB or IGCSE tutoring for a Parasi household?",
      paragraphs: [
        "A price list does not appear on this page. We agree the rate with you in writing first, and the first lesson is free. Four factors move the figure: the subject, the level, how long each lesson lasts and how much teaching and marking experience the tutor has.",
        "A Higher Level Diploma science costs more than primary-year reading help, because it needs heavier preparation and fewer tutors have taught it recently. A person who has marked IB papers or run Cambridge Extended classes will price above a new graduate. Several lessons a week can change the arrangement.",
        "The comparison most Parasi families should make is with the alternative of moving a child to a hostel in Lucknow or Delhi for tuition. That adds rent, food and travel, and removes a young person from home. A weekly online session is far lighter on the household budget.",
        "For a figure, WhatsApp us the board or programme, subject, level and number of lessons per week and we will reply with a clear amount in writing.",
      ],
    },
    {
      heading: "Online tutor, coaching class, school teacher or self-study: how do they compare in Parasi?",
      paragraphs: [
        "Robertsganj, Renukoot and the larger industrial towns have coaching classes, mostly for UP Board, JEE and NEET. None we know of teaches IB Analysis and Approaches or the Cambridge 0580 Extended syllabus, and a parent should ask any centre directly.",
        "School teachers in the area may be excellent but are rarely familiar with IB assessment criteria or Cambridge mark schemes. Studying alone from past papers can work for a very self-directed teenager, though without a marker the written answers never improve.",
        "An online one-to-one tutor fills that gap with a specialist in the exact course, free at a time that fits shift patterns, and attending to one child. What it asks in return is a stable connection and a quiet corner.",
        "The table compares the four.",
      ],
      table: {
        caption: "Ways to prepare for an international syllabus from Parasi",
        columns: ["Option", "Match to the syllabus", "Schedule", "Watch out for"],
        rows: [
          ["Online one-to-one tutor", "Specialist in the exact IB or IGCSE course", "Agreed with the household", "Needs dependable internet and power"],
          ["Coaching class in a district town", "UP Board, JEE and NEET", "Fixed batches", "No IB or Cambridge teaching that we could confirm"],
          ["School or private teacher", "General subjects", "Flexible", "May not know IB or IGCSE mark schemes"],
          ["Self-study with past papers", "Depends on the student", "Anytime", "No marking of written answers"],
        ],
      },
    },
    {
      heading: "How do heat, coal dust and the festival season affect the exam year here?",
      paragraphs: [
        "The IB Diploma is examined in May and November. Cambridge IGCSE runs in February-March, May-June and October-November, and Pearson Edexcel offers January, May-June and October-November. Private candidates must settle an exam centre and an entry deadline well ahead, so a first message half a year before the session is not too early.",
        "Climate shapes the year in Sonbhadra. May and June are extremely hot, with the loo blowing, and power demand across the energy belt is high. Monsoon arrives in July and runs to September, and the Rihand reservoir is watched closely for water levels. Winter mornings are cold and often foggy, and dust from mining and ash handling lingers in dry months.",
        "The festival rhythm follows the plains. Dussehra and Diwali take up much of October and November, and Chhath brings relatives home. For hostel students that is a window of study time at home as well as a source of distraction.",
        "The table below lays out a sensible pace.",
      ],
      table: {
        caption: "A study year in Parasi",
        columns: ["Months", "Weather and local life", "Study advice"],
        rows: [
          ["December to February", "Cold, foggy mornings; Cambridge February-March series approaching", "Evening lessons only; keep a timed paper in every week"],
          ["March to May", "Heat building, IB May exams, school boards", "Early-morning or late-evening slots; intensive revision weeks"],
          ["June to September", "Peak heat, then monsoon; schools reopen", "Hold a spare weekly slot for power or connection trouble"],
          ["October to November", "Dussehra, Diwali, Chhath; IB November and Cambridge or Edexcel autumn series", "Holiday revision blocks for hostel students; lighter loads on festival days"],
        ],
      },
    },
    {
      heading: "Where do students from Parasi go after IB or IGCSE?",
      paragraphs: [
        "Many in this belt head for engineering, and the usual Indian routes are Banaras Hindu University and IIT BHU in Varanasi, Motilal Nehru National Institute in Prayagraj, and campuses in Lucknow, Ranchi and Kolkata. Indian universities generally ask IB and Cambridge students for an equivalence certificate from the Association of Indian Universities, so it is wise to apply early.",
        "IB and IGCSE students may sit JEE Main, NEET-UG and CUET-UG when eligibility rules are met. Those tests follow Indian syllabuses, so a student aiming at an IIT or an NIT needs separate preparation alongside the international programme.",
        "Overseas options include the UK, Canada, Australia, the US and the Gulf. Predicted IB grades and final IGCSE or Diploma results support these applications, and English-medium essay practice from an early age helps considerably.",
        "Some families also plan a return: study an engineering or management degree abroad and come back to a career in energy, mining or a public-sector body.",
      ],
      bullets: [
        "Apply for AIU equivalence early for Indian universities",
        "JEE, NEET and CUET need their own preparation on the Indian syllabus",
        "Overseas applications use predicted IB grades or IGCSE results",
        "Confirm visa and funding deadlines a year ahead",
      ],
    },
    {
      heading: "Which IB Maths, Physics and Chemistry combination should an engineer's child take?",
      paragraphs: [
        "Analysis and Approaches suits the student who enjoys algebra, calculus and proof, and who may read engineering or physical science. Applications and Interpretation leans on data and modelling, and is a better fit for economics, business or life science. Each is offered at Standard and Higher Level.",
        "A prospective engineer usually takes Physics HL and Maths AA HL, adding Chemistry or Computer Science. A student unsure of the path may keep options open with a mix like Chemistry HL, Physics, Maths AI and Economics.",
        "Design Technology and Environmental Systems and Societies offer natural links to the industrial context of the district, and the Extended Essay can draw on a local theme.",
        "Whichever mix is chosen, tutoring works from past papers: a timed question ends each lesson, and the next one opens by marking it.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how should a Parasi family decide?",
      paragraphs: [
        "In Mathematics, the sciences and some other subjects Cambridge sets a Core tier with a lower grade ceiling and an Extended tier that reaches the top. A student who might join A Level or the IB Diploma should choose Extended. Core is reasonable for those wanting a solid grounding with less pressure.",
        "A standard package has six or seven subjects: English, Maths, two sciences, a language and one or two electives. Cambridge and Pearson Edexcel structure their papers and coursework differently, so the board has to be fixed before tutoring starts.",
        "Private candidates should check which exam centres in the region accept outside entries, since many do not. We help families read the requirements but cannot enter the student on your behalf.",
        "The free first lesson doubles as a diagnostic, and it usually settles the choice of tier.",
      ],
    },
  ],

  process: [
    { title: "Tell us the basics", description: "Programme or board, subject, present marks and which evenings suit a household with shift workers." },
    { title: "Look at a proposed tutor", description: "We name one or two teachers with a short summary of the courses they have taught." },
    { title: "Join a free lesson", description: "Your child works through a live class on a real topic, no fee and no obligation." },
    { title: "Approve the first month", description: "The tutor outlines topics and papers for four weeks, and you agree or adjust." },
    { title: "Continue each week", description: "A fixed slot, a brief note after each class, and a change of tutor on request." },
  ],

  whyPoints: [
    { title: "Selected by course", description: "The IB subject and level or the Cambridge or Edexcel code is what we match on." },
    { title: "Made for a mobile workforce", description: "A tutor can follow a family from one posting to the next with no break in lessons." },
    { title: "Experience it first", description: "The free lesson lets your child judge the teaching before money is discussed." },
    { title: "Assessed work stays with the student", description: "Tutors clarify criteria and comment on drafts but never write IAs, Extended Essays or TOK essays." },
    { title: "Clear records", description: "Short written notes after each class help parents on shift follow progress." },
    { title: "Easy exit", description: "Rates are written down first, nothing locks you in and a new tutor is one message away." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Parasi?", answer: "Send us the programme, subject, level and exam session and we will find a tutor who has taught that syllabus and who teaches online. No school around Parasi offers the IB that we could verify, so we search across India. You receive a shortlist, a free trial and a written plan, with lessons timed to your family's routine." },
    { question: "Does a tutor come home to Parasi?", answer: "No. Tutors do not visit homes in Parasi or elsewhere in Sonbhadra, because in-person tuition runs only in Gurugram and parts of Delhi NCR. Here your child takes a private lesson online from home on a laptop or tablet, and the tutor devotes the whole hour to that one student." },
    { question: "Can Parasi students take IGCSE tuition?", answer: "Yes, for Cambridge and Pearson Edexcel IGCSE, online. We match tutors on paper code and tier, for instance 0580 Extended Mathematics or 0625 Physics. Students may be at a hostel, between postings or sitting papers privately. The first lesson is a diagnostic so the plan starts from the real level." },
    { question: "What will IB or IGCSE tuition cost?", answer: "Rates depend on subject, level, lesson length and tutor experience, and we confirm them in writing before the trial. We publish no price list. Higher Level Diploma courses usually cost more than primary support. Studying from home online also saves the hostel and travel costs that tuition in Lucknow or Delhi would involve." },
    { question: "Is there an IB or IGCSE school in or near Parasi?", answer: "We could not confirm one in Parasi or elsewhere in Sonbhadra. Local schools follow the UP Board or CBSE. The closest confirmed Cambridge and IB-linked campuses we can name are in Lucknow, Kolkata and Delhi NCR. If a nearby school has been newly authorised, tell us and we will check its official listing." },
    { question: "Our family may be transferred. Can lessons continue?", answer: "Yes, that is one of the strengths of online teaching. The same tutor can carry on when you move to another city or state, keeping the running notes and the record of papers done. We only adjust the timing to the new school's hours, and the syllabus stays exactly the same." },
    { question: "Can we try one lesson before committing?", answer: "Yes. The first lesson is free and covers a real topic from your child's course. The tutor then proposes a plan for the month and you decide whether to carry on. If the fit is wrong, we find another tutor, and the rate has been put in writing so nothing is left unclear." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No. Tutors never write an Internal Assessment, Extended Essay, TOK essay or coursework. They can explain the criteria, help narrow a research question, talk through method and comment on drafts the student has written. The work remains the student's own, protecting the result and the student's integrity." },
    { question: "Which IB Diploma subjects can you teach?", answer: "Maths AA and AI at both levels, Physics, Chemistry, Biology, Environmental Systems and Societies, Design Technology, Economics, Business Management, Computer Science, Geography, English A and Hindi B are the common ones. If you need something else, ask, and we will say honestly whether a suitable tutor is available." },
    { question: "Do you work with MYP and PYP students?", answer: "Yes. For MYP we help with criteria-based tasks in Sciences, Maths and Language and with the Personal Project journal. For PYP we build reading, writing and number confidence alongside unit work. Younger children do best with short sessions and a parent close by in the early weeks." },
    { question: "Is online learning workable with the power and network here?", answer: "For an international syllabus it is the practical route, since no local specialist exists. Shared whiteboards, papers marked live and written notes give a child much of what a classroom provides. You need a dependable connection, and we suggest a phone hotspot and a charged device for evenings when the electricity fails." },
    { question: "What happens if a power cut or heatwave stops a lesson?", answer: "Tell us as soon as you can and the tutor will usually move the class by a day. In the hottest weeks of May and June we suggest early-morning or late-evening slots, and we advise keeping one spare weekly slot during the monsoon. A recording can be shared if the tutor agrees." },
    { question: "How are the tutors selected?", answer: "We check qualifications, recent teaching of the specific subject and level, and how the person handles mark schemes and criteria. A short demonstration lesson comes first. The free trial is the real test, because your child experiences the teaching directly, and a weak match is replaced." },
    { question: "When should a Parasi student begin?", answer: "The sooner the better: Class 11 for the Diploma, Class 9 for IGCSE and Class 7 or 8 for MYP. That leaves room to repair gaps before internal assessments and mock exams. A later start can still work with an intensive block, as long as the exam date is mentioned in the first message." },
    { question: "Can you teach Hindi for IB or IGCSE?", answer: "Yes. Hindi B is taught for the IB at Standard and Higher Level, and Hindi as a second language for IGCSE. Give us the level and exam series, and we will confirm that a suitable tutor has space before the trial lesson is arranged." },
    { question: "Is IB Gram linked to any school or employer?", answer: "No. IB Gram is an independent tutoring service with no tie, endorsement or payment link to the IB, Cambridge, Pearson Edexcel, any school or any employer mentioned on this page. School names appear only to help families see where campuses are, and they are checked against public sources." },
    { question: "How do we get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme, subject, level, latest grade and the hours that suit you. Your child needs a laptop or tablet with camera and microphone, and a stable connection. We normally reply within a working day with a shortlist and trial times." },
  ],

  tutorsIntro:
    "The tutors below teach live from various cities. Everyone works to Indian Standard Time, which is Parasi's time, so an evening lesson starts as school ends with no time-zone arithmetic.",

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the online service reaches towns and cities all over the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes in person." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and sessions in plain language." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Levels, internal assessment, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and e-assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI, and how to choose." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to arrange the free trial." },
    { label: "IB and IGCSE tutoring in Singrauli", href: "/singrauli/", description: "The neighbouring coal and power hub across the state line." },
    { label: "IB and IGCSE tutoring in Renukoot", href: "/renukoot/", description: "The industrial town nearby in Sonbhadra." },
    { label: "IB and IGCSE tutoring in Varanasi", href: "/varanasi/", description: "The nearest major city for universities and schools." },
  ],

  closingHeading: "Book a free lesson for your child in Parasi",
  closingBody:
    "Share the subject, the level and the exam date, and we will look for a tutor who has taught the course. The trial costs nothing, the rate is written down before you decide, and your child can learn from a specialist without leaving Parasi.",
};
