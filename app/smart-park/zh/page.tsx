'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/smartParkSlides.zh'

export default function SmartParkZhPage() {
  return <PresentationRenderer slides={slides} />
}
