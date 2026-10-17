import type { CitySeoPage } from "../types";

/**
 * /bettiah/ - IB and IGCSE tutoring page for Bettiah (West Champaran), Bihar. Tuition here is online
 * only: in-person visits exist only in Gurugram and parts of Delhi NCR. No IB or Cambridge/Edexcel
 * campus could be confirmed in West Champaran, so stripSchools is empty and the school clusters point
 * honestly to Kolkata and Delhi NCR, reusing school names already verified on other published city pages.
 */
export const bettiah: CitySeoPage = {
  slug: "bettiah",
  countryName: "Bettiah",
  countryNameLong: "Bettiah, Bihar",
  demonym: "Bettiah",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are planned around the Bihar Board calendar, the Chhath and Durga Puja breaks, the June heat and the Gandak flood season when power can be patchy",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.8, longitude: 84.5 },
  wikipedia: "https://en.wikipedia.org/wiki/Bettiah",
  alternateNames: ["Bettia", "West Champaran"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Bettiah | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors in Bettiah, West Champaran: live one-to-one online private tuition for MYP, DP and Cambridge students, plus a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Bettiah",
  heroEyebrow: "ONLINE IB & IGCSE PRIVATE TUITION FROM HOME IN BETTIAH",
  heroSubtitle:
    "Families in West Champaran who search for private home tuition for an international syllabus find that nobody nearby teaches it. IB and IGCSE tutors in Bettiah are therefore matched online: a subject specialist teaches your child one-to-one on video, at home, using the exact IB guide or Cambridge syllabus code, at hours that suit a Bihar household.",
  primaryKeyword: "IB and IGCSE tutors in Bettiah",
  imageAltText: "Bettiah student solving an IB Maths problem on a shared screen with an online tutor",
  secondaryKeywords: [
    "IB tutor Bettiah",
    "IGCSE tutor Bettiah",
    "IB home tuition Bettiah",
    "IGCSE home tuition Bettiah",
    "IB private tuition Bettiah",
    "IB Maths tutor Bettiah",
    "IGCSE Maths tutor Bettiah",
    "IB Physics tutor Bettiah",
    "IB Chemistry tutor Bettiah",
    "IB Biology tutor Bettiah",
    "IB DP tutor Bettiah",
    "IB MYP tutor Bettiah",
    "IB PYP tutor Bettiah",
    "IGCSE online tuition Bettiah",
    "Cambridge IGCSE tutor West Champaran",
    "IB tutor Bettiah Bihar",
    "online IB tutor Narkatiaganj",
    "IGCSE tutor Motihari",
    "IB tutor Bettia",
    "Edexcel IGCSE tutor Bettiah",
  ],

  heroTrustPoints: [
    "Every lesson is live, one-to-one and online, so the tutor is chosen for the syllabus and not for the distance from your house",
    "No tutor visits homes in Bettiah; home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson on a real topic comes before any commitment",
    "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school it mentions",
  ],
  heroStats: [
    { value: "Online only", label: "Live tutoring for West Champaran" },
    { value: "PYP to DP", label: "Every IB stage covered" },
    { value: "IST", label: "Tutor and student on the same clock" },
    { value: "Free trial", label: "One lesson before you decide" },
  ],

  intro: {
    heading: "What an international syllabus looks like from West Champaran",
    paragraphs: [
      "Bettiah is a district headquarters of roughly a lakh and a half people on the Bihar side of the Nepal border, with a medical college, an engineering college, a long-established Christian mission and a strong habit of sending children to Patna, Delhi or Kota for serious preparation. The school landscape is Bihar Board and CBSE. Nobody here runs the IB Diploma, and we could not confirm a Cambridge or Edexcel IGCSE campus either. If your child needs one of those syllabuses, the teaching has to come from outside town.",
      "That is the gap this page is for. IB and IGCSE tutors in Bettiah are, in practice, subject specialists elsewhere in India who log in to a live class at an agreed hour. They may be a former IB examiner, a Cambridge Maths teacher or a graduate who scored a 7 in Physics HL. What matters to your family is that the lesson is private, that it is aimed at your child's paper and that a written note follows it.",
      "Some parents who reach us are searching for home tuition, and we would rather answer that honestly than dodge it. Tutors do not come to your house in Bettiah. What you get is private tuition delivered to your home by laptop or tablet. A quiet table, a stable connection and a charged device are all that is needed on your side.",
      "We are an independent tutoring service. Tutors coach and explain; they do not write Internal Assessments, Extended Essays, TOK essays or any coursework for a student.",
    ],
    bullets: [
      "Full IB continuum support for children studying away or preparing to move",
      "Cambridge and Pearson Edexcel IGCSE matched to the exact paper code",
      "Live private lessons in Indian Standard Time",
      "A short written note after each session",
      "No house calls anywhere in West Champaran",
    ],
  },

  programmesIntro:
    "None of the four IB programmes has a confirmed school in Bettiah, so a child usually meets the IB through a relocation, a boarding place in another state or a deliberate move from Bihar Board to an international route. These are the four stages and what a Bettiah family tends to need at each.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around transdisciplinary units of inquiry and closes with the Exhibition, a self-directed project in the last year. Nothing is externally examined, so tutoring is about confident reading, number sense and helping a child frame questions of their own.",
      countryNote:
        "PYP requests from Bettiah come mostly from families about to relocate for work, who want the child settled in the inquiry style before a new school starts.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are assessed against four criteria each, marked A to D, and the Personal Project rounds off Year 5. Students who did well on rote recall in Bihar Board often need to learn how to justify and evaluate before the criteria reward them.",
      countryNote:
        "A Bettiah student on MYP is normally at a boarding school in another city and studying at home during term breaks, when a gap in Sciences or Individuals and Societies can be closed.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four at Higher Level, with the Extended Essay, Theory of Knowledge and CAS. Internal assessment carries a meaningful share of most subject grades and results follow the May and November sessions.",
      countryNote:
        "With no Diploma school in West Champaran, Bettiah students take it away from home, and tutoring runs over the vacations and alongside the school week.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit beside a career-related study, a reflective project and a personal and professional skills strand. Few Indian schools offer it, though the Diploma subjects inside it need the same rigour as any other student's.",
      countryNote:
        "Requests from Bettiah for CP are rare, and when they come the tutoring targets the Diploma course component rather than the career strand.",
    },
  ],

  subjectsIntro:
    "The label 'IB' tells us little. A DP Physics HL student in the week before mocks needs something very different from a Class 8 child meeting MYP Sciences for the first time, so each match starts from the subject, the level and the next assessment date. Those are the details we ask about first.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Suited to students who enjoy proof, calculus and abstraction. Bihar Board students often have plenty of algebra fluency but less practice in writing a reasoned argument for Paper 3 problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Built around modelling, statistics and technology. Learning the graphic display calculator properly early saves whole minutes per question later." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics and fields carry heavy weight. A common fix is speed with the data booklet and the habit of stating units and assumptions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry is familiar to Indian students; the structured organic reaction pathways and equilibrium calculations are where marks slip." },
    { name: "IB Biology", levels: "HL / SL", description: "Content is broad, so retrieval practice and command-term discipline decide the grade. The internal investigation needs early planning." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams must be drawn accurately and tied to a live example; HL adds quantitative policy questions." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading and structured extended answers matter more than definitions, particularly on Paper 2." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Java or Python programming, computational thinking and, at HL, a case study released before the exam." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Students practise close reading of non-literary texts and literature, then build a comparative oral and written analysis." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A common second-language choice for Bihar families, focused on reading comprehension, writing tasks and the oral component." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies and evidence must be recalled precisely and used in short and extended responses, which suits students who write well." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay structure carry the marks; tutoring drills the paragraph shape examiners reward." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course that pairs neatly with fieldwork-style investigations and data interpretation." },
  ],

  igcseSubjectsIntro:
    "Bettiah has no confirmed IGCSE school, so most demand is from families choosing Cambridge or Edexcel content as a stretch beyond Bihar Board or CBSE, or from a child who will sit the paper privately or at a centre elsewhere. Tutoring follows the specific paper code.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended reaches further into algebra and trigonometry than Bihar Board Class 10, so early sessions rebuild working-out habits that the marks depend on." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A calculus-and-functions course that prepares a student who may later choose Maths AA at Diploma level." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Equation handling and the alternative to practical paper are the two places where preparation usually shifts marks." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic families are taught with exam-style calculations from the first term." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Students learn to answer with the precise term the mark scheme expects, not a general explanation." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, diagrams and two-sided evaluation, using Indian and global examples." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode and Python written and traced by hand, alongside networks and data representation." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary, with timed practice on unseen passages." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, writing and speaking for students who want a Cambridge Hindi qualification." },
  ],

  regionsTitle: "Bettiah and nearby towns we teach online",
  regionsIntro:
    "Sessions run on video, so the list below is about context for scheduling and school catchments and not a service map. Bettiah draws children from a wide rural belt and from several small towns, and evening power and broadband vary between them.",
  regions: [
    { name: "Bettiah town centre", note: "The market and court area near the old Raj precincts, where most professional and trading families live and where broadband is most dependable." },
    { name: "Chuhari mission area", note: "Home to the oldest Catholic mission in the town, with a convent-school tradition and a strong interest in English-medium schooling." },
    { name: "Kumarbagh", note: "A block on the district's eastern side with a growing number of families looking beyond Bihar Board." },
    { name: "Lauriya", note: "A rural-edge locality known for the Ashokan pillar, where many students travel into Bettiah for tuition and appreciate a home-based online option." },
    { name: "Narkatiaganj", note: "A railway junction town north of Bettiah with a good number of transport and sugar-mill families." },
    { name: "Bagaha", note: "A town close to the Valmiki forest belt, where distance from any city makes online teaching particularly practical." },
    { name: "Ramnagar", note: "A quieter block in the Valmiki foothills, with limited local coaching and a reliance on online options." },
    { name: "Motihari", note: "The East Champaran headquarters with a central university, sometimes used as a meeting point by families comparing schools." },
    { name: "Raxaul", note: "The border trading town on the Nepal side, home to business families who often think about international schooling for their children." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE centre in Bettiah or West Champaran, so the strip above shows none. The schools named below are in other cities and are listed only to show where a physical campus exists. IB Gram is independent and is not affiliated with, endorsed by or paid by any of them.",
  schoolClusters: [
    {
      city: "Nearby: Kolkata",
      note: "The closest large eastern city with a long list of IB and Cambridge campuses. Bihar families with boarding or relocation plans usually compare it with Delhi NCR.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Reached by direct train from Bettiah and the destination for many families who leave Bihar for work. IB Gram's in-person home tuition exists here, although not in Bettiah.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A boarding option in the Himalayan foothills with an IB Diploma, chosen by a small number of families from the Gangetic plains.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Every Bettiah arrangement is one format: live video, one tutor, one student. What changes is the rhythm, and you can pick it to match your household.",
  modes: [
    {
      title: "A weekly slot that fits the school day",
      description: "One or two fixed sessions a week, usually in the evening once tuition and school are done. This is where most Bettiah families begin.",
      bullets: [
        "The tutor is chosen from across India, not from those who live near you",
        "Works for PYP, MYP, DP and IGCSE",
        "Past papers are marked together, live",
        "One tutor stays with the student through the term",
      ],
    },
    {
      title: "A weekly slot plus written progress notes",
      description: "The same lessons, with a written summary after each and a review every few weeks so that improvement can be seen on paper.",
      bullets: [
        "A note covers topics done and the homework set",
        "A review conversation with parent and tutor",
        "Helpful for younger students who need a steady pace",
        "Extra slots can be added before mocks",
      ],
    },
    {
      title: "Intensive blocks around holidays",
      description: "A compact block of daily or alternate-day sessions during the Durga Puja, winter or summer break, timed to avoid the days when Bettiah is most affected by floods or heat.",
      bullets: [
        "Timed papers with fast feedback",
        "Good for boarding students home for the vacation",
        "Useful two or three weeks before an exam series",
        "Booked early, since the popular slots in a break go first",
      ],
    },
  ],

  sections: [
    {
      heading: "Which schools and families in Bettiah look at IB and IGCSE?",
      paragraphs: [
        "In Bettiah the answer starts with a short list. Nothing we could verify in West Champaran is authorised for the IB or registered as a Cambridge or Edexcel centre. The town's schools are Bihar Board or CBSE, with convent schools tracing their roots to the mission established here in the eighteenth century and a handful of CBSE campuses of national chains. That is why this page treats tuition as the way in, not a supplement to a local international school.",
        "Four kinds of family reach out. Doctors and government officers who may be transferred to a metro and want their child ready for an international campus. Business families from Raxaul and Bettiah with a plan to send a child abroad after Class 12. Parents who have already chosen a boarding school elsewhere and want holiday support. And ambitious students who want stronger Maths and Sciences than the local timetable delivers.",
        "None of this is a disadvantage for the student. Cambridge sets the same paper for every candidate, and the IB moderates work against a global standard, so a lesson given from another city prepares a Bettiah child on the same terms as anyone else.",
        "What is missing locally is a pool of specialists, for example someone who has just marked an IB Chemistry investigation or taught Cambridge Additional Maths this year. Widening the search to the whole country is what solves that, and it is the reason IB and IGCSE tutors in Bettiah work best as an online arrangement.",
      ],
      table: {
        caption: "Where Bettiah families find confirmed IB or Cambridge campuses",
        columns: ["Place", "What is confirmed", "How it connects to Bettiah"],
        rows: [
          ["Bettiah and West Champaran", "None confirmed for IB, Cambridge or Edexcel", "Bihar Board and CBSE schools only"],
          ["Kolkata", "Several IB and Cambridge schools", "Direct rail and a common boarding or relocation choice"],
          ["Delhi NCR", "A wide range of IB and IGCSE schools", "Direct train links and a large Bihari community"],
          ["Mussoorie", "An IB Diploma boarding school", "Occasional boarding choice for the Gangetic belt"],
        ],
      },
    },
    {
      heading: "How does Bihar Board or CBSE compare with IB and IGCSE?",
      paragraphs: [
        "The three routes differ in what they ask a student to do. Bihar Board Class 10 and 12 reward accurate recall and neat numerical work, and the Class 12 result carries into state and central admissions. CBSE is broader and tied to national entrance exams. IB and IGCSE ask for reasoning and explanation in full sentences, across more papers, with coursework in some subjects.",
        "For a Bettiah family the practical question is often about switching in Class 9 or Class 11. A move to IGCSE in Grade 9 is easier than a move to the IB Diploma in Class 11, because IGCSE is content-heavy in a way that resembles Class 10 more than DP does. Most of the difficulty is in answer style rather than in the topics.",
        "Language is a related point. Students who studied in Hindi medium often need a term of tutoring simply to become comfortable writing scientific explanations in English at length, and this is a place where a private tutor changes the experience considerably.",
        "None of the three is easier. They are simply different exams, and the right one depends on where a family expects the child to study after school.",
      ],
      table: {
        caption: "Bihar Board, CBSE, IGCSE and IB Diploma compared",
        columns: ["Feature", "Bihar Board / CBSE", "Cambridge or Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Typical exam style", "Recall, short and long answers", "Structured questions and extended responses", "Papers plus internal assessment and essay"],
          ["Language of study", "Hindi or English", "English", "English, with a second language"],
          ["Entrance link", "Board marks plus JEE, NEET, CUET", "Feeds A Level or IB", "Overseas and Indian universities via equivalence"],
          ["Assessment breadth", "Mostly final exams", "Final papers, optional coursework", "Six subjects, TOK, Extended Essay, CAS"],
        ],
      },
      bullets: [
        "IGCSE is the gentler bridge from Class 9",
        "The IB Diploma suits students who like writing and independent work",
        "Board marks matter less for IB students applying abroad",
        "English fluency in writing is the single biggest adjustment",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost in Bettiah?",
      paragraphs: [
        "There is no fixed price list on this page and we do not publish rates. The direct answer is that the fee depends on the subject, the level and the tutor's experience, and you receive the figure in writing before any trial lesson is booked. Nothing is charged for the trial itself.",
        "Several factors move the rate. Diploma Higher Level Maths or Physics costs more than PYP reading support because fewer tutors have recently taught it. Session length matters, and so does frequency: two lessons a week is a different commitment from a one-off revision block. A tutor who has examined for the IB or taught a Cambridge tier for several years tends to charge more than a recent graduate.",
        "Compared with travelling to Patna or Delhi for coaching, an online arrangement in Bettiah saves the fare, the lodging and a child's time on the road. That does not make it a low-cost option in every case, but families often find that a small number of well-aimed weekly lessons costs less overall than a residential programme.",
        "Ask us for a quote by WhatsApp. We will need the programme, the subject, the level and the number of sessions you have in mind, and we will answer in plain terms.",
      ],
    },
    {
      heading: "Online private tutor, coaching centre or self-study for IB in Bettiah?",
      paragraphs: [
        "There are four realistic options, and each fits a different child. Local coaching centres in Bettiah are designed around Bihar Board, JEE and NEET, and none we know of teaches the IB or Cambridge syllabuses. A private tutor who lives in town could help with generic Maths, but is unlikely to have taught the IB course. Self-study with past papers is possible for a disciplined student, and online one-to-one tuition fills the gap in between.",
        "The table lays out how they compare on the things families ask about. The most important line is syllabus fit: without a tutor who has actually taught the course, a student may spend weeks preparing material the exam does not ask for.",
        "It is fair to add that online lessons demand a small amount of setup. A steady connection and a quiet room are necessary, and younger children benefit from an adult nearby during the first few sessions.",
        "None of these options excludes the others. Plenty of Bettiah students combine a school syllabus, a weekly online lesson and self-directed past-paper practice.",
      ],
      table: {
        caption: "Ways to study an international syllabus from Bettiah",
        columns: ["Option", "Syllabus fit", "Flexibility", "Main limitation"],
        rows: [
          ["Online one-to-one tutor", "Chosen for the exact IB or IGCSE course", "Hours set with the family", "Needs steady internet"],
          ["Local coaching centre", "Bihar Board, JEE and NEET focus", "Fixed batch timings", "No IB or IGCSE teaching that we could confirm"],
          ["Private tutor in town", "General subject help", "Home or centre", "Rarely has recent IB or Cambridge experience"],
          ["Self-study", "Whatever the student finds", "Total", "No feedback on written answers"],
        ],
      },
    },
    {
      heading: "When are the IB and IGCSE exams, and how does the Bettiah year fit?",
      paragraphs: [
        "IB Diploma exams take place in May and November, with the May session most common in Indian schools. Cambridge IGCSE runs in the February-March, May-June and October-November series, and Pearson Edexcel International GCSE in January, May-June and October-November. Results follow a few weeks or months after each. A child taking a paper privately should confirm the centre and the entry deadline well ahead of time.",
        "The Bettiah school year has its own rhythm. Bihar schools open in April, take a long break in June because of the heat, and have significant pauses for Durga Puja, Diwali and Chhath in autumn. Chhath in particular is a family occasion that draws students home from other cities and empties the week of study.",
        "Floods on the Gandak and its tributaries, and heavy monsoon days between July and September, sometimes disrupt power and travel across the district. We therefore recommend keeping a spare slot in the weekly plan and recording lessons for the student to review, if the tutor agrees.",
        "The table lists the main points of the calendar. It is meant as a planning aid, not an official timetable, so always check dates with the school or examination centre.",
      ],
      table: {
        caption: "The academic and exam year seen from Bettiah",
        columns: ["Period", "What happens", "Effect on study"],
        rows: [
          ["February to April", "Bihar Board exams; IGCSE February-March series", "Best window for focused revision if the student is not sitting board papers"],
          ["May and June", "IB May session; Cambridge and Edexcel summer series; extreme heat", "Early-morning or late-evening lessons work best"],
          ["July to September", "Monsoon and flood risk; new school terms", "Plan for power cuts and keep a catch-up slot"],
          ["October and November", "Durga Puja, Diwali, Chhath; IB and Cambridge November series", "Family travel; schedule intensive blocks either side of the festivals"],
        ],
      },
    },
    {
      heading: "Can a Bettiah student reach Indian and overseas universities with the IB or IGCSE?",
      paragraphs: [
        "Yes. The Association of Indian Universities recognises the IB Diploma and, with the right subject combination, Cambridge and Edexcel qualifications as equivalent to the Class 12 for admission to Indian universities. The details differ by institution, so a family should read the university's own admissions notice rather than rely on a summary.",
        "For medical and engineering entrance, an IB or Cambridge student can generally sit NEET and JEE if the eligibility conditions for subjects are met, but the syllabus for these tests is the Indian one, so extra preparation is needed. Anyone planning to combine the IB with NEET should think about this before choosing subjects.",
        "CUET-UG is the route for central universities, including some in Delhi and Bihar, and IB students register like any other applicant. Those who prefer to study abroad can use IB grades or Cambridge results with SAT, ACT or IELTS as the destination requires.",
        "Many Bettiah graduates in professional roles studied in Patna, Delhi or Kolkata, and that pattern will continue. The international syllabus simply widens the options; it does not narrow them.",
      ],
      bullets: [
        "Check AIU equivalence for every Indian university applied to",
        "NEET and JEE need separate preparation on the Indian syllabus",
        "CUET-UG is the main central-university route",
        "Abroad: predicted IB grades and IGCSE results both matter",
      ],
    },
    {
      heading: "Which IB Maths course and which sciences suit which student?",
      paragraphs: [
        "IB Maths comes in two courses. Analysis and Approaches is for students who like algebra, calculus and proof, and it is the usual choice for engineering and physical sciences. Applications and Interpretation leans toward statistics, modelling and technology, and suits economics, business, biology or psychology applicants. Each is offered at Standard and Higher Level. A student should choose based on what the university course asks for and not on what looks easier.",
        "IB Physics, Chemistry and Biology share a structure of core content, options and an internal investigation. Physics rewards students who are comfortable rearranging formulae and reasoning about data. Chemistry puts organic mechanisms and calculations side by side. Biology is content-rich and rewards clear, exact terminology.",
        "Bettiah students who plan to appear for medical entrance often pick Biology and Chemistry at Higher Level, with Maths Applications. Those aiming at engineering pick Physics and Maths Analysis at Higher Level. We check these combinations against the target course before the first lesson, since a wrong choice is expensive to undo.",
        "In tutoring, the sciences are taught with a past paper always at hand. A useful session usually ends with a timed question that the student attempts without help.",
      ],
    },
    {
      heading: "Core or Extended: how should a student choose IGCSE tiers and subjects?",
      paragraphs: [
        "Cambridge IGCSE papers in many subjects come in two tiers. Core covers a narrower syllabus and awards grades up to C. Extended goes deeper and reaches the highest grades. Students aiming for A Level Maths, sciences or the IB Diploma should choose Extended. Core suits a student who wants a strong foundation without pressure.",
        "Most students take six or seven subjects. English, Maths and at least two sciences are the usual anchor. A language, a humanities subject and perhaps Computer Science or Economics complete the set. For a Bettiah family, Hindi as a second language is a sensible addition, and so is Additional Mathematics for a strong Maths student.",
        "Cambridge and Pearson Edexcel are the two boards that matter. They differ in paper structure and coursework rules, so tutoring is matched to one of them at a time.",
        "The choice of tier is easiest to make after a diagnostic paper. We usually run one in the trial lesson, and the result is a clear guide.",
      ],
    },
  ],

  tutorsIntro:
    "These are tutors who already teach IB PYP to Diploma courses and Cambridge or Edexcel IGCSE to Indian families. Each match is built around the programme, subject, level and exam series your child is actually preparing for.",

  process: [
    { title: "Share the brief", description: "Programme or board, subject, level, current grade and the evening or weekend hours that suit your Bettiah household." },
    { title: "Receive a shortlist", description: "One or two tutors chosen for syllabus fit, each introduced in plain language with their teaching background." },
    { title: "Attend the free trial", description: "A real lesson on a real topic, live online, with no obligation." },
    { title: "Agree the first month", description: "The tutor proposes topics, pace and a reporting style, and you approve or adjust." },
    { title: "Continue at a steady rhythm", description: "A fixed weekly slot, a note after each session and a simple switch of tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Chosen for the syllabus", description: "Tutors are picked for the exact IB subject and level or the Cambridge code, not for a general label." },
    { title: "Made for towns without an international school", description: "Bettiah has no confirmed IB or IGCSE campus, so we search the country instead of the town." },
    { title: "Try before you pay", description: "A free trial lesson lets your child judge the teaching first." },
    { title: "Coursework stays the student's", description: "Tutors coach and explain and do not write any part of an IA, Extended Essay or TOK essay." },
    { title: "Visible progress", description: "Written notes after each session and a review every few weeks." },
    { title: "No lock-in", description: "Rates are quoted in writing, there is no long contract and tutors can be changed." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Bettiah?", answer: "Send us the programme, subject, level and exam session, and we match a tutor online. Because Bettiah has no confirmed IB school, the search covers the whole country. You get a shortlist, a free trial lesson and a written first-month plan. The tutor teaches live on video, one-to-one, at a time that suits your family, so the tutor's own city makes no difference to your child's lessons." },
    { question: "Will a tutor come to our home in Bettiah?", answer: "No, tutors do not visit homes in Bettiah. Home visits are offered only in Gurugram and parts of Delhi NCR. In Bettiah the tuition is online: a live private lesson that your child takes at home on a laptop or tablet. Many families find this closer to the idea of home tuition than they expected, because the child stays in a familiar room and the tutor is fully focused on one student." },
    { question: "Are IGCSE tutors available for Bettiah students?", answer: "Yes, for both Cambridge and Pearson Edexcel IGCSE, taught online. We match the tutor to the paper code, such as 0580 Mathematics or 0625 Physics, and to Core or Extended tier. Students may be at a boarding school elsewhere, preparing to move, or studying on their own as private candidates. The first lesson is a free diagnostic so that the plan starts from what the child already knows." },
    { question: "What does IB tutoring cost in Bettiah?", answer: "The rate depends on the subject, level, session length and tutor experience, and we confirm it in writing before the trial. We do not publish a price list. Diploma Higher Level Maths and Physics generally cost more than primary support, and more frequent lessons change the total. Compared with sending a child to another city for coaching, weekly online lessons remove travel and lodging costs." },
    { question: "Does any school in Bettiah offer the IB or IGCSE?", answer: "We could not confirm one. Bettiah schools follow Bihar Board or CBSE, including convent and CBSE chain campuses. For IB or Cambridge campuses, families look toward Kolkata or Delhi NCR. If you know of a local school that has recently been authorised, tell us and we will update the page after checking the IB or Cambridge listing." },
    { question: "My child studies Bihar Board. Can they move to IGCSE-level Maths or Science?", answer: "Yes, and it is a common request. The main adjustment is answer style. IGCSE marks depend on method, units and reasoning written out in English, whereas Bihar Board often rewards the final result. Tutoring builds content up to Extended tier and trains a student to lay out a solution. A diagnostic in the first lesson shows where to begin." },
    { question: "Can we try a lesson before deciding?", answer: "Yes. Every match begins with a free trial lesson on a real topic from your child's syllabus. Afterwards the tutor sends a short plan for the first month, and you decide whether to go on. If the fit is not right, we find another tutor without any fuss. Rates are shared in writing before booking, so there are no surprises." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. Tutors coach and explain, but they never write an Internal Assessment, Extended Essay, TOK essay or coursework. They can help a student choose a workable question, understand the marking criteria, plan data collection and give feedback on drafts the student wrote. The work must remain the student's own, and that protects the student's result." },
    { question: "Which IB Diploma subjects can you support?", answer: "Maths Analysis and Approaches and Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English A, Hindi B, Psychology, History and Environmental Systems and Societies. If a subject is not listed, ask us. We only offer a subject if a suitable tutor is available, and we tell you plainly if not." },
    { question: "Do you cover IB MYP and PYP as well as the Diploma?", answer: "Yes. MYP tutoring concentrates on criterion-based tasks in Sciences, Maths, Language and Literature and Individuals and Societies, plus the Personal Project's process journal. PYP tutoring builds reading, writing and number confidence and supports unit-of-inquiry work. Younger children usually do best with shorter sessions and a parent nearby at the start." },
    { question: "Is online tutoring good enough without a local school?", answer: "For an international syllabus in Bettiah, it is the practical route, since local specialists are not available. A shared whiteboard, live-marked past papers and a written note after every lesson give a child what a classroom would. The main requirements are a steady connection and a quiet space, and the tutor will tell you at the trial if audio or screen quality is a problem." },
    { question: "How do you check tutors before matching them?", answer: "We look at qualifications, recent teaching in the specific subject and level, and how the tutor talks about assessment criteria. A short demonstration lesson is part of the process. Independent of that, the free trial is the real test, since your child sees the tutor teach a live lesson. If the match does not work, we replace the tutor." },
    { question: "When should a Bettiah student start tutoring?", answer: "Early in the course is best: Class 11 for the Diploma, Grade 9 for IGCSE, and the start of Year 4 for MYP. That leaves time to fix gaps before internal assessments and mocks. If exams are close, an intensive block still helps, particularly with timed papers and mark scheme practice. Late starters should say so in the first message." },
    { question: "How do you handle Bettiah's power cuts and floods?", answer: "We plan a spare slot in the week and ask families to tell us early if a session will be affected. A charged laptop, a phone hotspot as a backup and a fixed evening slot help. During the worst monsoon weeks the tutor can shift the lesson by a day. If the tutor agrees, a session recording lets the child revisit the lesson." },
    { question: "Can you support Hindi or another language for IB and IGCSE?", answer: "Yes. IB Hindi B is available at Standard and Higher Level, and Cambridge IGCSE Hindi as a second language is covered as well. Students who study in Hindi medium sometimes also want help with English writing, which we treat as a separate skill and teach directly through timed practice and feedback on structure." },
    { question: "Is IB Gram connected to any school, the IB or Cambridge?", answer: "No. IB Gram is an independent tutoring service and is not affiliated with, endorsed by or paid by the International Baccalaureate, Cambridge, Pearson Edexcel or any school named on this page. School names appear only so families can see where campuses are located, and we check them against public sources before listing them." },
    { question: "What do I need to start?", answer: "A laptop or tablet with a working camera and microphone, a stable internet connection and a quiet table. Send the child's programme, subject, level, current grade and preferred hours to support@ibgram.com or on WhatsApp at +91 7439 368 115. We reply with a shortlist and trial options, usually within a working day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How our online tuition works for cities across the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The city where in-person home visits are actually available." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL, internal assessment, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "The state capital, where many Bettiah families compare schools." },
    { label: "IB and IGCSE tutoring in Muzaffarpur", href: "/muzaffarpur/", description: "A North Bihar city on the route between Bettiah and Patna." },
    { label: "IB and IGCSE tutoring in Gaya", href: "/gaya/", description: "Another Bihar city where tuition is online." },
  ],

  closingHeading: "Book a free trial lesson for your Bettiah student",
  closingBody:
    "Tell us the programme or board, the subject and level, where your child stands now and which evenings are free. We will reply with a tutor, a short note on their background and trial times, all online and without charge.",
};
