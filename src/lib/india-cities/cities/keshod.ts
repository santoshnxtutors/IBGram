import type { CitySeoPage } from "../types";

/**
 * /keshod/ - IB and IGCSE tutoring page for Keshod, Junagadh district, Gujarat. No IB or Cambridge/Edexcel
 * IGCSE school is confirmed in Keshod, so stripSchools is empty and clusters use Rajkot, Vadodara and
 * Ahmedabad schools already verified on neighbouring pages. Online only.
 */
export const keshod: CitySeoPage = {
  slug: "keshod",
  countryName: "Keshod",
  countryNameLong: "Keshod, Gujarat",
  demonym: "Keshod",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons step around monsoon and cyclone warnings, Navratri nights, Uttarayan kite days and the school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.3000, longitude: 70.2500 },
  wikipedia: "https://en.wikipedia.org/wiki/Keshod",
  alternateNames: ["Keshod Gujarat", "Keshod Junagadh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Keshod | Online Tuition at Home",
  metaDescription:
    "Online IB and IGCSE tutors for Keshod, Gujarat: one-to-one DP, MYP, PYP, Cambridge and Edexcel lessons from home, with a free first lesson to try.",
  h1: "IB and IGCSE Tutors and Online Tuition at Home in Keshod",
  heroEyebrow: "IB & IGCSE ONLINE TUITION AT HOME IN KESHOD",
  heroSubtitle:
    "Tuition at home for Keshod students, delivered online: a private one-to-one lesson on a laptop with a teacher who has handled your child's precise IB subject or IGCSE paper before. Keshod has no school we can confirm for either curriculum, so the match is made by syllabus across India and your child meets the tutor over video.",
  primaryKeyword: "IB and IGCSE tutors in Keshod",
  imageAltText: "A student in Keshod, Gujarat, working through an IB Chemistry question on a laptop with an online tutor",
  secondaryKeywords: [
    "IB tutor Keshod",
    "IGCSE tutor Keshod",
    "IB home tuition Keshod",
    "IGCSE home tuition Keshod",
    "IB private tuition Keshod",
    "IB Maths tutor Keshod",
    "IGCSE Maths tutor Keshod",
    "IB Physics tutor Keshod",
    "IB Chemistry tutor Keshod",
    "IB Biology tutor Keshod",
    "IB DP tutor Keshod",
    "IB MYP tutor Keshod",
    "IB PYP tutor Keshod",
    "IGCSE online tuition Keshod",
    "IB tutor Junagadh district",
    "IGCSE tutor Keshod Gujarat",
    "online IB tutor Keshod",
    "IB tutor near Keshod airport",
  ],

  heroTrustPoints: [
    "Someone who has taught the very IB subject and level, or the IGCSE board, code and tier, that your child is sitting",
    "Everything happens live on screen, since a tutor at the door is a Gurugram and Delhi NCR service only",
    "A free first lesson on a real topic before you decide",
    "We stand apart from every school and exam authority named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB span" },
    { value: "CAIE & Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "One clock for both sides" },
    { value: "First lesson free", label: "Try, then choose" },
  ],

  intro: {
    heading: "What IB and IGCSE tuition looks like for a family in Keshod",
    paragraphs: [
      "Keshod is a town in Junagadh district in the heart of Saurashtra, known for its small airport, its groundnut and farm-produce trade, and its closeness to Junagadh, Somnath and the Gir forests. Gujarati is the language of the street and the classroom, and many local families have relatives in the UK, East Africa, the USA or the Gulf. That overseas link is exactly why the IB and IGCSE come up in conversation here.",
      "What the town does not have is a school teaching either curriculum. Local schools follow GSEB, CBSE or, in a few cases, ICSE, and we could not confirm any IB or Cambridge or Edexcel centre in Keshod. A child who needs one of these syllabuses is therefore usually returning from abroad, following an online international school, or preparing for a school in Rajkot, Vadodara or Ahmedabad.",
      "In practice that means the tutor is chosen on syllabus and not on distance. The lesson happens by video, with a shared whiteboard, marked past papers and a short written summary after each session. Tutors are in India and teach on IST, so evening hours suit a Keshod household without anybody adjusting for time zones.",
      "IB Gram is independent. It is not a school, and has no link to the IB, to Cambridge or to Pearson. Tutors explain, correct and coach, but never write an Internal Assessment, Extended Essay, TOK essay or any coursework a student hands in.",
    ],
    bullets: [
      "IB work from primary years through to Diploma subjects",
      "Cambridge and Edexcel IGCSE papers at every tier",
      "Home tuition delivered on a laptop, one learner and one teacher, with notes afterwards",
      "A new tutor on request if the first pairing does not click",
      "Nobody travels to Keshod homes; visits exist only around Gurugram and Delhi NCR",
    ],
  },

  programmesIntro:
    "Because no Keshod school teaches these programmes, each one reaches a family by a different route, often linked to a relative overseas or a planned move to a bigger Gujarat city. The notes below describe those real starting points.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, Nursery to Class 5",
      description:
        "Learning in the PYP is framed as inquiry into themes, and the last year ends in a pupil-led Exhibition. Because nothing is externally tested, the tutor's attention goes to fluent English reading, number confidence and the habit of researching a question.",
      countryNote:
        "Keshod children in the PYP are usually back from a year or more abroad, where a school taught the programme, and parents want reading and number work kept level while the child settles into Gujarati-medium surroundings.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6 to 10",
      description:
        "Every subject is graded on four published criteria, and each child finishes with a self-managed Personal Project. Pupils raised on GSEB-style papers have to learn to explain and weigh evidence in writing, not merely state the known answer.",
      countryNote:
        "No MYP school is present in Keshod, so families follow a school calendar set somewhere else, and tutoring includes tracking criterion deadlines as well as teaching the subject.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16-19, Class 11 and 12",
      description:
        "Students carry six subjects, half at Higher Level, alongside a knowledge-theory course, a 4,000-word essay and coursework stretched over two years. The papers arrive in May, after a long string of submission dates.",
      countryNote:
        "A Keshod student on the Diploma usually boards in another city or studies remotely, and calls most often for Maths, Physics, Chemistry, Economics and Business Management.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16-19, Class 11 and 12",
      description:
        "Two or more Diploma courses are combined with practical career-linked study, a reflective piece of writing and a skills strand. Hardly any Indian school runs it, yet the Diploma courses inside it are marked to the same yardstick as the full Diploma.",
      countryNote:
        "Requests from Keshod for the CP are uncommon. When one appears, tutoring goes to the Diploma courses and the reflective writing, leaving the framework to the school.",
    },
  ],

  subjectsIntro:
    "A Keshod family should name the exact course, since Maths Analysis and Approaches at Higher Level is a different experience from Applications and Interpretation at Standard. We start from subject, level and exam session, and then look for evenings outside monsoon thunderstorms and festival nights.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof for students headed to engineering or pure science. Higher Level Paper 3 asks for patience with unfamiliar problems that routine drill does not cover." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency, popular with commerce-minded students. A well-chosen exploration topic, such as crop prices or airport traffic, makes the coursework feel real." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with an investigation graded on method. Handling units and the data booklet quickly saves minutes in both papers." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry and bonding, then energetics and organic reactions. Students used to short-answer board papers have to learn to justify a longer argument." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, marked on careful use of command terms. Investigations need basic statistics to support a conclusion." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and real-world examples. Gujarat's trading culture gives local students a natural feel for supply, demand and trade." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to the case provided, with a research project on a real firm, for which a family business or local mill can be a useful subject." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text commentary, comparative essays and an oral. Students who speak Gujarati and Hindi at home often need the most practice speaking English at length." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and data structures, with a documented solution for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Named studies recalled, compared and evaluated, with extended answers that follow a clear line of argument." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking about coasts, forests and water. The Saurashtra coast and the Gir ecosystem offer strong regional examples." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, fieldwork design and evaluative writing, with coastal processes and cyclone hazards as natural topics." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and long essays, practised under timed conditions." },
    { name: "IB Hindi A or B", levels: "HL / SL", description: "Text types, written tasks and the individual oral for students who speak Hindi comfortably alongside Gujarati." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led coaching on exhibitions and prescribed titles, exploring ideas without writing anything for the student." },
  ],

  igcseSubjectsIntro:
    "Two boards and several tiers sit under the IGCSE name. A Keshod student's plan begins with the board, subject code and tier, for instance Cambridge 0580 Extended or Edexcel 4MA1 Higher, and with the first exam series the child is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended requires fast arithmetic and complete working. More marks are lost on misread questions than on missing topics." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Adds calculus, vectors and trigonometric identities early, a solid platform for IB Maths Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Much the same mathematics as Cambridge, worded and ordered differently, so the paper style needs separate practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling under time pressure and the alternative-to-practical paper for students without a laboratory nearby." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole work, bonding, then organic chemistry, with practical analysis skills built in early." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, human biology and ecology, with longer answers structured as examiners prefer." },
    { name: "IGCSE Accounting 0452", levels: "Grade 9-10", description: "Double entry, final accounts and ratios, a good fit for families with a trading background." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Applying business concepts to the stated scenario rather than repeating definitions." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams first, then balanced evaluation." },
    { name: "IGCSE Gujarati as a Second Language 0516", levels: "Grade 9-10", description: "Reading, writing and speaking tasks for students returning from abroad who want to formalise the language." },
  ],

  regionsTitle: "Keshod areas our online IB and IGCSE tutors support",
  regionsIntro:
    "With lessons online, this section is about context: the parts of Keshod where students live, how they link to Junagadh and Rajkot by road, and what a realistic evening looks like after the school day and the monsoon weather.",
  regions: [
    { name: "Keshod town centre", note: "The busy commercial core near the main bazaar; shops stay open into the evening, so a quiet upstairs room helps for a video lesson." },
    { name: "Airport road", note: "The corridor toward Keshod airport, with newer houses; some households here have relatives flying in from Mumbai or abroad." },
    { name: "Junagadh road", note: "The highway toward the district headquarters, about an hour away, used by students who travel for coaching or school." },
    { name: "Mandvi area", note: "A long-established residential area where many families are in trade or farming." },
    { name: "Station area", note: "Around the railway station, with easy transport to Rajkot and Junagadh." },
    { name: "Sharda Gram and outskirts", note: "Quieter edges of town with larger plots, where groundnut and farm-linked families live." },
    { name: "Agricultural market yard", note: "The mandi belt, where harvest-season evenings are busy with traders and transport." },
    { name: "Mangrol road", note: "The route toward the coast, used by families with links to Mangrol and Veraval." },
    { name: "Sukhnath Society belt", note: "A cluster of newer residential societies where professionals and returnee families from abroad tend to settle." },
  ],

  schoolDisclaimer:
    "No school in Keshod is confirmed to teach the IB or a Cambridge or Edexcel IGCSE, which is why the school strip is empty and the schools below are in other cities. IB Gram is an independent tutoring service and is not affiliated with, endorsed by or partnered with any school named here, the IB Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Rajkot",
      note: "The largest Saurashtra city, roughly two hours away by road, and the nearest one where we have verified an international-curriculum school.",
      schools: ["The Galaxy School, Rajkot"],
    },
    {
      city: "Nearby: Vadodara",
      note: "A longer trip east, with schools that some Saurashtra families consider when planning a full move for the Diploma years.",
      schools: ["Navrachana International School", "VIBGYOR High, Vadodara"],
    },
    {
      city: "Nearby: Ahmedabad",
      note: "The state's largest city offers the widest range of international schools, and quite a few Keshod families have cousins living there.",
      schools: ["Calorx Olive International School", "Fountainhead School, Ahmedabad"],
    },
  ],

  modesIntro:
    "In Keshod there is one delivery mode: a live video lesson with a single tutor. The three options below differ in rhythm and purpose. No tutor travels to a house here; in-person lessons are offered only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Steady weekly lessons",
      description:
        "One fixed hour each week: your child and the tutor look at the same whiteboard and the same marked paper. Most Keshod families begin here, and it suits every programme and subject.",
      bullets: [
        "The same teacher each week, who learns how your child thinks",
        "Worked answers shown live, then kept for revision",
        "Fits PYP, MYP, DP and IGCSE alike",
        "Short written note after each lesson",
      ],
    },
    {
      title: "Planned term with reviews",
      description:
        "A run of lessons with goals on paper and a check-in every few weeks. It is useful for families using an online international school, where no teacher nearby can see how coursework is going.",
      bullets: [
        "Goals agreed once the trial is over",
        "Regular look at grades and pace",
        "Helpful where coursework dominates",
        "A second weekly slot can be added before mocks",
      ],
    },
    {
      title: "Revision push before exams",
      description:
        "Two or three lessons weekly for a short stretch, nearly all of it timed papers marked fast. In Keshod we keep these blocks clear of storm days and of Navratri nights.",
      bullets: [
        "Papers sat against the clock",
        "Marking returned before the next paper",
        "Scheduled around festivals and weather",
        "Worth booking a month in advance",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do Keshod families ask about IB and IGCSE tutors?",
      paragraphs: [
        "Keshod has perhaps a little over a lakh inhabitants, and its identity is agricultural and commercial, with a steady pull toward bigger cities and abroad. Plenty of households have a cousin in Leicester, Nairobi, New Jersey or Dubai. When those cousins' children are in an international curriculum, the question of matching it at home arrives naturally.",
        "The common cases are practical. A family returns from abroad and wants their child to keep an IGCSE or IB course going instead of dropping into a GSEB class mid-year. Another family is planning to put a teenager into a school in Rajkot, Vadodara or Ahmedabad and wants preparation before the change. A third is following an online school from home.",
        "Whatever the reason, the obstacle is the same: there is no IB or IGCSE specialist in the neighbourhood. A good GSEB tutor knows the textbook, but the command words, mark schemes and coursework criteria of these syllabuses are different.",
        "IB and IGCSE tutors in Keshod are therefore chosen by syllabus and reached by video, with lessons on a shared whiteboard and a note afterwards that parents can read.",
      ],
      table: {
        caption: "Why a Keshod family might look for IB or IGCSE support",
        columns: ["Situation", "Typical student", "What the tutor does"],
        rows: [
          ["Return from abroad", "Child who studied IGCSE or IB overseas", "Holds the course steady during the move"],
          ["Planned school change", "Student targeting Rajkot, Vadodara or Ahmedabad", "Builds command-word and coursework habits beforehand"],
          ["Online school", "Child studying remotely from home", "Adds live teaching to recorded content"],
          ["Overseas university plan", "Older student with study abroad goals", "Builds subject depth and stronger predicted grades"],
        ],
      },
      bullets: [
        "No IB or IGCSE school in Keshod is confirmed",
        "Overseas family ties shape much of the interest",
        "Tutors are chosen by syllabus, not by distance",
        "Online lessons come with a written note after each session",
      ],
    },
    {
      heading: "How do GSEB and CBSE differ from IB and IGCSE for a student in Keshod?",
      paragraphs: [
        "GSEB and CBSE reward accurate reproduction of prescribed material, with questions that follow familiar patterns. IB and IGCSE ask a student to apply a principle in a new setting, argue a case or evaluate evidence. A student who scores well by revising the textbook can be caught off guard.",
        "Assessment structure differs too. In the IB Diploma, a substantial share of each grade comes from work completed before the exam, including Internal Assessments, the Extended Essay and Theory of Knowledge. IGCSE subjects vary: some have coursework or practical papers, and others are fully examined. A Keshod student is rarely asked to plan independently for months.",
        "Content depth is another difference. IB Higher Level Maths and sciences go beyond Class 12 in places, and IGCSE Extended sits above standard Class 10. A family with no counsellor nearby needs help to choose the right tier, which is why the first lesson includes a short diagnostic.",
        "None of this makes one route easier. Some students prefer steady criterion-based assessment to a single high-stakes paper. The aim is to teach what the new style expects so that ability shows.",
      ],
      table: {
        caption: "GSEB and CBSE compared with IB and IGCSE",
        columns: ["Aspect", "GSEB / CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["What earns marks", "Accurate recall of set content", "Analysis, evaluation and independent research", "Application and clear working"],
          ["Coursework", "Small internal marks", "IAs, Extended Essay, TOK", "Coursework or practical in some subjects"],
          ["Exam timing", "March board exams", "May and November sessions", "May-June, October-November, Edexcel also January"],
          ["In Keshod", "Every local school", "No local school", "No local school"],
        ],
      },
      bullets: [
        "Questions arrive in new contexts",
        "Coursework needs months of independent planning",
        "Tier choice needs early advice",
        "Changing boards is manageable with practice",
      ],
    },
    {
      heading: "How much does IB or IGCSE tuition cost in Keshod?",
      paragraphs: [
        "There is no published price on this page because no one figure would be fair. The rate depends on the programme, the level (Higher or Standard, Core or Extended), the subject, the lesson length and how specialised the tutor is. You get the number in writing before any lesson is booked.",
        "Niche courses tend to cost more, for example IB Physics HL or IGCSE Additional Mathematics, simply because fewer tutors teach them. Short, frequent sessions for younger PYP children are priced by the plan rather than by any fixed rule.",
        "Since lessons are online, nothing is added for travel. A Keshod family also avoids sending a child to Rajkot or Junagadh for weekday classes, which saves bus fares, hostel costs and time, often a real part of the total.",
        "The arrangement is light on commitment. The first lesson is free, terms can be paused, and a tutor can be replaced without penalty.",
      ],
      bullets: [
        "Programme, level, subject and lesson length set the rate",
        "Scarce courses cost more",
        "No travel charge for online lessons",
        "Free first lesson and no lock-in",
      ],
    },
    {
      heading: "Online tuition, local tutors, coaching classes or self-study in Keshod?",
      paragraphs: [
        "Coaching classes in Keshod and in Junagadh are built around GSEB, JEE and NEET, which suits the majority of local students. None of them is likely to run a batch for IGCSE Biology or IB Economics, so the option does not exist for these courses.",
        "Private tutors in town can be very good, especially with school-board subjects. The gap is specific to IB and IGCSE: the command words, the structure of full-mark answers and the marking of coursework. General teaching experience does not automatically cover those.",
        "Self-study can work for a disciplined student, particularly in IGCSE Mathematics where papers are widely available. It struggles with coursework planning and extended writing, because nobody can say whether an answer would earn the top marks.",
        "Online specialists fit the syllabus precisely but depend on connectivity. Monsoon thunderstorms and the occasional cyclone warning can cut power on the coast, so each plan has a fallback slot and written worked solutions sent afterwards.",
      ],
      table: {
        caption: "Support choices for IB or IGCSE students in Keshod",
        columns: ["Choice", "Syllabus fit", "Attention", "Limit in Keshod"],
        rows: [
          ["Coaching classes", "Built for GSEB, JEE and NEET", "Group", "No IB or IGCSE batches"],
          ["Town tutors", "Strong for school boards", "One to one", "Seldom taught IB or IGCSE before"],
          ["Self-study", "Depends on the student", "None", "No marked feedback on coursework"],
          ["Online specialist", "Matched to the course", "One to one", "Needs reliable power and internet"],
        ],
      },
      bullets: [
        "Coaching here serves other exams",
        "Town tutors rarely know IB or IGCSE marking",
        "Self-study lacks feedback",
        "Online plans include a fallback for outages",
      ],
    },
    {
      heading: "What does the Keshod school year look like, with monsoon, Navratri and Uttarayan?",
      paragraphs: [
        "Saurashtra's rhythm is set by the monsoon, which arrives in June and can bring heavy rain through September, and by the odd cyclone on the Arabian Sea coast. During those weeks road travel slows and power can drop, so lesson plans include backup slots and lighter loads.",
        "The festival calendar is lively. Janmashtami, Navratri with its late-night garba, Diwali and the Gujarati new year in autumn take up evenings and weekends. Uttarayan on 14 January fills rooftops with kites, and Maha Shivratri brings crowds to the Bhavnath fair at Junagadh. A sensible plan uses fixed weekday slots and treats weekends as flexible.",
        "Exam timing adds pressure. IB Diploma papers are held in May, with results in early July. Cambridge IGCSE sits in May-June and October-November, and Edexcel also offers a January window. For a May exam, revision should begin around February, before the summer heat arrives.",
        "If your child's school calendar differs, the tutor adapts. An exam date, a boarding term or a school assessment always takes priority.",
      ],
      table: {
        caption: "Keshod calendar and exam pressure points",
        columns: ["Period", "What happens", "Effect on lessons"],
        rows: [
          ["June-September", "Monsoon, cyclone risk, Janmashtami", "Backup slots; lighter loads in storm weeks"],
          ["October-November", "Navratri, Diwali, Cambridge November series", "Short breaks then focused catch-up"],
          ["December-January", "Uttarayan, mocks, Edexcel January window", "Plan around kite day; timed papers"],
          ["March-June", "Shivratri, DP and Cambridge May exams, heat", "Final revision and early-day or evening slots"],
        ],
      },
      bullets: [
        "Monsoon and cyclone warnings can interrupt lessons",
        "Navratri nights are best left free",
        "Uttarayan is a full-day festival",
        "Start May revision in February",
      ],
    },
    {
      heading: "Which universities and careers follow IB or IGCSE from Keshod?",
      paragraphs: [
        "Families in Keshod usually picture a child heading in one of three directions: a professional degree in India, a place in the family business, or study overseas, often where a relative already lives. Closer options include Junagadh Agricultural University and colleges in Junagadh, Saurashtra University in Rajkot and medical and engineering institutions across Gujarat.",
        "For Indian admission after IB or IGCSE, the first step is an equivalence certificate from the Association of Indian Universities. CUET-UG accepts such students, and eligibility for JEE and NEET depends on the subjects studied and the level reached. Some Gujarat institutions also have their own entrance routes, so it is wise to check before choosing subjects.",
        "For overseas study, predicted grades issued by the school in the last autumn carry heavy weight. UK universities often list Higher Level requirements, and US applications weigh grades beside essays and activities. Canada, Australia and the Gulf each have their own equivalence rules.",
        "Tutors do not run admissions advice. They can describe what grades a course usually expects and then concentrate on subject depth and exam technique.",
      ],
      bullets: [
        "AIU equivalence is needed for most Indian courses",
        "CUET-UG, JEE and NEET have separate eligibility rules",
        "Overseas family links shape many choices",
        "Predicted grades matter for applications abroad",
      ],
    },
    {
      heading: "How are IB Maths AA and AI and the sciences taught for a Keshod student?",
      paragraphs: [
        "Analysis and Approaches is taught around structure: function families, differentiation and integration, then the proof-style questions of Paper 3. Applications and Interpretation is taught around data, distributions and calculator technique, which many commerce-minded Gujarati students find approachable.",
        "Physics begins with units and estimation, then moves to derivations and graph work. Chemistry lingers on the mole before moving to equilibrium and organic mechanisms. Biology uses model answers so that a student sees exactly what a full-mark response contains.",
        "Internal Assessments are coached but never written. A tutor helps choose a workable question, explains each criterion and comments on drafts. Where a home lacks lab equipment, tutors suggest investigations using simple materials, simulations or open data.",
        "A typical lesson combines a brief recap, problems attempted aloud and one marked past-paper question. The whiteboard is saved so that a lesson cut short by a power cut can be replayed.",
      ],
      bullets: [
        "AA suits proof and calculus; AI suits data and modelling",
        "Sciences reward clear units and method",
        "IA coaching gives feedback, never text",
        "Saved whiteboards help after interruptions",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects suit a Keshod student?",
      paragraphs: [
        "The tier decides the ceiling. Core caps the top grade, while Extended opens the full range. With no school counsellor nearby, the first lessons include a diagnostic to show whether Extended is realistic or whether Core with stronger foundations is the wiser path.",
        "A student planning the IB Diploma afterwards benefits from Extended Mathematics and, where offered, Additional Mathematics. Extended sciences prepare for HL Physics and Chemistry. A commerce-minded student might take Accounting, Economics and Business Studies together with Mathematics.",
        "Cambridge and Edexcel word questions differently and run different exam windows, so the tutor matches the board on the entry form. A student who may switch between boards should practise both styles.",
        "Distance learners are free to choose subjects that a local school might never offer. Gujarati, Computer Science and Accounting are popular extras.",
      ],
      bullets: [
        "Diagnose before choosing Core or Extended",
        "Extended Maths and Additional Maths help a move to the Diploma",
        "Commerce subjects suit trading families",
        "Board choice changes the preparation",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Keshod family?",
      paragraphs: [
        "It starts with a brief: programme or board, subject and level, current grade, target session and the concern that prompted the enquiry. The answers shape the shortlist more than any profile could.",
        "Syllabus match comes first, because a poor match is hard to fix where no local alternative exists. Tutors are checked for qualifications, recent teaching of the exact course and how they handle internal assessment.",
        "The first lesson is where the decision happens. Your child tries a real topic, you see how clearly the tutor explains, and a written first-month plan follows.",
        "If the fit is wrong, we change the tutor. Fees are quoted in writing in advance and there is no long contract.",
      ],
      bullets: [
        "A brief shapes the shortlist",
        "Syllabus match is checked first",
        "First lesson free, plan in writing",
        "Tutor change whenever needed",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students in Keshod. Each match weighs the exact syllabus, level and exam session, and every lesson is online because no local school here offers either curriculum.",

  process: [
    { title: "Send a brief", description: "Tell us programme or board, subject, level, current grade and the evening hours that suit your Keshod household." },
    { title: "See a shortlist", description: "Syllabus fit comes first, and we explain why each tutor is proposed." },
    { title: "Try a first lesson", description: "Your child works a real topic on video at no charge and no obligation." },
    { title: "Confirm a plan", description: "A written first-month plan sets out topics, rhythm and reporting." },
    { title: "Begin regular lessons", description: "Online lessons with a note after each and periodic reviews." },
  ],

  whyPoints: [
    { title: "Syllabus-first matching", description: "Board, code, tier and subject level decide the match, not a broad international label." },
    { title: "A choice where none exists locally", description: "Keshod has no IB or IGCSE school, so tutors across India become the pool." },
    { title: "A free first lesson", description: "Decide on evidence from a real topic, not a profile." },
    { title: "Integrity respected", description: "Tutors coach assessed work and never write it." },
    { title: "Progress on paper", description: "Notes after lessons and reviews every few weeks." },
    { title: "Independent, flexible", description: "No school ties, no long contract, and a tutor change on request." },
  ],

  faqs: [
    { question: "Does Keshod have any IB school?", answer: "Not one that we could confirm. Schools around Keshod teach GSEB, CBSE or ICSE. A family wanting the IB usually keeps going with a course started overseas or in a metro, enrols with an online school, or plans a shift to Rajkot, Vadodara or Ahmedabad. Tutoring fits each of those paths and happens entirely over video." },
    { question: "Is any Cambridge or Edexcel IGCSE centre based in Keshod?", answer: "We found none. The closest school with a verified international curriculum that we know of sits in Rajkot, with more options in Vadodara and Ahmedabad. A Keshod IGCSE candidate normally studies with an online school or carries on from an earlier school, and the tutor is chosen to suit the exact board, code and tier." },
    { question: "Can a tutor visit our house in Keshod?", answer: "No. Nobody from IB Gram travels to homes in Keshod, because in-person sessions exist only in Gurugram and parts of Delhi NCR. What you get is online home tuition: your child stays at home, opens a laptop and works live with one teacher, using a shared whiteboard and marked past papers." },
    { question: "What will IB or IGCSE tuition cost us in Keshod?", answer: "The rate is not fixed, because it moves with the programme, the level, the subject, the length of each session and how much experience the tutor has with that syllabus. Rare courses like IB Physics HL usually cost more. The figure reaches you in writing before you commit, and since nobody travels, no transport is added." },
    { question: "We have just come back from abroad. Will my child lose the IB or IGCSE course?", answer: "Not if the course is picked up straight away. Keshod has no school running either syllabus, so continuity depends on a tutor who knows the course your child was following. We begin with what the old class had covered and where the next assessment falls, then build the weekly plan around that." },
    { question: "Does the first lesson really cost nothing?", answer: "Yes, the trial is free and binds you to nothing. Your child tackles a genuine topic from their own syllabus, and the tutor writes up a brief plan for the month ahead. After that you may continue, change the plan, or ask for another teacher, all without any charge for the trial." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "Never. Tutors teach, question and correct, but the assessed text belongs to the student alone. Expect help in picking a workable research question, in understanding what each criterion asks for, in planning data collection, and in honest comments on drafts. That boundary also keeps your child safe under IB academic-integrity rules." },
    { question: "Which Diploma subjects can a Keshod student get help with?", answer: "Most of them. Requests cluster around Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science, and tutors also guide students through TOK and Extended Essay planning. Hindi A or B support is possible for those who want it, and Gujarati-speaking students often do well in the oral." },
    { question: "Is tutoring available for MYP and PYP children too?", answer: "Yes, the whole IB continuum is covered. Middle years students in Keshod get help with criterion-led writing, science reasoning and Personal Project planning, while primary years children get short, regular sessions on reading, number sense and the research habits needed before their Exhibition." },
    { question: "How good is online teaching compared with a tutor in the same room?", answer: "For IB and IGCSE it works well. The whiteboard is shared, papers appear on screen and worked solutions are saved, so the experience is close to sitting side by side. It also lets a Keshod family choose a specialist anywhere in India. The one weakness is connectivity, so a backup slot is agreed at the outset." },
    { question: "What happens when a storm knocks out power mid-lesson?", answer: "The lesson moves to another slot that same week, and the tutor emails whatever working was covered. In heavy monsoon stretches or cyclone warnings on the Saurashtra coast we suggest a looser timetable with extra written practice between calls, so no momentum is lost." },
    { question: "At what point should tutoring begin?", answer: "The sensible moment is the start of a course, Class 9 for IGCSE and Class 11 for the Diploma, when gaps are cheap to close. Families who start halfway, perhaps after moving back to Saurashtra, still gain plenty from a plan that targets the highest-value topics and past papers first." },
    { question: "My son is leaving GSEB for IB. How hard is the switch?", answer: "Manageable, and the difficulty is usually the style of question rather than the content. Words such as justify, evaluate and compare need teaching explicitly, and coursework needs a different working rhythm. Most students find the format feels normal after several weeks of guided practice." },
    { question: "Can lessons avoid Navratri nights and Uttarayan?", answer: "Yes. Most Keshod families choose weekday evening hours, and weekends are kept flexible for garba, Diwali visits and kite day. If a family wants a second slot before mocks or a May series, that can be added online without rearranging anything else." },
    { question: "What if the tutor turns out to be wrong for my child?", answer: "Say so and we will find another. Progress is looked at every few weeks anyway, and a pairing that is not working is replaced rather than endured. Nothing ties you in, so lessons can also be paused over exams, travel or a family wedding." },
    { question: "Does IB Gram belong to any school, or to the IB, Cambridge or Pearson?", answer: "No. We are an independent tutoring service with no tie to a school, the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel. A school named on this page only shows where families in the region send children, and tutors work to each student's own timetable and published syllabus." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The wider map of cities and towns we teach online." },
    { label: "Home tuition in Gurugram", href: "/gurgaon/", description: "The single area where a tutor really does come to the door." },
    { label: "The IB Diploma explained", href: "/programmes/dp/", description: "Six subjects, the core and how coursework counts." },
    { label: "The IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria grading and the Personal Project in plain words." },
    { label: "The IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the final-year Exhibition." },
    { label: "IGCSE explained", href: "/igcse/", description: "How Cambridge and Edexcel differ, and what the tiers mean." },
    { label: "IB Maths, AA or AI", href: "/courses/ib/mathematics/", description: "A guide to picking the right Maths course." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse teachers by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us with your child's details." },
    { label: "Tutoring for Rajkot families", href: "/rajkot/", description: "Saurashtra's largest city and its verified international school." },
    { label: "Tutoring for Porbandar families", href: "/porbandar/", description: "A coastal neighbour facing the same school choices." },
    { label: "Tutoring for Veraval families", href: "/veraval/", description: "Gir Somnath's port town, a short drive from Keshod." },
  ],

  closingHeading: "Book a free first lesson for your Keshod student",
  closingBody:
    "Write with the board or programme, the subject and level, and which evenings work at home. A teacher who has handled that course will come back with trial times and no charge. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
