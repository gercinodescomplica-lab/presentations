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
    const el = document.documentElement
    if (!isPresenting) {
      try {
        const requestFS =
          el.requestFullscreen?.bind(el) ||
          el.webkitRequestFullscreen?.bind(el) ||
          el.mozRequestFullScreen?.bind(el) ||
          el.msRequestFullscreen?.bind(el)
        if (requestFS) await requestFS()
      } catch { /* ignore — fullscreen blocked by browser */ }
      setIsPresenting(true)
    } else {
      try {
        const exitFS =
          document.exitFullscreen?.bind(document) ||
          document.webkitExitFullscreen?.bind(document) ||
          document.mozCancelFullScreen?.bind(document) ||
          document.msExitFullscreen?.bind(document)
        const isFullscreen =
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        if (exitFS && isFullscreen) await exitFS()
      } catch { /* ignore */ }
      setIsPresenting(false)
    }
  }, [isPresenting])

  // Sync state with actual fullscreen changes (user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      if (!isFullscreen && isPresenting) {
        setIsPresenting(false)
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
    }
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
