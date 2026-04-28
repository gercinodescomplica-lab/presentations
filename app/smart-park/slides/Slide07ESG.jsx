import { Users, TreePine, Building2 } from 'lucide-react'
import {
  EcoGardenCard,
  EcoGardenHeader,
  EcoGardenCardItem,
} from '@/templates/EcoGarden'

export default function Slide07ESG() {
  return (
    <EcoGardenCard>
      <div className="flex flex-col h-full px-14 lg:px-16 py-10 gap-6">
        <EcoGardenHeader
          eyebrow="Impact & Governance"
          title="ESG by Design"
          subtitle="Social · Environmental · Governance"
          color="#166534"
        />

        <div className="grid grid-cols-3 gap-4 flex-1">
          <EcoGardenCardItem
            icon={<Users size={20} />}
            title="Social"
            desc="Digital Inclusion: democratized high-speed internet access. Wayfinding Accessibility: tactile & audio maps via QR Code for the visually impaired."
            index={0}
            color="#4ADE80"
          />
          <EcoGardenCardItem
            icon={<TreePine size={20} />}
            title="Environmental"
            desc="Microclimate data guides the city on where to plant more trees. Reduces local temperature via intelligent irrigation & green coverage planning."
            index={1}
            color="#F59E0B"
          />
          <EcoGardenCardItem
            icon={<Building2 size={20} />}
            title="Governance"
            desc="Transparency Dashboard: citizens see real-time energy savings & air quality. Open data builds trust between government and community."
            index={2}
            color="#4ADE80"
          />
        </div>
      </div>
    </EcoGardenCard>
  )
}
