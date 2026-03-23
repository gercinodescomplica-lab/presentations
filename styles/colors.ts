/**
 * styles/colors.ts
 *
 * Single source of truth for the color palette used across all decks.
 * Import these values in slide components or Tailwind config extensions
 * to keep the futuristic theme consistent without hunting for hex codes.
 */

export const colors = {
  // ── Backgrounds ────────────────────────────────────────────────────────────
  background:  '#05070A',   // deepest background — full slide backdrop
  surface:     '#0B0F14',   // card / panel backgrounds
  surface2:    '#111820',   // slightly lighter surface for nested elements

  // ── Accent colors ──────────────────────────────────────────────────────────
  blue:        '#2F80FF',   // primary accent — interactive elements, highlights
  cyan:        '#00E5FF',   // secondary accent — gradients, glow terminations

  // ── Accent with opacity (ready-to-use strings) ─────────────────────────────
  blueDim:     'rgba(47,  128, 255, 0.15)',
  cyanDim:     'rgba(0,   229, 255, 0.10)',
  blueGlow:    'rgba(47,  128, 255, 0.35)',
  cyanGlow:    'rgba(0,   229, 255, 0.30)',
  blueBorder:  'rgba(47,  128, 255, 0.20)',
  cyanBorder:  'rgba(0,   229, 255, 0.18)',

  // ── Status palette ─────────────────────────────────────────────────────────
  green:       '#00E5A0',   // success / active states
  amber:       '#FFB800',   // warning / pending states
  red:         '#FF4D4D',   // error / critical states

  // ── Text ───────────────────────────────────────────────────────────────────
  textPrimary: '#FFFFFF',
  textSecond:  'rgba(255, 255, 255, 0.70)',
  textMuted:   'rgba(255, 255, 255, 0.40)',
} as const

export type ColorKey = keyof typeof colors
