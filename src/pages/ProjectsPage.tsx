import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Projects from '../components/sections/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-background text-text-primary font-inter min-h-screen relative overflow-x-hidden">
      <Navbar />
      <div className="pt-40 pb-10 text-center">
         <img src="/logo.png" alt="Logo" className="h-24 mx-auto mb-8 opacity-80" />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
