import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
  ContentBlockLight,
} from '@/components/SlideLayoutLight'

const risks = [
  {
    label: 'Technical Complexity',
    desc: 'Handling very large PDFs or corrupted formats efficiently without memory leaks.',
    color: '#FF4D4D' // Red
  },
  {
    label: 'Market Resistance',
    desc: 'Public bodies may be slow to migrate away from familiar (albeit unsafe) internet tools.',
    color: '#FF8C00' // Orange
  },
  {
    label: 'Regulatory Shifts',
    desc: 'Changes in the LGPD might enforce even stricter rules, demanding architectural pivots.',
    color: '#FFD700' // Yellow
  },
  {
    label: 'Business Viability',
    desc: 'R&D costs may exceed estimates if specialized external security consultants are required.',
    color: '#2F80FF' // Blue
  }
]

export default function Slide11Risks() {
  return (
    <SlideCardLight slideNum="11" label="RISK ANALYSIS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">VULNERABILITIES</TagLabelLight>
          <GradientTitleLight>Identified Risks</GradientTitleLight>
          <SubtitleBarLight>Technical, market, and operational challenges</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Every software venture carries inherent execution risk. By proactively addressing these factors, the SPDF team can allocate resources effectively to mitigate exposure and guarantee our 6-month break-even strategy.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {risks.map((risk, i) => (
            <ContentBlockLight key={risk.label} {...risk} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
