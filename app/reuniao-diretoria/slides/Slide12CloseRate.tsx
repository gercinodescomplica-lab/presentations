'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const COLS = [
  { label: 'Período',                       w: '12%'  },
  { label: 'Nº Total\nDemandas',            w: '5%'   },
  { label: 'Valor Total\nDemandas',         w: '10%'  },
  { label: 'Demandas\nFinalizadas F#',      w: '5%'   },
  { label: 'Valor Orçado\nFinalizadas F$',  w: '10%'  },
  { label: 'Demandas\nPerdidas P#',         w: '5%'   },
  { label: 'Valor Orçado\nPerdidas P$',     w: '10%'  },
  { label: 'Demandas\nCanceladas',          w: '5%'   },
  { label: 'Valor das\nCanceladas',         w: '10%'  },
  { label: 'CR\nOport. #',                  w: '5%'   },
  { label: 'CR\nValores $',                 w: '5%'   },
]

interface TableData {
  periodo: string
  totalN: string; totalV: string
  finN:   string; finV:   string
  perdN:  string; perdV:  string
  canN:   string; canV:   string
  crN:    string; crV:    string
}

function CloseRateTable({ title, row, delay = 0 }: { title: string; row: TableData; delay?: number }) {
  const cells = [
    row.periodo,
    row.totalN, row.totalV,
    row.finN,   row.finV,
    row.perdN,  row.perdV,
    row.canN,   row.canV,
    row.crN,    row.crV,
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 flex flex-col rounded-lg overflow-hidden border border-[#1E3A52] min-h-0"
    >
      {/* Section title */}
      <div className="shrink-0 px-4 py-2.5 bg-[#0B1D36] text-center">
        <span className="text-white font-semibold text-[15px] tracking-wide">{title}</span>
      </div>

      {/* Column headers */}
      <div className="shrink-0 flex bg-[#1C3B5A]">
        {COLS.map((col, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-center px-1.5 py-3 border-r border-[#2A5070] last:border-r-0"
            style={{ width: col.w, flexShrink: 0, flexGrow: i === 0 ? 1 : 0 }}
          >
            <span className="text-[13px] font-semibold text-[#A8D4F0] leading-tight whitespace-pre-line">
              {col.label}
            </span>
          </div>
        ))}
      </div>

      {/* Data row — flex-1 fills remaining height */}
      <div className="flex-1 flex bg-[#0A1825]/80 border-t border-[#1E3A52]">
        {cells.map((cell, i) => {
          const isCR      = i === 9 || i === 10
          const isValue   = [2, 4, 6, 8].includes(i)
          const isPeriodo = i === 0
          return (
            <div
              key={i}
              className="flex items-center justify-center border-r border-[#1E3A52] last:border-r-0 px-1"
              style={{ width: COLS[i].w, flexShrink: 0, flexGrow: isPeriodo ? 1 : 0 }}
            >
              <span
                className={`font-mono text-center leading-snug whitespace-pre-line ${
                  isCR
                    ? 'text-[#09DFAB] font-bold text-[28px]'
                    : isValue
                    ? 'text-[#8BA0B4] text-[14px]'
                    : isPeriodo
                    ? 'text-white font-semibold text-[15px]'
                    : 'text-white font-bold text-[22px]'
                }`}
              >
                {cell}
              </span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Slide12CloseRate() {
  const tableA: TableData = {
    periodo: 'AGOSTO-25\nà ABRIL-26',
    totalN:  '44',
    totalV:  'R$\n189.762.007,17',
    finN:    '26',
    finV:    'R$\n136.565.063,54',
    perdN:   '3',
    perdV:   'R$\n1.920.531,90',
    canN:    '15',
    canV:    'R$\n51.276.411,73',
    crN:     '59%',
    crV:     '72%',
  }

  const tableB: TableData = {
    periodo: 'AGOSTO-25\nà ABRIL-26',
    totalN:  '62',
    totalV:  'R$\n303.333.536,60',
    finN:    '13',
    finV:    'R$\n98.940.903,16',
    perdN:   '21',
    perdV:   'R$\n92.085.372,98',
    canN:    '28',
    canV:    'R$\n112.307.260,46',
    crN:     '21%',
    crV:     '33%',
  }

  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#083540] blur-[150px] opacity-30 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.04] pointer-events-none rounded-full" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── TÍTULO ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 shrink-0 flex items-center gap-3 px-8 pt-5 pb-3 border-b border-[#1E3A52]"
      >
        <div className="p-2 rounded-lg bg-[#09DFAB]/10 border border-[#09DFAB]/25 shrink-0">
          <TrendingUp className="w-5 h-5 text-[#09DFAB]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#09DFAB] animate-pulse" />
            <span className="text-[#09DFAB] font-mono text-xs uppercase tracking-widest">SLIDE 12</span>
          </div>
          <h2 className="text-[22px] font-bold text-white leading-tight">
            Close Rate —{' '}
            <span className="text-[#09DFAB]">Agosto de 25 a Abril de 26</span>
          </h2>
        </div>
      </motion.div>

      {/* ── TABELAS ── flex-1, sem justify-center para preencher tudo ── */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col gap-4 px-8 py-5">

        <CloseRateTable
          delay={0.2}
          title="Close Rate – Visão com Renovações, Aditamentos, Prorrogações e Renovações com Expansão"
          row={tableA}
        />

        <CloseRateTable
          delay={0.35}
          title='Close Rate – Visão "Somente" Novas Oportunidades do Pipeline'
          row={tableB}
        />

        {/* Legenda */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="shrink-0 flex items-center gap-5 text-[#8BA0B4] text-[13px] font-mono"
        >
          <span><span className="text-[#09DFAB] font-bold">F#</span> = Nº Finalizadas</span>
          <span><span className="text-[#09DFAB] font-bold">F$</span> = Valor Finalizadas</span>
          <span><span className="text-[#09DFAB] font-bold">P#</span> = Nº Perdidas</span>
          <span><span className="text-[#09DFAB] font-bold">P$</span> = Valor Perdidas</span>
          <span><span className="text-[#09DFAB] font-bold">CR#</span> = Close Rate por Oportunidades</span>
          <span><span className="text-[#09DFAB] font-bold">CR$</span> = Close Rate por Valores</span>
        </motion.div>
      </div>
    </div>
  )
}
