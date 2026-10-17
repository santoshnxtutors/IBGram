import type { CitySeoPage } from "../types";

/**
 * Reoti is a nagar panchayat town on the Reoti Dah lake in Ballia district, eastern Uttar Pradesh.
 * No IB or Cambridge school there could be confirmed, so stripSchools is empty and the clusters point
 * to Varanasi, Lucknow and Dehradun using names already checked on the Varanasi and Dehradun pages.
 */
export const reoti: CitySeoPage = {
  slug: "reoti",
  countryName: "Reoti",
  countryNameLong: "Reoti, Uttar Pradesh",
  demonym: "Reoti",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Quiet evenings once the vegetable carts and market have wound down, and Sunday mornings when the roads are empty",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 25.85, longitude: 84.3833 },
  wikipedia: "https://en.wikipedia.org/wiki/Reoti",
  alternateNames: ["Rewati", "Reoti Ballia", "Rewti", "Reoti Dah"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Reoti | Live Online Tuition, Ballia",
  metaDescription:
    "Reoti, Ballia: IB and IGCSE tutors teaching live one-to-one online, so a student at home gets subject-matched help, written notes and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Reoti",
  heroEyebrow: "IB & IGCSE TUITION FOR REOTI, BALLIA, UTTAR PRADESH",
  heroSubtitle:
    "A student in Reoti who wants private tuition at home for the IB or IGCSE can have it online, one to one; IB Gram tutors do not knock on doors in Ballia, because house visits are limited to Gurugram and parts of Delhi NCR. Reoti is a flood-prone vegetable-growing town beside its own lake, thirty-five kilometres from Ballia, and a long rail journey from the nearest international campus. Tell us the syllabus and the subject and we will arrange the first lesson without charge.",
  primaryKeyword: "IB and IGCSE tutors in Reoti",
  imageAltText: "Reoti student in a live online IB Chemistry class with a tutor, working from a desk at home",
  secondaryKeywords: [
    "IB tutor in Reoti",
    "IGCSE tutor in Reoti",
    "IB home tuition Reoti",
    "IGCSE home tuition Reoti",
    "IB private tuition Reoti",
    "IB Maths tutor Reoti",
    "IGCSE Maths tutor Reoti",
    "IB Physics tutor Reoti",
    "IB Chemistry tutor Reoti",
    "IB Biology tutor Reoti",
    "IB DP tutor Reoti",
    "IB MYP tutor Reoti",
    "IB PYP tutor Reoti",
    "IGCSE online tuition Reoti",
    "IB tutor Rewati",
    "IGCSE tutor Ballia district",
    "IB online classes Bansdih",
    "IB tuition eastern Uttar Pradesh",
  ],

  heroTrustPoints: [
    "Each class is live and for one student, with no recordings and no crowded batches",
    "Tutors who have taught IB DP, MYP and PYP and Cambridge or Edexcel IGCSE",
    "Timings built around monsoon floods, power cuts and the Ballia school day",
    "No fee for lesson one, and a written note after every class",
    "A new tutor at no cost if the first pairing does not work",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Studying an international syllabus beside the Reoti lake",
    paragraphs: [
      "Reoti is a nagar panchayat town of about twenty-six thousand people in Ballia district, on the east bank of the Reoti Dah, a large lake in low, swampy, flood-prone country. The railway station lies about eight hundred metres south of the town, Bansdih is thirteen kilometres away and Ballia thirty-five. Reoti grows green vegetables and exports potatoes, fishing goes on in the lake, and the town is remembered for the palanquins it makes for the Dadri mela at Ballia. Most children attend UP Board or CBSE schools and think of Varanasi, Gorakhpur, Lucknow or Delhi for college.",
      "A few households want something different: the IB, or the Cambridge or Edexcel IGCSE. Perhaps a father works abroad and the family hopes to join him; perhaps a mother is a doctor at a district hospital who wants her daughter's marks to travel; perhaps the child is already enrolled with an online international school. Reoti has no school we could confirm that teaches those syllabuses, and the closest Cambridge-registered school is in Varanasi, with fuller IB choice in Lucknow, Dehradun and Delhi.",
      "The workable answer is an online tutor who has taught the exact papers and meets the student by video at a set hour, with the family table serving as the classroom. Tutors do not visit homes in Reoti, and we say so now. IB Gram is independent of the IB, Cambridge, Pearson and every school, and our tutors coach and explain but never write assessments, essays or coursework for students.",
    ],
  },

  programmesIntro:
    "The IB programmes seldom come to a Ballia family in tidy order. A move, an online school or a plan for study abroad usually brings them in, and a tutor adjusts to the stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning organised around six themes, with a pupil-led Exhibition at the close. For a small child the tutor's work is mostly storytelling, counting games and coaxing out full sentences.",
      countryNote:
        "A Reoti child is likely to think in Bhojpuri and write in Hindi, so English needs a gentle daily foothold: ten cheerful minutes beat an hour of drill.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups judged against written criteria, ending with the Personal Project. The tutor teaches how to take a task apart and write toward each band.",
      countryNote:
        "UP Board answers are often short and factual. MYP asks for reasoning, and weekly practice in the first two terms is what turns a good memoriser into a good explainer.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A six-subject diploma that includes Theory of Knowledge, the Extended Essay and CAS. Tutoring prepares for the exam papers and clarifies the marking of coursework, which the student writes alone.",
      countryNote:
        "Nobody around Reoti teaches Higher Level Physics or Chemistry, so an online specialist ends up doing what a school department normally would.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of Diploma courses with a career-related study and reflective project. Help goes to the chosen courses and academic English.",
      countryNote:
        "Hardly anyone in eastern Uttar Pradesh offers CP. Each enquiry is handled on its own and a tutor is matched to the courses chosen.",
    },
  ],

  subjectsIntro:
    "We choose by course and level, and lean toward tutors who understand students switching from Hindi-medium or UP Board classrooms.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, series, vectors and proof for the algebra-minded; each class opens with a few calculator-free questions so Paper 1 never feels foreign." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Data, probability, regression and modelling, using examples such as potato prices or flood-level readings to make results meaningful." },
    { name: "Physics", levels: "SL / HL", description: "From kinematics to fields and quantum ideas, with plenty of graph work and the habits needed for a clean lab report." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole arithmetic, energy cycles, rates, equilibrium and organic mechanisms, tackling unit slips before they become habits." },
    { name: "Biology", levels: "SL / HL", description: "Cells, genetics, physiology and ecology, with lake and wetland examples ready for the ecology units." },
    { name: "Economics", levels: "SL / HL", description: "Markets, intervention, trade and development, with vegetable and potato supply chains as a ready-made case study." },
    { name: "Business Management", levels: "SL / HL", description: "Reading cases, finance ratios and choosing a management tool, an easy subject to ground in a trader's family experience." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithmic thinking, data structures and exam pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Landmark experiments, ways to evaluate them and the essay structure that earns top marks." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading of unseen extracts, comparative writing and practice for the individual oral." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary analysis for native speakers, with Bhojpuri-speaking students bringing a strong ear for the language." },
    { name: "Geography", levels: "SL / HL", description: "Floodplains, river management and agriculture, with Reoti's own flood-prone lake country as a worked example." },
    { name: "Theory of Knowledge", levels: "Core", description: "Practising arguments about how we know what we know and planning the exhibition, with every word the student's own." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are both taught. Whether to sit Core or Extended is worth settling in Class 9, because it fixes the highest grade available.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with a straightforward discussion of which tier fits the child." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Introductory calculus and functions, handy preparation for IB Mathematics AA or A Level." },
    { name: "Physics (0625 / 4PH1)", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with the planning and analysis questions from the practical paper." },
    { name: "Chemistry (0620 / 4CH1)", levels: "Core / Extended", description: "Atoms, bonding, reactivity and organic families, with tests for ions learned properly." },
    { name: "Biology (0610 / 4BI1)", levels: "Core / Extended", description: "Cells, enzymes, inheritance and ecosystems, plus how to describe an experiment in the language examiners reward." },
    { name: "Computer Science (0478)", levels: "Single tier", description: "Designing algorithms, tracing them by hand, number systems and databases." },
    { name: "English as a Second Language", levels: "Single tier", description: "Reading, directed writing and speaking, aimed at pupils who speak Bhojpuri or Hindi at home." },
    { name: "Hindi as a Second Language (0549)", levels: "Single tier", description: "Passages for reading, letters and short essays tuned to what the syllabus asks." },
    { name: "Economics (0455) and Business Studies (0450)", levels: "Single tier", description: "Core vocabulary, calculations and short case questions." },
  ],

  regionsTitle: "Reoti and the Ballia-side places we teach",
  regionsIntro:
    "Every class is online, so what we weigh is signal, floods and power cuts, and how long the school day runs. This is how we read the area.",
  regions: [
    { name: "Reoti town", note: "The nagar panchayat centre, with most private schools and tuition shops; mobile data is generally enough for video lessons." },
    { name: "Reoti Dah lakeside", note: "Households along the lake edge, where monsoon waterlogging can interrupt roads and power for days." },
    { name: "Reoti railway station side", note: "The area south of the town near the station, popular with families who travel to Ballia or Varanasi." },
    { name: "Bansdih", note: "The tehsil headquarters about thirteen kilometres away, with a bigger market and more schools." },
    { name: "Ballia", note: "The district headquarters about thirty-five kilometres off, home to the Dadri mela grounds and the district's colleges." },
    { name: "Sikanderpur and Rasra side", note: "Neighbouring Ballia towns whose students share the same online timetable and often travel to Varanasi for study." },
    { name: "Ghazipur and Mau", note: "Nearby districts in eastern Uttar Pradesh with comparable farming and trading households." },
    { name: "Buxar and Chhapra", note: "Bihar towns across the river, reachable by road and rail." },
    { name: "Varanasi", note: "The nearest large city and the base of the closest Cambridge-registered school." },
  ],

  schoolClusters: [
    {
      city: "Reoti and Ballia district",
      note: "We found no IB or Cambridge school in Reoti or elsewhere in Ballia district, so local choice is very limited. Students study online, as private IGCSE candidates, or after relocating.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi (Shivpur)",
      note: "Varanasi has one Cambridge-registered school, teaching up to Class 9 and building toward IGCSE, the closest school-based reference point for a Ballia family.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Lucknow",
      note: "Lucknow has established Cambridge and PYP schools, roughly a day's travel from Ballia, and is the usual next step for families who decide a campus matters.",
      schools: ["Modern School, Lucknow", "City Montessori School, Cambridge Campus", "DPS Gomti Nagar Jr"],
    },
    {
      city: "Nearby: Mussoorie (boarding)",
      note: "For the Diploma years, some Uttar Pradesh families board a child at an IB World School in the hills, then use tutoring in the holidays.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "None of the schools above has any link with IB Gram. We mention them only because each is openly known to teach an international syllabus, which is not a recommendation to apply. Admissions and curricula are matters to raise with the school itself.",

  tutorsIntro:
    "Our tutors live in different parts of India and teach on Indian time. A Reoti student is not confined to whoever lives in Ballia district; we choose on subject depth and the way a person explains.",

  modesIntro:
    "In Reoti all lessons are online. Families tend to arrange them in one of three ways.",
  modes: [
    {
      title: "Live private lesson from home",
      description: "One tutor and one student, a camera and a shared writing board, from the family's own room.",
      bullets: [
        "Tutors do not travel to Reoti, as house visits exist only in Gurugram and parts of Delhi NCR",
        "A laptop, an exercise book and headphones are all it takes",
        "Handwritten work is held to the camera and corrected immediately",
        "A short written note is sent to parents afterwards",
      ],
    },
    {
      title: "Final-month preparation",
      description: "Closely spaced classes as the May or November papers approach.",
      bullets: [
        "Three or four sessions each week for about a month",
        "Authentic past papers graded against the official scheme",
        "Gaps found in the mock are closed first",
        "A rest day before paper one",
      ],
    },
    {
      title: "Weekly lessons through the year",
      description: "A standing slot in one subject, always with the same tutor.",
      bullets: [
        "Stops the syllabus from outpacing the student",
        "Particularly useful for MYP and Diploma year one",
        "Flexes around Chhath, Holi, floods and school tests",
        "Begins with a trial class that costs nothing",
      ],
    },
  ],

  sections: [
    {
      heading: "How could a Reoti student actually study the IB or IGCSE?",
      paragraphs: [
        "There are four sensible routes, and each asks something different of a tutor. A family can enrol the child in an online international school, which streams lessons to a laptop. They can choose a school with boarding in Lucknow, Dehradun or the hills. They can relocate, often because of a posting. Or the student can register for IGCSE papers privately through an approved centre.",
        "Children at online schools sit through the lessons but may have no one checking understanding. Boarders on a break need one awkward unit mended. Families who are moving need the next school's pace matched. Private candidates have no school teacher, so their tutor effectively keeps the syllabus timetable.",
        "We prefer none of these routes. The child's age, comfort with English and the family's university plans decide, and we can explain honestly what each demands of a tutor.",
        "Can't decide? A single trial lesson in the hardest subject is more informative than a brochure. Within an hour, an experienced tutor should be able to say how far the student has to travel to reach the course standard.",
      ],
    },
    {
      heading: "UP Board, CBSE, IB or IGCSE: what changes for a Ballia student?",
      paragraphs: [
        "UP Board and CBSE are what most Reoti children sit at Class 10 and 12, moving on to colleges in Ballia, Varanasi, Gorakhpur or Delhi by way of JEE Main, NEET-UG or CUET-UG. Those exams reward memory and speed; IB and IGCSE papers reward working things out, using data and writing extended English answers.",
        "Students who change system seldom lack facts. They lack the code of command words and mark schemes, which a few weeks of targeted lessons generally supply.",
      ],
      table: {
        caption: "Four systems as a Ballia family meets them",
        columns: ["System", "How the result is built", "Language", "Where students usually head"],
        rows: [
          ["UP Board", "State-set annual papers at Class 10 and 12", "Hindi or English", "Local colleges, JEE Main, NEET-UG and CUET-UG"],
          ["CBSE", "Board exams plus school-assessed marks", "English or Hindi", "JEE Main, NEET-UG and CUET-UG"],
          ["IB Diploma", "Six subjects marked on coursework and final exams", "English", "Degrees overseas, private Indian universities, or CUET-UG after equivalence"],
          ["Cambridge or Edexcel IGCSE", "Sat at Core or Extended standard", "English", "IB Diploma or A Level, then university"],
        ],
      },
    },
    {
      heading: "Why do tutoring fees differ so much for IB and IGCSE in Reoti?",
      paragraphs: [
        "Four variables set the cost of IB and IGCSE tuition in Reoti: the subject, the level, the experience of the tutor and the weekly number of lessons. A quotation in writing comes before any commitment. There is no standard rate card because a Class 7 language class is a very different thing from Higher Level Chemistry.",
        "No travel costs and a pool of tutors from across India mean a Reoti family can choose purely on subject strength; the closest equal specialist might otherwise be in Varanasi or Lucknow.",
        "When lessons happen counts for more than how many there are. Habits form in the first term, weaknesses appear after the mocks, and polish is added in the last fortnight. Many families begin with Mathematics and bring in a science a month later.",
      ],
      bullets: [
        "Higher Level science and mathematics specialists usually cost more than junior language tutors",
        "PYP, MYP, Diploma and IGCSE each have their own pool of tutors",
        "Lessons spread across the year usually cost less than a late scramble",
        "Starting late leaves fewer tutors available",
        "Longer engagements are easier to timetable",
      ],
    },
    {
      heading: "Coaching class, online tutor or self-study around Reoti?",
      paragraphs: [
        "In Reoti three options come up most. A coaching class in Ballia or Varanasi will be set up for board and entrance preparation and will rarely have met an IB or IGCSE paper. Free videos can explain a topic but cannot mark what a student writes. A private online tutor has taught the papers and marks the work, needing in return a quiet spot and a reliable connection.",
        "The table is open about the weak point of video teaching: apparatus cannot be handled through a screen.",
      ],
      table: {
        caption: "Ways for a Reoti student to approach IB or IGCSE study",
        columns: ["Option", "Upside", "Downside", "Fits"],
        rows: [
          ["Private tutor on screen", "Exact syllabus and marked practice", "Depends on signal; no practical lab", "Most IB and IGCSE students"],
          ["Coaching class in Ballia or Varanasi", "Classmates and a set timetable", "Aimed at board and entrance exams, plus travel", "Those who also sit UP Board or CBSE papers"],
          ["Self-study with videos", "Cheap and flexible", "Nobody marks the work", "Revising topics already understood"],
          ["Boarding school elsewhere", "Laboratories, teachers and classmates in one place", "Fees and distance from home", "Families who want the full school experience"],
        ],
      },
    },
    {
      heading: "Floods, Chhath and Dadri mela: the Reoti calendar",
      paragraphs: [
        "Reoti's low, swampy ground means the monsoon is more than a season of rain. From July to September water collects around the lake and on the lanes, roads can be cut, and power may fail for days. Online lessons can continue when a bus cannot, but we plan flexible slots and a backup connection through those months.",
        "Eastern Uttar Pradesh keeps a rich festival calendar. Chhath Puja in October or November is the biggest family occasion, and the Dadri mela at Ballia, with the palanquins made in Reoti, follows in the same season around Kartik Purnima. Diwali and Dussehra come shortly before the November exam sessions, so we move heavy revision earlier and keep festival weeks light.",
        "Summer is hot and dry before the rains, and May exams are sat in that heat. Winters are cool and foggy. The vegetable and potato seasons also shape the weeks when parents and older children are busy, and we keep lessons flexible around them.",
      ],
      table: {
        caption: "A study year in Reoti",
        columns: ["Months", "Local pattern", "Tutoring plan"],
        rows: [
          ["January to March", "Fog and cool weather, Holi, school exams", "Steady topic work, mock papers"],
          ["April to June", "Heat, May sessions, potato and vegetable season", "Dawn or late lessons, timed past papers"],
          ["July to September", "Monsoon floods, waterlogging, new term", "Flexible slots, backup connection, settling new subjects"],
          ["October to December", "Dussehra, Chhath, Dadri mela, Diwali, November sessions", "Mocks early, light festival weeks"],
        ],
      },
    },
    {
      heading: "Where do students from Reoti go after an international syllabus?",
      paragraphs: [
        "From here, students study overseas, enrol at private universities in India, or enter central and state institutions via national tests.",
        "A student heading for an Indian university will want an equivalence certificate from the Association of Indian Universities, available to Diploma graduates and to those who complete IGCSE followed by A Level, plus a CUET-UG score if a central university is the goal. Meanwhile JEE and NEET revise eligibility from time to time; check the latest notice before Chemistry or Biology is dropped.",
        "Options in reach include Jai Prakash University in Chhapra, Veer Bahadur Singh Purvanchal University in Jaunpur, Banaras Hindu University and the colleges of Lucknow and Delhi. Those going abroad usually pick the UK, Canada, the US, Australia or Singapore, with admissions-test coaching available as a separate service.",
        "Begin with the degree, then pick subjects. A short chat before the school's deadline is usually enough.",
      ],
    },
    {
      heading: "What does online teaching of IB Mathematics and the sciences look like?",
      paragraphs: [
        "IB Mathematics is split into two courses, picked before the Diploma starts. Analysis and Approaches is for those who enjoy algebra and calculus, such as a would-be engineer in Ballia. Applications and Interpretation is for those who prefer data and models, for example someone thinking about commerce or the social sciences. We recommend whichever suits the student, not whichever sounds more impressive.",
        "Because the whiteboard is shared, the tutor sees each line the moment it is written and can stop a sign error early. For Paper 1 the student does a few questions with no calculator in every class. For Paper 2 the emphasis is on tidy working that keeps method marks, and on mastering the particular calculator allowed.",
        "Science marks go missing in the margins: the wrong scale on a graph, a number with no unit, an explanation that stops before it gets anywhere. Our lessons are assembled from actual past questions and aim at one such habit per session. Talking an experiment through on video is easy enough, whereas holding glassware or a circuit board needs a real lab.",
        "The programme of work starts with single topics, moves to mixed sets and ends with whole papers under timed conditions, so that speed follows understanding.",
      ],
    },
    {
      heading: "Core, Extended and choosing IGCSE subjects",
      paragraphs: [
        "Each of several IGCSE subjects can be entered at Core or Extended standard. The Core ceiling is lower than the top grades, and Extended removes the ceiling. A pupil planning IB Mathematics AA or A Level sciences afterwards should enter Extended.",
        "The subject list carries a code, and past papers are filed under it: Physics is 0625 at Cambridge and 4PH1 at Edexcel. Send it with your first message so the tutor arrives already knowing the specification.",
        "Pick subjects that keep several futures open. Include a science the child enjoys, a mathematics tier that stretches without crushing, and the language spoken at home. English is a given; Hindi sits comfortably beside it.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Send board, programme, subject and exam sitting to +91 7439 368 115 on WhatsApp, noting that you are in Reoti." },
    { title: "Meet a suggested tutor", description: "We put forward a tutor who has taught that syllabus and has your evenings free." },
    { title: "Attend the free lesson", description: "Lesson one is free and addresses a topic the student finds difficult." },
    { title: "Settle terms in writing", description: "The subject, weekly times and fee are put in writing before payment." },
    { title: "Review regularly", description: "A note follows each class, and switching tutor or time is straightforward." },
  ],

  whyPoints: [
    { title: "Open about the format", description: "Lessons by video in Reoti, with no promise of house calls." },
    { title: "Right tutor for the papers", description: "We match on course, level and board and not merely on subject." },
    { title: "Records after each class", description: "Parents receive a record of work done and work to come." },
    { title: "Made for flood country", description: "Schedules give way to monsoon waterlogging, power cuts and festival weeks." },
    { title: "Coaching only", description: "Tutors never draft assessments, essays or coursework." },
    { title: "Free to change", description: "An unsuitable tutor is replaced free of charge." },
  ],

  faqs: [
    { question: "Will a tutor come to the house in Reoti?", answer: "No. Tutors visit homes only in Gurugram and parts of Delhi NCR. The class here is by video, with one tutor, one student, a shared board and a written note at the end. A flooded lane in the rains therefore costs nothing, because nobody has to travel." },
    { question: "How much do IB and IGCSE tutors in Reoti charge?", answer: "Subject, level, tutor experience and weekly sessions decide it. You receive a quote in writing before committing, and we hold no price list. The first class costs nothing, so teaching quality can be judged first." },
    { question: "Is there an IB or Cambridge school in Reoti or Ballia?", answer: "None that we could confirm in the town or the district. The closest Cambridge-registered school is in Varanasi and fuller choices are in Lucknow and further afield. Reoti students therefore tend to use online schools or prepare privately. Check a school's own office before relying on any listing." },
    { question: "Can a Reoti student sit IGCSE papers without a Cambridge school?", answer: "In many cases, as a private candidate. It needs an approved Cambridge or Edexcel centre to take the entry, an answer to the science practical question and attention to a fixed registration date; the nearest centre could be in Varanasi or Lucknow. We handle preparation, not the examination." },
    { question: "What hours suit students in Reoti?", answer: "Evenings after the market quietens, and Sunday mornings. In the rains, slots shift when the lanes flood or power fails, and Chhath, Dadri mela week and Diwali each move the timetable. May afternoons are too hot for hard study." },
    { question: "Will the tutor write my child's internal assessment or Extended Essay?", answer: "It cannot, and should not. Doing so would endanger the diploma. A tutor may explain how the marking works, sketch what a persuasive investigation contains and point to weak links in an argument, yet the prose, the data and the conclusions have to be your child's work alone." },
    { question: "How good does the internet need to be in Reoti?", answer: "Only a few megabits per second, whether from broadband or a phone hotspot. Monsoon storms can cut power, so charge the laptop beforehand and hold a second operator's SIM in reserve." },
    { question: "Is the first lesson really free?", answer: "Yes, it is free. The topic is one your child currently finds tough, and a written summary is sent afterwards. There is no obligation to carry on, and if the pairing is wrong we find another tutor before a fee is mentioned." },
    { question: "Do you teach younger children in PYP and MYP?", answer: "Yes. A seven-year-old needs picture books and number games, a fourteen-year-old needs MYP criteria decoded, and a seventeen-year-old needs Diploma subject depth. When a tutor suits, the relationship can run across all of those years." },
    { question: "How should a student pick between IB Maths AA and AI?", answer: "Start with the degree you hope to take. Engineering programmes, IIT BHU in Varanasi among them, are built on calculus and favour Analysis and Approaches. Economics, psychology and business lean on statistics and favour Applications and Interpretation. Each has Standard and Higher Level versions, and trying a short lesson of both is a fair way to choose." },
    { question: "Does taking the IB rule out NEET or JEE?", answer: "Taking the IB does not shut that door on its own. Eligibility depends on which subjects the student has studied and on the terms the testing agency announces each year, including its stance on the IB and on IGCSE with A Level. Only the official bulletin decides. Our share of the work is the Physics, Chemistry, Biology and Mathematics." },
    { question: "Which examining boards do your tutors know?", answer: "Both Cambridge International and Pearson Edexcel. Give us the course number, such as 0620 or 4CH1 for Chemistry, and the tutor suggested will have taught those very papers, so revision time is never wasted on the wrong specification." },
    { question: "When should we start for the November session?", answer: "August is a sensible moment. With Dussehra, Chhath and Diwali arriving close to November, we ease off in festival weeks and move the demanding paper practice into September." },
    { question: "Can students in Bansdih, Ballia or Rasra join the same lessons?", answer: "Yes. A laptop and a dependable connection are the only requirements. Households in Bansdih, Ballia, Rasra or Sikanderpur receive the same private live class, timed around their own school day." },
    { question: "How do we get started from Reoti?", answer: "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com. Give your child's class, the hardest subject, the school or online school and the name Reoti, and expect a tutor's name plus a free-lesson time in roughly a day." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Varanasi", href: "/varanasi/", description: "The nearest large city and the base of the closest Cambridge-registered school." },
    { label: "IB and IGCSE tutors in Buxar", href: "/buxar/", description: "A Bihar town across the river with the same online format." },
    { label: "IB and IGCSE tutors in Azamgarh", href: "/azamgarh/", description: "A neighbouring eastern Uttar Pradesh page." },
    { label: "IB and IGCSE tutors in Lucknow", href: "/lucknow/", description: "The state capital, with established Cambridge and PYP schools." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The Bihar capital, reachable by rail from Ballia." },
    { label: "IB tutors across India", href: "/india/", description: "Our nationwide page on live IB and IGCSE lessons." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE help organised by subject and board." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Diploma help by subject, TOK included." },
    { label: "Meet the tutors", href: "/tutors/", description: "See tutors listed by subject and programme." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or reserve your free first lesson." },
  ],

  closingHeading: "Book a free lesson from Reoti",
  closingBody:
    "Reoti families only need to tell us the class, subject and exam sitting. We then suggest a tutor and fix the first class at no charge. WhatsApp: +91 7439 368 115. Email: support@ibgram.com.",
};
