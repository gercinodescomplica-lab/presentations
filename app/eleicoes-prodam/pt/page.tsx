'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/eleicoesProdamSlides.pt'

export default function EleicoesProdamPtPage() {
  return <PresentationRenderer slides={slides} />
}
