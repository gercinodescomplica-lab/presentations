# Creating Slides

This guide covers everything you need to build new slides for any deck in this project.

---

## How the system works

```
presentations/myDeckSlides.ts   ← ordered array of slide components
        ↓
app/my-deck/page.tsx            ← passes array to PresentationRenderer
        ↓
components/PresentationRenderer ← renders SLIDES[currentSlide], runs navigation
```

Each slide is a plain React component. It receives no props. The engine handles all navigation, transitions, keyboard shortcuts, and fullscreen — you only write the visual content.

---

## Anatomy of a slide

Every slide follows one of two patterns:

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

### ContentBlock — quick example

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

### PhaseCard — quick example

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

All animations use Framer Motion. The standard entrance pattern:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
>
  content
</motion.div>
```

**Stagger elements** using incremental `delay`:
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

**Common delay ladder** (use this order within a slide):
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

Import from `@/styles/colors`:

```ts
import { colors } from '@/styles/colors'

// colors.blue       → '#2F80FF'
// colors.cyan       → '#00E5FF'
// colors.background → '#05070A'
// colors.surface    → '#0B0F14'
// colors.blueGlow   → 'rgba(47, 128, 255, 0.35)'
// colors.textMuted  → 'rgba(255, 255, 255, 0.40)'
```

---

## Using images

Put image files inside `/assets/`, then import by path:

```jsx
import myImage from '@/assets/my-image.png'

// Use as src
<img src={myImage} alt="" className="w-full h-full object-cover" />

// Use as background
<div style={{ backgroundImage: `url(${myImage})` }} />
```

---

## Step-by-step: adding a slide to an existing deck

### 1. Create the slide file

```
app/digital-twin/slides/Slide29MyNewSlide.jsx
```

File naming convention: `Slide{NUMBER}{PascalCaseName}.jsx`

### 2. Write the component

```jsx
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const items = [
  { label: 'Point A', desc: 'Explanation of point A.', color: '#2F80FF' },
  { label: 'Point B', desc: 'Explanation of point B.', color: '#00E5FF' },
]

export default function Slide29MyNewSlide() {
  return (
    <SlideCard slideNum="29" label="SECTION">
      <div className="flex h-full">
        <LeftPanel>
          <TagLabel>Category</TagLabel>
          <GradientTitle>Slide Title</GradientTitle>
          <SubtitleBar>Subtitle line here</SubtitleBar>
        </LeftPanel>
        <RightPanel>
          {items.map((item, i) => (
            <ContentBlock key={item.label} {...item} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}
```

### 3. Register it in the deck

Open `presentations/digitalTwinSlides.ts` and add the import + entry:

```ts
import Slide29MyNewSlide from '@/app/digital-twin/slides/Slide29MyNewSlide'

const digitalTwinSlides = [
  // ...existing slides...
  Slide29MyNewSlide,   // ← add here
]
```

The progress bar, slide counter, and dot navigation all update automatically.

---

## Step-by-step: creating a brand new deck

### 1. Create the route folder and slides

```
app/
  smart-app/
    page.tsx
    slides/
      Slide01Intro.jsx
      Slide02Features.jsx
```

### 2. Write the deck page

```tsx
// app/smart-app/page.tsx
'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import smartAppSlides from '@/presentations/smartAppSlides'

export default function SmartAppPage() {
  return <PresentationRenderer slides={smartAppSlides} />
}
```

### 3. Create the slides registry

```ts
// presentations/smartAppSlides.ts
import Slide01Intro    from '@/app/smart-app/slides/Slide01Intro'
import Slide02Features from '@/app/smart-app/slides/Slide02Features'

const smartAppSlides = [
  Slide01Intro,
  Slide02Features,
]

export default smartAppSlides
```

### 4. Navigate to it

```
http://localhost:3000/smart-app
```

Everything else — keyboard navigation, progress bar, fullscreen, PDF export — works out of the box.

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

### Horizontal divider line

```jsx
<div
  className="w-full h-px"
  style={{ background: 'linear-gradient(90deg, transparent, rgba(47,128,255,0.3), transparent)' }}
/>
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

---

## Tailwind color classes used in this project

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

## Run the project

```bash
npm run dev    # development server at localhost:3000
npm run build  # production build
npm start      # serve production build
```
