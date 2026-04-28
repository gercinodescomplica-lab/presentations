# Slide Templates Catalog

> **CRITICAL: Every new slide must use one of the templates below.**  
> When the user asks for a slide, I must present these options and wait for their choice before writing code.  
> Never assume the old "dark green security" default. Never duplicate sci-fi elements (scanlines, HUD brackets, camera grids) unless the topic is literally cybersecurity.

---

## How to use

1. When the user asks for a new slide, **present the catalog below** and ask which template.
2. Write the slide importing components **only** from that template module.
3. You can customize accent colors per slide, but keep the template's visual DNA.

---

## 1. EcoGarden

**Vibe:** Clean, light, nature-inspired, organic.

| Property | Value |
|---|---|
| **Background** | White/off-white `#FAFBF7`, very subtle sage glows |
| **Primary** | Deep green `#166534` |
| **Accent** | Sage `#86efac`, warm amber `#d97706` |
| **Decoration** | Organic radial washes (top-right, bottom-left). NO scanlines, NO brackets, NO grid |
| **Motion** | Gentle fade-up + scale `0.98 → 1`, staggered children |
| **Icons** | Yes — leaf, tree, plant. Placeholder image areas supported |
| **Best for** | Parks, environment, sustainability, ESG, outdoor, green tech |

**Exports:**
- `EcoGardenCard` — outer slide wrapper
- `EcoGardenHeader` — eyebrow + title + subtitle + accent line
- `EcoGardenCardItem` — icon + title + description cards
- `EcoGardenImagePlaceholder` — dashed border image upload zone
- `EcoGardenStat` — big number + label stat block

---

## 2. WhitePaper

**Vibe:** Corporate, minimal, neutral, institutional.

| Property | Value |
|---|---|
| **Background** | Pure white `#FFFFFF`, subtle gray wash, thin top accent line |
| **Primary** | Dark slate `#1e293b` |
| **Accent** | Steel blue `#475569` (customizable per topic) |
| **Decoration** | Thin lines, generous whitespace, subtle drop shadow. NO sci-fi |
| **Motion** | Simple opacity + translateY, clean stagger |
| **Icons** | Minimal — small dots, lines |
| **Best for** | Government proposals, corporate decks, policy docs, institutional pitches |

**Exports:**
- `WhitePaperCard` — outer wrapper with top gradient accent bar
- `WhitePaperHeader` — eyebrow + title + subtitle + divider line
- `WhitePaperBlock` — bullet title + description list items
- `WhitePaperNumbered` — numbered items (01, 02...)
- `WhitePaperQuote` — left-border quote with attribution

---

## 3. TechGlass

**Vibe:** Dark elegant, glassmorphism, modern SaaS.

| Property | Value |
|---|---|
| **Background** | Very dark `#07080a` with soft radial glows |
| **Primary** | Soft violet `#8b5cf6` + teal `#14b8a6` (or custom pair) |
| **Accent** | Frosted glass panels, thin light borders |
| **Decoration** | Glass orbs, ambient glows. NO camera grid. NO scan lines. NO HUD brackets |
| **Motion** | Scale `0.96 → 1` with springy ease, float-up with blur fade |
| **Icons** | Lucide icons inside glass panes |
| **Best for** | AI tools, SaaS, startups, modern tech products, platform decks |

**Exports:**
- `TechGlassCard` — dark wrapper with ambient orbs
- `TechGlassHeader` — eyebrow + title + subtitle
- `TechGlassPane` — frosted-glass panel (backdrop-blur)
- `TechGlassStat` — stat inside glass container

---

## 4. WarmCommunity

**Vibe:** Warm, human, inviting, social, bouncy.

| Property | Value |
|---|---|
| **Background** | Warm cream `#fdf8f3`, soft sand tones |
| **Primary** | Terracotta `#c2410c` |
| **Accent** | Warm amber `#f59e0b`, muted rose `#be185d` |
| **Decoration** | Generous rounded corners, blob shapes, soft shadows. NO dark surfaces |
| **Motion** | Springy bouncy entrance (`stiffness: 100`), slight overshoot |
| **Icons** | People, heart, hand, community symbols |
| **Best for** | Social impact, community, health, education, NGO, human-centered projects |

**Exports:**
- `WarmCommunityCard` — warm wrapper with blob decorations
- `WarmCommunityHeader` — eyebrow + title + subtitle
- `WarmCommunityCardItem` — icon + title + description (rounded-3xl cards)
- `WarmCommunityPill` — small rounded tag/pill
- `WarmCommunityQuote` — highlighted quote block in warm tones

---

## 5. EditorialAsym

**Vibe:** Asymmetric editorial, magazine-style, storytelling.

| Property | Value |
|---|---|
| **Background** | Off-white `#f8f8f6` or light warm gray |
| **Primary** | Strong charcoal `#1a1a1a` + one bold accent (choose per topic) |
| **Accent** | Large image areas, overlapping text blocks |
| **Decoration** | Dynamic whitespace. Text can bleed into image zones. No rigid grid |
| **Motion** | Horizontal slide-in from edges, stagger from left/right |
| **Icons** | Minimal — image placeholders, captions |
| **Best for** | Case studies, storytelling, real estate, flagship showcases, brand narratives |

**Exports:**
- `EditorialAsymCard` — wrapper with bare layout
- `EditorialAsymImage` — large image placeholder (left/right side)
- `EditorialAsymText` — eyebrow + big title + subtitle + body
- `EditorialAsymOverlap` — floating overlaid card for captions/CTA

---

## 6. OutlineZen

**Vibe:** Ultra-minimal, typography-forward, line-art, no fills.

| Property | Value |
|---|---|
| **Background** | White `#fefefe`. NO dark backgrounds |
| **Primary** | Near-black `#0f0f0f` |
| **Accent** | Single hairline color, big ghost numbers |
| **Decoration** | Hairline borders, generous spacing. NO filled boxes. NO cards |
| **Motion** | Sequential line-drawing feel (scaleY `0 → 1`), text fades in order |
| **Icons** | None — typography is the design |
| **Best for** | Roadmaps, timelines, processes, chapter dividers, minimal manifestos, agendas |

**Exports:**
- `OutlineZenCard` — clean white wrapper
- `OutlineZenHeader` — big bold title with hairline accent
- `OutlineZenItem` — numbered list with big ghost numbers
- `OutlineZenTimeline` — vertical dotted timeline with phases

---

## Color Freedom

Every template supports a custom `accentColor` / `color` prop. Examples:
- **EcoGarden** for a health park → deep green `#166534`
- **EcoGarden** for a water project → ocean blue `#0369a1`
- **WarmCommunity** for education → indigo `#4338ca`
- **TechGlass** for fintech → emerald `#10b981` + gold `#f59e0b`

Pick the template by **layout personality**, then adjust the accent to match the topic.

---

## Anti-Patterns (NEVER do these)

| Don't | Why |
|---|---|
| Add scanlines or moving horizontal lines | Only for literal cybersecurity/command center |
| Add corner brackets (HUD frames) | Only for literal cybersecurity/command center |
| Add camera grid backgrounds | Only for literal cybersecurity/command center |
| Add pulsing radar dots | Only for literal cybersecurity/command center |
| Use the same dark green bg for EVERY slide | That's the old mono-template problem we're solving |
| Mix 2 templates in 1 slide | Breaks visual consistency |
| Skip asking the user which template | This catalog exists precisely for that choice |
