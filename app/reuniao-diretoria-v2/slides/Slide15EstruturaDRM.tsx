import { motion } from 'framer-motion'
import { Users, DollarSign, TrendingDown } from 'lucide-react'

type Snapshot = {
  when: string
  total: number
  despesa: number
  despesaLabel: string
  confianca: number
  confiancaVal: number
  carreira: number
  carreiraVal: number
  estagio: number
  estagioVal: number
  isCurrent?: boolean
}

const snapshots: Snapshot[] = [
  {
    when: 'Janeiro / 2025',
    total: 65,
    despesa: 1_726_569.57,
    despesaLabel: 'R$ 1,73 Mi',
    confianca: 14,  confiancaVal: 422_377.73,
    carreira: 44,   carreiraVal: 1_285_146.65,
    estagio: 6,     estagioVal: 19_045.19,
  },
  {
    when: 'Outubro / 2025',
    total: 53,
    despesa: 1_568_385.92,
    despesaLabel: 'R$ 1,57 Mi',
    confianca: 15,  confiancaVal: 474_931.93,
    carreira: 38,   carreiraVal: 1_069_729.79,
    estagio: 6,     estagioVal: 23_724.20,
  },
  {
    when: 'Julho / 2026',
    total: 59,
    despesa: 1_676_765.73,
    despesaLabel: 'R$ 1,68 Mi',
    confianca: 21,  confiancaVal: 636_423.75,
    carreira: 30,   carreiraVal: 1_014_711.23,
    estagio: 8,     estagioVal: 25_630.75,
    isCurrent: true,
  },
]

const MAX_TOTAL = Math.max(...snapshots.map(s => s.total))

function SnapshotCard({ s, index }: { s: Snapshot; index: number }) {
  const accent = s.isCurrent ? '#FF671D' : '#8FA8BD'
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border p-5 flex flex-col gap-4 h-full"
      style={{
        borderColor: s.isCurrent ? `${accent}55` : '#1E4870',
        background: s.isCurrent
          ? `linear-gradient(155deg, ${accent}12 0%, rgba(0,31,53,0.9) 100%)`
          : '#001F35',
        boxShadow: s.isCurrent
          ? `0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px ${accent}20`
          : '0 4px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accent }}>
          {s.isCurrent ? '● Atual' : 'Referência'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A6580]">
          {s.when}
        </span>
      </div>

      {/* Total headcount */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-white tracking-tighter font-mono">{s.total}</span>
            <span className="text-[#8FA8BD] text-sm font-mono">colab.</span>
          </div>
          <div className="text-[#4A6580] text-[10px] font-mono uppercase tracking-widest mt-1">
            Total de Colaboradores
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold font-mono" style={{ color: accent }}>{s.despesaLabel}</div>
          <div className="text-[#4A6580] text-[10px] font-mono uppercase tracking-widest">
            Despesa Mensal
          </div>
        </div>
      </div>

      {/* Barra composição */}
      <div className="flex flex-col gap-1.5">
        <div className="flex w-full h-2.5 rounded-full overflow-hidden bg-[#1E4870]/40">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(s.confianca / s.total) * 100}%` }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            className="h-full bg-[#FF671D]"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(s.carreira / s.total) * 100}%` }}
            transition={{ delay: 0.55 + index * 0.1, duration: 0.6 }}
            className="h-full bg-[#A8D4F0]"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(s.estagio / s.total) * 100}%` }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            className="h-full bg-[#22c55e]"
          />
        </div>

        {/* Composição rows */}
        <div className="mt-2 flex flex-col gap-1.5">
          <CompRow color="#FF671D" label="Confiança" qtd={s.confianca} val={s.confiancaVal} />
          <CompRow color="#A8D4F0" label="Carreira" qtd={s.carreira} val={s.carreiraVal} />
          <CompRow color="#22c55e" label="Estágio" qtd={s.estagio} val={s.estagioVal} />
        </div>
      </div>
    </motion.div>
  )
}

function CompRow({ color, label, qtd, val }: { color: string; label: string; qtd: number; val: number }) {
  const formatMoney = (v: number) =>
    v >= 1_000_000
      ? `R$ ${(v / 1_000_000).toFixed(2).replace('.', ',')} Mi`
      : `R$ ${(v / 1_000).toFixed(1).replace('.', ',')} mil`
  return (
    <div className="flex items-center justify-between text-xs font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="text-[#8FA8BD]">{label}</span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-white font-bold">{qtd}</span>
        <span className="text-[#4A6580] text-[11px]">{formatMoney(val)}</span>
      </div>
    </div>
  )
}

export default function Slide15EstruturaDRM() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

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
            Execução · Evolução 18 Meses
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Estrutura <br />
            <span className="text-[#FF671D]">DRM</span>
          </motion.h2>

          <div className="p-4 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-xs uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" /> Headcount vs. Jan/25
            </div>
            <div className="text-3xl font-bold text-white tracking-tighter">-9%</div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              65 → 59 colaboradores, operando para meta +59% maior.
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#1E4870] bg-[#1E4870]/30 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#FF671D] font-bold text-xs uppercase tracking-wider">
              <Users className="w-4 h-4" /> Mudança de Mix
            </div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              <span className="text-white font-bold">+50% Confiança</span> (14→21),
              <span className="text-white font-bold"> -32% Carreira</span> (44→30),
              <span className="text-white font-bold"> +33% Estágio</span> (6→8).
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-[#1E4870] bg-[#1E4870]/30 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#8FA8BD] font-bold text-xs uppercase tracking-wider">
              <DollarSign className="w-4 h-4" /> Despesa vs. Jan/25
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">-2,9%</div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              R$ 1,73 Mi → R$ 1,68 Mi mensal · custo praticamente estável.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-8 py-8 flex flex-col gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        <div className="relative z-10 flex items-end justify-between">
          <h3 className="text-2xl font-bold text-white">Snapshot em três momentos</h3>
          <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1.5 text-[#FF671D]"><span className="w-2 h-2 rounded-full bg-[#FF671D]" /> Confiança</span>
            <span className="flex items-center gap-1.5 text-[#A8D4F0]"><span className="w-2 h-2 rounded-full bg-[#A8D4F0]" /> Carreira</span>
            <span className="flex items-center gap-1.5 text-[#22c55e]"><span className="w-2 h-2 rounded-full bg-[#22c55e]" /> Estágio</span>
          </div>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 relative z-10">
          {snapshots.map((s, i) => (
            <SnapshotCard key={s.when} s={s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.4 }}
          className="relative z-10 rounded-xl px-5 py-3 border border-[#1E4870] bg-[#001F35]/60 text-[13px] text-[#8FA8BD] leading-snug"
        >
          <span className="text-[#FF671D] font-bold">Leitura:</span>{' '}
          estrutura enxutada em Out/25 (-18% headcount) e reconstruída em
          Jul/26 com perfil mais sênior — Confiança sobe de 22% para 36% do
          time, enquanto Carreira cai de 68% para 51%. Despesa mensal ficou
          praticamente onde estava em Jan/25.
        </motion.div>
      </div>
    </div>
  )
}
