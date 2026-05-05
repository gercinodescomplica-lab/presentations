import { motion } from 'framer-motion'



export default function Slide01Cover() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex bg-white"
        style={{
          border: '1px solid rgba(47,128,255,0.15)',
          boxShadow: '0 15px 60px -15px rgba(0,40,100,0.12)',
        }}
      >
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center px-14 w-[55%]">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-700 text-[10px] font-mono font-bold tracking-[0.25em] uppercase">PRODAM · PP993</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg border border-yellow-200 bg-yellow-50/50 text-yellow-700 text-[10px] font-mono font-bold tracking-[0.25em] uppercase">
              Internal Product
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div className="text-slate-400 font-bold text-xs font-mono tracking-[0.35em] uppercase mb-2">São Paulo</div>
            <h1 className="font-heading font-bold leading-none" style={{
              fontSize: 'clamp(5rem, 10vw, 8.5rem)',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>SPDF</h1>
          </motion.div>

          {/* Divider + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="h-[3px] w-16 rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #2563eb, #eab308)' }} />
            <p className="text-slate-600 text-base font-body leading-relaxed max-w-sm">
              Secure PDF &amp; document processing for the public sector.<br />
              <span className="text-slate-400">100% internal. Fully LGPD compliant.</span>
            </p>
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <div>
              <div className="text-slate-400 font-bold text-[10px] font-mono tracking-widest uppercase">Type</div>
              <div className="text-slate-500 font-semibold text-xs font-mono mt-0.5">Pitch Deck · 2025</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <div className="text-slate-400 font-bold text-[10px] font-mono tracking-widest uppercase">Unit</div>
              <div className="text-slate-500 font-semibold text-xs font-mono mt-0.5">GDS-2 / DDS & GRI / DRM</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <div className="text-slate-400 font-bold text-[10px] font-mono tracking-widest uppercase">Version</div>
              <div className="text-slate-500 font-semibold text-xs font-mono mt-0.5">v1.0 · Jan 2026</div>
            </div>
          </motion.div>
        </div>

        {/* Right decorative panel */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center w-full"
          >
            {/* Soft background shape */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-50/50" />

            {/* Center icon */}
            <div className="relative z-10 w-36 h-36 rounded-2xl flex items-center justify-center bg-white shadow-xl"
              style={{
                border: '1px solid rgba(47,128,255,0.15)',
              }}>
              <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                <rect x="10" y="5" width="38" height="48" rx="3" stroke="#2563eb" strokeWidth="1.8" fill="none" />
                <path d="M48 5L58 15" stroke="#2563eb" strokeWidth="1.8" />
                <rect x="48" y="5" width="10" height="10" rx="1" fill="rgba(37,99,235,0.1)" stroke="#2563eb" strokeWidth="1.8" />
                <line x1="17" y1="22" x2="41" y2="22" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="17" y1="30" x2="41" y2="30" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="17" y1="38" x2="30" y2="38" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="52" cy="54" r="12" fill="rgba(234,179,8,0.1)" stroke="#eab308" strokeWidth="1.8" />
                <path d="M47 54L51 58L57 49" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          {/* PRODAM label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-8 right-6"
          >
            <span className="text-slate-400 font-bold text-[10px] font-mono tracking-[0.3em] uppercase">PRODAM-SP · 2025</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
