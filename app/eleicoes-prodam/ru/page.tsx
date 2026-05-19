'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/eleicoesProdamSlides.ru'

export default function EleicoesProdamRuPage() {
  return <PresentationRenderer slides={slides} />
}
