import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useJoinModal } from '../../context/JoinModalContext';
import { gsap } from 'gsap';

const JoinModal: React.FC = () => {
  const { isModalOpen, closeModal } = useJoinModal();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // Animate in
      gsap.to(modalRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, delay: 0.1, ease: 'power2.out' }
      );
    } else {
      document.body.style.overflow = 'auto';
      // Animate out
      gsap.to(modalRef.current, { opacity: 0, duration: 0.3, display: 'none' });
    }
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      id: Date.now().toString(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      status: 'new',
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('movement_joins') || '[]');
      existing.push(data);
      localStorage.setItem('movement_joins', JSON.stringify(existing));
      
      setSuccess(true);
      setTimeout(() => {
        closeModal();
        setSuccess(false);
      }, 3000);
    } catch (err: any) {
      console.error("Local Storage Error:", err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isModalOpen && !success) {
      // Just keep it in DOM for GSAP to animate it out smoothly
  }

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[99999] bg-background/80 backdrop-blur-md hidden items-center justify-center p-4 sm:p-6 opacity-0"
    >
      <div 
        className="absolute inset-0 w-full h-full cursor-pointer" 
        onClick={closeModal}
      />
      
      <div 
        ref={contentRef}
        className="relative bg-surface border border-text-secondary/20 p-8 sm:p-12 w-full max-w-xl shadow-2xl opacity-0"
      >
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-text-secondary hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="font-satoshi text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-2 text-white">Join Movement</h3>
        <p className="text-text-secondary text-sm font-inter mb-8">
          Architect the future with us. Submit your details and our team will get in touch.
        </p>

        {success ? (
          <div className="bg-accent/10 border border-accent/50 p-6 text-center animate-pulse">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Request Received</h4>
            <p className="text-text-secondary text-sm">We'll contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Full Name</label>
              <input 
                required 
                type="text" 
                name="name"
                className="w-full bg-background border border-text-secondary/20 p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Email Address</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  className="w-full bg-background border border-text-secondary/20 p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  name="phone"
                  className="w-full bg-background border border-text-secondary/20 p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-text-secondary mb-2">Why do you want to join?</label>
              <textarea 
                required 
                name="message"
                rows={3}
                className="w-full bg-background border border-text-secondary/20 p-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
            
            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 bg-accent text-black px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white transition-colors duration-300 w-full disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Details'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
