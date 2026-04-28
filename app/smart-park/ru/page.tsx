'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/smartParkSlides.ru'

export default function SmartParkRuPage() {
  return <PresentationRenderer slides={slides} />
}
