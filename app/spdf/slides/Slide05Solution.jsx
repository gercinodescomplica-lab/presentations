import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide05Solution() {
  const capabilities = [
    {
      icon: '🛡️',
      title: 'Sovereignty & PRODAM Hosting',
      desc: 'Documents never leave municipal infrastructure. End-to-end encryption in transit and at rest, guaranteeing strict data protection compliance.',
    },
    {
      icon: '⚡',
      title: 'Comprehensive Productivity Suite',
      desc: 'Merge, split, compress, OCR convert, rotate, protect, and certify files in seconds through an intuitive, clean interface.',
    },
    {
      icon: '📋',
      title: 'Full Audit Logging',
      desc: 'Complete traceability: auditable logs record which user performed what operation, timestamps, and document validation states.',
    },
    {
      icon: '📢',
      title: 'Institutional Presence & Internal Media',
      desc: 'Customizable institutional canvas to broadcast notices, security updates, and new public services directly to civil servants.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="INSTITUTIONAL SOLUTION · PUBLIC TECH"
        title="SPDF: The Sovereign, Approved Alternative"
        subtitle="An enterprise document manipulation suite engineered specifically for public administration"
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

