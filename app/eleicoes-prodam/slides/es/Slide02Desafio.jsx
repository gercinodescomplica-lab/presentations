'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const RED = '#DC2626'
const GOLD = '#D97706'

const challenges = [
  { icon: '🔗', title: 'Dependencia técnica externa', desc: 'Equipos tercerizados operan sistemas críticos sin conocimiento del contexto institucional.', color: RED },
  { icon: '⚠️', title: 'Riesgo de alta exposición', desc: 'Los fallos durante las elecciones tienen repercusión institucional inmediata — cero margen de error.', color: GOLD },
  { icon: '🔀', title: 'Falta de estandarización', desc: 'Diferentes modelos de votación (en línea, presencial, TSE) sin plataforma unificada.', color: RED },
  { icon: '😞', title: 'Experiencia inadecuada', desc: 'Electores y candidatos enfrentan interfaces confusas y procesos poco confiables.', color: GOLD },
]

export default function Slide02Desafio() {
  return (
    <SlideCardLight slideNum="02" label="EL DESAFÍO">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={RED}>El Desafío</TagLabelLight>
          <GradientTitleLight>Simple en las reglas,<br />crítico en la ejecución</GradientTitleLight>
          <SubtitleBarLight>Alta visibilidad · Cero margen de error</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">Máxima exposición, mínimo margen de error — 4 gaps recurrentes que ponen en riesgo cada proceso.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: `${RED}06`, border: `1px solid ${RED}20` }}>
            <span className="text-xs font-mono tracking-wide" style={{ color: RED }}>VENTANA CRÍTICA DE EJECUCIÓN</span>
            <div className="flex items-center gap-1.5">
              {['Apertura', 'Votación', 'Cierre', 'Escrutinio'].map((f, i) => (
                <div key={f} className="flex items-center gap-1.5 flex-1"><div className="h-1.5 flex-1 rounded-full" style={{ background: i < 2 ? `${RED}50` : `${GOLD}50` }} /><span className="text-slate-400 text-[9px] font-mono whitespace-nowrap">{f}</span></div>
              ))}
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {challenges.map(({ icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex gap-4 p-4 rounded-xl" style={{ border: `1px solid ${color}18`, background: `${color}05` }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}12` }}>{icon}</div>
              <div className="flex flex-col gap-1"><span className="text-base font-semibold" style={{ color }}>{title}</span><p className="text-slate-700 text-base leading-relaxed">{desc}</p></div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
