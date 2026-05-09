'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spInovacaoSlides.es'

export default function SpInovacaoEsPage() {
  return <PresentationRenderer slides={slides} />
}
