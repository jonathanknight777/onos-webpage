// 18 platform modules. Copy improved from onos.app originals; each ties back to Onos Q.
export const PRODUCTS = [
  {
    slug: 'safety-observations', icon: '👁', name: 'Safety Observations',
    headline: 'Give every worker a voice that drives safety.',
    sub: 'The best safety insight comes from people on the tools, not people in the office. Onos makes reporting a hazard — or a good catch — as simple as scanning a QR code. Sixty seconds, no login, any language.',
    pains: [
      ['Reporting takes too long', 'When raising a hazard means finding a form, a pen and a site office, most hazards go unraised.'],
      ['Data arrives as fragments', 'Paper forms, WhatsApp photos and verbal reports can’t be trended, actioned or evidenced.'],
      ['Engagement is unmeasurable', 'Without participation data, you can’t see — or grow — your reporting culture.']
    ],
    features: [
      ['QR-code reporting', 'Scan, describe, photograph, submit — 60 seconds from hazard to logged report. No app install, no login, no friction.'],
      ['Supply chain included', 'Subcontractor workers report through the same QR codes — anonymously if they choose. 40% of observations come from the supply chain.'],
      ['Positive observations', 'Capture good practice alongside hazards. Recognition turns reporting into culture, not compliance.'],
      ['Instant routing', 'Every report notifies the right owner in real time, with closure tracked and the reporter informed when it’s fixed.']
    ],
    q: ['pattern-detection', 'Q reads every observation you capture — across all sites — and surfaces the clusters and trends no human reviewer could see. More reports stop being more noise.'],
    stats: [['60', 's', 'average report time'], ['400', '%', 'more observations captured'], ['40', '%', 'from supply chain workers']]
  },
  {
    slug: 'incident-management', icon: '🚨', name: 'Incident Management',
    headline: 'From the worst moment to the full picture.',
    sub: 'Capture incidents in seconds from any device, run structured investigations, meet every RIDDOR deadline, and turn each event into the lessons that prevent the next one.',
    pains: [
      ['Reporting under pressure', 'Critical details get lost when capturing an incident means paperwork in the middle of a crisis.'],
      ['Inconsistent investigations', 'Investigation quality varies wildly by investigator, workload and week.'],
      ['Deadlines at risk', 'RIDDOR clocks start at the incident, not when someone remembers to check reportability.']
    ],
    features: [
      ['60-second capture', 'Log what happened from a phone at the scene — photos, people, conditions — before details fade.'],
      ['Structured investigations', 'Root-cause frameworks, witness statements, evidence files and timelines in one defensible record.'],
      ['RIDDOR built in', 'Reportability assessment and statutory timelines tracked from the moment of logging.'],
      ['Lessons that travel', 'Findings convert to actions, alerts and toolbox content across every site — not a PDF nobody reopens.']
    ],
    q: ['incident-triage', 'The moment an incident is logged, Q assesses RIDDOR reportability, drafts the evidence checklist and scaffolds the investigation — so the first hour is handled right, every time.'],
    stats: [['60', 's', 'to capture from the scene'], ['100', '%', 'of statutory deadlines tracked'], ['1', '', 'defensible record per event']]
  },
  {
    slug: 'audits-inspections', icon: '✅', name: 'Audits & Inspections',
    headline: 'Every check, on schedule, with evidence.',
    sub: 'Build any audit or inspection as a smart digital form, schedule it across sites and assets, complete it offline on mobile, and watch findings become tracked actions automatically.',
    pains: [
      ['Paper checklists go nowhere', 'Completed inspections live in site cabinets — invisible, untrended, unactioned.'],
      ['Schedules slip silently', 'Missed statutory inspections surface at audit time, not when they’re recoverable.'],
      ['Findings die in reports', 'Issues found but never converted to owned, deadlined actions are issues kept.']
    ],
    features: [
      ['Any form, digitised', 'Drag-and-drop builder recreates your existing audit templates — scoring, logic, photo evidence and all.'],
      ['Scheduling & coverage', 'Recurring programmes per site, asset and standard, with overdue inspections visible at a glance.'],
      ['Offline mobile', 'Complete inspections in basements, tunnels and dead zones; sync when connectivity returns.'],
      ['Findings → actions', 'Every non-conformance becomes an owned action with a deadline, automatically.']
    ],
    q: ['compliance', 'Every completed audit feeds Q’s live ISO clause mapping — so each inspection quietly builds your permanent audit-readiness.'],
    stats: [['100', '%', 'schedule visibility'], ['0', '', 'findings lost to PDF graveyards'], ['30', ' min', 'to digitise an existing form']]
  },
  {
    slug: 'actions', icon: '📌', name: 'Actions Management',
    headline: 'The loop that actually closes.',
    sub: 'Every action from every source — audits, observations, incidents, RAMS reviews — in one tracked stream with owners, deadlines, evidence and escalation. Nothing depends on memory.',
    pains: [
      ['Actions scattered everywhere', 'Spreadsheets, emails and meeting minutes each hold a fraction of the real backlog.'],
      ['Ownership without follow-up', '"Assigned" isn’t "done" — and chasing is the job nobody owns.'],
      ['No proof of closure', 'Closed actions without evidence reopen as audit findings.']
    ],
    features: [
      ['One stream, every source', 'All corrective and preventive actions in a single view, whatever raised them.'],
      ['Owners, deadlines, evidence', 'Every action has an accountable owner, a due date and photographic proof of closure.'],
      ['Risk-based escalation', 'Slipping high-severity actions escalate automatically; admin noise doesn’t.'],
      ['Ageing analytics', 'Closure rates and ageing curves by site, owner and severity — the health of your safety system in one chart.']
    ],
    q: ['action-chasing', 'Q watches the whole backlog, nudges owners before deadlines slip, and escalates by risk — closing the loop becomes the default, not the exception.'],
    stats: [['94', '%', 'weekly closure rates achieved'], ['48', 'h', 'advance nudges before due'], ['1', '', 'stream for every action source']]
  },
  {
    slug: 'risk-management', icon: '⚠️', name: 'Risk Management',
    headline: 'A risk register that lives.',
    sub: 'Dynamic risk registers linked to the controls, inspections and actions that manage them — so your register reflects this week’s reality, not last year’s workshop.',
    pains: [
      ['Static registers', 'A risk register reviewed annually is a historical document, not a management tool.'],
      ['Controls unverified', 'Registers list controls; nothing confirms they’re actually in place and working.'],
      ['No line of sight', 'Leadership can’t connect the register to what’s happening on site today.']
    ],
    features: [
      ['Living registers', 'Risks linked to live data — incidents, observations and inspections update the picture continuously.'],
      ['Control verification', 'Each control ties to the inspections and actions that evidence it. Unverified controls are flagged.'],
      ['5×5 and custom matrices', 'Score risk your way, with consistent methodology enforced across every project.'],
      ['Escalation thresholds', 'Risks breaching tolerance trigger review workflows automatically.']
    ],
    q: ['risk-scoring', 'Q’s live Project Risk Scores sit on top of your registers — combining them with operational signals so leadership sees rising risk before it lands.'],
    stats: [['24', '/7', 'register currency'], ['100', '%', 'of controls traceable to evidence'], ['0', '', 'annual-workshop blind spots']]
  },
  {
    slug: 'permits', icon: '🔏', name: 'Permits to Work',
    headline: 'High-risk work, under control.',
    sub: 'Digital permits with built-in competency checks, conflict detection and live site-wide visibility — so hot works, confined spaces and work at height happen only when the controls are real.',
    pains: [
      ['Paper permits, real risks', 'A permit in a folder can’t check a ticket, spot a clash or alert anyone.'],
      ['Conflicting works', 'Hot works above, fuel storage below — paper systems find out afterwards.'],
      ['Expired and unsigned', 'Lapsed permits and missing authorisations surface in investigations, not in time.']
    ],
    features: [
      ['Smart issue workflow', 'Permit requests check requester competency, attached RAMS and required isolations before approval.'],
      ['Conflict detection', 'Overlapping high-risk activities in the same zone are flagged at request time.'],
      ['Live permit board', 'Every active permit on every site, visible in real time — with expiries counting down.'],
      ['Closure discipline', 'Permits close with confirmation of area handback; nothing stays silently open.']
    ],
    q: ['competency', 'Q cross-checks every permit against live competency records — the confined-space ticket gap is caught at issue, not in the enquiry.'],
    stats: [['100', '%', 'of permits competency-checked'], ['0', '', 'silent expiries'], ['1', '', 'live board across all sites']]
  },
  {
    slug: 'digital-inductions', icon: '🎬', name: 'Digital Inductions',
    headline: 'Inducted before they arrive.',
    sub: 'Workers complete site inductions on their own phone before day one — videos, assessments, declarations — so the first morning is spent working, not in a cabin watching a laptop.',
    pains: [
      ['First mornings lost', 'Every new starter costs an hour of supervision and a cabin full of waiting workers.'],
      ['Inconsistent delivery', 'Induction quality depends on who delivers it and how rushed the morning is.'],
      ['Unprovable attendance', 'Sign-here sheets prove presence, not understanding.']
    ],
    features: [
      ['Self-serve, pre-arrival', 'Induction link sent at booking; completed on any phone, in the worker’s language, before arrival.'],
      ['Comprehension checks', 'Built-in assessments evidence understanding, not just attendance.'],
      ['Site-specific content', 'Core content plus site-specific hazards, rules and emergency arrangements per location.'],
      ['Auto-linked to access', 'Sign-in checks induction status — nobody uninducted gets a badge.']
    ],
    q: ['competency', 'Induction records feed Q’s live competency picture, so site access, permits and training status stay one connected truth.'],
    stats: [['0', ' hrs', 'of cabin time per starter'], ['100', '%', 'comprehension-assessed'], ['1', ' link', 'from booking to site-ready']]
  },
  {
    slug: 'site-sign-in', icon: '📍', name: 'Site Sign-In',
    headline: 'Who’s on site. Always. Exactly.',
    sub: 'QR-code sign-in that checks induction, competency and fitness declarations on entry — and gives you a live, accurate fire register the moment you need one.',
    pains: [
      ['The book lies', 'Paper sign-in books are incomplete the moment someone forgets — which is daily.'],
      ['Checks happen never', 'A signature line can’t verify an induction or a CSCS card.'],
      ['Muster chaos', 'In a real evacuation, the register is the difference between order and panic.']
    ],
    features: [
      ['Scan and you’re in', 'Personal QR codes sign workers in and out in seconds — visitors included.'],
      ['Entry gating', 'Induction, competency and declaration checks run at the gate, automatically.'],
      ['Live fire register', 'Real-time on-site list on any supervisor’s phone, with muster checklists built in.'],
      ['Time on site analytics', 'Accurate presence data for fatigue, commercial and security questions alike.']
    ],
    q: ['briefings', 'Sign-in anomalies — unexpected absences, gate-check failures, unusual patterns — surface in Q’s morning briefings before they become questions.'],
    stats: [['90', '%+', 'field adoption — workers actually use it'], ['100', '%', 'accurate fire registers'], ['2', 's', 'to sign in at the gate']]
  },
  {
    slug: 'site-returns', icon: '📤', name: 'Site Returns',
    headline: 'Weekly returns without the chase.',
    sub: 'Labour, plant, progress, environmental data — collected from every site on schedule through simple mobile forms, validated on entry, aggregated automatically.',
    pains: [
      ['The Friday chase', 'Someone spends every Friday chasing sites for numbers that arrive late and wrong.'],
      ['Format anarchy', 'Each site returns its own spreadsheet dialect; aggregation is manual archaeology.'],
      ['Data too late to matter', 'By the time returns are compiled, the week they describe is history.']
    ],
    features: [
      ['Scheduled collection', 'Returns requested, reminded and escalated automatically — the chase runs itself.'],
      ['Validated at entry', 'Required fields, sane ranges and unit checks mean clean data at source.'],
      ['Instant aggregation', 'Portfolio rollups available the moment returns land — no compilation step.'],
      ['Any return type', 'Labour and plant, environmental, progress, community — one mechanism for every periodic return.']
    ],
    q: ['environmental', 'Site returns flow straight into Q’s environmental model — fuel, waste and energy data become live carbon intelligence instead of year-end archaeology.'],
    stats: [['0', '', 'Friday chasing hours'], ['100', '%', 'validated at source'], ['1', '', 'click to portfolio rollup']]
  },
  {
    slug: 'assets', icon: '🏗', name: 'Asset Management',
    headline: 'Every asset, inspected and accounted for.',
    sub: 'Plant, equipment and lifting gear with full inspection histories, statutory schedules and QR-tagged identities — so the question "is this safe to use?" always has a current answer.',
    pains: [
      ['Unknown inspection status', 'The grinder in the container — when was it last PAT tested? Nobody knows.'],
      ['Statutory schedules slip', 'LOLER and PUWER inspections tracked in spreadsheets miss quietly.'],
      ['Histories scattered', 'An asset’s story lives across suppliers, sites and filing cabinets.']
    ],
    features: [
      ['QR-tagged identity', 'Scan any asset for its full history, current status and next inspection due.'],
      ['Statutory scheduling', 'LOLER, PUWER, PAT and custom regimes tracked with advance warnings.'],
      ['Quarantine workflow', 'Failed items locked out digitally — visible to everyone before anyone plugs it in.'],
      ['Whole-life history', 'Inspections, defects, repairs and transfers in one timeline per asset.']
    ],
    q: ['briefings', 'Assets approaching statutory deadlines appear in Q’s briefings and chase cycles automatically — compliance without calendar-watching.'],
    stats: [['1', ' scan', 'to full asset history'], ['0', '', 'missed statutory inspections'], ['100', '%', 'quarantine visibility']]
  },
  {
    slug: 'environmental', icon: '🌍', name: 'Environmental',
    headline: 'Environmental performance, managed live.',
    sub: 'Waste, water, energy, emissions and incidents in one place — captured in normal site workflows, monitored continuously, and ready for every disclosure.',
    pains: [
      ['Year-end estimates', 'Carbon numbers built annually by hand, from receipts and guesswork.'],
      ['Untracked obligations', 'Permit conditions and consent limits monitored on goodwill.'],
      ['ESG without evidence', 'Sustainability claims that can’t trace to source records won’t survive scrutiny.']
    ],
    features: [
      ['Capture in the workflow', 'Waste transfers, fuel, water and energy logged as part of normal site routines.'],
      ['Consent & permit tracking', 'Discharge consents and environmental permits with limits, monitoring and alerts.'],
      ['Environmental incidents', 'Spills and exceedances managed with the same rigour as safety events.'],
      ['Disclosure-ready data', 'Carbon and sustainability reporting with every figure traceable to source.']
    ],
    q: ['environmental', 'Q aggregates it all continuously — flagging the diesel spike in-month and drafting the carbon summary with full traceability.'],
    stats: [['100', '%', 'figures traceable to source'], ['12', '%', 'anomalies caught in-month'], ['0', '', 'year-end scrambles']]
  },
  {
    slug: 'quality-management', icon: '💎', name: 'Quality Management',
    headline: 'Right first time, evidenced every time.',
    sub: 'ITPs, quality inspections, non-conformances and defects in one controlled system — so quality is built in during the work, not discovered after handover.',
    pains: [
      ['NCRs in email threads', 'Non-conformances raised informally disappear without root cause or closure.'],
      ['Hold points on trust', 'Witness and hold points tracked in programmes nobody checks daily.'],
      ['Handover scramble', 'Quality records assembled retrospectively cost weeks at completion.']
    ],
    features: [
      ['Digital ITPs', 'Inspection and test plans with hold points, witness requirements and sign-off workflows.'],
      ['NCR lifecycle', 'Non-conformances from identification through root cause to verified closure.'],
      ['Defect management', 'Snagging with photos, locations, owners and deadlines — tracked to zero.'],
      ['Handover by default', 'Quality records accumulate as work proceeds; completion packs generate themselves.']
    ],
    q: ['compliance', 'Quality records feed Q’s ISO 9001 clause mapping continuously — your QMS stays audit-ready as a side effect of normal work.'],
    stats: [['0', ' wks', 'of handover record assembly'], ['100', '%', 'NCRs tracked to closure'], ['9001', '', 'evidenced continuously']]
  },
  {
    slug: 'supply-chain', icon: '🔗', name: 'Supply Chain',
    headline: 'Your standards, their compliance, one system.',
    sub: 'Onboard, prequalify and continuously verify every subcontractor — insurances, accreditations, RAMS and competencies — with the chasing done automatically.',
    pains: [
      ['Prequalification theatre', 'A PQQ snapshot from eighteen months ago says nothing about today.'],
      ['Expiry roulette', 'Insurance lapses discovered when the claim arrives.'],
      ['Document email chaos', 'RAMS and certificates scattered across inboxes and shared drives.']
    ],
    features: [
      ['Self-serve onboarding', 'Subcontractors upload and maintain their own credentials through a portal.'],
      ['Continuous verification', 'Live red-amber-green compliance per contractor, not annual snapshots.'],
      ['Automated chasing', 'Expiry reminders at 30/14/7 days, escalating automatically.'],
      ['Linked to access & award', 'Procurement and site sign-in both see live status before commitment.']
    ],
    q: ['supply-chain', 'Q owns the whole loop — watching expiries, verifying renewals, gating access — so non-compliant contractors never reach your gates.'],
    stats: [['86', '', 'subcontractors verified live'], ['30', ' days', 'advance expiry warning'], ['0', '', 'gate surprises']]
  },
  {
    slug: 'training', icon: '🎓', name: 'Training Management',
    headline: 'The competency matrix that maintains itself.',
    sub: 'Every ticket, card and certificate across your workforce in one live matrix — with expiries flagged ahead, refreshers chased automatically, and evidence ready for any audit.',
    pains: [
      ['Spreadsheet decay', 'The training matrix is out of date the day it’s saved.'],
      ['Expiry surprises', 'Lapsed tickets discovered at the gate, the audit or the incident.'],
      ['Evidence hunts', 'Client asks for the matrix; someone loses a day building it.']
    ],
    features: [
      ['Live matrix', 'Direct workforce and subcontractor operatives in one current competency picture.'],
      ['Expiry horizon', 'Everything expiring in the next 90 days, visible and chased automatically.'],
      ['Booking workflow', 'Refresher requests, approvals and completions tracked end to end.'],
      ['Role requirements', 'Define what each role needs; gaps against requirements surface themselves.']
    ],
    q: ['competency', 'Q cross-references the matrix against actual work — sign-ins, permits, tasks — so the right ticket is on the right person for the right job, verifiably.'],
    stats: [['1042', '', 'records under live watch'], ['90', ' days', 'expiry horizon always visible'], ['0', ' days', 'lost to evidence hunts']]
  },
  {
    slug: 'dashboard-reporting', icon: '📊', name: 'Dashboards & Reporting',
    headline: 'One screen. The whole truth.',
    sub: 'Live dashboards across every module, site and KPI — with scheduled reports, client portals and export anywhere. The data is always this morning’s, never last month’s.',
    pains: [
      ['Report lag', 'Decisions made on data that was true three weeks ago.'],
      ['Excel as middleware', 'Every report means exports, pivots and copy-paste errors.'],
      ['One-size-fits-nobody', 'The site manager and the CEO need different views of the same truth.']
    ],
    features: [
      ['Live, role-based dashboards', 'Each audience gets its own view — site, project, portfolio, board.'],
      ['Scheduled distribution', 'The Monday report sends itself, with current numbers, every Monday.'],
      ['Client visibility', 'Secure portals give clients exactly the slice you choose to share.'],
      ['Export & API', 'Everything exportable; everything available to your BI stack.']
    ],
    q: ['ask-q', 'Dashboards answer the questions you predicted. Q answers the ones you didn’t — in plain English, from the same live data, with sources cited.'],
    stats: [['0', ' days', 'of reporting lag'], ['100', '%', 'live, role-based views'], ['50000', '+', 'reports filed on Onos']]
  },
  {
    slug: 'performance', icon: '📈', name: 'Performance',
    headline: 'Leading indicators, leading decisions.',
    sub: 'Track the metrics that predict outcomes — participation, closure rates, inspection coverage — alongside the lagging ones regulators require. Manage causes, not just consequences.',
    pains: [
      ['Lagging-only vision', 'LTIFR tells you about last year. It can’t protect next week.'],
      ['KPIs without context', 'Numbers with no benchmark, trend or target are decoration.'],
      ['Site-vs-site opacity', 'Without comparable metrics, best practice stays trapped where it started.']
    ],
    features: [
      ['Leading indicator suite', 'Observation rates, action closure, inspection coverage, engagement — trended and targeted.'],
      ['Benchmarking', 'Compare sites, regions and periods on a consistent basis; find and spread what works.'],
      ['Target & threshold alerts', 'Drifting metrics raise their hands before review meetings find them.'],
      ['Regulatory metrics included', 'AFR, LTIFR, RIDDOR rates — calculated correctly, automatically.']
    ],
    q: ['risk-scoring', 'Q’s Project Risk Scores synthesise your leading indicators into a single live signal per project — performance management with foresight built in.'],
    stats: [['10', '+', 'leading indicators trended'], ['100', '%', 'consistent cross-site comparison'], ['0', '', 'metrics compiled by hand']]
  },
  {
    slug: 'safety-talks', icon: '🗣', name: 'Safety Talks',
    headline: 'Toolbox talks that actually land.',
    sub: 'Deliver, record and evidence toolbox talks and briefings — with attendance captured digitally, comprehension checked, and content targeted to what your data says crews actually need.',
    pains: [
      ['Sign-and-forget', 'A signature sheet proves a talk happened, not that anything landed.'],
      ['Generic content', 'The same laminated talk, regardless of what’s actually going wrong on site.'],
      ['Evidence gaps', 'Proving briefing coverage across a workforce takes days of collation.']
    ],
    features: [
      ['Digital delivery & capture', 'Run talks from a phone or tablet; attendance recorded by QR scan.'],
      ['Comprehension checks', 'Quick assessments evidence understanding, flagging where the message missed.'],
      ['Data-driven topics', 'Talk content suggested from your live observation and incident trends.'],
      ['Coverage tracking', 'Who’s been briefed on what, across every crew and subcontractor — instantly.']
    ],
    q: ['pattern-detection', 'Q’s pattern reports tell you what this week’s talk should be about — the manual-handling cluster on night shift, not a generic slip-trips refresher.'],
    stats: [['100', '%', 'attendance evidenced digitally'], ['0', ' days', 'of collation for coverage proof'], ['1', '', 'talk targeted per live trend']]
  },
  {
    slug: 'document-manager', icon: '📁', name: 'Document Manager',
    headline: 'One source of truth, version-controlled.',
    sub: 'Policies, procedures, RAMS, drawings and certificates with version control, controlled distribution and read-acknowledgement — so the current document is the only one in circulation.',
    pains: [
      ['Version chaos', 'Rev C on site, Rev E in the office, Rev D in someone’s inbox.'],
      ['Unacknowledged updates', 'The procedure changed; who actually read it is anybody’s guess.'],
      ['Findable by folklore', 'Documents located by asking the person who’s been there longest.']
    ],
    features: [
      ['Version control', 'One current version, full history, superseded copies automatically withdrawn.'],
      ['Controlled distribution', 'Documents pushed to the roles and sites that need them — and only the current rev.'],
      ['Read & understood', 'Acknowledgement tracking turns "we issued it" into "they’ve read it."'],
      ['Linked everywhere', 'Documents attach to permits, inductions, audits and assets — context included.']
    ],
    q: ['rams-review', 'Documents don’t just get stored — Q reads them. RAMS arriving through Onos get a structured first review in minutes, gaps flagged before a human opens page one.'],
    stats: [['1', '', 'current version, always'], ['100', '%', 'read-acknowledgement visibility'], ['0', '', 'documents found by folklore']]
  }
];
