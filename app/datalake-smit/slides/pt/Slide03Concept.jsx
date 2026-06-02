'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'

const properties = [
  { icon: '📦', title: 'Armazena tudo', desc: 'Dados estruturados, semiestruturados e não estruturados — sem transformação prévia. Cada detalhe é preservado.', color: BLUE },
  { icon: '⚡', title: 'Escala sem limites', desc: 'De gigabytes a petabytes, o lake cresce com a demanda sem redesenho de arquitetura.', color: BLUE_DARK },
  { icon: '🔍', title: 'Análise sob demanda', desc: 'Os dados ficam prontos para qualquer consulta — BI, integrações, machine learning ou relatórios gerenciais — quando necessário.', color: BLUE },
  { icon: '🔒', title: 'Governança por design', desc: 'Controle de acesso, rastreabilidade e conformidade com a LGPD incorporados desde a ingestão dos dados.', color: BLUE_DARK },
]

export default function Slide03Concept() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.04 }} />

        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-5 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: BLUE }}>
            O Conceito
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', background: `linear-gradient(135deg, #0D1B3E 0%, ${BLUE} 60%, ${BLUE_DARK} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            O que é um<br />Data Lake?
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})` }} />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="p-4 rounded-2xl"
            style={{ background: 'rgba(47,128,255,0.05)', border: '1px solid rgba(47,128,255,0.12)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#0D1B3E', fontWeight: 500 }}>
              🌊 Imagine a cidade como uma bacia hidrográfica.
            </p>
            <p className="text-sm leading-relaxed mt-2" style={{ color: '#3B5794' }}>
              Cada secretaria é um rio que gera dados diariamente: atendimentos, transações, eventos. Um <strong>Data Lake</strong> captura esses fluxos em formato bruto — preservando cada detalhe para análise futura, sem precisar transformar ou mover os sistemas de origem.
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            No modelo Paulistano, cada secretaria mantém seu próprio datalake — conectados a uma camada compartilhada de inteligência que abrange toda a cidade.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${BLUE}08`, border: `1px solid ${BLUE}20` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: BLUE }}>PILOTO ATIVO · SMIT</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.3 }}
            className="text-xs font-mono font-bold tracking-widest mb-1" style={{ color: '#7B93C4' }}>
            PROPRIEDADES DO DATA LAKE
          </motion.div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {properties.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${p.color}18` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${p.color}10` }}>
                  {p.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>03 · CONCEITO</span>
        </div>
      </motion.div>
    </div>
  )
}
