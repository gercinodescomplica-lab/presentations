'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/jarvisSlides.ru'
export default function JarvisRuPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
