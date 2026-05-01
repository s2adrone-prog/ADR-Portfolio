"use client";
import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "Salesforce Certified AI Associate",
  "Shopify Development Course"
];

const education = [
  { degree: "B.A.", institution: "Calcutta University" },
  { degree: "Higher Secondary", institution: "" },
  { degree: "Secondary", institution: "" }
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

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent neon-glow"></div>
                    <h3 className="text-lg font-medium text-zinc-200">{cert}</h3>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
