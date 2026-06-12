import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPERPOWERS } from './data/superpowers.mjs';
import { PRODUCTS } from './data/products.mjs';
import { INDUSTRIES } from './data/industries.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DEMO = 'https://cal.com/onostech/web-intro';
// Bump on any assets/site.css|js change — busts browser caches on rebuild.
const ASSET_V = '9';

const sp = slug => SUPERPOWERS.find(s => s.slug === slug);
const prod = slug => PRODUCTS.find(p => p.slug === slug);

/* ---------------- layout ---------------- */
function nav(p, active) {
  const links = [
    ['Onos Q', `${p}q/index.html`, 'q'],
    ['Platform', `${p}platform.html`, 'platform'],
    ['Industries', `${p}industries.html`, 'industries'],
    ['Why Onos', `${p}why-onos.html`, 'why'],
    ['FAQ', `${p}faq.html`, 'faq'],
    ['Contact', `${p}contact.html`, 'contact'],
  ];
  return `<nav class="site-nav" id="nav">
  <a class="logo" href="${p}index.html"><span class="logo-dot"></span>onos</a>
  <div class="nav-links">
    ${links.map(([t, h, k]) => `<a href="${h}"${k === active ? ' class="active"' : ''}>${t}</a>`).join('\n    ')}
    <a href="${DEMO}" class="btn btn-primary">Book a Demo <span class="arrow">→</span></a>
  </div>
</nav>`;
}

function footer(p) {
  const col = (title, items) => `<div><h4>${title}</h4><ul>${items.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a class="logo" href="${p}index.html" style="font-size:22px"><span class="logo-dot"></span>onos</a>
      <p>The single platform for safety, sustainability &amp; compliance — powered by Onos Q. Proudly built in Belfast, Northern Ireland.</p>
    </div>
    ${col('Onos Q', SUPERPOWERS.slice(0, 6).map(s => [s.short, `${p}q/${s.slug}.html`]).concat([['All 12 superpowers', `${p}q/index.html`]]))}
    ${col('Platform', PRODUCTS.slice(0, 6).map(x => [x.name, `${p}products/${x.slug}.html`]).concat([['All 18 modules', `${p}platform.html`]]))}
    ${col('Industries', INDUSTRIES.map(i => [i.name, `${p}industries/${i.slug}.html`]))}
    ${col('Company', [['Why Onos', `${p}why-onos.html`], ['Resources', `${p}resources.html`], ['Security & Compliance', `${p}security-compliance.html`], ['FAQ', `${p}faq.html`], ['Contact', `${p}contact.html`], ['LinkedIn', 'https://www.linkedin.com/company/onostech']])}
  </div>
  <div class="footer-bottom">
    <div>© 2026 Onos. Built so everyone goes home.</div>
    <div class="legal"><a href="${p}security-compliance.html">ISO 27001</a><a href="#">Privacy</a><a href="#">Cookies</a><a href="#">Terms</a></div>
  </div>
</footer>`;
}

function layout({ depth = 0, title, desc, active = '', body, landing = false }) {
  const p = depth ? '../' : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}assets/site.css?v=${ASSET_V}">
</head>
<body>
<div class="cursor-glow" id="cursorGlow"></div>
<div class="scroll-progress" id="scrollProgress"></div>
${nav(p, active)}
${body}
${landing ? '' : trustStrip(p)}
${footer(p)}
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"></script>
<script src="${p}assets/site.js?v=${ASSET_V}"></script>
</body>
</html>`;
}

/* ---------------- shared fragments ---------------- */
const feedHtml = (lines, lg = false) => `<div class="q-feed${lg ? ' lg' : ''}">${lines.map(([cls, pre, txt]) => `<span class="ln"><span class="${cls}">${pre}</span> ${txt}</span>`).join('')}</div>`;

function qCard(s, p, { feed = true } = {}) {
  return `<div class="q-card ${s.color}">
  <div class="q-icon">${s.icon}</div>
  <div class="q-tag">Superpower ${s.n} — ${s.tagline}</div>
  <h3><span class="q-name">Q</span>${s.short.slice(1)}</h3>
  <p>${s.card}</p>
  ${feed ? feedHtml(s.feed.slice(0, 3)) : ''}
  <a class="more" href="${p}q/${s.slug}.html">Explore this superpower <span class="arrow">→</span></a>
</div>`;
}

const LOGO_FILES = ['graham', 'mcavoy', 'almac', 'kilwaughter', 'crown', 'neilcott', 'bretland', 'irwin', 'floorform', 'msm', 'suir', 'mowlem', 'martin'];
function trustStrip(p) {
  const half = LOGO_FILES.map(l => `<span class="tl"><img src="${p}assets/img/logos/${l}.png" alt="${l}" loading="lazy"></span>`).join('');
  return `<section class="trust-strip">
  <div class="label">Trusted by the teams that build, make and move the UK &amp; Ireland</div>
  <div class="marquee" style="--marq-speed:38s">
    <div class="marquee-inner"><div class="m-half trust-logos">${half}</div><div class="m-half trust-logos">${half}</div></div>
  </div>
</section>`;
}

const ctaBox = (h, sub, note) => `<section class="cta">
  <div class="cta-box reveal">
    <h2>${h}</h2>
    <p>${sub}</p>
    <div class="cta-ctas">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>Book a Demo <span class="arrow">→</span></a>
      <a href="mailto:hi@onos.app" class="btn btn-ghost" data-magnetic>Talk to our team</a>
    </div>
    <div class="cta-note">${note}</div>
  </div>
</section>`;

const pageHero = (p, crumbs, h1, sub, ctas = true, img = null) => `<section class="page-hero${img ? ' has-photo' : ''}">
  <div class="container">
    <div>
      <div class="breadcrumbs">${crumbs.map(([t, h]) => h ? `<a href="${h}">${t}</a>` : `<span class="here">${t}</span>`).join('<span class="sep">/</span>')}</div>
      <h1>${h1}</h1>
      <p class="hero-sub" style="margin-top:26px">${sub}</p>
      ${ctas ? `<div class="hero-ctas"><a href="${DEMO}" class="btn btn-primary" data-magnetic>Book a Demo <span class="arrow">→</span></a></div>` : ''}
    </div>
    ${img ? `<div class="hero-photo"><img src="${p}assets/img/${img.src}" alt="${img.alt}" loading="lazy"><span class="ph-tag">${img.tag}</span></div>` : ''}
  </div>
</section>`;

const imgBand = (p, src, quote, cap) => `<section class="img-band">
  <img src="${p}assets/img/${src}" alt="" loading="lazy">
  <div class="band-inner">
    <div class="band-quote">${quote}</div>
    <div class="band-cap">${cap}</div>
  </div>
</section>`;

const appShot = (p) => `<div class="app-shot">
  <div class="as-bar"><span></span><span></span><span></span></div>
  <img src="${p}assets/img/app-dashboard.png" alt="The Onos dashboard" loading="lazy">
