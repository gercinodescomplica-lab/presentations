import { motion } from 'framer-motion'
import {
  EcoGardenCard,
  EcoGardenHeader,
  EcoGardenCardItem,
} from '@/templates/EcoGarden'
import { Server, Shield, Wifi } from 'lucide-react'

export default function Slide04Solution() {
  const layers = [
    {
      title: 'The Edge — Hardware Layer',
      items: ['Smart Poles with dimmable LED (Zigbee/LoRaWAN)', 'Micro-local weather stations (PM2.5, NO₂, CO₂, noise)', 'Precision irrigation with soil sensors (40% water savings)'],
      color: '#166534',
      icon: <Server size={20} />,
    },
    {
      title: 'Security & AI Layer',
      items: ['Computer Vision: non-invasive pattern detection', 'Digital Panic Button: bidirectional emergency totems', 'Real-time risk behavior & abandoned object alerts'],
      color: '#d97706',
      icon: <Shield size={20} />,
    },
    {
      title: 'Connectivity Layer',
      items: ['Wi-Fi 6 coverage for citizens', '5G-ready small cell infrastructure', 'Revenue opportunity for telecom operators'],
      color: '#166534',
      icon: <Wifi size={20} />,
    },
  ]

  return (
    <EcoGardenCard>
      <div className="flex flex-col h-full px-14 lg:px-16 py-10 gap-6">
        <EcoGardenHeader
          eyebrow="Solution Deep Dive"
          title="Three-Layer Architecture"
          subtitle="Hardware · AI · Connectivity"
          color="#166534"
        />

        <div className="grid grid-cols-3 gap-4 flex-1">
          {layers.map((layer, i) => (
            <EcoGardenCardItem
              key={layer.title}
              title={layer.title}
              desc={
                <>
                  {layer.items.map((item, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      <span className="inline-block w-1 h-1 rounded-full mr-2 align-middle" style={{ background: layer.color }} />
                      {item}
                    </span>
                  ))}
                </>
              }
              color={layer.color}
              icon={layer.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </EcoGardenCard>
  )
}
