import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Phone, Globe } from 'lucide-react'
import Image from 'next/image'

import imgAibertinho from '@/assets/reuniao-diretoria/aibertinho.png'
import imgDani from '@/assets/reuniao-diretoria/dani.jpeg'
import imgGe from '@/assets/reuniao-diretoria/ge.jpeg'
import imgTiago from '@/assets/reuniao-diretoria/tiago.jpeg'

export default function Slide11Agradecimento() {
  const equipe = [
    { name: 'Albertinho', img: imgAibertinho },
    { name: 'Dani', img: imgDani },
    { name: 'Gê', img: imgGe },
    { name: 'Tiago', img: imgTiago }
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F172A] text-white overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#083540] blur-[150px] opacity-40 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 rounded-full bg-[#09DFAB]/10 text-[#09DFAB] border border-[#09DFAB]/30 mb-4 shadow-[0_0_30px_rgba(9,223,171,0.2)]"
        >
          <CheckCircle2 className="w-16 h-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl font-bold tracking-tight text-white mb-2"
          style={{ textShadow: '0 0 40px rgba(9,223,171,0.15)' }}
        >
          Obrigado!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#8BA0B4] text-2xl font-light">
            Diretoria de Relacionamento e Inteligência de Mercado
          </p>
          <div className="px-6 py-2 rounded-full border border-[#1E3A52] bg-[#0A1120]/80 backdrop-blur-sm">
            <span className="text-[#09DFAB] font-mono text-xl tracking-widest font-semibold">DRM</span>
          </div>
        </motion.div>
        
        {/* AVATARES DA EQUIPE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-10 mt-6"
        >
          {equipe.map((m, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 + idx * 0.1 }}
               className="flex flex-col items-center gap-4"
             >
               <div className="w-28 h-28 rounded-full overflow-hidden border-[3px] border-[#09DFAB]/40 shadow-[0_0_30px_rgba(9,223,171,0.15)] relative backdrop-blur-md bg-[#0C2D35]/50 flex items-center justify-center">
                 <Image 
                   src={m.img} 
                   alt={m.name} 
                   fill 
                   className="object-cover"
                   sizes="112px"
                   placeholder="blur"
                   priority
                   quality={80}
                 />
               </div>
               <span className="text-[#8BA0B4] font-medium tracking-wide text-xl">{m.name}</span>
             </motion.div>
          ))}
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="mt-14 flex gap-8 text-[#4A6580] font-mono text-xs uppercase tracking-widest"
        >
          
           <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#09DFAB]" /> prodam.sp.gov.br</div>
        </motion.div>
      </div>

    </div>
  )
}
