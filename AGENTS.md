# Agent Instructions — Presentator Project

## Project
Next.js presentation renderer. Each deck is a folder under `app/{deck}/` with slide components inside `slides/`.

## Critical Rule: ALWAYS Ask for Template

When the user asks to create, edit, or add slides:

1. **Present the template catalog from `TEMPLATES.md`** and ask which one they want.
2. Wait for the choice BEFORE writing any slide code.
3. Only after the user picks a template, write the slide using components from THAT template module.

### Template Catalog (quick reference)

| Template | Vibe | Best For |
|---|---|---|
| **EcoGarden** | Clean, light, nature-inspired | Parks, ESG, sustainability, green tech |
| **WhitePaper** | Corporate, minimal, neutral | Government, corporate, policy, institutional |
| **TechGlass** | Dark elegant, glassmorphism | AI, SaaS, startups, modern tech |
| **WarmCommunity** | Warm, human, bouncy | Social impact, community, health, education, NGO |
| **EditorialAsym** | Asymmetric, magazine, storytelling | Case studies, real estate, brand narrative |
| **OutlineZen** | Ultra-minimal, typography-only | Roadmaps, timelines, processes, agendas |

If the user does not specify a template, **ask explicitly**:
> "Qual template você quer usar? As opções são: EcoGarden (clean/natureza), WhitePaper (corporativo/neutro), TechGlass (dark/glass), WarmCommunity (social/quente), EditorialAsym (editorial/assimétrico) ou OutlineZen (minimal/tipografia)."

## Multi-language Rule

Every deck must exist in 5 languages: `en` (default), `pt`, `es`, `zh`, `ru`.
See `.claude/skills/presentator/SKILL.md` for full multi-language instructions.

## Anti-patterns

- NEVER add scanlines, HUD brackets, camera grids, or pulsing radar dots unless the topic is literally cybersecurity.
- NEVER use the same dark-background layout for every slide.
- NEVER mix two templates in one slide.
- NEVER skip asking the template when creating new slides.

## File Structure

```
presentations/
  smartParkSlides.ts       ← registry (imports slides array)
app/smart-park/
  page.tsx                 ← language switcher + PresentationRenderer
  slides/                  ← English slides
  pt/page.tsx              ← Portuguese page
  pt/slides/               ← Portuguese slides (same layout, translated text)
  es/, zh/, ru/            ← same for other languages
components/
  PresentationRenderer.tsx ← renders current slide + navigation
templates/
  EcoGarden.tsx            ← template 1
  WhitePaper.tsx           ← template 2
  TechGlass.tsx            ← template 3
  WarmCommunity.tsx        ← template 4
  EditorialAsym.tsx        ← template 5
  OutlineZen.tsx           ← template 6
  index.ts                 ← re-exports all templates
```
