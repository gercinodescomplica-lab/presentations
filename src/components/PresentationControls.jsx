import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function PresentationControls({
  currentSlide,
  totalSlides,
  isPresenting,
  isFirst,
  isLast,
  nextSlide,
  prevSlide,
  goToSlide,
  togglePresentation,
}) {
  const { t } = useTranslation()
  return (
    <>
      {/* Bottom Navigation Bar */}
      <motion.div
        className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-opacity duration-500 ${
          isPresenting ? 'opacity-0 hover:opacity-100' : 'opacity-100'
        }`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {/* Left: Prev */}
        <motion.button
          onClick={prevSlide}
          disabled={isFirst}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
            isFirst
              ? 'border-white/5 text-white/20 cursor-not-allowed'
              : 'border-white/10 text-white/60 hover:text-white hover:border-[#2F80FF]/50 hover:bg-[#2F80FF]/10'
          }`}
        >
          <ChevronLeft />
          <span>{t('nav.prev')}</span>
        </motion.button>

        {/* Center: Slide dots + counter */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="relative group"
              >
                <motion.div
                  animate={{
                    width: i === currentSlide ? 24 : 6,
                    backgroundColor: i === currentSlide ? '#2F80FF' : 'rgba(255,255,255,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full"
                />
              </button>
            ))}
          </div>
          <span className="text-white/25 text-xs font-mono tracking-widest">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Right: Next / Start Presentation */}
        <div className="flex items-center gap-3">
          {!isPresenting ? (
            <motion.button
              onClick={togglePresentation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-[#2F80FF]/30 text-[#2F80FF] hover:bg-[#2F80FF]/10 transition-all duration-300 mr-2"
            >
              <FullscreenIcon />
              <span>{t('nav.present')}</span>
            </motion.button>
          ) : null}

          <motion.button
            onClick={nextSlide}
            disabled={isLast}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
              isLast
                ? 'border-white/5 text-white/20 cursor-not-allowed'
                : 'border-[#2F80FF]/30 bg-[#2F80FF]/10 text-[#2F80FF] hover:bg-[#2F80FF]/20 hover:border-[#2F80FF]/60'
            }`}
          >
            <span>{t('nav.next')}</span>
            <ChevronRight />
          </motion.button>
        </div>
      </motion.div>

      {/* Presentation mode indicator */}
      <AnimatePresence>
        {isPresenting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[#2F80FF] text-xs font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
            {t('nav.presenting')}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M1.5 1.5H5.5M1.5 1.5V5.5M1.5 1.5L5.5 5.5M13.5 1.5H9.5M13.5 1.5V5.5M13.5 1.5L9.5 5.5M1.5 13.5H5.5M1.5 13.5V9.5M1.5 13.5L5.5 9.5M13.5 13.5H9.5M13.5 13.5V9.5M13.5 13.5L9.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
