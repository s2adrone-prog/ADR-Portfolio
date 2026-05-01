"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 pb-8 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          <p className="text-zinc-400 max-w-2xl">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm text-zinc-400 mb-1">Email</h4>
                <a href="mailto:debroyani@gmail.com" className="text-lg text-white font-medium hover:text-primary transition-colors">
                  debroyani@gmail.com
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/20 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm text-zinc-400 mb-1">Location</h4>
                <p className="text-lg text-white font-medium">
                  Kolkata, India
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm text-zinc-400 mb-1">Phone</h4>
                <p className="text-lg text-white font-medium">
                  9836705953
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
