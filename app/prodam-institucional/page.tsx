'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/prodamInstitucionalSlides'

export default function ProdamInstitucionalPage() {
  return <PresentationRenderer slides={slides} />
}
