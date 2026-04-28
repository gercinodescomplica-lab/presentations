import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useRouter, usePathname } from 'next/navigation'

const LANGUAGES = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', short: 'PT' },
  { code: 'en', label: 'English',   flag: '🇺🇸', short: 'EN' },
  { code: 'es', label: 'Español',   flag: '🇪🇸', short: 'ES' },
  { code: 'zh', label: '中文',      flag: '🇨🇳', short: 'ZH' },
  { code: 'ru', label: 'Русский',   flag: '🇷🇺', short: 'RU' },
]

// Language codes that appear as URL suffixes (EN = root, no suffix)
const LANG_SUFFIXES = ['pt', 'es', 'zh', 'ru']

function getBaseRoute(pathname) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length > 0 && LANG_SUFFIXES.includes(parts[parts.length - 1])) {
    return '/' + parts.slice(0, -1).join('/')
  }
  return pathname
}

export default function LanguageSwitcher({ isPresenting, theme = 'dark' }) {
  const { i18n } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const isLight = theme === 'light'

  // Sync i18n with current URL lang suffix on mount
  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean)
    const last = parts[parts.length - 1]
    const urlLang = LANG_SUFFIXES.includes(last) ? last : 'en'
    if (i18n.language !== urlLang) i18n.changeLanguage(urlLang)
  }, [pathname]) // eslint-disable-line

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
    // Navigate to the language-specific route
    const base = getBaseRoute(pathname)
    const target = code === 'en' ? base : `${base}/${code}`
    router.push(target)
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all shadow-sm"
        style={{
          background: open ? (isLight ? 'white' : 'rgba(47,128,255,0.12)') : (isLight ? 'white' : 'rgba(11,15,20,0.85)'),
          border: `1px solid ${open ? (isLight ? '#2563eb' : 'rgba(47,128,255,0.4)') : (isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)')}`,
          backdropFilter: 'blur(16px)',
          color: open ? (isLight ? '#2563eb' : '#2F80FF') : (isLight ? '#475569' : 'rgba(255,255,255,0.6)'),
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

      {/* Dropdown — opens upward */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute bottom-[calc(100%+8px)] right-0 min-w-[160px] rounded-2xl overflow-hidden shadow-[0_16px_48px_-15px_rgba(0,0,0,0.1)] ${
              isLight ? 'bg-white border border-slate-200' : ''
            }`}
            style={isLight ? {} : {
              background: 'rgba(8,12,18,0.96)',
              border: '1px solid rgba(47,128,255,0.14)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            {/* Top accent line */}
            <div
              className="h-px w-full"
              style={{ background: isLight ? 'linear-gradient(90deg, transparent, #2563eb, transparent)' : 'linear-gradient(90deg, transparent, rgba(47,128,255,0.5), transparent)' }}
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
                      background: isActive ? (isLight ? '#eff6ff' : 'rgba(47,128,255,0.1)') : 'transparent',
                      color: isActive ? (isLight ? '#2563eb' : '#2F80FF') : (isLight ? '#64748b' : 'rgba(255,255,255,0.55)'),
                    }}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="flex-1 text-left font-medium text-xs">{lang.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lang-active-dot"
                        className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-blue-600' : 'bg-[#2F80FF]'}`}
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
