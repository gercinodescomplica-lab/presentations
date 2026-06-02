'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakeSmitSlides.es'

export default function DataLakeSmitEsPage() {
  return <PresentationRenderer slides={slides} />
}
