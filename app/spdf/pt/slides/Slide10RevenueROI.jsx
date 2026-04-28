import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

export default function Slide10RevenueROI() {
  return (
    <SlideCardLight slideNum="10" label="PROJEÇÕES FINANCEIRAS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#00C9A7">RESULTADOS FINANCEIROS</TagLabelLight>
          <GradientTitleLight>Receita & ROI</GradientTitleLight>
          <SubtitleBarLight>Estratégia agressiva de crescimento em 3 anos</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            O projeto requer investimento inicial em P&D e infraestrutura, mas a forte demanda de mercado impulsionada pelos requisitos da LGPD leva o projeto à lucratividade relativamente cedo em seu ciclo de vida.
          </p>

          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col gap-1"
          >
             <span className="text-slate-400 font-bold text-xs font-mono tracking-widest uppercase">Meta de Break-even</span>
             <span className="font-heading text-4xl font-bold text-blue-600">6 Meses</span>
             <span className="text-slate-500 font-semibold text-sm">após o lançamento comercial</span>
          </motion.div>
        </LeftPanelLight>

        <RightPanelLight className="justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-lg p-8 rounded-2xl flex flex-col gap-6 bg-white"
            style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
          >
            {[
              { year: 'Ano 1', multiplier: 1, clients: 'XX Clientes', color: '#94a3b8' },
              { year: 'Ano 2', multiplier: 2.2, clients: 'XX Clientes', color: '#3b82f6' },
              { year: 'Ano 3', multiplier: 4.5, clients: 'XX Clientes', color: '#2563eb' },
            ].map((bar, i) => (
              <div key={bar.year} className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono font-bold uppercase tracking-widest">
                  <span className="text-slate-700">{bar.year}</span>
                  <span className="text-slate-400">{bar.clients}</span>
                </div>
                <div className="w-full h-4 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.multiplier * 20}%` }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${bar.color}80, ${bar.color})` }}
                  />
                </div>
                <div className="text-right text-xs font-bold" style={{ color: bar.color }}>
                  R$ XXX
                </div>
              </div>
            ))}
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
