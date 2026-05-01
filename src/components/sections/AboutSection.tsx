"use client";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const highlights = [
  { title: "10+ Years", desc: "Enterprise Experience" },
  { title: "User-Centered", desc: "Design Philosophy" },
  { title: "Cross-Functional", desc: "Collaboration" },
  { title: "Agile", desc: "Environments" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              I am a Senior UI/UX Designer and Frontend Developer with over a decade of experience building enterprise-grade applications. I specialize in bridging the gap between design and engineering, crafting digital experiences that are both visually stunning and highly functional.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              My expertise spans across modern frontend frameworks and Salesforce LWC, allowing me to drive measurable business impact through performance optimization, usability enhancements, and scalable architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <GlassCard key={index} className="text-center p-6 flex flex-col justify-center items-center h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
