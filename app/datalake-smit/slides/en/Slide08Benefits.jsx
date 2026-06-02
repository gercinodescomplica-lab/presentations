'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const GREEN = '#00C896'
const AMBER = '#F59E0B'

const benefits = [
  {
    icon: '📉',
    color: GREEN,
    title: 'Cost Reduction',
    headline: 'Up to 40% lower TCO',
    desc: 'Microsoft sponsorship includes discounted Azure credits, eliminating infrastructure procurement costs and enabling a pay-as-you-grow model.',
    tags: ['Azure Credits', 'Elastic Infra', 'No Capex'],
  },
  {
    icon: '⚡',
    color: BLUE,
    title: 'Accelerated Delivery',
    headline: '3× faster deployment',
    desc: 'Pre-built government data platform templates, proven architectures from 50+ city deployments worldwide, and dedicated Microsoft FastTrack engineers.',
    tags: ['FastTrack', 'Gov Templates', 'Jump-start'],
  },
  {
    icon: '🛠️',
    color: CYAN,
    title: 'Technical Support',
    headline: 'Dedicated engineering team',
    desc: 'Microsoft assigns a City Partner team — resident architects, data engineers, and security specialists — available throughout implementation and beyond.',
    tags: ['On-site Support', 'SLA Backed', '24/7'],
  },
  {
    icon: '🌍',
    color: AMBER,
    title: 'Global Expertise',
    headline: 'Proven at city scale',
    desc: 'Leverage lessons from Helsinki, Singapore, and New York — cities that built smart data infrastructure with Azure — adapted to São Paulo\'s regulatory context.',
    tags: ['Best Practices', 'Gov Use Cases', 'Global Refs'],
  },
]

export default function Slide08Benefits() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: CYAN }}>
              Partnership Benefits
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35 }}
              className="font-heading font-bold" style={{ color: '#0D1B3E' }} style={{ fontSize: '1.9rem' }}>
              What Microsoft brings to the table
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 flex-1 grid grid-cols-4 gap-0">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-7 relative overflow-hidden border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 w-full h-32 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${b.color}06 0%, transparent 70%)` }} />

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${b.color}12`, border: `1px solid ${b.color}25` }}>
                {b.icon}
              </div>

              <div>
                <div className="text-xs font-mono font-bold tracking-wider mb-1" style={{ color: b.color }}>{b.title}</div>
                <div className="font-heading font-bold leading-tight mb-2" style={{ fontSize: '1.1rem' }}>{b.headline}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{b.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {b.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>08 · BENEFITS</span>
        </div>
      </motion.div>
    </div>
  )
}
