import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide11Closing() {
  const steps = [
    {
      step: '01',
      title: 'Habilitación de Dominio',
      desc: 'Integración fluida con el dominio institucional (@organismo.gov) sin necesidad de instalación de software local.',
    },
    {
      step: '02',
      title: 'Acceso Inmediato al Plan Bronce',
      desc: 'Habilitación instantánea para hasta 1.000 funcionarios y 400 documentos/mes con cero riesgo financiero.',
    },
    {
      step: '03',
      title: 'Desactivación de Shadow IT',
      desc: 'Bloqueo de portales externos inseguros y migración definitiva de la rutina operativa a la plataforma soberana.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="CIERRE COMERCIAL · ACTIVACIÓN INMEDIATA"
        title="Cero Riesgo: Una Activación, No una Venta"
        subtitle="El paso administrativo directo que resuelve el pasivo de seguridad documental desde hoy"
        accentColor="#16a34a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-5">
          <WhitePaperQuote
            quote="Lo que propongo no es una venta — es una activación gratuita. Prueban SPDF en el día a día, sin coste y sin proceso de contratación. Si el volumen crece, conversamos sobre Plata u Oro. Si no crece, continúan con una solución institucional homologada, gratis. No existe escenario desfavorable."
            author="Guion de Cierre"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold text-emerald-900 uppercase">
                Decisión Libre de Trabas Presupuestarias
              </div>
              <div className="text-xs text-emerald-700">
                Sin licitaciones, sin asignaciones presupuestarias ni adendas contractuales para iniciar.
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              Activación Inmediata
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-5 flex flex-col gap-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Cómo activar el servicio hoy mismo:
          </div>

          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

