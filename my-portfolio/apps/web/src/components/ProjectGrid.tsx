'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Folder, Github, ExternalLink, Server, Database, Cloud, 
  Terminal, Cpu, Code2, Layers, Globe, Smartphone, Lock 
} from 'lucide-react';

// --- PROJECT DATA (From CV) ---
const projects = [
  {
    id: "SYS-01",
    title: "Dockerized Movie Recommender",
    category: "Full Stack DevOps",
    desc: "FastAPI & Streamlit system on Azure. Features secure SSH injection & zero-downtime CI/CD pipelines via GitHub Actions.",
    tech: ["FastAPI", "Azure VM", "Docker", "GitHub Actions"],
    icon: Database,
    color: "blue",
    links: { github: "#", demo: "#" }
  },
  {
    id: "SYS-02",
    title: "Autonomous EC2 Orchestration",
    category: "Infrastructure as Code",
    desc: "Self-provisioning Terraform module for AWS EC2. Includes dynamic AMI lookups, auto-keypair generation, and security hardening.",
    tech: ["Terraform", "AWS EC2", "Bash", "Security Groups"],
    icon: Server,
    color: "purple",
    links: { github: "#", demo: "#" }
  },
  {
    id: "SYS-03",
    title: "Immutable S3 & CloudFront",
    category: "Serverless Architecture",
    desc: "Global delivery network with automated cache invalidation. Reduced latency by 50% using edge locations and immutable deployment strategies.",
    tech: ["AWS S3", "CloudFront", "React", "CI/CD"],
    icon: Cloud,
    color: "cyan",
    links: { github: "#", demo: "#" }
  },
  {
    id: "SYS-04",
    title: "Cloud-Native Flask Uploader",
    category: "Backend Engineering",
    desc: "Secure S3 upload service using Gunicorn & NGINX. Implements scoped IAM roles for least-privilege access on production Linux servers.",
    tech: ["Flask", "NGINX", "IAM", "Gunicorn"],
    icon: Lock,
    color: "red",
    links: { github: "#", demo: "#" }
  },
  {
    id: "SYS-05",
    title: "Docker MERN Platform",
    category: "Container Orchestration",
    desc: "Multi-container architecture with JWT auth. orchestrated via Docker Compose with NGINX reverse proxy for dev/stage/prod parity.",
    tech: ["Docker", "MongoDB", "Express", "React"],
    icon: Layers,
    color: "green",
    links: { github: "#", demo: "#" }
  },
  {
    id: "SYS-06",
    title: "Charity Mobile App",
    category: "Mobile Development",
    desc: "React Native app with real-time Firebase sync. Achieved 0% crash rate in production with custom payment UI and profile management.",
    tech: ["React Native", "Firebase", "Android", "iOS"],
    icon: Smartphone,
    color: "orange",
    links: { github: "#", demo: "#" }
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">System Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Schematics</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg border-l-2 border-gray-800 pl-6">
            A collection of production-grade automated pipelines, resilient cloud infrastructure, and full-stack deployments.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* --- THE BLUEPRINT CARD --- */}
              <div className="relative h-full bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
                
                {/* 1. Scanning Laser Effect (Hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none z-0" />
                
                {/* 2. Top Status Bar */}
                <div className="relative z-10 flex justify-between items-center p-6 border-b border-gray-800/50 bg-[#0c0c0c]">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded bg-${project.color}-500/10 text-${project.color}-400`}>
                      <project.icon size={18} />
                    </div>
                    <span className="font-mono text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                      {project.id}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.links.github} className="text-gray-600 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href={project.links.demo} className="text-gray-600 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>

                {/* 3. Content Area */}
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">
                    {project.category}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed text-sm mb-6 h-20 overflow-hidden">
                    {project.desc}
                  </p>

                  {/* Tech Modules */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-[10px] font-mono text-gray-400 border border-gray-800 rounded bg-gray-900 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Decorative Corner Markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700 group-hover:border-blue-500 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-700 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-700 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700 group-hover:border-blue-500 transition-colors" />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Custom Scan Animation Style */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}