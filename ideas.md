# Design Brainstorm — PMT Evolution SaaS Strategy

## Audience & Purpose
Board-level presentation. CTO, CEO, and investors. The site must communicate authority, strategic clarity, and deep domain expertise. It must feel like a McKinsey deck brought to life as a web experience — not a startup landing page.

---

<response>
<text>
**Design Movement:** Corporate Brutalism meets Strategic Clarity — inspired by Bloomberg Terminal aesthetics and high-end consulting firm annual reports.

**Core Principles:**
- Data-forward: Numbers, percentages, and timelines are the heroes. Typography hierarchy is extreme.
- Dark authority: Deep navy and charcoal backgrounds with sharp white and amber accent text. Feels like a war room.
- Structured asymmetry: Left-heavy layouts with a strong vertical rule separating navigation from content.
- Zero decoration: No gradients, no rounded corners, no soft shadows. Hard edges. Every element earns its place.

**Color Philosophy:** Deep navy (#0A1628) as the base, pure white for primary text, amber (#F59E0B) as the single accent for critical items (deadlines, gaps, mission-critical flags). The amber is a warning colour — it signals urgency without being alarming.

**Layout Paradigm:** Full-height left sidebar navigation (fixed), content scrolls in the right panel. Each section is a full-viewport "chapter" with a large chapter number and title. Very editorial.

**Signature Elements:**
- Thick amber left-border on critical items (like a newspaper pull-quote)
- Monospaced font for all data, metrics, and code-like content
- Section dividers are thin 1px horizontal rules with a chapter label

**Interaction Philosophy:** Scroll-triggered reveals. Each section fades in as you scroll to it. The sidebar highlights the active section. Clicking a nav item smooth-scrolls to the section.

**Animation:** Minimal. Counter animations for key numbers (e.g., "€290M fine" counts up). Section entrance is a simple fade-up. No parallax, no spinning elements.

**Typography System:** Display: Space Grotesk Bold (headings). Body: DM Sans Regular. Data/code: JetBrains Mono. Hierarchy is extreme — H1 at 72px, body at 16px, data labels at 11px uppercase.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Design Movement:** Swiss International Style — the design language of serious institutions. Think IMF reports, ECB publications, and Deutsche Bank strategy decks.

**Core Principles:**
- Grid discipline: A strict 12-column grid. Every element snaps to it. No exceptions.
- Typography as architecture: The layout IS the typography. Headings are structural elements, not decorative.
- Restrained colour: Off-white background (#F8F7F4), deep slate text (#1C2B3A), and a single corporate blue (#1E40AF) for interactive elements and highlights.
- Information density: Pack more information per screen than a typical website. Respect the audience's intelligence.

**Color Philosophy:** The off-white background is warm and paper-like, referencing printed reports. The deep slate is more sophisticated than pure black. The corporate blue is used sparingly — only for links, active states, and the most important callouts.

**Layout Paradigm:** Top navigation with anchor links. Content is organised as a long-form document with a floating table of contents on the right side. Sections are clearly delineated with large section numbers (01, 02, 03…) in a very large, light-weight font as a background watermark.

**Signature Elements:**
- Large section number watermarks (opacity 0.05) behind each section heading
- Horizontal data tables with alternating row shading
- A "risk traffic light" component (red/amber/green) used consistently throughout

**Interaction Philosophy:** The floating TOC highlights the current section. Hover states on cards reveal additional detail. All data tables are sortable.

**Animation:** Subtle. Numbers count up on scroll-into-view. Cards have a gentle lift on hover (2px translateY + shadow increase). No full-page transitions.

**Typography System:** Display: Playfair Display (headings — gives gravitas). Body: Source Sans Pro. Data: IBM Plex Mono. The contrast between the serif display and the sans-serif body creates a sophisticated editorial feel.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Design Movement:** Dark Command Centre — the aesthetic of a high-stakes operations dashboard. Think NASA mission control meets a hedge fund trading floor.

**Core Principles:**
- Dark-first: The entire site is dark. Deep charcoal (#111827) base, with a subtle blue-tinted dark (#0F172A) for card backgrounds.
- Glowing accents: Electric blue (#3B82F6) for interactive elements, red (#EF4444) for critical gaps, green (#10B981) for covered/safe items, amber (#F59E0B) for warnings.
- Data visualisation as hero: Charts, timelines, and matrices are the primary content. Text is secondary.
- Cinematic sections: Each section feels like a different "screen" in a command centre — distinct purpose, distinct visual treatment.

**Color Philosophy:** The dark background creates focus and reduces cognitive load for data-heavy content. The colour-coded status system (red/amber/green) is immediately intuitive for a board audience. The electric blue creates a sense of technological authority.

**Layout Paradigm:** Sticky top navigation with section anchors. Each section fills the viewport. A progress bar at the top shows how far through the "briefing" the reader is. Cards use glassmorphism (frosted glass effect) on the dark background.

**Signature Elements:**
- Glassmorphism cards (backdrop-blur + semi-transparent background)
- A top progress bar that fills as you scroll
- Colour-coded status badges (CRITICAL / HIGH / MEDIUM / COVERED) used on every risk and gap item

**Interaction Philosophy:** Hover on any risk card reveals a tooltip with the specific fine amount and deadline. The timeline is interactive — clicking a milestone expands its detail. The navigation is sticky and always visible.

**Animation:** More expressive than the other options. Section transitions use a subtle fade + scale (0.95 → 1.0). The hero section has a slow-moving gradient background. Counter animations for all financial figures.

**Typography System:** Display: Syne ExtraBold (modern, geometric, authoritative). Body: Manrope Regular. Data: Space Mono. The Syne + Manrope pairing is distinctive and avoids the ubiquitous Inter trap.
</text>
<probability>0.09</probability>
</response>

---

## Selected Design: Option 3 — Dark Command Centre

**Rationale:** A board audience reviewing a strategy for a mission-critical, compliance-heavy SaaS product will respond to the visual language of authority, urgency, and data. The dark command centre aesthetic communicates that this is serious, high-stakes work. The colour-coded status system (red/amber/green) makes the risk landscape immediately scannable. The glassmorphism cards feel modern and premium without being frivolous.
