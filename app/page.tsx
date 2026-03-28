'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { LucideIcon, Layers, Database, Smartphone, LayoutDashboard, ChevronRight, Briefcase } from 'lucide-react'

// You mentioned creating folders for Digital Twin, Data Lake, Smart App, Super App
const PRESENTATIONS = [
  {
    id: 'reuniao-diretoria',
    title: 'Reunião de Diretoria',
    description: 'Acompanhamento corporativo executivo, comercial e implantação de complexidade.',
    gradient: 'from-teal-900 via-teal-600 to-teal-400',
    icon: Briefcase,
    href: '/reuniao-diretoria',
    slideCount: 6,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin',
    description: 'Arquitetura e conceitos base para representação virtual da cidade e sensoriamento.',
    gradient: 'from-blue-500 via-cyan-400 to-emerald-400',
    icon: Layers,
    href: '/digital-twin',
    slideCount: 15, // Example
  },
  {
    id: 'data-lake',
    title: 'Data Lake',
    description: 'Centralização, governança e processamento de dados massivos.',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    icon: Database,
    href: '/data-lake',
    slideCount: 0,
  },
  {
    id: 'smart-app',
    title: 'Smart App',
    description: 'Aplicativo inteligente com recursos de IA para o cidadão.',
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    icon: Smartphone,
    href: '/smart-app',
    slideCount: 0,
  },
  {
    id: 'super-app',
    title: 'Super App',
    description: 'Hub de serviços integrados e mini-apps centralizados.',
    gradient: 'from-rose-500 via-red-500 to-orange-500',
    icon: LayoutDashboard,
    href: '/super-app',
    slideCount: 0,
  },
]

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] selection:bg-blue-500/30 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500 blur-[120px] rounded-full mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Corporate Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            DRM Presentations
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Selecione uma das apresentações abaixo. Cada card representa um módulo da nossa arquitetura corporativa e navega para um projeto dedicado.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {PRESENTATIONS.map((presentation, index) => {
            const Icon = presentation.icon

            return (
              <motion.div
                key={presentation.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(presentation.href)}
                className="group relative cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-br ${presentation.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Card Base */}
                <div className="relative h-full flex flex-col p-8 rounded-[24px] bg-[#0A0A0A] border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden">
                  
                  {/* Decorative Gradient Background inside card */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${presentation.gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500 rounded-full`} />

                  <div className="flex justify-between items-start mb-12">
                     <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${presentation.gradient} p-[1px]`}>
                       <div className="w-full h-full bg-[#0A0A0A] rounded-2xl flex items-center justify-center">
                         <Icon className="w-6 h-6 text-white" />
                       </div>
                     </div>

                     <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <ChevronRight className="w-5 h-5 text-white/70" />
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors">
                        {presentation.title}
                      </h3>
                      {presentation.slideCount > 0 && (
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/5">
                          {presentation.slideCount} Slides
                        </span>
                      )}
                    </div>
                    <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors">
                      {presentation.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
