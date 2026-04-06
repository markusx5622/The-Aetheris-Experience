"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { id: "01", title: "STUDIO", sub: "Creative Direction & Strategy" },
  { id: "02", title: "LABS", sub: "R&D / Emerging Tech" },
  { id: "03", title: "ARCHIVE", sub: "Selected Works 2022-2026" },
  { id: "04", title: "PORTAL", sub: "Get in touch" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 mix-blend-difference">
      <div className="flex justify-between items-center text-white">
        <span className="text-xl font-black tracking-tighter font-display">ÆTHERIS</span>
        <button onClick={() => setIsOpen(!isOpen)} className="group flex flex-col gap-1 overflow-hidden p-2">
          <span className={`h-[2px] w-8 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : 'group-hover:translate-x-2'}`} />
          <span className={`h-[2px] w-8 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0A0A0A] flex flex-col justify-center p-12 lg:p-24 -z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
              <div className="flex flex-col gap-8">
                {menuItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ x: 20 }}
                    className="group cursor-pointer border-b border-white/10 pb-4"
                  >
                    <span className="text-xs font-mono text-white/40 mb-2 block">{item.id}</span>
                    <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter font-display transition-colors group-hover:text-[#00f0ff]">
                      {item.title}
                    </h2>
                    <p className="text-white/40 font-light mt-2">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
              <div className="hidden lg:flex relative border border-white/5 rounded-3xl overflow-hidden h-[60vh] items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent" />
                 <div className="p-12 text-sm font-mono text-white/20 z-10">Æ_SYSTEM_STATUS: ACTIVE</div>
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/aetheris/800/800')] opacity-20 mix-blend-overlay bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
