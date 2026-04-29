'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/smartParkSlides'

export default function SmartParkEnPage() {
  return <PresentationRenderer slides={slides} />
}
