import { motion } from 'framer-motion'
import { History, Mic2, ShieldCheck, Users, Bell } from 'lucide-react'

const V = '#7C3AED'

const diffs = [
  { icon: History, color: '#7C3AED', title: 'Contexto Persistente', desc: 'Jarvis recuerda lo que se dijo en conversaciones anteriores. Nunca necesitas repetir el contexto — retoma donde lo dejaste.' },
  { icon: Mic2, color: '#25D366', title: 'Voz Nativa', desc: 'Habla en lugar de escribir. Jarvis transcribe, entiende y responde — sin fricción, sin pasos extra.' },
  { icon: ShieldCheck, color: '#0EA5E9', title: 'Siempre Correcto', desc: 'Cada respuesta proviene de una fuente real — API, base de datos o documento indexado. Si tiene dudas, lo dice.' },
  { icon: Users, color: '#F59E0B', title: 'Soporte a Grupos', desc: 'Agrega a Jarvis a grupos de WhatsApp. Responde cuando lo mencionas con @Jarvis — ideal para coordinación de equipos.' },
  { icon: Bell, color: '#EF4444', title: 'Recordatorios Inteligentes', desc: '"Recuérdame firmar el additivo de SMADS el martes a las 14h" — Jarvis lanza la alerta en el momento exacto, incluso sin conexión.' },
]

export default function Slide07Differentiators() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-[35%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-5 border-r border-slate-100 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: V }}>
            Diferenciadores
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
            Por qué Jarvis es diferente
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="flex items-center gap-3">
            <div className="h-[3px] w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${V}, #25D366)` }} />
            <span className="text-slate-400 text-sm tracking-wide">No es un chatbot. Es un ejecutivo.</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="text-slate-500 text-sm leading-relaxed">
            La mayoría de las herramientas de IA responden preguntas genéricas. Jarvis conoce los datos de tu empresa, tu historial y tu agenda — y entrega respuestas que realmente importan.
          </motion.p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3.5 relative z-10">
          {diffs.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: d.color + '08', border: `1px solid ${d.color}18` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: d.color + '15' }}>
                <d.icon size={18} style={{ color: d.color }} />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-0.5">{d.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{d.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
