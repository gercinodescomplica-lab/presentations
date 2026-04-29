'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spdfSlides.pt'

export default function SpdfPtPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
