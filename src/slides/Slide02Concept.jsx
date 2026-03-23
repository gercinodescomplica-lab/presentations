import { motion } from 'framer-motion'

export default function Slide02Concept() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0a1120 0%, #080e18 50%, #060c14 100%)',
          border: '1px solid rgba(47,128,255,0.12)',
        }}
      >
        <div className="text-center">
          <span className="text-white/20 font-mono text-sm tracking-widest uppercase">Slide 02</span>
          <h2 className="font-heading text-4xl font-bold text-white/40 mt-4">Em Construção</h2>
          <p className="text-white/25 mt-3 text-sm">Próximo slide a ser adicionado</p>
        </div>
        {/* Slide number */}
        <div className="absolute top-6 left-8 flex items-center gap-2">
          <span className="text-white/15 text-xs font-mono tracking-widest">02</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">CONCEITO</span>
        </div>
      </motion.div>
    </div>
  )
}
