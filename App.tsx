import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Intersection Observer to update active section in navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      
      // Find the section that is currently most visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-brand-500 selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main className="flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <About />
        </section>
        
        <section id="projects" className="py-20 px-4 md:px-8 bg-slate-800/50 w-full">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>
        
        <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <Experience />
        </section>
        
        <section id="contact" className="py-20 px-4 md:px-8 bg-slate-900 w-full relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <Contact />
          </div>
          {/* Background decoration for contact */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <ChatWidget />
    </div>
  );
};

export default App;