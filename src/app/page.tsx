"use client";

import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SkillShowcase from "../components/SkillShowcase";
import Experience from "../components/Experience";

const SectionWrapper = ({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3, rootMargin: '20px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const MinimalDivider = () => {
  return (
    <div className="relative py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800/30" />
      </div>
      <div className="relative flex justify-center">
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
      </div>
    </div>
  );
};

const SubtleBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      
      {/* Subtle accent lines */}
      <div 
        className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
      <div 
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
    </div>
  );
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#0a0a0c] text-white relative font-[Inter]">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-900/80 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 ease-out shadow-lg shadow-cyan-500/30"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <SubtleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="transform transition-all duration-500 ease-out">
          <Navbar />
        </div>

        {/* Hero */}
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <MinimalDivider />

        {/* About */}
        <SectionWrapper delay={100}>
          <AboutMe />
        </SectionWrapper>

        <MinimalDivider />

        {/* Experience */}
        <SectionWrapper delay={120}>
          <Experience />
        </SectionWrapper>

        <MinimalDivider />

        {/* Skills */}
        <SectionWrapper delay={150}>
          <SkillShowcase />
        </SectionWrapper>

        <MinimalDivider />

        {/* Projects */}
        <SectionWrapper delay={200}>
          <Projects />
        </SectionWrapper>

        <MinimalDivider />

        {/* Contact */}
        <SectionWrapper delay={250}>
          <Contact />
        </SectionWrapper>

        {/* Footer */}
        <SectionWrapper delay={300}>
          <Footer />
        </SectionWrapper>
      </div>

      {/* Professional styling */}
      <style jsx global>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Refined scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(10, 10, 12, 0.9);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.7), rgba(59, 130, 246, 0.9));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 1));
        }
        
        /* Text selection */
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }
        
        /* Focus states */
        *:focus-visible {
          outline: 3px solid rgba(59, 130, 246, 0.6);
          outline-offset: 3px;
        }
      `}</style>
    </main>
  );
}
