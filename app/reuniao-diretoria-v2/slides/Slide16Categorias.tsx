import { motion } from 'framer-motion'
import { Grid3x3, CheckCircle2, AlertTriangle, AlertOctagon } from 'lucide-react'

type Row = {
  categoria: string
  contratado: number
  realizado: number
  pct: number
}

const rows: Row[] = [
  { categoria: 'Comunicação',            contratado:  95_073_799.42, realizado:  88_295_973.70, pct: 92.9 },
  { categoria: 'Data Center',            contratado: 238_464_616.95, realizado: 197_677_444.61, pct: 82.9 },
  { categoria: 'Produtos Customizados',  contratado:   5_637_928.09, realizado:   4_681_650.93, pct: 83.0 },
  { categoria: 'Sistemas de Informação', contratado:  85_087_419.96, realizado:  66_723_103.07, pct: 78.4 },
  { categoria: 'Terceiros',              contratado:  10_623_312.89, realizado:   6_121_171.58, pct: 57.6 },
  { categoria: 'Redes e Conectividades', contratado:   1_342_074.85, realizado:     617_700.46, pct: 46.0 },
]

function status(pct: number) {
  if (pct >= 85) return { label: 'Positivo',    color: '#22c55e', tone: 'bg-[#22c55e]/10 border-[#22c55e]/40 text-[#22c55e]' }
  if (pct >= 70) return { label: 'Atenção',     color: '#F59E0B', tone: 'bg-[#F59E0B]/10 border-[#F59E0B]/40 text-[#F59E0B]' }
  if (pct >= 60) return { label: 'Preocupante', color: '#FB923C', tone: 'bg-[#FB923C]/10 border-[#FB923C]/40 text-[#FB923C]' }
  return                { label: 'Crítico',     color: '#EF4444', tone: 'bg-[#EF4444]/10 border-[#EF4444]/40 text-[#EF4444]' }
}

const fmt = (v: number) =>
  v >= 1_000_000 ? `R$ ${(v / 1_000_000).toFixed(1).replace('.', ',')} Mi` : `R$ ${(v / 1_000).toFixed(0)} mil`

