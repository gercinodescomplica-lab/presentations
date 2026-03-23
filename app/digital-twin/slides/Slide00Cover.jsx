import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import logoPrefeitura from '@/assets/LOGO_PREFEITURADESAOPAULO_HORIZONTAL_COLORIDO_PARAFUNDOCLARO_PT.png'
import logoProdam from '@/assets/logo-prodam.png'
import cityImage from '@/assets/ditital_twin_sp.png'

function PulsingDot({ color = '#2F80FF' }) {
  return (
    <span className="relative flex w-2 h-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full w-2 h-2" style={{ backgroundColor: color }} />
    </span>
  )
}

export default function Slide00Cover() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{
          background: 'linear-gradient(135deg, #0a1120 0%, #080e18 50%, #060c14 100%)',
          border: '1px solid rgba(47,128,255,0.12)',
          boxShadow: [
            '0 0 0 1px rgba(47,128,255,0.06)',
            '0 0 80px rgba(47,128,255,0.08)',
            '0 0 200px rgba(0,0,0,0.9)',
            'inset 0 1px 0 rgba(255,255,255,0.04)',
          ].join(', '),
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(47,128,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* City image — full background, very dark */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          <motion.img
            src={cityImage.src}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.03, opacity: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            style={{ filter: 'saturate(0.3) brightness(0.18) contrast(1.1)' }}
          />
          {/* Strong left-side darkening so left content is readable */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(100deg, #080e18 0%, rgba(8,14,24,0.97) 35%, rgba(8,14,24,0.6) 65%, rgba(8,14,24,0.2) 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(8,14,24,0.6) 0%, transparent 20%, transparent 80%, rgba(8,14,24,0.6) 100%)',
          }} />
        </div>

        {/* Ambient glow left */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 60% at 25% 55%, rgba(47,128,255,0.07) 0%, transparent 70%)',
        }} />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(47,128,255,0.3) 35%, rgba(0,229,255,0.2) 65%, transparent)',
            filter: 'blur(0.5px)',
          }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />

        {/* Corner brackets */}
        {[
          'top-5 left-5 border-t-2 border-l-2',
          'top-5 right-5 border-t-2 border-r-2',
          'bottom-5 left-5 border-b-2 border-l-2',
          'bottom-5 right-5 border-b-2 border-r-2',
        ].map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
            className={`absolute w-7 h-7 ${cls} pointer-events-none`}
            style={{ borderColor: 'rgba(47,128,255,0.35)' }}
          />
        ))}

        {/* Vertical divider */}
        <div
          className="absolute top-12 bottom-12 z-10 pointer-events-none"
          style={{
            left: '50%',
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(47,128,255,0.2) 20%, rgba(47,128,255,0.2) 80%, transparent)',
          }}
        />

        {/* ── LEFT PANEL — TwinSP content ── */}
        <div className="relative z-10 w-1/2 flex-shrink-0 flex flex-col justify-between px-14 py-12">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                border: '1px solid rgba(47,128,255,0.35)',
                background: 'rgba(47,128,255,0.08)',
                color: '#2F80FF',
              }}
            >
              <PulsingDot color="#2F80FF" />
              {t('slide00.badge')}
            </div>
          </motion.div>

          {/* Title block */}
          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(4.5rem, 9vw, 8rem)',
                background: 'linear-gradient(135deg, #ffffff 20%, rgba(47,128,255,0.95) 60%, #00E5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 35px rgba(47,128,255,0.22))',
              }}
            >
              TwinSP
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-40 h-px origin-left"
              style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF, transparent)' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-light text-xl tracking-widest text-white/45 uppercase"
            >
              {t('slide00.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/35 text-sm leading-relaxed max-w-xs font-light"
            >
              {t('slide00.tagline')}
            </motion.p>
          </div>

          {/* Powered by PRODAM */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">{t('slide00.poweredBy')}</span>
            <div className="h-4 w-px bg-white/10" />
            <img
              src={logoProdam.src}
              alt="PRODAM"
              className="h-6 w-auto"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.6 }}
            />
          </motion.div>
        </div>

        {/* ── RIGHT PANEL — Prefeitura SP logo, large and prominent ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 px-14">

          {/* Logo container — glassmorphism, generous size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center p-8 rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.11)',
              backdropFilter: 'blur(24px) saturate(2)',
              WebkitBackdropFilter: 'blur(24px) saturate(2)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: [
                'inset 0 1px 0 rgba(255,255,255,0.15)',
                '0 8px 40px rgba(0,0,0,0.4)',
                '0 0 60px rgba(47,128,255,0.06)',
              ].join(', '),
            }}
          >
            <img
              src={logoPrefeitura.src}
              alt="Prefeitura de São Paulo"
              className="w-full max-w-[320px] h-auto"
            />
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
            <p className="text-white/50 text-sm font-light tracking-wide">
              {t('slide00.project')}
            </p>
          </motion.div>
        </div>

        {/* Bottom version strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <span className="text-white/12 text-[9px] font-mono tracking-widest">
            v1.0 · DRM / PRODAM · SÃO PAULO · 2025
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
