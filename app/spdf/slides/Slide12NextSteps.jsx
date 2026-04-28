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
  { role: 'Diretor Presidente PRODAM', sign: 'Pend.', color: '#2563eb' },
  { role: 'Gerência de Desenvolvimento', sign: 'Pend.', color: '#3b82f6' },
  { role: 'Gerência Comercial', sign: 'Pend.', color: '#eab308' },
]

export default function Slide12NextSteps() {
  return (
    <SlideCardLight slideNum="12" label="CLOSURE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#eab308">APPROVAL & LAUNCH</TagLabelLight>
          <GradientTitleLight>Team & Next Steps</GradientTitleLight>
          <SubtitleBarLight>Establishing the core execution squad</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            The delivery of SPDF will be led by a dedicated cross-functional task force blending Product Management, Software Engineering, Architecture, and specialized InfoSec protocols.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold uppercase">
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Prod. Manager</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Sys. Analyst</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">Software Arch.</span>
             <span className="px-3 py-1.5 rounded-md bg-white text-slate-500 border border-slate-200 shadow-sm">InfoSec Specialist</span>
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
            <div className="text-slate-800 text-lg font-heading font-bold mb-2">Internal Approval Path</div>
            
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
              Sign & Authorize Project
            </motion.button>
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
