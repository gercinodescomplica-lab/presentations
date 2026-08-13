'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  FileText,
  TreePine,
  Bot,
  Search,
  Sparkles,
  BrainCircuit,
  ExternalLink,
  Play,
  X,
  Scale,
  Users,
  Cloud,
  Handshake,
  type LucideIcon,
} from 'lucide-react'

type Project = {
  id: string
  Icon: LucideIcon
  name: string
  tagline: string
  short: string
  long: string
  color: string
  href?: string
  hasVideo?: boolean
}

const projects: Project[] = [
  {
    id: 'spdf',
    Icon: FileText,
    name: 'SPDF',
    tagline: 'Secure PDF · Marketing Ativo',
    short:
      'PDFs seguros p/ setor público. Marketing ativo dentro do cliente via plano fremium.',
    long:
      'Plataforma de PDF segura, 100% interna, auditável e em conformidade com a LGPD. Estratégia comercial: marketing ativo dentro do próprio cliente através do plano fremium, exibindo propagandas direcionadas por perfil de cliente.',
    color: '#FF671D',
    href: '/spdf',
    hasVideo: true,
  },
  {
    id: 'smart-park',
    Icon: TreePine,
    name: 'Smart Park',
    tagline: 'Urbanismo Inteligente · IaaS',
    short: 'Praças abandonadas viram hubs inteligentes.',
    long:
      'Transformação de praças em hubs de dados, segurança e bem-estar urbano. Modelo IaaS gera receita recorrente para a prefeitura via sensores, iluminação, monitoramento e serviços conectados.',
    color: '#22c55e',
    href: '/smart-park',
  },
  {
    id: 'jarvis',
    Icon: Bot,
    name: 'Jarvis',
    tagline: 'IA Conversacional · WhatsApp',
    short: 'IA conectada às APIs corporativas via WhatsApp.',
    long:
      'Assistente conversacional que entrega dados corporativos em tempo real no WhatsApp. Integra com Outlook, faturamento, licitações e sistemas internos — experiência nativa e sem fricção.',
    color: '#F59E0B',
    href: '/jarvis',
  },
  {
    id: 'licit-monitor',
    Icon: Search,
    name: 'LicitMonitor',
    tagline: 'Automação · Licitações Públicas',
    short: 'Monitora, analisa e acompanha contratos vencendo automaticamente.',
    long:
      'Plataforma que consolida licitações públicas de múltiplas fontes, aplica IA para pontuar aderência e envia alertas — eliminando a busca manual site a site e acelerando o time-to-response.',
    color: '#FF8A47',
    href: 'https://licitmonitor.com',
  },
  {
    id: 'aibertinho',
    Icon: Sparkles,
    name: 'AIbertinho',
    tagline: 'DashBoard · Analytics',
    short: 'Analytics interno do time comercial.',
    long:
      'DashBoard que consolida informações de clientes e oportunidades, aplicando IA para priorizar e enviar alertas.',
    color: '#A8D4F0',
  },
  {
    id: 'vera-ai',
    Icon: BrainCircuit,
    name: 'Vera AI',
    tagline: 'Micro-projeto · Automações internas',
    short: 'Automações com IA para melhoria de fluxos internos.',
    long:
      'Micro-projeto que auxilia com automações de IA para melhoria de fluxos internos.',
    color: '#FF671D',
  },
  {
    id: 'pasda',
    Icon: Scale,
    name: 'PASDA',
    tagline: 'PGM · Dívida Ativa - 53.273.824 R$',
    short: 'Várias demandas de dívida ativa da PGM.',
    long:
      'Portfólio de demandas ligadas à Dívida Ativa da Procuradoria Geral do Município (PGM). Consolida frentes de cobrança, análise jurídica e acompanhamento processual sob uma mesma esteira operacional.',
    color: '#FF8A47',
  },
  {
    id: 'esocial',
    Icon: Users,
    name: 'eSocial & Contratos Gov',
    tagline: 'SEGES · Estabilizado',
    short: 'Sistema estabilizado após ciclo de correções.',
    long:
      'Projeto do eSocial junto à Secretaria de Gestão Municipal (SGM). Após ciclo de estabilização, opera em regime normal — foco agora migra de correções para evolução e monitoramento.',
    color: '#22c55e',
  },
  {
    id: 'ms-aws',
    Icon: Cloud,
    name: 'Microsoft & AWS',
    tagline: 'Cloud · Normalização de Processos',
    short: 'Tratativas de normalização de processos com os provedores cloud.',
    long:
      'Frente de trabalho para normalizar os processos operacionais e contratuais junto à Microsoft e AWS. Objetivo: previsibilidade de consumo, alinhamento de SLAs e governança unificada de nuvem.',
    color: '#A8D4F0',
  },
  {
    id: 'parcerias-ia',
    Icon: Handshake,
    name: 'Parcerias IA',
    tagline: 'Análise de Parceiros · Fluxo entre Áreas',
    short: 'Análise automatizada de parceiros com IA e controle de fluxo.',
    long:
      'Sistema de parcerias que analisa parceiros de forma automatizada com IA e orquestra o fluxo entre as áreas envolvidas na aprovação. Reduz atrito interno e acelera a materialização de novos acordos.',
    color: '#FF671D',
  },
]

