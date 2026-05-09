import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'

export default function Slide15FechamentoEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[32%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 relative z-10">
          <div className="p-2 bg-[#0C2D35] border border-[#035E65] rounded-xl flex items-center justify-center"><Hexagon className="w-6 h-6 text-[#09DFAB]" /></div>
          <span className="text-[#8BA0B4] font-semibold tracking-wider uppercase text-sm">PRODAM · SP INNOVATION WEEK</span>
        </motion.div>
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-16 h-1 bg-[#09DFAB] mb-8 origin-left" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-4xl font-bold leading-tight mb-6" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>Thank you.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#8BA0B4] text-base leading-relaxed">Technology only makes sense when it brings<br />government and society closer together.</motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative z-10 text-[#4A6580] font-mono text-xs tracking-widest uppercase">PRODAM · 2026</motion.div>
      </div>
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px, transparent 1px), linear-gradient(90deg, #1E3A52 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="relative z-10 flex flex-col items-center gap-12">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" style={{ border: '1px solid #09DFAB' }} />
            <div className="absolute inset-4 rounded-full opacity-50 animate-[spin_10s_linear_infinite]" style={{ borderTop: '1.5px solid #09DFAB', borderRight: '1.5px solid transparent', borderBottom: '1.5px solid transparent', borderLeft: '1.5px solid transparent' }} />
            <div className="absolute inset-10 rounded-full opacity-35 animate-[spin_6s_linear_infinite_reverse]" style={{ borderBottom: '1.5px solid #09DFAB', borderRight: '1.5px solid #04767F', borderTop: '1.5px solid transparent', borderLeft: '1.5px solid transparent' }} />
            <div className="absolute inset-14 rounded-full" style={{ background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, rgba(4,118,127,0.03) 60%, transparent 100%)', border: '1px solid rgba(9,223,171,0.12)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
              <svg viewBox="0 0 603 524" width="96" height="84" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 4px rgba(9,223,171,0.55))' }}>
                <defs><linearGradient id="en-fech-teal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#09DFAB" /><stop offset="55%" stopColor="#04767F" /><stop offset="100%" stopColor="#035E65" /></linearGradient></defs>
                <path d="M0 0 C1.88331904 -0.00445668 3.80468494 -0.0090034 7.26901109 -0.01701894 C14.19765079 -0.01960087 25.43121338 -0.03573608 49.96471 -0.05974674 C79.46907145 -0.08343754 107.80749798 -0.09712601 165.92219212 -0.145152 C211.50568992 -0.18249393 237.07356834 -0.20731354 258.84594121 -0.21957543 C285.49254721 -0.25146413 302.33833476 -0.15010357 329.14326477 15.93731689 C342.63367992 29.81961742 346.75654602 56.64044189 334.33796692 102.01412964 C302.70328135 186.48306171 259.77920532 301.69180298 215.99599797 378.33828997 C173.31904602 391.14044189 36.25124354 391.50318859 -72.52079773 385.28106689 C-65.5554657 338.97735596 -11.21781921 282.70806885 160.31904602 282.14044189 C206.43232727 157.73419189 225.31904602 108.14044189 -3.68095398 108.14044189 C-40.52470398 208.38262939 -59.83720398 259.89044189 -152.13122089 507.98517666 C-188.09892273 524.63653564 -252.99345398 517.64044189 -250.80595398 484.32794189 C-147.07197571 208.37399292 -52.20364113 7.16176843 -26.49083179 -0.01974274 Z" fill="url(#en-fech-teal)" transform="translate(256.6809539794922,-0.14044189453125)" />
              </svg>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="text-center px-8">
            <p className="text-2xl font-bold leading-snug mb-3">"Digitally transforming the public sector</p>
            <p className="text-2xl font-bold leading-snug text-[#09DFAB]">is transforming the citizen's experience."</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#09DFAB] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-[#09DFAB]">SP Innovation Week · 2026</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
