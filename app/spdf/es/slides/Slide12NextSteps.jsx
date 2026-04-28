import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const approvers = [
  { role: 'Director Presidente PRODAM', sign: 'Pend.', color: '#2563eb' },
  { role: 'Gerencia de Desarrollo', sign: 'Pend.', color: '#3b82f6' },
  { role: 'Gerencia Comercial', sign: 'Pend.', color: '#eab308' },
]

export default function Slide12NextSteps() {
  return (
    <SlideCardLight slideNum="12" label="CIERRE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#eab308">APROBACIÓN & LANZAMIENTO</TagLabelLight>
          <GradientTitleLight>Equipo & Próximos Pasos</GradientTitleLight>
          <SubtitleBarLight>Formando el equipo central de ejecución</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            La entrega de SPDF será liderada por un equipo de trabajo multifuncional dedicado que combina Gestión de Producto, Ingeniería de Software, Arquitectura y protocolos especializados de InfoSec.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold uppercase">
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Ger. de Producto</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Analista de Sistemas</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Arq. de Software</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Espec. InfoSec</span>
          </div>
        </LeftPanelLight>

        <RightPanelLight className="justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-md flex flex-col gap-4 p-8 rounded-2xl bg-white"
            style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
          >
            <div className="text-slate-800 text-lg font-heading font-bold mb-2">Flujo de Aprobación Interno</div>

            {approvers.map((person, i) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shadow-sm" style={{ background: person.color }} />
                  <span className="text-slate-600 font-semibold text-sm">{person.role}</span>
                </div>
                <div className="text-slate-400 font-bold text-xs font-mono uppercase tracking-widest">{person.sign}</div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 w-full py-3 rounded-xl font-heading font-bold text-sm cursor-pointer transition-all hover:bg-blue-50/50 hover:shadow-md active:scale-95"
              style={{ background: 'white', color: '#2563eb', border: '1px solid #2563eb' }}
            >
              Firmar & Autorizar Proyecto
            </motion.button>
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
