import { motion } from 'framer-motion'
import { Target, TrendingDown, Scale } from 'lucide-react'

type Row = {
  gerencia: string
  realizado: number
  prev1Bi: number
  prev750: number
  var1Bi: string
  var750: string
}

const rows: Row[] = [
  { gerencia: 'GRC - 1',        realizado:  47.08, prev1Bi: 125.89, prev750:  88.00, var1Bi: '-63%', var750: '-46%' },
  { gerencia: 'GRC - 2',        realizado:  41.88, prev1Bi: 103.22, prev750:  72.35, var1Bi: '-59%', var750: '-42%' },
  { gerencia: 'GRC - 3',        realizado:  33.73, prev1Bi:  96.33, prev750:  67.70, var1Bi: '-65%', var750: '-50%' },
  { gerencia: 'GRC - 4',        realizado:  23.87, prev1Bi:  59.51, prev750:  41.80, var1Bi: '-60%', var750: '-43%' },
  { gerencia: 'KAM - 1',        realizado:  46.99, prev1Bi: 182.80, prev750: 128.40, var1Bi: '-74%', var750: '-63%' },
  { gerencia: 'KAM - 2',        realizado:  83.09, prev1Bi: 153.69, prev750: 107.90, var1Bi: '-46%', var750: '-23%' },
  { gerencia: 'KAM - 3',        realizado:  25.87, prev1Bi:  73.47, prev750:  73.46, var1Bi: '-65%', var750: '-65%' },
  { gerencia: 'KAM - 4',        realizado:  56.93, prev1Bi:  94.04, prev750:  66.05, var1Bi: '-39%', var750: '-14%' },
  { gerencia: 'GRC - CC',       realizado:   4.69, prev1Bi:  48.88, prev750:  34.34, var1Bi: '-90%', var750: '-86%' },
  { gerencia: 'Novos Negócios (Tríade Digital)', realizado: 0, prev1Bi: 130.00, prev750: 70.00, var1Bi: '-100%', var750: '-100%' },
]

const fmt = (v: number) => v === 0 ? '—' : v.toFixed(1).replace('.', ',')

function varColor(v: string) {
  const n = parseInt(v)
  if (n >= -20) return '#22c55e'
  if (n >= -50) return '#F59E0B'
  return '#EF4444'
}

