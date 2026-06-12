// 6 industry verticals from the original site, recast in the new voice.
export const INDUSTRIES = [
  {
    slug: 'construction', icon: '🏗', name: 'Construction',
    headline: 'Built for the way construction actually works.',
    sub: 'Multiple sites, layered subcontractors, CDM 2015, RIDDOR, and a workforce that changes weekly. Onos was shaped on construction sites — QR-first, offline-capable, supply-chain-deep.',
    pains: [
      ['Fragmented data', 'Information scattered across emails, forms, spreadsheets and legacy platforms — no single picture of any project.'],
      ['Admin over risk', 'Site teams spend their hours on paperwork instead of managing the work front.'],
      ['Supply chain opacity', 'Most of the workforce — and most of the risk — belongs to subcontractors you can’t see into.'],
      ['Reactive safety', 'Early warnings buried in unread observations until the incident report explains them in hindsight.']
    ],
    solutions: [
      'QR-code observations, sign-in and inductions that 90%+ of field workers actually use',
      'Permits with competency checks and conflict detection across live work fronts',
      'Subcontractor compliance — insurances, RAMS, tickets — verified continuously, chased automatically',
      'CDM 2015 and RIDDOR evidence built as a by-product of normal work'
    ],
    q: 'Q reads every observation across every site and subcontractor, scores each project’s live risk, reviews incoming RAMS in minutes and briefs your leads each morning — the intelligence layer a principal contractor has never had.',
    modules: ['safety-observations', 'permits', 'supply-chain', 'site-sign-in', 'digital-inductions', 'incident-management']
  },
  {
    slug: 'manufacturing', icon: '🏭', name: 'Manufacturing',
    headline: 'Safety and quality, on the same line.',
    sub: 'Shift patterns, machinery, LOTO, COSHH and quality systems that live or die by discipline. Onos unifies EHS and quality so the factory runs one system, not five.',
    pains: [
      ['EHS and quality in silos', 'Two systems, two cultures, one production line — and findings that never meet.'],
      ['Shift handover gaps', 'What nights discovered, days never hears about.'],
      ['Machine-level blind spots', 'Inspection and maintenance histories scattered per asset and era.'],
      ['Audit fatigue', 'ISO 45001, 14001 and 9001 audits each trigger their own evidence hunt.']
    ],
    solutions: [
      'One platform for incidents, near-misses, NCRs, audits and asset inspections',
      'Shift-aware observation and handover flows that survive the 6am change',
      'QR-tagged assets with statutory and preventive schedules per machine',
      'Continuous ISO clause mapping across all three standards at once'
    ],
    q: 'Q spots the pattern across shifts that no single supervisor sees, keeps your three-standard ISO posture audit-ready continuously, and briefs each shift lead on what the last shift left behind.',
    modules: ['quality-management', 'assets', 'audits-inspections', 'incident-management', 'training', 'environmental']
  },
  {
    slug: 'logistics-warehousing', icon: '🚛', name: 'Logistics & Warehousing',
    headline: 'Fast-moving sites need faster safety.',
    sub: 'MHE and pedestrians in shared space, agency workers arriving daily, racking inspections, and customer audits on no notice. Onos keeps pace with the dock.',
    pains: [
      ['Transient workforce', 'Agency staff start at 6am; induction and competency checks can’t take until 9.'],
      ['MHE–pedestrian interface', 'The highest-consequence risk in the building, managed by paint and hope.'],
      ['Racking & equipment regimes', 'Statutory and manufacturer inspection schedules tracked in spreadsheets.'],
      ['Customer audit pressure', 'Major customers audit at will; evidence must be producible same-day.']
    ],
    solutions: [
      'Pre-arrival digital inductions and instant QR sign-in for agency workers',
      'Near-miss and observation capture fast enough for warehouse pace — 60 seconds, no login',
      'Asset and racking inspection schedules with automatic escalation',
      'Customer-ready compliance evidence, generated on demand'
    ],
    q: 'Q watches the leading indicators per shed and shift, flags the MHE near-miss cluster before it becomes a strike, and keeps every inspection regime chased without a single spreadsheet.',
    modules: ['site-sign-in', 'digital-inductions', 'safety-observations', 'assets', 'audits-inspections', 'actions']
  },
  {
    slug: 'oil-gas', icon: '🛢', name: 'Oil & Gas',
    headline: 'High-hazard discipline, digital backbone.',
    sub: 'Permit-to-work as a way of life, process safety alongside personal safety, remote sites with no signal, and regulators who expect everything evidenced. Onos holds the line.',
    pains: [
      ['Permit complexity', 'Multiple concurrent high-energy permits with isolations, gas tests and handovers — on paper.'],
      ['Process vs personal safety', 'Barrier health and process indicators tracked separately from the safety system.'],
      ['Remote, offline operations', 'Platforms and remote pads where "cloud-only" software simply stops.'],
      ['Regulatory weight', 'COMAH/Seveso-grade evidence expectations on every record.']
    ],
    solutions: [
      'Digital permit-to-work with isolation management, gas test logging and shift handover',
      'Full offline operation with automatic sync when connectivity returns',
      'Barrier and critical-control verification linked to inspections and actions',
      'Defensible, timestamped evidence chains on every safety-critical record'
    ],
    q: 'Q monitors permit conflicts and barrier verification status continuously, triages process safety events with the rigour regulators expect, and gives leadership a live risk picture across every remote asset.',
    modules: ['permits', 'risk-management', 'audits-inspections', 'incident-management', 'assets', 'document-manager']
  },
  {
    slug: 'pharmaceutical', icon: '💊', name: 'Pharmaceutical',
    headline: 'EHS rigour to match your GxP rigour.',
    sub: 'You already run validated systems for product quality. Onos brings the same discipline to EHS — containment, COSHH, environmental monitoring and audit trails that satisfy quality teams.',
    pains: [
      ['Quality–EHS divide', 'World-class GxP discipline next to spreadsheet-grade safety management.'],
      ['Containment & COSHH load', 'High-potency compounds demand exposure control evidence at scale.'],
      ['Change control friction', 'EHS implications of changes assessed informally, evidenced inconsistently.'],
      ['Inspection readiness', 'HSE and environmental regulators expect the same readiness your quality systems show.']
    ],
    solutions: [
      'COSHH assessments, exposure monitoring and containment verification in one system',
      'Audit trails and access controls that pass quality-team scrutiny',
      'Environmental monitoring with consent limits and automatic exceedance alerts',
      'EHS review embedded in change and deviation workflows'
    ],
    q: 'Q keeps your EHS evidence as inspection-ready as your batch records, maps compliance continuously across 45001 and 14001, and surfaces exposure or environmental anomalies the day they appear.',
    modules: ['risk-management', 'environmental', 'audits-inspections', 'training', 'document-manager', 'quality-management']
  },
  {
    slug: 'events-facilities', icon: '🎪', name: 'Events & Facilities',
    headline: 'Many venues. Many contractors. One standard.',
    sub: 'Build-ups and break-downs on brutal timelines, contractor-heavy operations, public-facing risk and venues that change weekly. Onos keeps every site to the same standard.',
    pains: [
      ['Compressed timelines', 'Three days to build what construction would programme over months.'],
      ['Contractor-dominated work', 'Almost everyone on site works for someone else.'],
      ['Public interface', 'The risk profile includes thousands of people who never signed anything.'],
      ['Multi-venue consistency', 'Every venue does it differently unless the system makes consistency easy.']
    ],
    solutions: [
      'Rapid contractor onboarding — inductions and competency checks before arrival',
      'Live sign-in and accurate occupancy across build, show and break phases',
      'Standardised inspections and permits deployed identically at every venue',
      'Incident and near-miss capture fast enough for show-day pace'
    ],
    q: 'Q verifies every contractor’s compliance before the build starts, watches observation patterns across venues, and gives event leadership a single live risk picture from load-in to load-out.',
    modules: ['supply-chain', 'site-sign-in', 'digital-inductions', 'permits', 'safety-observations', 'incident-management']
  }
];
