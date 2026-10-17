import type { CitySeoPage } from "../types";

/**
 * /kohima/ - IB and IGCSE tutoring page for Kohima, Nagaland. Online-only: tutors do not visit
 * homes in Kohima. No IB or IGCSE school in the city is confirmed, so clusters are honestly
 * labelled Guwahati and Kolkata. Deliberately non-political.
 */
export const kohima: CitySeoPage = {
  slug: "kohima",
  countryName: "Kohima",
  countryNameLong: "Kohima, Nagaland",
  demonym: "Kohima",
  state: "Nagaland",
  stateCode: "IN-NL",
  flagCode: "in",
  countryCode: "IN",
  region: "Nagaland, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early sunsets in the hills, monsoon landslide disruptions and the December Hornbill season all feed into how lessons are timed",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.6751, longitude: 94.1086 },
  wikipedia: "https://en.wikipedia.org/wiki/Kohima",
  alternateNames: ["Kewhira"],
  stripSchools: [],

  title: "Kohima IB & IGCSE Tutors | Online Private Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Kohima students, taught live online one to one: Maths, sciences, English, hill-town scheduling, and a free first lesson to try.",
  h1: "IB and IGCSE Tutors and Private Online Tuition for Kohima Students",
  heroEyebrow: "KOHIMA IB AND IGCSE TUTORS, LIVE ONLINE",
  heroSubtitle:
    "For a Kohima student on an IB or IGCSE path, private tuition at home means an online lesson: one tutor, one child, live video, a shared whiteboard. It is home tuition without a visit, because tutors do not travel to Kohima; in-person home tuition runs only in Gurugram and parts of Delhi NCR. In return a Kohima family can pick a subject specialist from anywhere in India, get a written note after each lesson, and start with a free trial.",
  primaryKeyword: "IB and IGCSE tutors in Kohima",
  imageAltText: "A Kohima student at a desk beside a hill-facing window, taking an IB English lesson with a tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Kohima",
    "IGCSE tutor Kohima",
    "IB home tuition Kohima",
    "IGCSE home tuition Kohima",
    "IB private tuition Kohima",
    "IB Maths tutor Kohima",
    "IGCSE Maths tutor Kohima",
    "IB Physics tutor Kohima",
    "IB Chemistry tutor Kohima",
    "IB Biology tutor Kohima",
    "IB DP tutor Kohima",
    "IB MYP tutor Kohima",
    "IB PYP tutor Kohima",
    "IGCSE online tuition Kohima",
    "IB tutor PR Hill Kohima",
    "IGCSE tutor Midland Kohima",
    "online IB tutor Nagaland",
    "IB tutor Officers Hill Kohima",
    "IB tutor Chandmari Kohima",
  ],

  heroTrustPoints: [
    "The syllabus code and tier are settled first, then a tutor is proposed",
    "Lessons in Kohima are online; home visits stay in Gurugram and parts of Delhi NCR",
    "The first lesson is free and carries no obligation",
    "IB Gram is independent of every school, board and body named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages taught" },
    { value: "Core and Extended", label: "IGCSE tiers covered" },
    { value: "IST", label: "No time-zone gap" },
    { value: "Free trial", label: "First lesson at no cost" },
  ],

  intro: {
    heading: "Learning an international syllabus from a hill capital",
    paragraphs: [
      "Kohima sits along a ridge at roughly 1,400 metres, the capital of Nagaland and a town of terraced neighbourhoods, steep lanes and long views. English is the official language of the state and the usual medium of instruction in its schools, which is a real advantage for anyone moving into IB or IGCSE, since both are taught and examined in English. Most schools here follow the Nagaland Board of School Education or CBSE.",
      "What we could not confirm is any IB or Cambridge school in Kohima. Families who want those routes generally look to Guwahati, Shillong, Kolkata, Bengaluru or Delhi, and often send a child to boarding school. That means many Kohima students study an international syllabus a long way from home, and return for the December break, or families plan such a move and want a child ready for it.",
      "IB Gram answers a practical need in both cases: live, one-to-one online lessons from tutors across India, in Indian Standard Time. Tutors do not visit Kohima homes, because that service exists only in Gurugram and parts of Delhi NCR. The advantage is that the best-matched specialist for Physics HL or IGCSE Additional Mathematics need not live in the town.",
      "We are an independent tutoring service and have no affiliation with the IB, Cambridge, Pearson or any school named on this page.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A framework in which younger children explore ideas through units of inquiry. Tutoring stays gentle: reading, number confidence and putting a thought into words.",
      countryNote:
        "PYP is not available locally as far as we know, so Kohima interest is usually from parents planning a move.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Connected subjects across five years, marked against clear criteria, with a personal project at the end. Tutors teach students to read criteria and turn them into stronger responses.",
      countryNote:
        "English-medium schooling in Nagaland gives students a head start here; support tends to focus on criteria and command terms.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, TOK, the Extended Essay and CAS, examined in May and November. Tutors coach content, paper technique and time management.",
      countryNote:
        "Diploma students from Kohima usually board in another city and study with tutors at home over the long winter break.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses plus career-related study and a reflective project. Tutors support the academic courses and the reflection.",
      countryNote:
        "CP is rarely discussed locally, but families choosing a route after Class 10 sometimes ask how it differs from the full Diploma.",
    },
  ],
  programmesIntro:
    "With no confirmed IB school in Kohima, these programmes reach families through boarding or relocation. Here is how each stage looks and how tutoring fits.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebra and proof for future engineers, scientists and economists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics and modelling with a graphing calculator." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with experimental skills." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, kinetics and organic chemistry with quantitative practice." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology to ecology, drawing on the region's remarkable biodiversity for examples." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course whose themes of forests, water and land use suit a hill student." },
    { name: "Economics", levels: "SL and HL", description: "Theory, diagrams and evaluation, with regional trade and development examples." },
    { name: "Business Management", levels: "SL and HL", description: "Case analysis and tools, for families in enterprise and services." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming and systems, a subject that travels well for students wanting remote-friendly careers." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of texts and the oral, a natural fit for English-medium students." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading of literary works and comparative essays." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition for reading, writing and speaking." },
    { name: "History", levels: "SL and HL", description: "Source analysis and essay technique across prescribed topics." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice on knowledge questions and the exhibition." },
  ],
  subjectsIntro:
    "Kohima students ask most for Mathematics, the sciences and English, followed by Economics, Business and Environmental Systems.",
  igcseSubjectsIntro:
    "IGCSE suits students who need flexibility: subjects are separate, and Core or Extended can be chosen for each. These are the ones Kohima families ask about.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry and statistics, with advice on tier before entry." },
    { name: "Additional Mathematics", levels: "Extended", description: "Calculus and functions as a stepping stone to IB or A Level Mathematics." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, electricity and waves, with practical-paper skills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, calculations and organic basics in exam format." },
    { name: "Biology", levels: "Core and Extended", description: "Life processes and ecology, with data questions rehearsed." },
    { name: "English First Language", levels: "Core and Extended", description: "Writing for effect, summary and comprehension, well suited to English-medium students." },
    { name: "English Literature", levels: "Core", description: "Set texts, quotation and essay structure." },
    { name: "Computer Science", levels: "Core", description: "Programming logic and theory." },
    { name: "Geography", levels: "Core", description: "Case studies, map skills and fieldwork, with hill and river themes ready to hand." },
    { name: "Economics and Business Studies", levels: "Core", description: "Concepts, data response and short essays." },
  ],

  regionsTitle: "Kohima neighbourhoods our students study from",
  regionsIntro:
    "Kohima's steep layout means that a short distance on the map can be a long walk or drive, but online lessons ignore that. These areas are the ones families mention, with a note on each.",
  regions: [
    { name: "PR Hill", note: "A central residential and commercial ridge, close to many older schools and offices." },
    { name: "Officers' Hill", note: "A quieter administrative and residential area, with officials' families used to postings and school moves." },
    { name: "Midland", note: "A busy central locality with shops and homes, where evening internet is generally dependable." },
    { name: "Chandmari", note: "A densely settled area with a mixed population and lively local markets." },
    { name: "High School Junction", note: "A landmark junction in the town, near several schools and coaching classes." },
    { name: "Kohima Village", note: "The old Angami settlement above the town, where family ties and community life shape the study routine." },
    { name: "Meriema", note: "The area near the Nagaland University campus, popular with families connected to teaching and research." },
    { name: "Jotsoma", note: "A village on the western edge, reached by a short drive, with quiet evenings good for study." },
  ],
  schoolClusters: [
    {
      city: "Kohima itself",
      note: "We could not confirm an IB or Cambridge school in Kohima. Schools here follow the Nagaland board or CBSE, mostly in English. We will add any local school after verifying it.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "The largest city in the region, and the usual gateway for boarders and relocating families from Nagaland.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A longer journey by air or rail, chosen by families who want boarding at established international campuses.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only to describe options in the wider region. IB Gram works independently: there is no partnership, sponsorship or endorsement between us and any school, the IB, Cambridge or Pearson, and a mention is not a recommendation.",

  modesIntro:
    "Three ways a Kohima family can use IB Gram. All are online and none involves a visit.",
  modes: [
    {
      title: "Weekly subject lessons",
      description: "A recurring one-to-one slot for a single subject, with the same tutor and homework marked between sessions.",
      bullets: ["Fixed weekly time", "Marked homework", "Written note after each lesson"],
    },
    {
      title: "Winter-break intensives",
      description: "For boarders who return in December, a compact block of lessons that consolidates a term's learning and previews the next.",
      bullets: ["Planned before the break", "Concentrated on the toughest topics", "Practice papers with feedback"],
    },
    {
      title: "Private IGCSE course",
      description: "Full-syllabus teaching for a candidate who is sitting papers without a classroom, with advice on tier and board.",
      bullets: ["Whole specification in order", "Past papers throughout", "Guidance on exam centres and deadlines"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or Cambridge school in Kohima, or do Nagaland families look elsewhere?",
      paragraphs: [
        "We could not confirm an IB or Cambridge school in Kohima, so families looking for those programmes generally look outside the state. Guwahati is the regional hub; Shillong, Kolkata, Bengaluru and Delhi are other options, most of them requiring boarding. This is an honest statement of what we could verify, and we would rather leave a school off the page than name one we cannot stand behind.",
        "The result is that most Kohima enquiries are about study support rather than enrolment. A boarder who returns for the winter holidays wants lessons to keep a syllabus moving. A family planning a move wants a child ready for IB-style assessment. A student wanting an international qualification without leaving Nagaland may register for IGCSE as a private candidate.",
        "The strength that Nagaland students bring is language. English is the medium of instruction, so the step to IB English or IGCSE English First Language is shorter than it is for many. The gap is in exam technique: command terms, structured responses and the shape of a full-mark answer.",
        "If you are considering any school for these programmes, check the IB's official directory or Cambridge's school locator before paying fees. An international label in a school's name is not evidence of either curriculum.",
      ],
    },
    {
      heading: "How do the Nagaland board, CBSE, IGCSE and IB compare?",
      paragraphs: [
        "A Kohima student is most likely to be on the Nagaland board or CBSE. The Nagaland Board of School Education sets papers for Classes 10 and 12, in English, following a state syllabus. CBSE uses the national syllabus. IGCSE and IB both ask students to apply ideas to unfamiliar problems and to justify their answers in writing.",
        "In practice a student moving from either local board finds the content familiar but the questions less so. Evaluate, compare and to what extent each need a structure, and that structure can be taught.",
        "The table lays out the differences a family is likely to weigh.",
      ],
      table: {
        caption: "Boards a Kohima family may weigh",
        columns: ["Board", "Language of instruction", "Assessment", "Common next step"],
        rows: [
          ["Nagaland Board of School Education", "English", "Class 10 and Class 12 board exams", "Local colleges, national entrance tests"],
          ["CBSE", "English or Hindi", "National board exams at Classes 10 and 12", "JEE, NEET, CUET-UG"],
          ["Cambridge or Edexcel IGCSE", "English", "Subject exams around age 16, Core or Extended", "A Level, IB Diploma or Class 11"],
          ["IB Diploma", "English plus a second language", "Papers, internal assessment, Extended Essay", "Indian universities or study abroad"],
        ],
      },
    },
    {
      heading: "What should a Kohima family expect to pay for IB and IGCSE tutoring?",
      paragraphs: [
        "We do not print prices. A written rate arrives before you book, and only after the free lesson, because it depends on the subject, the level and the schedule, which we have to learn first.",
        "The main drivers are level, since Higher Level and Extended courses need experienced tutors; scarcity, since IB Computer Science or a language A course has fewer qualified teachers; session length and frequency; and the tutor's specific board experience.",
        "For a hill town the savings from working online are practical. There is no journey down to Dimapur or a flight to Guwahati for weekend classes, no accommodation costs, and no lost days when a road is blocked by a landslide in the monsoon.",
        "Ask any provider for the exact rate for your subject and level, for a description of how progress is reported, and for how a change of tutor works. Ours are a written quote, a written note after each session and a swap without justification.",
      ],
      bullets: [
        "Rates depend on level, subject scarcity, session length and frequency",
        "A written quote comes before any booking",
        "No travel or lodging costs for online lessons",
      ],
    },
    {
      heading: "Online tuition, a local teacher, a coaching class or self-study: what works in Kohima?",
      paragraphs: [
        "Kohima has capable teachers and coaching classes for board subjects and national entrance exams. Their strength is familiarity with the Nagaland and CBSE syllabi. The limitation is that few of them have taught IB or IGCSE recently.",
        "An online tutor is chosen for the international syllabus, and lessons adapt to the student's pace. It demands a reliable connection and a student who prepares between sessions.",
        "Self-study works for a disciplined IGCSE candidate with access to past papers, but IB coursework and the Extended Essay benefit from guidance on process.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Kohima",
        columns: ["Option", "What it offers", "What it lacks"],
        rows: [
          ["Online one-to-one", "Syllabus-matched teaching, individual feedback", "Needs connectivity and self-discipline"],
          ["Coaching class", "Batch practice for board and entrance exams", "Little IB or IGCSE content"],
          ["Local teacher", "Familiar and convenient", "Limited experience of international papers"],
          ["Self-study", "Free and flexible", "No feedback on weak answers"],
        ],
      },
    },
    {
      heading: "How do the hill climate and the festival calendar affect study in Kohima?",
      paragraphs: [
        "At about 1,400 metres, Kohima has mild summers and cold winters, with sunset arriving early in the cooler months. Evening lessons are comfortable, but power and connectivity can fluctuate in the monsoon, from June to September, when heavy rain can also slow the road down to Dimapur.",
        "The academic calendar of the Nagaland board differs slightly from CBSE and international schools, so a family with a child at a boarding school elsewhere should treat that school's term dates as the reference. IB exams run in May and November, and IGCSE in February and March, May and June, and October and November.",
        "December matters most. Christmas is the great festival of the season, and the Hornbill Festival in early December at Kisama brings visitors and busy roads. Boarders return home for this time, and it becomes the natural window for intensive lessons.",
      ],
      table: {
        caption: "A Kohima year and its study windows",
        columns: ["Months", "Local conditions", "Study focus"],
        rows: [
          ["January to March", "Cold, clear weather, IGCSE February-March series", "Timed papers and revision"],
          ["April to June", "Spring, May exams, pre-monsoon showers", "Past-paper blocks"],
          ["July to September", "Heavy monsoon, school year", "Course coverage, flexible scheduling"],
          ["October to December", "Cool weather, November series, Christmas and Hornbill", "Mock exams and holiday intensives"],
        ],
      },
    },
    {
      heading: "Where can a Kohima student go after an IB Diploma or IGCSE and A Level?",
      paragraphs: [
        "Within India, the Diploma is treated as equal to a Class 12 pass by the Association of Indian Universities, so the doors of most universities stay open. Central universities admit through CUET-UG, and each course names the subjects it wants. A Kohima student who knows the target degree by Class 10 can choose IB subjects that match, rather than discovering a mismatch in the final year.",
        "Medicine and engineering need a slower, more careful look. The national tests set subject and mark conditions that have changed before and may change again, so verify them with the testing agency and with the institute itself. State-level quotas for students from outside the state board system are a separate question, and Nagaland students who plan to apply in other states should ask each state's counselling body.",
        "Many young people from the hills already leave for Delhi, Bengaluru, Pune, Kolkata or Guwahati after school, and a growing number look overseas. An IB transcript reads clearly to admissions offices in the UK, the United States, Canada, Australia and much of Europe, and fluent English from an English-medium upbringing helps at interview and in written work.",
        "Tutors here teach content and exam technique, including preparation for admission tests. Personal statements, coursework and applications remain the student's own work.",
      ],
      bullets: [
        "The Diploma counts as a Class 12 equivalent through the AIU",
        "CUET-UG feeds central university admission",
        "Check medicine and engineering rules before subjects are frozen",
        "Overseas universities in five regions read IB grades directly",
      ],
    },
    {
      heading: "Which IB Maths course and which sciences make sense for a Kohima student?",
      paragraphs: [
        "Start with the degree in mind. Analysis and Approaches is the course for algebra, calculus and proof, and the safer choice for engineering, physics or economics. Applications and Interpretation is built on data, probability and modelling with a calculator, and fits students heading to biology, psychology, business or geography. Higher Level in either adds real weight.",
        "Because HL builds chapter on chapter, a wobble in week three tends to spoil week nine. Regular one-to-one sessions are useful mostly as an early-warning system: the tutor sees a gap in the first lesson after it opens, and it is repaired while it is still a small job.",
        "In Physics, Chemistry and Biology the split is between knowing the content and handling the unfamiliar. Local boards usually produce students who have studied hard; what they lack is practice with a data booklet, with error analysis and with questions that set an experiment in a setting they have never met.",
        "At IGCSE, a Mathematics entry at Core level puts a ceiling on the grade. A student who might want IB Mathematics or A Level later is normally better placed on Extended, and a tutor can read a term's worth of tests and give a straight view.",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: picking IGCSE subjects from Kohima",
      paragraphs: [
        "Begin with what comes after Class 10. A future IB or A Level student should generally take Extended Mathematics and the sciences as separate subjects. Someone after a broad school-leaving qualification with fewer late nights may find a blend of Core papers more comfortable, though the top grade in each is then capped.",
        "The two boards differ in how papers are set and in when they are sat. Ask the school, or the exam centre if entering privately, which board it is registered with, and note the closing date for entries. Private candidates in particular need an authorised centre, and the deadline can fall six months or more ahead of the paper.",
        "Nagaland students often have an edge in English First Language, which rewards fluent, controlled writing. A second language, whether Hindi or another Indian language, can add a steady grade to a profile.",
        "The free lesson can serve as a planning session, so a subject list is agreed before any money changes hands.",
      ],
    },
  ],

  process: [
    { title: "Write in", description: "Tell us the subject, level, board and exam session by WhatsApp on +91 7439 368 115 or at support@ibgram.com." },
    { title: "See who we propose", description: "You hear back with a named tutor who already teaches that exact syllabus, plus a few evening or weekend slots." },
    { title: "Sit the trial", description: "One full lesson at no charge, after which you owe nothing and can simply walk away." },
    { title: "Agree it on paper", description: "Only if you want to continue do we send the price and timetable in writing." },
    { title: "Keep the momentum", description: "Weekly live lessons with a summary after each, and a different tutor on request if the match is weak." },
  ],
  whyPoints: [
    { title: "Syllabus first", description: "The tutor is chosen for your child's precise course, whether IB Biology SL or IGCSE Extended Mathematics." },
    { title: "No pretending about visits", description: "Everything in Kohima is online, since physical home tuition exists only in Gurugram and parts of Delhi NCR." },
    { title: "Weather-tolerant timetable", description: "Rains that cut power or slow connections mean a session is moved, not lost." },
    { title: "Parents stay informed", description: "A short written summary of every lesson lands after it finishes." },
    { title: "Swap without awkwardness", description: "A poor match is fixed by changing the tutor, and nobody needs to argue the case." },
    { title: "Help, not ghost-writing", description: "Coursework such as IAs, Extended Essays and TOK essays stays entirely in the student's hands." },
  ],

  tutorsIntro:
    "The tutors work from a range of Indian cities and keep IST hours. Kohima students are paired on syllabus knowledge and teaching manner; the tutor's home town plays no role.",

  faqs: [
    {
      question: "Who teaches IB and IGCSE to students in Kohima?",
      answer:
        "Subject specialists based in other Indian cities, working with your child over live video. Kohima itself is not where they live or travel to. The one-to-one format means the lesson is built around one student's syllabus and gaps, and picking from a national pool is what makes rare pairings, such as HL Computer Science or IGCSE Additional Mathematics, workable from a hill town.",
    },
    {
      question: "Does a tutor ever come to a Kohima house?",
      answer:
        "Never. Physical home visits are a Gurugram and Delhi NCR service only, and we would be misleading you to suggest otherwise. What a Kohima household gets is a private lesson at its own desk over a screen: the tutor works through problems live, watches the student write, corrects on the spot and leaves a short note afterwards for the parents to read.",
    },
    {
      question: "Where would a Kohima student actually attend an IB or Cambridge school?",
      answer:
        "Not in Kohima, as far as we could establish. Boarding in Guwahati or Kolkata is the commonest route we know of, with Shillong, Bengaluru and Delhi as further options. Confirm any school's authorisation on the IB's own school finder or through Cambridge's locator before paying a deposit, because an international label in a school's name proves nothing about the curriculum taught.",
    },
    {
      question: "What decides the price of IB tutoring for a family here?",
      answer:
        "Four things: the level (HL and Extended cost more than introductory work), how scarce the subject specialist is, the length of each session, and how many sessions a week you want. No price list is published. You receive a quote in writing once the trial lesson is done. Studying from home also spares the cost of flights or long road journeys for classes elsewhere.",
    },
    {
      question: "Is it possible to do IGCSE without attending a school that teaches it?",
      answer:
        "Yes, as a private candidate, provided an authorised exam centre agrees to take your entry. Cambridge and Pearson Edexcel both admit external candidates in principle, but each centre sets its own fees and cut-off dates, and those dates arrive early in the year. Our part is teaching the full syllabus and helping you work out a realistic timeline.",
    },
    {
      question: "How far will a tutor go with an Extended Essay or Internal Assessment?",
      answer:
        "As far as explaining what the marking criteria reward, discussing whether a topic is workable and commenting on how a draft is organised, but never further. The writing, the data and the conclusions must be the student's. A tutor who wrote sections would expose your child to an academic misconduct finding, so ours are firm about where coaching stops.",
    },
    {
      question: "IB or IGCSE first: how should a Kohima family decide?",
      answer:
        "IGCSE covers Classes 9 and 10 subject by subject and ends in exams at about 16. The IB Diploma covers Classes 11 and 12 as a single package with an essay, a knowledge course and service work. Many students do one and then the other, or IGCSE followed by A Level. If a move to boarding is planned, ask that school which route it uses.",
    },
    {
      question: "Will Indian colleges recognise the IB Diploma for a student from Nagaland?",
      answer:
        "Generally yes, since the Association of Indian Universities treats the Diploma as equal to the Indian Class 12 certificate. Professional courses can add their own conditions, and central universities rely on CUET-UG scores. So ask each institution, not a coaching brochure, what it requires in the year your child applies, and do it while subject choices can still change.",
    },
    {
      question: "Would IB or IGCSE subjects keep NEET or JEE open?",
      answer:
        "That depends on the exact subject combination and on rules the exam authorities revise from time to time, so any general answer, ours included, can go out of date. Read the current information bulletin of the National Testing Agency and write to the institutes you are targeting. Do this in Class 9 or 10, before Physics, Chemistry and Biology or Mathematics are locked in.",
    },
    {
      question: "Which months are the IB and IGCSE exam sessions?",
      answer:
        "The IB Diploma is examined in May and in November. Cambridge IGCSE runs in February and March, May and June, and October and November, while Pearson Edexcel IGCSE sits in January, May and June, and November. Not every subject appears in every session and centres differ, so your school or exam centre has the last word. Lessons are then planned backwards from that date.",
    },
    {
      question: "Kohima has landslide-prone roads and patchy power in the rains. Do lessons still work?",
      answer:
        "Mostly, with a little planning. Keep a mobile hotspot as a spare, charge a laptop beforehand, and tell us if a storm knocks out a session, because we move it to another slot at no penalty. Roads to Dimapur being blocked does not matter for a video lesson, and the tutor's whiteboard means nothing needs printing or posting.",
    },
    {
      question: "What actually happens in the free first lesson?",
      answer:
        "A tutor already teaching your child's syllabus runs a complete session, typically on a topic the student finds hard. You see the teaching style, the screen tools and how questions are handled, and nothing is charged. Only after that do we send terms in writing. If the fit feels off, ask for another tutor before you decide; that is normal.",
    },
    {
      question: "Which subjects are Kohima students asking for right now?",
      answer:
        "Maths sits at the top, both IB Analysis and IGCSE Extended, with the three sciences close behind and English after that. Environmental Systems and Societies attracts students who like fieldwork-style topics, and Computer Science interest is climbing. We staff by syllabus code and level, and will say plainly if an unusual pairing needs a few extra days to match.",
    },
    {
      question: "My child studies in English on the Nagaland board. What will change in IB or IGCSE?",
      answer:
        "Language will not be the obstacle, since English is already the working medium. The changes are in how answers are built: command words such as evaluate or justify, data given in unfamiliar settings, and marks awarded for reasoning as well as facts. A tutor can train exactly that using worked examples. A few months of practice before the switch removes most of the shock.",
    },
    {
      question: "What if my child does not click with the tutor?",
      answer:
        "Tell us, and a different tutor is arranged without a lengthy explanation. Fit is partly about teaching style and personality, not only subject knowledge, and a poor match early on can dent a student's confidence. We would rather adjust in week two than have you tolerate it for a term. We will also revisit the schedule and priorities when we swap.",
    },
    {
      question: "How do I get going from Kohima?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the subject, level, board and target exam session. If the school has given your child a subject list or syllabus code, attach it. We reply with a proposed tutor and a slot in IST for the trial lesson, and you decide afterwards whether to carry on.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page and the list of cities served online." },
    { label: "Dimapur page", href: "/dimapur/", description: "Nagaland's commercial hub and the gateway city for Kohima." },
    { label: "Imphal page", href: "/imphal/", description: "A neighbouring state capital in the same region." },
    { label: "Guwahati page", href: "/guwahati/", description: "The regional hub for international schooling." },
    { label: "Shillong page", href: "/shillong/", description: "The hill capital of Meghalaya, with its own school context." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB subjects and levels taught by IB Gram tutors." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel subject support." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "How the six subjects and the core fit together." },
    { label: "Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, subjects and the personal project." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Tutor profiles students can be matched with." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book the free lesson." },
  ],
  closingHeading: "Book a free lesson from Kohima",
  closingBody:
    "Name the subject, the level and the exam session, and a fitting tutor will teach a live trial lesson without charge. Whether it goes any further is your household's call.",
};
