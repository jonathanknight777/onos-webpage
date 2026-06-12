// Exports all site copy to COPY.md, structured per page and section, for copy review.
// Usage: node export-copy.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { SUPERPOWERS } from './data/superpowers.mjs';
import { PRODUCTS } from './data/products.mjs';
import { INDUSTRIES } from './data/industries.mjs';

const PAGES = [
  ['index.html', 'Landing page'],
  ['why-onos.html', 'Why Onos'],
  ['platform.html', 'Platform (module index)'],
  ...PRODUCTS.map(m => [`products/${m.slug}.html`, `Product — ${m.name}`]),
  ['industries.html', 'Industries (index)'],
  ...INDUSTRIES.map(i => [`industries/${i.slug}.html`, `Industry — ${i.name}`]),
  ['q/index.html', 'Onos Q (overview)'],
  ...SUPERPOWERS.map(s => [`q/${s.slug}.html`, `Onos Q — Superpower ${s.n}: ${s.title}`]),
  ['faq.html', 'FAQ'],
  ['resources.html', 'Resources'],
  ['security-compliance.html', 'Security & Compliance'],
  ['contact.html', 'Contact'],
];

const decode = s => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const text = html => decode(html.replace(/<br\s*\/?>/gi, ' / ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

// Human-readable section labels keyed by the section's first class.
const SECTION_NAMES = {
  hero: 'Hero', 'page-hero': 'Hero', 'trust-strip': 'Trust strip', problem: 'Problem',
  statement: 'Scroll statement', 'q-wrap': 'Onos Q showcase', pillars: 'Value pillars',
  'img-band': 'Image band', day: 'Day timeline', numbers: 'Impact numbers',
  modules: 'Modules', 'ind-band': 'Industries showcase', mission: 'Mission', cta: 'Call to action',
};

// Elements that carry copy, in document order.
const ELEM_RE = /<(h1|h2|h3|h4|p|li|button)[^>]*>([\s\S]*?)<\/\1>|<(?:div|span)[^>]+class="(eyebrow|band-quote|band-cap|q-tag|lbl|cap|p-stat-cap|ph|who|lf(?: hl)?|cta-note|oc-cap|ph-tag|label|acc-group-title)"[^>]*>([\s\S]*?)<\/(?:div|span)>|<span[^>]+class="ln"[^>]*>([\s\S]*?)<\/span>/g;

function extractSection(html) {
  // Flatten the colour-coded prefix spans inside feed lines so .ln captures the full line.
  html = html.replace(/<span class="(?:info|warn|ok)">([\s\S]*?)<\/span>/g, '$1');
  const out = [];
  let m;
  ELEM_RE.lastIndex = 0;
  while ((m = ELEM_RE.exec(html))) {
    if (m[1]) {                       // headed/body elements
      const t = text(m[2]);
      if (!t) continue;
      if (m[1] === 'h1') out.push(`**H1:** ${t}`);
      else if (m[1] === 'h2') out.push(`**H2:** ${t}`);
      else if (m[1] === 'h3' || m[1] === 'h4') out.push(`**H3:** ${t}`);
      else if (m[1] === 'li') out.push(`- ${t}`);
      else if (m[1] === 'button') out.push(`**Q:** ${t.replace(/\s*\+$/, '')}`);
      else out.push(t);
    } else if (m[3]) {                // labelled chips/captions
      const t = text(m[4]);
      if (t) out.push(`*[${m[3].split(' ')[0]}]* ${t}`);
    } else if (m[5]) {                // terminal feed microcopy
      const t = text(m[5]);
      if (t) out.push(`\`feed\` ${t}`);
    }
  }
  return out;
}

let md = `# Onos Website — Full Copy Export\n\nGenerated from the built HTML (one block per page, one subsection per page section). Element key: **H1/H2/H3** headings, plain lines are paragraphs, \`- \` are list items, *[label]* are small UI labels/captions, \`feed\` lines are terminal-style microcopy, **Q:** are FAQ questions.\n\nNav and footer are excluded (identical on every page).\n\n---\n`;

for (const [file, title] of PAGES) {
  const html = readFileSync(file, 'utf8');
  const metaDesc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  md += `\n# PAGE: ${title}\n\n*File: \`${file}\`*\n\n*Meta description:* ${decode(metaDesc)}\n`;
  const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/g) || [];
  sections.forEach((sec, i) => {
    const cls = (sec.match(/class="([^"]*)"/) || [, ''])[1].split(' ')[0];
    const name = SECTION_NAMES[cls] || (cls ? cls : `section ${i + 1}`);
    const lines = extractSection(sec);
    if (!lines.length) return;
    md += `\n## Section: ${name}\n\n${lines.join('\n')}\n`;
  });
  md += '\n---\n';
}

writeFileSync('COPY.md', md);
console.log(`Wrote COPY.md — ${PAGES.length} pages, ${md.split('\n').length} lines`);
