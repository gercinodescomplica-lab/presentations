'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'

const items = [
  { icon: '🎯', title: 'Operación de Misión Crítica', desc: 'PRODAM acompaña desde la configuración hasta el escrutinio final — su equipo se enfoca en el rito electoral, nosotros garantizamos la tecnología.', color: BLUE, highlight: 'Soporte end-to-end' },
  { icon: '🔐', title: 'Autonomía con Seguridad', desc: 'Backoffice renovado permite que el propio cliente opere la elección, con monitoreo avanzado vía Dynatrace.', color: GREEN, highlight: 'Dynatrace · Monitoreo 24/7' },
  { icon: '🔗', title: 'Integración Nativa', desc: 'Login integrado con Microsoft 365 para procesos electorales internos sin fricción para electores y candidatos.', color: PURPLE, highlight: 'Microsoft 365 · SSO' },
]

export default function Slide04Diferenciales() {
  return (
    <SlideCardLight slideNum="04" label="DIFERENCIALES">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={BLUE}>Diferenciales</TagLabelLight>
          <GradientTitleLight>Más que un sistema:<br />una alianza<br />estratégica</GradientTitleLight>
          <SubtitleBarLight>Tecnología + Acompañamiento especializado</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">PRODAM no solo provee el sistema — está presente en cada etapa del proceso electoral, garantizando que todo funcione en el momento preciso.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit" style={{ border: `1px solid ${GREEN}30`, background: `${GREEN}08` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: GREEN }}>SLA GARANTIZADO · MISIÓN CRÍTICA</span>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {items.map(({ icon, title, desc, color, highlight }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.13, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: color }} />
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-base font-semibold" style={{ color }}>{title}</span>
                <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1.5 mt-0.5"><div className="h-px flex-shrink-0 w-4" style={{ background: `${color}50` }} /><span className="text-xs font-mono tracking-wide" style={{ color: `${color}90` }}>{highlight}</span></div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
