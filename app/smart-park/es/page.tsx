'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/smartParkSlides.es'

export default function SmartParkEsPage() {
  return <PresentationRenderer slides={slides} />
}
