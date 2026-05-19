'use client'

import { useTranslation } from 'react-i18next'
import PresentationRenderer from '@/components/PresentationRenderer'
import slidesPt from '@/presentations/eleicoesProdamSlides.pt'
import slidesEn from '@/presentations/eleicoesProdamSlides'
import slidesEs from '@/presentations/eleicoesProdamSlides.es'
import slidesZh from '@/presentations/eleicoesProdamSlides.zh'
import slidesRu from '@/presentations/eleicoesProdamSlides.ru'

export default function EleicoesProdamPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language || i18n.resolvedLanguage || 'pt'

  let currentSlides = slidesPt
  if (lang.startsWith('en')) currentSlides = slidesEn
  else if (lang.startsWith('es')) currentSlides = slidesEs
  else if (lang.startsWith('zh')) currentSlides = slidesZh
  else if (lang.startsWith('ru')) currentSlides = slidesRu

  return <PresentationRenderer key={lang} slides={currentSlides} />
}
