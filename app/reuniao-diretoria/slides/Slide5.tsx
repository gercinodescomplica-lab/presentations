import { motion } from 'framer-motion'
import { Database, LayoutDashboard, Smartphone, Combine } from 'lucide-react'

export default function Slide5() {
  const triad = [
    { title: 'Data Lake Paulistano', desc: 'Centralização e processamento (Dados).', icon: Database, color: '#035E65' },
    { title: 'Digital Twin', desc: 'Representação, simulação (Análise).', icon: LayoutDashboard, color: '#04767F' },
    { title: 'Smart 156 / Super App', desc: 'Interface unificada do cidadão (Ação).', icon: Smartphone, color: '#09DFAB' }
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
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <div className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
              SLIDE 05
            </span>
          </motion.div>

          <div>
            <motion.h2 className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
              Tríade <br/> <span className="text-[#09DFAB]">Digital</span>
            </motion.h2>
            <motion.p className="text-[#8BA0B4] text-lg leading-relaxed">
              O fluxo inteligente entre o dado bruto até a entrega de valor real na palma da mão do cidadão.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative p-20 flex flex-col justify-center items-center gap-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[220px] opacity-15 pointer-events-none rounded-full" />
        
        <div className="flex w-full items-center justify-between relative z-10 px-10">
           {triad.map((item, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.2) }}
                className="flex flex-col items-center flex-1"
             >
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border"
                  style={{ backgroundColor: item.color, borderColor: '#fff2' }}
                >
                   <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-center font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-center text-[#8BA0B4] text-sm max-w-[200px] leading-relaxed">
                  {item.desc}
                </p>
             </motion.div>
           ))}
        </div>

        {/* Coded connector */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-[80%] h-px bg-[#1E3A52] relative flex items-center justify-center z-10"
        >
           <div className="px-6 py-2 bg-[#0C2D35] border border-[#04767F] rounded-full flex items-center gap-3">
             <Combine className="w-5 h-5 text-[#09DFAB]" />
             <span className="text-sm tracking-wider uppercase font-semibold text-[#09DFAB]">Conexão Unificada</span>
           </div>
        </motion.div>
      </div>
      
    </div>
  )
}
