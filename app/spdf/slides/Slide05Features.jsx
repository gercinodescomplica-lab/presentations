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

const features = [
  {
    label: 'Document Manipulation',
    desc: 'Merge, split, convert, compress, and reorganize PDFs instantly, entirely within your infrastructure.',
    color: '#2F80FF'
  },
  {
    label: 'Security & Protection',
    desc: 'Apply passwords, enforce permissions, and permanently redact sensitive information to comply with LGPD.',
    color: '#00E5FF'
  },
  {
    label: 'Intuitive UI',
    desc: 'Modern, smooth interfaces that require less than 2 hours of training to fully master.',
    color: '#7C3AED'
  },
  {
    label: 'Flexible Deployment',
    desc: 'Available for both strictly isolated On-Premises environments and managed Private Clouds.',
    color: '#00C9A7'
  }
]

export default function Slide05Features() {
  return (
    <SlideCardLight slideNum="05" label="KEY FEATURES">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2F80FF">FUNCTIONALITIES</TagLabelLight>
          <GradientTitleLight>Complete PDF Toolkit</GradientTitleLight>
          <SubtitleBarLight>Everything you need. Zero compromises.</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            SPDF replaces vulnerable online tools with a comprehensive enterprise-grade suite, 
            empowering public servants to manipulate documents quickly while keeping data safely stored on internal servers.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {features.map((feature, i) => (
            <ContentBlockLight key={feature.label} {...feature} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
