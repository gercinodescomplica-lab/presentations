import { motion } from 'framer-motion'
import { Search, Globe } from 'lucide-react'

export default function Slide03LicitMonitor() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      
      {/* ── PAINEL ESQUERDO (TÍTULOS + EXPLICAÇÃO) ── */}
      <div 
        className="w-[42%] h-full flex flex-col p-12 relative border-r border-[#1E3A52] justify-center"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-center">
          
          {/* HEADER SECTION */}
          <div className="mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
                SLIDE 03
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl font-bold leading-tight mb-4" 
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              Automação com <br/> <span className="text-[#09DFAB]">LicitMonitor</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[#8BA0B4] text-xl leading-relaxed mt-4"
            >
              Procuramos oportunidades de forma automática e inteligente em diversas frentes integradas explorando editais em grande escala.
            </motion.p>
          </div>

          <div className="h-px w-[80%] bg-[#1E3A52]/50 my-2 mb-8" />

          {/* EXPLANATION ITEMS */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="flex gap-5"
            >
              <div className="p-3 rounded-xl bg-[#09DFAB]/10 border border-[#09DFAB]/30 text-[#09DFAB] h-14 w-14 flex items-center justify-center shrink-0 shadow-lg">
                <Search className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#FFFFFF]">O que é o sistema?</h3>
                <p className="text-lg text-[#8BA0B4] leading-relaxed">
                  Ele ajuda a <strong>encontrar, analisar e acompanhar</strong> licitações automaticamente. Em vez da busca manual site a site, ele consolida todos os dados por você.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-5"
            >
              <div className="p-3 rounded-xl border border-[#04767F]/40 bg-[#04767F]/20 text-[#06B8B8] h-14 w-14 flex items-center justify-center shrink-0 shadow-lg">
                <Globe className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#FFFFFF]">Fontes Oficiais</h3>
                <p className="text-lg text-[#8BA0B4] leading-relaxed">
                  Conexão direta em tempo real com o <strong>PNCP</strong> (Portal Nacional de Contratações Públicas) e diários oficiais, captando editais direto na origem.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── PAINEL DIREITO (VÍDEO EM DESTAQUE) ── */}
      <div className="flex-1 h-full relative p-12 flex flex-col justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full flex items-center justify-center relative z-10"
        >
          <video 
            src="/videos/licitmonitor.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-contain rounded-2xl border-2 border-[#1E3A52] shadow-[0_10px_60px_rgba(0,0,0,0.6)] bg-black"
          />
        </motion.div>

      </div>
    </div>
  )
}
