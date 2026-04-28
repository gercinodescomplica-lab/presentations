import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

export default function Slide07Architecture() {
  return (
    <SlideCardLight slideNum="07" label="TECHNICAL OVERVIEW">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2563eb">INFRASTRUCTURE</TagLabelLight>
          <GradientTitleLight>System Architecture</GradientTitleLight>
          <SubtitleBarLight>Built for scale and absolute availability</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            SPDF is engineered to seamlessly integrate into your legacy infrastructure or deploy into dedicated private cloud blocks, ensuring high concurrency without compromising speed.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="gap-8 flex-col justify-center items-center">
          {/* Visual representation of architecture */}
          <div className="flex gap-12 w-full justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl mb-1 shadow-sm bg-white"
                style={{ border: `1px solid rgba(37,99,235,0.2)` }}>
                🏢
              </div>
              <span className="text-blue-600 font-heading font-bold">Bare-metal</span>
              <span className="text-slate-400 text-xs text-center w-32">Direct data center installation</span>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="flex items-center text-slate-300 font-bold font-mono tracking-widest text-sm uppercase"
            >
               ← OR →
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl mb-1 shadow-sm bg-white"
                style={{ border: `1px solid rgba(234,179,8,0.3)` }}>
                ☁️
              </div>
              <span className="text-yellow-600 font-heading font-bold">Private Cloud</span>
              <span className="text-slate-400 text-xs text-center w-32">Isolated high-availability</span>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="w-[85%] mt-8 flex justify-around p-6 rounded-2xl bg-white"
              style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#2563eb' }}>99.9%</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">Uptime Target</span>
             </div>
             
             <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1), transparent)' }} />
             
             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#1e3a8a' }}>1,000+</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">Concurrent Users</span>
             </div>
             
             <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1), transparent)' }} />
             
             <div className="flex flex-col gap-1 items-center text-center">
                <span className="text-3xl font-heading font-bold" style={{ color: '#eab308' }}>50MB</span>
                <span className="text-slate-400 font-bold text-[10px] font-mono tracking-wider uppercase">In &lt; 30 Seconds</span>
             </div>
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
