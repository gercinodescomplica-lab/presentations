import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide03CentralPitch() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SALES THESIS · THE PITCH HOOK"
        title="Bronze is Not Sold: It is Deployed"
        subtitle="Strategic zero-cost tier as an institutional acquisition investment and persistent brand presence"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left: Central Quote + Opening line */}
        <div className="col-span-6 flex flex-col gap-6">
          <WhitePaperQuote
            quote="SPDF is not a product we sell. It is a product we place inside the agency — and let it sell itself."
            author="Positioning Guideline"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/70"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 block mb-1">
              Suggested Opening Line
            </span>
            <p className="text-slate-700 text-sm leading-relaxed italic">
              &ldquo;Today your staff is likely already using iLovePDF or similar tools to merge, split, and secure official documents — outside institutional control, without PRODAM supervision, and risking LGPD violations. We want to solve this at zero cost for you.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Right: 3 Value Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Why free Bronze is an investment, not charity:
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Direct Institutional Presence</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Every civil servant using Bronze instead of external sites solidifies PRODAM authority and presence within the agency.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Zero-Cost Internal Media Channel</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                The SPDF UI serves as an internal broadcast channel to promote other PRODAM platforms, services, and campaigns directly to staff.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Natural Organic Conversion</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                The agency is already active within the ecosystem; once document volume crosses 400 docs/month, the upgrade to Silver/Gold happens smoothly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

