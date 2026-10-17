import type { CitySeoPage } from "../types";

/**
 * /pali-madhya-pradesh/ - IB and IGCSE tutoring page for Pali (Birsinghpur Pali), Umaria district, Madhya
 * Pradesh, NOT Pali in Rajasthan (which has its own page at /pali/). Coal and thermal-power belt near
 * Umaria and Bandhavgarh. Online only. No IB or Cambridge/Edexcel campus confirmed locally, so stripSchools
 * is empty; clusters use Jabalpur, Bhopal and Nagpur schools already named on published city pages.
 */
export const paliMadhyaPradesh: CitySeoPage = {
  slug: "pali-madhya-pradesh",
  countryName: "Pali",
  countryNameLong: "Pali (Birsinghpur Pali), Umaria district, Madhya Pradesh",
  demonym: "Pali",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are placed away from the May and June heat peak, the monsoon rain days and the Navratri to Diwali run of holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.35, longitude: 81.05 },
  wikipedia: "https://en.wikipedia.org/wiki/Pali,_Umaria",
  alternateNames: ["Birsinghpur Pali", "Pali Umaria", "Pali Madhya Pradesh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pali, Umaria | Online Tuition at Home",
  metaDescription:
    "Online IB and IGCSE private tuition for Pali, Umaria district families near the Birsinghpur power and coal belt: live one-to-one lessons and a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pali, Umaria",
  heroEyebrow: "IB & IGCSE TUITION AT HOME FOR PALI (UMARIA) STUDENTS",
  heroSubtitle:
    "This page is about Pali in Umaria district, Madhya Pradesh, and not the Pali in Rajasthan. If you want private home tuition here for a child on an IB or Cambridge course, the reality is that the right teacher lives elsewhere, so he or she teaches over video. Every IB and IGCSE tutor in Pali works live with one student, and your first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Pali",
  imageAltText: "A student in Pali, Umaria district, taking an online IGCSE Chemistry class at home in the evening",
  secondaryKeywords: [
    "IB tutor Pali",
    "IGCSE tutor Pali",
    "IB home tuition Pali",
    "IGCSE home tuition Pali",
    "IB private tuition Pali",
    "IB Maths tutor Pali",
    "IGCSE Maths tutor Pali",
    "IB Physics tutor Pali",
    "IB Chemistry tutor Pali",
    "IB Biology tutor Pali",
    "IB DP tutor Pali",
    "IB MYP tutor Pali",
    "IB PYP tutor Pali",
    "IGCSE online tuition Pali",
    "IB tutor Pali Umaria",
    "IB tutor Birsinghpur Pali",
    "IGCSE tutor Umaria",
    "online IB tutor Chandia",
    "IB tutor Shahdol",
    "Cambridge IGCSE tutor Pali Madhya Pradesh",
  ],

  heroTrustPoints: [
    "Live, private lessons with a tutor who has taught your child's exact IB course or Cambridge paper",
    "Tutors do not come to Pali: in-person home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial class first, and the fee is given in writing before you sign up",
    "IB Gram is not linked to the IB, Cambridge, Pearson Edexcel, any school or any employer named here",
  ],
  heroStats: [
    { value: "Umaria belt", label: "Specialists on screen, not on the road" },
    { value: "PYP to DP", label: "The IB from primary to Diploma" },
    { value: "May & Nov", label: "The IB sessions we prepare for" },
    { value: "Free trial", label: "A real lesson first" },
  ],

  intro: {
    heading: "A power-plant and coalfield town in the eastern Vindhyan country",
    paragraphs: [
      "Pali, often called Birsinghpur Pali, is a town in Umaria district in eastern Madhya Pradesh, at about 450 metres above sea level. The Sanjay Gandhi Thermal Power Station is the best-known landmark, and coal from the surrounding fields feeds the district economy. Umaria, the district seat, is close by, with Chandia, Nowrozabad and Shankarnagar among the other nearby settlements, and the Bandhavgarh tiger reserve draws visitors to the district every winter.",
      "Schooling follows the Madhya Pradesh Board and CBSE, with a few private English-medium schools and institutions linked to the power and mining employers. We could not confirm any IB World School or any Cambridge or Edexcel IGCSE centre in Pali or in Umaria district, so none appears on the school strip. The nearest campuses we can name are in Jabalpur, Bhopal and Nagpur.",
      "Who asks about an international syllabus in a place like this? Engineers and officers posted to the power station or the coalfields from other states, who want a curriculum that survives the next transfer. Families with a son or daughter settled abroad. And tourism-linked households around Bandhavgarh, where guests from the UK and Europe are a daily presence and English matters.",
      "IB and IGCSE tutors in Pali therefore work online. A teacher who has just taught Diploma Physics does not need to live in Umaria district. Your child sits at home with a laptop, and the lesson runs live with a written note to follow. To be clear about home tuition: tutors do not visit homes in Pali, because in-person visits exist only in Gurugram and parts of Delhi NCR.",
    ],
    bullets: [
      "Private tuition at home, taught online, for Pali, Umaria, Chandia, Shankarnagar and Nowrozabad",
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "One tutor who can stay with a child through a transfer",
      "Tutors coach but do not write IAs, Extended Essays or TOK essays",
      "Online only in Pali, with no visits to your home",
    ],
  },

  programmesIntro:
    "Since no school in Pali offers an IB stage that we could verify, each one reaches a family from outside: a transfer, a hostel in a larger city, or a deliberate choice to prepare for university abroad. Here is how each stage tends to appear locally.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children investigate themes that cut across subjects and finish with a group Exhibition. Practical help means fluent reading, neat handwriting and secure number work, all in a relaxed, curious tone.",
      countryNote:
        "In Pali a PYP learner typically belongs to an officer's family that has just arrived from a metro city and wants the earlier routine to continue.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded against published criteria, and the course ends with a Personal Project. The shift is from reproducing what a textbook says to explaining why, in full sentences.",
      countryNote:
        "A Pali MYP student is often a boarder in Jabalpur or Bhopal, home at Diwali and in summer, who needs steady help through the long breaks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, usually three at Higher Level and three at Standard, plus Theory of Knowledge, the Extended Essay and CAS. Marks combine coursework with papers sat in May or November.",
      countryNote:
        "Diploma places are outside Umaria district, so tutoring here means weekday evenings during term and concentrated holiday blocks.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A narrower group of Diploma courses is paired with a career-related study and a reflective project. Few Indian campuses run it, so requests usually concern one or two of the academic courses.",
      countryNote:
        "CP is seldom raised in Umaria district. Where a student follows it elsewhere, we cover the academic subjects and the school looks after the vocational element.",
    },
  ],

  subjectsIntro:
    "A boarder revising IB Biology HL in the Diwali break and a Class 9 child adding Cambridge Mathematics to an MP Board routine have little in common, so we always start from subject, level and the next exam date.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, vectors and proof for would-be engineers. MP Board students are usually quick at procedure but need practice laying out a reasoned chain of steps." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, a practical option for business, economics and social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Thermal physics, electricity and fields have vivid local illustrations in a thermal-power district, which helps students remember them." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, combustion and redox link neatly to coal and power generation, with equilibrium and organic mechanisms getting extra drill." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics and ecology, with the sal forests and tiger reserve nearby as rich material for an investigation." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Mining impact, air quality, forest conservation and wildlife tourism give unusually concrete case studies." },
    { name: "IB Economics", levels: "HL / SL", description: "Energy pricing, resource extraction and tourism income show up in the district and make diagrams easier to learn." },
    { name: "IB Business Management", levels: "HL / SL", description: "Operations, finance and strategy, suitable for children of traders and hospitality owners." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, systems and the HL case study, learned by regular hands-on practice." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Analysis of literary and everyday texts, with timed essays and close feedback." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, writing tasks and the oral, for students who want Hindi assessed." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Design cycle, materials and sustainability, a natural pick for engineers' children." },
    { name: "IB Geography", levels: "HL / SL", description: "Extraction, land use and conservation provide solid fieldwork-style themes." },
  ],

  igcseSubjectsIntro:
    "No Pali school is confirmed for Cambridge or Edexcel IGCSE, so students here tend to be boarders, newly arrived children or private candidates who want an internationally recognised result beside the MP Board or CBSE. The paper code comes first.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, mensuration and statistics at Extended depth, with credit for clear working." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry, a bridge towards Maths AA or A Level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, circuits and waves, with a weekly practice on the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactivity and organic basics, with the standard qualitative tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human systems, plants and ecology, using forest examples where they fit." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Resources, energy and conservation in a coal, power and tiger-reserve district." },
    { name: "IGCSE Travel and Tourism 0471", levels: "Grade 9-10", description: "Where the board offers it, a sensible option for families in the Bandhavgarh hospitality trade." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python and logic, tested on paper and on screen." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary under time limits." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for students who want a second language beside English." },
  ],

  regionsTitle: "Pali and nearby places we teach online",
  regionsIntro:
    "All teaching takes place on video, so these places are background rather than meeting points. They show which school catchment a family belongs to, how the evening connection behaves and how far the nearest proper international campus is.",
  regions: [
    { name: "Pali town", note: "The Birsinghpur Pali municipality, with colony housing around the power station and a mixed population of employees, traders and farming families." },
    { name: "Birsinghpur", note: "The area around the thermal power station, where many households have a direct link to the plant and to postings elsewhere." },
    { name: "Umaria", note: "The district headquarters, with the main offices, the railway station and the widest range of schools and coaching in the district." },
    { name: "Chandia", note: "A coalfield township on the district's northern side, with staff housing and its own schools." },
    { name: "Nowrozabad", note: "A mining and colony settlement close to the railway line, home to families with employer-linked jobs." },
    { name: "Shankarnagar", note: "A smaller township with an industrial history and quick links to Umaria and Pali." },
    { name: "Rupaund", note: "A rural settlement on the district's eastern edge where school choice is limited and online learning matters." },
    { name: "Manpur", note: "The gateway town for Bandhavgarh, with tourism and hospitality families who deal with foreign visitors regularly." },
    { name: "Shahdol", note: "The next district seat to the east, with a larger market and a division-level education scene." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre in Pali or elsewhere in Umaria district, so the school strip is empty. The campuses below are in other cities and appear only to show where physical options are. IB Gram is independent of every one of them and of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nearby: Jabalpur",
      note: "The closest large city, around four hours away by road or rail, and the usual first look for Umaria families. Local options in Pali itself are limited, so this is where a hostel place is often sought.",
      schools: ["Little World School", "Eastern Public School, Gandhi Nagar", "The Sanskaar Valley School, Chandanpura"],
    },
    {
      city: "Nearby: Bhopal",
      note: "The state capital, farther afield but with a confirmed international campus and strong train links from Umaria.",
      schools: ["Shrewsbury International School India"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Another long journey from Umaria district, though a big regional centre where some families seek a full IB school.",
      schools: ["D Y Patil International School, MIHAN"],
    },
  ],

  modesIntro:
    "A lesson in Pali is always live video between one tutor and one learner. What differs is rhythm: how often the pair meets, and how the plan sits against shift work, heat and festivals.",
  modes: [
    {
      title: "Weeknight lessons through the term",
      description: "One or two fixed evenings a week once school and homework are done, following what the classroom is covering.",
      bullets: [
        "Tutor selected for the syllabus, not the postcode",
        "Covers PYP, MYP, DP and IGCSE",
        "Past papers are worked and marked with the student on screen",
        "The same teacher through the whole term",
      ],
    },
    {
      title: "Lessons that follow a transfer",
      description: "Teaching carries on with the same tutor if a posting takes the family to another city partway through the year.",
      bullets: [
        "No break in the course when the address changes",
        "The tutor keeps the log of papers and topics",
        "Timings adjust to the new school's hours",
        "Useful for children who have already changed schools once",
      ],
    },
    {
      title: "Diwali and summer boot camps",
      description: "Daily sessions across a fixed fortnight for boarders at home and private candidates before an exam series.",
      bullets: [
        "Timed papers followed by quick feedback",
        "Early or late sessions to dodge the heat",
        "Book a few weeks before the break begins",
        "Rest days are built in around festival visits",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a coal-and-power town like Pali look at IB and IGCSE tutors?",
      paragraphs: [
        "It sounds an unlikely match until you see who lives here. A thermal station and coalfields employ engineers, chemists, finance staff and administrators who arrive from Odisha, Maharashtra, Bihar or Delhi on postings. Their children have often attended CBSE or international-style schools elsewhere, and the family wants as little disruption as possible.",
        "A transfer is the central worry. The next posting could be a new state, and each move can change the syllabus the child is following. A course that is the same wherever the school stands is a calming idea, and online tuition keeps the same teacher through the change.",
        "A second group lives around Bandhavgarh. Resort owners, guides and traders deal with visitors from Britain, Europe and the US every season, and parents see for themselves that English and an internationally recognised qualification open doors.",
        "Finally there are families with a son or daughter abroad, or with plans of their own to send one. For them an IGCSE or IB record is a bridge, and starting early means less pressure later.",
      ],
      table: {
        caption: "Who asks about international syllabuses around Pali",
        columns: ["Household", "What they want", "How tutoring fits"],
        rows: [
          ["Power-station and coal-field staff", "A syllabus that survives transfers", "One tutor who continues across cities"],
          ["Bandhavgarh tourism families", "English-medium strength and global recognition", "IGCSE English, Business or Travel subjects with a specialist"],
          ["Families with relatives abroad", "University overseas on a recognised record", "Early IB or IGCSE preparation in target subjects"],
          ["Hostel students at home", "Continuity through holidays", "Concentrated blocks with timed papers"],
        ],
      },
    },
    {
      heading: "How wide is the gap between the MP Board or CBSE and IGCSE or the IB Diploma?",
      paragraphs: [
        "Most students find IGCSE the nearer shore. The MP Board is built on prescribed chapters and recall; CBSE shares the NCERT base but tests more application. IGCSE still has a defined syllabus but rewards explanation and method. The Diploma then adds independent research, long essays and a language to the sciences and maths.",
        "Written English is the real hurdle for a Hindi-medium student. Understanding a physics idea in Hindi and writing it out precisely in English are two skills, and exam terms such as compare, deduce and evaluate each signal a different kind of answer. A term or two of regular writing practice changes things noticeably.",
        "Students from this belt also arrive with advantages: reliable arithmetic, stamina and respect for long study hours. Good tutoring uses these instead of fighting them.",
        "The table shows the four paths together.",
      ],
      table: {
        caption: "MP Board, CBSE, IGCSE and IB Diploma for a Pali student",
        columns: ["Feature", "MP Board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Core skill", "Recall of prescribed chapters", "Concepts and application", "Content with explained reasoning", "Research, argument and reflection"],
          ["Medium of study", "Hindi or English", "Hindi or English", "English", "English"],
          ["Entrance routes in India", "JEE, NEET, CUET directly", "JEE, NEET, CUET directly", "Via AIU equivalence and extra preparation", "Via AIU equivalence and extra preparation"],
          ["Assessment style", "Annual papers", "Board papers", "Papers plus some coursework", "Papers, IA, Extended Essay and TOK"],
        ],
      },
    },
    {
      heading: "What goes into the fee for IB or IGCSE tuition in Pali?",
      paragraphs: [
        "You will not find a rate card on this page. A figure is agreed with you in writing before the trial, and the trial costs nothing. Subject, level, lesson length and the tutor's history with the course are the four things that move it.",
        "Diploma science at Higher Level costs more than primary-year reading support, since fewer tutors have recently taught it and preparation is heavier. Someone who has examined for the IB or coached Cambridge Extended for years will charge above a new graduate, and a heavy weekly load may be priced differently from an occasional one.",
        "A fairer comparison for a Pali household is with moving a child to Jabalpur or Bhopal for coaching. That means rent, food and travel, and takes a young person away from home during an important year. An online class each week avoids all of it.",
        "If you want a number, WhatsApp the board or programme, subject, level and weekly lesson count, and a written quote follows.",
      ],
    },
    {
      heading: "Online tutor, local coaching, school teacher or self-study: which is best for a Pali student?",
      paragraphs: [
        "Umaria and Shahdol have coaching classes and private teachers, mostly for MP Board, JEE and NEET. None that we know of teaches IB Analysis and Approaches or Cambridge 0580 Extended. A parent should put the question to any centre directly before assuming it does.",
        "A school teacher may be capable and still unfamiliar with IB assessment criteria or Cambridge mark schemes. Studying alone from past papers can work for a very self-driven teenager, but written work stays unmarked and flaws repeat.",
        "An online one-to-one tutor sits between these, as a specialist in the exact course, at a time that fits shift work, giving one child full attention. It needs a steady connection and a quiet room.",
        "The table compares them.",
      ],
      table: {
        caption: "Study options for an international syllabus from Pali",
        columns: ["Option", "Match to the syllabus", "Timing", "Limitation"],
        rows: [
          ["Online one-to-one tutor", "Specialist in the exact IB or IGCSE course", "Agreed with the household", "Needs dependable internet and power"],
          ["Coaching in Umaria or Shahdol", "MP Board, JEE and NEET", "Fixed batches", "No IB or Cambridge teaching we could confirm"],
          ["Private or school teacher", "General school subjects", "Flexible", "May not know IB or IGCSE marking"],
          ["Self-study with past papers", "Varies with the student", "Anytime", "Written answers go unmarked"],
        ],
      },
    },
    {
      heading: "What do heat, monsoon and the festival calendar do to the exam year in Umaria district?",
      paragraphs: [
        "The IB Diploma examinations come in May and November. Cambridge IGCSE has February-March, May-June and October-November series, and Pearson Edexcel runs in January, May-June and October-November. A private candidate must secure an exam centre and an entry date well in advance, which is why a first conversation half a year ahead is not too early.",
        "Climate here is distinctly central Indian. May and June are hot and dry, with the thermal station and the whole grid under pressure. The monsoon then arrives, usually in late June, and rain days can slow the roads between Pali and Umaria. Winters are cool and clear, and are the best study months.",
        "Navratri, Dussehra and Diwali dominate the autumn, and Holi arrives in March just as the exam season warms up. Tourist season at Bandhavgarh runs through the cooler months, which keeps hospitality families especially busy from about November to March.",
        "The table shows a workable pace.",
      ],
      table: {
        caption: "A study year in Pali",
        columns: ["Months", "Weather and local life", "Study advice"],
        rows: [
          ["November to February", "Cool, clear; tourist season; Cambridge and Edexcel winter series", "Best months for steady lessons and a timed paper every week"],
          ["March to May", "Holi, rising heat, IB May exams, school boards", "Early-morning or late-evening slots; intensive revision weeks"],
          ["June to September", "Peak heat, then monsoon; schools reopen", "Hold a spare weekly slot for rain or power cuts"],
          ["October", "Navratri, Dussehra, Diwali, autumn exam series close by", "Holiday blocks for boarders; lighter weeks around festival days"],
        ],
      },
    },
    {
      heading: "Where can a student from Pali go after IB or IGCSE?",
      paragraphs: [
        "In Madhya Pradesh the obvious destinations are Jabalpur, with Rani Durgavati University and the engineering and medical colleges, and Bhopal, with MANIT, AIIMS and several private universities. Indore and Rewa are further options. For these, IB and Cambridge students normally need an equivalence certificate from the Association of Indian Universities.",
        "IB and IGCSE students may sit JEE Main, NEET-UG and CUET-UG when the eligibility rules are met. Because those tests follow the Indian syllabus, a student aiming at an NIT or a government medical seat needs separate preparation alongside the international course.",
        "Abroad, Pali students look at the UK, Canada, Australia and the Gulf, often because someone in the family is already there. Predicted and final IB grades or IGCSE results support these applications, and English-language writing practice from an early age is a big help.",
        "A few plan to return: study mining engineering, energy or hospitality management overseas, then work for a power or tourism employer in central India.",
      ],
      bullets: [
        "Begin the AIU equivalence process early for any Indian university",
        "JEE, NEET and CUET need their own preparation on the Indian syllabus",
        "Overseas offers rest on predicted IB grades or IGCSE results",
        "Visa and funding dates should be mapped a year before departure",
      ],
    },
    {
      heading: "Which IB Maths and Science mix suits an engineer's or a resort owner's child?",
      paragraphs: [
        "Analysis and Approaches is the course for a student who likes algebra, calculus and proof and may study engineering or physics. Applications and Interpretation works with data, modelling and technology, and sits comfortably with economics, business and biology. Both come at Standard and Higher Level.",
        "An intending engineer would normally pair Physics HL with Maths AA HL, and add Chemistry or Design Technology. A future doctor would take Biology HL and Chemistry HL. A hospitality-minded student might blend Business Management, Economics, English and Maths AI.",
        "Whatever the combination, each lesson is anchored on a past paper. A timed question ends the session and the next one starts by marking it.",
        "Hindi B is a comfortable sixth subject for many Pali students and a safe way to secure points.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how do families in Pali decide?",
      paragraphs: [
        "In Maths, the sciences and a few other subjects, Cambridge offers a lower Core tier and a higher Extended tier. Anyone who might go on to A Level or the IB Diploma is better placed sitting Extended. Core is a fair choice for a learner who wants a firm base and a lighter load.",
        "A common package has six or seven subjects, usually English, Maths, two sciences, a language and one or two electives. Cambridge and Edexcel differ in how papers and coursework are built, so the board must be settled before lessons start.",
        "Those entering privately should find out which centres around Jabalpur or Bhopal accept outside candidates, because not all do. We help families read the rules but cannot lodge the entry on your behalf.",
        "The first free lesson works as a diagnostic, and the result often makes the tier obvious.",
      ],
    },
  ],

  process: [
    { title: "Send us the facts", description: "Programme or board, subject, recent marks and the evenings the household can keep free." },
    { title: "Review a shortlist", description: "You are given one or two tutors with a brief outline of what each has taught." },
    { title: "Take the free class", description: "A live lesson on a topic from the current course, with no cost and no commitment." },
    { title: "Confirm the first month", description: "The tutor maps out topics and papers for four weeks and you approve or adjust." },
    { title: "Settle into a pattern", description: "Same slot weekly, a written note after each class, and a swap of tutor whenever needed." },
  ],

  whyPoints: [
    { title: "Chosen on the syllabus", description: "IB subject and level, or the Cambridge and Edexcel code, shape every match." },
    { title: "Portable across postings", description: "A tutor can stay with your child when the family is moved to another city." },
    { title: "Try before you decide", description: "The free class lets your child form a view of the teaching first." },
    { title: "The student owns the assessed work", description: "Tutors explain criteria and review drafts but write no IA, Extended Essay or TOK essay." },
    { title: "Records you can read", description: "A short note arrives after each lesson, handy for parents on shift." },
    { title: "No lock-in", description: "Rates are in writing at the start and a different tutor is one message away." },
  ],

  faqs: [
    { question: "Is this page about Pali in Madhya Pradesh or Pali in Rajasthan?", answer: "This page covers Pali, also called Birsinghpur Pali, in Umaria district, Madhya Pradesh. Pali in Rajasthan has its own separate page on this site. Lessons are online either way, so a family in Umaria district can start here and our tutors will adapt the plan to the MP school calendar." },
    { question: "How do I find an IB tutor in Pali?", answer: "Tell us the programme, subject, level and exam session, and we search across India for a tutor who has taught that course and works online. We could not verify an IB school in Umaria district, so geography plays no part. Expect a shortlist, a free trial and a brief plan." },
    { question: "Will someone come to our house in Pali?", answer: "No. Tutors do not visit homes in Pali or elsewhere in Umaria district, as in-person tuition is limited to Gurugram and parts of Delhi NCR. Your child studies at home on a laptop or tablet, and the tutor on the screen teaches that single student for the entire session." },
    { question: "Can you prepare students for Cambridge or Edexcel IGCSE in Pali?", answer: "Yes, we teach both boards online. The tutor is matched by paper code and tier, such as 0580 Extended Mathematics or 0625 Physics. Learners include boarders, newly arrived children and private candidates. The first class doubles as a diagnostic so planning starts from the right level." },
    { question: "How much does IB or IGCSE tuition cost?", answer: "The fee depends on subject, level, lesson length and tutor experience, and we quote it in writing before the trial. We keep no public price list. Higher Level Diploma classes cost more than primary support. Studying online also avoids the rent and travel that coaching in Jabalpur or Bhopal would involve." },
    { question: "Is there any IB or IGCSE school in or near Pali?", answer: "We could not confirm one in Umaria district. Local schools follow the MP Board or CBSE. The nearest campuses we can name are in Jabalpur, Bhopal and Nagpur. If a school here has been newly authorised, let us know and we will look at its official listing before changing this page." },
    { question: "We may be transferred soon. Can the same tutor continue?", answer: "Yes, that is a major advantage of online lessons. The tutor keeps the notes and the record of papers done, and carries on when you move to another city or state. Only the timing needs adjusting to the new school's hours, while the syllabus stays exactly the same." },
    { question: "Can we have a trial lesson first?", answer: "Of course. The first lesson is free and uses a real topic from your child's course. Afterwards the tutor outlines the next four weeks and you decide whether to go on. If the fit is poor, we propose another tutor, and the fee has already been written down." },
    { question: "Will the tutor help write my child's IA or Extended Essay?", answer: "Not in the sense of writing it. Tutors do not draft an Internal Assessment, Extended Essay, TOK essay or coursework. They can explain what the criteria reward, test a research question and comment on drafts the student has written, which keeps the work honest and the result secure." },
    { question: "Which IB Diploma subjects can you teach?", answer: "The common ones are Maths AA and AI, Physics, Chemistry, Biology, ESS, Design Technology, Economics, Business Management, Computer Science, Geography, English A and Hindi B. If you need something else, ask first, and we will say plainly whether a suitable tutor is available." },
    { question: "Do you work with MYP and PYP children too?", answer: "Yes. For MYP we work on criterion-marked tasks and the Personal Project journal. For PYP we strengthen reading, writing and number sense around unit work. Smaller children cope better with short sessions and a parent in the room for the first few weeks." },
    { question: "Is online tuition reliable with the power and network here?", answer: "It is the workable option when no local specialist exists, as long as you plan for outages. Keep a phone hotspot and a charged laptop ready for evenings when the grid is under strain, especially in May and June, and the shared whiteboard does the rest." },
    { question: "What if rain, heat or a power cut interrupts a class?", answer: "Let the tutor know as early as possible and the session normally moves by a day. In the hottest weeks we favour early-morning or late-evening slots, and in the monsoon we suggest holding a spare slot each week. A recording can be shared where the tutor agrees." },
    { question: "How are tutors chosen?", answer: "We look at qualifications, recent teaching in the exact subject and level, and how the person handles mark schemes and criteria. A short demonstration lesson follows. Your child's reaction in the free class is the final test, and a tutor who does not suit is replaced." },
    { question: "When is the right time to start?", answer: "As early as you can: Class 11 for the Diploma, Class 9 for IGCSE, Class 7 or 8 for MYP. Early starts leave room to repair gaps before internal assessments and mock exams. A late start can still work with an intensive block, so mention the exam date in your first message." },
    { question: "Can you teach Hindi for IB and IGCSE?", answer: "Yes. Hindi B is offered for the IB at Standard and Higher Level, and Hindi as a second language for IGCSE. Tell us your level and exam series, and we will confirm a suitable tutor before the trial is booked." },
    { question: "Is IB Gram part of any school, board or employer?", answer: "No. IB Gram is independent and has no tie, endorsement or payment link to the IB, Cambridge, Pearson Edexcel, any school or any employer mentioned on this page. School names appear only to show where campuses exist, and they are checked against public sources." },
    { question: "How do I get started?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with programme, subject, level, latest result and preferred hours. Your child needs a laptop or tablet with camera and microphone and a steady connection. A shortlist and trial times normally follow within a working day." },
  ],

  tutorsIntro:
    "The tutors below teach live from different cities, all on Indian Standard Time, the same clock as Pali. An evening class begins once school and the working day end, and no time-zone conversion is needed.",

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How the online service reaches towns and cities nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where tutors visit in person." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Levels, internal assessment, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and e-assessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA or AI, and how to pick." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to arrange a trial lesson." },
    { label: "IB and IGCSE tutoring in Umaria", href: "/umaria/", description: "The district headquarters, a short distance away." },
    { label: "IB and IGCSE tutoring in Shahdol", href: "/shahdol/", description: "The neighbouring district seat to the east." },
    { label: "IB and IGCSE tutoring in Jabalpur", href: "/jabalpur/", description: "The closest large city with confirmed school options." },
  ],

  closingHeading: "A free first lesson at home in Pali",
  closingBody:
    "Send the subject, level and exam date, and we will look for a tutor who has taught that course. The trial class costs nothing, the fee is written down before you decide, and your child can learn from a specialist without leaving Pali.",
};
