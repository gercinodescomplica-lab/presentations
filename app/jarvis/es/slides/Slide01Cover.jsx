import { motion } from 'framer-motion'
import { Bot, MessageCircle, Zap } from 'lucide-react'

const V = '#7C3AED'
const G = '#25D366'

const chat = [
  { from: 'user', text: '¿Qué contratos vencen este mes?' },
  { from: 'jarvis', text: '2 contratos vencen en abril:\n• SEGES — R$ 45,1M — vence 30/04\n• SGM — R$ 25,7M — vence 30/04' },
  { from: 'user', text: 'Recuérdame llamar a SEGES el viernes a las 9h' },
  { from: 'jarvis', text: '⏰ ¡Listo! Te avisaré el viernes a las 09:00.' },
]

export default function Slide01Cover() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(124,58,237,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.07)' }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(37,211,102,0.10) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-1/2 flex flex-col justify-center px-14 lg:px-16 py-14 gap-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', color: V }}>
              PRODAM · DRM · 2025
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="font-heading font-black leading-none tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}>
              Jarvis
            </h1>
          </motion.div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-40 h-[3px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${V}, ${G})` }} />

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-slate-500 font-light leading-relaxed max-w-sm">
            El asistente ejecutivo que vive en tu <strong className="text-slate-700 font-semibold">WhatsApp</strong>.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
            className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Sin nueva app. Sin nueva contraseña. Sin formación.<br />
            Solo envía un mensaje — o un audio.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex items-center gap-3 flex-wrap">
            {[{ icon: Bot, label: 'Gemini' }, { icon: MessageCircle, label: 'WhatsApp' }, { icon: Zap, label: 'Tiempo Real' }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500"
                style={{ background: '#F8FAFF', border: '1px solid rgba(0,0,0,0.07)' }}>
                <Icon size={13} style={{ color: V }} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex items-center justify-center px-10 py-10 relative z-10">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[360px] rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#075E54' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: V }}>J</div>
              <div>
                <div className="text-white text-sm font-semibold">Jarvis</div>
                <div className="text-white/60 text-[11px]">en línea</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 px-3 py-4" style={{ background: '#E5DDD5', minHeight: 280 }}>
              {chat.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed text-slate-800 whitespace-pre-line shadow-sm
                    ${msg.from === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}
                    style={{ background: msg.from === 'user' ? '#DCF8C6' : '#FFFFFF' }}>
                    {msg.from === 'jarvis' && <span className="block text-[10px] font-bold mb-0.5" style={{ color: V }}>Jarvis</span>}
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
