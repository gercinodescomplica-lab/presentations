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
import clAnimation from '../../assets/spdf-cl-animation.svg'

export default function Slide01aCampoLimpo() {
  return (
    <SlideCardLight slideNum="02" label="CASO REAL">
      <div className="flex h-full gap-8">
        <LeftPanelLight>
          <TagLabelLight color="#f59e0b">INCIDENTE</TagLabelLight>
          <GradientTitleLight>O Caso Campo Limpo</GradientTitleLight>
          <SubtitleBarLight>Quando o gratuito custa a segurança</SubtitleBarLight>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Um advogado ficou furioso ao descobrir que um atendente da unidade de Campo Limpo, do Descomplica SP, submeteu seus documentos privados ao <strong>iLovePDF</strong> para conversão.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Essa é uma prática extremamente comum e enraizada em diversas secretarias (como a SMIT), que inclusive estão pedindo ajuda para resolver essa vulnerabilidade de uma vez por todas.
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
              alt="Animação do incidente do iLovePDF" 
              className="w-full h-auto"
            />
          </motion.div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}
