---
marp: true
theme: default
paginate: true
footer: 'Build AI that matters · João Galego'
math: katex
title: Build AI that matters
author: João Galego
---

<style>
/* ============================================================
   DEPENDABLE — a lean, monochrome theme for Marp
   Warm paper · near-black ink · ONE muted-red accent.
   Retune the whole deck from the variables below.
   ============================================================ */
:root {
  --paper:       #F8F7F3;   /* warm off-white background      */
  --ink:         #1C1B19;   /* near-black text                */
  --muted:       #76746E;   /* secondary text, captions       */
  --faint:       #E2E0D9;   /* hairlines, soft fills          */
  --accent:      #C0362C;   /* the single accent (muted red)  */
  --accent-soft: #C0362C14; /* ~8% accent, for fills          */
  --sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
  --mono: ui-monospace, "SF Mono", "JetBrains Mono", "Cascadia Code", Menlo, Consolas, monospace;
}

/* ---- slide canvas -------------------------------------------------- */
section {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 27px;
  line-height: 1.45;
  letter-spacing: -0.01em;
  padding: 78px 96px 84px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  text-align: left;
}

/* ---- typography --------------------------------------------------- */
h1 { font-size: 62px; font-weight: 600; letter-spacing: -0.035em; line-height: 1.04; margin: 0 0 .25em; color: var(--ink); }
h2 { font-size: 40px; font-weight: 600; letter-spacing: -0.02em;  line-height: 1.12; margin: 0 0 .55em; color: var(--ink); }
h3 { font-size: 28px; font-weight: 600; margin: 0 0 .4em; color: var(--ink); }
p  { margin: .35em 0; }
a  { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent-soft); }
strong { font-weight: 700; }
.accent { color: var(--accent); }
small { color: var(--muted); font-family: var(--mono); font-size: 17px; letter-spacing: 0; line-height: 1.5; }

/* line-wrap polish: balance hero text, avoid single-word orphans in body */
p, li { text-wrap: pretty; }
section.statement p, section.metric .cap, section.section .lead,
section.cover .sub, section.close p, blockquote { text-wrap: balance; }

/* short accent rule beneath section titles */
h2::after {
  content: ""; display: block;
  width: 60px; height: 3px; border-radius: 2px;
  background: var(--accent);
  margin-top: 20px;
}

/* ---- lists -------------------------------------------------------- */
ul { list-style: none; padding-left: 0; margin: .3em 0; }
ul li { position: relative; padding-left: 1.5em; margin: .42em 0; }
ul li::before { content: "—"; position: absolute; left: 0; color: var(--accent); }
ol { list-style: none; counter-reset: li; padding-left: 0; margin: .3em 0; }
ol li { counter-increment: li; position: relative; padding-left: 2.2em; margin: .5em 0; }
ol li::before {
  content: counter(li, decimal-leading-zero);
  position: absolute; left: 0; top: .12em;
  color: var(--accent); font-family: var(--mono);
  font-size: .72em; font-weight: 600;
}

/* ---- code --------------------------------------------------------- */
pre {
  background: #FFFFFF; border: 1px solid var(--faint); border-radius: 12px;
  padding: 22px 26px; font-size: 18px; line-height: 1.55; overflow: auto;
}
code { font-family: var(--mono); }
:not(pre) > code {
  background: var(--accent-soft); color: var(--accent);
  padding: .06em .35em; border-radius: 5px; font-size: .88em;
}
/* near-monochrome syntax: only comments + keywords carry tone */
.hljs-comment, .hljs-quote { color: var(--muted); font-style: italic; }
.hljs-keyword, .hljs-built_in, .hljs-literal, .hljs-meta { color: var(--accent); }
.hljs-string, .hljs-number, .hljs-symbol { color: var(--ink); }
.hljs-title, .hljs-name, .hljs-type, .hljs-attr { color: var(--ink); font-weight: 600; }

/* ---- tables ------------------------------------------------------- */
table { border-collapse: collapse; width: 100%; font-size: 22px; margin: .2em 0; }
th, td { text-align: left; padding: 13px 18px; border-bottom: 1px solid var(--faint); }
thead th {
  font-family: var(--mono); font-size: 15px; font-weight: 600;
  text-transform: uppercase; letter-spacing: .06em; color: var(--muted);
  border-bottom: 2px solid var(--ink);
}
tbody tr:last-child td { border-bottom: 0; }

/* ---- blockquote / pull quote ------------------------------------- */
blockquote { margin: .1em 0 .35em; padding-left: 22px; border-left: 3px solid var(--accent); color: var(--ink); font-weight: 500; }
blockquote p { margin: 0; }
blockquote::before, blockquote::after { content: none; }

/* ---- header / footer / pagination -------------------------------- */
header {
  color: var(--muted); font-family: var(--mono);
  font-size: 14px; letter-spacing: .1em; text-transform: uppercase;
  top: 42px; left: 96px;
}
footer { color: var(--muted); font-family: var(--mono); font-size: 14px; left: 96px; bottom: 38px; }
section::after { color: var(--muted); font-family: var(--mono); font-size: 14px; right: 96px; bottom: 38px; }

/* ============================================================
   SLIDE VARIANTS  (set per slide with <!-- _class: name -->)
   ============================================================ */

/* COVER ------------------------------------------------------------ */
section.cover { flex-direction: column; justify-content: center; align-items: flex-start; gap: 0; }
section.cover .cover-row { display: flex; flex-direction: row; align-items: center; gap: 48px; }
section.cover .headline { flex: 0 0 auto; }
section.cover .cover-ic { flex: 0 0 auto; width: 260px; height: 217px; }
section.cover h1 { font-size: 64px; white-space: nowrap; }
section.cover .sub { font-size: 30px; color: var(--muted); margin: 0; max-width: none; }
section.cover .who { margin-top: 2.4em; font-family: var(--mono); font-size: 18px; line-height: 1.7; }
section.cover .who b { font-weight: 600; }
section.cover .who span { color: var(--muted); }
section.cover .url { font-family: var(--mono); font-size: 16px; color: var(--accent); margin-top: 1.1em; }

