'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

function ParticleCloud(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    const x = (state.mouse.x * Math.PI) / 10;
    const y = (state.mouse.y * Math.PI) / 10;
    ref.current.rotation.x += (y - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#3B82F6" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function HeroMinimal() {
  return (
    <section className="relative w-full h-screen bg-white dark:bg-[#050505] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleCloud />
        </Canvas>
      </div>

      <div className="z-10 relative text-center px-4 max-w-5xl mx-auto pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-widest backdrop-blur-md"
        >
          SYSTEMS LIMITED • HASH TURN • FAYSAL BANK
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 pointer-events-auto"
        >
          Ahmad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Wasim</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light mb-10 max-w-3xl mx-auto pointer-events-auto leading-relaxed"
        >
          From Chaos to <span className="text-white font-medium">Secure Cloud Order</span>. <br/>
          Specializing in AWS, Azure, & IaC to streamline delivery and reduce operational risk.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
            Explore My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/ahmedwsiim" target="_blank" className="p-4 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="p-4 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-800 hover:text-white transition-all">
              <Github size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}