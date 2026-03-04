import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Full-Stack Projects" },
  { value: "1+", label: "Hands-on Experience" },
  { value: "3+", label: "Open-Source Contributions" },
  { value: "10+", label: "Core Technologies" },
];

export function Stats() {
  return (
    <section className="py-12 border-y border-slate-100 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}