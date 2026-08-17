import { motion } from 'framer-motion'
import { CalendarRange, TrendingUp } from 'lucide-react'

type Period = {
  key: string
  label: string
  meses: string
  previsto: number
  realizado: number
  gapAbs: number
  gapPct: string
  color: string
  progress: number
}

const periods: Period[] = [
  { key: 'q1', label: '1º Trimestre', meses: 'Jan · Fev · Mar', previsto: 187.5, realizado: 151.6, gapAbs: -35.9, gapPct: '-19,1%', color: '#EF4444', progress: 80.9 },
  { key: 'q2', label: '2º Trimestre', meses: 'Abr · Mai · Jun', previsto: 187.5, realizado: 155.3, gapAbs: -32.2, gapPct: '-17,2%', color: '#F59E0B', progress: 82.8 },
  { key: 'jul', label: 'Julho', meses: 'Julho isolado',        previsto:  62.5, realizado:  57.3, gapAbs:  -5.2, gapPct:  '-8,3%', color: '#FF671D', progress: 91.7 },
]

const TOTAL_PREV = 437.5
const TOTAL_REAL = 364.1

export default function Slide18Trimestres() {
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
            Q1 → Q2 → Julho
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Evolução <br />
            <span className="text-[#FF671D]">Trimestral</span>
          </motion.h2>

          <p className="text-[#8FA8BD] text-base leading-relaxed">
            A execução vem se aproximando da meta a cada bloco: gap de
            <span className="text-white font-bold"> -19% no 1º Tri</span>,
            <span className="text-white font-bold"> -17% no 2º Tri</span> e
            <span className="text-white font-bold"> -8% em Julho</span>.
          </p>

          <div className="p-4 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-sm uppercase tracking-wider">
              <TrendingUp className="w-5 h-5" /> Direção
            </div>
            <div className="text-3xl font-bold text-white tracking-tighter">Convergência</div>
            <div className="text-[#8FA8BD] text-sm leading-snug">
              Cada bloco reduz o gap absoluto em relação ao anterior.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-6 py-5 flex flex-col gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        <div className="relative z-10 flex items-end justify-between">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <CalendarRange className="text-[#FF671D] w-6 h-6" />
            Previsto × Realizado por bloco
          </h3>
          <span className="text-sm font-mono uppercase tracking-widest text-[#4A6580]">
            Meta anual R$ 750 Mi · em R$ milhões
          </span>
        </div>

        {/* Três blocos */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-3 relative z-10">
          {periods.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border p-4 flex flex-col gap-3 h-full"
              style={{
                borderColor: `${p.color}55`,
                background: `linear-gradient(155deg, ${p.color}10 0%, rgba(0,31,53,0.9) 100%)`,
                boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 0 1px ${p.color}15`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-white leading-tight">{p.label}</div>
                  <div className="text-sm font-mono uppercase tracking-widest text-[#4A6580] mt-1">{p.meses}</div>
                </div>
                <div
                  className="px-3 py-2 rounded-lg font-mono text-2xl font-black"
                  style={{
                    background: `${p.color}18`,
                    border: `1px solid ${p.color}55`,
                    color: p.color,
                  }}
                >
                  {p.gapPct}
                </div>
              </div>

              {/* Previsto × Realizado */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-[#1E4870] bg-[#001F35] p-3 flex flex-col gap-0.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#4A6580] font-bold">Previsto</span>
                  <span className="text-3xl font-bold text-white font-mono tracking-tighter leading-none">
                    R$ {p.previsto.toFixed(1).replace('.', ',')}
                  </span>
                  <span className="text-[#4A6580] font-mono text-xs">Mi</span>
                </div>
                <div
                  className="rounded-xl p-3 flex flex-col gap-0.5"
                  style={{
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}40`,
                  }}
                >
                  <span className="text-xs font-mono uppercase tracking-widest font-bold" style={{ color: p.color }}>
                    Realizado
                  </span>
                  <span className="text-3xl font-bold font-mono tracking-tighter leading-none" style={{ color: p.color }}>
                    R$ {p.realizado.toFixed(1).replace('.', ',')}
                  </span>
                  <span className="text-[#4A6580] font-mono text-xs">Mi</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col gap-1.5 mt-auto">
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-[#8FA8BD] font-bold">
                  <span>Execução</span>
                  <span className="font-bold text-sm" style={{ color: p.color }}>{p.progress.toFixed(1)}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#1E4870]/60 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.progress}%` }}
                    transition={{ delay: 0.55 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ background: p.color, boxShadow: `0 0 10px ${p.color}66` }}
                  />
                </div>
                <div className="text-[#8FA8BD] text-sm font-mono">
                  Gap: <span className="text-red-300 font-bold">R$ {p.gapAbs.toFixed(1).replace('.', ',')} Mi</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé — acumulado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="relative z-10 rounded-2xl border border-[#FF671D]/30 bg-gradient-to-r from-[#FF671D]/10 to-transparent px-5 py-3 grid grid-cols-4 gap-3 items-center"
        >
          <div>
            <div className="text-sm font-mono uppercase tracking-widest text-[#FF671D] font-bold">Acumulado Jan – Jul</div>
            <div className="text-lg font-bold text-white">Consolidado 2026</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#4A6580] font-bold">Previsto</div>
            <div className="text-2xl font-bold text-white font-mono">R$ {TOTAL_PREV.toFixed(1).replace('.', ',')} Mi</div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF671D] font-bold">Realizado</div>
            <div className="text-2xl font-bold text-[#FF671D] font-mono">R$ {TOTAL_REAL.toFixed(1).replace('.', ',')} Mi</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-[#4A6580] font-bold">Gap acumulado</div>
            <div className="text-3xl font-black text-[#F59E0B] font-mono">-16,8%</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
