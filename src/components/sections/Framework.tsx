import { useEffect, useRef } from 'react';
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

const Framework = () => {
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
              borderColor: "#D4A017",
              color: "#D4A017",
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
              borderColor: "#111",
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
      
      <div id="framework-container" className="relative w-full max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-20 h-[700px] sm:h-[900px] lg:h-[1200px]">
        
        {/* Vertical S-Curve SVG (now visible on all screens) */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none block">
           <svg width="100%" height="100%" viewBox="0 0 1000 1200" preserveAspectRatio="none" className="overflow-visible">
              <path d="M 600,0 C 600,150 400,150 400,300 C 400,450 600,450 600,600 C 600,750 400,750 400,900 C 400,1050 600,1050 600,1200" fill="none" stroke="rgba(168,168,168,0.15)" strokeWidth="4" strokeDasharray="10 10" />
              <path ref={progressLineRef} d="M 600,0 C 600,150 400,150 400,300 C 400,450 600,450 600,600 C 600,750 400,750 400,900 C 400,1050 600,1050 600,1200" fill="none" stroke="#D4A017" strokeWidth="6" strokeLinecap="round" />
           </svg>
        </div>
        
        <div className="relative z-10 flex flex-col w-full h-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            
            // Mathematically perfect spacing
            const positions = [
              "left-[60%] top-[0%]",
              "left-[40%] top-[25%]",
              "left-[60%] top-[50%]",
              "left-[40%] top-[75%]",
              "left-[60%] top-[100%]"
            ];
            
            const isTextOnRight = i % 2 !== 0;

            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className={`flex items-center transition-all w-[72px] h-[72px] lg:w-[96px] lg:h-[96px] absolute -translate-x-1/2 -translate-y-1/2 ${positions[i]} z-20`}
              >
                {/* Center Node (Icon) */}
                <div className="flex relative items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 shrink-0">
                  <div className="node-circle w-full h-full rounded-full bg-[#0a0a0a] border-[3px] lg:border-[6px] border-[#111] text-text-secondary flex items-center justify-center transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent/50 cursor-pointer">
                    <div className="absolute inset-1 rounded-full border-2 border-text-secondary/10 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center rotate-45 opacity-20 pointer-events-none">
                      <div className="w-full h-[2px] bg-text-secondary absolute"></div>
                      <div className="h-full w-[2px] bg-text-secondary absolute"></div>
                    </div>
                    <div className="absolute inset-[3px] lg:inset-3 rounded-full border border-text-secondary/30 flex items-center justify-center bg-surface z-10">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 z-20 group-hover:scale-110 group-hover:text-accent transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Number floating above icon */}
                  <div className={`flex absolute -top-2 lg:-top-3 ${isTextOnRight ? '-left-2 lg:-left-3' : '-right-2 lg:-right-3'} node-num text-accent font-mono text-[10px] lg:text-sm font-bold border-2 border-[#111] rounded-full min-w-[24px] h-[24px] lg:min-w-[36px] lg:h-[36px] items-center justify-center bg-background z-30 transition-colors duration-500`}>
                    {i+1}
                  </div>
                </div>

                {/* Text Layout (Absolute positioned for all screens) */}
                <div className={`flex absolute top-1/2 -translate-y-1/2 w-[140px] sm:w-[220px] lg:w-[400px] ${isTextOnRight ? 'left-full pl-3 lg:pl-10 justify-start' : 'right-full pr-3 lg:pr-10 justify-end'}`}>
                  <div className={`flex flex-col ${isTextOnRight ? 'text-left' : 'text-right'}`}>
                    <span className="text-[11px] sm:text-base lg:text-3xl font-satoshi font-bold uppercase mb-1 lg:mb-2 tracking-widest text-text-primary">
                      {step.title}
                    </span>
                    <span className="text-[9px] sm:text-sm lg:text-base text-text-secondary font-inter leading-relaxed">
                      {step.sub}
                    </span>
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