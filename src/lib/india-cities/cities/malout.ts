import type { CitySeoPage } from "../types";

/**
 * /malout/ - IB and IGCSE tutoring page for Malout, Sri Muktsar Sahib district, Punjab. Online-only
 * delivery. No IB or Cambridge/Edexcel school is confirmed in Malout, so stripSchools is empty and
 * clusters are labelled nearby cities (Ludhiana, Chandigarh-Mohali, Jalandhar) reusing names
 * verified on the finished Ludhiana, Mohali, Bathinda and Chandigarh pages. Town facts from
 * Wikipedia's Malout article (cotton capital of Punjab, farm-machinery trade, railway arrived
 * 1917-18, Godara family civic gifts, summer highs of 48-50 C, about 70 percent of rain June-Sept).
 * Written to read differently from /muktsar/, the other Malwa town of the same district.
 */
export const malout: CitySeoPage = {
  slug: "malout",
  countryName: "Malout",
  countryNameLong: "Malout, Punjab",
  demonym: "Malout",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around the summer furnace that can touch 48 degrees, the cotton picking and mandi rush in autumn, and the winter fog that settles across the southern Malwa plains",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.19, longitude: 74.4989 },
  wikipedia: "https://en.wikipedia.org/wiki/Malout",
  alternateNames: ["Malaut", "Malout Mandi", "Malout Muktsar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Malout | One-to-One Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Malout students in Punjab: live online one-to-one Maths, science and language lessons for DP, MYP and IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Malout",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR MALOUT BUSINESS AND FARM FAMILIES",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Malout, taught online: one-to-one video lessons from tutors who know the exact Diploma course or Cambridge and Edexcel paper your child faces. Suited to traders and farm-machinery families with a child at a boarding school in Ludhiana or Mohali.",
  primaryKeyword: "IB and IGCSE tutors in Malout",
  imageAltText: "A Malout student working on IB Economics diagrams with an online tutor during a live one-to-one lesson",
  secondaryKeywords: [
    "IB tutor Malout",
    "IGCSE tutor Malout",
    "IB home tuition Malout",
    "IGCSE home tuition Malout",
    "IB private tuition Malout",
    "IB Maths tutor Malout",
    "IGCSE Maths tutor Malout",
    "IB Physics tutor Malout",
    "IB Chemistry tutor Malout",
    "IB Biology tutor Malout",
    "IB DP tutor Malout",
    "IB MYP tutor Malout",
    "IB PYP tutor Malout",
    "IGCSE online tuition Malout",
    "Cambridge IGCSE tutor Malout",
    "IB tutor Malout Punjab",
    "IB Economics tutor Malout",
    "online IGCSE tutor Abohar Road Malout",
    "IB tutor Malout Mandi",
  ],

  heroTrustPoints: [
    "Your child is paired with a tutor who has taught the same IB subject and level or the same IGCSE code, with no general-purpose matching",
    "All lessons run on screen; a tutor does not turn up at a Malout address, because in-person home tuition is limited to Gurugram and parts of Delhi NCR",
    "The first lesson costs nothing and you get a written note to keep",
    "Independent of the IB, Cambridge, Pearson and every school named here; no tutor writes assessed coursework",
  ],
  heroStats: [
    { value: "IB from PYP to DP", label: "Every stage handled" },
    { value: "Cambridge, Edexcel", label: "Both IGCSE boards" },
    { value: "Late-evening slots", label: "After shop and school hours" },
    { value: "Trial is free", label: "No payment to start" },
  ],

  intro: {
    heading: "What IB and IGCSE help looks like in a mandi town of southern Malwa",
    paragraphs: [
      "Malout grew up around grain, cotton and the railway. The line from Bathinda towards Karachi reached it in 1917 or 1918, the Godara family funded much of its early civic life, and today the town is known as a cotton capital of Punjab with a trade in farm machinery and textile work. A typical family here runs a shop, a commission agency, a workshop or farmland, and thinks in terms of the next generation: which school, which degree, which country.",
      "That is where IB and IGCSE enquiries come from. A trader's daughter is boarding at Oakridge in Mohali, or at one of the Cambridge schools in Ludhiana, and needs a steady subject teacher on weekends. Another family has cousins in Canada, where the Diploma is widely understood, and wants to prepare a Class 7 child early. A third has just returned from Dubai or Sydney. Nobody in Malout itself teaches these syllabuses, and the town is far from any campus.",
      "Because the region sits close to both Haryana and Rajasthan, Punjabi, Hindi and Bagri are all spoken around town, and English is a further language that children meet mostly at school. Tutors on our platform explain patiently in plain English first, adding Hindi or Punjabi for a stubborn idea, and they set homework that a student can complete between other commitments.",
      "IB Gram works independently of the IB, Cambridge, Pearson Edexcel and all schools mentioned on this page. Tutors explain and correct, and they will not produce an Internal Assessment, Extended Essay, TOK essay or any other assessed piece.",
    ],
    bullets: [
      "Designed for trading, farming and workshop families with international ambitions",
      "Hindi and Punjabi used to unlock difficult ideas when useful",
      "Online only here; in-person home tuition applies to Gurugram and parts of Delhi NCR",
      "Free trial with a short written note afterwards",
    ],
  },

  programmesIntro:
    "No IB Diploma, MYP or PYP school is confirmed in Malout, so each stage below is followed in another city or another country. What follows is what each stage demands and the route a Malout family usually takes into it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning runs through transdisciplinary themes, and pupils present an Exhibition in the last year. With no examinations, tutoring builds habits: reading aloud daily, explaining a sum in words and framing a question that could be explored in a week.",
      countryNote:
        "In Malout, PYP enquiries mostly come from a family back from abroad, or from parents planning early for a move to an international day school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is marked on four published criteria, units connect to global contexts, and the Personal Project closes the programme. Students commonly drift into narrating when a criterion wants an explanation of why, and tutors retrain that instinct.",
      countryNote:
        "A Malout MYP student is usually away at school, so sessions concentrate on holidays such as Diwali and the summer break, and occasional weekend slots.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher and three Standard Level subjects, plus the Extended Essay, TOK and CAS. Written papers fall in May, while internal assessments are sent for moderation, and results are published in July.",
      countryNote:
        "Diploma candidates with a Malout address are almost always studying in another city, so lessons follow the school's mock dates and use weeks at home for intensive work.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students take at least two Diploma courses alongside career-related study and a reflective project. Since few Indian schools run it, tutoring is nearly always in the Diploma courses themselves.",
      countryNote:
        "Malout requests for CP are very rare, and when one arrives the tutoring stays with the academic courses.",
    },
  ],

  subjectsIntro:
    "Our opening question is always about level and paper, since an Economics SL student needs different help from an HL candidate. The exam series and the school's most recent marking come next.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus and algebra get steady timed practice, and the Exploration is tied to a topic the student cares about, such as crop-yield data or mandi price series." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics and modelling are taught with real datasets, and students learn to describe a model's limits rather than just produce a number." },
    { name: "IB Physics", levels: "HL / SL", description: "Topics like thermal physics and fields are worked through data-booklet questions, and the investigation's method is reviewed before data collection begins." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work and equilibrium get repeated drills, and organic reaction maps are drawn from memory until they stick." },
    { name: "IB Biology", levels: "HL / SL", description: "Students learn to match answer length to command term and to choose a statistical test that fits the investigation's data." },
    { name: "IB Economics", levels: "HL / SL", description: "A trader's child has a head start on markets, and tutors turn that instinct into clean diagrams and two-sided evaluation, using examples from cotton and grain prices." },
    { name: "IB Business Management", levels: "HL / SL", description: "Students raised around a family shop or workshop already sense how a firm behaves; lessons turn that sense into tool-by-tool analysis of a printed case and a judgement that names its trade-offs." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "The unseen passage, the two-text essay and the spoken commentary are each drilled separately, and every attempt comes back with comments in writing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Tracing loops by hand, then running the same logic in code, is the routine; the internal product gets a running log so nothing is reconstructed in the final week." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies are learnt in a consistent pattern of aim, method, finding and evaluation, then shaped into timed essays." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Groundwater, pesticide use and canal irrigation around Malout give system diagrams and evaluation questions a local setting." },
    { name: "IB Geography", levels: "HL / SL", description: "Named places, dates and figures lift a case study; map, graph and statistics questions get regular timed attempts." },
    { name: "IB Punjabi B", levels: "SL / HL", description: "Students who speak Punjabi at home still need help with formal writing and the interactive oral, where accuracy counts." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors act as a questioning partner for the exhibition and essay topics. The thinking is challenged in conversation and the writing is the student's." },
  ],

  igcseSubjectsIntro:
    "An IGCSE student with a Malout address is normally part-way through a course begun in a boarding school or abroad. The board, paper code and tier are pinned down before anything else, since Cambridge and Edexcel mark differently.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Extended candidates rehearse algebra and every line of working, since an arithmetic slip loses one mark while a missing method loses several." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and trigonometry in a way that eases the later move to IB Maths AA or an A Level." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Rearranging formulae, reading a graph for its gradient and planning a fair test are timed drills, not leftovers at the end of revision." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Moles come first, then organic families in order, and the tests for ions and gases are kept on a single revision grid." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Six-mark answers on inheritance and transport are drafted against the official wording, with a neat labelled sketch beside each." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams come quickly, and marks beyond them come from balanced judgement that Malout trading families already understand intuitively." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based answers that use the scenario's own numbers score higher than memorised definitions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A student writes a small Python routine, then rewrites it as exam pseudocode, so Paper 2 looks like work already done." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Audience-led writing and tight summaries are tried on passages the student has never met, with notes on register and slips." },
  ],

  regionsTitle: "Malout areas and neighbouring towns we match online",
  regionsIntro:
    "Lessons are delivered on screen, so these places are listed for context only: the roads families use, the schools they look towards and how heat, harvest and fog shape the evening. Nearby towns are included because students commonly come from them.",
  regions: [
    { name: "Old town and grain market", note: "The oldest commercial core, where commission agents and traders live above their shops and think about the next generation's schooling." },
    { name: "Railway station side", note: "Along the historic line from Bathinda towards Fazilka, with railway staff households and travellers heading to larger cities." },
    { name: "Abohar Road", note: "The road towards Abohar, the next big town on the route, where farm-machinery dealers and agri-input businesses cluster." },
    { name: "Muktsar Road", note: "The eastern approach towards Sri Muktsar Sahib, used by families with ties to government colleges and the district offices." },
    { name: "Bathinda side", note: "The north-eastern direction, towards Bathinda, where AIIMS and the Central University of Punjab shape family ambitions." },
    { name: "Dabwali and the Haryana border belt", note: "A cross-border belt where families work across state lines and often compare Punjab and Haryana schooling." },
    { name: "Gidderbaha", note: "A nearby mandi town, sharing Malout's trading culture and a steady flow of boarders to bigger cities." },
    { name: "Lambi", note: "A farming area in the district with cotton and wheat households, where overseas relatives often introduce the idea of an IB or IGCSE." },
    { name: "Outer colonies and farmhouses", note: "Newer plots on the edge of town, where families who have prospered from trade or farming build larger houses and plan longer-term." },
  ],

  schoolDisclaimer:
    "No IB World School, and no real Cambridge or Edexcel IGCSE centre, could be verified within Malout. The schools below are in other cities that some families from southern Malwa consider. IB Gram is independent of each of them and of the IB, Cambridge and Pearson, so check each school's affiliation directly.",
  schoolClusters: [
    {
      city: "Nearby: Ludhiana",
      note: "Several hours by road, with some of Punjab's best-known Cambridge-affiliated schools, and a common boarding choice for traders' children.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "The tri-city area carries the region's most developed IB and IGCSE provision, and is the natural destination for a Diploma-bound student.",
      schools: ["Oakridge International School, Mohali", "The British School, Chandigarh"],
    },
    {
      city: "Nearby: Jalandhar",
      note: "Further north in the Doaba, where one school is listed in Punjab's own directory as IB-affiliated, an option some families weigh.",
      schools: ["Cambridge International School, Jalandhar"],
    },
  ],

  modesIntro:
    "Malout families usually choose among three patterns. Every one of them runs on a laptop at home; no tutor visits a Malout house, because visits are available only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A regular night-time lesson",
      description:
        "One tutor, one subject, one fixed slot a week, often set for after the shop has closed or after the school-day tuition batch. Regularity matters more than length in most terms.",
      bullets: [
        "Works for IB DP, MYP, PYP and both IGCSE boards",
        "A shared whiteboard stands in for a shared desk",
        "The same tutor follows the student through the year",
        "Adding a second subject is straightforward",
      ],
    },
    {
      title: "Weekly lessons with a parent briefing",
      description:
        "The same weekly lesson, plus a written note each time and a short call with a parent every few weeks, for households where daytime is taken up by business.",
      bullets: [
        "Notes record topics and homework",
        "Calls reset priorities for the next month",
        "Suits parents who cannot sit in",
        "A change of tutor is easy if required",
      ],
    },
    {
      title: "Break-time and pre-exam blocks",
      description:
        "Several lessons per week during Diwali, winter holidays or before the May series, focused on timed papers and quick marking, and scheduled away from the cotton rush and peak heat.",
      bullets: [
        "Papers marked to the latest mark scheme",
        "Weak topics given extra time",
        "Booked two to three weeks in advance",
        "Begins with a diagnostic paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school in or near Malout?",
      paragraphs: [
        "In short, not that we can confirm. Malout's schools follow the Punjab Board or CBSE, with some ICSE options, and we found no IB World School or genuine Cambridge or Edexcel centre in the town. A few schools use 'Cambridge' or 'International' in their names, but that alone does not show which board they follow, so ask for the affiliation number.",
        "Families who want an international curriculum therefore look out of town. Ludhiana is the long-standing answer for Cambridge, Mohali and Chandigarh for the IB, and Jalandhar has a school that Punjab's own directory lists as IB-affiliated. All are a long drive, which is why boarding or a move is part of the plan.",
        "A second category is families who have lived elsewhere. Malout's diaspora links to Canada, Australia and the UK are strong, and a returning child may have done MYP or IGCSE years in a foreign school system. Bringing that child back into a Punjab Board timetable midway can be jarring, and a tutor who knows both worlds helps.",
        "Since the town has no specialist pool, choosing a tutor nationally is the practical route. A Malout student's Diploma papers are marked by the same examiners and the same descriptors as those from Mumbai or Toronto.",
      ],
      table: {
        caption: "Where Malout families look for IB and IGCSE schooling",
        columns: ["Place", "Relation to Malout", "What we can point to"],
        rows: [
          ["Malout", "Home town", "Nothing verified locally"],
          ["Ludhiana", "Several hours by road", "Britannica International School, Harvest International School"],
          ["Chandigarh and Mohali", "Further east", "Oakridge International School, The British School"],
          ["Jalandhar", "North in the Doaba", "Cambridge International School, listed as IB-affiliated"],
        ],
      },
      bullets: [
        "Nothing verified inside town limits",
        "School names with 'Cambridge' do not prove a Cambridge syllabus",
        "Boarding in Ludhiana, Mohali or Jalandhar is the typical path",
        "Online tutoring gives access to specialists across India",
      ],
    },
    {
      heading: "How do Punjab Board, CBSE, IB and IGCSE differ for a Malout student?",
      paragraphs: [
        "The Punjab Board and CBSE reward careful recall, particularly in subjects like Science and Social Studies. IB and IGCSE keep the content but ask children to apply ideas to unfamiliar data and to write structured arguments. In Malout, where many children are quick at numbers from helping in the family business, mathematics often transfers well, while written English and extended answers need work.",
        "Another difference is how internal work counts. In the IB, teacher-assessed components such as the Internal Assessment and Extended Essay contribute to the final result, while IGCSE is mainly decided by externally marked papers. A student who is strong under exam pressure but slow on long projects may find IGCSE easier to manage.",
        "The calendar adds complexity. Punjab Board and CBSE exams fall between February and April, IB's main sitting is in May and IGCSE in May-June or October-November, with Cambridge's extra India series in February-March. A child moving between systems can lose or double up on months, so planning matters.",
        "None of these is best for every child. The useful question is which one keeps the right next step open, and tuition should follow the board the student has joined.",
      ],
      table: {
        caption: "Board differences that matter in Malout",
        columns: ["Board", "Main skill tested", "Exam months", "Common destination"],
        rows: [
          ["Punjab School Education Board", "Recall of textbook content", "Spring", "State colleges and local entrance routes"],
          ["CBSE", "Structured answers and competency questions", "February to April", "Engineering, medical and central-university entrances"],
          ["IB Diploma", "Analysis, extended writing, internal work", "May", "Indian and overseas universities"],
          ["Cambridge IGCSE", "Tiered papers with method marks", "May-June, Oct-Nov, India Feb-Mar", "Next: A Level, the IB or schools abroad"],
          ["Pearson Edexcel IGCSE", "Tiered papers in a linear layout", "May-June, October-November", "Next: A Level, the IB or schools abroad"],
        ],
      },
    },
    {
      heading: "What goes into the cost of IB or IGCSE tuition in Malout?",
      paragraphs: [
        "There is no public price list because the rate is set by your specific need, and it is given in writing before any lesson is paid for. The first lesson is free. Malout families, who are used to negotiating and comparing, are welcome to ask for clarity on every line.",
        "The tutor's depth of experience is the most important factor, and especially experience as an examiner or moderator, which is rare. Level follows: IB Physics HL or Computer Science HL call for scarcer teachers than introductory science.",
        "How often you meet and for how long changes the total. One lesson a week is a modest commitment, while four lessons a week in the month before an exam is an intensive one. Short, frequent lessons often work better for younger students than long ones.",
        "A fair comparison with local coaching is attention per hour. A one-to-one lesson gives a student every minute of the tutor's time, while a batch divides it. There is also the saving on petrol and time if a family would otherwise drive to Bathinda or further for a specialist.",
      ],
      bullets: [
        "The figure moves with tutor seniority, course level, lesson length and weekly count",
        "Stated on paper before any fee is taken",
        "No driving to another city for lessons",
        "Plans can be scaled up before exams and reduced later",
      ],
    },
    {
      heading: "Online lessons, coaching centres, local tutors or self-study: which suits IB and IGCSE students in Malout?",
      paragraphs: [
        "Malout has coaching for CBSE and entrance exams and a healthy set of school-subject tutors. These help for their purpose but rarely cover IB or IGCSE paper styles, so a student in a batch may be learning content well but practising the wrong type of question.",
        "A neighbourhood tutor who is excellent at school mathematics may never have seen an IB Paper 2 or an IGCSE Paper 4. Self-study with past papers works for an organised student but is weak without marked feedback, and errors become entrenched quickly.",
        "Online private lessons provide a specialist and feedback in one package. The limits are connection quality, which can vary in town outskirts and farm areas, and the lack of a tutor physically beside the child. We test the connection in advance and suggest a hotspot backup.",
        "Tutors do not visit Malout homes; in-person home tuition applies only to Gurugram and parts of Delhi NCR. The comparison below is candid about the trade-offs.",
      ],
      table: {
        caption: "Support choices for an IB or IGCSE student in Malout",
        columns: ["Choice", "IB or IGCSE specialism", "Feedback quality", "Weak point"],
        rows: [
          ["Online one-to-one lessons", "Matched to board, level and code", "Live correction plus written notes", "Needs a dependable connection"],
          ["Coaching class", "Built for CBSE and entrances", "Shared across a batch", "Fixed timetable, travel"],
          ["Neighbourhood tutor", "Seldom any for IB or IGCSE", "Personal but on another syllabus", "Few specialists available"],
          ["Self-study", "Depends on the student's own sources", "Only if someone marks it", "Mistakes harden into habits"],
        ],
      },
    },
    {
      heading: "How do the furnace heat, cotton season and fog shape a Malout study year?",
      paragraphs: [
        "Malout has one of the harshest summers in Punjab, with highs recorded in the region of 48 to 50 degrees, and winter nights falling to 1 or 2 degrees. Most of the rain, around 70 percent, falls between June and September, leaving the rest of the year dry. That extreme range is the biggest scheduling factor.",
        "In summer the only workable study hours are early morning or after dusk, and power supply can be uneven in the hottest spells. A charged laptop and a phone hotspot are simple protections. Our lessons are therefore almost always evening sessions, with the paper-marking feedback delivered by the next morning.",
        "Autumn brings the cotton harvest and the mandi at its busiest, when family businesses are stretched and children may help out. Dense fog arrives in December and January and makes road travel unsafe, which is another reason online lessons suit the town, since they carry on regardless of visibility.",
        "We try to place revision in the months that are kind to study, with the heaviest block in January and March, and lighter weeks around Diwali, Lohri and the peak of the cotton season.",
      ],
      table: {
        caption: "The Malout study calendar",
        columns: ["Months", "What the student faces", "What the town is doing"],
        rows: [
          ["December to January", "Mocks, IA finishing, Cambridge India entries", "Dense fog, Lohri, cold nights"],
          ["February to April", "Cambridge India series, final revision", "Wheat season, warming days"],
          ["May to June", "Main IB and IGCSE exams", "Furnace heat, evening study only"],
          ["July to September", "Results out, new courses begin, Extended Essay topics chosen", "Monsoon rain, green fields"],
          ["October to November", "Autumn series, mocks, Diwali break", "Cotton picking, busy mandi"],
        ],
      },
    },
    {
      heading: "Which universities can a Malout student aim for after the IB or IGCSE?",
      paragraphs: [
        "IB Diploma holders can apply to Indian universities with Association of Indian Universities equivalence, and many institutions accept IB scores through CUET-UG or their own admission rules. Nearby options include the Central University of Punjab at Bathinda, AIIMS Bathinda for medicine through the national route, and universities in Chandigarh, Delhi and Patiala.",
        "Engineering and medicine have specific rules. JEE and NEET publish eligibility conditions for international-board students, and these change from year to year, so a family should read the current notice and not rely on a relative's memory. In general, IB students need Physics, Chemistry and Mathematics or Biology at a suitable level.",
        "Commerce is a natural path for many trading families. A strong IB Economics or Business result opens Indian business schools and overseas management courses, and the family business often provides a real-world case for project work.",
        "Abroad, Canada, Australia and the UK are well-trodden paths from Punjab, and all three understand IB points and IGCSE-plus-A-Level results. Tutoring supports the subject grades these rely on, while applications are best handled with the school counsellor.",
      ],
      bullets: [
        "AIU equivalence supports Indian admission for IB Diploma holders",
        "Engineering, medical and central-university entrances rules must be read from current notices",
        "Strong Economics or Business results suit trading families' plans",
        "Canada, Australia and the UK understand IB and IGCSE results",
      ],
    },
    {
      heading: "What should a Malout student know before choosing IB Maths and sciences?",
      paragraphs: [
        "Mathematics sets the tone. Analysis and Approaches develops calculus and proof for engineering, pure science and economics, while Applications and Interpretation emphasises statistics and modelling for business and social science. A tutor reviews early work and the student's target before the school's deadline to change.",
        "Higher Level is a serious commitment in time. Three HL subjects plus the Extended Essay and TOK form a heavy weekly load, and we tell families honestly if the plan looks unrealistic. A balanced choice often serves a student better than an ambitious one that cannot be sustained.",
        "In the sciences, each topic moves through an explanation, a worked example and a timed question, with the data booklet open from week one. Experiments are done in the school lab; the tutor then looks over the method, the recorded data, the graphs and the conclusion. The report itself is never written for the student.",
        "Where school laboratory time is limited, simulations and open datasets can keep analysis skills moving, though they do not replace hands-on experiments.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which should a Malout student choose?",
      paragraphs: [
        "Core papers limit the top grade to C, while Extended papers reach A star. A student planning to carry a subject into A Level or the IB should be in Extended, while one using it as background may sit Core if the school permits. Decide early, not in the last term.",
        "A typical subject set includes English, Mathematics, two or three sciences or Computer Science, Economics or Business Studies and a language. For a trading family's child, Economics and Business Studies are popular choices and pair well with Mathematics.",
        "Because the two boards are laid out differently, a student should stick to one and give the tutor the exact code, for example 0580 or 4MA1.",
        "Entry dates also matter: alongside the usual May-June and October-November sittings, Cambridge runs a separate February-March series in India, and the plan must start from whichever one the school has booked.",
      ],
    },
  ],

  tutorsIntro:
    "Below are the kinds of IB and IGCSE specialists who teach Malout students. Give us a subject and level; one tutor is suggested and the opening lesson costs nothing.",
  process: [
    { title: "Send the basics", description: "The class, board, subject code and the date of the next test are all we need." },
    { title: "Get one tutor suggested", description: "One tutor is proposed for that subject and board, with a short profile attached." },
    { title: "Take the free lesson", description: "Your child works on real questions live; a parent may observe." },
    { title: "Read the note and the rate", description: "You receive a written summary and a written rate, without obligation." },
    { title: "Continue or change", description: "Start weekly lessons, adjust the plan or request a different tutor." },
  ],
  whyPoints: [
    { title: "Matched to the paper", description: "The tutor has taught your child's level or syllabus code, so practice papers look like the real ones." },
    { title: "Hours that suit a business household", description: "Late-evening slots fit around shop, workshop and school timetables." },
    { title: "Clear on online delivery", description: "Everything is on screen, and we never suggest a tutor will arrive at a Malout address." },
    { title: "Short written notes", description: "A summary follows each lesson, so parents know what was covered." },
    { title: "Teaching, not ghostwriting", description: "Tutors build skill but never write assessed work." },
    { title: "Painless tutor changes", description: "If the fit is poor, we arrange another tutor quickly." },
  ],

  faqs: [
    {
      question: "Can I find an IB or IGCSE tutor in Malout?",
      answer:
        "No tutor of ours teaches face to face in Malout, and hardly any specialists in this part of Punjab handle these boards. Our teachers are spread across India and work through live video, which lets a Malout child learn from someone with direct experience of the exact subject and level. Try the free opening lesson to judge the format.",
    },
    {
      question: "Do you offer IB or IGCSE home tuition in Malout?",
      answer:
        "What we provide is online home tuition: private lessons your child attends from the house, on a laptop. Nobody from our team visits a Malout home; house visits exist just in Gurugram and some parts of Delhi NCR. The teaching is still personal, with a shared screen and notes in writing.",
    },
    {
      question: "Which schools near Malout teach IB or IGCSE?",
      answer:
        "We cannot confirm any in Malout. In Ludhiana, Britannica International School and Harvest International School are Cambridge options, in Mohali Oakridge International School offers the IB and in Chandigarh The British School is another option. Jalandhar's Cambridge International School is listed as IB-affiliated. Check each school's current status directly.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Malout?",
      answer:
        "Fixed prices are not published, since the charge turns on who teaches, at what level, for how long and how often. You will see the figure on paper before any booking, and the trial costs nothing. Skipping the drive to another city for a specialist also saves real money.",
    },
    {
      question: "My child boards in Ludhiana or Mohali. Can you teach during holidays?",
      answer:
        "Yes. Many students book intensive blocks during Diwali or the summer break at home, and some add weekend lessons during term if the boarding school allows devices. Share the school calendar early and we plan blocks before internal tests and mocks.",
    },
    {
      question: "We have returned from abroad. Can a tutor bridge the syllabus?",
      answer:
        "Yes, bridging is a typical request. A tutor can keep the IGCSE or MYP course going if your child is still registered, or help translate the content into Punjab Board or CBSE style if the family is changing system. A diagnostic first lesson shows the gaps.",
    },
    {
      question: "Are tutors allowed to write the IA or Extended Essay?",
      answer:
        "No. A tutor can explain the marking criteria, help narrow a question and comment on structure, yet the IB insists that submitted work is the candidate's own and so nothing is drafted for the student. Your school can tell you how much outside help it permits.",
    },
    {
      question: "How do we know whether Cambridge or Edexcel applies?",
      answer:
        "Look at the exam entry or timetable your school issued; the syllabus code names the board. For Mathematics, 0580 is Cambridge and 4MA1 is Edexcel. Once we have the code, we look for a tutor who has handled that very specification.",
    },
    {
      question: "When should we begin preparing for May exams?",
      answer:
        "Begin real revision around five months ahead, bring in timed papers at the three-month mark and keep the final fortnight for correcting old mistakes. January to March is Malout's kindest stretch for heavy work, before the May furnace and after the worst of December's fog.",
    },
    {
      question: "Does online teaching work for IB Maths?",
      answer:
        "Yes, and often better than on paper. Both people write on the same screen, so a wrong step is caught the moment it appears. Make sure your child owns an exam-approved calculator and has agreed the AA or AI choice with the school.",
    },
    {
      question: "How are science practicals handled?",
      answer:
        "Hands-on work is done in the school lab. What the tutor checks afterwards is the design, the data table, the graphs and the conclusion, which is where most marks slip away. If lab hours are short, simulations give extra analysis practice; the write-up stays the student's.",
    },
    {
      question: "What if the power or internet fails in the heat or fog?",
      answer:
        "Have a charged laptop and a phone hotspot on hand. If video fails, the lesson can carry on by voice with a shared document, and a session lost to a long cut is rebooked. Backups are discussed during the trial.",
    },
    {
      question: "Can my child continue Punjabi alongside an international course?",
      answer:
        "Often yes at the IB, where Punjabi can be offered as a language B at some schools, while for IGCSE Hindi is the usual Indian language on the Cambridge list. Your school will know which language courses it runs, and the tutor then prepares your child for reading, writing and speaking in that exact format.",
    },
    {
      question: "Can parents watch the lessons?",
      answer:
        "Certainly, for the trial and later too when your child is happy with it. Plenty of parents settle for the written note instead. Sitting in costs nothing and shows you how these papers phrase their questions.",
    },
    {
      question: "What if we do not like the tutor?",
      answer:
        "Just say so and a different tutor is arranged, no reasons needed. If you agree, the first tutor's notes are handed on, so nothing is taught twice. Swapping after a lesson or two happens often.",
    },
    {
      question: "How do I begin from Malout?",
      answer:
        "Write to +91 7439 368 115 on WhatsApp or to support@ibgram.com, giving class, board, subject code and any deadline. A single tutor is suggested, an evening trial is fixed at no charge, and the rate follows in writing for you to weigh at leisure.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our all-India page, linking every city we serve." },
    { label: "IB and IGCSE tutors in Muktsar", href: "/muktsar/", description: "The district seat nearby, written up with its own school and calendar notes." },
    { label: "IB and IGCSE tutors in Bathinda", href: "/bathinda/", description: "The bigger city along the same railway, home to AIIMS." },
    { label: "IB and IGCSE tutors in Fazilka", href: "/fazilka/", description: "A border town further down the same line." },
    { label: "IB and IGCSE tutors in Sirsa", href: "/sirsa/", description: "The Haryana town across the state line that local families often weigh up." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Every IB subject we teach, with level notes." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subject lists and how lessons run." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "The Diploma explained: subjects, core and assessment." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "How MYP criteria and the Personal Project work." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to choose between AA and AI, at HL or SL." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The one place where tutors come to the house, in Delhi NCR." },
    { label: "Contact us", href: "/contact-us/", description: "Message or call to ask first or to book the trial." },
  ],

  closingHeading: "Book a free lesson from Malout",
  closingBody:
    "Share the subject, the level and the date of the next exam. You will get one tutor, a trial lesson at no charge timed around your household, and afterwards a note and a rate in writing.",
};
