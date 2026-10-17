import type { CitySeoPage } from "../types";

/**
 * /ramtek/ - IB and IGCSE tutoring page for Ramtek, the temple town in Nagpur district, Maharashtra.
 * No school in Ramtek could be confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools
 * is empty and clusters point honestly to Nagpur. Online-only delivery: home visits run only in
 * Gurugram and parts of Delhi NCR. Rendered with the shared CountryLanding layout.
 */
export const ramtek: CitySeoPage = {
  slug: "ramtek",
  countryName: "Ramtek",
  countryNameLong: "Ramtek, Maharashtra",
  demonym: "Ramtek",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around the Vidarbha summer heat, the Ramnavami and Kartik Purnima fair weeks and the dates your child's school sets",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.3950, longitude: 79.3270 },
  wikipedia: "https://en.wikipedia.org/wiki/Ramtek",
  alternateNames: ["Ramtek Nagpur", "Ramgiri", "Ramtek Hill"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Ramtek | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors in Ramtek, Nagpur district: PYP, MYP, DP and Cambridge or Edexcel IGCSE taught live one-to-one at home, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ramtek",
  heroEyebrow: "RAMTEK STUDENTS: PRIVATE ONLINE IB AND IGCSE CLASSES",
  heroSubtitle:
    "If you live under the Ramtek hill and want home tuition for an IB or IGCSE child, the workable answer is a private class on a laptop at your own table, taught by someone who has handled the exact paper. IB Gram tutors do not visit homes in Ramtek; that service is limited to Gurugram and parts of Delhi NCR. Nagpur's international schools are about forty-five kilometres away, and no school in Ramtek itself is confirmed for the IB or Cambridge.",
  primaryKeyword: "IB and IGCSE tutors in Ramtek",
  imageAltText: "A Ramtek student revising IB Chemistry formulae at a desk while an online tutor explains over a laptop video call",
  secondaryKeywords: [
    "IB tutor Ramtek",
    "IGCSE tutor Ramtek",
    "IB home tuition Ramtek",
    "IGCSE home tuition Ramtek",
    "IB private tuition Ramtek",
    "IB Maths tutor Ramtek",
    "IGCSE Maths tutor Ramtek",
    "IB Physics tutor Ramtek",
    "IB Chemistry tutor Ramtek",
    "IB Biology tutor Ramtek",
    "IB DP tutor Ramtek",
    "IB MYP tutor Ramtek",
    "IB PYP tutor Ramtek",
    "IGCSE online tuition Ramtek",
    "Cambridge IGCSE tutor Ramtek",
    "IB tutor Ramtek Nagpur",
    "online IB tutor Parseoni",
    "IGCSE tutor Mauda",
    "IB tutor Khindsi",
  ],

  heroTrustPoints: [
    "Every shortlist starts from your child's paper code, level and board, never from a loose IB or IGCSE label",
    "Classes run on live video; a tutor at the door exists only in Gurugram and parts of Delhi NCR",
    "A whole trial lesson is free and carries no obligation",
    "IB Gram stands apart from every school, exam board and university named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB range" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "No time difference" },
    { value: "Free trial", label: "Judge before paying" },
  ],

  intro: {
    heading: "International qualifications in a hilltop pilgrimage town",
    paragraphs: [
      "Ramtek is known first for its hill: a fortified temple complex to Rama, Lakshmana and Hanuman that Raghuji Bhonsle's forces strengthened in the eighteenth century, and a memorial to Kalidasa, the poet some scholars link with the Ramagiri of his Meghaduta. About twenty-two thousand people live in the town, which sits roughly forty-five kilometres north-east of Nagpur and is famed for betel leaf and nearby manganese mines.",
      "Its schools follow the Maharashtra State Board in Marathi, Hindi or English, plus a few CBSE options. The directories we checked list no IB World School and no Cambridge or Edexcel centre in Ramtek, so we name none as local. Nagpur does have IB and Cambridge schools, but a daily commute of that distance is hard on a young child, which leaves many families weighing boarding, relocation or home tutoring.",
      "Who writes to us? Officers posted to the tehsil, doctors and lecturers who arrived with children already mid-way through an international course. Families with a parent in the Gulf or a metro. And ambitious Vidarbha households, often in trade or education, who see an overseas-recognised qualification as a path to the best universities in India or abroad.",
      "IB Gram has no tie to any school, exam board or university named here. Tutors explain, set work and mark honestly, and they never write an Internal Assessment, Extended Essay or other assessed piece.",
    ],
    bullets: [
      "IB lessons from PYP to the Diploma for a town without an IB school",
      "Cambridge and Pearson Edexcel IGCSE, planned by paper code and tier",
      "Private video classes on Indian Standard Time",
      "Short notes after each class and a written plan once the trial is done",
      "No tutor visits in Ramtek; visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in Ramtek as far as we can confirm. They arrive in a household by other routes: a posting, a school in Nagpur, a boarding decision or a plan to begin IGCSE in Grade 9. Here is how each stage looks from the foot of the hill.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Young pupils learn through shared themes and units of inquiry in place of separate subject periods, then present a self-chosen Exhibition at the end. No outside examiner marks it, so help is simple: fluent reading, comfortable sums and a habit of asking questions worth chasing.",
      countryNote:
        "In Ramtek, PYP questions usually come from families whose posting here interrupted an inquiry-style primary education elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four published criteria judge every MYP subject and a Personal Project closes Year 5. Pupils who know a topic well can still score low by answering a neighbouring question to the one a criterion asks.",
      countryNote:
        "With no MYP school in Ramtek, children take it through a Nagpur school or use it as early groundwork for IGCSE.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student studies six subjects, half at Higher Level, along with Theory of Knowledge, the Extended Essay and a service strand. Most subject grades combine internal assessment and May examinations.",
      countryNote:
        "A Diploma student from Ramtek typically boards in Nagpur or travels in daily, so lessons follow that school's calendar and not the town's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses join a career-related study and a reflective project. Very few Indian schools offer it, though the Diploma content inside is taught at full depth.",
      countryNote:
        "We rarely hear about CP from the Ramtek side; if a question arrives, tutoring goes to the Diploma courses in the chosen pathway.",
    },
  ],

  subjectsIntro:
    "Maharashtra board students come well drilled and often fluent in mathematics. What catches them out is the wording of IB and IGCSE questions, which lean on verbs like discuss, evaluate and deduce and punish an answer that only states facts. So each class is built against a named subject, level and paper, beginning with how the question speaks.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof fill the syllabus. At HL the third paper deliberately offers questions with no template, so we train the nerve to begin." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, regression and modelling, with a graphic calculator in constant use. Price series for oranges or betel leaf from the Nagpur region make a real dataset for the exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics from the HSC course is a fine launchpad. Uncertainty, graph reading and experiment design are the unfamiliar skills that decide the Investigation grade." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles seldom cause trouble. Marks leak away in organic mechanisms and in answers that end one sentence before the reason." },
    { name: "IB Biology", levels: "HL / SL", description: "Learning the terms is quick; answering in the form each command word wants, and defending a result statistically, takes practice." },
    { name: "IB Economics", levels: "HL / SL", description: "A neat, labelled diagram linked to something that happened this year outscores a page of theory. HL adds a policy paper built on data." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks go to answers that engage with the firm in the case study. The internal project needs a cooperative organisation, perhaps a betel trader or a mining supplier." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Marathi and Hindi speakers often read with delicacy, but a timed commentary on an unseen English passage needs rehearsal." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms on paper and the software built for the internal assessment require different drills." },
    { name: "IB Psychology", levels: "HL / SL", description: "Remember each study by name, apply it exactly and fit it into an argument that lasts a whole essay." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Open-cast mining, forest corridors towards Pench and Vidarbha's water stress are rich case material for judging how systems cope." },
    { name: "IB Geography", levels: "HL / SL", description: "Specific places and measured figures lift an answer above vague statements, and fieldwork needs a method somebody else could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Bhonsle-era Ramtek offers good local colour, though source analysis in Paper 1 and long argument in Paper 2 are separate muscles." },
    { name: "IB Marathi A / Hindi B", levels: "HL / SL", description: "Marathi as a first language is a real asset on the literature course; Hindi B comes down to unseen reading and easy conversation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion teaches this better than notes. Argue a prescribed title from the side you dislike, then write." },
  ],

  igcseSubjectsIntro:
    "Three facts fix an IGCSE plan: the exam board, the paper code and the tier. Cambridge papers are Core or Extended, Edexcel papers Foundation or Higher, and the tier caps the final grade. The sitting matters as well, Cambridge in May to June or October to November and Edexcel in January or summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Skipped steps cost marks on Extended papers; a tidy layout still earns method credit when an arithmetic slip occurs." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, vectors and trigonometric identities arrive a year ahead, easing the later move into IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Much content mirrors Cambridge, yet the wording of questions differs, so real Edexcel papers supply the practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations at speed and tackling the alternative-to-practical paper each get their own regular drills." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole work, rates and organic families are taught beside the practical-skills paper across the year instead of in a final rush." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and body systems return in longer answers, where how a response is built counts almost as much as recall." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Correct diagrams are the quick gain; the grade gap opens in the longer evaluation questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A trace table stops being abstract once real Python has been typed and run, so each topic includes coding." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "A stopwatch and a fresh passage build summary and directed writing faster than learned phrases." },
    { name: "IGCSE Marathi and Hindi as a second language", levels: "Grade 9-10", description: "A weekly slot of one-to-one reading and conversation is what the language papers reward." },
  ],

  regionsTitle: "Ramtek and the places around it that our online classes reach",
  regionsIntro:
    "A class needs only a laptop and a steady line, so what follows is background, not a service map. It shows where families live, what heritage is nearby and which towns they look to; some names belong to neighbouring places.",
  regions: [
    { name: "Ramtek hill and Gad Mandir approach", note: "Homes along the climb to the fortified Ram temple complex, where pilgrims and priests' families share the lanes." },
    { name: "Kalidasa memorial surroundings", note: "The poet's hilltop memorial and its yearly festival draw a literary, Sanskrit-leaning crowd to the town." },
    { name: "Ambala Lake side", note: "The sacred lake below the hill, around which several older residential lanes have grown." },
    { name: "Ramtek market and bus-stand area", note: "The commercial centre, where betel traders and shopkeepers raise children who study in Marathi or semi-English medium schools." },
    { name: "Near the engineering college and university campuses", note: "A small academic belt around KITS and the Sanskrit university, home to lecturers and students." },
    { name: "Khindsi Lake", note: "A reservoir about seven kilometres out, ringed by farms and weekend visitors." },
    { name: "Mauda and Parseoni", note: "Neighbouring towns on the Nagpur side of the district, with their own markets and colleges." },
    { name: "Nagpur city", note: "About forty-five kilometres south-west, the divisional hub with the larger coaching market, hospitals and the international schools." },
  ],

  schoolDisclaimer:
    "No school in Ramtek could be confirmed as teaching the IB or Cambridge or Edexcel IGCSE, so none is described as local. Nagpur names below show where some families look, with no partnership implied. IB Gram stands apart from them and from the International Baccalaureate, Cambridge and Pearson, and there is no agreement, referral fee or endorsement.",
  schoolClusters: [
    {
      city: "Ramtek and its tehsil",
      note: "Schools here follow the Maharashtra State Board or CBSE. As no IB or IGCSE teaching was confirmed, the specialist syllabus comes through online classes.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur, MIHAN and the southern belt",
      note: "About forty-five kilometres away, Nagpur has the region's IB and Cambridge schools. A daily commute is long for a young child, so families usually weigh boarding or a move. Confirm current offerings directly.",
      schools: ["D Y Patil International School, MIHAN", "VIBGYOR World Academy"],
    },
    {
      city: "Nearby: Nagpur, central city",
      note: "Other international schools sit in the city proper and its western suburbs, closer to the university and hospital belt.",
      schools: ["Centre Point School International", "International School of Scholars"],
    },
  ],

  modesIntro:
    "Each plan is private, live and timed to Indian Standard Time, with a tutor chosen for the paper code; they differ in speed alone. No tutor visits Ramtek, because in-person home tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Standing weekly class over video",
      description:
        "A set hour every week on a shared digital board, using the pupil's notes and a pile of past papers. It is the usual option and the steadiest base for a school year.",
      bullets: [
        "Tutors from all over India, matched to the course",
        "Covers DP, MYP, Cambridge and Edexcel",
        "Working shown live on screen",
        "One tutor throughout the term",
      ],
    },
    {
      title: "Gentle plan with a written report",
      description:
        "A lighter weekly class, a short written summary and a fuller progress review each month. Younger children, and parents who want clear updates without a crowded timetable, often prefer it.",
      bullets: [
        "A short note after every class",
        "Goals reviewed on a regular basis",
        "Popular for PYP and early MYP",
        "Extra classes before tests",
      ],
    },
    {
      title: "Short intensive before mocks and papers",
      description:
        "A few weeks of several classes a week before mocks or written papers, using timed questions and quick marking.",
      bullets: [
        "Papers marked against current schemes",
        "Feedback inside two days",
        "Best begun a month early",
        "Planned around Ramnavami, Dussehra and Diwali",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Ramtek, or only in Nagpur?",
      paragraphs: [
        "Only in Nagpur, as far as we can confirm. Ramtek's schools teach the Maharashtra State Board syllabus in Marathi, Hindi or English, with a few CBSE affiliations, and the directories we checked list no IB World School and no Cambridge or Edexcel centre in the tehsil. Nagpur has several. We name none as local, because pointing to a school we cannot vouch for would only mislead you.",
        "That nearness can tempt a family. On a map, forty-five kilometres looks manageable, but the road in morning and evening traffic is slow, and a young child spending hours on a bus has little energy left for homework. Many households therefore consider boarding, renting in Nagpur or learning at home instead.",
        "Online tutoring helps in each case. A child already enrolled in a Nagpur school gains protected study time on weekends and late evenings. A child waiting for admission can prepare in mathematics and English. And a child who stays in Ramtek can follow an IGCSE or IB syllabus privately.",
        "As there is no Ramtek school to refer to, we pick by syllabus. A student on IB Physics HL has no specialist next door, but an online tutor in Pune or Bengaluru who taught it last year can start inside a week.",
      ],
      table: {
        caption: "Choices Ramtek families weigh for international schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["State Board and CBSE schools", "Ramtek and the tehsil", "No IB or IGCSE teaching confirmed"],
          ["Day school in Nagpur", "About 45 km away", "IB and Cambridge schools exist, but daily travel is long"],
          ["Boarding or renting in Nagpur", "Nagpur and its suburbs", "Needs admission planning a year ahead"],
          ["Online tutor beside any school", "At home in Ramtek", "Fits IGCSE subjects, plus IB students on a school roll elsewhere"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Ramtek",
        "Nagpur has the schools, but the commute is long",
        "Weekend and late-evening classes protect study time",
        "Tutors are matched by syllabus, not by postcode",
      ],
    },
    {
      heading: "State Board versus IB and IGCSE: what changes for a Ramtek student?",
      paragraphs: [
        "SSC and HSC papers value complete, well-ordered answers lifted from a set textbook, and Ramtek's teachers train students well for them. IB and IGCSE examiners would rather present an unfamiliar situation and ask which method applies and why. The shift is from repeating to choosing.",
        "Assessment parts company long before the exam. A board journal lists experiments done; an IB Internal Assessment or IGCSE coursework task is a self-directed investigation graded on published descriptors, worth up to a third of the mark. Planning and redrafting at that length is a skill that can be taught.",
        "Depth depends on the level. Higher Level IB mathematics and sciences go beyond HSC in places, IGCSE Extended is a step above SSC, and Core is easier. A child changing board in Grade 9 or Class 11 gains most from a list of the genuinely new topics rather than a general revision.",
        "English as the examination language needs time of its own. A fluent Marathi or Hindi speaker may follow an idea fully and still write slowly under pressure, so sentence frames, vocabulary lists and timed writing sit inside each class.",
      ],
      table: {
        caption: "Maharashtra State Board compared with IB and IGCSE",
        columns: ["Feature", "SSC / HSC / CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Set out a tidy textbook answer", "Choose a method and justify it in new territory"],
          ["Coursework", "Practical journals and internal marks", "Investigations and portfolios marked to criteria"],
          ["Language of study", "Marathi, Hindi or English", "English, plus Marathi and Hindi language courses"],
          ["Recognition", "Strong in Maharashtra and across India", "Recognised by universities in many countries"],
        ],
      },
      bullets: [
        "Selecting a method beats reciting one",
        "Coursework unfolds over months",
        "Learn the new topics first and revisit the old ones later",
        "Give exam English a skill slot of its own",
      ],
    },
    {
      heading: "What decides the price of an IB or IGCSE tutor in Ramtek?",
      paragraphs: [
        "Four considerations shape the fee. How advanced is the course? Which subject? How long and how frequent are the classes? And how recently has the tutor taught this exact paper? Higher Level science costs more than Grade 7 maths, and the amount is given in writing before the first class.",
        "Travel costs nothing. Classes are online, so tutors in Pune and Hyderabad charge a Ramtek family alike, and there is no bus to Nagpur or taxi on the highway to pay for.",
        "Look at the substance of the hour. Some tutors know exactly how Cambridge examiners word a practical question or how an IB moderator reads an exploration, and that knowledge saves a student a term of guesswork. Ask what each class will cover and how you will be told about progress.",
        "There is no long contract. Classes can pause for the summer heat, Ramnavami, Kartik Purnima or a wedding, and a tutor can be swapped if the fit is poor.",
      ],
      bullets: [
        "Price rests on level, subject, class length and tutor experience",
        "No travel cost for Ramtek students",
        "You receive the fee in writing first",
        "Pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Nagpur coaching, a home tutor, self-study or online: what works for IB and IGCSE?",
      paragraphs: [
        "Nagpur's coaching trade is big, but it aims at the State Board, MHT-CET, JEE and NEET. A few centres teach IB or IGCSE, usually in the city and on fixed timetables. For a Ramtek child that means a long daily trip, and for most families it is not realistic during the school week.",
        "Teachers living in Ramtek cope well with regular school subjects. Few have ever taught a live IB or IGCSE specification, and with so few pupils none can afford to specialise. Encouragement comes easily; the examiner's mark scheme does not.",
        "Self-study suits a disciplined child working on a subject with abundant published material; IGCSE Mathematics papers are everywhere. Its weak spot is anything that needs a second reader: a lab write-up, an essay plan, a long explanation worth six marks. Without feedback, small mistakes harden into habit.",
        "Private online classes bring specialist knowledge and individual attention on a regular weekly slot, with no journey to Nagpur. All a family needs is a laptop, headphones and a connection that lasts an hour.",
      ],
      table: {
        caption: "Support routes compared for Ramtek",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Limit for Ramtek"],
        rows: [
          ["Coaching centre in Nagpur", "Sometimes for IB or IGCSE", "Shared with a batch", "Long daily travel; fixed timetables"],
          ["Home tutor in town", "Varies", "Full", "Current papers rarely taught"],
          ["Studying alone", "Books and past papers alone", "None", "Nobody to read coursework or essay drafts"],
          ["Online specialist", "Chosen for the course", "Full", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Local coaching targets the State Board, MHT-CET, JEE and NEET",
        "Recent IB or IGCSE teaching is scarce around Ramtek",
        "Writing goes unchecked when studying alone",
        "Online specialists close both gaps",
      ],
    },
    {
      heading: "How do the Vidarbha heat and Ramtek's fairs shape a study plan?",
      paragraphs: [
        "Vidarbha has some of the fiercest summers in India. Nagpur and Ramtek regularly pass 44 and even 46 degrees in May and early June, so afternoons are unusable and power cuts are common. Early mornings and evenings suit study better, and a charged laptop with a mobile hotspot is a sensible backup.",
        "The festival calendar counts as well. Ramnavami in spring and the Kartik Purnima fair in November draw tens of thousands of pilgrims up the hill, with jammed roads and a holiday mood. Dussehra, which Nagpur marks as Dhamma Chakra Pravartan Day, and Diwali add more breaks. A sound plan notes each date, with light revision before and a catch-up class after.",
        "Diploma students sit their main exams in May and get results in July, with retakes in November. Cambridge IGCSE runs in May to June and October to November, and Edexcel adds January. State SSC and HSC exams in February and March can clash with mocks, so anyone doing both should map the calendar early.",
        "A boarder in Nagpur lives by the hostel school's calendar. For an IGCSE candidate at home, a workable rhythm is one class a week in Grade 9, more frequent sessions in the autumn of Grade 10 and a concentrated two-month block ahead of the papers.",
      ],
      table: {
        caption: "The year for an IB or IGCSE student in Ramtek",
        columns: ["Period", "What happens", "Tutoring focus"],
        rows: [
          ["June to September", "Monsoon, new school year", "Foundations and gap-filling"],
          ["October to November", "Dussehra, Diwali, Kartik Purnima fair; Cambridge November series", "Light revision, then a sprint for sitters"],
          ["January to March", "Mocks, Edexcel January series, SSC and HSC exams, Ramnavami", "Timed papers and feedback"],
          ["April to June", "Heat; Diploma and IGCSE written papers", "Short early sessions and past papers"],
        ],
      },
      bullets: [
        "Expect interruptions around Ramnavami and Kartik Purnima",
        "Choose early or evening slots in the hottest weeks",
        "May brings Diploma papers, with retakes in November",
        "State exam weeks can squeeze mock revision",
      ],
    },
    {
      heading: "Where can IB or IGCSE lead after school in Ramtek?",
      paragraphs: [
        "Nagpur offers VNIT, AIIMS, IIM Nagpur, the National Law University and Rashtrasant Tukadoji Maharaj Nagpur University, so a Ramtek student can often study at a strong institution without leaving the region; Pune and Mumbai come next. Each institution has its own rules for IB and IGCSE applicants, so ask directly.",
        "Admission within India often requires an equivalence certificate from the Association of Indian Universities for an overseas-board qualification. CUET-UG accepts several boards but checks subject combinations, and MHT-CET, JEE and NEET publish their own rules. Those rules move between years, so confirm them before fixing subjects.",
        "Beyond India, universities in Britain, Canada, Australia and the United States accept IB points and IGCSE grades as proof of readiness. British offers normally combine a points total with Higher Level minimums and depend on the grades your school predicts in the final year. That makes the first Diploma year weigh more than most families realise.",
        "Families far from big cities often start these conversations late. Dropping Higher Level Mathematics at fourteen can end an engineering path at seventeen. Our help is academic only; for applications, ask the university or exam authority.",
      ],
      bullets: [
        "Nagpur, Pune and Mumbai are the main destinations",
        "AIU equivalence is often needed for Indian universities",
        "Check MHT-CET, JEE, NEET and CUET rules with the authority",
        "Predicted grades shape overseas offers",
      ],
    },
    {
      heading: "Which IB Maths route and which sciences should a Ramtek student expect?",
      paragraphs: [
        "Students choose between two IB Mathematics courses. Analysis and Approaches rests on algebra, functions, calculus and proof, which suits future engineers and physicists, and at Higher Level it ends with a paper of problems nobody has seen. Applications and Interpretation rests on statistics, modelling and technology, and it suits those aiming at economics, biology or business.",
        "Physics students from HSC use formulae with confidence but are seldom asked about uncertainty, graph analysis or experimental design, which is where the Investigation earns its marks. A tutor who knows the mark scheme can adjust the plan before a draft goes off course.",
        "In Chemistry the early topics, moles and equilibrium, go quickly, and then reaction mechanisms and energy cycles slow students down. In Biology the vocabulary is known, but crafting an answer to fit the command word is the missing skill.",
        "As no school nearby teaches these papers, the online tutor does the main teaching. So before the first class we request the textbook, any notes and one recently marked script, which lets the opening hour begin from evidence.",
      ],
      bullets: [
        "AA for calculus, proof and engineering",
        "AI for data, statistics and modelling",
        "Physics students most often lack experimental design",
        "Bring one recently marked paper to the first class",
      ],
    },
    {
      heading: "Core or Extended: which IGCSE tier fits a Ramtek student?",
      paragraphs: [
        "A Core entry has a lower ceiling than an Extended one. At fourteen that looks like a small detail, yet it follows the student, because Diploma teachers expect Extended-level foundations before starting Higher Level Mathematics and sciences.",
        "Run a small test at home. Choose five Extended-tier questions from an old paper, hand them to your child and stay silent. Right method with a slip in arithmetic points towards Extended. A long blank stare at the first line suggests a secure Core grade in that subject could be the wiser choice, leaving energy for stronger ones.",
        "Subject combinations need thought too. A frequent pattern is English, Mathematics, two sciences and one language or humanities option, with Additional Mathematics for aspiring engineers. If the child has no school timetable to structure the week, too long a list becomes heavy.",
        "No one in Ramtek has taught inside a Cambridge school, so one diagnostic class with a tutor who has coached both tiers is the fastest way to decide. Listening to a child think aloud beats reading a mark.",
      ],
      bullets: [
        "Core caps the grade; Extended does not",
        "Try some Extended questions before deciding",
        "Add Additional Mathematics for an engineering goal",
        "A single diagnostic class often decides",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Ramtek family?",
      paragraphs: [
        "We start with questions. What board does the school follow, which subject and level, how have recent marks looked, when is the next paper, and what is the real worry: one topic, an IA, the mocks, a change of board?",
        "Next we check qualifications, when the tutor last taught the exact course and how they handle weak coursework drafts. With no Ramtek school as a reference, shortlists follow the syllabus and who is free in IST.",
        "Sit beside your child for the first twenty minutes. A good tutor speaks plainly, asks short questions, waits for an answer and treats a mistake as a clue. If you see that, the next step is a one-page plan for the coming month. If not, you simply say thank you and we send someone else.",
        "If child and tutor do not get along, a different tutor is arranged without charge and without awkward explanations.",
      ],
      bullets: [
        "A conversation about board, subject, level and concerns",
        "Shortlist by syllabus experience",
        "A first class comes before any promise",
        "A new tutor if the fit is poor",
      ],
    },
  ],

  tutorsIntro:
    "Below is a selection of the tutors we introduce to Ramtek families, across PYP, MYP, the Diploma and both IGCSE boards, each picked for the course on the child's timetable. Teaching is by video, the only format used in Ramtek.",

  process: [
    { title: "Tell us who you are teaching", description: "Board or programme, subject and level, recent marks and the hours after school that are free in Ramtek." },
    { title: "Read a few profiles", description: "With no IB school close by, profiles come from across India, chosen for recent teaching of your child's paper." },
    { title: "Sit in on a first class", description: "One real topic taught live, free, with nothing to sign." },
    { title: "Agree the first month", description: "The order of topics, the best weekday and how reports will arrive, written out." },
    { title: "Keep going and review", description: "Weekly classes carry on, we review the plan every few weeks, and another tutor can take over if that would help your child." },
  ],

  whyPoints: [
    { title: "Course first, tutor second", description: "No tutor is put forward until the HL or SL subject, or the Cambridge or Edexcel code and tier, is known." },
    { title: "Made for towns the schools skip", description: "Ramtek has no international classroom we can confirm, so our search for a specialist covers the whole country." },
    { title: "Watch before you pay", description: "The tutor teaches before any mention of fees." },
    { title: "Clear limits on help", description: "Tutors read drafts and offer comments, though the assessed words belong to the student alone." },
    { title: "Progress on paper", description: "Every class ends with a few written lines, and a fuller report arrives every few weeks." },
    { title: "Free to leave", description: "You may pause, stop or change tutors at will. Nothing links us to any school, exam board or university." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Ramtek?", answer: "Begin with the subject, the level and the exam sitting you are aiming at. We shortlist tutors who taught that course recently and set up a free trial class. Ramtek has no confirmed IB school, so the search covers India and the teaching is on video." },
    { question: "Is there IGCSE help in Ramtek for both Cambridge and Edexcel?", answer: "Both boards, always online. We fix the board, paper code and tier before suggesting anyone, for instance Cambridge 0580 Extended or Edexcel 4MA1 Higher, so your child practises on the right papers for the sitting." },
    { question: "Will a tutor visit our house in Ramtek?", answer: "Nobody from IB Gram visits houses in Ramtek, since in-person tuition is limited to Gurugram and parts of Delhi NCR. At-home tuition here means a private live class on your child's laptop where tutor and pupil write on the same shared digital board." },
    { question: "What does IB or IGCSE tuition cost in Ramtek?", answer: "We keep no printed price list. Fees depend on the level of the course, the subject, class length and the tutor's recent experience with this syllabus, and you are told the number in writing before the trial. Continuing after the trial brings no long-term obligation." },
    { question: "Which schools in Ramtek teach IB or IGCSE?", answer: "We could confirm none. Local schools teach to the Maharashtra State Board or CBSE. Nagpur, about forty-five kilometres away, has international schools, and families use them for boarding or after moving, with online tutoring for preparation or to support a child at home." },
    { question: "Is the first class really free?", answer: "Yes. A tutor teaches a real topic from the syllabus, and you choose afterwards. Agreeing leads to a short plan for the first month; declining leads to nothing further." },
    { question: "How far can a tutor go with an IB Internal Assessment?", answer: "Tutors can explain a marking criterion in everyday words, discuss which research question is small enough to investigate, check an experimental method and give notes on a draft that the student wrote unaided. They do not write or polish assessed text. The IB regards that as malpractice, and we turn such requests down." },
    { question: "Which Diploma subjects can you cover for Ramtek students?", answer: "For the Diploma, we offer tutors in both Maths courses at either level, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Marathi and Hindi, with Theory of Knowledge and Extended Essay coaching as well. A rare subject has fewer tutors, but we look hard." },
    { question: "Do you teach younger children on MYP and PYP?", answer: "Yes. MYP teenagers generally need practice answering to the published criteria and choosing a Personal Project they can finish. PYP children do short, frequent classes on reading aloud, number patterns and asking good questions." },
    { question: "Can a laptop class match a tutor sitting beside my child?", answer: "A laptop class often does better in Ramtek. The right specialist for a paper may be in another state, and a local tutor would need a long drive. A shared digital whiteboard plus a recording of each class reproduces most of what sitting side by side offers, provided the internet holds." },
    { question: "How do you check tutors?", answer: "We begin with paperwork, checking degrees and certificates. Then come the revealing questions. When did this person last teach the paper your child will sit? What would they do with a coursework draft that is going nowhere? Teaching the current specification recently beats a longer career that predates it, and the trial class gives you your own evidence." },
    { question: "What is the best time to begin?", answer: "Ideally you begin as the course begins, Grade 9 for IGCSE and Class 11 for the Diploma. Joining later is far from pointless: classes that target the most heavily weighted topics can sharpen technique even in the final two months." },
    { question: "My child is in a Marathi-medium school. Can they move to IGCSE or IB?", answer: "Moving from a Marathi-medium school rarely trips a child on the sums. What does is English phrasing in the exam, the specific meaning of command verbs like justify and assess, and the stamina to keep a long coursework task going for months. A short bridge course in the holidays before Grade 9 or Class 11 smooths the first term." },
    { question: "Which class times work for Ramtek families?", answer: "Most students prefer weekday evenings or weekend mornings. Ramnavami, Kartik Purnima, Diwali and the hottest afternoons stay free, state board exam dates are honoured where they apply, and a class moves if a power cut threatens the line." },
    { question: "What if the tutor does not suit my child?", answer: "If the pairing is not working, say so and we find another tutor. Reviews exist to expose a mismatch early, you are free to leave, and stopping altogether costs nothing." },
    { question: "Does IB Gram have any link with a school, the IB or Cambridge?", answer: "No. IB Gram works on its own, with no agreement involving any school in Ramtek or Nagpur, nor with the IB, Cambridge or Pearson. Schools appear here only to describe what they teach, and the tutor follows whatever syllabus your child's school or exam centre has set." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Nagpur", href: "/nagpur/", description: "The divisional hub with the region's IB and Cambridge schools." },
    { label: "IB and IGCSE tutoring in Amravati", href: "/amravati/", description: "Another Vidarbha city served in the same way." },
    { label: "IB and IGCSE tutoring in Wardha", href: "/wardha/", description: "A nearby Vidarbha town taught online." },
    { label: "IB tutoring across India", href: "/india/", description: "How matching works for towns across India." },
    { label: "IB and IGCSE tuition in Gurgaon, at home", href: "/gurgaon/", description: "Where tutors really do come to the door." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subject groups, HL and SL, TOK, IAs and the Extended Essay, explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the Personal Project and eAssessment, simply explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "How units of inquiry build towards the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and sittings, explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to pick between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Browse profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write in, and book a trial class." },
  ],

  closingHeading: "Book a free IB or IGCSE trial class for your Ramtek child",
  closingBody:
    "Send a few lines: which board your child studies under, the subject and level, how the latest marks look and which hours after school are free in Ramtek. A suggested tutor and some trial slots come back, with a short note on the papers that person has taught. Everything is private and on video, and nothing needs signing. Our email is support@ibgram.com and our WhatsApp number is +91 7439 368 115.",
};
