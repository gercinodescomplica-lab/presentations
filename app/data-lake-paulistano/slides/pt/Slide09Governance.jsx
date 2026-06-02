'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const PURPLE = '#A78BFA'

const committees = [
  { icon: '🏛️', name: 'Comitê de Governança de Dados', color: BLUE, members: ['Responsável SMIT', 'Responsável PRODAM', 'Gov Lead Microsoft'], role: 'Define políticas de dados, regras de acesso e padrões de uso para o data lake da secretaria.', cadence: 'Mensal' },
  { icon: '⚙️', name: 'Comitê de Operações Técnicas', color: CYAN, members: ['TI SMIT', 'Engenharia PRODAM', 'Arquitetos Azure MS'], role: 'Supervisiona operações da plataforma, decisões de infraestrutura, SLAs e resposta a incidentes.', cadence: 'Quinzenal' },
  { icon: '🔒', name: 'Comitê de Segurança e Compliance', color: PURPLE, members: ['DPO (SMIT/PRODAM)', 'Equipes Jurídicas', 'Segurança Microsoft'], role: 'Monitora conformidade LGPD, realiza auditorias de dados e gerencia protocolos de incidentes.', cadence: 'Mensal' },
]

export default function Slide09Governance() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 flex items-start justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: CYAN }}>
              Modelo de Governança
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-heading font-bold text-white" style={{ fontSize: '1.9rem' }}>
              Governança tripartite: Secretaria + PRODAM + Microsoft
            </motion.h2>
          </div>
        </div>

        <div className="relative z-10 flex-1 grid grid-cols-3 gap-0">
          {committees.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="flex flex-col gap-5 p-8 relative overflow-hidden border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm leading-tight text-white">{c.name}</div>
                  <div className="text-[10px] font-mono mt-0.5" style={{ color: c.color }}>Cadência: {c.cadence}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{c.role}</p>
              <div className="flex flex-col gap-2 mt-auto">
                <div className="text-[10px] font-mono font-bold tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>MEMBROS</div>
                {c.members.map(m => (
                  <div key={m} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: `${c.color}08`, border: `1px solid ${c.color}18` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="relative z-10 flex items-center justify-center gap-4 px-12 py-4 border-t"
          style={{ borderColor: 'rgba(47,128,255,0.1)', background: 'rgba(47,128,255,0.03)' }}>
          <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Os três comitês reportam a um Grupo Diretor do Data Lake — presidido conjuntamente pela liderança da SMIT e PRODAM
          </span>
        </motion.div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>09 · GOVERNANÇA</span>
        </div>
      </motion.div>
    </div>
  )
}
