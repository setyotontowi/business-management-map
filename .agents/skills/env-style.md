---
name: env-style
description: Defines the coding conventions, visual design system, and information architecture used in this business-management-map wiki. Use this skill whenever creating or editing HTML pages, CSS, or documentation in this project to ensure consistency with the established style.
---

# Environment Style Guide

This project is a **self-contained HTML wiki** for business management knowledge. All pages are vanilla HTML + CSS + JS — no frameworks, no build tools.

---

## Programming Conventions

- **Vanilla only**: HTML, CSS, JS. No React, no Tailwind.
- **Inline `<style>`**: Each page carries its own `<style>` block in `<head>`. The shared `style.css` is for the index/tree map only. For markdown viewer pages, use the shared `md-viewer.css`.
- **CSS custom properties** for theming:
  ```css
  :root { --bg: #f9f9f8; --text: #222; --link: #2563eb; ... }
  body.dark-mode { --bg: #0f172a; --text: #f1f5f9; ... }
  ```
- **Dark mode** via `body.dark-mode` class toggled by a small JS snippet — not via `prefers-color-scheme`.
- **Minimal JS**: Mostly for UI interactions and content rendering. **marked.js** is the standard library for markdown viewing.
- **Markdown Viewer Strategy**: Prioritize building a dynamic viewer that fetches and renders the corresponding `.md` file instead of mirroring content manually in HTML.
- **Don't touch existing code** unless the change is necessary. Make the smallest possible edit.

---

## Visual Design System

### Typography
- Font: `Inter` from Google Fonts (`@import` in `<style>`)
- Base `font-size: 15px`, `line-height: 1.7`
- Heading scale: `h1` 1.6rem/700, `h2` 1.1rem/700, `h3` 0.95rem/700, `h4` 0.9rem/700

### Layout
- Reading-optimized single column: `max-width: 760px; margin: 0 auto; padding: 40px 24px 80px;`
- `nav` at top: back link (left) + utility button (right), separated by `border-bottom`

### Colors (light mode defaults)
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f9f9f8` | Page background |
| `--text` | `#222` | Body text |
| `--h1` | `#111` | Headings |
| `--h-sub` | `#444` | Sub-headings |
| `--p` | `#333` | Paragraph text |
| `--link` | `#2563eb` | Links, hover accents |
| `--nav-border` | `#eee` | Dividers |
| `--table-th` | `#f0f0f0` | Table headers |
| `--code-bg` | `#f0f0f0` | Inline code |
| `--breadcrumbs` | `#666` | Breadcrumb text (70% opacity for current) |

### Component Patterns
- **Breadcrumbs**: `.breadcrumbs` container inside `nav`. Uses `var(--link)` for links and `var(--text)` with `opacity: 0.8` for the current page span.
- **Section toggles**: `<button class="section-toggle">` with a `▶` arrow that rotates 90° when open. Body is a `div.section-body` hidden by default or `display:block` when `.open`.
- **Tables**: `border-collapse: collapse`, `font-size: 0.9em`, `padding: 8px 12px`, `vertical-align: top`. Headers use `var(--table-th)`.
- **Alerts**: `.alert` with left-border accent. Example: `.alert-tip { background:#e0f2fe; border-left:4px solid #0ea5e9; }`.
- **Code**: `<code>` with `background: var(--code-bg); padding: 2px 4px; border-radius: 3px`.

---

## Information Architecture

### Page Structure
Every knowledge page follows this shell:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Topic] Guide</title>
  <link rel="stylesheet" href="md-viewer.css">
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
<div class="wrap">
  <nav>
    <div class="breadcrumbs">
      <a href="index.html">Dashboard</a> / 
      <span>Current Page</span>
    </div>
  </nav>

  <main id="markdown-content">
    <p style="text-align: center; padding: 40px; opacity: 0.5;">Loading content...</p>
  </main>
</div>

<script src="md-viewer.js" data-src="knowledge_base/[filename].md"></script>
</body>
</html>
```

### Content Hierarchy
- **`h1`**: Page title (uppercase, short)
- **`h2`**: Major sections (auto-wrapped as collapsible)
- **`h3`/`h4`**: Sub-topics within a section
- **Tables**: Preferred for comparisons, key dimensions, severity levels, do/don't lists
- **`<ul>`/`<ol>`**: Enumerated principles, steps, bullet facts
- **`<hr>`**: Visual separator between `h2` sections in the raw HTML (removed by JS when building toggles)

### Prose Tone
- Direct, practitioner-focused.
- Lead with **what it is**, then **why it matters**, then **how to apply**.
- Use `<strong>` for key terms on first use.
- Academic frameworks get their own `h3` sub-section with author attribution.
- Concrete ✅ / ❌ examples in do/don't tables.

### Linking
- Internal links use relative paths: `href="index.html"`, `href="incident-management.html"`.
- `index.html` is the central navigation hub (tree map).

### Dynamic Rendering
- **Single Source of Truth**: The `.md` file in `knowledge_base/` is the primary source of truth.
- **Viewer Consistency**: The HTML shell acts only as a frame. Don't mirror content manually; let the viewer handle it.
- **Styling Parity**: Ensure the CSS in the HTML frame correctly styles standard markdown elements (headers, tables, etc.) to match the project's aesthetic.


---

## Shared Helper Files

- **`md-viewer.css`**: Contains all theme variables, typography, table/code styles. Linked via `<link rel="stylesheet">`.
- **`md-viewer.js`**: Self-executing script that reads `data-src` attribute to fetch and render the `.md` file. Also handles dark mode. Usage:
  ```html
  <script src="md-viewer.js" data-src="knowledge_base/[filename].md"></script>
  ```
