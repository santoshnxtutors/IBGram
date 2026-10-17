import type { CitySeoPage } from "../types";

/**
 * /shamgarh/ - IB and IGCSE tutoring page for Shamgarh, a nagar parishad in Mandsaur district,
 * Madhya Pradesh (Ujjain division, population 24,637 at the 2011 census). No IB or Cambridge/Edexcel
 * school could be confirmed in the town, so stripSchools is empty and the clusters point to the
 * Indore and Udaipur schools already verified on the published Indore, Mandsaur and Udaipur pages.
 * Online delivery only: tutors do not visit homes in Shamgarh.
 */
export const shamgarh: CitySeoPage = {
  slug: "shamgarh",
  countryName: "Shamgarh",
  countryNameLong: "Shamgarh, Madhya Pradesh",
  demonym: "Shamgarh",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times bend around harvest weeks on Malwa farms, the Navratri and Diwali stretch, and the hot weeks before the monsoon arrives",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.1833, longitude: 75.6333 },
  wikipedia: "https://en.wikipedia.org/wiki/Shamgarh",
  alternateNames: ["Shamgarh Mandsaur", "Shyamgarh", "Syamgarh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shamgarh | Private Online Tuition",
  metaDescription: "Private online IB and IGCSE tutors for Shamgarh, Mandsaur district: PYP, MYP, DP and Cambridge or Edexcel IGCSE, one to one, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Shamgarh",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION FOR SHAMGARH, MANDSAUR DISTRICT",
  heroSubtitle:
    "Parents searching for home tuition in Shamgarh for an IB or IGCSE course meet the same hurdle: the town is small, the syllabus is specialised, and nobody within a short ride has taught it. IB Gram answers that with private one-to-one tuition at home, delivered online. Your child sits at their own desk in Shamgarh, a tutor who currently teaches that exact Diploma, Middle Years or Cambridge course appears on screen, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Shamgarh",
  imageAltText: "A Shamgarh student working through an IB Mathematics problem set with a tutor over a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Shamgarh",
    "IGCSE tutor Shamgarh",
    "IB home tuition Shamgarh",
    "IGCSE home tuition Shamgarh",
    "IB private tuition Shamgarh",
    "IB Maths tutor Shamgarh",
    "IGCSE Maths tutor Shamgarh",
    "IB Physics tutor Shamgarh",
    "IB Chemistry tutor Shamgarh",
    "IB Biology tutor Shamgarh",
    "IB DP tutor Shamgarh",
    "IB MYP tutor Shamgarh",
    "IB PYP tutor Shamgarh",
    "IGCSE online tuition Shamgarh",
    "Cambridge IGCSE tutor Shamgarh Mandsaur",
    "online IB tutor Mandsaur district",
    "IB tutor Garoth Bhanpura Sitamau",
    "IGCSE tutor Madhya Pradesh online",
    "IB tutor Shyamgarh",
  ],

  heroTrustPoints: [
    "Tutors are picked for the exact IB course or IGCSE code, never for how close they live to Shamgarh",
    "Every lesson is live and online; a tutor does not turn up at a Shamgarh door, because home visits run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, and fees are written down before you decide anything",
    "IB Gram is independent and has no tie to the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned here",
  ],
  heroStats: [
    { value: "Malwa to anywhere", label: "No distance penalty online" },
    { value: "PYP to DP", label: "All four IB stages" },
    { value: "May & Nov", label: "Exam series we plan around" },
    { value: "Free trial", label: "Lesson before any fee" },
  ],

  intro: {
    heading: "Why a Shamgarh family ends up looking for an IB or IGCSE tutor",
    paragraphs: [
      "Shamgarh is a town of roughly twenty-five thousand people in the western corner of Madhya Pradesh, in Mandsaur district and the Ujjain division. Its everyday schooling is MP Board and CBSE, taught in Hindi and English, and most families judge a school by how many of its students reach the Class 12 boards and then a state or central entrance exam. Nothing in that picture mentions the IB or Cambridge, so a parent here who is searching for IB and IGCSE tutors in Shamgarh usually has a particular reason.",
      "The reasons we hear are fairly consistent. A family has a child enrolled in an international school in Indore as a boarder and wants help in the weeks spent at home. A parent has changed jobs and is moving to a city where the IB is standard, and wants the child ready for it before the move. A household with relatives abroad is keeping the door open to a foreign degree, and the IB Diploma or IGCSE is a recognised way to do that. In each case the subject help the child needs does not exist within an hour of the house.",
      "That is why the delivery is online and one to one. A private tutor logs in from wherever in India they live, shares a whiteboard, marks the child's own past papers live and sends a written note afterwards. For a family in Shamgarh this is the practical form of home tuition: the child studies in their own room, with no travel to Mandsaur or Indore, and with a teacher who has taught this very course recently. Tutors do not visit homes in Shamgarh. That arrangement exists only in Gurugram and parts of Delhi NCR.",
      "IB Gram is an independent tutoring service. It is not part of, endorsed by or affiliated with the International Baccalaureate, Cambridge University Press and Assessment, Pearson Edexcel or any school named on this page. Tutors explain, practise and give feedback; they never write an Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework for a student.",
    ],
    bullets: [
      "IB support from PYP through MYP to the Diploma Programme and CP subjects",
      "Cambridge and Pearson Edexcel IGCSE matched to the exact syllabus code",
      "Private lessons live on Indian Standard Time, so there is no time-zone juggling",
      "A written note after each session and a plan for the first month",
      "No home visits in Shamgarh; those are limited to Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No school in Shamgarh runs any of the four IB programmes, so a family here meets them through a school elsewhere, a planned relocation, or a deliberate decision to follow one independently. The notes below describe each stage as it tends to reach a household in this part of Malwa.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised around units of inquiry that cut across subjects, and the final year ends with a pupil-led Exhibition. There are no external exams, which means a tutor spends the time on fluent reading, number sense and the habit of asking a good question, not on drilling for a paper.",
      countryNote: "For Shamgarh, PYP interest is mostly a child heading to an Indore school or a family preparing a move abroad who wants the child already used to inquiry-style work.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against published criteria, and Year 5 brings the Personal Project, a long self-directed piece. Many students find it harder to explain and justify a method than to carry it out, so criterion-based writing becomes the main thing to practise.",
      countryNote: "Local MP Board and CBSE classes reward the correct final answer, so a Shamgarh student meeting MYP criteria for the first time usually needs a few weeks to adjust to showing reasoning.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three subjects are taken at Higher Level and three at Standard, alongside Theory of Knowledge, a 4,000-word Extended Essay and CAS. Internal assessment accounts for a good share of most subject grades, and exams are written in May with results released in early July.",
      countryNote: "Shamgarh has no Diploma school, so DP students in the family circle are normally boarding at an Indore school and want support in the months at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A student takes a smaller set of Diploma courses plus a career-related study, a reflective project and language development. Few Indian schools run it, but the Diploma subjects inside it are taught to the same standard as in the full Diploma.",
      countryNote: "Enquiries for CP from Shamgarh are rare, and are really requests for help with one or two Diploma subjects.",
    },
  ],

  subjectsIntro:
    "Tell us the school, the exam session and the level, and we find a tutor whose recent teaching matches that course. In a town where no neighbour has done the same subject, this precision saves the most time, because the child never has to adapt to a generalist.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, proof-style reasoning and the unfamiliar questions of Paper 3 at Higher Level. A student used to MP Board model answers learns to explain why a method works." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use, with a calculator-led exploration that needs an early start and a topic the student actually cares about." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and the option topics. Sessions train quick, tidy use of the data booklet and clear experimental write-ups." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, equilibrium and a hard turn into organic chemistry. We also work through how to plan a practical investigation that can be defended." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, with practice on answering the exact command word rather than writing everything remembered." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams drawn correctly and labelled fully, then built into evaluation, plus the commentary portfolio built from current news." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study papers where the answer must use the company in front of the student, not a memorised definition." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparative writing and the Individual Oral, which students rehearse far too little." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming practice, algorithms and databases, and a product with documentation that matches the code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to research, studies recalled accurately and extended responses that build to a conclusion." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking and case studies, useful for a student from an agricultural district who has seen soil, water and crop issues first hand." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case studies, data handling and a fieldwork write-up built on a method that would stand up." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis for Paper 1, sustained argument for Paper 2 and a defensible Internal Assessment question." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A natural pairing for students from a Hindi-speaking home, with oral practice and the written text types the paper sets." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led coaching on knowledge questions and the exhibition, without any writing done for the student." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE (CAIE) and Pearson Edexcel IGCSE share many topics but differ in paper style, so each Shamgarh match begins from the syllabus code and tier the student is actually sitting. Private candidates and students at a school elsewhere are both common.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier asks for fluent algebra, trigonometry and non-calculator method, and examiners reward shown working." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Early calculus, functions and vectors, a useful step before the Diploma Maths courses." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement under time pressure and a dedicated rehearsal for the alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, rates, organic basics and the practical skills that show up in the written papers." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, ecology and human systems, with longer written answers practised on their own." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Short diagrammed answers first, then evaluation for the extended questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python practice paired with the theory and pseudocode tracing the paper demands." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary and descriptive tasks, with timed work on an unseen passage." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension, letter and essay formats and oral practice for a student who speaks Hindi at home but writes the examiner's style rarely." },
  ],

  regionsTitle: "Shamgarh and the towns around it that our families come from",
  regionsIntro:
    "Lessons are online, so these places are not delivery addresses. They are the towns of Mandsaur district and its neighbours that a Shamgarh family shops in, travels through and compares schools across, and each note tells you how the place sits in a study week.",
  regions: [
    { name: "Shamgarh town centre", note: "The market area and nagar parishad core, where most households live within a short ride of one another and evening mobile data is usually reliable for video lessons." },
    { name: "Mandsaur", note: "The district headquarters and the nearest large town for most Shamgarh families, with the district's coaching classes and larger private schools." },
    { name: "Garoth", note: "A neighbouring town in the district that families pass through when travelling to Mandsaur or Rajasthan; schooling is MP Board and CBSE." },
    { name: "Bhanpura", note: "A town in the north of the district, close to the Rajasthan border, often compared with Shamgarh when parents discuss where to send older children for Class 11." },
    { name: "Sitamau", note: "A district town to the east towards Ratlam, with its own college campus and a pattern of schooling similar to Shamgarh." },
    { name: "Suwasra", note: "A tehsil town south of Mandsaur whose families, like Shamgarh's, look towards Indore for anything beyond MP Board and CBSE." },
    { name: "Malhargarh", note: "A town in the south of the district; parents here and in Shamgarh often swap notes about which Indore schools take boarders." },
    { name: "Gandhi Sagar area", note: "Villages around the Chambal reservoir in the north-west of the district, where internet quality varies and a wired or strong mobile connection matters before booking regular lessons." },
    { name: "Neemuch and Ratlam side", note: "Nearby district towns on the Rajasthan and Ujjain side, where some Shamgarh relatives live and from where a few students go to boarding schools further away." },
  ],

  schoolDisclaimer:
    "School names on this page describe where IB or Cambridge teaching actually exists near Shamgarh and are included only so parents can see real options. IB Gram is an independent service with no contract, partnership or endorsement connecting it to Choithram International, Emerald Heights, Daly College, any Udaipur school named, the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Shamgarh and Mandsaur district",
      note: "We could not confirm any school in Shamgarh or elsewhere in Mandsaur district that teaches the IB or a Cambridge or Edexcel IGCSE, so local options are limited. Families here use MP Board and CBSE schools and add international-curriculum study through tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "The usual choice for Malwa families who want an international school, whether as a boarder or after moving. Indore is the largest city in the region and is reached by road and rail from Mandsaur district.",
      schools: ["Choithram International School", "The Emerald Heights International School", "Daly College"],
    },
    {
      city: "Nearby: Udaipur",
      note: "Reachable across the Rajasthan border, and the other city that families in western Malwa name when comparing international schools.",
      schools: ["Crossroads International School", "Rockwoods International School", "Seedling The World School"],
    },
  ],

  modesIntro:
    "The format is always the same: live video, one tutor, one student. What changes is how often, and for what purpose. Because Shamgarh families often plan around harvest weeks, a relative's wedding or a child's stay at a hostel, we set the rhythm with you and revisit it as the year moves.",
  modes: [
    {
      title: "A fixed weekly lesson",
      description: "One hour or ninety minutes at a regular time, usually an evening or a weekend morning. This is where almost every Shamgarh family begins.",
      bullets: [
        "One named tutor for the subject, for continuity",
        "Works for IB Diploma subjects and for IGCSE codes alike",
        "Past papers marked together during the lesson",
        "A short written note afterwards covering what was done and what is next",
      ],
    },
    {
      title: "Holiday-block intensive for boarders",
      description: "For a child boarding at an Indore school who returns to Shamgarh for Diwali or the summer, a daily block of lessons that covers a gap in a topic.",
      bullets: [
        "Several short sessions a week over the break",
        "Planned with the school's own teaching sequence in mind",
        "Useful before internal exams or mocks",
        "Easy to pause when the child returns to school",
      ],
    },
    {
      title: "Exam-series push",
      description: "A dense run of timed papers and quick feedback in the six to eight weeks before the May or November session.",
      bullets: [
        "Papers sat under timed conditions at home",
        "Marking against current mark schemes",
        "Weak topics reordered every fortnight",
        "Best booked two to three weeks before the block starts",
      ],
    },
  ],

  sections: [
    {
      heading: "What does the school scene around Shamgarh look like for IB and IGCSE?",
      paragraphs: [
        "Within Shamgarh itself the schools follow the MP Board or CBSE, with Hindi widely used for teaching and English as a subject or medium depending on the school. We checked for any school in the town or in the wider Mandsaur district that teaches the International Baccalaureate or a Cambridge or Edexcel IGCSE and could not confirm one, so this page does not name one. That is an honest statement of a limited local picture, not a gap in what a child here can learn.",
        "Parents who want an international curriculum therefore look outward. Indore, the commercial centre of Malwa, has the most choice in the region, including Choithram International, Emerald Heights and Daly College. Udaipur lies across the border in Rajasthan and is the other city that Malwa families compare. For a child boarding at one of these schools, Shamgarh is where the holidays happen, and a tutor makes those weeks count.",
        "The second group is not enrolled in any international school. These are children in a local school whose parents plan a move, or who want the IB Diploma or IGCSE credentials for study abroad, and who therefore study part of the course independently. For them the tutor is the missing classroom.",
        "In both cases the examination is identical to the one sat elsewhere. The International Baccalaureate marks Diploma papers to a global standard, and Cambridge and Edexcel set one paper for every candidate worldwide, so being in a small Malwa town does not lower the ceiling; it only changes who can explain the syllabus to you.",
      ],
      table: {
        caption: "Boards a Shamgarh family is likely to meet",
        columns: ["Board", "Where a Shamgarh family meets it", "IB or IGCSE link"],
        rows: [
          ["MP Board", "Government and many private schools in Shamgarh and across Mandsaur district", "None; a student moving to IB usually starts at Class 9 or 11"],
          ["CBSE", "Private schools in Shamgarh, Mandsaur and Neemuch", "Closest in structure to IGCSE Core, but with less applied questioning"],
          ["IGCSE (Cambridge or Edexcel)", "Indore boarding or day schools, and private candidates studying online", "The qualification itself; tutor supplies the specialist teaching"],
          ["IB (PYP, MYP, DP, CP)", "Indore and Udaipur schools, or independent study with a tutor", "The programme itself; Diploma exams in May"],
        ],
      },
      bullets: [
        "No IB or IGCSE school could be confirmed in Shamgarh or Mandsaur district",
        "Indore and Udaipur are the realistic comparison cities for Malwa families",
        "Boarders use tutoring to cover holiday weeks at home",
        "Exam papers and marking standards are the same wherever the student sits them",
      ],
    },
    {
      heading: "How is IB or IGCSE different from the MP Board and CBSE that Shamgarh students know?",
      paragraphs: [
        "The shortest honest answer is that MP Board and CBSE mostly check what a student knows, while the IB and IGCSE check what a student can do with it. A Class 10 Science student in Shamgarh who has learned a diagram of the nitrogen cycle can usually reproduce it; an IGCSE Biology paper might hand over an unfamiliar data table about a crop and ask what it suggests. The facts are the same and the demand is different.",
        "A second difference is the weight given to extended work. In the IB Diploma, a Higher Level subject can have 20 to 30 per cent of its marks come from internal assessment, and the Extended Essay and Theory of Knowledge sit on top. IGCSE has coursework in some subjects and practical papers in the sciences. Students used to a single March board examination need time to learn to plan work across months.",
        "Language use also shifts. Many Shamgarh students think in Hindi and write in English, and IB and IGCSE papers demand tight, accurate English prose in every subject except the language courses. The commonest lost marks are not wrong ideas but vague wording, and a tutor trains the student to say precisely what the question asks.",
        "None of this makes a student from a town like Shamgarh worse prepared; it makes the first term different. Strong CBSE and MP Board mathematics, in particular, is a real asset for IB Maths and IGCSE Extended Mathematics, and tutors build on it rather than replace it.",
      ],
      table: {
        caption: "MP Board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "MP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Main exam style", "Recall and standard problem types", "Application to unfamiliar situations"],
          ["Coursework weight", "Small internal marks", "Up to roughly 20-30% in many IB subjects; coursework or practicals in IGCSE"],
          ["Assessment calendar", "One board exam in March", "IGCSE May-June and October-November; IB Diploma May, with November in some schools"],
          ["Recognition abroad", "Accepted with conversion checks", "Widely recognised for admission and scholarships"],
        ],
      },
      bullets: [
        "Facts carry over; the demand to apply them is what changes",
        "Extended work is planned across months, not crammed in one exam week",
        "Precise English writing is a skill in itself and is coached",
        "Strong Indian-board mathematics is a genuine head start",
      ],
    },
    {
      heading: "What decides the tuition cost for a Shamgarh student?",
      paragraphs: [
        "There are no listed prices here, and that is deliberate: the rate depends on facts about the match, not on the town. The main ones are the level (Diploma Higher Level costs more than IGCSE Core because fewer tutors can teach it well), the subject, how recently the tutor taught that precise syllabus and the length and frequency of the sessions. We write the figure down and send it before the free trial, so you decide with the number in hand.",
        "Distance has no effect on the fee. A lesson delivered to Shamgarh costs the same whether the tutor is in Pune, Chennai or Bhopal, because nobody travels. There is also no add-on for materials: tutors work from public past papers, official specimen papers and their own worked solutions.",
        "It helps to compare against what the other options really cost. A boarder's holiday weeks at home are usually the gaps in a school year, and a handful of targeted sessions can replace a term of drifting. A private candidate who is studying alone often finds that a weekly hour in the weakest subject, plus a mock paper marked before each exam series, is enough.",
        "No lock-in applies. If the fit is wrong, a different tutor is arranged without charge, and a pause for a harvest fortnight, a wedding or a mock exam does not carry a penalty.",
      ],
      bullets: [
        "Level and subject shape the rate more than anything about Shamgarh",
        "The rate is quoted in writing before the trial lesson",
        "Online delivery means no travel cost passes on to you",
        "No contract; pausing or changing tutor is free",
      ],
    },
    {
      heading: "Online tutor, local coaching class, private home tutor or self-study: which suits a Shamgarh student?",
      paragraphs: [
        "A student here can choose from a short list. The first is the coaching classes of Mandsaur and Shamgarh, which are well run for the entrance tests that the local economy rewards, such as NEET and JEE preparation for MP Board and CBSE students. Those batches are built for the board syllabus and do not cover IB Higher Level Physics or the Cambridge Chemistry 0620 syllabus.",
        "The second is a private tutor who comes to the house. For school subjects this is a good arrangement, and many families rely on it. For an IB or IGCSE course the difficulty is supply: a person who teaches the current Diploma programme or the current Cambridge syllabus is rare in a district without a school that uses it.",
        "Self-study is the third path. Past papers are free online and a disciplined student can cover a lot. What goes missing is feedback on internal assessments and long answers, and a second opinion on whether a method scores marks.",
        "The fourth is a matched online tutor, who combines the benefit of a private tutor, one-to-one attention, with a syllabus specialist who would never live in Shamgarh. For most IB and IGCSE needs it is the only route that gives both.",
      ],
      table: {
        caption: "Ways of getting IB or IGCSE help from Shamgarh",
        columns: ["Option", "Syllabus match", "Attention", "Limit in Shamgarh"],
        rows: [
          ["Local coaching class", "Built for MP Board, CBSE and entrance tests", "Group batch", "No IB or IGCSE batch"],
          ["Private home tutor", "Strong for school subjects", "One to one", "Few have taught the current IB or Cambridge syllabus"],
          ["Self-study", "Depends on the student", "None", "No feedback on IAs or long answers"],
          ["Matched online tutor", "Chosen for the exact course and level", "One to one", "Needs a steady connection and a quiet desk"],
        ],
      },
      bullets: [
        "Local coaching serves entrance tests, which is where the demand is",
        "A home tutor with current IB or IGCSE teaching is hard to find locally",
        "Self-study pays off most when a tutor reviews the written work",
        "An online match supplies the specialist the district lacks",
      ],
    },
    {
      heading: "How do the Malwa seasons and festivals affect the exam calendar?",
      paragraphs: [
        "Shamgarh sits on the Malwa plateau, so summers are hot and dry, the monsoon arrives in June and runs through September, and winters are mild. Most households have some link to farming, and the rabi harvest around March and April and the kharif harvest in October and November pull family members, including teenagers, into the fields or the mandi for days at a stretch.",
        "Festivals set a second rhythm. Navratri and Dussehra in autumn, Diwali soon after, and Holi in spring each bring a week or more of social calendar. We schedule around these openly. A lesson booked for Diwali week will rarely survive, so the plan makes the weeks before and after count instead.",
        "The exam series run on their own timetable. IGCSE papers are held in May and June and again in October and November, and IB Diploma written exams take place in May, with results at the start of July. A student following the IB in May should therefore protect March and April, which are also the busiest months on a farming calendar.",
        "Power cuts and connectivity are a practical part of the calendar for the villages around the district. We suggest a charged laptop, a phone hotspot as backup and a lesson time that avoids the hottest part of the afternoon, when voltage fluctuations are more common.",
      ],
      table: {
        caption: "A year in Shamgarh and what it means for lessons",
        columns: ["Period", "What is happening", "How we plan"],
        rows: [
          ["March-April", "Rabi harvest; IB May exams approaching", "Short, intense sessions, mock papers marked quickly"],
          ["May-June", "IB and IGCSE exams; peak heat", "Early-morning or evening slots; no new content"],
          ["July-September", "Monsoon; results out; new academic year", "Good time to build routine and fix weak topics"],
          ["October-November", "Navratri, Diwali, kharif harvest; IGCSE November series", "Lighter weeks around festivals, a push before the series"],
        ],
      },
      bullets: [
        "Harvest weeks are named in advance and planned around",
        "Diwali and Navratri weeks are treated as breaks, not squeezed",
        "May is the key month for both IB and IGCSE",
        "A backup connection is a sensible precaution in outlying villages",
      ],
    },
    {
      heading: "Where do IB and IGCSE students from the Mandsaur belt go next?",
      paragraphs: [
        "Students from this part of Malwa tend to look at a short list of destinations. Indore has Devi Ahilya Vishwavidyalaya, IIT Indore and IIM Indore; Ujjain has Vikram University; Bhopal has AIIMS, MANIT and IISER; and Rajasthan's Kota and Udaipur are close enough to enter family conversations. Further afield, Delhi, Pune, Bengaluru and abroad appear whenever the child's results look strong.",
        "For admissions to Indian universities the key paper is the equivalence certificate from the Association of Indian Universities, which recognises IB and IGCSE qualifications for admission. CUET-UG accepts students from any board, and JEE Main and NEET have eligibility rules about subjects and marks that must be checked against the specific subject combination taken. We recommend checking these in Class 10, not after results.",
        "Abroad, predicted grades arrive before final results, so the predicted score from a school or a tutor-supported mock matters. UK universities quote points with named Higher Level subjects, US colleges treat the IB as one part of a wider file, and Canada, Australia and Singapore each have their own rules.",
        "Tutors here do not run admissions counselling; they raise the subject marks that make the application credible. That might mean taking an IB Chemistry predicted 5 to a 6 before the university deadline, or locking an IGCSE Extended Mathematics grade that allows IB Maths AA later.",
      ],
      bullets: [
        "Indore, Ujjain, Bhopal and Kota are the familiar regional destinations",
        "AIU equivalence and subject-level rules for JEE and NEET need an early check",
        "Abroad, predicted grades drive offers before results exist",
        "Tutors lift subject marks; they do not do admissions counselling",
      ],
    },
    {
      heading: "IB Maths and the sciences: what a Shamgarh student should expect",
      paragraphs: [
        "Mathematics is where Indian-board students often start strongest. Algebra, trigonometry and calculus are taught thoroughly in the MP Board and CBSE, and a Shamgarh student moving to IB Maths Analysis & Approaches HL usually finds the content familiar and the style of questions new. The extra effort goes into explaining a solution in words and into the unusual, multi-step problems of Paper 3.",
        "Applications & Interpretation suits a student more interested in data, economics or the social sciences. It leans on the graphic display calculator, probability models and statistics, with an exploration the student chooses. The common mistake is choosing the topic late, so the tutor helps narrow a topic early and then steps back while the student writes.",
        "Physics, Chemistry and Biology at Higher Level run deeper than Class 12 in several areas, such as quantum and nuclear physics, organic mechanisms and cell metabolism. The experimental investigation in each science is the part that most surprises students from a school with limited lab time, so we coach how to design, record and evaluate an experiment that can be done at home or in school.",
        "A pattern holds across all of them: the student who practises under timed conditions and then has the paper marked against the real scheme improves faster than one who rereads notes. That is what most of a tutor's time is spent on.",
      ],
      bullets: [
        "Strong Indian-board maths carries over; the new skill is explaining reasoning",
        "The exploration topic should be settled long before the deadline",
        "Experimental investigations are coached for design, data and evaluation",
        "Timed, marked papers produce more gain than rereading",
      ],
    },
    {
      heading: "IGCSE: Core or Extended, Cambridge or Edexcel?",
      paragraphs: [
        "Cambridge and Edexcel IGCSE both lead to the same level of qualification, but the papers differ in layout, command words and sometimes content order, so the first question for a family is which board the school or the private-candidate centre uses. Cambridge is more common among the Indian schools in the Indore catchment, and Edexcel appears in some others.",
        "The second question is tier. Core papers cap the highest grade at a C in Cambridge's lettered scale and suit a student for whom a grade of that level is a good outcome. Extended papers open the whole range and are needed for a student who wants to take IB Higher Level Maths or sciences later. The wrong tier can quietly limit the later options.",
        "Subject combination matters too. Students aiming for engineering often take Mathematics, Additional Mathematics, Physics, Chemistry and Computer Science; those aiming for medicine add Biology and keep Chemistry; a commerce-minded student pairs Mathematics with Economics, Business Studies and Accounting. Languages usually include English and Hindi.",
        "We then run a short conversation, on the board, the syllabus code, the exam series and where the student now stands, before suggesting any tutor. The trial lesson confirms the fit.",
      ],
      bullets: [
        "Board choice is usually set by the school or exam centre",
        "Extended tier keeps Diploma Higher Level options open",
        "Subject combinations should follow the intended degree",
        "A short intake conversation precedes every tutor suggestion",
      ],
    },
  ],

  tutorsIntro:
    "The tutors shown for Shamgarh teach IB across PYP, MYP and DP and both IGCSE boards, and each is suggested for a stated reason tied to the subject, level and exam series. All of them teach online; none of them will arrive at your door.",

  process: [
    { title: "Send us the facts", description: "Programme or board, subject, level, current school if any, and the days your Shamgarh household can actually be at a laptop." },
    { title: "Receive a short list", description: "Two or three tutors, each with a sentence explaining why they were chosen for this syllabus and student." },
    { title: "Take a free trial", description: "A real topic from the student's own course, taught live, with nothing to pay." },
    { title: "Agree a first-month plan", description: "Topics, pace and tutor fee are put in writing and you can change any of it." },
    { title: "Review and adjust", description: "Notes after each lesson, a check-in every few weeks and a free tutor change if needed." },
  ],

  whyPoints: [
    { title: "Syllabus first, postcode last", description: "A Shamgarh child gets a tutor chosen for the exact course, not whoever lives closest." },
    { title: "Honest about the town", description: "We say plainly that no IB or IGCSE school was found locally and plan around Indore and Udaipur schools." },
    { title: "Free trial lesson", description: "Your child meets the tutor and the teaching style before any fee is agreed." },
    { title: "Student keeps the authorship", description: "Coaching and feedback on IAs, essays and coursework, never writing them." },
    { title: "Clear notes", description: "A written summary after each lesson, so a parent can see what was covered without sitting in." },
    { title: "Flexible arrangement", description: "No lock-in; the rhythm moves around harvest, festivals and mock exams." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Shamgarh?", answer: "Send us the programme, subject, level and exam month, and we shortlist tutors who currently teach that exact course. Because Shamgarh has no IB school of its own, matching is done across India by syllabus fit and the lessons run live online. A free trial lesson is arranged before any fee is agreed, so you can judge the tutor first." },
    { question: "Is private home tuition for IGCSE possible in Shamgarh?", answer: "Yes, as private online tuition at home. Your child sits at their own desk in Shamgarh and works live with a Cambridge or Edexcel IGCSE specialist, one to one. A tutor does not travel to your house, because in-person visits run only in Gurugram and parts of Delhi NCR." },
    { question: "Will a tutor visit our home in Shamgarh?", answer: "No. Home visits are limited to Gurugram and parts of Delhi NCR. In Shamgarh and the rest of Mandsaur district every lesson is live and online, with a shared whiteboard, screen sharing and papers marked in real time, so the experience is still private and one to one." },
    { question: "Is there any IB or IGCSE school in Shamgarh?", answer: "We could not confirm one in Shamgarh or elsewhere in Mandsaur district, so we name none. Local schools follow the MP Board or CBSE. Families who want an international curriculum usually look at schools in Indore or Udaipur, and tutoring bridges the gap for boarders and private candidates." },
    { question: "What does tutoring cost for a student in Shamgarh?", answer: "The rate depends on the programme and level, the subject, the length of sessions and how recently the tutor has taught that syllabus, and we confirm it in writing before the trial. Diploma Higher Level generally costs more than IGCSE Core. Distance plays no part, since nothing is travelled, and there is no contract." },
    { question: "My child boards at an Indore school. Can lessons run only during holidays?", answer: "Yes. Many boarders book a dense block of lessons during Diwali or the summer break and then pause when school resumes. We plan the block around the school's own teaching order so the tutor reinforces what the school will teach next." },
    { question: "How does the free trial lesson work?", answer: "Your child works through a real topic from their own syllabus with a tutor on video, at no cost. Afterwards you receive a written summary and a proposed plan for the first month. You can accept it, ask for another tutor or stop, with nothing owed in any case." },
    { question: "Can a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach, they do not write. They can explain the criteria, help shape a research question, review a plan and give honest feedback on drafts, but the assessed work must be entirely the student's own, in line with IB integrity rules. A request to produce the work is declined." },
    { question: "Which IB subjects can a Shamgarh student study with a tutor?", answer: "Both Maths courses at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Environmental Systems and Societies, Hindi B and the DP core of TOK and the Extended Essay. If a subject is unlisted, ask and we check." },
    { question: "Is help available for younger children on MYP or PYP?", answer: "Yes. For MYP, tutors work on criterion-based writing, subject skills and the Personal Project process. For PYP, they build reading fluency, number confidence and the inquiry habit that leads to the Exhibition. Sessions are shorter and more varied for younger students." },
    { question: "Will online lessons work with the internet in Shamgarh?", answer: "In most parts of the town a standard broadband or 4G connection is enough for a video call with a whiteboard. For outlying villages we advise a backup hotspot and a lesson time away from peak afternoon heat and load. If a session drops, the missed time is made up." },
    { question: "How are tutors vetted?", answer: "We check each tutor's qualifications, the syllabus they have taught recently and how they handle coursework guidance before recommending them. Given that Shamgarh has almost no local specialists, we weigh recency heavily, and the trial lesson gives you the last word." },
    { question: "When should tutoring begin?", answer: "Starting at the beginning of a course, Class 9 for IGCSE or Class 11 for the Diploma, gives the most room to fix weak areas. Starting later still helps, because tutoring then focuses on the topics most likely to move the grade before the May or November exam series." },
    { question: "How do we fit lessons around MP Board or CBSE exams?", answer: "International-curriculum sessions are reduced or paused in the weeks before board exams and then resume afterwards, aimed at the next IGCSE or IB series. We agree this with the family beforehand so nothing clashes with March preparation." },
    { question: "Can the same tutor teach more than one subject?", answer: "Sometimes, particularly in IGCSE where a tutor may cover Mathematics and Additional Mathematics, or two sciences. At Diploma Higher Level it is usually better to have a specialist for each subject. We tell you which is better in your case rather than packaging subjects together." },
    { question: "What if the tutor is not a good fit?", answer: "Tell us and we arrange a different tutor without charge. Regular check-ins are designed to catch this early. Pausing lessons for harvest, a festival or a family event is also free." },
    { question: "Is IB Gram connected with any school or exam board?", answer: "No. IB Gram is independent and is not affiliated with the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned on this page. Schools in Indore and Udaipur appear only to describe the real options near Shamgarh, not to imply a partnership." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How we match IB and IGCSE tutors to families in other Indian cities and towns." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors do visit homes, and what that arrangement looks like." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, Core and Extended tiers and the exam calendar." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Higher and Standard Level, the internal assessments, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based marking, the Personal Project and how MYP leads to the Diploma." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition explained for parents." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis & Approaches and Applications & Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Look through tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and ask for a free trial lesson." },
    { label: "IB and IGCSE tutoring in Mandsaur", href: "/mandsaur/", description: "The district headquarters, for families who compare options across Mandsaur district." },
    { label: "IB and IGCSE tutoring in Indore", href: "/indore/", description: "The Malwa city with the region's international schools, for boarders and relocating families." },
    { label: "IB and IGCSE tutoring in Neemuch", href: "/neemuch/", description: "A neighbouring Malwa town with a similar online-first picture." },
  ],

  closingHeading: "Book a free trial lesson for your Shamgarh student",
  closingBody:
    "Send the programme or board, the subject and level, and the school if there is one. We reply with a tutor who has taught that exact course and a trial time that fits your evenings, with nothing to pay and nothing to commit to until you have seen a lesson. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
