import { motion } from 'framer-motion'
import { Database, Radio, Layers, MapPin, User } from 'lucide-react'

const concepts = [
  {
    icon: Database,
    title: 'Governo orientado por dados',
    desc: 'Todas as decisões de políticas públicas fundamentadas em evidências e métricas em tempo real.',
    color: '#09DFAB',
    x: '10%',
    y: '20%',
  },
  {
    icon: Radio,
    title: 'Serviços proativos',
    desc: 'O governo antecipa as necessidades do cidadão antes mesmo que ele precise solicitar.',
    color: '#04A8B0',
    x: '55%',
    y: '12%',
  },
  {
    icon: Layers,
    title: 'Plataformas integradas',
    desc: 'Infraestrutura tecnológica compartilhada entre todos os órgãos municipais.',
    color: '#04767F',
    x: '72%',
    y: '48%',
  },
  {
    icon: MapPin,
    title: 'Smart Cities',
    desc: 'Cidades inteligentes com sensores, dados e IA para gestão urbana em tempo real.',
    color: '#09DFAB',
    x: '15%',
    y: '62%',
  },
  {
    icon: User,
    title: 'Governo digital centrado no cidadão',
    desc: 'Design de serviços que coloca a experiência do cidadão no centro de tudo.',
    color: '#04A8B0',
    x: '42%',
    y: '72%',
  },
]

export default function Slide13Futuro() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#04767F] blur-[280px] opacity-[0.07] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 px-14 pt-10 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Bloco 5 · Futuro</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl font-bold leading-tight"
          style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
        >
          O futuro dos{' '}
          <span className="text-[#09DFAB]">serviços públicos</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base mt-1">
          Cinco tendências que vão redefinir como as cidades entregam valor aos seus cidadãos.
        </motion.p>
      </div>

      {/* Cards em posição flutuante */}
      <div className="relative z-10 flex-1 px-14 pb-10 grid grid-cols-3 gap-4 items-stretch">
        {concepts.slice(0, 3).map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.6 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: `${item.color}08`,
                border: `1px solid ${item.color}30`,
                boxShadow: `0 0 30px ${item.color}08`,
              }}
            >
              <div className="p-3 rounded-xl w-fit" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <Icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <p className="font-bold text-base" style={{ color: item.color }}>{item.title}</p>
              <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
            </motion.div>
          )
        })}

        {concepts.slice(3).map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.6 }}
              className="rounded-2xl p-6 flex flex-col gap-3 col-span-1"
              style={{
                background: `${item.color}08`,
                border: `1px solid ${item.color}30`,
                boxShadow: `0 0 30px ${item.color}08`,
                gridColumn: i === 0 ? '1 / 2' : '2 / 4',
              }}
            >
              <div className="p-3 rounded-xl w-fit" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <Icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <p className="font-bold text-base" style={{ color: item.color }}>{item.title}</p>
              <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
