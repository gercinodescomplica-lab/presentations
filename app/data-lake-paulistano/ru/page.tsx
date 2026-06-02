'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakePaulistanoSlides.ru'

export default function DataLakePaulistanoRuPage() {
  return <PresentationRenderer slides={slides} />
}
