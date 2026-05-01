"use client";
import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, PenTool, Wrench, Layers, Zap, Palette, GitBranch, Lightbulb, Settings, Box, Eye } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "SCSS", icon: Palette },
      { name: "JavaScript", icon: Zap },
      { name: "jQuery", icon: Layers },
      { name: "Bootstrap", icon: Layers },
      { name: "Tailwind", icon: Layers }
    ]
  },
  {
    category: "Platforms",
    icon: MonitorSmartphone,
    items: [
      { name: "WordPress", icon: MonitorSmartphone },
      { name: "Shopify", icon: Box },
      { name: "Salesforce LWC", icon: Zap },
      { name: "SLDS", icon: Settings }
    ]
  },
  {
    category: "Design",
    icon: PenTool,
    items: [
      { name: "Wireframing", icon: Box },
      { name: "Prototyping", icon: Lightbulb },
      { name: "Interaction Design", icon: PenTool },
      { name: "Responsive Design", icon: Eye }
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Figma", icon: PenTool },
      { name: "Adobe XD", icon: Palette },
      { name: "Photoshop", icon: Palette },
      { name: "InVision", icon: Eye },
      { name: "Git", icon: GitBranch }
    ]
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
                    className="px-4 py-2 bg-white/5 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all border border-white/10 rounded-full text-sm text-zinc-300 cursor-default flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
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
