/**
 * styles/theme.ts
 *
 * Typography, spacing, and visual effect tokens shared across all decks.
 * These values drive the futuristic HUD aesthetic — adjust here to
 * restyle the entire system at once.
 */

import { colors } from './colors'

export const theme = {
  // ── Typography ─────────────────────────────────────────────────────────────
  fonts: {
    heading: "'Space Grotesk', 'Sora', sans-serif",
    body:    "'Inter', sans-serif",
    mono:    "'IBM Plex Mono', monospace",
  },

  fontSizes: {
    tag:      '0.6rem',    // small uppercase labels / badges
    caption:  '0.75rem',  // supporting text
    body:     '0.875rem', // default body copy
    lead:     '1rem',     // larger body / sub-headings
    h3:       '1.25rem',
    h2:       '1.75rem',
    h1:       '2.5rem',
    display:  '3.5rem',   // cover / hero titles
  },

  fontWeights: {
    light:    300,
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },

  // ── Letter-spacing ─────────────────────────────────────────────────────────
  letterSpacing: {
    tight:  '-0.02em',
    normal:  '0em',
    wide:    '0.08em',   // uppercase labels
    wider:   '0.18em',   // badge / tag text
  },

  // ── Radii ──────────────────────────────────────────────────────────────────
  radii: {
    sm:   '6px',
    md:   '10px',
    lg:   '16px',
    xl:   '24px',
    full: '9999px',
  },

  // ── Glow effects (box-shadow strings) ─────────────────────────────────────
  glows: {
    blue: `0 0 40px ${colors.blueGlow}, 0 0 80px rgba(47,128,255,0.10)`,
    cyan: `0 0 30px ${colors.cyanGlow}, 0 0 60px rgba(0,229,255,0.08)`,
    blueText: `0 0 20px rgba(47,128,255,0.60), 0 0 40px rgba(47,128,255,0.30)`,
    cyanText: `0 0 20px rgba(0,229,255,0.70), 0 0 40px rgba(0,229,255,0.30)`,
  },

  // ── Motion ─────────────────────────────────────────────────────────────────
  motion: {
    // Framer-Motion spring used for slide transitions
    slideSpring: { type: 'spring', stiffness: 260, damping: 30 },
    // Standard ease for element entrances
    ease: [0.22, 1, 0.36, 1] as const,
    enterDuration:  0.6,
    exitDuration:   0.4,
  },
} as const
