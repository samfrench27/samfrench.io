import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InteractiveJourney from '@/components/InteractiveJourney';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillRadarChart from '@/components/SkillRadarChart';
import PersonalityQuiz from '@/components/PersonalityQuiz';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      
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
      
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}