import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

export default function Slide07Architecture() {
  return (
    <SlideCardLight slideNum="07" label="VISÃO TÉCNICA">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2563eb">INFRAESTRUTURA</TagLabelLight>
          <GradientTitleLight>Arquitetura do Sistema</GradientTitleLight>
          <SubtitleBarLight>Construída para escala e disponibilidade absoluta</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            O SPDF é projetado para integrar-se perfeitamente à sua infraestrutura legada ou implantar em blocos dedicados de nuvem privada, garantindo alta concorrência sem comprometer a velocidade.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="gap-8 flex-col justify-center items-center">
          <div className="flex gap-12 w-full justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl mb-1 shadow-sm bg-white"
                style={{ border: `1px solid rgba(37,99,235,0.2)` }}>
                🏢
              </div>
              <span className="text-blue-600 font-heading font-bold">Bare-metal</span>
              <span className="text-slate-400 text-xs text-center w-32">Instalação direta no data center</span>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="flex items-center text-slate-300 font-bold font-mono tracking-widest text-sm uppercase"
            >
               ← OU →
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl mb-1 shadow-sm bg-white"
                style={{ border: `1px solid rgba(234,179,8,0.3)` }}>
                ☁️
              </div>
              <span className="text-yellow-600 font-heading font-bold">Nuvem Privada</span>
              <span className="text-slate-400 text-xs text-center w-32">Alta disponibilidade isolada</span>
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="w-[85%] mt-8 flex justify-around p-6 rounded-2xl bg-white"
              style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#2563eb' }}>99.9%</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">Meta de Uptime</span>
             </div>

             <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1), transparent)' }} />

             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#1e3a8a' }}>1.000+</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">Usuários Simultâneos</span>
             </div>

             <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1), transparent)' }} />

             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#eab308' }}>50MB</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">Em &lt; 30 Segundos</span>
             </div>
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
