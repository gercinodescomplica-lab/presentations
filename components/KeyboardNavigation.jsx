// Keyboard navigation is handled in usePresentation hook.
// This component is a hint overlay for keyboard shortcuts.
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function KeyboardNavigation({ isPresenting }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (isPresenting) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3"
        >
          {[
            { key: '←', label: 'Prev' },
            { key: '→', label: 'Next' },
            { key: 'F', label: 'Fullscreen' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center gap-1.5 text-white/30 text-xs">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 font-mono text-white/50">
                {key}
              </span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
