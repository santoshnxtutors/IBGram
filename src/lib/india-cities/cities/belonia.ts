import type { CitySeoPage } from "../types";

/**
 * /belonia/ - IB and IGCSE tutoring page for Belonia, South Tripura. No IB or Cambridge/Edexcel
 * IGCSE school could be confirmed in Belonia, so stripSchools is empty and the clusters point
 * honestly to Agartala and further cities. Online delivery only.
 */
export const belonia: CitySeoPage = {
  slug: "belonia",
  countryName: "Belonia",
  countryNameLong: "Belonia, Tripura",
  demonym: "Belonia",
  state: "Tripura",
  stateCode: "IN-TR",
  flagCode: "in",
  countryCode: "IN",
  region: "Tripura, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are timed around Belonia's school hours, the Durga Puja and Kali Puja breaks and the heavy South Tripura monsoon",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.2533, longitude: 91.4528 },
  wikipedia: "https://en.wikipedia.org/wiki/Belonia,_India",
  alternateNames: ["Belonia South Tripura", "Belonia Tripura", "Belonia town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Belonia | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Belonia, South Tripura: Diploma, MYP, PYP, Cambridge and Edexcel subjects taught online one to one at home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Belonia",
  heroEyebrow: "ONLINE IB & IGCSE PRIVATE TUITION IN BELONIA",
  heroSubtitle:
    "A family in Belonia who wants home tuition for an IB or IGCSE course will not find a local teacher for it, and the nearest city is a long road away. IB Gram brings a tutor who already teaches your child's exact syllabus into the house by video, one to one, in Indian Standard Time, whether you live near the railway station or out towards Muhuripur.",
  primaryKeyword: "IB and IGCSE tutors in Belonia",
  imageAltText: "A Belonia student reviewing an IGCSE Biology diagram with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Belonia",
    "IGCSE tutor Belonia",
    "IB home tuition Belonia",
    "IGCSE home tuition Belonia",
    "IB private tuition Belonia",
    "IB Maths tutor Belonia",
    "IGCSE Maths tutor Belonia",
    "IB Physics tutor Belonia",
    "IB Chemistry tutor Belonia",
    "IB Biology tutor Belonia",
    "IB DP tutor Belonia",
    "IB MYP tutor Belonia",
    "IB PYP tutor Belonia",
    "IGCSE online tuition Belonia",
    "IB tutor South Tripura",
    "IGCSE tutor Belonia Tripura",
    "online IB tutor Tripura",
    "IB tutor near Agartala",
  ],

  heroTrustPoints: [
    "A tutor who already teaches your child's exact course, never a generalist",
    "Live video lessons only; tutors do not travel to homes in Belonia",
    "A first lesson at no cost so you can judge the fit",
    "No tie to any school, board or university mentioned below",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "All IB stages" },
    { value: "Cambridge, Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "Same clock as home" },
    { value: "Free lesson", label: "No obligation" },
  ],

  intro: {
    heading: "International-syllabus tuition at home in a border district town",
    paragraphs: [
      "Belonia is the headquarters of South Tripura district and one of the few Indian towns where the international boundary is close enough to shape the weather of daily life. About twenty thousand people lived in the municipal area at the 2011 census, literacy was reported around 95 per cent, and a railway line has linked the town to Agartala since 2019. The college in town is Iswar Chandra Vidyasagar College; the schools follow the Tripura board and CBSE. We could not confirm any Belonia school teaching the IB or a Cambridge or Edexcel IGCSE syllabus.",
      "Anyone who wants to follow such a course while living here therefore studies by video. A tutor from another Indian city logs in, the student sits at home with a laptop, and the two work through the specification together. Tutors do not visit homes in Belonia, and in-home visits are run only in Gurugram and parts of Delhi NCR. In a place where the capital is a long drive away and the road can be washed out in the rains, a screen is simply the dependable route to a specialist.",
      "Families who contact us from South Tripura tend to fall into a few groups: government and bank officers posted to Belonia who brought children from a metro school, parents who worked in Kolkata, Bengaluru or the Gulf and returned, and households who see a Cambridge or IB record as a way into universities abroad. IB Gram is independent of the IB, Cambridge, Pearson and any school named on this page, and tutors coach rather than write assessed work.",
    ],
    bullets: [
      "Live one-to-one lessons for IB PYP, MYP and DP and Cambridge and Edexcel IGCSE",
      "Every lesson is online in Belonia; home visits exist only in Gurugram and parts of Delhi NCR",
      "A written note after each session",
      "A different tutor if the first is not the right match",
      "Rates agreed in writing before booking",
    ],
  },

  programmesIntro:
    "No Belonia classroom runs an IB stage today, as far as we can tell, so each programme below is described in terms of what a tutor is asked to do for a student learning at home.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12, Nursery to Class 5",
      description:
        "Children explore six themes and finish with an Exhibition they plan themselves. Tutoring at this age covers reading, number work and the habit of questioning.",
      countryNote:
        "A PYP request from Belonia usually comes from a child whose parent was transferred here; a weekly tutor stops the inquiry method fading while the family adjusts to a new posting.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6 to 10",
      description:
        "Teachers assess against criteria in every subject, and a Personal Project completes the final year. Students must explain their reasoning and connect subjects.",
      countryNote:
        "With nobody locally able to decode the criteria, the tutor becomes the person who shows a Belonia student what a strong answer looks like at each band.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher and three at Standard Level, are studied with the Extended Essay, TOK and CAS. The final score combines exams and internal assessments.",
      countryNote:
        "Diploma enquiries from South Tripura lean towards sciences and Mathematics, because medicine and engineering at institutions in Agartala and beyond remain the main aspiration.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Selected Diploma courses are combined with career-related study and a reflective project, which suits students heading for applied or vocational routes.",
      countryNote:
        "We know of no CP school anywhere in Tripura, so tutoring here means supporting the academic courses included in the programme.",
    },
  ],

  subjectsIntro:
    "Tell us which course and level your child has taken. Applications and Interpretation at Standard Level calls for a different teacher from Analysis and Approaches at Higher Level, so the pairing is made on exactly that detail.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Built for students comfortable with algebra and calculus; lessons alternate new theory with timed sets and an early start on the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical modelling and calculator technology are central, so a tutor spends as much time on tools as on method." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, fields and quantum ideas are practised as numerical questions, with graph handling for the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Equilibrium, energetics and organic reaction pathways receive the most repetition, with attention to units and significant figures." },
    { name: "IB Biology", levels: "HL / SL", description: "Vocabulary accuracy decides marks, so lessons drill definitions and the exact meaning of outline, explain and evaluate." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Topics on biodiversity, water and land use connect easily to Tripura's forests, rubber plantations and river systems." },
    { name: "IB Economics", levels: "HL / SL", description: "Accurate diagrams and a single sharp sentence for each are the priority; examples include border trade and regional markets." },
    { name: "IB Business Management", levels: "HL / SL", description: "Students practise reading a case study quickly and applying the right theory to the firm described." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen analysis, essay planning and the oral commentary are rehearsed as three distinct skills." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and networks are taught with the exam's pseudocode conventions in mind." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies are learned with their methods and limitations, then shaped into extended responses." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies are prepared with real figures, and data-response practice builds speed with maps and graphs." },
    { name: "IB Bengali B", levels: "HL / SL", description: "For students at home in Bengali, lessons focus on formal registers, text types and spoken confidence for the oral." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Comprehension, formal writing and speaking are covered for students who meet Hindi mainly as a school subject." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors explore knowledge questions and real-life examples in conversation; the essay and exhibition are written and assembled by the student alone." },
  ],

  igcseSubjectsIntro:
    "In Belonia, IGCSE is usually taken privately or studied as a bridge before a school change. Decide first between Cambridge and Pearson Edexcel, then between Core and Extended (Foundation and Higher for Edexcel).",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and geometry are built from short worked examples, with calculator and non-calculator papers handled separately." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, introductory calculus and trigonometry arrive early, bridging towards Diploma or A Level Mathematics." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's question wording and method marks are taught explicitly through mixed practice papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement, circuits, waves and thermal topics are rehearsed along with the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, separation techniques and organic families are drilled until they feel routine." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, nutrition, reproduction and inheritance are revised with labelled diagrams the student draws unaided." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Scarcity, markets and trade are explained through examples drawn from a border economy and from India generally." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case reading, break-even and cash-flow questions are practised against past scenarios." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Number systems, logic circuits and tracing code by hand come first; the programming questions of the second paper follow once those are secure." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and argument pieces are given timed practice and sentence-level comment." },
    { name: "IGCSE Bengali as a Second Language", levels: "Grade 9-10", description: "Offered where the student's entry includes it; comprehension and letter writing come first." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and conversation for students who want an international qualification in Hindi." },
  ],

  regionsTitle: "Belonia and nearby places our online tutors serve",
  regionsIntro:
    "Lessons are online, so this list is not about distance a tutor must cover. It notes how each place's schools, transport and routine tend to affect when a lesson can happen.",
  regions: [
    { name: "Belonia town centre", note: "The district headquarters with the market, offices and schools; families with office jobs often prefer a lesson after seven in the evening." },
    { name: "Belonia railway station area", note: "The station with its Agartala service since 2019; weekend travel to the capital is easier now, so lessons are often fixed around the train." },
    { name: "Vidyasagar College area", note: "A neighbourhood close to the town's main degree college, with several households of teachers and officials." },
    { name: "Muhuripur", note: "A fishery and border-side locality where the Muhuri river shapes daily life; broadband can be uneven, so a phone hotspot is wise." },
    { name: "Muhurichar", note: "The river island area reached across the Muhuri; during high water, online lessons are more dependable than any journey." },
    { name: "Pilak", note: "About 12 km away, known for its twelfth-century archaeological remains; students here usually rely on Belonia for senior schooling." },
    { name: "Jolaibari", note: "The junction on National Highway 8 towards Agartala; families here weigh a boarding choice in the capital against studying at home." },
    { name: "Rajnagar", note: "A block on the Belonia sub-division side where private study is common because specialist teachers are few." },
    { name: "Sabroom", note: "The southern railway terminus; students travel to Belonia for colleges, and online lessons spare them that journey for tuition." },
    { name: "Santirbazar", note: "A neighbouring sub-divisional town whose students often commute to Belonia or Agartala for senior classes." },
  ],

  schoolDisclaimer:
    "We were unable to confirm an IB or Cambridge/Edexcel IGCSE school in Belonia, so none is listed here. Schools named below are in other cities, appear only to show options some families explore, and have no connection with IB Gram, which is an independent tutoring service.",
  schoolClusters: [
    {
      city: "Belonia and South Tripura",
      note: "Local schooling follows the Tripura board and CBSE. We could not confirm an IB or IGCSE school anywhere in the district, so international-syllabus students study at home with online tutors.",
      schools: [],
    },
    {
      city: "Nearby: Agartala",
      note: "Tripura's capital is a drive or a train journey away and has the widest school choice in the state. We could not confirm an IB or IGCSE campus there either, so we name no school and suggest checking the IB and Cambridge directories.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati and Kolkata",
      note: "Guwahati and Kolkata hold the closest confirmed international-curriculum schools for North-East families, and both are reachable by a day's journey or a short flight from Agartala.",
      schools: ["International School Guwahati", "Sankardeva Gurukul", "The Heritage School, Kolkata"],
    },
  ],

  modesIntro:
    "Three patterns cover most Belonia households. The medium is always a live one-to-one video lesson; the difference is how often and why.",
  modes: [
    {
      title: "Weekly lessons all year",
      description:
        "One fixed hour with a single tutor who works through the specification in order, marking homework between classes.",
      bullets: [
        "Works for IB, IGCSE and MYP subjects",
        "Digital whiteboard used in every lesson",
        "Photographed homework reviewed before the next class",
        "One consistent teacher across the year",
      ],
    },
    {
      title: "International course beside school",
      description:
        "For a child in a Tripura board or CBSE school who studies an IB or IGCSE syllabus on evenings or weekends.",
      bullets: [
        "Lessons follow the international specification only",
        "Slots avoid the school's term-test weeks",
        "A monthly progress note for parents",
        "Groundwork before a possible move to a boarding campus",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "A short, concentrated run of sessions built around timed papers, correction and retesting of weak topics.",
      bullets: [
        "Papers marked against official mark schemes",
        "Repeated mistakes logged and retested",
        "Starts four to six weeks before the exam",
        "Planned around monsoon and festival closures",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Belonia?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Belonia or elsewhere in South Tripura, and we would rather admit that than list an institution we cannot vouch for. Schooling in town runs on the Tripura board and CBSE, supported by a degree college, an ITI and a network of private tuition.",
        "That does not mean international ideas are absent. Belonia is a border town where families have long looked outward, to Chattogram port just across the line, to Kolkata for work and hospitals, and to Bengaluru or Delhi for careers. A railway link to Agartala since 2019 has made leaving easier, and some households now treat a Cambridge or IB record as part of a longer plan to study elsewhere.",
        "The family most likely to need our service is one that is already mid-course. A child who completed MYP in a metro school and moved to Belonia with a transferred parent cannot continue in a local classroom. Likewise a student on an IGCSE track whose family returned from the Gulf needs a teacher who knows that exact paper structure.",
        "Authorisations change, and a new international section may open without much notice. The IB find-a-school page and Cambridge's school locator are always more current than a tutoring page, so check them before relying on what we say here.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school in Belonia or South Tripura",
        "Local options are the Tripura board and CBSE",
        "Families are often transferred officials, returnees or planning study abroad",
        "Check official IB and Cambridge directories for new schools",
      ],
    },
    {
      heading: "Tripura board, CBSE, IB or IGCSE: which fits which child in Belonia?",
      paragraphs: [
        "The four routes in the table answer different questions, so there is no league table here. The Tripura board and CBSE are the everyday paths in Belonia, well understood by local teachers and tied to state and national entrance routes. IB and IGCSE are chosen for a reason: a relocation, a plan to study overseas, or a child who thrives when asked to explain.",
        "Parents usually weigh three things. How much is memorised, how the student is judged, and where the certificate will be accepted. The Tripura syllabus relies on written recall of textbook material, CBSE adds application, IGCSE tests reasoning in tiered papers and the Diploma spreads six subjects across exams, essays and coursework.",
        "Staying in the local system is a perfectly reasonable decision. Tripura Medical College, NIT Agartala and Tripura University are reached through well-mapped routes that most local coaching serves. An international programme earns its place when your plans lie beyond the region.",
      ],
      table: {
        caption: "Four routes compared for a Belonia family",
        columns: ["Point of comparison", "Tripura board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Available in Belonia", "Yes, most schools", "A few schools", "No school confirmed", "No school confirmed"],
          ["How work is judged", "Written recall of textbooks", "Recall with application", "Exams, essays and coursework", "Tiered applied papers"],
          ["Typical next step", "Higher secondary then state or national entrance", "Class 12 then JEE, NEET, CUET", "Equivalence certificate or direct overseas entry", "Class 11 in any board, or A Level"],
          ["How a Belonia student studies it", "Local school and tuition", "Local school and tuition", "Online tutor or relocation", "Online tutor or private entry"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE home tuition cost in Belonia?",
      paragraphs: [
        "There is no published price list, deliberately. A fee that fits a Class 5 reading lesson would be wrong for IB Chemistry HL, so we give a written quote after learning what your child studies, and the first lesson is free.",
        "Three things move a rate. The subject and level come first, since advanced Mathematics and the sciences depend on a smaller group of experienced tutors. The tutor's history with that exact specification is second, whether Cambridge 0620 or Edexcel 4CH1. Third is the rhythm of lessons: one relaxed weekly session costs differently from several a week before papers.",
        "Belonia families also skip expenses that their metro counterparts hardly notice. There is no train fare to Agartala for a weekly class, no overnight stay, and no premium for a tutor willing to come to a remote border town. The lesson reaches the child where the child already studies.",
        "For continuous support we can break the year into blocks so that spending matches the exam calendar rather than staying flat. A Class 9 student might have one lesson a week until January and daily practice only in the last month.",
      ],
      bullets: [
        "Rates depend on subject, level, tutor experience and frequency",
        "Quotes are sent in writing before you commit",
        "No travel cost for the family",
        "First lesson free",
      ],
    },
    {
      heading: "Online tutor, coaching centre, private teacher or self-study: what works in Belonia?",
      paragraphs: [
        "Belonia has private tuition in plenty, built around board examinations, Joint Entrance preparation and bank or government job tests. A parent asking a local centre about IGCSE Physics or IB Economics will usually learn that it is not offered, or be steered towards a class on a different syllabus.",
        "A good local teacher is valuable for school Mathematics and Science, and many families rely on one. The limitation is familiarity with the target exam: few teachers here have marked an IB internal assessment or read a Cambridge examiner's report, and command words such as justify, suggest or deduce are not part of everyday local practice.",
        "Self-study with past papers is possible for a determined student, but without a marker the same slip can recur for months. An online tutor who teaches the course is the closest thing to a school class that Belonia can offer today.",
      ],
      table: {
        caption: "Ways to study an international syllabus from Belonia",
        columns: ["Option", "Knows the exact specification?", "Marks to official schemes?", "What to expect"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched by course and level", "Yes", "Needs a laptop and a steady connection"],
          ["Coaching centre in Belonia or Agartala", "Rarely teaches IB or IGCSE", "Not applicable", "Fixed batches, long journeys"],
          ["Local private teacher", "Depends on personal background", "Seldom", "Flexible timing but few to choose from"],
          ["Self-study with past papers", "Student reads the specification alone", "No", "Free, yet slow to catch errors"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do the rains and festivals fit in?",
      paragraphs: [
        "The IB Diploma is examined in May and November, with May the usual choice for Indian candidates. Cambridge IGCSE runs in February-March, May-June and October-November, and Pearson Edexcel has January, May-June and November windows. A private candidate registers through an approved centre, which for Belonia families is generally in Agartala or farther afield, so the centre's closing date is the first thing to pin down.",
        "South Tripura has a long, heavy monsoon. Roads flood, the Muhuri and its feeder streams rise and power can fail for hours; in recent years the district has seen serious flooding. We therefore front-load content teaching into the drier months and use June to September for lighter consolidation, so a lost week does not derail the course.",
        "Durga Puja in autumn is the great holiday of the year here, followed within weeks by Kali Puja and Diwali, and then Christmas and the New Year. The Garia festival in April and the Bengali new year also draw families out. We map these dates before proposing a timetable.",
      ],
      table: {
        caption: "A study calendar for a Belonia student targeting the May session",
        columns: ["Period", "Study priority", "Local consideration"],
        rows: [
          ["June to August", "Start the course and set routines", "Heavy rain; power and road disruption likely"],
          ["September to October", "Core topics and first assessments", "Durga Puja closes schools for days"],
          ["November to January", "Practice papers and internal drafts", "Kali Puja, Christmas and New Year breaks; pleasant weather"],
          ["February to March", "Mock exams and correction work", "The most stable study window of the year"],
          ["April to May", "Final revision and timed papers", "Garia and Bengali new year; pre-monsoon storms can cut power"],
        ],
      },
    },
    {
      heading: "What can a Belonia student do after IB or IGCSE?",
      paragraphs: [
        "The route depends on the certificate and on how early the planning starts. An IB Diploma graduate applying to Indian public universities usually needs an equivalence certificate from the Association of Indian Universities, and a growing set of private universities admit on Diploma scores directly. CUET-UG publishes separate guidance for international boards each year, so check the current notice.",
        "IGCSE is a Class 10 qualification. Its holders in India generally join Class 11 in a CBSE, ICSE or IB school or follow A Level. A student returning to a Tripura higher secondary school should confirm with the board how the IGCSE results will be treated before term begins.",
        "Professional courses have conditions of their own. NEET-UG expects Physics, Chemistry and Biology, while JEE Main requires Mathematics with Physics and Chemistry, so a Diploma subject choice at fifteen can open or close options later. Local institutions such as NIT Agartala and Tripura University draw many students from the district, and others look to Kolkata, Bengaluru or abroad.",
        "Study abroad follows different gates. UK universities use UCAS with predicted grades, Canada and Australia take direct applications, and US colleges use the Common Application. Our tutors help students earn the marks; we do not offer admissions advice or promise results.",
      ],
      bullets: [
        "AIU equivalence for many Indian public universities",
        "Read the current CUET-UG, NEET-UG and JEE rules for international boards",
        "UCAS for the UK, direct applications for Canada and Australia",
        "Choose Diploma subjects with the target course in mind",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught over video?",
      paragraphs: [
        "A good online lesson feels like two people at one desk. The tutor shares a whiteboard, the student writes in a notebook beside the screen, and both look at the same problem. When the class ends, the student photographs the page so that the tutor can mark real handwriting.",
        "Mathematics has two courses and the choice needs thought. Analysis and Approaches suits students who like algebra, functions and calculus and are heading to engineering or pure science. Applications and Interpretation is built around data and technology, which fits economics, business and many life-science routes. We advise families before the course starts, because a late switch is hard.",
        "Physics, Chemistry and Biology each mix understanding, recall and an investigation. Tutors map the syllabus, rehearse the calculations and talk through experimental design, while the written investigation stays the student's work and feedback comes as questions.",
        "Because storms and patchy broadband are part of life in Belonia, we recommend a charged backup device and a phone hotspot during timed papers. Any session that drops is rescheduled without charge.",
      ],
    },
    {
      heading: "How should a Belonia student choose between IGCSE Core and Extended?",
      paragraphs: [
        "Core and Extended are separate papers and not two ways of marking one. Core stops at grade C while Extended can reach A star, so the tier fixes the ceiling before the exam begins. For Edexcel, the matching pair is Foundation and Higher.",
        "Anyone likely to continue to the Diploma, A Level sciences or a demanding Indian entrance stream is generally better served by Extended or Higher tiers in Mathematics and the sciences. Core makes sense for a subject studied for breadth or while confidence is rebuilding. The decision can be revisited a few months into the course with no penalty before entries close.",
        "The subject basket matters as much. English and Mathematics are nearly universal, and most students add two or three sciences and one humanities or business subject. For a Belonia student who speaks Bengali at home, a Bengali or Hindi language paper can be a steady scoring subject that eases the overall load.",
        "Cambridge and Edexcel differ in question style and tier names, so tell us which board your child is entered with and we will match a tutor who has taught that one.",
      ],
    },
  ],

  process: [
    { title: "Send the course details", description: "Share programme, subject, level and exam session over WhatsApp or email." },
    { title: "Review a short list", description: "We suggest one or two tutors who teach that exact syllabus." },
    { title: "Take a trial class", description: "Attend a full free lesson before agreeing to anything." },
    { title: "Settle terms in writing", description: "Fees, timing and a first-month plan come as a brief note." },
    { title: "Learn and review", description: "Regular lessons with written notes, and a tutor change if needed." },
  ],

  whyPoints: [
    { title: "Chosen by exact course", description: "An IB Physics HL student meets a tutor who teaches IB Physics HL." },
    { title: "Designed for places without local options", description: "Belonia gets the specialist that no local centre can offer." },
    { title: "Candid about the local picture", description: "We say clearly that no IB or IGCSE school could be confirmed here." },
    { title: "Notes parents can read", description: "A short written summary follows each lesson." },
    { title: "Free first lesson", description: "See the tutor teach before deciding anything." },
    { title: "Coaching within limits", description: "No tutor writes assessed work for a student." },
  ],

  tutorsIntro:
    "Tutors work from different Indian cities on the same clock, so a Belonia student never negotiates time differences. A short profile is shared before the trial and matches are made on course, level and teaching style.",

  faqs: [
    { question: "Do tutors visit homes in Belonia for IB or IGCSE?", answer: "No. Tutors do not come to homes in Belonia; in-home teaching is limited to Gurugram and parts of Delhi NCR. Belonia lessons are live online and one to one, taken on a laptop at your own table. The child still gets a single teacher's undivided attention, and the tutor can be the right specialist from any Indian city." },
    { question: "Is there an IB school in Belonia or South Tripura?", answer: "Our checks found no IB school in Belonia or elsewhere in South Tripura; local schools follow the Tripura board or CBSE. The IB's find-a-school page is the place to look for new authorisations. Until something opens, an IB student here either studies at home through online tuition or joins a school in another city." },
    { question: "Can I get IGCSE home tuition in Belonia?", answer: "Yes, in an online form. Your child works live with a tutor who knows the chosen IGCSE board and subject, at a time that suits the household. Nobody comes to a Belonia home, since in-person lessons are limited to Gurugram and parts of Delhi NCR, but the one-to-one video format lets you pick a Cambridge or Edexcel specialist freely." },
    { question: "How can my child sit IGCSE exams from Belonia?", answer: "A private candidate needs an authorised exam centre willing to accept outside entries, and for Belonia that usually means a centre in Agartala or farther. Cambridge and Pearson each publish a list of centres and a closing date for every series, normally several months before the papers. Fees and any practical component are agreed with the centre; the tutor handles preparation only." },
    { question: "What does it cost, and is the trial lesson free?", answer: "Your child's first lesson costs nothing. Later fees reflect who teaches, which subject and level are involved and how many hours a week are booked; a written figure reaches you before you agree. Senior sciences and Mathematics tend to sit higher than primary support. With no commuting involved, the family adds nothing for travel." },
    { question: "Which subjects do Belonia students ask for most?", answer: "Mathematics and the three sciences dominate requests, reflecting the pull of medicine and engineering. Economics, Business Management and English come next, followed by Bengali and Hindi support. Theory of Knowledge also comes up often, but a tutor will talk through ideas and structure and will not write any of the essay." },
    { question: "Will an IB Diploma still let my child write NEET or JEE?", answer: "Possibly, but it depends on subject choices and on rules that are revised annually. NEET-UG normally asks for Physics, Chemistry and Biology; JEE asks for Mathematics alongside Physics and Chemistry; several institutions also want an AIU equivalence certificate. Choose Diploma subjects early and check the latest notices with the agency itself." },
    { question: "Does the monsoon disrupt online lessons in Belonia?", answer: "Sometimes. Heavy rain can cut power or flood roads in parts of South Tripura, and a lesson can drop. Online study is still less affected than travel. We plan heavier teaching for drier months, suggest a phone hotspot and a charged laptop as backup, and reschedule any lost session without charge." },
    { question: "Will tutors write my child's Extended Essay or IA?", answer: "No. A tutor's job is to coach, which means unpacking the marking criteria, questioning a draft research question and giving general comments on structure. Drafting, wording and argument stay with the student. This boundary also keeps your child clear of any academic-integrity ruling that might jeopardise the whole Diploma." },
    { question: "Is Class 8 too early to begin IGCSE preparation?", answer: "Not at all. Class 8 or 9 is a comfortable moment, because the child can shift from reproducing notes to reasoning aloud before any board pressure arrives. Expect a light first term on the vocabulary of the papers and basic habits, then steadily harder past questions. One trial session will show whether weekly or twice-weekly meetings are the right pace for your child." },
    { question: "My child studies in Bengali medium. Can English tutoring work?", answer: "Yes, though it takes patience. Teaching happens in English since the papers are set in English, yet tutors from India can pause to restate an idea in Hindi or sometimes Bengali. Over months the student builds the written English that examiners expect, and a language course such as IB Bengali B can sit alongside science and Mathematics." },
    { question: "How often should lessons happen?", answer: "For a normal year, a single weekly lesson plus set homework is enough. The month before papers is different: three or four sessions a week is common. Your tutor reads the results of timed papers and proposes the next step, and you can change the timetable at any point by letting us know in writing." },
    { question: "Which IGCSE boards do you support?", answer: "We cover Cambridge International and Pearson Edexcel IGCSE, and use A Level or AS only as context. Their papers, tiers and question phrasing are not identical, which is why the entry board is the first thing we ask. The tutor you meet will have taught that board, and a different one can be arranged if the entry is switched." },
    { question: "Is IB Gram connected to any school or to the IB?", answer: "No. We are an independent tutoring business and have no link to the IBO, Cambridge, Pearson or any school or university mentioned here. Cities and schools appear only as context for families weighing choices. Please verify admissions, fees and authorisation with the institution before deciding anything." },
    { question: "How do I book the free trial?", answer: "Write to support@ibgram.com or send a WhatsApp message to +91 7439 368 115, giving the class, the board, the subject and a time that works in the evening. A matching tutor is usually proposed within days and the trial carries no commitment. If you do not warm to the tutor, say so and a second name will be offered." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Every Indian city we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring works." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects and core components of the DP." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and Personal Project help." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led support for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to arrange a trial." },
    { label: "IB and IGCSE tutors in Agartala", href: "/agartala/", description: "Our page for Tripura's capital." },
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "Our page for the North-East's largest city." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "Our page for the nearest metro." },
  ],

  closingHeading: "Start with a free lesson from Belonia",
  closingBody:
    "Share the programme, the subject and the sitting you are aiming for, and a suitable tutor will be proposed from our pool of IB and IGCSE teachers. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115. Your first class is on us.",
};
