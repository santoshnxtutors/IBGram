import type { CitySeoPage } from "../types";

/**
 * Rangia (Rangiya) is a railway-junction town in Kamrup district, Assam. No IB or Cambridge school
 * there could be confirmed, so stripSchools is empty. The clusters point to Guwahati and Kolkata
 * using names already checked on the Guwahati page.
 */
export const rangia: CitySeoPage = {
  slug: "rangia",
  countryName: "Rangia",
  countryNameLong: "Rangia, Assam",
  demonym: "Rangia",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after the early Assam sunset when the day's work is done, and rain-proof weekend mornings",
  lastUpdated: "2026-09-21",
  state: "Assam",
  stateCode: "IN-AS",
  geo: { latitude: 26.4667, longitude: 91.6333 },
  wikipedia: "https://en.wikipedia.org/wiki/Rangiya",
  alternateNames: ["Rangiya", "Rangia Kamrup", "Rangia Assam", "Rangia Junction"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rangia | Live Online Tuition, Assam",
  metaDescription:
    "Live online IB and IGCSE tutoring for Rangia students in Kamrup, Assam: private one-to-one lessons from home, subject-matched tutors and a free trial.",
  h1: "IB and IGCSE Tutors and Online Tuition from Home in Rangia",
  heroEyebrow: "IB & IGCSE TUITION FOR RANGIA, KAMRUP, ASSAM",
  heroSubtitle:
    "Home-based tuition for IB and IGCSE students in Rangia is online and one to one, since our tutors do not call at houses in Assam; home visits are offered only in Gurugram and parts of Delhi NCR. Rangia has the railway junction, the Baralia river and a bustling market, but no international-curriculum school we could confirm, and Guwahati's campuses are a commute away. A tutor who has already taught your child's exact papers closes that distance. Send the course details and we arrange a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Rangia",
  imageAltText: "Rangia student taking a live one-to-one IB Economics lesson on a laptop at home in Assam",
  secondaryKeywords: [
    "IB tutor in Rangia",
    "IGCSE tutor in Rangia",
    "IB home tuition Rangia",
    "IGCSE home tuition Rangia",
    "IB private tuition Rangia",
    "IB Maths tutor Rangia",
    "IGCSE Maths tutor Rangia",
    "IB Physics tutor Rangia",
    "IB Chemistry tutor Rangia",
    "IB Biology tutor Rangia",
    "IB DP tutor Rangia",
    "IB MYP tutor Rangia",
    "IB PYP tutor Rangia",
    "IGCSE online tuition Rangia",
    "IB tutor Rangiya",
    "IGCSE tutor Rangiya Assam",
    "IB online classes Kamrup",
    "IB tuition lower Assam",
  ],

  heroTrustPoints: [
    "One student, one tutor, live on video, with no recorded courses",
    "Tutors experienced in IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Timings set around Assam's early dusk, monsoon rain and Bihu weeks",
    "A free opening lesson and a written note after every class",
    "A replacement tutor at no charge if the match is wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before you commit" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Studying an international syllabus from a railway town on the Baralia",
    paragraphs: [
      "Rangia, also written Rangiya, is a town in Kamrup district in Lower Assam, with the Baralia river running through it and National Highway 27 passing through the centre. Its junction station, on the line between New Bongaigaon and Guwahati and the branch towards Murkongselek, makes it a railway town, and an Army division is based a few kilometres away. Most students study Assam board or CBSE and look towards Gauhati University, the IITs or medical colleges. A small circle of families asks for IB or IGCSE, usually because a parent has a transferable job in the railways, the Army or a bank, or relatives live abroad.",
      "Those families face a plain geographic fact. We found no school in Rangia that runs the IB or a Cambridge or Edexcel IGCSE, and the one Cambridge-linked campus in Guwahati is a long daily trip. So the working answer is online: a live lesson with a tutor who has taught the paper, at your own desk. Our tutors do not visit homes in Rangia, and nobody pretends otherwise.",
      "What follows explains how the arrangement runs, from the choices open to a Rangia family to the effect of Assam's rains on the exam calendar. IB Gram is independent of the IB, Cambridge, Pearson and any school, and tutors teach and coach but never write internal assessments, essays or coursework on a student's behalf.",
    ],
  },

  programmesIntro:
    "The four IB programmes meet a Kamrup family late and in odd order, often through relocation or a screen-based school. A tutor's task is different at each.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Six themes of inquiry, a learner profile and a closing Exhibition. Help at this age is short and gentle: reading aloud, number play and finding words for what the child has discovered.",
      countryNote:
        "An Assamese-speaking child meets English in two registers, schoolbook and spoken. A relaxed twenty-minute slot grows spoken confidence quietly.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against criteria, with a Personal Project at the end. Tutors teach how to unpack a task and write for the descriptors.",
      countryNote:
        "Coming from SEBA textbooks, a student must learn that MYP rewards explanation, not recall. Weekly sessions in the first two terms ease that shift.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects alongside Theory of Knowledge, the Extended Essay and CAS. Lessons target the exam papers and explain how internal assessments are judged; they never author them.",
      countryNote:
        "In lower Assam a Diploma student seldom has a Higher Level teacher within reach, so the remote tutor carries the hardest topics at the pace the course demands.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs two or three DP courses with a vocational strand and a reflective project. Our help goes to the DP courses and to academic English.",
      countryNote:
        "Almost no school in the north-east offers CP. Requests are handled case by case, with a tutor matched to the DP courses chosen.",
    },
  ],

  subjectsIntro:
    "A tutor is chosen for the precise course and level, and for the patience a student needs when earlier schooling was in Assamese or Assam-board English.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, vectors and reasoning, with Paper 1 stamina built in short sessions." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator-led solutions with clear written working." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, thermal physics, waves and fields, with data questions and the practical method." },
    { name: "Chemistry", levels: "SL / HL", description: "Moles, energetics, equilibrium and organic pathways, with the arithmetic slips that cost marks." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecosystems, with the vocabulary and structure the mark scheme rewards." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development economics, with tea, rail freight and Brahmaputra-valley trade as live examples." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study reading, finance calculations and applying tools to unseen firms." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation language and extended-response structure." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, comparison and the individual oral." },
    { name: "Assamese A / Hindi B", levels: "SL / HL", description: "Literary analysis for Assamese speakers, or structured writing in Hindi B." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems, floods, wetlands and river dynamics, topics a Brahmaputra-valley student understands first-hand." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition, coached on structure only." },
  ],
  igcseSubjectsIntro:
    "IGCSE tutoring spans Cambridge and Pearson Edexcel. The Core or Extended tier is chosen early since it sets the top grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Algebra, geometry, trigonometry and statistics, with tier choice made from evidence." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and functions for students bound for IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, electricity, waves and the practical-skills paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Moles, reactivity, organic chemistry and analysis questions." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, inheritance and ecology, with experiment write-ups in exam language." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Programming logic, databases and trace tables." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking for students from Assamese-speaking homes." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Comprehension and written tasks to the board's expectations." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Definitions, calculations and data response." },
  ],

  regionsTitle: "Rangia and the Kamrup places we teach",
  regionsIntro:
    "Since every lesson is online, the map matters for signal, flooded roads and the length of a school day. Here is how we think about each part of the area.",
  regions: [
    { name: "Rangia town centre", note: "Around the NH27 market and the Baralia, where most private schools and tuition centres sit; mobile data is usually dependable for video." },
    { name: "Rangia Junction side", note: "Railway staff families live near the station and are used to transfers, which is one reason some look at portable international syllabuses." },
    { name: "Redhorn and Army-linked areas", note: "Service families on posting cycles for whom continuity of syllabus matters more than the school building." },
    { name: "Kamalpur", note: "A nearby Kamrup town where students share the evening bus timetable and look to Guwahati for further study." },
    { name: "Chhaygaon", note: "A smaller town to the south of the Brahmaputra approaches with mixed farming and service households." },
    { name: "Boko", note: "A town further south in Kamrup where connectivity may be weaker and online sessions need a backup connection." },
    { name: "Hajo", note: "An old pilgrimage town close to Guwahati, whose families often have better access to the city's schools." },
    { name: "Nalbari", note: "A neighbouring district town to the north-west, whose students use the same online timetable." },
    { name: "Amingaon, Guwahati", note: "The district office area on Guwahati's north bank, a bridge between Rangia and the city's schools." },
    { name: "Guwahati", note: "The state's main city, with Gauhati University, IIT Guwahati and the nearest Cambridge-linked school." },
  ],

  schoolClusters: [
    {
      city: "Rangia and Kamrup district",
      note: "Checks for an IB or Cambridge campus in Rangia and the nearby stretch of Kamrup turned up none, which makes local choice thin. Most students rely on a screen-based school, private IGCSE entry, or a move in the senior years.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati (Zoo Road)",
      note: "Guwahati's one confirmed Cambridge-affiliated school offers IGCSE and A Level; some Rangia families look at it for Class 9 and above, accepting the daily travel or a local stay.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest large city with an established IB presence, reached by train, and the usual choice when a family decides on boarding or relocation.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram stands apart from every school here. International School Guwahati, The Heritage School and Calcutta International School are mentioned as places where an international syllabus is taught, with no link to us and no endorsement. Check admission and programmes with the school directly.",

  tutorsIntro:
    "Our tutors live in different parts of India and teach on Indian time. A Rangia student is not limited to whoever lives in Kamrup, so we match on how well the tutor knows the subject and how well they explain it.",

  modesIntro:
    "In Rangia the format is online. These are the three ways families usually use it.",
  modes: [
    {
      title: "Private online lessons at home",
      description: "A one-to-one video lesson with a shared board, taken from your own room.",
      bullets: [
        "No tutor visits in Rangia; home visits run only in Gurugram and parts of Delhi NCR",
        "A laptop, a notebook and a pair of headphones are all that is needed",
        "Handwritten working is photographed and discussed live",
        "A written note for parents follows each lesson",
      ],
    },
    {
      title: "Run-up to the papers",
      description: "A closer sequence of lessons in the weeks before a May or November session.",
      bullets: [
        "Three or four sessions a week for about a month",
        "Past papers marked against the official scheme",
        "Weak topics rebuilt from mock results",
        "A free day before the first paper",
      ],
    },
    {
      title: "All-year weekly support",
      description: "One lesson a week in a chosen subject, with the same tutor throughout.",
      bullets: [
        "Keeps a fast syllabus under control",
        "Works well for MYP and the first Diploma year",
        "Moves around Bihu, Durga Puja and school exams",
        "Starts with a free trial",
      ],
    },
  ],

  sections: [
    {
      heading: "What are the realistic ways to follow IB or IGCSE from Rangia?",
      paragraphs: [
        "Four routes are open to a Rangia household. One is an online international school with lessons streamed to the child. Another is a day or boarding place in Guwahati or Kolkata. A third is relocation, frequently triggered by a railway or Army posting. The last is entering IGCSE papers privately through an approved centre. Each asks something different of a tutor.",
        "Online schools demand self-direction that a younger student may lack, and a tutor with a fixed weekly slot gives that structure. A boarder who comes home at the break wants a particular weak topic repaired. A relocating family wants the child ready for a new school's pace. A private candidate needs the widest cover, because there is no class teacher setting the timetable.",
        "We do not push any one door. Age, comfort in English and plans for university decide it. What we can promise is a straight account of the tutoring each route would need and of how much help is realistic.",
        "If you are still weighing, begin with one subject and a trial lesson. An hour is usually enough for an experienced tutor to see how far the student stands from the course, which tells you a great deal.",
      ],
    },
    {
      heading: "Assam board, CBSE, IB and IGCSE: what separates them?",
      paragraphs: [
        "Most Rangia students sit the Assam board examinations (SEBA at Class 10, AHSEC at Class 12) or CBSE, and from there look towards Gauhati University, JEE Main, NEET-UG or CUET-UG. These routes reward recall and speed. The IB and IGCSE ask for reasoning, data handling and long answers in English.",
        "A student who changes board is rarely behind in content. The gap is usually in the style of answer and the command terms, and that is exactly what a few weeks of targeted tutoring fixes.",
      ],
      table: {
        caption: "Boards seen from a Kamrup household",
        columns: ["Board", "How students are examined", "Language", "Usual next step"],
        rows: [
          ["Assam board (SEBA / AHSEC)", "Written papers at Class 10 and Class 12", "Assamese, Bengali, Hindi or English", "Gauhati University, JEE Main, NEET-UG, CUET-UG"],
          ["CBSE", "Board papers with internal marks", "English or Hindi", "JEE Main, NEET-UG, CUET-UG"],
          ["IB Diploma", "Six subjects, internal assessments and final papers", "English", "Universities abroad, Indian private universities, CUET-UG with equivalence"],
          ["Cambridge or Edexcel IGCSE", "Subject papers at Core or Extended tier", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "Why do fees for IB and IGCSE tuition vary from tutor to tutor?",
      paragraphs: [
        "Fees for IB and IGCSE tuition in Rangia depend on the subject and level, how experienced the tutor is, how many lessons a week you take and how long you plan to continue. You receive a written quote before committing. We keep no standard price list, because a Class 6 reading lesson and Higher Level Physics are different pieces of work.",
        "Teaching online removes the cost of a tutor's travel and widens choice. In a town like Rangia, where the nearest comparable specialist could be in Guwahati, picking purely on subject strength is the biggest practical gain.",
        "Families get the most from their budget by timing lessons: weekly help in the first term of a new programme, heavier cover before mocks and a last push before the papers. Beginning with one subject and adding another later is common.",
      ],
      bullets: [
        "Higher Level Mathematics and the sciences generally need more senior tutors than a middle-school language slot",
        "PYP, MYP, DP and IGCSE each draw on a different group of tutors",
        "One lesson a week totals less than a dense month before the papers",
        "Requests made close to a sitting find fewer tutors free",
        "A longer commitment makes timetables easier for everyone",
      ],
    },
    {
      heading: "Online tutor, tuition centre or self-study in Rangia?",
      paragraphs: [
        "Rangia families weigh a local tuition centre, a private online tutor and self-study from videos. Local centres serve the Assam board and entrance exams, and seldom touch IB or IGCSE papers. Videos help with revision but nobody marks the work. A live tutor brings exact syllabus knowledge and feedback, and asks in return for a quiet space and a reliable signal.",
        "The table is honest about the limits of online tuition: it cannot replace hands-on laboratory work.",
      ],
      table: {
        caption: "Study options for an IB or IGCSE student in Rangia",
        columns: ["Option", "Strength", "Limit", "Suits"],
        rows: [
          ["Private online tutor", "Exact syllabus and marked practice", "Needs signal; no wet lab", "Most IB and IGCSE students"],
          ["Local tuition centre", "Peers and a fixed timetable", "Built for board and entrance exams", "Students also sitting Assam board papers"],
          ["Self-study with videos", "Cheap and flexible", "No marking feedback", "Revision of topics already understood"],
          ["School in Guwahati or Kolkata", "Labs, teachers and peers", "Cost and distance from home", "Families who want the full campus experience"],
        ],
      },
    },
    {
      heading: "Monsoon, Bihu and the Assam study calendar",
      paragraphs: [
        "Assam is wet. Rangiya's annual rainfall is around 1,750 millimetres, and the heavy months from June to September bring floods to parts of the Brahmaputra valley, broken roads and power cuts. A tutor on a screen can keep working when a bus cannot, but a lesson may still shift by a day when the lights fail. That is why we keep the schedule loose in monsoon months.",
        "The sun sets early in the north-east, so evenings feel long and study can start soon after school. Winters are mild, with fog at dawn, and summer highs are moderate compared with the plains, which makes April and May study more comfortable than in much of India. The May IB and IGCSE session therefore falls in warm, humid weather rather than fierce heat.",
        "Bihu sets the festival rhythm: Magh Bihu in January, Bohag or Rongali Bihu in April and Kati Bihu in October. Durga Puja arrives in the weeks before the November sessions, and Diwali follows. We front-load revision before these weeks and keep festival days light.",
      ],
      table: {
        caption: "A study year in Rangia",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Magh Bihu, cool dry weather, school exams", "Steady topic work and mock papers"],
          ["April to June", "Bohag Bihu, rising humidity, May sessions, first rains", "Timed past papers, flexible slots"],
          ["July to September", "Peak monsoon, floods, power cuts, new term", "Online-first, short flexible sessions"],
          ["October to December", "Durga Puja, Kati Bihu, Diwali, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Rangia go next?",
      paragraphs: [
        "Three broad destinations open up after an international syllabus: universities overseas, private universities within India, and central or state institutions reached through national entrance tests.",
        "Within India, the Association of Indian Universities issues equivalence for the Diploma and for IGCSE with A Level, and CUET-UG scores open central university seats on the combinations each course names. Entrance tests for engineering and medicine publish their own subject rules every year, so read the official bulletin before dropping any subject.",
        "Closest to home sit Gauhati University, Cotton University and IIT Guwahati, plus the state's medical colleges for those who qualify. Plenty of students aim further, at Kolkata, Delhi or Bengaluru. Overseas, destinations include the United Kingdom, Canada, the United States, Australia and Singapore, and we offer admissions test preparation separately.",
        "Working backwards from the intended course avoids a wasted year. One short conversation before your school's subject deadline usually settles the plan.",
      ],
    },
    {
      heading: "How online lessons handle IB Mathematics and the sciences",
      paragraphs: [
        "IB Mathematics comes as Analysis and Approaches, built on algebra and calculus, or Applications and Interpretation, built on data and modelling. Engineers and physicists lean to the first, economists and psychologists to the second. We help weigh the choice without nudging a student toward the harder course.",
        "Online mathematics works because the tutor sees the student's handwriting appear on a shared board and corrects method as the slip happens. Paper 1, without a calculator, needs short and frequent practice. Paper 2 needs neat working and calculator fluency.",
        "Marks in Physics, Chemistry and Biology slip away through misread graphs, missing units and explanations that stop short of cause and effect. Lessons rehearse those habits on real past questions. Experimental method can be talked through on screen, yet time with real apparatus in a lab stays valuable.",
        "The order is topic work first, then mixed questions, then full papers under time in the final term. Speed is built on understanding, never the other way round.",
      ],
    },
    {
      heading: "What the lessons look like in practice for a Rangia student",
      paragraphs: [
        "Picture a Class 11 student in Rangia on a Tuesday evening in September, rain on the roof and the laptop plugged in early in case the power goes. The tutor opens with the error log from the last lesson, three questions on electric fields that went wrong, and asks the student to redo one without notes. Only then does new content start.",
        "The shared board fills with the student's own working, which the tutor annotates in a second colour. When a sign slips in a vector problem, it is caught at the line where it happened, not at the end of the page. Twenty minutes in, the tutor switches to a past-paper question and asks the student to talk through the plan aloud before writing anything.",
        "The hour ends with a task for the next day and a note sent to the parent: what was covered, what stayed shaky, and which mark-scheme phrases to remember. If the weather has cut the signal, the lesson moves by a day, and no fee is lost to a flooded road.",
        "Younger students get shorter, lighter sessions that focus on reading and talking. In every case, the point is the same: regular contact with someone who knows the syllabus, in a setting where the student feels able to say that something makes no sense.",
      ],
    },
    {
      heading: "Choosing between Core and Extended in IGCSE",
      paragraphs: [
        "Mathematics, the sciences and some other IGCSE subjects offer two entry tiers. Core papers limit the best grade available; Extended papers lift that limit but are harder. Anyone planning IB Mathematics AA or A Level study should be on Extended.",
        "The two boards structure their papers in different ways, so before the first session we need the syllabus number printed on your child's subject list. Cambridge Chemistry is 0620 and the Edexcel equivalent is 4CH1; past papers, mark schemes and command words all depend on that number.",
        "Keep doors open when choosing: one science that interests the child, a mathematics tier that stretches but does not crush, and a language the family already speaks. English is compulsory in practice; Assamese or Hindi fits next.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Write to +91 7439 368 115 on WhatsApp with the board, programme, subject, level and exam sitting, and mention Rangia." },
    { title: "Get a shortlist", description: "A shortlist comes back of people who have taught those very papers and have free evenings." },
    { title: "Take the free lesson", description: "The opening lesson is free and covers a topic the student needs." },
    { title: "Settle the plan in writing", description: "Subject, timings and rate are written down before paid lessons begin." },
    { title: "Review as you go", description: "Notes follow every class; a tutor or timing swap is available when needed." },
  ],

  whyPoints: [
    { title: "Open about format", description: "Online only in Rangia, with no suggestion of a house visit." },
    { title: "Matched to the papers", description: "The match is made on course, level and board rather than on a loose subject name." },
    { title: "Notes after each lesson", description: "Parents see what was covered and what comes next." },
    { title: "Planned for Assam weather", description: "Slots are easy to move on flood or power-cut days." },
    { title: "Coaching only", description: "Tutors never write assessments, essays or coursework for students." },
    { title: "Easy to switch", description: "If the first match is wrong, we replace the tutor at no charge." },
  ],

  faqs: [
    { question: "Is there home tuition for IB or IGCSE in Rangia?", answer: "Just the online form. Visits to the house are something IB Gram offers in Gurugram and parts of Delhi NCR and nowhere in Assam, so a tutor will not turn up in Rangia. The substitute is a live private class at your own table, with a drawing board both of you can write on and notes sent once it ends." },
    { question: "How much do IB and IGCSE tutors in Rangia charge?", answer: "Subject, level, tutor seniority and weekly frequency set the price, and a written quote reaches you before any commitment. A printed rate card does not exist. Since the opening lesson is free, quality can be judged before a rupee changes hands." },
    { question: "Does Rangia have an IB or Cambridge school?", answer: "We found none in Rangia or elsewhere in Kamrup that we could confirm, so none is named as local. Guwahati has one Cambridge-linked school and Kolkata has more established IB campuses. Many local students follow online schools. Confirm any school directly." },
    { question: "Can my child sit IGCSE as a private candidate from Kamrup?", answer: "Often. The catch is that an approved centre has to take the entry and science practicals need equipment arranged, and closing dates for entry do not move. We are tutors, not an exam body; our work is getting the student ready to sit." },
    { question: "What time of day suits students in Rangia?", answer: "Early evening, because dusk comes early in Assam and the day's school and tuition rounds are done by then. Weekend mornings suit longer sessions. In monsoon weeks we keep slots flexible and around Bihu and Durga Puja we lighten the load." },
    { question: "Will a tutor write the IA or Extended Essay?", answer: "Never. A tutor can read the criteria with your child, discuss what a convincing investigation looks like and flag thin reasoning, but the writing, data and conclusions must be your child's. Anything else breaks the IB's integrity rules and risks the diploma." },
    { question: "What internet do I need for online lessons?", answer: "Very little: a few megabits per second handles video and a shared board, so ordinary broadband or a dependable 4G hotspot will do. During the monsoon, a second operator's SIM kept as backup is cheap insurance when one network drops." },
    { question: "Is the free trial lesson genuine?", answer: "It is. The lesson is real teaching on a topic that is giving your child trouble, with a written summary at the end, and it costs nothing. You owe nothing if you decide against continuing, and a poor pairing leads to a new tutor before any payment starts." },
    { question: "Do you teach MYP and PYP?", answer: "Yes, all four programmes. A Class 3 child in PYP might need only reading aloud and number games, while a Class 9 student in MYP needs the criteria decoded, and a Diploma candidate needs subject depth. A good match can stay with the learner across those stages." },
    { question: "How should I choose between IB Maths AA and AI?", answer: "Start from the intended degree. Algebra-and-calculus subjects such as engineering favour Analysis and Approaches; statistics-led ones such as economics or psychology favour Applications and Interpretation. Both can be taken at Standard or Higher Level, and a taster lesson in each helps." },
    { question: "Can an IB student still sit JEE or NEET?", answer: "Sometimes, depending on the subjects chosen and on that year's published rules. Whether the IB or IGCSE with A Level counts, and which sciences were taken, are for the official bulletin to settle. Our contribution is the Physics, Chemistry, Biology or Mathematics teaching." },
    { question: "Which IGCSE boards do you support?", answer: "Cambridge International and Pearson Edexcel are both covered. Quote the number on your child's subject list (0625 is Cambridge Physics, 4PH1 is Edexcel Physics) and we pick someone who has actually taught those papers." },
    { question: "When should I book for the November session?", answer: "By early August if you can. November follows Durga Puja and Diwali, and the autumn Bihu falls in October, so we keep those weeks gentle and move the heavy past-paper practice into September." },
    { question: "Can students in Nalbari, Kamalpur or Hajo take the same lessons?", answer: "They can. The only requirements are a laptop and a connection that holds. Whether the house is in Nalbari, Kamalpur, Chhaygaon or Hajo, the lesson is the same live, private session, scheduled around that family's own school run." },
    { question: "How do I get started?", answer: "Send a message on WhatsApp to +91 7439 368 115 or an email to support@ibgram.com. Say which class the child is in, the subject that worries you, the school or online school, and mention Rangia. A tutor suggestion and a free-lesson time normally follow in a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "The state's main city, with the nearest Cambridge-linked school." },
    { label: "IB and IGCSE tutors in Nalbari", href: "/nalbari/", description: "A neighbouring Assam district town with online lessons." },
    { label: "IB and IGCSE tutors in Barpeta", href: "/barpeta/", description: "Another lower Assam page with the same format." },
    { label: "IB and IGCSE tutors in Tezpur", href: "/tezpur/", description: "A north-bank Assam city page." },
    { label: "IB tutors across India", href: "/india/", description: "Online IB and IGCSE tuition for students anywhere in India." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works, programme by programme." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject help." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Subject, TOK and Extended Essay coaching." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a free trial lesson." },
  ],

  closingHeading: "Book a free lesson from Rangia",
  closingBody:
    "Rangia families can begin today: name the class, the subject and the sitting, and we will line up a tutor and a free first lesson. The number for WhatsApp is +91 7439 368 115, and the email address is support@ibgram.com.",
};
