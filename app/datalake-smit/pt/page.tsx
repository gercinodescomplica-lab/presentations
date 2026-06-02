'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/dataLakeSmitSlides.pt'

export default function DataLakeSmitPtPage() {
  return <PresentationRenderer slides={slides} />
}
