import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Section } from "@/components/layout/Section";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Bengaluru Technological Institute",
    period: "2025 – Present",
    status: "Pursuing",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Mahamaya Polytechnic of Information Technology",
    period: "2021 – 2024",
    status: "Completed",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic Background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl relative overflow-hidden group border border-slate-100 hover:border-primary/30 transition-all shadow-sm"
          >
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              {item.degree}
            </h3>
            <p className="text-lg text-slate-600 font-medium mb-6">
              {item.institution}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <Calendar className="w-4 h-4" />
                <span>{item.period}</span>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                item.status === 'Pursuing' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
