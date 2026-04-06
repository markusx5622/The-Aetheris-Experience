"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Portal() {
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsTyping(true);
    
    // Reset typing state after a short delay
    const timeoutId = setTimeout(() => setIsTyping(false), 500);
    return () => clearTimeout(timeoutId);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
        animate={{
          background: isTyping 
            ? "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, rgba(3, 3, 3, 1) 50%)" 
            : "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.02) 0%, rgba(3, 3, 3, 1) 50%)"
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 w-full max-w-2xl glass-panel rounded-3xl p-8 md:p-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">THE PORTAL</h2>
          <p className="text-silver-accent font-light mt-4">Initiate experimental contact.</p>
        </div>

        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-accent peer transition-colors"
              placeholder="Name"
              onChange={handleChange}
            />
            <label htmlFor="name" className="absolute left-0 top-4 text-white/40 text-sm font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-accent peer-valid:-top-4 peer-valid:text-xs">
              IDENTIFICATION [NAME]
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-accent peer transition-colors"
              placeholder="Email"
              onChange={handleChange}
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-white/40 text-sm font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-accent peer-valid:-top-4 peer-valid:text-xs">
              COORDINATES [EMAIL]
            </label>
          </div>

          <div className="relative group mt-4">
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-accent peer transition-colors resize-none"
              placeholder="Message"
              onChange={handleChange}
            />
            <label htmlFor="message" className="absolute left-0 top-4 text-white/40 text-sm font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-accent peer-valid:-top-4 peer-valid:text-xs">
              TRANSMISSION [MESSAGE]
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-8 py-4 px-8 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300 ${
              isTyping ? "bg-cyan-accent text-black shadow-[0_0_30px_rgba(0,240,255,0.5)]" : "bg-white text-black hover:bg-cyan-accent"
            }`}
          >
            Transmit Data
          </motion.button>
        </form>
      </div>
    </section>
  );
}
