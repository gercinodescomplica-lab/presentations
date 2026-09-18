import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperNumbered } from '@/templates/WhitePaper'

export default function Slide04Problem() {
  const problems = [
    {
      number: '01',
      title: 'Shadow IT y Herramientas Web Gratuitas',
      desc: 'Para unir informes o proteger decretos, los funcionarios públicos suben rutinariamente documentos oficiales a procesadores web no homologados.',
      color: '#dc2626',
    },
    {
      number: '02',
      title: 'Servidores en el Extranjero y Riesgo Normativo',
      desc: 'Archivos que contienen identificaciones y datos sensibles viajan por centros de datos fuera del país sin acuerdos de confidencialidad, violando normativas de privacidad.',
      color: '#ea580c',
    },
    {
      number: '03',
      title: 'Licenciamiento Comercial Inviable',
      desc: 'Comprar licencias privativas de suites como Adobe Acrobat para miles de funcionarios públicos es fiscalmente inasumible para el presupuesto público.',
      color: '#475569',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="DIAGNÓSTICO · VULNERABILIDAD INSTITUCIONAL"
        title="El Coste Oculto de lo 'Gratuito' Externo"
        subtitle="Por qué herramientas como iLovePDF constituyen un punto ciego crítico en la gestión pública"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-10 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-6">
          {problems.map((prob, i) => (
            <WhitePaperNumbered
              key={prob.number}
              number={prob.number}
              title={prob.title}
              desc={prob.desc}
              accentColor={prob.color}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/60 pb-3">
            La Paradoja del Sector Público
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="p-3 rounded-lg bg-red-100/60 border border-red-200/70 text-slate-700">
              <span className="font-semibold text-red-800 block text-xs uppercase font-mono mb-0.5">
                Escenario Actual (Shadow IT)
              </span>
              Datos gubernamentales expuestos en servidores extranjeros sin auditoría y bajo riesgo constante de filtración.
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 border border-emerald-200/70 text-slate-700">
              <span className="font-semibold text-emerald-800 block text-xs uppercase font-mono mb-0.5">
                Escenario Objetivo (SPDF)
              </span>
              Infraestructura pública soberana, trazabilidad integral, cumplimiento estricto y cero costo de entrada.
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

