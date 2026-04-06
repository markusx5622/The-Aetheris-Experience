"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const milestones = [
  { year: "2024", title: "THE AWAKENING", img: "https://picsum.photos/seed/awaken/800/1200" },
  { year: "2025", title: "NEURAL EXPANSION", img: "https://picsum.photos/seed/neural/800/1200" },
  { year: "2026", title: "QUANTUM LEAP", img: "https://picsum.photos/seed/quantum/800/1200" },
  { year: "2027", title: "SINGULARITY", img: "https://picsum.photos/seed/singularity/800/1200" },
];

export default function Chronicle() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#030303]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-12 left-4 md:left-12 z-10">
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mix-blend-difference">CHRONICLE</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-4 md:px-32 w-[400vw]">
          {milestones.map((milestone, index) => (
            <div key={index} className="w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex flex-col justify-center relative shrink-0">
              <div className="absolute top-0 left-0 text-[15vw] font-black font-display text-white/5 -z-10 leading-none pointer-events-none">
                {milestone.year}
              </div>
              <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-2xl">
                <Image
                  src={milestone.img}
                  alt={milestone.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl md:text-5xl font-bold font-display text-white">{milestone.title}</h3>
                  <p className="text-cyan-accent font-mono text-sm mt-2">MILESTONE_{milestone.year}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
