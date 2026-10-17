import type { CitySeoPage } from "../types";

/**
 * /purezi/ - IB and IGCSE tutoring page for Purkazi (also spelt Purqazi / Purquazi), a nagar
 * panchayat in Muzaffarnagar district, Uttar Pradesh. The slug "purezi" is a decoding artefact of the
 * source city list and is kept to match the plan row. Online-only delivery: tutors do not visit homes
 * here, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. No IB or
 * Cambridge/Edexcel school is confirmed inside Purkazi, so stripSchools is empty and the clusters
 * point at nearby cities, clearly labelled.
 */
export const purezi: CitySeoPage = {
  slug: "purezi",
  countryName: "Purkazi",
  countryNameLong: "Purkazi, Muzaffarnagar, Uttar Pradesh",
  demonym: "Purkazi",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are fitted around your child's school day, the crushing-season rush when cane trolleys clog the highway, and the family weddings and festivals your household has already marked",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.6582, longitude: 77.8419 },
  wikipedia: "https://en.wikipedia.org/wiki/Purkazi",
  alternateNames: ["Purqazi", "Purquazi", "Pur Qazi", "Purkaji"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Purkazi | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tuition for Purkazi (Purqazi) students: PYP to DP and Cambridge or Edexcel IGCSE, one-to-one online lessons from home, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Purkazi",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PURKAZI AND PURQAZI FAMILIES",
  heroSubtitle:
    "Looking for home tuition in Purkazi for an international curriculum? Tutors do not visit homes here, but a private one-to-one lesson at your own table, delivered online, gets you the same attention. We search for a teacher by your child's exact IB subject or IGCSE code across India, then run the class live on a laptop beside the books your family already has.",
  primaryKeyword: "IB and IGCSE tutors in Purkazi",
  imageAltText: "Student in Purkazi studying at home with a laptop, joining an online IB Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Purkazi",
    "IGCSE tutor Purkazi",
    "IB home tuition Purkazi",
    "IGCSE home tuition Purkazi",
    "IB private tuition Purkazi",
    "IB Maths tutor Purkazi",
    "IGCSE Maths tutor Purkazi",
    "IB Physics tutor Purkazi",
    "IB Chemistry tutor Purkazi",
    "IB Biology tutor Purkazi",
    "IB DP tutor Purkazi",
    "IB MYP tutor Purkazi",
    "IB PYP tutor Purkazi",
    "IGCSE online tuition Purkazi",
    "IB tutor Purqazi",
    "IGCSE tutor Purquazi",
    "IB tutor Muzaffarnagar district",
    "online IGCSE tutor Purqazi Muzaffarnagar",
    "Cambridge IGCSE tutor Purkazi",
    "Edexcel IGCSE tutor Purkazi",
  ],

  heroTrustPoints: [
    "Tutors are chosen against your child's real IB subject and level or IGCSE syllabus code, not a loose 'Maths tutor' label",
    "All lessons are live and online; tutors do not come to homes in Purkazi, as home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, so you judge the teaching before paying anything",
    "Independent service with no link to any Purkazi school, coaching centre, the IB, Cambridge or Pearson Edexcel",
  ],
  heroStats: [
    { value: "Online only", label: "Live one-to-one lessons at your own table" },
    { value: "PYP to DP", label: "Every IB stage, plus Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Tutor and student share one clock" },
    { value: "Free trial", label: "Written note after each session" },
  ],

  intro: {
    heading: "What a Purkazi family should expect from IB and IGCSE tuition",
    paragraphs: [
      "Ask around Purkazi about private tuition from home and you will hear about maths batches, English-medium crash courses and board-exam revision. Ask about the IB Diploma or Cambridge IGCSE and you will get a shrug, because no school in the town is known to teach either. That is the honest starting point of this page on IB and IGCSE tutors in Purkazi: the demand exists in pockets, the local supply does not, and the gap is bridged online rather than by a tutor walking in through your gate.",
      "Three kinds of household usually write to us. The first has a child boarding or studying in Delhi NCR, Dehradun or Meerut at a school that runs an international curriculum, and wants help during holidays. The second is a family that returned to the town after years elsewhere, with a child already midway through MYP or IGCSE. The third is a UP Board or CBSE family, often tied to farming, trade or the sugar business, weighing whether an international route suits a child with plans abroad.",
      "For all three, the lesson is simple: one teacher, one student, a screen, and a past paper being marked while the student watches. Because the class is delivered online, your search is not limited to what the town offers. A tutor who taught Cambridge Chemistry for years can sit in Pune or Chandigarh and still be the right match for a Class 10 student studying near the Delhi-Dehradun highway.",
      "Nothing on this page is endorsed by a school, the IB, Cambridge or Pearson. Tutors explain, set practice and mark work. The words inside an Internal Assessment, Extended Essay or Theory of Knowledge essay belong to the student, never to us.",
    ],
    bullets: [
      "IB support from PYP to the Diploma for boarders, returnees and families planning a switch",
      "Cambridge and Edexcel IGCSE lessons built around the exact syllabus code and tier",
      "Live, one-to-one video lessons on Indian Standard Time, never a recorded course",
      "A written note after every session and a plan agreed before you pay anything",
      "No tutor visits to Purkazi homes; that remains a Gurugram and Delhi NCR service",
    ],
  },

  programmesIntro:
    "None of the four IB stages is taught inside Purkazi that we could confirm, so families meet these programmes through a school elsewhere. The cards below describe what tutoring actually involves at each stage, and how it tends to show up for a household in this corner of Muzaffarnagar district.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 5-11",
      description:
        "The PYP replaces subject silos with units of inquiry, where a class might spend six weeks asking how people share limited resources and pull maths, language and social studies into that one question. Nothing is graded by an external exam. Tutoring here means steady reading aloud, number fluency and helping a child turn curiosity into a clear question and a short written explanation.",
      countryNote:
        "A PYP enquiry from Purkazi usually comes from a family that has just moved back from a metro posting, so early sessions rebuild routine and reading stamina before touching any new content.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP teachers grade against published criteria, so a student sees separate marks for knowing, investigating, communicating and applying rather than one lump score. Most trouble starts when an answer describes what happened but never explains why. Tutors practise exactly that shift, and help students plan the Personal Project long before the deadline.",
      countryNote:
        "MYP tutoring tied to Purkazi mostly happens in school holidays, when a boarder returns home and uses a few weeks to clear criterion-based work that piled up during term.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma student carries six subjects, three at Higher Level and three at Standard, alongside the Extended Essay, Theory of Knowledge and the CAS record. Internal Assessments feed into the final grade of each subject. The workload is spread across two years and across written papers, orals and investigations, which is very different from a single board-exam fortnight.",
      countryNote:
        "Since no Diploma school sits near Purkazi, a Diploma enquiry usually supports a child living in a hostel hundreds of kilometres away, so the tutoring calendar follows that school's term dates, not the town's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme pairs two or three Diploma-level courses with a career study, a reflective project and practical skills work. Few Indian schools offer it, and those that do teach their Diploma-level courses at full depth. Tutoring therefore focuses on those chosen subjects, plus structure for the reflective project.",
      countryNote:
        "Enquiries about CP from Purkazi are rare, because the schools that run it are far away. When one arrives, we treat it as a Diploma-subject tutoring job and plan around the student's school calendar.",
    },
  ],

  subjectsIntro:
    "A Purkazi request seldom says 'IB tutor' and stops there. It says Physics HL before the winter break, or Economics SL with an exploration due, or a Class 9 student starting Cambridge Chemistry. We begin with that exact subject and level, and only then choose a tutor and a weekly slot.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Built for students who enjoy algebra, functions and proof. HL Paper 3 questions stretch even strong students, so sessions practise unfamiliar problems and settle the exploration topic early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Suits students who prefer data, modelling and a graphic calculator to formal proof. Weak calculator habits cost marks, so tutors drill the technology alongside the theory." },
    { name: "IB Physics", levels: "HL / SL", description: "Papers move fast, so rearranging formulae and reading graphs under a clock gets deliberate practice, along with the design of a convincing investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry carries a student a long way, but organic reaction pathways and equilibrium trip people later. Practical write-ups are redrafted until they read as an examiner expects." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks often leak through a misread command word rather than missing facts. Sessions pair content recall with extended-response structure and the statistics a good investigation needs." },
    { name: "IB Economics", levels: "HL / SL", description: "Clean diagrams earn marks quickly. The harder skill is evaluating a policy, weighing who gains and who loses, which HL Paper 3 tests directly." },
    { name: "IB Business Management", levels: "HL / SL", description: "Answers must be anchored in the case study on the page. Families with a shop, mill supply link or trading firm often find the Internal Assessment topic close to home." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students from Hindi-medium backgrounds usually need work on analytical paragraphs and timed commentary more than on vocabulary." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Code has to run, not only look right. Sessions happen at a keyboard, and the Internal Assessment documentation gets checked against the program that was actually built." },
    { name: "IB Psychology", levels: "HL / SL", description: "Students learn to cite real studies accurately and keep a long-response answer organised from the first line to the last." },
    { name: "IB Geography", levels: "HL / SL", description: "Specific places and figures beat vague claims. Students from an agricultural district can draw on land use and water examples they have seen for themselves." },
    { name: "IB History", levels: "HL / SL", description: "Paper 1 source work and Paper 2 essays are trained separately, since one rewards close reading and the other a sustained argument." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Home language does not guarantee marks. Register, text types and the individual oral are practised so a fluent speaker also writes to the examiner's expectations." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Treated as a habit of questioning rather than material to memorise, with tutors pressing on the student's own exhibition objects and essay claims." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel are not taught in Purkazi itself, so IGCSE requests come from a child enrolled elsewhere or a family preparing a switch from the UP Board or CBSE. In both cases the exam board, syllabus code and tier come first, and the series, May-June or October-November, follows.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students used to long board-style arithmetic can be accurate but slow, and Extended punishes slow working more than wrong answers. Timed non-calculator practice fixes that." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and vectors early. It is a strong preparation for IB Maths AA later, and tutoring concentrates on algebraic fluency." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement and unit handling are practised separately, with dedicated time for the alternative-to-practical paper that many students leave to the last week." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Organic reactions and practical technique are built together from the first month, instead of leaving practical skills until revision." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, enzymes and ecology produce long answers. Students practise writing them in the sequence an examiner looks for." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams and definitions are the easy marks. Tutors spend more time on the evaluative questions where Extended candidates are separated." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode on paper and Python on a screen are separate skills, and both get equal attention." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed reading of unseen passages and step-by-step summary writing matter more than memorised vocabulary lists." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Examiners reward theory applied to the scenario given. Case after case is worked through until that habit holds." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Aimed at students who speak Hindi daily but need the written discipline Cambridge expects." },
  ],

  regionsTitle: "Purkazi and surrounding areas where families study with our online tutors",
  tutorsIntro:
    "These tutors teach IB and IGCSE online to students across India, including families in Purkazi. Each profile shows subjects, levels and years of teaching, so you can see who has taught your exact syllabus. Lessons run live in Indian Standard Time, and none of them involves a visit to your home.",
  regionsIntro:
    "Every lesson is online, so these places matter for context: which schools and coaching routines surround a family, how the highway and the cane season shape an evening, and which commute pulls children towards Muzaffarnagar or Roorkee.",
  regions: [
    { name: "Purkazi town centre", note: "The main market on the highway side, where evening study competes with traffic and shop noise, so we favour a quiet back room and headphones." },
    { name: "NH 58 highway belt", note: "Homes and shops along the Delhi-Dehradun road, where heavy trucks and cane trolleys can disturb calls during crushing season." },
    { name: "Suliwala Bagh area", note: "The historic garden linked to the 1857 uprising, a familiar landmark for local families when they share their address." },
    { name: "Purkazi railway side", note: "The residential edge of the town where many families send children to Muzaffarnagar schools by road, leaving little time before evening." },
    { name: "Bhopa", note: "A nearby village belt toward the Ganga canal side, where children commute to town schools and online tuition avoids a second journey." },
    { name: "Chhapar", note: "A small town on the Muzaffarnagar side, reached by road, with a mix of UP Board and private schools." },
    { name: "Khatauli", note: "A sugar town south-east of Purkazi, with a larger school base, often cited by families comparing options." },
    { name: "Muzaffarnagar city", note: "The district headquarters and the main school and coaching destination for families around Purkazi." },
    { name: "Mansurpur", note: "A cane-growing area on the way to Khatauli, where tuition timing follows farm and mill schedules." },
    { name: "Roorkee side", note: "Families near the Uttarakhand border sometimes look towards Roorkee for engineering colleges and schools." },
  ],

  schoolDisclaimer:
    "We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre inside Purkazi, so none is named as local. Schools in the clusters below mark where families from this part of Uttar Pradesh sometimes look, not a business relationship. IB Gram is an independent tutoring service with no tie-up, sponsorship or endorsement involving any school, the IB, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Purkazi and Muzaffarnagar district",
      note: "We found no confirmed IB or Cambridge/Edexcel school inside Purkazi or elsewhere in the district. UP Board and CBSE schools make up the local choice, which is why matching a tutor nationally is the practical route here.",
      schools: [],
    },
    {
      city: "Nearby: Meerut",
      note: "Meerut is the closest large city with a visible international-curriculum school, reached by road from the Muzaffarnagar side. Local options remain few, so many families consider Delhi NCR as well.",
      schools: ["Vidya Global School"],
    },
    {
      city: "Nearby: Dehradun and the Roorkee road",
      note: "The Doon valley is a long-standing boarding region for north Indian families and lies along the same highway that passes through Purkazi, which makes it a natural option for international curricula.",
      schools: ["SelaQui International School", "Unison World School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "The NCR holds the widest spread of IB and Cambridge schools within reach of western Uttar Pradesh, whether by a family move or boarding.",
      schools: ["Genesis Global School, Noida", "GD Goenka World School", "Pathways World School"],
    },
  ],

  modesIntro:
    "Whatever the label, a Purkazi lesson works the same way: video, one tutor, one learner, an Indian clock under both. What differs is rhythm, a calm weekly habit, a written record to follow progress, or a tight block before an exam. We do not send anyone to your home, and that is a Gurugram and Delhi NCR arrangement only.",
  modes: [
    {
      title: "A steady weekly lesson",
      description:
        "One fixed slot with the same tutor and student, timed around school and evening routines in Purkazi. Families find it easiest to sustain and rarely change it.",
      bullets: [
        "Tutor is chosen for the subject and level, not for how close they live",
        "Works for IB DP, MYP and Cambridge or Edexcel IGCSE material",
        "Past papers are marked live during the call",
        "The same tutor stays with the student over the term",
      ],
    },
    {
      title: "Weekly lesson with a written trail",
      description:
        "The same live hour, but a short note follows every class and a longer review lands every few weeks, so a parent can see what was covered without sitting in on the call.",
      bullets: [
        "A brief note after each session lists topics and homework",
        "A periodic review resets the plan when needed",
        "Well suited to younger PYP and MYP students",
        "A second weekly slot can be added by message before mocks",
      ],
    },
    {
      title: "An exam-season push",
      description:
        "Sessions cluster closer together over a school break or before an exam series, with timed papers followed by fast feedback. We plan them around the cane season, weddings and festivals.",
      bullets: [
        "Papers are marked against current board criteria",
        "Feedback returns within days, not weeks",
        "Dates are shaped by the boarding calendar and local festivals",
        "Best booked two to three weeks before term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families connected to Purkazi",
      paragraphs: [
        "Purkazi is a nagar panchayat of about 27,500 people at the 2011 census, strung along the Delhi-Dehradun highway in Muzaffarnagar district. Schools here follow the UP Board, with CBSE affiliation increasingly common among private campuses. We have not been able to confirm a single IB or Cambridge or Edexcel centre inside the town, and this page will not pretend otherwise.",
        "The families who still look for IB and IGCSE tutors in Purkazi tend to share a small set of reasons. Some have a son or daughter already studying away, in Meerut, Dehradun or the NCR, and want holiday support. Others have relatives abroad and want the child ready for study overseas. A few are returning from a job posting and cannot interrupt a syllabus midway.",
        "That makes the town a place where local supply of specialist teachers is essentially nil. A UP Board maths teacher is easy to find. A teacher who has marked this year's Cambridge Chemistry scripts or guided an IB Maths exploration is not, and the search radius has to widen well beyond Muzaffarnagar district to find one.",
        "Distance is not a disadvantage once the lesson is online. The same Cambridge paper is marked to the same scheme whether it is written in Purkazi or Pune, and IB moderators apply a single standard worldwide. The tutor's job is to bring a student to that standard, wherever the desk happens to be.",
      ],
      table: {
        caption: "Routes a Purkazi family usually weighs for IB or Cambridge schooling",
        columns: ["Option", "Rough distance from Purkazi", "What the family should expect"],
        rows: [
          ["Staying in Purkazi", "0 km", "UP Board or CBSE schools only, as far as we can confirm"],
          ["Muzaffarnagar city", "Roughly 25-30 km by road", "A larger choice of CBSE and private schools, but no international school confirmed"],
          ["Meerut", "Roughly 80-90 km by road", "A small number of schools with international programmes, including Vidya Global School"],
          ["Dehradun boarding", "Roughly 100-120 km via Roorkee", "Several boarding schools running IB or Cambridge programmes"],
          ["Delhi NCR", "Roughly 150-170 km", "The widest choice of IB and Cambridge schools within reach"],
        ],
      },
      bullets: [
        "No IB or Cambridge/Edexcel school is confirmed inside Purkazi",
        "Enquiries come from boarders, returning families and UP Board households planning a switch",
        "Online matching removes the lack of local specialists",
        "Exam papers are marked identically whatever the student's postcode",
      ],
    },
    {
      heading: "How is IB or IGCSE different from the UP Board and CBSE in Purkazi?",
      paragraphs: [
        "The main difference is how a question is asked. A UP Board paper names the topic and expects the textbook's answer. A Cambridge or IB question often hides a familiar idea inside an unfamiliar situation, such as a data table about irrigation, and then asks the student to explain, compare or evaluate. Students who memorise lines from a guide book find those papers uncomfortable at first.",
        "Coursework is the second difference. Internal assessment barely exists in UP Board schooling and plays a small role in CBSE, yet Cambridge and IB both publish long criteria and expect self-directed investigations marked against them. A student moving from Class 9 or 11 has rarely written a lab report or exploration of that kind, so the habit has to be built from scratch.",
        "Depth varies too. IGCSE Core overlaps heavily with what CBSE covers by Class 10, while Extended pushes a step further. IB Diploma HL Maths and sciences go beyond Class 12 content in several topics. Whichever tier or level a student takes decides how large the jump feels.",
        "None of this makes the switch unrealistic. Families who compare a spread-out, criteria-marked workload with a single board-exam fortnight often come to prefer the former, because it rewards steady work through the year.",
      ],
      table: {
        caption: "How the boards a Purkazi family compares differ",
        columns: ["Feature", "UP Board", "CBSE", "IB or IGCSE"],
        rows: [
          ["Presence around Purkazi", "Most local schools", "A growing number of private schools", "None confirmed; reached through boarding or relocation"],
          ["Question style", "Direct and syllabus-matched", "Direct with some application", "Familiar ideas in new contexts"],
          ["Coursework", "Very little", "A small internal share", "A large share in IB; practical papers and projects in IGCSE"],
          ["Recognition abroad", "Mainly domestic", "Mainly domestic with wide acceptance", "Widely recognised by overseas universities"],
        ],
      },
      bullets: [
        "Unfamiliar question wording is usually the first shock for a UP Board student",
        "Criteria-marked coursework is a new skill for most switchers",
        "The Core versus Extended decision affects the later jump to the Diploma",
        "Many families come to prefer the steadier IB or IGCSE workload",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a family in Purkazi?",
      paragraphs: [
        "There is no fixed fee, and we publish no prices. What you pay is quoted in writing before the trial lesson turns into a booking, and it depends on a few things you can see for yourself rather than on your postcode.",
        "The biggest factor is how few tutors nationally can teach your subject and level at the current standard. IB Physics HL or Chemistry HL draws from a small pool and sits higher, while a common IGCSE subject has many qualified teachers and tends to cost less. A tutor who has recently marked or taught the exact specification is worth more per hour than a generalist.",
        "Geography plays no part. Because the lesson is online, a tutor in Kochi, Jaipur or Bhopal costs the same for a Purkazi student, and there is no travel charge, no vehicle fuel and no waiting time on the highway. The only costs are the lesson hours and any extra exam-season blocks you choose.",
        "Judge value by what fills the hour. A tutor who has taken students through this year's exploration or paper gets further in one class than someone re-teaching content the school already covered. Nothing locks a family in either, since you can pause after a few weeks and a tutor who is not the right fit can be swapped.",
      ],
      bullets: [
        "Rarity of the subject and level nationally drives most price differences",
        "No travel cost ever enters a Purkazi quote",
        "The rate is written down before booking and stays fixed",
        "You can pause or change tutor without penalty",
      ],
    },
    {
      heading: "Online home tuition, Purkazi coaching centres, home tutors or self-study",
      paragraphs: [
        "Coaching in and around Purkazi is aimed at what most local families need: UP Board revision, English-medium batches and competitive-exam preparation for engineering and medical seats. That serves its audience well, but it cannot teach IB Chemistry HL or IGCSE Additional Mathematics, because too few students ask for either to fill a room.",
        "For ordinary school subjects a private home tutor is easy to find in the town. Ask for one who has taught a Cambridge practical paper or a Diploma Internal Assessment, and the search usually comes back empty within the district. Tutors with that experience live in larger cities.",
        "Self-study works for disciplined students, particularly in IGCSE Mathematics, where past papers and mark schemes circulate openly. What it cannot supply is a second pair of eyes on a coursework plan or an extended answer, which is where students most often lose marks without knowing why.",
        "Online one-to-one lessons fill that gap. The student keeps their own desk and routine, the parent avoids a drive to Muzaffarnagar after school, and the tutor is chosen for the exact syllabus rather than for who is nearest.",
      ],
      table: {
        caption: "Four ways a Purkazi student can get IB or IGCSE help",
        columns: ["Route", "Match to the syllabus", "Attention per student", "Gap for a Purkazi family"],
        rows: [
          ["Coaching centre batch", "Aimed at UP Board and entrance exams", "Shared in a group", "No batch covers IB or Cambridge content"],
          ["Local private home tutor", "Varies widely", "One-to-one", "Hardly anyone nearby has taught an international syllabus"],
          ["Self-study", "Depends on the student", "None", "Coursework and extended answers go unread"],
          ["Online one-to-one tutor", "Chosen for the code and tier", "One learner at a time", "Opens the whole country instead of a short local list"],
        ],
      },
      bullets: [
        "Local coaching fills with UP Board and entrance demand",
        "Few local tutors have taught the live international syllabus",
        "Coursework needs an experienced second reader",
        "Online matching removes the local supply problem",
      ],
    },
    {
      heading: "Cane season, winter fog and wedding weeks: planning a Purkazi exam year",
      paragraphs: [
        "Western Uttar Pradesh runs on sugarcane, and the calendar around Purkazi bends to the crushing season, which broadly runs from late autumn into spring. Trolleys queue on the highway, mills run day and night, and some families are busy with harvest and payments. A student's evenings can disappear, so we agree a fixed lesson slot early and keep a spare weekend slot in reserve.",
        "Winter brings dense fog on the Delhi-Dehradun highway, which delays school buses and shortens days around December and January. Mock exams often fall in that same window. Because the lesson is on a screen, the fog affects the school run but not the tutoring hour, and we simply move a class to a clearer part of the day if a power cut or a late bus intervenes.",
        "Cambridge sits two main series, May-June and October-November, and the IB Diploma has a May session with results in early July. A student's own school decides which series to enter. For both, the last six to eight weeks before papers do more for a grade than the months before, provided the plan is honest about the ground left.",
        "Summer heat can push May temperatures past 40 degrees Celsius and sometimes disrupt power, and the monsoon in July to September can flood link roads. Add the wedding season, Holi, Diwali, Eid and the Kanwar Yatra weeks in July, when roads around the Haridwar route are crowded, and a planned calendar is far easier than a rescheduled one.",
      ],
      table: {
        caption: "How the year around Purkazi shapes an IB or IGCSE plan",
        columns: ["Time of year", "What happens locally", "What it means for lessons"],
        rows: [
          ["November to March", "Cane crushing season and winter fog on the highway", "Fixed evening slots; the online class is unaffected by delays outside"],
          ["December to January", "Fog, cold, mock exam period", "Morning or late-afternoon options and a spare weekend slot"],
          ["May to June", "Peak heat; IGCSE May-June series and IB Diploma May exams", "Timed papers and final revision blocks"],
          ["July", "Monsoon and Kanwar Yatra traffic towards Haridwar", "Lessons continue online while roads are busy or closed"],
          ["October to November", "Festival season; IGCSE October-November series", "A short planned pause around Diwali, then a focused push"],
        ],
      },
      bullets: [
        "Cane season fills evenings, so lock a slot early",
        "Fog delays the school run, not an online lesson",
        "Both Cambridge series and the IB May session shape the plan",
        "Weddings and festivals deserve a planned pause",
      ],
    },
    {
      heading: "Where do Purkazi students go after IB or IGCSE?",
      paragraphs: [
        "Three routes generally stay open: an Indian degree, an engineering or medical seat, or admission abroad. For local degree study, families near Purkazi look at colleges in Muzaffarnagar and Meerut, including those affiliated to Chaudhary Charan Singh University, and some look further to Delhi University through CUET-UG.",
        "For engineering and medicine, an IB or IGCSE result first needs equivalence recognition from the Association of Indian Universities. After that, JEE Main and NEET eligibility depends on the subjects taken, since both exams assume a particular science and mathematics base. Families in this belt know entrance coaching well, and subject tutoring usually runs next to it rather than replacing it.",
        "For study abroad, the predicted grade your school issues in Class 12 matters as much as the final result. UK universities state an offer as IB points with Higher Level minimums, while US applications weigh the predicted grade alongside essays and activities. Canadian, Australian and European universities each set their own rules.",
        "Roorkee is the nearest well-known engineering name for families on the Uttarakhand side, and Haridwar and Dehradun draw some students towards colleges and universities there. IB Gram does not manage admissions. Tutors help close subject gaps and raise predicted grades, and explain what a given course tends to expect.",
      ],
      bullets: [
        "Colleges in Muzaffarnagar and Meerut cover local degree study",
        "AIU equivalence and the right subjects decide JEE and NEET eligibility",
        "Entrance coaching runs beside subject tutoring, not instead of it",
        "Predicted grades carry weight for overseas applications",
      ],
    },
    {
      heading: "Choosing IB Maths AA or AI and handling the sciences from Purkazi",
      paragraphs: [
        "Temperament matters as much as career plans when picking between Analysis and Approaches and Applications and Interpretation. A student who likes algebra, proof and abstract problems usually suits Approaches, which engineering and pure science courses prefer. A student who is happier with data, statistics and a graphic calculator often thrives in Interpretation, especially for economics, business or social science.",
        "All three sciences ask for something a UP Board or CBSE class rarely builds: an Internal Assessment that holds up under scrutiny rather than repeating a textbook practical. Physics HL adds tight time pressure, Chemistry HL leans on organic reactions once bonding is behind a student, and Biology marks are often lost through command-word errors.",
        "With no Diploma teacher near the town, the quickest fix is a tutor who has worked the exact HL or SL syllabus recently and marks against the current scheme. That tutor can also time the Internal Assessment so that data collection, drafting and feedback do not collide with exam preparation.",
        "For a boarder in Dehradun or the NCR who comes home during breaks, a short, structured block of lessons at the right moment, for example just before the exploration deadline, is usually more useful than a thin weekly trickle all year.",
      ],
      bullets: [
        "Maths choice often follows temperament as well as target course",
        "Every science needs an Internal Assessment designed to survive scrutiny",
        "Command words decide many Biology marks",
        "A tutor who knows the current syllabus beats a generalist",
      ],
    },
    {
      heading: "Choosing IGCSE Core or Extended for a student from Purkazi",
      paragraphs: [
        "Tiers are new to most UP Board families, so here it is plainly: Core caps the grade lower than Extended can reach, and the choice made in Class 9 quietly shapes how manageable Class 11 feels, whether it leads to A Levels, the IB Diploma or another route.",
        "A student who may take IB Maths AA at Higher Level later gains most from Extended Mathematics 0580, with 0606 alongside if the school offers it. The same logic applies to sciences: Extended content sits closer to what DP Physics or Chemistry assumes at the start.",
        "A student already at a Cambridge school works within the tiers and subjects that school has fixed, so tutoring strengthens that combination rather than chasing an ideal one. A family still deciding does better by seeing what each tier demands before committing.",
        "Households heading to Edexcel rather than Cambridge should note that Foundation and Higher tiers phrase questions differently even where the content overlaps. A tutor who knows both specifications saves the student from rebuilding exam technique later.",
      ],
      bullets: [
        "The Class 9 tier choice sets the ceiling and the later jump to DP",
        "0606 Additional Mathematics eases entry into IB Maths AA",
        "Existing school tiers are strengthened, not replaced",
        "Edexcel tiers differ in phrasing from Cambridge",
      ],
    },
  ],

  process: [
    { title: "Send the brief", description: "Message us on WhatsApp or email with the board, subject, level, school term dates and your goal. Even a partial brief is enough to begin." },
    { title: "Receive a matched tutor", description: "We shortlist tutors who have recently taught that exact syllabus and share their background, so you meet a specialist and not a generalist." },
    { title: "Take the free trial", description: "A live trial lesson lets your child work a real problem with the tutor. You judge the teaching before paying anything." },
    { title: "Agree the plan in writing", description: "Weekly slots, rate and goals are confirmed in writing before you book, with no published price list and no hidden extras." },
    { title: "Learn, review, adjust", description: "A written note follows each class, a review comes every few weeks, and a tutor change is available if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched on the real syllabus", description: "We start from your child's IB subject and level or IGCSE code, then look for a teacher who has taught exactly that." },
    { title: "Honest about delivery", description: "Lessons are online. Tutors do not visit homes in Purkazi, and home visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain, set practice and mark work. Internal Assessments, Extended Essays and TOK essays remain the student's own." },
    { title: "A written note every time", description: "After each session you receive a short note on topics, mistakes and homework, so you can follow progress without sitting in." },
    { title: "Free trial and a swap if needed", description: "Try a lesson first, and change tutor if the fit is wrong, with rates quoted in writing before you book." },
    { title: "Built for a small-town household", description: "Slots are planned around cane season, fog, power cuts and festivals, and no one has to drive to Muzaffarnagar after school." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE tutors in Purkazi?", answer: "Yes, through IB Gram, though the tutors teach online rather than from Purkazi itself. We could not confirm any local specialist in the Diploma or Cambridge syllabi, so we match a tutor from across India to your child's exact subject and level. Lessons run live on video in Indian Standard Time, and a free trial lesson comes first so you can judge the teaching before paying." },
    { question: "Is there home tuition for IB or IGCSE in Purkazi?", answer: "Not in the sense of a tutor visiting your house. Tutors do not travel to homes in Purkazi, because home visits run only in Gurugram and parts of Delhi NCR. What we offer is one-to-one tuition at home, delivered online: your child sits at their own table with a laptop and a tutor teaches live, with the same attention a visiting teacher would give." },
    { question: "Is Purkazi the same as Purqazi or Purquazi?", answer: "Yes, they are different spellings of the same town, a nagar panchayat in Muzaffarnagar district, Uttar Pradesh. Official records and signboards vary between Purkazi, Purqazi and Purquazi, and some searches use a space as in Pur Qazi. This page covers all of them, so a family searching under any spelling lands on the same online tutoring service." },
    { question: "Is there an IB or Cambridge school in Purkazi?", answer: "We could not confirm one. Schools in and around Purkazi follow the UP Board or CBSE, and the nearest visible international-curriculum schools are in cities such as Meerut, Dehradun and Delhi NCR. If your child studies at one of those, our tutors work to that school's syllabus, term dates and assessment calendar, from wherever you live." },
    { question: "How much does IB or IGCSE tuition cost for a Purkazi student?", answer: "Rates are quoted in writing before you book, and we publish no price list. The rate depends on how rare the subject and level are nationally, how current the tutor's experience is and how many hours you plan. Your location has no effect because lessons are online, so there is no travel cost, and a free trial lesson comes first." },
    { question: "Can my child study IB while living in Purkazi?", answer: "Not at a school in the town, since no local school is known to run the IB. Some families have a child enrolled elsewhere, or follow a school's distance arrangement, and want tutoring from home during holidays. We support the subjects and levels your child's actual school teaches, and we do not replace the school or award qualifications." },
    { question: "What is the difference between IB Maths AA and AI?", answer: "Analysis and Approaches suits students who enjoy algebra, functions, calculus and proof, and it leans towards engineering and pure sciences. Applications and Interpretation suits students who prefer data, statistics and modelling with technology. The choice follows temperament and intended degree, and a few trial sessions with a tutor usually make the right route clear before the school's deadline." },
    { question: "Is IGCSE Core or Extended better for a Purkazi student switching from CBSE?", answer: "Extended is usually the stronger choice for a student who may continue to IB Maths or sciences, because its content sits closer to the Diploma. Core suits a student who needs more time with fundamentals. The right tier depends on current marks and the target school, so we help check readiness before the Class 9 decision is final." },
    { question: "Will you write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach and never write Internal Assessments, Extended Essays, Theory of Knowledge essays or any coursework. They help a student choose a topic, understand the criteria, plan a structure and read a draft for gaps. The writing, data and conclusions must be the student's own, which protects the student from an academic honesty case." },
    { question: "Can lessons run if there is a power cut or poor internet in Purkazi?", answer: "Usually yes, with a little planning. Power cuts and weak connectivity can happen around the highway belt, so we recommend a laptop with a charged battery, a phone hotspot as backup and a slot your family can keep reliably. If a class is interrupted, we reschedule it rather than leave the student without the hour." },
    { question: "When are the IB and IGCSE exams, and how should we plan?", answer: "The IB Diploma exams are in May with results in early July, and Cambridge IGCSE runs in May-June and October-November. Your child's school decides the series. Plan backwards: syllabus coverage first, past papers in the last two months, and mock feedback in between. We help build that timeline around local cane-season and festival weeks." },
    { question: "Can a student from Purkazi get into Indian engineering colleges after IB or IGCSE?", answer: "Yes, but the route needs checking early. An IB or IGCSE result needs Association of Indian Universities equivalence, and JEE Main or NEET eligibility depends on the subjects taken. Entry to colleges such as those in Roorkee follows their own rules, so we recommend confirming eligibility with the institution while subject choices can still change." },
    { question: "How do I choose between UP Board, CBSE and an international curriculum?", answer: "Start from where the child is likely to study later. Staying in India with entrance exams favours CBSE or the UP Board with coaching. Plans to study abroad favour IB or Cambridge, which universities recognise widely. Changing midway is possible, but the switch costs time, so decide before Class 9 or Class 11 where you can." },
    { question: "How do I get started with IB Gram from Purkazi?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com with the board, subject, level and your child's school term dates. We reply with a matched tutor and a free trial lesson time. After the trial you receive a written plan and rate, and you decide whether to continue." },
    { question: "Can my younger child get IB PYP or MYP support from Purkazi?", answer: "Yes. Tutors work with PYP and MYP students on reading, number fluency, inquiry skills and criterion-based writing, in short sessions suited to the age. The lessons support whatever school the child attends, and parents receive a note after each class so they can follow what was covered even without sitting beside the child." },
    { question: "Do you work with schools or coaching centres in Purkazi?", answer: "No. IB Gram is an independent tutoring service with no tie-up with any school or coaching centre in Purkazi or Muzaffarnagar, nor with the IB, Cambridge or Pearson Edexcel. Any school named on this page marks only a place families from this region sometimes consider, and we recommend verifying a school's authorisation on its own listing." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online matching works for families outside the big metros." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one place where in-person home lessons run." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "Subjects, levels and what an IB tutor does day to day." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and subject options." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, Internal Assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP is graded." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition in the final year." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and teaching experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and book a free trial lesson." },
    { label: "IB and IGCSE tutoring in Meerut", href: "/meerut/", description: "The nearest large city with a visible international school." },
    { label: "IB and IGCSE tutoring in Saharanpur", href: "/saharanpur/", description: "A neighbouring district town in western Uttar Pradesh." },
    { label: "IB and IGCSE tutoring in Roorkee", href: "/roorkee/", description: "The engineering town just over the border along the same highway." },
    { label: "IB and IGCSE tutoring in Dehradun", href: "/dehradun/", description: "The boarding-school valley many north Indian families consider." },
  ],

  closingHeading: "Start with a free trial lesson for your Purkazi student",
  closingBody:
    "Tell us the board, subject, level and your child's school dates, and we will match a tutor who has taught that exact syllabus. Lessons run online at your own table, and the first class is free. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, then decide after the trial whether to continue.",
};
