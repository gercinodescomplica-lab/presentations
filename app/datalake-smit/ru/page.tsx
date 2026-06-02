'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakeSmitSlides.ru'

export default function DataLakeSmitRuPage() {
  return <PresentationRenderer slides={slides} />
}