/* SECTION DIVIDER -------------------------------------------------- */
section.section { justify-content: center; }
section.section .no { font-family: var(--mono); font-size: 22px; color: var(--accent); letter-spacing: .12em; }
section.section h1 { font-size: 74px; margin: .12em 0 0; }
section.section .lead { color: var(--muted); font-size: 27px; margin-top: .5em; max-width: none; white-space: nowrap; }

/* STATEMENT (big single idea) ------------------------------------- */
section.statement { justify-content: center; }
section.statement p { font-size: 50px; font-weight: 600; line-height: 1.16; letter-spacing: -0.025em; max-width: 21ch; margin: .12em 0; }
section.statement small { font-size: 20px; }

/* METRIC (big number) --------------------------------------------- */
section.metric { justify-content: center; align-items: center; text-align: center; }
section.metric .big { font-size: 150px; font-weight: 600; letter-spacing: -0.045em; line-height: 1; margin: 0; }
section.metric .big .unit { font-size: .42em; color: var(--muted); }
section.metric.warn .big { color: var(--accent); }
section.metric .cap { font-size: 28px; max-width: none; margin: .35em 0 0; }
section.metric small { margin-top: 1.6em; }

/* QUOTE ----------------------------------------------------------- */
section.quote { justify-content: center; }
section.quote blockquote { font-size: 40px; line-height: 1.3; max-width: 24ch; letter-spacing: -0.015em; border-left: 0; padding-left: 0; }
section.quote blockquote::before { content: "\201C"; color: var(--accent); }
section.quote .by { font-family: var(--mono); font-size: 18px; color: var(--muted); margin-top: 1.3em; }

/* CLOSE ----------------------------------------------------------- */
section.close { justify-content: center; align-items: center; text-align: center; }
section.close h1 { font-size: 72px; }
section.close p { font-size: 28px; color: var(--muted); }
section.close .url { font-family: var(--mono); color: var(--accent); font-size: 20px; margin-top: 1.4em; }

/* hide chrome on full-bleed slides */
section.cover header, section.cover footer, section.cover::after,
section.section header, section.section footer, section.section::after,
section.statement header, section.statement footer, section.statement::after,
section.metric footer, section.metric::after,
section.quote header, section.quote footer, section.quote::after,
section.close header, section.close footer, section.close::after { display: none; }

/* ============================================================
   DIAGRAM VISUAL LANGUAGE  (shared by every inline SVG)
   ============================================================ */
