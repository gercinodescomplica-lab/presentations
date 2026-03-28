export interface Slide {
  id: string
  number: number
  title: string
  content: string
  notes?: string
  layout: 'title' | 'content' | 'split' | 'blank'
}

export type ThemeId = 'dark-minimal' | 'corporate-blue' | 'elegant-dark' | 'futuristic' | 'clean-light' | 'modern-gradient'
export type StyleId = 'corporate' | 'modern' | 'minimalist' | 'futuristic' | 'bold' | 'elegant'
export type AnimationStyle = 'none' | 'fade' | 'slide' | 'zoom'

export interface ThemePalette {
  background: string
  surface: string
  text: string
  accent: string
  muted: string
}

export interface Theme {
  id: ThemeId
  name: string
  palette: ThemePalette
  fontFamily: string
}

export interface PresentationConfig {
  themeId: ThemeId
  style: StyleId
  animations: AnimationStyle
  refinedText: boolean
  showSpeakerNotes: boolean
}

export interface Presentation {
  id: string
  title: string
  markdown: string
  slides: Slide[]
  config: PresentationConfig
  createdAt: string
  updatedAt: string
  status: 'draft' | 'ready' | 'exported'
}

export interface ChatMessage {
  id: string
  role: 'assistant' | 'user'
  content: string
  type?: 'text' | 'options' | 'palette-picker' | 'style-picker'
  options?: { label: string; value: string }[]
}
