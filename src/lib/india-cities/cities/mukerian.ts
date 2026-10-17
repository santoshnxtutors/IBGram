import type { CitySeoPage } from "../types";

/**
 * /mukerian/ - IB and IGCSE tutoring page for Mukerian, Hoshiarpur district, Punjab (Doaba/Kandi border
 * with Himachal, NRI-heavy region). Online only. No IB or Cambridge/Edexcel campus confirmed locally, so
 * stripSchools is empty; clusters use Amritsar and Chandigarh-tricity schools already named on published pages.
 */
export const mukerian: CitySeoPage = {
  slug: "mukerian",
  countryName: "Mukerian",
  countryNameLong: "Mukerian, Hoshiarpur district, Punjab",
  demonym: "Mukerian",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots avoid the wheat harvest fortnight in April, the paddy rush in October and the thick December fog",
  lastUpdated: "2026-09-21",
  geo: { latitude: 31.9500, longitude: 75.6167 },
  wikipedia: "https://en.wikipedia.org/wiki/Mukerian",
  alternateNames: ["Mukerian Hoshiarpur", "Mukerian Punjab", "Mukeria"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mukerian | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tuition for Mukerian, Hoshiarpur families with relatives abroad: one-to-one lessons, PYP to Diploma and Cambridge or Edexcel, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mukerian",
  heroEyebrow: "IB & IGCSE TUITION AT HOME FOR MUKERIAN FAMILIES",
  heroSubtitle:
    "Private home tuition for an IB or IGCSE student is hard to arrange in Mukerian, because the teachers who know these courses live in other cities. So the teacher joins by screen. IB and IGCSE tutors in Mukerian give live, one-to-one lessons over video, matched to the exact subject, with a written summary after each class and a first lesson that costs nothing.",
  primaryKeyword: "IB and IGCSE tutors in Mukerian",
  imageAltText: "A Mukerian student in Punjab following an online IB Mathematics lesson at a desk by the window",
  secondaryKeywords: [
    "IB tutor Mukerian",
    "IGCSE tutor Mukerian",
    "IB home tuition Mukerian",
    "IGCSE home tuition Mukerian",
    "IB private tuition Mukerian",
    "IB Maths tutor Mukerian",
    "IGCSE Maths tutor Mukerian",
    "IB Physics tutor Mukerian",
    "IB Chemistry tutor Mukerian",
    "IB Biology tutor Mukerian",
    "IB DP tutor Mukerian",
    "IB MYP tutor Mukerian",
    "IB PYP tutor Mukerian",
    "IGCSE online tuition Mukerian",
    "IB tutor Hoshiarpur district",
    "IGCSE tutor Dasuya",
    "online IB tutor Talwara",
    "IB tutor Bhogpur Punjab",
    "Cambridge IGCSE tutor Mukerian Punjab",
    "IB tutor near Pathankot",
  ],

  heroTrustPoints: [
    "Every lesson is live and private, with a tutor chosen for your child's exact IB course or Cambridge paper",
    "Tutors do not travel to Mukerian: in-person home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes before any commitment, and charges are quoted in writing in advance",
    "IB Gram is an independent service, not linked to the IB, Cambridge, Pearson Edexcel or any school named below",
  ],
  heroStats: [
    { value: "Doaba to desk", label: "A specialist without leaving Mukerian" },
    { value: "PYP to DP", label: "Primary years through Diploma" },
    { value: "May & Nov", label: "IB sessions we prepare for" },
    { value: "Free trial", label: "Try one lesson first" },
  ],

  intro: {
    heading: "Where the Beas canal meets the Himachal foothills, a different kind of syllabus",
    paragraphs: [
      "Mukerian lies in the north of Hoshiarpur district, close to where the Punjab plain starts to rise towards the Himachal foothills. The Mukerian hydel channel, fed from the Beas, runs through the area, and the town sits on a railway line that carries traffic between Jalandhar and Jammu. Pathankot is the nearest big hub to the north, Hoshiarpur city lies to the south, and Talwara and the Pong reservoir are within reach.",
      "Schooling follows the Punjab School Education Board and CBSE, with a few private English-medium schools in the town and in nearby Dasuya. We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Mukerian, and nothing we found suggested one in the immediate district. Families who want a campus with the Diploma must look to Amritsar or the Chandigarh region.",
      "Interest here has a distinct source. The Doaba region has some of the strongest emigration traditions in India, and many households have a cousin, a brother or a parent in Canada, the UK, Australia or the Gulf. A child in Mukerian may well be expected to join them for university, and an IB or IGCSE record can make that application smoother than a board result alone.",
      "That is why IB and IGCSE tutors in Mukerian make sense online. The tutor who has just finished a term of Diploma Chemistry teaches from wherever they live, your child sits at home with a laptop, and you receive a short report after the session. We say it plainly: tutors do not come to your house here, because home visits are limited to Gurugram and parts of Delhi NCR.",
    ],
    bullets: [
      "Online private tuition at home for Mukerian, Dasuya, Talwara and surrounding villages",
      "IB PYP, MYP, DP and CP, together with Cambridge and Pearson Edexcel IGCSE",
      "Lesson times set around crop seasons, fog and Baisakhi, Lohri and Diwali",
      "Coaching only: tutors do not write IAs, Extended Essays or TOK essays",
      "Online delivery only in this town, with no in-person visits",
    ],
  },

  programmesIntro:
    "No programme is taught at a school we could verify in Mukerian, so each one arrives in a family's life from outside the town: a relocation, a school abroad, or a decision to prepare early. The notes show how each stage tends to look here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around big ideas rather than separate subjects, and each child completes a group Exhibition at the end. For a tutor the practical work is simpler: reading aloud, neat writing, mental arithmetic and the confidence to ask why.",
      countryNote:
        "A Mukerian PYP child is often one who has just come back from Canada or the Gulf and needs the earlier school's habits kept alive while a Punjab school is chosen.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Across eight subject groups, students are judged against fixed criteria, and the course finishes with a Personal Project. Many Indian-board learners find the shift to explained reasoning and reflection the hardest part.",
      countryNote:
        "MYP support in this district usually belongs to a child in an Amritsar or Chandigarh hostel who spends holidays in Mukerian and wants tutoring to carry on at home.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Learners study six subjects, with three or four taken at Higher Level, plus Theory of Knowledge, a 4,000-word Extended Essay and creativity, activity, service. The final grade mixes coursework with May or November papers.",
      countryNote:
        "Diploma places lie outside the district, so tutoring here tends to be evening work in term time and heavier blocks in winter and summer holidays.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A cut-down set of Diploma courses is combined with a vocational pathway and a reflective project. It exists in very few Indian schools, so what we are asked to teach is usually the one or two academic courses within it.",
      countryNote:
        "Almost nobody in Mukerian asks about CP. If your child is on it elsewhere, we cover the academic courses and the school looks after the career component.",
    },
  ],

  subjectsIntro:
    "A Class 12 boarder tackling Physics HL during the Lohri break and a Class 8 child beginning Cambridge Mathematics alongside PSEB have little in common, so we ask first for the subject, the level and the next exam date, and leave the choice of person for later.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, complex numbers, functions and proof. Punjab-board students are quick at routine algebra but need coaching to lay out a reasoned argument." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and calculator technique, a practical option for commerce, business or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields, with attention to uncertainty, graphs and the way an extended answer is built." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work comes naturally; structure, kinetics and equilibrium need slower, repeated practice." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecosystems, with farmland, canals and wetland birds nearby as live examples for investigations." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Irrigation, groundwater decline and crop residue burning offer pointed Punjab case studies." },
    { name: "IB Economics", levels: "HL / SL", description: "Agricultural prices, remittances and migration give unusually concrete material for macro and development units." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations, finance and strategy for children from trading, transport and farm-machinery families." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, databases and the HL case study, taught through steady hands-on coding." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Close reading, comparison and timed essays, with detailed feedback on each piece." },
    { name: "IB Punjabi B", levels: "SL", description: "For students who want their home language assessed, covering reading, writing tasks and speaking." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, formal writing and the oral, taught in a regular weekly rhythm." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the internal experiment, an option often chosen by students aiming at overseas social science degrees." },
  ],

  igcseSubjectsIntro:
    "Since no Mukerian school is confirmed for Cambridge or Edexcel IGCSE, the students we meet are boarders, returning migrants or private candidates who want a recognised qualification alongside a PSEB or CBSE timetable. We start from the paper code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended practice on algebra, geometry and statistics, with credit for method written out in full." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometry and functions that prepare a student for Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, motion and thermal physics with a weekly drill on the alternative to practical." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity and organic basics, plus reliable recall of qualitative tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Plant and human systems, inheritance and ecology, using local agriculture as context." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply and demand, price controls and international trade, linked to the wheat and rice economy." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business forms, marketing and accounts, an early start for family-business children." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python, logic and data representation, assessed on paper and on screen." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Persuasive and narrative writing and summary, trained under timed conditions." },
    { name: "IGCSE Punjabi as a Foreign or Second Language", levels: "Grade 9-10", description: "Where a board option exists for the session, we build reading and writing ahead of the paper." },
  ],

  regionsTitle: "Mukerian and surrounding places we teach online",
  regionsIntro:
    "Lessons are on video, so this list is context: it shows which school catchment a family belongs to, how the evening connection behaves and how far the nearest city with a proper international campus lies.",
  regions: [
    { name: "Mukerian town", note: "The commercial centre and tehsil seat, with a railway station, a busy bazaar and a mixture of government and private schools." },
    { name: "Mukerian hydel channel belt", note: "Villages along the irrigation and power channel, mostly farming households whose children board in town or at distant schools." },
    { name: "Dasuya", note: "A neighbouring town to the south-west with its own colleges and schools, and a common base for families commuting short distances." },
    { name: "Talwara", note: "A hill-edge township near the Pong reservoir, tied to the Beas projects and to Himachal." },
    { name: "Hoshiarpur city", note: "The district headquarters to the south, with the largest choice of coaching, schools and colleges in the district." },
    { name: "Pathankot", note: "The big hub to the north, with a cantonment, many Army and Air Force families and a regular flow of transferred students." },
    { name: "Bhogpur", note: "A smaller town on the Jalandhar side with a long tradition of overseas ties and a sugar mill economy." },
    { name: "Garhdiwala", note: "A tehsil town to the south known for its markets and for the many local families with members abroad." },
    { name: "Kandi belt villages", note: "Rain-fed foothill villages where connectivity and schools are thinner, and online learning matters most." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre in Mukerian or its immediate district, so the school strip stays empty. The campuses below are in other cities and are listed only to show where physical options exist. IB Gram is independent of every school named here and of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Amritsar",
      note: "Roughly 130 km by road. Amritsar has IB campuses and is the most practical large city for Mukerian families looking at a hostel place. Local options in Mukerian itself are limited.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "A longer trip of around four hours, but the tricity has the widest range of IB and Cambridge schools in this part of north India.",
      schools: ["Oakridge International School, Mohali", "Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Reachable by train from Pathankot and Jalandhar, and the usual choice when a family decides on a full residential Diploma.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "In Mukerian the shape of each lesson never changes: a tutor and a student on live video. What differs is how often they meet and how that suits a household tied to farm and festival dates.",
  modes: [
    {
      title: "Term-time evening classes",
      description: "One or two regular evenings every week, slotted after school and before dinner, tracking what the school is covering.",
      bullets: [
        "The tutor is selected for the course, not the district",
        "Suited to PYP, MYP, DP and IGCSE learners",
        "Practice papers are worked and marked together on screen",
        "Continuity with the same tutor all term",
      ],
    },
    {
      title: "Lessons with a reporting loop",
      description: "Regular classes plus a brief written account afterwards and a call with parents every few weeks.",
      bullets: [
        "Each note lists topics covered, homework and the next target",
        "Helpful when a parent works abroad and wants to follow progress",
        "A second weekly slot can be added before mock exams",
        "Gaps are caught early rather than at the final paper",
      ],
    },
    {
      title: "Winter and summer revision camps",
      description: "Daily sessions across a fixed fortnight, aimed at hostel students on holiday and at private candidates before an exam series.",
      bullets: [
        "Timed papers with prompt feedback",
        "Planned around Lohri, Baisakhi and the harvest",
        "Mornings or evenings depending on the household",
        "Booking a few weeks ahead secures the preferred tutor",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do Mukerian families with relatives abroad ask about the IB and IGCSE?",
      paragraphs: [
        "Ask around in Mukerian and Dasuya and almost every extended family has someone overseas. For a child of such a family, the question is not whether to study abroad, it is when and with what record. Canada, the UK and Australia all read IB and Cambridge results without difficulty, which makes an international qualification a practical piece of planning rather than a luxury.",
        "Another group are returnees. A family spends years in Canada or the Gulf, comes back to look after land or elderly parents, and finds the child's old syllabus has no local equivalent. Tutoring online keeps that learning going while the household decides where the child will study next.",
        "A third strand comes from the Army and Air Force presence around Pathankot. Service families change stations, and a course that follows the child from posting to posting has obvious value. Tutors teach the same content wherever the family lands.",
        "Lastly, a few parents just want a more demanding challenge for an able child, and an IGCSE paper is a clear, bounded way to test that ambition without leaving the current school.",
      ],
      table: {
        caption: "Why Mukerian families look at international syllabuses",
        columns: ["Family pattern", "Goal", "What tutoring does"],
        rows: [
          ["Relatives in Canada, UK or Australia", "University abroad on a recognised record", "Matches a tutor for the target IB or IGCSE subjects early"],
          ["Returned from abroad", "Keep the old syllabus alive", "Bridge lessons while a school is chosen"],
          ["Service families around Pathankot", "Portable syllabus across postings", "One tutor who continues through transfers"],
          ["Ambitious PSEB or CBSE families", "A harder test of ability", "IGCSE-style practice beside the school timetable"],
        ],
      },
    },
    {
      heading: "How hard is the move from PSEB or CBSE to IGCSE or the IB?",
      paragraphs: [
        "In most cases IGCSE is the easier first step and the IB Diploma is a bigger leap. A Punjab Board syllabus is built on set chapters and a final recall exam. CBSE leans more on applied NCERT questions. Cambridge IGCSE tests the same sort of content but expects more explanation in sentences, while the Diploma asks for research, reflection and extended writing across all six subjects.",
        "English is the quiet hurdle. Many Punjabi-medium or bilingual students read English well but write it rarely at length, and command words like discuss, evaluate and justify mean something specific to an examiner. Expect a couple of terms of steady written practice before the answers look fluent.",
        "On the other side, Punjab students bring strengths worth naming: fast arithmetic, a habit of solving many problems and a willingness to work long hours. A good tutor redirects that discipline instead of discouraging it.",
        "The table gives a side-by-side view for students starting from Hoshiarpur district.",
      ],
      table: {
        caption: "PSEB, CBSE, IGCSE and IB Diploma compared for a Mukerian student",
        columns: ["Feature", "PSEB", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Teaching style", "Prescribed chapters", "Concept and application", "Content plus explained reasoning", "Inquiry, essays and projects"],
          ["Medium", "Punjabi, Hindi or English", "English or Hindi", "English", "English"],
          ["Route to JEE, NEET, CUET", "Direct", "Direct", "AIU equivalence plus separate preparation", "AIU equivalence plus separate preparation"],
          ["Final assessment", "Annual board papers", "Board papers", "Papers with optional coursework", "Papers, IA, Extended Essay, TOK"],
        ],
      },
    },
    {
      heading: "What decides the price of IB or IGCSE tutoring in Mukerian?",
      paragraphs: [
        "We do not print rates on this page. Instead we agree a figure with you in writing before the first lesson, and that first lesson is free. The figure is shaped by the subject, the level, how long each lesson runs and how deep the tutor's experience with that course is.",
        "A Higher Level Diploma science needs more preparation and fewer tutors have recent experience of it, so it normally costs more than Class 5 reading support. Someone who has examined for the IB or taught the Cambridge Extended tier for years will also quote above a recent graduate. Frequent lessons can bring a different arrangement from occasional ones.",
        "Worth weighing is what the alternative really costs. Moving a child to a hostel in Amritsar or Chandigarh for coaching adds rent, meals and bus fares, and takes them out of the family home in a pressured year. One online lesson a week sidesteps all of it.",
        "For a quotation, WhatsApp us the board, the subject, the level and the lessons per week you have in mind, and a clear figure comes back in writing.",
      ],
    },
    {
      heading: "Online tutor, coaching centre, village teacher or self-study: which suits a Mukerian student?",
      paragraphs: [
        "Hoshiarpur and Pathankot have their coaching centres, mostly for PSEB boards, JEE, NEET and IELTS. IELTS in particular is everywhere in this region. None we know of covers IB Analysis and Approaches or Cambridge 0580 Extended, and we would advise any parent to ask directly before assuming.",
        "A capable local teacher can be excellent at ordinary school Maths and still never have met an IB rubric. Self-study with past papers works for a strongly self-driven student, but written answers do not get marked, which is exactly where IB and IGCSE marks are earned.",
        "An online one-to-one tutor sits in the gap: a specialist in the very course, fitted to your timetable, with attention on one child. The trade-off is the need for steady internet and a quiet place to study.",
        "The table lines up the options.",
      ],
      table: {
        caption: "Study routes for an international syllabus from Mukerian",
        columns: ["Route", "Fit with the syllabus", "Flexibility", "Main caution"],
        rows: [
          ["Online one-to-one tutor", "Teaches the exact IB or IGCSE course", "Set with the family", "Needs stable internet and power"],
          ["Coaching centre in Hoshiarpur or Pathankot", "PSEB, JEE, NEET and IELTS", "Fixed batches", "No IB or Cambridge teaching confirmed"],
          ["Local school teacher", "General school subjects", "Flexible", "Unlikely to know IB or IGCSE mark schemes"],
          ["Self-study with past papers", "Depends on the student", "Anytime", "Nobody marks the written answers"],
        ],
      },
    },
    {
      heading: "What does the Punjab farm and festival calendar do to the exam year?",
      paragraphs: [
        "The IB Diploma exams run in May and November. Cambridge IGCSE sessions fall in February-March, May-June and October-November, and Pearson Edexcel offers January, May-June and October-November. A private candidate has to fix an exam centre and an entry date months before, so the first conversation should happen at least half a year ahead.",
        "In Punjab the farming year sets the household mood. Wheat is harvested in April, paddy in October, and families with land are hard to reach in those fortnights. Add Baisakhi in mid-April, Diwali in autumn and Lohri in January, when relatives gather and the house fills up.",
        "Weather matters too. May to June is very hot, with power demand high and cuts likely. July to September brings monsoon rain and, in some years, rising water in the Beas and its canals. From mid-December to January the fog can be thick enough to delay trains and keep schools closed.",
        "The table suggests how to pace the year.",
      ],
      table: {
        caption: "Planning an exam year in Mukerian",
        columns: ["Months", "Land, weather and festivals", "What to do"],
        rows: [
          ["December to February", "Fog and cold; Lohri; Cambridge and Edexcel winter series", "Evening lessons; keep timed papers in the weekly plan"],
          ["March to May", "Wheat harvest in April, Baisakhi, IB May exams, school board papers", "Short, focused sessions; intensive revision just before exams"],
          ["June to September", "Heat, power cuts and monsoon", "Reserve a spare slot each week; use early mornings if evenings fail"],
          ["October and November", "Paddy harvest, Diwali, IB November session, Cambridge and Edexcel autumn series", "Holiday blocks for hostel students; lighter load on harvest days"],
        ],
      },
    },
    {
      heading: "Where do Mukerian students go after IB or IGCSE?",
      paragraphs: [
        "For many, the destination is abroad. Canada, the UK and Australia are the usual choices, and a predicted IB score or strong IGCSE results support applications and later visa paperwork. The relatives already living there often help with practical details like accommodation.",
        "Within India, popular options include Panjab University in Chandigarh, Guru Nanak Dev University in Amritsar, IIT Ropar, Lovely Professional University near Phagwara and Punjab Agricultural University in Ludhiana. An Indian university will usually ask for an Association of Indian Universities equivalence certificate for IB and Cambridge results, so applying for it early saves anxiety.",
        "IB and IGCSE students may sit JEE Main, NEET-UG and CUET-UG where eligibility rules are met. These tests follow the Indian syllabus, so a student aiming at an NIT or a medical college must prepare separately alongside school.",
        "A smaller but real group plans to return: study agriculture engineering, business or medicine abroad, then bring skills home to the family farm or an enterprise in Punjab.",
      ],
      bullets: [
        "Apply for AIU equivalence early if Indian universities are in play",
        "JEE, NEET and CUET need preparation on the Indian syllabus",
        "Overseas applications rely on predicted IB grades or IGCSE results",
        "Check visa and funding timelines a year before the move",
      ],
    },
    {
      heading: "Which IB Maths, Science and Social Science mix suits a Punjab student?",
      paragraphs: [
        "Analysis and Approaches is for students who like algebra, calculus and proof, and who might read engineering, physics or maths. Applications and Interpretation is built on data, modelling and technology, and sits comfortably beside economics, business, geography or psychology. Both come at Higher and Standard Level.",
        "A future doctor normally combines Biology and Chemistry at Higher Level. An engineer pairs Physics HL with Maths AA, and adds Chemistry or Computer Science. A student drawn to farm business could take Economics, Environmental Systems and Business Management, a mix with many local examples.",
        "In all cases, lessons are built on past papers. Each session finishes with a timed question that the student attempts without help, and the next session starts by marking it.",
        "Because the IB also needs a language, many Mukerian students choose Punjabi B or Hindi B as a comfortable sixth subject.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how do Mukerian families choose?",
      paragraphs: [
        "For Mathematics, the sciences and several other subjects, Cambridge provides a Core tier with a capped top grade and an Extended tier that reaches the highest grades. Anyone thinking of A Level or the IB Diploma should aim for Extended. Core suits a student who wants a solid grounding with less pressure.",
        "A typical package is six or seven subjects: English, Maths, two sciences, a language and one or two electives. Pearson Edexcel and Cambridge arrange papers and coursework differently, so the board must be fixed before tutoring begins.",
        "Private candidates should check which exam centres near Hoshiarpur or Jalandhar accept outside entries, since many do not. We help families read the requirements but we cannot make the entry for you.",
        "Our free first lesson acts as a diagnostic, and it usually shows which tier is realistic.",
      ],
    },
  ],

  process: [
    { title: "Send your child's details", description: "Tell us the programme or board, the subject, today's marks and the evenings that are free at home." },
    { title: "Review the suggested tutor", description: "You see one or two names with a brief account of the courses each has taught." },
    { title: "Try a free class", description: "Your child takes a real lesson on a current topic, with no payment and no pressure." },
    { title: "Approve a four-week plan", description: "The tutor lists the topics and papers for the first month and waits for your agreement." },
    { title: "Carry on weekly", description: "A fixed slot, a short summary after each lesson, and a replacement tutor if the chemistry is off." },
  ],

  whyPoints: [
    { title: "Chosen by course", description: "The IB subject and level, or the Cambridge or Edexcel code, drives the match." },
    { title: "Fitted to Punjab's rhythm", description: "Lesson times respect harvest weeks, fog, Lohri and wedding season." },
    { title: "See before you decide", description: "The free first lesson lets your child judge the teaching directly." },
    { title: "Students own their assessed work", description: "Tutors clarify criteria and comment on drafts but never write IAs, Extended Essays or TOK essays." },
    { title: "Parents stay informed", description: "A written note follows every class, which suits families with a member working abroad." },
    { title: "Free to change", description: "The rate is written down in advance, nothing locks you in, and a different tutor is a simple request." },
  ],

  faqs: [
    { question: "Where can I find an IB tutor in Mukerian?", answer: "Send us the programme, subject, level and exam session and we will find a tutor who has taught that syllabus and who teaches online. No school in Mukerian offers the IB that we could verify, so the search runs across India. You get a shortlist, a free trial and a written plan, with sessions set at hours that suit your family." },
    { question: "Can a tutor come to our home in Mukerian?", answer: "No, tutors do not visit homes in Mukerian or elsewhere in Hoshiarpur district. In-person tuition is available only in Gurugram and parts of Delhi NCR. In Mukerian the private lesson is taught online while your child sits at home with a laptop or tablet, and the tutor's full attention stays on that one student." },
    { question: "Do you teach Cambridge and Edexcel IGCSE to students in Mukerian?", answer: "Yes, both boards, online. We pair the tutor with the paper code and tier, for example 0580 Extended Mathematics or 0620 Chemistry. Students include hostel residents, returnees from abroad and private candidates. Lesson one acts as a diagnostic so the plan begins at your child's actual level." },
    { question: "What does IB or IGCSE tuition cost for a Mukerian family?", answer: "The fee depends on subject, level, lesson length and the tutor's experience, and we state it in writing before the trial. No price list is published here. A Higher Level Diploma course generally costs more than primary support. Studying online also avoids the hostel rent and travel that coaching in Amritsar or Chandigarh would add." },
    { question: "Is there any IB or IGCSE school near Mukerian?", answer: "We could not confirm one in Mukerian or the surrounding district. Local schools follow PSEB or CBSE. The nearest IB campuses we can point to are in Amritsar and the Chandigarh area. If a school nearby has recently gained authorisation, tell us and we will verify the official listing before changing this page." },
    { question: "My child studies in a hostel and comes home for Lohri and summer. Can you help then?", answer: "Yes. We arrange a concentrated fortnight with daily sessions that combine recap and timed papers, and the same tutor can carry on after your child returns to the hostel. Because lessons happen online, there is no need to find a new teacher in each city." },
    { question: "Can we take a trial lesson first?", answer: "Yes. The first lesson is free and covers a real topic from your child's course. Afterwards the tutor proposes a plan for the month, and you decide whether to go on. If the fit is not right we find someone else, and the rate has already been given in writing." },
    { question: "Will your tutor write the IA or Extended Essay?", answer: "No. Tutors never write an Internal Assessment, Extended Essay, TOK essay or coursework. They can explain the criteria, help refine a research question, discuss methodology and comment on drafts written by the student. The work is the student's own, which protects their result and their standing with the examiners." },
    { question: "Which IB Diploma subjects can be taught?", answer: "Maths AA and AI at both levels, Physics, Chemistry, Biology, Environmental Systems and Societies, Economics, Business Management, Computer Science, Psychology, English A, Hindi B and Punjabi B where a tutor is free. If your subject is not on the list, ask, and we will say honestly whether we can help." },
    { question: "Do you cover MYP and PYP as well?", answer: "Yes. MYP help focuses on criteria-based tasks in Sciences, Maths and Language and on the Personal Project journal. PYP help builds reading, writing and number sense and supports unit work. Younger children usually need shorter sessions and a parent close by in the early weeks." },
    { question: "Will online lessons work in a small town with patchy connectivity?", answer: "For an international syllabus they are the sensible option, because no local specialist exists. A shared whiteboard, live-marked papers and written notes provide much of what a classroom does. You need a dependable connection, and we advise a phone hotspot and a charged laptop for evenings when the power cuts out." },
    { question: "What if fog, floods or a power cut stops a lesson?", answer: "Let us know early and the tutor will usually move the class to the next day. We suggest keeping one spare slot per week in the monsoon months and in the thick December fog. If the tutor agrees, a recording can be shared so the topic is not lost." },
    { question: "How do you vet tutors?", answer: "We check qualifications, recent teaching of the specific subject and level, and how the tutor handles mark schemes and criteria. A short demonstration lesson comes first. The trial is the real test, because your child experiences the teaching directly, and a poor match leads to a replacement." },
    { question: "When should a Mukerian student begin?", answer: "As early as possible: Class 11 for the Diploma, Class 9 for IGCSE and Class 7 or 8 for MYP. That leaves time to fill gaps before internal assessments and mock exams. Later starts can still use an intensive block before an exam, provided the exam date is shared in the first message." },
    { question: "Can you teach Punjabi or Hindi for the IB or IGCSE?", answer: "Hindi B is available for the IB, and Hindi as a second language for IGCSE. Punjabi is possible where a suitable tutor is free and the board offers it for the session. Tell us the level and the series you are aiming for, and we will confirm availability before the trial." },
    { question: "Is IB Gram affiliated with a school or board?", answer: "No. IB Gram is an independent tutoring service with no affiliation, endorsement or payment link to the IB, Cambridge, Pearson Edexcel or any school named on this page. School names are shown only so families can see where campuses are, and they are checked against public sources." },
    { question: "How do I start?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme, subject, level, latest grade and preferred hours. Your child needs a laptop or tablet with camera and microphone and a stable connection. We usually reply within a working day with a shortlist and trial times." },
  ],

  tutorsIntro:
    "The tutors below teach live from different cities, but all work to Indian Standard Time, which is also Mukerian's time. An evening class starts when school and farm work wind down, with no time-zone arithmetic.",

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the online service works in towns and cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are available." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam sessions explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Higher and Standard Level, coursework, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and on-screen assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which Maths course to take, AA or AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to arrange a free trial lesson." },
    { label: "IB and IGCSE tutoring in Hoshiarpur", href: "/hoshiarpur/", description: "The district headquarters to the south." },
    { label: "IB and IGCSE tutoring in Jalandhar", href: "/jalandhar/", description: "The Doaba's largest city, an hour or so away." },
  ],

  closingHeading: "A free first lesson, taught to your Mukerian child",
  closingBody:
    "Share the subject, the level and the exam date, and we will look for a tutor who has taught the course. You will not pay for the trial, the rate comes in writing, and your child need not leave Mukerian to learn from a specialist.",
};
