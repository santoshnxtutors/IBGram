import type { CitySeoPage } from "../types";

/**
 * Mandi (Himachal Pradesh), the Beas-side town and home of IIT Mandi at Kamand. Not Mandi Gobindgarh (Punjab)
 * or Mandi Dabwali (Haryana), which have their own pages. No IB or Cambridge/Edexcel school confirmed in the
 * town, so stripSchools is empty; clusters use Chandigarh and Dehradun names from neighbouring pages.
 */
export const mandi: CitySeoPage = {
  slug: "mandi",
  countryName: "Mandi",
  countryNameLong: "Mandi, Himachal Pradesh",
  demonym: "Mandi",
  flagCode: "in",
  countryCode: "IN",
  region: "Himachal Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening and weekend slots, rearranged for monsoon landslide days, Shivratri fair week and snowed-in winter stretches",
  lastUpdated: "2026-09-21",
  state: "Himachal Pradesh",
  stateCode: "IN-HP",
  geo: { latitude: 31.7087, longitude: 76.9320 },
  alternateNames: ["Mandi Himachal", "Mandi town HP", "Choti Kashi"],
  wikipedia: "https://en.wikipedia.org/wiki/Mandi,_Himachal_Pradesh",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Mandi, HP | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Mandi, Himachal Pradesh, taught live one to one online, with a free trial lesson and a rate in writing. Not Mandi Gobindgarh or Dabwali.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Mandi, Himachal Pradesh",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR MANDI, HIMACHAL PRADESH, ONLINE",
  heroSubtitle:
    "This page is for Mandi in Himachal Pradesh, the town on the Beas near IIT Mandi, and not for Mandi Gobindgarh in Punjab or Mandi Dabwali in Haryana, which have their own pages. A family here who wants private tuition at home for an IB or IGCSE course gets one-to-one lessons over video, because our tutors are based elsewhere in India and do not visit houses in Mandi.",
  primaryKeyword: "IB and IGCSE tutors in Mandi",
  imageAltText: "Mandi student studying IB Physics on a laptop at home with the Beas valley visible through the window",
  secondaryKeywords: [
    "IB tutor Mandi",
    "IGCSE tutor Mandi",
    "IB home tuition Mandi",
    "IGCSE home tuition Mandi",
    "IB private tuition Mandi",
    "IB Maths tutor Mandi",
    "IGCSE Maths tutor Mandi",
    "IB Physics tutor Mandi",
    "IB Chemistry tutor Mandi",
    "IB Biology tutor Mandi",
    "IB DP tutor Mandi",
    "IB MYP tutor Mandi",
    "IB PYP tutor Mandi",
    "IGCSE online tuition Mandi",
    "online IB tutor Himachal Pradesh",
    "IB tutor Mandi Himachal Pradesh",
    "IB tutor Sundernagar",
    "IGCSE tutor near IIT Mandi",
    "IB tutor Kamand",
    "Cambridge IGCSE tutor Mandi HP",
    "Edexcel IGCSE tutor Mandi HP",
    "IB Computer Science tutor Mandi",
  ],

  heroTrustPoints: [
    "Mandi in Himachal Pradesh only, distinct from Mandi Gobindgarh and Mandi Dabwali",
    "Live lessons online; tutors visit homes only in Gurugram and parts of Delhi NCR, never in Mandi",
    "A free first lesson and a written rate before any booking",
    "Independent of schools, IIT Mandi, the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "Mandi, HP", label: "Not Gobindgarh or Dabwali" },
    { value: "PYP to DP", label: "IB stages taught" },
    { value: "Live online", label: "One to one, at home" },
    { value: "Free trial", label: "Before any rate" },
  ],

  intro: {
    heading: "Which Mandi is this, and what international schooling is nearby?",
    paragraphs: [
      "Three towns in North India carry the name Mandi, and the searches get mixed up. This page covers Mandi in Himachal Pradesh, the old Beas-side town known for its stone temples and for the week-long Shivratri fair. Mandi Gobindgarh in Punjab and Mandi Dabwali in Haryana are different places, each with its own page on this site.",
      "Mandi has unusual academic weight for a hill town. IIT Mandi's campus is at Kamand, a short drive away, and a steady flow of professors, researchers and their families has raised local curiosity about global curricula. We checked for an IB World School or an approved Cambridge or Edexcel centre in Mandi itself and could not confirm one. Local schools follow the Himachal Board or CBSE.",
      "So an IB or IGCSE student here is usually doing it by distance: an online school, a boarding school elsewhere with home visits at holidays, or a returning family. Such a child needs a specialist teacher, and that teacher will be online. IB Gram tutors do not visit homes in Mandi, because in-person visits exist only in Gurugram and some parts of Delhi NCR.",
      "We are independent. There is no link with IIT Mandi, the IB, Cambridge, Pearson or any school. Tutors coach and never write a student's IA, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Edexcel IGCSE",
      "Online lessons that avoid winding mountain roads",
      "First lesson free, written rate afterwards",
      "Written note after every session",
      "No visits to Mandi homes, only live online teaching",
    ],
  },

  programmesIntro:
    "A hill-town child can meet the IB at any age through an online school or after a move. The cards below describe each programme and the help that suits it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Classroom work is arranged around shared themes and open questions, and children learn to ask, research and present. The Exhibition in the final year is a group inquiry rather than an exam.",
      countryNote:
        "With fewer extracurricular options in a small hill town, a weekly online story-and-number session gives a young Mandi child extra spoken English and a friendly routine.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged on criteria, and interdisciplinary units link them. Students complete service learning and a Personal Project near the end of the programme.",
      countryNote:
        "Mandi students arriving from a Himachal Board or CBSE background often need help turning knowledge into criteria-based answers, and we practise that with real task sheets.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS across two years, with final examinations in May or November and internal assessments counting towards grades.",
      countryNote:
        "Children of IIT Mandi staff, who often come from other parts of India or abroad, sometimes bring a Diploma syllabus with them, and the tutor keeps continuity through a move.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of DP courses sits beside a career-related study and a reflective project, designed for applied or vocational routes.",
      countryNote:
        "We found no school in the Mandi area running CP. We teach the academic courses where a student is registered elsewhere and say so plainly if another route is better.",
    },
  ],

  subjectsIntro:
    "IIT Mandi's presence pulls many Mandi students towards science and computing, and enquiries reflect that. We confirm syllabus year and level with the registering centre before lessons begin.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof, the usual choice for students aiming at engineering or IIT-style courses." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistical modelling and technology, suited to economics and life sciences." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, fields and quantum topics, with investigation planning and data analysis." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, kinetics, energetics and organic chemistry with careful calculation layout." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, ecology and physiology, including mountain ecosystems as examples." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, object-oriented programming and the HL extension, popular with children of engineering households." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Watersheds, hydropower, glaciers and land use, with the Beas valley as a living case study." },
    { name: "Geography", levels: "SL and HL", description: "Hazards, water resources and population, with hill-region fieldwork examples." },
    { name: "Economics", levels: "SL and HL", description: "Markets, trade and development with tourism and horticulture as regional examples." },
    { name: "Business Management", levels: "SL and HL", description: "Strategy, marketing and operations with case-study reading." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Literary and non-literary analysis, plus the individual oral." },
    { name: "Hindi B", levels: "SL and HL", description: "Second-language reading, writing and speaking." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to behaviour, research methods and evaluation." },
    { name: "Theory of Knowledge", levels: "Core", description: "Knowledge questions and exhibition planning; the essay is entirely the student's." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers sit in the May or June and October or November series, and Edexcel offers January for some subjects. These are the courses Mandi families ask about on both boards.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and data, with separate calculator practice." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Calculus and further algebra for students who want a strong jump into IB Maths AA." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, electricity and waves, with practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, periodic trends and organic basics." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, inheritance, ecology and human biology." },
    { name: "Environmental Management", levels: "Single tier", description: "Ecosystems, resources and human impact, with mountain examples." },
    { name: "Geography", levels: "Single tier", description: "Physical and human geography with map and fieldwork skills." },
    { name: "Computer Science", levels: "Single tier", description: "Computational thinking and programming." },
    { name: "Economics", levels: "Single tier", description: "Demand, supply and policy." },
    { name: "English as a First Language", levels: "Single tier", description: "Directed writing and summary skills." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, writing, listening and speaking." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Available where the board and series allow; code checked first." },
  ],

  regionsTitle: "Mandi areas we teach online",
  tutorsIntro:
    "Mandi lessons are taught over live video by tutors in India, each with the programme or specification shown on their card. The free first lesson lets a family meet one before any decision.",
  regionsIntro:
    "Lessons reach any Mandi household with a workable connection. Below are localities and nearby places families mention, with notes on hill geography and timing.",
  regions: [
    { name: "Old Mandi town and Indira Market", note: "The historic core by the Beas with its temples and narrow lanes. Parking is scarce and climbs are steep, so online study at home is easier than moving around." },
    { name: "Paddal", note: "The open ground and its neighbourhood hosting Shivratri fair events. Lessons are planned around the fair week when traffic and crowds fill the area." },
    { name: "Victoria Bridge and Purani Mandi", note: "The historic crossing over the Beas. Low-lying homes here pay closest attention to monsoon river levels." },
    { name: "Ner Chowk", note: "The junction on the highway towards Kullu and Manali and Chandigarh, and a departure point for families who commute between towns." },
    { name: "Sundernagar road side", note: "The approach to Sundernagar, home to an engineering college and a lake, where academic and government households live." },
    { name: "Kamand and IIT campus area", note: "Faculty, research staff and families linked with IIT Mandi live around here and often arrive with international curriculum experience." },
    { name: "Dharampur side", note: "A gateway towards Shimla and Kasauli used by some families who work in Himachal's capital or in Solan." },
    { name: "Bhiuli and Aut side", note: "Along the Kullu highway, where tunnels and landslide-prone stretches make evening travel unpredictable in the monsoon." },
    { name: "Balh valley villages", note: "A fertile valley just outside town, where broadband can be patchy and a backup hotspot helps." },
  ],
  schoolClusters: [
    {
      city: "Mandi itself",
      note: "We could not confirm any school in Mandi or IIT Mandi's Kamand area teaching the IB or a Cambridge or Edexcel IGCSE. The town's schools follow the Himachal Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Shimla",
      note: "The hill capital has famous boarding schools, yet those we checked are CISCE or CBSE, so Shimla is not a source of IB or IGCSE options either.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh tricity",
      note: "Roughly 200 kilometres south by road, this is the closest place we have recorded confirmed IB or Cambridge schools. Families sometimes board a child or relocate here.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26", "Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Dehradun and Mussoorie",
      note: "A longstanding boarding destination for Himalayan families, reached by a long road journey, with schools that teach international curricula.",
      schools: ["SelaQui International School", "Ecole Globale International Girls' School", "Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where confirmed international programmes exist outside Mandi, from public information. IB Gram is an independent tutoring service with no affiliation to these schools, IIT Mandi, the IB, Cambridge or Pearson.",

  modesIntro:
    "Since we do not send tutors to Mandi, the modes below are about how online lessons are run.",
  modes: [
    {
      title: "Weekly online home tuition",
      description: "A fixed one-to-one session each week on a laptop, from your own room.",
      bullets: [
        "No road journey along the Beas or highway",
        "Shared whiteboard and worked examples",
        "Written note after every lesson",
      ],
    },
    {
      title: "Pre-exam revision blocks",
      description: "A run of sessions before the May or November IB papers or an IGCSE series.",
      bullets: [
        "Past papers marked against the scheme",
        "Weak-topic lists rebuilt each week",
        "Blocks scheduled outside monsoon peak days",
      ],
    },
    {
      title: "Paired online sessions",
      description: "Two students on the same course share a slot and its rate.",
      bullets: [
        "Same syllabus and level required",
        "Useful for IIT campus neighbours and classmates",
        "Move back to one to one at any time",
      ],
    },
  ],

  sections: [
    {
      heading: "What can a Mandi family expect from IB and IGCSE tuition?",
      paragraphs: [
        "Expect a tutor who has taught your child's exact course, a first lesson without charge, and a rate in writing after that lesson. Nothing more elaborate than that, and nothing less. Because lessons are online, Mandi's hills and roads stop mattering.",
        "The gaps we see are practical. A child studying the Diploma through a distant school may have no local teacher for Higher Level Physics. A child in MYP may have a rubric they cannot decode. A child in IGCSE may have chosen Extended Mathematics without knowing what the paper looks like. A good tutor closes these gaps one by one.",
        "We work beside the school or online centre. Where the school teaches the content, we reinforce it and coach exam technique. Where the school leaves a gap, we teach the content. We never replace the student's own effort, and we do not hand over finished work.",
        "Families often ask how a tutor can teach practical skills online. The answer is data: a tutor works with real past-paper data and recorded experiments to teach graph reading, uncertainty and method design, then reviews the student's own lab write-up for clarity.",
      ],
      bullets: [
        "A tutor matched on the exact course",
        "Free first lesson",
        "Rate in writing before booking",
        "Notes after each class",
      ],
    },
    {
      heading: "How do Himachal Board, CBSE, IB and IGCSE compare for a Mandi student?",
      paragraphs: [
        "Most Mandi students study under the Himachal Pradesh Board of School Education in Dharamshala or under CBSE. Both are reliable pathways into Indian universities. The IB and IGCSE are different in emphasis rather than in worth: they ask for more explanation, more independent investigation and more writing.",
        "The Himachal Board syllabus is textbook-based with a focus on recall, and CBSE adds application. IGCSE uses tiers and externally marked papers with practical components in the sciences. The IB Diploma adds breadth, through six subjects, and depth, through the Extended Essay and internal assessments.",
        "For a student in Mandi who is looking at IIT-style engineering, it is worth knowing that JEE Main and Advanced rely on Class 12 equivalence and subject combinations. The IB Diploma can satisfy these when Physics, Chemistry and Mathematics are studied, but rules change and must be checked each year.",
        "The table sets the main contrasts side by side.",
      ],
      table: {
        caption: "Boards compared for a Mandi student",
        columns: ["Point", "Himachal Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Who sets and marks", "State board, Dharamshala", "National board", "IB organisation, Geneva and Cardiff", "Cambridge or Pearson Edexcel"],
          ["Core style", "Textbook recall", "Textbook plus application", "Inquiry, essay and internal assessment", "Tiered papers with practicals"],
          ["Typical exam window", "March", "February to March", "May or November", "May, June, October, November"],
          ["Local availability in Mandi", "Yes", "Yes", "Not confirmed, reachable online", "Not confirmed, reachable online"],
          ["Tutoring emphasis", "Paper practice", "Application questions", "IA planning and HL content", "Tier choice and exam technique"],
        ],
      },
    },
    {
      heading: "How do monsoon, snow and festivals shape study in Mandi?",
      paragraphs: [
        "Mandi's year is governed by weather and festival. July to September brings heavy monsoon rain, and the Beas valley has seen serious floods and landslides that closed highways and cut connections. A family here plans around them, and so do we: a session missed to a power cut or a blocked road is moved, not lost.",
        "Winter brings cold weather and, in higher villages, snow that can isolate homes for days. Summer is pleasant compared with the plains but brings tourist traffic on the Kullu road. The Shivratri fair in February or March fills the town for a week with visitors and processions and closes some lanes.",
        "These rhythms matter for IB and IGCSE exams. The IB May session begins in early May, just after a pleasant spring, and the November session falls in cold weather. IGCSE autumn papers also fall in October and November when the first cold arrives. Revision tends to be best done in the quiet winter months.",
        "The table lines up the local calendar with the exam calendar so a family can see the quieter and busier months.",
      ],
      table: {
        caption: "Mandi year set against IB and IGCSE dates",
        columns: ["Months", "Local conditions", "Exam or study milestone", "Planning advice"],
        rows: [
          ["December to January", "Cold, occasional snow on higher roads", "Mock examinations for May candidates", "Indoor morning slots, buffer for power cuts"],
          ["February to March", "Shivratri fair, pleasant weather", "IB internal assessment submission period", "Avoid fair week for lessons"],
          ["April to June", "Warm, tourist traffic", "IB May session, IGCSE summer series", "Revision before April, short sessions in exams"],
          ["July to September", "Heavy monsoon, landslide risk", "New-year teaching", "Flexible rescheduling, offline notes ready"],
          ["October to November", "Cool, festivals", "IGCSE autumn papers, IB November session", "Early revision, avoid festival weeks"],
        ],
      },
    },
    {
      heading: "What does private IB or IGCSE tuition cost in Mandi, and what drives it?",
      paragraphs: [
        "We do not publish a price list. The rate for a Mandi student depends on the programme, the subject level, the weekly hours, the tutor's experience and whether lessons are private or shared. After a free trial lesson we send a rate in writing, and nothing is booked until you agree.",
        "Higher Level subjects such as Physics HL or Mathematics AA HL usually cost more than Standard Level languages, since fewer tutors can teach them confidently. More hours per week raise the monthly total, and a paired slot with another Mandi student reduces each family's share.",
        "The saving that hill families notice most is travel. A round trip to Chandigarh for a class would be a day's effort, and even a trip across Mandi on a wet evening takes time. Online lessons remove both costs, and a missed slot can be shifted without wasted journeys.",
        "If you are unsure, start with one session a week and review after a month. Extra sessions before an exam are easy to add, while a long prepaid block helps nobody.",
      ],
    },
    {
      heading: "Which is better for Mandi: online tutor, local coaching, home tutor or self-study?",
      paragraphs: [
        "Mandi and nearby Sundernagar have coaching centres for board subjects and JEE and NEET, and local teachers who give private lessons. They are valuable for the syllabus they teach. The issue for an IB or IGCSE student is that almost none of them know the IB criteria or the IGCSE mark scheme.",
        "Self-study has a real place. A motivated student with a good textbook and past papers can do much alone. The weakness appears when a concept is stuck and nobody can explain it, or when an Internal Assessment plan needs a knowledgeable reader.",
        "A specialist online tutor combines course knowledge with flexibility. Connectivity is the risk in hill terrain, so we agree a backup plan up front, such as a second network or a mobile hotspot, and keep notes that can be read offline.",
        "The comparison below gives a frank picture.",
      ],
      table: {
        caption: "Comparing study options in Mandi",
        columns: ["Option", "IB or IGCSE knowledge", "Travel", "Main risk"],
        rows: [
          ["Specialist online tutor", "High, matched by course code", "None", "Connectivity in monsoon and snow"],
          ["Local coaching class", "Low", "Daily trips in hill traffic", "Built for board and entrance exams"],
          ["Local private home tutor", "Low to medium", "Tutor or student travels", "Limited syllabus familiarity"],
          ["Self-study", "Depends on the student", "None", "Stuck concepts, no feedback"],
        ],
      },
    },
    {
      heading: "Which universities can a Mandi student target with an IB or IGCSE background?",
      paragraphs: [
        "IIT Mandi is a local landmark, and many students dream of it. Entry to IITs is through JEE Advanced after JEE Main, and the eligibility rules, including the Class 12 equivalence and subject requirements, are set by the conducting bodies each year. An IB Diploma student who studied Mathematics, Physics and Chemistry may qualify, but must check the current notice.",
        "For other routes, the Association of Indian Universities treats the IB Diploma as a Class 12 equivalent, and CUET-UG applies to many central universities, including the Central University of Himachal Pradesh at Dharamshala. NEET-UG asks for Physics, Chemistry, Biology and English. NIT Hamirpur and Himachal Pradesh University in Shimla are local options with their own admission rules.",
        "Many Mandi students look to Chandigarh, Delhi and overseas. UK, US, Canadian and Australian universities read the IB Diploma and A Levels readily, and we can help a student understand subject prerequisites, while tutors never write application essays or personal statements.",
        "IGCSE students usually move on to A Levels, the IB Diploma or Class 11 of an Indian board. The decision depends on goals and on which school or online centre is available, and an early conversation helps.",
      ],
      bullets: [
        "IB Diploma is recognised by AIU as a Class 12 equivalent",
        "JEE, NEET and CUET notices change each year, so read them",
        "Keep Maths, Physics and Chemistry together for engineering",
        "Ask universities directly about IB score use",
      ],
    },
    {
      heading: "How do IB Mathematics and Computer Science suit students near IIT Mandi?",
      paragraphs: [
        "Children in households linked to IIT Mandi tend to lean towards mathematics and computing. IB Mathematics Analysis and Approaches at Higher Level is the closest fit, with its calculus, sequences and proof-like reasoning. Applications and Interpretation suits those who prefer data and modelling.",
        "IB Computer Science at Higher Level includes object-oriented programming and a case study, and the Internal Assessment is a software project that the student plans and builds alone. A tutor can teach algorithms, review the student's design documents and explain the marking criteria without writing any code for them.",
        "Physics pairs naturally with both. Students who want to go into engineering should expect the Physics HL course to demand fluent mathematics from the first term, so building algebra and calculus skills early pays off.",
        "At IGCSE the equivalent choice is Additional Mathematics and Computer Science, a good foundation before the Diploma. We check a student's current level before recommending Extended tiers or extra courses.",
      ],
    },
    {
      heading: "How do you start IB Gram lessons from Mandi?",
      paragraphs: [
        "Send a short message with the programme, subject, level, exam session and the school or online centre to support@ibgram.com or to +91 7439 368 115 on WhatsApp. Please mention that you are in Mandi, Himachal Pradesh, since the town name appears in several states.",
        "We reply with a tutor recommendation and trial slots, often within a day. The first lesson is a real lesson, free of charge, with time to ask questions. After it we send the rate in writing.",
        "After every lesson the tutor writes a short note on what was covered and what to practise. For parents who work at the campus or in offices in town, it is an easy way to follow progress.",
        "If the tutor does not suit the student, say so and we will change the match.",
      ],
    },
  ],

  process: [
    { title: "Message us from Mandi", description: "Send course, level, exam session and school, noting that you are in Mandi, Himachal Pradesh." },
    { title: "Get a matched tutor", description: "We suggest a tutor who has taught that course and offer trial slots in IST." },
    { title: "Join a free lesson", description: "Attend live online from home and try a real topic with the tutor." },
    { title: "Read the written rate", description: "The rate and schedule come in writing and nothing is booked before you agree." },
    { title: "Track notes each week", description: "A short note after each session records topics and practice." },
  ],
  whyPoints: [
    { title: "Right Mandi, right syllabus", description: "We serve Mandi in Himachal Pradesh and match tutors on the exact IB or IGCSE course." },
    { title: "Clear about delivery", description: "No tutor visits Mandi homes; lessons are live and online." },
    { title: "Written rates", description: "You see the rate before any booking and there is no hidden price list." },
    { title: "Coaching with integrity", description: "Tutors never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Flexible around weather", description: "Sessions lost to landslides or power cuts are moved, not forfeited." },
    { title: "Change of tutor on request", description: "If the fit is wrong we arrange another tutor without friction." },
  ],

  faqs: [
    {
      question: "Is this page for Mandi in Himachal Pradesh?",
      answer:
        "Yes, it covers Mandi in Himachal Pradesh, the Beas-side town near IIT Mandi. Mandi Gobindgarh in Punjab and Mandi Dabwali in Haryana are separate towns with their own pages on this site. If you are in either of those, please use the relevant page. Our online tutoring is the same across all three, but local school and calendar details differ.",
    },
    {
      question: "Are there IB or IGCSE tutors in Mandi, HP?",
      answer:
        "Yes, online. IB Gram pairs a Mandi student with a tutor who has taught the exact IB or IGCSE course, teaching live one to one over video on Indian time. We did not find a local IB school or approved Cambridge or Edexcel centre in Mandi, so a specialist joining by video is typically the practical choice.",
    },
    {
      question: "Do tutors visit homes in Mandi?",
      answer:
        "No. In-person home tuition is available only in Gurugram and parts of Delhi NCR. For Mandi we offer online home tuition, where the student studies in their own room and the tutor teaches live on video. There is no travel on the hill roads, and every session is followed by a written note for parents.",
    },
    {
      question: "Is there an IB school in Mandi or at IIT Mandi?",
      answer:
        "We could not confirm one. Schools in Mandi and the Kamand area that we checked follow the Himachal Board or CBSE. The nearest places where we have recorded confirmed IB or Cambridge schools are the Chandigarh tricity and the Dehradun region. Please verify a school's authorisation with the IB organisation or exam board before enrolling.",
    },
    {
      question: "How much does IGCSE or IB tuition cost for a Mandi student?",
      answer:
        "We quote the rate in writing after a free trial lesson, because it depends on subject, level, weekly hours and tutor experience. There is no published price list. A paired slot with another student lowers each family's share, and online teaching removes travel costs. You see the full terms before you decide whether to continue.",
    },
    {
      question: "My child lives near IIT Mandi. Can the tutor help with Computer Science?",
      answer:
        "Yes. IB Computer Science at Standard or Higher Level, and IGCSE Computer Science, are taught by tutors who have worked with the syllabus. They explain algorithms and review project design, but the student writes the code and the Internal Assessment. A tutor will not produce work that a student submits as their own.",
    },
    {
      question: "What happens during monsoon landslides or power cuts?",
      answer:
        "A lesson interrupted by weather is rescheduled at no extra charge. Mandi's highways and power lines are vulnerable in July to September, so we agree in advance on a backup connection such as a mobile hotspot, and the tutor shares notes that can be read offline. If a student loses two or three days, we adjust the plan and keep exams in view.",
    },
    {
      question: "Which IB Mathematics suits a Mandi student aiming at engineering?",
      answer:
        "Analysis and Approaches, usually at Higher Level, since it covers calculus and proof-style reasoning that engineering courses build on. Applications and Interpretation suits economics, psychology and some life sciences. Eligibility for JEE and other entrance tests depends on the current notice, so check it alongside the subject choice. Our free trial includes a sample of each course.",
    },
    {
      question: "Cambridge or Edexcel: which IGCSE board applies?",
      answer:
        "The board is decided by the school or online centre where the student is registered. Cambridge and Pearson Edexcel have different syllabus codes, such as 0580 and 4MA1 for Mathematics, and slightly different paper styles. Tell us the code and we will match a tutor who has taught that specification, so preparation follows the right mark scheme.",
    },
    {
      question: "When are the IB and IGCSE exams?",
      answer:
        "IB Diploma exams fall mainly in May, with November for some schools. IGCSE sessions are May or June and October or November, and Edexcel adds January for some subjects. Your school or centre confirms exact dates. For Mandi students we time revision before the quiet winter weeks and avoid the Shivratri fair and monsoon peaks.",
    },
    {
      question: "Do tutors write the Internal Assessment or Extended Essay?",
      answer:
        "No. Tutors explain the criteria, help a student choose and refine a question and give feedback on plans and drafts. The research, writing and submission are the student's. The same holds for Theory of Knowledge essays and coursework. This protects the student and keeps within the IB's academic honesty rules.",
    },
    {
      question: "Is the IB accepted by Indian universities and IITs?",
      answer:
        "The Association of Indian Universities treats the IB Diploma as equal to Class 12, and many universities accept IB scores directly. IIT entry runs through JEE Main and Advanced, with eligibility rules that change by year. Central universities may use CUET-UG. Always read the current official notice for each exam or course you are targeting.",
    },
    {
      question: "Can two Mandi students share one lesson?",
      answer:
        "Yes, if they follow the same course and level. A shared online slot reduces each family's cost and works well for revision and problem practice. Different syllabi cannot be combined without weakening the session. Neighbours from the IIT campus and classmates in town are the usual pairs, and either can return to one-to-one at any time.",
    },
    {
      question: "What can tutoring realistically achieve?",
      answer:
        "A tutor can fill gaps, teach exam technique and build a revision routine. No one can honestly promise a grade, and we do not. We offer a match on the exact syllabus, a free first lesson, a written note after each session and an easy way to change tutors. That way a family judges progress from evidence.",
    },
    {
      question: "Do you teach younger children in PYP or MYP?",
      answer:
        "Yes, with shorter sessions suited to age. For PYP we focus on spoken English, early reading and numeracy, and for MYP on criteria-based writing, research and project planning. The Personal Project remains the student's own, so tutors guide planning and reflection without adding content. Many children enjoy a weekly online session as a steady routine.",
    },
    {
      question: "How do I book a free trial from Mandi?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or email support@ibgram.com with the course, level, exam session and school, and mention Mandi, Himachal Pradesh. We reply with a tutor and trial slots, usually within a day. The lesson is real, free and without obligation, and the written rate follows only if you choose to continue.",
    },
    {
      question: "Is IB Gram connected to IIT Mandi, a school or an exam board?",
      answer:
        "No. IB Gram is an independent tutoring service with no affiliation to IIT Mandi, any school, the IB, Cambridge or Pearson. Institutions are named only as public context. Please check any school's authorisation directly with the relevant body before making enrolment or transfer decisions.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Online tuition and city pages for students across the country." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "Where in-person IB and IGCSE home visits run." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How tutors are matched to IB courses." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subject choices." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, core and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "DP courses combined with career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Help for entrance and admissions tests." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to arrange a tutor match and trial lesson." },
    { label: "IB and IGCSE tutors in Shimla", href: "/shimla/", description: "The hill capital, with online tuition too." },
    { label: "IB and IGCSE tutors in Chandigarh", href: "/chandigarh/", description: "The nearest large city with confirmed IB schools." },
    { label: "IB and IGCSE tutors in Dehradun", href: "/dehradun/", description: "A Himalayan boarding hub." },
    { label: "IB and IGCSE tutors in Mandi Dabwali", href: "/mandi-dabwali/", description: "A different town, in Haryana." },
  ],

  closingHeading: "Book a free IB or IGCSE lesson at home in Mandi, Himachal Pradesh",
  closingBody:
    "Tell us the course, level and exam session and we will propose a tutor who has taught it. The first lesson is free, the rate follows in writing, and no one has to drive the Beas valley roads. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
