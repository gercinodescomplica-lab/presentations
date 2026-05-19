'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/eleicoesProdamSlides.es'

export default function EleicoesProdamEsPage() {
  return <PresentationRenderer slides={slides} />
}
