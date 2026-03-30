import { motion } from 'framer-motion'
import { Layers, CheckCircle2, Clock } from 'lucide-react'

export default function Slide4Implantacao() {
  const steps = [
    { title: 'SGM', status: 'Implantado com sucesso', icon: CheckCircle2, color: '#09DFAB', border: 'border-[#09DFAB]/50', bg: 'bg-[#09DFAB]/10' },
    { title: 'PGM', status: 'Em trâmite (Mapeamento / Aprovação)', icon: Clock, color: '#8BA0B4', border: 'border-[#1E3A52]', bg: 'bg-[#0A1120]' }
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
              Implantação do <br/> <span className="text-[#09DFAB]">Fator de Complexidade</span>
            </motion.h2>
            <motion.p className="text-[#8BA0B4] text-xl leading-relaxed">
              Adoção do modelo de cobrança por fator de complexidade: secretarias que adotaram o modelo.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative p-20 flex flex-col gap-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
           <h3 className="text-2xl font-medium text-[#8BA0B4] flex items-center gap-3">
             <Layers className="text-[#09DFAB] w-6 h-6" /> Onde já estamos trabalhando o fator de complexidade
           </h3>
           <div className="w-full h-px bg-[#1E3A52] mt-6 mb-8" />
        </motion.div>

        <div className="flex flex-col gap-6 relative z-10">
          {steps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: idx * 0.2 }}
               className={`w-full p-8 rounded-2xl border ${step.border} ${step.bg} flex items-center justify-between shadow-lg`}
             >
                <div className="flex items-center gap-6">
                   <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <step.icon style={{ color: step.color }} className="w-8 h-8" />
                   </div>
                   <div>
                     <h4 className="text-3xl font-bold">{step.title}</h4>
                     <p className="text-xl mt-1" style={{ color: step.color === '#09DFAB' ? '#09DFAB' : '#8BA0B4' }}>
                       {step.status}
                     </p>
                   </div>
                </div>
                <div className="hidden lg:flex items-center gap-3 text-base text-[#4A6580]">
                   <div className="w-12 h-px bg-[#4A6580]" />
                   Evolução
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
