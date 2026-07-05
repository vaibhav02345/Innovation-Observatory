import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import VisionMission from '../components/sections/VisionMission';
import Matrix from '../components/sections/Matrix';
import Impact from '../components/sections/Impact';
import CommandCenter from '../components/sections/CommandCenter';
import Footer from '../components/layout/Footer';
import JoinModal from '../components/ui/JoinModal';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    return () => {
      lenis.destroy();
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
        <VisionMission />
        <Matrix />
        <Impact />
        <CommandCenter />
      </main>
      
      <Footer />
      
      <JoinModal />

      <style>{`
      @keyframes scan {
        0% { top: -100px; }
        100% { top: 100vh; }
      }
    `}</style>
    </div>
  );
};

export default HomePage;
