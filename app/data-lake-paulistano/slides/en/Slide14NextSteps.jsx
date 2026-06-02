'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'

const actions = [
  { number: '01', title: 'Approve pilot scope', desc: 'Formally define the SMIT data lake perimeter — systems, data types, and timeline for Phase 1.', owner: 'SMIT + PRODAM', color: CYAN },
  { number: '02', title: 'Sign Microsoft MOU', desc: 'Formalize the partnership intent with a Memorandum of Understanding to unlock joint planning resources.', owner: 'SMIT + Microsoft', color: BLUE },
  { number: '03', title: 'Constitute governance', desc: 'Appoint committee members for Data Governance, Technical Ops, and Security & Compliance groups.', owner: 'SMIT + PRODAM + MS', color: GREEN },
  { number: '04', title: 'Legal instrument review', desc: 'SMIT Legal and PRODAM Compliance review and sign LGPD-compliant data processing agreements.', owner: 'Legal Teams', color: CYAN },
]

export default function Slide14NextSteps() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: 'linear-gradient(135deg, #05070A 0%, #070d18 55%, #050a12 100%)', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,229,255,0.05) 0%, transparent 60%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[40%] flex flex-col justify-between px-12 lg:px-14 py-14 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono tracking-wider"
              style={{ border: `1px solid ${CYAN}30`, background: `${CYAN}08`, color: CYAN }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
              ACTION REQUIRED
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
              className="font-heading font-bold leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', background: `linear-gradient(135deg, #fff 0%, ${BLUE} 55%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Next steps toward the Data Lake Paulistano
            </motion.h2>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.55, duration: 0.8 }}
              className="w-32 h-[2px] origin-left rounded-full"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Four decisions will unlock the entire program. Each one is low-risk, reversible, and sets the foundation for São Paulo's most ambitious data initiative.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: `${GREEN}06`, border: `1px solid ${GREEN}20` }}>
            <div className="flex items-center gap-2">
              <span className="text-lg">🏙️</span>
              <span className="text-xs font-mono font-bold tracking-wider" style={{ color: GREEN }}>THE GOAL</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              São Paulo as a fully connected city — where every secretaria shares the same data fabric and every citizen receives a seamless, unified service experience.
            </p>
            <div className="flex items-center gap-2 pt-1" style={{ borderTop: `1px solid ${GREEN}15` }}>
              <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>PRODAM · SMIT · MICROSOFT</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          {actions.map((a, i) => (
            <motion.div key={a.number}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-5 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${a.color}20` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(180deg, ${a.color}, transparent)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-heading font-bold"
                style={{ background: `${a.color}12`, border: `1px solid ${a.color}25`, color: a.color, fontSize: '1rem' }}>
                {a.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-white">{a.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{ background: `${a.color}10`, color: a.color }}>
                    {a.owner}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>14 · NEXT STEPS</span>
        </div>
      </motion.div>
    </div>
  )
}
