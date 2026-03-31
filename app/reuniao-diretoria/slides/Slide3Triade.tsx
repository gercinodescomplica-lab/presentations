'use client'

import { motion } from 'framer-motion'

/**
 * Pyramid SVG — purely visual shapes, no overflow text
 *
 * viewBox 0 0 500 400
 * Apex (250, 15) | BL (30, 385) | BR (470, 385)
 * Mid-line at y = 228:
 *   t = (228-15)/(385-15) = 213/370 = 0.5757
 *   ML.x = 250 - 220*t = 250 - 126.7 = 123
 *   MR.x = 250 + 220*t = 250 + 126.7 = 377
 */
export default function Slide3Triade() {
  return (
    <div className="w-full h-full bg-[#0F172A] text-white overflow-hidden relative">

      {/* grid bg */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      {/* ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: 600, height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, rgba(8,53,64,0.22) 45%, transparent 70%)',
        }} />
      </div>

      {/* slide label */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="absolute top-5 left-8 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#09DFAB]">
          Slide 05 · Tríade Digital
        </span>
      </motion.div>

      {/* closing phrase */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] tracking-[0.2em] uppercase z-10"
        style={{ color: 'rgba(9,223,171,0.38)' }}>
        Dados estruturados&nbsp;&nbsp;→&nbsp;&nbsp;Inteligência&nbsp;&nbsp;→&nbsp;&nbsp;Entrega ao cidadão
      </motion.div>

      {/* ─────────────────────────────────────────
          LAYOUT: [left-text] [pyramid] [right-texts]
          ───────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center px-4 pt-10 pb-10">

        {/* ── LEFT CALLOUT: Smart 156 / SuperApp ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-[19%] flex-shrink-0 flex flex-col items-end gap-1 pr-4"
        >
          <span className="text-[#09DFAB] font-bold text-xl text-right">SuperApp</span>
          <div className="w-8 h-px bg-[#09DFAB]/40 self-end mb-1" />
          <p className="text-[#8BA0B4] text-lg text-right leading-relaxed">
            Mapeamento dos serviços e estruturação da camada de atendimento ao cidadão.
          </p>
        </motion.div>

        {/* ── PYRAMID SVG (compact, self-contained) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center"
          style={{ maxWidth: '60%' }}
        >
          <svg
            viewBox="0 0 500 400"
            style={{ width: '100%', maxHeight: '82vh', overflow: 'visible' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g-sl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#12F0CC" stopOpacity="0.93" />
                <stop offset="100%" stopColor="#06A8AD" stopOpacity="0.88" />
              </linearGradient>
              <linearGradient id="g-sr" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#09DFAB" stopOpacity="0.93" />
                <stop offset="100%" stopColor="#04878E" stopOpacity="0.88" />
              </linearGradient>
              <linearGradient id="g-b" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#04858C" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#023F44" stopOpacity="0.99" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Smart 156 — top-left */}
            <polygon points="250,15 123,228 250,228" fill="url(#g-sl)" />
            {/* Digital Twin — top-right */}
            <polygon points="250,15 250,228 377,228" fill="url(#g-sr)" />
            {/* Data Lake — bottom trapezoid */}
            <polygon points="123,228 377,228 470,385 30,385" fill="url(#g-b)" />

            {/* Outer border */}
            <polygon points="250,15 30,385 470,385"
              fill="none" stroke="rgba(9,223,171,0.65)" strokeWidth="2" filter="url(#glow)" />

            {/* Horizontal divider */}
            <line x1="123" y1="228" x2="377" y2="228"
              stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" />
            {/* Vertical divider */}
            <line x1="250" y1="15" x2="250" y2="228"
              stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" />

            {/* Section labels */}
            {/* Smart 156 centroid ≈ (208, 163) */}
            <text x="208" y="155" textAnchor="middle" fill="white"
              fontSize="19" fontWeight="800" fontFamily="system-ui,sans-serif">SMART</text>
            <text x="208" y="179" textAnchor="middle" fill="white"
              fontSize="19" fontWeight="800" fontFamily="system-ui,sans-serif">156</text>

            {/* Digital Twin centroid ≈ (292, 163) */}
            <text x="292" y="155" textAnchor="middle" fill="white"
              fontSize="19" fontWeight="800" fontFamily="system-ui,sans-serif">DIGITAL</text>
            <text x="292" y="179" textAnchor="middle" fill="white"
              fontSize="19" fontWeight="800" fontFamily="system-ui,sans-serif">TWIN</text>

            {/* Data Lake centroid ≈ (250, 310) */}
            <text x="250" y="296" textAnchor="middle" fill="white"
              fontSize="23" fontWeight="900" fontFamily="system-ui,sans-serif" letterSpacing="2">DATA LAKE</text>
            <text x="250" y="328" textAnchor="middle" fill="white"
              fontSize="23" fontWeight="900" fontFamily="system-ui,sans-serif" letterSpacing="2">PAULISTANO</text>
          </svg>
        </motion.div>

        {/* ── RIGHT CALLOUTS ── */}
        <div className="w-[21%] flex-shrink-0 flex flex-col justify-center gap-8 pl-4">

          {/* Digital Twin */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-px bg-[#09DFAB]/50" />
              <span className="text-[#09DFAB] font-bold text-xl">Digital Twin</span>
            </div>
            <p className="text-[#8BA0B4] text-lg leading-relaxed">
              Reuniões com empresas (Dahua, Dassault) e participação em eventos para entendimento das soluções e definição da abordagem inicial.
            </p>
          </motion.div>

          {/* Data Lake */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-px bg-[#09DFAB]/50" />
              <span className="text-[#09DFAB] font-bold text-xl">Data Lake</span>
            </div>
            <p className="text-[#8BA0B4] text-lg leading-relaxed">
              Articulação com secretarias (Saúde, SPTrans e outras) para implantação de data lakes setoriais.
            </p>
          </motion.div>

        </div>

      </div>

    </div>
  )
}
