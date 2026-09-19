import type { CountrySeoPage } from "../types";

/**
 * Italy - https://www.ibgram.com/italy/
 *
 * Hand-authored country landing page. Delivery to Italy families is ONLINE only;
 * nothing here may imply in-person tutoring inside Italy.
 * Named schools appear as ecosystem context only - no affiliation is implied.
 */
export const italy: CountrySeoPage = {
  slug: "italy",
  countryName: "Italy",
  countryNameLong: "the Italian Republic",
  demonym: "Italian",
  flagCode: "it",
  countryCode: "IT",
  region: "Southern Europe",
  timezoneLabel: "Central European Time (CET/CEST)",
  schedulingNote: "Weekday evenings and weekend mornings in Central European Time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Italy | Online IB DP, MYP & IGCSE Tutoring",
  metaDescription: "Online IB and Cambridge tutors for students at international schools in Italy. One-to-one DP, MYP and IGCSE tuition in Central European Time, Rome to Milan.",
  h1: "Online IB and IGCSE tutors for students studying in Italy",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN ITALY",
  heroSubtitle: "A handful of Italian cities — Milan, Rome, Florence, Turin, Genoa and Bologna among them — host schools running the IB or Cambridge alongside Italy's own Esame di Stato system. We match your child with a tutor who already teaches that exact syllabus, on a video call booked for Central European Time rather than fitted around someone else's day.",
  primaryKeyword: "IB tutors in Italy",
  imageAltText: "Online IB tutor and a Milan international-school student working through a Diploma Programme physics problem together",
  secondaryKeywords: [
    "IGCSE tutors in Italy",
    "online IB tutor Italy",
    "IB DP tutor Rome",
    "IB tutor Milan",
    "Cambridge IGCSE tutor Italy",
    "IB tutor Florence",
    "A Level tutor online Italy",
    "IB diploma equipollenza Italy",
    "IMAT tutor Italy",
    "IB exam prep Italy",
    "online IGCSE tutor Turin",
    "IB Italian A Literature tutor",
  ],

  heroTrustPoints: [
    "Booked for evenings in Central European Time, once the school day in Italy has finished.",
    "Tutors familiar with the IB's May session and Cambridge/Edexcel's May-June and October-November series.",
    "Coverage for IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE, including Italian A: Literature.",
    "Matched to the exact subject and level your child's Milan, Rome, Florence or Turin school teaches.",
  ],
  heroStats: [
    { value: "CET/CEST", label: "Central European Time, one hour ahead of the UK" },
    { value: "60-100", label: "Esame di Stato (Maturità) grading scale" },
    { value: "IMAT", label: "English-taught medicine admissions test some students also sit" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in Italy: PYP, MYP, DP, CP and IGCSE students",
    paragraphs: [
      "Families studying the IB or Cambridge/Edexcel IGCSE in Italy fall into a few recognisable groups: international and diplomatic households posted to Rome or Milan for a fixed term, Italian families choosing a bilingual or international school specifically to open a foreign-university route, and returning Italian-overseas families who want their child to keep a qualification already started elsewhere. All of them are served the same way — an online tutor who already teaches the exact syllabus their school follows, on a call booked for a Central European evening.",
      "Italy's own upper-secondary system runs on a different structure entirely: five years of liceo, istituto tecnico or istituto professionale ending in the Esame di Stato, commonly called the Maturità, scored out of 100. The IB and Cambridge sector sits alongside this as a genuine, separately licensed alternative — schools offering the IB Diploma in Italy typically hold status as a scuola paritaria, and Italy's education ministry has formally recognised the IB Diploma as equivalent to the Maturità for legal purposes, which is a stronger starting position than in many countries where a foreign diploma needs case-by-case conversion.",
      "A handful of moments account for most enquiries. A Higher Level subject — often Mathematics Analysis and Approaches or Chemistry — gets a lot heavier once the second DP year starts. A student aiming at English-taught medicine in Italy discovers the IMAT needs its own dedicated preparation on top of ordinary coursework, not a side effect of it. An Extended Essay grinds to a halt because the question underneath it was too broad to answer inside 4,000 words. None of these need panic, just someone qualified to fix that specific thing.",
      "Delivery being entirely online closes a real gap for smaller markets: a family in Turin or Genoa, where the specialist-tutor pool is thinner than Milan's or Rome's, reaches exactly the same calibre of subject expert as a family anywhere else. The only variable left is getting the match right — correct programme, subject and level — and putting it on a Central European clock everyone can read at a glance.",
      "Lessons build on whatever the school has actually set that week — a recent past paper, a stalled internal assessment draft, the topic the class hasn't quite grasped — rather than a separate curriculum layered on top. Expect a short note after each one, and if the teaching style genuinely isn't working after a session or two, a quick message is all it takes to try someone else.",
    ],
    bullets: [
      "Fully online and timed to Central European Time; placing a tutor inside a home is something IB Gram does only in India.",
      "PYP, MYP, DP and CP alongside Cambridge and Edexcel IGCSE, Italian A: Literature included for native speakers.",
      "Built around what the school has actually set — internal assessments, past papers, IMAT prep where relevant, the real exam series.",
      "A no-cost first lesson up front, a recap after every session that follows, and an easy switch if a tutor isn't the right fit.",
    ],
  },

  programmesIntro: "Because the IB Diploma carries formal legal parity with Italy's own Maturità, families in Italy weigh the four programmes slightly differently than in a country where a foreign qualification needs separate conversion. Here's how each stage plays out for a student at one of Italy's IB or Cambridge schools.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Scuola primaria",
      description: "PYP is organised around transdisciplinary units of inquiry rather than a fixed subject grid, so support at this stage is usually reading fluency in English, number sense, and the structured writing a unit of inquiry demands, plus help framing a simple research question ahead of the Grade 5 Exhibition.",
      countryNote: "PYP is offered at a small number of Italian cities' international schools, often alongside Italian-language lessons for local integration, so families new to the system sometimes need a short settling-in period on inquiry-based tasks that look quite different from a traditional scuola primaria's homework style.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Scuola secondaria di primo & secondo grado",
      description: "MYP grades against eight subject-group criteria on a 0-8 scale, a system with no direct equivalent on an Italian report card built around numerical marks out of 10. We work on criterion language and the extended writing MYP expects, alongside the Personal Project in Year 5.",
      countryNote: "A student transferring in from an Italian scuola media typically needs a bridging period on academic English and criterion-referenced assessment before MYP grading stops feeling arbitrary, since Italian schools mark almost everything on a straightforward numerical scale instead.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · Anni 4°-5°",
      description: "Six subjects across Higher and Standard Level, plus Theory of Knowledge, the Extended Essay and CAS. Tutoring splits between pushing HL content further than classroom time allows and coaching the Extended Essay through its supervisor reflections.",
      countryNote: "Italy's DP schools sit the May session, and the IB Diploma is formally recognised as equivalent to the Italian Esame di Stato for legal purposes, which simplifies domestic university entry compared with many other countries — though individual universities can still set their own admissions criteria on top of that recognition.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · Anni 4°-5°",
      description: "CP wraps two full-standard DP subjects around a career-related study, with a core built from Personal and Professional Skills, Service Learning, language development and the Reflective Project pulling everything together.",
      countryNote: "Only a small handful of Italy's IB schools run CP at all, so cohort sizes are tiny — a family here is often better off treating an outside tutor as the Reflective Project sounding board a classmate would normally provide.",
    },
  ],

  subjectsIntro: "Families in Italy come to us for a specific paper, not general tutoring — Mathematics AA HL is a different course from AI SL, and Cambridge IGCSE Italian is not the same exam as DP Italian A. Sessions run online, booked to Central European Time, and follow the syllabus year and exam series your child's specific school actually sits.",
  subjects: [
    { name: "Mathematics AA", levels: "HL · SL · IGCSE Extended (0580)", description: "Sessions lean on proof and calculus technique at HL, dialled back for SL students chasing a solid result rather than extra depth. We push students toward a genuinely self-chosen exploration topic early, since a late choice is the single biggest cause of a rushed final draft." },
    { name: "Mathematics AI", levels: "HL · SL · IGCSE Core & Extended", description: "A better fit than AA for students who think in terms of real data and technology use rather than formal proof. HL layers matrices and complex numbers on top, and we spend real time on GDC fluency, which quietly costs marks when it's shaky." },
    { name: "Physics", levels: "HL · SL · IGCSE Physics (0625)", description: "We treat mechanics, fields and thermodynamics as things to be solved, not memorised, and put deliberate weight on uncertainty analysis and the practical write-up, plus IMAT-style multiple-choice drilling for students eyeing an English-taught medicine place." },
    { name: "Chemistry", levels: "HL · SL · IGCSE Chemistry (0620)", description: "Moles, titrations and equilibrium calculations get turned into a method a student can reproduce under pressure rather than re-derived each time, and HL candidates get hands-on help shaping their scientific investigation into something markable." },
    { name: "Biology", levels: "HL · SL · IGCSE Biology (0610)", description: "Since the current syllabus is organised by theme rather than a strict topic order, we teach across themes and spend real time on command-term precision, since that's usually where a student who knows the content still loses marks." },
    { name: "Economics", levels: "HL · SL · IGCSE Economics (0455)", description: "Diagram accuracy and genuine evaluation writing carry more weight than definitions here, and we build each of the three internal assessment commentaries around a real article the student found and can defend, rather than a stock example." },
    { name: "Business Management", levels: "HL · SL · IGCSE Business Studies (0450)", description: "We anchor units one through five in real companies, often from Italy's fashion, design and manufacturing sectors, and put internal assessment coaching squarely on the application and evaluation marks that quietly separate the grade bands." },
    { name: "English A: Language & Literature", levels: "HL · SL · IGCSE First Language English", description: "For a student who already writes fluent English, the real adjustment is IB's comparative, global-issue framing rather than raw language skill — we spend early sessions specifically on that shift, alongside Paper 1 timing under real pressure." },
    { name: "English B", levels: "HL · SL · IGCSE English as a Second Language", description: "Built for a student whose stronger language is Italian, working through the five prescribed themes and building the reading and writing speed that timed DP and IGCSE papers genuinely demand, rather than assuming it's already there." },
    { name: "Italian A: Literature", levels: "HL · SL", description: "A genuinely strong choice for an Italian-national student rather than a fallback — we work through the set literary texts, the individual oral commentary, and the specific demands of Paper 1 and Paper 2 with a native-level specialist." },
    { name: "Italian B", levels: "HL · SL · IGCSE Italian (0535)", description: "For a non-native student adding Italian as a second language, useful for internationally mobile families settling in for the longer term — sessions cover the five prescribed themes and build confidence in the oral component specifically." },
    { name: "Computer Science", levels: "HL · SL · IGCSE Computer Science (0478)", description: "We split time between hands-on programming in Java or Python and the underlying theory — data structures, object-oriented design — since written papers test the theory directly, and guide the internal assessment from a working idea to a properly documented solution." },
    { name: "History", levels: "HL · SL · IGCSE History (0470)", description: "Given the setting, twentieth-century European topics come up often as the HL regional option, and we focus heavily on source evaluation and building an argument that actually answers the question asked, not just the general topic." },
    { name: "Psychology", levels: "HL · SL", description: "There's no shortcut to naming and citing the actual studies a syllabus requires, so that's where session time goes, alongside ERQ structure specifically. With no Cambridge IGCSE equivalent, younger students instead build up the core approaches from scratch." },
  ],

  regionsTitle: "Cities and school communities across Italy",
  tutorsIntro: "The tutors below teach on Central European Time, so an evening booking in Milan or Rome sits comfortably inside their own working day in India.",
  regionsIntro: "Italy sits in a single time zone, Central European Time, shifting to Central European Summer Time in the same weeks as the rest of the EU. Most families book an evening slot once the school day has finished, typically from around 5 or 6pm, with weekend mornings added as DP mocks or the May session approaches.",
  regions: [
    { name: "Milan & Lombardy", note: "Italy's business capital has the country's widest choice of IB and British-curriculum schools, serving a large expatriate and internationally mobile Italian community. Evening CET slots from 5pm onward suit students finishing after-school activities first." },
    { name: "Rome & Lazio", note: "Home to diplomatic missions, UN agencies and the Vatican's international community, Rome hosts several long-established IB and British-curriculum schools alongside Italy's own liceo network. Requests here skew toward HL sciences and Extended Essay coaching." },
    { name: "Florence & Tuscany", note: "A smaller but well-established international-school community serves long-staying expatriate families and Italians building toward a foreign university, with a single IB continuum school covering the whole city and surrounding area." },
    { name: "Turin & Piedmont", note: "Home to the first fully authorised IB World School in Piedmont, alongside a Cambridge and British-curriculum offering at the same campus, serving both expatriate and Italian families in Italy's automotive and industrial heartland." },
    { name: "Genoa & Liguria", note: "Liguria's only IB continuum school serves the port city's international shipping and trade community, and families here often have less local access to specialist subject tutors than in Milan or Rome." },
    { name: "Bologna & Emilia-Romagna", note: "A university city with both an IB continuum school and a separate Cambridge-curriculum school, reflecting the wider region's strong academic reputation and its own large Italian university population." },
    { name: "Naples & Campania", note: "Southern Italy's largest metropolitan area has a smaller international-school footprint than the north, so families here rely more heavily on online tutoring to reach IB or Cambridge subject specialists at all." },
    { name: "Venice & the Veneto", note: "A region better known for its Italian liceo network than a large international-school sector, where expatriate and internationally minded families studying IGCSE or the IB typically look further afield for a specialist tutor, which online delivery solves directly." },
  ],

  schoolDisclaimer: "IB Gram operates independently of every school named on this page. They appear purely to illustrate where the IB and Cambridge sector sits inside Italy, and naming them implies no partnership, endorsement or authorisation, whether from the school itself, the International Baccalaureate Organization, Cambridge International, Pearson Edexcel or Italy's Ministry of Education.",
  schoolClusters: [
    {
      city: "Milan",
      note: "Milan enquiries most often ask for HL Mathematics, HL Chemistry, and Extended Essay planning, alongside IMAT preparation for students targeting Italian medicine programmes. Evening sessions run 5:30 to 9pm Central European Time.",
      schools: [
        "International School of Milan (ISM)",
        "Canadian School of Milan (CSM)",
        "British School of Milan",
      ],
    },
    {
      city: "Rome",
      note: "Rome's mix of IB and British-curriculum schools brings requests spanning DP HL sciences, IGCSE core subjects for students on the British track, and Theory of Knowledge essay guidance.",
      schools: [
        "Rome International School (RIS)",
        "St George's British International School, Rome",
        "American Overseas School of Rome (AOSR)",
      ],
    },
    {
      city: "Florence & Genoa",
      note: "These two single-school IB communities lean on online tutoring more than the larger cities, since a specialist subject teacher outside the school's own staff is genuinely hard to find nearby.",
      schools: [
        "International School of Florence (ISF)",
        "International School of Genoa (ISG)",
      ],
    },
    {
      city: "Turin & Bologna",
      note: "Turin's combined IB and Cambridge offering and Bologna's separate IB and Cambridge schools both draw a mix of expatriate and Italian families building toward university, with steady demand for HL Economics and Business Management support.",
      schools: [
        "International School of Turin (IST)",
        "International School of Bologna (ISB)",
        "Bologna International School (BIS)",
      ],
    },
  ],

  modesIntro: "Three formats, all delivered by video rather than in person, since IB Gram doesn't place tutors in Italian homes. Whichever you pick, your child sticks with the same tutor, and switching between formats as the calendar demands is straightforward.",
  modes: [
    {
      title: "Standard one-to-one lessons",
      description: "One tutor, one student, working on whatever is actually stuck — an unfinished internal assessment, a Paper 3 style question, IMAT practice ahead of the test window. Rather than a set outside curriculum, the lesson takes its cue from what the school itself has assigned and marked most recently.",
      bullets: [
        "A fixed evening slot in Central European Time, set once and repeated weekly.",
        "Driven by whatever your child's school has most recently assigned or marked.",
        "A brief note after each lesson, so you can track progress without needing to watch it happen.",
        "The default choice for HL subjects, IA coaching and a student who has just switched schools.",
      ],
    },
    {
      title: "Small groups of two to four",
      description: "A handful of students on identical coursework share a tutor, which pays off particularly well in discussion-heavy subjects — HL Biology, IGCSE Physics — where working through a classmate's wrong turn is often more instructive than only reviewing your own. Groups form around matching subject, level and availability, and the per-head price drops accordingly.",
      bullets: [
        "Small groups matched precisely on subject, level and Central European Time availability.",
        "Strongest for subjects where comparing past-paper answers sharpens everyone's technique.",
        "A reduced rate per student, with a consistent tutor and slot from week to week.",
        "Simple to shift a student into one-to-one if a group's pace no longer suits them.",
      ],
    },
    {
      title: "Short, intensive exam blocks",
      description: "A denser run of sessions concentrated around a fixed date — May exams, an IGCSE sitting, the IMAT itself, or an approaching IA deadline — replacing the usual once-a-week rhythm for a few weeks. Marking on timed past papers comes back inside days, not the following week.",
      bullets: [
        "Timed conditions, graded to the real criteria, with fast turnaround on feedback.",
        "Structured around a fixed target date rather than an open-ended revision plan.",
        "Available through school holidays and weekends, not restricted to weekday evenings.",
        "Worth reserving weeks ahead, since these slots are the first to book out each exam season.",
      ],
    },
  ],

  sections: [
    {
      heading: "IB, Cambridge and the Italian Maturità: how international schooling fits into Italy",
      paragraphs: [
        "Italy's own upper-secondary system runs through a liceo, istituto tecnico or istituto professionale over five years, ending in the Esame di Stato — universally known as the Maturità — scored out of 100 with a pass mark of 60. It's the qualification the overwhelming majority of Italian students sit, and it's what a family comparing systems is usually measuring the IB or Cambridge against.",
        "Schools offering the IB or Cambridge/Edexcel curricula in Italy typically operate under scuola paritaria status, a form of legal recognition that lets them run outside the standard state curriculum while remaining licensed by Italy's education ministry. This matters practically: it's part of why the IB Diploma has a stronger formal footing in Italy than in many countries, having been recognised by the ministry as legally equivalent to the Maturità for further study and most administrative purposes.",
        "Geographically, the IB and Cambridge sector concentrates in a short list of cities — Milan, Rome, Florence, Turin, Genoa and Bologna each have at least one established IB continuum or British-curriculum school, while much of the rest of the country runs almost entirely on the liceo system. A family relocating within Italy, or simply choosing a city, needs to know this before assuming a strong option in one place has an equivalent nearby.",
        "The students we work with in Italy split roughly three ways: expatriate and diplomatic families on a fixed-term posting, Italian families who chose an international school deliberately to build a foreign-university option, and returning Italian-overseas families keeping a qualification their child already started. What all three need from a tutor is the same — genuine familiarity with the specific syllabus, not just IB or Cambridge in general terms.",
        "Every session we run for an Italy-based family happens online, timed to Central European Time so a lesson lands in the evening rather than at an awkward hour. We do not send tutors into homes inside Italy; that model exists only for families based in India, where our tutors are based.",
      ],
      bullets: [
        "Italy's own system runs through a five-year liceo, technical or professional track ending in the Esame di Stato, scored out of 100.",
        "IB and Cambridge schools in Italy typically hold scuola paritaria status, licensed by the education ministry outside the standard state curriculum.",
        "The IB Diploma is formally recognised by Italy's ministry as equivalent to the Maturità for most purposes.",
        "The IB and Cambridge sector concentrates in Milan, Rome, Florence, Turin, Genoa and Bologna, not evenly across the country.",
        "Delivery for Italy families is online only, timed to Central European Time.",
      ],
    },
    {
      heading: "Italy's Esame di Stato (Maturità) vs Cambridge IGCSE/A Level vs the IB Diploma",
      paragraphs: [
        "The Esame di Stato caps five years of liceo, istituto tecnico or istituto professionale study, combining written papers set partly nationally and partly by the school with an oral examination in front of a mixed internal-and-external commission. The final mark runs from 60 to 100, taught and examined entirely in Italian, and the diploma it produces is the standard entry qualification for Italian universities.",
        "Cambridge or Edexcel IGCSE, where offered in Italy, is sat subject by subject around age 16, in English, with grades running A* to G or 9 to 1 depending on the syllabus — a staging qualification rather than a school-leaving diploma, typically followed by the IB Diploma at the same school rather than a separate A Level track, since few Italy-based schools run A Level as their senior programme. The IB Diploma itself is a fixed two-year package: six subjects at Higher or Standard Level plus Theory of Knowledge, the Extended Essay and CAS, graded 1 to 7 per subject with 45 points available overall.",
        "The table below sets the three out on the details families actually weigh — exam format, grading, language, and what happens afterward. Because the IB carries formal equivalence to the Maturità in Italy, the comparison here is less about which route is accepted at all, and more about which fits a family's language of instruction and university destination.",
        "One detail worth flagging for Italian families specifically: choosing the IB or Cambridge route generally means schooling almost entirely in English from early secondary onward, which is a genuine commitment even for a family confident in the language, and worth discussing with the school directly if Italian literary and civic education matters to the family beyond what Italian A or B alone provides.",
        "Our practical guidance to Italy families is to decide the target university system before finalising a school choice. A family aiming squarely at Italian universities can lean on the IB's formal equivalence and stay largely inside the Italian process; a family aiming abroad gets the same benefit from the IB's international recognition, which makes it a genuinely flexible choice either way compared with committing to the Maturità alone.",
      ],
      bullets: [
        "The Esame di Stato is scored 60-100, examined mostly in Italian, and is the standard route into Italian universities.",
        "IGCSE, where offered in Italy, is a subject qualification for mid-teens usually followed by the IB Diploma at the same school.",
        "The IB Diploma is a fixed two-year package graded 1-7 per subject, 45 points maximum, taught largely in English.",
        "The IB carries formal legal equivalence to the Maturità in Italy, unlike in many other countries.",
        "Decide the target university system — Italian or international — before finalising a school and curriculum choice.",
      ],
      table: {
        caption: "Italy's Esame di Stato (Maturità) vs Cambridge IGCSE vs the IB Diploma",
        columns: ["Track", "Esame di Stato (Maturità)", "Cambridge/Edexcel IGCSE", "IB Diploma Programme"],
        rows: [
          ["Exam structure", "Written papers plus an oral, at the end of five years of liceo, technical or professional study", "Individual subject papers, usually sat around age 16", "Externally set and marked exams in the final year, plus internal assessment"],
          ["Grading", "Out of 100, pass mark 60", "A*-G or 9-1 per subject depending on the syllabus", "1-7 per subject, 45 points maximum with the diploma"],
          ["Language of instruction", "Italian", "English", "English, with Italian A or B for Italian-national students"],
          ["Legal status in Italy", "The default national qualification", "A staging qualification, not a leaving diploma on its own", "Formally recognised as equivalent to the Maturità"],
        ],
      },
    },
    {
      heading: "How is the IB Diploma recognised for Italian university entry, and for universities abroad?",
      paragraphs: [
        "For universities outside Italy, the IB Diploma is read directly, the same way it would be for a student from any other country — no Italian paperwork is normally needed for an application made from abroad. This worldwide readability is one of the clearest advantages families weigh when choosing the IB over the Maturità for a child likely to study internationally.",
        "For Italian universities, the IB Diploma's formal equivalence to the Maturità means the traditional route — a dichiarazione di valore issued by an Italian consulate abroad, historically required for many foreign qualifications — is often unnecessary or has been replaced at many institutions by verification through CIMEA, Italy's national centre for academic mobility and recognition. Requirements differ by university, and some, including several of Italy's most selective institutions, now accept IB results with minimal additional paperwork.",
        "The table below outlines the general shape of what a family typically needs to do. Treat it as an overview rather than a substitute for a specific university's own published admissions requirements, since Italian universities have moved at different speeds in simplifying this process and requirements can change between admission cycles.",
        "For students entering the IB Diploma from a different school system partway through, or planning to enter Italian university with results earned at a school outside Italy, the same general principles apply, though the department handling the application — the university's international office rather than the Ministry — is usually the right first point of contact for current requirements.",
        "Whichever process applies, keeping documentation organised early avoids delay later: original diploma certificates, subject results statements, and — where still required by a specific university — any translation or verification paperwork. Assembling this well before an application deadline, rather than immediately after results day, gives enough time to resolve any unexpected extra step a particular university asks for.",
      ],
      bullets: [
        "IB results are read directly by universities outside Italy, with no Italian paperwork required for an overseas application.",
        "The IB Diploma's formal equivalence to the Maturità has simplified Italian university entry compared with many other foreign qualifications.",
        "CIMEA verification has replaced the traditional consulate-issued dichiarazione di valore at many Italian universities.",
        "Requirements still differ by university — check the specific institution's published admissions process rather than assuming a single national rule.",
        "Keep diploma certificates and results statements organised well ahead of any application deadline.",
      ],
      table: {
        caption: "Typical steps to use an IB Diploma for Italian university admission",
        columns: ["Step", "What happens", "Who submits it"],
        rows: [
          ["1. Finish the Diploma", "Complete the IB Diploma at an authorised school in Italy or abroad", "School registrar"],
          ["2. Check the target university's process", "Confirm whether CIMEA verification, a dichiarazione di valore, or neither is required", "Family or student, via the university's international office"],
          ["3. Submit certificates and results", "Provide the original diploma, statement of results and any requested verification", "Family or student"],
          ["4. Complete the university application", "The verified qualification accompanies the standard application alongside any admissions test the course requires", "University admissions office"],
        ],
      },
    },
    {
      heading: "What is the IMAT, and how do IB and Cambridge students in Italy use it for medicine?",
      paragraphs: [
        "The IMAT (International Medical Admissions Test) is the entrance test several Italian public universities use for English-taught medicine, dentistry and veterinary programmes, and it has become a genuine draw for IB and Cambridge students in Italy and beyond, since it offers a route into an Italian medical degree taught in English without needing fluent Italian at entry. Universities offering English-taught medicine using the IMAT include long-established public institutions in cities such as Milan, Rome, Naples and Bari, among others.",
        "The test covers logical reasoning and general knowledge alongside biology, chemistry, physics and mathematics content roughly at the level a strong DP or A Level science student would recognise, but with a distinct format — multiple-choice questions under strict time pressure across a broad syllabus rather than the extended written responses IB and Cambridge papers use. That format shift is exactly why DP or A Level content knowledge alone doesn't guarantee a strong IMAT score without dedicated practice on the test's own style.",
        "For a family in Italy already paying close attention to HL Biology, Chemistry or Physics, the natural next step is treating IMAT preparation as a parallel track that starts well before the DP's second year gets busy with internal assessments and the Extended Essay, rather than squeezing it into the final months before the test date, which is a common and avoidable source of stress.",
        "The IMAT sits alongside, not instead of, the underlying DP or A Level science subjects — strong subject grades still matter for the diploma itself and for university options outside medicine, so IMAT preparation should build on solid subject teaching rather than replace it with test-specific drilling too early.",
        "Because the IMAT date and exact syllabus emphasis can shift from year to year, and because not every English-taught medicine place uses identical selection criteria, checking the current year's official guidance from the specific universities a student is targeting remains essential — this section is a starting orientation, not a substitute for that.",
      ],
      bullets: [
        "The IMAT is the entrance test for several Italian public universities' English-taught medicine, dentistry and veterinary programmes.",
        "It draws heavily on DP or A Level science and maths content, but in a multiple-choice, time-pressured format quite different from IB or Cambridge papers.",
        "IMAT preparation works best as a parallel track starting well before DP2's internal assessment and Extended Essay season gets busy.",
        "Strong HL science grades still matter in their own right, alongside — not instead of — IMAT-specific preparation.",
        "Always confirm the current year's IMAT date, syllabus emphasis and participating universities directly, since details can change between admission cycles.",
      ],
    },
    {
      heading: "IB internal assessments, the Extended Essay and Italy's exam calendar",
      paragraphs: [
        "Like most of Western Europe, Italy's IB schools follow the northern-hemisphere calendar and sit their exams in May. That squeezes a DP2 student's spring: internal assessment final drafts, the Extended Essay, TOK work and school mocks all land in the same few months, sometimes overlapping with an early submission deadline for a university abroad that moves faster than the Italian admissions timeline.",
        "Weighting for internal assessments differs by subject — a smaller share of the grade in several sciences and mathematics, more in language and the arts — but they're always set and marked in-school first, then checked externally. A chemistry student needs a variable the school's own lab equipment can actually control; a history student needs sources genuinely within reach. In practice, IA tutoring is mostly sitting with the published criteria side by side with a draft and pointing to precisely where it's underperforming against them.",
        "Getting the Extended Essay and TOK right starts well before the writing itself: a 4,000-word research question narrow enough to be answerable with sources the student can actually get hold of, and a working source list finished before the school's mid-year holiday rather than pulled together in a rush afterward. TOK's own exhibition and 1,600-word essay reward exactly the same kind of early, unglamorous planning.",
        "Because the IB checks this closely through similarity software, every one of these pieces has to be the student's own writing from first draft to last. What a tutor actually does is point out a criterion the student has misunderstood, push back on a weak link in the argument, and work through a comparable — never the same — problem, stopping well short of producing text that ends up in the submitted piece.",
        "Where a school still runs IGCSE before moving students into the Diploma, that sitting is usually the May/June series rather than October/November, since the route from IGCSE into DP doesn't typically pass through A Level in Italy. Everything here happens on video, timed to Central European Time, weighted toward evenings and weekend blocks as mocks approach, with an error log kept from each timed paper so the final term's revision targets the topics that are genuinely still weak.",
      ],
      bullets: [
        "IA drafts, the Extended Essay and TOK components cluster in the months before Italy's IB May session.",
        "Tutors coach against the published criteria and never write or edit a draft a student then submits as their own.",
        "A strong Extended Essay question is one your child can actually answer with the sources available to them.",
        "Most Italy-based schools that offer IGCSE move students into the IB Diploma next, rather than a separate A Level track.",
        "Sessions for Italy families run online only, timed to Central European Time, mostly evenings and weekends.",
      ],
      table: {
        caption: "Exam calendar by programme for Italy-based students",
        columns: ["Programme", "Typical exam window", "Results", "Who usually sits it"],
        rows: [
          ["IB Diploma Programme", "May session, on the northern-hemisphere calendar", "Early July", "Students at Italy's IB continuum schools"],
          ["Cambridge/Edexcel IGCSE", "Main May/June series, where offered", "August", "Younger students at Italy's IB and British-curriculum schools"],
          ["Esame di Stato (Maturità)", "Mid-June to early July, set nationally with school-set components", "July", "Students completing the standard Italian liceo, technical or professional track"],
        ],
      },
    },
    {
      heading: "Which subjects and levels should a student in Italy take?",
      paragraphs: [
        "Subject and level choices should follow the destination, not whichever subject currently feels easiest. Medicine via the IMAT calls for genuinely strong HL sciences and Mathematics; engineering, whether the target is an Italian or a foreign university, calls for HL Mathematics Analysis and Approaches paired with Physics; and a student weighing an Italian-taught humanities or law degree needs to check that specific course's language expectations directly, since teaching in Italian assumes a level of written Italian a secondary schooling in English doesn't automatically provide.",
        "For an Italian citizen, the Language A decision is worth more thought than it usually gets. Italian A: Literature lets a fluent student write from genuine strength, rather than competing on English literary analysis against classmates for whom that's a first language — and dropping it purely because the school runs everything else in English is a choice worth questioning rather than defaulting into.",
        "Where a student's English is still catching up — common for someone newer to an international-school environment — English B is the more sensible starting subject than English A, even though it can feel like settling for less. Every DP paper is timed and written, so a shortfall in reading or writing speed shows up well beyond the English grade itself if a student is pushed into English A too early.",
        "Deciding between Mathematics AA and AI comes down to what kind of thinking a student actually does well, not which sounds more prestigious. AA is built on proof and algebraic manipulation; AI leans on modelling and using technology fluently — genuinely different skills, and being strong in one says little about the other. For a student also preparing for the IMAT, this split barely matters, since the test itself draws on both kinds of reasoning without favouring either DP route.",
        "Once the subject list is locked in, the fastest tutoring progress comes from working directly off whatever the school has already issued — its own task sheets, its own mark scheme wording — rather than a generic syllabus overview that doesn't reflect how a particular teacher actually grades.",
      ],
      bullets: [
        "Let the destination — Italian medicine via the IMAT, engineering, or a humanities route — decide HL and SL choices, not current comfort.",
        "A fluent Italian citizen is often better served by Italian A: Literature than by defaulting to English A.",
        "Choose English B over English A while reading and writing speed in English is still building.",
        "AA and AI reward different kinds of thinking; check which one actually matches how your child works, IMAT included.",
        "Tutoring built from your own school's task sheets beats a generic syllabus overview every time.",
      ],
    },
    {
      heading: "How online IB and IGCSE tutoring works across Central European Time",
      paragraphs: [
        "India sits four and a half hours ahead of Italy, which happens to work in a family's favour: a 6 or 7pm slot in Milan or Rome falls comfortably inside a tutor's own working day rather than at the edge of it. Bookings are confirmed with the full Central European date and time attached, so there's never any guessing about which hour was actually meant.",
        "Rather than launching into new material, a first lesson is spent working out where a student genuinely stands — a couple of problems, talked through out loud, usually reveal more about where the thinking goes wrong than a stack of past results does. After that, a 60-minute weekly slot covers routine subject maintenance, while 90 minutes suits IA work or IMAT-style timed practice, with frequency stepping up naturally as mocks or the May session gets closer.",
        "Lessons happen over video with a shared digital workspace sitting between tutor and student — equations and diagrams for maths and science, a live-commented document for essay subjects. Whatever gets annotated during a session stays saved somewhere the family can return to later. None of it demands special equipment: a laptop, decent internet and a headset are genuinely enough, though a phone screen makes anything equation-heavy harder than it needs to be.",
        "Handing over your child's actual school documents — task-specific MYP criteria, the DP's internal assessment brief with its word limit, an IGCSE mark scheme, or whatever the IMAT prep should be targeting — does more for the quality of a session than anything else a family can provide, since it lets a tutor mark and explain using the exact standard the school itself applies.",
        "Expect a short note after every lesson on what was covered and what comes next, with a longer check-in every few weeks. Every tutor passes a background and subject check before being matched with anyone, and parents are welcome to sit in on a lesson, especially with a younger PYP or MYP student. A single lesson up front, before agreeing to anything further, is the low-risk way to see whether it's a good match.",
      ],
      bullets: [
        "A four-and-a-half-hour gap from India means an Italian evening lands inside a tutor's normal working hours.",
        "Standard slots are weekday evenings and weekend mornings, held to the same time each week once agreed.",
        "A shared digital workspace and a stable connection cover what's needed for almost every subject.",
        "Handing over your school's own task sheets and mark schemes sharpens feedback more than anything else you can do.",
        "A single lesson up front, with recent marked work in hand, is the low-risk way to check the fit.",
      ],
    },
  ],

  process: [
    { title: "Describe the school setup", description: "Programme, subject, level, whether IMAT prep needs to fit in somewhere, and the assessment dates the school has already given you — a quick note covering those is genuinely enough to open things up." },
    { title: "A candidate matched to that exact course", description: "Not a generalist — someone who has specifically taught Mathematics AA at HL, or IGCSE Physics, or Italian A, depending on what's needed. Their background comes to you before any booking happens." },
    { title: "A no-charge first lesson on your evening", description: "Video call, shared workspace, timed to Central European Time. Real material, worked through properly, followed by a candid read on what's actually going on and what closing the gap would take." },
    { title: "A schedule shaped by your child's real deadlines", description: "Internal assessments, mocks, the May session, an IMAT date — the plan follows whatever your school has set, at a frequency you pick, paid per session or in a block, no lengthy commitment attached." },
    { title: "Ongoing adjustment as things develop", description: "Regular notes, a broader check-in every so often, and a genuine willingness to swap the tutor out if the pairing simply isn't clicking, rather than expecting your family to make it work regardless." },
  ],

  whyPoints: [
    { title: "The right course, not an approximate one", description: "AA at HL and AI at SL ask for entirely different skills, and an IGCSE paper rewards different technique from a DP one. Getting programme, subject, level and board right from the start means the first lesson isn't wasted." },
    { title: "Timed for a normal evening in Italy", description: "The gap to India runs about four and a half hours, which happens to leave Italian evenings sitting inside a tutor's own working day rather than at its awkward edge." },
    { title: "One provider, whichever Italian city", description: "Milan, Rome, Florence, Turin, Genoa, Bologna — the IB and Cambridge footprint sits mostly in these cities, and covering PYP through DP, IGCSE and IMAT preparation under one roof means a house move doesn't mean starting the search over." },
    { title: "Genuine familiarity with Italy's own recognition rules", description: "The IB's formal parity with the Maturità, what CIMEA verification actually involves, where the IMAT fits for English-taught medicine — this shapes the tutoring plan rather than being treated as background trivia." },
    { title: "Coursework support that respects the boundary", description: "Internal assessments, Extended Essays, TOK and IGCSE coursework all sit under strict honesty rules. What gets coached is method and reasoning — never a finished paragraph handed over as the answer." },
    { title: "A background check done before, not after", description: "Every tutor's subject knowledge and teaching history gets checked ahead of any match, and the free first lesson exists so your child — not just you — gets to decide if the style actually clicks." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor in Italy?",
      answer: "The useful starting point is the programme stage and the specific subject and level, not 'a tutor' in general. Get in touch on ibgram24@gmail.com or WhatsApp +91 7439 368 115, tell us which school your child attends, what their current grades look like, and where exactly things are going wrong, and we'll propose a specific tutor rather than pointing you at a directory.",
    },
    {
      question: "Do you offer tutoring for Cambridge IGCSE students in Milan and Rome?",
      answer: "Yes, matched precisely to the syllabus code the school uses. Since most Italy-based schools running IGCSE send students on into the IB Diploma rather than A Level, sessions are planned with that next step already in mind, working through whichever tier — Core or Extended — the school has actually entered the student for.",
    },
    {
      question: "Can lessons run in Central European Time?",
      answer: "Yes, every session is booked and confirmed in Central European Time (CET, or CEST in summer), not India time, with the same daylight-saving shift the rest of the EU follows. Weekday evenings and weekend mornings are the usual windows families choose, held consistently by the same tutor once agreed.",
    },
    {
      question: "How is the IB Diploma recognised for Italian university admission?",
      answer: "The IB Diploma is formally recognised by Italy's education ministry as equivalent to the Esame di Stato, which has simplified the process considerably compared with many other countries. Many universities now use CIMEA verification rather than the older consulate-issued dichiarazione di valore, but requirements still differ by institution, so check the specific university's current published process before applying.",
    },
    {
      question: "What is the IMAT, and do you help students prepare for it?",
      answer: "The IMAT is the entrance test several Italian public universities use for English-taught medicine, dentistry and veterinary programmes, drawing on biology, chemistry, physics, maths and logical reasoning in a fast-paced multiple-choice format quite different from IB or Cambridge papers. Yes, we help DP and A Level students prepare for it, usually alongside — not instead of — their regular HL science tutoring.",
    },
    {
      question: "How much does IB tutoring cost in Italy, and how do we pay?",
      answer: "It varies by programme level, subject and weekly hours — expect DP HL sciences, Mathematics and any IMAT preparation to cost more than younger MYP support. You get a written per-hour figure before committing to anything, so nothing changes once the first invoice arrives. Get in touch at ibgram24@gmail.com with your child's grade, subject and level, and payment and currency get sorted in that same exchange.",
    },
    {
      question: "Do you have in-person tutors in Italy?",
      answer: "No, tutoring inside Italy is entirely online. In-home sessions exist only in India, where the tutors themselves are based. What Italy families get instead is a live video lesson with a shared workspace, screen-sharing over past papers and IA drafts, and a note afterward — genuinely the only practical route to a specialist for something narrow like Italian A: Literature at a school too small to staff it properly.",
    },
    {
      question: "Can IB results from a school in Italy get my child into a university abroad?",
      answer: "Yes. Admissions offices outside Italy read an IB Diploma directly, without needing anything specific to Italy attached to it, which is a large part of why families here pick it over the Maturità when the plan involves studying abroad. Graduates of Italy's IB schools go on to universities right across Europe, the UK and the US on those results alone.",
    },
    {
      question: "Can a tutor help with my child's IA, Extended Essay or IGCSE coursework?",
      answer: "Within limits, yes: narrowing down a research question, working through what the assessment criteria are actually asking for, stress-testing an argument, commenting on something your child has already drafted. What's off-limits is producing or rewriting the text itself — the finished piece has to be your child's own, and whatever the school supervisor says takes precedence over anything a tutor suggests.",
    },
    {
      question: "Do you cover Italian A: Literature for the DP?",
      answer: "Yes. We match Italian-national students with a tutor experienced in the DP's prescribed Italian texts, the individual oral commentary, and Paper 1 and 2 technique — a genuinely strong option for a confident Italian reader and writer rather than defaulting to English A.",
    },
    {
      question: "Is there a trial lesson before we commit to anything?",
      answer: "There is — a first session puts your child and the tutor in front of real material before anything ongoing gets agreed. It's the moment to notice whether the explanations actually land, whether the tutor genuinely knows the school's syllabus, and whether the evening slot fits your household in practice rather than in theory. Swapping to someone else afterward is straightforward if it wasn't quite right.",
    },
    {
      question: "How do you check your tutors before matching one with my child?",
      answer: "Subject knowledge and familiarity with the specific curriculum both get checked at interview stage, alongside evidence of qualifications and past IB or Cambridge teaching, before anyone is matched to a family. That doesn't stop once teaching starts — flag a pacing, communication or level issue at any point and the tutor gets changed.",
    },
    {
      question: "Can you help students in Florence, Genoa or Turin, not just Milan and Rome?",
      answer: "Yes — arguably this is where it counts most. Florence and Genoa each rely on one IB school with a much smaller staff room than a Milan or Rome campus has, so reaching a specialist from outside that building, rather than settling for whoever happens to teach it locally, is exactly what online tutoring is for.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Write to ibgram24@gmail.com or message +91 7439 368 115 with your child's grade and programme, the subjects and levels involved, when in the evening (Central European Time) tends to work, and what's actually meant to change — a grade, IMAT readiness, an IA that's stalled. A tutor gets proposed, their background shared, and a first session arranged, with nothing charged before you've sat through that lesson and agreed a rate.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, ePortfolio and personal project support for the middle years." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Math AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in Spain", href: "/spain/", description: "See how IB and IGCSE tutoring works for another Southern European market." },
    { label: "IB tutors in Switzerland", href: "/switzerland/", description: "Compare tutoring for a neighbouring market with the IB's own historic roots." },
    { label: "IB tutors in France", href: "/france/", description: "Online IB tutoring for families studying in a neighbouring European country." },
  ],

  closingHeading: "Book a free first lesson, timed to your evening in Italy",
  closingBody: "Tell us the programme, the subject, the level and the city your child studies in. Within a day or two you'll have a named tutor, their teaching background, and a couple of trial slots already sitting in a Central European Time evening — free, with no obligation to book anything further. If the fit isn't right, tell us and we'll try someone else. Reach us at ibgram24@gmail.com or +91 7439 368 115 on WhatsApp, with your child's grade and current school programme.",
};
