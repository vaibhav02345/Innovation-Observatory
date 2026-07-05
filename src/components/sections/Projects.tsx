import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: -80,
      ease: "none"
    });

    const onMouseEnter = () => {
      gsap.to(imgRef.current, { grayscale: 0, brightness: 1, duration: 0.8, ease: "power2.out" });
    };
    const onMouseLeave = () => {
      gsap.to(imgRef.current, { grayscale: 1, brightness: 0.5, duration: 0.8, ease: "power2.out" });
    };

    const container = sectionRef.current?.querySelector('.group');
    container?.addEventListener('mouseenter', onMouseEnter);
    container?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container?.removeEventListener('mouseenter', onMouseEnter);
      container?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 lg:py-60 border-b border-text-secondary/20 swiss-grid-lines">
      <div className="px-6 lg:px-20 mb-12 lg:mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
        <div>
          <span className="text-accent text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] mb-4 block">Selected Works</span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold uppercase tracking-tighter">Featured Projects</h2>
        </div>
        <div className="text-left sm:text-right text-text-secondary text-[10px] lg:text-xs uppercase tracking-[0.2em] font-mono">
          Showing 01 / 04
        </div>
      </div>
      
      <div className="px-6 lg:px-20 pb-20 lg:pb-40">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          <div className="lg:col-span-9 relative overflow-hidden aspect-video bg-surface">
            <div className="project-img-wrapper w-full h-full scale-[1.2]">
              <img 
                ref={imgRef}
                src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?auto=format&w=1600&q=80&fit=crop" 
                alt="Precision engineered mechanical part dark lighting" 
                className="w-full h-full object-cover grayscale brightness-50" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>
          
          <div className="lg:col-span-4 lg:col-start-8 relative lg:absolute bottom-0 lg:bottom-[-80px] z-20 bg-surface p-6 lg:p-12 border border-text-secondary/20 shadow-2xl -mt-10 mx-4 lg:mx-0 lg:mt-0">
            <span className="text-accent text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.3em] mb-4 lg:mb-6 block">Project: Chronos-01</span>
            <h3 className="text-2xl lg:text-3xl font-satoshi font-bold uppercase mb-4 lg:mb-6 tracking-tight">Precision Mapping Engine</h3>
            <p className="text-text-secondary text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8">
              A real-time data visualization tool for mapping ecosystem friction points in urban environments. Designed for rapid problem identification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-[8px] lg:text-[9px] uppercase tracking-widest text-text-secondary font-mono border-t border-text-secondary/10 pt-4 lg:pt-6">
              <div>Problem: Visibility</div>
              <div>Solution: Scan-Sync</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;