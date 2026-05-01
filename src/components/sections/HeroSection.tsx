"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedText } from "../ui/AnimatedText";

const roles = ["UI/UX Designer", "Frontend Developer", "LWC Specialist"];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-x-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase mb-6">
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="text-foreground">Aniruddha Debroy</span>
        </motion.h1>
        
        <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden mb-6">
          <motion.div
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-semibold text-gradient"
          >
            {roles[currentRoleIndex]}
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Designing intuitive, scalable digital experiences
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="#projects" 
            className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-white transition-all hover:bg-blue-600 neon-glow"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 glass px-8 text-white transition-colors hover:bg-white/5"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
