import type { CitySeoPage } from "../types";

/**
 * Manawar is a tehsil town in Dhar district, Madhya Pradesh, about 129 km from Indore by Wikipedia's
 * figure. No IB or Cambridge school there could be confirmed, so stripSchools is empty and the Indore
 * names come from the already checked Indore page.
 */
export const manawar: CitySeoPage = {
  slug: "manawar",
  countryName: "Manawar",
  countryNameLong: "Manawar, Madhya Pradesh",
  demonym: "Manawar",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after the market quietens and the heat has dropped, and Sunday mornings for longer practice papers",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 22.2333, longitude: 75.0833 },
  wikipedia: "https://en.wikipedia.org/wiki/Manawar",
  alternateNames: ["Manawar Dhar", "Manawar Madhya Pradesh", "Manawar tehsil", "Manavar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Manawar | Online Private Tuition",
  metaDescription:
    "Private online IB and IGCSE tutors for Manawar, Dhar district: one-to-one lessons from home, syllabus-matched tutors, notes after class, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Manawar",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR MANAWAR, DHAR DISTRICT",
  heroSubtitle:
    "Looking for private tuition at home for an IB or IGCSE student in Manawar? It is taught as live one-to-one lessons online. Tutors do not travel to homes in Madhya Pradesh, because in-person home tuition runs only in Gurugram and parts of Delhi NCR, but the lesson is just as personal: one student, one tutor who knows the syllabus, and a written note afterwards. Indore is well over a hundred kilometres away, so a tutor on the screen is often the only realistic specialist. Tell us the course and we book a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Manawar",
  imageAltText: "Manawar student following a live IB Biology lesson on a laptop at home with a tutor",
  secondaryKeywords: [
    "IB tutor in Manawar",
    "IGCSE tutor in Manawar",
    "IB home tuition Manawar",
    "IGCSE home tuition Manawar",
    "IB private tuition Manawar",
    "IB Maths tutor Manawar",
    "IGCSE Maths tutor Manawar",
    "IB Physics tutor Manawar",
    "IB Chemistry tutor Manawar",
    "IB Biology tutor Manawar",
    "IB DP tutor Manawar",
    "IB MYP tutor Manawar",
    "IB PYP tutor Manawar",
    "IGCSE online tuition Manawar",
    "IB tutor Manawar Dhar",
    "IGCSE tutor Dhar district",
    "IB online classes Nimar Malwa",
    "IB tuition Madhya Pradesh town",
  ],

  heroTrustPoints: [
    "Live one-to-one video lessons, no pre-recorded courses",
    "Tutors who have handled IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Slots that suit a market-town school day and Malwa summers",
    "Free first lesson and a written note after each class",
    "A fresh tutor at no cost if the match is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you decide" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Cement, cotton and an international syllabus",
    paragraphs: [
      "Manawar is a tehsil town in Dhar district in the Narmada valley of western Madhya Pradesh, with the Maan river along its southern edge and a dam and garden that locals use for picnics. Wheat, gram, maize and cotton are the main crops, and the economy also leans on limestone, cement, cotton mills and a long list of small trades from jewellery to steel utensils. Most children study in MP Board or CBSE schools in Hindi or English medium, with Indore, Bhopal and Mhow as the places they head for college.",
      "Some households want a different route. They may include engineers and managers linked to the cement units, doctors and teachers, traders with family overseas, or parents who have lived in a metro and want their child to keep following the IB or Cambridge and Edexcel IGCSE. Indore, with its handful of international campuses, is more than a hundred kilometres away, so the day-to-day option is a laptop and a tutor who has already taught the paper.",
      "So our IB and IGCSE tutors in Manawar teach live and privately over video, from elsewhere in India, on Indian time. IB Gram stands apart from the IB, Cambridge, Pearson and every school; tutors coach and explain, and they never draft assessments or coursework. The rest of the page sets out how this works from a Dhar district address.",
    ],
  },

  programmesIntro:
    "The IB programmes seldom arrive in a neat sequence in a town like Manawar. Here is what a tutor does at each stage when a family does meet them.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-based primary learning with six themes and a closing Exhibition. A tutor's role is modest: confident reading, number sense and putting thoughts into spoken English.",
      countryNote:
        "A child who speaks Hindi or Malvi at home benefits from a calm, brief English session that does not feel like homework.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed against criteria, ending in the Personal Project. Tutors show how to read a task and shape an answer to the descriptors.",
      countryNote:
        "Moving from a MP Board textbook to criterion marking is an adjustment, and weekly help in the first two terms removes most of the stress.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Tutoring focuses on examined papers and assessment method, never on writing the assessments.",
      countryNote:
        "Near Manawar a Diploma student will rarely find a Higher Level specialist, so a remote tutor often covers the hardest content.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses combined with a career-related study and a reflective project. Tutors support the DP courses and academic English.",
      countryNote:
        "CP is hardly available in this region. We deal with requests one at a time and match a tutor to the DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Every tutor is matched for the exact course and level, and for the steadiness a student needs when the earlier schooling was in Hindi medium.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and proof-style reasoning, with Paper 1 skills built from short daily drills." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator-based problems with neat written method." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with data questions and practical write-ups." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles, energetics, kinetics, equilibrium and organic routes, with the calculation slips that lose marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecosystems, with exact terminology and structured long answers." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development topics, using farm-gate prices and small-town trade as worked examples." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study analysis, finance calculations and applying tools to unseen firms, which suits trading-family students." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation vocabulary and extended response structure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparative writing and the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary analysis for native speakers and structured written expression for Hindi B." },
    { name: "Geography", levels: "SL / HL", description: "Fieldwork-based thinking, with river, land use and climate examples close to the Narmada valley." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, coached on structure only." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring covers Cambridge and Pearson Edexcel. The Core or Extended tier should be settled early because it sets the top grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with the tier decided on evidence from past papers." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and functions for students heading to IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, electricity, waves and the practical-skills paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and analysis questions." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, inheritance and ecology, with exam-style description of experiments." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Programming logic, databases and trace tables." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking for students from Hindi-speaking homes." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension, letters and essays to the board's expectations." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Definitions, calculations and case-based data response." },
  ],

  regionsTitle: "Manawar and the nearby places we teach",
  regionsIntro:
    "All lessons are online, so a map matters only for signal, electricity and how long a child's school day lasts. This is how we read each part of the area.",
  regions: [
    { name: "Manawar town", note: "The tehsil centre, with the main bazaar, most private schools and the strongest broadband and 4G coverage in the area." },
    { name: "Man Dam and garden side", note: "Quieter residential edges near the dam, good for evening lessons with little road noise." },
    { name: "Cement and limestone belt", note: "Plant staff and contractor families live around the mining and cement area, where shift patterns suggest weekend and early-evening slots." },
    { name: "Bagh", note: "A smaller place in Dhar district known for its ancient caves; students here share the same internet-dependent timetable as Manawar." },
    { name: "Kukshi", note: "A larger neighbouring town in the Narmada valley, with a growing English-medium school sector." },
    { name: "Dhamnod and Sardarpur", note: "Market towns on the Dhar side where families look to Indore and Dhar for higher studies." },
    { name: "Gandhwani", note: "A town in the district with a mix of farming and trading households." },
    { name: "Dhar", note: "The district headquarters, the biggest town nearby and the usual base for government offices and coaching." },
    { name: "Mhow", note: "A military cantonment town on the way to Indore with a distinct service-family community." },
    { name: "Indore", note: "The state's largest city, 129 kilometres away by Wikipedia's reckoning, and home to its international schools, IIT and IIM." },
  ],

  schoolClusters: [
    {
      city: "Manawar and Dhar district",
      note: "We could not confirm an IB or Cambridge school in Manawar or Dhar district, so local options are limited. Students here mainly study through online schools, as private IGCSE candidates, or after moving.",
      schools: [],
    },
    {
      city: "Nearby: Indore, central",
      note: "Two established IB and Cambridge campuses lie in central Indore, and some Dhar district families consider them because boarding removes the daily road trip.",
      schools: ["Choithram International School", "Daly College"],
    },
    {
      city: "Nearby: Indore, southern edge",
      note: "A Cambridge and IB Diploma school on Indore's southern side, a common choice for families settling there for work.",
      schools: ["The Emerald Heights International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram works independently of every school on this page. Choithram, Daly College and Emerald Heights appear because Indore is the closest place where an international syllabus is taught, not because they have any arrangement with us. Admission, boarding and programme details should be checked with the school itself.",

  tutorsIntro:
    "Our tutors teach from many parts of India on Indian time. A Manawar student is not limited to whoever lives in Dhar district; we choose on subject depth and teaching style.",

  modesIntro:
    "In Manawar lessons are online, and the three arrangements below cover most needs.",
  modes: [
    {
      title: "Live one-to-one online lessons",
      description: "A private video lesson with a shared writing board, from your own room.",
      bullets: [
        "No tutor visits in Manawar; home visits operate only in Gurugram and parts of Delhi NCR",
        "A laptop, notebook and headphones are enough",
        "Written working is photographed and discussed in real time",
        "A short note for parents follows each lesson",
      ],
    },
    {
      title: "Pre-exam booster",
      description: "A closer run of lessons in the weeks before a May or November session.",
      bullets: [
        "Three or four lessons a week for roughly a month",
        "Past papers marked to the official scheme",
        "Topics rebuilt from mock results",
        "A rest day before the first paper",
      ],
    },
    {
      title: "Regular weekly slot",
      description: "A single lesson each week for one subject across the school year.",
      bullets: [
        "The same tutor throughout",
        "Good for MYP and the first Diploma year",
        "Moves easily around Diwali, Holi and school exams",
        "Begins with a free trial",
      ],
    },
  ],

  sections: [
    {
      heading: "What does a Manawar family actually do about IB or IGCSE?",
      paragraphs: [
        "Families in the town tend to pick one of four paths. They enrol the child with an online international school, they send the child to a boarding school in Indore or elsewhere, they relocate for a job to a city with international campuses, or they register the child for IGCSE papers as a private candidate at an approved centre. All four are workable and each has different tutoring needs.",
        "Online schools put the child in front of a screen for classes, which rewards self-discipline. A weekly tutor adds accountability and catches misunderstandings early. A boarder in Indore may come home wanting help with a weak topic. A relocating family wants to prepare for the new school's pace. A private candidate needs the broadest coverage because the whole syllabus rests on home study.",
        "None of them is the single right answer. Age, comfort with English and the family's university plans tip the balance, and we are happy to say plainly what each path would ask of a tutor and how much support is realistic.",
        "Not sure yet? Book one trial in the subject that worries your child most. An hour is usually enough for an experienced tutor to judge how big the distance to the course standard is, which tells you a lot about the path to pick.",
      ],
    },
    {
      heading: "MP Board, CBSE, IB and IGCSE: a quick comparison",
      paragraphs: [
        "The MP Board and CBSE dominate classrooms in Manawar and feed into JEE Main, NEET-UG, CUET-UG and state counselling. They reward recall and speed. The IB and IGCSE ask for reasoning, data skills and extended answers in English.",
        "A student switching boards need not start behind. Many have strong mathematics and science content and need only guidance on how answers are marked and on the command terms used in papers.",
      ],
      table: {
        caption: "Four boards from a Dhar district perspective",
        columns: ["Board", "Exam pattern", "Language", "Typical onward route"],
        rows: [
          ["MP Board (MPBSE)", "Written papers at Class 10 and 12", "Hindi or English", "State counselling, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board papers with internal marks", "Hindi or English", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Six subjects with internal assessments and final papers", "English", "Study abroad, Indian private universities, CUET-UG with equivalence"],
          ["Cambridge or Edexcel IGCSE", "Subject papers at Core or Extended tier", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "How is the fee for IB and IGCSE tuition worked out?",
      paragraphs: [
        "A quote for IB and IGCSE tuition in Manawar is built from four things: the subject and level, the experience of the tutor, the number of lessons each week and how long the arrangement runs. The figure comes in writing before you commit, and we publish no flat price, because a Class 8 English lesson and Higher Level Chemistry are very different jobs.",
        "Teaching online saves travel and widens choice. For a town where the closest comparable specialist might be in Indore, being able to pick purely on subject strength is the main benefit.",
        "Many families get the best value by timing lessons well: weekly help in a student's first term of a new programme, heavier cover before mocks, and a final push before the official session. Beginning with one subject and adding a second later is also common.",
      ],
      bullets: [
        "Higher Level Mathematics and sciences generally call for more seasoned tutors than a middle-school language slot",
        "PYP, MYP, DP and IGCSE each draw on a different pool of tutors",
        "One lesson a week adds up to less than a dense month of sessions before the papers",
        "Requests made close to a sitting find fewer tutors free",
        "A longer commitment makes timetables easier for everyone",
      ],
    },
    {
      heading: "Local class, online tutor or self-study in Manawar?",
      paragraphs: [
        "A family in Manawar generally weighs three options: a local coaching class, a private online tutor, or self-study with videos. Local classes serve state board and entrance exams well and seldom cover IB or IGCSE papers. Videos help with revision but offer no marking. An online tutor brings exact syllabus knowledge and feedback in return for a quiet space and a good connection.",
        "The comparison below is frank about the limits of online tutoring: it cannot replace hands-on laboratory work.",
      ],
      table: {
        caption: "Study options compared for a Manawar student",
        columns: ["Option", "Strength", "Limit", "Suits"],
        rows: [
          ["Private online tutor", "Exact syllabus, marked practice", "Needs signal; no wet lab", "Most IB and IGCSE students"],
          ["Local coaching class", "Peers, fixed timetable", "Built for board and entrance exams", "Students who also sit MP Board or CBSE"],
          ["Self-study with videos", "Cheap and flexible", "No marking feedback", "Revision of known topics"],
          ["Boarding school in Indore", "Labs, teachers, peers", "Cost and distance from home", "Families who want the full campus experience"],
        ],
      },
    },
    {
      heading: "Summer heat, monsoon and festival weeks in the Narmada valley",
      paragraphs: [
        "Western Madhya Pradesh is hot from April to June, and the May IB and IGCSE session lands in the worst of it. Midday study is a struggle, so early morning or after-dark lessons are common. The monsoon from late June brings relief, along with power cuts and weaker mobile signals on stormy days.",
        "The agricultural year colours the household calendar. Wheat and gram are harvested in spring, and the soybean and cotton seasons in the monsoon months keep farming families busy. Children from those homes often help or travel, so we keep lesson times flexible.",
        "Festivals set the autumn rhythm. Raksha Bandhan, Dussehra and Diwali arrive close to the November sessions, and Holi falls in March just before the final push for May. We front-load revision and keep festival weeks light, which keeps a student rested and attentive on exam day.",
      ],
      table: {
        caption: "A year of study in Manawar",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["March to May", "Holi, harvest, peak heat, May sessions", "Early or late lessons, timed past papers"],
          ["June to August", "Monsoon, Raksha Bandhan, new term", "Settle new subjects, steady topic work"],
          ["September to November", "Dussehra, Diwali, November sessions", "Mocks first, light festival weeks"],
          ["December to February", "Cool weather, school terminal exams", "Rebuild weak topics, start May revision"],
        ],
      },
    },
    {
      heading: "Where students from Manawar go after school",
      paragraphs: [
        "After an international syllabus, students from the Manawar area look in three directions: universities abroad, private universities in India, and central or state institutions through national entrance tests.",
        "Staying in India, degree entry rests on equivalence certificates from the Association of Indian Universities for the Diploma or for IGCSE with A Level, plus CUET-UG scores for central universities. The tests for engineering and medicine apply their own subject rules from year to year; read the bulletin before giving up any subject at school.",
        "Inside the state, Indore carries the weight: IIT Indore, IIM Indore and the Devi Ahilya university, with Bhopal beyond. Pune, Delhi and Mumbai draw the rest. Overseas, students apply to the United Kingdom, Canada, the United States, Australia and Singapore, and we offer admissions test preparation separately.",
        "Pick subjects with the end point in mind. A short conversation before your school's subject deadline is usually enough to set a sensible plan.",
      ],
    },
    {
      heading: "IB Mathematics and the sciences, taught on screen",
      paragraphs: [
        "IB Mathematics is split into Analysis and Approaches, heavy on algebra and calculus, and Applications and Interpretation, heavy on data and modelling. The first fits engineers, mathematicians and physicists, and the second fits economics, psychology or business. We help weigh the choice without steering a child towards the harder course.",
        "Online mathematics works because the tutor sees handwriting appear on the shared board and corrects method as the mistake happens. Paper 1, without a calculator, needs short, frequent practice. Paper 2 needs neat working and fluent calculator use.",
        "The sciences punish careless reading. Students drop marks on a graph with a mislabelled axis, a unit left off an answer, or an explanation that names the idea but never links cause to effect. Sessions drill those habits with real past questions. Practical method can be rehearsed on screen, though nothing replaces handling apparatus in a school or centre lab.",
        "We start with topics, move to mixed questions and finish with full papers in the final term, so that understanding comes before speed.",
      ],
    },
    {
      heading: "What a good first month looks like for a Manawar student",
      paragraphs: [
        "A first month should answer one question: where exactly is the student relative to the course? In week one the tutor sets a short diagnostic in the chosen subject, using genuine past-paper questions from the right syllabus, and marks it with the official scheme. The result is not a grade but a map, showing which topics are firm and which are shaky.",
        "Weeks two and three go to the weak patches. For an MYP learner that might be writing to criterion descriptors; for a Diploma student it could be Paper 2 problem solving in Chemistry or the structure of a Business Management case answer. Each lesson ends with a small task the student does alone, and the next lesson begins by marking it.",
        "By week four the pattern is set: a regular day and hour, a notebook of corrected errors, and a short list of what to revisit. Parents see the same thing in the written notes, so there is no need to guess whether the money is working. If progress is slow, we adjust the plan or change the tutor rather than carry on hoping.",
        "A town household can help in simple ways. Keep the lesson hour free of visitors and shop calls, charge the laptop in advance for power-cut evenings, and let the student explain the day's topic at dinner. Teaching it back is the best check that it has stuck.",
      ],
    },
    {
      heading: "Core or Extended for IGCSE students",
      paragraphs: [
        "Mathematics, the sciences and several other IGCSE subjects are examined at two tiers. The Core papers cap the grade a student can reach; the Extended papers lift the ceiling and ask a good deal more. Anyone eyeing IB Mathematics AA or an A Level in the subject should sit Extended.",
        "Cambridge and Pearson Edexcel papers are laid out differently, and the syllabus code tells us which applies, for instance 0620 for Cambridge Chemistry or 4CH1 for Edexcel. We ask for it when you book.",
        "Leave doors open when picking subjects. Include a science the child likes, a mathematics tier that challenges without crushing confidence, and a language the home already supports; Hindi, spoken in nearly every Manawar household, fits.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the board, programme, subject, level and exam session, and say you are in Manawar. WhatsApp +91 7439 368 115 is enough." },
    { title: "Receive a shortlist", description: "We reply with tutors who have taught your exact syllabus and can fit your evening slots." },
    { title: "Try a free lesson", description: "The first lesson is free and covers a topic the student needs." },
    { title: "Confirm in writing", description: "Subject, timings and rate are set down in writing before paid lessons begin." },
    { title: "Review and adjust", description: "A note follows each class, and the tutor or timing can change if needed." },
  ],

  whyPoints: [
    { title: "Straight about format", description: "Online only in Manawar, with no vague promise of a home visit." },
    { title: "Syllabus-matched", description: "Tutors are chosen for the course, level and board, not just a subject label." },
    { title: "Written notes", description: "Parents see a short summary after every lesson." },
    { title: "Planned for local conditions", description: "Slots avoid midday heat and are easy to move on a power-cut evening." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write assessments, essays or coursework." },
    { title: "Easy to change", description: "If the first match is wrong, we swap the tutor free of charge." },
  ],

  faqs: [
    { question: "Is home tuition for IB or IGCSE available in Manawar?", answer: "Online alone. No IB Gram tutor will turn up at a Manawar address, since house visits exist only in Gurugram and parts of Delhi NCR. You get a live, private lesson on a laptop at your own table, a shared whiteboard, and written notes after each class." },
    { question: "What do IB and IGCSE tutors in Manawar charge?", answer: "Four things set it: which subject, at which level, with how experienced a tutor, and how many sessions a week. A written quotation reaches you before you commit; we keep no standard price list. Because the opening lesson is free, the teaching can be judged before any rupee is spent." },
    { question: "Is there an IB or Cambridge school in Manawar?", answer: "Our checks found none in the town or elsewhere in Dhar district, so we name no local school. Indore, about 129 kilometres off, holds the nearest campuses we could verify. Students in Manawar commonly follow an online school or prepare privately, and any school should be confirmed with its own office." },
    { question: "Can my child take IGCSE as a private candidate from Dhar district?", answer: "In many cases, yes. A Cambridge or Pearson Edexcel centre must accept the entry, and science practical papers require some arrangement for equipment. Registration windows are firm. IB Gram does not conduct exams; our part is the teaching that gets your child ready for the papers." },
    { question: "What time of day is best for lessons?", answer: "Early evening or after dinner, since afternoons in western Madhya Pradesh are very hot from April to June. Weekends suit longer sessions. We move lessons around Diwali, Holi and local exams." },
    { question: "Will a tutor write the IA or Extended Essay?", answer: "Absolutely not, and a tutor who offered would be putting the diploma at risk. What a tutor may do is read the marking criteria with your child, talk about what makes an investigation convincing and point out thin reasoning. The words, the data and the conclusions have to be your child's, as the IB's integrity rules demand." },
    { question: "What internet is needed for online lessons?", answer: "Very little: a few megabits per second handles video plus a whiteboard, so ordinary broadband or a dependable 4G phone hotspot is fine. Near the mining and cement areas, where towers may be distant, a second operator's SIM kept ready is cheap insurance." },
    { question: "Is the trial lesson really free?", answer: "It is. Your child sits one proper lesson at no cost, on a topic that is troubling them, and you receive notes afterwards. Nothing is owed if you stop there, and if the teacher and student do not click we introduce a different person before any paid class starts." },
    { question: "Do you teach MYP and PYP too?", answer: "We do. The younger programmes get reading, number work and criterion-based writing help, and the Diploma gets subject depth. If the first tutor suits, the same person can walk a child up from MYP to DP without a handover." },
    { question: "How should I choose between IB Maths AA and AI?", answer: "Think about the degree. Algebra-and-calculus courses such as engineering or pure science point towards Analysis and Approaches, while statistics-led subjects such as economics or psychology point towards Applications and Interpretation. Either can be taken at two levels. One sample lesson of each is a fair way to decide." },
    { question: "Can IB students still sit JEE or NEET?", answer: "Frequently, so long as the combination of subjects satisfies that year's published conditions. Recognition of the IB or IGCSE and A Level pairing, and the exact science subjects taken, decide it, and only the official bulletin settles those. Where we can help is the Physics, Chemistry, Biology or Mathematics itself." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge International and Pearson Edexcel. The syllabus code, such as 0625 for Physics or 4PH1, tells us which papers apply, and we match a tutor who has taught that specification." },
    { question: "When should I book for the November session?", answer: "Early August is ideal. November follows Dussehra and Diwali, so we keep those weeks light and bring the heavy practice earlier." },
    { question: "Can students in Kukshi, Dhar or Mhow use the same service?", answer: "Anyone with a laptop and a steady connection can. A child in Kukshi, Bagh, Dhar or Mhow joins exactly the same kind of live lesson as one in Manawar, at an hour that suits their own school bus and home routine." },
    { question: "How do I start?", answer: "Open WhatsApp and write to +91 7439 368 115, or mail support@ibgram.com, giving the class, the subject, the school or online school, and that you live in Manawar. Expect a proposed tutor and a trial slot back within about a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest city with international campuses, 129 kilometres away." },
    { label: "IB and IGCSE tutors in Ujjain", href: "/ujjain/", description: "A Malwa neighbour with online lessons." },
    { label: "IB and IGCSE tutors in Ratlam", href: "/ratlam/", description: "Another western Madhya Pradesh page." },
    { label: "IB and IGCSE tutors in Bhopal", href: "/bhopal/", description: "The state capital page." },
    { label: "IB tutors across India", href: "/india/", description: "Online IB and IGCSE tuition for students anywhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works, programme by programme." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject help." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject, TOK and Extended Essay coaching." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
  ],

  closingHeading: "Book a free lesson from Manawar",
  closingBody:
    "Give us the class, the subject and the exam sitting in view, and we will propose a tutor, describe how a screen lesson unfolds and book the free opener. Reach us on WhatsApp at +91 7439 368 115 or at support@ibgram.com.",
};
