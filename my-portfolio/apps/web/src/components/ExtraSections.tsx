'use client';
import { Award, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// --- CERTIFICATIONS DATA ---
const certs = [
  { 
    title: "Introduction to Containers, K8s & OpenShift", 
    issuer: "IBM", 
    date: "Sep 2024",
    id: "F9DN3H7QU988", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    color: "bg-blue-100 dark:bg-[#052350]"
  },
  { 
    title: "OCI Foundations Associate 2024", 
    issuer: "Oracle", 
    date: "Aug 2024",
    id: "Certified", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    color: "bg-red-100 dark:bg-[#3a0b0b]"
  },
  { 
    title: "API Fundamentals Student Expert", 
    issuer: "Postman", 
    date: "Sep 2024",
    id: "66d9fc8a", 
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    color: "bg-orange-100 dark:bg-[#331505]"
  },
  { 
    title: "Security Principles in Cloud Computing", 
    issuer: "Google Cloud", 
    date: "2024",
    id: "Verify", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    color: "bg-gray-100 dark:bg-[#202124]"
  },
  { 
    title: "Cloud Fundamentals & Risk Management", 
    issuer: "Google Cloud", 
    date: "2024",
    id: "Verify", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    color: "bg-gray-100 dark:bg-[#202124]"
  },
  { 
    title: "Cybersecurity & ICS Domains", 
    issuer: "US-DHS", 
    date: "2024",
    id: "CISA", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Seal_of_the_United_States_Department_of_Homeland_Security.svg",
    color: "bg-blue-50 dark:bg-[#0a1a30]"
  },
  { 
    title: "Version Control with Git", 
    issuer: "Atlassian", 
    date: "2024",
    id: "Bitbucket", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Atlassian_logo.svg",
    color: "bg-blue-50 dark:bg-[#001533]"
  }
];

export function Certifications() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
            <Award size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Licenses & <span className="text-blue-600">Certifications</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div 
              key={i} 
              className="group relative flex items-start gap-5 p-6 rounded-3xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              
              {/* Logo Box */}
              <div className={`relative shrink-0 w-16 h-16 flex items-center justify-center p-3 rounded-2xl ${c.color} border border-gray-200 dark:border-white/5`}>
                <Image 
                  src={c.logo} 
                  alt={c.issuer} 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1 truncate pr-4" title={c.title}>
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {c.issuer} • <span className="text-xs">{c.date}</span>
                </p>
                
                {/* ID Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-500 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                  <ShieldCheck size={12} />
                  <span>{c.id}</span>
                </div>
              </div>

              {/* Hover External Icon */}
              <div className="absolute top-6 right-6 text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-colors">
                <ExternalLink size={16} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- VOLUNTEERING COMPONENT (UNCHANGED) ---
export function Volunteering() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
          <Heart className="text-red-500 fill-red-500" /> Volunteering & Leadership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DevOps Lead @ MLSA-Multan</h3>
            <p className="text-sm text-gray-500 mb-4">Jul 2024 - Apr 2025</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Designed a comprehensive cloud study plan for students across Pakistan. Simplified complex cloud concepts to foster awareness and skill development among the youth.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 relative overflow-hidden group hover:border-green-500/30 transition-all">
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Co-Founder @ Taj Foundation</h3>
            <p className="text-sm text-gray-500 mb-4">Jan 2021 - Present</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Organized impactful charitable campaigns including Ramadan Drives and medical support. Distributed meals and raised funds for flood survivors in vulnerable communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}