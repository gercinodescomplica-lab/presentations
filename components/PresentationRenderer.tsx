'use client'

/**
 * PresentationRenderer
 *
 * Wraps the existing slide engine (SlideFrame + SlideContainer +
 * PresentationControls + KeyboardNavigation) and accepts a slides array
 * as a prop so that each deck page can supply its own set of slides.
 *
 * The engine internals (usePresentation, SlideFrame, SlideContainer,
 * PresentationControls, KeyboardNavigation) are NOT modified here — this
 * component only wires the slides prop into the existing system.
 */

import React, { useEffect, useRef } from 'react'
import { usePresentation } from '@/hooks/usePresentation'
import ScaledCanvas from '@/components/ScaledCanvas'
import SlideContainer from '@/components/SlideContainer'
import SlideFrame from '@/components/SlideFrame'
import PresentationControls from '@/components/PresentationControls'
import KeyboardNavigation from '@/components/KeyboardNavigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import PrintButton from '@/components/PrintButton'

interface PresentationRendererProps {
  slides: React.ComponentType[]
  theme?: 'dark' | 'light'
  showLanguageSwitcher?: boolean
}

export default function PresentationRenderer({ slides, theme = 'dark', showLanguageSwitcher = true }: PresentationRendererProps) {
  const presentation = usePresentation(slides.length)
  const {
    currentSlide,
    direction,
    isPresenting,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentation,
    isFirst,
    isLast,
    totalSlides,
  } = presentation

  const CurrentSlide = slides[currentSlide]

  const lastScrollTime = useRef(0)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < 600) return
      lastScrollTime.current = now
      if (e.deltaY > 0) prevSlide()
      else nextSlide()
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [nextSlide, prevSlide])

  return (
    <SlideFrame isPresenting={isPresenting} theme={theme}>
      <ScaledCanvas>
        <SlideContainer currentSlide={currentSlide} direction={direction}>
          <CurrentSlide />
        </SlideContainer>
      </ScaledCanvas>

      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isPresenting={isPresenting}
        isFirst={isFirst}
        isLast={isLast}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        goToSlide={goToSlide}
        togglePresentation={togglePresentation}
        theme={theme}
        rightControls={
          <>
            <PrintButton slides={slides} isPresenting={isPresenting} theme={theme} />
            {showLanguageSwitcher && <LanguageSwitcher isPresenting={isPresenting} theme={theme} />}
          </>
        }
      />

      <KeyboardNavigation isPresenting={isPresenting} />
    </SlideFrame>
  )
}
