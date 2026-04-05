"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { siteConfig } from "@/config/site";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const [formState, setFormState] = useState({ name: "", email: "", service: "Static Website", budget: "", message: "" });
  const [hasEditedMessage, setHasEditedMessage] = useState(false);

  // Auto-generate message from service/budget without setState in effect
  const autoMessage = `Hello Krishna,\n\nI am interested in building a ${formState.service} ${formState.budget ? `with a budget of ${formState.budget}` : 'and would like to request a quote'}.\n\nLet's discuss further!`;
  const activeMessage = hasEditedMessage ? formState.message : autoMessage;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // --- Client-side validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formState.name.trim().length < 2) {
      alert("Please enter your full name.");
      return;
    }
    if (formState.message.trim().length < 10) {
      alert("Message is too short. Please describe your project.");
      return;
    }
    // Prevent excessively long inputs (spam protection)
    if (formState.message.length > 2000 || formState.name.length > 100) {
      alert("Input too long. Please shorten your message.");
      return;
    }

    setIsSubmitting(true);
    setSuccess(null);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS Error: Missing environment variables.");
      setSuccess(false);
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current!, publicKey)
      .then(() => {
        setSuccess(true);
        setIsSubmitting(false);
        setHasEditedMessage(false);
        setFormState({ name: "", email: "", service: "Static Website", budget: "", message: "" });
      }, () => {
        setSuccess(false);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Get Free <span className="text-gradient">Consultation</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                Let&apos;s Build Something <br />
                <span className="text-primary">Amazing Together</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Mail size={20} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Phone size={20} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noreferrer">Available on WhatsApp</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <MapPin size={20} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>Global (Remote)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a href={`https://github.com/${siteConfig.githubUsername}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              {success === true && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">Consultation request sent successfully!</p>
                </div>
              )}
              {success === false && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500">
                  <XCircle size={20} />
                  <p className="text-sm font-medium">Failed to send request. Please try WhatsApp instead.</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary peer placeholder-transparent"
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary peer placeholder-transparent"
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <span className="text-xs text-muted-foreground absolute -top-4 left-0">Select Service</span>
                  <select 
                    name="service"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option className="bg-[#1e1e2f]" value="Static Website">Static Website</option>
                    <option className="bg-[#1e1e2f]" value="Dynamic Website">Dynamic Website</option>
                    <option className="bg-[#1e1e2f]" value="Full Stack Web App">Full Stack Web App</option>
                    <option className="bg-[#1e1e2f]" value="Other">Other / Custom</option>
                  </select>
                </div>

                <div className="relative">
                  <span className="text-xs text-muted-foreground absolute -top-4 left-0">Estimated Budget</span>
                  <select 
                    name="budget"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  >
                    <option className="bg-[#1e1e2f]" value="">Select Budget (Optional)</option>
                    <option className="bg-[#1e1e2f]" value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option className="bg-[#1e1e2f]" value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                    <option className="bg-[#1e1e2f]" value="₹20,000+">₹20,000+</option>
                  </select>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary peer placeholder-transparent resize-none"
                  placeholder="Message"
                  value={activeMessage}
                  onChange={(e) => {
                    setHasEditedMessage(true);
                    setFormState({ ...formState, message: e.target.value });
                  }}
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-7 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-valid:top-0 peer-valid:text-xs"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl font-bold tracking-wide hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending Request...</span>
                ) : (
                  <>
                    Start Project
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
