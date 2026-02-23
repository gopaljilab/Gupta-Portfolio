import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "SQL / MySQL", icon: "💾" },
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML / CSS", icon: "🌐" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git / GitHub", icon: "🌿" },
  { name: "Figma", icon: "🎨" },
  { name: "Framer", icon: "⚡" },
  { name: "Illustrator", icon: "✒️" },
  { name: "UI Icons", icon: "✨" },
];

export function Skills() {
  return (
    <Section id="skills" title="My Skills" subtitle="Tools & Technologies" darker>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_10px_30px_-10px_rgba(0,255,136,0.15)] transition-all duration-300 text-center"
          >
            <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
