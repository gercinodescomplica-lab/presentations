'use client'

import { useTranslation } from 'react-i18next'
import PresentationRenderer from '@/components/PresentationRenderer'
import slidesEn from '@/presentations/spdfSlides'
import slidesPt from '@/presentations/spdfSlides.pt'
import slidesEs from '@/presentations/spdfSlides.es'

export default function SpdfPresentationPage() {
  const { i18n } = useTranslation()
  
  const lang = i18n.language || i18n.resolvedLanguage || 'pt'

  // PT-BR is default
  let currentSlides = slidesPt
  if (lang.startsWith('en')) currentSlides = slidesEn
  else if (lang.startsWith('es')) currentSlides = slidesEs

  return <PresentationRenderer key={lang} slides={currentSlides} theme="light" />
}
