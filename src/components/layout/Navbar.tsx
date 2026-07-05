import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useJoinModal } from '../../context/JoinModalContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useJoinModal();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-text-secondary/20 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-20 px-6 lg:grid lg:grid-cols-12 lg:px-0">
        <div className="lg:col-span-3 lg:border-r border-text-secondary/20 h-full flex items-center lg:px-10">
          <Link to="/" className="font-satoshi text-lg lg:text-xl font-black tracking-tighter uppercase leading-none">
            <img src="/logo.png" alt="Innovation Observatory Logo" className="h-8 lg:h-12 w-auto" />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex col-span-5 h-full">
          <Link to="/framework" className="flex-1 flex items-center justify-center border-r border-text-secondary/20 hover:bg-surface/50 transition-colors uppercase text-[10px] tracking-[0.2em] text-text-secondary hover:text-white group">
            <span className="relative overflow-hidden">
              <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Framework</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-accent">Framework</span>
            </span>
          </Link>
          <Link to="/projects" className="flex-1 flex items-center justify-center border-r border-text-secondary/20 hover:bg-surface/50 transition-colors uppercase text-[10px] tracking-[0.2em] text-text-secondary hover:text-white group">
            <span className="relative overflow-hidden">
              <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-accent">Projects</span>
            </span>
          </Link>
          <Link to="/team" className="flex-1 flex items-center justify-center border-r border-text-secondary/20 hover:bg-surface/50 transition-colors uppercase text-[10px] tracking-[0.2em] text-text-secondary hover:text-white group">
            <span className="relative overflow-hidden">
              <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">Team</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-accent">Team</span>
            </span>
          </Link>
        </nav>
        
        <div className="hidden lg:flex lg:col-span-4 h-full items-center justify-center px-4">
          <button 
            onClick={openModal}
            className="group relative w-full lg:w-auto px-6 lg:px-8 py-3 overflow-hidden border border-accent text-accent uppercase text-[10px] tracking-[0.3em] font-medium transition-none"
          >
            <span className="relative z-10 group-hover:text-black">Join Movement</span>
            <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-text-secondary/20 p-6 flex flex-col space-y-6">
          <nav className="flex flex-col space-y-4 mb-8">
            <Link to="/framework" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors text-[12px] uppercase tracking-[0.3em] text-text-secondary">Framework</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors text-[12px] uppercase tracking-[0.3em] text-text-secondary">Projects</Link>
            <Link to="/team" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors text-[12px] uppercase tracking-[0.3em] text-text-secondary">Team</Link>
          </nav>
          <button 
            onClick={() => { setIsOpen(false); openModal(); }}
            className="w-full py-4 border border-accent text-accent uppercase text-[12px] tracking-[0.3em] font-medium hover:bg-accent hover:text-black transition-colors"
          >
            Join Movement
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;