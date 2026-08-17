import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, Wallet, FileCheck2, Target } from 'lucide-react'

export default function Slide7FaturamentoSnapshot() {
  const supportCards = [
    {
      icon: TrendingUp,
      label: 'Novas Receitas 2026',
      value: 'R$ 129 Mi',
      hint: 'vs. R$ 100 Mi no ciclo anterior',
      color: '#22c55e',
    },
    {
      icon: FileCheck2,
      label: 'Contratos Vigentes',
      value: 'R$ 1,071 Bi',
      hint: '215 Mi (2023) · 105 Mi (2025) · 4,7 Mi (Acordos)',
      color: '#A8D4F0',
    },
    {
      icon: Target,
      label: 'Meta Global 2026',
      value: 'R$ 1,00 Bi',
      hint: '+59% sobre 2025 (R$ 630 Mi)',
      color: '#FF671D',
    },
  ]

  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden font-sans">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[26%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E4870] shrink-0"
        style={{ backgroundColor: '#001F35' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[#4A6580] text-xs font-mono uppercase tracking-widest"
          >
            Snapshot · Acumulado Jan – Jul / 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Faturamentos <br />
            <span className="text-[#FF671D]">Snapshot</span>
          </motion.h2>

          <div className="p-5 rounded-2xl border border-red-500/30 bg-red-500/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" /> Desvio vs. Meta
            </div>
            <div className="text-5xl font-bold text-white tracking-tighter">-16,5%</div>
            <div className="text-[#8FA8BD] font-mono text-sm">- R$ 72,1 Mi</div>
          </div>

          <div className="p-4 rounded-2xl border border-[#1E4870] bg-[#1E4870]/30 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#FF671D] font-bold text-xs uppercase tracking-wider">
              <Wallet className="w-4 h-4" /> Ritmo vs. 2025
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">≈ Flat</div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              R$ 364 Mi realizados equivalem ao pró-rata de 2025 (R$ 630 Mi/ano).
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-10 py-10 flex flex-col gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        {/* Bloco principal — Previsto vs Realizado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-3xl border border-[#FF671D]/30 bg-[#001F35]/70 p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[#4A6580] font-mono text-[11px] uppercase tracking-widest">Performance Consolidada</p>
              <h3 className="text-2xl font-bold text-white">Previsto × Realizado — até Julho / 2026</h3>
            </div>
            <div className="px-4 py-2 rounded-xl border border-red-500/40 bg-red-500/10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-red-300">Gap</p>
              <p className="text-xl font-black text-red-400 font-mono">- R$ 72,1 Mi</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Previsto */}
            <div className="rounded-2xl border border-[#1E4870] bg-[#001F35] p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[#4A6580] font-mono text-xs uppercase tracking-widest">Previsto</span>
                <Target className="w-4 h-4 text-[#8FA8BD]" />
              </div>
              <div className="text-5xl font-bold text-white font-mono tracking-tighter">
                R$ 436,2<span className="text-2xl text-[#8FA8BD]"> Mi</span>
              </div>
              <div className="text-[#4A6580] font-mono text-xs">R$ 436.229.152,16</div>
              <div className="w-full h-2 rounded-full bg-[#1E4870] overflow-hidden mt-2">
                <div className="h-full rounded-full bg-[#8FA8BD]" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Realizado */}
            <div className="rounded-2xl border border-[#FF671D]/40 bg-gradient-to-br from-[#FF671D]/10 to-transparent p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[#FF671D] font-mono text-xs uppercase tracking-widest">Realizado</span>
                <TrendingDown className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-5xl font-bold text-[#FF671D] font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(255,103,29,0.4)]">
                R$ 364,1<span className="text-2xl text-[#FF671D]/70"> Mi</span>
              </div>
              <div className="text-[#4A6580] font-mono text-xs">R$ 364.117.044,35</div>
              <div className="w-full h-2 rounded-full bg-[#1E4870] overflow-hidden mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '83.5%' }}
                  transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-[#FF671D]"
                />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8FA8BD] mt-1">
                83,5% da meta parcial · <span className="text-red-400">-16,5%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards de apoio */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          {supportCards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-[#1E4870] bg-[#001F35] p-5 flex flex-col gap-2"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg border"
                    style={{ background: `${c.color}15`, borderColor: `${c.color}40` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: c.color }} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A6580]">{c.label}</span>
                </div>
                <div className="text-3xl font-bold font-mono tracking-tighter" style={{ color: c.color }}>
                  {c.value}
                </div>
                <div className="text-[#8FA8BD] text-xs leading-snug">{c.hint}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
