import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FrameworkPage from './pages/FrameworkPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import AdminPanel from './components/sections/AdminPanel';
import { JoinModalProvider } from './context/JoinModalContext';

const App: React.FC = () => {
  return (
    <JoinModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </JoinModalProvider>
  );
};

export default App;