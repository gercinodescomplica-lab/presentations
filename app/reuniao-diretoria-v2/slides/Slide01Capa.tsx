import { motion } from 'framer-motion'
import Image from 'next/image'
import { Hexagon } from 'lucide-react'
import prodamLogoBranca from '../assets/prodam-logo-branca.png'

export default function Slide1() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-[#FFFFFF] overflow-hidden">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div 
        className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E4870]"
        style={{ backgroundColor: '#001F35' }}
      >
        {/* Glow decorativo sutil no painel */}
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 relative z-10"
        >
          <div className="p-2 bg-[#2A1005] border border-[#4E200A] rounded-xl flex items-center justify-center">
            <Hexagon className="w-6 h-6 text-[#FF671D]" />
          </div>
          <span className="text-[#8FA8BD] font-semibold tracking-wider uppercase text-base">
            DIRETORIA DE RELACIONAMENTO E INTELIGÊNCIA DE MERCADO
          </span>
        </motion.div>

        <div className="relative z-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-[#FF671D] mb-8 origin-left"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
          >
            Reunião de <br/>
            <span className="text-[#FF671D]">Diretoria</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#8FA8BD] text-xl max-w-sm leading-relaxed"
          >
            Alinhamento estratégico, evolução de indicadores e planejamento das iniciativas corporativas.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 text-[#4A6580] font-mono text-base tracking-widest uppercase"
        >
           VISÃO EXECUTIVA - DRM
        </motion.div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        
        {/* Glow principal da tela */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E2E0E] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        
        {/* Wireframe bg / Elementos estéticos */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1E4870 1px, transparent 1px), linear-gradient(90deg, #1E4870 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Glows radiais por baixo */}
          <div className="absolute w-80 h-80 rounded-full bg-[#6E2E0E] blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute w-48 h-48 rounded-full bg-[#FF671D] blur-[60px] opacity-10 pointer-events-none" />

          {/* Container dos anéis */}
          <div className="relative w-72 h-72 flex items-center justify-center">

            {/* Anel externo lento */}
            <div
              className="absolute inset-0 rounded-full opacity-20 animate-[spin_20s_linear_infinite]"
              style={{ border: '1px solid #FF671D' }}
            />

            {/* Anel médio com traço parcial */}
            <div
              className="absolute inset-4 rounded-full opacity-50 animate-[spin_10s_linear_infinite]"
              style={{
                borderTop: '1.5px solid #FF671D',
                borderRight: '1.5px solid transparent',
                borderBottom: '1.5px solid transparent',
                borderLeft: '1.5px solid transparent',
              }}
            />

            {/* Anel interno reverso */}
            <div
              className="absolute inset-10 rounded-full opacity-35 animate-[spin_6s_linear_infinite_reverse]"
              style={{
                borderBottom: '1.5px solid #FF671D',
                borderRight: '1.5px solid #6E2E0E',
                borderTop: '1.5px solid transparent',
                borderLeft: '1.5px solid transparent',
              }}
            />

            {/* Disco glassmorphism central */}
            <div
              className="absolute inset-14 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,103,29,0.06) 0%, rgba(196,83,26,0.03) 60%, transparent 100%)',
                border: '1px solid rgba(255,103,29,0.12)',
                boxShadow: '0 0 40px rgba(255,103,29,0.12), inset 0 0 30px rgba(196,83,26,0.08)',
              }}
            />

            {/* ── LOGO PRODAM (arte oficial branca) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative z-10 flex items-center justify-center"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255,103,29,0.45)) drop-shadow(0 0 14px rgba(255,103,29,0.20))',
              }}
            >
              <Image
                src={prodamLogoBranca}
                alt="PRODAM"
                width={180}
                height={54}
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}
