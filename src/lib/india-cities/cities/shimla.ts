import type { CitySeoPage } from "../types";

/**
 * Shimla (Himachal Pradesh). Checked against edustoke's Shimla listing and Wikipedia: the famous hill schools
 * (Bishop Cotton, Auckland House, St Edward's, Loreto Tara Hall, Jesus and Mary Chelsea) are CISCE or CBSE,
 * and Ivy International School is CBSE with only a Cambridge tie-up. No school could be confirmed as IB or
 * Cambridge IGCSE, so stripSchools is empty and clusters point to Chandigarh and Dehradun. Online only.
 */
export const shimla: CitySeoPage = {
  slug: "shimla",
  countryName: "Shimla",
  countryNameLong: "Shimla, Himachal Pradesh",
  demonym: "Shimla",
  flagCode: "in",
  countryCode: "IN",
  region: "Himachal Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots, moved earlier in December and January when snow and short days interrupt school and travel",
  lastUpdated: "2026-09-21",
  state: "Himachal Pradesh",
  stateCode: "IN-HP",
  geo: { latitude: 31.1048, longitude: 77.1734 },
  alternateNames: ["Simla", "Shimla Hills"],
  wikipedia: "https://en.wikipedia.org/wiki/Shimla",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shimla | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tutors for Shimla students, taught live online one to one: DP, MYP, PYP, Cambridge and Edexcel, with a free trial lesson before you commit.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shimla",
  heroEyebrow: "IB & IGCSE TUITION FOR SHIMLA, DELIVERED LIVE ONLINE",
  heroSubtitle:
    "Shimla is famous for boarding schools, yet the well-known ones follow ICSE, ISC or CBSE, and we found no confirmed IB or Cambridge campus on the hill. A family wanting private tuition at home for an IB or IGCSE student gets it here as live one-to-one lessons over video, since our tutors do not travel to Shimla.",
  primaryKeyword: "IB and IGCSE tutors in Shimla",
  imageAltText: "Shimla student following a live IGCSE Physics lesson on a laptop beside a window overlooking the hills",
  secondaryKeywords: [
    "IB tutor Shimla",
    "IGCSE tutor Shimla",
    "IB home tuition Shimla",
    "IGCSE home tuition Shimla",
    "IB private tuition Shimla",
    "IB Maths tutor Shimla",
    "IGCSE Maths tutor Shimla",
    "IB Physics tutor Shimla",
    "IB Chemistry tutor Shimla",
    "IB Biology tutor Shimla",
    "IB DP tutor Shimla",
    "IB MYP tutor Shimla",
    "IB PYP tutor Shimla",
    "IGCSE online tuition Shimla",
    "online IB tutor Himachal Pradesh",
    "IB tutor Sanjauli",
    "IB tutor Chotta Shimla",
    "IGCSE tutor New Shimla",
    "IB tutor Simla",
    "Cambridge IGCSE tutor Shimla",
    "Edexcel IGCSE tutor Shimla",
    "IB Economics tutor Shimla",
    "IB English tutor Shimla",
    "online IGCSE tutor Himachal",
  ],

  heroTrustPoints: [
    "Tutors matched on the exact IB or IGCSE course code, not on a general subject label",
    "Live lessons only in Shimla, because no tutor visits homes outside Gurugram and parts of Delhi NCR",
    "A first lesson with no charge, then a written rate if you carry on",
    "No link to any Shimla school, exam board or the IB itself",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages taught" },
    { value: "Cambridge & Edexcel", label: "IGCSE specifications" },
    { value: "One to one, online", label: "How Shimla lessons run" },
    { value: "IST", label: "Tutors on Indian time" },
  ],

  intro: {
    heading: "International curricula from the hills: the Shimla picture",
    paragraphs: [
      "Ask a Shimla parent about schools and the names come quickly: Bishop Cotton, Auckland House, St Edward's, Loreto Convent Tara Hall, Convent of Jesus and Mary. These are old, respected institutions, but on the sources we checked they run ICSE, ISC or CBSE rather than the IB or IGCSE. A city listing of Shimla schools showed only CBSE and CISCE affiliation, and one school with a Cambridge tie-up is still a CBSE school.",
      "So who searches for an IB tutor in Shimla? Mostly families whose plans reach beyond the hill: a child boarding in Dehradun or Chandigarh, parents returning from postings abroad, officers and professionals expecting a transfer, or a household that simply wants a global university route. For them, a specialist teaching through a screen is often the only practical way to get IB or IGCSE guidance close to home.",
      "The phrase home tuition needs a straight answer. IB Gram tutors do not come to houses in Shimla; in-person visits are limited to Gurugram and some parts of Delhi NCR. Online home tuition means your child sits at a desk in their own room and works with a tutor over video, one to one, on a schedule that respects the weather and the school day.",
      "IB Gram is independent. We hold no affiliation with the IB, Cambridge, Pearson or any school mentioned here, and our tutors never produce a student's Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Pearson Edexcel IGCSE",
      "Lessons in Indian Standard Time, with no travel on steep hill roads",
      "Free trial lesson, followed by a written rate and schedule",
      "Feedback in writing after every session",
      "No home visits in Shimla, live online sessions only",
    ],
  },

  programmesIntro:
    "The IB continuum can be followed from Shimla by online lessons at any stage. What follows shows how the role of a tutor shifts as a child moves from primary years to the Diploma.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Lessons are built around transdisciplinary themes and open questions instead of a fixed timetable of subjects. The year-end Exhibition asks children to investigate something they care about, with no external examination.",
      countryNote:
        "For a younger Shimla child, most of the value is language confidence and number fluency in short, playful sessions, since the local school day may follow a very different method.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against four criteria, and projects link ideas across disciplines. The Personal Project in the last year lets a student pursue an idea over several months.",
      countryNote:
        "Shimla students who arrive from ICSE or CBSE schools often need help reading the criteria descriptors and then writing to them. We support planning and reflection without touching the project's content.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students choose six subjects across groups, three at Higher Level, add Theory of Knowledge, the Extended Essay and CAS, and sit examinations in May or November. Internal assessments count towards each subject grade.",
      countryNote:
        "Candidates from Shimla usually register through a school in another city or sit privately, so a weekly online specialist becomes the classroom for demanding subjects such as Physics HL and Mathematics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of DP courses joins a career-related study, the reflective project and language development. It suits students who want a practical route into work or applied university study.",
      countryNote:
        "Few Indian schools run CP, and none in Shimla that we could confirm. We help with the academic courses and language component, and say plainly when a student is better placed elsewhere.",
    },
  ],

  subjectsIntro:
    "These IB Diploma courses come up most in enquiries from Shimla. We confirm the syllabus version and level with the student's registering school before the first lesson.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Algebra, calculus and proof, the natural choice for future engineers, scientists and economists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and calculator work, suited to students pointed at business, social science or design." },
    { name: "Physics", levels: "SL and HL", description: "From mechanics to fields, with data-booklet practice and guidance on the internal investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Bonding, energetics, equilibrium and organic chemistry, including how to lay out a calculation for full marks." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology, genetics, ecology and human physiology, written in precise command-term language." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A natural fit for Himalayan students, covering ecosystems, climate and resource use with real fieldwork examples." },
    { name: "Economics", levels: "SL and HL", description: "Market theory, macro policy and development, with a focus on accurate diagrams and current examples." },
    { name: "Business Management", levels: "SL and HL", description: "Strategy, marketing, operations and finance, including case-study reading for the externally set paper." },
    { name: "Geography", levels: "SL and HL", description: "Population, hazards and resource themes, plus fieldwork planning for the internal assessment." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysing non-literary and literary texts and preparing the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Reading, writing and speaking practice for the second-language route." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming logic and system fundamentals." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to behaviour, research methods and evaluative writing." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of knowledge questions and exhibition planning; students write their own essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers arrive in the May or June and October or November series, with Edexcel adding January for some subjects. Below are the courses Shimla families ask about, offered on both Cambridge and Pearson Edexcel lines.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with calculator and non-calculator paper technique." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Extra calculus and algebra for students bound for IB Maths AA or the science stream." },
    { name: "Physics", levels: "Core and Extended", description: "Motion, energy, waves, circuits and nuclear physics, with practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, periodic patterns, quantitative work and organic basics." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, nutrition, inheritance and ecology, plus data interpretation." },
    { name: "Environmental Management", levels: "Single tier", description: "Ecosystems, natural resources and human impact, a good match for hill-region students." },
    { name: "Geography", levels: "Single tier", description: "Physical and human themes with map and fieldwork skills." },
    { name: "Economics", levels: "Single tier", description: "Markets, trade and government, explained through examples students can relate to." },
    { name: "English as a First Language", levels: "Single tier", description: "Composition, summary and directed-writing skills." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Balanced practice across reading, writing, listening and speaking." },
    { name: "Computer Science", levels: "Single tier", description: "Computational thinking, pseudocode and programming." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Where offered by the board and series, with the specification code confirmed first." },
  ],

  regionsTitle: "Shimla neighbourhoods we teach online",
  tutorsIntro:
    "Shimla lessons are taught over live video by India-based tutors, each with experience of the IB programme or IGCSE specification shown on their card. The free first lesson is a chance to meet one before any decision.",
  regionsIntro:
    "Our lessons reach any Shimla address with a stable connection. Below are neighbourhoods that families mention, with a note on how hill geography shapes the school run and study timing.",
  regions: [
    { name: "The Ridge and Mall Road", note: "The historic centre, closed to most traffic. Older families and government-service households here sometimes want a quiet weekday evening slot after the day's walking." },
    { name: "Sanjauli", note: "A busy residential neighbourhood on the eastern side, close to the medical college. Steep lanes make evening travel tiring, which makes online lessons an easy fit." },
    { name: "Chotta Shimla", note: "A leafy locality on the way to Mashobra and popular with officers and professionals. Lessons work well on weekend mornings." },
    { name: "Lakkar Bazaar", note: "A compact area above the Ridge with narrow lanes and limited parking, where avoiding a commute helps a lot." },
    { name: "Summer Hill", note: "Home to the university area, so many academic households live here and ask about degree pathways." },
    { name: "New Shimla", note: "A newer planned residential area with larger apartments and families who move for work, often weighing international curricula." },
    { name: "Boileauganj and Tutikandi", note: "Mid-slope neighbourhoods near the old cantonment routes, with a mix of long-standing families and newcomers." },
    { name: "Kasumpti", note: "A lower residential area where families with government or corporate postings often need a schedule that survives a transfer." },
    { name: "Dhalli", note: "On the eastern approach, where fog and snow can delay the school return, so lessons are best fixed after the children are home." },
    { name: "Mashobra and Kufri side", note: "Higher villages where winter snowfall can cut roads for days, another reason online lessons are dependable." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Chandigarh",
      note: "About four hours down the hill by road, the tricity has confirmed IB and Cambridge options, and several Shimla families look at it for boarding or relocation. Local options in Shimla itself are limited.",
      schools: [
        "Strawberry Fields High School, Sector 26",
        "Firststeps School, Sector 26",
        "Oakridge International School, Mohali",
      ],
    },
    {
      city: "Nearby: Dehradun and Mussoorie",
      note: "Doon Valley is the region's boarding hub, and its international schools draw students from across the Himalayan belt, so Shimla students sometimes board there.",
      schools: [
        "SelaQui International School",
        "Ecole Globale International Girls' School",
        "Unison World School",
        "Woodstock School, Mussoorie",
      ],
    },
    {
      city: "In Shimla itself: ICSE and CBSE only",
      note: "Shimla's famous schools follow ICSE, ISC or CBSE and are not listed here as IB or IGCSE providers. We name none as offering either.",
      schools: ["No confirmed IB or Cambridge school in Shimla; we name none."],
    },
  ],
  schoolDisclaimer:
    "We are an independent service, unconnected to any school or examining body named here. Nearby schools are listed only as context where a published source shows an IB or Cambridge offering, and parents should confirm authorisation directly.",

  modesIntro:
    "Since Shimla is outside the areas where tutors travel, all three formats below run on screen. They differ by group size and by when in the year they suit best.",
  modes: [
    {
      title: "Private online lessons at home",
      description: "One student and one specialist, live over video, from the student's own room. This is the closest thing to home tuition available in Shimla, where tutors do not visit homes and in-person work is confined to Gurugram and parts of Delhi NCR.",
      bullets: ["Digital whiteboard and shared worksheets", "Fixed weekly slot in IST", "Written note after each lesson"],
    },
    {
      title: "Winter break catch-up blocks",
      description: "Schools on the hill often close for a long winter stretch, and this is a good moment for concentrated revision.",
      bullets: ["Daily or alternate-day sessions", "Past-paper practice with marking", "Topic gaps listed for parents"],
    },
    {
      title: "Paired lessons",
      description: "Two students on the same course and level can share one tutor, which suits siblings or classmates and spreads the cost.",
      bullets: ["Same course and level required", "Rate agreed in writing", "Move back to one to one whenever needed"],
    },
  ],

  sections: [
    {
      heading: "Do Shimla's well-known schools offer the IB or IGCSE?",
      paragraphs: [
        "On what we could verify, no. Bishop Cotton School, Auckland House School, St Edward's School and the convent schools of Shimla are associated with ICSE, ISC or CBSE, and a listing of the city's schools showed only those two boards. One school markets a Cambridge tie-up but is still affiliated with CBSE, which is not the same as teaching IGCSE.",
        "This matters because the town's reputation for elite schooling can mislead. Parents assume an IB or Cambridge option must exist somewhere on the ridge; it does not appear to. Board and school names change, so ask any school for its current affiliation number and check it on the board's own site.",
        "Where do international-curriculum students come from, then? Typically from families connected to Dehradun's boarding schools, the Chandigarh tricity, or Delhi, and from those who moved to Shimla for work after studying abroad. Their child may join an IB or IGCSE course through a school in another city and need a local support system.",
        "That support is what online tutoring provides: a specialist who knows the syllabus, available on weekday evenings without the drive down NH5.",
      ],
      bullets: [
        "Shimla's famous schools are ICSE, ISC or CBSE",
        "Cambridge partnership is not the same as IGCSE teaching",
        "Nearest confirmed options are Chandigarh and Dehradun",
        "Ask any school for its current affiliation before deciding",
      ],
    },
    {
      heading: "How does Himachal Board, CBSE, ICSE, IGCSE and IB compare?",
      paragraphs: [
        "Choosing between boards is really choosing between assessment styles. Himachal Pradesh Board exams draw largely on the prescribed textbooks, while CBSE and ICSE add more application and, in ICSE, more written English. IGCSE and IB give weight to explanation and unfamiliar contexts.",
        "The difference feels sharpest in essay subjects and in open-ended science questions. A student used to finding the textbook paragraph must learn to build an argument from data, which takes practice but is entirely teachable.",
        "For entrance-driven goals such as JEE or NEET, a CBSE route with concentrated coaching is normally more direct. For a UK, Canadian, European or Singaporean university, IGCSE followed by IB or A Levels tends to fit better. Neither choice is inherently superior; the right one depends on where your child wants to end up.",
        "If you are unsure, send us the child's current marks and target countries, and we will give an honest view, including when we think IB or IGCSE is not the right path.",
      ],
      table: {
        caption: "Board choices for a Shimla student at a glance",
        columns: ["Board", "What the papers reward", "Usual language", "Typical destination"],
        rows: [
          ["Himachal Pradesh Board", "Textbook knowledge and clear recall", "Hindi or English", "State universities, competitive exam preparation"],
          ["CBSE", "Concept plus application, national exams", "English or Hindi", "JEE, NEET, CUET-UG"],
          ["ICSE and ISC", "Full written answers, strong English", "English", "Indian universities, some overseas"],
          ["IGCSE", "Structured, data-driven questions with tiers", "English", "A Levels, IB Diploma, or CBSE Class 11"],
          ["IB Diploma", "Analysis, essays and internal assessments", "English", "Global universities and AIU-equivalent in India"],
        ],
      },
    },
    {
      heading: "What is the cost of IB and IGCSE tutoring for Shimla students?",
      paragraphs: [
        "We do not publish prices, and the reason is honest: the rate follows the tutor and the course, not the pin code. You will receive a figure in writing before booking, and the first lesson is free.",
        "Several factors decide the number. A tutor of IB Physics HL costs more than one for Class 7 maths because the preparation and the pool of qualified people differ. Rare subjects, such as Psychology or Environmental Systems, sit higher than very common ones. Sessions per week matter, and so does timing, since exam-season blocks are more demanding to prepare.",
        "Comparing with Shimla's local tuition is not straightforward. A neighbourhood batch is cheap because thirty students share one teacher, and it does not teach the IB or IGCSE mark scheme. A fairer comparison is a private specialist in Chandigarh or Delhi, where a Shimla family would also pay travel and time.",
        "If you want to keep cost predictable, ask for a fixed block of sessions focused on a single weak topic, or a paired lesson with another student. Both are possible and both are quoted up front.",
      ],
      bullets: [
        "Rates follow tutor level and course rarity",
        "Weekly hours and exam proximity change the total",
        "Written rate before any booking",
        "Free first lesson, no obligation to continue",
      ],
    },
    {
      heading: "Which is better for IB study: online tutoring, a local coaching class or a home tutor?",
      paragraphs: [
        "For a Shimla student, the honest answer is that online one-to-one is the option most likely to give access to somebody who has taught the actual IB or IGCSE course. Local coaching classes focus on board exams, JEE and NEET, and individual home tutors are rarely trained on international mark schemes.",
        "Self-study has a place. A capable Class 10 student can prepare for IGCSE Mathematics with past papers, though feedback on errors is the missing piece. For the Diploma, where the Extended Essay, internal assessments and command-term answers matter, a specialist saves a great deal of guesswork.",
        "Snow, fog and steep lanes push the balance further online. A lesson that would otherwise mean a wet, dark trip uphill becomes a warm room and a laptop.",
        "Many students combine them sensibly: a local class for board subjects and online lessons for IB or IGCSE subjects. Keep a realistic weekly load, and remember rest is part of preparation.",
      ],
      table: {
        caption: "Study options compared for Shimla",
        columns: ["Option", "Advantage", "Drawback", "Suits"],
        rows: [
          ["IB Gram online one to one", "Course-specific specialist, flexible IST times", "Requires steady internet", "DP, MYP and IGCSE students"],
          ["Local coaching class", "Peer group, near home", "Aimed at board exams and entrances", "CBSE subjects running alongside"],
          ["Local private tutor", "Familiar and in person", "Rarely trained on IB or IGCSE marking", "Younger children, homework help"],
          ["Self-study", "Free and flexible", "No expert feedback on errors", "Confident IGCSE Maths candidates"],
        ],
      },
    },
    {
      heading: "How do snow, summer tourism and exam sessions shape the year?",
      paragraphs: [
        "Shimla's climate is unusual for exam planning. At around 2,200 metres, the city gets snowfall that has lately arrived in January or early February, and schools may close or shift timing. Monsoon begins in June, adding landslide-prone roads and disruptions.",
        "The IB sessions fall in May and November, and IGCSE series in May or June and October or November. That leaves a conveniently quiet late autumn: cold and clear, with fewer distractions, ideal for mock papers before the November window.",
        "Summer brings tourists and heavy traffic on the Mall and the approach roads, and school buses run late. Online sessions dodge the crush; still, a fixed weekly slot matters more than a fresh promise each evening.",
        "Winter break is the best time for an intensive block. When the hill is snowed in, students who might otherwise be travelling can put in daily two-hour sessions, and this is where we see the largest improvement before the spring mocks.",
      ],
      table: {
        caption: "A Shimla year for an IB or IGCSE student",
        columns: ["Season", "Local conditions", "Study focus"],
        rows: [
          ["December to February", "Snowfall, cold, long school break in many cases", "Intensive catch-up and past papers"],
          ["March to April", "Clear, mild, new term", "Build topic coverage, internal assessment drafts"],
          ["May to June", "Tourist crowds, IB and IGCSE papers, monsoon begins", "Final revision, timed papers"],
          ["July to September", "Monsoon rain, landslide risk", "Foundations, flexible online slots"],
          ["October to November", "Clear autumn, IB November and IGCSE series", "Mock exams and last review"],
        ],
      },
    },
    {
      heading: "What are the university pathways from Shimla after IB or IGCSE?",
      paragraphs: [
        "The Association of Indian Universities treats the IB Diploma as equal to the Class 12 certificate, so a Shimla graduate can apply to Indian universities. Confirm each institution's own list of accepted subjects and minimum marks.",
        "For national entrance routes, CUET-UG welcomes IB and IGCSE-background students under its registration rules, JEE Main has conditions on mathematics, physics and chemistry, and NEET has its own biology, physics and chemistry requirements. Read the current information bulletin every cycle.",
        "Locally, students look at Himachal Pradesh University, the National Law University in Shimla, Indira Gandhi Medical College, and the Indian Institute of Advanced Study for research interest. Beyond the state, IITs, NITs, Delhi University and Chandigarh institutions are popular, while others pursue study in the UK, Canada or Europe.",
        "IGCSE graduates normally go on to A Levels, the IB Diploma or CBSE Class 11 first, so the university question is really a Class 11 question. It helps to start thinking about it in Class 9.",
      ],
      bullets: [
        "IB Diploma is Class 12 equivalent via the AIU",
        "CUET-UG, JEE Main and NEET have individual subject rules",
        "IGCSE is followed by A Levels, IB or CBSE Class 11",
        "Confirm every university's eligibility notice yearly",
      ],
    },
    {
      heading: "How is IB Mathematics, Physics, Chemistry and Biology taught online?",
      paragraphs: [
        "Mathematics Analysis and Approaches rewards fluent algebra and calculus, while Applications and Interpretation leans on statistics, modelling and technology. The two are different courses, not easier and harder versions, and choosing well matters.",
        "In online Physics and Chemistry lessons, the tutor writes on a shared digital board while the student works problems live, then gets a marked set to redo. Biology relies on precise vocabulary, so tutors practise short-answer writing with the mark scheme.",
        "The internal investigation is the trickiest part for any student far from a laboratory. Tutors talk through question design, error handling and data analysis; the experiment, data and write-up remain the student's own work.",
        "For Shimla students the stable weekly rhythm is what counts. A student who meets the same tutor every Tuesday and Saturday retains far more than one who crams before each test.",
      ],
    },
    {
      heading: "How do IGCSE Core and Extended tiers work, and which subjects should be chosen?",
      paragraphs: [
        "Tiered subjects offer Core papers, where the top grade is limited, and Extended papers, which reach the highest grades. A student who wants IB Mathematics, or any science stream, should aim for Extended.",
        "Typical subject packages include English, Mathematics, one or two sciences, a language such as Hindi, and electives like Economics, Geography, Environmental Management or Computer Science. Shimla students often pick Environmental Management or Geography because local landscape gives real examples.",
        "Cambridge and Pearson Edexcel differ in their paper layout and coursework, so we check the specification code first and tailor revision to it.",
        "Private candidates in Himachal need an authorised centre, usually in Chandigarh or Delhi, and must register before the deadline. We can explain the steps but do not register anyone.",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Message us with the subject, level, school and exam session, along with anything the student finds difficult." },
    { title: "See a proposed tutor", description: "We suggest someone who has taught the exact course and share a brief profile with weekly times in IST." },
    { title: "Attend a free lesson", description: "A real session on the student's own material shows how the teaching and pace feel." },
    { title: "Agree terms in writing", description: "If you wish to continue, the rate and timetable are written down before any payment." },
    { title: "Follow progress notes", description: "After each lesson a short summary arrives, and swapping tutors is simple if needed." },
  ],
  whyPoints: [
    { title: "Course-specific tutors", description: "Matching is by course code and level, such as IB Biology SL or IGCSE Extended Mathematics." },
    { title: "Straight talk on format", description: "Lessons for Shimla are online, and in-person visits exist only in Gurugram and parts of Delhi NCR." },
    { title: "Coaching that stays honest", description: "Tutors guide understanding but never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Weather-proof timetable", description: "Snowed-in days and monsoon landslides do not cancel a lesson that lives on a laptop." },
    { title: "India-based tutors", description: "Teaching happens on Indian Standard Time, so evenings and weekends are easy to fix." },
    { title: "Parent-friendly reports", description: "You get notes on what was covered and what to practise before the next session." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Shimla?", answer: "Yes, for live online lessons. IB Gram tutors teach from elsewhere in India over video, matched to your child's course and level. There is no IB tutor visiting homes through us in Shimla. Send the course and exam session, and we propose a tutor and a free trial slot in Indian Standard Time." },
    { question: "Do tutors come to my house in Shimla?", answer: "No. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Shimla, home tuition means an online lesson taken from home: one student, one specialist, live video and a shared whiteboard. Many families find this suits hill conditions, where snow and steep roads make travel unreliable." },
    { question: "Do Bishop Cotton or Auckland House teach IB or IGCSE?", answer: "Not according to the sources we checked. Shimla's best-known schools are associated with ICSE, ISC or CBSE. Since affiliations can change, ask the school for its current board affiliation. We name no Shimla school as offering the IB or IGCSE, because we could not confirm any." },
    { question: "Is there any IB or Cambridge school in Shimla?", answer: "We could not confirm one. A listing of Shimla schools showed CBSE and ICSE only, and a school with a Cambridge tie-up remained CBSE. The nearest confirmed options are in Chandigarh, Mohali and Dehradun. Verify with the IB or Cambridge directories before relying on any claim." },
    { question: "What does IB or IGCSE tuition cost in Shimla?", answer: "We publish no prices. The rate depends on the tutor, the course level, the subject's rarity and how many hours you book each week, not on the town. A written quote reaches you before booking, and the first lesson is free, so you can judge the teaching before paying anything." },
    { question: "Which subjects can Shimla students study with you?", answer: "Most IB Diploma subjects are covered, including Mathematics AA and AI, Physics, Chemistry, Biology, Environmental Systems, Economics, Business Management, Geography, English A and Hindi B. IGCSE options include Mathematics, sciences, Environmental Management and languages. Tell us the level and we confirm a tutor exists." },
    { question: "Will snow stop my child's lessons?", answer: "Not usually. Because sessions run online, snow closing a road does not cancel a lesson, unless there is a power or broadband failure. If that happens, we reschedule without penalty. We suggest a mobile hotspot as a backup during the heavy snowfall weeks of January and February." },
    { question: "Can you help a private IGCSE candidate in Himachal?", answer: "We teach the syllabus and prepare for papers, but exam registration is handled by an authorised centre. Private candidates usually register through a centre in Chandigarh or Delhi, well before the deadline. Ask the centre about practical and coursework arrangements before starting lessons." },
    { question: "Will a tutor write the Internal Assessment or Extended Essay?", answer: "No. Our tutors explain, question and give feedback, but they never write an IA, Extended Essay, TOK essay or any coursework. Those must be the student's own work. A tutor can help with structure, criteria and understanding what examiners look for, which is the honest and safe kind of help." },
    { question: "How is IB different from IGCSE?", answer: "IGCSE is normally taken at the end of Class 10, while the IB Diploma is a two-year programme for Classes 11 and 12. Many students do IGCSE first and then the IB or A Levels. Both use English-medium, structured questions that differ from the recall-heavy style of state board papers." },
    { question: "Is the IB Diploma valid for Indian universities?", answer: "Yes, the Association of Indian Universities treats it as equivalent to Class 12. Individual universities may set subject requirements, and CUET-UG, JEE Main and NEET each have separate eligibility rules. Read the current notice for every course you are considering, and ask us if you would like help decoding it." },
    { question: "Can my child follow IB lessons while attending an ICSE school in Shimla?", answer: "Yes, though the workload is heavy. Some students keep a local school timetable and take IB or IGCSE lessons online, sitting exams privately. It needs careful planning, particularly around school exams. We help set a weekly schedule so neither commitment is neglected." },
    { question: "How long does it take to find a tutor?", answer: "Usually a few days once we know the course, level and your available times. Popular subjects like Mathematics and Physics match faster than rare ones such as Psychology HL. If we cannot find a suitable specialist, we say so plainly instead of assigning an unsuitable tutor." },
    { question: "What internet speed do we need?", answer: "An ordinary broadband or steady 4G connection is enough for a video lesson. We check audio and video in the free trial, and advise on a backup hotspot. Hill locations sometimes have patchy signal, so telling us your area helps us plan sensibly." },
    { question: "Do you offer a free trial lesson?", answer: "Yes. The first lesson is free and uses your child's real material. It is not a sales call. Afterwards, if you wish to continue, we confirm the rate and weekly schedule in writing. Nothing is charged before you agree, and you may switch tutors if the fit is wrong." },
    { question: "How do I get started from Shimla?", answer: "Message +91 7439 368 115 on WhatsApp or write to ibgram24@gmail.com with the course, level, school and exam session. We reply with a suggested tutor and a trial time in IST. Enquiring costs nothing, and you decide afterwards whether to continue." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How our online IB and IGCSE service works for families in cities and hill towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The area where home visits are offered, alongside online lessons." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How tutors are selected and matched to each programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject packages for Class 9 and 10." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core requirements and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, projects and where tutoring helps." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared paper by paper." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, level and availability." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a short message to get a tutor match and trial slot." },
    { label: "IB and IGCSE tutors in Chandigarh", href: "/chandigarh/", description: "The nearest large city with confirmed IB and Cambridge schools." },
    { label: "IB and IGCSE tutors in Dehradun", href: "/dehradun/", description: "The boarding hub many Himalayan families look at." },
    { label: "IB and IGCSE tutors in Jammu", href: "/jammu/", description: "Another hill-region city where tuition is online." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson from your home in Shimla",
  closingBody:
    "Share the subject, level and exam session and we will suggest a tutor who has taught that course. Your first lesson costs nothing, terms come in writing afterwards, and no one has to brave the hill roads. Write on WhatsApp to +91 7439 368 115 or email ibgram24@gmail.com.",
};
