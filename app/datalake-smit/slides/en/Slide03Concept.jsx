'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'

const properties = [
  { icon: '📦', title: 'Stores Everything', desc: 'Structured, semi-structured, and unstructured data — without prior transformation. Every detail is preserved.', color: BLUE },
  { icon: '⚡', title: 'Unlimited Scale', desc: 'From gigabytes to petabytes, the lake grows with demand without architectural redesign.', color: BLUE_DARK },
  { icon: '🔍', title: 'On-Demand Analysis', desc: 'Data is ready for any query — BI, machine learning, or management reports — whenever needed.', color: BLUE },
  { icon: '🔒', title: 'Governance by Design', desc: 'Access control, traceability, and LGPD compliance built in from ingestion onwards.', color: BLUE_DARK },
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
            The Concept
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', background: `linear-gradient(135deg, #0D1B3E 0%, ${BLUE} 60%, ${BLUE_DARK} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            What is a<br />Data Lake?
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})` }} />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="p-4 rounded-2xl"
            style={{ background: 'rgba(47,128,255,0.05)', border: '1px solid rgba(47,128,255,0.12)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#0D1B3E', fontWeight: 500 }}>
              🌊 Think of the city as a watershed.
            </p>
            <p className="text-sm leading-relaxed mt-2" style={{ color: '#3B5794' }}>
              Each secretariat is a river that generates data daily: service records, transactions, events. A <strong>Data Lake</strong> captures these flows in raw format — preserving every detail for future analysis, without needing to transform or move source systems.
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            In the Paulistano model, each secretariat maintains its own lake — connected to a shared intelligence layer that spans the entire city.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${BLUE}08`, border: `1px solid ${BLUE}20` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: BLUE }}>ACTIVE PILOT · SMIT</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.3 }}
            className="text-xs font-mono font-bold tracking-widest mb-1" style={{ color: '#7B93C4' }}>
            DATA LAKE PROPERTIES
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
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>03 · CONCEPT</span>
        </div>
      </motion.div>
    </div>
  )
}
