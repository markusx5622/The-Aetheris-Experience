"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: "01", title: "KINETIA V2", category: "WEB EXPERIENCE", img: "https://picsum.photos/seed/kinetia/600/800" },
  { id: "02", title: "VOID PROTOCOL", category: "IMMERSIVE 3D", img: "https://picsum.photos/seed/void/600/800" },
  { id: "03", title: "SYNTHESIS", category: "BRAND IDENTITY", img: "https://picsum.photos/seed/synthesis/600/800" },
  { id: "04", title: "ECHO CHAMBER", category: "SOUND DESIGN", img: "https://picsum.photos/seed/echo/600/800" },
  { id: "05", title: "NEURAL LINK", category: "INTERFACE", img: "https://picsum.photos/seed/neural/600/800" },
];

export default function Archive() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 py-32 cursor-default">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">ARCHIVE</h2>
      </div>

      <div className="flex flex-col border-t border-white/10 relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="flex items-center gap-8">
              <span className="text-sm font-mono text-white/40">{project.id}</span>
              <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tighter group-hover:text-cyan-accent transition-colors duration-500">
                {project.title}
              </h3>
            </div>
            <span className="text-sm font-mono text-silver-accent mt-4 md:mt-0">{project.category}</span>
          </div>
        ))}
      </div>

      {/* Floating Portal Image */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-[300px] h-[400px] rounded-2xl overflow-hidden z-0 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: activeProject !== null ? 1 : 0,
          scale: activeProject !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeProject === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-cyan-accent/20 mix-blend-overlay" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
