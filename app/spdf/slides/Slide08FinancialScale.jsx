import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide08FinancialScale() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ROI SIMULATION · SUSTAINABILITY"
        title="Economies of Scale & Projected Scenario"
        subtitle="How a lean initial client base self-finances rapid public sector expansion"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {/* Left Column: Simulated Scenario Box */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="col-span-6 p-7 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Simulated Operational Scenario
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">
                5 Silver + 1 Gold
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Gross Monthly Revenue</div>
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                  R$ 75,543<span className="text-xl font-normal text-slate-400">.00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">5 × R$ 12,086.87 + 1 × R$ 15,108.58</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Net Monthly Income</div>
                <div className="text-3xl font-heading font-bold text-emerald-400">
                  R$ 15,109<span className="text-lg font-normal text-emerald-600">.00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">20% net margin after taxes and all operational costs</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-4 leading-relaxed">
            ✦ In this scenario, paid contracts fully absorb infrastructure overhead and fund multiple simultaneous free Bronze deployments.
          </div>
        </motion.div>

        {/* Right Column: Key Economic Arguments */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col justify-between gap-4"
        >
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <span>01</span> Ongoing Cost Dilution
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Shared Infrastructure & Engineering</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              PRODAM servers and support engineers are existing assets. As customer volume scales, the marginal unit cost per processed document steadily decreases.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
              <span>02</span> Zero CAC on Tier Upgrade
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">The Agency is Already Onboarded</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Every active Bronze agency is a pre-qualified candidate for Silver or Gold. When processing exceeds 400 docs, upgrade requires zero customer acquisition cost.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
              <span>03</span> Sustainable Technological Evolution
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Reinvestment in Product Capabilities</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              The steady 20% net margin provides the resources to continually enhance SPDF with advanced cryptographic signatures, AI OCR, and workflow automation.
            </p>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

