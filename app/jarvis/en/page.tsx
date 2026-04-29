'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/jarvisSlides'

export default function JarvisEnPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
