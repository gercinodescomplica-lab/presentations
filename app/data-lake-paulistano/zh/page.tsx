'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakePaulistanoSlides.zh'

export default function DataLakePaulistanoZhPage() {
  return <PresentationRenderer slides={slides} />
}
