'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import coverImg from '../../assets/page1_data-lake-smit.png'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'

export default function Slide01Cover() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 55%, #F8FBFF 100%)', border: '1px solid rgba(47,128,255,0.15)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.04 }} />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`, transform: 'translate(-50%, -40%)' }} />

        {/* ESQUERDA */}
        <div className="relative z-10 w-[48%] flex flex-col justify-between px-14 lg:px-16 py-14 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono tracking-wider"
              style={{ border: `1px solid ${BLUE}30`, background: `${BLUE}08`, color: BLUE }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
              DOCUMENTO DE VISÃO · SMIT · 2026
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}20` }}>
                🏙️
              </div>
              <h1 className="font-heading font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', background: `linear-gradient(135deg, #0D1B3E 0%, ${BLUE} 55%, ${BLUE_DARK} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Data Lake<br />Paulistano
              </h1>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-40 h-[2px] origin-left rounded-full"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})` }} />

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg leading-relaxed font-light"
              style={{ color: '#3B5794' }}>
              Transformando os dados distribuídos de São Paulo em inteligência urbana integrada — com a SMIT como secretaria piloto junto à Microsoft.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.1 }} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
              <span className="text-xs font-mono tracking-widest" style={{ color: '#7B93C4' }}>PRODAM · SMIT · MICROSOFT</span>
            </div>
          </motion.div>
        </div>

        {/* DIREITA */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <Image src={coverImg} alt="Data Lake SMIT" fill className="object-contain" />
          </motion.div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>01 · CAPA</span>
        </div>
      </motion.div>
    </div>
  )
}
