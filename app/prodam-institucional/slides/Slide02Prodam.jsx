'use client'
import { motion } from 'framer-motion'
import { SlideFrame, MINT, TEAL } from './_shared'

const stats = [
  { value: '+12 mi', label: 'Habitantes' },
  { value: '+20 mi', label: 'Que circulam pela cidade em um dia útil' },
  { value: '52', label: 'Anos de história ajudando a prefeitura a cuidar da cidade' },
]

export default function Slide02Prodam() {
  return (
    <SlideFrame slideNum="02" label="A PRODAM">
      <div className="flex-1 flex items-center gap-14">
        {/* LEFT — Text */}
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-xs font-mono tracking-widest mb-5"
            style={{ color: MINT }}
          >
            QUEM SOMOS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold text-white leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)' }}
          >
            A <span style={{ color: MINT }}>Prodam</span> transforma São Paulo
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="w-24 h-[2px] origin-left rounded-full mb-6"
            style={{ background: `linear-gradient(90deg, ${MINT}, transparent)` }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-lg lg:text-xl leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            A PRODAM-SP é a empresa de Tecnologia da Informação e Comunicação do
            Município de São Paulo. Parceira estratégica da Prefeitura há{' '}
            <span className="text-white font-medium">52 anos</span>, criada pela Lei
            nº 7.619/1971. Desenvolve tecnologia para gerir, proteger e inovar —
            construindo uma cidade mais conectada, inteligente e humana.
          </motion.p>
        </div>

        {/* RIGHT — Stat cards */}
        <div className="flex-1 flex flex-col gap-4 max-w-md">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: `linear-gradient(180deg, ${MINT}, ${TEAL})` }}
              />
              <div
                className="font-heading font-bold leading-none mb-2"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                  background: `linear-gradient(120deg, #FFFFFF 0%, ${MINT} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div
                className="text-sm font-medium tracking-wide"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}
