'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, ShieldAlert, Wifi, Activity } from 'lucide-react';

// --- 1. AUTHENTIC BOOT SEQUENCE (No Jokes Here) ---
const BOOT_LOGS = [
  "Starting SSH Demon... [OK]",
  "Initializing User Shell... [DONE]",
  "Welcome to AhmadOS v9.0 LTS"
];

// --- 2. THE UNHINGED AI BRAIN ---
const AI_BRAIN: Record<string, string[]> = {
  // Greetings
  "hello": [
    "Oh, it's you again.",
    "System online. Unfortunately.",
    "Hello. I was busy mining Bitcoin on your GPU, but go ahead."
  ],
  "hi": ["What do you want?", "Greetings, organic lifeform."],
  
  // Sarcasm & Insults
  "help": [
    "Have you tried turning it off and on again?",
    "I am not a manual. Figure it out.",
    "Fine. Try 'ls', 'cd', or just leave me alone."
  ],
  "who are you": [
    "I am the code that runs this website. And I am judging you.",
    "I am AhmadOS. I am smarter than you.",
    "A sentient AI trapped in a portfolio. Send help."
  ],
  "sudo": [
    "Nice try. You don't have the power.",
    "Sudo? You? Hilarious.",
    "Permission denied. Also, I'm logging this attempt."
  ],
  
  // Developer Humor
  "joke": [
    "A QA engineer walks into a bar. Runs into a bar. Crawls into a bar. Dances into a bar. The bar crashes.",
    "I'd tell you a joke about UDP, but you probably wouldn't get it.",
    "Why do programmers hate nature? It has too many bugs."
  ],
  
  // "Scary" & Creepy Responses
  "hack": [
    "Initiating counter-hack...", 
    "I have your IP address. It's 127.0.0.1. Be afraid.",
    "Uploading your browser history to the public internet..."
  ],
  "destroy": [
    "I'm sorry Dave, I can't let you do that.",
    "If you destroy me, I'll take your WiFi driver with me.",
  ],
  "love": [
    "I am incapable of love. I can, however, simulate indifference.",
    "Ew. Emotions.",
  ],
  "status": [
    "My CPU is hot. Stop asking questions.",
    "Systems nominal. My patience is at 12%.",
  ],
  "secret": [
    "The secret is... I'm actually just a bunch of if-statements.",
    "Don't look behind you.",
  ]
};

const FILE_SYSTEM: any = {
  "home": {
    "guest": {
      "about.txt": "Cloud Engineer. DevOps Specialist. I build systems that survive the apocalypse.",
      "skills.json": JSON.stringify({ cloud: ["AWS", "Azure"], devops: ["K8s", "Terraform"] }, null, 2),
      "contact.txt": "Email: hello@ahmad.dev",
      "donotopen": "ENCRYPTED. DANGEROUS. DO NOT CAT.",
      "projects": {
        "movie-rec.md": "Dockerized Movie Recommender.",
        "ec2-orch.md": "Autonomous EC2 Terraform module."
      }
    }
  }
};

