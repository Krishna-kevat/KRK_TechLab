"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Zap, Brain } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed | Remote",
      period: "2024 – Present",
      icon: <Briefcase className="text-primary" size={20} />,
      description: "Delivering modern, scalable, and user-focused web solutions for clients and personal projects.",
      contributions: [
        "Developed full stack web applications using React, Next.js, PHP, and Node.js",
        "Designed responsive, high-performance UI/UX using Tailwind CSS",
        "Integrated APIs, authentication systems, and databases for dynamic functionality",
        "Built real-world systems like Loan Management and Wardrobe Management platforms",
        "Optimized website performance and loading speeds significantly"
      ],
      impact: [
        "Delivered projects with clean architecture and maintainable code",
        "Improved user experience through modern UI and smooth interactions",
        "Established strong foundation in end-to-end development"
      ]
    },
    {
      role: "Frontend Developer (Project-Based)",
      company: "Personal & Academic Projects",
      period: "2023 – Present",
      icon: <Zap className="text-accent" size={20} />,
      description: "Focused on building visually appealing and highly interactive frontend applications.",
      contributions: [
        "Created modern UI designs with animations (React & Tailwind CSS)",
        "Developed dynamic websites with real-time data using APIs",
        "Built responsive layouts ensuring device compatibility",
        "Implemented reusable component-based architecture"
      ],
      impact: [
        "Enhanced engagement with smooth animations and premium UI",
        "Improved usability and accessibility of web applications"
      ]
    },
    {
      role: "Backend Developer (Project-Based)",
      company: "Self Projects & Practice Systems",
      period: "2023 – Present",
      icon: <Brain className="text-secondary" size={20} />,
      description: "Worked on backend logic, database management, and API development for scalable applications.",
      contributions: [
        "Built backend systems using PHP and Node.js",
        "Designed and managed databases (MySQL, MongoDB)",
        "Developed REST APIs for dynamic data handling",
        "Implemented authentication and role-based access systems"
      ],
      impact: [
        "Ensured secure and efficient data handling",
        "Improved system performance and reliability"
      ]
    },
    {
       role: "Web Development Enthusiast",
       company: "Continuous Learning & Building",
       period: "Continuous",
       icon: <Zap className="text-yellow-500" size={20} />,
       description: "Actively learning and implementing modern web technologies while building real-world projects.",
       highlights: [
         "Exploring advanced concepts in full stack development & data analytics",
         "Consistently improving problem-solving and development skills",
         "Building projects focused on real-world use cases"
       ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of building impactful digital solutions, from freelance client work 
            to complex full-stack engineering projects.
          </p>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-white/10 to-transparent" />
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%]">
                <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300 group shadow-xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                    {exp.description}
                  </p>

                  <div className="space-y-6">
                    {exp.contributions && (
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                           <Zap size={14} className="text-accent" /> Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.contributions.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.impact && (
                      <div className="pt-4 border-t border-white/5">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                           <Zap size={14} className="text-green-400" /> Impact
                        </h4>
                        <ul className="space-y-2">
                          {exp.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                              <span className="text-green-400 mt-1">🚀</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.highlights && (
                       <ul className="space-y-2">
                         {exp.highlights.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                             <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                             <span>{item}</span>
                           </li>
                         ))}
                       </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Center dot/icon for desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border-2 border-primary/50 items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                 <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
