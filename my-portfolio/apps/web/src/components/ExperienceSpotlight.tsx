'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, MapPin } from 'lucide-react';

const stats = [
  {
    label: "Current Role",
    value: "DevOps Engineer",
    sub: "@ Hash Turn",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    label: "Core Focus",
    value: "Automation",
    sub: "& Cloud Infrastructure",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    label: "Based In",
    value: "Multan",
    sub: "Pakistan",
    icon: <MapPin className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  }
];

export default function ExperienceSpotlight() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* The Spotlight Container */}
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 group"
        >
          
          {/* The Moving Spotlight Effect (Behind the cards) */}
          <div
            className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }}
          />

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 overflow-hidden transition-colors hover:bg-neutral-800/50"
            >
              {/* Card Glow Border Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className={`mb-4 p-3 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-10 bg-clip-border border border-white/10 shadow-lg shadow-blue-500/10`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                <h3 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {stat.label}
                </h3>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-neutral-500 mt-1">
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}