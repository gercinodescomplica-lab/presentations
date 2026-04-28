import { motion } from 'framer-motion'
import {
  EcoGardenCard,
  EcoGardenImagePlaceholder,
} from '@/templates/EcoGarden'

export default function Slide01Cover() {
  return (
    <EcoGardenCard className="flex-row">
      {/* Left Panel */}
      <div className="w-1/2 flex-shrink-0 flex flex-col justify-between px-14 lg:px-16 py-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
            style={{ border: '1px solid #16653430', background: '#16653408', color: '#166534' }}
          >
            Strategic Business Case
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', color: '#1a2e1a' }}
          >
            Smart Park
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 h-[2px] origin-left"
            style={{ background: 'linear-gradient(90deg, #166534, #d97706)' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-light text-xl tracking-widest text-gray-400 uppercase"
          >
            Reintegrating Urban Fabric
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm font-light"
          >
            Transforming abandoned parks into intelligent hubs of data, safety, and well-being through Infrastructure as a Service.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex items-center gap-4"
        >
          <span className="text-gray-300 text-[10px] font-mono tracking-widest uppercase">PRODAM · DRM</span>
          <div className="h-4 w-px bg-gray-200" />
          <span className="text-gray-300 text-[10px] font-mono tracking-widest uppercase">2025</span>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-14 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute w-[320px] h-[320px] rounded-full" style={{
            background: 'radial-gradient(circle, rgba(134,239,172,0.15) 0%, transparent 70%)',
          }} />
          <EcoGardenImagePlaceholder label="Park Aerial View" className="relative z-10 w-72 h-72 rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #16653440, transparent)' }} />
          <p className="text-gray-500 text-sm font-light tracking-wide">
            Safety · Sustainability · Connectivity
          </p>
        </motion.div>
      </div>
    </EcoGardenCard>
  )
}
