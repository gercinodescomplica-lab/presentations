'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakePaulistanoSlides.pt'

export default function DataLakePaulistanoPtPage() {
  return <PresentationRenderer slides={slides} />
}
