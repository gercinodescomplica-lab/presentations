'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/eleicoesProdamSlides'

export default function EleicoesProdamEnPage() {
  return <PresentationRenderer slides={slides} />
}
