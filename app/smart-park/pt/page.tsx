'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/smartParkSlides.pt'

export default function SmartParkPtPage() {
  return <PresentationRenderer slides={slides} />
}