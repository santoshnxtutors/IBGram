import type { CitySeoPage } from "../types";

/**
 * /dehri-on-sone/ - IB and IGCSE tutoring page for Dehri-on-Sone, Rohtas, Bihar. No school in
 * Dehri is confirmed to run the IB or a Cambridge/Edexcel IGCSE, so delivery is online one-to-one
 * and the school clusters point honestly to Varanasi, Kolkata and Delhi NCR. Rendered with the
 * shared CountryLanding layout used by /gurgaon/.
 */
export const dehriOnSone: CitySeoPage = {
  slug: "dehri-on-sone",
  countryName: "Dehri-on-Sone",
  countryNameLong: "Dehri-on-Sone, Rohtas, Bihar",
  demonym: "Dehri",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Chhath at the Sone ghats, the May and June heat, and whatever your child's own school or coaching timetable demands",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.9, longitude: 84.18 },
  wikipedia: "https://en.wikipedia.org/wiki/Dehri",
  alternateNames: ["Dehri", "Dehri on Sone", "Dehri Rohtas", "Dalmianagar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Dehri-on-Sone | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE home tuition for Dehri-on-Sone students, one tutor per child on live video, planned around Chhath and the summer heat, free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Dehri-on-Sone",
  heroEyebrow: "DEHRI-ON-SONE: IB & IGCSE PRIVATE TUITION FROM HOME",
  heroSubtitle:
    "Looking for home tuition in Dehri-on-Sone for the IB or IGCSE? Tutors here do not knock on your door; each lesson runs as private one-to-one tuition at home, delivered over live video by an India-based tutor who teaches the exact syllabus your child sits, with a written note after every session and a free trial to begin.",
  primaryKeyword: "IB and IGCSE tutors in Dehri-on-Sone",
  imageAltText: "A Dehri-on-Sone student at a desk at home working through an IB Maths problem with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Dehri-on-Sone",
    "IGCSE tutor Dehri-on-Sone",
    "IB home tuition Dehri-on-Sone",
    "IGCSE home tuition Dehri-on-Sone",
    "IB private tuition Dehri-on-Sone",
    "IB Maths tutor Dehri-on-Sone",
    "IGCSE Maths tutor Dehri-on-Sone",
    "IB Physics tutor Dehri",
    "IB Chemistry tutor Dehri",
    "IB Biology tutor Dehri",
    "IB DP tutor Dehri-on-Sone",
    "IB MYP tutor Dehri-on-Sone",
    "IB PYP tutor Dehri-on-Sone",
    "IGCSE online tuition Dehri-on-Sone",
    "IB tutor Dalmianagar",
    "IB tutor Rohtas Bihar",
    "IGCSE tutor Dehri Rohtas",
    "online IB classes Dehri",
    "international curriculum tuition Rohtas",
  ],

  heroTrustPoints: [
    "Tutors based in India, teaching in IST, so a Dehri evening never clashes with a foreign time zone",
    "Free trial lesson before any commitment, with rates quoted in writing first",
    "A short written note after each session for parents",
    "A tutor change if the fit is wrong, no awkward conversation needed",
    "Coaching only: tutors never write IAs, Extended Essays or TOK essays",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as your child's school day" },
    { value: "PYP to DP", label: "Every IB stage, plus IGCSE" },
    { value: "Free trial", label: "Before you commit to anything" },
    { value: "May & Nov", label: "Exam sessions we plan backwards from" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Dehri-on-Sone for families who cannot find a local classroom",
    paragraphs: [
      "Dehri-on-Sone sits on the Sone river and the Grand Trunk Road in Rohtas district, and it has never really been a town where international curricula were taught in classrooms. Bihar Board and CBSE schools fill the map, alongside a large tuition market built around Patna, Varanasi and Kota style entrance preparation. Yet a small number of Dehri families keep asking about the IB and IGCSE, and the reasons are practical rather than fashionable. IB and IGCSE tutors in Dehri-on-Sone are usually sought after a parent has looked at a child's prospects abroad, or at a relative already working overseas, and realised the school on the next lane cannot help.",
      "IB Gram exists for exactly that gap. Tutors are based in India, teach in Indian Standard Time and work one to one with a single student at a time, so the pace is set by what your child does not yet understand rather than by a batch of thirty. Because in-person home visits run only in Gurugram and parts of Delhi NCR, tuition for Dehri students is delivered as online home tuition: your child sits at their own desk, on a laptop, and the tutor appears on screen with a digital whiteboard and past papers.",
      "A trial lesson comes first. You describe the programme, the subject and the week your child dreads, we suggest a tutor with the right subject background, and only after the trial do you see rates in writing. Nothing is priced on this page because a Class 9 IGCSE Chemistry student and a Class 12 IB Higher Level Physics student need very different tutors, and the honest answer to a price question depends on who that tutor is.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A transdisciplinary primary curriculum where children investigate themes through inquiry, with reading, number sense and writing built into each unit rather than taught in silos.",
      countryNote:
        "PYP tuition in Dehri is uncommon and usually begins when a family plans to move a child to a metro IB school; a tutor smooths the switch from rote-heavy Hindi-medium or CBSE primary work.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of concept-based learning across eight subject groups, with criterion-referenced assessment and a personal project at the end.",
      countryNote:
        "For Dehri students the MYP question is normally about transition: how to write a criterion-based answer after years of writing for a Bihar Board mark scheme.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Higher or Standard Level plus Theory of Knowledge, the Extended Essay and CAS, examined in May or November.",
      countryNote:
        "The DP is where Dehri interest peaks, from students who will complete it at a boarding school elsewhere and want home support over long holidays.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pathway pairing two or more DP courses with a career-related study, a reflective project and language development.",
      countryNote:
        "Rarely asked about from Dehri, but families with a business or vocational direction sometimes want the DP courses inside it explained properly.",
    },
  ],
  programmesIntro:
    "Whichever stage your child is at, a tutor explains the programme's own vocabulary first, because IB command terms and criteria trip up students long before the content does.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Algebra, functions, calculus and proof for students heading to engineering, physics or economics. Tutors work from the syllabus guide and past papers, not shortcut tricks." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology-supported problem solving, suited to biology, business or social science routes." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through to fields and quantum physics, with practical write-ups and data-based questions that Bihar Board practice never touches." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, kinetics and organic chemistry, with careful attention to how mark schemes reward reasoning." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and physiology with a heavy emphasis on data interpretation and experimental design." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development economics, using diagrams and real-world examples, including India's own agricultural and industrial history." },
    { name: "Business Management", levels: "SL / HL", description: "Useful for students from trading and manufacturing families in Rohtas, since case-study questions reward practical business sense." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming, systems and algorithms, taught with worked examples and code tracing under exam conditions." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis and comparative essays for students whose day-to-day language at home is Hindi or Bhojpuri." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literature analysis or language acquisition in a language that Dehri students speak but rarely study in the analytical style the IB expects." },
    { name: "History", levels: "SL / HL", description: "Source analysis, essay structure and the twentieth-century world topics examined in the IB." },
    { name: "Psychology", levels: "SL / HL", description: "Studies, evaluation and the internal assessment method, taught with an eye on exam-style questions." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on how to think about knowledge questions and prepare the exhibition; tutors never write the essay itself." },
  ],
  subjectsIntro:
    "Subjects are matched to what your child's school or boarding programme offers, and to the universities in view, rather than to what is easiest to staff.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Number, algebra, geometry and statistics, with the Extended tier stretching into functions and trigonometry." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "A step towards A Level Mathematics for students who enjoy calculus early." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, thermal physics, waves and electricity, plus the alternative to practical paper." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Atomic structure, bonding, the mole, organic chemistry and practical skills for the written exam." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Cells, transport, inheritance and ecosystems, with unfamiliar data-response questions." },
    { name: "English as a First / Second Language", levels: "Cambridge 0500 / 0510", description: "Writing for audience and purpose, summary skills, comprehension and spoken component preparation." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, pseudocode, networks and data representation." },
    { name: "Economics", levels: "Cambridge 0455", description: "Basic economic problems, markets and government policy explained with local examples." },
    { name: "Business Studies", levels: "Cambridge 0450", description: "Business activity, marketing, finance and case-study answers." },
    { name: "Hindi as a Second Language", levels: "Cambridge 0549", description: "Reading, writing and speaking for students needing an extra language credit." },
  ],
  igcseSubjectsIntro:
    "IGCSE tuition covers both Cambridge and Pearson Edexcel papers, and a tutor first checks which exam board and tier your child's course actually follows.",

  regionsTitle: "Dehri-on-Sone areas we tutor students in",
  regionsIntro:
    "Tutoring is online, so you can log in from any neighbourhood, but the practical setup varies across Dehri, Dalmianagar and Sonnagar. These notes reflect connectivity, school hours and timings we plan around.",
  regions: [
    { name: "Dalmianagar", note: "The old industrial township beside the Sone, quieter in the evenings; families here often pick late-afternoon slots before power and network dips." },
    { name: "Station Road", note: "The busy commercial spine near Dehri-on-Sone railway station; families here tend to be trading households who prefer weekend blocks." },
    { name: "Dehri Bazar", note: "Dense, market-facing housing where a quiet room can be the real constraint; a headset and a fixed corner make lessons much smoother." },
    { name: "Indrapuri", note: "Beside the Sone barrage and canal system, with a more residential feel and steady evening study routines." },
    { name: "Sonnagar", note: "A separate town in Rohtas along the same railway line, with government-job families and predictable school timings." },
    { name: "Grand Trunk Road frontage", note: "Households on the NH19 stretch deal with truck noise; earlier lessons before rush-hour traffic builds up usually work best." },
    { name: "Sone canal-side neighbourhoods", note: "Older housing near the canal network, where families combine school with coaching and want a compact weekly plan." },
    { name: "Sasaram Road side", note: "Students who travel towards Sasaram for coaching or school pick slots that avoid that daily journey." },
  ],

  schoolClusters: [
    {
      city: "Dehri-on-Sone and Rohtas",
      note: "We could not confirm a school in Dehri or the wider Rohtas district running the IB or a Cambridge or Edexcel IGCSE programme. Local schools are Bihar Board, CBSE and a few ICSE options, which is why online tutoring carries the international-curriculum load here.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi",
      note: "About 120 kilometres along the Grand Trunk Road, Varanasi is the closest city with an international-curriculum school that families from Rohtas consider.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Reached by the Howrah line that passes Dehri, Kolkata has long-established IB schools and is a common boarding choice for Bihar families.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Some families aim for a boarding place in Delhi NCR, where schools offering the IB and IGCSE are more numerous; tutoring at home covers the long summer break.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "This page names schools in other cities only as places Dehri families commonly consider. IB Gram is an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any school, and a school's inclusion is not an endorsement or a claim that it partners with us.",

  modesIntro:
    "In-person home visits exist only in Gurugram and parts of Delhi NCR. For Dehri-on-Sone every format is online, and these are the three ways families use it.",
  modes: [
    {
      title: "Online home tuition, one to one",
      description: "The main format: a live private lesson at your child's own desk, with the tutor on screen and past papers shared digitally.",
      bullets: ["One tutor, one student", "Weekly rhythm agreed at the trial", "Written note after each session"],
    },
    {
      title: "Short exam-window intensives",
      description: "Concentrated blocks before the May or November sessions, when a student needs a structured run through a paper's hardest topics.",
      bullets: ["Two to four weeks", "Past-paper analysis", "Mark scheme practice"],
    },
    {
      title: "Holiday transition tutoring",
      description: "For students moving into an IB or IGCSE programme elsewhere, using the long summer or winter break at home in Dehri to close syllabus gaps.",
      bullets: ["Gap diagnosis first", "Command terms and criteria", "Aligned with the new school's syllabus"],
    },
  ],

  sections: [
    {
      heading: "Why do families in Dehri-on-Sone ask about the IB and IGCSE at all?",
      paragraphs: [
        "The short answer is that Dehri families have more outward connections than the town's size suggests. The Grand Trunk Road and the Grand Chord railway have moved people to Kolkata, Delhi, Mumbai and the Gulf for generations, and the descendants of Rohtas Industries employees, cement and stone-chip traders, railway staff and doctors now include many who work abroad. When those relatives suggest that a child study an internationally recognised course, the parents back home want to understand it before spending money.",
        "The second reason is a move. A child may join a boarding school in Kolkata, Dehradun or Delhi NCR for Class 9 or Class 11, and that school may teach the IB Diploma or the IGCSE. The student arrives from a Bihar Board or CBSE background, and the first term can be rough because internal assessments, command terms and extended written answers are all unfamiliar. Home tutoring over the previous summer changes that first term considerably.",
        "The third reason is simply a wish to keep options open. A student who is strong in mathematics and considering engineering or economics abroad may want IB Mathematics rigour whether or not a local school offers it. Others follow the IGCSE route through a school elsewhere and study with us at home during holidays and weekends.",
        "None of these families needs a hard sell. They need someone to explain what the IB and IGCSE are, tell them honestly whether online tutoring will help their child, and let them see a real lesson before they pay anything at all.",
      ],
    },
    {
      heading: "How do Bihar Board, CBSE and ICSE compare with IB and IGCSE for a Dehri student?",
      paragraphs: [
        "A Dehri student on Bihar Board or CBSE is used to a syllabus that rewards recall of textbook content and a final board exam that carries most of the weight. IB and IGCSE ask different things: reasoning shown in steps, applied questions on unseen data, and in the IB a portfolio of internal assessment over two years. Neither is objectively harder, but the skills differ, and that difference is what tuition addresses.",
        "The table below sets out how the boards differ in ways that matter to a family deciding whether to switch, add tutoring, or stay put. It is a general comparison rather than a claim about any particular school.",
        "For students staying at a Dehri school and wanting IB-style rigour, the practical route is usually to strengthen mathematics and science reasoning through tutoring while keeping the board syllabus on track, then move to a full IB or IGCSE school only if the family relocates.",
        "Families often ask whether the IB Diploma is accepted for entrance to Indian universities. The Association of Indian Universities recognises it as equivalent to Class 12 for admission purposes, and IGCSE results are usually treated as Class 10 equivalents, with A Level or a Class 12 board pass needed for the senior stage.",
      ],
      table: {
        caption: "Board comparison for a Dehri student",
        columns: ["Feature", "Bihar Board / CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Typical exam style", "Board paper, mostly recall and standard problems", "Extended answers, data analysis, essays, internal assessments", "Structured papers, Core or Extended tiers, some coursework options"],
          ["Assessment load", "One main exam at end of Class 10 and 12", "May or November exams plus internal assessments, Extended Essay, TOK", "May-June or October-November exams at end of Class 10"],
          ["Language of instruction", "Hindi or English", "English, with a second language required", "English, with language options"],
          ["Route to Indian entrance exams", "Direct for JEE, NEET and CUET-UG", "Possible, needs equivalence checks and subject mapping", "Follows into A Level or Class 11-12"],
          ["Availability near Dehri", "Widely available", "No local school confirmed", "No local school confirmed"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Dehri-on-Sone and what shapes the rate?",
      paragraphs: [
        "No prices are printed on this page, and that is deliberate. Rates depend on things that can only be judged once a tutor meets a student, and quoting a single figure would mislead more families than it would help. You will always get a written quote before booking, after the free trial, so nothing surprises you.",
        "The biggest factor is the subject and level. A Higher Level IB Physics or Mathematics AA tutor with several years of examining or teaching experience is a different resource from a tutor helping with Class 7 MYP Sciences. The second factor is frequency: two shorter sessions a week usually cost differently from a single long one, and intensive exam windows differ again.",
        "Compared with Dehri's own tuition market, which is mostly priced for group batches for Bihar Board and entrance preparation, one-to-one international-curriculum tuition costs more per hour but replaces a much larger amount of wasted time, since the tutor never needs to go back over what the rest of a batch already knows.",
        "There are no travel costs, because there is no travel. A student in Dehri saves the road time to Sasaram or Varanasi that some families used to spend on weekly classes, and that time goes into actual study.",
        "If the budget is tight, tell us at the start. A tutor can concentrate on the two or three topics that matter most before a mock rather than covering everything, and we will say honestly when fewer sessions will do.",
      ],
    },
    {
      heading: "Is online home tuition better than coaching centres, private tutors or self-study in Dehri?",
      paragraphs: [
        "It depends on what your child needs. Dehri has coaching centres for Bihar Board, JEE and NEET preparation, and some of them do very good work for those exams. None is set up for the IB or IGCSE, so a student who walks into a batch class gets the wrong syllabus, the wrong mark scheme and a room full of students preparing for a different exam.",
        "Local private tutors are a real alternative for younger children. The limit is that a local tutor rarely knows how an IB Maths paper is marked or what an IGCSE Physics examiner expects from a six-mark answer, so the tutor is learning while teaching.",
        "Self-study with past papers works for disciplined students, especially in Mathematics, but without feedback errors repeat. Students read a mark scheme and think they understand it, then lose the same marks in the next paper.",
        "Online home tuition sits between these options. A tutor trained on the specific syllabus corrects your child's actual work, and the lesson happens at home, so there is no commute and family routines stay intact. The main requirement is reliable internet, which we cover in the FAQ.",
      ],
      table: {
        caption: "Ways to study for the IB or IGCSE from Dehri-on-Sone",
        columns: ["Option", "Syllabus knowledge", "Personal attention", "Practical demands"],
        rows: [
          ["Online home tuition (IB Gram)", "Specific to IB and IGCSE papers", "One tutor to one student", "Laptop, headset, stable internet"],
          ["Local coaching centre", "Bihar Board, JEE and NEET focus", "Batch of many students", "Daily travel and fixed timings"],
          ["Local private tutor", "Usually school-board syllabus", "One to one, depends on tutor", "Often at your home, subject knowledge varies"],
          ["Self-study", "Whatever the student finds", "None, unless a parent reviews", "Discipline and access to past papers"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do Chhath, the heat and the Sone floods affect study time?",
      paragraphs: [
        "IB Diploma written exams run in May for most schools in India and in November for some, and Cambridge IGCSE has May-June and October-November sessions. A Dehri student who joins a programme should confirm the exact session with the school, then work backwards. That backwards plan is the most useful thing a tutor produces in the first fortnight.",
        "Local rhythms matter more than most planners admit. Chhath is the biggest event of Dehri's calendar, with families going to the Sone and canal ghats, and most children lose several days around it. A tutor who knows this does not schedule a heavy topic just before Chhath and plans a light revision that week.",
        "Summer in Rohtas is hard: May and June temperatures can be very high, and power supply and internet reliability are worth planning for. Families should choose early-morning or late-evening slots in those months and keep a phone hotspot ready.",
        "Monsoon flooding on the Sone is a further consideration in some seasons, so a fallback slot each week helps. Diwali, Durga Puja and Holi complete the calendar, and the table sets them beside the exam cycle.",
      ],
      table: {
        caption: "A Dehri-on-Sone study calendar against exam sessions",
        columns: ["Period", "Local factor", "Exam context", "How tutoring adapts"],
        rows: [
          ["January to March", "Cool and settled, best months for long lessons", "Mocks and internal assessment deadlines", "Heaviest topic work and full past papers"],
          ["April to June", "Heat builds, power cuts more likely", "IB May session and IGCSE May-June session", "Early or late slots, short focused revision"],
          ["July to September", "Monsoon, Sone in spate some years", "New academic year, syllabus start", "Foundations, gap diagnosis, transition work"],
          ["October to November", "Durga Puja, Diwali and then Chhath", "IGCSE and IB November sessions", "Light weeks around festivals, full mocks between"],
          ["December", "Winter fog and school break", "Results planning and holiday catch-up", "Intensive catch-up blocks at home"],
        ],
      },
    },
    {
      heading: "How are IB Maths AA and AI, and the sciences, taught to Dehri students?",
      paragraphs: [
        "Students in Dehri often arrive with real strength in mathematics, since so much local coaching culture is built around it. The IB does not reward that strength automatically. Mathematics Analysis and Approaches expects students to justify each step, use a graphing calculator fluently in Papers 2 and 3, and explain results in context, and those are habits a tutor trains deliberately.",
        "Applications and Interpretation suits students who enjoy modelling. The tutor works with technology from the first lesson: regression, statistical tests, financial functions and simulations. We normally recommend AI to students aiming for economics, psychology, geography or biology, and AA for engineering, physics and computer science.",
        "In Physics, Chemistry and Biology the same pattern holds. Bihar Board practical work tends to be recorded rather than designed, whereas the IB internal assessment asks the student to design and evaluate an investigation. Tutors coach the method, and the student does the actual work.",
        "Data-based questions are the other skill gap. A Physics tutor will hand a Dehri student an unfamiliar graph and ask what it shows, then push the answer into a proper explanation. Ten such questions a week do more than another chapter of theory.",
        "Higher Level courses demand extra topics and depth, and a tutor will say honestly when a subject choice looks too heavy for a student's other commitments.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Dehri student choose?",
      paragraphs: [
        "Core and Extended tiers cover the same subject at different depth. Core papers cap the highest grade a student can reach, while Extended papers open every grade but ask for more algebra, more precision and more independent reasoning. A student who is comfortable with Class 9 mathematics from Bihar Board or CBSE is usually ready for Extended.",
        "Subject choice at IGCSE is broader than in the IB. A student typically takes English, Mathematics, a language, and a mix of sciences and humanities. We advise Dehri families to choose subjects with the next stage in mind: Physics, Chemistry and Mathematics for engineering, Biology and Chemistry for medicine, Economics and Business for commerce.",
        "Cambridge and Pearson Edexcel differ in paper structure and command words, so a tutor confirms the board first. Edexcel International GCSE often has more predictable question formats, while Cambridge has a wide range of options and the alternative-to-practical paper.",
        "IGCSE students in Dehri are usually studying through a school elsewhere or as private candidates, so a tutor also asks about exam centre logistics. Private candidates should ask early about which centres accept them and when registration closes.",
      ],
    },
    {
      heading: "What university and career paths open from Dehri-on-Sone with the IB or IGCSE?",
      paragraphs: [
        "A student from Rohtas with an IB Diploma can pursue both Indian and overseas routes. Many Indian universities accept the IB through AIU equivalence, and CUET-UG is the route into central universities such as BHU and Delhi University. For JEE Main and Advanced, students need to check the minimum Class 12 equivalent marks, and for NEET the subject combination Physics, Chemistry and Biology with English must appear in the qualification.",
        "Bihar's own institutions, including NIT Patna and IIT Patna, attract engineering aspirants from Rohtas, and those students should verify how the IB or IGCSE-then-A-Level route is treated in the counselling rules. Rules change, so the family should check the current admission brochure before committing to subjects.",
        "For overseas study, IB scores are read directly by universities in the UK, USA, Canada, Australia and Europe. A Dehri student's application, however, benefits from evidence of initiative beyond marks, and CAS and the Extended Essay give that evidence.",
        "Tutors do not run college counselling, but they will tell you frankly which subject combinations keep doors open, and whether Higher Level Mathematics is worth the workload for a student leaning toward humanities.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Write on WhatsApp or email with your child's class, the programme and the subject that worries you most." },
    { title: "Tell us the syllabus", description: "We confirm the board, tier, exam session and whether the school is elsewhere or the student studies privately." },
    { title: "Meet a matched tutor", description: "You receive a suggested tutor with relevant subject background, and a free trial lesson is arranged at a time that suits your evenings." },
    { title: "Receive rates in writing", description: "After the trial you see a written quote and a suggested weekly schedule, with nothing pre-booked." },
    { title: "Learn with regular notes", description: "Sessions start; a short written note follows each one, and a tutor change is available if the fit feels wrong." },
  ],

  whyPoints: [
    { title: "Built for the exam your child actually sits", description: "Tutors work from IB and IGCSE syllabus guides and mark schemes, not from a general school-board approach." },
    { title: "Honest about online delivery", description: "We do not pretend tutors visit Dehri. Sessions are live and one to one, and we say so plainly." },
    { title: "Indian Standard Time", description: "Tutors are based in India, so evening lessons after school or coaching stay simple." },
    { title: "Transparent rates", description: "A written quote after the trial and before any booking, and no hidden charges." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and correct. They never write IAs, Extended Essays, TOK essays or coursework." },
    { title: "Flexibility around local life", description: "Chhath, the heat and exam periods are built into the plan rather than treated as interruptions." },
  ],

  tutorsIntro:
    "Every tutor teaches live from India, so a Dehri evening lines up with their working day. Profiles show subject specialism and programme experience; the trial lesson helps you judge fit before any commitment.",

  faqs: [
    { question: "Do IB and IGCSE tutors visit homes in Dehri-on-Sone?", answer: "No, tutors do not visit homes in Dehri-on-Sone. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For Dehri, every lesson is online one-to-one tuition that the student takes at home on a laptop, with the tutor on live video, a shared whiteboard and digital past papers. Many families find this works as well as a visit because the tutor can share work instantly." },
    { question: "Is there any IB or IGCSE school in Dehri-on-Sone?", answer: "We could not confirm any school in Dehri-on-Sone or Rohtas running the IB or a Cambridge or Edexcel IGCSE programme. Local schools follow Bihar Board, CBSE or ICSE. Families who want an international classroom usually look at Varanasi, Kolkata, Patna or Delhi NCR, and tutoring at home supports either the move or a private-candidate route." },
    { question: "What does IB tuition cost in Dehri-on-Sone?", answer: "There is no fixed public price because the rate depends on subject, level, tutor experience and how many sessions a week you want. A free trial lesson comes first, then a written quote before you book. If a budget limit exists, tell us and the tutor can prioritise the topics that will matter most before the next exam." },
    { question: "Can my child study IGCSE as a private candidate from Dehri?", answer: "Often yes, but it depends on finding an exam centre that accepts private candidates and on registration deadlines. Ask a centre in Patna, Kolkata or Delhi early about fees and practical exams. IB Gram does not run exams; tutors prepare the student for them, and we will help you think through the timeline." },
    { question: "Which IB subjects are most in demand from Rohtas families?", answer: "Mathematics, Physics, Chemistry and Biology lead the enquiries, followed by Economics and Business Management. That mirrors the local interest in engineering, medicine and family business. English and Hindi support comes up often too, particularly for students whose home language is Hindi or Bhojpuri and who find extended analytical writing new." },
    { question: "Will slow internet or power cuts ruin online lessons?", answer: "They can interrupt them, but there are simple precautions. Keep a mobile hotspot as a backup, use a laptop with a full battery, and choose slots outside the hottest hours when load-shedding is likelier. If a lesson is cut short by a genuine outage, we reschedule rather than penalise the family." },
    { question: "Does IB Gram help with Internal Assessments and Extended Essays?", answer: "Tutors coach; they never write IAs, Extended Essays, TOK essays or coursework. A tutor can explain the criteria, help a student choose a workable research question, review a plan and give feedback on a draft, but the work and the words belong to the student, which is also what the IB requires." },
    { question: "Is the IB Diploma valid for admission to Indian universities?", answer: "Generally yes. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12 for admission, and CUET-UG is the usual route to central universities. Some courses have additional subject requirements, such as Physics, Chemistry and Mathematics for engineering, so check the admission rules of the specific institute before choosing subjects." },
    { question: "Can my child take NEET or JEE after IB or IGCSE?", answer: "It is possible, but eligibility depends on subjects and marks. NEET needs Physics, Chemistry, Biology and English at the senior stage, and JEE has its own minimum requirements for Class 12 equivalents. IGCSE alone is a Class 10 level qualification, so students need the senior stage too. Verify current rules with the exam authority before selecting subjects." },
    { question: "How old should a child be to start IB or IGCSE tutoring?", answer: "There is no single age. PYP tutoring can suit children from about seven or eight who need reading and number confidence, MYP and IGCSE usually start from Class 6 to 9, and DP from Class 11. Starting early helps most in mathematics and English, where confidence builds slowly over years rather than weeks." },
    { question: "How is a trial lesson organised for a Dehri student?", answer: "You message us with the class, programme and subject, and we suggest a tutor with matching experience. The trial is a real lesson, not a sales call, and it runs at a time that suits the family, typically in the evening. Afterward you receive a note on what was covered and what the tutor would work on next." },
    { question: "What happens if my child does not get along with the tutor?", answer: "You can ask for a change and we will match a different tutor without fuss. Fit matters as much as subject knowledge, particularly for a shy or anxious student. Tell us what felt wrong, whether pace, style or timing, so the next match is better chosen." },
    { question: "How do Chhath and the summer heat affect lesson timing?", answer: "Both are planned for. Chhath takes several days out of the calendar, so we avoid heavy new topics right before it and use the week for light revision. In May and June we prefer early-morning or late-evening slots when the temperature and power supply are more manageable." },
    { question: "Which IGCSE boards do tutors cover?", answer: "Tutors cover Cambridge International IGCSE and Pearson Edexcel International GCSE, with A Level or AS Level support as context. The first task is to confirm the board and subject code, because papers, command words and tiers differ. A student preparing the wrong board's past papers loses time." },
    { question: "How do I begin?", answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, the programme and the subject that needs work. We will suggest a tutor and arrange a free trial. Nothing is booked until you have seen the trial and the written rates." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The full IB and IGCSE tutoring service, tutors and subject range." },
    { label: "India city pages", href: "/india/", description: "Every Indian city where IB Gram offers online tuition." },
    { label: "Gurugram in-person tuition", href: "/gurgaon/", description: "The one place where in-person home tuition is offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse tutors by IB subject and level." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects and boards." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured and examined." },
    { label: "IB Mathematics course", href: "/courses/ib/mathematics/", description: "AA and AI course detail for Mathematics." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a trial lesson." },
    { label: "Patna", href: "/patna/", description: "Bihar's capital and its school options." },
    { label: "Varanasi", href: "/varanasi/", description: "The nearest large city along the Grand Trunk Road." },
    { label: "Sasaram", href: "/sasaram/", description: "Rohtas district's neighbouring town." },
    { label: "Gaya", href: "/gaya/", description: "Another south Bihar city on the same line." },
  ],

  closingHeading: "Start with one trial lesson from home in Dehri-on-Sone",
  closingBody:
    "If you have been searching for IB and IGCSE tutors in Dehri-on-Sone, the quickest step is a message. Tell us the class, the programme and the subject, and we will suggest a tutor for a free trial. Rates arrive in writing after the trial, and a change of tutor is always possible. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
