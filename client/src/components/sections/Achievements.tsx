import { motion } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import smartIndiaPng from "@assets/Gopal_Gupta_certificate_1772355032528.png";
import postmanJpg from "@assets/Print_Certificate_-_Canvas_Badges_page-0001_1772355032529.jpg";
import eliteCodersJpg from "@assets/8fcc4eb8-0637-413a-984d-012525c12ed0_page-0001_1772355072284.jpg";
import wocPng from "@assets/WoCS2025_contributor_Gopal_Gupta_1772355110359.png";
import scalerMasterclassPng from "@assets/39448c24132ac30a91ffd4903ec94822978de0a93f99fb8c33dba8b489f869_1772355110359.png";
import mastersUnionJpg from "@assets/756547b9-9531-4b0c-993a-46a7ae70da65_1772355110365.jpg";
import coreJavaJpeg from "@assets/1727200587497_1772355110365.jpeg";
import scalerFundamentalsPng from "@assets/f88dd432e07f775cb46efddb76cefae72dbbb1fd126a7f2f6c4727b5f6c0cc_1772355110366.png";
import nativeSoftTechJpg from "@assets/Gopal_Gupta_1772355110367.jpg";
import rdInfroSqlPng from "@assets/SQL_1772355110367.png";

const certifications = [
  {
    title: "Smart India Hackathon 2025 - Participation",
    issuer: "Ministry of Education & AICTE",
    year: "2025",
    credentialId: "SIH-2025-GOPAL",
    image: smartIndiaPng
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2025",
    credentialId: "POSTMAN-API-EXPERT",
    image: postmanJpg
  },
  {
    title: "Elite Coders Winter of Code",
    issuer: "Elite Coders",
    year: "2025",
    credentialId: "ECWOC-2025",
    image: eliteCodersJpg
  },
  {
    title: "Winter of Code Social 2025",
    issuer: "Code Social",
    year: "2026",
    credentialId: "WOCS-2025-CONTRIB",
    image: wocPng
  },
  {
    title: "Designing Seamless Notification Services",
    issuer: "Scaler Masterclass",
    year: "2025",
    credentialId: "SCALER-MASTERCLASS-NS",
    image: scalerMasterclassPng
  },
  {
    title: "Figma & Prototyping Workshop",
    issuer: "Masters Union (DTU Groove 2025)",
    year: "2025",
    credentialId: "MU-FIGMA-DTU",
    image: mastersUnionJpg
  },
  {
    title: "Industrial Training in Core Java",
    issuer: "Ensino Research & Development",
    year: "2024",
    credentialId: "ERD/D/21/07312",
    image: coreJavaJpeg
  },
  {
    title: "Java Course - Mastering Fundamentals",
    issuer: "Scaler Topics",
    year: "2025",
    credentialId: "SCALER-JAVA-FUNDAMENTALS",
    image: scalerFundamentalsPng
  },
  {
    title: "Java Development Internship",
    issuer: "NativeSoftTech",
    year: "2025",
    credentialId: "NST-JAVA-INTERN-COMP",
    image: nativeSoftTechJpg
  },
  {
    title: "Virtual Internship in SQL",
    issuer: "RD INFRO TECHNOLOGY",
    year: "2025",
    credentialId: "RDSQL10DD",
    image: rdInfroSqlPng
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
            className="bg-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group hover:shadow-lg flex flex-col h-full"
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-xl border border-white/5 bg-muted">
               <img 
                 src={cert.image} 
                 alt={cert.title}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <ImageIcon className="w-8 h-8 text-white opacity-70" />
               </div>
            </div>

            <div className="flex-1">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                <Award className="w-5 h-5" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              
              <div className="flex flex-col gap-0.5 mb-4">
                <p className="text-muted-foreground font-medium text-sm">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground/60 text-xs">
                  Issued {cert.year}
                </p>
              </div>

              {cert.credentialId && (
                <p className="text-[10px] text-muted-foreground/40 font-mono mb-4 break-all">
                  ID: {cert.credentialId}
                </p>
              )}
            </div>

            {cert.image && (
              <button 
                onClick={() => window.open(cert.image, '_blank')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline group/link mt-auto"
              >
                View Certificate
                <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
