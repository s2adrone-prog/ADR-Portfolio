"use client";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

const experiences = [
  {
    company: "Wipro Limited",
    role: "UI/UX Consultant + LWC Developer",
    period: "Feb 2022 – Mar 2025",
    description: "Enterprise UI/UX consulting and Salesforce LWC development.",
    contributions: ["UX research", "Wireframing & prototyping", "Frontend development"]
  },
  {
    company: "LearningMate Solutions",
    role: "UX Designer",
    period: "Jul 2020 – Feb 2022",
    description: "Designed intuitive user experiences for ed-tech platforms.",
    contributions: ["User flows", "Prototyping", "Usability testing"]
  },
  {
    company: "ABP Pvt Ltd",
    role: "Senior Executive – IT Web & Mobile",
    period: "Jul 2019 – May 2020",
    description: "Led web and mobile application frontend initiatives.",
    contributions: ["Responsive design", "Performance optimization"]
  },
  {
    company: "Globsyn Knowledge Foundation",
    role: "Web Developer",
    period: "Feb 2019 – Jul 2019",
    description: "Developed educational web platforms.",
    contributions: ["Frontend architecture"]
  },
  {
    company: "BCT Consulting (PwC collaboration)",
    role: "UI/UX Developer",
    period: "Nov 2017 – Jan 2019",
    description: "Collaborated on enterprise projects delivering high-end UI solutions.",
    contributions: ["Cross-functional collaboration", "Accessibility improvements"]
  },
  {
    company: "Indusnet Technologies",
    role: "Web Designer",
    period: "Mar 2012 – May 2015",
    description: "Designed and developed web interfaces.",
    contributions: ["UI Design", "HTML/CSS implementation"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 pl-4 md:pl-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-lg text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-zinc-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </div>
                </div>
                <p className="text-zinc-300 mb-4 pl-4 md:pl-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pl-4 md:pl-6">
                  {exp.contributions.map((item, i) => (
                    <span key={i} className="text-xs text-zinc-400 bg-black/30 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
