"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const plans = [
    {
      name: "Static Website",
      price: "₹4,999 - ₹7,999",
      description: "Best for Personal portfolios, small businesses",
      features: [
        "Responsive static website (3–5 pages)",
        "Clean modern UI design",
        "Fast loading performance",
        "Basic SEO optimization",
        "Contact form integration"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Dynamic Website",
      price: "₹9,999 - ₹14,999",
      description: "Best for Business websites, dashboards",
      features: [
        "Dynamic content (API integration)",
        "Admin panel (basic)",
        "Database integration",
        "Authentication (login/signup)",
        "Responsive & interactive UI"
      ],
      buttonText: "Hire Me",
      popular: true
    },
    {
      name: "Full Stack Web App",
      price: "₹19,999 - ₹35,000+",
      description: "Best for Startups, SaaS, complex systems",
      features: [
        "Complete frontend + backend system",
        "Custom features & APIs",
        "Secure authentication (JWT)",
        "Database (MongoDB/MySQL)",
        "Performance optimization",
        "Deployment support"
      ],
      buttonText: "Contact Now",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Flexible <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Transparent pricing for high-quality digital solutions. <br/>
            <span className="text-accent/80 text-sm mt-2 block">Custom pricing available for unique requirements.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
                  isPopular 
                    ? "glass-card border border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] md:scale-105 z-10" 
                    : "glass border border-white/10 hover:border-white/20 hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg z-20">
                    🏆 Most Popular / Best Value
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-white">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="mb-8 text-center flex-grow border-b border-white/10 pb-8">
                  <span className="text-3xl md:text-3xl font-extrabold font-heading text-gradient tracking-tight block">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm block mt-2 px-2 italic">One-time / Milestone based</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${isPopular ? "text-primary" : "text-accent"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                      `Hello Krishna, I'm interested in the ${plan.name} plan. Let's discuss my project!`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                      isPopular 
                        ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(139,92,246,0.4)]" 
                        : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                    }`}
                  >
                     <FaWhatsapp size={20} className={isPopular ? "group-hover:scale-110 transition-transform" : "text-green-500"} />
                     {plan.buttonText}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
