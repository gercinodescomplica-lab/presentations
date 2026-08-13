'use client'

import PresentationRenderer from '@/components/PresentationRenderer'
import reuniaoDiretoriaV2Slides from '@/presentations/reuniaoDiretoriaV2Slides'

export default function ReuniaoDiretoriaV2Page() {
  return <PresentationRenderer slides={reuniaoDiretoriaV2Slides} showLanguageSwitcher={false} />
}
