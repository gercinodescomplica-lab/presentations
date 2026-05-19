'use client'
import { useState, useEffect } from 'react'

// Reference canvas — slides are authored at this fixed size.
// The wrapper scales the canvas as a unit to fill any viewport,
// exactly like PowerPoint / Keynote scale their artboard.
const CANVAS_W = 1400
const CANVAS_H = 820

// Height of the fixed PresentationControls bar at the bottom
const CONTROLS_H = 64

export default function ScaledCanvas({ children }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      const availW = window.innerWidth
      const availH = window.innerHeight - CONTROLS_H
      setScale(Math.min(availW / CANVAS_W, availH / CANVAS_H))
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      style={{ height: `calc(100vh - ${CONTROLS_H}px)` }}
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      {/* Fixed artboard — scales uniformly, never reflows */}
      <div
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  )
}
