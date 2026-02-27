import { motion } from "framer-motion";
import { Award, Star, Trophy, Target } from "lucide-react";
import { Section } from "@/components/layout/Section";

const achievements = [
  {
    title: "Improved Data Efficiency by 40%",
    description: "Optimized data handling processes in University Management and Bank ATM projects.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to Elite Coders and Social Winter of Code, fixing bugs and improving code quality.",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Java Full-Stack Training",
    description: "Completed intensive remote internship focused on Java, JSP, and MVC architecture at Arcane Programming Infotech.",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Polytechnic Diploma in CSE",
    description: "Graduated from MMIT Aligarh with a strong foundation in Computer Science and Engineering.",
    icon: Trophy,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones & Recognition">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl ${achievement.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
