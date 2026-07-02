'use client'
import { motion } from 'framer-motion'
import { SlideFrame, MINT, TEAL } from './_shared'

const diretorias = [
  {
    code: 'PRE',
    name: 'Presidência',
    lead: 'Francisco de Padovan Forbes',
    headcount: '68 pessoas',
    tags: [],
  },
  {
    code: 'DDS',
    name: 'Desenvolvimento e Sustentação de Sistemas',
    lead: 'Gustavo Guedes Alberto ',
    headcount: '340 pessoas',
    tags: ['Soluções e Sistemas 1-4', 'Engenharia de Sistemas', 'Inteligência Artificial'],
  },
  {
    code: 'DIT',
    name: 'Infraestrutura e Tecnologia',
    lead: 'Carlos Eduardo Trindade',
    headcount: '237 pessoas',
    tags: ['Infraestrutura', 'Serviços', 'Telecom', 'Operações', 'Segurança da Informação'],
  },
  {
    code: 'DAF',
    name: 'Administração e Finanças',
    lead: 'Luciano Felipe de Paula Capato',
    headcount: '101 pessoas',
    tags: ['Logística', 'Compras', 'Financeiro', 'Gestão de Pessoas', 'ERP'],
  },
  {
    code: 'DRM',
    name: 'Relacionamento e Inteligência de Mercado',
    lead: 'Tiago Miguel da Silva Luz',
    headcount: '59 pessoas',
    tags: ['Customer Experience', 'Comunicação', 'Parcerias', 'Store', 'Relacionamento'],
  },
  {
    code: 'DIPAR',
    name: 'Participação',
    lead: 'Sidney Tobias de Souza',
    headcount: '4 pessoas',
    tags: [],
  },
]

export default function Slide03Diretorias() {
  return (
    <SlideFrame slideNum="03" label="ESTRUTURA">
      <div className="flex-1 flex flex-col min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xs font-mono tracking-widest mb-3"
          style={{ color: MINT }}
        >
          ESTRUTURA POR DIRETORIAS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-heading font-bold text-white leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)' }}
        >
          Presidência e cinco diretorias, uma missão pública
        </motion.h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 flex-1 min-h-0 pb-4">
          {diretorias.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.08, duration: 0.6 }}
              className="relative rounded-2xl p-6 flex flex-col overflow-hidden min-h-0"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${MINT}, ${TEAL})` }}
              />

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-heading font-bold"
                  style={{ fontSize: '1.85rem', color: MINT, lineHeight: 1 }}
                >
                  {d.code}
                </span>
              </div>
              <div className="text-[15px] font-semibold leading-snug mb-3 text-white">
                {d.name}
              </div>

              <div className="flex flex-col gap-0.5 mb-2">
                <div className="text-[10px] font-mono tracking-wider text-white/50 uppercase">
                  Responsável
                </div>
                <div className="text-sm text-white/95 leading-tight">{d.lead}</div>
              </div>

              <div
                className="text-[13px] font-mono tracking-wider mb-3"
                style={{ color: MINT }}
              >
                {d.headcount}
              </div>

              {d.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                      style={{
                        background: `${MINT}12`,
                        border: `1px solid ${MINT}30`,
                        color: 'rgba(255,255,255,0.9)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}
