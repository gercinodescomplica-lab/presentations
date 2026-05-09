import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'

const before = [
  'Sistemas isolados por secretaria',
  'Múltiplos cadastros do cidadão',
  'Processos lentos e manuais',
  'Dados desatualizados e inconsistentes',
  'Atendimento fragmentado',
]

const after = [
  'Plataforma integrada entre órgãos',
  'Visão unificada do cidadão',
  'Automação de ponta a ponta',
  'Dados confiáveis em tempo real',
  'Atendimento omnichannel fluido',
]

export default function Slide08AntesDepois() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Header */}
      <div className="relative z-10 px-14 pt-10 pb-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Bloco 3 · Interoperabilidade</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl font-bold leading-tight"
          style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
        >
          Da fragmentação ao{' '}
          <span className="text-[#09DFAB]">ecossistema integrado</span>
        </motion.h2>
      </div>

      {/* Antes / Depois */}
      <div className="relative z-10 flex-1 px-14 pb-10 flex items-stretch gap-8">

        {/* ANTES */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 rounded-3xl p-8 flex flex-col gap-5"
          style={{ background: 'rgba(74,101,128,0.1)', border: '1.5px solid rgba(74,101,128,0.35)' }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(74,101,128,0.25)', border: '1px solid rgba(74,101,128,0.4)' }}>
              <X className="w-5 h-5 text-[#4A6580]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#4A6580]">← Antes</span>
            <span className="font-bold text-2xl text-[#4A6580] ml-1">Fragmentação</span>
          </div>
          <div className="h-px w-full bg-[#1E3A52]" />
          <ul className="flex flex-col gap-3">
            {before.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(74,101,128,0.3)', border: '1px solid rgba(74,101,128,0.4)' }}>
                  <X className="w-3 h-3 text-[#4A6580]" />
                </span>
                <span className="text-[#6A80A0] text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SETA CENTRAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center justify-center flex-shrink-0"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(9,223,171,0.1)', border: '2px solid rgba(9,223,171,0.4)' }}>
              <ArrowRight className="w-6 h-6 text-[#09DFAB]" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#09DFAB]">evolução</span>
          </div>
        </motion.div>

        {/* DEPOIS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 rounded-3xl p-8 flex flex-col gap-5"
          style={{ background: 'rgba(9,223,171,0.05)', border: '1.5px solid rgba(9,223,171,0.3)', boxShadow: '0 0 40px rgba(9,223,171,0.07)' }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(9,223,171,0.12)', border: '1px solid rgba(9,223,171,0.3)' }}>
              <Check className="w-5 h-5 text-[#09DFAB]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">→ Depois</span>
            <span className="font-bold text-2xl text-[#09DFAB] ml-1">Integração</span>
          </div>
          <div className="h-px w-full" style={{ background: 'rgba(9,223,171,0.2)' }} />
          <ul className="flex flex-col gap-3">
            {after.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.08 }} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(9,223,171,0.15)', border: '1px solid rgba(9,223,171,0.4)' }}>
                  <Check className="w-3 h-3 text-[#09DFAB]" />
                </span>
                <span className="text-white text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
