import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar'; // <--- MAKE SURE THIS PATH IS CORRECT

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmad - Cloud Engineer',
  description: 'Portfolio of a DevOps & Cloud Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        
        {/* FORCE THE NAVBAR TO RENDER HERE */}
        <Navbar />
        
        <main className="relative z-0">
          {children}
        </main>
        
      </body>
    </html>
  );
}