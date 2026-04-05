"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-accent">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight">
            Building Digital <br/>
            <span className="text-gradient">Experiences</span> That Convert
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border border-white/10 bg-white/5 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400 transition-colors backdrop-blur-sm"
            >
              <FaWhatsapp className="group-hover:scale-110 transition-transform" size={18} /> Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Floating animated image container */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 blur-2xl" />
            <div className="absolute inset-2 rounded-full border border-white/20 z-0 border-dashed" />
            
            {/* The profile placeholder */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-black border-2 border-primary/50 z-10 neon-glow flex items-center justify-center">
              <div className="text-9xl">👨‍💻</div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -left-6 glass px-4 py-2 rounded-xl text-sm font-medium z-20 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Next.js
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 -right-4 glass px-4 py-2 rounded-xl text-sm font-medium z-20 flex items-center gap-2"
            >
              <span className="text-secondary text-xl">⚡</span>
              Tailwind
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
