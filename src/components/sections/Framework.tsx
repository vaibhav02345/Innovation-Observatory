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
              <path d="M 500,50 C 700,150 700,250 500,325 C 300,400 300,500 500,600 C 700,700 700,800 500,875 C 300,950 300,1050 500,1150" fill="none" stroke="rgba(168,168,168,0.15)" strokeWidth="4" strokeDasharray="10 10" />
              <path ref={progressLineRef} d="M 500,50 C 700,150 700,250 500,325 C 300,400 300,500 500,600 C 700,700 700,800 500,875 C 300,950 300,1050 500,1150" fill="none" stroke="#D4A017" strokeWidth="6" strokeLinecap="round" />
           </svg>
        </div>
        
        {/* Mobile straight line */}
        <div className="absolute top-10 bottom-10 left-[48px] w-1 z-0 pointer-events-none md:hidden bg-text-secondary/10 rounded-full">
           <div ref={mobileProgressRef} className="w-full bg-accent rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col space-y-16 md:space-y-0 md:block w-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            
            // For desktop, alternate between left and right positions
            const isRightSide = i % 2 === 0;
            const desktopClasses = isRightSide 
                ? "md:absolute md:left-[55%] md:w-[40%] flex-row" 
                : "md:absolute md:right-[55%] md:w-[40%] md:flex-row-reverse flex-row";

            // Y-positions matching the SVG curves
            const yPositions = ["md:top-[2%]", "md:top-[25%]", "md:top-[48%]", "md:top-[71%]", "md:top-[93%]"];

            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className={`flex items-center transition-all w-full md:w-auto ${desktopClasses} ${yPositions[i]}`}
              >
                {/* Number Node */}
                <div className={`node-num text-accent font-mono text-sm md:text-lg font-bold border-2 border-accent rounded-full min-w-[40px] md:min-w-[56px] h-[40px] md:h-[56px] flex items-center justify-center bg-background z-20 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] mr-6 md:mx-6`}>
                  {i+1}
                </div>

                <div className={`flex flex-col flex-1 ${!isRightSide ? "md:items-end md:text-right" : ""}`}>
                  <div className={`flex items-start md:items-center ${!isRightSide ? "md:flex-row-reverse" : "flex-row"} w-full`}>
                    
                    {/* Icon Circle */}
                    <div className={`node-circle w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-[#0a0a0a] border-[3px] md:border-[6px] border-[#111] text-text-secondary flex items-center justify-center mb-4 md:mb-0 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer ${isRightSide ? "md:mr-6 mr-6" : "md:ml-6 mr-6 md:mr-0"}`}>
                      <div className="absolute inset-1 rounded-full border-2 border-text-secondary/10 pointer-events-none"></div>
                      <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                        <div className="w-full h-[2px] bg-text-secondary absolute"></div>
                        <div className="h-full w-[2px] bg-text-secondary absolute"></div>
                      </div>
                      <div className="absolute inset-2 md:inset-3 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Text Details */}
                    <div className="flex flex-col w-full">
                      <span className="text-xl md:text-3xl font-satoshi font-bold uppercase mb-2 tracking-widest text-text-primary">
                        {step.title}
                      </span>
                      <span className="text-sm md:text-base text-text-secondary font-inter leading-relaxed max-w-sm">
                        {step.sub}
                      </span>
                    </div>
                  </div>
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