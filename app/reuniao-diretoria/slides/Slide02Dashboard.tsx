import { motion } from 'framer-motion'
import { ExternalLink, Maximize2 } from 'lucide-react'

const DASHBOARD_URL = 'https://dashboard-comercial-sepia.vercel.app/'

export default function Slide2() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-[#FFFFFF] overflow-hidden">

      {/* ── HEADER STRIP ── */}
      <div
        className="flex items-center justify-between px-8 py-3 border-b border-[#1E3A52] flex-shrink-0"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#09DFAB]">
              Slide 02
            </span>
          </motion.div>
          <div className="w-px h-4 bg-[#1E3A52]" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-bold text-white"
          >
            Dashboard Comercial
          </motion.h2>
        </div>

        <motion.a
          href={DASHBOARD_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-[#1E3A52] text-[#8BA0B4] hover:text-[#09DFAB] hover:border-[#09DFAB]/40 transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Abrir em nova aba
        </motion.a>
      </div>

      {/* ── IFRAME FULL ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1 relative overflow-hidden"
      >
        {/* Subtle border glow on the iframe container */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{
          boxShadow: 'inset 0 0 40px rgba(9,223,171,0.03)',
        }} />

        <iframe
          src={DASHBOARD_URL}
          title="Dashboard Comercial"
          className="w-full h-full border-0"
          style={{ display: 'block' }}
          allow="fullscreen"
        />
      </motion.div>

    </div>
  )
}
