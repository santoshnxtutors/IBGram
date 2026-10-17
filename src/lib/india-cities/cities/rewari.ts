import type { CitySeoPage } from "../types";

/**
 * /rewari/ - IB and IGCSE tutoring page for Rewari, Haryana. Online-only delivery: the plan row has
 * homeTuition false, so tutors do not visit homes in Rewari even though Gurugram, where home visits do
 * run, is about 51 km away. No IB or Cambridge school is confirmed in Rewari, so stripSchools is empty
 * and the clusters point honestly to the Gurugram belt. Rendered with the shared CountryLanding
 * layout used by /gurgaon/.
 */
export const rewari: CitySeoPage = {
  slug: "rewari",
  countryName: "Rewari",
  countryNameLong: "Rewari, Haryana",
  demonym: "Rewari",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around the heavy December fog, the May and June furnace heat, Holi, Teej and Diwali travel, and the school-run timetable of whichever Gurugram campus your child attends",
  lastUpdated: "2026-09-21",
  geo: { latitude: 28.1990, longitude: 76.6183 },
  wikipedia: "https://en.wikipedia.org/wiki/Rewari",
  alternateNames: ["Rewari Haryana", "Revari"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rewari | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Rewari, Haryana: Diploma, MYP, PYP, Cambridge and Edexcel IGCSE, live one to one from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Rewari",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION IN REWARI, HARYANA",
  heroSubtitle:
    "Rewari is about 51 km from Gurugram, yet home tuition for a Rewari child is delivered online: a private, live, one-to-one lesson on a laptop with a tutor who has taught your child's exact IB or IGCSE course. Nothing inside the city is confirmed as an IB or Cambridge school, so each match follows the campus your child attends, most often somewhere along the Gurugram corridor.",
  primaryKeyword: "IB and IGCSE tutors in Rewari",
  imageAltText: "A Rewari student in Haryana learning IB Economics from an online tutor at a desk at home",
  secondaryKeywords: [
    "IB tutor Rewari",
    "IGCSE tutor Rewari",
    "IB home tuition Rewari",
    "IGCSE home tuition Rewari",
    "IB private tuition Rewari",
    "IB Maths tutor Rewari",
    "IGCSE Maths tutor Rewari",
    "IB Physics tutor Rewari",
    "IB Chemistry tutor Rewari",
    "IB Biology tutor Rewari",
    "IB DP tutor Rewari",
    "IB MYP tutor Rewari",
    "IB PYP tutor Rewari",
    "IGCSE online tuition Rewari",
    "Cambridge IGCSE tutor Rewari",
    "IB tutor Rewari Haryana",
    "IB tutor Dharuhera",
    "IB tutor Bawal",
    "online IGCSE tutor Rewari district",
  ],

  heroTrustPoints: [
    "Being close to Gurugram does not change the format: Rewari lessons are online, and home visits run only in Gurugram and parts of Delhi NCR",
    "Tutors are picked for the syllabus code and level, whichever campus your child sits in",
    "A free opening lesson, so nothing is paid before you have seen the teaching",
    "IB Gram is independent of every school named here, AIIMS, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Online", label: "Live lessons in your own home" },
    { value: "PYP to DP", label: "IB coverage across every stage" },
    { value: "IST", label: "One clock, no time-zone friction" },
    { value: "Free trial", label: "Try a lesson before deciding" },
  ],

  intro: {
    heading: "Private tuition for an international syllabus, from a railway and brass town south of Gurugram",
    paragraphs: [
      "Rewari has a way of surprising visitors. Its brass and metalwork tradition goes back to about 1535, its railway junction hosts India's last surviving steam locomotive shed (now a heritage museum), and the district has sent generations of soldiers to the armed forces. It lies roughly 82 km from Delhi and 51 km from Gurugram, with five national highways passing through, and an AIIMS campus is under development at nearby Majra.",
      "For a parent looking at the IB or a Cambridge or Edexcel IGCSE syllabus, though, the useful fact is about schools: we could not confirm one inside Rewari. The international campuses that matter sit along the Gurugram belt to the north, and the industrial corridor around Dharuhera and Bawal is where many working families have started to consider them. That distance shapes the whole service.",
      "It also explains an easy misunderstanding. Gurugram is where IB Gram sends tutors to the door, and Rewari is close enough to sound like the same place. It is not. Home visits run only in Gurugram and parts of Delhi NCR, so in Rewari the tuition is delivered on a screen, one to one, at the child's own desk. The advantage is that the tutor is chosen for the course, not for whoever lives within driving distance.",
      "The households who ask fall into a familiar set: families with a child at a Gurugram school who commute or plan to relocate, defence and government families thinking about postings, managers in the Dharuhera and Bawal plants, and parents who simply want an alternative to a purely board-exam route. Whatever the reason, our tutors coach and explain; they never write an Internal Assessment, an Extended Essay, a TOK essay or coursework for a student.",
    ],
    bullets: [
      "Live one-to-one lessons at home on Indian Standard Time",
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Suited to families linked to Gurugram schools or the Dharuhera and Bawal industrial belt",
      "A free trial lesson and a short written note after every session",
      "No tutor visits in Rewari; in-person home tuition runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Since no IB school is confirmed in Rewari, each programme reaches the city through a family plan: a child commuting or boarding toward Gurugram, a household about to move, or parents comparing routes before choosing a school. The four descriptions below read the programmes from that vantage point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, nursery to Class 5",
      description:
        "A PYP classroom turns big questions into weeks of connected work across language, number, science and society, ending in a self-directed Exhibition. There is no external exam, so private tutoring is about reading fluency, comfort with number and a child's willingness to ask and test a question.",
      countryNote:
        "PYP requests from Rewari usually mean a young child likely to join a Gurugram campus, where parents want early literacy and number routines settled first.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Marks are awarded against subject criteria, so a student has to show reasoning, not just an answer. The Personal Project in the last year rewards planning, reflection and steady weekly effort.",
      countryNote:
        "A Rewari MYP case is often a child bridging from a board school toward a Gurugram international campus, or trying to keep pace with unfamiliar criteria.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students carry six subjects over two years at Higher or Standard Level, along with Theory of Knowledge, the Extended Essay and service activities. The May examination series decides most of the final result, alongside internal assessments.",
      countryNote:
        "Diploma students linked to Rewari attend school along the Gurugram corridor or in another city, and the tutoring timetable follows that school's calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are paired with a career-related qualification and a reflective project. Few Indian schools offer it, but the Diploma courses within it are marked to the same standard.",
      countryNote:
        "Hardly any Rewari family raises this route; when one does, sessions focus on the Diploma courses included in the student's package.",
    },
  ],

  subjectsIntro:
    "A Gurugram commuter from Rewari needs something different from a child just starting IGCSE at Class 9, so before anything else we pin down the subject, the level, the exam session and the topic currently under study. That single exchange lets us choose someone who taught the same material lately, and count the weeks to the May or November papers.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Haryana board students often arrive strong on routine algebra and thin on justification, so we add proof and calculus reasoning, then timed papers, and fix the exploration topic early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and confident calculator use decide this course, so lessons run on real data and check that the exploration has honest numbers behind it." },
    { name: "IB Physics", levels: "HL / SL", description: "Choosing the right formula from the booklet and keeping units straight come first; after that the investigation is planned so that its results can be defended to a moderator." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, energetics and organic pathways eat most of the revision time, so we work them line by line and build write-up habits that serve the investigation." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks more than facts, so describe, explain and evaluate are practised separately and the investigation's statistics are tested for sense." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate diagrams and up-to-date examples, then policy evaluation and quantitative work at HL, with the commentary portfolio prepared step by step." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case papers pay for theory tied to the numbers in the stimulus; lessons use past-paper firms, and the internal assessment structure is planned early." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, the comparative essay and the Individual Oral each need separate rehearsal, with feedback on structure and evidence." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory and algorithm design are studied alongside actual programming, since the internal assessment needs working software with tidy documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies from each approach are learned accurately and evaluated, and essays are shaped as arguments with a clear line of reasoning." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems diagrams, case studies and comparison of viewpoints on water and land use drive the course, with the investigation refined step by step." },
    { name: "IB Geography", levels: "HL / SL", description: "Case study facts, data response and fieldwork write-ups are rehearsed until specific evidence comes without hunting." },
    { name: "IB Hindi A and B", levels: "HL / SL", description: "In a Hindi-speaking region, students can make Hindi a scoring subject; sessions cover literary analysis for Hindi A and written accuracy for Hindi B." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The exhibition and essay are tested like a debate, so each claim is defended and each counterexample answered." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE appear in the same school corridor but ask different things of a student, so the board, syllabus code and tier are settled before any tutor is named. Rewari students usually meet IGCSE through a Gurugram school or as a switch from the Haryana board or CBSE at Class 9.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended answers depend on visible method, so students learn to set out working line by line, with calculator and non-calculator papers practised apart." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors arrive fast, and the course is a strong bridge to IB Maths AA or A Level." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Formula rearrangement and units cost more marks than theory, and the alternative-to-practical paper has its own block." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Quantities in moles, then reactivity, then organic families, each layered on the last, with practice on the identification tables that practical papers repeat." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Heavily weighted topics such as inheritance, enzymes and transport get most of the hours, alongside timed reading of graphs the student has never met." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions and diagrams earn early marks, and longer evaluative answers separate the higher grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables and pseudocode are checked by actually running Python, so the logic is understood, not memorised." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed directed-writing and summary tasks, where a clean structure beats fancy words." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading tasks, letters and essays, with careful feedback on grammar and idiom." },
  ],

  regionsTitle: "Rewari neighbourhoods, roads and industrial belts we hear from",
  regionsIntro:
    "Lessons are online, so this list is context, not directions: where our families live, which roads and belts set daily rhythms, and how the pull of Gurugram and the industrial corridor shapes the hour a lesson suits best.",
  regions: [
    { name: "Model Town", note: "A settled residential area with professional and business households, and a common address for parents who commute toward Gurugram." },
    { name: "Jhajjar Chowk", note: "A busy junction on the north side of the city, close to shops and several schools, where traffic peaks at school run times." },
    { name: "Delhi Road", note: "The main route north toward Gurugram and Delhi, lined with newer housing and used by families with children at schools along that corridor." },
    { name: "Railway Road and the junction area", note: "The area around Rewari Junction and the heritage steam museum, popular with railway staff and families who travel often." },
    { name: "Old city and brass bazaar", note: "The dense centre where metalwork traditions persist and multi-generational homes are common, and evening slots suit shop closing times." },
    { name: "Dharuhera", note: "An industrial town on the Gurugram side of the district, home to engineers and managers working in large manufacturing units." },
    { name: "Bawal", note: "An industrial belt to the south-west with factory-linked colonies, drawing families who relocated for work from other states." },
    { name: "Majra Bhalkhi", note: "The site where AIIMS Rewari is being developed, a growing pocket likely to draw medical and academic families." },
    { name: "Manesar side", note: "The northern edge of the district toward the Manesar industrial area, where daily commuters look at Gurugram schools." },
  ],

  schoolDisclaimer:
    "Gurugram campuses are named here only so families can see where these syllabuses are taught within reach of Rewari. IB Gram is independent and has no partnership, contract or endorsement with any of them, or with the IB Organization, Cambridge Assessment International Education or Pearson.",
  schoolClusters: [
    {
      city: "Rewari itself",
      note: "No IB or Cambridge or Edexcel IGCSE school in Rewari could be confirmed, so none is named. Local schooling runs on the Haryana board and CBSE, with a few private English-medium options.",
      schools: [],
    },
    {
      city: "Nearby: Gurugram",
      note: "About 51 km north, Gurugram has one of India's largest clusters of IB and IGCSE schools, and is the natural target for Rewari families who consider an international curriculum.",
      schools: ["Pathways World School", "Lancers International School", "Scottish High International School", "GD Goenka World School"],
    },
    {
      city: "Nearby: Manesar, Dharuhera and Bawal corridor",
      note: "The industrial belt between Gurugram and Rewari is growing, but we have not confirmed IB or IGCSE campuses there, so families still look to Gurugram.",
      schools: [],
    },
  ],

  modesIntro:
    "Each format is live, one to one and online. They differ in rhythm: a steady weekly hour, a term plan with written reviews, or an exam sprint. No tutor visits homes in Rewari; the home-visit service exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly online hour",
      description:
        "One fixed hour a week with the same tutor, placed around school, the commute to Gurugram if there is one, and family routines.",
      bullets: [
        "One tutor throughout the term",
        "Papers marked as the student writes",
        "IB, MYP and IGCSE subjects",
        "Weekday evening or weekend slots",
      ],
    },
    {
      title: "Term plan with reviews",
      description:
        "The weekly hour plus a short note after every lesson and a fuller review every few weeks, useful for parents on shift work or frequent travel.",
      bullets: [
        "Summary after each session",
        "Goals reviewed regularly",
        "Good for younger learners",
        "Extra sessions before mocks",
      ],
    },
    {
      title: "Exam and holiday block",
      description:
        "A compact run of sessions before an exam series or during a break, built on timed papers and fast marking, scheduled around fog and festivals.",
      bullets: [
        "Timed papers against current mark schemes",
        "Quick feedback",
        "Planned around Holi, Teej and Diwali",
        "Book a few weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Rewari, and where do families go instead?",
      paragraphs: [
        "We searched for an IB World School or a Cambridge or Edexcel IGCSE centre in Rewari and confirmed none. Schooling in the city and district runs mainly on the Haryana board and CBSE, with a range of private English-medium schools. That is why this page names no local school, and why we would rather say so than pad a list.",
        "The practical choices sit to the north. Gurugram, some 51 km away, hosts a large concentration of IB and IGCSE campuses, and every school there has its own admissions rules, waiting lists and transport arrangements. Families weigh a daily commute, a move closer to the campus, a residential school elsewhere, or staying on a board syllabus at home.",
        "Rewari has its own social texture. Many households have a connection to the armed forces, the railways or government service, and the district has produced well-known soldiers and mountaineers. The industrial belt at Dharuhera and Bawal adds managers and engineers from elsewhere. These backgrounds often include exposure to postings, transfers and curricula, which is why international syllabuses interest them.",
        "Tutoring solves a different problem from admission. It keeps a child on a syllabus wherever the school is, and prepares one who is planning to join. The tutor is chosen for the course; the exam board sets one standard for everyone, so a Rewari child taught by someone in Pune is assessed exactly like a child in a Gurugram classroom.",
      ],
      table: {
        caption: "Where Rewari families reach IB and IGCSE schooling",
        columns: ["Place", "Access", "Offering"],
        rows: [
          ["Rewari", "Home city", "No IB or IGCSE school confirmed; Haryana board and CBSE schools"],
          ["Manesar, Dharuhera, Bawal", "Industrial corridor to the north and south-west", "No IB or IGCSE campus confirmed by us"],
          ["Gurugram", "About 51 km north", "A large cluster of IB and IGCSE schools"],
        ],
      },
      bullets: [
        "No Rewari school is named because none could be confirmed",
        "Households include service, industrial and business families",
        "Course-based matching works from any town",
        "AIIMS Rewari and IB Gram have no connection",
      ],
    },
    {
      heading: "How do the Haryana board, CBSE, IB and IGCSE differ for a Rewari student?",
      paragraphs: [
        "Most Rewari students study under the Haryana board or CBSE, with Class 10 and 12 boards as the big milestones. These reward accuracy in familiar question types, and coaching for JEE, NEET and other entrances is a strong culture in the region. IB and IGCSE begin from the same knowledge and then ask for explanation, method and application.",
        "Coursework is the clearest divide. IB students complete internal assessments in most subjects, an Extended Essay and a TOK essay over many months, and IGCSE students may have practical papers or coursework. Students used to a single high-stakes paper must learn to pace independent work across a year.",
        "Language shifts as well. Many Rewari children speak Hindi or Haryanvi at home, and studying every subject in English at IB depth is a real step. A tutor helps with subject vocabulary, command words and full-sentence answers, and Hindi can become a scoring IB or IGCSE language subject.",
        "Neither route is simply harder. IB and IGCSE suit students who enjoy explaining and investigating; boards can suit students who thrive on structure and volume practice. Parents should compare weekly workload, assessment style and university plans, not assume that international is automatically better.",
      ],
      table: {
        caption: "Haryana board, CBSE, and IB or IGCSE compared for Rewari",
        columns: ["Feature", "Haryana board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Local presence", "Most government and many private schools", "Many private schools", "None confirmed in Rewari"],
          ["Assessment", "Final paper, recall-led", "Final paper, some application", "Papers plus coursework and criteria"],
          ["Medium", "Hindi or English", "Hindi or English", "English"],
          ["Entrance route in India", "JEE Main, NEET, CUET-UG", "JEE Main, NEET, CUET-UG", "AIU equivalence, CUET-UG, JEE and NEET if eligible"],
          ["Recognition abroad", "Limited", "Known", "Recognised worldwide"],
        ],
      },
    },
    {
      heading: "What decides the fee for IB or IGCSE tutoring in Rewari?",
      paragraphs: [
        "A number printed on a web page would mislead most readers, so we give none. Every quote is written down before you book, and it follows the tutor and the course. A few factors explain almost all of the difference between one quote and another.",
        "Level comes first. A Class 6 MYP session belongs in a different bracket from an HL revision block. Next is how scarce the subject is among qualified teachers, then the frequency and length of sessions, and finally how recently the tutor taught your exact syllabus.",
        "For a Rewari household, the more interesting comparison is with the alternative. Getting a child to weekend coaching in Gurugram means fuel or a taxi, time on the highway and a lost Saturday. An online lesson replaces all of that with a laptop in the child's own room.",
        "We do not advise choosing by price alone. A mismatch wastes weeks, and the free first lesson exists so you can judge the teaching before any rate becomes a decision.",
      ],
      bullets: [
        "Level, from PYP to Diploma Higher Level",
        "Subject scarcity",
        "Session length and weekly frequency",
        "The tutor's recent teaching of your exact course",
        "No highway commute because lessons are online",
      ],
    },
    {
      heading: "Online tuition, coaching classes, home tutors or self-study: what works in Rewari?",
      paragraphs: [
        "Rewari has coaching institutes on most main roads, focused on board exams and on entrances such as JEE and NEET. They are useful for those goals. They rarely include a teacher who has taught IB Physics HL, MYP criteria or Cambridge Additional Mathematics, because too few students in one town would attend.",
        "Private tutors are flexible, and some local teachers can handle IGCSE-level content. The limits appear at Higher Level, in languages and with coursework, where a tutor must know how a moderator reads a research question. A private tutor is also one person's calendar.",
        "Online tuition from IB Gram starts from the syllabus. The tutor is selected for the code, every lesson ends with a short note, and a change is straightforward. The cost is screen time: the child needs a steady connection and a quiet corner, and the trial lesson shows early whether the format suits them.",
        "Self-study with official past papers works for disciplined students. Its weakness is uncorrected error: without an expert reading written answers, the same mistake can repeat for weeks. Many students pair self-study with a single weekly lesson.",
      ],
      table: {
        caption: "Study routes for IB and IGCSE compared, from Rewari",
        columns: ["Route", "Strengths", "Cautions"],
        rows: [
          ["Online home tuition (IB Gram)", "Tutor matched to the course, live and one to one, free trial, written notes", "Needs a laptop, stable internet and screen focus"],
          ["Coaching institute in town", "Peers, structure, entrance-exam culture", "Few or no IB and IGCSE specialists"],
          ["Private tutor at home", "Personal attention in familiar space", "Thin at Higher Level and coursework; depends on one person"],
          ["Self-study", "Low cost, builds independence", "No expert marking; errors persist"],
        ],
      },
    },
    {
      heading: "Fog, furnace heat and festivals: planning a Rewari school year",
      paragraphs: [
        "Rewari's temperature range is dramatic. Winter nights can approach freezing and summer days climb to about 46 degrees, with rain of about 553 mm falling mostly between July and September. December and January bring thick fog that slows roads and rails, which matters when mock exams fall in the same weeks.",
        "Exam dates come from the international calendar. IB papers are sat in May, with November for some schools; IGCSE runs a May and June series and an October and November series. Mocks often fall in winter, so we schedule evening lessons instead of early mornings, and keep a phone hotspot in mind for storms or outages in the monsoon.",
        "Festivals and weddings shape family timetables. Holi in spring, Teej in the monsoon and Diwali in autumn bring travel and visitors, and the wedding season around them adds more. The November IB and IGCSE sessions follow soon after Diwali, so revision needs to be front-loaded.",
        "Summer afternoons are unproductive for study. We favour early morning or late evening slots in May and June, and we agree sensible breaks after exams so that a student's energy lasts to results.",
      ],
      table: {
        caption: "Exam and local calendar for IB and IGCSE students linked to Rewari",
        columns: ["Months", "Academic event", "Local factor", "Tutoring emphasis"],
        rows: [
          ["December to February", "Mock exams and IA drafts", "Dense fog, cold nights", "Timed papers, evening slots"],
          ["March to April", "Final revision", "Holi, rising heat", "Full papers and mark-scheme habits"],
          ["May to June", "IB May and IGCSE summer series", "Peak heat up to 46 degrees", "Early or late slots, then rest"],
          ["July to September", "New academic year begins", "Monsoon, Teej", "Foundations and IA topic choice"],
          ["October to November", "IGCSE autumn and IB November exams", "Diwali, wedding season", "Front-loaded revision"],
        ],
      },
    },
    {
      heading: "What can a Rewari student do after IB or IGCSE?",
      paragraphs: [
        "A completed IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities, which opens Indian universities subject to each one's own subject and grade rules. IGCSE is a two-year stage before IB, A Levels or an Indian board.",
        "Students from Rewari often look at Delhi, Gurugram and the private universities across the capital region. CUET-UG accepts IB and IGCSE candidates, but domain subjects and the language paper must be checked against the target course. JEE Main and NEET have eligibility conditions that change, so confirm them with the conducting agencies.",
        "Families with defence or government backgrounds sometimes ask about the National Defence Academy or other services. Those have their own entry rules and age limits, so check the notification for each year instead of relying on any summary, including ours.",
        "For study abroad, predicted grades, tests and applications matter, and we help only with subject learning. No tutor can promise a place or a grade, and we do not.",
      ],
      table: {
        caption: "Pathways from IB and IGCSE for Rewari students",
        columns: ["Route", "What it needs", "What to check"],
        rows: [
          ["Indian university via IB Diploma", "AIU equivalence to Class 12", "Subject and grade rules for each university"],
          ["CUET-UG", "Registration and domain subjects", "Combinations accepted by the target course"],
          ["JEE Main, NEET, service entries", "Eligible Class 12 or equivalent", "Current rules in each year's notification"],
          ["Overseas degree", "Diploma or A Level, tests, applications", "Predicted grades and country deadlines"],
        ],
      },
    },
    {
      heading: "IB Maths AA or AI, and the sciences, for a Rewari student",
      paragraphs: [
        "Pick Analysis and Approaches for engineering, physics or pure mathematics: it stresses algebra, calculus and proof. Pick Applications and Interpretation for business, economics, life sciences or design: it leans on statistics and technology. Because each is offered at HL and SL, four separate papers hide behind those two names.",
        "The first lesson doubles as a diagnostic. Someone fast at algebra yet hesitant about proof needs a plan unlike a student whose arithmetic is slow, and a few past-paper questions reveal where the reasoning fails. That weak step is rebuilt before anything else is added.",
        "Physics HL is really applied mathematics, so units and rearranging formulas get checked in week one. Chemistry HL rewards a steady climb from moles through equilibrium to mechanisms, and Biology HL pays for precise wording. Every one of these has a personal investigation: the tutor can challenge the method, and the student writes the report.",
        "Class 11, first term, is the ideal moment. Starting after a poor mock is still worthwhile, only with fewer weeks and more hours.",
      ],
      bullets: [
        "AA suits engineering and physics; AI suits data, economics and design",
        "A diagnostic lesson shapes the plan",
        "Physics HL needs early attention to units and algebra",
        "Investigations are discussed with the tutor but written by the student",
      ],
    },
    {
      heading: "IGCSE Core or Extended: what should a Class 9 student in Rewari choose?",
      paragraphs: [
        "Two IGCSE boards, two tier systems. Cambridge uses Core and Extended for many subjects; Edexcel uses Foundation and Higher. Whichever board, the tier limits the highest grade a child can reach, so the discussion belongs before the Class 9 timetable is fixed. Extended leaves science and IB doors open, while Core may build confidence for a hesitant learner.",
        "Most students in this situation study Maths, English and three sciences, then add one or two electives from Computer Science, Economics or Business Studies. A child eyeing IB Maths AA gains from Additional Mathematics. Hindi, if it comes easily, is a subject to keep rather than drop.",
        "Is IGCSE tougher than the Haryana board or CBSE? At Core the content is comparable and at Extended it climbs, but what actually surprises students is the phrasing of questions, which asks for reasoning and method in settings they have not seen. Working through past papers pays off more than reading additional chapters.",
        "Before we match anyone we need three details: syllabus code, tier and exam session. If the school later shifts a child between tiers, the plan shifts too.",
      ],
    },
  ],

  tutorsIntro:
    "Look through teachers who work with Rewari students on PYP, MYP, the Diploma and both IGCSE boards. Each has taught the paper your child faces, and each lesson is a live video call from home, never a visit to your door.",
  process: [
    { title: "Share the basics", description: "Which syllabus, subject and level, recent marks, and the evenings free at home in Rewari." },
    { title: "Read the shortlist", description: "A couple of tutors with a sentence on why each fits your child's course." },
    { title: "Sit a trial lesson", description: "A live session on a genuine topic, with no payment and no promise." },
    { title: "Confirm month one", description: "Topics and timing are set out, and the fee is written down before you agree." },
    { title: "Settle into a weekly slot", description: "One regular online hour, a brief note each time, and an easy swap if it stops working." },
  ],

  whyPoints: [
    { title: "Syllabus over location", description: "Tutors are chosen by IB level or IGCSE code, never by how close they live to Rewari." },
    { title: "Good for a town near a big cluster", description: "Rewari sits near Gurugram's schools without having any confirmed itself, so matching by course replaces the commute." },
    { title: "Try before you pay", description: "A complimentary lesson lets your child meet the tutor on real material." },
    { title: "Original work only", description: "Explaining and marking are welcome; drafting anything assessed is not allowed." },
    { title: "Short notes, clear picture", description: "A few lines after each session and a wider review every few weeks." },
    { title: "Easy exit", description: "No lengthy contract and a new tutor whenever the pairing disappoints." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Rewari?", answer: "Write with the programme, subject, level and exam month. We reply with a shortlist of tutors from across India who have recently taught that exact course, since Rewari has no IB school we can confirm. Lessons are video calls at home. The first is free, and a different name is offered if the match feels wrong." },
    { question: "Are Cambridge and Edexcel IGCSE tutors available for Rewari students?", answer: "Yes, both boards are covered online. The papers reward different habits, so we ask for the board, code and tier first. Typical Rewari cases are a child at a Gurugram campus or one leaving the Haryana board or CBSE at Class 9. The first lesson is free." },
    { question: "Rewari is close to Gurugram. Will a tutor visit our home?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR, and Rewari is outside that service. Here the tuition is online: your child sits at their own desk with a laptop and joins a live session with a tutor chosen for the course, not for living nearby." },
    { question: "What does IB or IGCSE tuition cost in Rewari?", answer: "It varies with programme, level, subject scarcity, session length, frequency and the tutor's recent experience, and it is quoted in writing before you book. There is no price list because a single figure would mislead. One clear saving is the weekend trip to Gurugram that online lessons remove." },
    { question: "Which schools near Rewari offer IB or IGCSE?", answer: "We could confirm none inside Rewari. The nearest large group is in Gurugram, about 51 km north, with campuses such as Pathways World School and Lancers International School. The Manesar, Dharuhera and Bawal belt is unconfirmed, so we name nothing there. This page will change if a local school launches a programme." },
    { question: "My child commutes to a Gurugram school. Can a tutor still help?", answer: "Yes, and it is a very common arrangement. The tutor works from the school's unit plan and dates, and lessons take place online at home, so a long commute does not eat into study time. Evening slots after the return journey work well; Sunday mornings suit deeper revision." },
    { question: "Is the trial lesson really free?", answer: "Yes. The session is real teaching on a topic from the current course, by the tutor we suggest, and it costs nothing whether or not you continue. Not convinced? We put forward another tutor. Once you are, the first month and its fee are set out in writing." },
    { question: "Will you write my son's IA or Extended Essay?", answer: "No, and no reputable tutor should. Tutors can talk through a research question, unpack criteria, test whether the method is sound and react to a draft he wrote himself. Anything beyond that breaches IB authenticity rules and may endanger his result, and the same applies to the TOK essay and IGCSE coursework." },
    { question: "Which Diploma subjects can Rewari students take with you?", answer: "Most of the Diploma menu: both Maths courses, Physics, Chemistry, Biology, Economics, Business, English, Computer Science, Psychology, Geography, ESS, Hindi and the TOK core. Something unusual on your child's list? Send it over. An honest yes or no arrives before any money changes hands." },
    { question: "Do you teach younger MYP and PYP children too?", answer: "Yes, the whole continuum. For PYP the focus is reading, number sense and curiosity; for MYP it is the subject criteria and the Personal Project. Rewari parents who expect a child to join a Gurugram international school usually begin a term or two before admission." },
    { question: "Does a screen lesson match a classroom lesson?", answer: "Often it does, because the whiteboard, the marked paper and the live questioning are all still there and the teacher is a closer fit to the syllabus. Two conditions apply: reliable internet and a child who can stay engaged on a screen. Fifteen minutes into the trial, both usually become obvious." },
    { question: "How are tutors checked?", answer: "Before a tutor is introduced we look at degrees, at what they taught most recently in that subject and level, and at how well they understand marking criteria. The trial is the second filter. Parents are asked for honest feedback after a few weeks, and a weak pairing is replaced. Invented ratings or student counts are not part of how we describe anyone." },
    { question: "When is the right time to start tutoring?", answer: "The tidiest start is the first week of the course: Class 9 for IGCSE, Class 11 for the Diploma. A start after a poor mock is still worthwhile, though it needs more hours in less time. For MYP or PYP, begin when confidence in a subject first slips." },
    { question: "We are moving from the Haryana board to IGCSE. What changes first?", answer: "Question style. Early sessions cover command words, how much working to show, calculator use and whether Core or Extended fits. A child from a Hindi-speaking home also gets an English word list for each maths or science topic, which removes much of the early anxiety." },
    { question: "Do lessons run after school and on weekends?", answer: "Most do. Rewari families usually choose a weekday evening and a weekend morning. We avoid foggy winter mornings and May afternoons, move sessions around Holi, Teej and Diwali, and follow a boarder's own calendar for holiday blocks." },
    { question: "What if the tutor is not right for my child?", answer: "Tell us and we replace them. Each lesson ends with a short note, so trouble shows early, and we check in every few weeks anyway. No long contract binds you, so a change carries no penalty beyond the time needed to find a better match." },
    { question: "Is IB Gram linked to any school or to the IB or Cambridge?", answer: "IB Gram has no relationship of that kind. It answers to none of the Gurugram schools listed above, to the AIIMS project, or to the IB Organization, Cambridge and Pearson Edexcel. Those names are on this page as reference points for parents and nothing more." },
    { question: "What is the fastest way to reach you from Rewari?", answer: "WhatsApp +91 7439 368 115 or write to support@ibgram.com with the programme, subject, level and the times that suit you. A short list of tutors and an offer of a free lesson come back. Enquiry, trial and every lesson afterwards happen online." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how online IB and IGCSE matching works in other Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The area where an IB Gram tutor can visit a student at home." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices for Cambridge and Edexcel." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, the Extended Essay, TOK and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP units and the Exhibition for parents." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Bhiwani", href: "/bhiwani/", description: "Online IB and IGCSE support for families in western Haryana." },
    { label: "IB and IGCSE tutoring in Alwar", href: "/alwar/", description: "Matching for families just across the Rajasthan border." },
    { label: "IB and IGCSE tutoring in Palwal", href: "/palwal/", description: "Online support for families on the Haryana side of NCR." },
  ],

  closingHeading: "Book a free trial with an IB or IGCSE tutor in Rewari",
  closingBody:
    "Rewari to Gurugram is a short drive on the map and a long way for a Saturday class. Skip it: put your child's syllabus, present marks and free evenings into one message to support@ibgram.com or WhatsApp +91 7439 368 115, and a suitable tutor plus a trial lesson at no charge will follow. Lessons stay on screen, and no visit to a Rewari doorstep takes place.",
};
