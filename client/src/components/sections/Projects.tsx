import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/layout/Section";

const projects = [
  {
    title: "Om Restaurant",
    category: "Full Stack",
    description: "A complete restaurant management system with ordering, inventory, and analytics dashboards.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description: "A modern, highly interactive personal portfolio to showcase projects and skills with seamless animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "Wash'n Vibe",
    category: "Prototype / UI",
    description: "A sleek mobile app prototype for a modern laundry service, focusing on user experience and visual design.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "#",
    github: "#"
  },
  {
    title: "CryptoraHub",
    category: "Crypto & Web3",
    description: "A cryptocurrency tracking dashboard providing real-time market data, charts, and portfolio management.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "Web3.js", "Chart.js", "API"],
    link: "#",
    github: "#"
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work" darker>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                <a href={project.github} className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.link} className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">
                {project.title === "Om Restaurant" ? "Java, Spring Boot, MySQL, HTML, CSS" :
                 project.title === "Portfolio Website" ? "React, Tailwind CSS, Framer Motion" :
                 project.title === "Wash'n Vibe" ? "UI/UX Prototype, Figma" :
                 project.title === "CryptoraHub" ? "Web3, Blockchain UI" : ""}
              </p>
              <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
