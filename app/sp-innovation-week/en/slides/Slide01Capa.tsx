import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'

export default function Slide01CapaEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[32%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-3 relative z-10">
          <div className="p-2 bg-[#0C2D35] border border-[#035E65] rounded-xl flex items-center justify-center">
            <Hexagon className="w-6 h-6 text-[#09DFAB]" />
          </div>
          <span className="text-[#8BA0B4] font-semibold tracking-wider uppercase text-sm leading-tight">PRODAM · SP INNOVATION WEEK</span>
        </motion.div>
        <div className="relative z-10 mb-16">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-16 h-1 bg-[#09DFAB] mb-8 origin-left" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-5xl font-bold leading-tight mb-6" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
            Digital<br /><span className="text-[#09DFAB]">Transformation</span><br />&amp; Integration
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#8BA0B4] text-lg max-w-sm leading-relaxed">
            Digitalization, interoperability and new models of public governance.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative z-10 text-[#4A6580] font-mono text-xs tracking-widest uppercase">PRODAM · 2026</motion.div>
      </div>
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px, transparent 1px), linear-gradient(90deg, #1E3A52 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 flex flex-col items-center justify-center gap-10">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute w-80 h-80 rounded-full bg-[#04767F] blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" style={{ border: '1px solid #09DFAB' }} />
            <div className="absolute inset-4 rounded-full opacity-50 animate-[spin_10s_linear_infinite]" style={{ borderTop: '1.5px solid #09DFAB', borderRight: '1.5px solid transparent', borderBottom: '1.5px solid transparent', borderLeft: '1.5px solid transparent' }} />
            <div className="absolute inset-10 rounded-full opacity-35 animate-[spin_6s_linear_infinite_reverse]" style={{ borderBottom: '1.5px solid #09DFAB', borderRight: '1.5px solid #04767F', borderTop: '1.5px solid transparent', borderLeft: '1.5px solid transparent' }} />
            <div className="absolute inset-14 rounded-full" style={{ background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, rgba(4,118,127,0.03) 60%, transparent 100%)', border: '1px solid rgba(9,223,171,0.12)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
              <svg viewBox="0 0 603 524" width="110" height="96" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 4px rgba(9,223,171,0.55))' }}>
                <defs><linearGradient id="en-capa-teal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#09DFAB" /><stop offset="55%" stopColor="#04767F" /><stop offset="100%" stopColor="#035E65" /></linearGradient></defs>
                <path d="M0 0 C1.88331904 -0.00445668 1.88331904 -0.00445668 3.80468494 -0.0090034 C7.26901109 -0.01701894 10.73331646 -0.01885991 14.19765079 -0.01960087 C17.94217722 -0.02146094 21.68669311 -0.0290129 25.43121338 -0.03573608 C33.60904411 -0.04928027 41.78686992 -0.05533776 49.96471 -0.05974674 C55.07642771 -0.06251531 60.18814355 -0.06675372 65.29986 -0.07125092 C79.46907145 -0.08343754 93.6382814 -0.09373865 107.80749798 -0.09712601 C136.36438308 -0.10441044 151.14327246 -0.12186406 165.92219212 -0.145152 C181.11669334 -0.16890046 196.31116984 -0.18132941 211.50568992 -0.18249393 C220.02834344 -0.18340862 228.55093262 -0.18910922 237.07356834 -0.20731354 C244.3310496 -0.22276164 251.58844662 -0.22780725 258.84594121 -0.21957543 C285.49254721 -0.25146413 C302.33833476 -0.15010357 316.86820377 4.11253724 329.14326477 15.93731689 C342.63367992 29.81961742 346.35560843 43.16089142 346.75654602 56.64044189 C334.33796692 102.01412964 C327.06855774 121.21794128 315.23121643 152.82800293 302.70328135 186.48306171 C259.77920532 301.69180298 C232.31904602 359.14044189 215.99599797 378.33828997 C195.04126493 388.59966499 173.31904602 391.14044189 150.98725891 391.31744385 C36.25124354 391.50318859 C-52.80654907 391.62818909 -62.11673738 391.59336762 -72.52079773 385.28106689 C-65.5554657 338.97735596 C-51.41142273 302.52325439 -11.21781921 282.70806885 C55.58991045 282.47900218 C160.31904602 282.14044189 C206.43232727 157.73419189 C225.31904602 108.14044189 C-3.68095398 108.14044189 C-40.52470398 208.38262939 C-59.83720398 259.89044189 C-137.09718323 465.8862915 C-152.13122089 507.98517666 C-188.09892273 524.63653564 C-229.98755455 524.57989311 C-252.99345398 517.64044189 C-250.80595398 484.32794189 C-203.08423996 357.57128143 C-147.07197571 208.37399292 C-104.2339325 94.14379883 C-52.20364113 7.16176843 C-26.49083179 -0.01974274 0 0 0 0 Z" fill="url(#en-capa-teal)" transform="translate(256.6809539794922,-0.14044189453125)" />
              </svg>
            </motion.div>
          </div>
          <div className="flex items-center gap-4">
            {['Digitalization', 'Interoperability', 'Public AI'].map((tag, i) => (
              <motion.div key={tag} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.1 }} className="px-3 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase" style={{ border: '1px solid rgba(9,223,171,0.25)', background: 'rgba(9,223,171,0.05)', color: '#09DFAB' }}>
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
