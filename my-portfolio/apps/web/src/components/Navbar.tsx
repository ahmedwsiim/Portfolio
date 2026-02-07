'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Code2, Cpu, Github, Linkedin, Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import TerminalModal from './TerminalModal'; // <--- IMPORT THIS

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#skills' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); // <--- NEW STATE

  // Force Dark Mode Logic
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <>
      {/* --- THE TERMINAL MODAL --- */}
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* DESKTOP DYNAMIC ISLAND */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto flex items-center p-2 gap-2 rounded-full bg-white/80 dark:bg-[#111]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl transition-colors duration-300"
        >
          {/* Logo - NOW CLICKABLE */}
          <button 
            onClick={() => setIsTerminalOpen(true)} // <--- TRIGGER HERE
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:scale-105 transition-transform hover:bg-blue-700 cursor-pointer shadow-lg shadow-blue-500/20"
            title="Open Terminal System"
          >
            <Terminal size={20} />
          </button>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-1 mx-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === link.name 
                    ? 'text-black dark:text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gray-200/50 dark:bg-white/10 rounded-full border border-black/5 dark:border-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1 hidden md:block" />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-yellow-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="https://linkedin.com/in/ahmedwsiim" target="_blank" className="hidden md:flex px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-colors">
              Connect
            </a>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 p-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl origin-top"
          >
            <div className="flex flex-col gap-2">
              {/* Added Terminal Option to Mobile Menu too */}
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsTerminalOpen(true); }}
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white font-bold flex items-center gap-2"
              >
                <Terminal size={18} className="text-blue-500" /> Open Terminal
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white font-bold"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
              <button 
                onClick={toggleTheme} 
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 text-black dark:text-white font-bold flex items-center gap-2"
              >
                {theme === 'dark' ? <><Sun size={18}/> Light Mode</> : <><Moon size={18}/> Dark Mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}