</div>`;

// Rotating site-photography pool for page heroes.
const PHOTOS = ['safety-worker-tablet.jpg', 'compliance-audit.jpg', 'worker-onboarding.jpg', 'industrial-site-overview.jpg', 'safety-team-meeting.jpg', 'ehsq-director-construction-site.jpg'];
const INDUSTRY_IMG = {
  construction: 'hero-bg-construction.jpg',
  manufacturing: 'industrial-site-overview.jpg',
  'logistics-warehousing': 'safety-worker-tablet.jpg',
  'oil-gas': 'industrial-site-overview.jpg',
  pharmaceutical: 'compliance-audit.jpg',
  'events-facilities': 'safety-team-meeting.jpg'
};

/* ---------------- landing page ---------------- */
function landingPage() {
  const p = '';
  const pillRow = (mods) => mods.map(m => `<a class="module-pill" href="products/${m.slug}.html"><span class="dot"></span>${m.name}</a>`).join('');
  const featured = ['safety-observations', 'incident-management', 'permits', 'supply-chain', 'audits-inspections', 'dashboard-reporting'].map(prod);
  const body = `
<section class="hero">
  <canvas id="neural-canvas"></canvas>
  <div class="hero-inner">
    <div class="hero-eyebrow reveal"><span class="live-dot"></span> Onos Q inside — twelve superpowers</div>
    <h1>
      <span class="line"><span>The EHSQ</span></span>
      <span class="line"><span><span class="grad-text">intelligence</span> platform.</span></span>
    </h1>
    <p class="hero-sub reveal">Other platforms store your safety data. Onos <strong>understands</strong> it. Safety, sustainability, quality and compliance on one platform — with <strong>Onos Q</strong> reading every record, scoring every risk and briefing every leader. Built so everyone goes home.</p>
    <div class="hero-ctas reveal">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>See Q in action <span class="arrow">→</span></a>
      <a href="q/index.html" class="btn btn-ghost" data-magnetic>Meet Onos Q</a>
    </div>
    <div class="hero-ticker reveal">
      <div class="tick"><div class="num"><em data-count="90" data-suffix="%+">0</em></div><div class="lbl">Field adoption</div></div>
      <div class="tick"><div class="num"><em data-count="18" data-suffix="">0</em></div><div class="lbl">Unified modules</div></div>
      <div class="tick"><div class="num"><em data-count="12" data-suffix="">0</em></div><div class="lbl">Q superpowers</div></div>
      <div class="tick"><div class="num"><em data-count="24" data-suffix="/7">0</em></div><div class="lbl">On watch</div></div>
    </div>
  </div>
  <div class="scroll-hint"><div class="wheel"></div>Scroll</div>
</section>

${trustStrip(p)}

<section class="problem section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The status quo is broken</div>
    <h2 class="reveal">Safety data everywhere.<br>Insight nowhere.</h2>
    <p class="section-sub reveal">EHSQ teams drown in spreadsheets, siloed systems and reactive firefighting — while the signals that predict the next incident sit unread.</p>
    <div class="problem-grid">
      <div class="problem-card reveal"><div class="stat">9–24<span style="font-size:24px">mo</span></div><h3>Enterprise rollouts that never land</h3><p>Legacy EHS systems take up to two years to implement — and field teams still won't use them.</p></div>
      <div class="problem-card reveal"><div class="stat">20+<span style="font-size:24px">hrs</span></div><h3>Lost to admin every week</h3><p>Copying data between spreadsheets, chasing actions and compiling board packs by hand.</p></div>
      <div class="problem-card reveal"><div class="stat">80<span style="font-size:24px">%</span></div><h3>Of warning signs go unseen</h3><p>The patterns that precede serious incidents are buried in observations nobody has time to analyse.</p></div>
    </div>
  </div>
</section>

<section class="statement">
  <p>What if your safety platform didn't just store data — what if it read every observation, scored every risk, and briefed your team before the day began?</p>
</section>

<section class="q-wrap" id="onos-q">
  <div class="q-head">
    <div class="container">
      <div class="q-badge reveal-l"><div class="q-mark">Q</div><div class="eyebrow" style="margin:0">Onos Intelligence</div></div>
      <h2 class="reveal">Meet <span class="grad-text">Onos Q.</span><br>One intelligence. Twelve superpowers.</h2>
      <p class="section-sub reveal">Not a dozen bolted-on bots — one intelligence woven through every module, seeing your whole operation at once. Here's what Q does for your team, around the clock.</p>
    </div>
  </div>
  <div class="q-track-outer" id="qTrackOuter">
    <div class="q-track" id="qTrack">
      ${SUPERPOWERS.map(s => qCard(s, p)).join('\n      ')}
    </div>
  </div>
  <div class="track-progress-wrap">
    <div class="track-progress"><div class="fill" id="trackFill"></div></div>
  </div>
</section>

<section class="pillars section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Why intelligence changes everything</div>
    <h2 class="reveal">Capture everything.<br>Understand everything.<br>Prove everything.</h2>
    <p class="section-sub reveal">Most EHSQ software solves one of these. The value is in all three working as one loop — the field feeds the intelligence, the intelligence drives the action, the action becomes the evidence.</p>
    <div class="loop-flow reveal">
      <span class="lf">Field data</span><span class="lf-arrow">→</span>
      <span class="lf hl">Q understands</span><span class="lf-arrow">→</span>
      <span class="lf">Action</span><span class="lf-arrow">→</span>
      <span class="lf">Evidence</span><span class="lf-arrow loop">↺</span>
    </div>
    <div class="card-grid pillar-grid">
      <div class="pillar c-onos">
        <div class="p-line"></div><div class="ghost">01</div>
        <div class="p-icon">📲</div>
        <div class="ph">01 — Capture</div>
        <h3>Tools the field actually uses</h3>
        <p>QR-code observations, sign-in, inductions and incident capture in 60 seconds, any language, no login, fully offline. When reporting is effortless, you finally see what's really happening — including from the 40% of your workforce employed by subcontractors.</p>
        <div class="p-stat"><span data-count="400" data-suffix="%">0</span></div>
        <div class="p-stat-cap">more observations captured vs. paper</div>
      </div>
      <div class="pillar c-cyan">
        <div class="p-line"></div><div class="ghost">02</div>
        <div class="p-icon">🧠</div>
        <div class="ph">02 — Understand</div>
        <h3>Q reads what nobody has time to</h3>
        <p>Every record feeds one intelligence. Q connects observations into patterns, conditions into risk scores, documents into reviewed decisions — and tells the right person before the incident, not after it. That's the difference between a database and a platform that thinks.</p>
        <div class="p-stat"><span data-count="12">0</span></div>
        <div class="p-stat-cap">superpowers working around the clock</div>
      </div>
      <div class="pillar c-teal">
        <div class="p-line"></div><div class="ghost">03</div>
        <div class="p-icon">🛡️</div>
        <div class="ph">03 — Prove</div>
        <h3>Evidence as a by-product</h3>
        <p>Every action, inspection and approval builds your audit trail automatically — mapped live against ISO 45001, 14001 and 9001, ready for any regulator, client or certification body. Audit-readiness stops being a project and becomes a property of the system.</p>
        <div class="p-stat"><span data-count="96" data-suffix="%">0</span></div>
        <div class="p-stat-cap">live ISO clause coverage, visible daily</div>
      </div>
    </div>
  </div>
