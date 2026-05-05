import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'
import clAnimation from '../assets/spdf-cl-animation.svg'

export default function Slide01aCampoLimpo() {
  return (
    <SlideCardLight slideNum="02" label="REAL CASE">
      <div className="flex h-full gap-8">
        <LeftPanelLight>
          <TagLabelLight color="#f59e0b">INCIDENT</TagLabelLight>
          <GradientTitleLight>The Campo Limpo Case</GradientTitleLight>
          <SubtitleBarLight>When free tools cost your security</SubtitleBarLight>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              A lawyer was furious to discover that the Campo Limpo subprefecture had uploaded his private documents to <strong>iLovePDF</strong> for conversion.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              This is an extremely common practice across various departments (like SMIT), which are now urgently seeking help to resolve this vulnerability once and for all.
            </p>
          </div>
        </LeftPanelLight>

        <RightPanelLight className="justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-[600px] rounded-2xl overflow-hidden bg-white"
            style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
          >
            <Image 
              src={clAnimation} 
              alt="iLovePDF incident animation" 
              className="w-full h-auto"
            />
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
