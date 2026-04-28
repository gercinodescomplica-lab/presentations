import { motion } from 'framer-motion'
import { MessageCircle, BookOpen, Mail, FileText, BarChart3, File } from 'lucide-react'

const V = '#7C3AED'

const integrations = [
  { icon: MessageCircle, name: 'WhatsApp', sub: 'Evolution API', desc: 'Text, audio, PDFs — the primary channel', color: '#25D366' },
  { icon: BookOpen, name: 'Notion', sub: 'Projects API', desc: 'Projects, tasks, status, deadlines', color: '#000000' },
  { icon: Mail, name: 'Microsoft 365', sub: 'MS Graph', desc: 'Calendar, meetings, emails', color: '#0078D4' },
  { icon: FileText, name: 'Contracts', sub: 'Internal System', desc: 'Values, deadlines, managers, objects', color: '#7C3AED' },
  { icon: BarChart3, name: 'DRM Dashboard', sub: 'Commercial', desc: 'Goals, forecast, pipeline, CX', color: '#F59E0B' },
  { icon: File, name: 'Documents', sub: 'PDF Semantic Search', desc: 'Indexed and searchable content', color: '#EF4444' },
]

export default function Slide05Integrations() {
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
            Native Integrations
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
            Connected to what matters
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="flex items-center gap-3">
            <div className="h-[3px] w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${V}, #25D366)` }} />
            <span className="text-slate-400 text-sm tracking-wide">6 systems, one conversation</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="text-slate-500 text-sm leading-relaxed">
            Jarvis connects directly to your critical systems — no copy-paste, no manual lookup. Every answer comes from a live, authoritative source.
          </motion.p>
        </div>

        {/* RIGHT — 2×3 grid */}
        <div className="flex-1 flex items-center justify-center px-10 py-12 relative z-10">
          <div className="grid grid-cols-2 gap-4 w-full">
            {integrations.map((it, i) => (
              <motion.div key={it.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 p-4 rounded-2xl"
                style={{ background: '#FAFBFF', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: it.color + '15', border: `1px solid ${it.color}20` }}>
                  <it.icon size={18} style={{ color: it.color }} />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{it.name}</div>
                  <div className="text-xs font-mono text-slate-400 mb-0.5">{it.sub}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{it.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
