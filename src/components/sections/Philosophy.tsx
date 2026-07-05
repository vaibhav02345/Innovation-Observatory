import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: "01",
    label: "Foundations",
    title: <>Innovation<br />Begins With<br /><span className="text-accent">Observation.</span></>,
    principleNum: "001",
    text: "Innovation is not an act of spontaneous creation, but a result of systematic perception. By training the mind to see what others overlook, we uncover the latent needs that define the next generation of solutions. Our approach prioritizes deep immersion over surface-level ideation."
  },
  {
    num: "02",
    label: "Methodology",
    title: <>Observe.<br />Think.<br /><span className="text-accent">Build.</span></>,
    principleNum: "002",
    text: "True building starts after careful consideration. We observe the landscape, think through the implications, and only then construct the solution. This measured approach ensures every creation has purpose and addresses real friction."
  },
  {
    num: "03",
    label: "Outcomes",
    title: <>Innovate.<br />Execute.<br /><span className="text-accent">Impact.</span></>,
    principleNum: "003",
    text: "An idea without execution is just a theory. We bridge the gap between innovation and reality by driving execution relentlessly until we see measurable impact. Our metric for success is tangible change in the ecosystem."
  }
];

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const blocks = sectionRef.current?.querySelectorAll('.principle-block');
    blocks?.forEach((block) => {
      const text = block.querySelector('.principle-title');
      if (text) {
        gsap.fromTo(text, 
          {
            x: 100,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "top 40%",
              scrub: 1
            },
            x: 0,
            opacity: 1,
            ease: "power2.out"
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative border-t border-text-secondary/20 bg-surface/20">
      <div className="flex flex-col">
        {principles.map((p, index) => (
          <div key={index} className="principle-block grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 border-b border-text-secondary/20 py-20 sm:py-28 lg:py-40">
            <div className="px-6 sm:px-10 lg:col-span-2 lg:px-10 lg:border-r border-text-secondary/20 flex flex-row lg:flex-col items-center lg:items-start justify-start gap-4 lg:gap-0">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-satoshi font-bold text-accent leading-none">{p.num}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-text-secondary lg:mt-4 font-mono">{p.label}</span>
            </div>
            
            <div className="px-6 sm:px-10 lg:col-span-6 lg:px-20 lg:border-r border-text-secondary/20 flex flex-col justify-center">
              <h2 className="principle-title font-satoshi text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] sm:leading-[0.9] text-left lg:text-right">
                {p.title}
              </h2>
            </div>
            
            <div className="px-6 sm:px-10 lg:col-span-4 lg:p-20 flex flex-col justify-end mt-6 lg:mt-0">
              <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-text-secondary">
                // PRINCIPLE {p.principleNum}<br />
                {p.text}
              </p>
              <div className="mt-6 sm:mt-8 flex space-x-2">
                {[0, 1, 2].map((boxIdx) => (
                  <div 
                    key={boxIdx} 
                    className={`w-2 h-2 ${index === boxIdx ? 'bg-accent' : 'bg-surface border border-text-secondary/20'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;