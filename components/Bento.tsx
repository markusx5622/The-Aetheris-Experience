"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ClockCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 2 } as any));
    };
    const interval = setInterval(updateTime, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest z-10">Local Time</h3>
      <div className="z-10 mt-auto">
        <motion.div 
          key={time}
          initial={{ opacity: 0.8, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black font-display tracking-tighter text-white"
        >
          {time || "00:00:00.00"}
        </motion.div>
      </div>
    </div>
  );
};

const LiveFeedCard = () => {
  const projects = [
    "KINETIA V2", "NEURAL LINK", "VOID PROTOCOL", "AETHERIS", "QUANTUM CORE", "SYNTHESIS", "ECHO CHAMBER"
  ];

  return (
    <div className="glass-panel rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
      <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-6 z-10">Live Feed</h3>
      <div className="flex-1 relative overflow-hidden mask-image-linear-y">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="flex flex-col gap-4"
        >
          {[...projects, ...projects].map((project, i) => (
            <div key={i} className="text-2xl md:text-3xl font-bold font-display text-white/80 hover:text-cyan-accent transition-colors cursor-pointer">
              {project}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const SoundWaveCard = () => {
  return (
    <div className="glass-panel rounded-3xl p-8 flex flex-col h-full relative overflow-hidden justify-between">
      <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest z-10">Frequency</h3>
      <div className="flex items-end gap-1 h-32 mt-8 z-10">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-cyan-accent/80 rounded-t-sm"
            animate={{ height: ["10%", `${Math.random() * 80 + 20}%`, "10%"] }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Bento() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">INTELLIGENCE</h2>
        <p className="text-silver-accent font-light mt-4 max-w-md">Real-time data processing and quantum state monitoring.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <div className="md:col-span-2">
          <ClockCard />
        </div>
        <div className="md:col-span-1 md:row-span-2">
          <LiveFeedCard />
        </div>
        <div className="md:col-span-2">
          <SoundWaveCard />
        </div>
      </div>
    </section>
  );
}
