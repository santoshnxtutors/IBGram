import type { CitySeoPage } from "../types";

/**
 * /nagar/ - IB and IGCSE tutoring page for Nagar (officially Brij Nagar), Deeg district, Rajasthan.
 * This is the Rajasthan town, not any other place called Nagar. No school in the town could be
 * confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and clusters point
 * honestly to Jaipur and Gurugram. Online-only delivery: home visits run only in Gurugram and parts of
 * Delhi NCR. Rendered with the shared CountryLanding layout.
 */
export const nagar: CitySeoPage = {
  slug: "nagar",
  countryName: "Nagar",
  countryNameLong: "Nagar (Brij Nagar), Rajasthan",
  demonym: "Nagar",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots dodge the loo-baked afternoons of May and June, the Holi and Diwali weeks and the RBSE board-exam fortnight in March",
  lastUpdated: "2026-09-21",
  geo: { latitude: 27.4247, longitude: 77.0997 },
  wikipedia: "https://en.wikipedia.org/wiki/Brij_Nagar",
  alternateNames: ["Brij Nagar", "Brijnagar", "Nagar Deeg", "Nagar Bharatpur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nagar, Rajasthan | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Nagar (Brij Nagar), Deeg district, Rajasthan: DP, MYP, PYP and IGCSE taught live one-to-one from home on a laptop, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nagar, Rajasthan",
  heroEyebrow: "ONLINE IB AND IGCSE TUITION FOR NAGAR (BRIJ NAGAR) FAMILIES",
  heroSubtitle:
    "Parents in Nagar who type home tuition into a search box and have an IB or IGCSE child will find the honest answer is a private lesson taken at home over a laptop, because IB Gram tutors do not visit homes in Nagar; that is a Gurugram and Delhi NCR service. This is Nagar in Rajasthan, officially Brij Nagar, in Deeg district, and nowhere else called Nagar. No school here is confirmed for the IB or Cambridge, so the tutor supplies the syllabus.",
  primaryKeyword: "IB and IGCSE tutors in Nagar",
  imageAltText: "A student in Nagar, Rajasthan, revising IGCSE Mathematics with a tutor who appears on a laptop screen beside her notes",
  secondaryKeywords: [
    "IB tutor Nagar",
    "IGCSE tutor Nagar",
    "IB home tuition Nagar",
    "IGCSE home tuition Nagar",
    "IB private tuition Nagar",
    "IB Maths tutor Nagar",
    "IGCSE Maths tutor Nagar",
    "IB Physics tutor Nagar",
    "IB Chemistry tutor Nagar",
    "IB Biology tutor Nagar",
    "IB DP tutor Nagar",
    "IB MYP tutor Nagar",
    "IB PYP tutor Nagar",
    "IGCSE online tuition Nagar",
    "Cambridge IGCSE tutor Nagar",
    "IB tutor Brij Nagar",
    "IGCSE tutor Nagar Deeg",
    "online IB tutor Nagar Rajasthan",
    "IB tutor Kaman",
  ],

  heroTrustPoints: [
    "Tutors are shortlisted on the exact paper code, level and board your child sits, never on a loose IB or IGCSE label",
    "Each class is live on screen; the only place a tutor visits homes is Gurugram and parts of Delhi NCR",
    "Your child takes a full trial class before you decide on anything",
    "IB Gram has no tie to any school, the IB, Cambridge or Pearson mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Cambridge & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One time zone" },
    { value: "Free trial", label: "Decide after you see it" },
  ],

  intro: {
    heading: "A quick orientation for families in Nagar",
    paragraphs: [
      "Several places in India are called Nagar, so to be clear: this page is for Nagar in Rajasthan, now officially Brij Nagar, a town of roughly twenty-five thousand people that became part of the new Deeg district in 2023 when it was carved out of Bharatpur. It lies on the Alwar to Mathura railway line, about 165 kilometres from Delhi and 175 from Jaipur, in the heart of the Brij region.",
      "The town has a government college, a railway station, a famous oversized jalebi and a Ram Navami fair each spring. What it does not have, as far as we could verify, is a school that teaches the IB or a Cambridge or Edexcel IGCSE. Local classrooms follow the Rajasthan Board or CBSE. That puts any family wanting an international syllabus in a particular position: the teaching has to be brought in.",
      "Who asks? Often it is a household with one foot in the NCR, where a parent works in Gurgaon or Noida and a child began an IGCSE or IB course there before the family moved home. Sometimes it is a returning NRI family, or one weighing a boarding school in Jaipur. Now and then it is simply ambition: a family that wants a world-recognised qualification without leaving Brij.",
      "None of the schools or exam bodies on this page has any arrangement with IB Gram. Tutors teach, set questions and mark honestly. They never write an Internal Assessment, Extended Essay or other graded work, however the request is phrased.",
    ],
    bullets: [
      "IB teaching from the primary years to the Diploma where no local IB school exists",
      "Cambridge and Pearson Edexcel IGCSE by paper code and tier",
      "Private lessons by video on Indian Standard Time",
      "A note after each class and a written plan after the trial",
      "No tutors visit Nagar; in-person tuition runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes runs in Nagar as far as we can verify. A family meets them through a transfer, a hostel place elsewhere or a deliberate plan to begin IGCSE in Grade 9. Here is how each stage usually looks to a Brij household.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Pupils explore big ideas through units of inquiry instead of isolated subjects, and the final year brings a self-directed Exhibition. No external examiner is involved, so useful help means steady reading, number sense and learning to ask a question that can actually be researched.",
      countryNote:
        "In Nagar the PYP enquiry nearly always comes from a family back from the NCR or abroad who wants a young child's inquiry habits to survive the move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four criteria mark every MYP subject and Year 5 ends with a Personal Project. Capable pupils often lose marks by writing about the topic when the criterion wanted analysis, a gap that targeted practice closes quickly.",
      countryNote:
        "Without an MYP school nearby, a child in Nagar meets the programme through an outside school or as early preparation for IGCSE.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students study six subjects, half at Higher Level, alongside Theory of Knowledge, an Extended Essay and a service strand. Internal assessments feed into subject grades and the main papers are sat in May.",
      countryNote:
        "Diploma students from Nagar generally board in Jaipur or live with relatives in the NCR, so lessons follow that school's term dates and not the town's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses join a career-related study and a reflective project. Few Indian schools run it, yet the Diploma content inside it is taught at full depth.",
      countryNote:
        "CP enquiries from Nagar are close to nonexistent; if one arrives, tutoring concentrates on the Diploma courses within the chosen pathway.",
    },
  ],

  subjectsIntro:
    "Students from Rajasthan Board and CBSE classrooms are usually hard-working and well drilled. The adjustment to IB and IGCSE is learning that questions begin with verbs like justify, compare or assess, and a pile of correct facts will not answer them. Lessons therefore follow a named subject, level and paper, and start with the vocabulary of the questions.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof dominate. HL Paper 3 throws up problems that match no worked example, so we rehearse the courage to try a first line." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, statistics and modelling sit beside graphic-calculator technique. A tidy exploration depends on gathering real data well in advance." },
    { name: "IB Physics", levels: "HL / SL", description: "Students arriving with Class 12 mechanics find uncertainty, graphs and experimental design the new ground, and that is exactly what the investigation rewards." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Calculations are rarely the issue; writing why a reaction proceeds, in complete sentences, loses the marks, especially in organic chemistry." },
    { name: "IB Biology", levels: "HL / SL", description: "Vocabulary is not the barrier. Matching the shape of an answer to the command term is, along with defending a conclusion statistically." },
    { name: "IB Economics", levels: "HL / SL", description: "A correctly drawn diagram attached to a current event beats paragraphs of theory, and HL adds a policy-based data paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Answers earn credit by engaging with the named firm in the case. The internal project needs an organisation that will share real numbers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Hindi-speaking students often read subtly but need rehearsal writing timed commentary on an unseen text in English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms on paper and a working program for the internal assessment are separate skills, each given its own practice." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be recalled accurately and used as evidence in an argument that holds together across a whole essay." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water stress and heat in semi-arid eastern Rajasthan supply live case material; stronger scripts evaluate systems and do not merely describe them." },
    { name: "IB Geography", levels: "HL / SL", description: "Named places, dates and measured data separate strong answers from generalities, and fieldwork must follow a repeatable method." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained argument are tested in different papers and need separate practice." },
    { name: "IB Hindi A / Hindi B", levels: "HL / SL", description: "Hindi as a first language is a real advantage for a Brij student, while Hindi B centres on unseen reading and confident speaking." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talk matters more than notes: defending a prescribed title from the side you did not choose is the best rehearsal for the essay." },
  ],

  igcseSubjectsIntro:
    "Cambridge entries are Core or Extended, Edexcel entries Foundation or Higher, and the tier sets the highest grade within reach. Before any plan we pin down the board, paper code and sitting, whether Cambridge in May to June or October to November or Edexcel in January or summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended papers punish missing working; neat layout earns method marks even when the arithmetic wobbles." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, vectors and identities arrive early, a useful runway before IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "The mathematics matches Cambridge but phrasing differs, so real Edexcel papers are used." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations at speed and the alternative-to-practical paper each get dedicated practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates and organic families are taught beside the practical-skills paper, not at the end." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and human physiology come back in long answers, where structure counts nearly as much as recall." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams are the early win; evaluation in extended answers is where grades part." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables make sense after writing real Python, so each topic includes coding." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed work on unseen passages improves summary and directed writing faster than memorised phrases." },
    { name: "IGCSE Hindi as a second language", levels: "Grade 9-10", description: "Weekly reading and speaking practice, one to one, suits the language papers well." },
  ],

  regionsTitle: "Nagar and the Brij towns around it that our online lessons reach",
  regionsIntro:
    "A lesson needs a laptop and a decent connection, so these places are context and not service areas: where families live, what they live near and which cities they look towards. Some entries are neighbouring towns, not parts of Nagar.",
  regions: [
    { name: "Nagar town centre and bazaar", note: "The old market where the famous jaleba is made, surrounded by trading families whose children attend nearby private and government schools." },
    { name: "Brijnagar railway station area", note: "Households near the Alwar to Mathura line, used to commuting by train for work and study." },
    { name: "Government College Nagar surroundings", note: "A modest college belt where lecturers and students form part of the town's educated core." },
    { name: "Ram Navami fair grounds", note: "The site of the town's spring fair, which shapes the March to April calendar for local families." },
    { name: "Kaman", note: "A nearby Brij town in the same district, whose families share colleges, markets and relatives with Nagar." },
    { name: "Deeg", note: "The district headquarters, known for its palace and gardens, and the administrative reference point since 2023." },
    { name: "Bharatpur", note: "The former district centre, with its bird sanctuary and a larger school and coaching market than Nagar." },
    { name: "Alwar and Mathura corridor", note: "The two cities between which the town sits, giving families a choice between Rajasthan and Uttar Pradesh for hospitals and colleges." },
  ],

  schoolDisclaimer:
    "We could not confirm any school in Nagar or the surrounding tehsil that teaches the IB or a Cambridge or Edexcel IGCSE, so none is named as local. The Jaipur and Gurugram schools listed appear only to explain where some families look. IB Gram is independent of all of them, and holds no agreement, referral fee or endorsement connected to any school, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Nagar town and Deeg district",
      note: "Local schools follow the Rajasthan Board or CBSE. We found no confirmed IB or IGCSE teaching, so online tutoring carries the specialist syllabus.",
      schools: [],
    },
    {
      city: "Nearby: Jaipur",
      note: "About 175 kilometres away, Jaipur is the state capital and the nearest large source of confirmed IB schools within Rajasthan. Families choosing boarding often start here.",
      schools: ["Sanskar School, Sirsi Road", "Jayshree Periwal International School"],
    },
    {
      city: "Nearby: Gurugram",
      note: "Roughly 165 kilometres from Delhi, the NCR has the widest choice of IB and Cambridge schools within a day's journey. Gurugram is also the one place where IB Gram tutors visit homes.",
      schools: ["GD Goenka World School", "Lancers International School"],
    },
  ],

  modesIntro:
    "Whichever format you choose, the lesson is private, live, taught in Indian Standard Time and handled by a tutor picked for the paper code. Formats differ in rhythm, not in quality. Nagar has no tutor visits; in-person home tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Steady weekly class by video",
      description:
        "The same hour each week, with a shared whiteboard, the child's notes and a pile of past papers. It is the default and the most reliable base across a school year.",
      bullets: [
        "A tutor drawn from the whole country",
        "Fits DP, MYP and either IGCSE board",
        "Working shown live on screen",
        "One tutor for the full term",
      ],
    },
    {
      title: "Gentle plan with written feedback",
      description:
        "A shorter weekly class, a few lines afterwards and a fuller review every month or so. It suits younger children and parents who want clear updates without a heavy schedule.",
      bullets: [
        "A short note after each class",
        "Regular goal reviews",
        "Well suited to PYP and early MYP",
        "Extra classes before tests",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "Three or four classes a week for a few weeks before mocks or the written papers, built around timed questions and quick marking.",
      bullets: [
        "Papers marked to current schemes",
        "Comments returned in two days",
        "Start about a month before",
        "Scheduled around Holi and Diwali",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Nagar, and who ends up needing a tutor?",
      paragraphs: [
        "We could not confirm one. The schools in and around Nagar follow the Rajasthan Board in Hindi or English medium, along with some CBSE schools, and the directories we consulted list no IB World School and no Cambridge or Edexcel centre in Deeg district. If that changes, this page will be updated. Naming a school we cannot vouch for would only mislead you.",
        "The families who write to us are a varied group. A bank or railway employee posted to the town may have a child mid-way through an IGCSE course from an earlier posting. Parents who work in the NCR but keep the family home in Brij look for continuity. And some returning households simply do not want to restart a child on a local board.",
        "Others are forward-planning. A fourteen-year-old may be heading to a boarding school in Jaipur for the Diploma, and the family wants the child ready beforehand. A well-matched tutor can lift Mathematics and English to the standard those schools expect, long before an admission test.",
        "Because there is no local school to anchor a search, tutors are chosen by syllabus alone. Someone in Nagar needing IB Physics HL cannot find a neighbourhood expert, but an online tutor in Pune or Delhi who taught the course last term can start within days.",
      ],
      table: {
        caption: "Where Nagar families look for IB and IGCSE schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["Rajasthan Board and CBSE schools", "Nagar and Deeg district", "No IB or IGCSE teaching confirmed"],
          ["Boarding", "Jaipur, about 175 km", "A few IB schools, with admission tests and waiting lists"],
          ["Relocation or NCR relatives", "Delhi NCR, about 165 km", "Largest choice of IB and Cambridge schools"],
          ["Online tutor beside a local school", "At home in Nagar", "Works for IGCSE subjects and for IB students enrolled elsewhere"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Nagar",
        "NCR links and returns from abroad create most demand",
        "Jaipur is the nearest in-state option",
        "Matching depends on the syllabus, not the pin code",
      ],
    },
    {
      heading: "How does RBSE or CBSE preparation differ from IB and IGCSE for a Nagar student?",
      paragraphs: [
        "Rajasthan Board papers in March reward complete, orderly answers drawn from a prescribed textbook, and Nagar's teachers are skilled at preparing students for that. IB and IGCSE examiners are more likely to present an unfamiliar situation and ask which method applies and why. The shift is from reproducing an answer to selecting one.",
        "Assessment also happens earlier and in more places. A board practical file is a record of what was done; an IB Internal Assessment or IGCSE coursework piece is an independent investigation marked on published criteria, sometimes up to a third of the subject grade. Students must learn to plan, draft and reflect over months.",
        "Depth differs by subject. IB Higher Level mathematics and sciences stretch beyond Class 12 in places, IGCSE Extended sits a step above Class 10 and Core is gentler. A student shifting in Grade 9 or Class 11 gains most from a map of the new material rather than a general revision.",
        "Language deserves thought as well. A Hindi-speaking child may grasp a concept completely yet struggle to express it in exam English at speed, so sentence frames, vocabulary and timed answers become part of the lesson.",
      ],
      table: {
        caption: "Rajasthan Board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "RBSE / CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Reproduce a textbook answer in set form", "Choose a method and justify it in a new situation"],
          ["Coursework", "Practical files and internal marks", "Investigations and portfolios marked to criteria"],
          ["Language of study", "Hindi or English", "English, with Hindi as a language course"],
          ["Recognition", "Strong across India", "Recognised by universities in many countries"],
        ],
      },
      bullets: [
        "Selecting a method matters more than reciting one",
        "Coursework unfolds over months, not days",
        "Map new content before revising old",
        "Practise exam English separately",
      ],
    },
    {
      heading: "What goes into the fee for an IB or IGCSE tutor in Nagar?",
      paragraphs: [
        "The rate responds to the programme and level, the subject, the length and frequency of classes, and how recently the tutor taught this exact course. A Higher Level Diploma science is not priced like a Grade 7 mathematics class. You receive a figure in writing before booking a trial.",
        "There is no travel component. Every class is online, so a tutor in Delhi and one in Chennai cost a Nagar family the same, and nobody pays for a taxi to Bharatpur or a train to Alwar.",
        "Judge an hour by its contents. Someone who already knows how Cambridge words an alternative-to-practical question, or how an IB moderator reads an exploration, can save weeks of guessing. Ask what the class will cover and how progress will be reported back.",
        "No long contract is required. Classes can pause for RBSE exam weeks, a wedding season or a family trip, and a tutor can be changed if the fit is poor.",
      ],
      bullets: [
        "Level, subject, class length and tutor experience set the rate",
        "No travel cost for Nagar students",
        "A written figure before the trial",
        "Pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Coaching in Kota, local tutor, self-study or online: what suits an IB or IGCSE student in Nagar?",
      paragraphs: [
        "Rajasthan is known across India for Kota's JEE and NEET coaching, and some Nagar families send older children there. These classes train students for Indian entrance exams. Nobody runs a batch for IGCSE Chemistry or IB Economics, so a child following those courses would be studying someone else's syllabus.",
        "Private tutors in the bazaar and colony lanes handle everyday school subjects well, and several are first-rate. But the pool of people who have taught a current IB or IGCSE course is tiny, and with so few pupils in Nagar nobody can afford to specialise. Reassurance they can offer; the last mark in an examiner's scheme they cannot.",
        "A determined child can teach themselves a well-documented subject, and IGCSE Mathematics papers are easy to find. The trouble starts with anything needing a second pair of eyes: an investigation plan, an essay outline, a six-mark explanation. Mistakes nobody points out soon harden into habits.",
        "Online one-to-one tuition combines specialist knowledge, personal attention and a fixed schedule, without a journey to Bharatpur or Jaipur. The family supplies a laptop, headphones and a connection that holds for an hour.",
      ],
      table: {
        caption: "Support routes compared for Nagar",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Limit in Nagar"],
        rows: [
          ["Coaching classes", "For Indian entrance exams only", "Shared with a batch", "No IB or IGCSE batches"],
          ["Local home tutor", "Varies", "Full", "Few have taught current papers"],
          ["Self-study", "From books and papers only", "None", "No feedback on coursework or essays"],
          ["Online specialist", "Chosen for the course", "Full", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Rajasthan coaching targets JEE, NEET and board exams",
        "Tutors with current IB or IGCSE experience are rare locally",
        "Self-study lacks feedback on writing",
        "Online specialists fill both gaps",
      ],
    },
    {
      heading: "How do Brij festivals and Rajasthan's heat shape a study plan?",
      paragraphs: [
        "In the Brij region Holi is not a single day. The build-up lasts days, schools close and families travel, so any plan that leans on mid-March is optimistic. Teej, Gangaur, Dussehra, Govardhan Puja and Diwali add further pauses, and a good plan marks them in advance with light revision before and a catch-up class after.",
        "The weather is equally decisive. May and June bring temperatures above 44 degrees and the hot loo wind, and afternoons are unsuitable for study. Early mornings and evenings work better. January fog can delay trains and disturb connections, so a mobile hotspot makes a sensible backup.",
        "Diploma candidates write their main papers in May and receive results in July, with a November retake. Cambridge IGCSE has windows around May to June and October to November, and Edexcel has January and summer sittings. The Rajasthan Board papers in March can overlap with mocks, so the calendar needs care.",
        "A boarder in Jaipur follows that school's dates. A private IGCSE student at home does best with a weekly class from Grade 9, more frequent sessions in autumn of Grade 10 and a concentrated block in the last eight weeks.",
      ],
      table: {
        caption: "The year for an IB or IGCSE student in Nagar",
        columns: ["Period", "What happens", "Tutoring focus"],
        rows: [
          ["July to September", "New school year after the monsoon", "Foundations and gap-filling"],
          ["October to November", "Dussehra, Diwali; Cambridge November series", "Light revision, then a sprint for sitters"],
          ["January to March", "Mocks, Edexcel January series, Holi, board papers", "Timed papers and feedback"],
          ["April to June", "Ram Navami fair, heat, Diploma and IGCSE papers", "Early short sessions and past papers"],
        ],
      },
      bullets: [
        "Mark Holi and Diwali weeks as planned breaks",
        "Choose mornings or evenings in May and June",
        "Diploma papers are in May; retakes in November",
        "Winter fog can disturb connections",
      ],
    },
    {
      heading: "Where can IB or IGCSE lead after school in Nagar?",
      paragraphs: [
        "Rajasthan students usually look first to Jaipur, with its universities, MNIT and a growing private sector, and then to Delhi, where Delhi University and several technical institutes attract Brij families. Kota remains the reference for entrance preparation. Admission rules for IB and IGCSE students vary by institution and should be checked with the authority concerned.",
        "For admission inside India, an equivalence certificate from the Association of Indian Universities is frequently demanded of students holding a foreign-board qualification. CUET-UG welcomes candidates from several boards yet still cares about subject combinations, and JEE and NEET publish their own conditions on subjects studied. Rules shift between years, so verify before locking in subjects.",
        "Abroad, IB points and IGCSE grades count towards admission in the UK, Canada, Australia and the United States. British offers normally state a points total plus Higher Level minimums and depend on predicted grades issued in the last year, which makes the first Diploma year count more than most families expect.",
        "The usual danger for a student from a smaller town is a late conversation. Dropping Higher Level Mathematics at fourteen can close an engineering route at seventeen. Our role is academic support; for applications, ask the institution directly.",
      ],
      bullets: [
        "Jaipur and Delhi are the main in-state and nearby destinations",
        "AIU equivalence is often needed for Indian universities",
        "Check JEE, NEET and CUET rules directly",
        "Predicted grades drive overseas offers",
      ],
    },
    {
      heading: "What do Maths AA and AI and the sciences ask of a Nagar student?",
      paragraphs: [
        "Analysis and Approaches suits a student who enjoys algebra, calculus and proof and may head towards engineering or pure science. Higher Level Paper 3 requires extended reasoning that textbook drills do not build. Applications and Interpretation suits someone who prefers data, modelling and technology, such as a future economist or biologist.",
        "Physics students fresh from Class 12 manipulate formulae confidently but have rarely been asked about uncertainty, graph analysis or how to design an experiment, and the Investigation rewards precisely those. Someone who has studied the mark scheme can steer the plan before a draft drifts.",
        "Chemistry candidates from Class 12 tend to be quick with moles and equilibrium, then meet unfamiliar territory in reaction mechanisms and energy cycles. In Biology the terminology is mostly known; what is missing is the habit of building an answer in the shape the command word dictates.",
        "With no IB school nearby, the online tutor teaches rather than supplements. Before the trial we ask for the textbook, any notes and a recent marked piece, so that the first class begins with evidence.",
      ],
      bullets: [
        "AA suits calculus, proof and engineering routes",
        "AI suits data, statistics and modelling",
        "Experimental design is the common physics gap",
        "Bring marked work to the trial",
      ],
    },
    {
      heading: "Should a Nagar student take IGCSE Core or Extended?",
      paragraphs: [
        "Core caps the grade available, while Extended opens the top grades. In Grade 9 the choice seems small, yet it follows the student into Diploma selection because Higher Level Mathematics and sciences assume Extended preparation.",
        "A quick test is to pull a few Extended questions from an old paper and watch the child work. Finding the method but slipping in arithmetic points to Extended. Having no idea where to start suggests Core is kinder in that subject.",
        "Which subjects to bundle is the other half of the decision. Mathematics, English, a pair of sciences and one language or humanity is the usual spread, with Additional Mathematics bolted on for future engineers. Piling on too many for a child who has no school timetable to lean on is the classic error.",
        "Nobody in Nagar can say from experience which tier suits, so the cleanest answer is one diagnostic class with a tutor who has coached both. Watching a child think out loud reveals more than a mark on a page.",
      ],
      bullets: [
        "Core caps the grade; Extended opens it",
        "Try a few Extended questions first",
        "Add Additional Mathematics for engineering",
        "A diagnostic class often settles it",
      ],
    },
    {
      heading: "How does IB Gram pick a tutor for a Nagar family?",
      paragraphs: [
        "You begin with a brief: board or programme, subject and level, recent marks, the sitting ahead and whatever worries you, whether a topic, an IA, the mocks or a change of board.",
        "Next we vet people: qualifications, when they last taught this precise course, and how they give feedback on coursework. Since no school in Nagar anchors the search, the shortlist rests on syllabus fit and on who is free at your child's hours.",
        "Everything turns on the trial. Does the explanation make sense, are the tutor's questions worth answering, does your child feel comfortable asking twice? If so, a brief first-month plan comes next.",
        "If the fit is wrong, we change the tutor. There is no penalty and no need for a long explanation.",
      ],
      bullets: [
        "A brief covering board, subject, level and worries",
        "Shortlist by syllabus experience",
        "Trial class before any commitment",
        "Tutor change if the fit is poor",
      ],
    },
  ],

  tutorsIntro:
    "These are the sorts of tutors a Nagar family meets, from primary-years support to the Diploma and both IGCSE boards, each picked against the course on the student's timetable. Every class runs over video, the only way tutoring happens in Nagar.",

  process: [
    { title: "Tell us where things stand", description: "Programme or board, subject, level, latest marks and the hours your Nagar child can sit at a laptop." },
    { title: "Look at a handful of names", description: "No IB school locally means the names come from across the country, chosen for recent teaching of your child's paper." },
    { title: "Watch a trial class", description: "One real topic taught live, free, with nothing to sign." },
    { title: "Set the first month", description: "Topics in order, class days and how you will hear about progress, all written out." },
    { title: "Review and continue", description: "Classes carry on weekly, we revisit the plan every few weeks, and a new tutor steps in if needed." },
  ],

  whyPoints: [
    { title: "Course before name", description: "Nobody is proposed until we have the HL or SL subject, or the Cambridge or Edexcel paper code and tier." },
    { title: "Made for towns with no IB school", description: "Nagar has no confirmed international classroom, so we search nationally for the right specialist." },
    { title: "See before you pay", description: "A trial class shows how the tutor teaches before money is discussed." },
    { title: "Honest limits on help", description: "Tutors read drafts and comment; the assessed writing is always the student's own." },
    { title: "Updates in writing", description: "A few lines follow every class, and a fuller assessment arrives every few weeks." },
    { title: "Free to walk away", description: "Pause, stop or switch tutor at any point. We have no link to a school, exam board or university." },
  ],

  faqs: [
    { question: "Where do I start if I want an IB tutor in Nagar?", answer: "Note down the subject, the level and the sitting your child is aiming for, and send it to IB Gram. We shortlist tutors who have recently taught that exact course and arrange a free trial class. Since Nagar has no confirmed IB school, tutors come from across India and teaching is by video." },
    { question: "Are both Cambridge and Edexcel IGCSE tutors available for Nagar?", answer: "Yes, and both boards are taught online. We fix the board, paper code and tier first, such as Cambridge 0580 Extended or Edexcel 4MA1 Higher, so that your child practises on the right past papers for the sitting they have actually been entered for." },
    { question: "Can a tutor come home to teach in Nagar?", answer: "No. Home visits are offered only in Gurugram and parts of Delhi NCR. In Nagar, home tuition means a private live lesson that your child takes at home on a laptop, one to one, with tutor and student sharing a digital whiteboard." },
    { question: "How much will IB or IGCSE tuition cost in Nagar?", answer: "We do not publish a rate card. The figure depends on the programme, level and subject, how long each class lasts and how recently the tutor taught the course. You receive it in writing before the trial, and continuing afterwards involves no long contract." },
    { question: "Is this the right Nagar for my family?", answer: "This page covers Nagar in Rajasthan, officially Brij Nagar, in Deeg district, between Bharatpur, Alwar and Mathura. It does not refer to any other place called Nagar. Online tuition works anywhere, so if you live elsewhere, tell us your town and we will match you accordingly." },
    { question: "Which schools in Nagar teach the IB or IGCSE?", answer: "We could not confirm any. Schools in the town follow the Rajasthan Board or CBSE. Families who want an IB or Cambridge classroom generally consider Jaipur or the Delhi NCR, and use online tutoring in the meantime or alongside a boarding place." },
    { question: "Is the trial class really free?", answer: "Yes. A tutor teaches one real topic from your child's course, and you decide afterwards whether to continue. If you do, a short written plan for the first month follows. If not, you owe nothing." },
    { question: "How far can tutors help with an IB Internal Assessment?", answer: "A tutor can talk through what a marking criterion rewards, help your child pick a question that is small enough to investigate, sanity-check an experimental method and give notes on a draft written without help. Producing sentences for the assessed document is off the table, since the IB counts that as malpractice." },
    { question: "Which Diploma subjects can you cover for Nagar students?", answer: "Tutors are available for both Maths courses at either level, Physics, Chemistry and Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History and Hindi, along with Theory of Knowledge and Extended Essay guidance. For an unusual subject the pool is smaller, but we still find someone." },
    { question: "Do you teach MYP and PYP children?", answer: "Yes, from the youngest PYP pupils up. A Grade 7 or 8 child on MYP mostly needs help answering to the stated criteria in science and humanities, and choosing a manageable Personal Project. Little ones get brief, frequent classes around reading aloud, counting patterns and learning to ask good questions before the Exhibition." },
    { question: "Is online tuition enough with no IB school in the town?", answer: "Often it is the stronger choice, since a town of this size could never field a specialist for every paper. The shared whiteboard, worked examples done live and a saved record of the class reproduce most of what a tutor at the next chair would offer, as long as the internet holds." },
    { question: "How are tutors vetted?", answer: "Degrees and certificates are checked first, followed by a conversation about when the person last taught this particular paper and how they respond to a weak coursework draft. Fresh classroom time with the current specification outweighs a long career that predates it, and the trial class then shows you the teaching itself." },
    { question: "When should tutoring begin?", answer: "Day one of the course is best, which means Grade 9 for IGCSE and Class 11 for the Diploma. Coming in late is far from useless, though; if classes go to the topics that carry the most marks, even the final eight weeks before an exam can tighten technique noticeably." },
    { question: "My child studies in a Hindi-medium school. Can they move to IGCSE or IB?", answer: "Plenty of children make the move successfully. What trips them is seldom the science or mathematics; it is reading an exam question in English, understanding what the verb asks and sustaining a long piece of coursework. Spending the summer holiday before Grade 9 or Class 11 on a bridging course takes the sting out of term one." },
    { question: "Which class times work for Nagar families?", answer: "Weekday evenings and weekend mornings suit most students. We avoid Holi, Dussehra and Diwali weeks, plan around RBSE exam dates where relevant, and move sessions earlier in the hottest weeks of May and June." },
    { question: "What if my child and the tutor do not suit each other?", answer: "Tell us and we find a new tutor. Regular reviews exist to catch a poor fit early, and nothing obliges you to stay. You can stop altogether at any stage without penalty." },
    { question: "Is IB Gram connected to any school, the IB or Cambridge?", answer: "None whatsoever. We are a separate tutoring service, with no agreement involving a Nagar, Jaipur or Gurugram school or any of the three exam bodies. A school's name appears on this page only to say what it teaches, and a tutor works from whatever your child's own school or exam centre prescribes." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Bharatpur", href: "/bharatpur/", description: "The former district centre, a short drive from Nagar." },
    { label: "IB and IGCSE tutoring in Alwar", href: "/alwar/", description: "The Rajasthan city at the other end of the railway line." },
    { label: "IB and IGCSE tutoring in Jaipur", href: "/jaipur/", description: "The state capital and its confirmed IB schools." },
    { label: "IB tutoring across India", href: "/india/", description: "How matching works from city to city." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, levels, TOK, IAs and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a trial class." },
  ],

  closingHeading: "Book a free IB or IGCSE trial class for your Nagar student",
  closingBody:
    "Share the programme or board, the subject and level, the latest marks and the hours that suit your child in Nagar. We reply with a proposed tutor, a note on their background and trial times, everything one-to-one and online, free and with no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
