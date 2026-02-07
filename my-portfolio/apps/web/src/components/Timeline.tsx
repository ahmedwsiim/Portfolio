'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Award } from 'lucide-react';

const milestones = [
  {
    year: "2022 - 2026",
    title: "BS Computer Science",
    org: "Bahauddin Zakariya University",
    desc: "CGPA: 3.85/4.00. Deep diving into Algorithms, OS, and Cloud Computing.",
    icon: <GraduationCap size={20} />,
    type: "education"
  },
  {
    year: "Present",
    title: "DevOps Lead",
    org: "Microsoft Learn Student Amb.",
    desc: "Leading technical workshops and mentoring peers in Azure & DevOps practices.",
    icon: <Users size={20} />,
    type: "leadership"
  },
  {
    year: "2025",
    title: "Cloud Computing Lead",
    org: "The Youth Matrix",
    desc: "Orchestrated cloud seminars and guided students on AWS/GCP fundamentals.",
    icon: <Award size={20} />,
    type: "leadership"
  },
  {
    year: "Certifications",
    title: "Continuous Learning",
    org: "Multi-Platform",
    desc: "IBM Containers, Google Cloud Security, Oracle OCI Foundations.",
    icon: <Award size={20} />,
    type: "cert"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-20">
          Education & <span className="text-blue-600">Leadership</span>
        </h2>

        {/* The Central Line */}
        <div className="absolute left-6 md:left-1/2 top-32 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2">
          <motion.div 
            style={{ height }} 
            className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 origin-top"
          />
        </div>

        <div className="space-y-12">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center md:justify-between ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Empty side for layout balance */}
              <div className="hidden md:block w-5/12" />

              {/* Center Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-black border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center z-10 shadow-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
              </div>

              {/* Card */}
              <div className="ml-16 md:ml-0 w-full md:w-5/12 bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md">
                    {item.year}
                  </span>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  {item.org}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}