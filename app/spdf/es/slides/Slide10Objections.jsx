import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide10Objections() {
  const objections = [
    {
      q: '¿Por qué lo ofrecen gratis? ¿Dónde está el truco?',
      tag: 'TRANSPARENCIA ESTRATÉGICA',
      a: 'No hay ningún truco — es una estrategia deliberada de presencia institucional. El Bronce reemplaza sitios inseguros sin coste para ustedes y actúa como vitrina. La operación está financiada por los clientes Plata y Oro, con un margen neto del 20%.',
      color: '#2563eb',
    },
    {
      q: '¿Qué pasa si nuestro organismo nunca supera los 400 docs/mes?',
      tag: 'GARANTÍA PERMANENTE',
      a: 'No hay problema. Mantienen una solución oficial, segura y en cumplimiento de la normativa sin pagar nada. Para PRODAM, la presencia de marca permanente dentro de su entidad ya tiene un valor estratégico inmenso.',
      color: '#d97706',
    },
    {
      q: '¿Significa que suspenderán el soporte si seguimos en el plan gratuito?',
      tag: 'COMPROMISO OPERATIVO',
      a: 'En absoluto. El Bronce es un producto oficial con soporte activo. La infraestructura y el equipo técnico se comparten entre todos los usuarios: ampliar la base activa disminuye el costo unitario para todo el sector público.',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="MANUAL COMERCIAL · RESPUESTAS PREPARADAS"
        title="Superación de Objeciones con Total Transparencia"
        subtitle="Respuestas claras para disipar dudas de gestión y agilizar la adopción inmediata"
        accentColor="#d97706"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {objections.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 block w-fit mb-3">
                {item.tag}
              </span>

              <div className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-start gap-2">
                <span className="text-amber-600 font-black">?</span>
                <span>&ldquo;{item.q}&rdquo;</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1 font-mono uppercase text-[11px]">
                  ✦ Respuesta Oficial:
                </strong>
                &ldquo;{item.a}&rdquo;
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Soporte Oficial PRODAM</span>
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}

