'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const MSBLUE = '#00A4EF'

const pillars = [
  { icon: '📄', title: 'Contract via PRODAM', desc: 'The City contracts through PRODAM — the municipal public company that manages the commercial and technical relationship with Microsoft.' },
  { icon: '🤝', title: 'Strategic Sponsorship', desc: 'Microsoft joins as a strategic partner, not just a cloud provider.' },
  { icon: '🏗️', title: 'Co-built Solution', desc: 'Joint architecture design with Microsoft engineers from day one.' },
  { icon: '🎓', title: 'Knowledge Transfer', desc: 'Full capability building for PRODAM and SMIT teams throughout the project.' },
]

export default function Slide07Microsoft() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${MSBLUE}08 0%, transparent 70%)`, transform: 'translate(20%, -20%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: MSBLUE }}>
            Strategic Partnership
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight" style={{ color: '#0D1B3E', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Microsoft as a<br />city-scale partner
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${MSBLUE}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            Microsoft is in advanced discussion to sponsor the Data Lake Paulistano — bringing its Azure cloud platform, global government experience, and technical teams directly to São Paulo.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            The commercial agreement would be structured with <strong>PRODAM</strong> as the contract manager — ensuring compliance with public procurement rules and maintaining institutional control within the City Hall.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${MSBLUE}08`, border: `1px solid ${MSBLUE}25` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MSBLUE }} />
            <span className="text-xs font-mono tracking-wider" style={{ color: MSBLUE }}>PARTNERSHIP IN NEGOTIATION</span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-5 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${MSBLUE}20` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(180deg, ${MSBLUE}, ${CYAN})` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: `${MSBLUE}12` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>{p.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>07 · MICROSOFT</span>
        </div>
      </motion.div>
    </div>
  )
}
