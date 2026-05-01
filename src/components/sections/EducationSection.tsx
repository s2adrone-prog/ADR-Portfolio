"use client";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Award, GraduationCap, Cpu, ShoppingBag, BookOpen, Globe2 } from "lucide-react";

const certifications = [
  {
    title: "Salesforce Certified AI Associate",
    icon: Cpu,
  },
  {
    title: "Shopify Development Course – Udemy",
    icon: ShoppingBag,
  },
  {
    title: "Diploma in Desktop Publishing – Youth Computer Training Centre",
    icon: BookOpen,
    iconClass: "w-6 h-6 scale-110",
  },
  {
    title: "Internet Technology Certification – CMC",
    icon: Globe2,
  },
];

const education = [
  {
    degree: "B.A. in Arts",
    institution: "Barasat College, Calcutta University",
    year: "2007 – 2010",
  },
  {
    degree: "Higher Secondary",
    institution: "New Barrackpur Colony Boys High School",
    year: "2002",
  },
  {
    degree: "Secondary",
    institution: "New Barrackpur Colony Boys High School",
    year: "2000",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" />
                Education
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </motion.div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    {edu.institution && <p className="text-primary text-sm mt-1">{edu.institution}</p>}
                    {edu.year && <p className="text-zinc-400 text-sm mt-2">{edu.year}</p>}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Award className="text-accent w-8 h-8" />
                Certifications
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </motion.div>

            <div className="space-y-[24px]">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 px-[11px]">
                        <Icon className={cert.iconClass ?? "w-6 h-6"} />
                      </div>
                      <h3 className="text-lg font-medium text-zinc-200">{cert.title}</h3>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
