import { motion } from 'framer-motion'

const V = '#7C3AED'

const conversations = [
  {
    label: 'Contract Intelligence',
    color: '#7C3AED',
    exchanges: [
      { from: 'user', text: 'Which contracts expire this month?' },
      { from: 'jarvis', text: '2 contracts expire in April:\n• SEGES — R$ 45.1M — due 04/30\n• SGM — R$ 25.7M — due 04/30' },
    ],
  },
  {
    label: 'Smart Reminders',
    color: '#25D366',
    exchanges: [
      { from: 'user', text: 'Remind me to call SEGES on Friday at 9am' },
      { from: 'jarvis', text: '⏰ Done! I\'ll remind you Friday at 09:00.' },
    ],
  },
  {
    label: 'Voice & Documents',
    color: '#F59E0B',
    exchanges: [
      { from: 'user', text: '[2-minute audio]', isAudio: true },
      { from: 'jarvis', text: '🎤 Transcribed & saved to memory.\n"Find the penalty clause in the FMS contract"\n→ Clause 14.3, page 28: "…"' },
    ],
  },
]

function Bubble({ msg, accentColor }) {
  const isUser = msg.from === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed text-slate-800 whitespace-pre-line shadow-sm
        ${isUser ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
        style={{ background: isUser ? '#DCF8C6' : '#FFFFFF', border: isUser ? 'none' : '1px solid rgba(0,0,0,0.06)' }}>
        {!isUser && <span className="block text-[10px] font-bold mb-0.5" style={{ color: accentColor }}>Jarvis</span>}
        {msg.isAudio ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: accentColor }}>
              <span className="text-white text-[8px]">▶</span>
            </div>
            <div className="flex gap-0.5 items-center h-4">
              {[3, 5, 7, 4, 6, 3, 8, 4, 6, 5, 3].map((h, i) => (
                <div key={i} className="w-0.5 rounded-full bg-slate-400" style={{ height: h * 2 }} />
              ))}
            </div>
            <span className="text-slate-500 text-[10px]">2:00</span>
          </div>
        ) : msg.text}
      </div>
    </div>
  )
}

export default function Slide04HowItWorks() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-[#F8FAFF] flex flex-col"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        {/* Header */}
        <div className="shrink-0 px-12 pt-10 pb-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="block text-xs font-mono font-bold tracking-[0.25em] uppercase mb-3" style={{ color: V }}>
            How It Works
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-heading font-bold text-slate-900 text-3xl">
            Just ask. In plain language. In any format.
          </motion.h2>
        </div>

        {/* 3 chat columns */}
        <div className="flex-1 min-h-0 flex gap-4 px-10 pb-10">
          {conversations.map((conv, ci) => (
            <motion.div key={conv.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + ci * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col rounded-2xl overflow-hidden shadow-sm"
              style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              {/* Chat header */}
              <div className="shrink-0 flex items-center gap-3 px-4 py-3" style={{ background: '#075E54' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: conv.color }}>J</div>
                <div>
                  <div className="text-white text-xs font-semibold">Jarvis</div>
                  <div className="text-white/50 text-[10px]">{conv.label}</div>
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 flex flex-col justify-center gap-2.5 px-3 py-4" style={{ background: '#E5DDD5' }}>
                {conv.exchanges.map((msg, mi) => (
                  <motion.div key={mi} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + ci * 0.15 + mi * 0.15 }}>
                    <Bubble msg={msg} accentColor={conv.color} />
                  </motion.div>
                ))}
              </div>
              {/* Label */}
              <div className="shrink-0 px-4 py-2.5 text-center"
                style={{ background: conv.color + '15', borderTop: `1px solid ${conv.color}25` }}>
                <span className="text-xs font-semibold" style={{ color: conv.color }}>{conv.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
