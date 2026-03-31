import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Slide7Agradecimento() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F172A] text-white overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#083540] blur-[150px] opacity-40 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 rounded-full bg-[#09DFAB]/10 text-[#09DFAB] border border-[#09DFAB]/30 mb-4 shadow-[0_0_30px_rgba(9,223,171,0.2)]"
        >
          <CheckCircle2 className="w-16 h-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl font-bold tracking-tight text-white mb-2"
          style={{ textShadow: '0 0 40px rgba(9,223,171,0.15)' }}
        >
          Obrigado!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#8BA0B4] text-2xl font-light">
            Diretoria de Relacionamento e Inteligência de Mercado
          </p>
          <div className="px-6 py-2 rounded-full border border-[#1E3A52] bg-[#0A1120]/80 backdrop-blur-sm">
            <span className="text-[#09DFAB] font-mono text-xl tracking-widest font-semibold">DRM</span>
          </div>
        </motion.div>
      </div>

    </div>
  )
}
