import type { CitySeoPage } from "../types";

/**
 * /makrana/ - IB and IGCSE tutoring page for Makrana, Rajasthan (Nagaur district), the marble
 * town. Online-only: tutors do not visit homes in Makrana. No IB or IGCSE school in the town is
 * confirmed, so clusters are honestly labelled Jaipur options.
 */
export const makrana: CitySeoPage = {
  slug: "makrana",
  countryName: "Makrana",
  countryNameLong: "Makrana, Rajasthan",
  demonym: "Makrana",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are set around Marwar's dry summer heat, the Teej, Gangaur and Diwali weeks and the working rhythm of marble-trade households",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.0431, longitude: 74.7200 },
  wikipedia: "https://en.wikipedia.org/wiki/Makrana",
  alternateNames: ["Makarana", "Makrana Nagaur"],
  stripSchools: [],

  title: "Makrana IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "Makrana, Rajasthan: IB and IGCSE tutors teaching live online, one to one, in Maths, sciences and English, with a free trial lesson for marble-town families.",
  h1: "IB and IGCSE Tutors and Private Online Home Tuition for Makrana Students",
  heroEyebrow: "MAKRANA IB AND IGCSE TUTORS, TAUGHT LIVE ONLINE",
  heroSubtitle:
    "Private home tuition in Makrana for IB or IGCSE works over video. One tutor, one student, a shared whiteboard, and the lesson happening at the family's own table. It is home tuition without a visitor, since tutors do not travel to Makrana; house visits run only in Gurugram and parts of Delhi NCR. The gain is a specialist picked for the exact syllabus, wherever in India that person lives, with a free first lesson to test the fit.",
  primaryKeyword: "IB and IGCSE tutors in Makrana",
  imageAltText: "A Makrana student beside a polished white marble windowsill studying IB Chemistry with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Makrana",
    "IGCSE tutor Makrana",
    "IB home tuition Makrana",
    "IGCSE home tuition Makrana",
    "IB private tuition Makrana",
    "IB Maths tutor Makrana",
    "IGCSE Maths tutor Makrana",
    "IB Physics tutor Makrana",
    "IB Chemistry tutor Makrana",
    "IB Biology tutor Makrana",
    "IB DP tutor Makrana",
    "IB MYP tutor Makrana",
    "IB PYP tutor Makrana",
    "IGCSE online tuition Makrana",
    "IB tutor Makrana Nagaur",
    "online IB tuition Nagaur district",
    "IB tutor Kuchaman Makrana",
    "IGCSE tutor Marble Mandi Makrana",
    "IB tutor Makarana",
  ],

  heroTrustPoints: [
    "The tutor is chosen after the syllabus code and tier are known",
    "In Makrana every lesson is online; home visits are limited to Gurugram and parts of Delhi NCR",
    "One lesson free of charge before you commit to anything",
    "Nothing here is tied to a school, exam board or trade body mentioned on the page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every main IB stage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Shared time zone" },
    { value: "Free lesson", label: "First session on us" },
  ],

  intro: {
    heading: "The marble town that supplied the Taj Mahal, and its students",
    paragraphs: [
      "Makrana is known across the world for one thing: the white marble quarried in its hills, the stone associated with the Taj Mahal and used in temples and monuments far beyond Rajasthan. Trading and processing that stone has shaped the town for centuries. Many families here run quarries, cutting units, showrooms or export businesses, and they think in terms of long horizons, exacting standards and clients in other cities and countries.",
      "That outlook is one reason some Makrana parents look at international qualifications. What they will not find, as far as we could confirm, is an IB or Cambridge school in the town itself; local schools follow the Rajasthan board or CBSE, largely in Hindi and English. Jaipur, a few hours by road, is where the nearest international campuses are, and some families consider boarding or moving there.",
      "IB Gram gives a Makrana student another way in: live one-to-one online lessons from tutors across India in Indian Standard Time. To be plain, none of them come to Makrana. Tutors visiting homes is a service confined to Gurugram and parts of Delhi NCR. In return, the tutor for IB Physics HL or IGCSE Extended Mathematics can be the best-matched teacher in the country, not the nearest.",
      "IB Gram works independently of the IB, Cambridge, Pearson and every school mentioned here.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary framework built around units of inquiry. Tutoring here is short and light: reading aloud, number games and helping a child say what they have understood.",
      countryNote:
        "PYP has no known local school in Makrana, so interest usually comes from parents thinking ahead to a move to Jaipur.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Five years of subjects tied together by concepts and marked against criteria, ending in a personal project. Tutors teach a student to read a criterion and shape an answer to match it.",
      countryNote:
        "A student from a Hindi-medium school may need extra help expressing reasoning in English before the content itself becomes the challenge.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects with TOK, the Extended Essay and CAS, examined in May and November. Tutors work on subject knowledge, paper technique and pacing.",
      countryNote:
        "Diploma students connected to Makrana typically live and study in Jaipur or another city, and take lessons on holidays or by evening call.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of Diploma courses and a career-related strand. Tutors help with the academic courses and the reflective project.",
      countryNote:
        "Business families here sometimes ask about CP because of its practical focus, though few schools nearby run it.",
    },
  ],
  programmesIntro:
    "With no IB school confirmed in Makrana, the four stages reach families through boarding, relocation or planning for a move. Here is how each looks in practice.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and proof for students aiming at engineering or the sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, probability and modelling, with technology in constant use." },
    { name: "Physics", levels: "SL and HL", description: "From mechanics to fields, with attention to experimental method." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, energetics and organic reactions, with calculations drilled." },
    { name: "Biology", levels: "SL and HL", description: "Cells to ecosystems, written for structured-answer accuracy." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course on land, resources and sustainability, close to the themes of a quarrying region." },
    { name: "Economics", levels: "SL and HL", description: "Markets, trade and policy, with export-driven examples ready to hand." },
    { name: "Business Management", levels: "SL and HL", description: "Cases and tools, a natural fit for children of trading and manufacturing families." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, data and systems thinking." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysing texts and delivering the oral, for students whose home language is Hindi or Marwari." },
    { name: "Hindi A", levels: "SL and HL", description: "Literature in Hindi, offering a first-language option that suits the region." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition for students coming to Hindi from another home language." },
    { name: "Visual Arts", levels: "SL and HL", description: "Studio and research work, relevant to a region with a rich stone and craft tradition." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition." },
  ],
  subjectsIntro:
    "Requests from Makrana families lean towards Mathematics, the sciences, Business and Economics, with English close behind for students moving out of Hindi-medium schooling.",
  igcseSubjectsIntro:
    "Because each IGCSE subject stands alone, a Makrana student can begin with a single paper that worries the family and add others as confidence grows.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry and data, with an honest view on tier before entry." },
    { name: "Additional Mathematics", levels: "Extended", description: "Calculus and functions, a bridge to IB or A Level Mathematics." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy and circuits, plus the alternative-to-practical paper." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, moles and organic basics, with calculation habits built early." },
    { name: "Biology", levels: "Core and Extended", description: "Life processes and inheritance, with diagrams and data questions." },
    { name: "Accounting", levels: "Core", description: "Ledgers, statements and ratios, a comfortable subject for trading families." },
    { name: "Business Studies", levels: "Core", description: "Concepts, calculations and case questions." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Reading, directed writing and speaking for students who think first in Hindi." },
    { name: "Computer Science", levels: "Core", description: "Programming logic and theory." },
    { name: "Hindi as a second language", levels: "Core", description: "Reading and writing practice for candidates who offer it." },
  ],

  regionsTitle: "Makrana localities and neighbouring towns we teach into",
  regionsIntro:
    "Online lessons treat a marble mandi and a suburban lane the same, so what matters is timing and connectivity. These are the places families mention and what each usually implies.",
  regions: [
    { name: "Marble Mandi belt", note: "The commercial core of the stone trade, where working days are long and parents often want lessons after shops close." },
    { name: "Railway Station Road", note: "The stretch near the station, used by families with relatives in Jaipur, Ajmer and Delhi." },
    { name: "Bus stand area", note: "A central meeting point where students from surrounding villages change buses, so a fixed evening slot at home saves real time." },
    { name: "Dungri and Doulatpura mining area", note: "The quarry zone, with employees' and owners' families for whom dust, heat and shift work shape the day." },
    { name: "Jaipur Road side", note: "The eastern approach towards Kishangarh and Jaipur, popular with families who already look to the capital for schools." },
    { name: "Kuchaman Road side", note: "The northern approach, linking Makrana with Kuchaman City and Nagaur district towns." },
    { name: "Parbatsar Road side", note: "The western side towards Parbatsar, where newer housing has come up." },
    { name: "Old Makrana", note: "The older residential quarter, with joint families and a tradition of investing heavily in a child's education." },
  ],
  schoolClusters: [
    {
      city: "Makrana itself",
      note: "We could not confirm an IB or Cambridge school in Makrana. Schools in the town follow the Rajasthan board or CBSE. We will list a local school only after verifying it.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur (Sirsi Road and western Jaipur)",
      note: "The state capital, and the nearest place where international curriculum campuses cluster, reached by road via Kishangarh.",
      schools: ["Sanskar School, Sirsi Road"],
    },
    {
      city: "Nearby: Jaipur (central and southern schools)",
      note: "Longer-established campuses used by families comfortable with boarding or a household move.",
      schools: ["Jayshree Periwal International School", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Jaipur (Mansarovar and Durgapura)",
      note: "Residential belts with international curriculum options, popular with relocating families.",
      schools: ["India International School, Mansarovar", "Seedling Modern International Academy, Durgapura"],
    },
  ],
  schoolDisclaimer:
    "These schools are cited only to sketch the wider region. IB Gram is independent, with no partnership, sponsorship or endorsement tying it to any school, the IB, Cambridge or Pearson, and a mention here is not a recommendation.",

  modesIntro:
    "Makrana families can choose among three online arrangements. None involves anyone visiting your home.",
  modes: [
    {
      title: "Standing weekly lesson",
      description: "One subject, one tutor, one fixed slot each week, with homework marked in between.",
      bullets: ["Same tutor and time", "Set around shop and school hours", "Written summary after each lesson"],
    },
    {
      title: "Exam-window intensive",
      description: "A concentrated set of sessions in the weeks before an IB or IGCSE series, built around timed papers and mark-scheme reading.",
      bullets: ["Paper-by-paper schedule", "Feedback on written answers", "Updated list of weak topics"],
    },
    {
      title: "Whole-course private study",
      description: "For a student sitting IGCSE without a classroom: the syllabus taught in order, with advice on tier, board and entry.",
      bullets: ["Complete syllabus coverage", "Guidance on approved exam centres", "Regular past-paper practice"],
    },
  ],

  sections: [
    {
      heading: "Does Makrana have an IB or Cambridge school, or do families turn to Jaipur?",
      paragraphs: [
        "None that we could confirm. The town has schools affiliated to the Rajasthan board and to CBSE, several of them long established, and some teaching in Hindi. The nearest international curriculum schools are in Jaipur, which families reach by road through Kishangarh, and the alternatives are Ajmer, Jodhpur, Delhi NCR or Ahmedabad for those willing to board.",
        "So the enquiries we expect from Makrana are seldom about enrolling locally. A trading family may already be planning a move to Jaipur or abroad, and want a child prepared. A student may be boarding elsewhere and want holiday lessons. Another may be aiming for IGCSE as a private candidate, keeping the local school as a base while working towards a qualification with wider currency.",
        "Whatever the reason, the first conversation is about the syllabus. Which IB subject and level, or which Cambridge or Edexcel code and tier? Getting this wrong wastes weeks, which is why the trial lesson opens with the actual syllabus document.",
        "If you are shown a school that promises IB or Cambridge teaching, verify it on the IB's authorised school list or Cambridge's locator before paying anything. The word international in a name says nothing about the curriculum taught.",
      ],
    },
    {
      heading: "Rajasthan board, CBSE, IGCSE or IB: which suits a Makrana student?",
      paragraphs: [
        "Rajasthan's board papers reward accurate recall from prescribed books, and CBSE adds more application on a national syllabus. IGCSE and IB step further away from memorised answers, asking a student to use knowledge in unfamiliar settings and to defend a conclusion in writing.",
        "For a Makrana family, the trade-off is usually language and direction. A student from a Hindi-medium school may find English-medium examination the biggest change. A student aiming for study abroad benefits from a qualification that overseas admissions offices already understand.",
        "The table lines the routes up against the questions parents ask most often.",
      ],
      table: {
        caption: "Four routes compared for a Makrana family",
        columns: ["Route", "Main language", "Paper style", "Typical destination"],
        rows: [
          ["Rajasthan board (RBSE)", "Hindi or English", "Recall from prescribed texts", "Local colleges, state entrance tests"],
          ["CBSE", "Hindi or English", "Application within a national syllabus", "JEE, NEET, CUET-UG"],
          ["Cambridge or Edexcel IGCSE", "English", "Structured papers, Core or Extended", "A Level, IB Diploma or Indian Class 11"],
          ["IB Diploma", "English plus a second language", "Papers, coursework, essay and reflection", "Indian universities or study abroad"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tutoring cost for a family in Makrana?",
      paragraphs: [
        "There is no price list on this page, and that is deliberate. After the free lesson, you receive a written rate for your child's exact subject, level and schedule. A quoted figure without those facts would be a guess.",
        "Business families will recognise the logic of what moves the price. The level of the course, since HL and Extended need more experienced teachers. The scarcity of the specialism. The number and length of sessions. And the tutor's record with that particular board.",
        "Online lessons take out costs that are easy to forget: the drive to Jaipur for weekend classes, hostel or guest-house nights, the loss of a working day for a parent who accompanies the child. Over an academic year those add up, and several families tell us that is what tips the choice.",
        "Whoever you choose, ask for the exact rate in writing, ask how progress will be reported, and ask how a change of tutor works.",
      ],
      bullets: [
        "Level, subject scarcity, session length and frequency shape the rate",
        "A written quote precedes any booking",
        "No travel, lodging or lost working days for online lessons",
      ],
    },
    {
      heading: "Online tutor, local teacher, coaching class or going it alone: what fits Makrana?",
      paragraphs: [
        "Makrana has teachers who know the Rajasthan board and CBSE well, and coaching for entrance exams typically runs in Kishangarh, Ajmer, Jaipur or Kota rather than in town. Those options fit local syllabuses. For IB and IGCSE, teachers with recent experience of the papers are rare here.",
        "An online tutor is matched for the international syllabus and works at one student's pace. It needs stable internet and a student who prepares between lessons, and it cannot replace the daily structure of a school.",
        "Independent study can suit a disciplined IGCSE candidate with a good stock of past papers, though IB coursework and essays are much harder to manage unaided.",
      ],
      table: {
        caption: "Ways of studying an international syllabus from Makrana",
        columns: ["Option", "Where it helps", "Where it falls short"],
        rows: [
          ["Online one-to-one", "Syllabus-matched teaching and personal feedback", "Depends on connectivity and self-discipline"],
          ["Coaching in Ajmer or Jaipur", "Structured batches for board and entrance exams", "Travel needed, and rarely IB or IGCSE"],
          ["Local school teacher", "Knows the student, easy to reach", "Little exposure to international papers"],
          ["Self-study", "Free, flexible", "No correction of weak answers"],
          ["Moving to Jaipur", "Full international school environment", "Cost and family disruption"],
        ],
      },
    },
    {
      heading: "How do Rajasthan's heat and festival calendar shape the school year?",
      paragraphs: [
        "Makrana lies in the dry heart of Rajasthan, where May and June bring heat that makes afternoon study uncomfortable, and where power interruptions become more likely. Lessons then work best early in the morning or after sunset. Winters are pleasant and dry, making January and February the easiest months to sustain long sessions.",
        "The monsoon arrives late and lightly, and it seldom disrupts study for more than a day or two. The bigger scheduling factors are cultural. Teej and Gangaur bring family gatherings, Diwali dominates the autumn calendar, and the marble trade has its own busy seasons that pull parents away from the house.",
        "Exam series overlay all of this. IB exams are held in May and November, Cambridge IGCSE in February and March, May and June, and October and November, and Pearson Edexcel IGCSE in January, May and June, and November. We fix the calendar with the family well before a series begins.",
      ],
      table: {
        caption: "A year of study in Makrana",
        columns: ["Months", "What is happening", "Best use of lessons"],
        rows: [
          ["January to March", "Mild winter, IGCSE February-March series, Gangaur", "Long practice sessions, timed papers"],
          ["April to June", "Severe heat, May exams", "Early-morning or evening slots, past-paper blocks"],
          ["July to September", "Late light monsoon, Teej, new school year", "Building foundations, planning coursework"],
          ["October to December", "Diwali, cooler weather, November series", "Mock exams and revision"],
        ],
      },
    },
    {
      heading: "Where can a Makrana IB or IGCSE student study after school?",
      paragraphs: [
        "In India the Association of Indian Universities treats the IB Diploma as equal to the senior secondary certificate, which allows applications to Indian universities. Central universities admit through CUET-UG scores, and each degree specifies its own subjects, so a student should confirm them before choosing.",
        "Engineering and medicine call for extra care. The national entrance tests set subject and mark rules that IB and IGCSE students must verify with the testing agency and with the institutes involved. Rajasthan's own counselling has conditions for students from outside its board, and those should be checked with the relevant office.",
        "For a family in the stone trade, business and design degrees are natural destinations, at Indian or overseas universities. IB grades are read by admissions offices in the UK, US, Canada, Australia and Europe. A student from Makrana should begin planning subjects, predicted grades and any admission tests by Class 10 or 11.",
        "Our tutors teach content and exam technique, and never write applications or coursework.",
      ],
      bullets: [
        "AIU treats the Diploma as equivalent to a Class 12 certificate",
        "CUET-UG for central universities",
        "Verify NEET and JEE eligibility before subjects are fixed",
        "Overseas universities read IB grades directly",
      ],
    },
    {
      heading: "What does IB Mathematics and Science demand of a Makrana student?",
      paragraphs: [
        "IB Mathematics offers two routes. Analysis and Approaches concentrates on algebra, calculus and proof, and it suits students who see themselves in engineering, architecture or the pure sciences. Applications and Interpretation leans on statistics and modelling, a good match for business, economics and social science.",
        "At Higher Level, missing a topic for a fortnight can make the next three harder. Weekly lessons with a tutor act as a safeguard, spotting the gap while it is still small enough to close in one session.",
        "Board students commonly bring strong factual knowledge in the sciences but little experience with experimental design, uncertainty and data-based questions. Tutors concentrate on those skills, and on the working habits that examiners reward.",
        "In IGCSE Mathematics, Core entry places a ceiling on the grade. A student who might later want IB or A Level Mathematics is usually better on Extended, and a tutor can advise after seeing recent work.",
      ],
    },
    {
      heading: "How to choose IGCSE subjects and an exam board from Makrana",
      paragraphs: [
        "Start with the destination after Class 10. Students headed for IB or A Level should generally take Extended Mathematics and the sciences separately. A student who wants a broad, lower-pressure qualification could mix Core papers, accepting that top grades are then capped.",
        "Cambridge and Pearson Edexcel set papers in different styles and in different months, so ask which one a school or exam centre works with. A private candidate needs an authorised centre and must meet entry deadlines that often fall months before the exam.",
        "Language choices matter as well. Hindi as a second language can be a steady grade, and English as a Second Language rewards steady reading and directed writing.",
        "The free lesson can double as a planning talk, so the subject list is settled before any fee is paid.",
      ],
    },
  ],

  process: [
    { title: "Send a note", description: "WhatsApp +91 7439 368 115 or write to support@ibgram.com with subject, level, board and target exam session." },
    { title: "Hear back with a tutor", description: "We name someone who already teaches that syllabus and propose slots in IST." },
    { title: "Try one lesson", description: "The first lesson costs nothing and commits you to nothing." },
    { title: "See the terms", description: "Should you wish to continue, the rate and timetable arrive in writing before any booking." },
    { title: "Study and review", description: "Live weekly lessons, a note after each, and a different tutor if the fit is not right." },
  ],
  whyPoints: [
    { title: "Exact-syllabus tutors", description: "The tutor teaches your child's specific course, for example IB Economics HL or IGCSE Accounting." },
    { title: "Straight about location", description: "Makrana lessons are online; home tuition in person exists only in Gurugram and parts of Delhi NCR." },
    { title: "Fits trading households", description: "Evening and weekend slots suit families whose days run long around the mandi." },
    { title: "Written summaries", description: "A short record follows each lesson for parents to read." },
    { title: "Simple tutor change", description: "Ask for a new tutor and it is arranged without debate." },
    { title: "Guidance only", description: "No tutor writes an IA, Extended Essay or TOK essay for a student." },
  ],

  tutorsIntro:
    "Our tutors are spread across India and keep IST hours. For Makrana students the match is made on syllabus and teaching style, never on distance.",

  faqs: [
    {
      question: "Can Makrana students study IB or IGCSE with a private tutor?",
      answer:
        "Yes, online. A tutor based elsewhere in India teaches your child live over video, one to one, following the exact IB or IGCSE syllabus. Nobody comes to Makrana. Being online means the choice is national, which helps most for Higher Level subjects and less common courses that a small town could never staff locally.",
    },
    {
      question: "Is home tuition available in Makrana for IB and IGCSE?",
      answer:
        "Only in an online form. A tutor does not visit Makrana homes; in-person tuition is confined to Gurugram and parts of Delhi NCR. What we do provide is private tuition from home: your child sits at the family desk, the tutor teaches on screen, and a written note follows each session so parents can see what was covered.",
    },
    {
      question: "Which IB or IGCSE schools can Makrana families consider?",
      answer:
        "We could not confirm one inside Makrana. Jaipur is the nearest centre with international campuses, and some families consider Ajmer, Jodhpur or Delhi NCR for boarding. We name only schools we have verified, grouped by city, and none is a recommendation. Check any school on the IB's directory or Cambridge's locator before paying a fee.",
    },
    {
      question: "How much will IB tutoring cost us?",
      answer:
        "That depends on subject, level, session length and how many lessons a week you want. There is no published price list. You get a written rate after the free lesson. Higher Level and rare subjects usually cost more, and studying at home spares you the fuel, hostel nights and lost working days that weekend classes in Jaipur would involve.",
    },
    {
      question: "Can my child sit IGCSE privately from Makrana?",
      answer:
        "Usually yes, through an authorised centre that takes private entries. Cambridge and Pearson Edexcel both allow external candidates, though each centre sets its own fees and closing dates, and those dates come early. We can teach the syllabus and help you plan the timeline, but we do not register candidates or run the exams.",
    },
    {
      question: "Will the tutor help write the IA, Extended Essay or TOK essay?",
      answer:
        "No, and that is a firm line. Tutors explain criteria, talk through whether a topic will work and comment on the shape of a draft, but the writing must be your child's. Anything more risks a misconduct ruling from the IB, which can cost a student the Diploma. Coaching stays coaching.",
    },
    {
      question: "How do IGCSE and the IB Diploma differ?",
      answer:
        "IGCSE is a subject-by-subject qualification taken at about 16 from Cambridge or Pearson Edexcel. The IB Diploma is a two-year course for ages 16-19 that joins six subjects to the Extended Essay, TOK and CAS. Many students do IGCSE first, then A Level or IB. Either can be tutored online from Makrana.",
    },
    {
      question: "Will Indian universities accept an IB Diploma?",
      answer:
        "Broadly, yes. The Association of Indian Universities recognises the Diploma as equivalent to the Class 12 certificate, and many institutions admit IB students. Some degrees, above all medicine and engineering, add extra conditions. Confirm with the university, and with the state or national authority, for the year of application.",
    },
    {
      question: "Can IB students from Rajasthan write NEET or JEE?",
      answer:
        "It turns on the subjects taken and the rules of the National Testing Agency, which change from time to time. Rajasthan's counselling may also apply extra conditions to students from non-state boards. Read the current bulletins in Class 9 or 10, before subjects are chosen, and treat any general answer, including ours, with caution.",
    },
    {
      question: "When are the IB and IGCSE exams?",
      answer:
        "The IB Diploma is examined in May and November. Cambridge IGCSE sits in February and March, May and June, and October and November, and Pearson Edexcel IGCSE in January, May and June, and November. Not every subject is offered every time, so check with your school or centre. We work backwards from the session your child has entered.",
    },
    {
      question: "How do lessons cope with Makrana's heat and power interruptions?",
      answer:
        "By avoiding the worst hours. In May and June the afternoons are difficult, so lessons move to early morning or evening. Keep a phone hotspot as a fallback, and tell us if an outage cancels a session; it is rescheduled without penalty. The tutor writes on a shared whiteboard, so nothing needs printing.",
    },
    {
      question: "What happens in the free lesson?",
      answer:
        "A tutor matched to your child's subject and level teaches a full session, at no cost and with no obligation. You see how they explain, how the screen tools work and how your child responds. If you carry on, terms arrive in writing first. If the fit seems wrong, ask for another tutor.",
    },
    {
      question: "Which subjects do Makrana students ask for most?",
      answer:
        "Mathematics tops the list, then Physics, Chemistry and Biology, followed by Economics, Business and English. Accounting is popular among IGCSE candidates from trading families, and Computer Science interest is rising. We staff by syllabus code and level and say honestly when a rare combination will take longer to match.",
    },
    {
      question: "My child studies in a Hindi-medium school. Can they move to IB or IGCSE?",
      answer:
        "Yes, with support. The main change is language and style: reasoning in English, command words and unfamiliar problems. A tutor can teach these directly, using model answers and timed practice, and can support both English and the subject at once. Starting several months before the move eases the first term.",
    },
    {
      question: "What if we want a different tutor?",
      answer:
        "Just say so. We will arrange another tutor without asking you to justify it, since teaching style matters as much as subject knowledge. A poor fit early on can knock a student's confidence, so we would rather change in the second week than have you endure a term. We will also review the schedule and priorities.",
    },
    {
      question: "How do we start from Makrana?",
      answer:
        "Send a message to +91 7439 368 115 on WhatsApp or an email to support@ibgram.com with the subject, level, board and exam session. Add the school's subject list or syllabus code if you have it. We reply with a tutor and a time in IST for the free lesson, and you decide afterwards whether to continue.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page and the list of cities served online." },
    { label: "Jaipur page", href: "/jaipur/", description: "The state capital and its international school clusters." },
    { label: "Ajmer page", href: "/ajmer/", description: "The nearest large city to the south, and its options." },
    { label: "Jodhpur page", href: "/jodhpur/", description: "Marwar's other big city, with its own school context." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB subjects and levels taught by IB Gram tutors." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel subject support." },
    { label: "Primary Years Programme", href: "/programmes/pyp/", description: "What PYP involves and how tutoring helps." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "How the six subjects and the core fit together." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles students can be matched with." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Support for university admission tests." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book the free lesson." },
  ],
  closingHeading: "A free first lesson for your Makrana student",
  closingBody:
    "Give us the subject, level and exam session, and a suitable tutor will teach a live trial without charge. What happens next is up to your family.",
};
