import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Team from '../components/sections/Team';

const TeamPage: React.FC = () => {
  return (
    <div className="bg-background text-text-primary font-inter min-h-screen relative overflow-x-hidden pt-20">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
