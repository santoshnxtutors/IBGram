import type { CitySeoPage } from "../types";

/**
 * /rampurhat/ - IB and IGCSE tutoring page for Rampurhat, Birbhum, West Bengal. Online only.
 * No IB or Cambridge/Edexcel school is confirmed in Rampurhat, so stripSchools is empty and the clusters
 * are honestly labelled Kolkata options reused from the Kolkata page.
 */
export const rampurhat: CitySeoPage = {
  slug: "rampurhat",
  countryName: "Rampurhat",
  countryNameLong: "Rampurhat, Birbhum, West Bengal",
  demonym: "Rampurhat",
  state: "West Bengal",
  stateCode: "IN-WB",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-afternoon and night slots that avoid Tarapith fair days, Kali Puja night, Durga Puja week and peak summer heat",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.1753, longitude: 87.7836 },
  wikipedia: "https://en.wikipedia.org/wiki/Rampurhat",
  alternateNames: ["Rampur Hat", "Rampurhat Birbhum", "Rampurhat town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rampurhat | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Rampurhat, Birbhum: live one-to-one lessons from home, fitted around Tarapith fair days and Puja. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Rampurhat",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR RAMPURHAT, TAUGHT ONLINE",
  heroSubtitle:
    "Searching for home tuition in Rampurhat for an IB or IGCSE student? Tutors do not visit homes here, so we teach private one-to-one lessons online: your child sits at the usual study table, a tutor who has taught the exact course appears on the laptop, and the lesson follows the syllabus code, not a generic textbook. For a railway town at the top of Birbhum, that is the realistic route to a specialist.",
  primaryKeyword: "IB and IGCSE tutors in Rampurhat",
  imageAltText: "A Rampurhat student working through IB Physics past papers on a laptop at home while a tutor explains on screen",
  secondaryKeywords: [
    "IB tutor Rampurhat",
    "IGCSE tutor Rampurhat",
    "IB home tuition Rampurhat",
    "IGCSE home tuition Rampurhat",
    "IB private tuition Rampurhat",
    "IB Maths tutor Rampurhat",
    "IGCSE Maths tutor Rampurhat",
    "IB Physics tutor Rampurhat",
    "IB Chemistry tutor Rampurhat",
    "IB Biology tutor Rampurhat",
    "IB DP tutor Rampurhat",
    "IB MYP tutor Rampurhat",
    "IB PYP tutor Rampurhat",
    "IGCSE online tuition Rampurhat",
    "online IB tutor Tarapith",
    "IB tutor Nalhati",
    "IGCSE tutor Murarai Birbhum",
    "IB tuition north Birbhum",
    "Rampur Hat IB IGCSE tutor",
  ],

  heroTrustPoints: [
    "Tutors picked for the IB subject and level, or the IGCSE board and syllabus code, your child is studying",
    "Private video lessons timed around Tarapith fair days, Puja and the summer heat",
    "First lesson free, with the hourly rate sent in writing first",
    "No link with the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "IST", label: "The clock Rampurhat already keeps" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "A railway and temple town with serious students and very few international-syllabus teachers",
    paragraphs: [
      "Rampurhat sits near the Jharkhand border at the northern end of Birbhum, a junction town where trains to Howrah, Dumka and Bhagalpur meet, and only a few kilometres from the Tarapith temple. Its streets are busy with traders, railway staff, doctors, teachers and pilgrims. Most children here study in Bengali-medium schools under the state boards, some in English-medium schools under CBSE or ICSE, and many take private tuition from Class 5 onwards. Families that ask us about IB or Cambridge IGCSE have usually started thinking about Kolkata, about a relative abroad, or about a career outside India.",
      "Let us be plain about the format. Tutors do not come to houses in Rampurhat; home visits run only in Gurugram and parts of Delhi NCR. What we run is online home tuition: a private lesson, live, with a tutor chosen for the course, taken at your own study table. You are spared the ride to Kolkata or Durgapur for a specialist, and the tutor does not need to live anywhere near Birbhum.",
      "The children who benefit most fall into a few groups. Some are boarders in Kolkata or elsewhere who come home for Puja and need steady revision. Some are in Class 7 to 9 locally and want a smooth entry into an international school later. Others are in families of railway officers, bank managers or doctors who expect to be posted out of the district and want an international syllabus to keep going through transfers.",
      "Our tutors explain, set practice and give feedback. They never write an Internal Assessment, Extended Essay or any assessed piece. IB Gram works independently of every board and school, and the first lesson costs nothing.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, with Cambridge and Pearson Edexcel IGCSE",
      "Online only: no tutor visits homes in Rampurhat",
      "Suited to boarders, future movers and posted families",
      "Written note after each session and a free first lesson",
    ],
  },

  programmesIntro:
    "Parents in Rampurhat usually compare IB with the syllabus they know from the Madhyamik and Higher Secondary councils. These notes describe each IB stage and what tutoring adds for a child growing up in north Birbhum.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Children explore six shared themes through inquiry, and in the final year they lead a group Exhibition. The classroom prizes curiosity, questions and confident speech over memorised pages.",
      countryNote:
        "A primary child in Rampurhat hears Bengali at home and Hindi on the platform, so short, relaxed English sessions on stories and number games make the first PYP year elsewhere much less tiring.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are taught through key concepts and assessed on criteria, and the Personal Project at the end is a long independent study. Students must justify answers and apply ideas in new settings.",
      countryNote:
        "A Class 8 child from a Bengali-medium school here often knows the content cold but has never written a paragraph of reasoning in English. MYP tutoring trains exactly that.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, together with the Extended Essay, Theory of Knowledge and CAS. Predicted grades from the school go into university applications.",
      countryNote:
        "Diploma students connected with Rampurhat are nearly all boarders or students who moved to a city school, and holiday weeks at home are when a dedicated tutor can repair a weak topic.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller number of DP courses sit beside a career-related study chosen by the school, a personal and professional skills course and a reflective project.",
      countryNote:
        "We know of no CP school in Rampurhat or Birbhum. Help would be for the academic courses of a student enrolled at a school elsewhere.",
    },
  ],

  subjectsIntro:
    "Rampurhat's strengths are in biology, mathematics and Bengali literature, and its students often aim at medicine or engineering. We therefore match each child to a tutor who has taught the same course, with attention to English written answers.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences, complex numbers at HL and careful written justification of every step." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Data handling, distributions and modelling, with a graphic display calculator used confidently." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with unfamiliar-context questions rehearsed." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, equilibrium and organic reactions, with correct terminology and tidy calculations." },
    { name: "IB Biology", levels: "HL / SL", description: "From molecules to ecosystems, and how to phrase a short answer the way the mark scheme expects." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Systems thinking and case studies, useful for students who have seen river and farming pressures first hand." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram drills, definitions and evaluation, using rail, stone and agricultural trade as local examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case reading, cash-flow arithmetic and reasoned recommendations." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and essay planning, with twentieth-century Bengal as a familiar thread." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and comparison, for students who think first in Bengali." },
    { name: "IB Bengali A Literature", levels: "HL / SL", description: "Prose and poetry in the home language, with analytic essays in the IB format." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Spoken and written Hindi for the language acquisition route." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and the practical programming solution." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talk through knowledge questions and exhibition ideas; the writing remains the student's own." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a topic, building an argument and referencing; feedback only." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Criterion-based investigations and written explanations that prepare for the Diploma." },
  ],

  igcseSubjectsIntro:
    "A Rampurhat child who joins a Kolkata or boarding school will most often meet Cambridge IGCSE, occasionally Pearson Edexcel. We ask for the board, the tier and the syllabus code in the first message, then teach to that specification.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry, trigonometry and statistics, with advice on tier." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Functions, calculus and trigonometry that bridge to higher-level study." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, thermal physics and waves, plus the written practical paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Stoichiometry, reactivity, electrolysis and organic basics, with balanced equations." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecology, with data-response practice." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences in a single qualification." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Pseudocode, logic gates and programming tasks." },
    { name: "IGCSE Economics", levels: "Grade 9-10", description: "Markets, government and trade, written up with clear examples." },
    { name: "IGCSE English First and Second Language", levels: "Grade 9-10", description: "Reading, directed writing and speaking for students who use English mainly at school." },
    { name: "IGCSE Bengali as a Second Language", levels: "Grade 9-10", description: "Reading and writing in the mother tongue for a dependable scoring subject." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Comprehension, letter writing and speaking for students who prefer Hindi." },
  ],

  regionsTitle: "Rampurhat town and north Birbhum: where our online students live and study",
  regionsIntro:
    "A lesson on screen works the same from any lane. What differs is the rhythm of the day: rail timings, fair traffic, power and heat. These local notes help us fix sensible slots.",
  regions: [
    { name: "Rampurhat station and railway colony", note: "Railway families with transferable postings; evening slots fit around staff duty hours and platform noise is handled with headphones." },
    { name: "Rampurhat town centre and main market", note: "Shop-owning and trading households, where parents often want lessons after the shutters come down." },
    { name: "Tarapith road", note: "The temple approach, crowded on Saturdays, amavasya nights and festival days, so we avoid those evenings." },
    { name: "Rampurhat College area", note: "Teachers and students live near the college and usually have a steady study routine." },
    { name: "Medical college and hospital neighbourhood", note: "Doctors and hospital staff with demanding shifts who value flexible rebooking of lessons." },
    { name: "Nalhati", note: "A nearby town known for its old temple, where families look to Rampurhat and Kolkata for schooling." },
    { name: "Murarai", note: "A block town towards the Murshidabad border where good broadband matters more than distance." },
    { name: "Mayureswar and Margram", note: "Smaller settlements around the Mayurakshi and its tributaries, with lessons planned around monsoon power cuts." },
    { name: "Bhadrapur and Pachami stone belt", note: "Quarry and crusher business families, many with children studying away from home." },
    { name: "Hansan and Nabagram", note: "Semi-rural blocks where an online tutor saves a long ride for a subject specialist." },
  ],

  schoolClusters: [
    {
      city: "Rampurhat and north Birbhum",
      note: "We could not confirm any IB or Cambridge / Edexcel IGCSE school in Rampurhat, Nalhati or Murarai. Local schools follow the West Bengal boards, CBSE or ICSE, so options for an international syllabus are limited to other cities.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (EM Bypass and Anandapur)",
      note: "The usual destination for families who decide on an international school. The journey is long enough that most use boarding, a hostel or a relocation.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "Garden High International School"],
    },
    {
      city: "Nearby: Kolkata (Central and Joka)",
      note: "A second cluster of international schools, including Cambridge programmes, for families who prefer the older parts of the city or the southern outskirts.",
      schools: ["The Cambridge School, Kolkata", "Oaktree International School"],
    },
  ],
  schoolDisclaimer:
    "The Kolkata schools are listed only because families from Birbhum sometimes consider them. IB Gram is independent and has no tie to these schools, to the IB, to Cambridge or to Pearson, and we have not confirmed any IB or IGCSE school inside Rampurhat. Always check the current programme, board and admission rules with the school.",

  modesIntro:
    "Because Rampurhat has no tutor who can visit, everything is online. These three arrangements suit a junction town where the school year, the railway timetable and the pilgrim calendar all pull on the evening.",
  modes: [
    {
      title: "A standing weekly lesson at home",
      description:
        "One hour, same evening each week, with a tutor who has taught your course. It is the quiet backbone for students who are already enrolled at a school and need a second explanation.",
      bullets: [
        "One tutor per subject and level",
        "Shared digital whiteboard and past papers",
        "Short written note after the session",
        "No tutor visits Rampurhat homes",
      ],
    },
    {
      title: "Pre-admission preparation",
      description:
        "For Class 7 to 10 children who may move to a Kolkata international school, lessons build English writing, the vocabulary of Science and Maths and the habit of showing reasoning.",
      bullets: [
        "Diagnostic first lesson",
        "Reading and writing routines in English",
        "Sample questions in the target syllabus",
        "Progress review with parents each month",
      ],
    },
    {
      title: "Break-time intensives for boarders",
      description:
        "Boarders back for Durga Puja, Kali Puja or winter holidays compress a term of catching up into a run of short daily sessions, then drop back to a weekly slot.",
      bullets: [
        "Daily or alternate-day blocks",
        "Topic lists agreed with the school's teacher",
        "Timed papers with mark-scheme review",
        "Plan handed to the family on the last day",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Rampurhat, and where do families look instead?",
      paragraphs: [
        "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Rampurhat, and we name none. Schools in the town and its blocks teach the state boards' Madhyamik and Higher Secondary courses, with CBSE and ICSE in a handful of private institutions. Students who want an international route therefore look to Kolkata, a long rail journey south of Rampurhat, where several schools are confirmed on our Kolkata page.",
        "In practice the choice is seldom simple. Boarding at eleven is a big step for a family, and moving the household is larger still. That is why many parents here begin by testing the waters at home: a few months of online lessons in English-medium Maths and Science reveal whether a child enjoys the discursive, evidence-based style before any admission form is filled.",
        "Families with a child already enrolled in Kolkata form another group. Their questions are about Puja-time revision and about keeping one tutor across Class 9 and 10 or across the two Diploma years. A third group includes doctors, railway officers and bank managers who plan to be transferred, and want their child on a syllabus that follows them from state to state.",
        "Across all three, tutoring is support and not a substitute for a school. The free first lesson is the easiest way to see whether IB or Cambridge teaching suits your child.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Rampurhat or north Birbhum",
        "Kolkata is the nearest concentrated cluster",
        "Trial online lessons help families decide before any move",
        "Tutoring supports, and never replaces, the school",
      ],
    },
    {
      heading: "How does IB or IGCSE differ from the Bengal boards and CBSE for a Rampurhat child?",
      paragraphs: [
        "Most Rampurhat students sit Madhyamik in Class 10 and Higher Secondary in Class 12, in Bengali with English taught as a language. The books are thorough, the exams value accurate recall and neat long answers, and the road to Presidency, Jadavpur, Kalyani or Visva-Bharati is familiar to every parent in town. CBSE and ICSE schools exist in smaller numbers and follow national syllabuses in English.",
        "IB and IGCSE alter the question. A child is asked not only what a law states but why it holds, how it is tested and where it fails. A full-mark chemistry answer might need a definition, a reason and a consequence, in that order. Students brought up on recall often lose marks through omission, not ignorance, and that habit is where we concentrate.",
        "The difference in coverage also surprises people. The state board syllabus is broad and deep on facts, while IB selects fewer topics and examines them from several angles, with applications and data questions throughout. Moving across can feel at once lighter and harder, and it helps to be told in advance that this is normal.",
        "The table lays out the main differences as they look from Birbhum.",
      ],
      table: {
        caption: "Bengal boards, CBSE or ICSE, and IB or IGCSE, as seen from Rampurhat",
        columns: ["Point of comparison", "Bengal boards", "CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Usual language of study", "Bengali, with English as a language paper", "English, with Hindi or Bengali as a language", "English, with a second language such as Bengali or Hindi"],
          ["What marks reward", "Accurate recall and complete answers", "Recall with application", "Reasoning, evidence and evaluation"],
          ["Presence in Rampurhat", "Nearly every school", "A few private schools", "None confirmed locally"],
          ["Entrance to Indian degrees", "Direct", "Direct", "Needs AIU equivalence and checks on each exam's rules"],
          ["Validity abroad", "Case by case", "Case by case", "Widely understood by overseas admissions offices"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition for a family in Rampurhat?",
      paragraphs: [
        "The hourly rate follows the level of the course, the subject, the length of the lesson, how many lessons run each week and the tutor's experience with your board. A Diploma Physics HL tutor with several years of teaching behind them is not priced like a tutor for Class 6 MYP Mathematics. We publish no fee chart, because any single number would mislead many families.",
        "What we can say is where the savings lie. A student in Rampurhat who goes to Kolkata for a specialist spends on rail tickets, a night's stay and a whole day. Online, none of that applies, and the hours go into the lesson. Parents also avoid paying for a group batch where most of the time covers topics their child already knows.",
        "The sequence is plain. Send the class, board and subject, receive a tutor profile and a rate in writing, and only then book the free trial lesson. If the trial does not convince you, you owe nothing. Later you can reduce hours around Puja, pause for a family event or switch tutors without any fee.",
        "A sensible pattern is one lesson a week in the subject that troubles your child most, a review after four weeks, and more sessions only in the eight weeks before mocks.",
      ],
      bullets: [
        "Level, subject, lesson length, frequency and tutor experience set the rate",
        "No railway fares, hostel nights or lost travel days",
        "Rate in writing before the free trial",
        "Pause, cut back or change tutor at no charge",
      ],
    },
    {
      heading: "Is an online tutor better than a coaching centre or local teacher in Rampurhat?",
      paragraphs: [
        "For board exams and for JEE or NEET, Rampurhat's coaching centres and experienced private teachers are a reasonable choice, and many families already use them. The gap appears with international syllabuses. A teacher who has never marked an IGCSE Chemistry practical paper or an IB Mathematics exploration will not know what an examiner wants to see, and cannot be blamed for it.",
        "An IB Gram tutor is selected because they have taught the actual course, so they work from the correct past papers and explain the mark scheme line by line. A child who is shy in English also does better alone with a tutor than in a batch of thirty, because the tutor can slow down, rephrase and wait.",
        "Videos and guidebooks are useful for revision, but they do not look at your child's working. No video will notice that a graph has no units on the axis or that an explanation stops halfway.",
        "The table compares the four common routes side by side.",
      ],
      table: {
        caption: "Four ways to study IB or IGCSE from Rampurhat",
        columns: ["Route", "Knows the international syllabus", "Feedback on your child's work", "Practical fit for north Birbhum"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen per course and level", "Individual, after each lesson", "Needs steady home internet; no travel at all"],
          ["Local private teacher", "Seldom beyond state board and CBSE", "Individual", "Convenient, but thin on international papers"],
          ["Coaching centre in a larger city", "Usually JEE, NEET or board-focused", "Shared with the batch", "Long travel and fixed batch timings"],
          ["Self-study from videos and books", "Varies with the resource", "None unless someone checks", "Flexible but easy to drift"],
        ],
      },
    },
    {
      heading: "How do Tarapith, Puja and the heat shape the study calendar in Rampurhat?",
      paragraphs: [
        "Few small towns in Bengal have a calendar as strongly marked by one temple as Rampurhat has by Tarapith. Saturdays, amavasya nights, and above all the Kali Puja and Tara Puja periods, bring pilgrims in large numbers, and roads, lodgings and even mobile networks feel the strain. We avoid booking important lessons on those evenings and offer a make-up slot within the week.",
        "Durga Puja remains the longest break. Schools close for about a week or more around Mahalaya and Dashami, families travel, and boarders come home to a household full of visitors. Our plan is simple: heavier work in the weeks before, a light revision hour during the holiday, and a proper restart once the immersion processions are over.",
        "Weather matters as well. Rampurhat is on the drier, hotter western edge of Bengal, so April and May afternoons are fierce and loadshedding can coincide with them. The monsoon brings storms that cut signal. Winter is the best season for long study blocks, and we put the hardest topics there.",
        "The table lines up the local year against international exam dates.",
      ],
      table: {
        caption: "Rampurhat's local calendar against the IB and IGCSE year",
        columns: ["Months", "What happens locally", "What happens academically"],
        rows: [
          ["January to March", "Cool dry weather, Saraswati Puja, Holi", "School mocks; Cambridge February-March series; IB final preparation"],
          ["April to June", "Severe heat, power cuts, wedding season", "IB May exams and Cambridge May-June series; Edexcel May-June"],
          ["July to September", "Monsoon rain, school reopening, Mahalaya approaches", "IB results in July; new Class 9 and 11 terms begin"],
          ["October to December", "Durga Puja, Kali Puja and Tarapith crowds, then pleasant cold weather", "IB November session; Cambridge October-November and Edexcel November papers"],
        ],
      },
    },
    {
      heading: "Which universities and careers can follow IB or IGCSE for a student from Rampurhat?",
      paragraphs: [
        "A student from Rampurhat who completes the IB Diploma or IGCSE followed by A Levels has three main routes. One is an Indian university, where admission typically depends on Association of Indian Universities equivalence and, for central universities, CUET-UG. Another is a medical or engineering route, through NEET or JEE, both of which publish rules about boards and subjects. A third is study abroad, most commonly in the United Kingdom, Canada, Australia or the United States.",
        "Medicine has a particular pull in this part of Bengal. The town now has a government medical college, and many local families are connected to health care. NEET eligibility for international-board candidates includes subject and equivalence conditions, which change, so always read the current official notice before choosing subjects in Class 11.",
        "Engineers might aim for IIT Kharagpur, Jadavpur or NIT Durgapur through JEE, or look at foreign options in computing and engineering. Students interested in literature, history or social science often look at Presidency, Visva-Bharati or Delhi University.",
        "Our tutors help with subject mastery and exam technique. Choosing courses, preparing applications and writing personal statements are for the student and family.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for central universities",
        "NEET and JEE rules for international boards change, so verify each year",
        "IIT Kharagpur, NIT Durgapur, Jadavpur and Presidency are familiar targets",
        "Overseas study is a growing second route",
      ],
    },
    {
      heading: "How do IB Mathematics and the sciences work, and what trips Rampurhat students up?",
      paragraphs: [
        "IB Mathematics has two courses. Analysis and Approaches develops algebra, functions, calculus and proof and suits students heading towards engineering, economics or pure science. Applications and Interpretation leans on statistics, modelling and technology and is often chosen by those aiming at business, design or social science. Students from the Bengal boards usually arrive strong in algebra but unused to graphic display calculators and to writing justification in English.",
        "Physics, Chemistry and Biology each combine a content core with options and an Internal Assessment investigation. Physics questions often set an unfamiliar scene. Chemistry expects exact vocabulary and a tidy layout for calculations. Biology rewards accurate terms, and students who learned a process in Bengali may know it well yet lose a mark for an imprecise English phrase.",
        "Our approach builds a glossary lesson by lesson, shows full-mark model answers, and trains the command terms: state, outline, explain, discuss, evaluate. Timed questions teach pace.",
        "On Internal Assessments the tutor can discuss the question, variables and handling of data, and give comments on clarity. The student carries out the work and writes it.",
      ],
      bullets: [
        "Choose Mathematics AA or AI with university plans in mind",
        "Build an English glossary next to every new idea",
        "Drill command terms under time pressure",
        "Get feedback on Internal Assessments without ghost-writing",
      ],
    },
    {
      heading: "What should a Rampurhat student know about IGCSE tiers and subject choice?",
      paragraphs: [
        "Most Cambridge IGCSE subjects have a Core and an Extended tier. Core covers the basics and caps the highest grade, while Extended covers the whole syllabus and opens the way to A*. A student planning IB Mathematics, A Level sciences or engineering should normally be entered for Extended, and a diagnostic lesson helps settle the question.",
        "A typical set of subjects includes English, Mathematics, two or three sciences, a language and one or two electives. Rampurhat students often pick Bengali as their second language because it is a reliable scoring paper, while Hindi suits others. Computer Science, Economics and Art are popular electives and follow what the school offers.",
        "English quietly affects every paper. A child who reads well writes better Science and Humanities answers as well, so we encourage short daily reading and a weekly paragraph of writing even in slack months.",
        "Pearson Edexcel papers are built a little differently from Cambridge ones, so we confirm the board and the specification code before starting.",
      ],
    },
  ],

  process: [
    { title: "Message on WhatsApp", description: "Tell us the class, the board, the subject and whether a Kolkata school is on your list." },
    { title: "Receive a tutor profile", description: "We name a tutor who has taught your exact course and send the rate in writing." },
    { title: "Take the free lesson", description: "Test the tutor and your home connection together, with nothing to pay." },
    { title: "Fix a weekly evening", description: "Choose a slot that avoids Tarapith fair days, tuition hours and festival weeks." },
    { title: "Review each month", description: "Read the session notes, change the hours and swap the tutor if it does not fit." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "We match on syllabus code and level, not just the subject heading." },
    { title: "English built up gently", description: "Vocabulary and written reasoning are rebuilt for children from Bengali-medium schools." },
    { title: "Nothing to travel for", description: "The lesson is at your own table, which saves the rail trip to a bigger city." },
    { title: "Notes parents can read", description: "A few lines after each lesson record what was covered and what comes next." },
    { title: "Local calendar respected", description: "Tarapith crowds, Puja and summer cuts are planned around, not ignored." },
    { title: "Honest limits", description: "We coach and explain; we never write assessed work or promise a grade." },
  ],

  tutorsIntro:
    "IB Gram tutors teach from several Indian cities and work in Indian Standard Time, the same clock Rampurhat keeps. We choose each one by the courses they have actually taught.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Rampurhat?",
      answer:
        "We could not confirm one. Schools in Rampurhat, Nalhati and Murarai follow the West Bengal boards, CBSE or ICSE, and we found no authorised IB or Cambridge school in north Birbhum. The closest concentration of international schools is in Kolkata. Online tutoring lets a child prepare for that move or keep an international course going while at home. Please verify any school's status with the school itself.",
    },
    {
      question: "Will a tutor come to my house in Rampurhat?",
      answer:
        "No. Tutors do not visit homes in Rampurhat, and in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer is online home tuition: a live private lesson at your own desk with a tutor elsewhere in India. You keep the privacy and routine of tuition at home while reaching a specialist who does not live in Birbhum.",
    },
    {
      question: "Can my child follow the IB while studying in a Bengali-medium school here?",
      answer:
        "Not as an official IB student, since the IB is delivered only by authorised schools, but a child can prepare in advance. Online lessons build English writing, scientific vocabulary and the style of reasoning IB examiners expect. Many Rampurhat families start in Class 7 or 8 so that a move to an international school at Class 9 or 11 feels manageable.",
    },
    {
      question: "How are fees decided for IB or IGCSE tuition in Rampurhat?",
      answer:
        "Fees are quoted to each family and not published. They depend on the programme and level, the subject, the lesson length, the number of lessons a week and the tutor's experience. Teaching is online, so there is no travel cost. A written rate reaches you before the free trial, and you can reduce, pause or change tutor later without penalty.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No, they coach only. A tutor can help a student choose a question, plan a method, discuss how to handle data and comment on structure and clarity. Every sentence of the assessed work must come from the student. IB Gram does not write coursework, and a request for that would end the arrangement.",
    },
    {
      question: "Can a tutor explain in Bengali or Hindi?",
      answer:
        "Sometimes. IB and IGCSE papers are in English, so lessons run mainly in English, but a tutor who speaks Hindi can clarify a hard idea in that language first, and we build the matching English vocabulary straight after. Bengali is also available as a subject, through IB Bengali A and IGCSE Bengali as a second language, if the school offers it.",
    },
    {
      question: "When are the IB and IGCSE exams, and when should preparation begin?",
      answer:
        "IB Diploma exams are held in May and November. Cambridge IGCSE has February-March, May-June and October-November series, and Edexcel runs January, May-June and November sessions. Start content revision at least six months before the paper, then move to timed papers during the last eight weeks. The school or exam centre confirms the dates that apply to your child.",
    },
    {
      question: "What if power cuts or storms interrupt an online lesson?",
      answer:
        "It happens now and then in summer and during monsoon storms. Keep a charged laptop and a phone hotspot ready, and warn the tutor if bad weather is forecast. A missed lesson is rebooked within the week and the tutor shares worked notes. Evening slots tend to avoid the hottest hours when supply is most strained.",
    },
    {
      question: "Should my child take Core or Extended IGCSE?",
      answer:
        "Extended for most students who want to keep options open. Core limits the top grade and covers fewer topics, while Extended allows A* and prepares properly for IB or A Level Mathematics and sciences. A diagnostic lesson shows the present level and lets the tutor advise the tier with the goal in mind.",
    },
    {
      question: "Is IB Bengali or an IGCSE Bengali paper possible?",
      answer:
        "Yes, where the school and exam centre offer it. IB Bengali A is a literature course, while IGCSE Bengali as a Second Language tests reading and writing. Both let a student score well in a home language. Availability differs by school, so ask early, and we can plan preparation once the exact syllabus is known.",
    },
    {
      question: "Can lessons carry on if we move to Kolkata or another city?",
      answer:
        "Yes. The tutor, the weekly slot and the running notes stay with the student because the lessons are online. If the new school follows a different board, the tutor adjusts the plan within a session or two, and you can request a fresh match at any time if the fit changes.",
    },
    {
      question: "Do you teach both Mathematics AA and AI?",
      answer:
        "Yes, at Higher and Standard Level. Analysis and Approaches suits students aiming at engineering, physics or pure mathematics, while Applications and Interpretation suits those heading to business, design or social science. The school decides which courses are offered. A trial lesson on a typical problem shows which style your child finds more natural.",
    },
    {
      question: "My child is in Class 10 and weak at Physics. Is it too late?",
      answer:
        "Usually not. We start by locating where understanding first slipped, often in motion, energy or circuits, then rebuild with short problem sets. Two or three lessons a week for a few weeks steadies most students, after which a weekly lesson holds the pace. Starting early in the year leaves the most room.",
    },
    {
      question: "How do I start, and what does the free lesson involve?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, board and subject. We send a tutor profile and a written rate, then book a trial at a convenient time. The lesson is free, and if the tutor does not suit your child we will propose another.",
    },
    {
      question: "Is IB Gram linked to the IB, Cambridge, Pearson or any school?",
      answer:
        "No. IB Gram is an independent tutoring service and is not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel or any school on this page. School names appear only to show where students from Birbhum sometimes go. Always confirm fees, admissions and curriculum directly with the school.",
    },
    {
      question: "Do you teach students from Nalhati, Murarai and other parts of north Birbhum too?",
      answer:
        "Yes. Lessons are online, so the same tutors teach students anywhere in the district. What differs is local detail: school hours, power, fair-day traffic and broadband quality. Mention your town in the first message and we fit the timetable to it. Every family begins with the same free trial lesson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page for families in every state." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB support from the Primary Years to the Diploma." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "Handling six subjects and the core together." },
    { label: "IB Middle Years Programme tuition", href: "/programmes/myp/", description: "Criteria, concepts and the Personal Project." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles and the syllabuses each tutor has taught." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask for your free trial lesson." },
    { label: "IB and IGCSE tutors in Suri", href: "/suri/", description: "The Birbhum district headquarters, also taught online." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "The main city for international schools in West Bengal." },
    { label: "IB and IGCSE tutors in Dumka", href: "/dumka/", description: "A nearby Jharkhand town across the border, also served online." },
  ],

  closingHeading: "Start with a free online lesson at your own table in Rampurhat",
  closingBody:
    "Tell us your child's class, board and the paper that causes most worry. We will suggest a tutor who has taught that very course, send the rate before anything is booked and arrange a trial for an evening that suits your house. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
