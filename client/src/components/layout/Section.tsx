import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  darker?: boolean;
}

export function Section({ id, title, subtitle, children, className = "", darker = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${darker ? 'bg-background/50' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-20"
          >
            {subtitle && (
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
