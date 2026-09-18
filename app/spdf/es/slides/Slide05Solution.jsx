import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide05Solution() {
  const capabilities = [
    {
      icon: '🛡️',
      title: 'Soberanía y Alojamiento PRODAM',
      desc: 'Los documentos nunca abandonan los centros de datos públicos. Cifrado integral en reposo y en tránsito, garantizando máxima seguridad normativa.',
    },
    {
      icon: '⚡',
      title: 'Conjunto Integral de Productividad',
      desc: 'Unir, dividir, comprimir, convertir vía OCR, rotar, proteger y validar expedientes en segundos con una interfaz intuitiva y limpia.',
    },
    {
      icon: '📋',
      title: 'Registro Completo de Auditoría',
      desc: 'Trazabilidad absoluta: bitácoras auditables registran qué servidor procesó cada archivo, marcas temporales y estados de firma.',
      icon: '📊',
      title: 'Métricas y Conteo de Manipulaciones',
      desc: 'Contabilización precisa del volumen de operaciones (uniones, divisiones, conversiones) para control de consumo y gestión de planes — con total privacidad, sin leer, retener ni inspeccionar el contenido de los archivos.',
    },
    {
      icon: '📢',
      title: 'Canal de Medios y Presencia Institucional',
      desc: 'Espacio institucional configurable para comunicar campañas públicas, avisos de ciberseguridad y servicios directamente al empleado.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SOLUCIÓN INSTITUCIONAL · TECNOLOGÍA PÚBLICA"
        title="SPDF: La Alternativa Soberana y Aprobada"
        subtitle="Una plataforma corporativa diseñada específicamente para satisfacer las necesidades del sector público"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-center flex-1">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="col-span-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-slate-800 font-semibold text-base">{item.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}

