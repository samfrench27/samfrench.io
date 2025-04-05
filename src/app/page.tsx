// src/app/page.tsx update
"use client";
import { useState, useEffect } from 'react';
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
import TerminalStartup from '@/components/TerminalStartup';

export default function Home() {
  const { isDarkMode } = useTheme();
  const [showTerminal, setShowTerminal] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [terminalExiting, setTerminalExiting] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Clear localStorage in development for testing
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Uncomment this line to always show the terminal in development
      // localStorage.removeItem('visited');
    }
  }, []);

  // Function to handle terminal completion
  const handleTerminalComplete = () => {
    // Start the exit animation for the terminal
    setTerminalExiting(true);
    
    // Small delay before removing terminal and showing main content
    setTimeout(() => {
      setShowTerminal(false);
      setShowContent(true);
      
      // Mark as visited for future navigations
      try {
        localStorage.setItem('visited', 'true');
      } catch (e) {
        console.error('Error setting localStorage', e);
      }
    }, 1200);
  };

  // Initialize on client-side
  useEffect(() => {
    if (initialized) return;
    
    let hasVisited = false;
    
    try {
      hasVisited = localStorage.getItem('visited') === 'true';
    } catch (e) {
      console.error('Error accessing localStorage', e);
    }
    
    if (hasVisited) {
      // Skip the terminal animation if already visited
      setShowTerminal(false);
      setShowContent(true);
    } else {
      // First visit, show terminal
      setShowTerminal(true);
      setShowContent(false);
    }
    
    setInitialized(true);
  }, [initialized]);

  return (
    <div className="relative min-h-screen">
      {showTerminal && (
        <TerminalStartup onComplete={handleTerminalComplete} isExiting={terminalExiting} />
      )}
      
      <main 
        className={`transition-all duration-1000 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-slate-800' : 'bg-gradient-to-b from-white to-gray-50'} ${showContent ? 'main-content-fade-in' : 'opacity-0'}`}
      >
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
    </div>
  );
}