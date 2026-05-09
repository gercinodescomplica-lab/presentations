'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spInovacaoSlides.ru'

export default function SpInovacaoRuPage() {
  return <PresentationRenderer slides={slides} />
}
