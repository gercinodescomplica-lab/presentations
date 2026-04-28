---
name: react-presentations
description: Use this skill whenever the user asks to create, edit, add slides to, or modify a presentation or slide deck in the Next.js project. Triggers include any mention of slides, deck, presentation, new slide, new deck, adding slides, editing slides, or anything related to the PresentationRenderer system. Also trigger when the user references specific decks by name, asks about slide layouts, or wants to restructure a presentation. Always use this skill even for simple single-slide additions — it contains critical project conventions that must be followed.
---

# React Presentations Skill

## Before starting, ALWAYS ask the user:

1. **Document type?** — Ask which type of presentation the user wants to create. Present the categories below and let them pick one. The document type defines the tone, structure, and suggested slide outline.

   **Strategy & Vision:**
   - Vision Document
   - Business Case
   - Product Strategy
   - Roadmap

   **Product & Engineering:**
   - Product Requirements Document (PRD)
   - Backlog
   - User Personas
   - Use Cases / User Stories
   - Software Architecture Document (SAD / DAS)
   - Technical Specification
   - API Documentation

   **Project Management:**
   - Project Plan
   - Sprint Plan
   - Status Report
   - Risk Register

   **Sales & Commercial:**
   - Pitch Deck (Sales Pitch)
   - Commercial Proposal
   - Statement of Work (SOW)
   - Datasheet
   - Case Study

   **Procurement & Legal:**
   - RFP (Request for Proposal)
   - RFQ (Request for Quotation)
   - Contract
   - SLA (Service Level Agreement)

   **Operations:**
   - SOP (Standard Operating Procedure)
   - Runbook

2. **New deck or existing?** — Are we creating a brand new deck or adding/editing slides in an existing one?
3. **Which deck?** — If editing, which deck? (e.g., digital-twin, smart-app)
4. **How many slides?**
5. **Layout preference?** — Two-column (standard) or full-bleed (hero/cover)?
6. **Style & Color Palette?** — Ask the user what kind of visual identity, tone, and specific color palette (e.g., blue/cyan, or warmer tones like rose/amber) the presentation should follow. Do not default to the "Security" style (blue/cyan) unless requested or if it's explicitly a cybersecurity topic.
7. **Business plan / source text?** — Ask if the user has a business plan, brief, or any reference text to base the presentation on. If yes, ask them to paste or attach it. Use this text as the **primary source** for all slide content. Do not invent content when a source text is available.

### When a source text is provided:

- Read the full text before proposing any slide structure.
- Suggest a slide outline (title + key points per slide) and get approval before writing code.
- Map each slide back to a specific section or idea from the source text.

## CRITICAL: Visual Styles and Theming (Do NOT Default to Security/Cyber Theme)

1. **Unique Identity:** Each presentation MUST have an aesthetic that matches its topic. Do NOT blindly copy the "Ops Center" or "Cybersecurity" theme unless the user explicitly asks for it.
2. **Avoid Global Hardcoding of Monitoring Assets:** Do NOT include animated scanlines (`motion.div` moving from 0% to 100%), camera corner brackets, glowing pulse-dots, or complex radial radar glows in your slides unless the topic is specifically about Hackers, Cybersecurity, or Command Centers.
3. **Clean Layouts:** For institutional, corporate, or sales pitch decks, use clean layouts: solid backgrounds, subtle gradients, and elegant shapes (like rounded rectangles or minimalistic lines) without sci-fi decorations.
4. **Colors:** Strictly follow the User's requested primary and accent colors. Build simple and pleasant visual hierarchies.
- Keep the original tone and terminology — do not rephrase into generic marketing language unless asked.
- If the source text doesn't cover enough for the requested number of slides, flag it and ask the user how to fill the gaps.

## Multi-language requirement

**Every new presentation must be created in 5 languages:**

| Code | Language   | Route suffix example       |
|------|------------|-----------------------------|
| en   | English    | `/my-deck`                  |
| pt   | Portuguese | `/my-deck/pt`               |
| es   | Spanish    | `/my-deck/es`               |
| zh   | Chinese    | `/my-deck/zh`               |
| ru   | Russian    | `/my-deck/ru`               |

### How to implement multi-language decks

1. Create the full deck in English first.
2. Duplicate the slides for each language, translating all visible text (titles, subtitles, body, labels, descriptions, status badges).
3. Create a separate slides registry per language:
   ```
   presentations/
     myDeckSlides.ts        ← English (default)
     myDeckSlides.pt.ts     ← Portuguese
     myDeckSlides.es.ts     ← Spanish
     myDeckSlides.zh.ts     ← Chinese
     myDeckSlides.ru.ts     ← Russian
   ```
