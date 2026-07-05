import React from 'react';

const initiatives = [
  { name: "Observation Walks", phase: "Discovery", level: 1 },
  { name: "Hackathons", phase: "Prototyping", level: 2 },
  { name: "Founder Sessions", phase: "Mentorship", level: 3 },
  { name: "Discovery Labs", phase: "Synthesis", level: 2 },
];

const Matrix: React.FC = () => {
  return (
    <section id="matrix" className="w-full bg-background border-t border-text-secondary/20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-6 sm:p-10 lg:p-20 lg:border-r border-text-secondary/20 lg:sticky top-20 h-fit border-b lg:border-b-0">
          <h2 className="text-4xl lg:text-5xl font-satoshi font-bold uppercase tracking-tighter leading-[0.85] mb-6 lg:mb-10">Operations<br />Matrix</h2>
          <p className="font-inter text-text-secondary text-sm leading-relaxed max-w-xs">
            Our systemic approach is operationalized through specialized intervention channels designed to bridge the gap between curiosity and impact.
          </p>
          <div className="mt-8 lg:mt-12 p-4 lg:p-6 border border-text-secondary/10 bg-surface/50">
            <div className="text-[9px] lg:text-[10px] text-accent uppercase tracking-[0.2em] mb-2 font-mono">Current Status</div>
            <div className="text-[10px] lg:text-xs uppercase font-inter">All channels operational</div>
          </div>
        </div>
        
        <div className="lg:col-span-8">
          <div className="w-full">
            <div className="hidden lg:grid grid-cols-4 border-b border-text-secondary/20 py-8 px-12 text-[10px] uppercase tracking-[0.3em] text-text-secondary font-mono">
              <div className="col-span-2">Initiative</div>
              <div>Phase</div>
              <div>Intensity</div>
            </div>
            
            {initiatives.map((item, i) => (
              <div key={i} className="group flex flex-col lg:grid lg:grid-cols-4 border-b border-text-secondary/20 py-8 lg:py-12 px-6 lg:px-12 items-start lg:items-center hover:bg-surface transition-colors cursor-pointer relative overflow-hidden">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform" />
                <div className="lg:col-span-2 text-2xl lg:text-3xl font-satoshi font-bold uppercase tracking-tighter mb-4 lg:mb-0">{item.name}</div>
                <div className="flex w-full lg:w-auto justify-between lg:contents text-xs uppercase font-inter text-text-secondary mb-4 lg:mb-0">
                  <span className="lg:hidden text-[10px] font-mono tracking-widest text-text-secondary">Phase</span>
                  {item.phase}
                </div>
                <div className="flex w-full lg:w-auto justify-between lg:contents items-center">
                  <span className="lg:hidden text-[10px] font-mono tracking-widest text-text-secondary">Intensity</span>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: item.level }).map((_, j) => (
                      <div key={j} className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-accent" />
                    ))}
                    <span className="text-[10px] lg:text-xs font-mono text-accent">L-{item.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matrix;