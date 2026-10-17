import type { CitySeoPage } from "../types";

/**
 * /alipurdr/ - IB and IGCSE tutoring page for Alipurduar, West Bengal. The plan slug "alipurdr" is a
 * truncated spelling from the source PDF; the town is Alipurduar (Dooars, Alipurduar district, West
 * Bengal). Online-only delivery. Wikipedia lists ICSE and CBSE schools (Stepping Stone Model School,
 * St. Xavier's, Kendriya Vidyalaya) but no IB or Cambridge school, so stripSchools is empty and the
 * clusters point honestly to Siliguri and Kolkata.
 */
export const alipurdr: CitySeoPage = {
  slug: "alipurdr",
  countryName: "Alipurduar",
  countryNameLong: "Alipurduar, West Bengal",
  demonym: "Alipurduar",
  state: "West Bengal",
  stateCode: "IN-WB",
  flagCode: "in",
  countryCode: "IN",
  region: "West Bengal, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Lessons are placed around the Kaljani and Torsa flood weeks, the long Durga Puja and Kali Puja breaks, winter evenings that turn dark before five and, first of all, the school timetable a child already follows",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.4919, longitude: 89.5271 },
  wikipedia: "https://en.wikipedia.org/wiki/Alipurduar",
  alternateNames: ["Alipurduar", "Alipur Duar", "Alipurduar Junction", "Alipurduar Court"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Alipurduar | Online Private Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Alipurduar students: DP, MYP, PYP and Cambridge IGCSE, live and one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors in Alipurduar: One-to-One Home Tuition, Online",
  heroEyebrow: "IB & IGCSE TUTORING FOR ALIPURDUAR AND THE WESTERN DOOARS",
  heroSubtitle:
    "If you want private tuition at home in Alipurduar for an IB or Cambridge IGCSE course, it arrives as a live online lesson: one tutor, one student, a laptop at your own table. No school in town teaches either curriculum, so a specialist on screen is usually the only way in.",
  primaryKeyword: "IB and IGCSE tutors in Alipurduar",
  imageAltText:
    "A Class 11 student in Alipurduar working through an IB Physics paper on a laptop with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor Alipurduar",
    "IGCSE tutor Alipurduar",
    "IB home tuition Alipurduar",
    "IGCSE home tuition Alipurduar",
    "IB private tuition Alipurduar",
    "IB Maths tutor Alipurduar",
    "IGCSE Maths tutor Alipurduar",
    "IB Physics tutor Alipurduar",
    "IB Chemistry tutor Alipurduar",
    "IB Biology tutor Alipurduar",
    "IB DP tutor Alipurduar",
    "IB MYP tutor Alipurduar",
    "IB PYP tutor Alipurduar",
    "IGCSE online tuition Alipurduar",
    "Cambridge IGCSE tutor Alipurduar",
    "online IB tutor Alipurduar Court",
    "IGCSE tutor Falakata",
    "IB tutor Birpara",
    "IB tutor Alipurduar West Bengal",
  ],
  heroTrustPoints: [
    "Tutors are chosen for the exact IB subject and level or the Cambridge paper code, never for a vague label",
    "In-person home tuition runs only in Gurugram and parts of Delhi NCR, so every Alipurduar lesson is live on video",
    "You try a complete lesson before deciding anything, at no charge",
    "IB Gram is independent of the IB, Cambridge, Pearson and every school mentioned on this page",
  ],
  heroStats: [
    { value: "Online only", label: "No tutor visits in Alipurduar" },
    { value: "PYP to DP", label: "Whole IB continuum" },
    { value: "IST", label: "One clock for tutor and student" },
    { value: "Free trial", label: "First lesson at no charge" },
  ],

  intro: {
    heading: "Who looks for IB and IGCSE help in Alipurduar, and why",
    paragraphs: [
      "Alipurduar is the headquarters of its own district, cut out of Jalpaiguri in 2014, and it sits on the Kaljani with the Bhutan foothills visible on a clear morning. It is also a railway division town for the Northeast Frontier Railway, which brings a steady flow of transferred officers and their families. The schools people mention here are ICSE, CBSE and West Bengal board institutions, among them Stepping Stone Model School, St. Xavier's and a Kendriya Vidyalaya. None of them runs the IB or a Cambridge IGCSE course.",
      "So who writes to IB Gram from this corner of the Dooars? Mostly four kinds of household. A railway or forest service family whose child was in an IB or Cambridge school at the last posting and cannot simply stop. A tea estate manager in Kalchini or Kumargram whose son or daughter boards in Kolkata or Darjeeling and needs holiday support in subjects the boarding school teaches differently. A Jaigaon trader with family on both sides of the Bhutan border. And a parent in town who wants the Cambridge IGCSE syllabus beside a Bengali-medium or CBSE school day, for a future abroad.",
      "Specialist IB tutors in Alipurduar are almost impossible to find because there is no local school pool that would train them. Teaching Maths Applications and Interpretation or IGCSE Additional Mathematics well needs someone who has taught it repeatedly. Online lessons remove the postcode problem, and a tutor in Bengaluru or Pune is as easy to reach as one across the Kaljani bridge.",
      "IB Gram has no affiliation with the International Baccalaureate Organization, Cambridge University Press and Assessment, Pearson Edexcel or any school named here. Our tutors coach. They never write Internal Assessments, Extended Essays, Theory of Knowledge essays or any other coursework, because that work has to be the student's own.",
    ],
    bullets: [
      "Support for railway, forest service and tea estate families who change address mid-course",
      "Cambridge IGCSE taught to the exact syllabus code and tier a student is registered for",
      "One tutor and one student, live on video, on Indian Standard Time",
      "A short written note after every session, so nothing depends on memory",
      "Tutor visits at home exist in Gurugram and Delhi NCR alone, never in Alipurduar",
    ],
  },

  programmesIntro:
    "Alipurduar district has no IB World School, so the route into any IB stage runs through a child who arrived from elsewhere or studies at a boarding school far away. Cambridge IGCSE is the more common request from families who remain. Each programme below is described as it is taught, then how it typically shows up in a household here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around units of inquiry and ends in a student-led Exhibition, with no external exam. Tutoring for this age group concentrates on reading stamina, number sense and explaining thinking aloud, which are the habits the units keep asking for.",
      countryNote:
        "A PYP request from Alipurduar usually means a child who came from a Kolkata, Bengaluru or overseas PYP school and is settling into a town where everyone else is on a textbook routine.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Every subject is assessed on four criteria, not one mark, and the programme closes with the Personal Project. Students used to a single percentage often find criterion language strange at first, and a tutor can translate it into concrete steps.",
      countryNote:
        "Nobody in Alipurduar district teaches the MYP, so our MYP lessons are nearly all for boarders preparing during Puja and winter vacations, or for families still following a previous school's scheme.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, are joined by Theory of Knowledge, an Extended Essay and CAS. The Internal Assessment in each subject counts towards the final grade, and May and November are the usual exam sessions.",
      countryNote:
        "DP students connected to Alipurduar normally live in a hostel elsewhere or belong to a posted family, so sessions follow that school's term dates rather than anything in the district calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses are taken with a career-related study, a reflective project and personal and professional skills. Very few Indian schools run it, but the academic subjects inside it are taught just like Diploma ones.",
      countryNote:
        "CP enquiries here are rare. When one arrives, lessons are built around the Diploma-level courses inside the student's own pathway.",
    },
  ],

  subjectsIntro:
    "A boarder revising IB Chemistry in the winter break and a Class 9 student in town adding Cambridge Physics are asking for different things, even though both say they need a science tutor. Matching therefore starts with the exact course, level and exam session, then looks for someone who has taught precisely that.",
  subjects: [
    {
      name: "IB Maths Analysis & Approaches",
      levels: "HL / SL",
      description:
        "Calculus and proof-flavoured questions dominate, and Paper 3 at HL rewards students who have practised unfamiliar problems. Sessions alternate between content gaps and timed mixed sets.",
    },
    {
      name: "IB Maths Applications & Interpretation",
      levels: "HL / SL",
      description:
        "Technology, statistics and modelling carry the course. Much of the help is about setting up a spreadsheet or calculator method cleanly and then explaining what the output means.",
    },
    {
      name: "IB Physics",
      levels: "HL / SL",
      description:
        "Formula-booklet fluency, unit handling and reading graphs are built first, then the Scientific Investigation is planned so its method holds up to questioning.",
    },
    {
      name: "IB Chemistry",
      levels: "HL / SL",
      description:
        "Stoichiometry, energetics and organic reaction pathways take the longest to settle, so they are revisited on a schedule rather than once.",
    },
    {
      name: "IB Biology",
      levels: "HL / SL",
      description:
        "Command terms decide marks, so students rehearse the difference between describe, explain and evaluate on real past questions.",
    },
    {
      name: "IB Economics",
      levels: "HL / SL",
      description:
        "Diagrams are drawn from memory and then applied to current news, with HL students also working on the quantitative paper.",
    },
    {
      name: "IB Business Management",
      levels: "HL / SL",
      description:
        "Case-study practice teaches students to use the facts on the page, since generic theory scores poorly against a context-specific answer.",
    },
    {
      name: "IB English A Language & Literature",
      levels: "HL / SL",
      description:
        "Unseen-text commentary and comparative essays improve with repeated timed writing and careful feedback on structure.",
    },
    {
      name: "IB Computer Science",
      levels: "HL / SL",
      description:
        "Programming practice sits next to pseudocode and systems theory, because exam answers need both fluency and precise vocabulary.",
    },
    {
      name: "IB Psychology",
      levels: "HL / SL",
      description:
        "Studies must be recalled accurately and linked to a question. Much of the tutoring is essay planning in limited minutes.",
    },
    {
      name: "IB Environmental Systems & Societies",
      levels: "SL",
      description:
        "Systems thinking, case evidence and evaluation of sustainability claims matter more than lists of facts.",
    },
    {
      name: "IB Geography",
      levels: "HL / SL",
      description:
        "Case studies are drilled with real places and dates, which is easy to ground in the Himalayan foothills, rivers and forest landscape around Alipurduar.",
    },
    {
      name: "IB Bengali A and Hindi B",
      levels: "SL / HL",
      description:
        "Bengali literature and Hindi language support for students who want a home language inside the Diploma, with oral practice and text-type training.",
    },
    {
      name: "Theory of Knowledge (TOK)",
      levels: "DP Core",
      description:
        "Discussion-led sessions test how a student argues about knowledge claims and help them prepare for the exhibition and the essay prompt.",
    },
  ],
  igcseSubjectsIntro:
    "Alipurduar schools hold no Cambridge or Edexcel centre number, so a local IGCSE student normally studies privately and sits exams through an approved centre in another city. That is workable if preparation is organised early, and the subject list below is taught against the exact syllabus codes.",
  igcseSubjects: [
    {
      name: "IGCSE Mathematics 0580",
      levels: "Core / Extended",
      description:
        "Extended candidates need algebra and graph skills without the calculator crutch, and Core candidates benefit from being sure they need the tier they are entered for.",
    },
    {
      name: "IGCSE Additional Mathematics 0606",
      levels: "Grade 10",
      description:
        "A bridge to IB Maths AA, with calculus and trigonometry taught early enough to feel familiar in Class 11.",
    },
    {
      name: "IGCSE Physics 0625",
      levels: "Core / Extended",
      description:
        "Equation rearrangement and unit discipline first, then the alternative-to-practical paper, which is the one most private students under-prepare.",
    },
    {
      name: "IGCSE Chemistry 0620",
      levels: "Core / Extended",
      description:
        "Mole calculations, the reactivity series and organic chemistry are practised with past questions in short, frequent blocks.",
    },
    {
      name: "IGCSE Biology 0610",
      levels: "Core / Extended",
      description:
        "Genetics and transport processes are the heavy topics, and long written answers get their own drill.",
    },
    {
      name: "IGCSE Economics 0455",
      levels: "Grade 9-10",
      description:
        "Clean diagrams and two-sided evaluative answers turn into marks quickly once practised.",
    },
    {
      name: "IGCSE Computer Science 0478",
      levels: "Grade 9-10",
      description:
        "Python tasks alongside algorithm tracing on paper, since both appear in the exam.",
    },
    {
      name: "IGCSE English First Language 0500",
      levels: "Grade 9-10",
      description:
        "Directed writing and summary are taught as skills with model answers, not vocabulary lists.",
    },
    {
      name: "IGCSE Bengali and Hindi as a second language",
      levels: "Grade 9-10",
      description:
        "Support in the language a student speaks at home, with reading, writing and oral preparation.",
    },
  ],

  regionsTitle: "Alipurduar localities and Western Dooars towns our online tutors reach",
  regionsIntro:
    "Every lesson happens online, so this list is context rather than a route map. It shows what schooling looks like in each area and how local habits such as market hours, railway shifts or forest-road travel shape when a family can sit down for an hour.",
  regions: [
    {
      name: "Alipurduar Court and town centre",
      note: "The administrative heart of the district, with the courts, offices and the ICSE and CBSE schools most families know. Most enquiries from town come from parents adding Cambridge subjects to a local school day.",
    },
    {
      name: "New Alipurduar and the railway colony",
      note: "Railway division staff live here, and their children often arrive from IB or Cambridge schools at earlier postings. Lesson times depend on shift patterns.",
    },
    {
      name: "Alipurduar Junction and Chowpathi",
      note: "A dense commercial pocket near the old station where shopkeeping families plan evening study around shutter times.",
    },
    {
      name: "Kendriya Vidyalaya and Defence area",
      note: "Central government and transferred families, used to CBSE, and keen to keep an international curriculum alive for children who may move again.",
    },
    {
      name: "Falakata",
      note: "A town on NH17 to the south with its own CBSE and state board schools and families who look to Siliguri or Kolkata for anything beyond them.",
    },
    {
      name: "Birpara and Kalchini tea belt",
      note: "Estate managers and staff households, many educating children away from home and needing support in holiday blocks.",
    },
    {
      name: "Madarihat and Jaldapara side",
      note: "Forest and tourism families near the national park, often with limited evening daylight and travel that makes online study the practical option.",
    },
    {
      name: "Kumargram and Samuktala",
      note: "Rural blocks east of town where secondary schooling is mostly state board and any international syllabus has to be studied privately.",
    },
    {
      name: "Jaigaon border belt",
      note: "Traders and cross-border families whose children may study in Bhutan, Siliguri or Kolkata, and who use online tuition to bridge syllabus differences.",
    },
  ],

  schoolDisclaimer:
    "School names on this page mark where real IB or Cambridge classrooms exist for Alipurduar families who board or relocate. They do not imply any partnership. IB Gram is an independent tutoring service with no contract, endorsement or tie-up with those schools, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Alipurduar district",
      note: "We could not confirm any IB World School or Cambridge or Edexcel IGCSE centre in the district. Wikipedia lists local schools as ICSE, CBSE and state board, and that matches what parents tell us. Families keep the child on the local board and add the international syllabus through tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Siliguri",
      note: "About 150 km west by road, Siliguri is the region's larger city. We have not confirmed an IB or Cambridge school there either, so it widens choices for coaching and shopping rather than for these curricula.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "A long rail or short flight journey away, Kolkata holds the nearest verified IB and Cambridge campuses, used by families who can board a child or relocate for senior years.",
      schools: ["The Heritage School, Kolkata", "The Cambridge School, Kolkata", "Oaktree International School"],
    },
    {
      city: "Nearby: Kodaikanal boarding",
      note: "Some estate families look far south for boarding. Kodaikanal International School has long run the IB Diploma, which suits a child who would live on campus for the full course.",
      schools: ["Kodaikanal International School"],
    },
  ],

  modesIntro:
    "No tutor travels to Alipurduar and no tutor is asked to. The lesson is always live on video, and the real variation lies in rhythm: a steady weekly slot, a fuller termly plan with written notes, or a concentrated holiday block for a boarder.",
  modes: [
    {
      title: "Weekly live lessons",
      description:
        "One fixed hour a week on a shared screen with a whiteboard. The default for town students and for families who want a single steady tutor.",
      bullets: [
        "The tutor can be anywhere in India, matched on subject",
        "Suits DP, MYP and IGCSE subjects equally",
        "Past papers are marked live on screen",
        "Continuity with one tutor across a whole term",
      ],
    },
    {
      title: "Term plan with written notes",
      description:
        "Weekly lessons plus a short note after each one and a longer review every few weeks, so a parent can follow progress without sitting in.",
      bullets: [
        "Notes list topics covered and what comes next",
        "Reviews change the plan if the pace is wrong",
        "PYP and MYP students cope well with a steady pace",
        "A second weekly slot is easy to add before mocks",
      ],
    },
    {
      title: "Boarder holiday blocks",
      description:
        "Several lessons a week across Puja, winter or summer vacations, built around timed papers and quick feedback for students who live away during term.",
      bullets: [
        "Dates follow the boarding school calendar",
        "Timed papers marked against current criteria",
        "Plan around Puja weeks and local flood alerts",
        "Book two to three weeks before term ends",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Alipurduar",
      paragraphs: [
        "Start with a plain statement of what exists. Alipurduar's educational landscape is built on West Bengal Board schools, a handful of ICSE institutions and CBSE, including the Kendriya Vidyalaya serving central government and railway staff. The town also has Alipurduar University and Vivekananda College for higher study. What it does not have, as far as we could verify, is an authorised IB school or an approved Cambridge IGCSE centre. Any family planning an international pathway is therefore planning it outside the school gate.",
        "That makes Alipurduar a town of relocators and aspirants. Railway division postings bring officers whose children studied IB or Cambridge in Kolkata, Guwahati or Delhi. The forest and tea economy brings managers who send children to boarding schools. The Bhutan gateway at Jaigaon brings trading families who think across borders. Parents in town itself sometimes decide, when a child is in Class 7 or 8, that an IGCSE route might suit a study-abroad plan better than a state board one.",
        "The practical question is where the tutoring comes from. In a town with no IB or Cambridge school there is no reservoir of teachers who have marked IB Internal Assessments or know which Extended Mathematics topics sink students. IB Gram solves this by recruiting tutors across India and matching on the exact syllabus, not on location.",
        "A child in Alipurduar is not at a disadvantage in the exam hall. Cambridge sets the same 0580 paper for every candidate, and the IB moderates Diploma work to one global standard. What changes is the support network around the student, and tutoring is one way of rebuilding it.",
      ],
      bullets: [
        "Railway, forest and tea families moving in and out of the district",
        "Boarders at Kolkata, Darjeeling and South Indian schools home for holidays",
        "Town families adding Cambridge IGCSE to a local school day",
        "Cross-border households around Jaigaon and the Bhutan gate",
      ],
      table: {
        caption: "Where IB and Cambridge schooling sits relative to Alipurduar",
        columns: ["Place", "Approximate distance", "What we could confirm"],
        rows: [
          ["Alipurduar district", "0 km", "ICSE, CBSE and West Bengal Board schools; no confirmed IB or Cambridge school"],
          ["Cooch Behar", "About 30 km", "District headquarters with older schools; no confirmed IB or Cambridge school"],
          ["Siliguri", "About 150 km", "Regional hub; no confirmed IB or Cambridge school"],
          ["Kolkata", "Over 600 km by rail", "Verified IB and Cambridge campuses with boarding and day places"],
        ],
      },
    },
    {
      heading: "CBSE, ICSE or West Bengal Board versus IB and IGCSE in Alipurduar?",
      paragraphs: [
        "For most Alipurduar families the honest comparison is between staying on the board they know and adding an international track. The West Bengal Board suits students aiming at state universities and competitive exams through coaching. CBSE follows a national pattern familiar from Kendriya Vidyalaya. ICSE, taught at schools like St. Xavier's, leans on English and broad content. IB and IGCSE ask for different skills: inquiry, extended writing, internal assessments and mark schemes that reward reasoning steps.",
        "Does that make IB or IGCSE harder? Not exactly, but it is different, and a student moving across often feels it in the first term. IB Mathematics expects explanation and modelling, not repeated drill. IGCSE science papers have an alternative-to-practical paper with no direct counterpart in most Indian boards. Language papers ask for original writing under time, and students used to memorised answers need training to adapt.",
        "Families also weigh recognition. IB Diploma and Cambridge IGCSE results are accepted for admission abroad, and Indian universities recognise them through equivalence from the Association of Indian Universities. Students aiming at JEE, NEET or CUET should check eligibility early. Tutors help with the subject side, not the admissions paperwork.",
        "The table below summarises how the four pathways differ in ways that matter to a household deciding whether to stay or switch.",
      ],
      table: {
        caption: "West Bengal Board, CBSE, ICSE, IGCSE and IB compared for Alipurduar families",
        columns: ["Feature", "West Bengal Board / CBSE / ICSE", "Cambridge IGCSE", "IB Diploma"],
        rows: [
          ["Local availability", "Offered in Alipurduar schools", "No local centre confirmed", "No local school"],
          ["Assessment style", "Mostly final exams, some internal marks", "Final papers plus practical paper in sciences", "Final exams plus internal assessments and core components"],
          ["Language of instruction", "Bengali, English or Hindi depending on school", "English", "English, with Bengali or Hindi as language subjects"],
          ["Typical use of tutoring", "Board exam and entrance coaching", "Private candidate preparation", "Subject and assessment guidance for relocators and boarders"],
        ],
      },
    },
    {
      heading: "What do IB and IGCSE tutors cost in Alipurduar, and what sets the rate?",
      paragraphs: [
        "IB Gram does not publish fixed prices, and this is deliberate: the rate depends on things a family can describe in a message. We quote in writing before you book, and the free trial lesson comes first so you know what you are paying for. If the fit is wrong afterwards, you can ask for another tutor.",
        "The main driver is the course. An IB Maths AA HL student in the final year needs a specialist who has taught Paper 3 and the exploration. A Class 8 student wanting help with IGCSE Mathematics Core needs a different kind of experience. Level, subject scarcity and how close the exam session is all feed into the quote.",
        "Frequency matters too. One lesson a week costs less per month than three, but three lessons a week before mocks can be more efficient than six spread thinly over a term. Holiday blocks for boarders are priced by the block, since the tutor is reserving several days.",
        "Online delivery removes travel cost and time, which local private tutors usually price in. Alipurduar parents often compare us with UrbanPro listings and word-of-mouth tutors. Those can be good for state board subjects, but they rarely cover IB Internal Assessment structure or Cambridge mark schemes. That knowledge is what you are paying for.",
      ],
      bullets: [
        "Course and level: IB HL, IB SL, IGCSE Core or Extended",
        "Subject scarcity: Maths AA HL and Physics HL cost more to staff than general subjects",
        "Lesson frequency and length",
        "Distance to the exam session, with mock season usually the busiest",
      ],
    },
    {
      heading: "Online home tuition, local coaching, private tutors or self-study: which fits?",
      paragraphs: [
        "Families in Alipurduar have four realistic options. Online home tuition from a specialist means the lesson happens in your own home, on a laptop, with a tutor who teaches your exact syllabus. Coaching centres in town focus on state board and competitive exams. Private tutors, often school teachers, know the local boards well but rarely the IB. Self-study using past papers works for disciplined students but leaves gaps that are hard to see from the inside.",
        "We say plainly that tutors do not visit homes in Alipurduar. In-person home tuition is a service in Gurugram and parts of Delhi NCR only. The phrase online home tuition means private lessons you take at home, over video, with one tutor. For IB and IGCSE, this is usually the better fit than local options because the subject knowledge is specialised.",
        "The comparison below is about fit, not about good or bad. A student preparing for a state board exam and JEE will do well with local coaching. A student with a Cambridge IGCSE Extended Mathematics paper in May needs someone who has taught that paper.",
        "Whichever you choose, check three things: does the person know the current syllabus, will they mark past papers against the real mark scheme, and can you see what was covered after each session.",
      ],
      table: {
        caption: "Learning options for IB and IGCSE students in Alipurduar",
        columns: ["Option", "Strength", "Limit", "Best suited to"],
        rows: [
          ["Online one-to-one home tuition", "Specialist in the exact IB or IGCSE course; written notes", "Needs steady internet and a quiet corner", "Any IB or IGCSE student, especially relocators and boarders"],
          ["Local coaching centre", "Structure, peers and face-to-face discipline", "Focus is state board and entrance exams", "Students staying on the West Bengal Board or CBSE"],
          ["Local private tutor", "Convenient and familiar with local schools", "Rarely trained in IB or Cambridge assessment", "General subject revision"],
          ["Self-study with past papers", "Free and flexible", "Gaps are hard to spot alone", "Very disciplined students topping up a strong base"],
        ],
      },
    },
    {
      heading: "When is the exam calendar, and how do Dooars seasons shape study time?",
      paragraphs: [
        "The IB Diploma has two sessions, May and November, and students in India usually sit May. Cambridge IGCSE runs in March for some syllabuses and in May and June and again in October and November. Private candidates must register through an approved centre, often months ahead, so the preparation year starts earlier than a school student would guess.",
        "Local weather matters in Alipurduar more than in a metro. Monsoon from June to September swells the Kaljani, Torsa and other rivers that come down from Bhutan, and flood alerts can cut power and mobile data for a day or two in low-lying areas. Winter brings early dark and cool mornings, which suits long study blocks but shortens evening commutes.",
        "Festival weeks also set the rhythm. Durga Puja and Kali Puja bring school breaks and travel, while Poila Baisakh and Saraswati Puja are smaller pauses. Boarders come home at these points, and many request intensive blocks during them. We suggest agreeing the plan two to three weeks ahead of any break.",
        "The table lays out a typical year and what tutoring usually looks like in each part of it.",
      ],
      table: {
        caption: "A typical study year for an Alipurduar IB or IGCSE student",
        columns: ["Period", "What is happening", "Tutoring focus"],
        rows: [
          ["January to March", "Cool dry weather, IGCSE March session for some syllabuses, DP mocks", "Timed papers and weak-topic repair"],
          ["April to June", "Heat builds, IB May and IGCSE May-June exams", "Final revision and exam technique"],
          ["July to September", "Monsoon, river flood weeks, new term starts", "New syllabus content and Internal Assessment planning"],
          ["October to December", "Durga and Kali Puja breaks, IGCSE Oct-Nov and IB November session", "Holiday blocks and mock preparation"],
        ],
      },
    },
    {
      heading: "Which universities can an Alipurduar IB or IGCSE student aim for?",
      paragraphs: [
        "Students here ask about three routes: Indian universities, study abroad, and professional entrance exams. Each has its own paperwork, and the tutor's role is the subject side. For Indian admission, the Association of Indian Universities issues equivalence for the IB Diploma and for IGCSE plus A level combinations, and many institutions ask for it.",
        "CUET-UG is open to students who meet a university's eligibility, and several central universities accept the IB Diploma with equivalence. For JEE Main, candidates need the required Class 12 equivalence and subjects. For NEET, Biology, Chemistry, Physics and English are expected. Rules change, so check the current bulletin of each exam before choosing subjects.",
        "Abroad, IB and A level results are read directly by UK, US, Canadian, Australian and European universities. Local families sometimes think about Bhutan too, given the border, though that is less common than Kolkata, Bengaluru, Delhi or overseas.",
        "Within the region, Alipurduar University, North Bengal University and the colleges of Siliguri offer degrees that accept equivalent results, and our tutors can support subjects likely to matter: Mathematics, sciences, Economics and English.",
      ],
      bullets: [
        "AIU equivalence for IB Diploma and IGCSE-based profiles",
        "CUET-UG eligibility checked against each university's rules",
        "JEE Main and NEET subject requirements checked before subject choice",
        "Direct application to UK, US, Canada, Australia and Europe",
      ],
    },
    {
      heading: "IB Maths AA or AI, and the sciences: what students here actually struggle with?",
      paragraphs: [
        "Mathematics decides a lot of IB Diploma outcomes, and students ask how to pick between Analysis and Approaches and Applications and Interpretation. AA is for students who enjoy algebra, calculus and proof, often heading towards engineering or pure science. AI uses technology and statistics, and suits economics, social science and business pathways. At Higher Level both are demanding.",
        "Typical gaps are predictable. In AA, students often lose marks on integration by substitution, complex numbers and unfamiliar Paper 3 problems. In AI, it is setting up a model and interpreting output in words. Tutors in our network run short diagnostics in the first lesson, then build a plan around the two or three weakest topics.",
        "Sciences follow a similar pattern. Physics asks for fluent rearrangement and careful use of the data booklet. Chemistry hinges on the mole, equilibria and organic pathways. Biology rewards precise terminology and statistics in the Internal Assessment. Practical work cannot be replaced online, so tutors teach the method, the analysis and the write-up, while the student completes the experiment under school or centre supervision.",
        "Many Alipurduar students study in a bilingual environment and think in Bengali or Hindi first. Command-term practice in English is not a luxury. It is often the difference between a five and a six.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how to choose subjects",
      paragraphs: [
        "Cambridge IGCSE offers two tiers in many subjects. Core caps the top grade at C, while Extended opens the full range from A star down to G. For students planning IB Diploma or A level Mathematics and sciences later, Extended is usually the target, and a student should decide early because the content and pace differ.",
        "Choosing subjects is a mix of interest and pathway. A student aiming for medicine or engineering would usually take Mathematics, Physics, Chemistry and possibly Biology, plus English. A commerce-minded student might pick Economics, Business Studies and Accounting. Language choices matter too, and Bengali or Hindi as a second language can round out a timetable for a student who wants to keep a home language.",
        "Private candidates should confirm the centre, registration deadlines and practical arrangements before starting. The alternative-to-practical paper in science is written, but students who have never handled apparatus often misread experimental setups, so even a few supervised sessions help.",
        "Starting in Class 8 or 9 gives the most comfortable runway: two years for the syllabus and a third for revision. Starting in Class 10 is possible for Core tier subjects but tighter for Extended Mathematics and sciences.",
      ],
      bullets: [
        "Extended is the usual choice for future IB or A level science and Mathematics",
        "Core suits students who want a solid pass and less pressure",
        "Additional Mathematics 0606 is strong preparation for IB Maths AA",
        "Private candidates need an approved exam centre booked early",
      ],
    },
  ],

  tutorsIntro:
    "Explore tutors for IB PYP, MYP and Diploma subjects and for Cambridge IGCSE, matched to Alipurduar families. Each match weighs the exact syllabus, level and exam session a child is working towards, and every lesson is taught online on Indian Standard Time.",
  process: [
    {
      title: "Send a short brief",
      description: "Programme or board, subject, level, current grade and the evening hours that work for your Alipurduar household.",
    },
    {
      title: "Review the match",
      description: "We propose a tutor with a clear reason: the syllabus they teach, the level and the exam session.",
    },
    {
      title: "Take a free trial",
      description: "A real topic taught live on video, with no charge and no obligation either way.",
    },
    {
      title: "Agree the first month",
      description: "The tutor outlines topics, frequency and how progress will be reported, and you approve or adjust it.",
    },
    {
      title: "Settle into a rhythm",
      description: "A fixed online slot, reviewed every few weeks, with a change of tutor available if the fit is not right.",
    },
  ],
  whyPoints: [
    {
      title: "Matched on the syllabus",
      description: "Tutors are chosen for your child's exact IB subject and level or Cambridge code and tier, not a general label.",
    },
    {
      title: "Built for a town without an IB school",
      description: "Because Alipurduar has no IB or Cambridge school, we recruit specialists across India instead of hoping for a local one.",
    },
    {
      title: "Written notes after every lesson",
      description: "Each session ends with a short note on what was covered and what comes next, which busy parents can read in a minute.",
    },
    {
      title: "Coaching, never ghost-writing",
      description: "Tutors explain and give feedback. They do not write Internal Assessments, Extended Essays or TOK essays.",
    },
    {
      title: "Honest about format",
      description: "Lessons are online. Home visits run only in Gurugram and parts of Delhi NCR, and we say so up front.",
    },
    {
      title: "Free trial and a change if needed",
      description: "You see the teaching before paying, and you can ask for a different tutor if the fit is wrong.",
    },
  ],

  faqs: [
    {
      question: "Where can I find an IB tutor in Alipurduar?",
      answer:
        "You can find an IB tutor for Alipurduar through IB Gram, and the lesson runs online. Send the programme, subject, level and exam session, and we propose a tutor who teaches exactly that course. Alipurduar has no IB World School that we could verify, so there is no local pool of IB specialists. A live video lesson removes that limit and lets a tutor anywhere in India teach your child on Indian Standard Time.",
    },
    {
      question: "Do you have IGCSE tutors for Alipurduar students?",
      answer:
        "Yes, IGCSE tutors are available for Alipurduar students, online and one to one. We teach Cambridge and Pearson Edexcel IGCSE subjects against the exact syllabus code, including Core and Extended tiers. Because no school in the district holds a centre number that we could confirm, most local students enter as private candidates through an approved centre in another city, and we can plan preparation around that registration timeline.",
    },
    {
      question: "Do tutors visit homes in Alipurduar?",
      answer:
        "No, IB Gram tutors do not visit homes in Alipurduar. In-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Alipurduar the same one-to-one private tuition happens at home over live video, which is why we call it online home tuition. Students use a laptop at their own table, with a tutor who can share a whiteboard and mark papers on screen.",
    },
    {
      question: "Is there any IB school in Alipurduar district?",
      answer:
        "We could not confirm an IB World School in Alipurduar district. Wikipedia and school directories list local schools as ICSE, CBSE and West Bengal Board, including Stepping Stone Model School, St. Xavier's and a Kendriya Vidyalaya. If you know of a newer authorisation, check the IB's find-a-school page, which is the official list. Families who want a full IB school usually look at Kolkata.",
    },
    {
      question: "What do IB and IGCSE tuition rates depend on?",
      answer:
        "Rates depend on the course, the level, how many lessons a week you want and how close the exam is. We quote in writing before you book and do not publish fixed prices, because an IB Maths HL specialist and a Class 7 Core Science tutor are not the same job. The free trial comes first, so you can judge the teaching before any commitment, and a change of tutor is available.",
    },
    {
      question: "Can my child study IGCSE alongside the West Bengal Board or CBSE?",
      answer:
        "Yes, many students do, usually starting with Mathematics and one or two sciences. The workload is real, so we plan weekly slots that fit around school and coaching. Students enter the exams as private candidates, which means booking a centre early. A good plan usually starts in Class 8 or 9, and Extended Mathematics benefits most from the extra runway.",
    },
    {
      question: "How do boarders at Kolkata or Darjeeling schools use you?",
      answer:
        "Boarders use IB Gram mainly in holiday blocks, several lessons a week through Puja, winter or summer breaks. The tutor follows the boarding school's syllabus and term dates, so lessons support what the school teaches and never contradict it. Book two to three weeks before term ends because popular slots fill, and ask the tutor to send a short note after each session for the family.",
    },
    {
      question: "Which IB Maths course is right for a student from Alipurduar?",
      answer:
        "The right course depends on the pathway. Analysis and Approaches suits students aiming at engineering, physical science or economics with a strong quantitative side. Applications and Interpretation suits students heading to social science, business or biology. Ask the school or your planned university which it prefers, then use a trial lesson to see whether the style suits your child. Changing later is difficult, so decide early.",
    },
    {
      question: "Can you help with the Internal Assessment or Extended Essay?",
      answer:
        "Tutors can coach the process, but they cannot write your work. That means explaining the criteria, discussing how to choose a question, giving feedback on drafts and helping plan time. Submitting work written by someone else breaches IB rules and risks the diploma, so we do not do it. If a family asks for ghost-writing, we decline.",
    },
    {
      question: "What happens if the monsoon or a flood cuts internet in Alipurduar?",
      answer:
        "We reschedule the lesson without penalty when weather cuts power or data. Flood alerts on the Kaljani and Torsa can affect low-lying areas, and tutors would rather move a session than teach through a broken connection. A mobile hotspot as backup and a second slot in the same week help. Tell us early if alerts are active so we can plan.",
    },
    {
      question: "Is online tuition effective for IB Physics and Chemistry?",
      answer:
        "Yes, for content, problem-solving and exam technique, which make up most of the marks. Tutors use a shared whiteboard, worked examples and timed questions. Practical work itself happens at school or the exam centre, and tutors coach the method, analysis and write-up. Many students find it easier to concentrate at home without the commute.",
    },
    {
      question: "Which universities recognise IB and IGCSE results from Alipurduar?",
      answer:
        "Universities abroad read IB and IGCSE results directly. In India, the Association of Indian Universities issues equivalence certificates, which many institutions ask for. CUET-UG, JEE Main and NEET have their own eligibility rules for foreign boards, which change, so read the current bulletin before choosing subjects. We help with subjects, not admissions paperwork.",
    },
    {
      question: "How soon should we start before an exam session?",
      answer:
        "Start at least six months before a major session, and earlier for private IGCSE candidates who must register through a centre. For IB Maths HL and sciences, a year is comfortable. If the exam is closer, a focused plan on timed papers and the weakest topics can still help, but promises of a particular grade would be dishonest, and we do not make them.",
    },
    {
      question: "Can younger children in PYP or MYP get tutoring?",
      answer:
        "Yes, PYP and MYP tutoring is available, but it looks different from exam coaching. For PYP, tutors work on reading, number sense and explaining thinking. For MYP, they help students understand criteria, plan the Personal Project and write clearly. Sessions are shorter and more conversational, and parents get a note after each one.",
    },
    {
      question: "How does the free trial lesson work?",
      answer:
        "You send a brief, we propose a tutor, and you take one real lesson at no charge. The tutor teaches a real topic from your child's syllabus, not a sales pitch. Afterwards you decide whether to continue, and if not, there is no obligation. If the subject was right but the style was not, we can offer a different tutor.",
    },
    {
      question: "How do I contact IB Gram from Alipurduar?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com. Tell us the programme or board, subject, level, current grade and the evening hours that suit your household. We reply with a proposed tutor and the next available trial slot. You can also use the contact page on this site.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "City pages for IB and IGCSE tuition around the country." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where tutors visit homes in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How IB Gram matches tutors to IB subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, codes and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL choices, core components and assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Jalpaiguri", href: "/jalpaiguri/", description: "Online tuition for the neighbouring Dooars district." },
    { label: "IB and IGCSE tutors in Siliguri", href: "/siliguri/", description: "Tuition for students in the region's largest city." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "Where the nearest verified IB and Cambridge schools are." },
  ],
  closingHeading: "Book a free trial with an IB or IGCSE tutor in Alipurduar",
  closingBody:
    "Send the programme or board, subject and level, your child's current grade and the evening hours that suit your Alipurduar home. We reply with a matched tutor and the first free trial slot, taught live over video on Indian Standard Time.",
};
