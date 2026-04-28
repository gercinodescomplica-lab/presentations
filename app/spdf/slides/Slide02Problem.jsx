import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const problems = [
  {
    icon: '⚠️',
    title: 'Shadow IT & Online PDF Tools',
    desc: 'Public servants routinely upload confidential documents to free online services (like iLovePDF) to split, merge, or convert files.',
    color: '#e11d48', // Red
  },
  {
    icon: '📄',
    title: 'LGPD Non-Compliance',
    desc: 'Using third-party external processors exposes municipal and citizen data, violating Brazil\'s General Data Protection Law.',
    color: '#f59e0b', // Amber/Yellow
  },
  {
    icon: '💸',
    title: 'Expensive Commercial Licenses',
    desc: 'Providing Adobe Acrobat or similar premium tools for every public servant is financially unviable for municipalities.',
    color: '#2563eb', // Blue
  },
]

export default function Slide02Problem() {
  return (
    <SlideCardLight slideNum="02" label="THE PROBLEM">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#e11d48">VULNERABILITY</TagLabelLight>
          <GradientTitleLight>The Data Leak Blindspot</GradientTitleLight>
          <SubtitleBarLight>Everyday convenience vs. Data Security</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            The lack of a fast, native tool to manipulate PDF files creates a severe shadow IT problem. Public bodies are unknowingly externalizing sensitive documents.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="gap-5">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="flex gap-4 p-5 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: `${prob.color}15`, border: `1px solid ${prob.color}30` }}
              >
                {prob.icon}
              </div>
              <div className="flex flex-col gap-1.5 self-center">
                <h3 className="font-heading font-bold text-sm text-slate-800">{prob.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
