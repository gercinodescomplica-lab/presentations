import { motion } from 'framer-motion'
import { FileCheck2, TrendingUp, Handshake, ArrowUpRight } from 'lucide-react'

type Milestone = {
  ano: string
  valor: number
  label: string
  color: string
  isCurrent?: boolean
}

const milestones: Milestone[] = [
  { ano: '2023', valor: 215, label: 'R$ 215 Mi', color: '#8FA8BD' },
  { ano: '2025', valor: 105, label: 'R$ 105 Mi', color: '#A8D4F0' },
  { ano: '2026', valor: 129, label: 'R$ 129 Mi', color: '#FF671D', isCurrent: true },
]

const MAX_VAL = Math.max(...milestones.map(m => m.valor))

export default function Slide14ContratosVigentes() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[26%] h-full flex flex-col justify-between p-8 relative border-r border-[#1E4870] shrink-0"
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
            Referência · Jul / 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Contratos <br />
            <span className="text-[#FF671D]">Vigentes</span>
          </motion.h2>

          <p className="text-[#8FA8BD] text-base leading-relaxed">
            Duas visões da carteira: os <span className="text-white font-bold">contratos
            vigentes</span> hoje e a <span className="text-white font-bold">evolução
            das novas receitas</span> ano a ano.
          </p>

          <div className="p-4 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-sm uppercase tracking-wider">
              <TrendingUp className="w-5 h-5" /> Sinal 2026
            </div>
            <div className="text-3xl font-bold text-white tracking-tighter">+23%</div>
            <div className="text-[#8FA8BD] text-sm leading-snug">
              Novas Receitas passam de 105 Mi (2025) para 129 Mi em 2026 — retomada
              após o pico de 215 Mi em 2023.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-6 py-5 flex flex-col gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        {/* Bloco 1 — STOCK vigente */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-2xl border border-[#FF671D]/40 bg-gradient-to-br from-[#FF671D]/10 to-transparent p-5 flex items-center gap-6"
        >
          <div className="p-4 rounded-xl border border-[#FF671D]/40 shrink-0"
            style={{ background: 'rgba(255,103,29,0.15)' }}>
            <FileCheck2 className="w-10 h-10 text-[#FF671D]" />
          </div>
          <div className="flex-1 flex items-end justify-between gap-6">
            <div>
              <div className="text-[#FF671D] font-mono text-sm uppercase tracking-widest font-bold">Contratos Vigentes</div>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-7xl font-bold text-white font-mono tracking-tighter leading-none">100</span>
                <span className="text-[#8FA8BD] text-2xl font-mono">contratos ativos</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#8FA8BD] font-mono text-sm uppercase tracking-widest">Valor total</div>
              <div className="text-5xl font-bold text-[#FF671D] font-mono tracking-tighter">R$ 1,071 Bi</div>
              <div className="text-[#4A6580] font-mono text-sm mt-1">R$ 1.071.061.401,90</div>
            </div>
          </div>
        </motion.div>

        {/* Bloco 2 — Evolução Novas Receitas */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex-1 min-h-0 rounded-2xl border border-[#1E4870] bg-[#001F35]/60 p-5 flex flex-col gap-4"
        >
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="text-[#FF671D] w-6 h-6" />
              Novas Receitas · Evolução
            </h3>
            <span className="text-sm font-mono uppercase tracking-widest text-[#4A6580]">
              Origem por ano
            </span>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 items-end">
            {milestones.map((m, i) => {
              const heightPct = (m.valor / MAX_VAL) * 100
              return (
                <div key={m.ano} className="h-full flex flex-col items-center justify-end gap-3">
                  {/* Valor em cima */}
                  <div className={`flex flex-col items-center ${m.isCurrent ? 'text-[#FF671D]' : 'text-white'}`}>
                    <span className="text-3xl font-bold font-mono tracking-tighter">{m.label}</span>
                    {m.isCurrent && (
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FF671D]/80 mt-0.5">
                        até Julho
                      </span>
                    )}
                  </div>

                  {/* Barra */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[140px] rounded-t-lg"
                    style={{
                      background: m.isCurrent
                        ? 'linear-gradient(180deg, #FF671D 0%, rgba(255,103,29,0.4) 100%)'
                        : `linear-gradient(180deg, ${m.color} 0%, ${m.color}44 100%)`,
                      boxShadow: m.isCurrent ? '0 0 20px rgba(255,103,29,0.4)' : 'none',
                    }}
                  />

                  {/* Ano */}
                  <div className={`text-lg font-mono tracking-widest font-bold ${m.isCurrent ? 'text-[#FF671D]' : 'text-[#8FA8BD]'}`}>
                    {m.ano}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Rodapé — Acordos Operacionais + Leitura */}
        <div className="relative z-10 grid grid-cols-[auto_1fr] gap-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.4 }}
            className="rounded-xl px-4 py-3 border border-[#A8D4F0]/30 bg-[#A8D4F0]/5 flex items-center gap-3"
          >
            <Handshake className="w-6 h-6 text-[#A8D4F0]" />
            <div>
              <div className="text-[#A8D4F0] font-mono text-xs uppercase tracking-widest font-bold">Acordos Operacionais</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white font-mono">R$ 4,7 Mi</span>
                <span className="text-[#8FA8BD] text-sm">complementares em 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="rounded-xl px-4 py-3 border border-[#1E4870] bg-[#001F35]/60 flex items-center gap-3"
          >
            <ArrowUpRight className="w-5 h-5 text-[#FF671D] shrink-0" />
            <p className="text-sm text-[#8FA8BD] leading-snug">
              <span className="text-[#FF671D] font-bold">Leitura:</span> a carteira
              de <span className="text-white font-bold">R$ 1,07 Bi</span> em 100 contratos
              sustenta o run-rate atual. As <span className="text-white font-bold">Novas
              Receitas 2026 (129 Mi)</span> apontam recuperação após o vale de 2025.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
