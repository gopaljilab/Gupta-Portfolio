import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";

const certifications = [
  {
    title: "Java Full-Stack Development",
    issuer: "NativeSoftTech",
    year: "2025",
    credentialId: "NST-JAVA-2025-001",
    link: "https://example.com/verify/nst-java"
  },
  {
    title: "SQL & Database Management",
    issuer: "RD INFRO TECHNOLOGY",
    year: "2025",
    credentialId: "RD-SQL-2025-452",
    link: "https://example.com/verify/rd-sql"
  },
  {
    title: "Advanced Java with JSP",
    issuer: "Arcane Programming Infotech",
    year: "2023",
    credentialId: "API-JSP-2023-882",
    link: ""
  }
];

export function Achievements() {
  return (
    <Section id="achievements" title="Certifications" subtitle="Professional Credentials">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
              <Award className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-muted-foreground font-medium">
                {cert.issuer}
              </p>
              <p className="text-muted-foreground/60 text-sm">
                Issued {cert.year}
              </p>
            </div>

            {cert.credentialId && (
              <p className="text-xs text-muted-foreground/40 font-mono mb-4">
                ID: {cert.credentialId}
              </p>
            )}

            {cert.link && (
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group/link"
              >
                View Credential
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
