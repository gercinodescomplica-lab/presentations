'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakePaulistanoSlides.es'

export default function DataLakePaulistanoEsPage() {
  return <PresentationRenderer slides={slides} />
}
