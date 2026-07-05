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
  const progressLineRef = useRef<SVGPathElement>(null);
  const mobileProgressRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Desktop vertical S-curve drawing
    if (progressLineRef.current) {
      const length = progressLineRef.current.getTotalLength();
      gsap.set(progressLineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(progressLineRef.current, {
        scrollTrigger: {
          trigger: '#framework-container',
          start: "top 50%",
          end: "bottom 80%",
          scrub: 0.5
        },
        strokeDashoffset: 0,
        ease: "none"
      });
    }

    // Mobile straight line drawing
    if (mobileProgressRef.current) {
      gsap.fromTo(mobileProgressRef.current, 
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
      
      <div id="framework-container" className="relative w-full max-w-6xl mx-auto px-6 py-10 md:py-20 md:h-[1300px]">
        
        {/* Desktop Vertical S-Curve SVG */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden md:block">
           <svg width="100%" height="100%" viewBox="0 0 1000 1200" preserveAspectRatio="none" className="overflow-visible">
              <path d="M 700,60 C 600,150 300,200 300,324 C 300,450 700,450 700,600 C 700,750 300,750 300,876 C 300,1000 700,1050 700,1140" fill="none" stroke="rgba(168,168,168,0.15)" strokeWidth="4" strokeDasharray="10 10" />
              <path ref={progressLineRef} d="M 700,60 C 600,150 300,200 300,324 C 300,450 700,450 700,600 C 700,750 300,750 300,876 C 300,1000 700,1050 700,1140" fill="none" stroke="#D4A017" strokeWidth="6" strokeLinecap="round" />
           </svg>
        </div>
        
        {/* Mobile straight line */}
        <div className="absolute top-10 bottom-10 left-[48px] w-1 z-0 pointer-events-none md:hidden bg-text-secondary/10 rounded-full">
           <div ref={mobileProgressRef} className="w-full bg-accent rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col space-y-16 md:space-y-0 md:block w-full md:h-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            
            // X: 70%, 30%, 70%, 30%, 70%
            // Y: 5%, 27%, 50%, 73%, 95%
            const desktopPositions = [
              "md:left-[70%] md:top-[5%]",
              "md:left-[30%] md:top-[27%]",
              "md:left-[70%] md:top-[50%]",
              "md:left-[30%] md:top-[73%]",
              "md:left-[70%] md:top-[95%]"
            ];
            
            // For nodes at 30%, text is on right. For nodes at 70%, text is on left.
            const isTextOnRight = i % 2 !== 0;

            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className={`flex items-center transition-all w-full md:absolute md:-translate-x-1/2 md:-translate-y-1/2 flex-row ${desktopPositions[i]} ${isTextOnRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Mobile specific Number Node (hidden on desktop) */}
                <div className="md:hidden node-num text-accent font-mono text-sm font-bold border-2 border-accent rounded-full min-w-[40px] h-[40px] flex items-center justify-center bg-background z-20 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] mr-6">
                  {i+1}
                </div>

                {/* Center Node (Icon) */}
                <div className="flex flex-col md:flex-row items-center relative z-20">
                  <div className="node-circle w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full bg-[#0a0a0a] border-[3px] md:border-[6px] border-[#111] text-text-secondary flex items-center justify-center transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer">
                    <div className="absolute inset-1 rounded-full border-2 border-text-secondary/10 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                      <div className="w-full h-[2px] bg-text-secondary absolute"></div>
                      <div className="h-full w-[2px] bg-text-secondary absolute"></div>
                    </div>
                    <div className="absolute inset-2 md:inset-3 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Desktop Number floating above icon */}
                  <div className={`hidden md:flex absolute -top-4 ${isTextOnRight ? '-left-4' : '-right-4'} node-num text-accent font-mono text-sm font-bold border-2 border-accent rounded-full min-w-[40px] h-[40px] items-center justify-center bg-background z-30 transition-colors duration-500`}>
                    {i+1}
                  </div>
                </div>

                {/* Text Layout (points inward toward center to avoid intersecting line) */}
                <div className={`flex w-full md:w-[400px] ${isTextOnRight ? 'justify-start pl-6 md:pl-8' : 'justify-end pr-6 md:pr-8 hidden md:flex'}`}>
                  <div className={`flex flex-col ${isTextOnRight ? 'text-left' : 'text-right'}`}>
                    <span className="text-xl md:text-3xl font-satoshi font-bold uppercase mb-2 tracking-widest text-text-primary">
                      {step.title}
                    </span>
                    <span className={`text-sm md:text-base text-text-secondary font-inter leading-relaxed max-w-sm ${isTextOnRight ? 'mr-auto' : 'ml-auto'}`}>
                      {step.sub}
                    </span>
                  </div>
                </div>
                
                {/* Mobile Text (hidden on Desktop) */}
                <div className="flex flex-col md:hidden w-full ml-6">
                  <span className="text-xl font-satoshi font-bold uppercase mb-2 tracking-widest text-text-primary">
                    {step.title}
                  </span>
                  <span className="text-sm text-text-secondary font-inter leading-relaxed">
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