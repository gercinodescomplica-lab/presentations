import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const tiers = [
  { name: 'Bronze', limit: 'Up to 500 docs/mo', price: 'R$ XXXX', color: '#94a3b8' },
  { name: 'Silver', limit: 'Up to X,XXX docs/mo', price: 'R$ XXXX', color: '#64748b' },
  { name: 'Gold', limit: 'Up to XX,XXX docs/mo', price: 'R$ XXXX', color: '#eab308' },
  { name: 'Diamond', limit: 'Unlimited scale', price: 'Custom', color: '#2563eb' },
]

export default function Slide09BusinessModel() {
  return (
    <SlideCardLight slideNum="09" label="COMMERCIALIZATION">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#1e40af">BUSINESS MODEL</TagLabelLight>
          <GradientTitleLight>SaaS Licensing</GradientTitleLight>
          <SubtitleBarLight>Flexible tiers priced by processing volume</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            SPDF generates recurring revenue through volume-based monthly subscriptions. This ensures scalability for smaller municipalities while providing unconstrained capabilities for larger federal entities.
          </p>
          
          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center border border-blue-100 text-xs text-blue-600 font-bold">✦</div>
               <span className="text-slate-600 font-semibold text-sm">Base SaaS Licensing</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center border border-blue-100 text-xs text-blue-600 font-bold">✦</div>
               <span className="text-slate-600 font-semibold text-sm">Implementation & Setup Services</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center border border-blue-100 text-xs text-blue-600 font-bold">✦</div>
               <span className="text-slate-600 font-semibold text-sm">Premium 24/7 Support</span>
             </div>
          </div>
        </LeftPanelLight>

        <RightPanelLight className="grid grid-cols-2 gap-4 flex-row">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex flex-col p-6 rounded-2xl relative overflow-hidden group bg-white h-auto"
              style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: tier.color, opacity: 0.9 }} />
              
              <div className="font-heading font-bold text-xl mb-1 mt-2" style={{ color: tier.color }}>{tier.name}</div>
              <div className="text-slate-400 font-bold text-xs font-mono uppercase tracking-wider mb-6">{tier.limit}</div>
              
              <div className="mt-auto">
                <div className="text-slate-300 font-bold text-[10px] uppercase tracking-widest mb-1">Monthly</div>
                <div className="font-heading font-bold text-2xl text-slate-800">{tier.price}</div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
