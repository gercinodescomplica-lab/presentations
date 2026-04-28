'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import reuniaoDiretoriaSlides from '@/presentations/reuniaoDiretoriaSlides'

export default function ReuniaoDiretoriaPage() {
  return <PresentationRenderer slides={reuniaoDiretoriaSlides} showLanguageSwitcher={false} />
}