</section>

${imgBand(p, 'hero-bg-construction.jpg', 'Real sites. Real workers.<br><span class="grad-text">Real adoption.</span>', '90%+ field adoption across the UK & Ireland')}

<section class="day section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">A day with Q</div>
    <h2 class="reveal">Your team's day,<br>transformed.</h2>
    <div class="timeline" id="timeline">
      <div class="spine-fill" id="spineFill"></div>
      <div class="t-item"><div class="t-content reveal"><h3>Q's briefing is waiting</h3><p>Every project lead opens a prioritised digest of what matters today — no spreadsheet archaeology required.</p></div><div class="t-dot"></div><div class="t-time">06:00</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Workers sign in with a QR code</h3><p>Inductions verified, competencies checked, permits live. The field experience that drives 90%+ adoption.</p></div><div class="t-dot"></div><div class="t-time">07:30</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Q connects the dots</h3><p>Three unrelated observations become one warning. The supervisor acts before anyone gets hurt.</p></div><div class="t-dot"></div><div class="t-time">10:15</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Q reviews RAMS in minutes</h3><p>A subcontractor's method statement arrives and is assessed before lunch — with the missing rescue plan flagged.</p></div><div class="t-dot"></div><div class="t-time">12:40</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Leadership sees risk moving</h3><p>Q flags a rising risk score on one project. The conversation happens this week — not at the next quarterly review.</p></div><div class="t-dot"></div><div class="t-time">16:00</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Everyone goes home</h3><p>And Q keeps watch overnight, ready to brief tomorrow's shift.</p></div><div class="t-dot"></div><div class="t-time">18:00</div></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">Value for the whole organisation</div>
    <h2 class="reveal">Everyone gets something back.</h2>
    <p class="section-sub reveal">A safety platform only works if every layer of the business wins from using it. Here's what each one gets.</p>
    <div class="card-grid stagger-grid">
      <div class="role-card c-onos">
        <div class="r-icon">🦺</div>
        <div class="who">For field teams</div>
        <h3>Safety without the friction</h3>
        <ul class="check-list">
          <li><strong>60-second reporting</strong> — scan a QR code, speak or type, done</li>
          <li><strong>Their own language</strong> — report and get inducted in it</li>
          <li><strong>No logins, no apps</strong> to install, works offline underground</li>
          <li><strong>Closed loops</strong> — they hear back when their report gets fixed</li>
        </ul>
        <div class="r-foot"><span class="v" data-count="90" data-suffix="%+">0</span><span class="k">field adoption — because it respects their time</span></div>
      </div>
      <div class="role-card c-cyan">
        <div class="r-icon">📋</div>
        <div class="who">For EHSQ professionals</div>
        <h3>The job you actually trained for</h3>
        <ul class="check-list">
          <li><strong>Q does the reading</strong> — every observation, every RAMS, every record</li>
          <li><strong>Action chasing runs itself</strong>, escalating by risk, not by memory</li>
          <li><strong>Evidence assembles itself</strong> — audits stop being archaeology</li>
          <li>Your expertise goes on <strong>prevention</strong>, not paperwork</li>
        </ul>
        <div class="r-foot"><span class="v" data-count="20" data-suffix="+hrs">0</span><span class="k">handed back every week, per professional</span></div>
      </div>
      <div class="role-card c-teal">
        <div class="r-icon">📈</div>
        <div class="who">For executives &amp; boards</div>
        <h3>Certainty you can stand behind</h3>
        <ul class="check-list">
          <li><strong>Live risk scores</strong> per project — see exposure moving, today</li>
          <li><strong>One source of truth</strong> across every site, region and contractor</li>
          <li><strong>Defensible compliance</strong> — ISO-mapped, traceable, current</li>
          <li>Fewer incidents, lower premiums, <strong>stronger tenders</strong></li>
        </ul>
        <div class="r-foot"><span class="v">24/7</span><span class="k">live risk picture, board packs drafted by Q</span></div>
      </div>
    </div>
  </div>
</section>

<section class="numbers section-pad" id="impact">
  <div class="container">
    <div class="eyebrow reveal-l">The impact</div>
    <h2 class="reveal">Measured in hours saved.<br>Felt in lives protected.</h2>
    <div class="numbers-grid">
      <div class="number-cell reveal"><div class="big"><span data-count="4">0</span> wks</div><div class="cap">From contract to live — not 9–24 months. Your team is working in Onos within a month.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="90">0</span>%+</div><div class="cap">Field adoption. QR-code simplicity means the people doing the work actually use it.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="20">0</span> hrs</div><div class="cap">Handed back to every EHSQ professional, every week — redirected from admin to prevention.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="1000">0</span>s</div><div class="cap">Of observations read, scored and connected by Q every single day.</div></div>
    </div>
  </div>
</section>

<section class="modules section-pad" id="platform">
  <div class="container">
    <div class="eyebrow reveal-l">One platform</div>
    <h2 class="reveal">18 modules. Zero silos.<br>Q across all of it.</h2>
    <p class="section-sub reveal">Every part of EHSQ work — from the QR code at the gate to the report in the boardroom — on one platform, feeding one intelligence. Start with one module; everything you add makes Q smarter. Click any module to explore it.</p>
    ${appShot(p)}
  </div>
  <div class="container">
    <div class="orbit-wrap reveal">
      <div class="orbit-pulse"></div>
      <div class="orbit-center"><div class="q-mark">Q</div><div class="oc-cap">One intelligence</div></div>
      <div class="ring" style="--dur:90s;--r:200px">
        ${PRODUCTS.slice(0, 8).map((m, i) => `<a class="orbit-chip" href="products/${m.slug}.html" style="--a:${Math.round(i * 45)}deg;--r:200px"><span class="oc"><span>${m.icon}</span>${m.name}</span></a>`).join('\n        ')}
      </div>
      <div class="ring" style="--dur:140s;--r:345px">
        ${PRODUCTS.slice(8, 18).map((m, i) => `<a class="orbit-chip" href="products/${m.slug}.html" style="--a:${Math.round(i * 36 + 18)}deg;--r:345px"><span class="oc"><span>${m.icon}</span>${m.name}</span></a>`).join('\n        ')}
      </div>
    </div>
    <div class="orbit-fallback">
      ${PRODUCTS.map(m => `<a class="module-pill" href="products/${m.slug}.html"><span class="dot"></span>${m.name}</a>`).join('\n      ')}
    </div>
  </div>
  <div class="container">
    <div class="card-grid" style="margin-top:80px">
      ${featured.map(m => `<a class="feat-mod reveal" href="products/${m.slug}.html">
        <div class="top"><div class="icon">${m.icon}</div><h3>${m.name}</h3></div>
        <p>${m.sub.split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')}</p>
        <div class="fm-stat"><span class="v">${m.stats[0][0]}${m.stats[0][1]}</span><span class="k">${m.stats[0][2]}</span></div>
      </a>`).join('\n      ')}
    </div>
    <div class="hero-ctas" style="margin:56px 0 0">
      <a href="platform.html" class="btn btn-ghost" data-magnetic>Explore all 18 modules <span class="arrow">→</span></a>
    </div>
  </div>
