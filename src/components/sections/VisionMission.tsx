import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisionMission: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -150
    });
  }, []);

  return (
    <section className="relative py-40 lg:py-80 overflow-hidden">
      <div ref={bgRef} className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex flex-col items-center pointer-events-none opacity-[0.025]">
        <h2 className="text-[20vw] lg:text-[28vw] font-satoshi font-black uppercase leading-[0.75] select-none">Vision</h2>
        <h2 className="text-[20vw] lg:text-[28vw] font-satoshi font-black uppercase leading-[0.75] select-none">Mission</h2>
      </div>
      
      <div className="relative z-10 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 lg:col-start-2">
          <span className="text-accent text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] mb-6 lg:mb-8 block">// Vision</span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold leading-tight uppercase">
            To cultivate a generation of observant thinkers and fearless builders who solve real-world problems through precision innovation.
          </p>
        </div>
        <div className="lg:col-span-5">
          <span className="text-accent text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] mb-6 lg:mb-8 block">// Mission</span>
          <p className="text-base lg:text-lg text-text-secondary font-inter leading-relaxed">
            At Innovation Observatory, we believe innovation is a mindset before it becomes a product. Through deep observation, critical thinking, and technical mentorship, we nurture problem solvers who don't wait for opportunities—they architect them.
          </p>
          <div className="mt-8 lg:mt-12 w-12 lg:w-20 h-px bg-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;