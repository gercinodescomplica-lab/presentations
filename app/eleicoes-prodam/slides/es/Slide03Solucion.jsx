'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const CYAN = '#0891B2'
const GOLD = '#D97706'

const modules = [
  { icon: '🖥️', name: 'Urna en Línea', desc: 'Votación remota integrada con Microsoft 365', color: BLUE, tag: 'Remoto' },
  { icon: '🏛️', name: 'Urna Presencial', desc: 'Sistema réplica de mesa electoral para grandes consejos', color: GREEN, tag: 'Presencial' },
  { icon: '📊', name: 'Escrutinio TSE', desc: 'Lectura de actas de urna electrónica del TSE', color: CYAN, tag: 'Integración' },
  { icon: '⚙️', name: 'Backoffice', desc: 'Gestión autónoma por el propio cliente', color: GOLD, tag: 'Gestión' },
]

export default function Slide03Solucion() {
  return (
    <SlideCardLight slideNum="03" label="LA SOLUCIÓN">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={GREEN}>La Solución</TagLabelLight>
          <GradientTitleLight>Elecciones como Servicio</GradientTitleLight>
          <SubtitleBarLight>Del voto al escrutinio, sin preocupaciones</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">Plataforma modular que cubre el ciclo electoral completo — desde la inscripción de candidatos hasta la publicación de resultados.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}25` }}>
            <div className="flex items-start gap-3"><span className="text-lg flex-shrink-0">✅</span><div className="flex flex-col gap-1"><span className="text-xs font-mono font-semibold tracking-wider" style={{ color: GREEN }}>VENTAJA PRINCIPAL</span><p className="text-slate-600 text-base leading-relaxed">Todo parametrizable — sin personalizaciones costosas, sin retrabajo.</p></div></div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="grid grid-cols-2 gap-4 w-full">
            {modules.map(({ icon, name, desc, color, tag }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="flex items-center justify-between"><div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}10` }}>{icon}</div><span className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{tag}</span></div>
                <div className="flex flex-col gap-1"><span className="text-base font-semibold" style={{ color }}>{name}</span><p className="text-slate-700 text-sm leading-relaxed">{desc}</p></div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
