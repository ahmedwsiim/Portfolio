'use client';

import { useState } from 'react';
import { Copy, Check, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "mo.ahmedwasiim@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-white dark:bg-[#050505] pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tighter">
          Ready to <span className="text-blue-600">Scale?</span>
        </h2>
        
        <p className="text-lg text-gray-500 mb-10">
          Open to opportunities in DevOps, Cloud Engineering, and Automation.
        </p>

        {/* Email Copy Box */}
        <div 
          onClick={handleCopy}
          className="inline-flex items-center gap-4 px-6 py-4 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 cursor-pointer hover:border-blue-500 transition-all group mb-20"
        >
          <div className="p-2 bg-white dark:bg-black rounded-full text-gray-900 dark:text-white">
            <Mail size={20} />
          </div>
          <span className="text-lg font-mono text-gray-600 dark:text-gray-300">
            {email}
          </span>
          <div className="p-2 text-gray-400 group-hover:text-blue-500 transition-colors">
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-10">
          <p>© 2026 Muhammad Ahmad. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="https://github.com/ahmedwsiim" className="hover:text-blue-500 transition">GitHub</a>
             <a href="https://linkedin.com/in/ahmedwsiim" className="hover:text-blue-500 transition">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}