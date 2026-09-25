import type { CitySeoPage } from "../types";

export const agra: CitySeoPage = {
  slug: "agra",
  countryName: "Agra",
  countryNameLong: "Agra, Uttar Pradesh",
  demonym: "Agra",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and weekend sessions, planned around Agra's summer heat and winter fog rather than local traffic",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 27.1767, longitude: 78.0081 },
  wikipedia: "https://en.wikipedia.org/wiki/Agra",
  alternateNames: ["Akbarabad"],
  // Fewer than 3 confirmed IB/IGCSE schools within Agra itself, so the sliding strip stays empty
  // rather than padding it with CBSE-only schools. See schoolClusters for the honest picture.
  stripSchools: [],

  title: "IB & IGCSE Tutors in Agra | Online Tuition",
  metaDescription:
    "Agra has few IB or IGCSE schools, so our tutors teach the whole syllabus online: Diploma, MYP, IGCSE Core and Extended, with a free trial lesson first.",
  h1: "IB and IGCSE Tutoring for Agra Students, Taught Fully Online",
  heroEyebrow: "IB & IGCSE TUTORING FOR AGRA, ONLINE",
  heroSubtitle:
    "Agra has very few schools that teach the IB or Cambridge and Edexcel IGCSE directly, so most families here rely on a tutor to deliver the syllabus itself, live online, one to one. Tell us the programme, the subject and the exact topic your child is stuck on, whether that is IGCSE Extended Chemistry or an IB Maths exploration that has not started, and we match a tutor who teaches it every week.",
  primaryKeyword: "IB and IGCSE tutors in Agra",
  imageAltText: "IB tutor working through an IGCSE chemistry topic with a student in Agra over video call",
  secondaryKeywords: [
    "IB tutor in Agra",
    "IGCSE tutor in Agra",
    "IB home tuition Agra",
    "IGCSE home tuition Agra",
    "IB private tuition Agra",
    "IB Maths tutor Agra",
    "IGCSE Maths tutor Agra",
    "IB Physics tutor Agra",
    "IB Chemistry tutor Agra",
    "IB Biology tutor Agra",
    "IB DP tutor Agra",
    "IB MYP tutor Agra",
    "IB PYP tutor Agra",
    "IGCSE online tuition Agra",
    "online IB tutor Agra",
    "IB tutor Sadar Bazaar",
    "IGCSE tutor Dayalbagh",
    "IB tutor Sikandra",
    "Cambridge IGCSE tutor Agra",
    "Edexcel IGCSE tutor Agra",
    "IB Economics tutor Agra",
    "Akbarabad IB tutor",
  ],

  heroTrustPoints: [
    "A tutor for the precise subject, board and level your child studies",
    "Sessions are always video-based here; Agra gets no home visits",
    "Try one lesson free before deciding anything",
    "Runs independently of every school, curriculum body and exam board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP · CP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online, live 1:1", label: "How lessons run in Agra" },
    { value: "Free trial class", label: "Before you commit" },
  ],

  intro: {
    heading: "Why Agra families lean on online IB and IGCSE tutors",
    paragraphs: [
      "Agra is not a city with a deep bench of IB or Cambridge and Edexcel IGCSE schools the way Delhi or Bengaluru is. One local school teaches a Cambridge-linked curriculum alongside CBSE, and a handful of Agra families send children to board at schools further away for the full IB or IGCSE experience. That gap is exactly why online tutoring matters more here than in a city where a school down the road already teaches the syllabus.",
      "For a family whose child is enrolled at a school outside Agra, or is following IGCSE or IB material largely through self-study and a school's remote support, a subject-specific tutor fills the role a well-stocked local school system would otherwise play. The tutor becomes the person who actually knows the syllabus code, the assessment criteria and what the next internal deadline looks like.",
      "One point is worth stating upfront so nobody is surprised later: nobody from IB Gram comes to your door in Agra. That arrangement exists only in Gurugram and a few pockets of Delhi NCR. Everywhere else, including here, a session means your child on a video call with someone who has actually taught this exact syllabus before, rather than a generalist tutor who lists IB or IGCSE as one of several boards they cover.",
      "IB Gram runs as its own independent service, with no ties to the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school this page mentions. A tutor's job stops at teaching, questioning and marking practice work; drafting an Internal Assessment, an Extended Essay or a piece of IGCSE coursework on a student's behalf is not something we do.",
    ],
    bullets: [
      "Very few IB or IGCSE schools operate inside Agra itself",
      "Online tutoring substitutes for a thin local school ecosystem",
      "No home visits in Agra; that service is Gurugram and Delhi NCR only",
      "Free trial class and a written plan after it",
    ],
  },

  programmesIntro:
    "Because Agra has almost no local IB continuum school, most programme requests come from families whose child boards elsewhere, follows a school's remote curriculum, or is preparing to move into IB or IGCSE ahead of a family relocation. Each programme below needs a different kind of support in that situation.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Units of inquiry and, in the final year, the PYP Exhibition, with no external exam. Tutoring centres on reading, number sense and the research habits the Exhibition needs.",
      countryNote:
        "PYP requests from Agra are rare and usually come from families preparing a younger child before a move to a city with an IB school, so sessions focus on foundations rather than a specific unit.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Subjects assessed against criteria A-D, with the Personal Project completed in MYP 5. Descriptive answers stop earning marks once criterion-level analysis is expected.",
      countryNote:
        "Agra MYP families are typically boarding students home for a break, needing focused catch-up on a specific criterion before returning to school rather than ongoing weekly tuition.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level, Theory of Knowledge, the Extended Essay and CAS, with final exams in May and a smaller November retake session.",
      countryNote:
        "Most DP requests from Agra are for Maths, Physics, Chemistry or Economics support for a student boarding outside the city, often stepped up before mocks or predicted-grade exams.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP subjects combined with a career-related study, a reflective project and personal and professional skills, aimed at students with a clear vocational direction.",
      countryNote:
        "CP enquiries from Agra are uncommon; where they arise, the tutoring need is the same as the DP subjects inside the programme, plus keeping the reflective project on schedule.",
    },
  ],

  subjectsIntro:
    "Agra requests skew heavily towards a small set of subjects, mostly maths and the sciences, because these are the courses where a student without a local specialist school falls behind fastest. We match tutors on the exact subject and level rather than a general 'IB tutor' label.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, with steady Paper 3 practice for HL students preparing largely without classroom peers." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling, with a data-based exploration a tutor can help scope from the very first session." },
    { name: "IB Physics", levels: "HL / SL", description: "Core mechanics through electricity and fields, plus a Scientific Investigation planned carefully when there is no school lab routine to lean on." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, organic chemistry and quantitative work, taught with the data booklet from the first lesson onward." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, physiology and ecology, with attention to the extended-response wording examiners specifically reward." },
    { name: "IB Economics", levels: "HL / SL", description: "Building sound diagrams and applying theory to real markets, a natural pull for students eyeing Agra's trade and export businesses." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to unseen cases, relevant to Agra's many family-run export, leather and tourism businesses." },
    { name: "IB English A Language and Literature", levels: "HL / SL", description: "Working unseen passages, comparative writing and rehearsing an Individual Oral that sounds like the student, not a memorised script." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming fundamentals and abstract data structures, for students without a school computer lab to practise in." },
    { name: "IB Psychology", levels: "HL / SL", description: "The three approaches to behaviour, accurate study referencing and structured extended-response writing." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Systems thinking applied to local examples, from Yamuna water quality to Agra's air pollution readings." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study depth and fieldwork methodology, adapted for a student without a school field trip programme nearby." },
    { name: "Theory of Knowledge", levels: "DP Core", description: "Testing an argument from more than one side for the exhibition and the prescribed-title essay, through conversation, not a script." },
    { name: "Extended Essay", levels: "DP Core", description: "Narrowing a research question a student can actually complete with the sources available to them; guidance only." },
    { name: "IB Hindi A and B", levels: "HL / SL", description: "Text-type conventions and spontaneous speaking practice, useful given Agra's largely Hindi-medium schooling background." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Criteria A-D investigation skills that prepare a student for DP-level maths and sciences later." },
    { name: "IB MYP Language and Literature", levels: "MYP 1-5", description: "Sharper analytical writing against criterion A and a Personal Project journal that gets updated week by week, not rebuilt at the end." },
  ],

  igcseSubjectsIntro:
    "IGCSE tutoring in Agra almost always means preparing a student for an exam their own school cannot fully support, so we start with the board, the exact syllabus code and the tier before anything else, then plan around the school's own exam series rather than assuming one.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Non-calculator accuracy and Extended-tier technique, built up from first principles where school coverage has been thin." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Trigonometric identities and functions that bridge into IB Maths AA HL, useful for students planning that route." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Getting used to how Edexcel phrases its Higher-tier questions, since a student taught only on Cambridge papers can be thrown by the wording." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Circuits, waves and the alternative-to-practical paper, taught without assuming a school lab session already happened." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and organic chemistry, with practice built around past papers rather than classroom experiments." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and extended-response structure, with clear command-word training for exam wording." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Learning to argue both sides of an evaluative question, drawing on examples straight out of Agra's tourism and trade economy." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-study application drawn from real businesses, including family export and manufacturing firms many Agra students know first-hand." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Building programming logic in Python from the ground up, since few Agra schools run a computing stream that covers this properly." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Regular timed practice on directed writing and unseen comprehension, the two areas where marks slip fastest under exam pressure." },
  ],

  regionsTitle: "Agra localities our online IB and IGCSE tutors work with",
  regionsIntro:
    "Agra families choosing IB or IGCSE tutoring are spread right across the city rather than clustered near one or two schools, since there is no dense international-school belt here. Because every session runs online, we plan around your school's calendar and the city's seasonal extremes rather than which part of Agra you live in.",
  regions: [
    { name: "Sadar Bazaar and Agra Cantonment", note: "Home to many defence and civil-services families, including postings at the Agra Air Force Station, who often choose IB or IGCSE ahead of a future transfer." },
    { name: "Dayalbagh", note: "A quieter residential and educational area on the city's edge, with several established schools but none currently offering IB or Cambridge IGCSE directly." },
    { name: "Sikandra", note: "Near Akbar's Tomb on the northern edge of the city, with newer residential development and a mix of CBSE and UP Board schools." },
    { name: "Fatehabad Road and Shastripuram", note: "The stretch nearest Sharda World School, Agra's one Cambridge-linked local option, and popular with hotel and tourism-industry families given its proximity to the Taj Mahal circuit." },
    { name: "Kamla Nagar and Rakabganj", note: "Central, older residential neighbourhoods where UP Board and CBSE schooling dominates and IB or IGCSE families rely almost entirely on tutoring." },
    { name: "Civil Lines and Sanjay Place", note: "Agra's commercial and coaching-institute hub, dense with competitive-exam coaching centres rather than IB or IGCSE support." },
    { name: "Tajganj", note: "The Taj Mahal's immediate neighbourhood, home to many families running tourism and hospitality businesses who value an internationally recognised qualification for their children." },
    { name: "Khandari and Bodla", note: "University-adjacent neighbourhoods near Dr. Bhimrao Ambedkar University, with a growing number of professional families considering IGCSE for their children." },
    { name: "Shahganj", note: "Known for its footwear and leather trade, home to several business families increasingly interested in IGCSE Business Studies and Economics for their children." },
    { name: "Trans-Yamuna colonies", note: "Newer development across the river from the old city, with limited schooling choice that pushes several families towards online tutoring for any board." },
  ],

  schoolDisclaimer:
    "Naming a school here is purely descriptive, meant to show what schooling actually looks like around Agra, including places families look beyond the city. It carries no partnership, endorsement or affiliation with IB Gram, whether that is a named school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Fatehabad Road and Shastripuram, Agra",
      note: "The one part of Agra with a school teaching a Cambridge-linked curriculum alongside CBSE; families elsewhere in the city travel here or choose online-only support instead.",
      schools: ["Sharda World School"],
    },
    {
      city: "Central and old-city Agra (Sadar, Dayalbagh, Kamla Nagar, Sikandra)",
      note: "No school in this part of Agra currently offers a confirmed IB or Cambridge/Edexcel IGCSE programme; families here rely on UP Board or CBSE schooling plus an online IB or IGCSE tutor for the syllabus itself.",
      schools: [],
    },
    {
      city: "Nearby: Gurugram, Delhi NCR (boarding only)",
      note: "Some Agra families choose boarding schools in Gurugram for the full IB continuum, given the roughly three-to-four-hour road distance rules out any daily commute; this is a boarding decision, not something IB Gram arranges.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Every Agra family we work with chooses online tuition, because that is what IB Gram offers here; there is no home-visit service in Agra, only in Gurugram and parts of Delhi NCR. The real choice for Agra families is how that online tuition is structured around a school calendar that may sit outside the city entirely.",
  modes: [
    {
      title: "Video sessions, one student and one tutor",
      description:
        "Everything happens over a video call with a shared whiteboard, and a short write-up lands with you once the session ends. It is the only format on offer in Agra; there is no version of this that involves someone arriving at your door.",
      bullets: [
        "Effectively the only route to syllabus-specific teaching most Agra families have",
        "Suits a child studying in Agra, boarding away, or on a remote-school plan",
        "Past papers and mark schemes walked through on a shared screen",
        "Heat waves and thick winter fog never cancel a video call",
      ],
    },
    {
      title: "Short, focused sessions over a school break",
      description:
        "For a boarding student back in Agra for a few weeks, sessions built around clearing one or two named problem topics rather than starting a whole new term plan.",
      bullets: [
        "Timed to match the boarding school's own holiday dates",
        "Narrow scope: one or two topics, not the whole syllabus",
        "A short write-up you can pass on to the school-term tutor",
        "No ongoing commitment beyond the break itself",
      ],
    },
    {
      title: "A standing weekly slot across the term",
      description:
        "The same tutor at the same time every week, which is what most Agra students settle into once they are largely teaching themselves the syllabus outside a classroom.",
      bullets: [
        "Steady tracking of what has and has not stuck",
        "Timed around internal exams and coursework deadlines",
        "A second weekly slot is simple to add before mocks",
        "Checked in on with the family every few weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families in Agra: who chooses these programmes here",
      paragraphs: [
        "Agra is better known for the Taj Mahal, its leather and footwear trade and a large defence presence than for international schooling, and its education landscape reflects that. Most schools follow the UP Board or CBSE, and the city has only one school teaching a Cambridge-linked curriculum locally. Families choosing IB or IGCSE here are doing something genuinely uncommon for the city, not following a well-worn local path.",
        "Three groups make up most of our Agra enquiries. Defence and government families posted through Agra Cantonment often want a portable qualification that will not be disrupted by the next transfer. Export, leather and tourism-business families increasingly see IGCSE or the IB Diploma as useful preparation for children who will eventually run or expand a family business with international buyers. A smaller group is preparing a younger child ahead of a planned move to a city with a fuller IB or IGCSE school system.",
        "Because the local school infrastructure is thin, an Agra family's tutor often ends up doing more of the actual syllabus teaching than a tutor would in a city with strong IB schools, where the tutor mainly reinforces what a school already delivers. We plan for that directly rather than assuming a school is covering the basics.",
        "None of this changes what we can honestly offer. In-person tutoring is not something IB Gram provides in Agra, and we would rather say that clearly than let a family expect a home visit that will not happen.",
      ],
      bullets: [
        "Agra has almost no local IB or IGCSE school infrastructure",
        "Defence, export and tourism-business families drive most demand",
        "Tutors often deliver more of the core syllabus than in cities with IB schools",
        "No in-person tutoring is offered in Agra",
      ],
    },
    {
      heading: "UP Board, CBSE or IB and IGCSE: what should an Agra family weigh up?",
      paragraphs: [
        "For most Agra families, the practical starting point is the UP Board or CBSE, both widely available locally, versus IB or IGCSE, which almost always means teaching the child the syllabus without a nearby specialist school. That trade-off is different from the choice a Delhi or Bengaluru family faces, where an IB school is usually just a drive away.",
        "The UP Board remains the most affordable and locally supported option, with strong alignment to UP's own competitive exams and a familiar structure for most Agra teachers and coaching centres. CBSE offers a similar local support base with better recognition for students likely to move to another Indian city later, since CBSE schools exist almost everywhere.",
        "IB and IGCSE offer something the local boards do not: a curriculum built for portability across countries and a marking style that rewards explanation and structured argument. For an Agra family, that benefit has to be weighed against the reality that the syllabus itself, not just revision support, usually has to come from a tutor rather than a school.",
        "There is no wrong choice here, only a clear-eyed one. A family choosing IB or IGCSE in Agra should go in expecting to lean on tutoring more heavily than a family in a city with several IB schools to choose from, and plan the budget and time commitment accordingly.",
      ],
      table: {
        caption: "Board options available to Agra families and what each one assumes locally",
        columns: ["Board", "Local school availability in Agra", "What a family still needs"],
        rows: [
          ["UP Board", "Widely available across the city", "Coaching support for competitive exams if needed"],
          ["CBSE", "Available at several established schools", "Little extra support for most students"],
          ["ICSE / ISC", "Limited but present at a few schools", "Extra English and coursework support at times"],
          ["IGCSE (Cambridge / Edexcel)", "One local school with Cambridge-linked provision", "A tutor to teach the syllabus itself in most cases"],
          ["IB Diploma", "No confirmed local school offering it", "A tutor for most subjects, or a boarding-school move"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB and IGCSE tuition in Agra?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor working with an Agra student depends on the subject, the level and how much of the actual syllabus teaching the tutor is doing, rather than a fixed local rate. Because Agra rarely has a school covering the content in class, a tutor here is frequently teaching new material every session, not simply reinforcing a lesson, which is a different and sometimes costlier job than pure revision support.",
        "We do not publish prices. Instead, once we understand the subject, level and how much of the syllabus needs to be taught from scratch, we confirm a fee for that specific match before your family commits to anything.",
        "Session frequency matters more for Agra students than for those attending a school that already teaches IB or IGCSE, because a single weekly hour has to cover both new content and consolidation. Many Agra families settle on two sessions a week per core subject once they see how much ground needs covering compared with a revision-only arrangement.",
        "We keep arrangements flexible given how varied Agra's situations are, from a boarding student home for a few weeks to a family following a full remote curriculum. You can adjust session frequency as a school term changes, and there are no long contracts locking you into a fixed plan.",
      ],
      bullets: [
        "Fee reflects subject, level and how much syllabus teaching is involved",
        "No published prices; your fee is confirmed before you commit",
        "Two weekly sessions per subject is common where content is genuinely new",
        "No long contracts; the plan adjusts as school terms change",
      ],
    },
    {
      heading: "Coaching centres, self-study or an online tutor: what actually works for IB and IGCSE in Agra?",
      paragraphs: [
        "Agra's Sanjay Place and Civil Lines coaching-centre culture is built almost entirely around JEE, NEET and UP Board exam preparation, and none of the major centres teach to IB or IGCSE assessment criteria. A student walking into a JEE-focused batch for IB Physics support is being taught towards a completely different exam, regardless of how similar a topic name sounds.",
        "Self-study can work for a strong, motivated student revising material a school has already taught well, but it falls apart quickly for IB or IGCSE in Agra specifically, because so much of the content has not been taught by a local school in the first place. Self-study assumes a foundation that, for most Agra IB and IGCSE students, simply is not there yet.",
        "A one-to-one online tutor who actually teaches the syllabus, rather than only reviewing it, is the option that matches Agra's situation. The tutor plans a proper teaching sequence through the syllabus rather than jumping straight to revision, which is the single biggest difference between what works here and what a Delhi or Bengaluru family, with a school doing the teaching, might need from a tutor.",
        "Where a student does have some school support, whether from a remote curriculum provider or a partial local programme, the tutor's job shifts closer to the reinforcement role tutors play elsewhere. We ask about this directly at the start so the plan matches the real gap rather than a generic assumption.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Agra",
        columns: ["Option", "What it actually teaches", "Fit for Agra"],
        rows: [
          ["JEE/NEET coaching centres", "Competitive-exam content, not IB or IGCSE criteria", "Not suitable, despite overlapping topic names"],
          ["Self-study", "Only reinforces content already taught", "Weak fit given the thin local school base"],
          ["Online one-to-one tutor teaching the syllabus", "The IB or IGCSE syllabus from first principles where needed", "Strong fit for most Agra students"],
          ["Remote or partial school support plus a tutor", "School covers some content; tutor reinforces and fills gaps", "Good fit where some school teaching exists"],
        ],
      },
    },
    {
      heading: "Agra's school year: heat, fog and the exam calendar",
      paragraphs: [
        "Agra's climate is harsher than many Indian cities, with summer temperatures regularly crossing 45 degrees Celsius in May and June, and thick winter fog through December and January that can delay travel and, some mornings, school opening. Whatever board or programme a student follows, tutoring plans in Agra tend to build in a lighter week during the worst heat rather than pretend it does not affect concentration.",
        "External exam calendars for IB and IGCSE students follow the same international timetable as anywhere else in India: IB Diploma exams in May with a smaller November retake session, Cambridge IGCSE in May-June and October-November, and Edexcel IGCSE in January and May-June. A student in Agra following one of these calendars while attending a UP Board or CBSE school locally needs a tutor tracking two calendars at once.",
        "Agra's own cultural calendar, particularly the winter Taj Mahotsav festival in February and the run-up to Holi in March, tends to coincide with school internal exams and, for IGCSE students, final revision before the May-June series. Families who plan a lighter tutoring week around these dates rather than fighting for full attention tend to see better results afterwards.",
        "The most productive stretches for Agra students are typically the cooler months from October through February, once the worst of the monsoon humidity and pre-winter heat have passed and before the exam-season crunch begins in earnest.",
      ],
      table: {
        caption: "Exam sessions and seasonal pressure points for Agra students",
        columns: ["Stage", "Timing", "Local factor to plan around"],
        rows: [
          ["IB Diploma exams", "May, with November retakes", "Falls at the peak of Agra's summer heat"],
          ["Cambridge IGCSE", "May-June and October-November", "May-June revision overlaps with the hottest weeks"],
          ["Edexcel IGCSE", "January and May-June", "January entries sit through Agra's foggiest weeks"],
          ["Best tutoring window", "October to February", "Cooler weather and fewer local festival clashes"],
        ],
      },
    },
    {
      heading: "University pathways from Agra: CUET-UG, JEE, NEET and study abroad",
      paragraphs: [
        "Agra's IB and IGCSE students head towards several different destinations, and the university-pathway conversation matters more here because families are already making an unusual choice by picking these boards in the first place. Universities abroad, including in the UK, US, Canada and Singapore, read IB Diploma results directly and often specify point totals with Higher Level subject minimums, while IGCSE feeds into A Levels or the IB Diploma rather than being assessed on its own for admission.",
        "For Agra students staying in India, CUET-UG is the main entry route into central and most state universities, taken by IB and IGCSE students alongside their UP Board and CBSE peers. An Association of Indian Universities equivalence certificate, which converts IB Diploma results into a recognised Indian qualification, is something most Agra-based DP graduates applying to Indian universities will need to arrange in advance, since local UP Board familiarity does not automatically extend to IB paperwork.",
        "JEE and NEET eligibility matters to a meaningful number of Agra families, given how strong the region's engineering and medical coaching culture is, and some students want both an IB Diploma and a genuine shot at these entrance exams. Eligibility depends on the specific subjects and marks a student has, not the board itself, so subject choices should be checked well before Class 11 begins.",
        "Predicted grades carry particular weight for Agra students applying abroad, since most international applications are submitted during Class 12 before final results exist, and a student without a school actively tracking this needs a tutor who understands how predicted grades are built and defended.",
      ],
      bullets: [
        "UK, US, Canadian and Singaporean universities read IB Diploma points directly",
        "CUET-UG is the main Indian entry route for Agra's IB and IGCSE students",
        "AIU equivalence certificates need arranging in advance for Indian university applications",
        "JEE and NEET eligibility depends on subject choices checked before Class 11",
      ],
    },
    {
      heading: "IB Maths and the sciences for Agra students without a local IB school",
      paragraphs: [
        "Maths Analysis and Approaches suits Agra students likely to pursue engineering or the sciences, subjects with strong local coaching-centre demand, while Applications and Interpretation suits students more interested in commerce, design or the social sciences. Because there is no local IB school to advise the choice, this decision often falls to whichever tutor a family speaks to first, so we walk through it properly rather than defaulting to whichever course sounds more familiar.",
        "At Higher Level, both maths courses add a Paper 3 built around unfamiliar, multi-step problems, and Agra students preparing largely through a tutor rather than a school benefit from regular timed practice on exactly this style of question, since it is the part least like standard UP Board or CBSE-style problems.",
        "Physics and Chemistry HL are the sciences most Agra families ask about, generally because these are the subjects hardest to self-teach from a textbook alone. A tutor here typically runs a full teaching sequence through the syllabus rather than assuming prior classroom coverage, checking understanding topic by topic before moving on.",
        "The internally assessed Scientific Investigation is often the part of the sciences an Agra student struggles with most, precisely because there is no school lab routine to draw a question from. A tutor's role is to help design a workable, testable investigation using equipment or data genuinely available to the student, without writing any part of the report.",
      ],
      bullets: [
        "Subject choice between AA and AI needs deliberate discussion, not a default",
        "HL Paper 3 practice matters more without a school teaching this style already",
        "Physics and Chemistry HL usually need full teaching, not just revision",
        "Scientific Investigation planning accounts for the absence of a school lab routine",
      ],
    },
    {
      heading: "Is Core or Extended IGCSE the right tier for a student without a local IGCSE school?",
      paragraphs: [
        "The Core versus Extended decision is harder to get right in Agra than in a city with an established IGCSE school, because there is rarely a school-run topic test giving families a clear signal. Cambridge's Core tier caps the highest achievable grade, so a capable student defaulted into Core by an under-informed decision loses options for A Levels or the IB Diploma later without anyone flagging it at the time.",
        "For Agra families following Edexcel's Foundation and Higher tiers instead, the same principle applies with different labels, and the decision should still rest on how a student performs on structured practice questions rather than a guess made without local benchmarking.",
        "A tutor working with an Agra IGCSE student typically runs a short diagnostic across a few weeks early in Grade 9, using past papers at both tiers, before recommending Extended or Higher where the evidence supports it. That structured check matters more here than in a city where a school's own teachers already track this.",
        "Students planning to continue into IB Maths AA HL or Physics and Chemistry HL benefit clearly from Extended-tier sciences and, where accessible, IGCSE Additional Mathematics, since these give real preparation for the pace Diploma subjects assume, something an Agra student without a feeder IB school especially needs.",
      ],
      bullets: [
        "Core tiers cap the top achievable grade in most Cambridge subjects",
        "A structured diagnostic early in Grade 9 replaces the missing school signal",
        "Foundation and Higher tiers in Edexcel follow the same underlying logic",
        "Extended sciences and Additional Maths prepare students for later DP HL subjects",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors who work with Agra students across the IB continuum and Cambridge or Edexcel IGCSE, over video, frequently covering ground no local school is teaching for that child. We pick a tutor based on the exact subject, board and level in front of them, not general availability.",

  process: [
    { title: "Describe where things stand", description: "Tell us the board, subject and level, and how much of it, if any, your child's current school is actually teaching." },
    { title: "We shortlist a specialist", description: "Someone who has taught that exact subject and level before, and who can start from scratch if that is what the situation needs." },
    { title: "Sit in on a free lesson", description: "One real topic, taught properly, at no cost and no strings attached either way." },
    { title: "Set the first month's plan together", description: "The tutor lays out the teaching order, the pace and how updates will reach you; you sign off or push back." },
    { title: "Keep checking in", description: "A review every few weeks, timed around holidays and exam dates, with a swap available if things aren't clicking." },
  ],

  whyPoints: [
    { title: "Comfortable teaching from a blank slate", description: "Because Agra rarely has a school covering IB or IGCSE content already, our tutors are used to building the whole subject up, not just polishing it." },
    { title: "Chosen for the exact course, not a label", description: "The match is the specific subject and its level, or the specific IGCSE board, code and tier, never just 'an IB tutor'." },
    { title: "See a real lesson before deciding", description: "Judge the tutor by how they actually teach, not by a written profile." },
    { title: "A hard line on academic integrity", description: "Support for IAs, coursework, the EE and TOK stops well short of writing any of it." },
    { title: "You always know where things stand", description: "A note after each session and a proper check-in every few weeks, which matters more when no school is watching too." },
    { title: "Nothing locks you in", description: "Speed up before an exam, pause over a holiday, or stop outright, whenever it suits your family." },
  ],

  faqs: [
    {
      question: "Does IB Gram send tutors to a family's home in Agra?",
      answer:
        "No. Every Agra session happens over video, one student and one tutor at a time; nobody is sent to a house here, and that arrangement is limited to Gurugram and a few pockets of Delhi NCR. Given how few Agra schools teach IB or IGCSE at all, a video-based specialist is usually the only realistic way to actually access these boards properly.",
    },
    {
      question: "Are there any IB or IGCSE schools in Agra?",
      answer:
        "Agra has very few. One local school, Sharda World School, teaches a Cambridge-linked curriculum alongside CBSE. We have not confirmed any Agra school offering the full IB Diploma. Some families instead choose boarding schools further away, including in Gurugram, for the complete IB continuum, while continuing to live in Agra and use tutoring for exam-year support.",
    },
    {
      question: "My child's school in Agra doesn't really teach IB. Where do I even start?",
      answer:
        "Start by telling us the programme, the subject, the level and exactly what the school is or isn't covering right now. From there we pick a tutor who is comfortable teaching a subject from the beginning rather than just polishing what a class already learned. A free lesson comes first, and if it isn't a fit, we try someone else.",
    },
    {
      question: "Can you match a tutor for Cambridge and Edexcel IGCSE students in Agra?",
      answer:
        "Yes. A Cambridge student is matched against the syllabus code and tier, Mathematics 0580 Extended for instance, and an Edexcel student against the specification and Foundation or Higher tier. Because Agra offers so little classroom teaching in either board, expect the tutor to build the subject step by step rather than treat sessions as pure revision.",
    },
    {
      question: "How much should I expect to pay for tutoring in Agra?",
      answer:
        "It comes down to the subject, the level, and how much genuine teaching versus revision the tutor will be doing, which in Agra is usually more teaching than a family in a bigger city might expect. There's no fixed rate card; you get a quote for your exact situation before the trial, and nothing locks you into it afterwards.",
    },
    {
      question: "What areas of Agra does this service reach?",
      answer:
        "All of them, because nothing here depends on distance. Families from Sadar Bazaar, Agra Cantonment, Dayalbagh, Sikandra, Fatehabad Road, Kamla Nagar, Tajganj, Khandari and the Trans-Yamuna side all get the same tutors and the same online format; where you live only affects what times suit your child's day.",
    },
    {
      question: "Can we try a session before deciding anything?",
      answer:
        "Yes, and there's no cost or catch to it. Your child sits through one real topic with the tutor online, and afterwards you get a short plan for what the first month would look like, including how much of it is new teaching versus catching up on gaps.",
    },
    {
      question: "My child has nobody at school to guide the Extended Essay or IAs. Can a tutor step in?",
      answer:
        "A tutor can walk through the process, narrowing a research question, unpacking what each criterion is actually looking for, and pushing back critically on a draft, but writing any of it stays off the table. That guidance role matters more in Agra than in a city with an on-site IB coordinator, since there is often nobody else at the school checking this work at all.",
    },
    {
      question: "What subjects come up most for Agra students needing IB support?",
      answer:
        "Maths, in both Analysis and Approaches and Applications and Interpretation flavours, plus Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science account for most requests. Geography, Environmental Systems and Societies, Theory of Knowledge and Extended Essay guidance come up too, usually needing full teaching rather than a light revision pass, given the local school gap.",
    },
    {
      question: "My child boards at a school outside Agra. Can you still help during holidays?",
      answer:
        "Yes, holiday-block tutoring is a common request from Agra families whose child boards elsewhere. Sessions focus on one or two specific weak topics identified by the school or the student, run over a few concentrated weeks, with a written summary you can share with the school-term tutor or teacher afterwards if useful.",
    },
    {
      question: "How do you check a tutor before they start with my child?",
      answer:
        "We look at qualifications, teaching background and how recently someone has actually taught the exact subject, board and level in question. For Agra, we specifically look for tutors who are at ease teaching a course from zero, since that is closer to reality here than pure revision work. Beyond that, the free lesson is where you form your own view.",
    },
    {
      question: "What's the right age or grade to start tutoring in Agra?",
      answer:
        "Sooner than families in cities with an actual IB or IGCSE school nearby, since there's more content to build without a classroom doing part of the job. Class 11 for the Diploma and Grade 9 for IGCSE leave the most runway, but a later start can still work well if sessions focus tightly on what matters most first.",
    },
    {
      question: "My child is moving from UP Board or CBSE to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, this switch is common among Agra families preparing for a move or a change in school plans. The main adjustment is not content but question style, since IB and IGCSE reward explanation and structured argument over recall. A tutor experienced with switchers builds these habits deliberately, ideally starting a few months before the change takes effect.",
    },
    {
      question: "Are evening or weekend slots possible around school and coaching classes?",
      answer:
        "Generally yes. Most families settle on weekday evenings and weekend mornings, worked around school hours, any coaching classes for other subjects, and the dip in concentration Agra's summer afternoons tend to bring. Nothing about travel time factors into the schedule, since every lesson is a video call from wherever your child already is.",
    },
    {
      question: "What if the tutor turns out to be a poor match for my child?",
      answer:
        "Say so and we will line up someone else. Progress gets reviewed every few weeks specifically so a bad fit does not drag on, and swapping tutors costs nothing extra. Since there is no long contract in the first place, you are also free to pause or end sessions whenever it suits your family.",
    },
    {
      question: "Is IB Gram connected to Sharda World School, Cambridge or the IB itself?",
      answer:
        "No. IB Gram operates on its own, with no partnership, endorsement or formal link to Sharda World School, any other Agra school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. Any school named on this page is there to describe the local landscape honestly, and each tutor simply follows the student's own board and syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See how this works for families in other Indian cities." },
    { label: "IB and IGCSE home tuition in Gurugram", href: "/gurgaon/", description: "Where IB Gram's home-visit service actually runs, plus the boarding schools some Agra families consider." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutoring options laid out by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "A walkthrough of the boards, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the DP actually involves, from HL and SL choices to the EE." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria work and what the Personal Project involves." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "A look at PYP inquiry units and the culminating Exhibition." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "Support for both AA and AI, at either level." },
    { label: "Browse tutors", href: "/tutors/", description: "See tutor backgrounds sorted by subject and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send us your situation and set up a free lesson." },
    { label: "Online IB and IGCSE tuition in Lucknow", href: "/lucknow/", description: "The same service for families elsewhere in Uttar Pradesh." },
    { label: "Online IB and IGCSE tuition in Meerut", href: "/meerut/", description: "Tutoring support for Meerut's IB and IGCSE students." },
    { label: "Online IB and IGCSE tuition in Aligarh", href: "/aligarh/", description: "Tutoring support for Aligarh's IB and IGCSE students." },
  ],

  closingHeading: "Start with a free lesson for your Agra student",
  closingBody:
    "Let us know the board, the subject, the level and how much the current school is covering, if any. We will come back with a suitable tutor and a few trial-slot options that fit around your week, online, at no cost and no obligation. Write to ibgram24@gmail.com or ping +91 7439 368 115 on WhatsApp.",
};