4. Create a route for each language:
   ```
   app/my-deck/
     page.tsx               ← English (default)
     pt/page.tsx            ← Portuguese
     es/page.tsx            ← Spanish
     zh/page.tsx            ← Chinese
     ru/page.tsx            ← Russian
   ```
5. Each localized page imports its own slides registry:
   ```tsx
   // app/my-deck/pt/page.tsx
   'use client'
   import PresentationRenderer from '@/components/PresentationRenderer'
   import slides from '@/presentations/myDeckSlides.pt'

   export default function MyDeckPtPage() {
     return <PresentationRenderer slides={slides} />
   }
   ```
6. Slide component files for translations go in a subfolder per language:
   ```
   app/my-deck/slides/          ← English slides
   app/my-deck/slides/pt/       ← Portuguese slides
   app/my-deck/slides/es/       ← Spanish slides
   app/my-deck/slides/zh/       ← Chinese slides
   app/my-deck/slides/ru/       ← Russian slides
   ```
7. **Do NOT use machine-style translation.** Write natural, professional text appropriate for business presentations in each language.
8. Keep all non-text elements (layout, animations, colors, images) identical across languages.

---

## How the system works

```
presentations/myDeckSlides.ts   ← ordered array of slide components
        ↓
app/my-deck/page.tsx            ← passes array to PresentationRenderer
        ↓
components/PresentationRenderer ← renders SLIDES[currentSlide], runs navigation
```

Each slide is a plain React component with no props. The engine handles navigation, transitions, keyboard shortcuts, and fullscreen.

---

## Slide patterns

### Pattern A — Standard two-column layout (most slides)

```jsx
import { motion } from 'framer-motion'
import {
  SlideCard,
  LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
  ContentBlock,
} from '@/components/SlideLayout'

export default function SlideXXMySlide() {
  return (
    <SlideCard slideNum="XX" label="SECTION NAME">
      <div className="flex h-full">
        <LeftPanel>
          <TagLabel>Category · Subcategory</TagLabel>
          <GradientTitle>Slide Title</GradientTitle>
          <SubtitleBar>Supporting description line</SubtitleBar>
          <p className="text-white/40 text-sm leading-relaxed">
            Body paragraph text here.
          </p>
        </LeftPanel>

        <RightPanel>
          {/* Cards, lists, charts, etc. */}
        </RightPanel>
      </div>
    </SlideCard>
  )
}
```

### Pattern B — Full-bleed (covers, heroes)

```jsx
import { motion } from 'framer-motion'

export default function SlideXXHero() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1120 0%, #080e18 50%, #060c14 100%)',
          border: '1px solid rgba(47,128,255,0.12)',
        }}
      >
        {/* your content */}
      </motion.div>
    </div>
  )
}
```

---

## SlideLayout components reference

All exported from `@/components/SlideLayout`.

| Component | Props | What it renders |
|---|---|---|
| `SlideCard` | `slideNum`, `label` | Outer card with grid bg, corner label, dark glass surface |
| `LeftPanel` | — | Left 42% column, border-right, centered content |
| `RightPanel` | `className?` | Right 58% column, flex column, vertically centered |
| `GradientTitle` | `size?` (`sm`/`md`/`lg`/`xl`) | White→blue→cyan gradient heading |
| `SubtitleBar` | — | Gradient dash + light tracking text |
| `TagLabel` | `color?` | Small uppercase mono label |
| `ContentBlock` | `label`, `desc`, `color?`, `index`, `baseDelay?` | Animated card with left color bar |
| `PhaseCard` | `number`, `label`, `desc`, `color?`, `index`, `baseDelay?` | Phase/step card with large number |

### ContentBlock example

```jsx
const items = [
  { label: 'First Point', desc: 'Description text here.', color: '#2F80FF' },
  { label: 'Second Point', desc: 'Description text here.', color: '#00E5FF' },
]

<RightPanel>
  {items.map((item, i) => (
    <ContentBlock key={item.label} {...item} index={i} baseDelay={0.4} />
  ))}
</RightPanel>
```

### PhaseCard example

```jsx
const phases = [
  { number: '01', label: 'Pilot', desc: 'Initial phase description.', color: '#2F80FF' },
  { number: '02', label: 'Scale', desc: 'Expansion phase description.', color: '#00E5FF' },
]

<RightPanel className="flex-row gap-4">
  {phases.map((p, i) => (
    <PhaseCard key={p.number} {...p} index={i} baseDelay={0.4} />
  ))}
</RightPanel>
```

---

## Animation patterns

Standard entrance:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
>
  content
