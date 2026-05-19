'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const GOLD = '#D97706'

const stats = [
  { value: '+20', label: 'Elecciones realizadas', color: BLUE },
  { value: '690K', label: 'Electores atendidos', color: GREEN },
  { value: '+1M', label: 'Votos procesados', color: GOLD },
]

const clients = ['CMDCA', 'IPREM', 'COMAS', 'CMH', 'CPM', 'CMPU', 'SMADS', 'SEHAB']

export default function Slide05Credibilidad() {
  return (
    <SlideCardLight slideNum="05" label="CREDIBILIDAD">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={GOLD}>Credibilidad</TagLabelLight>
          <GradientTitleLight>Resultados que<br />comprueban<br />la solución</GradientTitleLight>
          <SubtitleBarLight>Historial comprobado en São Paulo</SubtitleBarLight>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: `${BLUE}06`, border: `1px solid ${BLUE}18` }}>
            <span className="text-[10px] font-mono font-semibold tracking-wider" style={{ color: BLUE }}>DESTACADOS 2025</span>
            <ul className="flex flex-col gap-1.5">
              {['6 procesos electorales de alta complejidad', 'Nuevo módulo administrativo entregado', 'Nueva Urna en Línea implantada'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: BLUE }} /><span className="text-slate-700 text-sm leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="flex gap-3 w-full">
            {stats.map(({ value, label, color }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }} className="flex-1 flex flex-col items-center gap-2 py-5 px-4 rounded-2xl bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.06)' }}>
                <span className="font-heading font-bold leading-none" style={{ fontSize: '2.2rem', color }}>{value}</span>
                <span className="text-slate-600 text-xs font-mono tracking-wide text-center">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="w-full h-px bg-slate-100" />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex flex-col gap-3 w-full">
            <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-600">CLIENTES DE REFERENCIA</span>
            <div className="flex flex-wrap gap-2">
              {clients.map((client, i) => (
                <motion.div key={client} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.06 }} className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide text-slate-600 bg-slate-50" style={{ border: '1px solid #E2E8F0' }}>{client}</motion.div>
              ))}
            </div>
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
