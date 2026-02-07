'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Server, Terminal, Database, Code2, Cloud, 
  Layout, Lock, GitBranch, Box, Layers, Activity 
} from 'lucide-react';

// ... (keep your existing skills array exactly as it is) ...
// (I will paste the full component below for easy copying)

const skills = [
  { 
    name: "AWS", 
    category: "Cloud", 
    logo: "https://cdn.simpleicons.org/amazonaws/FF9900", 
    color: "orange", 
    desc: "Orchestrated autonomous EC2s via Terraform & immutable S3/CloudFront delivery." 
  },
  { 
    name: "Azure", 
    category: "Cloud", 
    logo: "https://cdn.simpleicons.org/microsoftazure/0078D4", 
    color: "blue", 
    desc: "Deployed Dockerized FastAPI apps with zero-downtime GitHub Actions pipelines." 
  },
  { 
    name: "GCP", 
    category: "Cloud", 
    icon: Cloud, 
    color: "red", 
    desc: "Applied security principles & risk management strategies for cloud compliance." 
  },
  { 
    name: "Docker", 
    category: "DevOps", 
    icon: Box, 
    color: "cyan", 
    desc: "Containerized multi-tier MERN & Python apps for consistent prod environments." 
  },
  { 
    name: "Kubernetes", 
    category: "DevOps", 
    icon: Server, 
    color: "blue", 
    desc: "Managed container workloads & OpenShift clusters (IBM Certified)." 
  },
  { 
    name: "Terraform", 
    category: "IaC", 
    icon: Layers, 
    color: "purple", 
    desc: "Built modular IaC for EC2 provisioning with drift detection & state locking." 
  },
  { 
    name: "Bash", 
    category: "Auto", 
    icon: Terminal, 
    color: "green", 
    desc: "Automated system maintenance & operational workflows to reduce man-hours." 
  },
  { 
    name: "Python", 
    category: "Code", 
    icon: Code2, 
    color: "yellow", 
    desc: "Engineered RAG bots with LangChain & full-stack FastAPI/Flask systems." 
  },
  { 
    name: "GitHub Actions", 
    category: "CI/CD", 
    icon: GitBranch, 
    color: "white", 
    desc: "Codified CI/CD pipelines for automated testing, building, & cloud deployment." 
  },
  { 
    name: "NGINX", 
    category: "Net", 
    icon: Server, 
    color: "green", 
    desc: "Configured SSL termination, reverse proxies, & Gunicorn load balancing." 
  },
  { 
    name: "Postgres", 
    category: "DB", 
    icon: Database, 
    color: "blue", 
    desc: "Managed relational data integrity & complex querying for backend systems." 
  },
  { 
    name: "MongoDB", 
    category: "DB", 
    icon: Database, 
    color: "green", 
    desc: "Integrated NoSQL database for flexible MERN stack application data." 
  },
  { 
    name: "Linux", 
    category: "OS", 
    icon: Terminal, 
    color: "yellow", 
    desc: "Administered RHEL/Ubuntu servers, managing users, permissions & systemd services." 
  },
  { 
    name: "React", 
    category: "Front", 
    icon: Layout, 
    color: "cyan", 
    desc: "Built React Native charity apps & dynamic MERN frontends with TailwindCSS." 
  },
  { 
    name: "Security", 
    category: "Sec", 
    icon: Lock, 
    color: "red", 
    desc: "Enforced least-privilege IAM roles, secure SSH injection, & VPC firewalls." 
  },
  { 
    name: "Postman", 
    category: "Tools", 
    icon: Activity, 
    color: "orange", 
    desc: "Certified Student Expert in API testing, documentation, and automation." 
  },
];

export default function TechStack() {
  const [selected, setSelected] = useState<any>(null);

  return (
    // <--- ADDED id="skills" HERE ---
    <section id="skills" className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* 1. RETRO-WAVE BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Deck</span>
        </h2>
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs md:text-sm">
          Select a reactor core to inspect mission logs
        </p>
      </div>

      {/* 2. THE REACTOR DECK */}
      <div className="relative w-full max-w-7xl px-6 perspective-1000">
        
        {/* Tilted Plane */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 transform-style-3d rotate-x-12 scale-90 hover:rotate-x-0 transition-transform duration-700 ease-out">
          
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(skill)}
              className="group relative h-48 cursor-pointer"
            >
              {/* --- THE REACTOR CARD --- */}
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 group-hover:-translate-y-4 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                
                {/* Internal Noise Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                
                {/* The "Power Ring" (Centered) */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-dashed border-${skill.color}-500/30 group-hover:border-${skill.color}-400 group-hover:animate-[spin_4s_linear_infinite] transition-colors duration-500`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-${skill.color}-500/20 group-hover:border-${skill.color}-500/60 transition-colors`} />

                {/* The Icon/Logo (Floating) */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.logo ? (
                     <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                  ) : (
                     <skill.icon size={28} className={`text-gray-500 group-hover:text-${skill.color}-400 transition-colors`} />
                  )}
                </div>

                {/* Text Label (Bottom) */}
                <div className="absolute bottom-4 w-full text-center z-10 px-2">
                   <p className="text-xs uppercase font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors mb-1">
                     {skill.name}
                   </p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-gray-700 rounded-full group-hover:bg-white transition-colors" />
                <div className="absolute top-2 right-2 w-1 h-1 bg-gray-700 rounded-full group-hover:bg-white transition-colors" />

                {/* Hover Scan Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${skill.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              </div>
              
              {/* Floor Shadow */}
              <div className="absolute -bottom-6 left-4 right-4 h-4 bg-black/60 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            </motion.div>
          ))}

        </div>
      </div>

      {/* 3. DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#050505] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Neon Top Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r from-${selected.color}-600 to-${selected.color}-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]`} />

              <div className="p-8 relative">
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-${selected.color}-500/10 blur-[100px] rounded-full pointer-events-none`} />

                <div className="flex items-start gap-6 relative z-10">
                  <div className={`p-4 rounded-xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center min-w-[70px] min-h-[70px]`}>
                    {selected.logo ? (
                       <img src={selected.logo} alt={selected.name} className="w-10 h-10 object-contain" />
                    ) : (
                       <selected.icon size={36} className={`text-${selected.color}-400`} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded border border-${selected.color}-500/30 text-${selected.color}-400 bg-${selected.color}-500/10`}>
                         {selected.category}
                       </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selected.name}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{selected.desc}</p>
                  </div>
                </div>

                {/* Tech Specs Footer */}
                <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] text-gray-600 uppercase tracking-wider mb-1">Impact</span>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-${selected.color}-500 w-[95%]`} />
                    </div>
                  </div>
                  <div className="text-right">
                     <span className="block text-[10px] text-gray-600 uppercase tracking-wider mb-1">Verification</span>
                     <span className="text-xs font-mono text-green-500">● PROVEN IN PROD</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}