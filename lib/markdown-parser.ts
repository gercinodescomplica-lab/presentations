import { Slide } from './types'

function generateId(): string {
  return crypto.randomUUID()
}

function detectLayout(content: string, title: string): Slide['layout'] {
  if (!title && !content.trim()) return 'blank'
  if (!content.trim()) return 'title'
  if (content.includes('|') && content.includes('---')) return 'split'
  return 'content'
}

function parseSlideBlock(block: string, index: number): Slide | null {
  const lines = block.split('\n')
  let title = ''
  let notes = ''
  let contentLines: string[] = []
  let inNotes = false
  let slideNumber = index + 1

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    const slideNumMatch = line.match(/^#\s+Slide\s+(\d+)\s*$/i)
    if (slideNumMatch) {
      slideNumber = parseInt(slideNumMatch[1], 10)
      continue
    }

    const titleMatch = line.match(/^##\s+(.+)$/)
    if (titleMatch && !inNotes) {
      title = titleMatch[1].trim()
      continue
    }

    const notesMatch = line.match(/^###\s+Notes?\s*$/i)
    if (notesMatch) {
      inNotes = true
      continue
    }

    if (inNotes) {
      notes += line + '\n'
    } else {
      contentLines.push(line)
    }
  }

  let content = contentLines.join('\n').trim()

  if (!title) {
    const firstContentLine = contentLines.find((l) => l.trim().length > 0)
    if (firstContentLine) {
      title = firstContentLine.replace(/^#+\s*/, '').trim()
      const titleIdx = contentLines.findIndex((l) => l === firstContentLine)
      contentLines.splice(titleIdx, 1)
      content = contentLines.join('\n').trim()
    }
  }

  if (!title && !content && !notes.trim()) {
    return null
  }

  return {
    id: generateId(),
    number: slideNumber,
    title: title || `Slide ${slideNumber}`,
    content,
    notes: notes.trim() || undefined,
    layout: detectLayout(content, title),
  }
}

export function parseMarkdown(markdown: string): Slide[] {
  if (!markdown || !markdown.trim()) return []

  const blocks = markdown.split(/\n---\n|\n---$|^---\n/)

  const slides: Slide[] = []
  let slideIndex = 0

  for (const block of blocks) {
    const trimmedBlock = block.trim()
    if (!trimmedBlock) continue

    const slide = parseSlideBlock(trimmedBlock, slideIndex)
    if (slide) {
      slides.push(slide)
      slideIndex++
    }
  }

  slides.forEach((slide, idx) => {
    if (slide.number === idx + 1 || slide.number === 0) {
      slide.number = idx + 1
    }
  })

  return slides
}

export function extractPresentationTitle(markdown: string): string {
  if (!markdown || !markdown.trim()) return 'Untitled Presentation'

  const lines = markdown.split('\n')

  for (const line of lines) {
    const titleMatch = line.match(/^#\s+(.+)$/)
    if (titleMatch) {
      const candidate = titleMatch[1].trim()
      if (!/^Slide\s+\d+$/i.test(candidate)) {
        return candidate
      }
    }
  }

  return 'Untitled Presentation'
}

export function countSlides(markdown: string): number {
  return parseMarkdown(markdown).length
}
