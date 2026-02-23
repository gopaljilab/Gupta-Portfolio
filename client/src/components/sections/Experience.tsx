import { motion } from "framer-motion";
import { Briefcase, Database, Coffee } from "lucide-react";
import { Section } from "@/components/layout/Section";

const experiences = [
  {
    role: "SQL Intern",
    company: "NativeSoftTech",
    period: "Mar 2025 – Apr 2025",
    description: "Gained hands-on experience in database management, writing complex queries, and optimizing database performance for scalable applications.",
    icon: Database,
  },
  {
    role: "Java Intern",
    company: "NativeSoftTech",
    period: "Dec 2024 – Feb 2025",
    description: "Developed backend services using Java, participated in code reviews, and assisted in building robust RESTful APIs.",
    icon: Coffee,
  },
  {
    role: "Java with JSP Training",
    company: "Arcane Programming Infotech",
    period: "Jul 2023 – Sep 2023",
    description: "Completed intensive training in Java Server Pages, Servlets, and MVC architecture to build dynamic web applications.",
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My Journey">
      <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[41px] top-1 w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors shadow-lg">
              <exp.icon className="w-5 h-5 text-primary" />
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-muted-foreground border border-white/5 whitespace-nowrap w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
