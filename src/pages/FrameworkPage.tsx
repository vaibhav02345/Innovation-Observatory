import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Framework from '../components/sections/Framework';

const FrameworkPage: React.FC = () => {
  return (
    <div className="bg-background text-text-primary font-inter min-h-screen relative overflow-x-hidden pt-20">
      <Navbar />
      <Framework />
      <Footer />
    </div>
  );
};

export default FrameworkPage;
