import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'

export default function Slide1() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-[#FFFFFF] overflow-hidden">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div 
        className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]"
        style={{ backgroundColor: '#0A1120' }}
      >
        {/* Glow decorativo sutil no painel */}
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 relative z-10"
        >
          <div className="p-2 bg-[#0C2D35] border border-[#035E65] rounded-xl flex items-center justify-center">
            <Hexagon className="w-6 h-6 text-[#09DFAB]" />
          </div>
          <span className="text-[#8BA0B4] font-semibold tracking-wider uppercase text-base">
            DIRETORIA DE RELACIONAMENTO E INTELIGÊNCIA DE MERCADO
          </span>
        </motion.div>

        <div className="relative z-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-[#09DFAB] mb-8 origin-left"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
          >
            Reunião de <br/>
            <span className="text-[#09DFAB]">Diretoria</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#8BA0B4] text-xl max-w-sm leading-relaxed"
          >
            Alinhamento estratégico, evolução de indicadores e planejamento das iniciativas corporativas.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-10 text-[#4A6580] font-mono text-base tracking-widest uppercase"
        >
           VISÃO EXECUTIVA - DRM
        </motion.div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        
        {/* Glow principal da tela */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        
        {/* Wireframe bg / Elementos estéticos */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1E3A52 1px, transparent 1px), linear-gradient(90deg, #1E3A52 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Glows radiais por baixo */}
          <div className="absolute w-80 h-80 rounded-full bg-[#04767F] blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute w-48 h-48 rounded-full bg-[#09DFAB] blur-[60px] opacity-10 pointer-events-none" />

          {/* Container dos anéis */}
          <div className="relative w-72 h-72 flex items-center justify-center">

            {/* Anel externo lento */}
            <div
              className="absolute inset-0 rounded-full opacity-20 animate-[spin_20s_linear_infinite]"
              style={{ border: '1px solid #09DFAB' }}
            />

            {/* Anel médio com traço parcial */}
            <div
              className="absolute inset-4 rounded-full opacity-50 animate-[spin_10s_linear_infinite]"
              style={{
                borderTop: '1.5px solid #09DFAB',
                borderRight: '1.5px solid transparent',
                borderBottom: '1.5px solid transparent',
                borderLeft: '1.5px solid transparent',
              }}
            />

            {/* Anel interno reverso */}
            <div
              className="absolute inset-10 rounded-full opacity-35 animate-[spin_6s_linear_infinite_reverse]"
              style={{
                borderBottom: '1.5px solid #09DFAB',
                borderRight: '1.5px solid #04767F',
                borderTop: '1.5px solid transparent',
                borderLeft: '1.5px solid transparent',
              }}
            />

            {/* Disco glassmorphism central */}
            <div
              className="absolute inset-14 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, rgba(4,118,127,0.03) 60%, transparent 100%)',
                border: '1px solid rgba(9,223,171,0.12)',
                boxShadow: '0 0 40px rgba(9,223,171,0.12), inset 0 0 30px rgba(4,118,127,0.08)',
              }}
            />

            {/* ── LOGO PRODAM inline SVG com gradiente teal ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative z-10 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 603 524"
                width="110"
                height="96"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(9,223,171,0.55)) drop-shadow(0 0 10px rgba(4,118,127,0.3))',
                }}
              >
                <defs>
                  <linearGradient id="prodam-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#09DFAB" />
                    <stop offset="55%" stopColor="#04767F" />
                    <stop offset="100%" stopColor="#035E65" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 0 C1.88331904 -0.00445668 1.88331904 -0.00445668 3.80468494 -0.0090034 C7.26901109 -0.01701894 10.73331646 -0.01885991 14.19765079 -0.01960087 C17.94217722 -0.02146094 21.68669311 -0.0290129 25.43121338 -0.03573608 C33.60904411 -0.04928027 41.78686992 -0.05533776 49.96471 -0.05974674 C55.07642771 -0.06251531 60.18814355 -0.06675372 65.29986 -0.07125092 C79.46907145 -0.08343754 93.6382814 -0.09373865 107.80749798 -0.09712601 C109.16602744 -0.09745536 109.16602744 -0.09745536 110.55200194 -0.09779136 C111.91366392 -0.09811878 111.91366392 -0.09811878 113.30283421 -0.09845281 C115.14214114 -0.09889626 116.98144807 -0.09934283 118.820755 -0.09979248 C119.73310249 -0.10001391 120.64544998 -0.10023534 121.58544437 -0.10046348 C136.36438308 -0.10441044 151.14327246 -0.12186406 165.92219212 -0.145152 C181.11669334 -0.16890046 196.31116984 -0.18132941 211.50568992 -0.18249393 C220.02834344 -0.18340862 228.55093262 -0.18910922 237.07356834 -0.20731354 C244.3310496 -0.22276164 251.58844662 -0.22780725 258.84594121 -0.21957543 C262.54391324 -0.21568579 266.24171588 -0.2165154 269.93966675 -0.23063278 C273.96095625 -0.24584327 277.981869 -0.23745569 282.00317383 -0.22705078 C283.15466705 -0.23510719 284.30616026 -0.24316359 285.49254721 -0.25146413 C302.33833476 -0.15010357 316.86820377 4.11253724 329.14326477 15.93731689 C342.63367992 29.81961742 346.35560843 43.16089142 346.75654602 56.64044189 C346.96961926 73.35142203 339.46261786 88.56918344 334.33796692 102.01412964 C327.06855774 121.21794128 315.23121643 152.82800293 302.70328135 186.48306171 C291.91941833 215.39285278 276.08293152 257.90402222 259.77920532 301.69180298 C247.77077539 334.08917308 232.31904602 359.14044189 215.99599797 378.33828997 C195.04126493 388.59966499 173.31904602 391.14044189 150.98725891 391.31744385 C128.87708923 391.36875096 80.84688663 391.42982197 36.25124354 391.50318859 C12.93635814 391.55393895 -18.34283257 391.59392738 -36.79340553 391.611166 C-52.80654907 391.62818909 -62.11673738 391.59336762 -72.52079773 385.28106689 C-75.71393047 379.78115143 -76.08988953 368.65338135 -65.5554657 338.97735596 C-51.41142273 302.52325439 -35.17449951 284.58152771 -11.21781921 282.70806885 C4.53261709 282.64033939 25.50140381 282.57432556 55.58991045 282.47900218 C89.85590661 282.36271346 136.83126808 282.19821959 160.31904602 282.14044189 C180.50317474 226.76810175 189.63154602 202.57794189 206.43232727 157.73419189 C214.60211086 135.76690483 225.31904602 108.14044189 225.31904602 108.14044189 C149.74904602 108.14044189 74.17904602 108.14044189 -3.68095398 108.14044189 C-11.93095398 132.33575439 -28.9618454 177.59800339 -40.52470398 208.38262939 C-53.08569336 241.88653946 -57.30595398 253.14044189 -59.83720398 259.89044189 C-130.78251648 449.07794189 -131.59580803 451.24650574 -137.09718323 465.8862915 C-144.02933025 484.76380157 -147.15756416 493.51377869 -152.13122089 507.98517666 C-156.74257155 517.27531661 -166.71733093 522.73443604 -188.09892273 524.63653564 C-202.79203796 524.60699463 -215.49157238 524.59408474 -229.98755455 524.57989311 C-240.28659058 524.52812195 -249.58076742 521.83501082 -252.99345398 517.64044189 C-257.59206595 511.40138891 -256.68095398 501.14044189 -250.80595398 484.32794189 C-244.26591492 466.95489502 -223.49384117 411.84953308 -203.08423996 357.57128143 C-188.68095398 319.14044189 -175.11845398 282.95294189 -147.07197571 208.37399292 C-124.397439 148.05402184 -115.07548523 123.21075439 -104.2339325 94.14379883 C-90.38747189 56.6542088 -72.68095398 29.14044189 -52.20364113 7.16176843 C-26.49083179 -0.01974274 0 0 0 0 Z"
                  fill="url(#prodam-teal)"
                  transform="translate(256.6809539794922,-0.14044189453125)"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}
