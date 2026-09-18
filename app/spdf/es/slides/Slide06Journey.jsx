import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide06Journey() {
  const steps = [
    {
      num: '01',
      tag: 'ETAPA 1 · ENTRADA',
      title: 'Adquisición',
      subtitle: 'Plan Bronce Gratuito',
      desc: 'Ofrecido proactivamente a áreas de TI, secretarías y organismos. Hasta 400 documentos/mes y hasta 1.000 usuarios. Cero burocracia, sin licitación ni partida previa.',
      badge: 'Costo $0',
      color: '#d97706',
    },
    {
      num: '02',
      tag: 'ETAPA 2 · RUTINA',
      title: 'Consolidación',
      subtitle: 'Adopción Operativa',
      desc: 'El personal opera en SPDF cotidianamente. Cada uso refuerza la seguridad institucional, elimina convertidores externos y consolida una dependencia operativa sana.',
      badge: 'Hábito y Seguridad',
      color: '#2563eb',
    },
    {
      num: '03',
      tag: 'ETAPA 3 · ESCALA',
      title: 'Conversión',
      subtitle: 'Mejora Orgánica',
      desc: 'Al superar los 400 documentos/mes, la transición a Plata u Oro es consecuencia directa del volumen de trabajo. La escala de uso vende el plan, no el vendedor.',
      badge: 'Ingreso Recurrente',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ESTRUCTURA DEL PITCH COMERCIAL"
        title="La Jornada de Adopción en 3 Etapas"
        subtitle="'El volumen de uso vende el plan de pago — no el vendedor'"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-wider" style={{ color: step.color }}>
                  {step.tag}
                </span>
                <span className="text-2xl font-heading font-black text-slate-200">
                  {step.num}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-800 mb-0.5">{step.title}</h3>
              <div className="text-xs font-semibold text-slate-500 mb-3">{step.subtitle}</div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">{step.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-600">{step.badge}</span>
              <div className="w-2 h-2 rounded-full" style={{ background: step.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}

