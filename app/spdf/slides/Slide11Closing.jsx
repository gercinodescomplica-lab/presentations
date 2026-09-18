import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide11Closing() {
  const steps = [
    {
      step: '01',
      title: 'Institutional Domain Setup',
      desc: 'Seamless federation with official government domains (@agency.gov) without requiring desktop installation.',
    },
    {
      step: '02',
      title: 'Immediate Bronze Access',
      desc: 'Instant provisioning for up to 1,000 public servants processing up to 400 documents/month with zero risk.',
    },
    {
      step: '03',
      title: 'Shadow IT Decommissioning',
      desc: 'Blacklist unsecure external websites (like iLovePDF) and transition workflow entirely to sovereign tech.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="CLOSING CALL · IMMEDIATE ACTIVATION"
        title="Zero Risk: An Activation, Not a Sales Pitch"
        subtitle="The immediate administrative step that eliminates agency document vulnerability starting today"
        accentColor="#16a34a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left Column: Core Closing Pitch Quote */}
        <div className="col-span-7 flex flex-col gap-5">
          <WhitePaperQuote
            quote="What I am proposing is not a sale — it is a free activation. You test SPDF in daily operations without cost and without a procurement process. If usage volume grows, we discuss Silver or Gold. If it does not, you continue using an institutional, compliant tool for free. There is no downside scenario here."
            author="Closing Script"
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
                Zero Budget Obstacles
              </div>
              <div className="text-xs text-emerald-700">
                No RFP bidding, no budget allocation, no contractual amendments needed to launch.
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              Instant Activation
            </span>
          </motion.div>
        </div>

        {/* Right Column: 3 Onboarding Steps */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-5 flex flex-col gap-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            How to start deployment today:
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

