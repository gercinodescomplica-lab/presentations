'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spdfSlides.zh'

export default function SpdfZhPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}

