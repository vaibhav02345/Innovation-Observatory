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

const desktopClasses = [
  "md:top-[0%] md:left-[10%]",
  "md:top-[20%] md:left-[70%]",
  "md:top-[50%] md:left-[40%]",
  "md:top-[75%] md:left-[10%]",
  "md:top-[95%] md:left-[70%]",
];

const Framework: React.FC = () => {
  const progressRefDesktop = useRef<SVGPathElement>(null);
  const progressRefMobile = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Desktop S-curve drawing
    if (progressRefDesktop.current) {
      const length = progressRefDesktop.current.getTotalLength();
      gsap.set(progressRefDesktop.current, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(progressRefDesktop.current, {
        scrollTrigger: {
          trigger: '#framework-container',
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.5
        },
        strokeDashoffset: 0,
        ease: "none"
      });
    }

    // Mobile straight line drawing
    if (progressRefMobile.current) {
      gsap.fromTo(progressRefMobile.current, 
        { height: "0%" },
        {
          height: "100%",
          scrollTrigger: {
            trigger: '#framework-container',
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5
          },
          ease: "none"
        }
      );
    }

    nodesRef.current.forEach((node) => {
      if (node) {
        ScrollTrigger.create({
          trigger: node,
          start: "top 70%",
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

  return (
    <section id="framework" className="relative py-20 lg:py-40 bg-surface/20 border-t border-b border-text-secondary/20 overflow-hidden">
      <div className="px-6 lg:px-20 mb-16 lg:mb-32 text-center lg:text-left">
        <h2 className="text-[10px] lg:text-xs tracking-[0.5em] uppercase text-accent mb-4 lg:mb-6 font-mono">Our Framework</h2>
        <div className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold tracking-tighter uppercase mb-6">A simple journey<br />from observation<br /><span className="text-accent">to impact.</span></div>
      </div>
      
      <div id="framework-container" className="relative w-full max-w-6xl mx-auto px-6 py-10 md:py-20 md:h-[1200px]">
        
        {/* Desktop Vertical S-Curve connecting line */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden md:block">
           <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="overflow-visible">
              <path d="M 220,50 C 800,50 900,300 500,550 C 100,800 200,950 780,980" fill="none" stroke="rgba(168,168,168,0.15)" strokeWidth="4" strokeDasharray="10 10" />
              <path ref={progressRefDesktop} d="M 220,50 C 800,50 900,300 500,550 C 100,800 200,950 780,980" fill="none" stroke="#D4A017" strokeWidth="6" strokeLinecap="round" />
           </svg>
        </div>
        
        {/* Mobile straight line */}
        <div className="absolute top-10 bottom-10 left-[48px] w-1 z-0 pointer-events-none md:hidden bg-text-secondary/10">
           <div ref={progressRefMobile} className="w-full bg-accent rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col space-y-16 md:space-y-0 md:block w-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className={`flex flex-row md:flex-col items-center md:absolute transition-all w-full md:w-auto ${desktopClasses[i]}`}
              >
                {/* Mobile specific number indicator (hidden on desktop) */}
                <div className="md:hidden text-accent font-mono text-xs font-bold border-2 border-accent rounded-full min-w-[24px] h-[24px] flex items-center justify-center bg-background mr-6 z-20">
                  {i+1}
                </div>

                <div className="flex flex-col items-center flex-1 md:flex-none">
                  <div className="hidden md:flex node-num text-accent font-mono text-sm mb-4 font-bold border-2 border-accent rounded-full w-8 h-8 items-center justify-center bg-background transition-colors duration-500 z-20">
                    0{i+1}
                  </div>
                  
                  {/* Car Wheel styling */}
                  <div className="node-circle w-20 h-20 md:w-32 md:h-32 shrink-0 rounded-full bg-[#0a0a0a] border-[4px] md:border-[8px] border-[#111] text-text-secondary flex items-center justify-center mb-0 md:mb-6 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer">
                    <div className="absolute inset-1 rounded-full border-2 md:border-4 border-text-secondary/10 pointer-events-none"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                      <div className="w-full h-[2px] md:h-1 bg-text-secondary absolute"></div>
                      <div className="h-full w-[2px] md:h-1 bg-text-secondary absolute"></div>
                    </div>
                    
                    <div className="absolute inset-3 md:inset-4 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                      <Icon className="w-6 h-6 md:w-10 md:h-10 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <div className="ml-6 md:ml-0 flex flex-col md:items-center w-full max-w-[200px] md:max-w-[220px]">
                  <span className="text-lg md:text-2xl font-satoshi font-bold uppercase mb-2 md:mb-4 md:text-center tracking-widest text-text-primary bg-background/50 backdrop-blur-md px-2 py-1 rounded-sm text-left w-full md:w-auto">
                    {step.title}
                  </span>
                  <span className="text-xs md:text-sm text-text-secondary md:text-center font-inter leading-relaxed bg-background/50 backdrop-blur-md px-2 py-1 rounded-sm text-left w-full md:w-auto">
                    {step.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Framework;