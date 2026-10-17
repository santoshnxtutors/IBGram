import type { CitySeoPage } from "../types";

/**
 * /nagla/ - IB and IGCSE tutoring page for Nagla, a census town in Kichha tehsil, Udham Singh Nagar district,
 * Uttarakhand. Public data on the town itself is thin (no standalone Wikipedia article), so the page is anchored
 * in the tehsil and district and says so. No local IB/IGCSE school is confirmed.
 */
export const nagla: CitySeoPage = {
  slug: "nagla",
  countryName: "Nagla",
  countryNameLong: "Nagla, Udham Singh Nagar district, Uttarakhand",
  demonym: "Nagla",
  state: "Uttarakhand",
  stateCode: "IN-UT",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttarakhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are placed around Tarai fog, the rice harvest, the Diwali and Guru Nanak Jayanti weeks and the summer power cuts",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.01, longitude: 79.51 },
  wikipedia: "https://en.wikipedia.org/wiki/Udham_Singh_Nagar_district",
  alternateNames: ["Nagla Udham Singh Nagar", "Nagla Kichha", "Nagla Uttarakhand", "Nagla Tarai"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nagla, Uttarakhand | Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Nagla, Udham Singh Nagar: live one-to-one lessons at home in the Tarai, planned around fog and harvest, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nagla",
  heroEyebrow: "NAGLA, UDHAM SINGH NAGAR, UTTARAKHAND: IB & IGCSE AT HOME",
  heroSubtitle:
    "Looking for IB or IGCSE help in the Tarai? Your child can learn from a dedicated Cambridge, Edexcel or IB tutor through live video at home in Nagla, whichever city the school is in. Visits to the house are not offered here: they exist only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Nagla",
  imageAltText: "A Nagla student reading an IB Economics diagram on a laptop while a tutor talks through it live",
  secondaryKeywords: [
    "IB tutor Nagla",
    "IGCSE tutor Nagla",
    "IB home tuition Nagla",
    "IGCSE home tuition Nagla",
    "IB private tuition Nagla",
    "IB Maths tutor Nagla",
    "IGCSE Maths tutor Nagla",
    "IB Physics tutor Nagla",
    "IB Chemistry tutor Nagla",
    "IB Biology tutor Nagla",
    "IB DP tutor Nagla",
    "IB MYP tutor Nagla",
    "IB PYP tutor Nagla",
    "IGCSE online tuition Nagla",
    "IB tutor Nagla Kichha",
    "IB tutor Udham Singh Nagar",
    "online IGCSE tutor Tarai Uttarakhand",
    "IB tuition near Pantnagar Rudrapur",
  ],

  heroTrustPoints: [
    "A tutor who has taught the precise IB or IGCSE course your child sits",
    "All teaching is on screen; house calls are kept for Gurugram and parts of Delhi NCR, so nobody comes to Nagla",
    "A free trial lesson, with no rate discussed until it is over",
    "Independent of the IB, Cambridge, Pearson and every school mentioned",
  ],
  heroStats: [
    { value: "Kichha tehsil", label: "Where our Nagla students learn" },
    { value: "PYP to DP", label: "The IB at every age" },
    { value: "Tarai-aware", label: "Slots planned for fog and harvest" },
    { value: "Free trial", label: "See a lesson first" },
  ],

  intro: {
    heading: "IB and IGCSE learning from a Nagla home",
    paragraphs: [
      "Nagla is a census town in Kichha tehsil of Udham Singh Nagar district, in the flat Tarai belt at the foot of the Kumaon hills. The census counted about 22,000 people there, though published figures differ, and the town has no standalone encyclopaedia entry, so we describe it through the district it belongs to: Rudrapur as headquarters, nine tehsils from Khatima to Kashipur, a Tharu and Bhoksa heritage in the east and a large community of Sikh farming families from the post-Partition settlements.",
      "Pantnagar, home to India's first agricultural university and to the SIDCUL industrial estate where companies such as Tata Motors and Britannia operate, lies not far west, and Pantnagar Airport links the region to Delhi. That mix of farmland, factory work and a university gives the district an unusually practical outlook on education. Families here ask about IB and IGCSE tutors in Nagla for a reason: a child heading to boarding in Dehradun or Delhi, an online international school, or a parent whose job may move them.",
      "We have not confirmed an IB or IGCSE school in Nagla, Kichha or Rudrapur, and we name none. Instead, IB Gram offers online home tuition: a private specialist who teaches your child live over video. No tutor comes to Nagla. In-person lessons are limited to Gurugram and parts of Delhi NCR.",
      "Nothing about IB Gram is linked to the IB, to Cambridge, to Pearson or to any school. Our teachers instruct and mark. Whatever the student hands in for credit, be it the IA, the Extended Essay, a TOK essay or coursework, is entirely the student's work.",
    ],
    bullets: [
      "IB from PYP to DP and CP, and Cambridge and Edexcel IGCSE",
      "Private video lessons delivered at home",
      "A short written note after each session",
      "A free trial before any rate",
    ],
  },

  programmesIntro:
    "For most Nagla families the IB or IGCSE classroom is a long way off, so knowing what each stage asks in advance matters. These notes describe each programme and the gaps a student from an Uttarakhand board or CBSE background often shows.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery-Class 5, ages 3-12",
      description:
        "Children work through long inquiries and show their thinking in projects, ending with a self-directed Exhibition. At home the help is conversational: shared reading, number talk and being asked why.",
      countryNote:
        "A child hearing Hindi, Punjabi or Kumaoni at home benefits from unhurried, regular English conversation more than from drills.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Four criteria apply in each subject, topics link to global contexts and a Personal Project crowns the programme. Students must show how they reached an answer, not only the answer.",
      countryNote:
        "Pupils coming from Uttarakhand Board classrooms usually recall facts well and need practice defending a view with evidence.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year course of six subjects (three at Higher Level), taken with Theory of Knowledge, an Extended Essay and CAS service. May or November papers are combined with coursework done along the way.",
      countryNote:
        "Most Diploma questions we hear from the Tarai are about Maths, the physical sciences and English A, raised by a student who moved to a boarding or city school for Class 11.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma subjects sit beside a career-related course and a reflective project. Few Indian schools run it.",
      countryNote:
        "CP is almost unheard of in this district; where it arises we support the Diploma subjects within the student's combination.",
    },
  ],

  subjectsIntro:
    "An Uttarakhand Board paper usually rewards the student who can reproduce a whole chapter. IB and IGCSE examiners reward the one who answers exactly what the command word asks. A Nagla student's tutor starts by finding which command words go wrong and shapes each subject around them.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, vectors and proof. Students from the Board system are often quick at routine algebra and slower at writing a justified argument." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology, for students aiming at commerce, economics or design." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and thermal physics; the data booklet and unit accuracy decide marks." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Early topics such as moles and bonding will ring a bell; equilibrium, energy changes and organic mechanisms ask for reasoned explanation." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology, with an agricultural-university district offering vivid crop and soil examples." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams linked to news; Tarai sugar-cane and rice pricing, and the SIDCUL factory belt, give local commentary topics." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers and a research project; a farm-input shop, a rice mill or a SIDCUL supplier can serve as the organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, essays and an oral; Hindi-first writers gain from practice organising English paragraphs." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and a documented internal solution." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Tarai wetlands, groundwater, forest edges and crop systems provide close-at-hand investigation topics." },
    { name: "IB Geography", levels: "HL / SL", description: "Rivers, population and resources, with fieldwork in a district that spans plain, foothills and reservoir." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and long essays; post-Partition settlement is a rich regional case study." },
    { name: "IB Hindi B and Punjabi B", levels: "HL / SL", description: "Language-acquisition courses that favour a Hindi- or Punjabi-speaking household, with speaking fluency weighing heavily." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talk-led preparation for the exhibition and essay questions; every sentence submitted is the student's." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel run IGCSE to different calendars. Cambridge papers fall in February-March, May-June and October-November; Edexcel's in January, May-June and November. A student entering privately from Nagla needs a recognised centre, which may be in Delhi or Dehradun, so it pays to ask early.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended leads to the top grades; the commonest lost marks are unwritten steps." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and identities a year early, which smooths the step to IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson phrases questions differently, so its papers are used for practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging formulae, reading graphs and the paper that replaces the practical." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole sums, reaction rates, organic basics and ion tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, circulation in plants and humans, and six-mark answers that need a logical order." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Markets and policy, tested through data and short articles." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, logic and Python." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Using theory on a named company, plus short profit and cash calculations." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for students with Hindi or Punjabi at home." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A compact paper where technique pays quickly." },
  ],

  regionsTitle: "Nagla and the Tarai towns around it",
  regionsIntro:
    "Teaching is done on a screen, so these places describe daily life rather than lessons: where a family does its shopping and appointments, which road a boarding student takes, and when fog or flooding changes the week.",
  tutorsIntro:
    "Each tutor logs in from elsewhere in India, so a Nagla child is paired with a person who knows the precise course. We suggest one name, then book a trial class, and the question of rates comes last.",
  regions: [
    { name: "Nagla town", note: "A census town of about 22,000 in Kichha tehsil, in the Tarai plain of Udham Singh Nagar." },
    { name: "Kichha", note: "The tehsil headquarters and a market and sugar-cane town, the first place families go for administration and shopping." },
    { name: "Pantnagar", note: "Home of G.B. Pant University of Agriculture and Technology, the SIDCUL estate and the airport." },
    { name: "Rudrapur", note: "The district headquarters, with the largest market, hospitals and coaching centres in the district." },
    { name: "Haldwani", note: "The gateway to the Kumaon hills, a larger educational centre for the region." },
    { name: "Sitarganj and Khatima", note: "Eastern Tarai towns where Tharu and Bhoksa communities and Sikh farmers live side by side." },
    { name: "Nanakmatta", note: "A tehsil town known for its gurdwara and the Nanak Sagar reservoir; pilgrimage crowds follow the Sikh calendar." },
    { name: "Bazpur and Kashipur", note: "Western towns on the road towards Moradabad and Delhi, with mills and industrial units." },
    { name: "Bareilly direction", note: "Across the border in Uttar Pradesh, a major city that many Tarai families use for trade and medical care." },
  ],

  schoolDisclaimer:
    "Our enquiries found no IB or IGCSE programme at a school in Nagla, Kichha or Rudrapur, so none is presented as local. Two Delhi NCR names appear later only because boarding is something Uttarakhand parents sometimes explore; each detail is for the school to confirm. IB Gram works independently of those schools and of the IB, Cambridge and Pearson.",
  schoolClusters: [
    {
      city: "Nagla itself",
      note: "Few options: the town's schools teach under the Uttarakhand Board or CBSE, and we found none with IB or IGCSE.",
      schools: [],
    },
    {
      city: "Nearby: Rudrapur, Haldwani and Dehradun",
      note: "The larger cities in the state. Our checks did not confirm an IB or IGCSE school in any of them, so none is listed.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "About 250 km by road from the Tarai, reachable by train or by air from Pantnagar, and a boarding choice for some families.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "In Nagla the lesson is one student, one tutor and a video link; there is no travelling teacher. What differs among families is the timetable they build around it.",
  modes: [
    {
      title: "Weekly evening lesson",
      description:
        "Think of a standing appointment: one tutor, one evening, homework before the next call. This pattern fits a child already following an international syllabus who wants a subject lifted.",
      bullets: [
        "One consistent tutor",
        "Course and level agreed first",
        "Past papers marked weekly",
        "Placed after school and before the power dips",
      ],
    },
    {
      title: "Run-up before a change of school",
      description:
        "A concentrated spell ahead of the move from an Uttarakhand Board or CBSE classroom into IB or IGCSE, working on formal written English, command words and the weakest subject.",
      bullets: [
        "English for study",
        "Command-verb drills",
        "Repair in the weakest subject",
        "A closing summary for the family",
      ],
    },
    {
      title: "Pre-exam push",
      description:
        "Extra lessons squeezed in as mock exams and the main May or November sittings draw near, built around timed papers and the examiners' mark schemes.",
      bullets: [
        "Two to four sessions a week",
        "Papers marked to official criteria",
        "Specific feedback notes",
        "Booked before Diwali",
      ],
    },
  ],

  sections: [
    {
      heading: "What a Nagla family has to work with locally",
      paragraphs: [
        "Udham Singh Nagar is one of Uttarakhand's most populated districts, with about 1.65 million people at the 2011 census, and it is a district of settlers and industry as much as of old villages. The Tharu and Bhoksa communities of the eastern Tarai, Sikh farmers who settled after 1947, Kumaoni migrants from the hills and workers drawn by SIDCUL give schools in the district an unusually mixed intake.",
        "Education locally follows the Uttarakhand Board and CBSE, supported by Pantnagar's university and by colleges in Rudrapur, Kichha and Haldwani. For further study many students go to Pantnagar, Bareilly, Dehradun or Delhi. Public information on Nagla itself is thin, so we do not pretend to know the town's school list, and we say plainly that we could not confirm any school offering the IB or an IGCSE in Nagla, Kichha or Rudrapur.",
        "Parents who ask about IB and IGCSE in this district tend to fall into three groups. Some are SIDCUL managers and engineers who expect to relocate. Some are farming and trading families with relatives in Canada, the UK or Australia. Some are teachers and officials. All want the child ready for an international classroom without necessarily moving first.",
        "Our solution is online home tuition, matched to the course and level, with no promise of a visit. Tutors do not travel to Nagla.",
      ],
      bullets: [
        "No confirmed IB or IGCSE school in Nagla, Kichha or Rudrapur",
        "Delhi NCR holds the nearest options we know of for boarding",
        "Families: factory-estate staff, farming and trading households, teachers and officials",
        "Support is private tuition by video",
      ],
    },
    {
      heading: "How are IB and IGCSE different from the Uttarakhand Board and CBSE?",
      paragraphs: [
        "Start with the marking. Board and CBSE examiners tick off content that matches the textbook. IB and IGCSE examiners look for what the student does with it: interpreting a table, setting two views against each other, designing an experiment, justifying a conclusion.",
        "Then there is timing. International courses build in internal assessments, coursework or practical exams, which stretches the effort over two years instead of piling it into the weeks before March.",
        "Finally, language. A Nagla child may speak Hindi, Punjabi or Kumaoni at home and English at school; long written English is the least practised of these, so tutors teach how a good extended answer is built, subject by subject.",
        "Harder? Not necessarily. Plenty of students find published marking criteria easier to aim at than an unwritten Board expectation.",
      ],
      table: {
        caption: "Uttarakhand Board, CBSE and IB or IGCSE compared",
        columns: ["Feature", "Uttarakhand Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Marks chiefly for", "Accurate textbook content", "Content plus applied items", "Application and evaluation"],
          ["Internal work", "Small", "Moderate", "Large across two years"],
          ["Language of exams", "Hindi or English", "English or Hindi", "English; language courses excepted"],
          ["Nearest availability", "Every local school", "Several schools in the district", "Delhi NCR, boarding or online"],
          ["Recognition abroad", "Needs equivalence checks", "Needs equivalence checks", "Read directly by many universities"],
        ],
      },
    },
    {
      heading: "What do IB or IGCSE lessons cost a Nagla family?",
      paragraphs: [
        "We keep no public price list. The charge comes from five inputs, which are programme, level, subject, tutor and weekly frequency, and it reaches you in writing after the free class.",
        "The biggest swing factor is level. Preparing a child for Higher Level Diploma Physics takes more of a tutor than listening to a Primary Years child read. After level come the tutor's seniority, your chosen number of lessons and the time of year, since the run-up to May and November is busy.",
        "One saving is invisible on paper: nobody in Nagla spends on fuel or bus fares to reach a class in Rudrapur or Haldwani, and no evening is lost to the highway. The fee pays for teaching and nothing else.",
        "Before saying yes, find out how a tutor can be swapped and what reports you will receive. Those answers matter as much as the rate per hour.",
      ],
    },
    {
      heading: "Online tuition, Rudrapur coaching, local tutors or self-study from Nagla?",
      paragraphs: [
        "A Nagla household can choose among four approaches. Coaching institutes in Rudrapur, Haldwani and Bareilly teem with students, but almost all of them train for Board exams, JEE or NEET. A neighbourhood tutor may know your child well and the international syllabus not at all. Disciplined students can work through past papers by themselves. The last approach is a video class with someone who has taught the course.",
        "Be realistic about signal. Town broadband is usually adequate; farm villages are less so, and monsoon storms interrupt electricity. Keep a hotspot and a charged laptop within reach, and remember that a tutor can wrap up by audio if video drops.",
        "One thing home study cannot provide is a classmate sitting the same paper. After the first weeks we can suggest a small online circle or a study partner.",
        "The table puts the four options side by side.",
      ],
      table: {
        caption: "Study routes for a Nagla IB or IGCSE student",
        columns: ["Route", "Course knowledge", "Travel", "Individual attention"],
        rows: [
          ["Online one-to-one tuition", "Specialist in the exact course", "None", "Complete"],
          ["Coaching in Rudrapur or Haldwani", "Mostly Board, JEE and NEET", "Regular road trips", "Shared batch"],
          ["Local private tutor", "Strong on Board and CBSE", "Little", "Good, different syllabus"],
          ["Self-study with past papers", "As good as the materials", "None", "None without feedback"],
        ],
      },
    },
    {
      heading: "Tarai fog, harvest, Diwali and exams: the Nagla year",
      paragraphs: [
        "Winter fog is the Tarai's signature problem. From late December to early February dense fog closes roads and delays trains and flights at Pantnagar for days. Video lessons ride it out better than any commute, though we avoid very early slots in those weeks.",
        "Farming sets the household clock in the Tarai. Paddy comes in during October and November, wheat in April, and the cane-crushing season occupies the cold months. Farming parents have little spare time then, so we move lessons later and send written notes in place of calls.",
        "Festivals add pauses. Dussehra, Diwali, Holi, Baisakhi and Guru Nanak Jayanti in November are family days, with large gatherings at Nanakmatta, and Kumaoni families keep their own festivals such as Harela. Summer afternoons are very hot, so study moves to early evening.",
        "Exam sittings run through all this: the IB and IGCSE both have windows around May and November, and November sits close to Diwali and Guru Nanak Jayanti. Heavy revision is best finished by early October.",
      ],
      table: {
        caption: "Nagla year and exam calendar",
        columns: ["Period", "Local rhythm", "Effect on lessons"],
        rows: [
          ["December-February", "Dense fog, cane crushing, mid-year mocks", "No early slots; steady evening lessons"],
          ["March-April", "Wheat harvest, Baisakhi; school year-end", "Late evenings; mocks avoid harvest peak"],
          ["May-June", "Peak heat; May sittings", "Early evening; power backup"],
          ["July-September", "Monsoon and flood risk on the plain", "Lighter weeks; backup connection"],
          ["October-November", "Rice harvest, Diwali, Guru Nanak Jayanti; November sittings", "Short sessions; revision finished early"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Nagla go next?",
      paragraphs: [
        "A finished IB Diploma is accepted at Class 12 level by the Association of Indian Universities, and CUET-UG is the usual gateway to central universities. IGCSE ends at Grade 10, which is why its students normally proceed to AS and A Level or to the Diploma.",
        "Within the state the natural destinations include G.B. Pant University at Pantnagar, Kumaun University in Nainital, IIT Roorkee and Doon University, with Delhi University and JNU further afield. Each treats foreign boards in its own manner, so check the current admission notice before settling on HL subjects.",
        "Would-be engineers and doctors meet separate JEE Main and NEET provisions for IB and IGCSE candidates. The sensible time to study them is Class 10.",
        "Overseas admissions teams in Canada, Britain, Australia and America handle IB and IGCSE transcripts routinely, and the Punjabi diaspora means many Tarai households already have family contacts in those countries. Tutors help with subject results; applications stay with the family.",
      ],
    },
    {
      heading: "IB Maths, the sciences and Tarai project ideas",
      paragraphs: [
        "IB Maths comes as two separate courses, and picking one is among the earliest big choices. Analysis and Approaches leans on algebra, calculus and proof; it suits students bound for engineering and the physical sciences. Applications and Interpretation leans on data, models and technology; it suits budding economists, designers and managers. A first trial class tends to make the right answer obvious.",
        "The Maths exploration, an independent investigation worth a fifth of the grade, works best when tied to the student's surroundings. Paddy yield set against rainfall, the capacity curve of the Nanak Sagar reservoir or the rota of a factory shift in the industrial estate could each carry real mathematics.",
        "For Board-trained science students, content is seldom the weak point. Marks slip because answers wander. The IB likes a three-part reply: state the principle, apply it to the numbers given, conclude.",
        "Soil, wetland and crop-disease studies suit this district for Biology and Environmental Systems projects, though the whole investigation has to be the student's. A tutor can ask questions and check against the criteria, while the data collection and the write-up stay with the student.",
      ],
    },
    {
      heading: "Choosing IGCSE tiers, boards and subjects from Nagla",
      paragraphs: [
        "A typical IGCSE candidate takes between five and eight subjects over Grades 9 and 10, centred on English, Maths and a science.",
        "Because the Core tier tops out below the best grades, a child who may later want IB Higher Level or A Level sciences is better placed in Extended.",
        "Cambridge and Edexcel build their papers and timetables differently, so all revision follows the board the student is actually entered with.",
        "A private candidate has to secure a centre seat well in advance, and the closest may be in Delhi or Dehradun.",
      ],
      bullets: [
        "Choose Extended when IB HL or A Level sciences are a possibility",
        "Find out the school's board first",
        "Additional Mathematics gives solid groundwork for IB Maths AA",
        "Private candidates should book a centre early",
      ],
    },
  ],

  process: [
    { title: "Message us the basics", description: "Which year your child is in, which board or programme, which subjects worry you and when the next paper is." },
    { title: "Get a recommendation", description: "One teacher is put forward, with a paragraph on what they have taught and for how long." },
    { title: "Try before you buy", description: "The recommended teacher runs a free class on live video. Sit beside your child if you wish." },
    { title: "See the plan in writing", description: "Weekly time, hourly rate and the date of the first check-in come to you as a short document." },
    { title: "Review, then carry on or switch", description: "After every class a few lines summarise progress. If the match is off, say so and we find another." },
  ],

  whyPoints: [
    { title: "Course-level matching", description: "Someone who has coached IB Biology SL is not the same as a general science tutor, and we match for the former." },
    { title: "Direct about geography", description: "Everything is online. The nearest IB schools we know of are far from Kichha tehsil, and we say so up front." },
    { title: "Tarai-friendly timetable", description: "Fog weeks, harvest, the Gurpurab and Diwali days are blocked out first." },
    { title: "Mentoring, not ghost-writing", description: "IAs, essays and coursework are always the student's own." },
    { title: "Plain-English reports", description: "Parents read what was covered and what to practise, without jargon." },
    { title: "Painless replacement", description: "Changing tutor is a request, not a negotiation." },
  ],

  faqs: [
    { question: "Is it practical to learn IB subjects from a specialist when we live in Nagla?", answer: "Very. The lesson is a live video call, so the specialist's location is irrelevant; what counts is their experience with your child's course. You provide a laptop, a quiet spot and decent internet. Nobody travels to Nagla, since personal home visits are offered only in Gurugram and parts of Delhi NCR." },
    { question: "Which schools in this part of Udham Singh Nagar teach IB or IGCSE?", answer: "We found none that we could confirm in Nagla, Kichha or Rudrapur. The local picture is the Uttarakhand Board and CBSE. If you are considering an international school elsewhere, ask it directly what it offers this year and how admission works." },
    { question: "Can I book a teacher who comes to my house?", answer: "In Nagla, no. Visits to the house are restricted to Gurugram and parts of Delhi NCR. What we arrange is private tuition at home through a screen, with the same one-to-one focus but no journey to Rudrapur or Haldwani." },
    { question: "What is the price of a lesson?", answer: "It depends on the level, subject, programme, the tutor and your weekly frequency. No list price is published. After the free class you will receive a short written offer showing the hourly charge, the weekly slot and the date of the first review." },
    { question: "My daughter will start at a boarding school in Delhi in the new session. Is preparation worthwhile?", answer: "It is. Over a few weeks she can sharpen her formal English, learn what each command word expects and strengthen the subject she dreads, and we can rehearse any entrance test the school sets. Give us the school and class and we plan backwards from the first day of term." },
    { question: "What subjects does the IB list cover with you?", answer: "Our IB list runs from the two Maths courses through Physics, Chemistry and Biology to Economics, Business Management, English A, Computer Science, Environmental Systems and Societies, Geography, History, Hindi and Punjabi, along with Theory of Knowledge coaching. Anything else, just ask and we will answer honestly." },
    { question: "Do you work with both IGCSE boards?", answer: "We teach for each. If your child is entered with Cambridge, lessons run on Cambridge papers; if with Edexcel, on Edexcel papers, because wording and mark allocation differ. The range covers Maths, Additional Maths, the sciences, Economics, Business Studies, Computer Science and English." },
    { question: "How does the free class work?", answer: "Your child meets the proposed tutor on video and works through a real topic from the current term. You can listen in. Nothing about fees is raised until afterwards, and a poor match simply leads to another suggestion." },
    { question: "Will you do my son's IA or Extended Essay for him?", answer: "Never. The tutor helps him understand the marking criteria, asks questions that sharpen his plan and comments on drafts he has written. All ideas, data and wording stay his, in line with IB and Cambridge integrity rules." },
    { question: "Is fog in winter a problem for online classes?", answer: "Not in itself: fog stalls trains, buses and the Pantnagar airport, not a video call. We would rather avoid dawn slots in December and January because of power dips, so lessons sit in the evening." },
    { question: "How are harvest, Diwali and Guru Nanak Jayanti handled?", answer: "They are marked at the outset. Rice and wheat harvests and the big festival days get lighter timetables or pauses, and November-sitting revision is deliberately placed in September and early October." },
    { question: "Will an Uttarakhand Board student cope in an IB class?", answer: "Most do, with a little preparation. What changes is the writing: longer English answers, command words and a different way of showing working. A short bridge before the switch handles most of it." },
    { question: "Are lessons available below Class 9?", answer: "We do. A PYP child is helped through reading aloud, number games and finding words for ideas, while MYP work centres on the assessment criteria and the Personal Project. Early starts soften the leap into Class 11." },
    { question: "What opens up after completing IB or IGCSE?", answer: "Indian doors open through equivalence: the Association of Indian Universities recognises the Diploma at Class 12 level, and central universities mostly rely on CUET-UG. An IGCSE normally becomes AS and A Level or the Diploma first. JEE and NEET keep separate rules. Abroad, universities in Canada, Britain, Australia and the US read either qualification." },
    { question: "How do you pick the tutors?", answer: "We review qualifications and recent classroom or online teaching in the exact programme, then watch a sample class. Everyone teaches from within India on Indian time. If a pairing does not click, we replace the tutor." },
    { question: "Is this service run by a school, the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring business. The Delhi NCR schools mentioned above are listed as places a family may research, not as partners." },
    { question: "What should I do right now?", answer: "Drop a line to support@ibgram.com or WhatsApp +91 7439 368 115 with the school, board, subject, level and exam sitting. A suggested tutor and trial times typically reach you within a working day." },
  ],

  internalLinks: [
    { label: "Start at the IB Gram homepage", href: "/", description: "Every programme, subject and tutor type in one place." },
    { label: "How our tuition reaches other Indian towns", href: "/india/", description: "City-by-city notes for families outside the big metros." },
    { label: "Where tutors do visit homes: Gurgaon", href: "/gurgaon/", description: "The one area with in-person lessons, for contrast with online." },
    { label: "Meet IB specialists by subject", href: "/ib-tutors/", description: "Maths, sciences, humanities and languages, sorted for browsing." },
    { label: "A plain guide to IGCSE", href: "/igcse/", description: "Which board, which tier, which subjects, and how the exam series run." },
    { label: "Diploma Programme explained", href: "/programmes/dp/", description: "How six subjects, TOK, the Extended Essay and CAS fit together." },
    { label: "Middle Years Programme explained", href: "/programmes/myp/", description: "What the four criteria and the Personal Project ask of a student." },
    { label: "Primary Years Programme explained", href: "/programmes/pyp/", description: "Inquiry units, the learner profile and the final Exhibition." },
    { label: "Choosing between the two IB Maths courses", href: "/courses/ib/mathematics/", description: "Who should take Analysis and Approaches and who Applications and Interpretation." },
    { label: "Full tutor directory", href: "/tutors/", description: "Profiles filtered by programme, subject and experience." },
    { label: "Write to the IB Gram team", href: "/contact-us/", description: "Share a brief or ask a question before booking a trial." },
    { label: "Tuition for Rudrapur students", href: "/rudrapur/", description: "The Udham Singh Nagar district headquarters, a short drive from Nagla." },
    { label: "Tuition for Kashipur students", href: "/kashipur/", description: "A Tarai town on the road to Moradabad and Delhi." },
    { label: "Tuition for Dehradun students", href: "/dehradun/", description: "The Uttarakhand capital and its boarding-school culture." },
  ],

  closingHeading: "Ask us about an IB or IGCSE teacher in Nagla",
  closingBody:
    "A short message with the school, subject and exam month is enough to start. We will come back with one suggested tutor and open trial times, and the whole thing runs online so your child stays at the home desk in Nagla.",
};
