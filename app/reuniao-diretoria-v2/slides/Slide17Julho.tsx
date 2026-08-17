import { motion } from 'framer-motion'
import { Calendar, TrendingUp, ArrowDown } from 'lucide-react'

export default function Slide17Julho() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[28%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E4870] shrink-0"
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
            Último mês fechado
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Julho <br />
            <span className="text-[#FF671D]">2026</span>
          </motion.h2>

          <div className="p-5 rounded-2xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#F59E0B] font-bold text-xs uppercase tracking-wider">
              <ArrowDown className="w-4 h-4" /> Gap do mês
            </div>
            <div className="text-5xl font-bold text-white tracking-tighter">-8,3%</div>
            <div className="text-[#8FA8BD] font-mono text-sm">- R$ 5,2 Mi</div>
          </div>

          <div className="p-4 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-xs uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" /> Sinal
            </div>
            <div className="text-[#8FA8BD] text-xs leading-snug">
              Mês mais próximo de bater a meta em 2026. Após -19% (Q1) e -17% (Q2),
              julho fecha a apenas <span className="text-white font-bold">-8,3%</span>.
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-10 py-10 flex flex-col gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        <div className="relative z-10 flex items-end justify-between">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Calendar className="text-[#FF671D] w-6 h-6" />
            Previsto × Realizado — Julho / 2026
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A6580]">
            Base: meta anual R$ 750 Mi (R$ 62,5 Mi/mês)
          </span>
        </div>

        {/* Bloco principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-3xl border border-[#FF671D]/30 bg-[#001F35]/70 p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex-1 flex flex-col justify-center gap-8"
        >
          {/* Comparativo grande */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
            {/* Previsto */}
            <div className="rounded-2xl border border-[#1E4870] bg-[#001F35] p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[#4A6580] font-mono text-xs uppercase tracking-widest">Previsto</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A6580]">Meta mensal</span>
              </div>
              <div className="text-6xl font-bold text-white font-mono tracking-tighter">
                R$ 62,5<span className="text-3xl text-[#8FA8BD]"> Mi</span>
              </div>
              <div className="text-[#4A6580] font-mono text-xs">R$ 62.500.000,00</div>
            </div>

            {/* Divisor visual */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#4A6580] font-mono text-xs uppercase tracking-widest">Diferença</div>
              <div className="text-3xl font-black text-[#F59E0B] font-mono">-8,3%</div>
              <div className="text-red-400 font-mono text-sm">- R$ 5,2 Mi</div>
            </div>

            {/* Realizado */}
            <div className="rounded-2xl border border-[#FF671D]/40 bg-gradient-to-br from-[#FF671D]/10 to-transparent p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[#FF671D] font-mono text-xs uppercase tracking-widest">Realizado</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF671D]">91,7% da meta</span>
              </div>
              <div className="text-6xl font-bold text-[#FF671D] font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(255,103,29,0.4)]">
                R$ 57,3<span className="text-3xl text-[#FF671D]/70"> Mi</span>
              </div>
              <div className="text-[#4A6580] font-mono text-xs">R$ 57.294.556,55</div>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8FA8BD]">
              <span>Execução do mês</span>
              <span className="text-[#FF671D] font-bold">91,7% da meta</span>
            </div>
            <div className="w-full h-4 rounded-full bg-[#1E4870]/60 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '91.7%' }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #FF671D 0%, #F59E0B 100%)',
                  boxShadow: '0 0 20px rgba(255,103,29,0.4)',
                }}
              />
              <div
                className="absolute top-0 bottom-0 border-r-2 border-white/60"
                style={{ left: '100%', marginLeft: -2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Rodapé — comparativo trimestres */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="relative z-10 grid grid-cols-3 gap-3"
        >
          {[
            { label: '1º Tri', gap: '-19,1%', color: '#EF4444' },
            { label: '2º Tri', gap: '-17,2%', color: '#F59E0B' },
            { label: 'Julho', gap: '-8,3%', color: '#FF671D', highlight: true },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl px-4 py-3 border flex items-center justify-between"
              style={{
                borderColor: item.highlight ? `${item.color}55` : '#1E4870',
                background: item.highlight ? `${item.color}0F` : 'rgba(0,31,53,0.6)',
              }}
            >
              <span className="text-[#8FA8BD] font-mono text-xs uppercase tracking-widest">{item.label}</span>
              <span className="font-mono text-lg font-bold" style={{ color: item.color }}>
                {item.gap}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
