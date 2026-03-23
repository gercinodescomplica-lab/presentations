import { useState, useCallback, useEffect } from 'react'

export function usePresentation(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)))
  }, [currentSlide, totalSlides])

  const togglePresentation = useCallback(async () => {
    if (!isPresenting) {
      try {
        await document.documentElement.requestFullscreen()
        setIsPresenting(true)
      } catch {
        setIsPresenting(true)
      }
    } else {
      try {
        if (document.fullscreenElement) await document.exitFullscreen()
      } catch { /* ignore */ }
      setIsPresenting(false)
    }
  }, [isPresenting])

  // Sync state with actual fullscreen changes (user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isPresenting) {
        setIsPresenting(false)
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [isPresenting])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'Enter':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault()
          prevSlide()
          break
        case 'f':
        case 'F':
          togglePresentation()
          break
        case 'Escape':
          if (isPresenting) setIsPresenting(false)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, togglePresentation, isPresenting])

  return {
    currentSlide,
    totalSlides,
    isPresenting,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePresentation,
    isFirst: currentSlide === 0,
    isLast: currentSlide === totalSlides - 1,
  }
}
