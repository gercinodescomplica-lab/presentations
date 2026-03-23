/**
 * styles/presentation.ts
 *
 * Slide-layout constants: padding, column ratios, progress-bar height, etc.
 * Import from here in slide or component files to keep layout decisions
 * in one place and consistent across all decks.
 */

import { colors } from './colors'

export const presentation = {
  // ── Slide dimensions ───────────────────────────────────────────────────────
  // The renderer fills the viewport; these drive print / PDF output.
  printWidth:  '297mm',   // A4 landscape
  printHeight: '210mm',

  // ── Slide padding ──────────────────────────────────────────────────────────
  padding: {
    x: '3rem',   // horizontal gutters inside a slide
    y: '2.5rem', // vertical gutters inside a slide
  },

  // ── Two-column layout ratios ───────────────────────────────────────────────
  // Used by LeftPanel / RightPanel in SlideLayout.
  columns: {
    left:  '42%',
    right: '58%',
  },

  // ── Progress bar ───────────────────────────────────────────────────────────
  progressBar: {
    height: '2px',
    colorFrom: colors.blue,
    colorTo:   colors.cyan,
  },

  // ── Controls bar ──────────────────────────────────────────────────────────
  controlsBar: {
    height:      '60px',
    background:  'rgba(5, 7, 10, 0.85)',
    borderColor: 'rgba(47, 128, 255, 0.12)',
  },

  // ── Slide card defaults ────────────────────────────────────────────────────
  card: {
    background:  'rgba(11, 15, 20, 0.95)',
    borderColor: 'rgba(47, 128, 255, 0.15)',
    gridSpacing: '60px',
  },

  // ── Gradients ─────────────────────────────────────────────────────────────
  gradients: {
    title:       'linear-gradient(135deg, #FFFFFF 0%, #2F80FF 50%, #00E5FF 100%)',
    titleReverse:'linear-gradient(135deg, #00E5FF 0%, #2F80FF 50%, #FFFFFF 100%)',
    blueToCyan:  'linear-gradient(90deg, #2F80FF 0%, #00E5FF 100%)',
    cyanToBlue:  'linear-gradient(90deg, #00E5FF 0%, #2F80FF 100%)',
    // Radial ambient glows in the slide background
    ambientBlue: 'radial-gradient(ellipse 60% 50% at 20% 20%, rgba(47,128,255,0.08) 0%, transparent 70%)',
    ambientCyan: 'radial-gradient(ellipse 50% 60% at 80% 80%, rgba(0,229,255,0.06) 0%, transparent 70%)',
  },
} as const
