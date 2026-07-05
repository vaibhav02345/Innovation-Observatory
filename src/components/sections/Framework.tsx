import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Lightbulb, ClipboardCheck, Rocket, Flag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Observe", sub: "Look beyond the obvious. Notice problems, patterns and behaviors.", icon: Eye },
  { title: "Understand", sub: "Dig deeper. Understand the real problem and the people behind it.", icon: Lightbulb },
  { title: "Validate", sub: "Test your assumptions. Validate with real users and real data.", icon: ClipboardCheck },
  { title: "Build", sub: "Build simple. Iterate fast. Create solutions that truly solve the problem.", icon: Rocket },
  { title: "Launch", sub: "Launch, learn and keep improving. Impact is the ultimate goal.", icon: Flag },
];

const Framework: React.FC = () => {
  const progressRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate the path drawing
    if (progressRef.current) {
      const length = progressRef.current.getTotalLength();
      gsap.set(progressRef.current, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: '#framework',
          start: "top 50%",
          end: "bottom 50%",
          scrub: 0.5
        },
        strokeDashoffset: 0,
        ease: "none"
      });
    }

    nodesRef.current.forEach((node, index) => {
      if (node) {
        ScrollTrigger.create({
          trigger: '#framework',
          start: `${(index / steps.length) * 100}% center`,
          onEnter: () => {
            gsap.to(node.querySelector('.node-circle'), {
              borderColor: "#D4A017",
              color: "#D4A017",
              duration: 0.5
            });
            gsap.to(node.querySelector('.node-num'), {
              backgroundColor: "#D4A017",
              color: "#000",
              duration: 0.5
            });
          },
          onLeaveBack: () => {
            gsap.to(node.querySelector('.node-circle'), {
              borderColor: "#111",
              color: "#A8A8A8",
              duration: 0.5
            });
            gsap.to(node.querySelector('.node-num'), {
              backgroundColor: "transparent",
              color: "#D4A017",
              duration: 0.5
            });
          }
        });
      }
    });
  }, []);

  // Use a sine-wave offset to make them flow smoothly along an S-curve path
  const yOffsets = [150, 0, 150, 300, 150];

  return (
    <section id="framework" className="relative py-20 lg:py-40 bg-surface/20 border-t border-b border-text-secondary/20 overflow-hidden">
      <div className="px-6 lg:px-20 mb-16 lg:mb-32 text-center lg:text-left">
        <h2 className="text-[10px] lg:text-xs tracking-[0.5em] uppercase text-accent mb-4 lg:mb-6 font-mono">Our Framework</h2>
        <div className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold tracking-tighter uppercase mb-6">A simple journey<br />from observation<br /><span className="text-accent">to impact.</span></div>
      </div>
      
      <div className="relative w-full px-6 lg:px-20 overflow-x-auto pb-20 lg:pb-40 no-scrollbar">
        <div className="flex items-start min-w-[1200px] lg:min-w-[1400px] relative py-16 lg:py-24 h-[650px]">
          
          {/* Curved connecting S-curve line */}
          <div className="absolute top-[50px] sm:top-[70px] left-[10%] w-[80%] h-[300px] z-0 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" className="overflow-visible">
                <path d="M 0,150 C 125,150 125,0 250,0 C 375,0 375,150 500,150 C 625,150 625,300 750,300 C 875,300 875,150 1000,150" fill="none" stroke="rgba(168,168,168,0.3)" strokeWidth="2" strokeDasharray="10 10" />
                <path ref={progressRef} d="M 0,150 C 125,150 125,0 250,0 C 375,0 375,150 500,150 C 625,150 625,300 750,300 C 875,300 875,150 1000,150" fill="none" stroke="#D4A017" strokeWidth="4" />
             </svg>
          </div>
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className="flex-1 flex flex-col items-center relative z-10 px-4 transition-all"
                style={{ marginTop: `${yOffsets[i]}px` }}
              >
                <div className="node-num text-accent font-mono text-sm mb-4 font-bold border-2 border-accent rounded-full w-8 h-8 flex items-center justify-center bg-background transition-colors duration-500 absolute -top-12 z-20">
                  0{i+1}
                </div>
                
                {/* Car Wheel styling */}
                <div className="node-circle w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[#0a0a0a] border-[8px] border-[#111] text-text-secondary flex items-center justify-center mb-6 sm:mb-8 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer">
                  <div className="absolute inset-1 rounded-full border-4 border-text-secondary/10 pointer-events-none"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                    <div className="w-full h-1 bg-text-secondary absolute"></div>
                    <div className="h-full w-1 bg-text-secondary absolute"></div>
                  </div>
                  
                  <div className="absolute inset-4 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                  </div>
                </div>
                
                <span className="text-xl sm:text-2xl font-satoshi font-bold uppercase mb-4 text-center tracking-widest text-text-primary bg-background/50 backdrop-blur-md px-2 py-1 rounded-sm">
                  {step.title}
                </span>
                <span className="text-xs sm:text-sm text-text-secondary text-center max-w-[200px] sm:max-w-[220px] font-inter leading-relaxed bg-background/50 backdrop-blur-md px-2 py-1 rounded-sm">
                  {step.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Framework;