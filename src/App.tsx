import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CertsSection from './components/CertsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpecializationAccordionList from './components/SpecializationAccordionList';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Navigate smoothly to target section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Setup Dynamic Scroll Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'certs', 'experience', 'projects', 'contact'];
    
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active mid-to-top viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-700 font-sans antialiased relative selection:bg-slate-900/10 selection:text-slate-900">
      
      {/* Background Ambience Overlays (Industrial Slate Glow) */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-1/3 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none z-0" />

      {/* Main Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Structured Single-Screen Content Rows */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12" id="specializations">
          <SpecializationAccordionList />
        </section>

        <CertsSection />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </main>

      {/* Enterprise Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

