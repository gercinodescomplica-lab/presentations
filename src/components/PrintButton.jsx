import { createPortal } from 'react-dom'
import { motion, MotionConfig } from 'framer-motion'

function PrintIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M4 4V2.5C4 2.22 4.22 2 4.5 2h6c.28 0 .5.22.5.5V4M4 11H2.5C2.22 11 2 10.78 2 10.5v-5c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5H11M4 8.5h7V13H4V8.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PrintButton({ slides, isPresenting }) {
  if (isPresenting) return null

  return (
    <>
      {/* Trigger button — positioned to the left of the language switcher */}
      <motion.button
        onClick={() => window.print()}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="fixed top-6 z-50 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all"
        style={{
          right: '9rem',            /* sits left of the language switcher at right-6 */
          background: 'rgba(11,15,20,0.85)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          color: 'rgba(255,255,255,0.6)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = '#2F80FF'
          e.currentTarget.style.borderColor = 'rgba(47,128,255,0.4)'
          e.currentTarget.style.background = 'rgba(47,128,255,0.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.background = 'rgba(11,15,20,0.85)'
        }}
      >
        <PrintIcon />
        <span className="font-mono tracking-widest">PDF</span>
      </motion.button>

      {/* Hidden print container — always mounted, shown only @media print.
          MotionConfig reducedMotion="always" skips initial→animate transitions
          so every slide renders fully opaque immediately. */}
      {createPortal(
        <div className="print-only">
          <MotionConfig reducedMotion="always">
            {slides.map((Slide, i) => (
              <div key={i} className="print-slide-page">
                <Slide />
              </div>
            ))}
          </MotionConfig>
        </div>,
        document.body,
      )}
    </>
  )
}