/* ─────────────────────────────────────────── */
/*  Small square card (com tooltip on hover)   */
/* ─────────────────────────────────────────── */
function SmallCard({
  project,
  index,
  onHover,
  onOpenVideo,
}: {
  project: Project
  index: number
  onHover: (id: string | null) => void
  onOpenVideo: () => void
}) {
  const { Icon, name, tagline, color, href, hasVideo } = project
  const canNavigate = !!href
  const handleClick = () => {
    if (href) window.open(href, '_blank')
  }
  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onOpenVideo()
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.35 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={handleClick}
      className={`relative h-full flex flex-col items-center justify-center text-center gap-4 p-5 rounded-2xl border transition-all duration-300 group overflow-hidden ${
        canNavigate || hasVideo ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{
        background:
          'linear-gradient(155deg, rgba(0,43,72,0.85) 0%, rgba(0,31,53,0.9) 100%)',
        borderColor: `${color}30`,
        boxShadow: `0 0 0 1px ${color}10, inset 0 1px 0 rgba(255,255,255,0.03)`,
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 20px 40px -15px ${color}55, 0 0 0 1px ${color}70, inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
    >
      {/* Glow decoration */}
      <div
        className='absolute -top-16 -right-16 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500'
        style={{ background: color, filter: 'blur(50px)' }}
      />

      {/* Top-right video button (só SPDF) */}
      {hasVideo && (
        <button
          type='button'
          onClick={handleVideoClick}
          className='absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all hover:scale-110'
          style={{
            background: `${color}25`,
            border: `1px solid ${color}55`,
            color,
          }}
          aria-label='Ver vídeo'
        >
          <Play size={11} fill={color} style={{ color }} />
          <span className='text-[10px] font-mono font-bold uppercase tracking-wider'>vídeo</span>
        </button>
      )}

      {/* Icon */}
      <div
        className='relative w-20 h-20 rounded-2xl flex items-center justify-center shrink-0'
        style={{
          background: `${color}18`,
          border: `1px solid ${color}40`,
          boxShadow: `0 0 30px -5px ${color}60`,
        }}
      >
        <Icon size={38} style={{ color }} />
      </div>

      {/* Name */}
      <h4 className='font-bold text-white text-[20px] leading-tight w-full px-1'>
        {name}
      </h4>

      {/* Tagline */}
      <div
        className='text-[11px] font-mono uppercase tracking-widest leading-tight line-clamp-2 px-1'
        style={{ color: `${color}DD` }}
      >
        {tagline}
      </div>

      {/* Bottom accent bar */}
      <div
        className='absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500'
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.div>
  )
}

/* ─────────────────────────────────────────── */
/*  Tooltip flutuante (aparece ao hover)       */
/* ─────────────────────────────────────────── */
function HoverTooltip({ project }: { project: Project | null }) {
  return (
    <AnimatePresence mode='wait'>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className='absolute bottom-6 right-6 z-30 w-[420px] pointer-events-none rounded-2xl border p-5 shadow-2xl'
          style={{
            background:
              'linear-gradient(140deg, rgba(0,43,72,0.98) 0%, rgba(0,31,53,0.98) 100%)',
            borderColor: `${project.color}55`,
            boxShadow: `0 30px 80px -20px ${project.color}40, 0 0 0 1px ${project.color}30`,
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className='flex items-center gap-3 mb-3'>
            <div
              className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0'
              style={{ background: `${project.color}22`, border: `1px solid ${project.color}50` }}
            >
              <project.Icon size={22} style={{ color: project.color }} />
            </div>
            <div>
              <h5 className='font-bold text-white text-lg leading-none'>{project.name}</h5>
              <span className='text-[11px] font-mono tracking-wider' style={{ color: `${project.color}CC` }}>
                {project.tagline}
              </span>
            </div>
          </div>
          <div
            className='h-px w-full mb-3'
            style={{ background: `linear-gradient(90deg, ${project.color}50, transparent)` }}
          />
          <p className='text-[#C9D8E4] text-[13px] leading-relaxed'>{project.long}</p>
          {project.href && (
            <div className='flex items-center gap-2 mt-3 text-[11px] font-mono' style={{ color: project.color }}>
              <ExternalLink size={11} />
              Clique para abrir a apresentação
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────── */
/*  Slide                                       */
/* ─────────────────────────────────────────── */
export default function Slide03ProjetosDRM() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const hovered = projects.find((p) => p.id === hoveredId) || null

  return (
    <div className='w-full h-full flex bg-[#002B48] text-white overflow-hidden relative'>
      {/* Background glows */}
      <div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2A1005] blur-[150px] opacity-30 rounded-full pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#6E2E0E] blur-[200px] opacity-[0.04] pointer-events-none rounded-full' />

      {/* Grid pattern */}
      <div
        className='absolute inset-0 opacity-[0.02] pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(#1E4870 1px,transparent 1px),linear-gradient(90deg,#1E4870 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── LEFT PANEL ── */}
      <div
        className='w-[26%] h-full flex flex-col justify-center p-10 relative border-r border-[#1E4870] shrink-0'
        style={{ backgroundColor: '#001F35' }}
      >
        <div className='absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none' />

        <div className='relative z-10 flex flex-col gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className='text-[#FF671D] flex items-center font-mono text-sm uppercase tracking-widest gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#FF671D] animate-pulse' />
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
              style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
            >
              Projetos <br />
              <span className='text-[#FF671D]'>DRM</span>
            </h2>
            <p className='text-[#8FA8BD] text-base leading-relaxed'>
              Portfólio estratégico da DRM. Passe o mouse para detalhes ou clique
              para abrir a apresentação completa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='flex flex-col gap-2 mt-2'
          >
            <div className='flex items-center gap-2 text-xs font-mono text-[#8FA8BD]'>
              <div className='w-2 h-2 rounded-sm bg-[#FF671D]' />
              Destaque com deck completo
            </div>
            <div className='flex items-center gap-2 text-xs font-mono text-[#8FA8BD]'>
              <div className='w-2 h-2 rounded-sm bg-[#A8D4F0]' />
              Micro-projetos em incubação
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT PANEL: 5×2 uniform grid, preenche o espaço ── */}
      <div className='flex-1 h-full relative px-6 py-6 flex'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2E0E] blur-[200px] opacity-[0.04] pointer-events-none rounded-full' />

        <div className='relative z-10 grid grid-cols-5 grid-rows-2 gap-4 w-full h-full'>
          {projects.map((p, i) => (
            <SmallCard
              key={p.id}
              project={p}
              index={i}
              onHover={setHoveredId}
              onOpenVideo={() => setVideoOpen(true)}
            />
          ))}
        </div>

        {/* Floating tooltip */}
        {hovered && <HoverTooltip project={hovered} />}
      </div>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute inset-0 z-[100] flex items-center justify-center p-10'
            style={{ background: 'rgba(0,15,25,0.85)', backdropFilter: 'blur(10px)' }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className='relative rounded-2xl overflow-hidden flex items-center justify-center'
              style={{
                background: '#001F35',
                border: '1px solid rgba(255,103,29,0.4)',
                boxShadow: '0 30px 90px -20px rgba(255,103,29,0.35), 0 0 0 1px rgba(255,103,29,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type='button'
                onClick={() => setVideoOpen(false)}
                className='absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110'
                style={{
                  background: 'rgba(0,31,53,0.85)',
                  border: '1px solid rgba(255,103,29,0.4)',
                  color: '#FF671D',
                }}
                aria-label='Fechar vídeo'
              >
                <X size={18} />
              </button>
              <video
                src='/videos/spdf.mp4'
                controls
                autoPlay
                className='block bg-black'
                style={{ maxWidth: '1260px', maxHeight: '720px', width: 'auto', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
