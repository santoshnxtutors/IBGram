import type { CitySeoPage } from "../types";

/**
 * /vita/ - IB and IGCSE tutoring page for Vita, Khanapur taluka, Sangli district, Maharashtra (not Vita
 * elsewhere). Online only: no home visits, since in-person tuition runs only in Gurugram and parts of
 * Delhi NCR. No IB or IGCSE school is confirmed inside Vita, so clusters are labelled nearby cities.
 */
export const vita: CitySeoPage = {
  slug: "vita",
  countryName: "Vita",
  countryNameLong: "Vita, Maharashtra",
  demonym: "Vita",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set around Ganeshotsav weeks, the sugarcane crushing months, and the Maharashtra board exam season that shapes every household here",
  lastUpdated: "2026-09-21",
  geo: { latitude: 17.2667, longitude: 74.5333 },
  wikipedia: "https://en.wikipedia.org/wiki/Vita,_Maharashtra",
  alternateNames: ["Vita Sangli", "Vita Khanapur"],
  stripSchools: [],

  title: "Vita IB & IGCSE Tutors | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Vita in Sangli district: online one-to-one private tuition from home, PYP to DP and Cambridge or Edexcel IGCSE, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Vita",
  heroEyebrow: "IB & IGCSE ONLINE PRIVATE TUITION FOR VITA FAMILIES",
  heroSubtitle:
    "Private tuition from home is what most Vita parents ask about, and for an IB or IGCSE student it works as a live one-to-one video lesson, not a tutor at your door. Vita, the taluka town of Khanapur in Sangli district, has Maharashtra State Board and CBSE schools but no IB or Cambridge classroom we can confirm, so a tutor who has taught your child's exact course lets a family here keep an international plan going without moving to Pune or Kolhapur.",
  primaryKeyword: "IB and IGCSE tutors in Vita",
  imageAltText: "Student in Vita revising IB Chemistry notes with a tutor on a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Vita",
    "IGCSE tutor Vita",
    "IB home tuition Vita",
    "IGCSE home tuition Vita",
    "IB private tuition Vita",
    "IB Maths tutor Vita",
    "IGCSE Maths tutor Vita",
    "IB Physics tutor Vita",
    "IB Chemistry tutor Vita",
    "IB Biology tutor Vita",
    "IB DP tutor Vita",
    "IB MYP tutor Vita",
    "IB PYP tutor Vita",
    "IGCSE online tuition Vita",
    "Cambridge IGCSE tutor Vita",
    "IB tutor Vita Sangli",
    "IB tuition Khanapur taluka",
    "IGCSE tutor Atpadi",
    "IB tutor Vita Maharashtra",
  ],

  heroTrustPoints: [
    "Tutors are chosen for one thing: the precise IB course and level, or the Cambridge or Edexcel specification, your child is studying",
    "All lessons are online; no tutor visits Vita, and home visits run only in Gurugram and parts of Delhi NCR",
    "Your child attends a free trial lesson before any decision or payment",
    "IB Gram is an independent service, unconnected with the IB, Cambridge, Pearson or the schools mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as Vita" },
    { value: "Free trial", label: "Judge the lesson first" },
  ],

  intro: {
    heading: "A taluka town with strong board results and no international classroom",
    paragraphs: [
      "Vita has a little under fifty thousand residents, and it has built a name locally for cleanliness; it topped the small-city category of the 2021 Swachh Survekshan. Education here follows the Maharashtra State Board with a growing number of CBSE and English-medium schools. What you will not find inside the town is an IB or Cambridge IGCSE school, and we do not name one we cannot confirm.",
      "Families still reach out, and their situations are specific. A parent in Vita has a son at a school in Pune or Belagavi and wants help between terms. A relative has come back from the Gulf or Europe, where the child studied the IB. Or a household is weighing an international route before Class 9 and wants to test whether it suits a child before making a large decision such as boarding.",
      "The lesson is a video call at your own desk. A tutor marks a paper live, watches a student attempt a problem and corrects a method in the moment. Nobody travels to Vita: in-person tuition is limited to Gurugram and parts of Delhi NCR. Because distance is irrelevant, a Vita student can work with a Physics specialist in Bengaluru and a Mathematics tutor in Chennai in the same week.",
      "Tutors here explain, question and mark. They do not write Internal Assessments, Extended Essays, TOK essays or coursework. IB Gram is independent of the IB, Cambridge, Pearson and any school on this page, and the tutoring stays a supplement to whichever school or exam route your child follows.",
    ],
    bullets: [
      "IB tutoring across PYP, MYP, DP and CP for students anywhere",
      "Cambridge and Edexcel IGCSE tutors matched by specification code",
      "Live one-to-one video lessons on Indian Standard Time",
      "Short written feedback after each session",
      "No tutor visits in Vita; home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Vita families tend to ask the same question in different words: how does this programme actually work, and can we do it without changing city? Below is a stage-by-stage answer, with a note on what it looks like from Sangli district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Classroom time is spent on inquiry units that cross subject lines and lead to a final Exhibition led by the pupil. With no board exam at the end, good tutoring builds reading habits, comfortable number sense and the confidence to ask questions.",
      countryNote:
        "No PYP school operates in Vita, so a family seeking it is normally coming back from a posting where the child studied PYP and wants the routine kept.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade by criterion in each subject and the year-five Personal Project is a long piece of work the student runs. Most learners can recall content; what needs practice is explaining reasoning against a criterion.",
      countryNote:
        "MYP students connected to Vita are usually at schools in Pune, Kolhapur or Belagavi; tutoring fills the gap during Diwali and summer breaks at home.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for three Higher Level and three Standard Level subjects, plus TOK, an Extended Essay and creativity, activity and service. Internal assessment adds to the final score and exams are held in May.",
      countryNote:
        "The Diploma is not taught in Vita; a DP tutor here follows the calendar of the boarding or city school the student attends, not the Maharashtra board timetable of neighbours.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP is a shorter pathway that pairs two or more Diploma courses with a career-related qualification and a reflective project. Fewer Indian schools offer it, though its academic courses are assessed like the DP.",
      countryNote:
        "Vita enquiries about CP are uncommon; when they come, the tutoring concentrates on the Diploma courses within the pathway.",
    },
  ],

  subjectsIntro:
    "Every match is made by subject, level and exam session together. A student in Vita might have one tutor for IB Physics HL and a different one for English A, each picked for that syllabus alone.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Students from the Maharashtra board tend to be fast at routine algebra; the extra work is on open-ended Paper 3 problems and on choosing an Exploration topic weeks before the deadline." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency take priority, with a data-driven Exploration built on numbers the student can actually source." },
    { name: "IB Physics", levels: "HL / SL", description: "A student who knows the state-board mechanics still needs the IB data booklet, uncertainty propagation and command-term precision, and a practical with a genuine research question." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic reaction routes and energetics take longer than expected, and lab write-ups must show evaluation, not only results." },
    { name: "IB Biology", levels: "HL / SL", description: "Answers are judged on matching the command term and using data correctly; the practical investigation needs a defensible statistical treatment." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, definitions and recent real examples are drilled together, then extended to policy evaluation for the HL paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marks follow application to the named case, and the internal assessment needs an organisation that will share real information." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Commentary and comparative essay technique are practised on timed pieces, with the oral rehearsed several times." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Writing code every week matters as much as the theory, since the internal assessment is a real, documented product." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies are learned precisely and applied to essay questions, with practice on structuring an argument." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Evaluation and trade-off arguments, illustrated with named examples, earn more than descriptive summaries." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies need real detail, and fieldwork for the internal assessment needs a repeatable method." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained argument are practised separately, because each fails in its own way." },
    { name: "IB Marathi B / Hindi A", levels: "HL / SL", description: "Marathi is the home language in Vita; the work is formal register, text types for written papers and speaking practice for the oral, offered where the school supports the language." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "A guided conversation on knowledge questions; the tutor challenges plans for the exhibition but does not draft the essay." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both offer IGCSE, and the papers differ in style even where the content overlaps. We match by exact specification code and tier, whichever exam centre a Vita student uses.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended demands speed on the non-calculator paper and careful method marks, and a tutor drills both with timed sets." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Brings in calculus and vectors early, which eases the step to IB Maths AA later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel questions are worded differently from Cambridge's, so past papers from that board are essential." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation rearrangement and the alternative-to-practical paper are the two skills worth starting early." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, bonding and organic basics are sequenced so they support the practical-skills paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and ecology are weighted heavily, and long answers need dedicated writing practice." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Precise diagrams first, then extended evaluative answers for higher grades." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice paired with pseudocode tracing, so logic is tested against running code." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed unseen-passage reading and summary technique give the largest gains." },
    { name: "IGCSE Marathi and Hindi as second languages", levels: "Grade 9-10", description: "Structured writing in formal registers for students whose home language is Marathi or Hindi, matched to the specification the exam centre offers." },
  ],

  regionsTitle: "Vita, Khanapur taluka and the towns around it, taught online",
  regionsIntro:
    "Your lesson happens on screen wherever you live in the taluka. The notes below are about context: the nearest towns with schools and colleges, how the calendar affects study and how far the closest IB or Cambridge classrooms actually sit.",
  regions: [
    { name: "Vita town centre", note: "The municipal town and taluka headquarters where most tuition enquiries originate; well served by broadband and mobile data." },
    { name: "Khanapur", note: "The taluka's historic namesake, close to Vita, with a smaller town economy and state-board schools." },
    { name: "Atpadi", note: "A neighbouring taluka town in a drier belt of the district; families often travel to Vita or Sangli for higher schooling." },
    { name: "Kadegaon", note: "A nearby town toward the Satara side, useful for families who compare options in Karad and Satara." },
    { name: "Tasgaon", note: "A larger commercial town about thirty kilometres away, known for grapes and for colleges that Vita students attend." },
    { name: "Palus", note: "A town on the Sangli side of Vita, with industrial units and a base of working families." },
    { name: "Karad", note: "About forty kilometres away, a major education town in Satara district and the usual first stop for coaching and colleges." },
    { name: "Sangli city", note: "The district headquarters some fifty kilometres off, where Walchand College and Bharati Vidyapeeth run and where Vita families go for higher study." },
    { name: "Revansiddha temple area", note: "A well-known local shrine whose yatra season draws crowds and affects roads and evening schedules." },
  ],

  schoolDisclaimer:
    "Schools are listed only to show where an international curriculum is available in reach of Vita, not because of any relationship. IB Gram is an independent tutoring service and has no affiliation with, and no endorsement from, these schools, the International Baccalaureate, Cambridge International or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Vita and Khanapur taluka",
      note: "We cannot confirm any IB or Cambridge IGCSE school inside Vita or the taluka; local schools run the Maharashtra State Board or CBSE, so local options for an international syllabus are limited.",
      schools: [],
    },
    {
      city: "Nearby: Atigre, Kolhapur district",
      note: "The closest confirmed international-curriculum campus that families from Sangli district discuss, across the district border by road.",
      schools: ["Sanjay Ghodawat International School, Atigre"],
    },
    {
      city: "Nearby: Belagavi",
      note: "A Karnataka boarding option reached by highway from Sangli, sometimes considered by families in the region.",
      schools: ["Indus Altum International School, Belagavi"],
    },
    {
      city: "Nearby: Pune",
      note: "Maharashtra's largest cluster of international schools lies several hours away; most Vita families would consider boarding or relocation to use it.",
      schools: ["Mahindra International School, Hinjewadi", "Symbiosis International School", "Indus International School, Pune"],
    },
  ],

  modesIntro:
    "Every format is live and one-to-one on video. What changes is the pattern of hours, and families in Vita usually choose by the exam calendar and by how much of the year the student is at home.",
  modes: [
    {
      title: "Weekly lessons alongside school",
      description:
        "A fixed slot every week with the same tutor, fitted around school hours and the household routine.",
      bullets: [
        "Same tutor for the whole term",
        "Works for DP, MYP and IGCSE",
        "Live marking of past papers in lesson",
        "Slots placed outside peak power-cut hours where possible",
      ],
    },
    {
      title: "Written-feedback route for younger learners",
      description:
        "The same weekly lessons with a fuller written record after each one and a scheduled review, suited to PYP and early MYP students.",
      bullets: [
        "Short notes after every lesson",
        "A review at agreed intervals",
        "Extra lessons added without renegotiation",
        "Gentle pace for younger students",
      ],
    },
    {
      title: "Holiday and pre-exam blocks",
      description:
        "Several lessons a week over a short window, typically during Diwali or summer break, or just before mocks and May exams.",
      bullets: [
        "Timed papers marked to grade boundaries",
        "Quick return of corrected work",
        "Book two to three weeks ahead",
        "Avoids the Ganeshotsav week and local yatras",
      ],
    },
  ],

  sections: [
    {
      heading: "Where can a Vita student actually study the IB or IGCSE?",
      paragraphs: [
        "Not in Vita itself, so far as we can confirm. Schools in the town and across Khanapur taluka teach the Maharashtra State Board, and some private ones follow CBSE. The nearest international-curriculum options we know of sit across the district border at Atigre, in Belagavi and in the Pune region, and each is a long drive or a boarding decision away.",
        "That map explains most of the enquiries we receive from Vita. A parent wants to know whether a boarding move to Pune is wise, and whether the child would cope with the syllabus. Another wants to keep an IB stream going after a return from abroad. Others prefer that their child stay at home for two more years, while a tutor helps with an international-style course before a later move.",
        "The families are varied. Sugar and agricultural businesses, grape and pomegranate traders in the wider district, doctors and engineers, teachers, and people who work in Mumbai or Pune but keep their home in Vita are all represented. They share a cautious approach to change and a wish to understand a syllabus before committing to it.",
        "An absent local school does not weaken the exam a student sits. Papers are set and moderated centrally, and a script written in Vita meets the same marking criteria as one from Singapore. What a student may miss is access to a teacher who knows the course, and that is the gap a tutor fills.",
      ],
      table: {
        caption: "Where an international curriculum is taught within reach of Vita",
        columns: ["Place", "Relation to Vita", "What is offered"],
        rows: [
          ["Vita and Khanapur taluka", "Home", "No confirmed IB or IGCSE school; state board and CBSE"],
          ["Atigre, Kolhapur district", "Across the district border", "An international school with international curricula"],
          ["Belagavi", "Toward Karnataka by highway", "A boarding option with international programmes"],
          ["Pune region", "Several hours by road", "Widest cluster of IB and IGCSE schools in Maharashtra"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed in Vita",
        "Most enquiries concern boarders, returnees or a planned move",
        "Central marking means the standard is the same everywhere",
        "A tutor closes the access gap without a move",
      ],
    },
    {
      heading: "Maharashtra State Board, CBSE or IB and IGCSE: what should a Vita parent weigh?",
      paragraphs: [
        "Start with what your child already does well. Maharashtra State Board education builds good memory, neat presentation and confidence in a clear, chapter-by-chapter syllabus, and the SSC and HSC results shape entry to well-known local colleges. Nothing in an international programme replaces that discipline; it asks the student to add a new one.",
        "The new skill is applying an idea to something unfamiliar and justifying the answer in words. IB and Cambridge papers set problems in a context the student has not rehearsed, and an answer is marked for reasoning as much as for correctness. Students who are used to a predictable question bank usually need a few months to adapt.",
        "Coursework is the second difference. The IB Internal Assessment, and some IGCSE components, count toward the final grade and are marked against published criteria. A student from a board system may never have planned a project of that scale, so planning, drafting and revising become part of the learning, not an afterthought.",
        "Weigh the exit routes too. The Maharashtra board leads directly to MHT-CET and to state quotas; the IB and IGCSE lead through AIU equivalence to Indian universities and to universities abroad. A family should decide which set of doors matters more before switching.",
      ],
      table: {
        caption: "Maharashtra board, CBSE and IB or IGCSE, compared for a Vita student",
        columns: ["Feature", "Maharashtra State Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Where taught near Vita", "Most schools in the taluka", "Some private schools", "No confirmed school; nearby cities only"],
          ["How marks are earned", "Annual paper; recall and method", "Annual paper; NCERT-based", "Papers plus criteria-marked coursework"],
          ["State entrance link", "Direct to MHT-CET and state quotas", "JEE, NEET, CUET", "AIU equivalence; international admissions"],
          ["Recognition abroad", "Limited", "Moderate", "Widely recognised"],
        ],
      },
      bullets: [
        "State board builds discipline that still helps under IB",
        "Unfamiliar-context questions are the biggest adjustment",
        "Coursework needs planning skills that must be learned",
        "Decide which exit routes matter before switching",
      ],
    },
    {
      heading: "How much does IB or IGCSE tuition cost for a family in Vita?",
      paragraphs: [
        "We do not publish a price list, and we explain why. Each rate depends on the programme, the subject, the level, the length of each lesson and how recently the tutor taught that exact syllabus. You are quoted in writing before you commit, and the trial lesson comes first.",
        "Rarity is the main driver. A tutor who taught HL Chemistry last year is harder to find than one covering IGCSE Core Mathematics, and the rate follows. Intensity matters too: three lessons a week before mocks is priced differently from a single weekly slot.",
        "Your address does not matter. A household in Vita town and one in a village of Khanapur taluka pay the same, because there is no travel and no city premium. Compare that with the cost of a weekly drive to Sangli, Karad or Kolhapur for classes, which many families underestimate.",
        "Ask what one hour buys. A tutor who has already marked many scripts for your child's exact paper can shorten months of guessing into a few sessions. You may pause during Diwali or a family event, and we will change the tutor after the trial if the fit is not right.",
      ],
      bullets: [
        "Rates depend on scarcity, level and intensity",
        "Location adds nothing; no travel cost applies",
        "You see a written quote before booking",
        "Pause or change tutor without penalty",
      ],
    },
    {
      heading: "Sangli and Kolhapur coaching, a local tutor, self-study or online: which fits?",
      paragraphs: [
        "Coaching for Vita students typically means going toward Sangli, Karad, Kolhapur or Pune for board, MHT-CET, JEE or NEET batches. These classes are designed for the Indian exam calendar, and they are good at it. They are not designed for IB Physics HL or IGCSE 0606, so an international-syllabus student gains little unless the batch happens to match.",
        "A local tutor is convenient and can be excellent. The distinction that matters is recent syllabus knowledge. A teacher who has coached Class 12 physics for years understands content, but may not have marked an IB internal assessment or Cambridge alternative-to-practical script in the current syllabus year.",
        "Self-study can carry a student a long way with public past papers and mark schemes, and a disciplined student in Vita will use them. The weakness is feedback. Essays, practical reports and extended answers are hard to correct alone, and small habits harden unnoticed.",
        "Online tutoring complements each of the other routes. A student can keep a board-oriented batch, work independently and add a specialist for the international content, all without leaving home or losing commuting hours.",
      ],
      table: {
        caption: "Four ways to prepare for an international syllabus from Vita",
        columns: ["Option", "Built for IB or IGCSE?", "Format", "Limit from Vita"],
        rows: [
          ["Sangli or Kolhapur coaching batch", "No, Indian exam patterns", "Large group", "Travel time and mismatched content"],
          ["Local private tutor", "Sometimes", "One to one, in person locally", "Recent syllabus experience varies"],
          ["Self-study", "Through public papers only", "Alone", "No expert review of writing"],
          ["Online specialist", "Yes, by specification", "One to one, live", "Needs reliable internet"],
        ],
      },
      bullets: [
        "City coaching serves board and entrance exams, not IB or IGCSE",
        "Look for recent, exact-syllabus teaching experience",
        "Self-study lacks a second reader for written work",
        "Online help fits alongside any other route",
      ],
    },
    {
      heading: "Ganeshotsav, monsoon, sugarcane season and the board calendar in Vita",
      paragraphs: [
        "The year in Vita runs to a Maharashtra rhythm. Summer is hot and dry in this part of Sangli district, which sits in a drier belt than the western hills, and exam preparation through April and May is done indoors. When the monsoon arrives it is comparatively light, so heavy rain is less likely to interrupt lessons than in the coastal region.",
        "Ganeshotsav in August or September is the biggest interruption. Households host or visit Ganpati, streets fill with processions and evenings are taken up by family visits. Rather than fight it, tutors and families agree a lighter week or a shifted slot in advance. Diwali produces a similar pause, and it doubles as a good time for a longer revision block.",
        "The sugarcane crushing season, running roughly from November through March, keeps many agricultural households busy at odd hours. Some students help at home, and parents are often away. A fixed lesson time that is agreed before the season begins is far more reliable than an arrangement made week to week.",
        "For students sitting IB or Cambridge papers, the exam window is May and June for both boards, with an October-November series for Cambridge and a November session for some IB schools. Maharashtra board students sit their exams in February and March, so a child moving between systems needs a timetable that does not clash.",
      ],
      table: {
        caption: "The Vita academic and festival calendar, and what it means for lessons",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["March-June", "Hot dry weather, board exams end, IB and Cambridge May papers", "Morning or evening lessons; focused revision"],
          ["July-September", "Light monsoon, Ganeshotsav", "Steady lessons, lighter week around the festival"],
          ["October-November", "Diwali, Cambridge October-November series, sugarcane crushing begins", "Holiday intensives; agree fixed times early"],
          ["December-February", "Crushing season continues, winter mocks", "Good stretch for internal assessments"],
        ],
      },
      bullets: [
        "Summer is hot and dry; use cooler hours",
        "Ganeshotsav week is best kept light",
        "Sugarcane season needs pre-agreed slots",
        "Board calendars differ from IB and Cambridge windows",
      ],
    },
    {
      heading: "Higher education from Vita: where IB and IGCSE students go",
      paragraphs: [
        "Nearby options are strong. Shivaji University in Kolhapur, Walchand College of Engineering in Sangli, Bharati Vidyapeeth's Sangli institutions and the wide network of Pune colleges cover engineering, science, commerce and the arts. An IB or IGCSE student can apply to these through AIU equivalence and, where required, through the standard entrance route.",
        "For engineering and medicine, eligibility for JEE Main or NEET-UG rests on studying the right combination of physics, chemistry, mathematics or biology. Students on an international programme need to plan those choices early, and should not assume the IB syllabus alone prepares them for the entrance format, which usually needs separate practice.",
        "Maharashtra also has its own state entrance, the MHT-CET, and state quotas that depend on the board a student studied. Families should check the current eligibility rules for international-board candidates well before Class 12, since these details change.",
        "Abroad, the route involves predicted grades, UCAS for Britain and the Common App for the United States. We do not offer admission counselling. Our tutors work on subject depth, predicted grades and exam technique for the course your child has chosen.",
      ],
      bullets: [
        "Kolhapur, Sangli and Pune colleges are the usual first choices",
        "AIU equivalence helps Indian applications; check eligibility rules early",
        "MHT-CET and state quotas depend on the board studied",
        "We coach the subject, not the application process",
      ],
    },
    {
      heading: "IB Maths AA and AI and the sciences, explained for Vita students",
      paragraphs: [
        "AA and AI are not a ranking. AA gives more algebra, calculus and proof and suits engineering and physical science. AI uses statistics, modelling and technology and suits economics, business, social science or medicine. Pick the route that matches your child's likely course, and check with the target university.",
        "Board-trained students are usually quick with routine questions. The hard part is the open Paper 3 problem at HL, where nobody tells you which technique to use. We train students to read the question, test a simple case and write a clear conclusion.",
        "Internal assessment in Physics, Chemistry and Biology needs a research question that can be investigated with school equipment, a careful method and a genuine evaluation. A tutor asks the student to defend every choice, and the student writes the report.",
        "Biology answers depend on command terms. Describe, explain, evaluate and discuss carry different expectations, and a few timed practice rounds with feedback usually lift results more than extra reading.",
      ],
      bullets: [
        "AA for calculus and proof; AI for statistics and modelling",
        "Paper 3 rewards trying simple cases before choosing a method",
        "Internal assessments need a defensible, testable question",
        "Command terms shape a good Biology answer",
      ],
    },
    {
      heading: "Should a Vita student take IGCSE Core or Extended?",
      paragraphs: [
        "The tier limits the grade. On Cambridge IGCSE Mathematics and the sciences, Core stops at grade C and Extended reaches the top. A student planning IB Higher Level or a strong Class 11 science route should aim for Extended, if the exam centre allows.",
        "Pairing Extended Mathematics with Additional Mathematics is a good preparation for IB Maths AA. It moves calculus and vectors forward and makes the Diploma feel less like a jump.",
        "A private candidate has flexibility. Beginning with Extended content and reassessing halfway through the course is sensible, because a tutor can tell you after a term whether the tier is realistic.",
        "Edexcel candidates face a similar choice between Foundation and Higher tiers. The mathematics overlaps with Cambridge, but the wording differs, so practice should use Edexcel papers.",
      ],
      bullets: [
        "Core stops at grade C; Extended reaches the top grades",
        "Additional Mathematics prepares for IB Maths AA",
        "Reassess the tier after a term of tutoring",
        "Edexcel Higher needs Edexcel past papers",
      ],
    },
    {
      heading: "How do we match a Vita student with a tutor?",
      paragraphs: [
        "The process starts with a message from you. Tell us the programme or board, the subject and level, where your child stands and what concerns you. It can be one topic, an internal assessment, mock exams or a broader question about changing syllabus.",
        "Because a suitable tutor is unlikely to live in Khanapur taluka, we search by teaching record. Who has taught this exact subject recently, with which board, at what level, and in what style? We also consider how the tutor's approach fits the child you describe.",
        "The free trial lesson is the real test. You watch how the tutor explains and listens, and whether your child relaxes enough to admit what confuses them. Afterwards you receive a short written plan and the rate.",
        "If the match is not right, tell us and we will introduce another tutor. There is no contract, and nothing obliges you to continue.",
      ],
      bullets: [
        "One message covers programme, subject, level and concern",
        "We search by recent teaching record, not location",
        "You judge through the trial lesson",
        "A poor match is replaced promptly",
      ],
    },
  ],

  tutorsIntro:
    "Each tutor on the Vita roster teaches somewhere between IB PYP and DP or Cambridge and Edexcel IGCSE, and every lesson is online. Before we suggest a name, we confirm the tutor has taught your child's specific course and level recently.",

  process: [
    { title: "Tell us the brief", description: "Programme or board, subject, level, current grade and the hours that work for a Vita household." },
    { title: "Get matched", description: "A short list of tutors with recent experience in that exact syllabus, each with a reason attached." },
    { title: "Try a free lesson", description: "One live online lesson, at no cost and with no commitment." },
    { title: "Agree the plan", description: "The tutor sets out the first month and how progress will be reported; you confirm the rate in writing." },
    { title: "Build a rhythm", description: "A regular weekly slot, reviewed with you periodically, with a fresh tutor offered if needed." },
  ],

  whyPoints: [
    { title: "Chosen for the exact syllabus", description: "Tutors are picked for the specific subject, level or specification code, not a general claim of covering international boards." },
    { title: "Built for a town with no local option", description: "Vita's schools follow state board or CBSE, so we look nationwide for specialists." },
    { title: "See it before you pay", description: "A free trial lets your child and you judge the tutor first." },
    { title: "Honest about integrity", description: "Guidance on assessed work, yes; writing any part of it, never." },
    { title: "Progress you can follow", description: "A short note after each lesson and a fuller review every few weeks." },
    { title: "No lock-in", description: "No tie to a school or board, no minimum term and an easy change of tutor." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Vita?", answer: "Send us the programme, subject, level and exam session, and we match a tutor with recent experience in that exact course. Your child takes a free online trial. Lessons are live video calls with tutors based in India working on Indian Standard Time, so the choice is not limited to Sangli district or to Maharashtra." },
    { question: "Does a tutor visit homes in Vita?", answer: "No. IB Gram does not send tutors to homes in Vita, and in-person home tuition runs only in Gurugram and parts of Delhi NCR. In Vita we offer online home tuition: a private one-to-one lesson your child takes at home on a laptop, with the tutor on video and sharing a screen to mark papers and work through problems." },
    { question: "Is there an IB or IGCSE school in Vita?", answer: "We cannot confirm one. Schools in Vita and Khanapur taluka follow the Maharashtra State Board or CBSE. The nearest international-curriculum options we know of are at Atigre, in Belagavi and in the Pune region. Families here usually support a boarder, prepare a private candidate or continue a syllabus after a return from abroad." },
    { question: "What does tuition cost in Vita?", answer: "We do not publish prices, because the rate depends on programme, subject, level, lesson length and how recently the tutor taught the exact syllabus. You receive a quote in writing before booking. Your address does not change it, so a Vita family pays the same as anyone for the same tutor, and the first trial lesson is free." },
    { question: "Can my child sit IGCSE as a private candidate from Vita?", answer: "In many cases, yes, but it depends on finding an exam centre that accepts private entries for the subject and series, which the family must arrange with the centre and the board. What we provide is teaching: a tutor who knows the Cambridge or Edexcel specification, sets timed papers and marks the practical-skills components too." },
    { question: "Will online lessons work with power cuts and mobile data?", answer: "Generally, with some planning. A wired broadband line or a second SIM as backup is worthwhile. If a connection fails, tutors can move the lesson or send recorded explanations and notes. Talk to us about the times when supply is least reliable in your area, and we will schedule lessons outside them where possible." },
    { question: "Can a tutor write my child's Internal Assessment?", answer: "No. Our tutors coach, and do not write or rewrite Internal Assessments, Extended Essays, TOK essays or any other coursework. They can help a student choose a workable question, explain what a criterion means, challenge a method and comment on a draft the student wrote. The work remains the student's own." },
    { question: "Which IB subjects do you cover for Vita students?", answer: "Nearly every major subject: Mathematics AA and AI at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History, Marathi or Hindi where the school supports them, and TOK. Tell us the subject and level and we propose a tutor who has taught that course in the current syllabus." },
    { question: "Do you teach MYP and PYP too?", answer: "Yes, across the continuum. For PYP the emphasis is reading, number work and confidence with inquiry. For MYP it is criteria-based writing, sciences, mathematics and support for the Personal Project. Younger students get shorter lessons and more frequent notes to parents, and a tutor chosen partly for patience." },
    { question: "Which IGCSE boards do you handle?", answer: "Cambridge International and Pearson Edexcel. The content overlaps, but exam style differs, so we match by specification code, such as Cambridge 0580 or Edexcel 4MA1. If your child is moving from one board to the other, tell us early, because the tutor will need to work from the new board's past papers." },
    { question: "When is the right time to begin?", answer: "Ideally at the start of the course, Class 9 for IGCSE or Class 11 for the Diploma, so weak foundations are repaired before internal deadlines. Starting later still helps, and a short pre-exam block can be worthwhile. In every case the first step is a free trial lesson where the tutor learns where your child is." },
    { question: "How do you check tutors?", answer: "We look at qualifications, how recently the tutor taught the specific subject and level, and how they guide assessed work without writing it. The trial lesson is the final test: you see the tutor teach real content, and if the style does not suit your child, we introduce another without asking you to justify the request." },
    { question: "How do you plan around Ganeshotsav and the sugarcane season?", answer: "We ask at the start and build it into the timetable. Families usually choose weekday evenings or weekend mornings, keep the Ganeshotsav week light and agree fixed times before the crushing season begins. A written plan shows which lessons move and when they resume, so nobody is surprised mid-term." },
    { question: "Is it wise to move from the Maharashtra board to IGCSE?", answer: "It can be, ideally before Class 9 and with clear plans for exams and later study. The main adjustment is coursework and open questions, not content. Check how the change affects state entrance eligibility. A tutor can run a diagnostic on your child's current level and tell you how much bridging is needed." },
    { question: "What if my child and the tutor do not click?", answer: "Tell us and we will introduce another tutor promptly. We do not wait for a scheduled review. Rapport matters even more over a screen, so a quick change is part of the service. There is no penalty, and no need to explain at length; a short message is enough for us to act." },
    { question: "Are you linked to any school or to the IB?", answer: "No. IB Gram is independent and has no affiliation, partnership or endorsement arrangement with the International Baccalaureate, Cambridge International, Pearson or any school named here. Schools are mentioned only to show where an international syllabus is taught near Vita. Our tutors are independent teachers in India working on Indian Standard Time." },
    { question: "How do I contact IB Gram?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme or board, subject, level and preferred hours. We reply with a short list of tutors and arrange a free trial. There is no other email address or phone number for this service, so please disregard messages that use a different contact." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tutoring works across Indian cities." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "Where IB Gram's in-person home visits actually operate." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, the core and assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and book a free trial." },
    { label: "IB and IGCSE tutoring in Sangli", href: "/sangli/", description: "The district headquarters, about fifty kilometres from Vita." },
    { label: "IB and IGCSE tutoring in Satara", href: "/satara/", description: "A neighbouring district city with a similar school landscape." },
    { label: "IB and IGCSE tutoring in Uran Islampur", href: "/uran-islampur/", description: "Another Sangli-district town facing the same distances." },
  ],

  closingHeading: "Start a free trial lesson for your Vita student",
  closingBody:
    "Tell us the programme or board, the subject and level, and the hours your household can keep free around school and festivals. We reply with a tutor matched to that course and set up an online trial. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