.diagram { width: 100%; max-width: 940px; height: auto; display: block; margin: 8px auto 4px; }
.diagram text { font-family: var(--mono); }
.n      { fill: #FFFFFF; stroke: var(--ink); stroke-width: 2; }
.n-soft { fill: var(--paper); stroke: var(--faint); stroke-width: 2; }
.n-crit { fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2.5; }
.e      { fill: none; stroke: var(--ink); stroke-width: 2; }
.e-crit { fill: none; stroke: var(--accent); stroke-width: 2.5; }
.e-dash { fill: none; stroke: var(--accent); stroke-width: 2; stroke-dasharray: 5 5; }
.lbl    { fill: var(--ink);    font-size: 18px; }
.lbl-c  { fill: var(--accent); font-size: 18px; font-weight: 600; }
.sub    { fill: var(--muted);  font-size: 14px; }
.sub-c  { fill: var(--accent); font-size: 14px; }
/* embedded library icons (Lucide / Tabler) — normalized to ONE look:
   same ink colour, same constant stroke (non-scaling), same round caps,
   whatever the source. Accent one sub-path with .a (stroke) or .af (fill). */
.li  { fill: none; stroke: var(--ink); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.li, .li * { vector-effect: non-scaling-stroke; }
.li .a  { stroke: var(--accent); }
.li .af { fill: var(--accent); stroke: none; }
/* statement slides paired with a side illustration */
section.split { flex-direction: row; align-items: center; justify-content: center; gap: 44px; }
section.split .txt { flex: 0 0 auto; }
section.split .txt p { font-size: 36px; white-space: nowrap; max-width: none; margin: 0.6em 0; }   /* one line per sentence, blank line between */
section.split .ill { flex: 0 0 160px; width: 160px; height: 160px; display: block; }
/* The Pivot — aligned "from → to" shifts, each with an icon */
section.pivot { justify-content: center; }
section.pivot .grid { display: grid; grid-template-columns: auto auto 46px auto; align-items: center; column-gap: 26px; row-gap: 34px; font-size: 40px; font-weight: 600; letter-spacing: -0.02em; }
section.pivot .grid .from { text-align: right; }
section.pivot .grid .arr { color: var(--muted); font-weight: 400; }
section.pivot .grid .to { color: var(--accent); }
section.pivot .grid svg.li { width: 46px; height: 46px; }
/* domain icons (stroke-based, scaled inside an 80×80 local frame) */
.ic    { fill: none; stroke: var(--ink);    stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
.ic-c  { fill: none; stroke: var(--accent); stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
.icf   { fill: var(--ink);    stroke: none; }
.icf-c { fill: var(--accent); stroke: none; }
.dl    { fill: var(--ink);    font-size: 16px; }
</style>

<!-- _class: cover -->

<div class="cover-row">

<div class="headline">

# Build <span class="accent">AI</span> that matters

<p class="sub">Dependable systems for real-world impact</p>

</div>

<svg class="cover-ic li" viewBox="0 0 24 20" role="img" aria-label="A graphics card with a heartbeat in place of a label and a cooling fan — dependable AI, alive and monitored."><rect x="2.5" y="3.5" width="21" height="12" rx="1.5"/><path d="M2.5 5.5H1.2Q0.6 5.5 0.6 6.1V12.9Q0.6 13.5 1.2 13.5H2.5"/><rect x="4.5" y="6" width="8" height="7" rx="1"/><path class="a" d="M5.3 9.5h1.5l1-2 1.2 4 1-2h1.6"/><g transform="translate(12.4,4.4) scale(0.425)"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.8"/><path d="M12 10Q14.5 6 13 3" transform="rotate(0 12 12)"/><path d="M12 10Q14.5 6 13 3" transform="rotate(60 12 12)"/><path d="M12 10Q14.5 6 13 3" transform="rotate(120 12 12)"/><path d="M12 10Q14.5 6 13 3" transform="rotate(180 12 12)"/><path d="M12 10Q14.5 6 13 3" transform="rotate(240 12 12)"/><path d="M12 10Q14.5 6 13 3" transform="rotate(300 12 12)"/></g><rect x="5" y="15.5" width="4.2" height="1.8"/><path d="M6.4 15.5v1.8M7.8 15.5v1.8"/><rect x="10.8" y="15.5" width="4.2" height="1.8"/><path d="M12.2 15.5v1.8M13.6 15.5v1.8"/></svg>

</div>

<div class="who">
<b>João Galego</b><br>
<span>Head of AI ·</span> <a href="https://www.criticalsoftware.com/en">Critical Software</a><br>
<span>Invited Professor ·</span> <a href="https://isegexecutive.education/pt/">ISEG Executive Education</a>
</div>

<div class="url">dependable.critical-ai.dev</div>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><marker id="arr" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1C1B19"/></marker><marker id="arrc" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#C0362C"/></marker></defs></svg>

---

<!-- _class: statement split -->

<div class="txt">
<p>Great demos.</p>
<p>Fragile products.</p>
</div>

<svg class="ill" viewBox="0 0 24 24" role="img" aria-label="A cracked wine glass — fragile.">
<g class="li"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/><path class="a" d="M12 2 11.1 3.8 12.1 5.2 11.6 6.6"/></g>
</svg>

---

<!-- _class: statement split -->

<div class="txt">
<p>The question was never can we build AI?</p>
<p>It's can we trust it when it matters.</p>
</div>

<svg class="ill" viewBox="0 0 24 24" role="img" aria-label="A balance scale — weighing trust.">
<g class="li"><path class="a" d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/></g>
</svg>

---

<!-- _class: section -->

<div class="no">01</div>

# The Gap

<div class="lead">The money is real.<br>The results, mostly, are not.</div>

---

<!-- _class: metric -->
<!-- _header: '01 — The Gap' -->

<p class="big">$300<span class="unit">B</span></p>

<p class="cap">global AI spend this year<br>— growing <strong>4.2×</strong> faster than IT overall.</p>

<small>**Source:** [IDC](https://www.idc.com/getdoc.jsp?containerId=prUS49670322) · [McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#introduction)</small>

---

<!-- _class: metric warn -->
<!-- _header: '01 — The Gap' -->

<p class="big">86<span class="unit">%</span></p>

<p class="cap">of AI projects <strong>fail</strong> to deliver.<br>Half never reach production at all.</p>

<small>**Source:** [InfoWorld](https://www.infoworld.com/article/2270692/why-ai-investments-fail-to-deliver.html) · [IDC](https://www.idc.com/getdoc.jsp?containerId=prUS49670322)</small>

---

<!-- _class: content -->
<!-- _header: '01 — The Gap' -->

## The model is the easy part

<svg class="diagram" viewBox="0 0 1000 300" role="img" aria-label="A real ML system: the tiny ML-code box is surrounded by far larger supporting components — configuration, data collection, data verification, resource management, serving infrastructure, monitoring, feature extraction, analysis tools, process management.">
<rect class="n" x="30" y="40" width="150" height="170" rx="3"/>
<rect class="n" x="200" y="60" width="150" height="130" rx="3"/>
<rect class="n" x="368" y="24" width="110" height="135" rx="3" style="fill:#76746E"/>
<rect class="n" x="496" y="40" width="150" height="105" rx="3" style="fill:#E2E0D9"/>
<rect class="n" x="700" y="16" width="120" height="250" rx="3"/>
<rect class="n" x="840" y="48" width="135" height="120" rx="3" style="fill:#E2E0D9"/>
<rect class="n" x="215" y="200" width="165" height="70" rx="3" style="fill:#E2E0D9"/>
<rect class="n" x="452" y="178" width="180" height="48" rx="3" style="fill:#E2E0D9"/>
<rect class="n" x="452" y="232" width="195" height="58" rx="3" style="fill:#E2E0D9"/>
<rect x="392" y="168" width="50" height="36" rx="3" style="fill:#C0362C;stroke:#C0362C"/>
<text x="105" y="125" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Configuration</text>
<text x="275" y="116" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Data</text>
<text x="275" y="134" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Collection</text>
<text x="423" y="83" fill="#FFFFFF" font-size="14" text-anchor="middle" dominant-baseline="central">Data</text>
<text x="423" y="100" fill="#FFFFFF" font-size="14" text-anchor="middle" dominant-baseline="central">Verification</text>
<text x="571" y="75" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Machine</text>
<text x="571" y="92" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Resource</text>
<text x="571" y="109" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Management</text>
<text x="760" y="132" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Serving</text>
<text x="760" y="150" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Infrastructure</text>
<text x="907" y="108" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Monitoring</text>
<text x="297" y="227" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Feature</text>
<text x="297" y="244" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Extraction</text>
<text x="542" y="202" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Analysis Tools</text>
<text x="549" y="253" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Process Management</text>
<text x="549" y="270" fill="#1C1B19" font-size="14" text-anchor="middle" dominant-baseline="central">Tools</text>
<text x="417" y="180" fill="#FFFFFF" font-size="10" text-anchor="middle" dominant-baseline="central">ML</text>
<text x="417" y="192" fill="#FFFFFF" font-size="10" text-anchor="middle" dominant-baseline="central">Code</text>
</svg>

<small style="display:block;text-align:center">Only a fraction of a real ML system is ML.</small>

<small style="display:block;text-align:center">**Source:** [Sculley et al. (2015)](https://proceedings.neurips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html)</small>

---

<!-- _class: statement split -->

<div class="txt">
<p>It was never an intelligence problem.</p>
<p>It's a reliability problem.</p>
</div>

<svg class="ill" viewBox="0 0 24 24" role="img" aria-label="An anchor — steadfast and dependable.">
<g class="li"><path d="M12 6v16"/><path class="a" d="m19 13 2-1a9 9 0 0 1-18 0l2 1"/><path d="M9 11h6"/><circle cx="12" cy="4" r="2"/></g>
</svg>

---

<!-- _class: section -->

<div class="no">02</div>

# Why AI Fails

<div class="lead">Not because the model is dumb — because the system is brittle.</div>

---

<!-- _class: content -->
<!-- _header: '02 — Why AI Fails' -->

## AI already runs where failure isn't an option

<svg class="diagram" style="margin:auto" viewBox="0 0 1000 360" role="img" aria-label="Domains where dependable AI matters: automotive, railway, medical devices, banking, manufacturing, insurance, aviation, space, energy, defense.">
<g class="li" transform="translate(61.6,43.6) scale(3.2)"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><path d="M9 17h6"/><circle class="a" cx="7" cy="17" r="2"/><circle class="a" cx="17" cy="17" r="2"/></g>
<g class="li" transform="translate(261.6,43.6) scale(3.2)"><path class="a" d="M8 3.1V7a4 4 0 0 0 8 0V3.1"/><path d="m9 15-1-1"/><path d="m15 15 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/></g>
<g class="li" transform="translate(461.6,43.6) scale(3.2)"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path class="a" d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></g>
<g class="li" transform="translate(661.6,43.6) scale(3.2)"><path d="M10 18v-7"/><path class="a" d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></g>
<g class="li" transform="translate(861.6,43.6) scale(3.2)"><path class="a" d="M12 16h.01"/><path class="a" d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path class="a" d="M8 16h.01"/></g>
<g class="li" transform="translate(61.6,223.6) scale(3.2)"><circle cx="12" cy="12" r="10"/><path class="a" d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path class="a" d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></g>
<g class="li" transform="translate(261.6,223.6) scale(3.2)"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/><circle class="af" cx="18.7" cy="5.3" r="1.5"/></g>
<g class="li" transform="translate(461.6,223.6) scale(3.2)"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path class="a" d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/></g>
<g class="li" transform="translate(661.6,223.6) scale(3.2)"><path class="a" d="m11 7-3 5h4l-3 5"/><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/><path d="M22 14v-4"/><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/></g>
<g class="li" transform="translate(861.6,223.6) scale(3.2)"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path class="a" d="m9 12 2 2 4-4"/></g>
<text class="dl" x="100" y="156" text-anchor="middle">Automotive</text>
<text class="dl" x="300" y="156" text-anchor="middle">Railway</text>
<text class="dl" x="500" y="156" text-anchor="middle">Medical Devices</text>
<text class="dl" x="700" y="156" text-anchor="middle">Banking</text>
<text class="dl" x="900" y="156" text-anchor="middle">Manufacturing</text>
<text class="dl" x="100" y="336" text-anchor="middle">Insurance</text>
<text class="dl" x="300" y="336" text-anchor="middle">Aviation</text>
<text class="dl" x="500" y="336" text-anchor="middle">Space</text>
<text class="dl" x="700" y="336" text-anchor="middle">Energy</text>
<text class="dl" x="900" y="336" text-anchor="middle">Defense</text>
</svg>

---

<!-- _class: content -->
<!-- _header: '02 — Why AI Fails' -->

## What is a critical system?

A system whose failure may cause —

- loss of life
- infrastructure damage
- environmental harm
- mission failure
- major financial loss

<small>Good enough is not good enough.</small>

---

<!-- _class: content -->
<!-- _header: '02 — Why AI Fails' -->

## When they fail, it's rarely the algorithm

| Incident | Root cause | Cost |
|---|---|---|
| Mars Climate Orbiter | metric vs. imperial units | spacecraft lost |
| Patriot missile, 1991 | accumulating clock drift | 28 lives |
| Knight Capital, 2012 | one bad, unflagged deploy | $440M in 45 min |
| Toyota acceleration | tangled, untestable code | recalls & deaths |

<small>None were intelligence failures. Every one was a <strong>systems</strong> failure.</small>

---

<!-- _class: quote -->

> Do you code with your loved ones in mind?

<div class="by">— Emily Durie-Johnson, on safety-critical C++</div>

---

<!-- _class: content -->
<!-- _header: '02 — Why AI Fails' -->

## You shifted control to the data

<svg class="diagram" viewBox="0 0 1000 380" role="img" aria-label="Traditional software is deterministic code; an ML system replaces the code with a model learned from data.">
<line class="e" x1="500" y1="36" x2="500" y2="344" stroke="#E2E0D9"/>
<text class="sub" x="40"  y="34">TRADITIONAL SOFTWARE</text>
<text class="sub" x="560" y="34">ML SYSTEM</text>
<rect class="n" x="190" y="70"  width="120" height="52" rx="8"/>
<rect class="n" x="185" y="150" width="130" height="52" rx="8"/>
<rect class="n" x="190" y="230" width="120" height="52" rx="8"/>
<line class="e" x1="250" y1="122" x2="250" y2="148" marker-end="url(#arr)"/>
<line class="e" x1="250" y1="202" x2="250" y2="228" marker-end="url(#arr)"/>
<text class="lbl" x="250" y="96"  text-anchor="middle" dominant-baseline="central">Input</text>
<text class="lbl" x="250" y="176" text-anchor="middle" dominant-baseline="central">Code</text>
<text class="lbl" x="250" y="256" text-anchor="middle" dominant-baseline="central">Output</text>
<text class="sub" x="250" y="322" text-anchor="middle">you wrote the rules</text>
<rect class="n"      x="690" y="70"  width="120" height="52" rx="8"/>
<rect class="n-crit" x="685" y="150" width="130" height="52" rx="8"/>
<rect class="n"      x="690" y="230" width="120" height="52" rx="8"/>
<line class="e" x1="750" y1="122" x2="750" y2="148" marker-end="url(#arr)"/>
<line class="e" x1="750" y1="202" x2="750" y2="228" marker-end="url(#arr)"/>
<text class="lbl"   x="750" y="96"  text-anchor="middle" dominant-baseline="central">Data</text>
<text class="lbl-c" x="750" y="176" text-anchor="middle" dominant-baseline="central">Model</text>
<text class="lbl"   x="750" y="256" text-anchor="middle" dominant-baseline="central">Output</text>
<text class="sub-c" x="750" y="322" text-anchor="middle">the data wrote the rules</text>
</svg>

<small>Change the data, change the behavior. Garbage in, garbage out.</small>

---

<!-- _class: statement split -->

<div class="txt">
<p>You don't always know what it will do.</p>
<p>You don't always know why it broke.</p>
<p>You are not in control.</p>
</div>

<svg class="ill" viewBox="0 0 24 24" role="img" aria-label="A steering wheel with a line through it — not in control.">
<g class="li"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M12 14l0 7"/><path d="M10 12l-6.75 -2"/><path d="M14 12l6.75 -2"/><path class="a" d="M5 19 19 5"/></g>
</svg>

---

<!-- _class: content -->
<!-- _header: '02 — Why AI Fails' -->

## Models fail in strange ways

<svg class="diagram" viewBox="0 0 1000 320" role="img" aria-label="A few stickers turn a STOP sign into a 45 mph reading for a classifier.">
<polygon style="fill:#C0362C;stroke:#C0362C" points="310,210 240,280 140,280 70,210 70,110 140,40 240,40 310,110"/>
<rect x="118" y="150" width="66" height="20" rx="3" fill="#FFFFFF" opacity="0.92"/>
<rect x="206" y="196" width="46" height="20" rx="3" fill="#FFFFFF" opacity="0.92"/>
<rect x="110" y="200" width="34" height="20" rx="3" fill="#FFFFFF" opacity="0.92"/>
<text x="190" y="172" text-anchor="middle" dominant-baseline="central" fill="#FFFFFF" font-size="50" font-weight="700">STOP</text>
<line class="e" x1="360" y1="160" x2="520" y2="160" stroke-width="5"/>
<polygon points="516,147 548,160 516,173" fill="#1C1B19"/>
<text class="sub" x="582" y="136" style="font-size:18px">a tampered classifier now reads:</text>
<text class="lbl-c" x="582" y="194" style="font-size:38px">“speed limit 45”</text>
</svg>

<small>A few stickers, and STOP becomes 45 mph — only to the model.</small>

<small>**Source:** [Eykholt et al. (2018)](https://arxiv.org/abs/1707.08945)</small>

---

<!-- _class: section -->

<div class="no">03</div>

# Dependable by Design

<div class="lead">If you can't prove it's safe, constrain it so it can't be unsafe.</div>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Two golden rules

1. Don't build AI just because you have **data**.
2. Don't use AI just because you **can**.

<small>**Source:** [ECSS ML handbook (2024)](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Don't prove it's safe — cage it

<svg class="diagram" viewBox="0 0 1000 360" role="img" aria-label="A safety cage wraps the model: a safety monitor checks every output and falls back to a safe action when needed.">
<rect x="200" y="40" width="620" height="280" rx="16" fill="none" stroke="#C0362C" stroke-width="2" stroke-dasharray="7 6"/>
<text class="lbl-c" x="220" y="66" font-size="14">SAFETY CAGE</text>
<rect class="n"      x="40"  y="150" width="110" height="52" rx="8"/>
<rect class="n"      x="240" y="150" width="150" height="52" rx="8"/>
<rect class="n-crit" x="470" y="140" width="170" height="72" rx="10"/>
<rect class="n"      x="860" y="150" width="110" height="52" rx="8"/>
<rect class="e-dash" x="470" y="252" width="170" height="46" rx="8" fill="#C0362C14"/>
<line class="e" x1="150" y1="176" x2="238" y2="176" marker-end="url(#arr)"/>
<line class="e" x1="390" y1="176" x2="468" y2="176" marker-end="url(#arr)"/>
<line class="e" x1="640" y1="176" x2="858" y2="176" marker-end="url(#arr)"/>
<line class="e-crit" x1="555" y1="212" x2="555" y2="250" marker-end="url(#arrc)"/>
<text class="lbl"   x="95"  y="176" text-anchor="middle" dominant-baseline="central">Input</text>
<text class="lbl"   x="315" y="176" text-anchor="middle" dominant-baseline="central">ML model</text>
<text class="lbl-c" x="555" y="166" text-anchor="middle" dominant-baseline="central">Safety</text>
<text class="lbl-c" x="555" y="190" text-anchor="middle" dominant-baseline="central">monitor</text>
<text class="lbl"   x="915" y="176" text-anchor="middle" dominant-baseline="central">Output</text>
<text class="lbl-c" x="555" y="275" text-anchor="middle" dominant-baseline="central">safe fallback</text>
</svg>

<small>The model proposes. The monitor disposes. The cage is the part you can trust.</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Doer / Checker

<svg class="diagram" viewBox="0 0 1000 360" role="img" aria-label="A doer proposes a candidate output; an independent high-assurance checker passes it or forces a safe state.">
<polyline class="e" points="95,152 95,72 575,72 575,138" marker-end="url(#arr)"/>
<text class="sub" x="320" y="62" text-anchor="middle">redundant inputs</text>
<rect class="n"      x="40"  y="152" width="110" height="56" rx="8"/>
<rect class="n"      x="222" y="148" width="168" height="64" rx="10"/>
<rect class="n-crit" x="462" y="138" width="226" height="84" rx="12"/>
<rect class="n"      x="772" y="152" width="158" height="56" rx="8"/>
<rect class="e-dash" x="490" y="266" width="170" height="46" rx="8" fill="#C0362C14"/>
<line class="e" x1="150" y1="180" x2="220" y2="180" marker-end="url(#arr)"/>
<line class="e" x1="390" y1="180" x2="460" y2="180" marker-end="url(#arr)"/>
<line class="e" x1="688" y1="180" x2="770" y2="180" marker-end="url(#arr)"/>
<line class="e-crit" x1="575" y1="222" x2="575" y2="264" marker-end="url(#arrc)"/>
<text class="lbl"   x="95"  y="180" text-anchor="middle" dominant-baseline="central">Input</text>
<text class="lbl"   x="306" y="174" text-anchor="middle" dominant-baseline="central">Doer</text>
<text class="sub"   x="306" y="198" text-anchor="middle">performance</text>
<text class="lbl-c" x="575" y="170" text-anchor="middle" dominant-baseline="central">Checker</text>
<text class="sub-c" x="575" y="196" text-anchor="middle">safety · high-assurance</text>
<text class="lbl"   x="851" y="180" text-anchor="middle" dominant-baseline="central">Safe output</text>
<text class="lbl-c" x="575" y="289" text-anchor="middle" dominant-baseline="central">⊥ safe state</text>
</svg>

<small>The doer optimizes performance. The checker owns safety — and must be the most trustworthy part.</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## N-version & voting

<svg class="diagram" viewBox="0 0 1000 360" role="img" aria-label="One input fans out to three independent models; a voter takes the majority and produces the output.">
<rect class="n"      x="40"  y="150" width="110" height="52" rx="8"/>
<rect class="n"      x="230" y="40"  width="160" height="56" rx="9"/>
<rect class="n"      x="230" y="150" width="160" height="56" rx="9"/>
<rect class="n"      x="230" y="260" width="160" height="56" rx="9"/>
<rect class="n-crit" x="560" y="138" width="150" height="80" rx="10"/>
<rect class="n"      x="790" y="150" width="150" height="56" rx="9"/>
<line class="e" x1="150" y1="170" x2="228" y2="76"  marker-end="url(#arr)"/>
<line class="e" x1="150" y1="176" x2="228" y2="178" marker-end="url(#arr)"/>
<line class="e" x1="150" y1="182" x2="228" y2="284" marker-end="url(#arr)"/>
<line class="e" x1="390" y1="68"  x2="558" y2="150" marker-end="url(#arr)"/>
<line class="e" x1="390" y1="178" x2="558" y2="178" marker-end="url(#arr)"/>
<line class="e" x1="390" y1="288" x2="558" y2="206" marker-end="url(#arr)"/>
<line class="e" x1="710" y1="178" x2="788" y2="178" marker-end="url(#arr)"/>
<text class="lbl"   x="95"  y="176" text-anchor="middle" dominant-baseline="central">Input</text>
<text class="lbl"   x="310" y="68"  text-anchor="middle" dominant-baseline="central">Model A</text>
<text class="lbl"   x="310" y="178" text-anchor="middle" dominant-baseline="central">Model B</text>
<text class="lbl"   x="310" y="288" text-anchor="middle" dominant-baseline="central">Model C</text>
<text class="lbl-c" x="635" y="166" text-anchor="middle" dominant-baseline="central">Voter</text>
<text class="sub-c" x="635" y="192" text-anchor="middle">majority</text>
<text class="lbl"   x="865" y="178" text-anchor="middle" dominant-baseline="central">Output</text>
</svg>

<small>Run several independent versions. Disagreement is a signal, not noise.</small>

<small>**Source:** [Machida (2019)](https://www.sd.cs.tsukuba.ac.jp/en/n-version_mls.html)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## 2-version vs 3-version

<svg class="diagram" viewBox="0 0 1000 360" role="img" aria-label="A two-version architecture compares two models and fails safe on disagreement; a three-version architecture votes and tolerates one fault.">
<line x1="500" y1="40" x2="500" y2="330" stroke="#E2E0D9" stroke-width="2"/>
<text class="sub" x="40" y="34">TWO VERSIONS · detect → fail-safe</text>
<text class="sub" x="540" y="34">THREE VERSIONS · tolerate → stay up</text>
<rect class="n" x="40" y="80" width="104" height="46" rx="9"/>
<rect class="n" x="40" y="176" width="104" height="46" rx="9"/>
<rect class="n-crit" x="196" y="116" width="120" height="70" rx="10"/>
<rect class="n" x="352" y="128" width="110" height="46" rx="9"/>
<rect class="e-dash" x="196" y="250" width="120" height="46" rx="8" fill="#C0362C14"/>
<line class="e" x1="144" y1="103" x2="196" y2="138" marker-end="url(#arr)"/>
<line class="e" x1="144" y1="199" x2="196" y2="164" marker-end="url(#arr)"/>
<line class="e" x1="316" y1="151" x2="352" y2="151" marker-end="url(#arr)"/>
<line class="e-crit" x1="256" y1="186" x2="256" y2="248" marker-end="url(#arrc)"/>
<text class="lbl" x="92" y="103" text-anchor="middle" dominant-baseline="central">Model A</text>
<text class="lbl" x="92" y="199" text-anchor="middle" dominant-baseline="central">Model B</text>
<text class="lbl-c" x="256" y="151" text-anchor="middle" dominant-baseline="central">Compare</text>
<text class="lbl" x="407" y="151" text-anchor="middle" dominant-baseline="central">Output</text>
<text class="lbl-c" x="256" y="273" text-anchor="middle" dominant-baseline="central">⊥ stop</text>
<text class="sub" x="300" y="220" text-anchor="middle">disagree</text>
<rect class="n" x="540" y="58" width="104" height="44" rx="9"/>
<rect class="n" x="540" y="150" width="104" height="44" rx="9"/>
<rect class="n" x="540" y="242" width="104" height="44" rx="9"/>
<rect class="n-crit" x="700" y="150" width="118" height="64" rx="10"/>
<rect class="n" x="852" y="160" width="104" height="44" rx="9"/>
<line class="e" x1="644" y1="80" x2="700" y2="160" marker-end="url(#arr)"/>
<line class="e" x1="644" y1="172" x2="700" y2="182" marker-end="url(#arr)"/>
<line class="e" x1="644" y1="264" x2="700" y2="204" marker-end="url(#arr)"/>
<line class="e" x1="818" y1="182" x2="852" y2="182" marker-end="url(#arr)"/>
<text class="lbl" x="592" y="80" text-anchor="middle" dominant-baseline="central">Model A</text>
<text class="lbl" x="592" y="172" text-anchor="middle" dominant-baseline="central">Model B</text>
<text class="lbl" x="592" y="264" text-anchor="middle" dominant-baseline="central">Model C</text>
<text class="lbl-c" x="759" y="176" text-anchor="middle" dominant-baseline="central">Voter</text>
<text class="sub-c" x="759" y="198" text-anchor="middle">majority</text>
<text class="lbl" x="904" y="182" text-anchor="middle" dominant-baseline="central">Output</text>
</svg>

<small>Two versions detect a fault and fail safe. Three tolerate one and stay available.</small>

<small>**Source:** [Machida (2019)](https://www.sd.cs.tsukuba.ac.jp/en/n-version_mls.html)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Simplex

<svg class="diagram" viewBox="0 0 1000 420" role="img" aria-label="A high-performance controller and a simple verified safety controller both feed a decision module that switches control to the plant; plant state feeds back.">
<polyline class="e" points="810,232 810,388 22,388 22,75 40,75" marker-end="url(#arr)"/>
<line class="e" x1="22" y1="285" x2="40" y2="285" marker-end="url(#arr)"/>
<rect class="n"      x="40"  y="40"  width="240" height="70" rx="10"/>
<rect class="n-crit" x="40"  y="250" width="240" height="70" rx="10"/>
<rect class="n-crit" x="400" y="145" width="190" height="90" rx="10"/>
<rect class="n"      x="720" y="150" width="180" height="80" rx="10"/>
<line class="e" x1="280" y1="74"  x2="398" y2="168" marker-end="url(#arr)"/>
<line class="e-crit" x1="280" y1="286" x2="398" y2="212" marker-end="url(#arrc)"/>
<line class="e" x1="590" y1="190" x2="718" y2="190" marker-end="url(#arr)"/>
<text class="lbl"   x="160" y="66"  text-anchor="middle" dominant-baseline="central">Advanced controller</text>
<text class="sub"   x="160" y="90"  text-anchor="middle">high-performance · ML</text>
<text class="lbl-c" x="160" y="276" text-anchor="middle" dominant-baseline="central">Safety controller</text>
<text class="sub-c" x="160" y="300" text-anchor="middle">simple · verified</text>
<text class="lbl-c" x="495" y="178" text-anchor="middle" dominant-baseline="central">Decision module</text>
<text class="sub-c" x="495" y="204" text-anchor="middle">monitor + switch</text>
<text class="lbl"   x="810" y="190" text-anchor="middle" dominant-baseline="central">Plant</text>
<text class="sub"   x="655" y="180" text-anchor="middle">command</text>
<text class="sub"   x="465" y="406" text-anchor="middle">state feedback</text>
</svg>

<small>A verified controller stands by. The moment the smart one nears the boundary, control switches.</small>

<small>**Source:** [Phan et al. (2019)](https://arxiv.org/abs/1908.00528)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Assurance has levels

| Standard | Domain | Levels · low → high |
|---|---|---|
| ISO 26262 — SIL | Automotive | QM · A · B · C · D |
| DO-178C — DAL | Aerospace | E · D · C · B · A |
| IEC 61508 — SIL | Industrial | 1 · 2 · 3 · 4 |

<small>The doer can live low. The <strong>checker</strong> must live at the very top.</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Test it like it's part of the system

Because it is.

- **known** — the expected
- **coverage** — the internals
- **edge** — the unknown
- **adversarial** — the hostile

<small>Test the failure modes, not just the average case.</small>

<small>**Source:** [ECSS ML handbook (2024)](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## The V-cycle grows a second arm

<svg class="diagram" viewBox="0 0 1000 360" role="img" aria-label="A W-shaped lifecycle: the classic software V plus a second V for the model's data and training track.">
<polyline class="e"      points="80,90 290,290 500,90"/>
<polyline class="e-crit" points="500,90 710,290 920,90"/>
<circle class="n" cx="80" cy="90" r="8"/>
<circle class="n" cx="290" cy="290" r="8"/>
<circle class="n-crit" cx="500" cy="90" r="8"/>
<circle class="n-crit" cx="710" cy="290" r="8"/>
<circle class="n" cx="920" cy="90" r="8"/>
<text class="lbl"   x="80"  y="64"  text-anchor="middle">System reqs</text>
<text class="lbl"   x="290" y="320" text-anchor="middle">Build &amp; integrate</text>
<text class="lbl-c" x="500" y="64"  text-anchor="middle">Model spec · data</text>
<text class="lbl-c" x="710" y="320" text-anchor="middle">Train &amp; verify</text>
<text class="lbl"   x="920" y="64"  text-anchor="middle">Validate</text>
</svg>

<small>A parallel track to specify, build, and verify the model itself.</small>

<small>**Source:** [EASA / Daedalean (2024)](https://www.easa.europa.eu/en/document-library/general-publications/concepts-design-assurance-neural-networks-codann)</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Prove what cannot happen

Formal verification: state a property, then prove the system can never violate it.

$$\square\,\lnot\,\textsf{bad} \qquad\qquad \Diamond\,\textsf{good}$$

- **safety** — a bad thing *never* happens
- **liveness** — a good thing *eventually* happens

<small>Not a tax on development. A specification you can actually trust.</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## Formal methods → AI

Specify an ML operator, prove the implementation matches, emit verified C.

```why3
let cflatten (x r : ctensor) (axis: int32)
  requires { valid_tensor x /\ valid_tensor r }
  requires { r.t_rank = 2 }
  ensures  { tensor r = flatten (tensor x) (to_int axis) }
= for i = 0 to cdim_size r.t_dims r.t_rank - 1 do
    invariant { forall k. 0 <= k < i -> value_at r.t_data k = value_at x.t_data k }
    r.t_data[i] <- x.t_data[i]
  done
```

<small>A verified ONNX kernel: deterministic, and provably correct by construction.</small>

---

<!-- _class: content -->
<!-- _header: '03 — Dependable by Design' -->

## AI → formal methods

The model writes the code *and* the proof that it meets its spec.

```lean
-- spec: remove element k from array s
def removeElement (s : Array Int) (k : Nat) (h : k < s.size) : Array Int :=
  s.eraseIdx! k

theorem removeElement_spec (s : Array Int) (k : Nat) (h : k < s.size) :
    (removeElement s k h).size = s.size - 1
       ∧ (∀ i, i < k → (removeElement s k h)[i]! = s[i]!) := by
  ...  -- machine-checked
```

> When AI generates verified software as easily as unverified, verification stops being a cost. It becomes a **catalyst**.

<small>— Leonardo de Moura, creator of Lean</small>

---

<!-- _class: section -->

<div class="no">04</div>

# Five Pillars

<div class="lead">Dependability isn't a feature.<br>It's a discipline you can practice.</div>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars' -->

## The dependable AI mindset

1. **Data** — garbage in, garbage out
2. **Model** — accuracy isn't reliability
3. **Observability** — if you can't see it, you can't trust it
4. **Guardrails** — expect failure, design for safety
5. **Humans** — AI works best when we're around

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Data' -->

## Data

> Garbage in, garbage out.

If the data is wrong, incomplete, or drifting, the system fails — no matter the model.

- validation & schema enforcement
- dataset versioning
- distribution monitoring
- label-quality checks

<small>You don't control your model. <strong>Your data does.</strong></small>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Model' -->

## Model

> Accuracy isn't reliability.

A high benchmark score does not guarantee safe real-world behavior.

- robustness
- edge cases
- distribution shift
- calibration

<small>Test the failure modes — not just the average case.</small>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Observability' -->

## Observability

> If you can't see it, you can't trust it.

- data drift
- prediction drift
- system health
- anomaly signals

<small>The dog that didn't bark. Silent failures are the most dangerous failures.</small>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Guardrails' -->

## Guardrails

> Expect failure. Design for safety.

Models will eventually fail. The system must handle it safely.

- confidence thresholds
- fallback logic
- human escalation
- policy checks

<small>Reliable systems don't fail silently. They fail <strong>gracefully</strong>.</small>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Humans' -->

## Humans

> AI works best when we're around.

- **in the loop** — a human approves each decision
- **on the loop** — AI acts; humans monitor and can intervene
- **over the loop** — AI runs; humans set goals and review outcomes

<small>Humans are not the weakness. We are part of the safety system.</small>

---

<!-- _class: content -->
<!-- _header: '04 — Five Pillars · Humans' -->

## The pattern, in code

```python
# Predict — the model takes a shot
result, confidence = model.predict(input_data)

# Check — too unsure? don't guess
if confidence < THRESHOLD:
    result = route_to_fallback() or route_to_human()

# Log — always leave a trail
log_decision(input_data, result, confidence)
```

<small>Quis custodiet ipsos custodes? — design so a single mistake can't become a systemic failure.</small>

---

<!-- _class: section -->

<div class="no">05</div>

# The Pivot

<div class="lead">From building intelligence to engineering trust.</div>

---

<!-- _class: pivot -->
<!-- _header: '05 — The Pivot' -->

<div class="grid">
<span class="from">model accuracy</span><span class="arr">→</span><svg class="li" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span class="to">system reliability</span>
<span class="from">benchmarks</span><span class="arr">→</span><svg class="li" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg><span class="to">real-world impact</span>
<span class="from">research</span><span class="arr">→</span><svg class="li" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg><span class="to">engineering</span>
</div>

---

<!-- _class: statement split -->

<div class="txt">
<p>Engineering doesn't stop at it works.</p>
<p>It begins at it lasts.</p>
</div>

<svg class="ill" viewBox="0 0 24 24" role="img" aria-label="An infinity loop — built to last.">
<g class="li"><path class="a" d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/></g>
</svg>

---

<!-- _class: close -->

# Build <span class="accent">AI</span> that matters

<p>AI first, human always.</p>

<div class="url">dependable.critical-ai.dev</div>
