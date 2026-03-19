#!/usr/bin/env node
/**
 * md2slides - Convert markdown slides to reveal.js HTML
 *
 * Replicates vscode-reveal's export approach:
 *   - YAML front matter for config (theme, transition, etc.)
 *   - Horizontal slides: ---
 *   - Vertical slides: --
 *   - Fragments: {.fragment .fade-in} on any element
 *   - Mermaid: rendered via kroki.io (same as vscode-reveal)
 *   - Math: MathJax via CDN
 *
 * Usage: node md2slides.js <input.md> [output.html]
 */
'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { execSync } = require('child_process');

// ---- Auto-install markdown-it if missing ----
function requireMarkdownIt() {
  // Try local node_modules first
  const local = path.join(__dirname, 'node_modules', 'markdown-it');
  if (fs.existsSync(local)) return require(local);
  try { return require('markdown-it'); } catch (_) {}
  // Install to script directory using --prefix
  console.log('Installing markdown-it...');
  execSync(`npm install markdown-it --prefix "${__dirname}"`, { stdio: 'inherit' });
  return require(path.join(__dirname, 'node_modules', 'markdown-it'));
}
const MarkdownIt = requireMarkdownIt();

// ---- Front matter (simple key: value YAML) ----
function parseFrontMatter(content) {
  const match = content.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    let [, key, val] = m;
    val = val.trim().replace(/^["']|["']$/g, '');
    if (val === 'true')       meta[key] = true;
    else if (val === 'false') meta[key] = false;
    else if (val === 'null')  meta[key] = null;
    else if (/^\d+(\.\d+)?$/.test(val)) meta[key] = Number(val);
    else meta[key] = val;
  }
  return { meta, body: match[2] };
}

// ---- Slide splitting ----
function splitSlides(body) {
  // Split on horizontal separator (---), then vertical (--)
  return body
    .split(/\n---\n/)
    .map(h => h.split(/\n--\n/));
}

// ---- Mermaid via kroki.io (same approach as vscode-reveal) ----
function mermaidKroki(code) {
  // kroki.io expects zlib deflate (with header), URL-safe base64, no padding
  const compressed = zlib.deflateSync(Buffer.from(code.trim(), 'utf8'));
  const b64 = compressed.toString('base64')
    .replace(/\//g, '_')
    .replace(/\+/g, '-')
    .replace(/=/g, '');
  return `<img src="https://kroki.io/mermaid/svg/${b64}" style="max-width:100%;max-height:70vh;" />`;
}

// ---- Fragment preprocessing ----
// Convert {.fragment .fade-in} at end of a line to HTML with class attributes.
// Headings, paragraphs, blockquotes → raw HTML (markdown-it passes html: true).
// List items → inline span marker (bounded per-<li> regex in postprocess).
function preprocessFragments(text, mdRenderer) {
  const lines = text.split('\n');
  const out = [];

  for (const line of lines) {
    const m = line.match(/^(.+?)\s*\{((?:\.\S+\s*)+)\}\s*$/);
    if (!m) { out.push(line); continue; }

    const [, content, attrStr] = m;
    const cls = attrStr.match(/\.\S+/g).map(c => c.slice(1)).join(' ');

    // Heading: ### text {.cls} → <hN class="cls">text</hN>
    const h = content.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      const inner = mdRenderer ? mdRenderer.renderInline(h[2]) : h[2];
      out.push(`<h${h[1].length} class="${cls}">${inner}</h${h[1].length}>`);
      continue;
    }

    // Blockquote: > text {.cls} → <blockquote class="cls"><p>text</p></blockquote>
    const bq = content.match(/^>\s*(.+)$/);
    if (bq) {
      const inner = mdRenderer ? mdRenderer.renderInline(bq[1]) : bq[1];
      out.push(`<blockquote class="${cls}"><p>${inner}</p></blockquote>`);
      continue;
    }

    // List item: - text {.cls} → keep as list item with marker span (postprocessed)
    if (/^[-*]\s/.test(content) || /^\d+\.\s/.test(content)) {
      out.push(`${content} <span data-fa="${cls}"></span>`);
      continue;
    }

    // Paragraph: text {.cls} → <p class="cls">text</p>
    const rendered = mdRenderer ? mdRenderer.renderInline(content) : content;
    out.push(`<p class="${cls}">${rendered}</p>`);
  }

  return out.join('\n');
}

// Apply fragment class to list items (bounded within each <li>)
function applyFragmentAttrs(html) {
  return html.replace(
    /<li([^>]*)>((?:(?!<\/li>)[\s\S])*)<span data-fa="([^"]+)"><\/span>((?:(?!<\/li>)[\s\S])*)<\/li>/g,
    (_, attrs, before, cls, after) => `<li${attrs} class="${cls}">${before}${after}</li>`
  );
}

