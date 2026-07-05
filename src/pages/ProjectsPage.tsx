import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Projects from '../components/sections/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-background text-text-primary font-inter min-h-screen relative overflow-x-hidden pt-20">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
