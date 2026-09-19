import type { CountrySeoPage } from "../types";

/**
 * Portugal - https://www.ibgram.com/portugal/
 *
 * Hand-authored country landing page. Delivery to families in Portugal is ONLINE only;
 * nothing here may imply in-person tutoring inside Portugal. Named schools appear as
 * ecosystem context only - no affiliation is implied.
 */
export const portugal: CountrySeoPage = {
  slug: "portugal",
  countryName: "Portugal",
  countryNameLong: "the Portuguese Republic",
  demonym: "Portuguese",
  flagCode: "pt",
  countryCode: "PT",
  region: "Southern Europe",
  timezoneLabel: "Western European Time, WET/WEST (UTC+0/+1); Azores one hour behind the mainland",
  schedulingNote: "Weekday evenings and weekend mornings on Western European Time",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in Portugal | Online IB DP & IGCSE Tutoring",
  metaDescription: "Online IB and IGCSE tutoring for students in Portugal. 1:1 DP and Cambridge lessons for Lisbon, Porto and Algarve families, on Western European Time.",
  h1: "Online IB and IGCSE tutors for students studying in Portugal",
  heroEyebrow: "ONLINE TUTORING FOR FAMILIES IN PORTUGAL",
  heroSubtitle: "Sixteen schools across Portugal are authorised for the IB Diploma, and a handful more run Cambridge IGCSE before feeding into A Level or the DP. We pair your child with a tutor who has actually taught that syllabus, on video, at an hour that fits a Lisbon, Porto or Algarve evening. Tell us the school, the subject and the level, and a short list of tutors comes back to you, not a directory to search on your own.",
  primaryKeyword: "IB tutors in Portugal",
  imageAltText: "IB tutor and a student in Portugal reviewing a Diploma Programme economics essay during a one-to-one online lesson",
  secondaryKeywords: [
    "IGCSE tutors in Portugal",
    "online IB tutor Lisbon",
    "IB DP tutor Porto",
    "IB tutor Algarve",
    "Cambridge IGCSE tutor Cascais",
    "IB tutor Almancil",
    "online A Level tutor Portugal",
    "IB Portuguese A tutor",
    "IB Math AA tutor Portugal",
    "DGES equivalência IB tutor",
    "IB exam prep Portugal",
    "international school tutor Oeiras",
  ],

  heroTrustPoints: [
    "Tutors who know all sixteen of Portugal's IB World Schools and the syllabus each one runs.",
    "Sessions on Western European Time, not shifted to mainland European hours by mistake.",
    "Support across IB PYP, MYP, DP and Cambridge or Edexcel IGCSE.",
    "Portuguese A tutoring for students studying their own literature alongside every other DP subject.",
  ],
  heroStats: [
    { value: "16", label: "IB World Schools authorised across Portugal" },
    { value: "WET/WEST", label: "UTC+0 winter, UTC+1 summer, mainland" },
    { value: "May", label: "DP exam session used by Portuguese schools" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in Portugal: IB, IGCSE and relocating families",
    paragraphs: [
      "Three fairly distinct groups of families reach out to us from Portugal. The first are long-settled international-school households in Lisbon, Cascais and Oeiras, whose children move through the IB continuum at schools such as St. Julian's, CAISL or the International Sharing School network. The second are recently relocated families — remote workers, diplomatic postings, retirees with school-age grandchildren — who arrived under a visa scheme in the past few years and want their child kept on a curriculum that travels well if the family moves again. The third are Portuguese families choosing a British- or IB-curriculum school deliberately, often planning on university abroad rather than through the national exames nacionais route. Every session we run for any of these households happens online, on video, timed to Western European Time; nobody visits a home in Portugal for a lesson, since face-to-face tutoring is offered only in India.",
      "Portugal is a small IB market by school count — sixteen authorised World Schools nationwide — but a well-established one, running mostly in English or bilingually, concentrated around greater Lisbon, Porto and the Algarve. Cambridge IGCSE turns up at several British-curriculum schools as the standard step before A Level or before switching into the Diploma Programme at sixteen, so a family arriving from a UK-linked school abroad usually finds a familiar shape here rather than a foreign one.",
      "Contact tends to cluster around a few situations. A family has just moved to Cascais or the Algarve mid-year and needs to know whether their child's old syllabus lines up with the new school's. A DP1 student's Higher Level subject gets noticeably harder in the second term. An Extended Essay or internal assessment draft needs a second, structured read that a class teacher covering thirty students cannot give in the time available. Or a family is comparing UCAS, the Common App and Portugal's own DGES equivalence process at the same time and wants the timeline explained plainly rather than guessed at.",
      "We start with a short conversation about the exact school, board and subject involved, not a general request for help with 'IB.' A tutor who has taught that specific syllabus is then proposed, and you take a trial lesson before agreeing to anything further. Because every lesson happens online rather than only in person, geography inside Portugal stops limiting the choice of tutor — a family in Sintra and a family near Vilamoura can each work with the same specialist, at hours convenient to each.",
      "Lessons default to one-to-one and follow whatever your child's class is actually doing that week — the current unit, the paper just returned, the coursework component due next month. Tutors work from the current IB subject guide or Cambridge syllabus, use official-style command terms, and mark practice work the way an examiner would. A short note follows every session. Coverage runs from PYP and MYP groundwork through the full Diploma and Cambridge IGCSE, and if a match isn't working after the first few sessions, we swap the tutor rather than ask your family to push through it.",
    ],
    bullets: [
      "Every lesson for a family in Portugal is online, on Western European Time; face-to-face tutoring exists only in India.",
      "We cover long-settled international-school families, newly relocated households and Portuguese families choosing IB or Cambridge deliberately.",
      "Sessions follow real deliverables: coursework, internal assessments, past papers, and the May exam session.",
      "A free trial first, a written note after every lesson, and a straightforward switch to another tutor if the fit is wrong.",
    ],
  },

  programmesIntro: "Portugal's sixteen IB World Schools mostly run the Diploma, though a smaller number offer PYP and MYP as well, so a family arriving with a younger child should check which programmes a specific school is actually authorised for rather than assume the full continuum. Cambridge IGCSE sits alongside the IB at several British-curriculum schools as the standard pre-sixteen qualification. Below is how each stage maps onto what a tutor actually works on.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Pré-Escolar to Grade/Ano 5",
      description: "Younger students work through broad units of inquiry rather than a fixed subject grid, chasing one open question across several weeks at a time. We keep sessions modest at this stage — steady reading in English or Portuguese depending on the school's language of instruction, secure number sense, and the short pieces of writing an inquiry unit keeps asking for, building toward the Grade 5 Exhibition.",
      countryNote: "PYP is offered at only a few of Portugal's sixteen IB World Schools; many international schools here start the IB continuum later, at MYP or DP, so confirm your school's actual authorisation before assuming PYP is running.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Ano 6-10",
      description: "Five years and eight subject groups, marked against four descriptor criteria per subject rather than a single percentage score — a system that leaves plenty of parents unsure what a given band actually means. We coach directly against those descriptors, work on the longer written responses MYP expects, and, in the final year, guide the Personal Project from its first proposal through to the finished report.",
      countryNote: "MYP runs at a handful of Lisbon and Porto-area schools; families relocating from a national Ensino Básico school into MYP mid-cycle usually need a term of bridging support in criterion-referenced writing before the pace feels settled.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · 10º-12º ano",
      description: "Six subjects across defined groups, three or four pushed to Higher Level, tied together by Theory of Knowledge, a 4,000-word Extended Essay and CAS activity. Sessions split between deep HL content coaching, timed past-paper practice, and a separate slot for wherever the Extended Essay has stalled, since supervisor meetings alone rarely give a student enough structured feedback time.",
      countryNote: "Portuguese schools sit the May session, so DP2 spring overlaps with exames nacionais preparation for any student taking both, plus the DGES equivalence paperwork families need to sort before applying to a Portuguese university.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · 10º-12º ano",
      description: "At least two DP subjects taught to full standard, alongside a career-related study and the CP core — Personal and Professional Skills, Service Learning, continued language study and the Reflective Project. We teach the DP courses properly rather than a lighter version, and coach the Reflective Project from a chosen ethical dilemma through to the finished piece.",
      countryNote: "CP is rare in Portugal; where it exists it usually sits alongside a hospitality, business or creative pathway at a school also serving the country's international tourism sector.",
    },
  ],

  subjectsIntro: "Families in Portugal generally already know the exact subject and level they need help with, since IB and Cambridge grade on quite different criteria even where the topic overlaps. We match tutors accordingly — Mathematics AA HL is a different job from AI SL, and IGCSE Portuguese as a First Language is not the same course as Portuguese A at DP — and every session runs on Western European Time so lessons land in the evening rather than at an awkward hour for either side.",
  subjects: [
    { name: "Mathematics AA", levels: "HL · SL · IGCSE Extended (0580)", description: "HL sessions push into proof and calculus depth; SL keeps the same core secure without chasing the extra rigour a student doesn't need. We walk through the mathematical exploration end to end, and drill IGCSE Extended paper style separately." },
    { name: "Mathematics AI", levels: "HL · SL · IGCSE Core & Extended", description: "Built for students who reason better through a dataset than through a proof — statistics, financial maths and calculator fluency dominate SL, while HL layers on matrices, graph theory and complex numbers." },
    { name: "Physics", levels: "HL · SL · IGCSE Physics (0625)", description: "Sessions run problem-first rather than notes-first across mechanics, fields and thermodynamics, folding in the practical scheme and uncertainty treatment as they come up rather than as a separate add-on topic." },
    { name: "Chemistry", levels: "HL · SL · IGCSE Chemistry (0620)", description: "Bonding, energetics and organic mechanisms get broken into the individual calculation steps students actually lose marks on — moles, equilibrium, pH — with dedicated planning time for the HL scientific investigation." },
    { name: "Biology", levels: "HL · SL · IGCSE Biology (0610)", description: "The current DP syllabus threads across themes rather than a linear topic list, so we teach it that way too, cross-referencing units and drilling command terms; IGCSE work leans harder on recall precision." },
    { name: "Economics", levels: "HL · SL · IGCSE Economics (0455)", description: "Micro, macro, the global economy and the nine key concepts, with the bulk of session time on diagram accuracy, evaluative writing, and the three internal assessment commentaries drawn from live news stories." },
    { name: "Business Management", levels: "HL · SL · IGCSE Business Studies (0450)", description: "The five core units plus HL tools, tested against genuine company scenarios rather than textbook fiction, with focused coaching on the internal assessment and the evaluation marks that go missing most often." },
    { name: "English A: Language & Literature", levels: "HL · SL · IGCSE First Language English", description: "Close analysis of non-literary texts, portfolio work, the individual oral and Paper 1 pacing — aimed squarely at fluent English speakers who haven't yet met the IB's comparative, global-issue lens on a text." },
    { name: "English B", levels: "HL · SL · IGCSE English as a Second Language", description: "For students adding English on top of another first language, working through the five prescribed themes, text types, the listening paper and the oral, alongside IGCSE ESL reading speed and controlled writing drills." },
    { name: "Portuguese A: Language & Literature", levels: "HL · SL", description: "Taught for native or near-native speakers, moving through set literary and non-literary works, the individual oral commentary, and Paper 1 and 2 exam craft, by tutors equally comfortable in the texts and the mark scheme." },
    { name: "Portuguese B", levels: "HL · SL · Ab Initio", description: "For students picking up Portuguese as an additional language, a group that includes many recently relocated families — starting from Ab Initio basics and building toward HL text analysis, the five themes and the oral." },
    { name: "History", levels: "HL · SL · IGCSE History (0470)", description: "Prescribed subjects and world-history topics, worked through source criticism, argument-building for the essay papers, and the historical investigation, plus IGCSE depth-study and source-paper drills." },
    { name: "Environmental Systems & Societies (ESS)", levels: "HL · SL", description: "A dual-award option counted toward both Group 3 and Group 4, well suited to a packed timetable; coaching covers systems-diagram fluency, environmental value systems, and the additional HL analytical lenses." },
  ],

  regionsTitle: "Cities, coastal towns and time zones across Portugal",
  tutorsIntro: "The tutors shown below are scheduled to Western European Time, so a family in Lisbon and a family in the Algarve are both booking an ordinary evening slot rather than working around a mainland European clock that doesn't actually apply here.",
  regionsIntro: "Portugal runs on Western European Time — UTC+0 in winter, UTC+1 in summer — one hour behind most of continental Europe, and the Azores sit a further hour behind the mainland. Most families book weekday evenings after school or weekend mornings; DP2 students approaching the May session often add a second weekly slot in the run-up to mocks and internal assessment deadlines.",
  regions: [
    { name: "Lisbon", note: "The largest concentration of international schooling in the country, spanning long-established British and American-curriculum campuses. Weeknight slots from 6pm suit students coming home from after-school clubs and sports." },
    { name: "Cascais & Estoril", note: "A dense coastal-suburb cluster of relocated and diplomatic families, home to several of Portugal's best-known IB and British-curriculum schools, with commuting patterns that make late-afternoon sessions the norm." },
    { name: "Oeiras & Taguspark", note: "Home to the International Sharing School's two campuses running the full IB continuum in English; a growing tech and pharmaceutical-sector expatriate community sits alongside long-settled Portuguese families here." },
    { name: "Porto", note: "A smaller but well-established international-school market, with British-curriculum schools running IGCSE ahead of A Level or the Diploma Programme; sessions here run on the same national clock as Lisbon." },
    { name: "Algarve (Almancil & Vilamoura)", note: "A cluster of British and IB-curriculum schools serving both year-round resident families and the region's seasonal international community, with evening and weekend scheduling shaped by school-holiday tourism patterns." },
    { name: "Sintra", note: "A commuter town for Lisbon-based international families, drawing on schools in both Lisbon and Cascais; families here often ask about transport-linked scheduling around after-school activities." },
    { name: "Setúbal Peninsula", note: "A smaller international community south of Lisbon, mostly commuting into the capital's international schools; families here tend to book earlier evening slots to allow for the commute home." },
    { name: "Madeira", note: "A small but present international and bilingual-school community in Funchal; the island sits on the same Western European Time as the mainland, unlike the Azores." },
    { name: "Azores", note: "One hour behind mainland Portugal year-round in relative terms; families here confirm session times carefully against the mainland clock rather than assuming they match." },
  ],

  schoolDisclaimer: "IB Gram operates independently of every school named here. These names appear purely to sketch the curriculum landscape a family in Portugal is actually choosing between; none of them has endorsed, partnered with or authorised IB Gram, and neither has the International Baccalaureate Organization or Cambridge International.",
  schoolClusters: [
    {
      city: "Lisbon",
      note: "Lisbon families juggle IB coursework alongside UCAS or Common App applications, and often ask about DGES equivalence at the same time if a Portuguese university stays on the list. HL Mathematics, Extended Essay planning and Portuguese A oral practice are common requests.",
      schools: [
        "Carlucci American International School of Lisbon (CAISL)",
        "United Lisbon International School",
        "St. Julian's School (Carcavelos)",
        "TASIS Portugal",
      ],
    },
    {
      city: "Oeiras & Taguspark",
      note: "Home to a full-continuum IB network serving both relocated and Portuguese families. Requests here often start with PYP or MYP transition support for a child who has just arrived mid-year, before shifting toward DP coursework in the final two years.",
      schools: [
        "International Sharing School – Taguspark",
        "International Sharing School – Porto Salvo (Oeiras)",
      ],
    },
    {
      city: "Porto",
      note: "Porto's British-curriculum schools run IGCSE as the standard pre-sixteen qualification before students choose between A Level and the Diploma Programme. Families here often want a clear comparison of both routes before deciding at fifteen or sixteen.",
      schools: [
        "Oporto British School",
        "CLIP – The Oporto International School",
      ],
    },
    {
      city: "Algarve",
      note: "Algarve schools serve a mix of year-round resident families and seasonal international arrivals, with Diploma Programme cohorts often smaller than in Lisbon or Porto. Requests skew toward steady one-to-one support rather than group tutoring, given the smaller class sizes already in place.",
      schools: [
        "Nobel Algarve British International School (Almancil)",
        "Vilamoura International School (Colégio Internacional de Vilamoura)",
      ],
    },
  ],

  modesIntro: "Every session for a family in Portugal runs on video, with a shared whiteboard for working through problems together and notes you keep afterward. Nobody visits a home in Portugal for a lesson; the school day here sets the schedule instead, with most bookings landing after 4pm Western European Time or on a weekend morning. The same tutor stays with your child from week to week. Three formats cover most situations below.",
  modes: [
    {
      title: "Individual lessons, one tutor and one student",
      description: "The agenda each week is whatever's genuinely holding your child back — a coursework draft losing marks, an HL topic before a mock, or IGCSE past-paper drilling. The tutor works from actual school materials, not a generic curriculum guide, in 60- or 90-minute blocks at one fixed evening hour on Western European Time.",
      bullets: [
        "The same weekly hour, held steady across the term once it's agreed at the trial stage.",
        "Content is drawn from the school's own handouts, marked work and teacher comments, never a generic order.",
        "A short write-up lands after each class, so you're not waiting on the next report to see movement.",
        "Especially useful for Extended Essay work, HL depth, and a student newly arrived from another school system.",
      ],
    },
    {
      title: "Small groups, taught together online",
      description: "Two to four students already on the same course share one tutor and one screen — a natural setup for siblings or classmates covering identical material. Grouping is done by subject, level and the school's actual term dates, and the rate per student comes down accordingly.",
      bullets: [
        "Groups run two to four strong, sorted by subject, level and the school's own exam calendar.",
        "A good fit for dense IGCSE content, where one classmate's mistake, explained aloud, teaches the whole group.",
        "Per-head pricing beats one-to-one, and the tutor stays fixed across the block.",
        "A student can step across to one-to-one mid-term without any fuss if group pace stops working.",
      ],
    },
    {
      title: "Short intensive runs before a deadline",
      description: "Compressed bursts of work aimed at one fixed date — the May DP papers, a coursework hand-in, or January mocks. Instead of a single weekly hour, a student might do three or four sessions across six weeks, marking timed papers with turnaround inside days, and the whole run mapped around Portuguese school holidays instead of colliding with them.",
      bullets: [
        "Timed papers marked to real IB or Cambridge criteria, with feedback back the same week.",
        "Aimed squarely at the May sitting, the session Portuguese IB schools actually use.",
        "Carnaval, Easter and the summer break are built around, not worked straight through.",
        "Reserve a slot four to eight weeks out — the evenings closest to May go first.",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE in Portugal: sixteen schools, mostly the Diploma",
      paragraphs: [
        "Portugal is home to sixteen IB World Schools, nearly all of them authorised for the Diploma Programme, with a smaller number also running PYP or MYP. That makes it a compact market compared with a country like the UK or the UAE, but a genuinely established one: several of these schools have offered the DP for decades, and the network sits mostly in and around greater Lisbon, with a smaller but real presence in Porto and the Algarve.",
        "Cambridge IGCSE runs alongside the IB at a handful of British-curriculum schools, typically taken across the equivalent of Year 10 and 11 before a student either continues into A Level or switches into the Diploma Programme at sixteen. This dual pathway is common at schools with historical ties to the British international-school tradition, and it gives families a genuine choice point rather than a single forced route.",
        "The schools themselves teach mostly in English, some bilingually in English and Portuguese, and serve a mix of long-settled international families, Portuguese nationals choosing an international curriculum deliberately, and — increasingly over the past several years — households that relocated to Portugal under a residency or remote-work visa scheme and want their child's education to remain internationally portable.",
        "That last group brings a specific planning question: a family that expects to move again in two or three years wants a curriculum that transfers cleanly, which is a large part of why the IB, rather than Portugal's own Ensino Secundário, is the deliberate choice for many relocating households, even where a Portuguese state school place would otherwise be available and free.",
        "For tutoring, the practical implication is that a tutor needs to know not just 'the IB' in general but which of the sixteen schools your child attends and what that specific school's programme mix actually is, since PYP and MYP are far less universally available here than the Diploma. IB Gram works with families across Portugal entirely online, on Western European Time, and does not send tutors into homes; that in-person option exists only in India.",
      ],
      table: {
        caption: "Portugal's secondary qualification routes",
        columns: ["Route", "Typical school type", "Assessment", "Usual next step"],
        rows: [
          ["Ensino Secundário nacional (10º-12º ano)", "State and most private schools", "Exames nacionais, continuous assessment", "Concurso Nacional de Acesso to Portuguese public universities"],
          ["IB Diploma Programme", "16 authorised IB World Schools", "External papers plus internal assessment, TOK, EE", "Universities in Portugal via equivalence, or applications abroad"],
          ["Cambridge IGCSE then A Level", "A handful of British-curriculum schools", "External papers, some coursework", "A Level results feed UK and international university applications"],
        ],
      },
      bullets: [
        "Sixteen IB World Schools operate in Portugal, most authorised for the Diploma Programme rather than the full continuum.",
        "Cambridge IGCSE at several British-curriculum schools feeds into either A Level or the Diploma Programme at sixteen.",
        "Schools sit mostly around greater Lisbon, with smaller established clusters in Porto and the Algarve.",
        "Relocating families often choose the IB deliberately for its portability if the family moves again.",
        "Every session for a family in Portugal runs online on Western European Time; home tutoring is India only.",
      ],
    },
    {
      heading: "How is the IB Diploma recognised for university entry in Portugal, and abroad?",
      paragraphs: [
        "Recognition works through two entirely separate systems, and mixing them up costs families real time. To enter a Portuguese public university through the standard Concurso Nacional de Acesso, an IB student needs a DGES equivalência — an official equivalence certificate converting the IB result into the Portuguese secondary-education grading scale — and, in most cases, the IB result substitutes for Portugal's own exames nacionais under a published correlation table rather than the student sitting both.",
        "That equivalence process is administered by the Direção-Geral do Ensino Superior and requires supporting documents, including in many cases a Hague Apostille on the IB diploma, so it is worth starting well before application deadlines rather than in the final weeks of DP2. Processing takes time, and a missing document can push a family's timeline back by months.",
        "A separate, faster route exists for many Portuguese universities: the Concurso Especial para Estudantes Internacionais, aimed at international and EU students, which in a number of institutions accepts the IB score directly for admission without requiring the same national-exam substitution process. Policies differ by university and by course, so checking each institution's own published international-admissions page is essential rather than assuming one process applies everywhere.",
        "For families planning on university outside Portugal — the UK, the rest of the EU, the US, Canada — none of the DGES process applies at all. UCAS, the Common App and equivalent systems read the IB Diploma directly, exactly as they would for a student who sat it anywhere else in the world, with predicted grades from DP2 carrying the application before final results exist.",
        "The practical advice is to decide early which of these two tracks — Portuguese university via DGES, or an application abroad — actually matters for your family, since the paperwork, deadlines and even which subjects to prioritise can differ between them. A student aiming at both should start the DGES equivalence conversation in DP1, not after results arrive in July.",
      ],
      bullets: [
        "DGES equivalência converts an IB result onto Portugal's own grading scale for entry via the Concurso Nacional.",
        "The equivalence process often requires a Hague Apostille and should start well before application deadlines.",
        "Many Portuguese universities also run a Concurso Especial for international students, sometimes accepting IB scores directly.",
        "UCAS, the Common App and similar systems abroad read the IB Diploma the same way regardless of the country of study.",
        "Decide early whether a Portuguese university or one abroad is the actual target, since the required paperwork differs.",
      ],
    },
    {
      heading: "How does Portugal's Ensino Secundário compare with the IB and IGCSE?",
      paragraphs: [
        "Portugal's national Ensino Secundário, spanning 10º to 12º ano, is built around a fixed set of compulsory and elective disciplines assessed mainly through continuous school assessment plus the exames nacionais sat at the end of the cycle — a structure closer to a single cumulative pathway than the IB's mix of coursework, orals and terminal papers spread across six separate subjects.",
        "The clearest contrast is in how much weight falls on a single sitting. Exames nacionais results feed directly into university placement through the Concurso Nacional, and a student's final classification blends school grades with those national exam scores; the IB spreads risk differently, since internal assessment, the Extended Essay and Theory of Knowledge each contribute marks well before the May papers are sat.",
        "Language of instruction is the other major adjustment for a Portuguese national-curriculum student moving into an English-medium IB or IGCSE classroom. Ensino Secundário teaches English as a foreign-language subject rather than as the medium for every other class, so the shift to studying physics or economics in English, not just conversing in it, is a real workload on top of new subject content, and is worth naming rather than treating as a simple confidence issue.",
        "Cambridge IGCSE, where a school offers it, tends to be the gentler entry point into that shift, since it is taken as individual subjects rather than a fixed diploma and lets English-medium instruction phase in gradually — a student might, for instance, sit IGCSE Mathematics and English while other subjects still run in Portuguese, before a fuller switch at Diploma level a year or two later.",
        "For tutoring, naming this transition explicitly — extended written justification, English-medium subject content, unfamiliar command terms such as evaluate and discuss — usually resolves faster than treating the early stumbles as a subject-knowledge gap, since in most cases the underlying maths or science understanding transfers over perfectly well.",
      ],
      table: {
        caption: "Ensino Secundário vs IB Diploma vs Cambridge IGCSE",
        columns: ["Feature", "Ensino Secundário nacional", "IB Diploma", "Cambridge IGCSE"],
        rows: [
          ["Structure", "Fixed core plus electives, 10º-12º ano", "Six subjects across defined groups plus TOK, EE, CAS", "Individual subjects, no fixed diploma"],
          ["Assessment mix", "Continuous assessment plus exames nacionais", "External papers, internal assessment, oral and written coursework", "Mostly external papers, some coursework"],
          ["Language of instruction", "Portuguese, with English as a taught subject", "Usually English throughout", "Usually English throughout"],
          ["Typical exam timing", "End of 12º ano, national dates", "May session", "May/June, with an October/November resit series"],
        ],
      },
      bullets: [
        "Ensino Secundário blends continuous school assessment with terminal exames nacionais; the IB spreads assessment across coursework, orals and final papers.",
        "English shifts from a taught subject in Ensino Secundário to the medium of instruction in an IB or IGCSE classroom.",
        "Cambridge IGCSE, sat as individual subjects, often eases a Portuguese-curriculum student into English-medium study more gradually than DP would alone.",
        "Command terms such as analyse and evaluate ask for a kind of extended written answer national exams rarely require.",
        "Most transition difficulty is language and assessment-style adjustment, not a gap in the underlying subject knowledge.",
      ],
    },
    {
      heading: "IB internal assessments, TOK and the May exam session in Portuguese schools",
      paragraphs: [
        "Portugal's IB schools sit the May examination session, the northern-hemisphere sitting, which means internal assessment drafts, the Extended Essay and TOK components tend to cluster between November and March — often overlapping, for students also weighing a Portuguese university place, with the timeline for gathering DGES equivalence paperwork.",
        "Internal assessments are set and marked at the school, then moderated externally by the IB, carrying roughly a fifth to a third of the final subject grade depending on the course. That structure rewards steady process work: a chemistry student needs a genuinely testable variable, a history student needs sources actually reachable from Portugal, and a mathematics student needs an exploration topic narrow enough to finish on time.",
        "The Extended Essay is an independent 4,000-word research piece guided by scheduled supervisor meetings; TOK carries an exhibition and a 1,600-word essay on a prescribed title. Both reward decisions made early — a research question the student can actually answer with sources at hand, and a reading list built before the winter break rather than scrambled together after it.",
        "The line on academic honesty is firm and consistent across every DP school, including in Portugal: submitted work must be the student's own, confirmed by them and their supervisor, and checked through similarity detection. Tutors coach against the published assessment criteria, question weak reasoning, and model comparable but distinct problems; they do not write, ghost-edit or hand over text a student then submits as their own.",
        "Preparation for the May papers themselves is different from ongoing term work — timed conditions, mark-scheme reading, and drilling the gap between command terms that look similar but score differently. Because sessions run online, they are scheduled to Western European Time, so early evening or weekend slots fit around a Portuguese school day without cutting into after-school activities.",
      ],
      bullets: [
        "IA drafts, the Extended Essay and TOK components cluster between November and March for most DP2 students in Portugal.",
        "Tutors coach against published criteria and never write, ghost-edit or supply text submitted as a student's own work.",
        "Extended Essay planning starts with a question the student can genuinely answer from sources they can reach.",
        "May papers are prepared for with timed practice, mark-scheme reading and command-term drilling, distinct from ordinary term work.",
        "Sessions run on Western European Time, fitting around a Portuguese school day rather than a mainland European one.",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost for a family in Portugal, and how does scheduling work?",
      paragraphs: [
        "Cost depends mainly on the subject, level and how many weekly hours you book, with HL sciences and mathematics typically sitting above IGCSE or MYP support given the depth of subject knowledge required. We give a written rate before anything is booked, and confirm currency and payment options at the same time, so there is no surprise on the first invoice.",
        "Scheduling runs on Western European Time — one hour behind most of the European mainland — which our India-based tutors, roughly four and a half hours ahead, treat as a normal late-afternoon and evening teaching window. That overlap comfortably covers the 4-9pm slots most families in Portugal actually want, including weekend mornings for exam-season intensives.",
        "A first session is diagnostic rather than a straight lesson: the tutor asks what your child is actually being assessed on this term, works through a couple of problems while the student talks through their reasoning aloud, and identifies where the thinking, not just the answer, is going wrong. Regular sessions run 60 or 90 minutes depending on the subject and the point in the school year.",
        "Everything runs over video with a shared interactive whiteboard, so mathematics and science sessions use live graphing and equation tools, and essay-based subjects use a shared document with tracked comments. Past papers and mark schemes are annotated live and kept in a folder your family can revisit, and sessions can be recorded on request.",
        "Portuguese school holidays — Carnaval, Easter, the long summer break — reshape the calendar noticeably, so tell us your school's specific dates when setting up a regular schedule. Sessions are planned around those breaks rather than through them, with intensive blocks often added either side to make up ground before mocks or the May session.",
      ],
      bullets: [
        "Rates are quoted in writing before booking, varying mainly by subject, level and weekly hours.",
        "Tutors based in India sit roughly four and a half hours ahead of Western European Time, comfortably overlapping a 4-9pm slot.",
        "A shared whiteboard, annotated past papers and optional recordings carry the teaching, alongside a laptop and stable connection.",
        "First sessions are diagnostic, finding where reasoning breaks down rather than just where an answer went wrong.",
        "Sessions are planned around Carnaval, Easter and summer breaks, with intensive blocks added either side of them.",
      ],
    },
    {
      heading: "Should a relocating family in Portugal choose IB, Cambridge, or the national Ensino Secundário?",
      paragraphs: [
        "For a family expecting to stay in Portugal for years and plan on a Portuguese university, the national Ensino Secundário is often the simplest route, avoiding both school fees and the DGES equivalence process entirely, provided a state-school place is available in the family's area — not guaranteed everywhere, particularly around greater Lisbon.",
        "For a family that expects to move again, or that already plans on university abroad, the IB or Cambridge route is usually the more sensible choice, since both travel far better between countries than a national qualification does, and neither requires the equivalence conversion a Portuguese-bound IB student would still need for the Concurso Nacional.",
        "Between IB and Cambridge specifically, the practical difference for most families is less about prestige and more about which their nearest suitable school actually offers well, since switching a teenager between systems mid-secondary is disruptive regardless of which direction the switch runs. A school's own track record with a given board, not the board's reputation in the abstract, is the more useful thing to investigate.",
        "Portuguese-language requirements are worth checking early too: some international schools require or strongly encourage Portuguese lessons for resident students regardless of curriculum, both for daily life and because Portuguese A or B can be a genuinely useful DP subject choice for a family that expects to stay in the country long enough for it to matter on a university application.",
        "Whichever route a family chooses, the tutoring question is downstream of the schooling decision, not a substitute for it — we can support a child on any of these three paths, but the choice between them is one worth making with the school itself, and ideally before a place is confirmed rather than after the first term has started.",
      ],
      bullets: [
        "Families settling long-term and targeting a Portuguese university often find the national Ensino Secundário the simplest, fee-free route.",
        "Families likely to relocate again, or targeting university abroad, usually find IB or Cambridge more portable.",
        "The stronger deciding factor between IB and Cambridge is usually the nearest school's own track record, not board reputation.",
        "Portuguese language study is worth checking for early, both for daily life and as a genuine DP subject option.",
        "The schooling decision should be made with the school itself, ideally before a place is confirmed.",
      ],
    },
  ],

  process: [
    { title: "Describe the school and the syllabus gap", description: "Tell us the school your child attends, the programme they're on — PYP, MYP, DP, CP or IGCSE — the subject and level, and the evening hours that suit your household. A quick email or WhatsApp message covers it; no long intake form stands in the way." },
    { title: "A specialist in that syllabus comes back to you", description: "We don't offer a generalist 'IB tutor'. Whoever we suggest has specifically taught the board in question — Math AA HL, IGCSE Portuguese as a First Language, or whatever applies — and you see their background before a single session is booked." },
    { title: "A no-cost trial, timed to your evening", description: "Over video with a shared whiteboard, at whichever Western European Time slot actually suits your household, your child tackles a real problem with the tutor. You then get a short, honest note on where the gaps genuinely are." },
    { title: "A schedule shaped by your own school's dates", description: "Once it's clearly a good fit, we build the plan around your school's coursework deadlines, mock exams and the May session — plus, where relevant, the exames nacionais and DGES equivalence timeline. Frequency and billing (per session or per block) are up to you." },
    { title: "Ongoing notes, and a tutor swap if it's needed", description: "Every class ends with a short written update, and every few weeks brings a fuller look at what's landed and what hasn't. Should a pairing not be working, say so — moving your child to someone new is not a hassle." },
  ],

  whyPoints: [
    { title: "Deep familiarity with Portugal's specific sixteen schools", description: "With only sixteen authorised IB schools nationwide, knowing each one's actual programme mix matters more here than in a larger market. Tutors are matched to your specific school and board, not to a generic idea of what 'the IB' looks like." },
    { title: "Built around the real Portuguese clock", description: "Portugal runs an hour behind most of the European mainland, and scheduling reflects that exact local time rather than a generic continental assumption. Sessions sit inside the evening window a household here already protects for homework." },
    { title: "DGES paperwork timed into the plan from the start", description: "Where a Portuguese university is on the list, the DGES equivalence process and its document deadlines shape the schedule from DP1 onward — not something scrambled together once July results land." },
    { title: "Genuine support for a mid-year move", description: "A family arriving partway through the year gets a bridging plan built around exactly where their old school's syllabus and the new one part ways, instead of a blanket catch-up course covering material the student has already mastered." },
    { title: "Coursework coaching that never crosses into ghostwriting", description: "Every board polices academic honesty on IAs, Extended Essays and coursework, Portugal included. What we coach is method — a sharper question, tighter evidence, cleaner referencing — never the drafting of the submission itself." },
    { title: "A tutor your child actually meets first", description: "Nobody joins the roster without their qualifications and teaching record being checked beforehand, and the free trial exists so your child can judge, first-hand, whether the way a tutor explains things actually works for them." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor for my child in Portugal?",
      answer: "Naming the exact school, programme and subject gets a far better match than searching generically for 'IB tutor.' Tell IB Gram which of Portugal's IB or Cambridge schools your child attends and where the difficulty currently sits, and we propose a tutor already familiar with that syllabus rather than handing you a directory. Reach us at ibgram24@gmail.com or +91 7439 368 115 to start.",
    },
    {
      question: "Can lessons run at a sensible hour for a family in Portugal?",
      answer: "Yes — sessions are booked on Western European Time, the actual local clock in Portugal, not the mainland European time zone most of the continent uses. Most families choose an after-school slot between 4pm and 9pm, or a weekend morning, and that hour stays fixed once confirmed, including through the March and October clock changes.",
    },
    {
      question: "How much does IB or IGCSE tutoring cost in Portugal, and how do we pay?",
      answer: "Rates depend on the subject, level and weekly hours booked, with HL sciences and mathematics typically priced above IGCSE or MYP support. We confirm a rate in writing before anything is booked, along with currency and payment method, so nothing about the first invoice is a surprise. Email ibgram24@gmail.com with your child's grade, subject and level for a current quote.",
    },
    {
      question: "Is tutoring only available online for families in Portugal?",
      answer: "Yes. Nobody visits a home in Portugal for a lesson — that in-person option exists only in India, where our tutors are based. For families here, sessions run as live one-to-one video with a shared whiteboard, screen-sharing for past papers and coursework drafts, and a written note afterward, which is also what makes matching to an exact syllabus board possible in a market as compact as Portugal's.",
    },
    {
      question: "Do you help with the DGES equivalence process for Portuguese university entry?",
      answer: "We don't handle the paperwork itself — that runs through the school and the Direção-Geral do Ensino Superior directly — but tutoring can be planned around its timeline, since gathering documents and, in many cases, a Hague Apostille takes time and works better started in DP1 than left to the summer results land in. Tell us if a Portuguese university is on your child's list so the schedule accounts for it.",
    },
    {
      question: "Should my child do the IB, Cambridge, or Portugal's national Ensino Secundário?",
      answer: "It depends mostly on where the family expects to be in a few years. Families settling long-term for a Portuguese university often find the national route simplest and fee-free; families likely to relocate again, or targeting university abroad, usually find IB or Cambridge more portable. We tutor all three tracks, but the initial choice is best made with the school itself.",
    },
    {
      question: "Can you help with Cambridge IGCSE in Portugal?",
      answer: "Yes. Several British-curriculum schools in Portugal run Cambridge or Edexcel IGCSE as the standard qualification before A Level or the Diploma Programme. We tutor against the exact syllabus code your child's school follows — send it from the course outline, since it determines the paper style and exam series we prepare for.",
    },
    {
      question: "Do your tutors teach both HL and SL subjects?",
      answer: "Yes, and the difference matters. HL courses carry more content and longer, more demanding papers, so HL sessions spend more time on extension material and timed exam technique. SL support usually concentrates on securing core understanding and steady past-paper practice. Tell us the level for each subject when booking, since HL and SL suit slightly different tutoring emphasis.",
    },
    {
      question: "Can a tutor help with my child's Extended Essay or internal assessment?",
      answer: "There's a clear boundary, and we stay on the right side of it. Sharpening a fuzzy research question into something answerable, walking through what the criteria actually reward, poking holes in a weak argument, and reacting to a draft your child wrote — all fine. Producing or rewriting the text your child then hands in is not, since that breaks the academic honesty standard every DP school applies, Portugal's included.",
    },
    {
      question: "How are your tutors screened before one is matched with my child?",
      answer: "An interview covers both subject depth and the exact board a tutor would be teaching, and we verify qualifications and past classroom experience before anyone joins — current, working knowledge of a syllabus's criteria, not just general subject familiarity from years ago. Should the pace, style or level feel off once lessons begin, flag it and someone else takes over.",
    },
    {
      question: "Do we get to try a lesson before committing to anything?",
      answer: "We build that in deliberately. A proposed tutor and your child work through genuine material together first, so you can judge the things that actually matter — whether the explanations click, whether the tutor really knows your school's specific board, and whether the Western European Time slot holds up once it's a real evening rather than a plan. Requesting someone different afterward is entirely normal.",
    },
    {
      question: "Which IB subjects do you cover for students in Portugal?",
      answer: "The commonly taken DP subjects across groups one to five: Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, History, English A and B, Portuguese A and B, and Theory of Knowledge, alongside MYP and PYP support and Cambridge IGCSE subjects. Less common language options depend on tutor availability, so ask before assuming.",
    },
    {
      question: "Do you offer intensive tutoring before the May exams?",
      answer: "Yes. Portugal's IB schools sit the May session, so revision typically intensifies from February onward. Families often move from one weekly session to two or three through the spring, working timed past papers and mark-scheme analysis for the specific papers ahead. Book that increase early, since evening slots close to May fill first.",
    },
    {
      question: "My family just relocated to Portugal mid-year — can you help with the transition?",
      answer: "Yes, and this is one of the more common reasons families first contact us. A tutor familiar with both the previous school's syllabus and the new one can identify precisely where the two diverge — often language of instruction or assessment style rather than subject content — and build a short bridging plan rather than a generic catch-up course.",
    },
    {
      question: "How do we get started with a tutor?",
      answer: "Message ibgram24@gmail.com or +91 7439 368 115 with your child's school and grade, the subjects and levels in question, your household's evening availability on Western European Time, and what you're actually hoping shifts — a grade, exam nerves, a stalled Extended Essay. A tutor gets proposed with their background attached, and the first lesson is arranged before any money changes hands or a rate is fixed.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "A city-by-city index of our tutoring hubs, showing how the matching process differs by location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Subject-by-subject Cambridge and Edexcel IGCSE support, with syllabus breakdowns and past papers." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "A closer look at DP structure, the HL/SL split, and the points where students most often get stuck." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP assessment criteria, ePortfolio guidance and Personal Project coaching for Years 6-10." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "A full walkthrough of Math AA and AI, HL and SL, including Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "Check qualifications, subject coverage, teaching format and current availability before booking." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Focused exam-season coaching that runs alongside ordinary school coursework and assessment deadlines." },
    { label: "Talk to the team", href: "/contact-us/", description: "Get scheduling, subject or fit questions answered directly before you commit to a trial." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "A growing library of syllabus explainers, study guides and revision planning for students." },
    { label: "IB tutors in the USA", href: "/usa/", description: "Compare how this same matching and scheduling model plays out for families based in the USA." },
  ],

  closingHeading: "Start with a free trial lesson, timed to your Portugal evening",
  closingBody: "Send us your child's school, the subject, the level and the evening hours that work for your household. Back comes a named tutor, a look at their teaching background, and a couple of trial slots already set to Western European Time — free, with nothing to continue if the fit isn't right. Say so and we'll propose someone else. Reach ibgram24@gmail.com or +91 7439 368 115 on WhatsApp, with your child's grade and school included.",
};
