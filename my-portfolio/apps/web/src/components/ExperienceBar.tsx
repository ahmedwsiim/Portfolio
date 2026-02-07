'use client';

import { motion } from 'framer-motion';
import { Briefcase, Zap, MapPin, Terminal } from 'lucide-react';
import { useState } from 'react';

const stats = [
  {
    id: "role",
    label: "Role",
    value: "DevOps Engineer",
    sub: "@ Hash Turn",
    icon: <Briefcase size={20} />,
    color: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]",
    iconColor: "text-blue-500"
  },
  {
    id: "focus",
    label: "Focus",
    value: "Automation & Cloud",
    sub: "Azure / AWS",
    icon: <Zap size={20} />,
    color: "hover:bg-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]",
    iconColor: "text-orange-500"
  },
  {
    id: "stack",
    label: "Stack",
    value: "Docker / K8s",
    sub: "Terraform / Python",
    icon: <Terminal size={20} />,
    color: "hover:bg-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]",
    iconColor: "text-purple-500"
  },
  {
    id: "base",
    label: "Base",
    value: "Multan, PK",
    sub: "Open to Remote",
    icon: <MapPin size={20} />,
    color: "hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.5)]",
    iconColor: "text-green-500"
  }
];

export default function ExperienceBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative z-20 -mt-12 mb-24 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Floating Dock Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 rounded-3xl bg-white/5 dark:bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              onHoverStart={() => setHovered(stat.id)}
              onHoverEnd={() => setHovered(null)}
              className={`relative flex-1 w-full md:w-auto flex items-center gap-4 p-4 rounded-2xl border border-transparent transition-all duration-300 cursor-default group ${stat.color}`}
            >
              
              {/* Animated Icon Box */}
              <div className={`p-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${stat.iconColor}`}>
                 {/* Icon spins subtly on hover */}
                 <motion.div
                    animate={hovered === stat.id ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                 >
                   {stat.icon}
                 </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </span>
                
                <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                  {stat.value}
                </span>

                {/* Subtext reveals on hover */}
                <motion.span 
                  initial={{ height: 0, opacity: 0 }}
                  animate={hovered === stat.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  className="text-xs text-gray-400 overflow-hidden"
                >
                  {stat.sub}
                </motion.span>
              </div>

              {/* Status Indicator Dot */}
              <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-opacity ${stat.iconColor}`} />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}