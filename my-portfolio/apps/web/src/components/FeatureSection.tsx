'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: "Secure Architecture",
    desc: "Built with Type-Safety and rigorous testing standards.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />
  },
  {
    title: "High Performance",
    desc: "Optimized Next.js SSR for lightning fast load times.",
    icon: <Zap className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Global Scale",
    desc: "Deployed on Vercel Edge Network for worldwide access.",
    icon: <Globe className="w-8 h-8 text-orange-500" />
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }} // Start invisible and lower down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
            transition={{ duration: 0.5, delay: i * 0.2 }} // Stagger the animation
            className="p-6 border rounded-2xl hover:shadow-xl transition-shadow bg-white"
          >
            <div className="mb-4 bg-orange-50 w-fit p-3 rounded-xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}