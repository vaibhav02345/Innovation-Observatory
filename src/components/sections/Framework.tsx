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
  const progressLineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Vertical straight line drawing
    if (progressLineRef.current) {
      gsap.fromTo(progressLineRef.current, 
        { height: "0%" },
        {
          height: "100%",
          scrollTrigger: {
            trigger: '#framework-container',
            start: "top 50%",
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
      
      <div id="framework-container" className="relative w-full max-w-4xl mx-auto px-6 py-10">
        
        {/* Vertical straight strip */}
        <div className="absolute top-10 bottom-10 left-[48px] md:left-[80px] w-1 z-0 bg-text-secondary/10 rounded-full">
           <div ref={progressLineRef} className="w-full bg-accent rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col space-y-16 w-full">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className="flex flex-row items-center transition-all w-full"
              >
                {/* Timeline Number Node */}
                <div className="node-num text-accent font-mono text-sm md:text-lg font-bold border-2 border-accent rounded-full min-w-[40px] md:min-w-[56px] h-[40px] md:h-[56px] flex items-center justify-center bg-background z-20 mr-6 md:mr-12 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {i+1}
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    {/* Car Wheel styling */}
                    <div className="node-circle w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full bg-[#0a0a0a] border-[3px] md:border-[6px] border-[#111] text-text-secondary flex items-center justify-center mb-4 md:mb-0 md:mr-8 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer">
                      <div className="absolute inset-1 rounded-full border-2 border-text-secondary/10 pointer-events-none"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                        <div className="w-full h-[2px] bg-text-secondary absolute"></div>
                        <div className="h-full w-[2px] bg-text-secondary absolute"></div>
                      </div>
                      
                      <div className="absolute inset-2 md:inset-3 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                        <Icon className="w-5 h-5 md:w-8 md:h-8 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col w-full">
                      <span className="text-xl md:text-3xl font-satoshi font-bold uppercase mb-2 tracking-widest text-text-primary">
                        {step.title}
                      </span>
                      <span className="text-sm md:text-base text-text-secondary font-inter leading-relaxed max-w-md">
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