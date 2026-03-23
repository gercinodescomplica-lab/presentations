'use client'

/**
 * /digital-twin
 *
 * Client component: imports the slide deck and passes it to the shared
 * PresentationRenderer. All interactivity (hooks, animations, keyboard
 * navigation) lives inside the engine — this file only defines the deck.
 *
 * To add or reorder slides, edit presentations/digitalTwinSlides.ts.
 */

import PresentationRenderer from '@/components/PresentationRenderer'
import digitalTwinSlides from '@/presentations/digitalTwinSlides'

export default function DigitalTwinPage() {
  return <PresentationRenderer slides={digitalTwinSlides} />
}