</section>

<section class="ind-band section-pad" id="industries">
  <div class="container">
    <div class="eyebrow reveal-l">Where Onos works</div>
    <h2 class="reveal">Built where the<br>risk is real.</h2>
    <p class="section-sub reveal">Onos isn't generic software with a hard hat sticker. Each sector gets the workflows, compliance frameworks and field experience its work actually demands — with Q watching over all of it.</p>
    <div class="ind-grid">
      ${INDUSTRIES.map(i => `<a class="ind-card" href="industries/${i.slug}.html">
        <span class="ind-icon">${i.icon}</span>
        <h3>${i.name}</h3>
        <p>${i.sub.split('.').slice(0, 1).join('.')}. ${i.headline}</p>
        <span class="more">Explore ${i.name} <span class="arrow">→</span></span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="mission has-photo">
  <img src="assets/img/ehsq-director-construction-site.jpg" alt="" loading="lazy">
  <div class="mission-inner">
    <h2 class="reveal">Built so <span class="grad-text">everyone</span><br>goes home.</h2>
    <p class="reveal">Technology in service of the only metric that truly matters.</p>
  </div>
</section>

${ctaBox('See your safety data<br><span class="grad-text">think for itself.</span>', 'Bring your own data to a live demo and watch Q go to work on it. Live in 1–4 weeks. ISO 27001 secure.', 'No 9-month rollout. No consultants. No spreadsheets.')}`;
  return layout({ title: 'Onos — The EHSQ Intelligence Platform', desc: 'The EHSQ intelligence platform: safety, sustainability, quality and compliance unified — with Onos Q reading every record, scoring every risk and briefing every leader. Built so everyone goes home.', body, landing: true });
}

/* ---------------- Q index ---------------- */
function qIndexPage() {
  const p = '../';
  const body = `
${pageHero(p, [['Home', p + 'index.html'], ['Onos Q', null]],
  `One intelligence.<br><span class="grad-text">Twelve superpowers.</span>`,
  `Onos Q is not a dozen bolted-on bots. It's one intelligence woven through every module of the platform — reading everything, connecting everything, and acting around the clock. These are its twelve superpowers.`, true,
  { src: 'safety-worker-tablet.jpg', alt: 'Onos Q working alongside a site team', tag: 'Q in the field' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="q-grid">
      ${SUPERPOWERS.map(s => qCard(s, p, { feed: false })).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Why one intelligence beats twelve tools</div>
    <h2 class="reveal">Q sees what point solutions can't:<br>the whole picture.</h2>
    <div class="card-grid">
      <div class="info-card reveal"><div class="icon">🧠</div><h3>One brain, all the data</h3><p>The RAMS review knows about the competency gaps. The risk score knows about the observation cluster. Every superpower draws on everything Q knows — because it's one intelligence, not twelve silos.</p></div>
      <div class="info-card reveal"><div class="icon">🔐</div><h3>Your data stays yours</h3><p>Q works inside your ISO 27001-certified Onos environment. Your data trains insights for you — it is never shared, sold or used to train models for anyone else.</p></div>
      <div class="info-card reveal"><div class="icon">🧑‍✈️</div><h3>Humans hold authority</h3><p>Q drafts, flags, scores and chases. Your competent people approve, decide and own. Every output is evidenced and traceable — judgement stays where the law and good sense put it.</p></div>
    </div>
  </div>
</section>

${ctaBox('Put Q to work<br><span class="grad-text">on your data.</span>', 'Bring a month of your own observations, actions and incidents to a live demo — and watch Q find what nobody had time to see.', 'Live in 1–4 weeks. ISO 27001 secure. Humans in charge.')}`;
  return layout({ depth: 1, title: 'Onos Q — One Intelligence, Twelve Superpowers | Onos', desc: 'Meet Onos Q: one intelligence woven through the Onos EHSQ platform, with twelve superpowers working around the clock.', active: 'q', body });
}

/* ---------------- superpower pages ---------------- */
function qPage(s) {
  const p = '../';
  const rel = s.related.map(r => sp(r)).filter(Boolean);
  return layout({
    depth: 1, active: 'q',
    title: `${s.title} — Onos Q | Onos`,
    desc: s.card,
    body: `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumbs"><a href="${p}index.html">Home</a><span class="sep">/</span><a href="index.html">Onos Q</a><span class="sep">/</span><span class="here">Superpower ${s.n}</span></div>
    <div class="q-badge"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">${s.tagline}</div></div>
    <h1 class="${s.color}" style="--grad:none">${s.title.replace('Q ', '<span class="grad-text">Q</span> ')}.</h1>
    <p class="hero-sub" style="margin-top:26px">${s.heroSub}</p>
    <div class="hero-ctas">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>See it on your data <span class="arrow">→</span></a>
      <a href="index.html" class="btn btn-ghost" data-magnetic>All 12 superpowers</a>
    </div>
  </div>
</section>

<section class="section-pad-sm ${s.color}">
  <div class="container" style="max-width:880px">
    ${feedHtml(s.feed, true)}
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The use case</div>
    <h2 class="reveal">${s.useCase.title}</h2>
    <div class="split-row">
      <div class="reveal"><div class="pane-label bad">Without Q</div><p>${s.useCase.problem}</p></div>
      <div class="reveal"><div class="pane-label good">With Q</div><p>${s.useCase.solution}</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">How it works</div>
    <h2 class="reveal">${s.headline}</h2>
    <div class="steps">
      ${s.how.map((st, i) => `<div class="step"><div class="n">0${i + 1}</div><div><h3>${st[0]}</h3><p>${st[1]}</p></div></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The value</div>
    <h2 class="reveal">What your team gets back.</h2>
    <div class="card-grid">
      ${s.benefits.map(b => `<div class="info-card reveal"><div class="icon">${b[0]}</div><h3>${b[1]}</h3><p>${b[2]}</p></div>`).join('\n      ')}
    </div>
    <div class="numbers-grid" style="margin-top:80px">
      ${s.stats.map(st => `<div class="number-cell reveal"><div class="big"><span data-count="${st[0]}">0</span>${st[1]}</div><div class="cap">${st[2]}</div></div>`).join('\n      ')}
    </div>
  </div>
</section>

${imgBand(p, PHOTOS[SUPERPOWERS.indexOf(s) % PHOTOS.length], s.headline.replace(/\.$/, '') + '.', `Superpower ${s.n} — ${s.tagline}`)}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">Related superpowers</div>
    <div class="q-grid" style="margin-top:40px">
      ${rel.map(r => qCard(r, p, { feed: false })).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(`See <span class="grad-text">${s.short.replace('Q ', 'Q ')}</span><br>on your own data.`, 'Bring your real records to a live demo and watch this superpower go to work. No slideware — your data, live.', 'Live in 1–4 weeks. ISO 27001 secure. Humans in charge.')}`
  });
}

/* ---------------- platform index + product pages ---------------- */
function platformPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Platform', null]],
  `18 modules.<br><span class="grad-text">Zero silos.</span>`,
  `Every part of EHSQ work — from the QR code at the gate to the report in the boardroom — on one platform, feeding one intelligence. Start with one module or take the lot; everything connects either way.`, true,
  { src: 'industrial-site-overview.jpg', alt: 'One platform across every site', tag: '18 modules · one platform' })}

<section class="section-pad-sm">
  <div class="container">
    ${appShot('')}
    <div class="card-grid" style="margin-top:70px">
      ${PRODUCTS.map(m => `<a class="card-link" href="products/${m.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${m.icon}</div><h3>${m.name}</h3><p>${m.headline}</p><span class="more">Explore <span class="arrow">→</span></span></div></a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container center">
    <div class="q-badge" style="justify-content:center;display:flex"><div class="q-mark sm">Q</div></div>
    <h2 class="center reveal">Every module makes Q smarter.<br>Q makes every module sharper.</h2>
    <p class="section-sub reveal">Point solutions keep their data to themselves. On Onos, the observation feeds the risk score, the risk score shapes the briefing, the briefing drives the action — and Q watches all of it.</p>
  </div>
</section>

${ctaBox('One platform.<br><span class="grad-text">Four weeks to live.</span>', 'Pay only for the modules you use. Start anywhere, expand any time — your data and your intelligence come with you.', 'Modular pricing. 1–4 week implementation. 30-minute worker training.')}`;
  return layout({ title: 'Platform — 18 Modules, Zero Silos | Onos', desc: 'Explore the 18 modules of the Onos EHSQ platform — safety, quality, environmental and compliance, unified under Onos Q.', active: 'platform', body });
}

function productPage(m) {
  const p = '../';
  const tieIn = sp(m.q[0]);
  return layout({
    depth: 1, active: 'platform',
    title: `${m.name} | Onos`,
    desc: m.sub,
    body: `
${pageHero(p, [['Home', p + 'index.html'], ['Platform', p + 'platform.html'], [m.name, null]],
  m.headline.replace(/\.$/, '').replace(/^(.*?)([a-z’']+\.?)$/s, '$1$2') + '',
  m.sub, true,
  { src: PHOTOS[PRODUCTS.indexOf(m) % PHOTOS.length], alt: `${m.name} in the field with Onos`, tag: m.name })}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">The problems this kills</div>
    <div class="problem-grid" style="margin-top:40px">
      ${m.pains.map(x => `<div class="problem-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">What you get</div>
    <h2 class="reveal">How ${m.name} works on Onos.</h2>
    <div class="card-grid cols-2">
      ${m.features.map(f => `<div class="info-card reveal"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="q-badge reveal-l"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">Where Q comes in</div></div>
    <h2 class="reveal">${tieIn ? tieIn.title : 'Onos Q'} — built in.</h2>
    <p class="section-sub reveal">${m.q[1]}</p>
    <div class="hero-ctas" style="justify-content:flex-start;margin-top:36px">
      <a href="${p}q/${m.q[0]}.html" class="btn btn-ghost" data-magnetic>Explore this superpower <span class="arrow">→</span></a>
    </div>
    <div class="numbers-grid" style="margin-top:90px">
      ${m.stats.map(st => `<div class="number-cell reveal"><div class="big"><span data-count="${st[0]}">0</span>${st[1]}</div><div class="cap">${st[2]}</div></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(`See <span class="grad-text">${m.name}</span><br>in action.`, 'A live walkthrough on real workflows — yours, if you bring them. Most teams are running this module within a fortnight.', 'Modular pricing — pay only for what you use.')}`
  });
}

/* ---------------- industries ---------------- */
function industriesPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Industries', null]],
  `Built where the<br><span class="grad-text">risk is real.</span>`,
  `Onos isn't generic software with a hard hat sticker. Each industry gets the workflows, compliance frameworks and field experience its work actually demands — with Q watching over all of it.`, true,
  { src: 'hero-bg-construction.jpg', alt: 'Onos on site', tag: 'Built where the risk is real' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid cols-2">
      ${INDUSTRIES.map(i => `<a class="card-link" href="industries/${i.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${i.icon}</div><h3>${i.name}</h3><p>${i.headline} ${i.sub.split('.')[0]}.</p><span class="more">Explore ${i.name} <span class="arrow">→</span></span></div></a>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox('Your industry.<br><span class="grad-text">Your demo.</span>', 'Book a walkthrough with someone who knows your sector — and see Onos configured for the way your sites actually run.', 'Trusted by Graham, McAvoy, Almac, Kilwaughter, Crown and more.')}`;
  return layout({ title: 'Industries | Onos', desc: 'Onos EHSQ for construction, manufacturing, logistics, oil & gas, pharmaceutical, and events & facilities.', active: 'industries', body });
}

function industryPage(i) {
  const p = '../';
  return layout({
    depth: 1, active: 'industries',
    title: `${i.name} | Onos`,
    desc: i.sub,
    body: `
${pageHero(p, [['Home', p + 'index.html'], ['Industries', p + 'industries.html'], [i.name, null]], i.headline, i.sub, true,
  { src: INDUSTRY_IMG[i.slug], alt: `Onos in ${i.name}`, tag: `${i.name} · EHSQ` })}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">What ${i.name.toLowerCase()} is up against</div>
    <div class="problem-grid" style="margin-top:40px">
      ${i.pains.map(x => `<div class="problem-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="split-row" style="margin-top:0">
      <div class="reveal">
        <div class="eyebrow">How Onos answers</div>
        <h2 style="font-size:clamp(28px,3.4vw,44px)">Purpose-built for the way you work.</h2>
        <ul>${i.solutions.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="reveal">
        <div class="q-badge"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">Q in ${i.name.toLowerCase()}</div></div>
        <p style="font-size:17px;line-height:1.75;color:var(--muted)">${i.q}</p>
        <div class="hero-ctas" style="justify-content:flex-start;margin-top:28px">
          <a href="${p}q/index.html" class="btn btn-ghost" data-magnetic>Meet Onos Q <span class="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Most-used modules in ${i.name.toLowerCase()}</div>
    <div class="card-grid" style="margin-top:44px">
      ${i.modules.map(slug => { const m = prod(slug); return `<a class="card-link" href="${p}products/${m.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${m.icon}</div><h3>${m.name}</h3><p>${m.headline}</p><span class="more">Explore <span class="arrow">→</span></span></div></a>`; }).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(`EHSQ that speaks<br><span class="grad-text">${i.name.toLowerCase()}.</span>`, 'Book a demo with someone who knows your sector. Bring your messiest workflow — that’s the one we’ll start with.', 'Live in 1–4 weeks. 90%+ field adoption.')}`
  });
}

/* ---------------- why onos ---------------- */
function whyPage() {
  const rows = [
    ['Implementation time', '1–4 weeks', '9–24 months', 'N/A — and forever to compile', 'Weeks per change'],
    ['Field worker training', '30 minutes', 'Days of classroom time', 'None — and no data either', 'Hours per module'],
    ['One platform for EHSQ', '<span class="yes">✓</span> 18 unified modules', '<span class="no">✗</span> One job each', '<span class="no">✗</span>', '<span class="yes">✓</span> at enterprise cost'],
    ['Built-in AI intelligence', '<span class="yes">✓</span> Onos Q, 12 superpowers', '<span class="no">✗</span>', '<span class="no">✗</span>', 'Bolt-on, extra licence'],
    ['Mobile-first, offline-capable', '<span class="yes">✓</span>', 'Sometimes', '<span class="no">✗</span>', 'Desktop-era UX'],
    ['Real-time dashboards', '<span class="yes">✓</span> Live, role-based', 'Per-tool only', '<span class="no">✗</span>', '<span class="yes">✓</span> with configuration projects'],
    ['ISO 27001 / Cyber Essentials / GDPR', '<span class="yes">✓ ✓ ✓</span>', 'Varies', '<span class="no">✗</span>', '<span class="yes">✓</span>'],
    ['Update cadence', 'Continuous', 'Quarterly at best', 'Never', 'Annual major versions'],
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['Why Onos', null]],
  `Why leading companies<br><span class="grad-text">choose Onos.</span>`,
  `Because the choice used to be painful: quick-but-shallow point tools, or deep-but-glacial enterprise suites. Onos ends the compromise — enterprise depth, four-week implementation, and the only EHSQ platform with Q inside.`, true,
  { src: 'ehsq-director-construction-site.jpg', alt: 'EHSQ leadership on site', tag: 'Why leading teams choose Onos' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="hero-ticker" style="justify-content:flex-start;gap:clamp(36px,6vw,90px)">
      <div class="tick"><div class="num"><em data-count="24" data-suffix="h">0</em></div><div class="lbl">Fastest go-live</div></div>
      <div class="tick"><div class="num"><em data-count="50000" data-suffix="+">0</em></div><div class="lbl">Reports filed</div></div>
      <div class="tick"><div class="num"><em data-count="10" data-suffix="+">0</em></div><div class="lbl">Systems replaced</div></div>
      <div class="tick"><div class="num"><em data-count="13" data-suffix="">0</em></div><div class="lbl">Industry leaders aboard</div></div>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The traps we built Onos to escape</div>
    <h2 class="reveal">Three ways EHSQ goes wrong.</h2>
    <div class="card-grid">
      <div class="problem-card reveal"><div class="stat" style="font-size:30px">The Paper Trap</div><h3>Forms that go nowhere</h3><p>Hours of weekly admin re-keying what someone already wrote down — while the original yellows in a site cabinet. Digitising your existing forms takes minutes on Onos, not a migration project.</p></div>
      <div class="problem-card reveal"><div class="stat" style="font-size:30px">The Silo Trap</div><h3>Ten systems, no picture</h3><p>Incidents here, training there, permits in a third place. Nobody can see across them — but the risk lives precisely in the gaps. Onos is one platform; the gaps don't exist.</p></div>
      <div class="problem-card reveal"><div class="stat" style="font-size:30px">The Lag Trap</div><h3>Insight that arrives late</h3><p>Quarterly reviews of monthly reports about last quarter's data. Onos is live — and Q tells you about rising risk the day it rises, not the quarter after.</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">Stop compromising</div>
    <h2 class="reveal">Onos vs. the alternatives.</h2>
    <div class="cmp-wrap reveal">
      <table class="cmp">
        <thead><tr><th></th><th class="hl">Onos</th><th>Point solutions</th><th>Paper &amp; spreadsheets</th><th>Legacy EHSQ suites</th></tr></thead>
        <tbody>
          ${rows.map(r => `<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Go live at your speed</div>
    <h2 class="reveal">Four weeks, start to handover.</h2>
    <div class="timeline" id="timeline" style="margin-top:70px">
      <div class="spine-fill" id="spineFill"></div>
      <div class="t-item"><div class="t-content reveal"><h3>Configure</h3><p>Your sites, forms, workflows and users set up — your existing templates digitised by drag-and-drop, not rebuilt from scratch.</p></div><div class="t-dot"></div><div class="t-time">WEEK 1</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Migrate &amp; test</h3><p>Historic data brought across, integrations connected, user acceptance testing with your team driving.</p></div><div class="t-dot"></div><div class="t-time">WEEK 2</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Train &amp; roll out</h3><p>Admins trained in depth, field workers in 30 minutes. Phased rollout with parallel running where you want the safety net.</p></div><div class="t-dot"></div><div class="t-time">WEEK 3</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Optimise &amp; hand over</h3><p>Feedback gathered, configuration tuned, success metrics agreed. You own a running system — and Q is already reading.</p></div><div class="t-dot"></div><div class="t-time">WEEK 4</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Ongoing partnership</h3><p>Dedicated success manager, 24/7 support, quarterly reviews and continuous regulatory updates. We stay in the trench with you.</p></div><div class="t-dot"></div><div class="t-time">ALWAYS</div></div>
    </div>
  </div>
</section>

${imgBand('', 'safety-team-meeting.jpg', 'A partner in the trench,<br>not a vendor on the phone.', 'Dedicated success manager · 24/7 support · quarterly reviews')}

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container center">
    <div class="eyebrow reveal-l" style="justify-content:center">Trusted by</div>
    <h2 class="center reveal">Graham. McAvoy. Almac. Kilwaughter.<br>Crown. Neilcott. Bretland. And more.</h2>
    <p class="section-sub reveal">Principal contractors, manufacturers and operators across the UK and Ireland run their EHSQ on Onos — proudly built in Belfast, Northern Ireland.</p>
  </div>
</section>

${ctaBox('Ready to transform<br><span class="grad-text">your EHSQ operations?</span>', 'See the platform, meet Q, and leave with an implementation plan scoped to your team — all in one call.', 'hi@onos.app · +44 (0)28 9600 5106')}`;
  return layout({ title: 'Why Onos | Onos', desc: 'Why leading companies choose Onos: enterprise EHSQ depth, four-week implementation, and Onos Q intelligence built in.', active: 'why', body });
}

/* ---------------- FAQ ---------------- */
function faqPage() {
  const groups = [
    ['Implementation', [
      ['How long does implementation take?', 'One to four weeks, depending on modules and data migration — our fastest go-live was 24 hours. Compare that with the 9–24 months typical of legacy enterprise EHS suites. A dedicated implementation manager runs a four-phase plan: configure, migrate &amp; test, train &amp; roll out, optimise &amp; hand over.'],
      ['What data migration support do you provide?', 'Full service: we map and migrate your historic incidents, actions, training records and registers from spreadsheets or your outgoing system, validate the result with you during week two, and run parallel where you want the safety net. Your history arrives, your audit trail stays intact.'],
      ['How much training do our people need?', 'Field workers: about 30 minutes — if you can scan a QR code, you can use Onos. Administrators and EHSQ leads get structured training during rollout week, plus a library of guides and a support team that answers in hours, not days.']
    ]],
    ['Onos Q', [
      ['What exactly is Onos Q?', 'Q is the intelligence layer of the platform — one AI woven through every module, with twelve superpowers: it briefs your team, scores your risk, spots observation patterns, reviews RAMS, guards supply chain compliance, triages incidents, keeps you audit-ready, answers questions in plain English, chases actions, watches competency, tracks your environmental footprint and drafts your board reports.'],
      ['Does Q make safety decisions on its own?', 'No. Q drafts, flags, scores and chases; your competent people approve, decide and own. Every Q output is evidenced and traceable to source records. Authority stays with humans — that’s a design principle, not a limitation.'],
      ['Is our data used to train AI models?', 'Your data is used to generate insight for you, inside your ISO 27001-certified environment. It is never shared with other customers, sold, or used to train models for anyone else.']
    ]],
    ['Integration', [
      ['Does Onos integrate with our ERP, HRIS or CMMS?', 'Yes — a documented API plus pre-built connectors cover the common cases: workforce sync from HR, asset registers from CMMS, project structures from ERP. Single sign-on via your identity provider is standard on enterprise plans.'],
      ['Can we start with one module and expand later?', 'That’s the most common path. Start with, say, Safety Observations and Site Sign-In; add Permits, Supply Chain and Quality when ready. Pricing is modular, your data carries forward, and every module you add makes Q smarter.']
    ]],
    ['Security & Compliance', [
      ['Where is our data stored?', 'In UK/EU data centres, encrypted in transit and at rest, with full backups and tested recovery. Onos is ISO 27001 certified and Cyber Essentials accredited — see the Security &amp; Compliance page for the full posture.'],
      ['Is Onos GDPR compliant?', 'Yes. Data processing agreements, role-based access controls, retention policies and subject-access tooling are built in. Your DPO gets straight answers, fast.'],
      ['What happens on remote sites with no signal?', 'Onos works offline. Inspections, observations, sign-ins and incident capture all run without connectivity and sync automatically when the device finds signal again — built for basements, tunnels and the back end of nowhere.']
    ]],
    ['Pricing', [
      ['How is Onos priced?', 'Modular, per-organisation subscription: you pay for the modules you use, scaled to your size. No per-report charges, no charge for field workers reporting via QR codes — we will never tax participation in safety.'],
      ['Are there hidden costs?', 'No. Implementation, training, support, updates and Q are included in the subscription. The quote you get is the cost you pay.'],
      ['What’s the typical ROI timeline?', 'Most customers recover the subscription in saved admin time alone — 20+ hours per EHSQ professional per week — within the first quarter. The risk-reduction value of Q catching what humans miss is on top.']
    ]],
    ['Features', [
      ['Can we customise forms, workflows and dashboards?', 'Extensively, and without code. Drag-and-drop form building, configurable workflows and approval chains, role-based dashboards. Your safety management system, digitised — not replaced by ours.'],
      ['Does Onos support multiple languages?', 'Yes — critical for mixed-nationality workforces. Workers report observations and complete inductions in their own language; your team reads them in theirs.'],
      ['How often is Onos updated?', 'Continuously. New capability ships every few weeks, included in your subscription, with zero downtime and no version-upgrade projects — regulatory changes included.']
    ]]
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['FAQ', null]],
  `Straight answers to<br><span class="grad-text">fair questions.</span>`,
  `Everything teams usually ask before choosing Onos — implementation, Q, integration, security and pricing. If your question isn't here, ask a human: hi@onos.app.`, false,
  { src: 'worker-onboarding.jpg', alt: 'Onboarding a worker with Onos', tag: 'Straight answers' })}

<section class="section-pad-sm">
  <div class="container" style="max-width:880px">
    ${groups.map(([g, items]) => `
    <h2 class="acc-group-title">${g}</h2>
    <div class="accordion">
      ${items.map(([q, a]) => `<div class="acc-item"><button class="acc-q">${q}<span class="chev">+</span></button><div class="acc-a"><p>${a}</p></div></div>`).join('\n      ')}
    </div>`).join('\n')}
  </div>
</section>

${ctaBox('Still curious?<br><span class="grad-text">Ask us anything.</span>', 'A 30-minute call answers more than any FAQ page — and you’ll be talking to someone who’s implemented Onos, not a script.', 'hi@onos.app · +44 (0)28 9600 5106')}`;
  return layout({ title: 'FAQ | Onos', desc: 'Frequently asked questions about the Onos EHSQ platform: implementation, Onos Q, integration, security, pricing and features.', active: 'faq', body });
}

/* ---------------- resources ---------------- */
function resourcesPage() {
  const items = [
    ['📕', 'Guide', 'The EHSQ Leader’s Guide to AI', 'What AI genuinely changes in safety management, what it doesn’t, and the questions to ask any vendor — including us.'],
    ['📗', 'Guide', 'From Paper to 90% Adoption', 'The field-tested playbook for digitising site safety without losing the workforce on the way.'],
    ['📊', 'Benchmark', 'Observation Culture Benchmarks', 'What good looks like: reporting rates, closure times and engagement metrics across 50,000+ reports.'],
    ['🛠', 'Template', 'RIDDOR Decision Flowchart', 'A clear, printable walk-through of reportability — the one your site managers will actually use.'],
    ['🎥', 'Webinar', 'Meet Onos Q: Live Demo Series', 'Monthly live sessions showing Q’s twelve superpowers on real (anonymised) data, with open Q&amp;A.'],
    ['📘', 'Case Study', 'How Principal Contractors Run Onos', 'Implementation stories from Graham, McAvoy and others: timelines, adoption curves and lessons learned.']
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['Resources', null]],
  `Sharper thinking for<br><span class="grad-text">safety leaders.</span>`,
  `Guides, benchmarks, templates and live sessions — practical material from the field, not content-marketing filler. All free.`, false,
  { src: 'safety-team-meeting.jpg', alt: 'Safety leaders working together', tag: 'From the field' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid cols-2">
      ${items.map(i => `<div class="info-card reveal"><div class="icon">${i[0]}</div><div class="eyebrow" style="margin-bottom:10px">${i[1]}</div><h3>${i[2]}</h3><p>${i[3]}</p><a class="more" href="contact.html">Request a copy <span class="arrow">→</span></a></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox('Want the live version?<br><span class="grad-text">Book a demo.</span>', 'The best resource is thirty minutes with the platform itself — configured for your industry, on your questions.', 'No slideware. Real platform, real data.')}`;
  return layout({ title: 'Resources | Onos', desc: 'Guides, benchmarks, templates and webinars for EHSQ leaders, from the Onos team.', body });
}

/* ---------------- security ---------------- */
function securityPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Security & Compliance', null]],
  `Your data, guarded like<br><span class="grad-text">your people.</span>`,
  `Safety data is sensitive data — incidents, health information, personal records. Onos treats security as a first-class engineering discipline, independently certified and continuously tested.`, false,
  { src: 'compliance-audit.jpg', alt: 'Compliance and audit rigour', tag: 'ISO 27001 · Cyber Essentials · GDPR' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid">
      <div class="info-card reveal"><div class="icon">🛡</div><h3>ISO 27001 certified</h3><p>Our information security management system is independently certified and audited annually — the same standard we help you evidence for your own clients.</p></div>
      <div class="info-card reveal"><div class="icon">✅</div><h3>Cyber Essentials</h3><p>UK government-backed certification of our technical controls against common attack vectors, renewed annually.</p></div>
      <div class="info-card reveal"><div class="icon">🇪🇺</div><h3>GDPR by design</h3><p>UK/EU data residency, data processing agreements, role-based access, retention controls and subject-access tooling built into the platform.</p></div>
      <div class="info-card reveal"><div class="icon">🔐</div><h3>Encryption everywhere</h3><p>TLS 1.2+ in transit, AES-256 at rest, with key management and access logging across every environment.</p></div>
      <div class="info-card reveal"><div class="icon">🪪</div><h3>Enterprise access control</h3><p>Single sign-on via your identity provider, enforced MFA, granular role-based permissions and full audit trails on every record.</p></div>
      <div class="info-card reveal"><div class="icon">♻️</div><h3>Resilience &amp; recovery</h3><p>Continuous backups, tested disaster recovery, and an uptime record we publish rather than promise.</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container">
    <div class="q-badge reveal-l"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">AI, governed</div></div>
    <h2 class="reveal">Q is powerful because it's constrained.</h2>
    <p class="section-sub reveal">Q operates inside your certified environment, on your data only. It never shares data between customers, never trains shared models on your records, and never holds authority a human should hold. Every output is traceable to its sources — by design, and verifiably.</p>
  </div>
</section>

${ctaBox('Your security team<br><span class="grad-text">will have questions.</span>', 'Good. Send them our way — we’ll provide certificates, architecture documentation and a call with our engineers, not a marketing PDF.', 'hi@onos.app · Security documentation available under NDA')}`;
  return layout({ title: 'Security & Compliance | Onos', desc: 'ISO 27001, Cyber Essentials, GDPR: how Onos protects EHSQ data, and how Onos Q is governed.', body });
}

/* ---------------- contact ---------------- */
function contactPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Contact', null]],
  `Talk to a human.<br><span class="grad-text">We're quick.</span>`,
  `Demos, pricing, security questionnaires or just a sense-check on your EHSQ setup — we answer the same day, usually faster.`, false,
  { src: 'safety-team-meeting.jpg', alt: 'The Onos team at work', tag: 'Talk to a human' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="contact-grid">
      <form class="contact-form" action="mailto:hi@onos.app" method="post" enctype="text/plain">
        <div class="field-row">
          <div class="field"><label for="fn">First name</label><input id="fn" name="first_name" type="text" required></div>
          <div class="field"><label for="ln">Last name</label><input id="ln" name="last_name" type="text" required></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="em">Work email</label><input id="em" name="email" type="email" required></div>
          <div class="field"><label for="ph">Phone (optional)</label><input id="ph" name="phone" type="tel"></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="co">Company</label><input id="co" name="company" type="text" required></div>
          <div class="field"><label for="ind">Industry</label>
            <select id="ind" name="industry">
              <option>Construction</option><option>Manufacturing</option><option>Logistics &amp; Warehousing</option>
              <option>Oil &amp; Gas</option><option>Pharmaceutical</option><option>Events &amp; Facilities</option><option>Other</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="msg">What can we help with?</label><textarea id="msg" name="message" rows="5" placeholder="Tell us about your team, your sites, and what's not working today…"></textarea></div>
        <button class="btn btn-primary" type="submit" data-magnetic>Send message <span class="arrow">→</span></button>
      </form>
      <div class="contact-aside">
        <div class="way"><div class="icon">📅</div><div><h3>Book straight into the diary</h3><p>Skip the back-and-forth — <a href="${DEMO}">grab a demo slot</a> that suits you.</p></div></div>
        <div class="way"><div class="icon">✉️</div><div><h3>Email</h3><p><a href="mailto:hi@onos.app">hi@onos.app</a> — answered same working day.</p></div></div>
        <div class="way"><div class="icon">📞</div><div><h3>Phone</h3><p><a href="tel:+442896005106">+44 (0)28 9600 5106</a></p></div></div>
        <div class="way"><div class="icon">📍</div><div><h3>Where we are</h3><p>Headquartered in London. Proudly built in Belfast, Northern Ireland. Serving teams worldwide.</p></div></div>
        <div class="way"><div class="icon">💼</div><div><h3>LinkedIn</h3><p><a href="https://www.linkedin.com/company/onostech">@onostech</a></p></div></div>
      </div>
    </div>
  </div>
</section>`;
  return layout({ title: 'Contact | Onos', desc: 'Contact the Onos team — demos, pricing, security reviews. hi@onos.app · +44 (0)28 9600 5106.', active: 'contact', body });
}

/* ---------------- emit ---------------- */
const out = (rel, html) => {
  const f = join(ROOT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
  console.log('wrote', rel);
};

out('index.html', landingPage());
out('platform.html', platformPage());
out('industries.html', industriesPage());
out('why-onos.html', whyPage());
out('faq.html', faqPage());
out('resources.html', resourcesPage());
out('security-compliance.html', securityPage());
out('contact.html', contactPage());
out('q/index.html', qIndexPage());
for (const s of SUPERPOWERS) out(`q/${s.slug}.html`, qPage(s));
for (const m of PRODUCTS) out(`products/${m.slug}.html`, productPage(m));
for (const i of INDUSTRIES) out(`industries/${i.slug}.html`, industryPage(i));
console.log(`\nDone: ${8 + 1 + SUPERPOWERS.length + PRODUCTS.length + INDUSTRIES.length} pages.`);
