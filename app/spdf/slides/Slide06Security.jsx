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

const securityMeasures = [
  {
    label: 'Zero Data Exposure',
    desc: 'Processing stays localized on your servers. No public cloud handoffs, no internet-facing API transmissions.',
    color: '#FF4D4D'
  },
  {
    label: 'Auto-Delete Mechanics',
    desc: 'All uploaded and generated temporary files are automatically wiped after 1 hour or when the session closes.',
    color: '#FF8C00'
  },
  {
    label: '5-Year Audit Logs',
    desc: 'Persistent, detailed logs covering every document interaction, user data, and system modification for complete LGPD compliance.',
    color: '#00E5FF'
  },
  {
    label: 'Enterprise Encryption',
    desc: 'TLS 1.3 ensures safe data transit, coupled with at-rest encryption for temporary volumes.',
    color: '#7C3AED'
  }
]

export default function Slide06Security() {
  return (
    <SlideCardLight slideNum="06" label="SECURITY & COMPLIANCE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">LGPD COMPLIANT</TagLabelLight>
          <GradientTitleLight>Unhackable by Design</GradientTitleLight>
          <SubtitleBarLight>Total protection of sensitive public data</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            By avoiding third-party online processors, SPDF removes the principal vulnerability surface. 
            Coupled with aggressive data retention policies, your operations remain strictly compliant with Brazil's data protection requirements.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {securityMeasures.map((measure, i) => (
            <ContentBlockLight key={measure.label} {...measure} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
