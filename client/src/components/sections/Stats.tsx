import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Completed Projects" },
  { value: "0+", label: "Years of Experience" },
  { value: "2+", label: "Happy Clients" },
  { value: "5+", label: "Awards Achieved" },
];

export function Stats() {
  return (
    <section className="py-10 border-y border-white/5 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
