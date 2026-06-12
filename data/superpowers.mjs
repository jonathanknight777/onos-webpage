// The 12 superpowers of Onos Q. One intelligence — every entry is "Q does X".
export const SUPERPOWERS = [
  {
    slug: 'briefings', n: '01', color: 'c-onos', icon: '☀️',
    short: 'Q briefs your team',
    title: 'Q briefs your team',
    headline: 'Start every day already ahead.',
    tagline: 'Daily intelligence briefings',
    card: 'Before your first coffee, Q has read overnight observations, open actions and site activity — and delivered a sharp, prioritised briefing to every project lead.',
    heroSub: 'Every morning, Q reads everything that happened across your sites overnight — observations, incidents, sign-ins, weather, expiring permits — and delivers each project lead a briefing that says exactly what needs their attention today.',
    useCase: {
      title: 'The first hour of the day, given back',
      problem: 'Most safety leads start the day blind: twenty browser tabs, a dozen unread emails, and a gut feeling about which site needs them most. By the time they’ve pieced the picture together, the morning is gone — and so is the chance to get ahead of the day’s risk.',
      solution: 'Q does the piecing-together for them. It reads every record logged since yesterday’s briefing, weighs what matters against what doesn’t, and delivers a prioritised digest before the first worker signs in. Not a data dump — a judgement call: here are the three things that need you today, and here’s why.'
    },
    how: [
      ['Q reads overnight', 'Every observation, incident, action update, sign-in anomaly and document change across all your sites — processed before 6am.'],
      ['Q prioritises', 'Signals are ranked by risk, urgency and relevance to each recipient. A site manager and an EHSQ director get different briefings from the same data.'],
      ['Q delivers', 'Each lead gets their briefing by email or in-app — readable in two minutes, with one-tap links into the underlying records.'],
      ['You act', 'The overdue scaffold inspection gets done at 7am instead of being discovered at 4pm. That’s the whole point.']
    ],
    benefits: [
      ['⏱', 'An hour back, every morning', 'No more spreadsheet archaeology before the day starts. The picture is assembled for you.'],
      ['🎯', 'Nothing slips through', 'Q never skims, never gets distracted, never misses page two. If it’s in the data, it’s been read.'],
      ['📨', 'Right detail, right person', 'Site leads get site detail. Directors get the portfolio view. Everyone gets only what they can act on.']
    ],
    stats: [['2', ' min', 'to read your morning briefing'], ['100', '%', 'of overnight records reviewed'], ['6', 'am', 'delivered before the day begins']],
    feed: [
      ['info', '05:42', 'Reading 311 records across 14 sites…'],
      ['warn', '⚠', 'Scaffold inspection overdue — Site 7'],
      ['warn', '⚠', 'Permit PTW-118 expires 09:00 today'],
      ['ok', '✓', '23 briefings delivered, tailored per lead']
    ],
    related: ['risk-scoring', 'pattern-detection', 'board-reporting']
  },
  {
    slug: 'risk-scoring', n: '02', color: 'c-pink', icon: '🎯',
    short: 'Q scores your risk',
    title: 'Q scores your risk',
    headline: 'See risk rising before it arrives.',
    tagline: 'Live Project Risk Scores',
    card: 'Q continuously scores every project on live signals — overdue actions, incident velocity, inspection gaps — so leadership sees rising risk before it becomes a RIDDOR report.',
    heroSub: 'Q maintains a live risk score for every project, recalculated as the data changes — so the question "which site should worry me?" always has a current, evidenced answer.',
    useCase: {
      title: 'From quarterly hindsight to live foresight',
      problem: 'Risk reviews happen quarterly; risk doesn’t. Between reviews, a project can quietly accumulate overdue actions, slipping inspections and a rising near-miss count — and nobody connects the dots until the incident report writes them up in hindsight.',
      solution: 'Q connects the dots continuously. Every project carries a live risk score built from the signals that actually precede harm: action backlog, incident velocity, inspection coverage, observation trends, subcontractor compliance. When a score moves, the right person knows the same day — with the evidence one click away.'
    },
    how: [
      ['Q watches the signals', 'Overdue actions, incident frequency and severity, inspection gaps, observation sentiment, supply chain compliance — weighted and combined per project.'],
      ['Q recalculates continuously', 'Scores update as data changes, not on a reporting cycle. A bad week shows up as a bad week — not as a footnote three months later.'],
      ['Q explains itself', 'Every score decomposes into its drivers. "Riverside is at 78" comes with "because actions are 40% overdue and near-misses doubled."'],
      ['Q escalates movement', 'Rising scores trigger alerts to the accountable owner and EHSQ leadership. Falling scores prove your interventions worked.']
    ],
    benefits: [
      ['📈', 'Leading, not lagging', 'Manage the conditions that precede incidents instead of counting the incidents themselves.'],
      ['🧭', 'Effort goes where risk is', 'Deploy your scarce EHSQ time against the projects that need it this week — with evidence, not instinct.'],
      ['🏛', 'Board-grade answers', 'When the board asks "where’s our biggest exposure?", you answer in seconds with a defensible, data-backed score.']
    ],
    stats: [['24', '/7', 'continuous recalculation'], ['100', '%', 'of projects scored, always'], ['1', ' click', 'from score to evidence']],
    feed: [
      ['info', 'PRS', 'Recalculating 14 project scores…'],
      ['warn', '⚠', 'Riverside Depot: 64 → 78 (rising)'],
      ['info', '↳', 'Drivers: overdue actions +40%, near-misses ×2'],
      ['ok', '✓', 'Escalated to EHSQ Director']
    ],
    related: ['briefings', 'pattern-detection', 'action-chasing']
  },
  {
    slug: 'pattern-detection', n: '03', color: 'c-cyan', icon: '🔍',
    short: 'Q spots the patterns',
    title: 'Q spots the patterns',
    headline: 'The weak signals, finally heard.',
    tagline: 'Observation pattern detection',
    card: 'Q reads every safety observation across every site and connects the dots humans can’t — surfacing clusters, trends and the weak signals that precede serious harm.',
    heroSub: 'Your workforce already reports the warning signs — hundreds of observations a month. Q is the intelligence that actually reads all of them, across every site, and tells you what they mean together.',
    useCase: {
      title: 'Four hundred percent more observations is only valuable if someone reads them',
      problem: 'Onos customers capture 400% more observations than they did on paper. That’s a goldmine — and a problem. No human can read twelve hundred observations a month across fourteen sites and hold the cross-site picture in their head. So the cluster of manual-handling reports on night shift stays invisible until it becomes an injury statistic.',
      solution: 'Q reads every single one. It groups related reports across sites, shifts, trades and time — and surfaces the clusters a human reviewer would never see from inside one site. Three unrelated-looking observations become one clear warning, delivered to the person who can act on it.'
    },
    how: [
      ['Q reads everything', 'Every observation — typed, dictated, photographed — across all sites and subcontractors, in any language your workforce reports in.'],
      ['Q connects across silos', 'Patterns rarely respect site boundaries. Q correlates by hazard type, location, trade, shift, weather and time to find what repeats.'],
      ['Q separates signal from noise', 'One report is an anecdote. Q tells you when it’s become a trend — and how confident it is.'],
      ['Q routes the warning', 'Pattern reports go to the supervisor or safety manager who owns the affected work, with every source observation attached.']
    ],
    benefits: [
      ['🛡', 'Prevent, don’t investigate', 'Act on the precursors. The incident that never happens is the cheapest one you’ll ever manage.'],
      ['🔁', 'Reporting becomes worth it', 'When workers see their observations turn into action, they report more. Q closes the cultural loop.'],
      ['🌐', 'Whole-estate vision', 'Patterns that span sites, regions and subcontractors — visible to no single human — are Q’s home turf.']
    ],
    stats: [['1284', '', 'observations read in a typical month'], ['100', '%', 'of reports analysed — not sampled'], ['0', '', 'weak signals left unread']],
    feed: [
      ['info', 'scan', '1,284 observations analysed'],
      ['warn', '⚠', 'Cluster: manual handling, night shift, 3 sites'],
      ['info', '↳', 'Confidence: high — 11 reports, 19 days'],
      ['ok', '✓', 'Pattern report → Safety Manager']
    ],
    related: ['risk-scoring', 'briefings', 'incident-triage']
  },
  {
    slug: 'rams-review', n: '04', color: 'c-blue', icon: '📋',
    short: 'Q reviews your RAMS',
    title: 'Q reviews your RAMS',
    headline: 'Method statements, marked in minutes.',
    tagline: 'RAMS & document review',
    card: 'Q assesses risk assessments and method statements in minutes, not days — flagging missing controls, generic copy-paste and gaps against the actual scope of work.',
    heroSub: 'Every RAMS that arrives gets a rigorous first review from Q within minutes — missing controls flagged, copy-paste boilerplate caught, gaps against the actual scope of work identified — before a human reviewer spends a single minute on it.',
    useCase: {
      title: 'The bottleneck that holds up every start date',
      problem: 'A subcontractor’s RAMS lands on Thursday. The works start Monday. Somewhere in between, an overloaded safety advisor must find time to read forty pages — and under that pressure, reviews become skims. Generic documents recycled from the last job slip through, and the missing rescue plan is discovered at the work face.',
      solution: 'Q reviews every document the moment it arrives. It checks the controls against the actual scope and hazards of the task, flags boilerplate that doesn’t match the work, and returns a structured review in minutes. Your competent person still makes the final call — but they start from Q’s marked-up copy, not from page one.'
    },
    how: [
      ['Document arrives', 'A subcontractor uploads their RAMS through the supply chain portal — no email attachments, no version chaos.'],
      ['Q reviews against scope', 'Q checks the method against the actual task, location and hazards: are the right controls present, specific and adequate?'],
      ['Q flags the gaps', 'Missing rescue plans, generic copy-paste, controls that contradict the method, hazards with no mitigation — each flagged with its location in the document.'],
      ['Your expert decides', 'The human reviewer gets Q’s structured findings and approves, rejects or requests changes — in a fraction of the time, with better consistency.']
    ],
    benefits: [
      ['⚡', 'Days become minutes', 'First-pass review in under five minutes means start dates stop slipping on paperwork.'],
      ['🔬', 'Every page, every time', 'Q reads page 37 as carefully as page 1. Review quality stops depending on the reviewer’s workload.'],
      ['📐', 'A consistent bar', 'Every subcontractor is held to the same standard — and learns quickly that generic RAMS won’t get through.']
    ],
    stats: [['4', ' min', 'typical first-pass review'], ['100', '%', 'of pages actually read'], ['0', '', 'rescue plans missed']],
    feed: [
      ['info', 'doc', 'RAMS-0412 received from subcontractor'],
      ['warn', '⚠', 'No rescue plan for work at height (p.12)'],
      ['warn', '⚠', 'COSHH section generic — wrong substances'],
      ['ok', '✓', 'Structured review returned in 4 minutes']
    ],
    related: ['supply-chain', 'compliance', 'risk-scoring']
  },
  {
    slug: 'supply-chain', n: '05', color: 'c-teal', icon: '🔗',
    short: 'Q guards your supply chain',
    title: 'Q guards your supply chain',
    headline: 'Every contractor, always current.',
    tagline: 'Supply chain compliance',
    card: 'Q tracks every subcontractor’s insurances, accreditations and competencies — chasing expiries automatically so non-compliant contractors never reach your gates.',
    heroSub: 'Q maintains a live compliance picture of every subcontractor — insurances, accreditations, competencies, RAMS status — and does the chasing itself, so the gate never has to be the place you find out.',
    useCase: {
      title: 'Your risk profile is only as good as your weakest subcontractor',
      problem: 'Forty percent of observations on Onos come from supply chain workers — and so does a disproportionate share of risk. Keeping eighty subcontractors’ insurance certificates, CSCS cards and accreditations current is a full-time chasing job that always slips, until the day an uninsured contractor is found mid-job.',
      solution: 'Q owns the chasing. It watches every expiry date across your whole supply chain, requests renewals automatically with escalating reminders, verifies what comes back, and keeps a live red-amber-green picture per contractor. Procurement and site teams see compliance status before award and before access — not after the fact.'
    },
    how: [
      ['Q tracks every credential', 'Insurances, accreditations, licences, training cards and RAMS status for every subcontractor, in one live register.'],
      ['Q chases ahead of expiry', 'Renewal requests go out 30, 14 and 7 days ahead — automatically, politely, persistently. No human nagging required.'],
      ['Q verifies what returns', 'New certificates are checked for dates, cover levels and scope before the status turns green.'],
      ['Q gates access', 'Site sign-in and permit issue see the live status. Non-compliant contractors are flagged before they reach the work front.']
    ],
    benefits: [
      ['🚫', 'No more gate surprises', 'The uninsured contractor is caught at procurement, not mid-incident when it’s a claim.'],
      ['🗂', 'The chasing does itself', 'Hours of weekly admin replaced by automated, audited follow-up that never forgets.'],
      ['🤝', 'Stronger tender story', 'Demonstrable, real-time supply chain governance is a competitive answer to any client PQQ.']
    ],
    stats: [['86', '', 'subcontractors verified continuously'], ['30', ' days', 'of advance warning on every expiry'], ['0', '', 'non-compliant contractors at the gate']],
    feed: [
      ['info', 'check', '86 subcontractors verified'],
      ['warn', '⚠', '3 insurance certificates expire in 14d'],
      ['ok', '✓', 'Renewal requests sent + diarised'],
      ['ok', '✓', 'Gate status updated for Site 3']
    ],
    related: ['rams-review', 'competency', 'compliance']
  },
  {
    slug: 'incident-triage', n: '06', color: 'c-onos', icon: '⚡',
    short: 'Q triages incidents',
    title: 'Q triages incidents',
    headline: 'The first hour, handled right.',
    tagline: 'Incident triage & investigation support',
    card: 'The moment an incident is logged, Q drafts the investigation structure, suggests root-cause lines of enquiry and checks RIDDOR reportability — so nothing is missed under pressure.',
    heroSub: 'The minutes after an incident are when the most matters and the least capacity exists. Q handles the structure — reportability, notifications, evidence checklist, investigation scaffold — so your people can handle the people.',
    useCase: {
      title: 'Nobody does their best paperwork in the worst hour',
      problem: 'An incident just happened. The site manager is managing casualties, the safety advisor is driving over, and somewhere in that chaos someone must remember: is this RIDDOR-reportable? Who must be notified, by when? What evidence needs capturing before the scene changes? Under pressure, checklists live in heads — and heads are busy.',
      solution: 'The moment the incident is logged, Q goes to work. It assesses RIDDOR reportability against the actual injury and circumstances, drafts the statutory notification timeline, generates an evidence checklist for the scene, and scaffolds the investigation with suggested root-cause lines of enquiry. The humans stay with the humans; Q keeps the process whole.'
    },
    how: [
      ['Incident logged', 'A 60-second mobile report from site — what happened, who, where, photos.'],
      ['Q assesses reportability', 'Specified injuries, over-7-day criteria, dangerous occurrences — checked against the actual details, with the reasoning shown.'],
      ['Q drafts the response', 'Notification deadlines, evidence checklist, witness list, scene-preservation prompts — generated and assigned in minutes.'],
      ['Q scaffolds the investigation', 'A structured investigation pack with suggested lines of enquiry, linked to similar past incidents and relevant patterns Q has seen.']
    ],
    benefits: [
      ['🧯', 'Calm process under pressure', 'The statutory clock never gets forgotten, no matter how chaotic the day.'],
      ['⚖️', 'Defensible from minute one', 'Evidence captured early and systematically — the difference between a clean investigation and a contested one.'],
      ['🔎', 'Deeper root causes', 'Q links the incident to prior observations and patterns, so investigations start with context, not a blank page.']
    ],
    stats: [['60', 's', 'to log an incident from site'], ['10', ' days', 'RIDDOR deadline never missed'], ['100', '%', 'of incidents get a structured pack']],
    feed: [
      ['info', 'new', 'Incident INC-2291 logged 14:32'],
      ['warn', '⚠', 'Potential RIDDOR — specified injury'],
      ['info', '↳', 'F2508 deadline: 10 days. Clock started.'],
      ['ok', '✓', 'Investigation pack drafted + assigned']
    ],
    related: ['pattern-detection', 'risk-scoring', 'briefings']
  },
  {
    slug: 'compliance', n: '07', color: 'c-cyan', icon: '🛡️',
    short: 'Q keeps you audit-ready',
    title: 'Q keeps you audit-ready',
    headline: 'Permanently ready. Never scrambling.',
    tagline: 'ISO compliance mapping',
    card: 'Q maps your live data against ISO 45001, 14001 and 9001 — keeping you permanently audit-ready instead of scrambling the week before the certification body arrives.',
    heroSub: 'Q continuously maps your live operational data against ISO 45001, 14001 and 9001 clause by clause — so audit-readiness is a permanent state, not an annual emergency.',
    useCase: {
      title: 'The two worst weeks of the year, deleted',
      problem: 'Every certification cycle, the same ritual: weeks of evidence-hunting through folders, chasing records that should exist, and discovering gaps when it’s too late to close them gracefully. The audit becomes a performance — and the real compliance posture stays unknown the other fifty weeks of the year.',
      solution: 'Q treats every day like audit day. It maps the records your teams already create — inspections, training, actions, reviews — against each clause of the standards you hold, maintains a live coverage score, and flags gaps while there’s still time to fix them properly. When the certification body arrives, the evidence pack already exists.'
    },
    how: [
      ['Q knows your standards', 'ISO 45001, 14001, 9001 — the clause structure, what evidence satisfies each, and how your management system maps onto them.'],
      ['Q maps continuously', 'Every record created in Onos is indexed against the clauses it evidences. Coverage updates daily, not annually.'],
      ['Q flags gaps early', 'Four missing training records against clause 7.2 is a Tuesday fix in March — not a finding in November.'],
      ['Q assembles the pack', 'Come audit day, the evidence pack per clause is generated, current and traceable to source records.']
    ],
    benefits: [
      ['📅', 'Audit prep ≈ zero', 'The weeks of evidence-hunting simply stop existing. The pack is always current.'],
      ['🩺', 'True posture, always known', 'Leadership sees real compliance coverage every day — not a once-a-year snapshot staged for the auditor.'],
      ['🏅', 'Findings before the auditor finds them', 'Gaps surface internally first, while they’re cheap and quiet to fix.']
    ],
    stats: [['96', '%', 'live clause coverage, visible daily'], ['3', '', 'standards mapped: 45001 · 14001 · 9001'], ['0', ' wks', 'of audit-prep scramble']],
    feed: [
      ['info', 'audit', 'ISO 45001 clause coverage: 96%'],
      ['warn', '⚠', 'Clause 7.2: 4 training records missing'],
      ['ok', '✓', 'Gap actions raised + assigned'],
      ['ok', '✓', 'Evidence pack regenerated']
    ],
    related: ['competency', 'supply-chain', 'board-reporting']
  },
  {
    slug: 'ask-q', n: '08', color: 'c-blue', icon: '💬',
    short: 'Q answers anything',
    title: 'Q answers anything',
    headline: 'Ask in English. Answered with evidence.',
    tagline: 'Conversational answers from your data',
    card: 'Ask Q a question in plain English — "which sites had the most near-misses last month?" — and get an instant answer drawn from your own live data, with the evidence to back it.',
    heroSub: 'No query builder, no report request, no waiting for the data team. Ask Q the question the way you’d ask a colleague — and get the answer from your own live data, with every source record linked.',
    useCase: {
      title: 'The answer exists. Getting it shouldn’t take a week.',
      problem: 'A client asks for your near-miss trend on their project. The MD wants to know which sites drove last month’s incident spike. Each question kicks off the same dance: find the right report, or the right person, or export to Excel and build it yourself. The data was there all along — locked behind the skill of extracting it.',
      solution: 'Q removes the dance. Ask in plain English and Q queries your live data directly: filters, aggregates, compares, and answers in seconds — with the source records cited and linked so you can stand behind every number. Follow up, drill down, change the question. It’s a conversation, not a report request.'
    },
    how: [
      ['You ask naturally', '"Top three open risks on Riverside?" — "How did observation rates change after the toolbox talks?" — "Show me overdue actions by owner."'],
      ['Q queries live data', 'Not a cached dashboard — the answer reflects the record that was logged four minutes ago.'],
      ['Q shows its evidence', 'Every answer links the underlying records. Numbers you can defend in front of a client or a regulator.'],
      ['You go deeper', 'Follow-up questions keep context. Drill from portfolio to project to record without leaving the conversation.']
    ],
    benefits: [
      ['🚀', 'Seconds, not cycles', 'The answer that took a week of report-requesting now takes one sentence.'],
      ['🔓', 'Everyone gets data superpowers', 'Your best insights stop being gated on Excel skills or BI licences.'],
      ['🧾', 'Evidence built in', 'Cited sources on every answer mean trust by default — internally and with clients.']
    ],
    stats: [['5', 's', 'typical time to an evidenced answer'], ['0', '', 'query languages to learn'], ['100', '%', 'of answers cite their sources']],
    feed: [
      ['info', 'you', 'Top 3 open risks on Riverside?'],
      ['info', 'Q', '1. Work at height (4 actions open)…'],
      ['info', 'Q', '2. LOLER cert expiry · 3. Access control'],
      ['ok', '✓', 'Sources: 7 records linked']
    ],
    related: ['board-reporting', 'briefings', 'risk-scoring']
  },
  {
    slug: 'action-chasing', n: '09', color: 'c-teal', icon: '📌',
    short: 'Q chases the actions',
    title: 'Q chases the actions',
    headline: 'The loop closes itself now.',
    tagline: 'Automated action follow-up',
    card: 'Q watches every corrective action, nudges owners before deadlines slip and escalates the ones that matter — so closing the loop no longer depends on someone’s memory.',
    heroSub: 'Every audit finding, observation and incident produces actions — and every unclosed action is a known risk left live. Q watches all of them, nudges before deadlines slip, and escalates the ones that matter.',
    useCase: {
      title: 'An open action is a risk you already know about',
      problem: 'The system said "action assigned" and everyone moved on. Three months later the audit finds the same guard rail still missing — the action sat open, its owner busy, its deadline quietly passing. Chasing actions is nobody’s favourite job, so it becomes nobody’s job.',
      solution: 'It’s Q’s job now. Q monitors every open action against its deadline and its risk level. Owners get a nudge before the due date, not a reprimand after. Stalled high-risk actions escalate automatically to the right manager. And leadership sees closure rates moving — because the loop finally closes by default.'
    },
    how: [
      ['Q watches the whole backlog', 'Every action from every source — audits, observations, incidents, RAMS reviews — in one monitored stream.'],
      ['Q nudges before, not after', 'Owners hear from Q ahead of the deadline, with the context attached. Most actions close on a friendly nudge.'],
      ['Q escalates by risk', 'A slipping high-severity action escalates to the owner’s manager automatically. Low-risk admin doesn’t generate noise.'],
      ['Q reports the trend', 'Closure rates, ageing profiles and repeat offenders — visible to leadership without anyone compiling a thing.']
    ],
    benefits: [
      ['✅', 'Closure becomes the default', 'The system that never forgets beats the spreadsheet that always does.'],
      ['🔕', 'Nudge fatigue, solved', 'Risk-proportionate escalation means people hear about what matters — and only what matters.'],
      ['📉', 'A shrinking backlog you can prove', 'Watch the ageing curve bend in the dashboard, and show the auditor a closed loop.']
    ],
    stats: [['312', '', 'open actions monitored at once'], ['48', 'h', 'advance nudge before every deadline'], ['0', '', 'high-risk actions forgotten']],
    feed: [
      ['info', 'scan', '312 open actions monitored'],
      ['warn', '⚠', '9 due within 48h — owners nudged'],
      ['warn', '⚠', '2 high-risk overdue — escalated'],
      ['ok', '✓', 'Weekly closure rate: 94% (+6)']
    ],
    related: ['risk-scoring', 'compliance', 'briefings']
  },
  {
    slug: 'competency', n: '10', color: 'c-onos', icon: '🎓',
    short: 'Q watches competency',
    title: 'Q watches competency',
    headline: 'Right ticket. Right person. Right job.',
    tagline: 'Training & competency assurance',
    card: 'Q tracks every ticket, card and certificate across your workforce — flagging expiring competencies before someone unqualified ends up on the tools.',
    heroSub: 'Q tracks every ticket, card and certificate across your direct workforce and supply chain — cross-references them against the work actually being done — and flags the gap before it’s a person on the tools without the ticket.',
    useCase: {
      title: 'Competency expires quietly. Consequences don’t.',
      problem: 'A thousand training records. CPCS cards, first-aid certs, fork-lift licences, asbestos awareness — each on its own expiry clock. The spreadsheet tracking them is out of date the day it’s saved, and the gap gets discovered the hard way: an unqualified operator, an invalidated insurance position, an audit finding.',
      solution: 'Q watches every clock. It flags expiring competencies weeks ahead, requests refresher bookings automatically, and — because it also sees sign-ins and permits — cross-checks that the people on today’s task actually hold today’s required tickets. The competency matrix stops being a document and becomes a live guarantee.'
    },
    how: [
      ['Q holds the matrix live', 'Every worker, every credential, every expiry — direct employees and subcontractor operatives alike.'],
      ['Q looks ahead', 'Expiries flagged 30+ days out, refreshers requested automatically, bookings tracked to completion.'],
      ['Q cross-checks reality', 'Sign-in data and permit requirements checked against live competencies. The gap is caught at the gate, not in the investigation.'],
      ['Q evidences it all', 'Training coverage per ISO clause, per client requirement, per site — ready for any audit or PQQ.']
    ],
    benefits: [
      ['🪪', 'No expired tickets on the tools', 'The cross-check between competency and actual work assignment is the control most systems are missing.'],
      ['📚', 'Renewals run themselves', 'Refresher chasing happens automatically, weeks ahead, every time.'],
      ['🧾', 'Instant evidence', 'Client asks for your training matrix? It’s current, by definition, today.']
    ],
    stats: [['1042', '', 'training records under live watch'], ['30', ' days', 'minimum advance expiry warning'], ['100', '%', 'of permits checked against tickets']],
    feed: [
      ['info', 'check', '1,042 training records scanned'],
      ['warn', '⚠', '6 CPCS cards expire this month'],
      ['warn', '⚠', 'PTW-204 requires confined-space — 1 gap'],
      ['ok', '✓', 'Refresher bookings requested']
    ],
    related: ['supply-chain', 'compliance', 'incident-triage']
  },
  {
    slug: 'environmental', n: '11', color: 'c-cyan', icon: '🌍',
    short: 'Q tracks your footprint',
    title: 'Q tracks your footprint',
    headline: 'Sustainability you can stand behind.',
    tagline: 'Environmental & carbon intelligence',
    card: 'Q pulls environmental data from across your projects — waste, water, energy, carbon — and turns it into sustainability reporting you can actually stand behind.',
    heroSub: 'Q aggregates the environmental data your sites already produce — waste transfers, energy use, water, fuel, site returns — and turns it into carbon and sustainability reporting that survives scrutiny.',
    useCase: {
      title: 'ESG reporting that isn’t an annual estimate',
      problem: 'The sustainability report is due, and the inputs are a folder of waste transfer notes, a stack of fuel receipts and a dozen site returns in different formats. The carbon number gets built once a year, by hand, with assumptions nobody can fully trace — exactly when clients and regulators are starting to check.',
      solution: 'Q builds the number continuously, from source. Site returns, waste documentation, energy and fuel data flow into one model as they’re logged. Anomalies — the site whose diesel use jumped 12% — surface in-month, when you can act, not in the annual write-up. And every figure in the report traces back to its source records.'
    },
    how: [
      ['Q aggregates from source', 'Waste, water, energy, fuel and materials data captured in normal site workflows — no separate ESG data collection exercise.'],
      ['Q normalises and converts', 'Units, emission factors and intensity metrics handled consistently across every site and reporting period.'],
      ['Q flags anomalies live', 'Consumption spikes and waste-stream changes surface when they happen — so they’re managed, not just reported.'],
      ['Q drafts the disclosure', 'Period reports with full traceability from headline number to source record — ready for clients, auditors and tenders.']
    ],
    benefits: [
      ['🌱', 'In-month, not year-end', 'Environmental performance becomes something you manage, not something you confess annually.'],
      ['🔗', 'Traceable to source', 'Every reported tonne and kilowatt links to its records. Greenwash-proof by construction.'],
      ['🏆', 'Tender-ready credentials', 'Live sustainability data is increasingly the differentiator in PQQs. You’ll have it.']
    ],
    stats: [['12', '%', 'anomalies like this caught in-month'], ['100', '%', 'of figures traceable to source'], ['1', '', 'continuous model — no annual scramble']],
    feed: [
      ['info', 'env', 'Aggregating Q2 site returns…'],
      ['warn', '⚠', 'Diesel use up 12% on Site 3'],
      ['info', '↳', 'Likely driver: generator runtime +40h'],
      ['ok', '✓', 'Carbon summary ready for review']
    ],
    related: ['board-reporting', 'compliance', 'ask-q']
  },
  {
    slug: 'board-reporting', n: '12', color: 'c-pink', icon: '📊',
    short: 'Q writes the board pack',
    title: 'Q writes the board pack',
    headline: 'The month’s story, told in minutes.',
    tagline: 'Automated performance reporting',
    card: 'Q compiles your monthly performance story — trends, leading indicators, the wins and the risks — in minutes, in your house style, ready for the boardroom.',
    heroSub: 'The monthly EHSQ report — trends, leading indicators, narrative and all — drafted by Q in minutes from live data, in your house style, ready for your review and the boardroom.',
    useCase: {
      title: 'Two days a month, returned to actual safety work',
      problem: 'Every month-end, your most senior EHSQ people stop doing safety and start doing PowerPoint: exporting charts, reconciling numbers, writing the same narrative structure around new data. Two days of expert time, twelve times a year, producing a document that’s out of date before it’s presented.',
      solution: 'Q drafts it. It compiles the month’s data into your report structure, generates the charts, writes the first-draft narrative — what improved, what deteriorated, what needs board attention — and flags the anomalies worth a human paragraph. You review, sharpen the judgement calls, and present. Two days becomes one hour.'
    },
    how: [
      ['Q compiles the month', 'Incidents, observations, actions, audits, training, environmental — aggregated and trended automatically at period end.'],
      ['Q writes the first draft', 'A narrative in your house structure: headline performance, movements, leading indicators, exceptions needing decision.'],
      ['You add the judgement', 'Q drafts; you decide. The expert’s hour goes on insight and recommendation, not chart formatting.'],
      ['The board gets better answers', 'Live-data appendices and Q’s ask-anything follow-up mean "good question, I’ll find out" becomes "here’s the answer."']
    ],
    benefits: [
      ['⏳', '2 days → 1 hour', 'Month-end reporting compressed to a review-and-approve task.'],
      ['📊', 'Consistent and current', 'Same structure every month, numbers from live data — comparable, trustworthy, never stale.'],
      ['🧠', 'Experts do expert work', 'Your most experienced people spend month-end on prevention strategy, not slide alignment.']
    ],
    stats: [['14', '', 'charts generated automatically'], ['1', ' hr', 'of human time per board pack'], ['12', '×', 'a year, every year, on time']],
    feed: [
      ['info', 'report', 'May EHSQ report drafted'],
      ['info', '↳', '14 charts, 6 insights, 3 alerts'],
      ['warn', '⚠', 'Flag: action closure dipped wk 3'],
      ['ok', '✓', 'Sent to Director for sign-off']
    ],
    related: ['ask-q', 'briefings', 'environmental']
  }
];
