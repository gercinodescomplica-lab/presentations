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

const securityMeasures = [
  {
    label: 'Cero Exposición de Datos',
    desc: 'El procesamiento se mantiene localizado en sus servidores. Sin transferencias a nube pública, sin transmisiones por APIs expuestas a internet.',
    color: '#FF4D4D'
  },
  {
    label: 'Eliminación Automática',
    desc: 'Todos los archivos temporales subidos y generados se borran automáticamente después de 1 hora o cuando se cierra la sesión.',
    color: '#FF8C00'
  },
  {
    label: 'Registros de Auditoría por 5 Años',
    desc: 'Registros persistentes y detallados de cada interacción de documento, datos de usuario y modificación del sistema para cumplimiento total con la LGPD.',
    color: '#00E5FF'
  },
  {
    label: 'Cifrado Empresarial',
    desc: 'TLS 1.3 garantiza el tránsito seguro de datos, junto con cifrado en reposo para volúmenes temporales.',
    color: '#7C3AED'
  }
]

export default function Slide06Security() {
  return (
    <SlideCardLight slideNum="06" label="SEGURIDAD & CUMPLIMIENTO">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">CUMPLIMIENTO LGPD</TagLabelLight>
          <GradientTitleLight>Inviolable por Diseño</GradientTitleLight>
          <SubtitleBarLight>Protección total de datos públicos sensibles</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Al evitar procesadores online de terceros, SPDF elimina la principal superficie de vulnerabilidad.
            Combinado con políticas agresivas de retención de datos, sus operaciones permanecen en estricto cumplimiento con los requisitos de protección de datos de Brasil.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {securityMeasures.map((measure, i) => (
            <ContentBlockLight key={measure.label} {...measure} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
