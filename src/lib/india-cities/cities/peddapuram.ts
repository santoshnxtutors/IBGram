import type { CitySeoPage } from "../types";

/**
 * /peddapuram/ - IB and IGCSE tutoring page for Peddapuram, Kakinada district, Andhra Pradesh. Online only.
 * No IB or Cambridge/Edexcel school is confirmed in Peddapuram, so stripSchools is empty and the clusters
 * reuse Rajahmundry and Visakhapatnam options from existing pages, clearly labelled as nearby.
 */
export const peddapuram: CitySeoPage = {
  slug: "peddapuram",
  countryName: "Peddapuram",
  countryNameLong: "Peddapuram, Kakinada district, Andhra Pradesh",
  demonym: "Peddapuram",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots planned around the Sankranti week, Dasara, Vinayaka Chavithi, cyclone-season warnings and humid summer afternoons",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.0781, longitude: 82.1372 },
  wikipedia: "https://en.wikipedia.org/wiki/Peddapuram",
  alternateNames: ["Peddapur", "Peddapuram Kakinada", "Peddapuram East Godavari"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Peddapuram | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Peddapuram, Kakinada district: one-to-one home tuition in Maths and Science, planned around Sankranti. Free trial lesson.",
  h1: "Online IB and IGCSE Tuition at Home for Peddapuram Students",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR PEDDAPURAM, TAUGHT ONLINE",
  heroSubtitle:
    "Searching for IB or IGCSE home tuition in Peddapuram? Nobody from our side knocks on doors here, because house calls exist only in Gurugram and parts of Delhi NCR. Instead the teaching arrives over video: your child keeps the usual table and chair, and a tutor who has already worked through that exact specification goes through it question by question. No bus to Kakinada is needed.",
  primaryKeyword: "IB and IGCSE tutors in Peddapuram",
  imageAltText: "A Peddapuram student in coastal Andhra revising IB Biology on a laptop at home with an online tutor on screen",
  secondaryKeywords: [
    "IB tutor Peddapuram",
    "IGCSE tutor Peddapuram",
    "IB home tuition Peddapuram",
    "IGCSE home tuition Peddapuram",
    "IB private tuition Peddapuram",
    "IB Maths tutor Peddapuram",
    "IGCSE Maths tutor Peddapuram",
    "IB Physics tutor Peddapuram",
    "IB Chemistry tutor Peddapuram",
    "IB Biology tutor Peddapuram",
    "IB DP tutor Peddapuram",
    "IB MYP tutor Peddapuram",
    "IB PYP tutor Peddapuram",
    "IGCSE online tuition Peddapuram",
    "IB tutor Kakinada district",
    "IGCSE tutor Samalkot Pithapuram",
    "online IB tuition East Godavari",
    "Cambridge IGCSE tutor Andhra Pradesh",
  ],

  heroTrustPoints: [
    "Tutors matched to your child's IB subject and level or IGCSE board and syllabus code",
    "Private video lessons that fit around Andhra state-board or CBSE timetables",
    "Free trial lesson, with the rate written down before booking",
    "No tie to the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "IST", label: "Peddapuram's own clock" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "First lesson at no charge" },
  ],

  intro: {
    heading: "A Godavari-delta town where engineering colleges are close and international schools are not",
    paragraphs: [
      "Peddapuram lies on the road between Kakinada and Rajahmundry in the coastal Andhra delta country, with paddy, coconut and sugarcane in every direction. The town has an old fort, a busy market and a strong habit of education: engineering colleges at nearby Surampalem draw students from across the region, and most families here plan carefully for a child's Intermediate and entrance-exam years. The schools are largely Telugu and English medium under the Andhra Pradesh board, with some CBSE options.",
      "Those who raise IB or Cambridge IGCSE in this town usually have a concrete trigger. A cousin has settled in Texas or Sydney, a child is already boarding in Hyderabad or Visakhapatnam, or parents want an overseas degree kept within reach. We cannot place anybody in Peddapuram and offer online lessons only, so the tutor can be a person who has taught that syllabus in any Indian city.",
      "Learners usually come from three directions. Some study in Kakinada or Rajahmundry and want extra hours on international subjects. Some attend local Telugu-medium schools and prepare for a move at Class 9 or 11. Others are in Hyderabad or Visakhapatnam boarding arrangements and come home for Sankranti and Dasara.",
      "Tutors coach and never write assessed work. IB Gram is independent of every board and school.",
    ],
    bullets: [
      "All four IB programmes and both IGCSE boards, Cambridge and Pearson Edexcel",
      "Online lessons only; no tutor visits homes in Peddapuram",
      "Telugu-medium students preparing for English-medium courses are welcome",
      "Free first lesson and a written note after each session",
    ],
  },

  programmesIntro:
    "Parents around Peddapuram mostly know the Andhra board syllabus and the Intermediate system. The summaries below explain each IB stage and what online tutoring adds for a child in East Godavari.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children pursue inquiry units on themes such as sharing the planet or how we organise ourselves, and in the last year they carry out an Exhibition project. Reading and talking matter as much as writing.",
      countryNote:
        "A Telugu-speaking primary child benefits from lively English conversation, picture books and number games before a PYP classroom elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are taught through concepts and assessed against criteria, and the Personal Project is a long independent task that draws on everything learnt during the years.",
      countryNote:
        "Students from Telugu-medium Class 8 and 9 classes usually calculate fast, but MYP asks them to explain their thinking in English, and that can be trained.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six chosen subjects at two levels, plus the Extended Essay, TOK and CAS, occupy two heavy years, and the predictions a school submits shape the offers universities make.",
      countryNote:
        "Diploma students linked to Peddapuram are likely to be in Hyderabad, Visakhapatnam or further afield, with holiday weeks at home as the natural time for intensive tutoring.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller set of Diploma courses is combined with a career-related study and a reflective project, designed for students who want a practical pathway.",
      countryNote:
        "We know of no CP school in Peddapuram or Kakinada district. Support would apply to the academic courses studied at a school elsewhere.",
    },
  ],

  subjectsIntro:
    "Engineering and medicine dominate planning in coastal Andhra, so Mathematics, Physics, Chemistry and Biology take most lesson hours. Telugu-speaking students also get steady help with English for written answers.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof, with clear layout of each step of working." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling, with technology and the exploration planned early." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields, with attention to units, graphs and unfamiliar situations." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, equilibrium, kinetics and organic routes, using the data booklet well." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with precise vocabulary in short answers." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Deltas, coasts, cyclones and farming as live case studies." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and policy evaluation, with agriculture and port trade as examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, ratio analysis and reasoned recommendations." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and structured essays, including Indian independence topics." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close analysis and comparative writing for students who think in Telugu first." },
    { name: "IB Telugu A", levels: "HL / SL", description: "Literature in the home language, where the school arranges it, with guidance on analytical essays." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for speaking, reading and writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, systems and the programming solution." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation on how knowledge is claimed and tested; the exhibition and essay stay the student's own." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Choosing a question, structuring an argument and referencing, with feedback only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Criterion-based investigation and written reasoning before the Diploma." },
  ],

  igcseSubjectsIntro:
    "The international schools in Visakhapatnam, Hyderabad and Rajahmundry that Peddapuram families consider mostly run Cambridge IGCSE at Class 9 and 10. We check the board, the tier and the syllabus code, then teach to it.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics with advice on tier." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions that bridge to IB or A Level." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, electricity and waves, plus the practical paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Stoichiometry, acids and bases, reactivity and organic basics." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology with data questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences under one qualification." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic and programming." },
    { name: "IGCSE Economics and Accounting", levels: "Grade 9-10", description: "Markets, ledgers and final accounts." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension and composition at a pace that suits a Telugu-speaking student." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading, writing and speaking in a widely taught language." },
  ],

  regionsTitle: "Peddapuram and its neighbouring towns across Kakinada district",
  regionsIntro:
    "Online lessons work the same from a town flat as from a village house among the paddy fields. The notes below describe the local rhythm we plan around.",
  regions: [
    { name: "Peddapuram town and main market", note: "Trading families and professionals near the bus stand, with steady tuition habits in the evenings." },
    { name: "Peddapuram fort area", note: "An older residential quarter with long-settled households and many retired teachers." },
    { name: "Kakinada road", note: "The busy link to Kakinada, used by students commuting for coaching and by parents working in the city." },
    { name: "Rajahmundry road", note: "The western approach, where households look to Rajahmundry for schooling and hospitals." },
    { name: "Surampalem", note: "The engineering college belt where faculty and staff families live and the campus calendar shapes the week." },
    { name: "Samalkot", note: "A neighbouring industrial and railway town where parents ask similar questions about online options." },
    { name: "Pithapuram", note: "A temple town to the east with a strong tradition of education and temple festivals." },
    { name: "Jaggampeta and Gollaprolu", note: "Smaller towns with households that prefer a local internet link to a long daily commute." },
    { name: "Villages of the Godavari delta", note: "Farming households growing paddy and coconut, where lessons are planned around harvest and cyclone warnings." },
  ],

  schoolClusters: [
    {
      city: "Peddapuram and Kakinada district",
      note: "No authorised IB or Cambridge / Edexcel IGCSE school turned up for Peddapuram itself in our checks. The schools here run the Andhra board or CBSE, which leaves international options to other cities.",
      schools: [],
    },
    {
      city: "Nearby: Rajahmundry",
      note: "The closest city with a school we have confirmed on our own Rajahmundry page, about an hour by road.",
      schools: ["Laurel High Global School"],
    },
    {
      city: "Nearby: Visakhapatnam",
      note: "The region's main cluster of international schools, a long day trip or boarding arrangement from Peddapuram.",
      schools: ["Oakridge International School, Visakhapatnam", "Oak Valley International School, Gajuwaka", "Silver Oaks International School, Rushikonda"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "A longer journey, but the destination for many Andhra families choosing a major international school or a boarding programme.",
      schools: ["CHIREC International School", "International School of Hyderabad", "Sreenidhi International School"],
    },
  ],
  schoolDisclaimer:
    "Schools from Rajahmundry, Visakhapatnam and Hyderabad are named purely as places East Godavari parents sometimes look at. IB Gram is an independent tutoring firm. It has no arrangement with any of them, nor with the IB, Cambridge or Pearson, and it has not verified an international school inside Peddapuram. Ask each school about its current curriculum, fees and intake.",

  modesIntro:
    "Everything we offer in Peddapuram is online. These three formats suit a delta town where students travel for coaching, festivals run long and the weather can close roads.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A standing hour each week with a tutor who knows the course, suited to children already at an international school and to those heading for one.",
      bullets: [
        "One specialist per subject",
        "Shared whiteboard and board-specific past papers",
        "Short written note after each class",
        "No tutor visits homes in Peddapuram",
      ],
    },
    {
      title: "Telugu-to-English bridge",
      description:
        "Students from Telugu-medium schools combine subject revision with work on reading, vocabulary and written explanation in English.",
      bullets: [
        "Bilingual glossary for each topic",
        "Reading short science passages aloud",
        "One written explanation every week",
        "Monthly review with parents",
      ],
    },
    {
      title: "Holiday and exam-season sprints",
      description:
        "During Sankranti, Dasara or summer breaks, and before mocks, sessions become more frequent, then return to a weekly rhythm.",
      bullets: [
        "Daily or alternate-day sessions",
        "Timed mocks and mark-scheme review",
        "Plan shared with parents and school",
        "Gap analysis after every mock",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools near Peddapuram, and what do families do about it?",
      paragraphs: [
        "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Peddapuram, so we name none. The town's schools follow the Andhra Pradesh board or CBSE. The nearest school we have confirmed on our own pages is in Rajahmundry, and the largest cluster of international schools in the region is in Visakhapatnam, with Hyderabad further away still.",
        "For most families, distance turns the question into one of boarding or relocation. A daily commute to Visakhapatnam is not possible, and Rajahmundry is workable only for some. Parents therefore want to be sure that a child will enjoy the IB or Cambridge classroom before committing, and a few months of online lessons is a low-risk way to find out.",
        "Another group is families with a child already in an international school far away, who want help during holidays. A third group includes families with overseas plans who want the child on a syllabus that universities abroad recognise.",
        "In each case, tutoring supports the school route and does not replace it. The free first lesson is a simple way to see how your child responds.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Peddapuram",
        "Rajahmundry is closest; Visakhapatnam and Hyderabad have more choice",
        "Online lessons test readiness before any move",
        "A tutor backs up the school route; it cannot stand in for it",
      ],
    },
    {
      heading: "IB, IGCSE, the Andhra board and CBSE: what actually differs for a student in Peddapuram?",
      paragraphs: [
        "Most Peddapuram students follow the Andhra Pradesh SSC in Class 10 and then the Intermediate board in Classes 11 and 12, commonly in Telugu or English, often in a residential junior college with intense EAMCET, JEE and NEET preparation. The system rewards speed, accuracy and a huge amount of practice, and it has produced many engineers and doctors from this region.",
        "IB and IGCSE ask for different skills. A paper might give a short passage on a new situation and ask for a reasoned explanation. A student who can solve twenty integrals a minute may not know how to structure a four-mark justification. The same knowledge earns more or fewer marks depending on how it is shown.",
        "There are also differences in pace. Andhra coaching culture front-loads content and repeats it until it is automatic. IB spreads the content, asks for application and reflection, and rewards independent work. A student used to the first can find the second slower but harder to predict.",
        "The table compares the main systems.",
      ],
      table: {
        caption: "Four syllabus families seen from East Godavari",
        columns: ["Aspect", "Andhra board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Main language of teaching", "Telugu or English", "English, with Telugu or Hindi", "English, with Telugu or Hindi as language subjects"],
          ["What the exam rewards", "Speed, accuracy and recall", "Recall and application", "Reasoning, evidence and evaluation"],
          ["Presence near Peddapuram", "Nearly every school", "A handful of schools", "None confirmed locally; nearest in Rajahmundry and Visakhapatnam"],
          ["Entrance to Indian degrees", "Direct, including EAMCET", "Direct", "Needs AIU equivalence and eligibility checks"],
          ["Recognition abroad", "Assessed case by case", "Assessed case by case", "Broadly understood by admissions offices"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Peddapuram?",
      paragraphs: [
        "A quote is assembled from the year group, the subject, how long each class runs, how many run per week and how much the tutor has taught your particular board. Someone guiding Diploma Chemistry HL through its final mock is priced on a different footing from a Class 6 MYP Mathematics tutor, which is why we avoid a public rate card that would mislead most readers.",
        "Families in delta towns are used to paying for coaching with a hostel attached, so the comparison is worth making. Online, there is no hostel, no bus to Kakinada and no loss of a whole evening to travel. The money goes to the lesson, and the child sleeps in their own bed.",
        "Once you send the class, board and subject, a written figure comes back with the tutor's profile, before any trial is booked. Decide after the trial; if it disappoints, nothing is owed. Hours can shrink, stop for a festival, or move to another tutor at no cost.",
        "A good starting pattern is one lesson a week in the hardest subject, a review after four weeks, and extra hours only before mocks.",
      ],
      bullets: [
        "Year group, subject, class length, weekly count and tutor background decide the figure",
        "No hostel, bus fare or lost evenings",
        "Written rate before the free trial",
        "Pause, reduce or change tutor without penalty",
      ],
    },
    {
      heading: "Should a Peddapuram student choose an online tutor, a coaching institute or a local teacher?",
      paragraphs: [
        "Coastal Andhra has a famous coaching culture, and for EAMCET, JEE and NEET the institutes in Kakinada and Rajahmundry are a rational choice for many families. Their strength is high-volume practice on a state or national syllabus. The match with IB or IGCSE is much weaker, because the question style, the mark schemes and the assessed components are all different.",
        "An IB Gram tutor is selected for having taught your exact course. They work through the right past papers, explain how examiners award marks and leave a written note after every class. For a student whose English is still developing, the one-to-one format also offers a kinder pace than a batch of sixty.",
        "Self-study through videos helps revision but offers no correction. A video cannot see that a student writes the right answer with the wrong unit, or that an essay never reaches its conclusion.",
        "The table lays out the routes side by side.",
      ],
      table: {
        caption: "Comparing ways to study an international syllabus from Peddapuram",
        columns: ["Route", "Course knowledge", "Personal attention", "Fit for Peddapuram"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the specific syllabus", "Full, every lesson", "Needs a good home connection; no travel"],
          ["Coaching institute in Kakinada or Rajahmundry", "Strong on EAMCET, JEE and NEET", "Shared with a large batch", "Travel or hostel needed; not built for IB"],
          ["Local private teacher", "Usually state board or CBSE", "Individual", "Close by, but limited on international papers"],
          ["Self-study with videos", "Varies", "None without review", "Flexible but unsupervised"],
        ],
      },
    },
    {
      heading: "How do Sankranti, cyclone season and summer heat affect the study year here?",
      paragraphs: [
        "Sankranti is the great festival of the Godavari districts. Bhogi, Sankranti and Kanuma bring a week of family gatherings, kite flying, rangoli, and visits to relatives, and few students can be kept at a desk. Weddings and temple festivals in Pithapuram and nearby towns add to it. We therefore plan heavy lessons before the festival and keep it light afterwards.",
        "Dasara and Vinayaka Chavithi bring shorter pauses. Ugadi in spring marks the new year and often falls close to school exams. Summer, from April to June, is hot and humid, with power cuts that can coincide with afternoon study time, so we prefer early morning or evening sessions.",
        "The Bay of Bengal also has a say. October and November bring cyclone warnings and heavy rain along the coast, and Kakinada has seen serious storms in recent decades. When a warning is issued, we postpone sessions, and the tutor sends notes so no ground is lost. The best window for long study blocks is December to February.",
        "The table lines up the local year with international exam dates.",
      ],
      table: {
        caption: "Peddapuram's festival and weather calendar against IB and IGCSE dates",
        columns: ["Months", "Local conditions", "Academic point"],
        rows: [
          ["January to March", "Sankranti week, pleasant weather, Ugadi approaches", "Mocks; Cambridge February-March series; IB final preparation"],
          ["April to June", "Hot and humid, power cuts, wedding season", "IB May papers; Cambridge and Edexcel summer series"],
          ["July to September", "Monsoon showers, school restarts, Vinayaka Chavithi", "IB results released in July; Class 9 and Class 11 start"],
          ["October to December", "Dasara, cyclone-season warnings, cooler weather", "IB November papers; Cambridge and Edexcel autumn series"],
        ],
      },
    },
    {
      heading: "What can a Peddapuram student do after IB or IGCSE?",
      paragraphs: [
        "After the IB Diploma, or IGCSE and then A Levels, a Peddapuram graduate of school can aim at Indian universities through AIU equivalence and CUET-UG, or at degrees overseas. Medical and engineering aims pass through NEET and JEE, each with published rules for international boards, and some state entrance tests add conditions of their own.",
        "Nearby there is no shortage of institutions that local families know well. JNTU Kakinada, the engineering colleges at Surampalem, Andhra University in Visakhapatnam and the IITs and NITs of the south are familiar targets. Conditions for international-board applicants vary by institution and change by year, so always check the current notice.",
        "Andhra Pradesh families have an exceptionally strong tradition of sending children abroad, particularly to the United States for computer science and engineering, and to Australia, Canada and the United Kingdom. The IB Diploma and strong IGCSE and A Level grades are readily understood by those admissions offices.",
        "Tutors here sharpen subject command and exam craft. University shortlists, applications and personal statements remain work for the student and parents.",
      ],
      bullets: [
        "Equivalence through the AIU, then CUET-UG for central universities",
        "NEET and JEE rules for international boards must be checked each year",
        "JNTU Kakinada, Andhra University and southern IITs are familiar options",
        "Study in the United States, Australia, Canada and the UK is widespread",
      ],
    },
    {
      heading: "What do IB Mathematics and the sciences demand, and where do delta-country students lose marks?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches and Applications and Interpretation. The first, heavy on algebra, calculus and proof, suits students aiming at engineering, physics or economics, while the second leans on statistics and modelling and suits business, computing or social science. Andhra students usually arrive with formidable calculation speed, but less experience writing a sentence of justification beside each step or using a graphic display calculator.",
        "IB Physics, Chemistry and Biology each combine a content core with options and an Internal Assessment investigation. Physics often sets the problem in an unfamiliar situation. Chemistry expects exact language and a clean layout of calculations. Biology expects precise terms, and students taught in Telugu may understand the idea but use an English word that misses the mark.",
        "We build a glossary as lessons go, show model answers for full marks, and practise command terms such as state, describe, explain and evaluate in timed conditions. The aim is accuracy under time pressure, which students from a coaching culture already value.",
        "For Internal Assessments, a tutor can discuss a research question, variables and data handling and give comments on clarity. The work is the student's own.",
      ],
      bullets: [
        "Pick AA or AI Mathematics from the degree you want",
        "Build a bilingual glossary of science terms",
        "Drill command terms against the clock",
        "Receive comments on an IA draft, never a ghost-written one",
      ],
    },
    {
      heading: "How should a family choose IGCSE tiers and subjects?",
      paragraphs: [
        "Most Cambridge IGCSE papers come in two tiers. The Core tier teaches the essentials and stops short of the top grades; Extended teaches everything and can reach A*. Anyone heading towards IB Mathematics, A Level sciences or an engineering degree should usually be entered for Extended.",
        "A usual line-up is English, Mathematics, two or three sciences, a language and a couple of electives. Hindi tends to be the language of choice here, with Telugu offered by some schools. Computer Science, Economics and Accounting attract many students.",
        "Reading ability leaks into every paper. Children who read widely tend to write sharper science and humanities answers, which is why a few pages a day and one written paragraph a week are worthwhile even outside exam months.",
        "Pearson Edexcel papers are laid out a little differently from Cambridge ones, so we confirm the board and code before we start.",
      ],
    },
  ],

  process: [
    { title: "Send a WhatsApp message", description: "Give the class, board, subject and any Visakhapatnam or Hyderabad school you are considering." },
    { title: "Get a tutor and a rate", description: "A tutor profile arrives with a written rate, chosen for experience with your exact course." },
    { title: "Take a free lesson", description: "Meet online and test the connection without paying." },
    { title: "Choose a weekly slot", description: "Pick a time that avoids school, tuition and festival weeks." },
    { title: "Review each month", description: "Read the notes, adjust hours and change tutor if needed." },
  ],

  whyPoints: [
    { title: "Course-matched tutors", description: "We choose by syllabus code and level, not just subject heading." },
    { title: "English for Telugu speakers", description: "Tutors build vocabulary and written reasoning patiently." },
    { title: "No trips to Kakinada", description: "The specialist arrives on screen, and travel hours go back to study." },
    { title: "Notes for parents", description: "A short summary after each class shows what was covered and what is next." },
    { title: "Weather and festival aware", description: "Sankranti, Dasara and cyclone warnings are planned for." },
    { title: "Honest limits", description: "We teach and give feedback; assessed pieces are never written for students and no grade is promised." },
  ],

  tutorsIntro:
    "Our tutors are spread across Indian cities and teach on IST, matching Peddapuram's own clock. Selection depends on the specific courses each has delivered.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Peddapuram?",
      answer:
        "None that we could verify. Peddapuram's schools run the Andhra Pradesh board or CBSE, and our checks of IB and Cambridge listings showed nothing in the town. Rajahmundry and Visakhapatnam are the nearest places with options, and Hyderabad has still more. Online lessons help a child get ready for that step or hold an international course together while at home. Confirm any school's status with the school.",
    },
    {
      question: "Will a tutor visit our home in Peddapuram?",
      answer:
        "No, tutors never turn up at Peddapuram houses; in-person teaching exists only in Gurugram and parts of Delhi NCR. You get a live, private online lesson at your own desk instead, with a teacher based elsewhere in India. The routine and privacy of home tuition stay, and so does access to a specialist who does not live in East Godavari.",
    },
    {
      question: "Can a Telugu-medium student prepare for IB or IGCSE from Peddapuram?",
      answer:
        "As preparation, yes; formal IB enrolment needs an authorised school. Several months of online work will strengthen English reading, written argument and technical vocabulary. Plenty of families begin in Class 7 or 8 so that arriving at an English-medium international school in Class 9 or 11 is a smaller jolt.",
    },
    {
      question: "What does online IB or IGCSE tuition cost for a Peddapuram family?",
      answer:
        "Each family gets an individual quote; none is published. The programme, level, subject, class length, weekly count and tutor experience all feed in. Nothing is charged for travel as the lessons are online. The written rate precedes the free trial, and you may cut back, pause or switch tutor afterwards without penalty.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "They coach; they do not author. Help is available in choosing a question, sketching a method, reading data and tightening structure. Each sentence of the assessed piece belongs to the student, and IB Gram declines any request to produce coursework, since that would end the arrangement.",
    },
    {
      question: "Can a tutor explain in Telugu?",
      answer:
        "It depends on the tutor, but papers are set in English so most teaching is too. Where a tutor speaks Hindi, a hard idea can be unpacked there first and the English vocabulary added next. IB Telugu A exists as a subject where a school arranges it.",
    },
    {
      question: "Which exam sessions apply, and how early should revision start?",
      answer:
        "The IB Diploma is examined in May and November. Cambridge IGCSE uses February-March, May-June and October-November windows, and Pearson Edexcel uses January, May-June and November. Start going through content around six months ahead, and switch to timed papers for the final two months. Your child's school or centre will confirm exact dates.",
    },
    {
      question: "What happens to lessons during a cyclone warning or power cut?",
      answer:
        "Lessons are postponed. If a cyclone warning or severe storm is forecast, the session moves and the tutor sends notes so nothing is lost. For everyday summer outages, keep the laptop charged and a phone hotspot nearby. Any lesson missed is rebooked that week free of charge.",
    },
    {
      question: "Can my child take lessons during Sankranti week?",
      answer:
        "Usually a light one. Sankranti is a family festival in the Godavari districts, so we plan heavy work before it and keep the week itself to a short revision hour or nothing at all. Regular lessons resume after Kanuma. Tell the tutor your family's plans in advance and the timetable will follow.",
    },
    {
      question: "Should my child take Core or Extended IGCSE?",
      answer:
        "Extended suits most children who want choices to stay open. Core has a lower ceiling and fewer topics; Extended covers the lot and permits A*. After a diagnostic lesson the tutor can name the tier that fits the present level and the intended IB, A Level or degree route.",
    },
    {
      question: "Can lessons continue if we move to Visakhapatnam or Hyderabad?",
      answer:
        "Yes. Because lessons run online, the tutor, the weekly slot and the notes come along. A school on another board means the tutor reshapes the plan within a session or two, and a new match is available whenever the fit changes.",
    },
    {
      question: "Can you teach both IB Mathematics courses?",
      answer:
        "Yes, at both levels. Analysis and Approaches fits those aiming for engineering, physics or pure mathematics; Applications and Interpretation fits business, computing or social science plans. Which one runs is the school's call. A trial on a typical question usually shows which feels more natural.",
    },
    {
      question: "My child is fast at calculation but loses marks on written answers. What helps?",
      answer:
        "Structured writing practice. The tutor teaches the command words, shows how a full-mark answer is laid out, and has the student explain each step aloud and in writing. Short weekly exercises over two or three months usually lift marks, because the knowledge is already there and only the presentation needs work.",
    },
    {
      question: "What is the first step, and does the trial really cost nothing?",
      answer:
        "It costs nothing. Send the class, board and subject to +91 7439 368 115 on WhatsApp or support@ibgram.com, and you will get a tutor profile and a written rate, then a trial at an hour that suits you. If the tutor is a poor fit, another is offered.",
    },
    {
      question: "Does IB Gram have any connection with schools or exam boards?",
      answer:
        "None. IB Gram works independently and carries no affiliation or endorsement from the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here. Names appear only to show where Andhra families sometimes look, and fees, curriculum and admissions should always be checked with the school.",
    },
    {
      question: "Do you teach students in Samalkot, Pithapuram and Kakinada too?",
      answer:
        "Yes. Since lessons are online, one set of tutors serves the whole of Kakinada district and beyond. Only local logistics change: school hours, travel times and electricity. Name your town in the first message and the timetable adapts, with the same free trial for everyone.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Our page for families across all Indian states." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from Primary Years to Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "Handling six subjects and the core." },
    { label: "IB Middle Years Programme tuition", href: "/programmes/myp/", description: "Criteria, concepts and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles and syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Kakinada", href: "/kakinada/", description: "The district headquarters, also taught online." },
    { label: "IB and IGCSE tutors in Samalkot", href: "/samalkot/", description: "A neighbouring town with a similar school picture." },
    { label: "IB and IGCSE tutors in Rajahmundry", href: "/rajahmundry/", description: "The nearest city with a confirmed international school." },
    { label: "IB and IGCSE tutors in Visakhapatnam", href: "/visakhapatnam/", description: "The region's main hub for international schools." },
  ],

  closingHeading: "Book a free online lesson from home in Peddapuram",
  closingBody:
    "Share the class, the board and the paper your child dreads. We will pair you with a tutor who has taught precisely that course, put the rate in writing and fix a trial around your family's week. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
