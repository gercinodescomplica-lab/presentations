'use client'
import PresentationRenderer from '@/components/PresentationRenderer'
import slides from '@/presentations/jarvisSlides.zh'
export default function JarvisZhPage() {
  return <PresentationRenderer slides={slides} theme="light" />
}
