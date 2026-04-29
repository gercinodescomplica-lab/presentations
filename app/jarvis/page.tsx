'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/jarvisSlides.pt'

export default function JarvisPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
