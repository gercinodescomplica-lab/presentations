import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', short: 'PT' },
  { code: 'en', label: 'English',   flag: '🇺🇸', short: 'EN' },
  { code: 'es', label: 'Español',   flag: '🇪🇸', short: 'ES' },
  { code: 'ru', label: 'Русский',   flag: '🇷🇺', short: 'RU' },
]

export default function LanguageSwitcher({ isPresenting }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (isPresenting) return null

  const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0]

  const select = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="fixed top-6 right-6 z-50">
      {/* Trigger */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all"
        style={{
          background: open ? 'rgba(47,128,255,0.12)' : 'rgba(11,15,20,0.85)',
          border: `1px solid ${open ? 'rgba(47,128,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
          backdropFilter: 'blur(16px)',
          color: open ? '#2F80FF' : 'rgba(255,255,255,0.6)',
        }}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="font-mono tracking-widest">{current.short}</span>
        <motion.svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] right-0 min-w-[160px] rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(8,12,18,0.96)',
              border: '1px solid rgba(47,128,255,0.14)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            {/* Top accent line */}
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(47,128,255,0.5), transparent)' }}
            />

            <div className="p-1.5">
              {LANGUAGES.map((lang, i) => {
                const isActive = lang.code === i18n.language
                return (
                  <motion.button
                    key={lang.code}
                    onClick={() => select(lang.code)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ x: 3 }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
                    style={{
                      background: isActive ? 'rgba(47,128,255,0.1)' : 'transparent',
                      color: isActive ? '#2F80FF' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="flex-1 text-left font-medium text-xs">{lang.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lang-active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-[#2F80FF]"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
