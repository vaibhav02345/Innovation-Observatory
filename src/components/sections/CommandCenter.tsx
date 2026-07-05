import React, { useEffect, useState, useRef } from 'react';

const commands = [
  { type: 'cmd', text: "> ecell-init --boot" },
  { type: 'out', text: "Booting E-Cell Entrepreneurship sequence... [OK]" },
  { type: 'out', text: "Loading founder mindset modules... [OK]" },
  { type: 'out', text: "Connecting to ecosystem mentors... [ESTABLISHED]" },
  { type: 'cmd', text: "> run discover-problems.sh" },
  { type: 'out', text: "Scanning for real-world challenges... [142 FOUND]" },
  { type: 'cmd', text: "> execute build-startup.exe" },
  { type: 'out', text: "Compiling vision into reality... [DEPLOYED]" },
  { type: 'cmd', text: "> cat mission.txt" },
  { type: 'out', text: "\"We don't teach students what to build.\"" },
  { type: 'out', text: "\"We teach them how to discover what deserves to be built.\"" },
  { type: 'cmd', text: "> systemctl status ecosystem" },
  { type: 'out', text: "Ecosystem is thriving. Impact vectors nominal." },
  { type: 'cmd', text: "> clear" }
];

const CommandCenter: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<typeof commands>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex >= commands.length) {
        currentIndex = 0;
        setVisibleLines([]);
        return;
      }
      
      const nextCmd = commands[currentIndex];
      
      // Clear command wipes the screen
      if (nextCmd.text === "> clear") {
        setVisibleLines([]);
        currentIndex = 0;
      } else {
        setVisibleLines(prev => [...prev, nextCmd]);
        currentIndex++;
      }
      
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-40 lg:py-60 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto border border-text-secondary/20 bg-surface rounded-t-lg overflow-hidden shadow-2xl flex flex-col h-[400px] sm:h-[500px]">
        
        {/* Terminal Header */}
        <div className="bg-[#2a2a2a] px-4 sm:px-6 py-2 sm:py-3 flex items-center space-x-2 shrink-0">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]" />
          <div className="flex-1 text-center text-[8px] sm:text-[10px] font-mono text-text-secondary uppercase tracking-widest">E-Cell OS // Terminal</div>
        </div>
        
        {/* Terminal Body */}
        <div ref={containerRef} className="p-6 sm:p-8 lg:p-12 font-mono text-xs sm:text-sm lg:text-base space-y-3 sm:space-y-4 flex-1 overflow-y-auto no-scrollbar pb-10">
          {visibleLines.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type === 'cmd' ? 'text-accent' : 'text-text-secondary'}`}>
              {line.text}
            </div>
          ))}
          
          <div className="pt-2">
            <span className="text-text-primary terminal-line">Ready to architect the future?</span>
            <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-accent animate-pulse ml-2 align-middle" />
          </div>
        </div>
        
        {/* Footer actions */}
        <div className="p-6 sm:p-8 lg:p-12 pt-0 border-t border-text-secondary/10 bg-surface/50 shrink-0">
          <button className="bg-accent text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 uppercase font-bold text-[10px] sm:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.2em] hover:bg-white transition-colors duration-300 w-full sm:w-auto mt-4">
            Join the E-Cell
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default CommandCenter;