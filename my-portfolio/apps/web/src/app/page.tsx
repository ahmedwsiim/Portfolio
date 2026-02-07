import Navbar from '@/components/Navbar';
import HeroMinimal from '@/components/HeroMinimal';
import ExperienceBar from '@/components/ExperienceBar';
import TechStack from '@/components/TechStack';
import WorkExperience from '@/components/WorkExperience';
import ProjectGrid from '@/components/ProjectGrid';
import { Certifications, Volunteering } from '@/components/ExtraSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* 1. Hero with Particles */}
      <HeroMinimal />

      {/* 2. Glass HUD Stats */}
      <ExperienceBar />

      {/* 3. Infinite Tech Stack (Slower) */}
      <TechStack />

      {/* 4. Detailed Work Experience (New) */}
      <WorkExperience />

      {/* 5. Rich Projects Grid (Updated Data) */}
      <ProjectGrid />

      {/* 6. Certifications (New) */}
      <Certifications />

      {/* 7. Volunteering (New) */}
      <Volunteering />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}