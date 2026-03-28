import { Theme, ThemeId } from './types'

export const THEMES: Theme[] = [
  {
    id: 'dark-minimal',
    name: 'Dark Minimal',
    palette: {
      background: '#0A0A0B',
      surface: '#111113',
      text: '#FAFAFA',
      accent: '#3B82F6',
      muted: '#8B8B8E',
    },
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    palette: {
      background: '#EFF6FF',
      surface: '#FFFFFF',
      text: '#1E3A5F',
      accent: '#1D4ED8',
      muted: '#64748B',
    },
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  {
    id: 'elegant-dark',
    name: 'Elegant Dark',
    palette: {
      background: '#0D0D0D',
      surface: '#1A1A1A',
      text: '#E8E8E8',
      accent: '#C9A84C',
      muted: '#888888',
    },
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
  {
    id: 'futuristic',
    name: 'Futuristic',
    palette: {
      background: '#020617',
      surface: '#0F172A',
      text: '#E2E8F0',
      accent: '#06B6D4',
      muted: '#64748B',
    },
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  },
  {
    id: 'clean-light',
    name: 'Clean Light',
    palette: {
      background: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#111111',
      accent: '#000000',
      muted: '#6B7280',
    },
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  {
    id: 'modern-gradient',
    name: 'Modern Gradient',
    palette: {
      background: '#0F0C29',
      surface: '#302B63',
      text: '#FFFFFF',
      accent: '#EC4899',
      muted: '#A78BFA',
    },
    fontFamily: 'Inter, system-ui, sans-serif',
  },
]

export const DEFAULT_THEME = THEMES[0]

export function getTheme(id: ThemeId): Theme {
  return THEMES.find((t) => t.id === id) ?? DEFAULT_THEME
}
