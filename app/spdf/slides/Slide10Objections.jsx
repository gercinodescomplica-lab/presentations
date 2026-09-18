import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide10Objections() {
  const objections = [
    {
      q: 'Why are you providing this for free? What is the catch?',
      tag: 'STRATEGIC TRANSPARENCY',
      a: 'There is no catch — it is an intentional presence strategy. Bronze replaces risky external sites at no cost to you and serves as our public showcase. Operating costs are fully funded by Silver and Gold clients, who generate a healthy 20% net margin.',
      color: '#2563eb',
    },
    {
      q: 'What if our agency never exceeds 400 documents per month?',
      tag: 'PERMANENT GUARANTEE',
      a: 'That is completely fine. Even without tier upgrades, you retain an official, secure, compliant tool forever without paying anything. For PRODAM, that permanent institutional footprint inside your agency is already high-value.',
      color: '#d97706',
    },
    {
      q: 'Does this mean you will stop supporting us if we stay on Bronze?',
      tag: 'OPERATIONAL INTEGRITY',
      a: 'No. Bronze is an official product backed by active engineering support. PRODAM infrastructure and engineering are shared across all tiers: expanding the active user base actually reduces unit operating costs across the municipal ecosystem.',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="COMMERCIAL PLAYBOOK · READY ANSWERS"
        title="Overcoming Common Objections with Full Clarity"
        subtitle="Transparent answers to disarm procurement doubts and accelerate immediate adoption"
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
                  ✦ Official Answer:
                </strong>
                &ldquo;{item.a}&rdquo;
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>PRODAM Active Support</span>
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}

