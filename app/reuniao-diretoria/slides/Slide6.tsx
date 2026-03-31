import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Leaflet requires no SSR (uses window/document APIs)
const LeadsMap = dynamic(() => import('@/components/LeadsMap'), { ssr: false })

export default function Slide6() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-[#FFFFFF] overflow-hidden">
      
      {/* ── HEADER STRIP ── */}
      <div 
        className="flex items-center justify-between px-10 py-4 border-b border-[#1E3A52] flex-shrink-0"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#09DFAB]">
              Slide 03
            </span>
          </motion.div>
          <div className="w-px h-4 bg-[#1E3A52]" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white"
          >
            Mapa de Oportunidades Comerciais
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#4A6580] font-mono text-base"
        >
          BRASIL · {new Date().getFullYear()} · DRM / PRODAM
        </motion.div>
      </div>

      {/* ── MAP BODY ── */}
      <div className="flex-1 overflow-hidden">
        <LeadsMap />
      </div>

    </div>
  )
}
