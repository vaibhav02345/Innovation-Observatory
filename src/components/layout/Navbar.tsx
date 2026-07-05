import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-text-secondary/20 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-20 px-6 lg:grid lg:grid-cols-12 lg:px-0">
        <div className="lg:col-span-3 lg:border-r border-text-secondary/20 h-full flex items-center lg:px-10">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="Innovation Observatory Logo" className="h-10 sm:h-12 w-auto" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex lg:col-span-6 border-r border-text-secondary/20 h-full items-center justify-center space-x-12 font-inter text-[10px] uppercase tracking-[0.3em] text-text-secondary">
          <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
          <a href="#framework" className="hover:text-accent transition-colors">Framework</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#team" className="hover:text-accent transition-colors">Team</a>
        </nav>
        
        <div className="hidden lg:flex lg:col-span-3 h-full items-center justify-center px-4">
          <button className="group relative w-full lg:w-auto px-6 lg:px-8 py-3 overflow-hidden border border-accent text-accent uppercase text-[10px] tracking-[0.3em] font-medium transition-none">
            <span className="relative z-10 group-hover:text-black">Join Movement</span>
            <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-text-secondary/20 p-6 flex flex-col space-y-6">
          <nav className="flex flex-col space-y-6 font-inter text-[12px] uppercase tracking-[0.3em] text-text-secondary">
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Philosophy</a>
            <a href="#framework" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Framework</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Projects</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Team</a>
          </nav>
          <button className="w-full py-4 border border-accent text-accent uppercase text-[12px] tracking-[0.3em] font-medium hover:bg-accent hover:text-black transition-colors">
            Join Movement
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;