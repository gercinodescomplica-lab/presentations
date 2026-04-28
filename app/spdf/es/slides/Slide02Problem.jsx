import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const problems = [
  {
    icon: '⚠️',
    title: 'Shadow IT y Herramientas Online',
    desc: 'Los funcionarios rutinariamente suben documentos confidenciales a servicios online gratuitos para dividir, unir o convertir archivos.',
    color: '#e11d48', // Red
  },
  {
    icon: '📄',
    title: 'Incumplimiento de la LGPD',
    desc: 'Usar procesadores externos de terceros expone datos municipales y ciudadanos, violando la Ley General de Protección de Datos.',
    color: '#f59e0b', // Amber/Yellow
  },
  {
    icon: '💸',
    title: 'Licencias Comerciales Costosas',
    desc: 'Proveer herramientas premium como Adobe Acrobat para cada funcionario es financieramente inviable para el municipio.',
    color: '#2563eb', // Blue
  },
]

export default function Slide02Problem() {
  return (
    <SlideCardLight slideNum="02" label="EL PROBLEMA">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#e11d48">VULNERABILIDAD</TagLabelLight>
          <GradientTitleLight>El Punto Ciego de Fugas de Datos</GradientTitleLight>
          <SubtitleBarLight>Conveniencia diaria vs. Seguridad de Datos</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            La falta de una herramienta rápida y nativa para manipular PDFs crea un grave problema de shadow IT. Los organismos públicos externalizan documentos sensibles sin el debido control.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="gap-5">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="flex gap-4 p-5 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: `${prob.color}15`, border: `1px solid ${prob.color}30` }}
              >
                {prob.icon}
              </div>
              <div className="flex flex-col gap-1.5 self-center">
                <h3 className="font-heading font-bold text-sm text-slate-800">{prob.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