// ---- Markdown renderer ----
const md = new MarkdownIt({ html: true, linkify: false, typographer: false });

// Override fence: render mermaid blocks via kroki.io
const defaultFence = md.renderer.rules.fence || function(tokens, idx, opts, _env, self) {
  return self.renderToken(tokens, idx, opts);
};
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  if (token.info.trim() === 'mermaid') {
    return `\n<div style="text-align:center">${mermaidKroki(token.content)}</div>\n`;
  }
  return defaultFence(tokens, idx, options, env, self);
};

function renderSlide(text) {
  const preprocessed = preprocessFragments(text, md);
  const html = md.render(preprocessed);
  return applyFragmentAttrs(html);
}

// ---- HTML generation ----
function buildSections(slides) {
  return slides.map(hSlide => {
    if (hSlide.length === 1) {
      return `<section>\n${renderSlide(hSlide[0])}</section>`;
    }
    const inner = hSlide
      .map(v => `  <section>\n${renderSlide(v)}  </section>`)
      .join('\n');
    return `<section>\n${inner}\n</section>`;
  }).join('\n\n');
}

function generateHTML(slides, meta) {
  const theme           = meta.theme           || 'black';
  const transition      = meta.transition      || 'slide';
  const title           = meta.title           || 'Presentation';
  const highlightTheme  = meta.highlightTheme  || 'monokai';
  const slideNumber     = meta.slideNumber     !== undefined ? meta.slideNumber : false;
  const fragments       = meta.fragments       !== undefined ? meta.fragments   : true;

  const CDN = 'https://cdn.jsdelivr.net/npm/reveal.js@4.3.1';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <link rel="stylesheet" href="${CDN}/dist/reset.css"/>
  <link rel="stylesheet" href="${CDN}/dist/reveal.css"/>
  <link rel="stylesheet" href="${CDN}/dist/theme/${theme}.css"/>
  <link rel="stylesheet" href="${CDN}/plugin/highlight/${highlightTheme}.css"/>
</head>
<body>
<div class="reveal">
  <div class="slides">

${buildSections(slides)}

  </div>
</div>
<script src="${CDN}/dist/reveal.js"></script>
<script src="${CDN}/plugin/notes/notes.js"></script>
<script src="${CDN}/plugin/highlight/highlight.js"></script>
<script src="${CDN}/plugin/math/math.js"></script>
<script src="${CDN}/plugin/search/search.js"></script>
<script src="${CDN}/plugin/zoom/zoom.js"></script>
<script>
  Reveal.initialize({
    hash: true,
    fragments: ${JSON.stringify(fragments)},
    slideNumber: ${JSON.stringify(slideNumber)},
    transition: ${JSON.stringify(transition)},
    plugins: [ RevealNotes, RevealHighlight, RevealMath.MathJax3, RevealSearch, RevealZoom ]
  });
</script>
</body>
</html>`;
}

// ---- Main ----
const [,, inputArg, outputArg] = process.argv;
if (!inputArg) {
  console.error('Usage: node md2slides.js <input.md> [output.html]');
  process.exit(1);
}

const inputPath  = path.resolve(inputArg);
const outputPath = outputArg
  ? path.resolve(outputArg)
  : inputPath.replace(/\.md$/, '.html');

const content = fs.readFileSync(inputPath, 'utf8');
const { meta, body } = parseFrontMatter(content);
const slides = splitSlides(body);
const html = generateHTML(slides, meta);

fs.writeFileSync(outputPath, html);
console.log(`✓ ${outputPath}`);
