// src/app/page.tsx update
"use client";
import { useTheme } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CompanyBanner from '@/components/CompanyBanner';
import InteractiveJourney from '@/components/InteractiveJourney';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillRadarChart from '@/components/SkillRadarChart';
import PersonalityQuiz from '@/components/PersonalityQuiz';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DevProjects from '@/components/DevProjects';
import DevSkills from '@/components/DevSkills';

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <main className={`transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <Header />
      {!isDarkMode && <CompanyBanner />}
      <Hero />
      
      {isDarkMode ? (
        // Night Mode - Developer Content
        <>
          <section id="about" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 relative">
                Developer Skills
                <span className="block w-20 h-1 bg-pink-500 mx-auto mt-4"></span>
              </h2>
              <DevSkills />
            </div>
          </section>
          
          <section id="dev-projects" className="py-20 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 relative">
                Code Projects
                <span className="block w-20 h-1 bg-pink-500 mx-auto mt-4"></span>
              </h2>
              <DevProjects />
            </div>
          </section>
        </>
      ) : (
        // Day Mode - Product Director Content
        <>
          <section id="about" className="py-20">
            <About />
          </section>
          
          <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto">
              <InteractiveJourney />
            </div>
          </section>
          
          <section id="projects" className="py-20 bg-white">
            <ProjectShowcase />
          </section>
          
          <section id="skills" className="py-20 bg-gray-50">
            <SkillRadarChart />
          </section>
          
          <section id="quiz" className="py-20 bg-white">
            <PersonalityQuiz />
          </section>
        </>
      )}
      
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}