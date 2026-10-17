import type { CitySeoPage } from "../types";

/**
 * /upleta/ - IB and IGCSE tutoring page for Upleta, Rajkot district, Gujarat. Online only.
 * No IB or Cambridge/Edexcel school in Upleta is confirmed, so stripSchools is empty and the
 * clusters are honestly labelled nearby options reused from the Rajkot and Ahmedabad pages.
 */
export const upleta: CitySeoPage = {
  slug: "upleta",
  countryName: "Upleta",
  countryNameLong: "Upleta, Rajkot district, Gujarat",
  demonym: "Upleta",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons set around Navratri garba nights, the Uttarayan kite fortnight, groundnut season and monsoon river levels on the Bhadar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.7427, longitude: 70.2802 },
  wikipedia: "https://en.wikipedia.org/wiki/Upleta",
  alternateNames: ["Upaleta", "Upleta Rajkot", "Upleta Saurashtra"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Upleta | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Upleta, Saurashtra: live one-to-one online lessons in Maths, Science and English for Gujarati families. Free first lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Upleta, Gujarat",
  heroEyebrow: "IB & IGCSE TUITION FOR UPLETA AND SAURASHTRA, ONLINE",
  heroSubtitle:
    "For home tuition in an IB or Cambridge IGCSE subject, Upleta families have a simple option: a private online lesson at home, one to one, with a tutor who has taught that syllabus before. Upleta is a trading and farming town in the Rajkot district of Saurashtra, roughly 70 km from Rajkot, and the nearest authorised international school is some distance off. Lessons on a laptop close that distance in an evening.",
  primaryKeyword: "IB and IGCSE tutors in Upleta",
  imageAltText: "A Gujarati student in Upleta solving an IB Mathematics problem at home while a tutor guides by video",
  secondaryKeywords: [
    "IB tutor Upleta",
    "IGCSE tutor Upleta",
    "IB home tuition Upleta",
    "IGCSE home tuition Upleta",
    "IB private tuition Upleta",
    "IB Maths tutor Upleta",
    "IGCSE Maths tutor Upleta",
    "IB Physics tutor Upleta",
    "IB Chemistry tutor Upleta",
    "IB Biology tutor Upleta",
    "IB DP tutor Upleta",
    "IB MYP tutor Upleta",
    "IB PYP tutor Upleta",
    "IGCSE online tuition Upleta",
    "online IB tutor Saurashtra",
    "IB tutor near Dhoraji Jetpur",
    "Cambridge IGCSE tutor Rajkot district",
    "Gujarati medium to IB tuition",
    "IB tutor Rajkot Upleta",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB course and level or IGCSE syllabus code",
    "Live one-to-one lessons at home, scheduled after the shop and school day",
    "A free trial before any fee is agreed",
    "An independent service, unconnected to any board, examiner or school",
  ],
  heroStats: [
    { value: "IST", label: "Lessons in your time zone" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards covered" },
    { value: "Free trial", label: "First lesson without a fee" },
  ],

  intro: {
    heading: "Saurashtra families think globally, and Upleta's students deserve a teacher who can keep up",
    paragraphs: [
      "Upleta stands on the banks of the Bhadar river in the Rajkot district, a town known for groundnut and cotton trade, oil milling and a community of traders and farmers that has long sent relatives abroad. Many Saurashtra households have cousins in the United Kingdom, East Africa, the Gulf or North America, and that connection is one reason questions about IB and Cambridge IGCSE come up here more often than the town's size would suggest.",
      "Teaching arrives in a simple form. Your child studies at home in Upleta with a laptop, while a tutor based elsewhere in India takes a live one-to-one lesson. Tutors do not travel to Upleta; in-person home visits run only in Gurugram and parts of Delhi NCR. What families get is a private, focused lesson with someone who has taught IB Chemistry or IGCSE Mathematics, not a general subject teacher.",
      "Most of our enquiries from towns like this are of three kinds. A student in a Gujarati-medium or CBSE school is planning to move to Rajkot, Ahmedabad or Vadodara for an international course. A child already in an international school has come home for vacation and wants to stay sharp. Or a family expects to relocate abroad and wants the child to practise with a syllabus that travels.",
      "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school. Tutors explain, coach and give feedback, and they never write a student's Internal Assessment, Extended Essay or coursework. The first lesson is free.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Live video lessons only; no tutor visits Upleta",
      "Useful for Gujarati-medium and CBSE students preparing to change course",
      "Free first lesson and a written note after every session",
    ],
  },

  programmesIntro:
    "The four IB programmes look different from a small Saurashtra town than from a metro. Here is what each means for an Upleta family and where tutoring fits.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "A PYP classroom builds learning around themes and inquiry questions, and its pupils finish with a self-directed Exhibition. A tutor for this age mostly supports spoken English, early reading and number play, gently and in short sessions.",
      countryNote:
        "An Upleta child who might join a PYP school in Rajkot or Ahmedabad benefits from hearing English outside the classroom. A weekly session at home in the evening does the job without pressure.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP units link subjects through concepts, assessment follows published criteria, and the stage ends with a Personal Project. Students have to explain and apply, not only recall.",
      countryNote:
        "Gujarati-medium learners often know their science well but have not written it in English. MYP tutoring practises that translation before entry to an international school.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, Theory of Knowledge and CAS across two years. Consistency matters because each year builds on the last.",
      countryNote:
        "Students from Upleta in a DP school elsewhere, often as boarders, use home lessons to hold difficult subjects steady during Diwali and summer breaks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP combines DP courses with a career-related course and a reflective project. Few Indian schools offer it.",
      countryNote:
        "We know of no CP school in or near Upleta. Any help would be for the DP-level subjects a student takes at a school in another city.",
    },
  ],

  subjectsIntro:
    "Gujarati families tend to value Mathematics, accountancy and business, and IB offers all three in forms that reward reasoning. We ask which course and level your child follows, then match a tutor who has taught precisely that.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof for engineers, chartered accountants of the future and economists, with practice on unfamiliar problems." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, models and finance using technology, a good match for commerce-minded students." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with clear units and data handling." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, equilibria and organic chemistry, with the data booklet as a tool." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, physiology and ecology, answered in the wording examiners expect." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram skills and real examples from groundnut, cotton and oil-seed markets." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, costing and strategy, relevant to Saurashtra's trading families." },
    { name: "IB Geography", levels: "HL / SL", description: "Coasts, rivers, resources and change, with Saurashtra water management as a familiar case." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Water, soil and sustainability, using the dry-land farming of Saurashtra as material." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and writing for students whose home language is Gujarati." },
    { name: "IB Gujarati A", levels: "HL / SL", description: "Literature in Gujarati, from Narmad and Meghani to modern writers, where the school offers it." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for speaking, reading and writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the internal programming project." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion of how knowledge is formed, leading to the exhibition and essay." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Finding a question that can be answered in the limit and planning the work. Feedback only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigations, written reasoning and strong foundations for the Diploma." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE is the board Gujarati international schools use most, with some on Edexcel. Whichever a school follows, we confirm the syllabus code and plan from that.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with advice on tier." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus and functions as a bridge to IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, electricity and waves, plus practical skills." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Moles, reactions, the periodic table and organic basics." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, human biology, genetics and ecology, with data questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences in one qualification." },
    { name: "IGCSE Accounting", levels: "Grade 9-10", description: "Ledgers, trial balances and final accounts, a natural fit for trading families." },
    { name: "IGCSE Business Studies and Economics", levels: "Grade 9-10", description: "Concepts, calculations and short essays." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Logic, algorithms and pseudocode." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Comprehension, directed writing and speaking for Gujarati-speaking students." },
    { name: "IGCSE Gujarati and Hindi as second languages", levels: "Grade 9-10", description: "Reading and writing in a home language, where the school offers it." },
  ],

  regionsTitle: "Upleta and nearby places we teach online",
  regionsIntro:
    "A live lesson treats an Upleta bazaar family and a farming family on the Bhadar plain alike. The notes below describe local realities that shape lesson times, from shop hours to seasonal flooding.",
  regions: [
    { name: "Upleta town centre", note: "The old market area, where trading families keep shop hours that push study late into the evening." },
    { name: "Bhadar riverside neighbourhoods", note: "Settlements along the river, where monsoon water levels can affect roads and power." },
    { name: "Station Road and the railway side", note: "A busy corridor with small businesses and government staff families." },
    { name: "Oil-mill and GIDC area", note: "An industrial belt with families in milling, trading and transport, who tend to plan years ahead for children's education." },
    { name: "Gundala and surrounding villages", note: "Villages around Upleta where farming calendars decide who is free when." },
    { name: "Dhoraji", note: "A neighbouring town with a similar mix of traders and farmers, used by some families for school and coaching." },
    { name: "Jetpur", note: "The textile-printing town nearby, with families who regularly travel to Rajkot for education." },
    { name: "Bhayavadar and Kolki", note: "Smaller settlements to the west and south where online options suit households with limited local choice." },
    { name: "Patel and Lohana neighbourhoods", note: "Communities with strong overseas family links, where interest in international syllabuses is highest." },
  ],

  schoolClusters: [
    {
      city: "Upleta and its neighbourhood",
      note: "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Upleta, Dhoraji or Jetpur. Local schools follow GSEB, CBSE or ICSE.",
      schools: [],
    },
    {
      city: "Nearby: Rajkot",
      note: "The regional city for Saurashtra, about 70 km away, with limited international options. Families travelling there usually aim at its GSEB and CBSE schools and look elsewhere for IB.",
      schools: ["The Galaxy School"],
    },
    {
      city: "Nearby: Ahmedabad and Vadodara",
      note: "The main Gujarat cities with established IB and IGCSE schools, a long journey or a move for an Upleta family.",
      schools: ["Ahmedabad International School", "Mahatma Gandhi International School", "Navrachana International School"],
    },
  ],
  schoolDisclaimer:
    "These schools are named only to show where Saurashtra families sometimes look for an international curriculum. IB Gram is independent and has no connection to any of them, to the IB, Cambridge or Pearson, and we have not confirmed any IB or IGCSE school in Upleta. Please check curricula and admissions with the school directly.",

  modesIntro:
    "Every lesson for Upleta is online and live. Three patterns cover most of what local families ask for.",
  modes: [
    {
      title: "Online home tuition, every week",
      description:
        "One tutor, one student and a fixed hour at home, usually after school and before dinner. It is private tuition without any travel to Rajkot and without the limits of the local teacher pool.",
      bullets: [
        "A tutor matched to the syllabus and level",
        "Live board work and a written summary each time",
        "Slots shifted around festivals and shop rush",
        "No tutor visits homes in Upleta",
      ],
    },
    {
      title: "Transition to an international school",
      description:
        "For a student soon entering an IB or IGCSE school in another city, a few months of lessons build English writing, subject vocabulary and the reasoning style of the new course.",
      bullets: [
        "A diagnostic lesson first",
        "English for Maths and Science answers",
        "Sample questions in the target syllabus",
        "Support continuing through the first term",
      ],
    },
    {
      title: "Vacation and exam intensives",
      description:
        "Boarders at home for Diwali or summer use short, frequent lessons, and extra sessions appear before mocks and the May and November exam series.",
      bullets: [
        "Alternate-day blocks in holidays",
        "Timed papers and mark-scheme review",
        "Revision plans for parents",
        "Return to a weekly slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools can an Upleta family consider?",
      paragraphs: [
        "None inside Upleta that we can confirm. The town's schools follow the Gujarat board, CBSE or ICSE, and our look through school directories, the IB school finder and Cambridge's lists did not turn up an authorised IB or Cambridge / Edexcel IGCSE school in Upleta, Dhoraji or Jetpur. Naming one without proof would waste a family's time.",
        "Families who want an international course look to larger Gujarat cities. Rajkot, about 70 km away, has The Galaxy School on our Rajkot page, although its international offer is limited. Ahmedabad has more, including Ahmedabad International School and Mahatma Gandhi International School, and Vadodara has Navrachana International School. All three are a long journey, so the usual routes are boarding, a family move or a later switch at Class 11.",
        "The households who ask us about this are a recognisable mix. Trading families with relatives overseas like to keep options open. Doctors and engineers posted to the district want continuity. Others are farming families investing in one bright child's future in a bigger city. All of them want to know whether the child can cope with the syllabus before making a large decision.",
        "A free trial lesson answers that cheaply. It shows how your child handles an IB or Cambridge question, and what the tutor would recommend next.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Upleta or nearby towns",
        "Rajkot, Ahmedabad and Vadodara are the nearest cities with options",
        "Families include traders, posted professionals and farming households",
        "A trial lesson tests the fit before any relocation",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with GSEB and CBSE for a student in Upleta?",
      paragraphs: [
        "The Gujarat Secondary and Higher Secondary Education Board is the main board in Upleta and is taught mostly in Gujarati, with English as a subject. It produces strong results in Mathematics and Science and leads straight to state entrance pathways. CBSE, in some private schools, follows NCERT and suits national competitive exams.",
        "IB and IGCSE ask for another kind of work. The language is English, and marks reward explanation, evidence and evaluation. A student who easily solves a textbook problem may lose marks because working is not shown, or because a chemistry answer leaves out the reason. The fix is habit and is well within reach.",
        "Another difference is pace and depth. GSEB textbooks cover many topics quickly, whereas an IB course covers fewer and goes deeper into application. Students arriving from GSEB may feel the work is lighter at first and then surprisingly difficult when the questions are unfamiliar.",
        "The table puts the three side by side for an Upleta family.",
      ],
      table: {
        caption: "GSEB, CBSE and IB or IGCSE seen from Upleta",
        columns: ["Feature", "GSEB", "CBSE", "IB / IGCSE"],
        rows: [
          ["Usual teaching language", "Gujarati, with English as a subject", "English or Hindi", "English, plus a second language such as Gujarati"],
          ["Assessment style", "Textbook recall and application", "Recall and application", "Reasoning, evidence, evaluation"],
          ["Availability in Upleta", "Widespread", "A few private schools", "None confirmed; nearest in Ahmedabad or Vadodara"],
          ["Route to Indian universities", "Direct, including state entrance exams", "Direct", "AIU equivalence and eligibility checks"],
          ["Portability", "Mainly within Gujarat", "Across India", "Across authorised schools worldwide"],
        ],
      },
    },
    {
      heading: "What influences the fee for IB or IGCSE tuition in Upleta?",
      paragraphs: [
        "The rate is worked out from five things: the programme and level, the subject, how long each lesson lasts, how many lessons a week you want, and the tutor's experience with your exact syllabus. A senior IB Physics HL tutor is priced differently from a tutor helping a Class 6 student with MYP Mathematics and English. There is no standard price that suits both, so we do not publish one.",
        "Online delivery removes the cost of petrol and the time spent on the road to Rajkot, which for a family running a shop or a farm is a genuine saving. It also widens the pool of tutors, since a teacher in another city can take the lesson as easily as one next door.",
        "After a short WhatsApp chat about class, board and goal, we send a written rate. You see it before you book the free trial, and if the trial is not right, there is nothing to pay. After that, you can drop to fewer hours, pause for a wedding or Navratri, or change tutor without a charge.",
        "Many families begin with a single weekly lesson in the subject that troubles them most, check progress after a month, and add sessions only before mocks. That keeps spending tied to need.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and frequency",
        "No petrol, no travel time and a wider pool of tutors",
        "Written rate before the free trial",
        "Pause, reduce or change tutor at any time",
      ],
    },
    {
      heading: "How does an online tutor compare with Rajkot coaching, a local teacher or self-study?",
      paragraphs: [
        "Upleta has private teachers, and Rajkot, about 70 km away, has Saurashtra's best-known coaching industry for JEE, NEET and board exams. Some Upleta students travel there for Classes 11 and 12. That coaching is built for different papers, so it adds little for an IB or Cambridge student, and the journey itself eats into evenings.",
        "An IB Gram tutor has taught the exact course. Lessons use past papers of the right board, show what a mark scheme rewards, and end with a written note so that parents can follow progress. One-to-one teaching also lets the tutor slow down for a student whose English is still forming.",
        "Self-study with videos helps revision but cannot give feedback. It will not tell a student that a graph lacks labelled axes or that an essay has no clear argument.",
        "The table compares the routes.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Upleta",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "Fit for Upleta"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched to the syllabus", "Personal, every lesson", "Needs a home connection; no travel"],
          ["Local private teacher", "Seldom, mostly GSEB or CBSE", "Personal", "Easy to reach but limited for international papers"],
          ["Rajkot coaching class", "No, built for JEE, NEET and boards", "Shared in a batch", "70 km journey and fixed batch timings"],
          ["Self-study with videos", "Varies", "None unless reviewed", "Flexible but unsupported"],
        ],
      },
    },
    {
      heading: "How do Navratri, Uttarayan and the groundnut season affect study in Upleta?",
      paragraphs: [
        "Gujarat's festival calendar is lively and Upleta shares it fully. Navratri brings nine nights of garba, and students are rarely free or alert after midnight, so we avoid scheduling demanding lessons during that stretch. Uttarayan on 14 January fills the sky with kites and the days before it are equally distracting. Diwali and the Gujarati new year follow soon after the October exams.",
        "Farming and trade add their own rhythms. Groundnut is sown with the monsoon and harvested from October, and the harvest season keeps farming families busy and brings traders to the market yard. Families in these seasons prefer earlier lessons when parents are at home, and we plan accordingly.",
        "The Bhadar river matters during heavy monsoon years, because high water can cut roads and sometimes power. Summers are hot and dry, which makes late-evening lessons more comfortable than afternoon ones. The winter months are the best time for long study blocks.",
        "The table ties the calendar to the exam cycle.",
      ],
      table: {
        caption: "Upleta's festival, farming and weather calendar against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["January to March", "Uttarayan, cool weather, wheat and gram harvest", "Mocks in many schools; Cambridge February-March series"],
          ["April to June", "Heat, marriage season, school vacation", "IB May and Cambridge May-June exams"],
          ["July to September", "Monsoon, groundnut sowing, river levels rising", "New year begins; IB results in July"],
          ["October to December", "Navratri, Diwali, groundnut harvest", "IB November session; Cambridge and Edexcel autumn papers"],
        ],
      },
    },
    {
      heading: "Where can an Upleta student go after IB or IGCSE?",
      paragraphs: [
        "Finishing IGCSE and then the IB Diploma or A Levels opens Indian and overseas routes. In India, the Association of Indian Universities issues equivalence certificates for international qualifications, and CUET-UG allows students from these boards to apply to central universities. Chartered accountancy, architecture, law and medicine each have their own eligibility notes for international boards, and a family should read the official notices every year.",
        "Within Gujarat, students from Saurashtra commonly look to Saurashtra University in Rajkot, to institutions in Ahmedabad such as CEPT University and Nirma University, to IIT Gandhinagar and to The Maharaja Sayajirao University of Baroda in Vadodara. Each has its own rules for international-board applicants.",
        "Overseas study is especially familiar in this region. With relatives in the UK, East Africa and North America, many families already know the local university landscape and think seriously about it. The IB Diploma and strong IGCSE to A Level results are well recognised abroad, and a student who has practised independent work finds the transition easier.",
        "Our tutors help with grades and exam technique. They do not write applications or personal statements.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian universities",
        "Saurashtra University, CEPT, Nirma, IIT Gandhinagar and MSU Baroda are local options",
        "Professional courses have their own rules for international boards",
        "Overseas study is a familiar second route for many families",
      ],
    },
    {
      heading: "What should a student know about IB Maths, the sciences and commerce subjects?",
      paragraphs: [
        "IB Mathematics comes as Analysis and Approaches or Applications and Interpretation. The first is more algebraic and suits students headed for engineering, physics or economics. The second relies on statistics, modelling and technology, and suits commerce, design and social science. Students from GSEB are typically fast at calculation, but the IB asks them to explain every step and to use a graphic display calculator.",
        "IB Physics, Chemistry and Biology share a format of core content, options and an Internal Assessment. Physics questions often place a familiar law in an unfamiliar setting. Chemistry asks for exact terms and calculation layout. Biology rewards accurate vocabulary. Learning the English scientific phrase for an idea the student already understands in Gujarati often lifts marks quickly.",
        "Commerce-minded families can consider IB Economics and Business Management, and IGCSE Accounting. Each mixes calculation and written analysis, and past papers show the rhythm of the exam. A student used to bookkeeping at the family shop often has a head start on the numerical side.",
        "For every Internal Assessment, the tutor can discuss method, data and structure. The student does the investigation and writes the report.",
      ],
      bullets: [
        "Choose Maths AA or AI according to future study",
        "Learn English scientific vocabulary alongside concepts",
        "Use past papers to learn the style of each subject",
        "Seek feedback on Internal Assessments, never authorship",
      ],
    },
    {
      heading: "Core or Extended: which IGCSE tier suits an Upleta student?",
      paragraphs: [
        "Most Cambridge IGCSE subjects are sat at Core or Extended level. Core covers the basics and limits the top grade, while Extended covers more topics and reaches A*. Students aiming to continue with IB Mathematics, A Level science or engineering should usually take Extended.",
        "A common subject set is English, Mathematics, two or three sciences or Accounting and Economics, a second language and an elective. For Upleta students, Gujarati or Hindi as a second language is often a dependable scoring paper, while Accounting, Business Studies and Computer Science suit many trading families' interests.",
        "English as a Second Language deserves special care. Reading confidently and writing clear paragraphs raise results across every other paper. We encourage short, regular practice throughout the year and not a rush before exams.",
        "Edexcel specifications are laid out slightly differently from Cambridge, so the tutor confirms which one the school follows before choosing materials.",
      ],
    },
  ],

  process: [
    { title: "Send your details", description: "Message us on WhatsApp with the class, board, subject and any school in another city you are weighing." },
    { title: "Receive a match", description: "We propose a tutor who has taught the exact syllabus and send a written rate." },
    { title: "Book the free lesson", description: "Meet the tutor on screen and test the home connection at no cost." },
    { title: "Agree a rhythm", description: "Fix a weekly evening slot that respects shop hours, festivals and school tests." },
    { title: "Check in monthly", description: "Read the lesson notes, change the hours and switch tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "A tutor who knows the syllabus", description: "We match by course code and level, not only by subject name." },
    { title: "English made approachable", description: "Tutors rebuild exam vocabulary for students from Gujarati-medium schools." },
    { title: "No trips to Rajkot", description: "Lessons happen at home, keeping evenings free for study." },
    { title: "Clear written notes", description: "Each session ends with a short summary that parents can read." },
    { title: "Built around Gujarat's calendar", description: "Navratri, Uttarayan and harvest weeks are built into the plan." },
    { title: "Honest limits", description: "We coach and explain; we never write assessed work or promise results." },
  ],

  tutorsIntro:
    "Our tutors teach from cities across India in Indian Standard Time. Each has taught the syllabus they offer, and we assign by course and level, not by subject label alone.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Upleta?",
      answer:
        "We could not confirm one. Schools in Upleta follow GSEB, CBSE or ICSE, and our checks of the IB and Cambridge school lists found none in the town, Dhoraji or Jetpur. The nearest cities with international schools are Rajkot, Ahmedabad and Vadodara. Online lessons let a student prepare for that step or keep up a course from home. Verify any school's status with it directly.",
    },
    {
      question: "Will a tutor come to my home in Upleta?",
      answer:
        "No. Tutors do not visit homes in Upleta, and in-person home tuition runs only in Gurugram and parts of Delhi NCR. We offer online home tuition instead: a live private lesson at your own table, taught by a specialist elsewhere in India. You keep the one-to-one attention of a home tutor and can choose from tutors far beyond Saurashtra.",
    },
    {
      question: "Can a child from a Gujarati-medium school learn IGCSE or IB content?",
      answer:
        "Yes, with preparation. The main gap is usually English-medium explanation and not the ideas, so we begin with a diagnostic lesson, build scientific vocabulary, and practise writing short structured answers. Families often start six to twelve months before a change of school. Students who plan to continue to A Level or IB should aim for Extended tier in IGCSE.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Upleta?",
      answer:
        "There is no fixed list. The rate depends on programme and level, subject, lesson length, weekly frequency and tutor experience. Lessons are online, so there is no travel cost. We send a written rate before the free trial, and you can reduce, pause or stop later without penalty, which keeps the arrangement under your control.",
    },
    {
      question: "Can a tutor help with my child's Internal Assessment or Extended Essay?",
      answer:
        "A tutor can guide, but never write. Help includes choosing a question, planning method, discussing data analysis and commenting on structure. Every sentence must be the student's own. IB Gram tutors do not write IAs, Extended Essays, TOK essays or coursework, and a request to do so ends the arrangement.",
    },
    {
      question: "Can lessons be explained partly in Gujarati or Hindi?",
      answer:
        "Sometimes. IB and IGCSE exams are set in English for most subjects, so teaching is mainly in English, but many tutors can explain a hard idea in Hindi first and rebuild it in English. Gujarati explanation depends on tutor availability. Gujarati itself can be studied as IB Gujarati A or as an IGCSE second language where the school offers it.",
    },
    {
      question: "Which exam sessions apply, and when should we start?",
      answer:
        "IB Diploma exams are held in May and November. Cambridge IGCSE has February and March, May and June, and October and November series, and Edexcel runs January, May and June, and November series. Start content revision at least six months ahead and move to timed papers in the final two months. The school or exam centre confirms the dates for your child.",
    },
    {
      question: "Will monsoon weather or power cuts affect lessons?",
      answer:
        "They can. Heavy rain in July and August, and flooding along the Bhadar in a bad year, may interrupt roads, power and mobile signals. Keep a charged laptop and a phone hotspot ready, and warn the tutor early if a storm is forecast. Missed lessons are rebooked within the week, and notes can be shared afterwards.",
    },
    {
      question: "Do you teach IGCSE Accounting and IB Business for trading families?",
      answer:
        "Yes. IGCSE Accounting covers ledgers, trial balances and final accounts, and IB Business Management and Economics cover costing, strategy, markets and policy. Students who help at a family shop often grasp the numeric side quickly. Tutors focus on exam layout and on the written analysis that scores the remaining marks.",
    },
    {
      question: "What is the difference between IGCSE Core and Extended?",
      answer:
        "Core covers the essential topics and caps the top grade, while Extended adds more content and reaches A*. A student aiming for IB Mathematics, A Level sciences or engineering should normally choose Extended. A diagnostic lesson helps us recommend the tier that suits the current level and the plan.",
    },
    {
      question: "Do you teach both Mathematics AA and AI?",
      answer:
        "Yes, at HL and SL. Analysis and Approaches suits students heading to engineering, physics or economics, while Applications and Interpretation suits commerce, design and social sciences. Ask the school which it offers. A trial lesson on a typical problem shows which style your child prefers.",
    },
    {
      question: "We may move to Rajkot or Ahmedabad. Can lessons continue?",
      answer:
        "Yes. The tutor, slot and notes carry over after a move, since lessons follow the student. If the new school uses a different board, the tutor adjusts the plan within a session or two, and you can also request a new match. Many families value this continuity through a big change.",
    },
    {
      question: "My child is weak in Physics. Is it too late in Class 11?",
      answer:
        "Usually not. We locate where understanding broke, often in mechanics or electricity, and rebuild it with short problem sets and plain explanation. Two or three lessons a week for a few weeks often steadies a student, and then one lesson weekly keeps pace. Starting early in the school year makes the workload lighter.",
    },
    {
      question: "How do I start, and is the first lesson free?",
      answer:
        "The first lesson is free. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, board and subject. We reply with a tutor profile and a written rate, then arrange a trial at a time that suits your household. If the fit is wrong, we match someone else.",
    },
    {
      question: "Is IB Gram connected with any school or board?",
      answer:
        "No. IB Gram is an independent service, not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. School names appear only to show where Saurashtra families sometimes look. Please confirm admissions, fees and curricula with the school directly.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page for students in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from PYP to Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "How DP tutoring works across six subjects and the core." },
    { label: "IB Middle Years Programme tuition", href: "/programmes/myp/", description: "Criteria, units and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "AA and AI explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles and syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Rajkot", href: "/rajkot/", description: "The regional Saurashtra city, about 70 km away." },
    { label: "IB and IGCSE tutors in Porbandar", href: "/porbandar/", description: "A Saurashtra coastal neighbour with a similar school picture." },
    { label: "IB and IGCSE tutors in Dhoraji", href: "/dhoraji/", description: "The neighbouring town on the Bhadar." },
  ],

  closingHeading: "Start with one free lesson at home in Upleta",
  closingBody:
    "Tell us the class, the board and the subject that worries you most. We will suggest a matched tutor, quote the rate in writing and set up a trial that fits your evening. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and there is no trip to Rajkot or commitment to make first.",
};
