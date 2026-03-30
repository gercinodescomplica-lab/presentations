import { motion } from 'framer-motion'
import { Activity, AlertTriangle } from 'lucide-react'

export default function Slide4() {
  const issues = [
    { label: 'Gargalos Operacionais', desc: 'Saturação de capacidade em esteiras de delivery no PRODAM STORE.' },
    { label: 'Impacto na Execução', desc: 'Maior lead time para entregas e dependências cruzadas não mapeadas.' },
    { label: 'Ajuste Estrutural', desc: 'Necessidade urgente de revisão arquitetural e alocação dinâmica.' }
  ]

  return (
    <div className="w-full h-full flex bg-[#0F172A] text-[#FFFFFF] overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2">
              <div className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
              SLIDE 04
            </span>
          </motion.div>

          <div>
            <motion.h2 className="text-5xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
              Entraves <br /> <span className="text-[#09DFAB]">(PRODAM STORE)</span>
            </motion.h2>
            <motion.p className="text-[#8BA0B4] text-xl leading-relaxed">
              Diagnóstico executivo de riscos da operação técnica.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative p-20 flex flex-col justify-center">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#035E65] blur-[180px] opacity-15 pointer-events-none rounded-full" />

        <div className="relative z-10 flex gap-12 items-stretch h-full">

          <div className="flex-1 flex flex-col justify-center gap-8">
            {issues.map((issue, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="pl-6 border-l-2 border-[#1E3A52] hover:border-[#09DFAB] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-[#04767F]" />
                  <h4 className="text-[#09DFAB] font-bold text-2xl uppercase tracking-wider">{issue.label}</h4>
                </div>
                <p className="text-[#8BA0B4] text-xl max-w-md ml-8 leading-relaxed">
                  {issue.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Graphic abstract */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-1/3 flex items-center justify-center p-12 bg-[#0A1120]/50 rounded-3xl border border-[#1E3A52]"
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border-[3px] border-[#0A1120] rounded-full border-t-[#035E65] animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 border-[3px] border-[#0A1120] rounded-full border-b-[#04767F] animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="w-12 h-12 text-[#09DFAB] animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </div>
  )
}
