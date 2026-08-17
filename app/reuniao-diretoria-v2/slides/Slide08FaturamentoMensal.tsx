import { motion } from 'framer-motion'
import { TrendingUp, Flag } from 'lucide-react'

type YearBar = {
  year: string
  value: number
  label: string
  growth?: string
  isMeta?: boolean
  isPartial?: boolean
  hint?: string
}

const META_2026 = 1000

const bars: YearBar[] = [
  { year: '2021', value: 342, label: 'R$ 342 Mi', growth: '+14%' },
  { year: '2022', value: 423, label: 'R$ 423 Mi', growth: '+23%' },
  { year: '2023', value: 447, label: 'R$ 447 Mi', growth: '+6%' },
  { year: '2024', value: 571, label: 'R$ 571 Mi', growth: '+28%' },
  { year: '2025', value: 630, label: 'R$ 630 Mi', growth: '+10%' },
  { year: '2026', value: 364, label: 'R$ 364 Mi', hint: 'Até Julho', isPartial: true },
  { year: 'Meta 2026', value: META_2026, label: 'R$ 1,00 Bi', growth: '+59%', isMeta: true },
]

const maxValue = Math.max(...bars.map((b) => b.value))

export default function Slide8EvolucaoHistorica() {
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
            Série Histórica · 2021 → 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Evolução <br />
            <span className="text-[#FF671D]">Faturamento</span>
          </motion.h2>

          <div className="p-5 rounded-2xl border border-[#FF671D]/30 bg-[#FF671D]/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#FF671D] font-bold text-xs uppercase tracking-wider">
              <Flag className="w-4 h-4" /> Meta 2026
            </div>
            <div className="text-4xl font-bold text-white tracking-tighter">R$ 1,00 Bi</div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              +59% sobre 2025 — o maior salto planejado da série.
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#1E4870] bg-[#1E4870]/30 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#8FA8BD] font-bold text-xs uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" /> Crescimento médio 5 anos
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">+16% a.a.</div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              Se mantido esse ritmo, 2026 fecharia ≈ R$ 737 Mi.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO — Gráfico ── */}
      <div className="flex-1 h-full relative px-10 py-10 flex flex-col gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        <div className="relative z-10 flex justify-between items-end">
          <h3 className="text-2xl font-bold text-white">Faturamento anual · Realizado vs. Meta</h3>
          <div className="flex gap-4 text-[11px] font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2 text-[#8FA8BD]">
              <span className="w-3 h-3 rounded-sm bg-[#8FA8BD]" /> Realizado
            </div>
            <div className="flex items-center gap-2 text-[#FF671D]">
              <span className="w-3 h-3 rounded-sm bg-[#FF671D]" /> 2026 Parcial
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="w-3 h-3 rounded-sm border-2 border-dashed border-white" /> Meta
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 relative z-10 rounded-3xl border border-[#1E4870] bg-[#001F35]/60 p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col">
          <div className="flex-1 flex items-end justify-between gap-4 relative">
            {/* Grid lines */}
            {[0.25, 0.5, 0.75, 1].map((frac) => (
              <div
                key={frac}
                className="absolute left-0 right-0 border-t border-[#1E4870]/40 pointer-events-none"
                style={{ bottom: `${frac * 100}%` }}
              >
                <span className="absolute -top-2 -left-2 text-[9px] font-mono text-[#4A6580]">
                  {Math.round(frac * maxValue)}
                </span>
              </div>
            ))}

            {bars.map((b, i) => {
              const heightPct = (b.value / maxValue) * 100
              const isMeta = b.isMeta
              const isPartial = b.isPartial
              const barColor = isMeta ? 'transparent' : isPartial ? '#FF671D' : '#8FA8BD'
              return (
                <div key={b.year} className="flex-1 flex flex-col items-center justify-end gap-2 relative h-full">
                  {/* Growth pill — só para barras realizadas (não isMeta) */}
                  {b.growth && !isMeta && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="text-[10px] font-mono font-bold text-[#22c55e] absolute -top-1"
                    >
                      {b.growth}
                    </motion.div>
                  )}

                  {/* Value label */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className={`flex flex-col items-center z-10 ${
                      isMeta ? 'text-white' : isPartial ? 'text-[#FF671D]' : 'text-white'
                    }`}
                    style={{ marginBottom: 4 }}
                  >
                    <span className="text-sm font-mono font-bold">{b.label}</span>
                    {isMeta && b.growth && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF671D]/90 mt-0.5">
                        {b.growth} vs 2025
                      </span>
                    )}
                    {isPartial && b.hint && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF671D]/80 mt-0.5">
                        {b.hint}
                      </span>
                    )}
                  </motion.div>

                  {/* Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[70px] rounded-t-lg relative"
                    style={{
                      background: isMeta
                        ? 'transparent'
                        : isPartial
                        ? 'linear-gradient(180deg, #FF671D 0%, rgba(255,103,29,0.4) 100%)'
                        : 'linear-gradient(180deg, #8FA8BD 0%, rgba(143,168,189,0.3) 100%)',
                      border: isMeta ? '2px dashed rgba(255,255,255,0.7)' : 'none',
                      boxShadow: isPartial
                        ? '0 0 20px rgba(255,103,29,0.35)'
                        : isMeta
                        ? '0 0 20px rgba(255,255,255,0.15)'
                        : 'none',
                    }}
                  />

                  {/* Year label */}
                  <div
                    className={`text-xs font-mono tracking-widest ${
                      isMeta ? 'text-[#FF671D] font-bold' : 'text-[#8FA8BD]'
                    }`}
                  >
                    {b.year}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rodapé — leitura */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="relative z-10 rounded-xl px-5 py-3 border border-[#1E4870] bg-[#001F35]/60 text-[13px] text-[#8FA8BD] leading-snug"
        >
          <span className="text-[#FF671D] font-bold">Leitura:</span>{' '}
          o ritmo de 2026 até Julho está compatível com 2025 (praticamente flat).
          O gap de -16,5% vs. a meta é consequência de um salto planejado de
          +59% — muito acima da média histórica de +16% ao ano.
        </motion.div>
      </div>
    </div>
  )
}
