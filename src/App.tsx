import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Framework from './components/sections/Framework';
import VisionMission from './components/sections/VisionMission';
import Matrix from './components/sections/Matrix';
import Projects from './components/sections/Projects';
import Impact from './components/sections/Impact';
import Team from './components/sections/Team';
import CommandCenter from './components/sections/CommandCenter';
import Footer from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth Scroll Init
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Custom Cursor
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover effect for links and buttons
    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 2, backgroundColor: 'rgba(212, 160, 23, 0.1)', duration: 0.3 });
    };
    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    const interactables = document.querySelectorAll('a, button');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef} 
      className="bg-background text-text-primary font-inter selection:bg-accent selection:text-black swiss-grid-lines min-h-screen relative overflow-x-hidden"
    >
      <div className="scanline fixed top-0 left-0 w-full h-[100px] z-99 pointer-events-none opacity-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-[scan_8s_linear_infinite]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Framework />
        <VisionMission />
        <Matrix />
        <Projects />
        <Impact />
        <Team />
        <CommandCenter />
      </main>
      
      <Footer />

      <div 
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-5 h-5 border border-accent rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2" 
      />
      
      <style>{`
        @keyframes scan {
          0% { top: -100px; }
          100% { top: 100vh; }
        }
      `}</style>
    </div>
  );
};

export default App;