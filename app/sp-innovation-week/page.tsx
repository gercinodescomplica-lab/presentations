'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/spInovacaoSlides'

export default function SpInovacaoPage() {
  return <PresentationRenderer slides={slides} />
}
