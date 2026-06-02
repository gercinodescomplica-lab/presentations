'use client'

import { useTranslation } from 'react-i18next'
import PresentationRenderer from '@/components/PresentationRenderer'
import slidesPt from '@/presentations/dataLakePaulistanoSlides.pt'
import slidesEn from '@/presentations/dataLakePaulistanoSlides'
import slidesEs from '@/presentations/dataLakePaulistanoSlides.es'
import slidesZh from '@/presentations/dataLakePaulistanoSlides.zh'
import slidesRu from '@/presentations/dataLakePaulistanoSlides.ru'

export default function DataLakePaulistanoPage() {
  const { i18n } = useTranslation()
  const lang = i18n.language || i18n.resolvedLanguage || 'pt'

  let currentSlides = slidesPt
  if (lang.startsWith('en')) currentSlides = slidesEn
  else if (lang.startsWith('es')) currentSlides = slidesEs
  else if (lang.startsWith('zh')) currentSlides = slidesZh
  else if (lang.startsWith('ru')) currentSlides = slidesRu

  return <PresentationRenderer key={lang} slides={currentSlides} />
}
