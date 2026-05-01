"use client";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const projects = [
  {
    title: "DreamShop Honda",
    type: "Salesforce LWC",
    desc: "A scalable enterprise platform for managing sales and customer experience.",
    tech: ["LWC", "JavaScript", "Salesforce", "SLDS"],
    achievements: ["Improved performance", "Enhanced UI/UX"],
    link: "https://dreamshop.honda.com"
  },
  {
    title: "Anandalok",
    type: "Angular News Portal",
    desc: "A high-traffic news portal with real-time updates and seamless navigation.",
    tech: ["Angular", "TypeScript", "SCSS"],
    achievements: ["Better usability", "Increased engagement"],
    link: "https://www.anandalok.in"
  },
  {
    title: "Admission Tree",
    type: "Education Platform",
    desc: "An intuitive platform streamlining the admission process for students.",
    tech: ["React", "CSS3", "Responsive Design"],
    achievements: ["Streamlined workflows", "Accessible UI"],
    link: "https://www.admissiontree.in"
  },
  {
    title: "Anand Group India",
    type: "WordPress Corporate",
    desc: "Corporate website showcasing the group's diverse portfolio.",
    tech: ["WordPress", "PHP", "Custom Theme"],
    achievements: ["Brand consistency", "Fast loading"],
    link: "https://www.anandgroupindia.com/"
  },
  {
    title: "SwiftBoox",
    type: "Mobile App",
    desc: "A modern application designed for fast and secure bookings.",
    tech: ["UI/UX Design", "Prototyping", "Figma"],
    achievements: ["High user retention", "Seamless interactions"],
    link: "https://swiftboox.app"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className={`h-full flex flex-col justify-between group transition-colors ${project.link ? "cursor-pointer hover:border-primary/50" : ""}`}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    <div>
                      <div className="text-xs text-accent font-semibold tracking-wider uppercase mb-2">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                        {project.desc}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Achievements</h4>
                        <ul className="list-disc list-inside text-sm text-zinc-300">
                          {project.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="text-xs text-accent font-semibold tracking-wider uppercase mb-2">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                        {project.desc}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Achievements</h4>
                        <ul className="list-disc list-inside text-sm text-zinc-300">
                          {project.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