export default function Slide13CenarioMeta() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[24%] h-full flex flex-col justify-between p-8 relative border-r border-[#1E4870] shrink-0"
        style={{ backgroundColor: '#001F35' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[#4A6580] text-sm font-mono uppercase tracking-widest font-bold"
          >
            Calibragem da Meta
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Cenário de <br />
            <span className="text-[#FF671D]">Meta</span>
          </motion.h2>

          <p className="text-[#8FA8BD] text-base leading-relaxed">
            Mesma execução — R$ 364,1 Mi realizados até Julho — lida sob dois
            cenários de meta. O gap muda; o resultado operacional não.
          </p>

          <div className="p-4 rounded-2xl border border-[#FF671D]/30 bg-[#FF671D]/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#FF671D] font-bold text-sm uppercase tracking-wider">
              <Scale className="w-5 h-5" /> Leitura
            </div>
            <div className="text-[#8FA8BD] text-sm leading-snug">
              Com meta calibrada em R$ 750 Mi (+19% sobre 2025), o gap cai de
              -42% para -16,8%, e KAM-4 fica a apenas -14% da meta.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-6 py-5 flex flex-col gap-3">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        {/* Comparativo Total Geral */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-500/10 to-transparent p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-red-300 font-mono text-sm uppercase tracking-widest font-bold">Cenário Atual · Meta R$ 1 Bi</span>
              <Target className="w-5 h-5 text-red-400" />
            </div>
            <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-3">
              <div className="min-w-0">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Previsto</div>
                <div className="text-2xl font-bold text-white font-mono whitespace-nowrap">R$ 1.067,8 Mi</div>
              </div>
              <div className="min-w-0">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Realizado</div>
                <div className="text-2xl font-bold text-[#FF671D] font-mono whitespace-nowrap">R$ 364,1 Mi</div>
              </div>
              <div className="text-right">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Gap</div>
                <div className="text-3xl font-black text-red-400 font-mono whitespace-nowrap">-42%</div>
              </div>
            </div>
            <div className="text-[#8FA8BD] text-sm leading-snug">
              Meta = +59% sobre 2025 · maior salto planejado da série histórica.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[#22c55e]/40 bg-gradient-to-br from-[#22c55e]/10 to-transparent p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#22c55e] font-mono text-sm uppercase tracking-widest font-bold">Cenário Ajustado · Meta R$ 750 Mi</span>
              <Target className="w-5 h-5 text-[#22c55e]" />
            </div>
            <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-3">
              <div className="min-w-0">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Previsto</div>
                <div className="text-2xl font-bold text-white font-mono whitespace-nowrap">R$ 750,0 Mi</div>
              </div>
              <div className="min-w-0">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Realizado</div>
                <div className="text-2xl font-bold text-[#FF671D] font-mono whitespace-nowrap">R$ 364,1 Mi</div>
              </div>
              <div className="text-right">
                <div className="text-[#8FA8BD] text-xs font-mono uppercase">Gap</div>
                <div className="text-3xl font-black text-[#F59E0B] font-mono whitespace-nowrap">-16,8%</div>
              </div>
            </div>
            <div className="text-[#8FA8BD] text-sm leading-snug">
              Meta = +19% sobre 2025 · alinhada à média histórica (+16% a.a.).
            </div>
          </motion.div>
        </div>

        {/* Tabela por gerência */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-h-0 relative z-10 rounded-2xl border border-[#1E4870] bg-[#001F35]/60 flex flex-col overflow-hidden"
        >
          <div className="shrink-0 grid grid-cols-12 gap-2 px-5 py-2 border-b border-[#1E4870] bg-[#1E4870]/40 text-xs font-mono font-bold tracking-widest text-[#4A6580] uppercase items-center">
            <div className="col-span-3">Gerência</div>
            <div className="col-span-2 text-right">Realizado</div>
            <div className="col-span-2 text-right">Prev. 1 Bi</div>
            <div className="col-span-1 text-center text-red-400">Var 1 Bi</div>
            <div className="col-span-2 text-right">Prev. 750</div>
            <div className="col-span-1 text-center text-[#22c55e]">Var 750</div>
            <div className="col-span-1" />
          </div>

          <div className="flex-1 flex flex-col divide-y divide-[#1E4870]/30 min-h-0">
            {rows.map((r) => (
              <div key={r.gerencia} className="flex-1 grid grid-cols-12 gap-2 px-5 items-center hover:bg-[#1E4870]/20 transition-colors">
                <div className="col-span-3 text-white font-bold text-base uppercase tracking-tight">{r.gerencia}</div>
                <div className="col-span-2 text-right text-[#FF671D] font-mono text-base font-bold">R$ {fmt(r.realizado)} Mi</div>
                <div className="col-span-2 text-right text-[#8FA8BD] font-mono text-sm">R$ {fmt(r.prev1Bi)} Mi</div>
                <div className="col-span-1 text-center font-mono text-base font-black" style={{ color: varColor(r.var1Bi) }}>{r.var1Bi}</div>
                <div className="col-span-2 text-right text-[#8FA8BD] font-mono text-sm">R$ {fmt(r.prev750)} Mi</div>
                <div className="col-span-1 text-center font-mono text-base font-black" style={{ color: varColor(r.var750) }}>{r.var750}</div>
                <div className="col-span-1" />
              </div>
            ))}
          </div>

          <div className="shrink-0 bg-[#FF671D]/10 border-t border-[#FF671D]/30 grid grid-cols-12 gap-2 px-5 py-3 items-center">
            <div className="col-span-3 font-black text-[#FF671D] text-base uppercase tracking-[0.2em]">Total Geral</div>
            <div className="col-span-2 text-right font-mono text-lg font-bold text-[#FF671D]">R$ 364,1 Mi</div>
            <div className="col-span-2 text-right font-mono text-sm text-white/80">R$ 1.067,8 Mi</div>
            <div className="col-span-1 text-center font-mono text-base font-black text-red-400">-42%</div>
            <div className="col-span-2 text-right font-mono text-sm text-white/80">R$ 750,0 Mi</div>
            <div className="col-span-1 text-center font-mono text-base font-black text-[#F59E0B]">-16,8%</div>
            <div className="col-span-1" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="relative z-10 flex items-center gap-2 text-sm font-mono text-[#4A6580]"
        >
          <TrendingDown className="w-4 h-4" />
          Var % = (Realizado - Previsto) / Previsto · valores até Julho/2026
        </motion.div>
      </div>
    </div>
  )
}
