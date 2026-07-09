import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Compass } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Typing effect for "Innovation"
  const word = 'Innovation';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && displayText === word) {
      // Finished typing — pause 2s then start deleting
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      // Finished deleting — pause 500ms then start typing
      const pause = setTimeout(() => setIsDeleting(false), 500);
      return () => clearTimeout(pause);
    }

    const speed = isDeleting ? 80 : 130;
    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? word.slice(0, prev.length - 1)
          : word.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  useEffect(() => {
    const heroTl = gsap.timeline();

    const paths = svgRef.current?.querySelectorAll('.topo-line');
    paths?.forEach(path => {
      const p = path as SVGPathElement;
      const length = p.getTotalLength();
      p.style.strokeDasharray = `${length}`;
      p.style.strokeDashoffset = `${length}`;
      heroTl.to(p, {
        strokeDashoffset: 0,
        opacity: 0.4,
        duration: 2,
        ease: "power2.inOut"
      }, "-=1.5");
    });
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen pt-20 overflow-hidden flex items-stretch border-b border-text-secondary/20">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-[100px] left-[100px] text-[8px] font-mono text-accent uppercase tracking-[0.5em]">LAT: 51.5074° N</div>
        <div className="absolute top-[100px] right-[100px] text-[8px] font-mono text-text-secondary/40 uppercase tracking-[0.5em]">SCAN_ACTIVE</div>
        <div className="absolute bottom-[100px] left-[100px] text-[8px] font-mono text-text-secondary/40 uppercase tracking-[0.5em]">LNG: 0.1278° W</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        <div className="lg:col-span-8 lg:border-r border-text-secondary/20 flex flex-col justify-center p-6 sm:p-10 lg:p-20 pt-28 sm:pt-32 lg:pt-40">
          <div className="mb-4 sm:mb-6 flex items-center space-x-3 sm:space-x-4">
            <span className="w-8 sm:w-12 h-px bg-accent"></span>
            <span className="text-[9px] sm:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-accent font-mono">System Initialization: Active</span>
          </div>

          <h1 className="font-satoshi text-[clamp(2.2rem,8vw,8.5rem)] font-bold leading-[0.85] tracking-tighter uppercase mb-8 sm:mb-12 text-white">
            Where<br />
            <span className="text-accent">Observation</span><br />
            Meets<br />
            <span className="inline-flex items-baseline">
              {displayText}
              <span className="inline-block w-[3px] sm:w-[4px] lg:w-[6px] h-[0.85em] bg-accent ml-1 animate-[blink_1s_step-end_infinite]" />
            </span>
          </h1>
          <div className="max-w-xl">
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary text-gray-400 leading-relaxed mb-8 sm:mb-10 font-inter">
              We don't teach students what to build. We teach them how to discover what deserves to be built through systematic observation and critical inquiry.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-satoshi">01</span>
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-widest text-text-secondary mt-1">Foundational Inquiry</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-satoshi">02</span>
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-widest text-text-secondary mt-1">Problem Synthesis</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-satoshi">03</span>
                <span className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-widest text-text-secondary mt-1">Impact Validation</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 relative flex flex-col justify-between p-6 sm:p-10 bg-surface/30">
          <div className="w-full aspect-square relative flex items-center justify-center max-w-[300px] lg:max-w-none mx-auto">
            <svg ref={svgRef} viewBox="0 0 400 400" className="w-full stroke-accent stroke-[0.5] fill-none opacity-0">
              <path className="topo-line" d="M150,150 Q200,100 250,150 T350,150" />
              <path className="topo-line" d="M120,180 Q200,130 280,180 T380,180" />
              <path className="topo-line" d="M100,210 Q200,160 300,210 T400,210" />
              <path className="topo-line" d="M80,240 Q200,190 320,240 T420,240" />
              <path className="topo-line" d="M60,270 Q200,220 340,270 T440,270" />
              <circle className="topo-line" cx="200" cy="200" r="100" />
              <circle className="topo-line" cx="200" cy="200" r="120" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 border border-accent/30 rounded-full animate-[spin_20s_linear_infinite] relative"></div>
              <Compass className="absolute text-accent w-16 h-16 opacity-80" strokeWidth={1.5} />
              <div className="absolute mt-28 sm:mt-32 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-mono text-accent/80 text-center max-w-[140px]">Providing direction to people, ideas & thinking</div>
              <div className="absolute bottom-[-60px] sm:bottom-[-100px] flex flex-col items-center">
                <div className="text-[9px] uppercase tracking-[0.3em] font-mono text-text-secondary mb-4">Scroll to Observe</div>
                <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-accent to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="font-mono text-[9px] sm:text-[10px] leading-relaxed text-accent/60 uppercase tracking-widest mt-10">
            <div>&gt; Observation Index: 99.2%</div>
            <div>&gt; Precision Mapping: Active</div>
            <div>&gt; Latency: 0.002ms</div>
            <div className="mt-4 text-text-primary opacity-100 text-[7px] sm:text-[8px]">Innovation Observatory v2.0 // Swiss Precision Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;