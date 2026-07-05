import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Lightbulb, ClipboardCheck, Rocket, Flag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. Observe",
    sub: "We spot challenges everywhere—on campus, in the community, and beyond. This is where innovation begins.",
    icon: Eye
  },
  {
    title: "2. Understand",
    sub: "We dive deep into the problem. We ask the right questions and conduct thorough research to ensure we're solving the real issue.",
    icon: Lightbulb
  },
  {
    title: "3. Validate",
    sub: "Before building, we test our ideas. We gather feedback, validate assumptions, and pivot if necessary. Data drives our decisions.",
    icon: ClipboardCheck
  },
  {
    title: "4. Build",
    sub: "This is where the magic happens. We design, develop, and iterate rapidly to create robust and scalable solutions.",
    icon: Rocket
  },
  {
    title: "5. Launch",
    sub: "We bring our solutions to the world. We monitor, learn, and keep improving. Impact is the ultimate goal.",
    icon: Flag
  }
];

const Framework = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animate the central line growing downwards
      gsap.to(progressLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        }
      });

      // 2. Animate nodes popping in and highlighting
      nodesRef.current.forEach((node) => {
        if (!node) return;
        
        // Node container fade/slide up
        gsap.fromTo(node, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Highlight effect when line reaches node
        const circle = node.querySelector('.node-circle');
        const num = node.querySelector('.node-num');
        
        gsap.to([circle, num], {
          borderColor: "#D4A017",
          boxShadow: "0 0 30px rgba(212, 160, 23, 0.4)",
          color: "#D4A017",
          duration: 0.5,
          scrollTrigger: {
            trigger: node,
            start: "top 60%", // Triggers when the line passes through it
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="framework" className="relative py-20 lg:py-40 bg-surface/20 border-t border-b border-text-secondary/20 overflow-hidden">
      <div className="px-6 lg:px-20 mb-16 lg:mb-32 text-center lg:text-left">
        <h2 className="text-[10px] lg:text-xs tracking-[0.5em] uppercase text-accent mb-4 lg:mb-6 font-mono">Our Framework</h2>
        <div className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold tracking-tighter uppercase mb-6">A simple journey<br />from observation<br /><span className="text-accent">to impact.</span></div>
      </div>
      
      <div id="framework-container" ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 lg:px-6 h-[800px] sm:h-[1000px] lg:h-[1200px]">
        
        {/* Straight Vertical Center Line */}
        <div className="absolute top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-1 lg:w-2 bg-text-secondary/10 rounded-full z-0">
           <div ref={progressLineRef} className="w-full bg-accent rounded-full h-0"></div>
        </div>
        
        <div className="relative z-10 flex flex-col w-full h-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            
            // X is strictly 50% for all nodes
            // Y is distributed evenly from 5% to 95%
            const positions = [
              "left-[50%] top-[5%]",
              "left-[50%] top-[27.5%]",
              "left-[50%] top-[50%]",
              "left-[50%] top-[72.5%]",
              "left-[50%] top-[95%]"
            ];
            
            // Text alternates left and right
            const isTextOnRight = i % 2 !== 0;

            return (
              <div 
                key={i}
                ref={el => nodesRef.current[i] = el}
                className={`flex items-center transition-all w-[72px] h-[72px] lg:w-[96px] lg:h-[96px] absolute -translate-x-1/2 -translate-y-1/2 ${positions[i]} z-20`}
              >
                {/* Center Node (Icon) pinned perfectly to the center line */}
                <div className="flex relative items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 shrink-0 mx-auto">
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

                {/* Text Layout (Absolute positioned) */}
                <div className={`flex absolute top-1/2 -translate-y-1/2 w-[140px] sm:w-[260px] lg:w-[400px] ${isTextOnRight ? 'left-full pl-3 sm:pl-6 lg:pl-10 justify-start' : 'right-full pr-3 sm:pr-6 lg:pr-10 justify-end'}`}>
                  <div className={`flex flex-col ${isTextOnRight ? 'text-left' : 'text-right'}`}>
                    <span className="text-[11px] sm:text-lg lg:text-3xl font-satoshi font-bold uppercase mb-1 lg:mb-2 tracking-widest text-text-primary">
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