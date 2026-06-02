'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const RED = '#D93025'

const pains = [
  { icon: '🗂️', title: 'Dados presos em silos', desc: 'Cada secretaria gerencia seus próprios bancos de dados isolados, sem acesso compartilhado entre órgãos.' },
  { icon: '🔁', title: 'Esforços duplicados', desc: 'Os mesmos dados do cidadão são coletados e armazenados múltiplas vezes em diferentes secretarias.' },
  { icon: '📉', title: 'Decisões sem dados', desc: 'Gestores dependem de planilhas e intuição em vez de análises em tempo real.' },
  { icon: '🚧', title: 'Sem visão integrada', desc: 'Não há como entender a jornada do cidadão nos serviços municipais de ponta a ponta.' },
  { icon: '⏳', title: 'Tempo de resposta lento', desc: 'Demandas entre secretarias levam dias ou semanas por causa da troca manual de dados.' },
]

export default function Slide02Challenge() {
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${RED}06 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }} />

        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: RED }}>
            O Desafio
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0D1B3E' }}>
            Os dados de São Paulo estão fragmentados — e isso custa à cidade todos os dias
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.5 }}
            className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full" style={{ background: RED }} />
            <span className="text-sm tracking-wide" style={{ color: '#7B93C4' }}>O custo da fragmentação</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            32 secretarias municipais geram dados diariamente — mas poucos fluem de forma integrada. O resultado: desperdício, duplicação e pontos cegos na gestão da cidade.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.85 }}
            className="p-4 rounded-2xl"
            style={{ background: `${RED}06`, border: `1px solid ${RED}15` }}>
            <p className="text-xs leading-relaxed italic" style={{ color: '#5C3A3A' }}>
              "Sem uma camada de dados integrada, cada decisão tomada na cidade é uma decisão tomada no escuro."
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3">
          {pains.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: `${RED}03`, border: '1px solid rgba(217,48,37,0.08)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: `${RED}08` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: '#0D1B3E' }}>{p.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>02 · O DESAFIO</span>
        </div>
      </motion.div>
    </div>
  )
}
