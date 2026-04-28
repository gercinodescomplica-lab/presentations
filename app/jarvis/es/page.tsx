'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/jarvisSlides.es'
export default function JarvisEsPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