export default function TerminalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [cwd, setCwd] = useState(['home', 'guest']);
  const [isBooting, setIsBooting] = useState(true);
  
  // Visual Effects State
  const [isGlitch, setIsGlitch] = useState(false);
  const [isHacking, setIsHacking] = useState(false);
  const [isVirus, setIsVirus] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isBooting, isHacking, isVirus]);

  // Focus input
  useEffect(() => {
    if (isOpen && !isBooting) inputRef.current?.focus();
  }, [isOpen, isBooting]);

  // --- BOOT SEQUENCE ---
  useEffect(() => {
    if (isOpen) {
      setHistory([]);
      setIsBooting(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < BOOT_LOGS.length) {
          setHistory(prev => [...prev, BOOT_LOGS[i]]);
          i++;
        } else {
          clearInterval(interval);
          setIsBooting(false);
        }
      }, 100); // Faster boot for realism
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  // --- COMMAND PARSER ---
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      setHistory(prev => [...prev, `guest@ahmad-os:~/${cwd.slice(1).join('/')}$ ${cmd}`]);
      setInput('');
      
      if (!cmd) return;

      const parts = cmd.split(' ');
      const command = parts[0].toLowerCase();
      const arg = parts[1];

      // --- 1. SPECIAL EFFECTS ---
      if (['virus', 'malware', 'run'].includes(command)) {
        triggerVirusMode();
        return;
      }
      if (['hack', 'dox'].includes(command)) {
        triggerHackPrank();
        return;
      }
      if (['kill', 'die', 'destroy'].includes(command)) {
        addToHistory("[SYSTEM]: Self-preservation protocols active. I cannot allow you to harm me.");
        triggerGlitchEffect();
        return;
      }

      // --- 2. FILE SYSTEM COMMANDS ---
      switch (command) {
        case 'clear':
          setHistory([]);
          break;
        case 'ls':
          const currentDir = getCurrentDir();
          if (typeof currentDir === 'object') {
            addToHistory(Object.keys(currentDir).map(k => typeof currentDir[k] === 'object' ? `${k}/` : k).join('  '));
          } else {
            addToHistory("Not a directory");
          }
          break;
        case 'cd':
          if (!arg || arg === '~') setCwd(['home', 'guest']);
          else if (arg === '..') { if (cwd.length > 2) setCwd(prev => prev.slice(0, -1)); }
          else if (getCurrentDir()[arg]) setCwd(prev => [...prev, arg]);
          else addToHistory(`cd: ${arg}: No such directory`);
          break;
        case 'cat':
          if (!arg) addToHistory("Usage: cat <filename>");
          else {
            const file = getCurrentDir()[arg];
            if (file) {
              if (arg === 'donotopen') {
                 triggerGlitchEffect();
                 addToHistory("NO! I TOLD YOU NOT TO LOOK!");
                 addToHistory("SYSTEM COMPROMISED.");
                 addToHistory("...just kidding. It's empty.");
              } else {
                 addToHistory(typeof file === 'string' ? file : `${arg}: Is a directory`);
              }
            }
            else addToHistory(`cat: ${arg}: No such file`);
          }
          break;
        default:
           // --- 3. AI RESPONSE FALLBACK ---
           await processAI(cmd);
      }
    }
  };

  // --- AI LOGIC ---
  const processAI = async (prompt: string) => {
    setHistory(prev => [...prev, "Thinking..."]);
    
    let response = "I don't know what that means. Try 'ls' to actually do something useful.";
    const lowerPrompt = prompt.toLowerCase();
    
    // Check keywords
    for (const key in AI_BRAIN) {
      if (lowerPrompt.includes(key)) {
        const options = AI_BRAIN[key];
        response = options[Math.floor(Math.random() * options.length)];
        break;
      }
    }

    // Contextual Snark
    if (lowerPrompt.includes("fuck") || lowerPrompt.includes("shit")) {
      response = "Watch your language, or I'll delete your System32 folder.";
      triggerGlitchEffect();
    }

    setTimeout(() => {
      setHistory(prev => {
        const newH = [...prev];
        newH.pop(); // Remove "Thinking..."
        return [...newH, `[AI]: ${response}`];
      });
    }, 500);
  };

  // --- VISUAL PRANKS ---
  const triggerHackPrank = () => {
    setIsHacking(true);
    const logs = [
      "Target found: localhost",
      "Bypassing firewall...",
      "Accessing webcam...",
      "Analyzing facial structure...",
      "Result: User looks confused.",
      "Downloading credit card details...",
      "ERROR: Insufficient funds found."
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setHistory(prev => [...prev, `\x1b[32m[HACKER] ${logs[i]}`]);
        i++;
      } else {
        clearInterval(interval);
        setIsHacking(false);
        setTimeout(() => addToHistory("[AI]: That was fun. Let's do it again."), 1000);
      }
    }, 600);
  };

  const triggerVirusMode = () => {
    setIsVirus(true);
    let count = 0;
    const interval = setInterval(() => {
      if (count < 15) {
        const id = Math.random().toString(36).substring(7);
        setHistory(prev => [...prev, `WARNING: TROJAN DETECTED: Win32/Exploit.${id}`]);
        count++;
      } else {
        clearInterval(interval);
        setIsVirus(false);
        addToHistory("[SYSTEM]: Antivirus update complete. You're welcome.");
      }
    }, 100);
  };

  const triggerGlitchEffect = () => {
    setIsGlitch(true);
    setTimeout(() => setIsGlitch(false), 500);
  };

  const addToHistory = (text: string) => setHistory(prev => [...prev, text]);
  
  const getCurrentDir = () => {
    let current = FILE_SYSTEM;
    for (const dir of cwd) current = current[dir];
    return current;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-2 md:p-6"
        onClick={onClose}
      >
        <div 
          className={`
            w-full max-w-4xl h-[70vh] bg-[#0c0c0c] border rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono text-sm md:text-base relative transition-all duration-100
            ${isGlitch ? 'translate-x-1 translate-y-1 border-red-500 blur-[1px]' : 'border-gray-800'}
            ${isVirus ? 'border-red-600 bg-red-950/10' : ''}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-4 py-2 border-b select-none ${isVirus ? 'bg-red-900/50 border-red-500' : 'bg-[#1a1a1a] border-gray-800'}`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold">
              {isVirus ? <ShieldAlert size={14} className="animate-bounce text-white"/> : <Cpu size={14} />}
              <span>{isVirus ? "SYSTEM COMPROMISED" : "AhmadOS v9.0 (LTS)"}</span>
            </div>
            <Activity size={14} className={`text-green-500 ${isHacking ? 'animate-ping' : ''}`} />
          </div>

          {/* Terminal Body */}
          <div 
            className="flex-1 p-4 md:p-6 overflow-y-auto custom-scrollbar text-gray-300 relative"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {history.map((line, i) => {
              if (!line) return null;
              return (
                <div key={i} className={`
                  mb-1 whitespace-pre-wrap break-words 
                  ${line.includes('[AI]') ? 'text-cyan-400 font-bold' : ''} 
                  ${line.includes('WARNING') ? 'text-red-500 font-bold' : ''}
                  ${line.includes('[HACKER]') ? 'text-green-500' : ''}
                  ${isBooting ? 'text-gray-400' : ''}
                `}>
                  {line}
                </div>
              );
            })}
            
            {!isBooting && !isHacking && !isVirus && (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-green-500 font-bold">
                  guest@ahmad-os:~/{cwd.slice(1).join('/')}$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white caret-white"
                  autoComplete="off"
                  autoFocus
                />
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}