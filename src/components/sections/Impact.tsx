import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Students Mentored", value: 520, suffix: "+" },
  { label: "Problems Mapped", value: 142, suffix: "" },
  { label: "Prototypes Built", value: 86, suffix: "" },
  { label: "Active Ventures", value: 24, suffix: "" },
];

const events = [
  { date: "Oct 12 — 15, 2024", title: "The Precision Hackathon", desc: "72 hours of intensive problem synthesis and rapid prototyping.", active: true },
  { date: "Nov 05, 2024", title: "Discovery Summit", desc: "Keynote sessions from industry leaders on \"The Art of Noticing\".", active: false },
  { date: "Nov 20, 2024", title: "Ecosystem Walk #24", desc: "Field research immersion in the local industrial district.", active: false },
];

const Impact: React.FC = () => {
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    countersRef.current.forEach((counter, i) => {
      if (counter) {
        const target = stats[i].value;
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: {
            trigger: '#impact',
            start: "top 80%",
          },
          val: target,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            counter.innerText = Math.floor(obj.val) + stats[i].suffix;
          }
        });
      }
    });
  }, []);

  return (
    <section id="impact" className="relative py-20 lg:py-40 bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        <div className="lg:col-span-6 px-6 lg:px-20 lg:border-r border-text-secondary/20 mb-20 lg:mb-0">
          <span className="text-accent text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] mb-8 lg:mb-12 block">Ecosystem Impact</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-text-secondary/10 border border-text-secondary/10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-background p-8 lg:p-10 flex flex-col justify-center border-t sm:border-t-0 sm:border-b border-text-secondary/10 first:border-t-0 sm:even:border-l sm:odd:border-r-0">
                <div 
                  ref={el => countersRef.current[i] = el}
                  className="text-4xl lg:text-6xl font-satoshi font-bold mb-2"
                >0</div>
                <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-text-secondary font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-6 px-6 lg:px-20">
          <span className="text-accent text-[10px] lg:text-xs font-mono uppercase tracking-[0.4em] mb-8 lg:mb-12 block">Upcoming Operations</span>
          <div className="space-y-8 lg:space-y-12">
            {events.map((event, i) => (
              <div key={i} className={`relative pl-8 lg:pl-12 border-l ${event.active ? 'border-accent/40' : 'border-text-secondary/20'}`}>
                <div className={`absolute left-[-4px] top-0 w-2 h-2 ${event.active ? 'bg-accent' : 'bg-text-secondary/40'}`} />
                <div className={`text-[9px] lg:text-[10px] font-mono mb-2 uppercase tracking-widest ${event.active ? 'text-accent' : 'text-text-secondary'}`}>{event.date}</div>
                <h4 className="text-lg lg:text-xl font-satoshi font-bold uppercase tracking-tight">{event.title}</h4>
                <p className="text-xs lg:text-sm text-text-secondary mt-2">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;