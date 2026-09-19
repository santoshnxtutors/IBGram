import type { CountrySeoPage } from "../types";

/**
 * Germany - https://www.ibgram.com/germany/
 *
 * Hand-authored country landing page. Delivery to German families is ONLINE only;
 * nothing here may imply in-person tutoring inside Germany.
 * Named schools appear as ecosystem context only - no affiliation is implied.
 */
export const germany: CountrySeoPage = {
  slug: "germany",
  countryName: "Germany",
  countryNameLong: "the Federal Republic of Germany",
  demonym: "German",
  flagCode: "de",
  countryCode: "DE",
  region: "Central Europe",
  timezoneLabel: "Central European Time (UTC+1, UTC+2 in summer)",
  schedulingNote: "Weekday evenings and weekend mornings on Central European Time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Germany | Online IB DP, MYP & IGCSE Tutoring",
  metaDescription: "Online IB and IGCSE tutors for students at international schools in Germany. One-to-one IB DP, MYP and IGCSE lessons scheduled on Central European Time.",
  h1: "Online IB and IGCSE tutors for students studying in Germany",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN GERMANY",
  heroSubtitle: "Your child studies the IB or IGCSE at a school in Germany; we match them with a tutor who has taught that exact syllabus. Lessons run online, one-to-one, timed for a Berlin, Munich, Frankfurt or Hamburg school evening. Tell us the programme, subject and level, and we shortlist tutors before anything is booked.",
  primaryKeyword: "IB tutors in Germany",
  imageAltText: "IB tutor working through a Diploma Programme physics problem online with a student based in Frankfurt",
  secondaryKeywords: [
    "IGCSE tutors in Germany",
    "online IB tutor Germany",
    "IB DP tutor Berlin",
    "IB tutor Munich",
    "IGCSE tutor Frankfurt",
    "IB tutor Hamburg",
    "Cambridge IGCSE tutor Germany online",
    "IB Maths tutor Germany",
    "IB tutor Düsseldorf",
    "IB Diploma tutor Stuttgart",
    "IB exam prep Germany",
    "Abitur to IB tutor",
  ],

  heroTrustPoints: [
    "Online lessons scheduled to Central European Time, adjusted automatically for the March and October clock changes.",
    "Tutors who teach the May examination session that international schools in Germany sit.",
    "Coverage for IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE where a school runs it before the DP.",
    "Subject specialists who understand the KMK recognition rules German universities apply to IB Diploma holders.",
  ],
  heroStats: [
    { value: "78", label: "IB World Schools across Germany" },
    { value: "May", label: "IB DP exam session used by German international schools" },
    { value: "24", label: "minimum IB points German universities require for entry" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in Germany: PYP, MYP, DP, CP and IGCSE students",
    paragraphs: [
      "Germany's IB community is small compared with its Gulf or Southeast Asian counterparts, but it sits in an unusual position: alongside the English-medium international schools serving expatriate, diplomatic and corporate families in Berlin, Frankfurt and Munich, a number of German state Gymnasien also run the Diploma Programme in German, a route almost no other country on this list offers at scale. IB Gram works with families in both groups, plus IGCSE students at British-curriculum schools feeding into the DP. Everything we deliver in Germany is online, timed to Central European Time. We do not send tutors to homes here; home tutoring is offered only in India.",
      "The two routes into the IB in Germany produce genuinely different students. A child at an English-medium international school in Frankfurt or Munich is usually there because a parent's employer relocated the family, and the DP is taught and examined entirely in English alongside German as an additional language. A child at one of the smaller number of German-language IB schools is more often a German national whose family chose the Diploma deliberately over the Abitur, betting on its international recognition and its coursework-based grading. Both groups eventually face the same KMK recognition requirements, but they arrive at the Diploma from very different starting points.",
      "Families tend to contact us at a few recurring moments. A DP1 student meets Higher Level Mathematics or Physics for the first time and the pace outstrips a single weekly class. An Extended Essay or internal assessment stalls because a supervisor managing a full timetable cannot give a draft the attention it needs. A family relocating mid-year finds their child's new German international school assesses very differently from wherever they came from. Or a family weighing the Abitur against the IB Diploma for a Gymnasium-aged child wants an honest comparison before choosing a path that is difficult to reverse after Grade 10.",
      "Session content is built from what your child's own school has actually set, not a generic curriculum outline: the current unit, the last paper handed back, the IA draft due next month. Coverage runs from PYP and MYP foundations through DP Mathematics, Sciences, Economics, English A and B, German A and B, and the IGCSE core at schools that sit it before the Diploma. You get a written note after every session, and if the first tutor is not the right fit, we change the match rather than asking your family to work around it.",
    ],
    bullets: [
      "All tutoring for families in Germany is online, scheduled to Central European Time; home tutoring is India only.",
      "IB PYP, MYP, DP and CP, in both English-medium and German-language IB schools, plus IGCSE bridging.",
      "Work is anchored to real deliverables: internal assessments, the Extended Essay, TOK and past papers.",
      "Free trial lesson, a written recap after every session, and a different tutor if the first match is wrong.",
    ],
  },

  programmesIntro: "The IB continuum reaches German students through two distinct school types: international schools following the standard English-medium model, and a smaller group of state and private Gymnasien offering the Diploma in German. Our tutors work online across all four programmes, matched to the Grade or Klasse level your child is actually in, scheduled to Central European Time.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Kindergarten to Grade 5 (Klasse 1-4)",
      description: "Six broad units of inquiry replace a fixed subject timetable at this stage, so a class might spend a term on 'how the world works' rather than a discrete science period. Our support stays deliberately small in scope: getting English reading up to pace, building comfort with numbers, and shaping the kind of writing an inquiry unit expects, working toward the research and presenting skills the Grade 5 Exhibition draws on.",
      countryNote: "Most German PYP schools add German as an additional language from the early years regardless of a family's own background, since German-language competence matters for a child's life outside the school gates, not only inside the classroom.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Grade 6-10 (Klasse 5-9/10)",
      description: "Across five years and eight subject groups, MYP grades against four numbered criteria rather than a single mark, a system with no real counterpart on a German Zeugnis. Sessions target the specific skill each criterion is checking, build up the longer written responses the programme expects, and carry a student through the Grade 10 Personal Project from first proposal to finished report.",
      countryNote: "A family weighing MYP against a move into the German Gymnasium system, or the reverse, usually needs this decision settled by Grade 9, since both systems assume continuity from that point through to the school-leaving qualification.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · Grade 11-12 (Klasse 11-13 depending on the Bundesland)",
      description: "Six subjects, split between Higher and Standard Level, sit alongside three additional requirements — Theory of Knowledge, the Extended Essay and CAS — that together make up the Diploma's core. Our sessions push hardest on Higher Level material, keep internal assessments moving toward their deadlines, drill timed papers under exam conditions, and give the Extended Essay its own dedicated supervision slots between the school's official check-ins.",
      countryNote: "German universities require the IB Diploma to include at least one Higher Level subject in a language, mathematics or a natural science, an updated KMK requirement that applies to students sitting exams from May 2025 onward, so confirm your child's HL choices meet it before Grade 11 subject selection is finalised.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · Grade 11-12",
      description: "Two or more Diploma-level courses sit alongside a career-focused study and a distinct core — Personal and Professional Skills, Service Learning, continued language work and the Reflective Project. We hold the DP-level courses to the same standard as full Diploma students and walk the Reflective Project through from a genuine ethical dilemma to a finished submission.",
      countryNote: "CP is rare among Germany's IB schools, which mostly run the Diploma Programme only, so a CP student here is usually the sole one in their cohort and benefits from an outside specialist who has actually supervised a Reflective Project before.",
    },
  ],

  subjectsIntro: "Families in Germany usually already know the exact subject and level their child needs, because German international schools are precise about it: Math AA HL is not Math AI SL, and Cambridge 0625 Physics is not the DP course a student moves into two years later. We match tutors on programme, subject, level and language, with lessons scheduled to Central European Time.",
  subjects: [
    { name: "Mathematics AA", levels: "HL · SL · IGCSE Extended (0580)", description: "Sessions build toward fluent proof-writing and calculus at HL, while SL keeps the aim on a dependable grade without chasing every extension topic. Because Germany's KMK now requires one HL subject in a language, science or maths, families often confirm early that HL Math AA is the subject carrying that requirement." },
    { name: "Mathematics AI", levels: "HL · SL · IGCSE Core & Extended", description: "The centre of gravity here is applying statistics and modelling with a GDC rather than pure abstraction, which German admissions offices treat as a distinct subject from AA when reading a transcript. HL adds matrix work, complex numbers and an introduction to graph theory on top." },
    { name: "Physics", levels: "HL · SL · IGCSE Physics (0625)", description: "Rather than working from notes, students solve their way through mechanics, fields and thermodynamics problem by problem. DP sessions also cover the practical scheme and the scientific investigation directly, and IGCSE sessions drill the structured, multi-part question style those papers use." },
    { name: "Chemistry", levels: "HL · SL · IGCSE Chemistry (0620)", description: "The calculation-heavy corners — moles, equilibrium, energetics — get broken into repeatable steps rather than memorised formulas. HL students receive dedicated planning time for the scientific investigation, and IGCSE sessions focus on qualitative analysis technique." },
    { name: "Biology", levels: "HL · SL · IGCSE Biology (0610)", description: "Because the current syllabus is organised by theme rather than a strict topic list, tutoring follows the same cross-unit structure and drills the specific command terms IB examiners mark against, while IGCSE work concentrates on recall precision and answer structure." },
    { name: "Economics", levels: "HL · SL · IGCSE Economics (0455)", description: "Diagram accuracy and the evaluative language examiners look for tend to decide the grade more than raw content knowledge, so both get dedicated practice alongside micro, macro and the nine key concepts. The three required IA commentaries draw on live German and EU economic reporting." },
    { name: "Business Management", levels: "HL · SL · IGCSE Business Studies (0450)", description: "Case studies drawn from companies operating in Germany anchor the units-one-to-five content and the HL-only tools layered on top. Tutoring concentrates on scoping the internal assessment properly and on the application and evaluation marks students most often leave on the table." },
    { name: "English A: Language & Literature", levels: "HL · SL · IGCSE First Language English", description: "For students at English-medium schools who already write confidently, the gap is usually IB's specific expectations: close analysis of non-literary texts, portfolio work, the individual oral, and pacing Paper 1 under time pressure." },
    { name: "English B", levels: "HL · SL · IGCSE English as a Second Language", description: "Built for students whose stronger everyday language is German or something else entirely, working through the five prescribed themes, listening-paper technique and the individual oral, with IGCSE ESL sessions aimed at reading speed and controlled writing." },
    { name: "German A", levels: "HL · SL · Literature or Language & Literature", description: "For a student bringing German into the DP as their dominant language, often at a German-language IB school, sessions concentrate on close textual analysis, the individual oral, and the comparative essay writing the course is graded on." },
    { name: "German B", levels: "HL · SL · Ab initio", description: "This is the subject that helps an international-school student actually function in Germany outside class hours, not just pass a paper. Work builds spoken confidence alongside the written and oral tasks the syllabus tests directly." },
    { name: "Computer Science", levels: "HL · SL · IGCSE Computer Science (0478)", description: "Java or Python practice sits alongside the theory papers actually test — data structures, object-oriented design, how a system fits together — and tutors stay involved through the internal assessment's planning and write-up stages." },
    { name: "History", levels: "HL · SL · IGCSE History (0470)", description: "With Europe as the common HL regional option for students based here, work centres on reading sources critically, building an essay argument that holds up, and shaping the historical investigation into something genuinely researchable." },
    { name: "Environmental Systems & Societies (ESS)", levels: "HL · SL · IGCSE Environmental Management", description: "Because ESS satisfies both a science and a humanities group requirement at once, it suits a student whose timetable has no room to spare. Sessions work through systems diagrams and the additional HL lenses in the current guide." },
  ],

  regionsIntro: "IB Gram tutors work with families across Germany on Central European Time, adjusted automatically each March and October when the clocks change, so a booked slot stays fixed to your local evening rather than a UTC offset. Most families book weekday evenings after school or Saturday mornings, and DP students approaching the May session often add a weekend slot.",
  regionsTitle: "Cities, regions and school communities across Germany",
  tutorsIntro: "Below are tutors shortlisted for your child's exact programme and subject, each one holding weekly slots on Central European Time.",
  regions: [
    { name: "Berlin", note: "CET/CEST. Germany's capital hosts several of the country's longest-running international and bilingual schools, serving diplomatic, corporate and Berlin-based German families alike. Weeknight slots from 5pm onward suit students coming home from after-school clubs." },
    { name: "Munich & Bavaria (Schwabing, Haimhausen, Starnberg)", note: "CET/CEST. Munich's international-school sector serves a large corporate and tech-sector expatriate population, spread across several campuses on the city's northern edge. Evening slots fit around a school day that often runs into mid-afternoon extracurriculars." },
    { name: "Frankfurt & the Rhein-Main region (Oberursel, Wiesbaden)", note: "CET/CEST. Frankfurt's financial-sector families concentrate in a cluster of international schools spanning the city and its northern suburbs. This is one of Germany's oldest and largest international-school communities." },
    { name: "Hamburg", note: "CET/CEST. Home to one of Germany's oldest international schools, serving a mix of shipping, trade and corporate expatriate families plus German families choosing an English-medium or bilingual pathway." },
    { name: "Düsseldorf & the Rhine-Ruhr (Cologne, Neuss)", note: "CET/CEST. A dense corridor of international schools tied to Japanese, Korean and European corporate communities based around Düsseldorf, with several campuses running IGCSE into the IB Diploma." },
    { name: "Stuttgart & Baden-Württemberg", note: "CET/CEST. Stuttgart's automotive and engineering corporate base supports an international-school community that is smaller than Frankfurt's or Munich's but growing steadily." },
    { name: "Bonn", note: "CET/CEST. The former capital retains a concentration of UN agencies and international organisations, and its international school serves that diplomatic community directly." },
    { name: "Leipzig & Dresden (Saxony)", note: "CET/CEST. Eastern Germany's international-school sector is newer and smaller, so families here searching for an IB DP tutor in Germany are often looking well beyond city limits, which online delivery answers directly." },
    { name: "Nuremberg & Erlangen (Bavaria)", note: "CET/CEST. A smaller international-school presence tied to Bavaria's technology and engineering employers, with families frequently comparing notes with the larger Munich community two hours south." },
  ],

  schoolDisclaimer: "IB Gram operates independently of every institution named on this page. The schools appear here purely to sketch the curriculum landscape a family in Germany is choosing between; the International Baccalaureate Organisation, Cambridge International and each named school have no partnership, endorsement or affiliation with IB Gram.",
  schoolClusters: [
    {
      city: "Berlin",
      note: "Berlin families most often ask for HL Mathematics and Economics support, plus Extended Essay coaching once DP2 begins. Sessions run CET evenings, typically 5pm to 8pm, after after-school activities finish.",
      schools: [
        "Berlin International School",
        "Berlin Brandenburg International School",
        "John F. Kennedy School (Berlin)",
        "Nelson Mandela International School (Berlin)",
      ],
    },
    {
      city: "Munich",
      note: "Munich's international schools run the full IB continuum across several campuses, so requests span PYP and MYP foundations as much as DP. German B and English B come up often here, given the mix of nationalities in one classroom.",
      schools: [
        "Munich International School",
        "Bavarian International School",
        "SIS Swiss International School Munich",
      ],
    },
    {
      city: "Frankfurt",
      note: "Frankfurt's financial-sector families often need tutoring on a compressed timeline after a mid-year relocation. HL Economics, Business Management and Math AA are the most requested subjects.",
      schools: [
        "Frankfurt International School",
        "Metropolitan School Frankfurt",
        "International School of Frankfurt-Rhein-Main",
      ],
    },
    {
      city: "Hamburg",
      note: "Hamburg families frequently ask for MYP-to-DP transition support and German B, reflecting the school's mix of long-settled international families and newer arrivals.",
      schools: [
        "International School of Hamburg",
        "Bilingual School Hamburg",
        "SIS Swiss International School Hamburg",
      ],
    },
    {
      city: "Düsseldorf & Cologne",
      note: "This cluster runs IGCSE into the IB Diploma at several schools, so requests often involve a board switch partway through secondary school as a family transitions between the two qualifications.",
      schools: [
        "ISR International School on the Rhine",
        "International School of Düsseldorf",
        "St. George's School Düsseldorf Rhein-Ruhr",
        "Cologne International School",
      ],
    },
  ],

  modesIntro: "Nothing runs face to face for families based in Germany: lessons happen over video, on a shared whiteboard, at a time your household actually chose on Central European Time. Whichever format you pick, your child keeps the same tutor week after week, so nobody re-explains the syllabus from scratch at the start of each lesson.",
  modes: [
    {
      title: "One-to-one online IB and IGCSE tutoring",
      description: "One tutor, one student, and an hour built specifically around the thing that's actually stuck: an HL Physics problem set, an IA paragraph that keeps missing a criterion, or IGCSE content ahead of a Klassenarbeit. The plan for each lesson comes from your child's own school folder, not a fixed course outline, at a slot that repeats the same time every week.",
      bullets: [
        "The same weekly hour, term after term, shifting automatically when German clocks change.",
        "Planning draws on your child's actual assignments, teacher comments and current topic.",
        "A short write-up lands after every lesson, so evening-shift parents aren't left guessing.",
        "Well suited to Extended Essay supervision, a single HL subject, or catching up after a school switch.",
      ],
    },
    {
      title: "Small-group online sessions",
      description: "Small clusters of two to four students on the same course share one tutor and one screen, grouped by subject, level and a shared evening slot rather than by which school badge they wear. Content-heavy subjects benefit most — an HL Biology group, say — since hearing someone else's misunderstanding corrected often sticks better than a private correction alone.",
      bullets: [
        "Two to four students per group, sorted by subject, level and a common CET evening.",
        "Costs less per head than private lessons, without swapping out the weekly tutor.",
        "Brings together students from separate schools working through an identical syllabus.",
        "Easy to switch a student into one-to-one later if the group pace no longer fits.",
      ],
    },
    {
      title: "Intensive exam-block sessions",
      description: "Short, dense stretches of tutoring aimed at a fixed date on the calendar: the May DP papers, an IGCSE series, or a school's own mock a term earlier. Rather than a single weekly hour, expect three or four sessions across a week for a stretch of five or six, drilling timed past papers and marking them the way an examiner would, feedback returned inside days.",
      bullets: [
        "Timed, examiner-style marking on past papers, turned around within the same week.",
        "Built around the specific May sitting that international schools in Germany use.",
        "Available through school holidays, not squeezed only into term-time evenings.",
        "Reserve four to six weeks out — evening spots vanish fast once exam season nears.",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and international schools in Germany: a small sector with two routes in",
      paragraphs: [
        "Germany has 78 IB World Schools, a modest number set against the country's population, but the mix is unusual: the great majority teach the Diploma Programme in English at fee-paying international schools serving expatriate and corporate families, while a smaller group of state and private Gymnasien offer the Diploma in German to German nationals who choose it deliberately over the Abitur. That second route is rare internationally — most countries on this list offer the IB only through English-medium international schools — and it means 'an IB school in Germany' can describe two genuinely different institutions.",
        "English-medium international schools cluster around Germany's corporate centres: Frankfurt's banking sector, Munich's technology and automotive employers, Düsseldorf's Japanese and Korean corporate communities, and Bonn's UN and diplomatic presence. Families here are frequently on multi-year postings, and children sometimes arrive mid-programme from an entirely different curriculum, which is where outside tutoring most often starts.",
        "German-language IB schools serve a different population: German families who want their child to leave school with an internationally portable qualification and are willing to take on the IB's coursework-heavy assessment model instead of the more exam-centred Abitur. These students usually need less support adjusting to a new language of instruction and more support with the unfamiliar assessment style itself — internal assessments, the Extended Essay, and Theory of Knowledge have no direct Abitur equivalent.",
        "Whichever route a family is on, IB Gram works entirely online, scheduled to Central European Time so a lesson lands after the school day wherever you are in Germany. We do not send tutors into homes here; home tutoring is offered only in India, and every session for German families runs on video with a shared whiteboard instead.",
      ],
      bullets: [
        "Germany has 78 IB World Schools, most teaching the Diploma Programme in English.",
        "A smaller group of German state and private Gymnasien teach the IB Diploma in German.",
        "English-medium schools cluster around Frankfurt, Munich, Düsseldorf and Bonn's corporate and diplomatic communities.",
        "German-language IB students usually need more help with assessment style than with language.",
        "Every IB Gram session for families in Germany runs online, scheduled to Central European Time.",
      ],
    },
    {
      heading: "Abitur vs IB Diploma vs Cambridge IGCSE: how do they compare?",
      paragraphs: [
        "In one sentence: the Abitur is Germany's own school-leaving and university-entrance qualification, sat after 12 or 13 years of schooling depending on the Bundesland; the IB Diploma is an internationally recognised alternative sat over the final two years and accepted for German university entry once specific conditions are met; and Cambridge IGCSE is a qualification some international schools in Germany sit at 16 before moving into the Diploma Programme, rather than a German school-leaving exam at all.",
        "The Abitur is organised by each Bundesland rather than centrally, so subject combinations, grading and the exact number of school years (G8's twelve years versus G9's thirteen) vary by state. Assessment leans heavily on final written examinations (the Abiturprüfung) in a fixed number of subjects, converted into a Durchschnittsnote, the average grade universities read directly for numerus clausus admission.",
        "The IB Diploma asks for six subjects across defined groups, three or four at Higher Level, plus Theory of Knowledge, a 4,000-word Extended Essay and CAS, scored out of 45. Unlike the Abitur, a meaningful share of the final grade in most subjects comes from internally assessed, externally moderated coursework completed across the two years rather than in a single examination sitting.",
        "IGCSE, where a German international school sits it, functions as preparation rather than a leaving qualification: students choose five to nine subjects around age 16, several with coursework or practical components, and then move into the Diploma Programme, A Level, or occasionally back into the Abitur track if a family relocates. A tutor moving a student between these systems needs to teach the format shift as much as the content.",
      ],
      table: {
        caption: "Abitur vs Cambridge IGCSE vs IB Diploma, side by side",
        columns: ["Qualification", "Typical age sat", "Assessment style", "German university entry"],
        rows: [
          ["Abitur", "Age 18-19 (G8) or 19-20 (G9)", "State-set final written exams (Abiturprüfung), Bundesland-specific", "Direct entry via Abiturdurchschnittsnote, subject to numerus clausus"],
          ["Cambridge/Edexcel IGCSE", "Age 16, mostly international schools", "External papers plus coursework/practical components in several subjects", "Not a leaving qualification; usually followed by IB DP or A Level"],
          ["IB Diploma", "Age 18-19, international and select Gymnasien", "External exams plus internally assessed, IB-moderated coursework", "Recognised under KMK rules once minimum score and subject conditions are met"],
        ],
      },
    },
    {
      heading: "How is the IB Diploma recognised for university entrance in Germany?",
      paragraphs: [
        "In one sentence: the IB Diploma has been recognised as equivalent to the Abitur for German university entrance since a KMK agreement dated 10 March 1986, provided a student meets specific subject and score conditions, and it is worth checking those conditions early rather than assuming any completed Diploma automatically qualifies.",
        "The current requirements ask for three subjects at Higher Level and three at Standard Level, with at least one Higher Level subject in a language, mathematics or a natural science — a rule the KMK extended in 2025 for students sitting exams from May of that year onward, changing what had stood for close to three decades. Students also need an overall score that clears the recognised threshold, typically read as at least 24 points with an average of roughly 4 points per subject and TOK, the Extended Essay and CAS all completed, plus a compensation rule allowing one subject scored 3 to be offset by another at 5 or above within the same level.",
        "Once a student's results are confirmed, the Zeugnisanerkennungsstelle in Düsseldorf converts the IB score into a German Abitur-equivalent Durchschnittsnote, which is the figure German universities actually read for numerus clausus admission through the same hochschulstart.de process used by Abitur holders. This conversion step means two students with the same IB score can end up with a different Durchschnittsnote depending on how their specific subject and level combination is weighted.",
        "Families should check a target university's own admissions office for course-specific requirements — medicine and similarly restricted subjects carry particularly tight numerus clausus thresholds — and, for degree programmes not directly comparable to a German course, the uni-assist service that many universities use for international applicants may also come into play. Getting subject choices right at the start of Grade 11 avoids a scramble to meet the HL condition retroactively.",
      ],
      bullets: [
        "The IB Diploma has been recognised as Abitur-equivalent under KMK rules since a 1986 agreement.",
        "One Higher Level subject must be a language, mathematics or natural science, for exams from May 2025 onward.",
        "A recognised minimum score, roughly 24 points with TOK/EE/CAS completed, applies alongside the subject rule.",
        "The Düsseldorf Zeugnisanerkennungsstelle converts the IB score into the Abitur-equivalent Durchschnittsnote universities read.",
        "Check course-specific numerus clausus requirements early, especially for medicine and other restricted-entry subjects.",
      ],
    },
    {
      heading: "IB internal assessments, TOK and the May exam session in Germany",
      paragraphs: [
        "Germany's international schools run an August-to-June academic year in line with the rest of the school system, and IB schools here sit the May examination session rather than November, which simplifies planning compared with countries where schools split across two calendars. For a DP2 student, internal assessment final drafts, the Extended Essay and TOK components cluster between November and March, well before the May papers themselves.",
        "Internal assessments are set and marked inside the school, then externally moderated by the IB, with weighting that varies by subject — roughly a fifth to a third of the final grade in most sciences and mathematics, more in language, arts and performance subjects. This rewards process over a single exam performance, which is often the biggest adjustment for a student moving across from the more exam-centred Abitur track.",
        "The Extended Essay is a 4,000-word independent research paper supervised through scheduled reflection meetings; TOK carries an exhibition plus a 1,600-word essay on a prescribed title. Both reward an early, narrow research question that a student can genuinely answer with sources available to them, rather than an ambitious one that stalls in February.",
        "Academic honesty rules are strict and worth stating plainly to any tutor before booking one. Every IA, Extended Essay and TOK submission must be the student's own work, checked through similarity detection. IB Gram tutors coach — explaining a misread criterion, modelling a parallel example, questioning weak reasoning — but never write or rewrite the version a student then submits under their own name.",
      ],
      bullets: [
        "German international schools sit the May session, following an August-to-June academic year throughout.",
        "IA drafts, the Extended Essay and TOK components cluster between November and March for most DP2 students.",
        "IA weighting varies by subject but generally sits between a fifth and a third of the final grade.",
        "Tutors coach technique and question reasoning; they never write or ghost-edit IA, EE or TOK submissions.",
        "Students moving from the Abitur track usually need most help adjusting to coursework-based assessment, not content.",
      ],
    },
    {
      heading: "Cambridge and Edexcel IGCSE in Germany, and what follows it",
      paragraphs: [
        "IGCSE is a smaller presence in Germany than in Gulf or Southeast Asian markets, sat mainly at a handful of British-curriculum and bilingual international schools, often ones that later move students into the IB Diploma rather than A Level. Schools such as those on the Rhine-Ruhr corridor run IGCSE across Grades 9 and 10 specifically as DP preparation, which shapes how the two years are taught.",
        "Students typically begin IGCSE coursework around age 14 and sit written examinations at 16, choosing subjects from Cambridge or Edexcel's list, several with coursework or practical components marked internally and moderated externally. Because most schools running IGCSE here treat it as a bridge rather than an endpoint, the choice of subjects at 14 is usually already made with DP group requirements in mind.",
        "Recognition works differently at each stage. IGCSE itself is not read by German universities as a leaving qualification; what follows it — the IB Diploma in almost every German case, occasionally A Level for a family later moving to the UK — is what actually carries weight for entry. Families relocating into Germany from an IGCSE-only background should confirm with the receiving school whether IGCSE subjects transfer directly into that school's Diploma Programme group requirements.",
        "Tutoring across this transition needs to be board-specific and forward-looking: a tutor should know not just the IGCSE syllabus a student sits at 16, but which DP subjects that syllabus is meant to feed into two years later, so foundational gaps get closed before they resurface in Grade 11.",
      ],
      bullets: [
        "IGCSE in Germany is sat mainly as preparation for the IB Diploma, not as a standalone qualification.",
        "Students typically start IGCSE around 14 and sit exams at 16, with subject choices made against later DP group requirements.",
        "German universities read what follows IGCSE, almost always the IB Diploma, rather than IGCSE itself.",
        "Confirm with the receiving school whether specific IGCSE subjects map onto that school's Diploma Programme groups.",
        "Tutoring should look two years ahead to the DP subjects an IGCSE course is meant to prepare a student for.",
      ],
    },
    {
      heading: "Germany's national curriculum: how the Abitur system actually works",
      paragraphs: [
        "Germany has no single national curriculum; education is a Bundesland responsibility, coordinated loosely through the KMK, so the exact structure a student experiences depends on which of the sixteen states they are in. Most students who will eventually sit the Abitur attend a Gymnasium from around age 10, moving through a lower secondary phase and into the Oberstufe, the final two or three years where Abitur subjects and grades are actually built.",
        "The number of school years to the Abitur has itself been a live policy question: some states run the eight-year Gymnasium (G8), others the traditional nine-year track (G9), and several have reversed a G8 switch back to G9 over the past decade, which matters directly for a family comparing timelines against the IB Diploma's fixed two-year Grade 11-12 structure.",
        "Within the Oberstufe, students choose Leistungskurse (advanced courses) and Grundkurse (basic courses) rather than IB's Higher and Standard Level split, and the final Abiturdurchschnittsnote blends Oberstufe coursework grades with the Abiturprüfung exam results in a formula that also varies somewhat by state. This structural difference is exactly why a straight numerical comparison between an Abitur grade and an IB score needs the KMK's specific conversion rather than a rough mental translation.",
        "For a family deciding between the two systems for a child still in Grade 9 or 10, the practical question is less 'which is harder' and more which assessment style suits the student: the Abitur's exam-weighted structure with state-set content, or the IB's coursework-heavy, internationally portable Diploma with its own additional core requirements.",
      ],
      table: {
        caption: "Germany's Abitur structure vs the IB Diploma, key differences",
        columns: ["Feature", "Abitur", "IB Diploma"],
        rows: [
          ["Curriculum authority", "Set by each Bundesland, coordinated via the KMK", "Set centrally by the IB, identical worldwide"],
          ["Course structure", "Leistungskurse (advanced) and Grundkurse (basic)", "Three or four Higher Level, remainder Standard Level"],
          ["Core requirements", "None beyond chosen subjects", "Theory of Knowledge, Extended Essay, CAS"],
          ["Length of upper secondary", "Two or three years, depending on G8 or G9 in that state", "Fixed two years (Grade 11-12)"],
          ["Final grade basis", "Oberstufe coursework grades plus Abiturprüfung exams", "External exams plus internally assessed, IB-moderated coursework"],
        ],
      },
    },
    {
      heading: "How online IB and IGCSE tutoring works on Central European Time",
      paragraphs: [
        "Every session for a family in Germany is booked on Central European Time and adjusted automatically each March and October when clocks change, so a booked 6pm slot stays a 6pm slot in your local evening year-round even though the underlying UTC offset shifts. Our tutors are based in India; a Central European evening lands comfortably inside a normal working day on the tutor's side, which keeps scheduling straightforward for both households.",
        "A first session is diagnostic rather than a straight content lesson: the tutor asks what your child's class is actually covering, works through a couple of problems while the student explains their own thinking, and identifies where the reasoning breaks down rather than only where the final answer is wrong. Regular sessions run 60 or 90 minutes; 90 suits DP internal assessment coaching, 60 suits weekly maintenance in a subject that is otherwise on track.",
        "The most useful thing a family in Germany can hand over before the first lesson is the school's own paperwork: MYP task sheets with their criteria, DP internal assessment guidelines with word limits, or IGCSE coursework mark schemes. Tutors work directly from these documents, so feedback uses the same language your child's teacher will use when marking the final version.",
        "You receive a short written note after each session covering what was taught and what to work on next, plus a fuller review every few weeks ahead of school reporting periods. Parents are welcome to sit in on any session or request a call. Start with a free trial lesson and bring a recent piece of marked schoolwork before committing to a regular schedule.",
      ],
      bullets: [
        "Sessions are booked on Central European Time, adjusted automatically for the spring and autumn clock changes.",
        "A diagnostic first session finds where a student's reasoning breaks down, not just where the final answer is wrong.",
        "Shared interactive whiteboard and annotated past papers; a laptop, headphones and stable connection are enough.",
        "Send your school's own task sheets and mark schemes so feedback matches what your child's teacher actually marks against.",
        "Start with a free trial lesson and bring recent marked work before committing to a regular weekly schedule.",
      ],
    },
  ],

  process: [
    { title: "Describe the school, subject and where it's going wrong", description: "Give us the programme — PYP, MYP, DP, CP or IGCSE — the subject and level, whether teaching runs in English or German, and your city. Most of this fits in a two-minute voice note or a WhatsApp message." },
    { title: "We put forward tutors who've taught that specific course", description: "No generalists: candidates are picked for having taught that programme, subject, level and language combination before, and you see their background before agreeing to anything." },
    { title: "Try one lesson, no strings attached", description: "The trial runs on video with a shared whiteboard, timed for a German school evening. Afterward you get a plain-language note on what the tutor saw and what it would take to fix it." },
    { title: "Build the schedule around your school's own dates", description: "Once you're both happy, we set the plan against the actual calendar that matters — May exams, IA deadlines, an IGCSE series — and you pick how often, with nothing locking you in long-term." },
    { title: "Keep, adjust or replace — your call", description: "A note comes after every lesson and a deeper check-in every few weeks. Say the word if a tutor isn't clicking and your child moves to someone else, no questions asked." },
  ],

  whyPoints: [
    { title: "Two very different school types, one matching process", description: "A German-language Gymnasium running the DP and an English-medium international school need different tutors entirely. We sort candidates by which of the two your child actually attends." },
    { title: "We know what German universities actually check", description: "The specific KMK score thresholds and the rule requiring an HL subject in a language, science or maths inform how we plan tutoring from Grade 11 onward, not as an afterthought once applications open." },
    { title: "One provider through every stage of the continuum", description: "PYP through CP, English-medium or German-language, plus the IGCSE years some schools use as a runway into the Diploma — switching stages doesn't mean switching who you call." },
    { title: "Coursework coaching that respects the honesty rules", description: "A tutor sharpens a research question, checks referencing, and pressure-tests an argument, but the words your child submits for an IA or the EE are always their own." },
    { title: "Nobody meets a stranger without a test run first", description: "Background and subject knowledge are checked before a tutor ever joins the roster, and a no-cost trial lesson lets your child form their own opinion before you pay for anything." },
    { title: "Clock changes are our problem, not yours", description: "Bookings run on Central European Time, and when Germany springs forward or falls back each year, your fixed weekly slot quietly moves with it — nothing for you to reset." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor in Germany?",
      answer: "Tell us the programme stage — PYP, MYP, DP or CP — plus the subject, level, and whether teaching runs in English or German at your child's school. We use that to put forward someone who has actually taught that combination, rather than a general subject tutor. Reach us at ibgram24@gmail.com or on WhatsApp at +91 7439 368 115 and skip the directory-scrolling entirely.",
    },
    {
      question: "Can lessons run on Central European Time?",
      answer: "They always do. Bookings sit on CET/CEST, and the spring-forward and fall-back changes each year are handled behind the scenes so your fixed slot never quietly drifts. Weekday evenings after school and Saturday mornings are what most households pick. Name the window that works for your family and we'll find a tutor whose own hours line up with it.",
    },
    {
      question: "How much does IB or IGCSE tutoring cost in Germany, and how do we pay?",
      answer: "It varies by programme stage, subject and weekly hours — an HL science tends to cost more per hour than MYP support. You'll see a written rate before a single session is booked, so nothing surprises you on the first invoice. Write to ibgram24@gmail.com with your child's programme, subject and level and ask about currency and payment together.",
    },
    {
      question: "Do you have in-person tutors in Germany?",
      answer: "No — everything here happens on screen. Our tutors are based in India, where in-person lessons are offered; for households in Germany that means live video, a shared whiteboard, annotated papers, and a note after each lesson. This matters most for a subject a local school simply has nobody to teach privately, which happens often with a less common HL choice or German B.",
    },
    {
      question: "Will my child's IB Diploma actually count for German university entry?",
      answer: "Generally yes, provided the KMK's specific conditions are met: at least one Higher Level subject in a language, mathematics or a natural science for exams from May 2025 onward, a recognised minimum score around 24 points, and TOK, the Extended Essay and CAS all completed. The Düsseldorf Zeugnisanerkennungsstelle converts the result into an Abitur-equivalent grade for numerus clausus admission. Check subject choices against this rule before Grade 11 begins.",
    },
    {
      question: "My child is choosing between the Abitur and the IB Diploma — which should we pick?",
      answer: "It's less about which is harder and more about which fits your family's plans. The Abitur is exam-weighted, tied to a specific Bundesland, and walks straight into German university admission without any grade-conversion step. The IB Diploma leans on coursework, travels well across borders, and only converts to an Abitur-equivalent once the KMK's subject and score conditions are satisfied. A family staying in Germany long-term often leans Abitur; one expecting to study or work abroad often leans IB.",
    },
    {
      question: "Can you help if my child just moved to Germany mid-year?",
      answer: "This comes up constantly among relocating households. Landing mid-DP or mid-MYP from an unrelated curriculum usually means fighting both a content gap and an unfamiliar grading system at the same time. Our first move is a diagnostic lesson to pin down exactly where things have slipped, then a short catch-up plan precedes regular weekly tutoring.",
    },
    {
      question: "Do your tutors teach both English-medium and German-language IB schools?",
      answer: "They do. The same IB criteria apply at an English-medium international school and a German-language Gymnasium, but students walk in from different backgrounds and need different handling. Let us know which type your child's school is and we'll match someone who has actually taught in that exact setting, not just IB in general.",
    },
    {
      question: "Can a tutor help with my child's IA, Extended Essay or TOK?",
      answer: "Within the boundaries the IB draws, yes: sharpening a research question down to something answerable, working through what a criterion actually rewards, pressure-testing whether the evidence supports the argument, and marking up a draft your child wrote unaided. What a tutor won't do is put words on the page that end up in the final submission — that stays the student's alone.",
    },
    {
      question: "How do you check tutors before matching one with my child?",
      answer: "Each candidate sits through an interview on their subject and on the specific school setting — German-language Gymnasium or English-medium international school — they'd be teaching into, with qualifications and past IB or Cambridge classroom experience verified beforehand. Something feels off after the match — pace, style, level — say so and we'll swap in someone else rather than ask you to push through it.",
    },
    {
      question: "Is there a trial lesson before we commit to a schedule?",
      answer: "There is, and it's free. Your child and the prospective tutor spend it on genuine schoolwork rather than small talk, so you can judge whether the teaching style clicks and whether the proposed CET slot is one your week can actually hold every time. Whatever the verdict, let us know and we'll act on it.",
    },
    {
      question: "Which IB and IGCSE subjects do you actually cover?",
      answer: "The Group 1 to 5 staples come up most: Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, History, English A and B, German A and B, Computer Science and Environmental Systems and Societies, alongside MYP, PYP and their IGCSE counterparts. Give us the exact course name and level off your child's timetable and we'll tell you straight away what's on offer.",
    },
    {
      question: "Do you offer intensive tutoring before the May exams?",
      answer: "We do — a single weekly hour usually becomes two or three through the two months beforehand, spent on timed past papers and picking apart mark schemes for the papers actually ahead. Reserve that jump early, since CET evening slots thin out fast once exam season starts. A recent mock is the best place to start building the revision priorities from.",
    },
    {
      question: "We're relocating to Germany — how far ahead should we book tutoring?",
      answer: "The moment the move is settled, ideally. A relocation almost always drops a student into the middle of a programme, and the faster a tutor gets across the new school's syllabus and calendar, the less ground gets lost. Give us the city and the type of school you're heading to and matching can start before you've even landed.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Reach ibgram24@gmail.com or WhatsApp +91 7439 368 115 with your child's programme and Grade, the subject and level, your city and the hours that suit you on Central European Time, and the one thing you're actually hoping changes — a grade, exam nerves, a stalled IA. A tutor gets proposed, their background shared, and a trial arranged, with nothing charged until you've watched a lesson and agreed terms.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "Browse city-level IB tutoring hubs and see how tutor matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support, syllabus notes and past-paper practice." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP is structured, what HL and SL demand, and where students usually need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria, the ePortfolio and Personal Project support for Grade 6-10 students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Math AA and AI at HL and SL, from foundations through Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "See qualifications, subjects, teaching mode and availability before you commit." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Exam-season preparation running alongside school coursework and internal assessments." },
    { label: "Talk to the team", href: "/contact-us/", description: "Ask about scheduling, subjects or tutor fit before booking a trial session." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Study guides, syllabus explainers and revision planning written for students." },
    { label: "IB tutors in the Netherlands", href: "/netherlands/", description: "The same online tutoring model for families studying at schools in the Netherlands." },
    { label: "IB tutors in Switzerland", href: "/switzerland/", description: "Online IB and IGCSE tutoring for families studying at schools in Switzerland." },
    { label: "IB tutors in France", href: "/france/", description: "Online IB and IGCSE tutoring for families studying at schools in France." },
  ],

  closingHeading: "Try a free lesson with an IB or IGCSE tutor, timed for your evening in Germany",
  closingBody: "Share the programme, subject, level and city, and expect back a specific tutor's name, their background, and a couple of trial slots already sitting inside a normal German school evening — free, with nothing owed afterward either way. Not the right match? Say so plainly and we'll line up someone else. Reach ibgram24@gmail.com or WhatsApp +91 7439 368 115, mentioning your child's current Grade and school programme.",
};
