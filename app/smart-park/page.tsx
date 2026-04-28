'use client'

import { useTranslation } from 'react-i18next'
import PresentationRenderer from '@/components/PresentationRenderer'
import slidesEn from '@/presentations/smartParkSlides'
import slidesPt from '@/presentations/smartParkSlides.pt'
import slidesEs from '@/presentations/smartParkSlides.es'
import slidesZh from '@/presentations/smartParkSlides.zh'
import slidesRu from '@/presentations/smartParkSlides.ru'

export default function SmartParkPage() {
  const { i18n } = useTranslation()
  
  const lang = i18n.language || i18n.resolvedLanguage || 'pt'
  
  let currentSlides = slidesEn
  if (lang.startsWith('pt')) currentSlides = slidesPt
  else if (lang.startsWith('es')) currentSlides = slidesEs
  else if (lang.startsWith('zh')) currentSlides = slidesZh
  else if (lang.startsWith('ru')) currentSlides = slidesRu

  return <PresentationRenderer key={lang} slides={currentSlides} />
}