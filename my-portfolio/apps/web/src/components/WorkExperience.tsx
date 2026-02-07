'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal, Server, Globe, Shield, CheckCircle2 } from 'lucide-react';

// --- EXPERIENCE DATA (From CV) ---
const experiences = [
  {
    id: "hash-turn",
    company: "Hash Turn",
    role: "DevOps & Automation Engineer",
    date: "Dec 2025 - Present",
    location: "Multan, Pakistan",
    type: "Remote / Hybrid",
    icon: Terminal,
    color: "blue",
    desc: [
      "Architecting scalable cloud infrastructure & automation workflows.",
      "Engineering Python/Bash pipelines to reduce manual operational overhead.",
      "Implementing auto-remediation scripts for system performance monitoring.",
      "Optimizing VPS configurations & RDP setups for seamless workflow execution."
    ]
  },
  {
    id: "systems",
    company: "Systems Limited",
    role: "DevOps Intern (Cloud Mod.)",
    date: "Jul 2025 - Sep 2025",
    location: "Lahore, Pakistan",
    type: "On-site",
    icon: Server,
    color: "cyan",
    desc: [
      "Containerized full-stack workloads across AWS & Azure using Docker.",
      "Codified CI/CD pipelines for idempotent S3 uploads, cutting latency by 50%.",
      "Configured NGINX reverse proxies with SSL termination & load balancing.",
      "Provisioned immutable infrastructure (VMs, Security Groups) via Terraform."
    ]
  },
  {
    id: "cricket",
    company: "Intl. Cricket Masters",
    role: "Web & Digital Coordinator",
    date: "Dec 2024 - Feb 2025",
    location: "Nottingham, UK",
    type: "Remote",
    icon: Globe,
    color: "orange",
    desc: [
      "Managed cloud-based platforms for global digital outreach campaigns.",
      "Optimized web content performance analytics & SEO strategies.",
      "Increased digital engagement by 15-20% through targeted motion graphics."
    ]
  },
  {
    id: "faysal",
    company: "Faysal Bank Limited",
    role: "Network Infrastructure Intern",
    date: "Jul 2024 - Aug 2024",
    location: "Pakistan",
    type: "On-site",
    icon: Shield,
    color: "green",
    desc: [
      "Resolved 150+ hardware/software tickets with 95% first-call resolution.",
      "Configured 20+ routers, switches & patch panels for LAN/WAN stability.",
      "Hardened network security protocols, reducing system vulnerabilities by 25%."
    ]
  }
];

export default function WorkExperience() {
  const [activeId, setActiveId] = useState<string | null>(experiences[0].id);

  return (
    <section id="work" className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-900/20 to-transparent ml-8 md:ml-[50%]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Logs</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">
            Operational History & Deployments
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => {
            const isActive = activeId === exp.id;
            
            return (
              <div key={exp.id} className="relative md:w-1/2 md:ml-auto md:even:ml-0 md:even:mr-auto">
                
                {/* TIMELINE CONNECTOR (Desktop Center Line) */}
                <div className={`hidden md:flex absolute top-8 ${i % 2 === 0 ? '-right-[41px]' : '-left-[41px]'} z-20 items-center justify-center`}>
                  <div className={`w-5 h-5 rounded-full border-2 ${isActive ? `border-${exp.color}-500 bg-${exp.color}-500 shadow-[0_0_15px_${exp.color}]` : 'border-gray-800 bg-[#050505]'} transition-all duration-500`} />
                  <div className={`absolute w-8 h-0.5 bg-gray-800 ${isActive ? `bg-${exp.color}-500/50` : ''} ${i % 2 === 0 ? 'right-full' : 'left-full'}`} />
                </div>

                {/* TIMELINE CONNECTOR (Mobile Left Line) */}
                <div className="md:hidden absolute left-[-35px] top-8 flex items-center">
                   <div className={`w-4 h-4 rounded-full border-2 ${isActive ? `border-${exp.color}-500 bg-${exp.color}-500` : 'border-gray-800 bg-[#050505]'} transition-all`} />
                   <div className="w-6 h-px bg-gray-800" />
                </div>

                {/* --- THE DATA CARTRIDGE --- */}
                <motion.div
                  layout
                  onClick={() => setActiveId(isActive ? null : exp.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`
                    group relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-500
                    ${isActive 
                      ? `bg-[#0a0a0a] border-${exp.color}-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]` 
                      : 'bg-[#080808] border-white/5 hover:border-white/10'
                    }
                  `}
                >
                  {/* Active Scanline Effect */}
                  {isActive && (
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${exp.color}-500 to-transparent`} />
                  )}

                  {/* HEADER (Always Visible) */}
                  <div className="p-6 md:p-8 flex items-start gap-5">
                    {/* Icon Box */}
                    <div className={`
                      shrink-0 p-3 rounded-xl border transition-colors duration-300
                      ${isActive 
                        ? `bg-${exp.color}-500/10 border-${exp.color}-500/20 text-${exp.color}-400` 
                        : 'bg-white/5 border-white/5 text-gray-500 group-hover:text-white'
                      }
                    `}>
                      <exp.icon size={24} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {exp.role}
                        </h3>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${isActive ? `border-${exp.color}-500/30 text-${exp.color}-400 bg-${exp.color}-500/5` : 'border-white/5 text-gray-600'}`}>
                          {exp.date}
                        </span>
                      </div>
                      
                      <p className={`text-sm font-medium mb-3 ${isActive ? `text-${exp.color}-400` : 'text-gray-500'}`}>
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} /> {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} /> {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Expand Arrow */}
                    <div className={`transition-transform duration-300 ${isActive ? 'rotate-90 text-white' : 'text-gray-600'}`}>
                      <ChevronRight size={20} />
                    </div>
                  </div>

                  {/* BODY (Collapsible) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 border-t border-white/5 mt-2">
                          <div className="pt-6 space-y-3">
                            {exp.desc.map((item, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-3 text-sm text-gray-400 leading-relaxed"
                              >
                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-${exp.color}-500`} />
                                {item}
                              </motion.div>
                            ))}
                          </div>

                          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-600">
                             <CheckCircle2 size={12} className={`text-${exp.color}-500`} />
                             <span>Verified Experience Log</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}