</motion.div>
```

Stagger pattern:

```jsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
  >
    {item}
  </motion.div>
))}
```

### Delay ladder (use this order within a slide)

| Element | Delay |
|---|---|
| TagLabel | 0.2s |
| GradientTitle | 0.35s |
| SubtitleBar | 0.5s |
| Body text | 0.65s |
| Status badge | 0.9s |
| Right-panel cards | 0.4s + index × 0.1s |

---

## Color tokens

```ts
import { colors } from '@/styles/colors'

// colors.blue       → '#2F80FF'
// colors.cyan       → '#00E5FF'
// colors.background → '#05070A'
// colors.surface    → '#0B0F14'
// colors.blueGlow   → 'rgba(47, 128, 255, 0.35)'
// colors.textMuted  → 'rgba(255, 255, 255, 0.40)'
```

### Tailwind color classes

| Class | Value |
|---|---|
| `bg-background` | `#05070A` |
| `bg-surface` | `#0B0F14` |
| `text-accent-blue` | `#2F80FF` |
| `text-accent-cyan` | `#00E5FF` |
| `text-white/40` | white at 40% opacity |
| `font-heading` | Space Grotesk / Sora |
| `font-body` | Inter |
| `font-mono` | system monospace |

---

## Using images

Put files in `/assets/`, import by path:

```jsx
import myImage from '@/assets/my-image.png'

<img src={myImage} alt="" className="w-full h-full object-cover" />
<div style={{ backgroundImage: `url(${myImage})` }} />
```

---

## File naming convention

Slide files: `Slide{NUMBER}{PascalCaseName}.jsx`

Example: `Slide29MyNewSlide.jsx`

---

## Adding a slide to an existing deck

1. Create the slide file: `app/{deck}/slides/Slide{NN}{Name}.jsx`
2. Write the component using Pattern A or B above.
3. Register in the deck's slides registry: `presentations/{deck}Slides.ts`
4. Repeat for all 5 languages if the deck is multilingual.

Progress bar, slide counter, and dot navigation update automatically.

---

## Creating a brand new deck

1. Create route folder and slides:
   ```
   app/
     my-deck/
       page.tsx
       slides/
         Slide01Intro.jsx
         Slide02Features.jsx
       pt/page.tsx
       es/page.tsx
       zh/page.tsx
       ru/page.tsx
       slides/pt/...
       slides/es/...
       slides/zh/...
       slides/ru/...
   ```

2. Write the deck page:
   ```tsx
   // app/my-deck/page.tsx
   'use client'
   import PresentationRenderer from '@/components/PresentationRenderer'
   import slides from '@/presentations/myDeckSlides'

   export default function MyDeckPage() {
     return <PresentationRenderer slides={slides} />
   }
   ```

3. Create the slides registry:
   ```ts
   // presentations/myDeckSlides.ts
   import Slide01Intro from '@/app/my-deck/slides/Slide01Intro'
   import Slide02Features from '@/app/my-deck/slides/Slide02Features'

   const myDeckSlides = [Slide01Intro, Slide02Features]
   export default myDeckSlides
   ```

4. Repeat registries and pages for pt, es, zh, ru.

5. Navigate: `http://localhost:3000/my-deck` (or `/my-deck/pt`, etc.)

---

## Quick-reference: common UI patterns

### Status badge (pulsing dot)

```jsx
<div
  className="flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
  style={{ border: '1px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.05)' }}
>
  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
  <span className="text-[#00E5FF] text-xs font-mono tracking-widest">LIVE · ONLINE</span>
</div>
```

### Horizontal divider

```jsx
<div
  className="w-full h-px"
  style={{ background: 'linear-gradient(90deg, transparent, rgba(47,128,255,0.3), transparent)' }}
/>
```

### Metric / stat block

```jsx
<div className="flex flex-col gap-1">
  <span
    className="font-heading font-bold leading-none"
    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#2F80FF' }}
  >
    12M+
  </span>
  <span className="text-white/40 text-xs font-mono tracking-wider uppercase">Inhabitants</span>
</div>
```

### Corner brackets (HUD frame)

```jsx
{['top-5 left-5 border-t-2 border-l-2', 'top-5 right-5 border-t-2 border-r-2',
  'bottom-5 left-5 border-b-2 border-l-2', 'bottom-5 right-5 border-b-2 border-r-2'].map((cls, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, scale: 1.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
    className={`absolute w-7 h-7 ${cls} pointer-events-none`}
    style={{ borderColor: 'rgba(47,128,255,0.35)' }}
  />
))}
```

### Animated scan line

```jsx
<motion.div
  className="absolute left-0 right-0 h-[1px] pointer-events-none"
  style={{ background: 'linear-gradient(90deg, transparent, rgba(47,128,255,0.3) 35%, rgba(0,229,255,0.2) 65%, transparent)' }}
  animate={{ top: ['0%', '100%'] }}
  transition={{ duration: 9, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
/>
```
