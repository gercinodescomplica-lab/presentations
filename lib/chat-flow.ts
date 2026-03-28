import { ChatMessage } from './types'

function msg(
  role: ChatMessage['role'],
  content: string,
  type: ChatMessage['type'] = 'text',
  options?: { label: string; value: string }[]
): ChatMessage {
  return { id: crypto.randomUUID(), role, content, type, options }
}

export function getChatFlow(slideCount: number, title: string): ChatMessage[] {
  return [
    msg(
      'assistant',
      `Great! I've parsed your Markdown file and found **${slideCount} slide${slideCount !== 1 ? 's' : ''}** for "${title}". Let me help you configure the perfect presentation. Let's start with the visual theme.`
    ),
    msg(
      'assistant',
      'Which color theme would you like for your presentation?',
      'options',
      [
        { label: 'Dark Minimal', value: 'dark-minimal' },
        { label: 'Corporate Blue', value: 'corporate-blue' },
        { label: 'Elegant Dark', value: 'elegant-dark' },
        { label: 'Futuristic', value: 'futuristic' },
        { label: 'Clean Light', value: 'clean-light' },
        { label: 'Modern Gradient', value: 'modern-gradient' },
      ]
    ),
    msg(
      'assistant',
      'What visual style should your presentation have?',
      'options',
      [
        { label: 'Corporate — Professional and structured', value: 'corporate' },
        { label: 'Modern — Clean and contemporary', value: 'modern' },
        { label: 'Minimalist — Less is more', value: 'minimalist' },
        { label: 'Futuristic — Tech-forward and dynamic', value: 'futuristic' },
        { label: 'Bold — High contrast and impactful', value: 'bold' },
        { label: 'Elegant — Refined and sophisticated', value: 'elegant' },
      ]
    ),
    msg(
      'assistant',
      'How should slides transition between each other?',
      'options',
      [
        { label: 'None — Instant switch', value: 'none' },
        { label: 'Fade — Smooth crossfade', value: 'fade' },
        { label: 'Slide — Directional push', value: 'slide' },
        { label: 'Zoom — Scale in and out', value: 'zoom' },
      ]
    ),
    msg(
      'assistant',
      'Would you like me to refine the text for presentation style?',
      'options',
      [
        { label: 'Keep exact — Use my original text as-is', value: 'keep' },
        { label: 'Light polish — Fix grammar and flow', value: 'light' },
        { label: 'Presentation language — Concise bullet points', value: 'presentation' },
      ]
    ),
    msg(
      'assistant',
      'Should speaker notes be visible during your presentation?',
      'options',
      [
        { label: 'Yes — Show speaker notes panel', value: 'yes' },
        { label: 'No — Slides only', value: 'no' },
      ]
    ),
    msg(
      'assistant',
      `You're all set! Here's a summary of your presentation:\n\n- **${slideCount} slides** ready to present\n- Theme and style configured\n- Transitions and text options selected\n\nClick **Create Presentation** to finalize everything and jump into the editor.`
    ),
  ]
}

export type ChatFlowStep =
  | 'theme'
  | 'style'
  | 'animations'
  | 'refinedText'
  | 'showSpeakerNotes'
  | 'complete'

export const CHAT_FLOW_STEPS: ChatFlowStep[] = [
  'theme',
  'style',
  'animations',
  'refinedText',
  'showSpeakerNotes',
  'complete',
]
