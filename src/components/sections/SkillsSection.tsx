"use client";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, PenTool, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind"]
  },
  {
    category: "Platforms",
    icon: MonitorSmartphone,
    items: ["WordPress", "Shopify", "Salesforce LWC", "SLDS"]
  },
  {
    category: "Design",
    icon: PenTool,
    items: ["Wireframing", "Prototyping", "Interaction Design", "Responsive Design"]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Figma", "Adobe XD", "Photoshop", "InVision", "Git"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                  <skillGroup.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all border border-white/10 rounded-full text-sm text-zinc-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
