import type { CitySeoPage } from "../types";

/**
 * /ratnagiri/ - IB and IGCSE tutoring page for Ratnagiri, Konkan coast, Maharashtra. No IB or IGCSE school
 * confirmed in town; nearest confirmed names reused from the verified Sangli, Satara, Pune, Panaji, Marmagao
 * and Panvel pages. Online-only: no home visits outside Gurugram and parts of Delhi NCR.
 */
export const ratnagiri: CitySeoPage = {
  slug: "ratnagiri",
  countryName: "Ratnagiri",
  countryNameLong: "Ratnagiri, Maharashtra",
  demonym: "Ratnagiri",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Plans bend around the mango harvest, the June to September downpour, Shimga and the long Ganeshotsav stretch when half the Konkan travels home",
  lastUpdated: "2026-09-21",
  geo: { latitude: 16.9902, longitude: 73.312 },
  wikipedia: "https://en.wikipedia.org/wiki/Ratnagiri",
  alternateNames: ["Ratnagiri Konkan", "Ratnagiri Maharashtra"],
  stripSchools: [],

  title: "Ratnagiri IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tutors for Ratnagiri students on the Konkan coast: DP, MYP, PYP, Cambridge and Edexcel, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ratnagiri",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION ON THE KONKAN COAST",
  heroSubtitle:
    "Private home tuition in Ratnagiri for an international curriculum means a live lesson on a laptop, because no tutor drives down the Konkan to your door. What you get is a specialist who has taught the exact IB or IGCSE paper, teaching one to one, while the closest confirmed international campus stays a long road trip away.",
  primaryKeyword: "IB and IGCSE tutors in Ratnagiri",
  imageAltText: "Ratnagiri student revising IB Chemistry with a tutor over video while monsoon rain falls outside the window",
  secondaryKeywords: [
    "IB tutor Ratnagiri",
    "IGCSE tutor Ratnagiri",
    "IB home tuition Ratnagiri",
    "IGCSE home tuition Ratnagiri",
    "IB private tuition Ratnagiri",
    "IB Maths tutor Ratnagiri",
    "IGCSE Maths tutor Ratnagiri",
    "IB Physics tutor Ratnagiri",
    "IB Chemistry tutor Ratnagiri",
    "IB Biology tutor Ratnagiri",
    "IB DP tutor Ratnagiri",
    "IB MYP tutor Ratnagiri",
    "IB PYP tutor Ratnagiri",
    "IGCSE online tuition Ratnagiri",
    "IB tutor Mirkarwada",
    "IGCSE tutor Nachane",
    "online IB tutor Konkan",
    "IB tutor Ganpatipule Ratnagiri district",
  ],

  heroTrustPoints: [
    "The tutor is picked for your child's paper and level, however far from the Konkan they sit",
    "Lessons are live and online; visits to a home run only in Gurugram and parts of Delhi NCR",
    "Timed around the mango season and the June rains, not against them",
    "A free sample lesson and a note after each class, with no contract to sign",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB range" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as your tutor" },
    { value: "First lesson free", label: "Judge before you pay" },
  ],

  intro: {
    heading: "International-curriculum tutoring for families of the Ratnagiri coast",
    paragraphs: [
      "Ratnagiri is best known for its Hapus mangoes, its fishing harbour and as the place where Lokmanya Tilak was born and where King Thibaw of Burma spent his exile. It is also a district headquarters with a port, a medical college and a rail station on the Konkan line. Its schools run the Maharashtra State Board and CBSE, and we could not confirm an IB or Cambridge school in the town.",
      "Who goes looking for an international curriculum here? Orchard owners and mango exporters who expect a child to study abroad, fish-processing and port families, engineers and managers connected to the Jaigad and Dabhol energy projects, doctors, and households with a son or daughter already in Mumbai or Pune. Some will move a child to a boarding school; others want a home-based route for the next two or three years.",
      "Distance is the obstacle. Pune is over three hundred kilometres away, Kolhapur about a hundred and forty across the Amba ghat, and Goa a long drive down the highway. Nobody local is likely to have taught IB Physics HL or marked an IGCSE alternative-to-practical script, so the practical answer is to choose a specialist nationally and bring them in by video.",
      "We should be clear about one thing: IB Gram tutors do not come to Ratnagiri homes. In-person tuition exists only in Gurugram and parts of Delhi NCR, and private tuition from home in this district means online one-to-one classes. IB Gram is independent of the IB Organization, Cambridge, Pearson and every school mentioned here.",
    ],
    bullets: [
      "Live one-to-one lessons on a laptop, taught on IST",
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Specialists for sciences, Maths, languages and commerce subjects",
      "A free trial class, then a written first-month plan if you want to continue",
      "No visits to Ratnagiri homes; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "On this stretch of the Konkan, families meet an international programme through a plan rather than a neighbourhood school: a boarding place in Kolhapur, Pune or Goa, a parent's transfer, or a long-term target of a foreign degree.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Instead of a timetable of separate lessons, children explore themes such as how people organise themselves or how the world works, drawing on several subjects at once. A student-led Exhibition in the final year asks them to pick an issue and follow it through.",
      countryNote:
        "Ratnagiri children usually speak Marathi at home, so tutors often spend the early sessions on English comprehension and on helping a ten-year-old phrase a researchable question.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Eight subject groups are graded on criteria, and a Personal Project crowns the final year. What surprises many newcomers is how much credit goes to explaining method and reflecting on a result rather than to the answer by itself.",
      countryNote:
        "Coastal families heading for an MYP school in another city ask mainly for bridging in science writing and in maths word problems before the move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are paired with a 4,000-word Extended Essay, Theory of Knowledge and a service-and-activity requirement. Most subjects include coursework marked by the teacher and moderated externally, so the last term is only part of the story.",
      countryNote:
        "A Diploma student linked to Ratnagiri almost always studies away from town, and the online hours usually go to Maths, the sciences or English A.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma subjects sit next to a career-related study, a reflective project and work on personal skills. It is intended for students who prefer a practical pathway into employment or vocational higher education.",
      countryNote:
        "We see almost no CP demand tied to this coast because so few schools in the region run it; when it arises, the Diploma courses inside it are taught at full depth.",
    },
  ],

  subjectsIntro:
    "A request only makes sense once it names the subject, the level and the session. HL Physics for May and SL Economics for November call for different tutors, different papers and different revision calendars.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. Students from the Maharashtra Board are often quick with procedure but need training on open, multi-step problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling and statistics with a graphic calculator; an exploration built on harvest yields, tide tables or fish-market prices gives real data to work with." },
    { name: "IB Physics", levels: "HL / SL", description: "Waves, fields and energy. A coastal setting offers natural examples, from tides to wind, so long as the answer connects back to the syllabus." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry first, then equilibrium, organic mechanisms and acid-base work; the lab investigation rewards a clean design more than an ambitious one." },
    { name: "IB Biology", levels: "HL / SL", description: "Ecology and marine examples come easily to Konkan students, while genetics and biochemistry need rehearsal in exact scientific language." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, evidence and evaluation. Mango exports, fishing quotas and port trade are good local case material." },
    { name: "IB Business Management", levels: "HL / SL", description: "Family-run orchards, cooperatives and export houses can inspire the research project if the student applies the course's tools properly." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts and a sustained comparative essay; oral practice builds confidence for students who think first in Marathi." },
    { name: "IB Marathi B", levels: "SL / HL", description: "Text types, unseen passages and a spoken component, for students who speak Marathi daily but have not met the exam format." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Grammar, written accuracy and oral fluency according to the IB's language rubric." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking applied to fisheries, coastal erosion and monsoon runoff, which suits a student who lives beside the Arabian Sea." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth and a properly designed fieldwork enquiry; the Konkan's coastline and laterite plateaus offer real material." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures plus an internally assessed software project with full documentation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A guided conversation on how we know what we claim to know; the tutor questions and suggests, and the student writes." },
  ],

  igcseSubjectsIntro:
    "Two boards, each with tiers and its own exam months, make IGCSE easy to muddle. The opening step is to fix the board, the syllabus number, the tier and the sitting, and only then pick papers.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates need non-calculator speed and neat working so method marks survive a slip." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometry ahead of time; useful for anyone thinking about IB Maths HL or engineering later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's wording, equal-weight papers and formula sheet call for practice on its own past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, electricity and thermal topics, with the alternative-to-practical paper needing separate rehearsal." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "The mole, reactivity, electrolysis and organic families, plus a habit of reading data tables carefully." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, enzymes, ecology and inheritance, with extended answers that need precise terms." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "One award covering three sciences, suited to students who will not specialise in science later." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Listening, speaking, reading and writing in balance for students whose school day is partly Marathi-medium." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Coastal processes, weather and settlement case studies, which a student by the sea can picture directly." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying ideas to a short business scenario, good early practice for students from trading families." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Binary, logic and pseudocode, plus programming that is tested rather than merely written." },
  ],

  regionsTitle: "Ratnagiri and Konkan localities our online tutors serve",
  regionsIntro:
    "No lesson involves a journey, so these places are context: where a family sits against the highway and the coast, how the rains affect an evening, and where a connection is most likely to hold.",
  regions: [
    { name: "Mandvi", note: "The seafront quarter near the old harbour; salt air is hard on electronics, and families here plan for power cuts in the rains." },
    { name: "Bhatye", note: "A residential stretch beside the well-known beach and river mouth, popular with professional families and close to the lighthouse road." },
    { name: "Mirkarwada", note: "The fishing and harbour area, where household schedules follow the boats and lessons tend to fall after the day's catch is landed." },
    { name: "Nachane", note: "A fast-growing suburb on the road north, where many newer apartments and private schools have appeared." },
    { name: "Thibaw Palace area", note: "Near the old palace of the exiled Burmese king, a quieter and older part of town with government employees and long-settled families." },
    { name: "Zadgaon and the MIDC side", note: "Towards the industrial estate, with engineers and plant staff who work shifts and often prefer late-evening slots." },
    { name: "Kuvarbav", note: "A coastal village-suburb to the south, where mango orchards begin and families are busiest in the harvest months." },
    { name: "Shirgaon", note: "A quieter residential area on the town's edge, with steady broadband in most lanes." },
    { name: "Ganpatipule", note: "The temple-and-beach town about thirty kilometres north; pilgrim crowds peak at festivals, and lessons are best rescheduled on those days." },
  ],

  schoolDisclaimer:
    "No school below is in Ratnagiri. These campuses are listed only to show, honestly, where the nearest confirmed IB or Cambridge teaching lies for a coastal family, taken from the information we gathered for neighbouring city pages. IB Gram has no contract, referral or partnership with any of them, and naming a school is not an endorsement. Do check what each currently offers.",
  schoolClusters: [
    {
      city: "Nearby: Kolhapur district",
      note: "The nearest confirmed IB and IGCSE campus, about a hundred and forty kilometres inland over the Amba ghat, more realistic for boarding than for a daily commute.",
      schools: ["Sanjay Ghodawat International School, Atigre"],
    },
    {
      city: "Nearby: Pune",
      note: "A long but well-connected trip, and the city with the region's widest choice of international schools, often chosen for the Diploma years.",
      schools: ["Mahindra International School", "Symbiosis International School", "Indus International School, Pune"],
    },
    {
      city: "Nearby: Goa",
      note: "Down the coast along NH 66, with a handful of confirmed international campuses in Tiswadi and Bardez.",
      schools: ["Sunshine Worldwide Secondary School, Goa Velha", "Paradise School, Aldona", "The Ardee School, Sangolda"],
    },
  ],

  modesIntro:
    "Every class is live video with a tutor teaching on IST. The difference from family to family is cadence: a steady weekly class through term, a concentrated stretch before a transfer, or a burst of sessions in the run-up to papers.",
  modes: [
    {
      title: "Regular live one-to-one classes",
      description:
        "A single tutor, one slot a week, a digital whiteboard and exam questions on screen. Ratnagiri families often fix it on a weekday evening, when school and travel are done.",
      bullets: [
        "One tutor throughout the course",
        "Suits IB, Cambridge and Edexcel alike",
        "Screen work shared afterwards for revision",
        "Moves easily when the rain brings a power cut",
      ],
    },
    {
      title: "Bridging for a move to Pune, Kolhapur or Goa",
      description:
        "A few weeks of twice-weekly lessons introduce a State Board or CBSE student to command terms, extended answers and investigation habits before the new school begins.",
      bullets: [
        "Short diagnostic of current strengths",
        "Focus on science writing and maths reasoning",
        "English comprehension practice",
        "A short summary for the new school",
      ],
    },
    {
      title: "Focused preparation before an exam session",
      description:
        "As a sitting approaches, lessons grow more frequent and centre on timed papers with quick feedback, planned around the mango rush and the school's own mocks.",
      bullets: [
        "Marked against the official mark scheme",
        "Paper-by-paper timing drills",
        "Scheduled away from Ganeshotsav and Shimga",
        "Booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "What international-curriculum schooling exists around Ratnagiri?",
      paragraphs: [
        "Within Ratnagiri town, the school landscape is the Maharashtra State Board and CBSE, with Marathi-medium and English-medium options, older institutions tied to the Konkan Education Society tradition and newer private campuses. We checked and could not confirm any school in the town that teaches the IB or Cambridge IGCSE, and we prefer to say so than to imply otherwise.",
        "Yet interest exists, and it comes from a mixed population. There are orchard and export families who think in terms of global markets, hospital and medical-college staff, engineers posted to the gas and power plants on the coast, and a large Ratnagiri community living in Mumbai and Pune that keeps close ties with the home district.",
        "For a full programme, the nearest confirmed campuses are in Kolhapur district, Pune and Goa, each a real journey. Some families board a child from Class 9 or Class 11; others hold on to a State Board or CBSE place and take IGCSE or A Level subjects privately, sitting papers at an authorised centre.",
        "Whichever route a family picks, the tutoring question is the same: who has actually taught this paper? Matching by syllabus, rather than by postcode, is the only approach that works when the local supply is so thin.",
      ],
      table: {
        caption: "Reaching IB or Cambridge teaching from Ratnagiri",
        columns: ["Destination", "Rough distance", "What we could confirm"],
        rows: [
          ["Ratnagiri town", "Local", "State Board and CBSE schools; no IB or IGCSE school confirmed"],
          ["Atigre, Kolhapur district", "About 140 km inland", "Sanjay Ghodawat International School"],
          ["Pune", "Over 300 km", "Mahindra International, Symbiosis International, Indus International"],
          ["Goa", "Around 250 km south", "Sunshine Worldwide, Paradise School, The Ardee School"],
        ],
      },
      bullets: [
        "No IB or IGCSE school was confirmed in Ratnagiri town",
        "Kolhapur, Pune and Goa hold the nearest confirmed campuses",
        "Boarding or private IGCSE at home are the two common routes",
        "Online tutors are chosen by syllabus rather than location",
      ],
    },
    {
      heading: "How is IB or IGCSE different from the Maharashtra Board or CBSE?",
      paragraphs: [
        "The Maharashtra Board and CBSE reward a student who has absorbed the textbook and can reproduce its methods accurately. IB and IGCSE examiners use the same subjects to ask something different: explain why a reaction goes the way it does, compare two sources, or justify the choice of a model. Reproducing a worked example earns part of the credit, not all of it.",
        "The kind of work also shifts. An IB Diploma candidate writes a lab investigation or an exploration, and an IGCSE science candidate sits a practical or alternative-to-practical paper. Board students are used to practical journals; being graded on experimental design and on an honest discussion of error is new ground.",
        "Another change is language. Many Ratnagiri students think and speak in Marathi and are fluent in Hindi, then meet dense English questions with command words like evaluate or discuss that mean specific things. A tutor working on reading the question properly often adds more marks than extra content revision.",
        "None of this makes the new route impossible. Students from the Konkan are known for persistence, and once the expectations are explicit most settle within a term or two.",
      ],
      table: {
        caption: "Maharashtra Board and CBSE beside IB and IGCSE",
        columns: ["Point of comparison", "Maharashtra Board / CBSE", "IB / IGCSE"],
        rows: [
          ["What a mark rewards", "Correct recall and standard methods", "Reasoning, application and evaluation"],
          ["Practical work", "Journals and practical exams", "Marked investigations or a practical paper"],
          ["Language demand", "Marathi, Hindi or English medium", "English, with subject-specific command words"],
          ["Recognition overseas", "Through equivalence", "Direct"],
        ],
      },
      bullets: [
        "Questions ask for reasoning beyond recall",
        "Lab work is judged on design and evaluation",
        "Reading command words properly is half the battle",
        "Most students adjust within a term or two",
      ],
    },
    {
      heading: "How much do IB and IGCSE tutors charge in Ratnagiri?",
      paragraphs: [
        "There is no single price, because the rate follows several things: the programme and level, the subject, how long each lesson is and how often it happens, and how deeply the tutor knows that particular specification. An HL science tutor who has moderated coursework will usually charge more than a tutor for Core IGCSE Geography.",
        "Being on the Konkan coast neither adds nor subtracts anything. Lessons are online, so there is no fuel, no toll on the highway and no travelling time to cover. A tutor in Bengaluru or Nagpur charges a Ratnagiri family the same as one in their own city.",
        "To keep things clear we put the quote in writing for the specific match before the trial lesson. It states the lesson length, the weekly pattern, whether marked practice papers are part of the price and how to pause. You can read it, compare it and decline without any awkwardness.",
        "Try to judge the hour by what happens in it. A tutor who spots the exact step where a student's titration calculation goes wrong does more good than a long general recap, and that precision is what the rate pays for.",
      ],
      bullets: [
        "Programme, level, subject and lesson length drive the rate",
        "No travel cost added because everything is online",
        "A written quote arrives before the trial class",
        "No lock-in; stop or pause when needed",
      ],
    },
    {
      heading: "Online tutor, classroom coaching, local teacher or studying alone in Ratnagiri?",
      paragraphs: [
        "Coaching classes in Ratnagiri and the larger Kolhapur and Pune circuits are built around the SSC and HSC boards, MHT-CET, JEE and NEET. They do that with skill, but a crowded batch preparing for CET cannot give a single student half an hour on the IB Biology internal assessment or on an IGCSE 0620 practical question.",
        "Local teachers who tutor privately are a long tradition in Maharashtra, and for state-board subjects many are excellent. For IB and IGCSE, the pool is small, since few have taught those papers. We do not send tutors to homes in Ratnagiri, because in-person tuition exists only in Gurugram and parts of Delhi NCR, so any visiting teacher would be a separate arrangement that you find yourself.",
        "Studying alone is realistic for a motivated student in a subject with plenty of published past papers, such as IGCSE Mathematics. The weak point is feedback: nobody says that a paragraph would lose marks or that a chosen investigation cannot be completed with the equipment available.",
        "Online one-to-one lessons keep the personal attention of a home tutor and add the syllabus focus of a specialist, without a long drive. They need a laptop, a quiet corner and a dependable connection, which is worth planning for in the monsoon months.",
      ],
      table: {
        caption: "Support choices for an IB or IGCSE student in Ratnagiri",
        columns: ["Choice", "Fit to the syllabus", "Personal attention", "Main drawback"],
        rows: [
          ["Classroom coaching", "Aimed at SSC, HSC, CET, JEE, NEET", "Group setting", "IB and IGCSE are seldom covered"],
          ["Local private teacher", "Varies by individual", "One to one", "Few have taught IB or IGCSE papers"],
          ["Studying alone", "Whatever the student finds", "None", "No expert feedback on coursework"],
          ["Online IB or IGCSE tutor", "Matched to code and level", "One to one", "Depends on steady connectivity"],
        ],
      },
      bullets: [
        "Coaching targets state and entrance exams",
        "Local teachers with IB or IGCSE experience are scarce",
        "Studying alone lacks feedback",
        "Online lessons widen the choice across India",
      ],
    },
    {
      heading: "How do mangoes, monsoon and Ganeshotsav shape the year in Ratnagiri?",
      paragraphs: [
        "The Konkan rains arrive in June and do not leave until September or early October, bringing landslides on ghat roads, flooded lanes and frequent power cuts. A phone hotspot is sensible insurance, and a spare evening slot each week can save a lesson. Note also that the fishing season pauses for the monsoon ban, which changes many households' routines.",
        "Mango season, running roughly from March to June, absorbs orchard and export families completely. Harvest, grading, packing and transport leave little room for a child's schedule to stay normal, which is one reason online lessons that can shift by an hour are valued in these months.",
        "Two festivals reshape the calendar. Ganeshotsav draws Konkan families home from Mumbai and Pune for days or weeks, and Shimga, the Konkan's Holi festival, is celebrated with village processions. Diwali follows a little later.",
        "Formal exam series run separately. IB Diploma papers are sat in May, results arrive in early July and there is a November retake session. Cambridge IGCSE offers May-June and October-November, and Edexcel IGCSE January and May-June.",
      ],
      table: {
        caption: "The Ratnagiri year against the IB and IGCSE calendar",
        columns: ["Period", "Local situation", "What it means for lessons"],
        rows: [
          ["March to June", "Mango harvest, heat, May exam series", "Short flexible slots; light weeks during peak harvest"],
          ["June to September", "Heavy monsoon and fishing-ban months", "Backup slot and hotspot ready"],
          ["August to September", "Ganeshotsav homecoming", "Plan breaks and catch-up weeks"],
          ["October to November", "Post-monsoon, Diwali, Cambridge second series", "Good time for retakes and steady work"],
          ["February to March", "Shimga and mock exams", "Timed paper practice before the May window"],
        ],
      },
      bullets: [
        "Keep a hotspot and a spare slot during the monsoon",
        "Mango season can leave families with little free time",
        "Ganeshotsav and Shimga both pull families away",
        "Exam series: IB May, Cambridge May-June and October-November, Edexcel January and May-June",
      ],
    },
    {
      heading: "Which universities can a Ratnagiri student aim for after IB or IGCSE?",
      paragraphs: [
        "Within Maharashtra and its neighbours, common targets are the University of Mumbai and its colleges, Savitribai Phule Pune University, Goa University, the engineering and medical colleges reached through MHT-CET and NEET, and Dr Balasaheb Sawant Konkan Krishi Vidyapeeth at Dapoli for agriculture and horticulture. Each has its own rules for IB and IGCSE applicants.",
        "Nationally, CUET-UG takes applicants from many boards, and JEE Main and NEET-UG set eligibility on subjects and marks that should be read in Class 11, not at the end of Class 12. The Association of Indian Universities issues equivalence for IB and IGCSE qualifications, and it is best to apply for it early.",
        "Overseas, the UK, Canada, Australia, Germany and the Netherlands attract many students from Maharashtra. Predicted grades carry a lot of weight, so a tutor may advise on choosing HL subjects and on how predictions are formed. A personal statement is always the student's own work.",
        "Nothing on this page guarantees admission or a particular grade. Outcomes depend on a student's record, the course and the institution, and IB Gram helps with preparation only.",
      ],
      table: {
        caption: "Study routes after IB or IGCSE from Ratnagiri",
        columns: ["Route", "What to check", "Usual subject emphasis"],
        rows: [
          ["Mumbai and Pune universities", "Equivalence and course rules", "Subjects matching the degree"],
          ["CUET-UG central universities", "Subject mapping", "English plus domain subjects"],
          ["Engineering (JEE Main, MHT-CET)", "Subject and mark conditions", "Maths, Physics, Chemistry"],
          ["Medicine (NEET-UG)", "Biology, Chemistry, Physics depth", "Biology and Chemistry at HL"],
          ["Overseas universities", "Predicted grades and deadlines", "HL subjects fitting the course"],
        ],
      },
      bullets: [
        "Mumbai, Pune and Goa universities are the natural nearby targets",
        "AIU equivalence should be sought early",
        "JEE and NEET eligibility needs reading in Class 11",
        "Predicted grades matter for overseas applications",
      ],
    },
    {
      heading: "What do IB Maths and the sciences ask of a Ratnagiri student?",
      paragraphs: [
        "Mathematics begins with a choice: Analysis and Approaches for a student who enjoys algebra, calculus and proof, or Applications and Interpretation for one who prefers data, modelling and technology. Both come at Higher and Standard Level, and the right pick depends on the degree in mind, whether marine science, engineering, economics or medicine.",
        "The Mathematics exploration is a short independent paper on a topic of the student's choice. A coastal student might study tidal patterns or the pricing of a mango season, provided the data is real and the maths is actually used. A tutor may ask questions and explain the criteria, but may not write any of it.",
        "Physics, Chemistry and Biology each combine content papers with an individual investigation. Students strong at calculation often lose marks on written explanation, on units and on discussing uncertainty, and in Biology on the exact scientific vocabulary examiners expect.",
        "Lessons tend to alternate new material with past-paper questions, and the investigation is kept moving with a small weekly step so it never becomes a panic in the final month.",
      ],
      bullets: [
        "Pick AA or AI according to the intended degree",
        "Use real data when building an exploration",
        "Written explanation and uncertainty cost the most marks",
        "Start the investigation early and move it weekly",
      ],
    },
    {
      heading: "What should a Ratnagiri family know about IGCSE tiers and subject choice?",
      paragraphs: [
        "On the Cambridge side, Mathematics is offered at Core and Extended, and on the Edexcel side at Foundation and Higher. The tier sets the ceiling on the grade, so a student who might later take A Level Mathematics or IB Maths HL should normally be prepared for Extended or Higher.",
        "A common package includes English, Mathematics, three sciences or Combined Science, a humanities or business subject and a language. Combined Science awards one grade for three disciplines and suits students who will not specialise, while separate sciences give a firmer base for later science courses.",
        "A school decides what a child is actually entered for, but an experienced tutor can give a frank view after a diagnostic lesson looking at algebra, written English and stamina in timed papers. Early Grade 9 is the best time for that conversation.",
        "Board choice also decides the months available, since Cambridge and Edexcel sit at different times of year, which matters for a family planning a school change or a long stay away.",
      ],
      bullets: [
        "Extended or Higher keeps later options open",
        "Combined Science is one grade for three sciences",
        "A diagnostic lesson gives a clear view of tier",
        "The two boards examine in different months",
      ],
    },
  ],

  tutorsIntro:
    "These are the tutors who teach IB PYP, MYP and Diploma courses and Cambridge and Edexcel IGCSE to students in and around Ratnagiri. Each is proposed after we look at the course, the level and the exam month, and every class is taught online.",

  process: [
    { title: "Describe the course", description: "The programme or board, the subject, the level and the month of the next paper, plus any move of school you expect." },
    { title: "Get a tutor proposal", description: "One introduction with a few lines on why that tutor's record fits your child's exact syllabus." },
    { title: "Take the sample lesson", description: "Your child works through a real topic on video with the tutor, without paying anything." },
    { title: "Look over the written plan", description: "Topics for the first month, the weekly rhythm and the agreed rate, on paper before you decide." },
    { title: "Stay in touch", description: "Notes after each class and a fuller review every few weeks, with another tutor available if needed." },
  ],

  whyPoints: [
    { title: "The paper decides", description: "IB subject and level, or IGCSE board, code and tier, settle who teaches your child." },
    { title: "Built around a coastal calendar", description: "Timetables allow for the mango rush, the heavy rains and the Ganeshotsav homecoming." },
    { title: "A no-cost first class", description: "Your child meets the tutor on real material before any fee is discussed." },
    { title: "Honest about coursework", description: "Tutors question and explain, but internal assessments and essays stay the student's own." },
    { title: "Notes you can read", description: "A few lines after each lesson record what was covered and what comes next." },
    { title: "Free to walk away", description: "No link with any school or board, no long contract and easy changes of tutor." },
  ],

  faqs: [
    { question: "How do I arrange an IB tutor in Ratnagiri?", answer: "Write to us with the subject, the level and the month of the exam. No IB school in Ratnagiri town could be confirmed, so we look across India for someone who has taught that precise course, then set up a free sample lesson on video. You decide after seeing how your child and the tutor work together." },
    { question: "Will a tutor visit us in Ratnagiri?", answer: "No. Nobody travels to Ratnagiri, since IB Gram offers in-person home tuition only in Gurugram and parts of Delhi NCR. Private tuition from home here is delivered online: your child studies at their own desk, the tutor appears on screen, and the lesson stays one to one and unhurried." },
    { question: "Is IGCSE home tuition in Ratnagiri available for Cambridge and Edexcel?", answer: "Yes, through live online lessons instead of visits. Tutors cover Mathematics, sciences, English, Geography, Business Studies and Computer Science for both boards. We begin by identifying the board, syllabus number, tier and exam month, since practising from the wrong papers is a common and avoidable mistake." },
    { question: "Which international schools are near Ratnagiri?", answer: "None confirmed in the town. The nearest we can confirm are Sanjay Ghodawat International School at Atigre near Kolhapur, several campuses in Pune such as Mahindra International School, and schools in Goa including Sunshine Worldwide at Goa Velha. All are a long trip away, so please ask each school directly about current curriculum and boarding." },
    { question: "What is the cost of IB or IGCSE tutoring for us?", answer: "It depends on the programme, level, subject, length of lessons and the tutor's depth with your syllabus, and no price list is published here. You will receive a written quotation before the free trial. Nothing is added for travel because every class is online, and you may pause or stop whenever your plans change." },
    { question: "Mango season keeps us busy from March. Can lessons still work?", answer: "Yes, and it is one reason families choose online classes. Slots can move by an hour or a day, lessons can be shorter in peak weeks, and work can be made up in quieter weeks. Tell us about the harvest period when you first write, and the timetable is built with that in mind." },
    { question: "How much can a tutor help with an internal assessment?", answer: "A tutor may discuss topic ideas, explain the criteria, ask probing questions and comment on structure. A tutor will not write or rewrite the exploration, the investigation, the Extended Essay or the Theory of Knowledge submission. That would breach the IB's rules of honesty and leave your child less able to manage alone." },
    { question: "Which IB Diploma subjects can you teach?", answer: "Both Mathematics courses, Physics, Chemistry, Biology, Economics, Business Management, English A, Marathi B, Hindi B, Environmental Systems and Societies, Geography, Computer Science and Theory of Knowledge, at Higher or Standard Level. If your school offers something else, send us the combination and we will say whether we can cover it." },
    { question: "Do you teach younger students on MYP or PYP?", answer: "Yes. For MYP we focus on criteria-based writing in science and mathematics, language work and the Personal Project. For PYP we concentrate on English reading, number confidence and preparing the Exhibition. Sessions for younger children are brief and friendly, and parents receive a short note afterwards." },
    { question: "Is online tuition really as good as a teacher in the room?", answer: "For IB and IGCSE, usually yes. A shared whiteboard, screen sharing and scanned past papers replace pen and paper, and the choice of specialist is far wider than a coastal town can offer. It does rely on a steady connection, so keep a phone hotspot for monsoon-season power cuts." },
    { question: "How do you check your tutors?", answer: "We look at subject qualifications, recent teaching of the exact syllabus and the clarity of their explanations, including how they use mark schemes to give feedback. Only tutors who pass that check are introduced, and families can ask for a different tutor at any point without explaining why." },
    { question: "When should tutoring start for a Ratnagiri student?", answer: "As early as the course allows: Grade 9 for IGCSE and the first weeks of Class 11 for the Diploma. That gives time to build habits and to cover the coursework steadily. A focused block of timed papers a few months before an exam is still useful, but its effect is smaller." },
    { question: "My child studies on the Maharashtra Board. Is moving to IGCSE or IB a big leap?", answer: "It is a change in style more than in content. The topics overlap considerably, but answers are marked for reasoning and clear English. A tutor teaches command words, extended answers and investigation planning directly, and most students from the Konkan, who tend to be persistent, settle in within a term or two." },
    { question: "Can you work around Ganeshotsav and the June rains?", answer: "Yes. Many Ratnagiri families pause for Ganeshotsav and Shimga, keep a spare slot for monsoon power cuts and move lessons when relatives visit. Share your calendar with the first message and we build the plan around it, with changes possible at short notice." },
    { question: "What if our first tutor does not suit?", answer: "Tell us and we introduce another, with a second free trial. The regular reviews are meant to catch a weak match early, and the notes from earlier lessons pass to the new tutor so your child does not repeat work. You are never committed to a tutor who is not helping." },
    { question: "Is IB Gram linked with any school or exam board?", answer: "No. IB Gram is an independent tutoring service with no affiliation with, or endorsement from, the IB Organization, Cambridge, Pearson or any school named on this page. Schools are listed only to show where these curricula are taught near Ratnagiri, and details should be confirmed with them directly." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the matching works in cities beyond the Konkan." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where a tutor does come to the door." },
    { label: "IGCSE explained", href: "/igcse/", description: "Boards, tiers, subjects and exam months in plain terms." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and the points system." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the final Exhibition." },
    { label: "IB Maths: AA or AI", href: "/courses/ib/mathematics/", description: "A guide to choosing between the two courses." },
    { label: "Tutor profiles", href: "/tutors/", description: "Search by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and request a free trial class." },
    { label: "Sangli tutors", href: "/sangli/", description: "An inland Maharashtra city facing a similar school map." },
    { label: "Satara tutors", href: "/satara/", description: "Another western Maharashtra page with nearby campus context." },
    { label: "Pune tutors", href: "/pune/", description: "The state's biggest choice of IB and IGCSE schools." },
    { label: "Panaji tutors", href: "/panaji/", description: "Goa's capital, reachable down the coast road." },
  ],

  closingHeading: "Request a free trial class for your Ratnagiri student",
  closingBody:
    "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme or board, subject, level and the next exam month. We come back with one tutor and the terms in writing, and the trial class happens before you pay anything.",
};
