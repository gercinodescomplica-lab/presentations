'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'

const instruments = [
  { icon: '📋', title: 'Data Processing Agreement', desc: 'Formal DPA between City, PRODAM, and Microsoft — clearly defining roles as data controller and processors.', color: BLUE },
  { icon: '🔐', title: 'Purpose Limitation Clause', desc: 'Legally binding restrictions on how replicated data can be used — analytics only, no commercial resale.', color: CYAN },
  { icon: '📢', title: 'Citizen Notice & Consent', desc: 'Updated privacy notices aligned to LGPD Art. 18, with clear opt-out paths for sensitive data categories.', color: GREEN },
  { icon: '🛡️', title: 'DPO Oversight Framework', desc: 'Joint Data Protection Officer structure with audit rights, incident notification SLAs, and ANPD reporting protocol.', color: BLUE },
  { icon: '🗑️', title: 'Retention & Deletion Policy', desc: 'Automated data lifecycle management — replicated data expires according to pre-approved retention schedules.', color: CYAN },
  { icon: '📝', title: 'Audit Trail Requirements', desc: 'Immutable access logs for all queries on personal data, available to DPOs and regulatory authorities on demand.', color: GREEN },
]

export default function Slide10LGPD() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[38%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: GREEN }}>
            Legal Compliance
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${GREEN} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            LGPD compliance<br />by design
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${GREEN}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Every layer of the Data Lake Paulistano is built with Brazil's General Data Protection Law (LGPD) as a hard constraint — not an afterthought.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Six binding legal instruments govern how citizen data flows, is stored, accessed, and eventually deleted — with Microsoft's compliance infrastructure providing the technical enforcement layer.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="p-4 rounded-2xl flex items-center gap-3"
            style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
            <span className="text-lg">⚖️</span>
            <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Legal instruments drafted jointly by SMIT Legal, PRODAM Compliance, and Microsoft Public Sector Legal teams.
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-3 p-10 content-center">
          {instruments.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}18` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: item.color }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: `${item.color}12` }}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-xs mb-1" style={{ color: item.color }}>{item.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>10 · LGPD</span>
        </div>
      </motion.div>
    </div>
  )
}
