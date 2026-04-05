"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/config/casestudies";

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Professional <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-lg">
           Explore how I&apos;ve helped clients overcome complex technical challenges and achieve measurable business results.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <div 
                  className={`p-8 md:p-10 cursor-pointer relative overflow-hidden bg-gradient-to-br ${study.imageColor}`}
                  onClick={() => setExpandedId(isExpanded ? null : study.id)}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-0" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex gap-6 items-center">
                      <span className="text-5xl md:text-6xl drop-shadow-lg">{study.icon}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-accent font-medium mb-2 tracking-wide uppercase text-xs md:text-sm">
                          {study.category}
                        </p>
                        <p className="text-white/80 max-w-2xl line-clamp-1 text-sm md:text-base">
                          {study.problem}
                        </p>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-primary/80 border border-white/20 rounded-full text-white font-medium transition-all shrink-0 backdrop-blur-md whitespace-nowrap mt-4 md:mt-0">
                      View Details
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden bg-background/50 border-t border-white/10"
                    >
                      <div className="p-8 md:p-10 grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-bold font-heading text-accent mb-3 flex items-center gap-2">
                              <span className="w-8 h-px bg-accent"></span> The Problem
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold font-heading text-primary mb-3 flex items-center gap-2">
                              <span className="w-8 h-px bg-primary"></span> The Solution
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-bold font-heading text-white mb-4">Key Features</h4>
                            <ul className="space-y-3">
                              {study.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 z-0" />
                            <div className="relative z-10">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Results & Impact</h4>
                                <p className="text-white font-medium italic">&ldquo;{study.results}&rdquo;</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {study.technologies.map(tech => (
                              <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-primary/10 border border-primary/20 rounded-md text-primary">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
