'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spdfSlides.ru'

export default function SpdfRuPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}

