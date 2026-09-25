import type { CitySeoPage } from "../types";

/**
 * Siliguri has no confirmed IB World School or Cambridge/Edexcel IGCSE school inside the city
 * itself (checked against ibo.org listings and school directories). stripSchools stays empty per
 * the writer guide rather than naming a CBSE or ICSE school as something it is not.
 */
export const siliguriIbIgcseSchools: string[] = [];

export const siliguri: CitySeoPage = {
  slug: "siliguri",
  countryName: "Siliguri",
  countryNameLong: "Siliguri, West Bengal",
  demonym: "Siliguri",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots after school and weekend mornings, planned around Siliguri's monsoon power cuts and the Puja holiday block",
  lastUpdated: "2026-09-21",
  state: "West Bengal",
  stateCode: "IN-WB",
  geo: { latitude: 26.7271, longitude: 88.3953 },
  alternateNames: ["Shiliguri", "Siliguri Metropolitan Area"],
  wikipedia: "https://en.wikipedia.org/wiki/Siliguri",
  stripSchools: [],

  title: "IB and IGCSE Tutors in Siliguri | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Siliguri students: DP, MYP, PYP and Cambridge or Edexcel subjects taught online, one to one, with a free trial class before you commit.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Siliguri",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SILIGURI",
  heroSubtitle:
    "Siliguri is North Bengal's gateway city to Darjeeling, Sikkim and the Northeast, yet no school inside it is currently authorised to teach the IB, and a verified Cambridge IGCSE option is hard to find nearby either. Families who want either curriculum here usually pair a strong CBSE or ICSE school with private, one-to-one online tuition, entering exams as candidates rather than sitting inside a purpose-built IB classroom, and that is exactly what we help arrange.",
  primaryKeyword: "IB and IGCSE tutors in Siliguri",
  imageAltText: "IB tutor teaching an online IGCSE chemistry lesson to a student in Siliguri, West Bengal",
  secondaryKeywords: [
    "IB tutor in Siliguri",
    "IGCSE tutor in Siliguri",
    "IB home tuition Siliguri",
    "IGCSE home tuition Siliguri",
    "IB private tuition Siliguri",
    "IB Maths tutor Siliguri",
    "IGCSE Maths tutor Siliguri",
    "IB Physics tutor Siliguri",
    "IB Chemistry tutor Siliguri",
    "IB Biology tutor Siliguri",
    "IB DP tutor Siliguri",
    "IB MYP tutor Siliguri",
    "IB PYP tutor Siliguri",
    "IGCSE online tuition Siliguri",
    "online IB tutor Siliguri",
    "IB tutor Sevoke Road",
    "IGCSE tutor Matigara",
    "IB tutor Pradhan Nagar",
    "IGCSE tutor Hill Cart Road",
    "Cambridge IGCSE tutor Siliguri",
    "Edexcel IGCSE tutor Siliguri",
    "IB Economics tutor Siliguri",
    "IB English tutor Siliguri",
    "IGCSE Additional Maths tutor Siliguri",
    "IB tutor Shiliguri",
    "IB IA help Siliguri",
    "IGCSE tutor NJP Siliguri",
    "IB tutor Bagdogra",
    "home tuition Siliguri IB board",
  ],

  heroTrustPoints: [
    "Every tutor teaches the exact course code and level your child studies",
    "Lessons run live over video, since a genuine in-person option barely exists here",
    "A no-cost trial lesson comes before you decide anything",
    "We work independently of every school and board mentioned on this page",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online one-to-one", label: "Lesson format for Siliguri" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Why building an IB or IGCSE education from Siliguri looks different",
    paragraphs: [
      "Siliguri runs North Bengal's trade, transport and tourism traffic, feeding Darjeeling, Sikkim, Bhutan and the whole Northeast through its stations, its airport and its markets, yet no school within the city limits currently holds IB authorisation, and claims of Cambridge affiliation nearby are difficult to verify against any official listing. A family here who decides the IB Diploma or IGCSE is right for their child rarely finds a ready-made classroom for it; instead, they build the qualification themselves around a solid CBSE or ICSE school day and a dedicated tutor.",
      "That changes what tutoring actually needs to deliver. In a city with several established IB schools, a tutor's job is mostly reinforcement: catching up on a topic, tightening exam technique, checking an IA draft. In Siliguri, a tutor is frequently the only person teaching that syllabus to the student at all, which means the person needs to be capable of carrying the whole course confidently, session by session, rather than filling small gaps around a school timetable.",
      "None of this happens through a home visit. IB Gram sends in-person tutors only to Gurugram and pockets of Delhi NCR; a Siliguri student instead joins a live video lesson from their own desk, camera on, working the syllabus in real time with someone who has taught it to other students before. When families here type 'home tuition' into a search bar, this dedicated, one-to-one, appointment-based relationship is generally what they are actually after, and we simply deliver it over a screen rather than at a doorstep.",
      "IB Gram operates as an independent tutoring service with no affiliation, endorsement or partnership tied to the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school this page mentions. A tutor's job stops at teaching and reviewing a student's own work; producing any part of an Internal Assessment, an Extended Essay, coursework or any other assessed submission on a student's behalf falls outside what we do.",
    ],
    bullets: [
      "IB PYP through CP taught to run without needing a nearby IB school",
      "Cambridge and Pearson Edexcel IGCSE, both Core and Extended tiers",
      "Online sessions built to carry the whole course, not only revision",
      "A free trial lesson first, a written plan only once you continue",
      "No doorstep visits in Siliguri; every lesson happens live, online",
    ],
  },

  programmesIntro:
    "Most Siliguri students reach the IB through private or transfer candidacy rather than daily enrolment at an IB school, so the tutor's job at each stage differs from what it would be for a student sitting inside an actual IB classroom.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 6, ages 3 to 12",
      description:
        "Built around units of inquiry instead of separate subject periods, culminating in the PYP Exhibition, where a student designs and presents their own research project in the final year. No external examination exists at this stage.",
      countryNote:
        "For a Siliguri child, this usually means dedicated time on English expression and number sense outside school hours, since daily instruction often runs in Bengali, Nepali or Hindi and there is no nearby PYP classroom to model the inquiry approach itself.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11 to 16",
      description:
        "Every subject carries its own criteria, labelled A through D, and by MYP 5 a student is expected to complete the Personal Project largely independently, supported by a supervisor and recorded in a running journal.",
      countryNote:
        "A Siliguri MYP student typically needs someone to unpack what each criterion actually rewards, since no local classroom is demonstrating it day to day, and to keep the Personal Project journal moving well ahead of the usual Class 10 cutoff.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects split three and three between Higher and Standard Level, alongside Theory of Knowledge, the Extended Essay and Internal Assessments that can account for a substantial share of the final subject grade, with the external papers sitting in May.",
      countryNote:
        "Because Siliguri Diploma candidates are often registered through a school located elsewhere while living and studying at home, their tutor effectively becomes the primary teacher for each subject rather than a supporting resource.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs two or more Diploma subjects with a career-related study, a reflective project and a set of personal and professional skills, suited to a student who wants applied, vocational depth alongside academic breadth.",
      countryNote:
        "This route remains rare among North Bengal's candidates; where a student does take it, tutoring treats the chosen DP subjects with the same full attention a standalone Diploma course would get.",
    },
  ],

  subjectsIntro:
    "Without an IB classroom nearby, a Siliguri student's tutor is frequently the main source of structured teaching in that subject rather than a top-up on what school already covers, so we check that a tutor can genuinely run a full course independently before matching them to a family.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Deals with calculus, algebraic proof and demanding Paper 3 investigations, and settles on an exploration topic a student can research without relying on a school maths department." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Centres on statistical reasoning, modelling and confident GDC use, with the exploration built from data a Siliguri student can realistically source independently." },
    { name: "IB Physics", levels: "HL / SL", description: "Works through the syllabus from mechanics onward, building data-booklet familiarity and a Scientific Investigation plan that does not assume a fully equipped laboratory." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Covers structure, energetics, equilibrium and organic pathways, with practical concepts explained through demonstration where a live lab session is not an option." },
    { name: "IB Biology", levels: "HL / SL", description: "Runs from cellular processes through to ecological systems, with close attention to extended-response phrasing and to handling IA data correctly." },
    { name: "IB Economics", levels: "HL / SL", description: "Builds accurate micro and macro diagram work, HL-level quantitative Paper 3 questions, and three commentaries researched from current sources." },
    { name: "IB Business Management", levels: "HL / SL", description: "Focuses on applying theory to an unfamiliar case study and shaping the research project around a business the student can genuinely investigate." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Sharpens unseen-text analysis, comparative essay writing across two works, and the confident delivery a strong Individual Oral needs." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Introduces programming logic and abstract data structures from the beginning, working toward a documented IA product that actually runs." },
    { name: "IB Psychology", levels: "HL / SL", description: "Covers biological, cognitive and sociocultural approaches with rigorous study citation built in from the first lesson." },
    { name: "IB Geography", levels: "HL / SL", description: "Uses fieldwork design and case-study depth, drawing where useful on the Terai plains and Himalayan foothills right outside the door." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Applies systems thinking to genuinely local material, from tea-estate land use to the Teesta river catchment nearby." },
    { name: "IB Language B: Hindi, Nepali and Bengali", levels: "HL / SL", description: "Builds spontaneous speaking confidence and text-type awareness in whichever of these languages a family actually speaks at home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Works through exhibition objects and a prescribed title until a student can argue a position genuinely, rather than repeat one handed to them." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Starts with narrowing an achievable research question and mapping a timeline that survives a private candidate's own deadlines, not a school's." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Builds the investigation habits criteria B and C expect, laying groundwork for Diploma-level maths and science before Class 11 begins." },
  ],

  igcseSubjectsIntro:
    "Most of Siliguri's IGCSE students sit as Cambridge private or transfer candidates rather than attending a local Cambridge-affiliated school, so a tutor here often explains exam logistics and registration deadlines alongside the subject itself. We match on syllabus code and tier and confirm the tutor has actually taught private candidates before, not only classroom groups.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Works through Extended-tier papers method by method, with particular focus on the non-calculator questions that quietly cost the most marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 10", description: "Introduces calculus, trigonometric identities and vectors early, giving a private candidate the strongest possible run-up to IB Maths AA at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Trains Higher-tier problem solving in Edexcel's own question format, distinct enough from Cambridge phrasing to need separate practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Builds fluency rearranging equations and reasoning through electricity and waves, treating the alternative-to-practical paper as seriously as the written ones." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Covers mole calculations, bonding and organic chemistry, with lab concepts talked through visually for a candidate without regular access to one." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Focuses on genetics, human systems and the extended-response structure examiners expect, using real past-paper data for interpretation practice." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeps three sciences moving in parallel on one manageable schedule for a student without a school science department behind them." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Sharpens diagram accuracy and the longer evaluative answers that carry a disproportionate share of the marks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Separates out reading, writing, listening and speaking practice, particularly useful for a student moving from Bengali-, Nepali- or Hindi-medium schooling." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Trains a student to apply theory to the specific case-study business the exam sets, rather than a memorised generic answer." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Builds trace-table logic, pseudocode and Python skills needed for the problem-solving paper." },
  ],

  regionsTitle: "Siliguri and North Bengal areas we tutor online",
  regionsIntro:
    "Because every lesson happens over video, a family near the wholesale markets gets the same tutor access as one in a quiet residential lane further out. We still map the city so a tutor understands the school routine, timing and connectivity a student is working with.",
  regions: [
    { name: "Sevoke Road", note: "A main commercial and residential corridor with a mix of established CBSE and ICSE schools." },
    { name: "Hill Cart Road", note: "The old route toward Darjeeling and the hills, lined with long-settled residential pockets." },
    { name: "Pradhan Nagar", note: "A central, well-connected residential area close to several of the city's larger schools." },
    { name: "Matigara", note: "Nearer Bagdogra airport, with newer housing and families connected to the region's logistics and tourism trade." },
    { name: "Salugara", note: "Northern edge of the city, closer to tea-estate country and the Mahananda river belt." },
    { name: "Khalpara", note: "A dense, older trading neighbourhood near the wholesale markets, home to many business families." },
    { name: "Bhaktinagar", note: "Close to Siliguri Junction railway station, with a strong presence of trading and transport families." },
    { name: "New Jalpaiguri (NJP) area", note: "Around the city's main long-distance rail hub, useful context for families who travel frequently for work." },
    { name: "Deshbandhu Para and Suryasen Para", note: "Established central residential lanes with a mix of state-board, CBSE and ICSE households." },
    { name: "Sevoke More and City Centre", note: "The commercial heart of Siliguri, where many trading and professional families live above their own shops or offices." },
  ],

  schoolDisclaimer:
    "IB Gram works independently of every board and school it mentions. Names appear here only to describe the nearest genuine IB or Cambridge options, and we state plainly where Siliguri itself has none rather than implying otherwise. There is no affiliation, endorsement or partnership between IB Gram and the schools named on this page, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Siliguri city",
      note: "No school inside Siliguri is currently confirmed as an authorised IB World School or a verified Cambridge IGCSE centre. Families here typically keep a child enrolled in a strong local CBSE or ICSE school and add the IB or IGCSE as a separate, tutor-led track, sitting exams as a private or transfer candidate.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata, roughly an overnight train or a short flight away, is where most Siliguri families look when they want a child inside an actual IB or Cambridge classroom, whether through boarding or a full relocation for schooling.",
      schools: ["Calcutta International School", "The Heritage School", "RP Goenka International School"],
    },
    {
      city: "Nearby: Darjeeling and Kalimpong hills",
      note: "The well-regarded boarding schools in the hills above Siliguri are almost entirely ICSE-affiliated rather than IB or Cambridge, so a family choosing hill boarding for its reputation still needs separate, honest support if the actual goal is the IB or IGCSE.",
      schools: [],
    },
  ],

  modesIntro:
    "A Siliguri family effectively has one core format available, since IB Gram sends in-person tutors only to Gurugram and pockets of Delhi NCR. Live online tuition carries almost all of the teaching, and many families combine it with a local CBSE or ICSE school for daily attendance and non-IB subjects.",
  modes: [
    {
      title: "Live online one-to-one lessons",
      description:
        "A private video lesson with a shared digital whiteboard, screen-shared past papers and notes kept after every session. In Siliguri this carries the main teaching load rather than acting as a top-up.",
      bullets: [
        "Reaches specialists the local market simply cannot supply",
        "Removes the search for a rare in-person IB tutor altogether",
        "Suits private and transfer candidates as well as students enrolled elsewhere",
        "A second weekly slot is straightforward to add before an exam series",
      ],
    },
    {
      title: "Online tuition paired with a local school",
      description:
        "Many families keep a child at a local CBSE or ICSE school for daily structure, friendships and general subjects, then add an online tutor purely for the IB or IGCSE course that school does not teach.",
      bullets: [
        "Preserves a settled daily school routine",
        "Tutor concentrates purely on the international-curriculum course",
        "A sensible starting point for younger MYP-age students",
        "Avoids an abrupt switch away from a school the family already trusts",
      ],
    },
    {
      title: "Candidate registration and exam-focused sessions",
      description:
        "For a family entering a child as a Cambridge or IB private or transfer candidate, sessions weigh registration steps and exam-centre logistics as heavily as fresh content.",
      bullets: [
        "Clear guidance on realistic entry timelines and exam-centre choices",
        "Past papers and mark schemes introduced from an early stage",
        "Regular written updates so parents can follow a less familiar process",
        "One tutor throughout registration and preparation, not a rotating roster",
      ],
    },
  ],

  sections: [
    {
      heading: "Which Siliguri families actually look for IB or IGCSE tuition?",
      paragraphs: [
        "Demand here traces back to Siliguri's role as North Bengal's trade and transport artery rather than to a cluster of international schools. Tea, timber and cross-border trading families dealing with Nepal, Bhutan and Bangladesh want a qualification that travels wherever business or a future move takes the family, and the IB or IGCSE serves that better than a purely state-facing board.",
        "A second group sits around the city's transport and defence footprint. Siliguri occupies the narrow corridor often called the Chicken's Neck, linking the Northeast to the rest of the country, and hosts a sizeable Army and paramilitary presence near Sukna and the cantonment. Families posted here on transfer, some with a child already midway through IB or Cambridge study elsewhere, want continuity, not a fresh start on an unfamiliar board.",
        "A third group is drawn from faculty and clinicians tied to the University of North Bengal and North Bengal Medical College, alongside households working in the hospitality and tourism trade that Darjeeling and Sikkim travel supports, many of whom already have international exposure through their own work.",
        "Almost none of these families can simply walk their child into a local IB classroom. With no authorised school in the city and only distant, hard-to-verify Cambridge claims nearby, the workable route pairs a solid local school for everyday life with an online tutor able to carry the actual syllabus from the very first lesson.",
      ],
      bullets: [
        "Trading and cross-border business families want a portable qualification",
        "Army, paramilitary and transport-sector postings bring students already partway through IB or Cambridge",
        "University of North Bengal and medical-college households form a steady share of demand",
        "With no local IB school, a tutor usually teaches the full course, not just revision",
      ],
    },
    {
      heading: "West Bengal state board, CBSE, ICSE and IB or IGCSE: how they compare for a Siliguri family",
      paragraphs: [
        "The great majority of Siliguri schools run on CBSE or the CISCE board for ICSE and ISC, with a smaller share on the West Bengal state board; each leans on a single, high-stakes final paper and rewards recall and structured written answers. IB and IGCSE spread assessment across coursework and final papers instead, and expect a student to justify an answer rather than reproduce one.",
        "For a family choosing a board early on, the trade-off is really support against flexibility. CBSE and ICSE schools in Siliguri are well established, staffed by teachers who know the exam culture inside out; IB and IGCSE bring international recognition and a more analytical style, but almost nothing in the way of local classroom backing, which is precisely the gap a dedicated tutor exists to close.",
        "Where a family already on CBSE or ICSE is weighing a switch, the deciding factor is usually where the student eventually wants to study. CBSE and ICSE keep every Indian entrance route, WBJEE, JEE and NEET included, entirely straightforward. IB and IGCSE open direct entry to universities across the UK, US, Canada and Europe, and, through CUET-UG, to most Indian universities too, though the switch means moving to a private or transfer-candidate path without a local school behind it.",
        "Neither route wins outright; each simply asks something different of tutoring. In Siliguri specifically, an IB or IGCSE tutor is frequently the only person actively teaching that syllabus to the student, rather than supplementing a school that has already covered most of the ground.",
      ],
      table: {
        caption: "Boards available to Siliguri families, compared",
        columns: ["Feature", "WB state board / CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Local school availability", "Widely available across the city", "None confirmed inside Siliguri; nearest schools are in Kolkata"],
          ["Assessment style", "One high-stakes final exam, recall-based", "Coursework plus final papers, explanation and justification"],
          ["University fit", "Straightforward into WBJEE, JEE, NEET", "CUET-UG and overseas universities directly; some Indian routes need equivalence"],
          ["Tutoring role here", "Reinforces what the school already teaches", "Frequently the main source of structured teaching in the subject"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a Siliguri family, and what actually drives the fee?",
      paragraphs: [
        "What a family pays for an IB or IGCSE tutor in Siliguri depends on the subject and level, session length, how much of the course the tutor has to carry unaided, and how close a private or transfer candidate sits to their registration and exam dates. There is no fixed price list, since these variables genuinely move the number, but we confirm the fee for your specific match in writing before any trial lesson takes place.",
        "Because a Siliguri tutor is usually teaching the full course rather than reinforcing lessons a school has already delivered, sessions can run longer or a second weekly slot may be needed sooner than in a city where an IB school shares part of the workload, and it is worth planning for that rather than being caught out by it later.",
        "Travel is never part of the price here, since every lesson happens over video; that keeps rates steadier than they would be if a family were paying a premium for one of the very few tutors able to reach them in person. What genuinely moves the fee is subject scarcity and timing pressure, especially for HL sciences, Additional Mathematics or a candidate registration approaching a deadline.",
        "There are no long-term contracts attached to any of this. We check in every few weeks, and a family is free to pause or stop at any point, which matters for Siliguri households whose circumstances sometimes shift with a job transfer or a change in which board a child will ultimately sit.",
      ],
      bullets: [
        "Fee depends on subject, level, session length and how much content the tutor carries alone",
        "HL sciences and Additional Mathematics generally sit toward the higher end",
        "No travel premium, since every Siliguri lesson happens online",
        "Fee confirmed in writing up front; nothing locks a family into a long contract",
      ],
    },
    {
      heading: "Online tuition, a local school, self-study or a move to Kolkata: weighing the real options",
      paragraphs: [
        "For most Siliguri households, the choice is not really between four equally weighted paths; it is between building the qualification around online tuition and a local school, or relocating so a child sits inside an actual IB or Cambridge classroom. Both can work well, and the right call usually turns on how disruptive a move would be set against how much independent structure the family can sustain at home.",
        "Staying in Siliguri and adding a private online tutor keeps a family in its existing home, school and community while still giving the child a teacher who has genuinely covered the syllabus before. It does ask more self-discipline of the student than a daily IB classroom would, since a larger share of the structure now sits inside the tutoring relationship itself.",
        "Attempting IB or IGCSE through self-study alone, with no tutor and no local school offering even partial structure, is rarely a sound plan; a student working through Extended-tier IGCSE or Diploma HL content unaided has almost no reliable way to check their understanding against what examiners actually expect until the results themselves arrive.",
        "Relocating to Kolkata or elsewhere for schooling does solve the structure problem, but it brings its own costs, whether that means separating the family if only the child moves or uprooting the whole household if not. Several Siliguri families we have worked with tried this route first and later returned to an online-tutor-and-local-school arrangement once the disruption outweighed what it gained.",
      ],
      table: {
        caption: "Building an IB or IGCSE education from Siliguri",
        columns: ["Option", "What it solves", "What it costs the family"],
        rows: [
          ["Online tutor plus a local CBSE or ICSE school", "Full course access without leaving Siliguri", "Demands strong self-discipline from the student"],
          ["Self-study alone", "No extra cost beyond study materials", "Very high risk with nobody checking understanding"],
          ["Boarding or relocating to Kolkata", "A daily IB or Cambridge classroom", "Family separation or a full household move"],
          ["Private or transfer candidacy with a tutor", "Genuine IB or IGCSE certification without a local school", "Extra planning around registration deadlines"],
        ],
      },
    },
    {
      heading: "The Siliguri academic year: monsoon, Durga Puja and Dashain",
      paragraphs: [
        "Siliguri sits inside a heavy monsoon belt from June through September, and the Terai's flood risk brings power interruptions that unsettle internet reliability more here than in many drier parts of India, so a tutor working with Siliguri students keeps backup slots ready for the wettest stretches rather than assuming every session will proceed as booked.",
        "Durga Puja delivers the single biggest disruption to the academic calendar, usually landing in late September or October, when schools close for one to two weeks and the whole city, tutoring included, effectively pauses. Because Siliguri carries a substantial Nepali-speaking Gorkha population, Dashain, which often overlaps this same stretch, extends the break considerably further than a Bengali-only reading of the calendar would suggest.",
        "The winter months, November through February, give Siliguri its steadiest run of uninterrupted study time, with drier weather, far fewer festival closures and easier travel toward Darjeeling or Sikkim out of the way. Families frequently use this stretch for their heaviest run of sessions ahead of spring exams and, for Diploma students, before the May sitting draws near.",
        "Against the exam calendar itself, the IB Diploma sits its papers in May, with results following in early July and a retake window in November; Cambridge IGCSE runs series in May-June and October-November, while Edexcel IGCSE sits in January and May-June. That October-November window falls right beside the Puja and Dashain break, which is exactly why Siliguri families need scheduling built around the calendar rather than fighting it.",
      ],
      table: {
        caption: "Siliguri's calendar against the IB and IGCSE exam year",
        columns: ["Period", "City calendar", "Exam-year effect"],
        rows: [
          ["June-September", "Heavy monsoon, flood risk, frequent power cuts", "Needs backup slots for unreliable internet"],
          ["Late September-October", "Durga Puja and Dashain, one to two weeks off", "Overlaps the IGCSE October-November series and school mocks"],
          ["November-February", "Cooler, drier, fewer disruptions", "Best stretch for sustained study before May exams"],
          ["May", "Warm pre-monsoon weather", "IB Diploma final papers"],
        ],
      },
    },
    {
      heading: "University pathways from Siliguri after IB or IGCSE",
      paragraphs: [
        "Siliguri's IB and IGCSE students scatter toward a genuinely broad set of destinations, more so than in a city dominated by one obvious local university pull. Those applying overseas, to the UK, US, Canada or Europe, are read on IB total points with HL subject minimums, or on IGCSE and A Level results directly, and predicted grades submitted during Class 12 carry substantial weight in those decisions.",
        "Students staying within India rely increasingly on CUET-UG, which most participating universities accept from IB and IGCSE candidates without any separate conversion step, opening up central and state universities that once effectively assumed a CBSE or state-board background. The University of North Bengal remains a solid regional choice for students who prefer to stay close to home for undergraduate study.",
        "A meaningful share of Siliguri's IB and IGCSE graduates head into hospitality, travel and tourism management, a natural fit given how much of the local economy runs on Darjeeling and Sikkim tourism, while others pursue the more familiar engineering and medical routes through JEE and NEET alongside their international-curriculum studies.",
        "Because so many Siliguri students apply as private or transfer candidates rather than as students of an established IB school, predicted grades and reference letters take extra planning to arrange properly; a tutor who understands that whole process, not merely the subject content, often makes the difference between a smooth application and a last-minute scramble in Class 12.",
      ],
      bullets: [
        "UK, US, Canadian and European offers read IB points or IGCSE and A Level results directly",
        "CUET-UG opens most Indian universities to IB and IGCSE candidates without conversion",
        "University of North Bengal remains a strong choice for students staying in the region",
        "Hospitality and tourism management draws a meaningful share of local graduates",
      ],
    },
    {
      heading: "IB Maths Analysis and Approaches, Applications and Interpretation and the sciences without a local IB school",
      paragraphs: [
        "Deciding between Maths Analysis and Approaches and Applications and Interpretation is genuinely harder in Siliguri, where no nearby teacher has typically taught both, so the call usually rests entirely on a tutor's read of how the student thinks: proof-driven, calculus-heavy reasoning points toward AA, while comfort with data, modelling and real-world context points toward AI.",
        "Physics and Chemistry HL demand particular care here, since a student without a well-equipped school laboratory relies heavily on a tutor's ability to walk through practical work clearly using video demonstration, diagrams and careful method talk-through, rather than assuming hands-on lab time will fill whatever gaps remain.",
        "Biology HL students, some of them also preparing for NEET, need a tutor who keeps the two exam cultures genuinely apart: NEET rewards fast, recall-driven answers, while IB Biology rewards extended, evaluative writing, and blending the two habits under pressure tends to weaken performance in both rather than help either.",
        "The Scientific Investigation, the internally assessed practical component running across all three sciences, is where Siliguri students most need patient, direct tutor input, since designing a safe, workable investigation without a school lab to trial it in first takes noticeably more planning conversation than it would for a student with daily lab access.",
      ],
      bullets: [
        "AA suits proof and calculus strength; AI suits comfort with data and modelling",
        "Physics and Chemistry practical understanding often has to be built through video and diagrams alone",
        "NEET's recall style and IB Biology's evaluative writing need to stay genuinely separate",
        "Scientific Investigation design needs extra tutor input with no school lab available to test ideas in",
      ],
    },
    {
      heading: "Should a Siliguri IGCSE student choose Core or Extended tier?",
      paragraphs: [
        "Extended tier keeps the full grade range open, up to a 9 or an A*, while Core tier caps most Cambridge subjects at a grade 5 or C, and that ceiling matters directly for a Siliguri student who might later sit the IB Diploma, since Diploma HL maths and sciences take Extended-level content as their assumed starting point rather than an optional extra.",
        "With no local school able to make this call through everyday classroom observation, a Siliguri family typically leans on a tutor's diagnostic judgement around Class 8 or 9, working through sample Extended material to establish whether a student's struggle is confidence, which practice resolves quickly, or a genuine content gap that needs more runway before committing either way.",
        "Since private and transfer candidates register their own tier and syllabus code directly with the exam board rather than through a school's block entry, settling this decision early also sidesteps the administrative headache of amending an entry once registration has closed.",
        "For a Siliguri student choosing Extended who may go on to the Diploma, Additional Mathematics 0606 deserves priority over simply repeating standard Extended Mathematics content a second time, since it remains the strongest available bridge toward Maths Analysis and Approaches at Higher Level.",
      ],
      bullets: [
        "Extended tier is required for top grades and a smooth move into IB HL subjects",
        "A tutor-led diagnostic, not a school, usually settles Core versus Extended here",
        "Private-candidate registration makes getting the tier decision right early especially important",
        "Additional Mathematics 0606 remains the strongest bridge into IB Maths AA HL",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach the IB continuum and Cambridge or Edexcel IGCSE to Siliguri students entirely online, equally comfortable carrying a full syllabus for a private or transfer candidate and supporting a student who studies at a school elsewhere.",

  process: [
    { title: "Describe the syllabus", description: "Tell us the programme or board, subject, level and whether your child studies at a school already or is entering as a private or transfer candidate." },
    { title: "Get a shortlist back", description: "We put forward tutors capable of carrying the whole Siliguri syllabus, not just topping up a classroom that does not exist locally." },
    { title: "Sit in on a free trial", description: "Your child works a real topic with the tutor over video, at no cost and no obligation either way." },
    { title: "Set the first month's plan", description: "The tutor writes out topics, pace and, where relevant, registration steps; you approve it or ask for changes." },
    { title: "Check in every few weeks", description: "We track progress, adjust around mocks, monsoon disruption or deadlines, and swap tutors if the fit is not right." },
  ],

  whyPoints: [
    { title: "Designed for a thin local market", description: "Tutors are picked for their ability to run a whole IB or IGCSE course alone, since Siliguri has no confirmed IB school behind them." },
    { title: "Straightforward about local reality", description: "We say clearly where Siliguri and the surrounding hills actually stand on IB and Cambridge, rather than hinting at options that are not there." },
    { title: "A trial lesson before any decision", description: "Your child tries a real lesson first, so the tutor is judged on that, not on a written profile." },
    { title: "Academic integrity kept intact", description: "Tutors guide IAs, coursework, the EE and TOK, and never produce assessed work for a student." },
    { title: "Genuine private-candidate experience", description: "Tutors who already know registration deadlines and exam-centre logistics, not only the subject itself." },
    { title: "No strings attached", description: "No ties to any school or board, no long contracts, and a swap whenever the match is not working." },
  ],

  faqs: [
    {
      question: "Do you send home tutors who visit in Siliguri?",
      answer:
        "No, tutors do not call at homes in Siliguri; IB Gram sends in-person tutors only to Gurugram and pockets of Delhi NCR. In Siliguri, every lesson runs live over video instead, on a fixed weekly slot with the same personal attention a doorstep tutor would give. Given how few genuine in-person IB or IGCSE specialists exist anywhere in the region, this is the stronger option here, not merely the available one.",
    },
    {
      question: "Does Siliguri actually have any IB schools?",
      answer:
        "No school inside Siliguri currently holds confirmed IB World School status, and we could not verify a genuine Cambridge IGCSE school within the city either. The closest confirmed IB or Cambridge schools sit in Kolkata, roughly an overnight train or a short flight away. Most Siliguri families instead keep a child at a strong local CBSE or ICSE school and build the IB or IGCSE around dedicated online tutoring.",
    },
    {
      question: "How do I arrange an IB or IGCSE tutor for my child in Siliguri?",
      answer:
        "Tell us the programme or board, subject, level, and whether your child already attends a school or is entering as a private candidate, and we put together a shortlist of tutors able to teach that course fully online. Subject depth comes first in the match, then a free trial lesson lets you judge the fit before deciding anything further.",
    },
    {
      question: "Can you match IGCSE tutors in Siliguri for both Cambridge and Edexcel?",
      answer:
        "Yes. Since most Siliguri IGCSE students sit as private or transfer candidates rather than attending a local Cambridge school, our tutors also walk families through registration timelines and exam-centre choices alongside teaching the syllabus by its exact code and tier, whichever board applies.",
    },
    {
      question: "What should I expect to pay for an IB or IGCSE tutor in Siliguri?",
      answer:
        "The fee reflects the subject, level, session length and how much of the course the tutor is carrying without help from a local school, since there usually is none. We put the fee for your specific match in writing before the trial lesson. Nothing here locks you into a long contract, and you can pause or stop whenever you need to.",
    },
    {
      question: "My child will sit exams as a private or transfer candidate. Can a tutor guide us through registration?",
      answer:
        "Yes, tutors working with Siliguri families are used to private and transfer candidacy and can talk through realistic registration windows, exam-centre choices and paperwork alongside the teaching itself. This is one area where local families most need help, since there is no school here handling registration as part of a block entry.",
    },
    {
      question: "Is a free trial lesson available before I decide anything?",
      answer:
        "Yes, every match begins with a free trial lesson delivered online. Your child works through a real topic from their own syllabus with the tutor, at no cost and with no obligation to continue afterwards. The tutor then sends a short plan for the first month, and you choose whether to proceed, adjust it, or ask for a different tutor.",
    },
    {
      question: "Will a tutor help write my child's IB Internal Assessment or Extended Essay?",
      answer:
        "No, tutors guide these but never write any part of them. Useful support looks like narrowing a workable research question, unpacking what each assessment criterion actually rewards, planning how data will be gathered, and giving honest feedback on drafts. Writing or rewriting assessed work breaches the IB's academic integrity rules and can cost a student their Diploma, so this is not something IB Gram tutors agree to.",
    },
    {
      question: "Which IB Diploma subjects can Siliguri students get help with?",
      answer:
        "Our tutors cover the main IB Diploma subject groups for Siliguri students, most commonly Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science. We also support Psychology, Geography, Environmental Systems and Societies, Language B in Hindi, Nepali or Bengali, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "Do you support IB MYP and PYP students in Siliguri, or only the Diploma?",
      answer:
        "The full IB continuum is covered here, not just the Diploma. PYP support in Siliguri generally centres on English reading, writing and number sense for children schooled daily in Bengali, Nepali or Hindi. MYP support focuses on unpacking assessment criteria from the ground up and keeping the Personal Project journal on track, since most MYP-age students here have no local classroom already building those habits.",
    },
    {
      question: "How do the monsoon and Durga Puja affect scheduling?",
      answer:
        "Both are built into how we schedule Siliguri sessions. The monsoon, running June through September, brings flood risk and power cuts, so backup slots are set aside for the wettest weeks. Durga Puja and Dashain, usually late September into October, bring a one to two week break during which lessons are shortened or paused rather than forced to continue as though nothing has changed.",
    },
    {
      question: "Without a local Cambridge school, how do we choose IGCSE Core or Extended tier?",
      answer:
        "Extended tier tends to suit a student who may continue to the IB Diploma, since Core caps most subjects at a grade 5 or C while Diploma HL work assumes Extended-level content already. With no school available to judge this through classroom observation, we lean on a tutor-run diagnostic session around Class 8 or 9 to see whether a student can genuinely manage Extended material.",
    },
    {
      question: "Can online tutoring alone really replace a local IB or Cambridge school?",
      answer:
        "For most Siliguri students, yes, as long as the tutor is genuinely experienced at carrying a full syllabus rather than only topping up a classroom. It does ask more self-discipline of the student than a daily IB classroom would, and we say that plainly to families upfront, checking in regularly to make sure that structure is actually holding through the year.",
    },
    {
      question: "How does IB Gram check its tutors for a Siliguri-based student?",
      answer:
        "Every tutor is checked on qualifications, teaching background and subject depth before being introduced to a family, with particular attention to whether they have worked with private or transfer candidates rather than only classroom-based students. The free trial lesson then lets you judge explanation style and fit yourself, and if a tutor is not right, we find another one.",
    },
    {
      question: "When is the right time to start IB or IGCSE tutoring in Siliguri?",
      answer:
        "Starting at the beginning of the course gives the most room to work with: Class 11 for the IB Diploma, Class 9 for IGCSE, since a tutor here is usually building the syllabus from the ground up rather than reinforcing lessons already taught. Families who start later can still make real progress, but the plan shifts quickly toward the highest-value topics and past-paper work.",
    },
    {
      question: "What if the tutor turns out not to be the right fit?",
      answer:
        "Let us know and we will arrange another one. Progress gets reviewed with families every few weeks, and we swap tutors whenever the match is not working rather than expecting a student to push through with someone who is not helping. Nothing here involves a long contract, so pausing or stopping sessions carries no penalty either.",
    },
    {
      question: "Would moving to Kolkata for schooling beat online tutoring from Siliguri?",
      answer:
        "It genuinely depends on the family. Boarding or relocating gives a child a daily IB or Cambridge classroom and a settled peer group, but it also means separating the family or moving the whole household. Several families we have worked with tried relocation first and came back to an online-tutor-plus-local-school setup once the disruption outweighed what they gained, so weighing both honestly before deciding is worthwhile.",
    },
  ],

  internalLinks: [
    { label: "Browse tutors", href: "/tutors/", description: "Search tutor profiles by subject, programme and teaching background." },
    { label: "Kolkata", href: "/kolkata/", description: "IB and IGCSE tutoring for families based in Kolkata, West Bengal." },
    { label: "Patna", href: "/patna/", description: "IB and IGCSE tutoring for families based in Patna, Bihar." },
    { label: "Guwahati", href: "/guwahati/", description: "IB and IGCSE tutoring for families based in Guwahati, Assam." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "A breakdown of the DP: HL and SL choices, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria and the Personal Project actually work." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "PYP inquiry units and the final-year Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "A walkthrough of IGCSE boards, tiers, subjects and exam sessions." },
    { label: "IB and IGCSE blog", href: "/blog/", description: "Further reading and study guidance for IB and IGCSE families." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send us your brief and set up a free trial lesson." },
  ],

  closingHeading: "Set up a free trial lesson for your Siliguri student",
  closingBody:
    "Let us know the programme or board, subject and level, whether your child already attends a school or sits exams as a private candidate, and their current or predicted grade. We will come back with a shortlisted tutor, a note on their teaching background, and trial slots that suit your evening, delivered online at no cost and with no obligation. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
