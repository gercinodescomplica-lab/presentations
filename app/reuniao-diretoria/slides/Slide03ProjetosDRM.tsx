'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  TreePine,
  Bot,
  Search,
  ExternalLink,
  Clock,
} from 'lucide-react'

const projects = [
  {
    id: 'spdf',
    Icon: FileText,
    name: 'SPDF',
    tagline: 'Secure PDF · Setor Público',
    description:
      'Processamento seguro e eficiente de documentos PDF para o setor público. 100% interno, auditável e em conformidade com a LGPD.',
    color: '#2563EB',
    href: '/spdf',
  },
  {
    id: 'smart-park',
    Icon: TreePine,
    name: 'Smart Park',
    tagline: 'Urbanismo Inteligente · IaaS',
    description:
      'Transformação de praças abandonadas em hubs inteligentes de dados, segurança e bem-estar urbano — receita para a prefeitura.',
    color: '#22c55e',
    href: '/smart-park',
  },
  {
    id: 'javis',
    Icon: Bot,
    name: 'Javis',
    tagline: 'IA Conversacional · WhatsApp',
    description:
      'Robô de IA conectado às APIs da empresa. Entrega dados corporativos em tempo real com experiência conversacional nativa no WhatsApp.',
    color: '#F59E0B',
    href: '/jarvis',
  },
  {
    id: 'licit-monitor',
    Icon: Search,
    name: 'LicitMonitor',
    tagline: 'Automação · Licitações Públicas',
    description:
      'Plataforma que consolida, analisa e acompanha licitações automaticamente — eliminando busca manual site a site.',
    color: '#09DFAB',
    href: 'https://licitmonitor.com',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { Icon, name, tagline, description, color, href } = project
  const canNavigate = !!href

  const handleClick = () => {
    if (href) window.open(href, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={handleClick}
      className={`relative flex flex-col gap-5 p-7 rounded-2xl border transition-all duration-300 group h-full ${
        canNavigate ? 'cursor-pointer hover:scale-[1.01]' : 'cursor-default'
      }`}
      style={{
        background: '#0A1120',
        borderColor: `${color}25`,
        boxShadow: `0 0 0 1px ${color}10`,
      }}
      whileHover={
        canNavigate
          ? { boxShadow: `0 0 30px ${color}20, 0 0 0 1px ${color}30` }
          : {}
      }
    >
      {/* Top row: icon + name + status */}
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-4'>
          <div
            className='w-14 h-14 rounded-2xl flex items-center justify-center shrink-0'
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon size={28} style={{ color }} />
          </div>
          <div>
            <h3 className='font-bold text-white text-2xl leading-tight'>
              {name}
            </h3>
            <span
              className='text-[13px] font-mono tracking-wide'
              style={{ color: `${color}CC` }}
            >
              {tagline}
            </span>
          </div>
        </div>

        {canNavigate ? (
          <div
            className='flex items-center gap-2 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity'
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            <ExternalLink size={13} style={{ color }} />
            <span className='text-[12px] font-mono font-semibold' style={{ color }}>
              Ver
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Divider */}
      <div
        className='h-px w-full'
        style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }}
      />

      {/* Description */}
      <p className='text-[#8BA0B4] text-[15px] leading-relaxed flex-1'>
        {description}
      </p>

      {/* Bottom CTA */}
      {canNavigate && (
        <div
          className='flex items-center gap-2 text-[13px] font-mono font-semibold opacity-60 group-hover:opacity-100 transition-opacity'
          style={{ color }}
        >
          <ExternalLink size={14} />
          Abrir apresentação
        </div>
      )}
    </motion.div>
  )
}

export default function Slide03ProjetosDRM() {
  return (
    <div className='w-full h-full flex bg-[#0F172A] text-white overflow-hidden relative'>
      {/* Background glows */}
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#083540] blur-[150px] opacity-30 rounded-full pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.04] pointer-events-none rounded-full' />

      {/* Grid pattern */}
      <div
        className='absolute inset-0 opacity-[0.02] pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── LEFT PANEL ── */}
      <div
        className='w-[28%] h-full flex flex-col justify-center p-10 relative border-r border-[#1E3A52] shrink-0'
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className='absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none' />

        <div className='relative z-10 flex flex-col gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className='text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse' />
              SLIDE 03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2
              className='text-5xl font-bold leading-tight mb-5'
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              Projetos <br />
              <span className='text-[#09DFAB]'>DRM</span>
            </h2>
            <p className='text-[#8BA0B4] text-lg leading-relaxed'>
              Iniciativas estratégicas em andamento. Clique em um projeto para
              abrir a apresentação completa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='flex flex-col gap-2 mt-2'
          >
            <div className='flex items-center gap-2 text-sm font-mono text-[#8BA0B4]'>
              <div className='w-2 h-2 rounded-full bg-[#09DFAB]' />
              Com apresentação disponível
            </div>
            <div className='flex items-center gap-2 text-sm font-mono text-[#8BA0B4]'>
              <div className='w-2 h-2 rounded-full bg-[#F59E0B]' />
              Em desenvolvimento
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT PANEL: 2×2 GRID ── */}
      <div className='flex-1 h-full relative px-8 py-8 flex'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.04] pointer-events-none rounded-full' />

        <div className='relative z-10 grid grid-cols-2 gap-5 w-full h-full'>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
