"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(siteConfig.whatsapp.message);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all group"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
      <FaWhatsapp size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20 pointer-events-none shadow-lg glass">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
