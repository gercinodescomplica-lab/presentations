'use client'
import React from 'react'
import { Slide, Theme } from '../../lib/types'

interface SlideRendererProps {
  slide: Slide
  theme: Theme
  scale?: number
  isActive?: boolean
  showSlideNumber?: boolean
}

function renderInlineMarkdown(text: string, textColor: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ fontWeight: 700, color: textColor }}>
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} style={{ fontStyle: 'italic' }}>
          {part.slice(1, -1)}
        </em>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          style={{
            fontFamily: 'monospace',
            fontSize: '0.9em',
            background: 'rgba(128,128,128,0.2)',
            padding: '1px 4px',
            borderRadius: '3px',
          }}
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}

function renderContent(content: string, theme: Theme, scaleFactor: number): React.ReactNode {
  if (!content.trim()) return null

  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let keyCounter = 0

  function flushList() {
    if (listItems.length === 0) return

    const fontSize = Math.max(11, 16 * scaleFactor)
    const itemStyle: React.CSSProperties = {
      color: theme.palette.text,
      fontSize,
      lineHeight: 1.7,
      marginBottom: 2 * scaleFactor,
    }

    if (listType === 'ul') {
      elements.push(
        <ul key={`list-${keyCounter++}`} style={{ paddingLeft: 20 * scaleFactor, marginBottom: 8 * scaleFactor }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ ...itemStyle, listStyleType: 'disc' }}>
              {renderInlineMarkdown(item, theme.palette.text)}
            </li>
          ))}
        </ul>
      )
    } else if (listType === 'ol') {
      elements.push(
        <ol key={`list-${keyCounter++}`} style={{ paddingLeft: 20 * scaleFactor, marginBottom: 8 * scaleFactor }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ ...itemStyle, listStyleType: 'decimal' }}>
              {renderInlineMarkdown(item, theme.palette.text)}
            </li>
          ))}
        </ol>
      )
    }

    listItems = []
    listType = null
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      flushList()
      continue
    }

    const ulMatch = trimmed.match(/^[-*+]\s+(.+)/)
    const olMatch = trimmed.match(/^\d+\.\s+(.+)/)
    const h3Match = trimmed.match(/^###\s+(.+)/)
    const h2Match = trimmed.match(/^##\s+(.+)/)
    const h1Match = trimmed.match(/^#\s+(.+)/)

    if (ulMatch) {
      if (listType === 'ol') flushList()
      listType = 'ul'
      listItems.push(ulMatch[1])
    } else if (olMatch) {
      if (listType === 'ul') flushList()
      listType = 'ol'
      listItems.push(olMatch[1])
    } else if (h1Match) {
      flushList()
      elements.push(
        <h1
          key={`h1-${keyCounter++}`}
          style={{
            color: theme.palette.text,
            fontSize: Math.max(14, 22 * scaleFactor),
            fontWeight: 700,
            marginBottom: 6 * scaleFactor,
            lineHeight: 1.3,
          }}
        >
          {renderInlineMarkdown(h1Match[1], theme.palette.text)}
        </h1>
      )
    } else if (h2Match) {
      flushList()
      elements.push(
        <h2
          key={`h2-${keyCounter++}`}
          style={{
            color: theme.palette.text,
            fontSize: Math.max(13, 19 * scaleFactor),
            fontWeight: 600,
            marginBottom: 4 * scaleFactor,
            lineHeight: 1.3,
          }}
        >
          {renderInlineMarkdown(h2Match[1], theme.palette.text)}
        </h2>
      )
    } else if (h3Match) {
      flushList()
      elements.push(
        <h3
          key={`h3-${keyCounter++}`}
          style={{
            color: theme.palette.muted,
            fontSize: Math.max(12, 16 * scaleFactor),
            fontWeight: 600,
            marginBottom: 4 * scaleFactor,
          }}
        >
          {renderInlineMarkdown(h3Match[1], theme.palette.muted)}
        </h3>
      )
    } else {
      flushList()
      elements.push(
        <p
          key={`p-${keyCounter++}`}
          style={{
            color: theme.palette.text,
            fontSize: Math.max(11, 16 * scaleFactor),
            lineHeight: 1.7,
            marginBottom: 6 * scaleFactor,
          }}
        >
          {renderInlineMarkdown(trimmed, theme.palette.text)}
        </p>
      )
    }
  }

  flushList()
  return elements
}

export function SlideRenderer({
  slide,
  theme,
  scale = 1,
  isActive = false,
  showSlideNumber = true,
}: SlideRendererProps) {
  const slideStyle: React.CSSProperties = {
    backgroundColor: theme.palette.background,
    fontFamily: theme.fontFamily,
    width: '100%',
    aspectRatio: '16 / 9',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8 * scale,
    border: isActive
      ? `${2 * scale}px solid ${theme.palette.accent}`
      : `${1 * scale}px solid rgba(128,128,128,0.15)`,
  }

  const padding = Math.max(16, 48 * scale)
  const titleFontSize = Math.max(14, 36 * scale)
  const accentBarHeight = Math.max(2, 4 * scale)

  return (
    <div style={slideStyle}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: accentBarHeight,
          backgroundColor: theme.palette.accent,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: padding,
          paddingTop: padding + accentBarHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: slide.layout === 'title' ? 'center' : 'flex-start',
        }}
      >
        {slide.title && (
          <div style={{ marginBottom: Math.max(8, 20 * scale) }}>
            <h2
              style={{
                color: theme.palette.text,
                fontSize: titleFontSize,
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily: theme.fontFamily,
              }}
            >
              {slide.title}
            </h2>
            <div
              style={{
                marginTop: Math.max(4, 8 * scale),
                width: Math.max(24, 60 * scale),
                height: Math.max(1, 3 * scale),
                backgroundColor: theme.palette.accent,
                borderRadius: 2,
              }}
            />
          </div>
        )}

        {slide.content && (
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {renderContent(slide.content, theme, scale)}
          </div>
        )}

        {slide.layout === 'title' && !slide.content && (
          <p style={{ color: theme.palette.muted, fontSize: Math.max(10, 18 * scale), marginTop: 8 * scale }}>
            Presentation
          </p>
        )}
      </div>

      {showSlideNumber && (
        <div
          style={{
            position: 'absolute',
            bottom: Math.max(8, 16 * scale),
            right: Math.max(8, 20 * scale),
            color: theme.palette.muted,
            fontSize: Math.max(8, 12 * scale),
            fontFamily: theme.fontFamily,
            opacity: 0.6,
          }}
        >
          {slide.number}
        </div>
      )}
    </div>
  )
}
