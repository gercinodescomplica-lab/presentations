'use client'
import { motion } from 'framer-motion'
import { Shield, Cloud, Briefcase, MapPin, Wifi, Landmark, HeartHandshake } from 'lucide-react'
import { SlideFrame, MINT, TEAL } from './_shared'

const categories = [
  { Icon: Shield, title: 'Segurança Pública', items: ['Smart Sampa'] },
  { Icon: Cloud, title: 'Infraestrutura Digital', items: ['Multicloud', 'Observabilidade', 'Virtual Data Lake'] },
  { Icon: Briefcase, title: 'Produtividade Interna', items: ['Office 365', 'Reconhece AI', 'Arlequim'] },
  { Icon: MapPin, title: 'Urbanismo e Regularização', items: ['Tô Legal', 'GeoPortal'] },
  { Icon: Wifi, title: 'Conectividade Urbana', items: ['Wi-fi Livre'] },
  { Icon: Landmark, title: 'Governança Eletrônica', items: ['Delibera AI', 'Simplifica AI', 'Triade'] },
  { Icon: HeartHandshake, title: 'Serviços ao Cidadão', items: ['Score Cobrança', 'Agenda Prodam'] },
]

export default function Slide04Store() {
  return (
    <SlideFrame slideNum="04" label="PRODAM STORE">
      <div className="flex-1 flex flex-col">
        <div className="flex items-start gap-14 mb-5">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-xs font-mono tracking-widest mb-3"
              style={{ color: MINT }}
            >
              MARKETPLACE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-heading font-bold text-white leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)' }}
            >
              Prodam Store —{' '}
              <span
                style={{
                  background: `linear-gradient(120deg, ${MINT} 0%, #7EE8C7 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                soluções para o Brasil
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex-1 max-w-md text-base lg:text-lg leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Marketplace de soluções digitais da Prodam, lançado em agosto de 2025.
            Leva a tecnologia validada em <span className="text-white font-medium">50+ anos</span> em
            São Paulo para qualquer prefeitura do Brasil — contratação direta, sem
            licitação.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-4 flex-1 pb-6">
          {categories.map((c, i) => {
            const Icon = c.Icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.06, duration: 0.5 }}
                className="relative rounded-2xl p-5 flex flex-col overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${MINT}18`,
                    border: `1px solid ${MINT}40`,
                    color: MINT,
                  }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div
                  className="text-base font-semibold text-white leading-snug mb-3"
                  style={{ minHeight: '3rem' }}
                >
                  {c.title}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {c.items.map((it) => (
                    <span
                      key={it}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        color: 'rgba(255,255,255,0.9)',
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SlideFrame>
  )
}
