import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/layout/Section";

const projects = [
  {
    title: "Om Restaurant Management System",
    category: "Full Stack",
    description: "A complete restaurant management system with ordering, inventory, and analytics dashboards.",
    image: "./OM.jpg",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
    link: "https://omrestaurant.netlify.app/",
    github: "https://github.com/gopaljilab/OmRestaurant"
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description: "A modern, highly interactive personal portfolio to showcase projects and skills with seamless animations.",
    image: "/Portfolio.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://potfoliogopal.netlify.app/",
    github: "https://github.com/gopaljilab/portfolio"
  },
  {
    title: "Wash'n Vibe",
    category: "Prototype / UI",
    description: "A sleek mobile app prototype for a modern laundry service, focusing on user experience and visual design.",
    image: "Wash.jpg",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/2mdtYq2x2Y6Kjgx1QDHbhr/Wash-N-Vibe?node-id=6-3980&starting-point-node-id=1%3A3&t=IJ0sJ9JfeJj3YfqH-1",
    github: "#"
  },
  {
    title: "NCVET-BlockChain Certification System",
    category: "Crypto & Web3",
    description: "India's vocational education ecosystem faces challenges with certificate forgery, manual verification delays, and lack of interoperability. This blockchain-enabled platform provides tamper-proof, instantly verifiable digital credentials.",
    image: "/NCVET.jpg",
    tags: ["React", "Web3.js", "Chart.js", "API"],
    link: "https://www.figma.com/make/AB1LEuPmvUhr1fMaDX3q3w/Blockchain-Certificate-Platform-Prototype?fullscreen=1&t=rLkYbttE95UaCYCf-1",
    github: "https://github.com/gopaljilab/NVCET-Blockchain-Certification-System"
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
