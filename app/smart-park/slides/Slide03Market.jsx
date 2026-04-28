import { motion } from 'framer-motion'
import {
  EcoGardenCard,
  EcoGardenHeader,
  EcoGardenStat,
  EcoGardenCardItem,
} from '@/templates/EcoGarden'
import { TrendingUp, Cpu, Building2 } from 'lucide-react'

export default function Slide03Market() {
  const trends = [
    {
      title: 'ESG (Environmental, Social, and Governance)',
      desc: 'Companies need tangible projects to invest impact capital.',
      color: '#166534',
    },
    {
      title: 'Edge Computing',
      desc: 'On-site sensor processing reduces latency for public safety.',
      color: '#d97706',
    },
    {
      title: 'Urban Resilience',
      desc: 'Cities must monitor microclimates to fight heat islands.',
      color: '#166534',
    },
  ]

  return (
    <EcoGardenCard>
      <div className='flex flex-col h-full px-14 lg:px-16 py-10 gap-6'>
        <EcoGardenHeader
          eyebrow='Market Analysis'
          title='Global Trends, Local Impact'
          subtitle='Smart Cities · Urbanization · Sustainability'
          color='#166534'
        />

        <div className='flex gap-10 py-4'>
          <EcoGardenStat
            value='$2.5T'
            label='Smart Cities Market by 2026'
            color='#166534'
            index={0}
          />
          <EcoGardenStat
            value='80%'
            label='Urban Population in Brazil'
            color='#d97706'
            index={1}
          />
          <EcoGardenStat
            value='3'
            label='Macro Trends Addressed'
            color='#166534'
            index={2}
          />
        </div>

        <div
          className='h-px w-full'
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(22,101,52,0.12), transparent)',
          }}
        />

        <div className='grid grid-cols-3 gap-4 flex-1'>
          {trends.map((trend, i) => (
            <EcoGardenCardItem
              key={trend.title}
              title={trend.title}
              desc={trend.desc}
              color={trend.color}
              index={i}
              icon={
                i === 0 ? (
                  <TrendingUp size={20} />
                ) : i === 1 ? (
                  <Cpu size={20} />
                ) : (
                  <Building2 size={20} />
                )
              }
            />
          ))}
        </div>
      </div>
    </EcoGardenCard>
  )
}
