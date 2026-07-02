'use client'
import { motion } from 'framer-motion'
import { SlideFrame, MINT, TEAL } from './_shared'

export default function Slide05Closing() {
  return (
    <SlideFrame slideNum="05" label="FECHAMENTO">
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xs font-mono tracking-widest mb-6"
          style={{ color: MINT }}
        >
          OBRIGADO
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-4"
          style={{ fontSize: 'clamp(2.4rem, 4.6vw, 4rem)' }}
        >
          <span style={{ color: MINT }}>52 anos</span> transformando São Paulo —
          agora levando essa experiência para{' '}
          <span
            style={{
              background: `linear-gradient(120deg, ${MINT} 0%, #7EE8C7 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            todo o Brasil
          </span>
          .
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-32 h-[2px] origin-left rounded-full mb-10"
          style={{ background: `linear-gradient(90deg, ${MINT}, transparent)` }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <div className="text-xs font-mono tracking-widest text-white/45">
            CONTATO
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <a
              className="flex items-center gap-3 group"
              href="mailto:solucoes@prodam.sp.gov.br"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${MINT}18`,
                  border: `1px solid ${MINT}40`,
                  color: MINT,
                }}
              >
                ✉
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono tracking-widest text-white/45">
                  E-MAIL
                </span>
                <span className="text-white text-base font-medium">
                  solucoes@prodam.sp.gov.br
                </span>
              </div>
            </a>

            <a
              className="flex items-center gap-3 group"
              href="https://store.prodam.sp.gov.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${MINT}18`,
                  border: `1px solid ${MINT}40`,
                  color: MINT,
                }}
              >
                ◈
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono tracking-widest text-white/45">
                  STORE
                </span>
                <span className="text-white text-base font-medium">
                  store.prodam.sp.gov.br
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Big prodam mark bottom-right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-14 right-16 z-10"
      >
        <div className="flex items-center gap-3">
          <span
            className="font-heading font-bold text-white leading-none"
            style={{ fontSize: '4rem', letterSpacing: '-0.03em' }}
          >
            prodam
          </span>
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: MINT, boxShadow: `0 0 24px ${MINT}` }}
          />
        </div>
      </motion.div>
    </SlideFrame>
  )
}
