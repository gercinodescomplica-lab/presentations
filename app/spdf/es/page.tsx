'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spdfSlides.es'

export default function SpdfEsPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