export default function Slide16Categorias() {
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
            Até Julho / 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl font-bold leading-tight"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Categorias <br />
            <span className="text-[#FF671D]">de Serviço</span>
          </motion.h2>

          <p className="text-[#8FA8BD] text-base leading-relaxed">
            O gap de -16,5% do acumulado não é homogêneo. Cada linha de
            serviço tem uma leitura própria — algumas praticamente batem
            a meta, outras puxam o resultado para baixo.
          </p>

          <div className="rounded-2xl border border-[#1E4870] bg-[#1E4870]/30 p-4 flex flex-col gap-2">
            <div className="text-[#FF671D] font-mono text-sm uppercase tracking-widest font-bold mb-1">Status</div>
            {[
              { label: 'Positivo',    range: '85–100%', color: '#22c55e' },
              { label: 'Atenção',     range: '70–85%',  color: '#F59E0B' },
              { label: 'Preocupante', range: '60–70%',  color: '#FB923C' },
              { label: 'Crítico',     range: '< 60%',   color: '#EF4444' },
            ].map((l) => (
              <div key={l.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                  <span className="text-white font-bold">{l.label}</span>
                </div>
                <span className="text-[#8FA8BD] font-mono">{l.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative px-6 py-5 flex flex-col gap-3">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />

        {/* Header direito com stats */}
        <div className="relative z-10 flex items-end justify-between">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Grid3x3 className="text-[#FF671D] w-6 h-6" />
            Contratado × Realizado por Linha
          </h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30">
              <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[#22c55e] font-mono text-sm uppercase tracking-widest font-bold">1 Positivo</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30">
              <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-[#F59E0B] font-mono text-sm uppercase tracking-widest font-bold">3 Atenção</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30">
              <AlertOctagon className="w-4 h-4 text-[#EF4444]" />
              <span className="text-[#EF4444] font-mono text-sm uppercase tracking-widest font-bold">2 Críticos</span>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-h-0 relative z-10 rounded-2xl border border-[#1E4870] bg-[#001F35]/60 flex flex-col overflow-hidden"
        >
          <div className="shrink-0 grid grid-cols-12 gap-2 px-5 py-2 border-b border-[#1E4870] bg-[#1E4870]/40 text-xs font-mono font-bold tracking-widest text-[#4A6580] uppercase items-center">
            <div className="col-span-4">Categoria</div>
            <div className="col-span-2 text-right">Contratado</div>
            <div className="col-span-2 text-right">Realizado</div>
            <div className="col-span-3">Execução</div>
            <div className="col-span-1 text-center">Status</div>
          </div>

          <div className="flex-1 flex flex-col divide-y divide-[#1E4870]/30 min-h-0">
            {rows.map((r, i) => {
              const st = status(r.pct)
              return (
                <motion.div
                  key={r.categoria}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="flex-1 grid grid-cols-12 gap-2 px-5 items-center hover:bg-[#1E4870]/20 transition-colors"
                >
                  <div className="col-span-4 text-white font-bold text-lg leading-tight">{r.categoria}</div>
                  <div className="col-span-2 text-right text-[#8FA8BD] font-mono text-base">{fmt(r.contratado)}</div>
                  <div className="col-span-2 text-right text-[#FF671D] font-mono text-base font-bold">{fmt(r.realizado)}</div>
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="flex-1 h-3 rounded-full bg-[#1E4870]/60 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(r.pct, 100)}%` }}
                        transition={{ delay: 0.55 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: st.color, boxShadow: `0 0 10px ${st.color}66` }}
                      />
                    </div>
                    <span className="font-mono text-base font-bold w-14 text-right" style={{ color: st.color }}>
                      {r.pct.toFixed(1)}%
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded-md border font-mono text-xs uppercase tracking-widest font-bold ${st.tone}`}>
                      {st.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="shrink-0 bg-[#FF671D]/10 border-t border-[#FF671D]/30 grid grid-cols-12 gap-2 px-5 py-3 items-center">
            <div className="col-span-4 font-black text-[#FF671D] text-lg uppercase tracking-[0.2em]">Total Geral</div>
            <div className="col-span-2 text-right font-mono text-base font-bold text-white/80">R$ 436,2 Mi</div>
            <div className="col-span-2 text-right font-mono text-lg font-bold text-[#FF671D]">R$ 364,1 Mi</div>
            <div className="col-span-3 flex items-center gap-3">
              <div className="flex-1 h-3 rounded-full bg-[#1E4870]/60 overflow-hidden">
                <div className="h-full rounded-full bg-[#F59E0B]" style={{ width: '83.5%' }} />
              </div>
              <span className="font-mono text-base font-bold text-[#F59E0B] w-14 text-right">83,5%</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="inline-block px-2 py-0.5 rounded-md border font-mono text-xs uppercase tracking-widest font-bold bg-[#F59E0B]/10 border-[#F59E0B]/40 text-[#F59E0B]">
                Atenção
              </span>
            </div>
          </div>
        </motion.div>

        {/* Rodapé — insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.4 }}
          className="relative z-10 rounded-xl px-4 py-3 border border-[#1E4870] bg-[#001F35]/60 text-sm text-[#8FA8BD] leading-snug"
        >
          <span className="text-[#FF671D] font-bold">Leitura:</span>{' '}
          <span className="text-white font-bold">Comunicação</span> praticamente bate a meta (92,9%).
          O peso maior de gap está em <span className="text-white font-bold">Data Center</span> (-R$ 40,8 Mi)
          e <span className="text-white font-bold">Sistemas de Informação</span> (-R$ 18,4 Mi).
          <span className="text-[#EF4444] font-bold"> Redes (46%)</span> e <span className="text-[#EF4444] font-bold">Terceiros (57,6%)</span> são
          críticos em % — mas valores pequenos, impacto absoluto limitado.
        </motion.div>
      </div>
    </div>
  )
}
