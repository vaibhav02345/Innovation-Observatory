import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 lg:py-20 px-6 lg:px-20 border-t border-text-secondary/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="font-satoshi text-xl lg:text-2xl font-black uppercase tracking-tighter mb-4 lg:mb-6">
            Innovation<br />Observatory
          </div>
          <p className="text-xs lg:text-sm text-text-secondary leading-relaxed max-w-xs font-inter">
            A precision-focused landing page for a student-led innovation and entrepreneurship ecosystem. Built for those who see beyond the surface.
          </p>
        </div>
        
        <div className="lg:col-span-2">
          <div className="text-[9px] lg:text-[10px] font-mono text-accent uppercase tracking-widest mb-4 lg:mb-6">Navigation</div>
          <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-text-secondary font-inter">
            <li><a href="#" className="hover:text-white transition-colors">Framework</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Operations</a></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          <div className="text-[9px] lg:text-[10px] font-mono text-accent uppercase tracking-widest mb-4 lg:mb-6">Social</div>
          <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-text-secondary font-inter">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
          </ul>
        </div>
        
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="text-[9px] lg:text-[10px] font-mono text-accent uppercase tracking-widest mb-4 lg:mb-6">Newsletter</div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <input type="email" placeholder="Email sequence" className="bg-transparent border border-text-secondary/20 px-4 py-3 text-xs lg:text-sm flex-1 outline-hidden focus:border-accent font-mono" />
            <button className="bg-surface border border-text-secondary/20 sm:border-l-0 px-6 py-3 text-[9px] lg:text-[10px] uppercase font-mono tracking-widest hover:bg-accent hover:text-black transition-all">Join</button>
          </div>
          <p className="text-[8px] lg:text-[9px] text-text-secondary/50 mt-4 uppercase tracking-widest">Weekly mission updates only. No noise.</p>
        </div>
      </div>
      
      <div className="mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-text-secondary/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[8px] lg:text-[9px] font-mono text-text-secondary uppercase tracking-[0.2em] sm:tracking-[0.4em] text-center sm:text-left">
        <div>© 2024 Innovation Observatory. Precision Engineered.</div>
        <div>51.5074° N, 0.1278° W</div>
      </div>
    </footer>
  );
};

export default Footer;