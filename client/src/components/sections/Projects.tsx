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
            className="group rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-primary/30 transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Using high quality unsplash placeholders relevant to tech/abstract */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  {project.category}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full justify-end">
                  <a href={project.github} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center hover:bg-white transition-colors box-glow">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-primary/80 mb-3">
                {project.title === "Om Restaurant" ? "Java, Spring Boot, MySQL, HTML, CSS" :
                 project.title === "Portfolio Website" ? "React, Tailwind CSS, Framer Motion" :
                 project.title === "Wash'n Vibe" ? "UI/UX Prototype, Figma" :
                 project.title === "CryptoraHub" ? "Web3, Blockchain UI" : ""}
              </p>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
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
