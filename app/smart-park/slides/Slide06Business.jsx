import {
  EcoGardenCard,
  EcoGardenHeader,
  EcoGardenCardItem,
  EcoGardenStat,
} from '@/templates/EcoGarden'

export default function Slide06Business() {
  return (
    <EcoGardenCard>
      <div className="flex flex-col h-full px-14 lg:px-16 py-10 gap-6">
        <EcoGardenHeader
          eyebrow="Hybrid Revenue Model"
          title="PPP 2.0 Financing"
          subtitle="From Cost Center to Revenue Generator"
          color="#166534"
        />

        <div className="grid grid-cols-3 gap-4">
          <EcoGardenCardItem
            title="Naming Rights"
            desc="Brands buy rights to name the space or specific areas. Impact: High cash predictability."
            index={0}
          />
          <EcoGardenCardItem
            title="Data Monetization"
            desc="Sell aggregated non-sensitive foot traffic data to local commerce. Impact: Technology ROI."
            index={1}
            color="#d97706"
          />
          <EcoGardenCardItem
            title="Private O&M"
            desc="Partner assumes 100% of maintenance (cleaning & lighting). Impact: Immediate budget relief."
            index={2}
          />
        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(22,101,52,0.12), transparent)' }} />

        <div className="flex gap-10 items-center">
          <EcoGardenStat value="65%" label="Energy bill reduction via automation" color="#166534" index={0} />
          <EcoGardenStat value="30%" label="Repair cost reduction via active surveillance" color="#d97706" index={1} />
        </div>
      </div>
    </EcoGardenCard>
  )
}
