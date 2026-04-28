import { motion } from 'framer-motion'
import { TrendingDown, TableProperties, BarChart3 } from 'lucide-react'

export default function Slide6bFaturamento() {
  const data = [
    { label: 'GRC - 1', previsto: '125.890.123', realizado26: '18.931.057', realizado25: '84.855.155', var: '-85%', resultado: '-106.959.066', media: '48%', meta: '125.890.123,00' },
    { label: 'GRC - 2', previsto: '103.215.116', realizado26: '16.222.717', realizado25: '76.012.596', var: '-84%', resultado: '-86.992.399', media: '36%', meta: '103.215.116,00' },
    { label: 'GRC - 3', previsto: '96.334.903', realizado26: '15.374.415', realizado25: '71.369.857', var: '-84%', resultado: '-80.960.488', media: '35%', meta: '96.334.903,00' },
    { label: 'GRC - 4', previsto: '59.512.074', realizado26: '9.716.803', realizado25: '39.428.826', var: '-84%', resultado: '-49.795.271', media: '51%', meta: '59.512.073,54' },
    { label: 'KAM - 1', previsto: '182.795.395', realizado26: '19.500.453', realizado25: '102.040.866', var: '-89%', resultado: '-163.294.942', media: '79%', meta: '182.795.395,00' },
    { label: 'KAM - 2', previsto: '153.689.749', realizado26: '34.731.947', realizado25: '128.072.174', var: '-77%', resultado: '-118.957.802', media: '20%', meta: '153.689.749,13' },
    { label: 'KAM - 3', previsto: '73.472.771', realizado26: '10.456.123', realizado25: '38.631.305', var: '-86%', resultado: '-63.016.648', media: '90%', meta: '73.472.771,00' },
    { label: 'KAM - 4', previsto: '94.040.696', realizado26: '24.636.662', realizado25: '81.393.123', var: '-74%', resultado: '-69.404.034', media: '16%', meta: '94.040.696,00' },
    { label: 'GRC - CC', previsto: '48.880.270', realizado26: '2.009.677', realizado25: '7.047.666', var: '-96%', resultado: '-46.870.593', media: '594%', meta: '48.880.270,00' },
    { label: 'Tríade Digital', previsto: '130.000.001', realizado26: '-', realizado25: '-', var: '-100%', resultado: '-130.000.001', media: '0%', meta: '130.000.001,33' },
  ]

  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden font-sans">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div className="w-[24%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E3A52] shrink-0" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2">
                <div className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
                SLIDE 06
                </span>
            </motion.div>
            <div>
                <motion.h2 className="text-4xl font-bold leading-tight mb-6" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
                    Faturamentos <br/> <span className="text-[#09DFAB]">Snapshot</span>
                </motion.h2>
                <div className="space-y-6">
                    <div className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                            <TrendingDown className="w-4 h-4" /> Desvio 2026
                        </div>
                        <div className="text-5xl font-bold text-white tracking-tighter">-76%</div>
                    </div>
                    <div className="p-5 rounded-2xl border border-[#1E3A52] bg-[#1E3A52]/30 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[#09DFAB] font-bold text-sm uppercase tracking-wider">
                            <BarChart3 className="w-4 h-4" /> Histórico 2025
                        </div>
                        <div className="text-3xl font-bold text-white tracking-tighter">R$ 628,8 Mi</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO (EXPANDIDO) ── */}
      <div className="flex-1 h-full relative px-10 py-10 flex flex-col gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
        
        <div className="relative z-10 flex justify-between items-end">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <TableProperties className="text-[#09DFAB] w-6 h-6" /> 
                Performance por Gerência
            </h3>
            <div className="flex gap-10 bg-[#0A1120] border border-[#1E3A52] px-8 py-3 rounded-2xl shadow-xl">
                 <div className="text-right border-r border-[#1E3A52] pr-10">
                    <p className="text-[10px] uppercase text-[#4A6580] font-mono tracking-widest mb-1 italic">Realizado Total 2026</p>
                    <p className="text-2xl font-bold text-[#09DFAB] font-mono">151.6 Mi</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] uppercase text-[#4A6580] font-mono tracking-widest mb-1 italic">Meta Global 2026</p>
                    <p className="text-2xl font-bold text-white font-mono">1.06 Bi</p>
                 </div>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative z-10 bg-[#0A1120]/60 border border-[#1E3A52] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col"
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-[#1E3A52] bg-[#1E3A52]/40 text-xs font-mono font-bold tracking-wider text-[#4A6580] uppercase items-center">
            <div className="col-span-3">Unidade / Gerência</div>
            <div className="col-span-2 text-right">Previsto 2026</div>
            <div className="col-span-2 text-right">Realizado 2026</div>
            <div className="col-span-1 text-center">Var %</div>
            <div className="col-span-2 text-right">Histórico 2025</div>
            <div className="col-span-2 text-right text-[#09DFAB]">Meta Anual</div>
          </div>

          {/* Body - Flex-1 with justify-between to fill vertical space */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
             <div className="divide-y divide-[#1E3A52]/20 h-full flex flex-col">
                {data.map((row, idx) => (
                <div key={idx} className="flex-1 grid grid-cols-12 gap-4 px-8 items-center hover:bg-[#1E3A52]/20 transition-all group">
                    <div className="col-span-3 text-lg font-bold text-white group-hover:text-[#09DFAB] transition-colors uppercase tracking-tight">{row.label}</div>
                    <div className="col-span-2 text-right text-base text-[#8BA0B4] font-mono">R$ {row.previsto}</div>
                    <div className="col-span-2 text-right text-base font-bold text-[#09DFAB] font-mono">R$ {row.realizado26}</div>
                    <div className="col-span-1 text-center text-sm font-black text-red-500 bg-red-500/5 py-1 rounded-lg">{row.var}</div>
                    <div className="col-span-2 text-right text-base text-[#4A6580] font-mono">R$ {row.realizado25}</div>
                    <div className="col-span-2 text-right text-sm text-white/50 font-mono italic">R$ {row.meta}</div>
                </div>
                ))}
             </div>
          </div>

          {/* Total Footer (Bottom Docked) */}
          <div className="bg-[#09DFAB]/10 border-t border-[#09DFAB]/30 px-8 py-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3 font-black text-[#09DFAB] text-lg uppercase tracking-[0.2em]">TOTAIS</div>
            <div className="col-span-2 text-right font-mono text-xl font-bold text-white/90">1.067.831.098</div>
            <div className="col-span-2 text-right font-mono text-2xl font-bold text-[#09DFAB] drop-shadow-[0_0_15px_rgba(9,223,171,0.3)]">151.579.853</div>
            <div className="col-span-3 text-right font-mono text-xl font-bold text-[#4A6580]">628.851.568</div>
            <div className="col-span-2 text-right font-black text-red-500 text-3xl tracking-tighter">
                -76%
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
