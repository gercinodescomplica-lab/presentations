'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spInovacaoSlides.en'

export default function SpInovacaoEnPage() {
  return <PresentationRenderer slides={slides} />
}
