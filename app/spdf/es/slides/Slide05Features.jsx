import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
  ContentBlockLight,
} from '@/components/SlideLayoutLight'

const features = [
  {
    label: 'Manipulación de Documentos',
    desc: 'Combine, divida, convierta, comprima y reorganice PDFs al instante, completamente dentro de su infraestructura.',
    color: '#2F80FF'
  },
  {
    label: 'Seguridad & Protección',
    desc: 'Aplique contraseñas, gestione permisos y redacte permanentemente información sensible para cumplir la LGPD.',
    color: '#00E5FF'
  },
  {
    label: 'Interfaz Intuitiva',
    desc: 'Interfaces modernas y fluidas que requieren menos de 2 horas de capacitación para dominar completamente.',
    color: '#7C3AED'
  },
  {
    label: 'Despliegue Flexible',
    desc: 'Disponible para entornos On-Premises estrictamente aislados y Nubes Privadas administradas.',
    color: '#00C9A7'
  }
]

export default function Slide05Features() {
  return (
    <SlideCardLight slideNum="05" label="FUNCIONALIDADES CLAVE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2F80FF">FUNCIONALIDADES</TagLabelLight>
          <GradientTitleLight>Kit Completo de PDF</GradientTitleLight>
          <SubtitleBarLight>Todo lo que necesita. Cero compromisos.</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            SPDF reemplaza las herramientas online vulnerables con un conjunto empresarial completo,
            permitiendo a los funcionarios públicos manipular documentos rápidamente mientras mantienen los datos almacenados de forma segura en servidores internos.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {features.map((feature, i) => (
            <ContentBlockLight key={feature.label} {...feature} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
