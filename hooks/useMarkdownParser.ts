'use client'
import { useState, useCallback } from 'react'
import { parseMarkdown, extractPresentationTitle } from '../lib/markdown-parser'
import { Slide } from '../lib/types'

export function useMarkdownParser() {
  const [markdown, setMarkdown] = useState('')
  const [slides, setSlides] = useState<Slide[]>([])
  const [title, setTitle] = useState('')
  const [slideCount, setSlideCount] = useState(0)
  const [isParsed, setIsParsed] = useState(false)

  const parse = useCallback((md: string) => {
    setMarkdown(md)
    const parsed = parseMarkdown(md)
    const t = extractPresentationTitle(md)
    setSlides(parsed)
    setTitle(t)
    setSlideCount(parsed.length)
    setIsParsed(parsed.length > 0)
    return parsed
  }, [])

  const reset = useCallback(() => {
    setMarkdown('')
    setSlides([])
    setTitle('')
    setSlideCount(0)
    setIsParsed(false)
  }, [])

  return { markdown, slides, title, slideCount, isParsed, parse, reset }
}
